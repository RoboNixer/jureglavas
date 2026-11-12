import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
bounce(0.2,T('s2')-.1,0,.4,bpm=148)
add(sfx,pop(1200),0.2,.35)
for x in (WT('s1',0),WT('s1',3),WT('s1',4)+.15): add(sfx,impact(.5),x,.35);add(sfx,clank(),x+.02,.25)
add(sfx,trombone([55,54,53,52],.3),WT('s1b',1)-.1,.3)
add(sfx,whoosh(.6,.5),T('s2')-.05,.55)
add(sfx,whoosh(.4),WT('s2',7)-.3,.4);add(sfx,pop(1300),WT('s2',8)-.1,.5);add(sfx,pop(1500),T('m1')+.7,.6);chime(T('m1')+.75)
sneaky(WT('s2',2),T('s3')-.1,0,.34)
add(sfx,whoosh(.4),T('s3')-.15,.4)
BZ=WT('s3',2)
add(sfx,vib(.5),BZ,.8);chime(BZ+.15);add(sfx,pop(1600),WT('s3',3),.4);add(sfx,pop(1600),WT('s3',3)+.25,.4);add(sfx,impact(.5),WT('s3',5),.3)
musicbox(T('p1')-.1,T('cta'),[72,76,79,84,79,76],.34,.12);add(sfx,whoop(),WT('p1',5),.4);sparkle(WT('p1',5)+.3)
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
