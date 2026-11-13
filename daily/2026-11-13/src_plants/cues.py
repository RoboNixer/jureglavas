import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
add(sfx,impact(.3),0.0);add(sfx,whoosh(.5,.5),0.0)
bounce(0.3,T('s2')-.1,0,.42,bpm=148)
add(sfx,whoosh(.4,.35),T('s1')-.1);add(sfx,boing(),WT('s1',6),.35)
add(sfx,whoosh(.5,.45),T('s2')-.1)
musicbox(T('s2')-.05,T('s3')-.2,[67,71,74,79,74,71],.3,.12)
add(sfx,pop(900),WT('s2',5),.5);add(sfx,pop(1400),E('s2')-.55,.6)
add(sfx,whoosh(.5,.45),T('s3')-.1);chord(T('s3'),[65,69,72],2.0,.06)
add(sfx,whoosh(.5,.45),T('s4')-.15);bounce(T('s4')-.1,T('p2')-.2,2,.42,bpm=156)
chime(WT('s4',3))
add(sfx,whoosh(.4,.35),E('g1'));sparkle(WT('p1',3)+.1)
musicbox(T('p1')-.1,T('p2')-.1,[72,76,79,84,79,76],.32,.13)
add(sfx,impact(.5),WT('p2',2),.45)
chime(T('cta')-.25);chord(T('cta')+.2,[60,64,67,72],2.0,.05)
