import numpy as np, soundfile as sf, json
from scipy import signal
TL=json.load(open('timeline.json'));L=TL['lines'];T=lambda k:[l for l in L if l['tag']==k][0]['t0'];E=lambda k:[l for l in L if l['tag']==k][0]['t1']
SR=44100;DUR=TL['total'];N=int(SR*DUR);mus=np.zeros(N);sfx=np.zeros(N);rng=np.random.default_rng(32)
def add(buf,s,t,g=1.0):
    i=int(t*SR);j=min(N,i+len(s))
    if 0<=i<N: buf[i:j]+=s[:j-i]*g
hz=lambda n:440*2**((n-69)/12)
def env(k,a,d): t=np.arange(k)/SR;return np.minimum(t/a,1)*np.exp(-t/d)
def tone(f,dur,d,h=(1,),a=.003): k=int(dur*SR);t=np.arange(k)/SR;return sum(np.sin(2*np.pi*f*m*t)/(i+1) for i,m in enumerate(h))*env(k,a,d)
lp=lambda x,fc:signal.lfilter(*signal.butter(2,fc/(SR/2)),x)
bp=lambda x,a,b:signal.lfilter(*signal.butter(2,[a/(SR/2),b/(SR/2)],'band'),x)
noise=lambda d:rng.standard_normal(int(d*SR))
def brass(n,dur,g=.25,vib=0):
    k=int(dur*SR);t=np.arange(k)/SR;f=hz(n)*(1+vib*np.sin(2*np.pi*5*t)*.01);ph=2*np.pi*np.cumsum(f)/SR
    s=sum(np.sin(ph*h)/h**.8 for h in range(1,8));e=np.minimum(t/.03,1)*np.minimum((dur-t)/.06,1)
    return lp(s,2400)*e*g
def snare(): x=noise(.18);return bp(x,1500,7000)*env(len(x),.001,.05)*.6+tone(190,.18,.05)*.4
def kick(): k=int(.3*SR);t=np.arange(k)/SR;return np.sin(2*np.pi*np.cumsum(50+120*np.exp(-t*30))/SR)*env(k,.001,.12)
def impact(g=1): k=int(1.2*SR);t=np.arange(k)/SR;return (np.sin(2*np.pi*np.cumsum(35+90*np.exp(-t*10))/SR)*np.exp(-t*2.4)+noise(1.2)*np.exp(-t*14)*.3)*g
def whoosh(d,g=.6): k=int(d*SR);return lp(noise(d),2500)*np.sin(np.linspace(0,np.pi,k))**2*g
def boing(): k=int(.35*SR);t=np.arange(k)/SR;f=220+300*(1-np.exp(-t*12))+40*np.sin(t*60)*np.exp(-t*6);return np.sin(2*np.pi*np.cumsum(f)/SR)*env(k,.003,.12)*.5
def scratch(): k=int(.35*SR);tt=np.arange(k)/SR;return np.sin(2*np.pi*np.cumsum(900-2400*tt)/SR)*np.exp(-tt*5)*.35+lp(noise(.35),3000)*.2*np.exp(-tt*8)
def trombone(notes,dur=.45): return np.concatenate([brass(n,dur if i<len(notes)-1 else dur*2.2,.3,vib=1 if i==len(notes)-1 else 0) for i,n in enumerate(notes)])
def waltz(a,z,key=0,g=1.0,minor=False,bpm=168):
    b=60/bpm;t=a;k=0;root=[0,7,5,7] if not minor else [0,3,8,7];ch=[4,7] if not minor else [3,7]
    while t<z-.05:
        bar=k//3;beat=k%3;r=48+key+root[bar%4]
        if beat==0: add(mus,tone(hz(r-12),.5,.25,(1,2,3))*.5,t,.5*g)
        else:
            for n in ch: add(mus,tone(hz(r+n),.25,.12,(1,2)),t,.12*g)
        if beat==0 and bar%2==0: add(mus,tone(hz(r+19+(bar%4)),.6,.3,(1,2,3)),t,.13*g)
        t+=b;k+=1
