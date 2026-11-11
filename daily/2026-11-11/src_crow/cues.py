def caw(g=.5):
    d=.32;k=int(d*SR);tt=np.arange(k)/SR;f=720-380*tt/d;ph=2*np.pi*np.cumsum(f)/SR
    s=np.sign(np.sin(ph))*.6+np.sin(ph*2)*.4;s=bp(s+noise(d)*.35,500,3200);return s*np.sin(np.linspace(0,np.pi,k))**.5*g
add(sfx,shutter(),0.02,.9);add(sfx,impact(1.0),0.05);add(sfx,caw(.6),0.3);organ(0,[50,53,57],1.5,.05)
for k in range(5): add(sfx,caw(.35),T('h2')+.2+k*.22)
drone(T('h2'),T('s1'),55,.07)
sneaky(T('s1'),T('s2'),0,.8)
add(sfx,pop(700) if 'pop' in dir() else clack(),T('s1')+.6,.5);add(sfx,whoosh(.3),T('s1')+.6,.5)
add(sfx,impact(.8),T('g1'));add(sfx,siren(.8),T('g1'),.4)
heartbeat(T('k1'),T('s2'));add(sfx,caw(.5),E('k1')+.05)
add(sfx,impact(.9),T('s2')+.35);sting(T('s2')+.3,.12)
bounce(T('s2b'),T('s3'),2,.75)
add(sfx,whoosh(.4),T('s2b')+1.3,.6);
for k in range(3): add(sfx,caw(.4),T('s2b')+1.4+k*.3)
for k in range(8): add(sfx,caw(.3),T('s2c')+.2+k*.45)
add(sfx,impact(.7),T('s2c')+1.9)
drone(T('s3'),T('s4'),49,.08);musicbox(T('s3'),T('s4')-.4,[72,75,79,75],.36,.12)
typing(T('s3')+.15);add(sfx,clack(),T('s3')+.15,.5);chime(T('s3')+1.8)
add(sfx,impact(1.0),T('s4'));
for k in range(12): add(sfx,caw(.35),T('s4')+k*.15)
add(sfx,impact(1.0),T('g2'));add(sfx,scratch(),T('g2'),.6)
add(sfx,whoop(),T('s5')+.3,.5);add(sfx,sparkle(T('s5')+.8) or np.zeros(1),0,0)
add(sfx,impact(.8),T('k2')+.1);crickets(T('k2')+.2,1.3)
add(sfx,impact(1.1),T('k2')+1.6);add(sfx,siren(1.0),T('k2')+1.7,.4)
for k in range(16): add(sfx,caw(.35),T('k2')+1.6+k*.1)
