import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
add(sfx,impact(.7),0.05);add(sfx,whoosh(.5,.5),0.0);add(sfx,pop(1000),0.45,.5)
bounce(0.3,T('s2')-.1,0,.45,bpm=150)
add(sfx,whoosh(.4,.35),T('s1')-.1)
add(sfx,vib(.5),WT('s1',4)-.05,.5);add(sfx,bell(),WT('s1',6),.25);add(sfx,clack(),WT('s1',7)+.3,.6)
musicbox(T('s2')-.1,T('s3')-.2,[67,71,74,79,74,71],.3,.12)
add(sfx,pop(900),T('s2')+.5,.5);typing(T('s2')+1.9);add(sfx,pop(1400),T('s2')+2.65,.6)
add(sfx,whoosh(.5,.45),T('s3')-.15);bounce(T('s3')-.1,T('p1')-.2,2,.42,bpm=156)
add(sfx,vib(.5),WT('s3',8)+.05,.8);chime(WT('s3',8)+.15);add(sfx,vib(.4),WT('s3',8)+.75,.6)
add(sfx,boing(),WT('d1',4)+.2,.35);sparkle(WT('d1',4)+.5)
musicbox(T('p1')-.15,T('cta'),[72,76,79,84,79,76],.32,.13);chord(T('p1')+.1,[60,64,67],2.5,.06)
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