def drone(a,z,f=55,g=.08):
    k=int((z-a)*SR);tt=np.arange(k)/SR;add(mus,(np.sin(2*np.pi*f*tt)+.5*np.sin(2*np.pi*f*1.5*tt)+.3*np.sin(2*np.pi*f*2.01*tt))*np.minimum(tt/.4,1)*np.minimum((z-a-tt)/.3,1)*g,a)
def chord(t,notes,d=2.0,g=.12):
    for n in notes: add(mus,brass(n,d,g),t)
pop=lambda f=900:tone(f,.09,.03,(1,2))*.5
vib=lambda d:lp(np.sign(np.sin(2*np.pi*150*np.arange(int(d*SR))/SR))*np.sin(np.linspace(0,np.pi,int(d*SR))),400)*.5
def clack(): x=noise(.06);return bp(x,1500,6000)*env(len(x),.0005,.015)+tone(700,.06,.02)*.3
def musicbox(a,z,notes,step=.36,g=.16):
    t=a;i=0
    while t<z-.1: add(mus,tone(hz(notes[i%len(notes)]),.9,.5,(1,2,4)),t,g);t+=step;i+=1
def bell(): return tone(1250,.9,.35,(1,2.76,5.4))*.5
def horn(d=1.6): k=int(d*SR);tt=np.arange(k)/SR;s=sum(np.sin(2*np.pi*f*tt) for f in (98,123.5,147));return lp(np.sign(s)*.3+s*.2,900)*np.minimum(tt/.15,1)*np.minimum((d-tt)/.3,1)*.5
def pluck(n,d=.22,g=.3): return tone(hz(n),d,d*.35,(1,2,3,4))*g
def sneaky(a,z,key=0,g=1.0,bpm=132):
    b=60/bpm/2;t=a;k=0;line_=[0,None,7,None,3,5,None,7, 0,None,10,None,7,5,3,None]
    while t<z-.05:
        n=line_[k%16]
        if n is not None: add(mus,pluck(36+key+n,.2,.55),t,g)
        if k%4==2: add(mus,lp(noise(.05),5000)*env(int(.05*SR),.001,.02),t,.25*g)
        if k%8==0: add(mus,kick(),t,.35*g)
        if k%8==4: add(mus,snare(),t,.22*g)
        if k%16 in (1,5,9,13): add(mus,pluck(60+key+[12,15,19,15][(k//4)%4],.12,.18),t,g)
        t+=b;k+=1
def bounce(a,z,key=0,g=1.0,bpm=150):
    b=60/bpm;t=a;k=0;mel=[72,76,79,76,74,77,81,77]
    while t<z-.05:
        add(mus,pluck(48+key+[0,7][k%2],.25,.5),t,g);add(mus,pluck(64+key+[0,4,7][k%3],.12,.2),t+b/2,g)
        if k%2==0: add(mus,tone(hz(mel[(k//2)%8]+key),.3,.12,(1,)),t,.08*g)
        t+=b;k+=1
def siren(d=1.0): k=int(d*SR);tt=np.arange(k)/SR;f=700+400*np.sin(2*np.pi*1.6*tt);return np.sin(2*np.pi*np.cumsum(f)/SR)*.25*np.minimum(tt/.05,1)*np.minimum((d-tt)/.1,1)
def whoop(): k=int(.45*SR);tt=np.arange(k)/SR;return np.sin(2*np.pi*np.cumsum(500+900*tt/.45)/SR)*.3*np.sin(np.pi*tt/.45)
def clank(): x=noise(.25);return bp(x,2000,9000)*env(len(x),.001,.06)*.8+tone(2300,.25,.08,(1,2.4))*.4
def shutter(): x=noise(.08);return bp(x,1000,8000)*env(len(x),.001,.02)*.9
def crickets(a,d):
    t=a;c=tone(4200,.05,.015)*np.sin(np.arange(int(.05*SR))/SR*2*np.pi*60)
    while t<a+d: add(sfx,c,t,.25);add(sfx,c,t+.08,.25);t+=.55
def sting(t0,g=.15): chord(t0,[41,48,53],.25,g);chord(t0+.35,[42,49,54],.25,g);chord(t0+.75,[40,47,52,58],1.3,g*1.1);add(sfx,impact(.9),t0+.75)
def suction(a,d): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,bp(noise(d),200,1800)*np.minimum(tt/.5,1)*np.minimum((d-tt)/.3,1)*(.5+.5*np.sin(tt*2*np.pi*1.5))*.45,a)
def rewind(t0,d=1.2): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,(np.sin(2*np.pi*np.cumsum(300+2500*tt/d)/SR)*.15+bp(noise(d),2000,8000)*.15)*np.minimum(tt/.1,1),t0)
def chime(t0): add(sfx,tone(1320,.35,.15,(1,2)),t0,.35);add(sfx,tone(1760,.4,.18,(1,2)),t0+.12,.35)
def typing(t0):
    for i in range(9): add(sfx,lp(noise(.03),4000)*env(int(.03*SR),.001,.01),t0+i*.018,.25)
def organ(t0,notes,d=1.6,g=.06):
    k=int(d*SR);tt=np.arange(k)/SR
    for n in notes:
        f=hz(n);add(mus,sum(np.sin(2*np.pi*f*m*tt)/m for m in (1,2,3,4,6))*np.minimum(tt/.05,1)*np.minimum((d-tt)/.3,1)*g,t0)
def knock(): x=noise(.12);return lp(x,700)*env(len(x),.001,.03)*2+tone(110,.12,.04)*.8
def heartbeat(a,z):
    t=a
    while t<z: add(sfx,tone(55,.16,.06)*1.3,t,.9);add(sfx,tone(50,.14,.05),t+.2,.8);t+=.8
def buzz(t0,d=.6): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,np.sign(np.sin(2*np.pi*120*tt))*.08*(np.sin(tt*60)>0),t0)
def ding(t0): add(sfx,tone(2093,.6,.3,(1,2.4)),t0,.3)
def sparkle(t0):
    for k in range(6): add(sfx,tone(2000+k*300,.3,.12,(1,2)),t0+k*.05,.1)
def creak(t0,d=1.0): k=int(d*SR);tt=np.arange(k)/SR;add(sfx,bp(np.sign(np.sin(2*np.pi*np.cumsum(90+40*np.sin(tt*7))/SR))*.3,300,2000)*np.sin(np.pi*tt/d)*.5,t0)
def bubbles(t0,n=6):
    for k in range(n): f=500+rng.random()*900;kk=int(.08*SR);tt=np.arange(kk)/SR;add(sfx,np.sin(2*np.pi*np.cumsum(f+f*3*tt/.08)/SR)*env(kk,.002,.03)*.35,t0+k*.09)
exec(open('cues.py').read())
# ---- voice + duck + mix
v,vsr=sf.read('vo.wav');v=signal.resample_poly(v,SR,vsr);v=np.pad(v,(0,max(0,N-len(v))))[:N]
e=np.abs(v);a=int(.06*SR);e=np.convolve(e,np.ones(a)/a,'same');on=(e>0.02).astype(float)
g=np.zeros(N);x=0
for i in range(0,N,64):
    tg=on[i];c=1-np.exp(-64/((0.04 if tg>x else .3)*SR));x+=(tg-x)*c;g[i:i+64]=x
bed=mus*.6*(1-.75*g)+sfx*.75*(1-.6*g)   # v2: duck music AND sfx harder under speech so the voice is always clear
for l in L:   # audibility check: voice must sit well above the bed on every line
    i,j=int(l['t0']*SR),int(l['t1']*SR);d=20*np.log10((np.sqrt(np.mean(v[i:j]**2))+1e-9)/(np.sqrt(np.mean(bed[i:j]**2))+1e-9))
    if d<12: k=10**((12-d)/20);bed[i:j]/=k;print('ducked bed under',l['tag'],round(d,1),'dB -> 12 dB')
mix=v+bed+lp(noise(DUR),800)*.008
f=int(.5*SR);mix[-f:]*=np.linspace(1,0,f)
pk=np.percentile(np.abs(mix),99.95);mix=mix/pk*.9;mix=np.where(np.abs(mix)>.92,np.sign(mix)*(.92+.08*np.tanh((np.abs(mix)-.92)/.08)),mix)
sf.write('mix.wav',np.stack([mix,mix],1).astype(np.float32),SR);print('ok',DUR)
