import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
add(sfx,impact(.7),0.05);add(sfx,whoosh(.5,.5),0.0);add(sfx,pop(1000),0.35,.5)
bounce(0.3,T('s2')-.1,0,.45,bpm=148)
add(sfx,whoosh(.4,.35),T('s1')-.1);add(sfx,impact(.5),WT('s1',4)+.05,.5);add(sfx,pop(800),WT('s1',6),.4)
musicbox(T('s2')-.1,T('s3')-.2,[67,71,74,79,74,71],.3,.12)
add(sfx,pop(900),T('g1')-.3,.5);add(sfx,pop(1400),E('g1')+.15,.6)
add(sfx,whoosh(.5,.45),T('s3')-.15);bounce(T('s3')-.1,T('p1')-.2,2,.42,bpm=154)
add(sfx,vib(.5),WT('s3',6)-.05,.8);chime(WT('s3',6)+.1);add(sfx,vib(.4),WT('s3',6)+.6,.6)
add(sfx,boing(),WT('s4',2),.35);sparkle(WT('s4',2)+.2)
add(sfx,whoosh(.4,.35),T('g2')-.15);add(sfx,bell(),T('g2')-.1,.3)
musicbox(T('p1')-.15,T('cta'),[72,76,79,84,79,76],.32,.13);chord(T('p1')+.1,[60,64,67],2.5,.06)
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
