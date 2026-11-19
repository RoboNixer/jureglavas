# ---- MUSIC v2 (owner, 2026-11-19: "make the background sound better, not like AI"; reference clips were deep, warm, bass-forward
# chill beats, 68-80 bpm half-time feel, soft drums, almost no harsh highs). Loaded by score_core.py before cues.py.
# beat(a,z,turn=None,key=None,g=1.0,seed=None): ONE continuous lo-fi beat from a to z. Before `turn` it is sparse and unresolved
# (warm electric piano, long sub bass, vinyl crackle, a soft heartbeat kick); AT `turn` (the Memopai moment) the drums, a brighter
# chord loop and a small melody come in, so the music itself goes from "stuck" to "sorted". Humanised: swing, uneven velocities,
# strummed chords, tape wobble, room reverb, side-chain breathing. Original composition, no samples, no third-party recordings.
def beat(a,z,turn=None,key=None,g=1.0,seed=None):
    global _BEAT_USED
    _BEAT_USED=True
    r=np.random.default_rng(seed if seed is not None else int(DUR*1000)%9973+len(L))
    if turn is None or turn<=a+1.5 or turn>=z-2: turn=None
    bar=60/78*4
    if turn is not None:
        nb=max(1,round((turn-a)/bar));bar=(turn-a)/nb
        while bar>3.55: nb+=1;bar=(turn-a)/nb
        while bar<2.6 and nb>1: nb-=1;bar=(turn-a)/nb
    else: nb=0
    q=bar/4;sw=.07*q;n=int((z-a+2.5)*SR)
    keys=np.zeros(n);sub=np.zeros(n);kk=np.zeros(n);sn=np.zeros(n);hh=np.zeros(n);mel=np.zeros(n);pump=np.ones(n)
    def put(buf,s,t,gg=1.0):
        i=int(t*SR)
        if 0<=i<n: j=min(n,i+len(s));buf[i:j]+=s[:j-i]*gg
    tonic=key if key is not None else int(r.choice([50,54,55,57]))      # D, F#, G, A major (relative minors B, D#, E, F#)
    SC=[0,2,4,5,7,9,11]
    def chord(d): return [tonic+SC[(d+2*k)%7]+12*((d+2*k)//7) for k in range(5)]    # root,3,5,7,9
    def fit(m,lo):
        while m<lo: m+=12
        while m>=lo+12: m-=12
        return m
    def ep(m,dur,vel):
        k=int(dur*SR);t=np.arange(k)/SR;f=hz(m);ph=2*np.pi*np.cumsum(f*(1+.0016*np.sin(2*np.pi*.55*t+r.random()*6)))/SR
        y=np.sin(ph+(1.5*vel*np.exp(-t/.4)+.22)*np.sin(ph))*np.exp(-t/1.7)+.10*np.sin(ph*4.02)*np.exp(-t/.09)
        e=np.minimum(t/.004,1)*np.minimum((dur-t)/.07,1);return y*e*(1+.07*np.sin(2*np.pi*4.3*t))*vel
    def bass(m,dur,vel):
        k=int(dur*SR);t=np.arange(k)/SR;ph=2*np.pi*hz(m)*t;y=np.tanh(1.9*np.sin(ph))*.7+.16*np.sin(2*ph)+.05*np.sin(3*ph)
        return y*np.minimum(t/.012,1)*np.minimum((dur-t)/.09,1)*vel
    def kick_(vel):
        k=int(.34*SR);t=np.arange(k)/SR;y=np.sin(2*np.pi*np.cumsum(46+78*np.exp(-t*26))/SR)*np.exp(-t/.15);c_=r.standard_normal(k)*np.exp(-t/.004)*.25;return (lp(y,1400)+lp(c_,3500))*vel
    def snare_(vel):
        x=r.standard_normal(int(.22*SR));t=np.arange(len(x))/SR;return (bp(x,900,4200)*np.exp(-t/.065)*.75+np.sin(2*np.pi*182*t)*np.exp(-t/.05)*.4)*vel
    def hat_(vel,op=0):
        x=r.standard_normal(int((.16 if op else .05)*SR));t=np.arange(len(x))/SR;return bp(x,5200,9500)*np.exp(-t/(.06 if op else .018))*vel
    def bell(m,vel):
        k=int(.9*SR);t=np.arange(k)/SR;ph=2*np.pi*hz(m)*t;return (np.sin(ph)+.3*np.sin(2*ph)*np.exp(-t/.15)+.08*np.sin(3.01*ph)*np.exp(-t/.08))*np.exp(-t/.32)*np.minimum(t/.006,1)*vel
    NIGHT=[5,3,1,2];DAY=[[0,5,3,4],[5,3,0,4],[3,0,5,4]][int(r.integers(3))]
    PENT=[0,2,4,7,9,12,14,16]
    MOT=[[(0,4),(.75,5),(1.5,4),(2.5,2),(4,3),(4.75,4),(5.5,2),(6.5,1)],[(0,2),(1,4),(1.5,5),(3,4),(4,2),(5,1),(5.5,2),(7,0)],
         [(.5,5),(1,4),(2,2),(3.5,3),(4.5,5),(5,4),(6,2),(7,4)],[(0,4),(1.5,2),(2,3),(3,4),(4,5),(5.5,4),(6,2),(7.5,1)]][int(r.integers(4))]
    nbars=int(np.ceil((z-a)/bar))+1
    for b in range(nbars):
        t0=b*bar;full=(turn is None) or b>=nb;d=(DAY[(b-nb)%4] if full else NIGHT[b%4]);c=chord(d);hu=lambda s=.012:(r.random()-.5)*2*s
        # electric piano: strummed 3-7-9(-5) voicing, re-hit on the "and" of 3 when the beat is full
        vo=[fit(c[1],55),fit(c[3],58),fit(c[4] if (full or b%2) else c[2],62),fit(c[0],46)]
        for i,m in enumerate(sorted(vo)): put(keys,ep(m,bar*.98,(.5 if full else .42)*(.85+.3*r.random())),max(0,t0+i*.022+hu(.008)))
        if full:
            for i,m in enumerate(sorted(vo[:3])): put(keys,ep(m,q*1.4,.3*(.8+.4*r.random())),t0+2.5*q+sw+i*.018)
        # sub bass
        rt=fit(c[0],29)
        if full: put(sub,bass(rt,q*2.3,.9),t0);put(sub,bass(rt if b%2 else fit(c[2],29),q*1.3,.75),t0+2.5*q+sw)
        else: put(sub,bass(rt,bar*.92,.8),t0)
        # drums
        kt=[(0,1.0),(2.5,.85)]+([(3.5,.6)] if b%2 else []) if full else [(0,.55)]
        for bt,v in kt:
            tt=t0+bt*q+(sw if bt%1 else 0)+hu(.006);put(kk,kick_(v),max(0,tt));i=int(max(0,tt)*SR);e=np.exp(-np.arange(int(.3*SR))/(.11*SR));j=min(n,i+len(e));pump[i:j]=np.minimum(pump[i:j],1-.38*v*e[:j-i])
        if full:
            for bt in (1,3): put(sn,snare_(.8+.2*r.random()),t0+bt*q+.006+hu(.008))
            for e8 in range(8):
                if r.random()<.92: put(hh,hat_((.9 if e8%2==0 else .5)*(.7+.5*r.random()),op=(e8==7 and b%4==3)),t0+e8*q/2+(sw if e8%2 else 0)+hu(.007))
            if (b-nb)%2==0 or turn is None:
                pass
        elif turn is not None and b==nb-1:
            put(sn,snare_(.45),t0+3*q);put(sn,snare_(.6),t0+3.5*q+sw)          # pickup into the turn
    # melody: a small pentatonic hook, only once the beat is full, 2-bar phrases with an echo
    m0=nb if turn is not None else 0
    for p in range(m0,nbars,2):
        if (p-m0)//2%2==1 and r.random()<.5: continue                      # leave air: sometimes rest a phrase
        for bt,dg in MOT:
            if r.random()<.86: put(mel,bell(tonic+12+PENT[dg]+(12 if tonic<54 else 0),.55+.3*r.random()),p*bar+bt*q+(sw if (bt*2)%2 else 0)+(r.random()-.5)*.02)
    dl=int(.75*q*SR);ech=np.zeros(n);ech[dl:]=mel[:-dl];ech2=np.zeros(n);ech2[2*dl:]=mel[:-2*dl];mel=mel+.38*ech+.16*ech2
    # riser into the turn
    if turn is not None:
        k=int(min(1.6,bar)*SR);x=r.standard_normal(k);t=np.arange(k)/SR;put(hh,bp(x,1800,7000)*(t/t[-1])**3*.9,(turn-a)-k/SR)
    # buses: tone shaping, room, side-chain
    keys=lp(keys,3400);keys=keys-lp(keys,110);sub=lp(sub,420);sn=lp(sn,6500);mel=lp(mel,5200)
    k=int(1.5*SR);ir=r.standard_normal(k)*np.exp(-np.arange(k)/(.42*SR));ir=lp(ir,3800);ir/=np.sqrt(np.sum(ir**2))
    send=keys*.5+sn*.9+mel*.8;rev=signal.fftconvolve(send,ir)[:n]
    cr=np.zeros(n)
    for i in r.integers(0,n-200,int((z-a+2)*8)): cr[i]=(r.random()-.5)*2*r.random()**2
    cr=lp(cr,3200)*2.2+bp(r.standard_normal(n),300,5000)*.006
    y=(keys*.66+rev*.2+mel*.4)*pump+sub*.5*pump+kk*1.0+sn*1.15+hh*.6+cr*.8
    y=np.tanh(y*1.15)/1.15;y=lp(y,9000)
    fi=int(.25*SR);y[:fi]*=np.linspace(0,1,fi);e=int((z-a)*SR);fo=int(1.2*SR)
    if e+fo<=n: y[e:e+fo]*=np.linspace(1,0,fo)**2;y[e+fo:]=0
    y=y/np.percentile(np.abs(y),99.9)*.5
    add(mus,y,a,g)
_BEAT_USED=False;_LEGACY=[]
# Legacy beds (musicbox / bounce / sneaky / waltz) sounded synthetic. Any cue file that still calls them gets ONE beat() instead:
# the first legacy call marks the turn (in older cue files the music started at the Memopai moment). Set OLDMUSIC=1 in cues.py to opt out.
_old={k_:globals()[k_] for k_ in ('musicbox','bounce','sneaky','waltz')}
def _leg(name):
    def f(a_,z_,*aa,**kw):
        if globals().get('OLDMUSIC'): return _old[name](a_,z_,*aa,**kw)
        _LEGACY.append((a_,z_))
    return f
for k_ in _old: globals()[k_]=_leg(k_)
def _finish_music():
    if not _BEAT_USED and _LEGACY:
        s=min(x[0] for x in _LEGACY);beat(0,DUR,turn=s if s>1.5 else None)
