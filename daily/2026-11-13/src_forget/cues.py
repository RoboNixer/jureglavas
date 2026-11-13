import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
bounce(0.2,T('s3')-.1,0,.38,bpm=148)
add(sfx,pop(1200),0.2,.35)
for k in range(6): add(sfx,pop(900+k*120),WT('h1',1)+k*.38,.22)
add(sfx,trombone([55,54,53,52],.25),WT('h1',9)-.2,.28)
add(sfx,whoosh(.5),T('g1')-.1,.4)
add(sfx,whoosh(.5,.5),T('s2')-.05,.5);add(sfx,pop(1300),WT('s2',4)-.1,.45);add(sfx,pop(1500),WT('s2',8)+.2,.55);chime(WT('s2',8)+.25)
sneaky(T('s3')-.05,T('s4')+.3,0,.34)
add(sfx,impact(.5),WT('s3',2),.35);add(sfx,pop(700),WT('s3',2),.4)
add(sfx,whoosh(.4),T('s4')-.15,.4)
BZ=WT('s4',2)+.05
add(sfx,vib(.5),BZ,.8);chime(BZ+.15);add(sfx,whoop(),WT('s4',6),.35);sparkle(WT('s4',6)+.1)
musicbox(T('p1')-.1,T('cta'),[72,76,79,84,79,76],.34,.12);add(sfx,impact(.4),WT('p1',5)-.1,.3);sparkle(WT('p1',5))
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
