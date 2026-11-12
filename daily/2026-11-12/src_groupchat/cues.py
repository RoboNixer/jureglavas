import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
add(sfx,impact(.7),0.05);add(sfx,whoosh(.5,.5),0.0);add(sfx,pop(1000),0.25,.5);add(sfx,pop(1100),0.4,.4);add(sfx,pop(1200),0.55,.4)
bounce(0.3,T('s2')-.1,0,.42,bpm=150)
add(sfx,whoosh(.4,.35),WT('s1',6)-.1)
for k in range(9): add(sfx,vib(.15),WT('s1',6)+k*(E('s1')-WT('s1',6))/9,.35)
add(sfx,boing(),T('g1')-.05,.4)
add(sfx,whoosh(.5,.45),T('s2')-.1)
musicbox(T('s2')-.05,T('s3')-.2,[67,71,74,79,74,71],.3,.12)
add(sfx,pop(900),WT('s2',4),.5);add(sfx,pop(1400),WT('s2',11)+.1,.6)
add(sfx,bell(),T('m1'),.3)
add(sfx,whoosh(.5,.45),T('s3')-.15);bounce(T('s3')-.1,T('p1')-.2,2,.42,bpm=156)
for k in range(3):
    add(sfx,vib(.5),WT('s3',3)+k*.15,.6)
chime(WT('s3',3)+.1)
add(sfx,whoosh(.4,.35),T('p1')-.15)
add(sfx,impact(.5),WT('p1',2),.4);sparkle(WT('p1',2)+.2)
musicbox(T('p1')-.15,T('cta'),[72,76,79,84,79,76],.32,.13);chord(T('p1')+.1,[60,64,67],2.5,.06)
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
