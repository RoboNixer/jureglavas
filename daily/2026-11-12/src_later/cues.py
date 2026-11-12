import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
LAND=WT('h1',5)+.45
add(sfx,whoosh(.5,.5),LAND-.8,.4);add(sfx,impact(.8),LAND,.5);add(sfx,clank(),LAND+.02,.35)
bounce(0.3,T('s2')-.1,0,.42,bpm=146)
add(sfx,whoosh(.4),T('s1')-.15,.4)
for i in (5,8,11): add(sfx,clank(),WT('s1',i),.3)
add(sfx,trombone([55,54,53,52],.3),T('s2'),.3)
S2b=WT('s2',3)
add(sfx,whoosh(.4),S2b-.15,.45);add(sfx,pop(1300),T('m1')+.15,.5)
add(sfx,pop(1500),E('m1')+.1,.6);chime(E('m1')+.15)
add(sfx,pop(1300),T('s3')+.2,.4);add(sfx,pop(1300),WT('s3',3)+.1,.4);add(sfx,pop(1500),E('s3')+.05,.6)
sneaky(S2b,T('s4')-.1,0,.36)
add(sfx,whoosh(.4),T('s4')-.15,.4)
BZ=WT('s4',2)
add(sfx,vib(.5),BZ,.8);add(sfx,vib(.4),BZ+.5,.6);chime(BZ+.2)
musicbox(T('p1')-.1,T('cta'),[72,76,79,84,79,76],.34,.12);add(sfx,whoop(),T('p1')+(E('p1')-T('p1'))*.62,.4);sparkle(T('p1')+(E('p1')-T('p1'))*.62+.4)
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
