import numpy as np, soundfile as sf, json, os
from scipy import signal
from kokoro_onnx import Kokoro
TTS=os.path.expanduser('~/tts')
K=Kokoro(TTS+'/kokoro-fp32.onnx',TTS+'/voices.npz')
SR=24000
exec(open('script.py').read())   # defines S, and optionally VO/PITCH overrides, CAPFIX
VO_D={'N':'af_heart','G':'am_puck','D':'am_onyx','K':'af_sky','F':'af_bella','M':'am_michael','B':'bm_george'}
PITCH_D={'G':1.22,'D':0.84,'K':1.3,'F':1.1}
VO=dict(VO_D,**globals().get('VOX',{}));PITCH=dict(PITCH_D,**globals().get('PITCHX',{}))
LAB={'N':'her','G':'gary','D':'death','K':'kid','F':'fairy','M':'him','B':'him'}
# --- Storyteller voice v2 (2026-11-11, owner: "voice must be heard all the time, no whispering, real storyteller") ---
# * ':w' is no longer a whisper: it is a full-voice, slightly slower "soft" line. ':s' is an energetic line, not a distorted shout.
# * every line is levelled to the same loudness, so nothing drops out under the music.
# * speeds are capped (MAXSP) so the narrator never rushes. VO values may be blends: 'af_heart*0.6+af_bella*0.4'.
MAXSP=globals().get('MAXSP',1.32)   # v3: owner wants it faster and more dynamic
def style(name):
    if '+' not in name and '*' not in name: return name
    acc=None
    for part in name.split('+'):
        n,w=(part.split('*')+['1'])[:2];st=K.get_voice_style(n.strip())*float(w);acc=st if acc is None else acc+st
    return acc
def level(a,target):
    e=np.abs(a);act=a[e>0.05*e.max()];r=np.sqrt(np.mean(act**2))+1e-9;a=a*(target/r)
    return np.tanh(a/0.9)*0.9 if np.max(np.abs(a))>0.9 else a
# --- expressive(): makes a line less monotone by stretching its pitch movement (k), moving its register (st semitones)
# and exaggerating loud/quiet syllables (ek). Uses the WORLD vocoder (pip install pyworld). Needs pyworld; without it the line is left as it is. Per-line register comes from REG={'tag':+2,...} in script.py (semitones).
EXPR=globals().get('EXPR',1.55);REG=globals().get('REG',{})   # on by default (owner picked this over the flat voice); EXPR=0 in script.py turns it off
AUTOREG=[0.0,1.0,-1.0,0.5,-2.0,1.5]   # narrator register per line (semitones) when REG has no entry, so no two lines sit on the same note
def expressive(a,k=1.5,st=0.0,ek=1.25):
    try: import pyworld as pw
    except Exception: print('pyworld missing: pip install pyworld --break-system-packages');return a
    x=a.astype(np.float64);f0,t=pw.harvest(x,SR,f0_floor=70,f0_ceil=600,frame_period=5.0);sp=pw.cheaptrick(x,f0,t,SR);ap=pw.d4c(x,f0,t,SR)
    v=f0>0
    if v.sum()<5: return a
    lm=np.median(np.log(f0[v]));f1=f0.copy();f1[v]=np.exp(lm+k*(np.log(f0[v])-lm)+st*np.log(2)/12);f1[v]=np.clip(f1[v],75,560)
    y=pw.synthesize(f1,sp,ap,SR,5.0)[:len(x)]
    n=int(.03*SR);e=np.sqrt(np.convolve(y**2,np.ones(n)/n,'same'))+1e-6;ref=np.median(e[e>0.1*e.max()]);g=np.clip((e/ref)**(ek-1),0.5,1.8)
    return (y*g).astype(a.dtype)
def trim(a,th=0.008):
    i=np.where(np.abs(a)>th)[0];return a[max(0,i[0]-int(.012*SR)):i[-1]+int(.06*SR)]
