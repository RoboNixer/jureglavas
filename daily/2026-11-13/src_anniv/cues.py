import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
add(sfx,impact(.3),0.0);add(sfx,whoosh(.5,.5),0.0)
chord(0.6,[57,60,64],1.8,.05)
bounce(T('s1')-.1,T('s2')-.1,0,.38,bpm=146)
add(sfx,whoosh(.4,.35),T('s1')-.1);add(sfx,boing(),WT('s1',7),.35)
add(sfx,whoosh(.5,.45),T('s2')-.1)
musicbox(T('s2')-.05,T('s3')-.2,[67,71,74,79,74,71],.3,.12)
add(sfx,pop(900),WT('s2',4),.5);add(sfx,pop(1400),WT('s2',9)-.2,.6)
add(sfx,whoosh(.5,.45),T('s3')-.1);bounce(T('s3')-.1,T('s4')-.2,2,.36,bpm=160)
add(sfx,whoosh(.5,.45),T('s4')-.15);chime(WT('s4',2)-.15)
bounce(T('s4')+.4,T('p1')-.1,2,.4,bpm=156)
add(sfx,whoosh(.4,.35),T('f1')-.25);sparkle(T('f1')+.2)
musicbox(T('p1')-.1,T('cta')-.3,[72,76,79,84,79,76],.32,.13)
sparkle(WT('p1',2));add(sfx,pop(1200),T('p2')+.25,.5);sparkle(WT('p2',7))
chime(T('cta')-.25);chord(T('cta')+.2,[60,64,67,72],2.0,.05)
