def chirpS(g=1.0):
    k=int(.11*SR);tt=np.arange(k)/SR
    return np.sin(2*np.pi*3150*tt)*np.minimum(1,tt/.004)*np.exp(-tt*18)*g
def chirps(a,z,g):
    t0=a
    while t0<z:
        add(sfx,chirpS(),t0,g); t0+=1.6
# the chirp (same phase as the scene: flash at ((t+.2)%1.6)==0)
chirps(1.4,T('s2')+1.9,.32)
add(sfx,whoosh(.35),T('m1')-.1,.35)
add(sfx,whoosh(.4),T('n1')+.95,.4);beat(0,DUR,turn=T('s2'))
add(sfx,whoosh(.35),T('s2')+1.85,.35)
add(sfx,whoosh(.35),T('s3')+.3,.35);buzz(T('s3')+.6,.6);chime(T('s3')+.75)
add(sfx,whoosh(.35),T('f1')+.15,.35)
add(sfx,whoosh(.5,.3),T('p1')-.15,.35)
chime(T('cta'))
