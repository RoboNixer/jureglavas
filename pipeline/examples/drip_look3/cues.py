def plink(g=1.0):
    k=int(.5*SR);tt=np.arange(k)/SR;f=1400+900*np.exp(-tt*40)
    return (np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*14)+np.sin(2*np.pi*np.cumsum(f*1.5)/SR)*np.exp(-tt*22)*.3)*g
def drips(a,z,g=.55):
    t0=OFF0
    while t0<z:
        if t0>=a: add(sfx,plink(),t0+.85*.75,g)
        t0+=.85
OFF0=.15-.85
drips(0,T('s3')+2.2,.6)
drips(T('s3')+2.2,T('s4')+.45,.18)
add(sfx,impact(.4),0.4,.35)
drone(0,T('s3'),44,.06)
add(sfx,whoosh(.35),T('f1')-.1,.4)
add(sfx,whoosh(.35),T('s1')+1.45,.4)
add(sfx,whoosh(.4),T('s3')-.4,.4);add(sfx,pop(1300),T('s3')+.1,.5);musicbox(T('s3'),T('cta'),[72,76,79,76],.3,.12)
add(sfx,pop(1500),T('s3')+2.0,.6)
add(sfx,whoosh(.35),T('s3')+2.1,.4);add(sfx,pop(1500),T('s3')+3.4,.6)
add(sfx,whoosh(.35),T('s4')+.35,.4);buzz(T('s4')+.9,.6);add(sfx,pop(1500),T('s4')+3.05,.6)
add(sfx,whoosh(.5,.3),T('f2')-.2,.4);chime(T('p1')-.2)
bounce(T('p1')+1.5,T('cta'),2,.6);chime(T('cta'))