def peq(x,f0,g_db,q):
    A=10**(g_db/40);w=2*np.pi*f0/SR;al=np.sin(w)/(2*q)
    b=[1+al*A,-2*np.cos(w),1-al*A];a=[1+al/A,-2*np.cos(w),1-al/A];return signal.lfilter(np.array(b)/a[0],np.array(a)/a[0],x)
def pitch(a,f):
    from fractions import Fraction
    fr=Fraction(1/f).limit_denominator(50);return signal.resample_poly(a,fr.numerator,fr.denominator)
def whisper(a):
    f,t,Z=signal.stft(a,SR,nperseg=1024,noverlap=768)
    M=np.abs(Z);k=np.ones(9)/9;Ms=np.apply_along_axis(lambda c:np.convolve(c,k,'same'),0,M)
    ph=np.exp(1j*np.random.default_rng(7).uniform(0,2*np.pi,Z.shape))
    _,w=signal.istft(Ms*ph,SR,nperseg=1024,noverlap=768);w=w[:len(a)]
    b,aa=signal.butter(2,500/(SR/2),'high');w=signal.lfilter(b,aa,w)
    w=w/np.max(np.abs(w))*np.max(np.abs(a));o=.72*w+.28*a
    return peq(o,4500,3,0.8)
def shout(a): return peq(a,2800,2.0,0.9)   # brighter and a touch louder, no distortion
def goofy(a): return peq(peq(a,1300,6,1.4),200,-4,0.7)
out=[];tl=[];t=0.0
for gap,spec,sp_,text,tag in S:
    v=spec.split(':')[0];mod=spec.split(':')[1] if ':' in spec else ''
    sp_=min(sp_,MAXSP)*(0.9 if mod=='w' else 1.0)   # ':w' = slow dramatic line at full voice (never a whisper)
    if v in PITCH:
        f=PITCH[v];a,_=K.create(text,voice=style(VO[v]),speed=sp_/f,lang='en-us');a=trim(a);a=pitch(a,f)
        if v=='G': a=goofy(a)
        if v=='D': a=peq(a,120,3,0.8)
        if v=='K': a=peq(a,1800,3,1.0)
        g=.8
    else:
        a,_=K.create(text,voice=style(VO[v]),speed=sp_,lang='en-gb' if VO[v].startswith('b') else 'en-us');a=trim(a);g=.8
    if EXPR and v not in PITCH: a=expressive(a,EXPR,REG.get(tag,2.0 if mod=='s' else (-1.5 if mod=='w' else AUTOREG[len(tl)%len(AUTOREG)])))
    if mod=='s': a=shout(a)
    a=level(a,0.16*(1.4 if mod=='s' else 1.0))   # ':s' = punchy line, about 3 dB louder
    lab=LAB[v]+(('_'+mod) if mod else '')
    cap=text.replace('Memo Pie','Memopai')
    for k_,v_ in globals().get('CAPFIX',{}).items(): cap=cap.replace(k_,v_)
    t+=gap;tl.append(dict(t0=round(t,3),t1=round(t+len(a)/SR,3),text=cap,tag=tag,voice=lab));out.append((t,a));t+=len(a)/SR
T=t+globals().get('TAIL',1.6)
v=np.zeros(int(T*SR))
for st,a in out: i=int(st*SR);v[i:i+len(a)]+=a
b,a=signal.butter(2,70/(SR/2),'high');v=signal.lfilter(b,a,v)
v=peq(v,180,2.0,0.8); v=peq(v,3200,1.8,1.0); v=peq(v,7500,-1.5,1.2)
v=v/np.max(np.abs(v))*0.95
sf.write('vo.wav',v.astype(np.float32),SR);json.dump(dict(total=round(T,2),lines=tl),open('timeline.json','w'),indent=1)
for l in tl: print(l['t0'],l['t1'],l['tag'],l['voice'],l['text'])
print('TOTAL',round(T,2))
