import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
WT_s2_and=WT('s2',7);WT_s4_memo=WT('s4',5);WT_p1_and=WT('p1',3)
add(sfx,impact(.8),0.05);add(sfx,whoosh(.5,.5),0.0)
add(sfx,clack(),0.75,.8);add(sfx,pop(1200),0.8,.5)
bounce(0.3,T('s1b')-.1,0,.5,bpm=150)
add(sfx,whoosh(.6,.35),T('s1')-.1)
sneaky(T('s1b')-.1,T('s2')-.4,0,.42)
add(sfx,pop(900),T('s1b')+.85,.5);typing(T('s1b')+2.2);add(sfx,pop(1400),T('s1b')+2.75,.6)
bounce(T('s2')-.45,T('s4')-.1,2,.45,bpm=156)
add(sfx,whoosh(.4),WT_s2_and-.1,.45)
add(sfx,whoosh(.4),T('s4')-.15,.4);add(sfx,bell(),T('s4')+.2,.25)
add(sfx,vib(.5),WT_s4_memo+.05,.8);chime(WT_s4_memo+.15);add(sfx,vib(.4),WT_s4_memo+.7,.6)
add(sfx,whoosh(.5,.6),T('g1')-.1);add(sfx,clank(),T('g1')+.72,.7);add(sfx,impact(.9),T('g1')+.72);add(sfx,scratch(),T('g1')+1.3,.4)
add(sfx,trombone([55,54,53,52],.28),T('p1')+.1,.35)
musicbox(WT_p1_and-.1,T('cta'),[72,76,79,84,79,76],.3,.12);sparkle(WT_p1_and+.1)
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
