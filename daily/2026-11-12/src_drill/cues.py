import re as _re
def WT(tag,i):
    l=[z for z in L if z['tag']==tag][0];w=l['text'].split(' ');wt=[len(x)+1+(4 if _re.search(r'[.,?:!]$',x) else 0) for x in w];tot=sum(wt)
    return l['t0']+(l['t1']-l['t0'])*sum(wt[:i])/tot
add(sfx,whoosh(.5,.5),0.15,.4);add(sfx,impact(.8),1.08,.5);add(sfx,clank(),1.1,.35)
bounce(0.3,T('s2')-.1,0,.45,bpm=146)
add(sfx,whoosh(.4),T('s1')-.15,.4)
add(sfx,whoosh(.4),T('s2')-.15,.4)
S2b=WT('s2',6)
add(sfx,whoosh(.4),S2b-.15,.45);add(sfx,pop(1300),T('m1')-.15,.6)
add(sfx,pop(1500),E('m1')+.15,.6);chime(E('m1')+.2)
sneaky(S2b,T('s3')-.1,0,.38)
add(sfx,whoosh(.4),T('s3')-.15,.4)
add(sfx,vib(.5),T('s3')+1.6,.8);add(sfx,vib(.4),T('s3')+2.1,.7);chime(T('s3')+1.8)
bounce(T('s4')-.1,T('p1')-.1,2,.45,bpm=150);add(sfx,whoosh(.4),T('s4')-.15,.4);sparkle(T('s4')+.9)
musicbox(T('p1')-.1,T('cta'),[72,76,79,84,79,76],.34,.12);add(sfx,whoop(),T('p1')+(E('p1')-T('p1'))*.6,.4)
chime(T('cta'));sparkle(T('cta')+.1);chord(T('cta')+.2,[60,64,67,72],2.0,.08)
