import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
# 1 cringe at night: typing + awkward trombone
add(sfx,pop(1200),0.15,.35);typing(WT('h1',2));add(sfx,pop(900),WT('h1',6),.4)
add(sfx,trombone([55,54,53,52],.22),WT('h1',8)-.1,.26)
# 2 brain juggling: bouncy, 4 pops, bonk + fall
bounce(T('f1')-.05,T('s1')-.1,0,.36,bpm=150)
for k in range(4): add(sfx,pop(800+k*150),T('f1')+.25+k*.22,.22)
add(sfx,boing(),WT('f1',13),.4);add(sfx,whoosh(.6,.4),WT('f1',13)+.1,.4)
# 3 rewind + Memopai chat
rewind(T('s1')-.05,1.0)
typing(T('s1')+.1);add(sfx,pop(1300),T('s1')+.35,.45);add(sfx,pop(1500),WT('s1',6),.5);chime(WT('s1',6)+.02)
# 4 out of your head
musicbox(T('s2'),T('s3')+.2,[72,76,79,76],.34,.12);add(sfx,whoosh(.5,.5),WT('s2',8),.45);sparkle(E('s2')-.3)
# 5 19:00 ping
add(sfx,vib(.5),WT('s3',3),.8);chime(WT('s3',3)+.1);typing(WT('s3',6))
# 6 payoff
add(sfx,pop(1600),T('p1')+.2,.45);sparkle(T('p1')+.3)
musicbox(T('p1'),T('cta'),[72,76,79,84,79,76],.34,.12)
add(sfx,whoop(),WT('p2',3),.3);sparkle(WT('p2',3))
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
