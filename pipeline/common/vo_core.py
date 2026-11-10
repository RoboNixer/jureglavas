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
def shout(a):
    a=peq(a,2500,4,0.9);a=peq(a,250,-2,0.8);return np.tanh(a/np.max(np.abs(a))*2.2)/np.tanh(2.2)
def goofy(a): return peq(peq(a,1300,6,1.4),200,-4,0.7)
out=[];tl=[];t=0.0
for gap,spec,sp_,text,tag in S:
    v=spec.split(':')[0];mod=spec.split(':')[1] if ':' in spec else ''
    if v in PITCH:
        f=PITCH[v];a,_=K.create(text,voice=VO[v],speed=sp_/f,lang='en-us');a=trim(a);a=pitch(a,f)
        if v=='G': a=goofy(a)
        if v=='D': a=peq(a,120,3,0.8)
        if v=='K': a=peq(a,1800,3,1.0)
        g=.8
    else:
        a,_=K.create(text,voice=VO[v],speed=sp_,lang='en-gb' if VO[v].startswith('b') else 'en-us');a=trim(a);g=.75 if v=='N' else .8
    a=a/np.max(np.abs(a))
    if mod=='w': a=whisper(a);g=.55
    if mod=='s': a=shout(a);g=1.0
    a=a*g
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
