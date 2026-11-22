// 2026-11-22 20:00 FUN FACT — "Holiday flight, 05:40. 'Your passport expires in March.'"
// craft ladder: checkin(), checkdesk(), passport3(), bpass() (look3.js)
const YOU={hair:'curl'};
const HD=(y,s)=>y-767*s;
const AG={hair:'spike',bow:'#e0533d'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,on===2?'255,90,100':'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function summer(t){proom(t,{win:780,plant:200,frame:[250,520],wall:'#f7e9cf',wall2:'#ecd5ae'});glow(780,640,700,'255,232,170',.6);rays(780,560,t,'255,240,200',.18)}
const SOFA=(t)=>psofa(540,1700,1.15,'#e0874f','#c46f3c');
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);
// A1: July, sunny sofa: you glance at the passport, shrug, toss it away
sh(0,(t,r)=>{cam(540,1050,lerp(1.04,1.09,C(r/2)),t,.1);
 summer(t);SOFA(t);
 const y=1830,s=1.16,toss=C((r-1.0)/.5);
 sm(500,y,s,Object.assign({t,eyes:r>1?'happy':'open',lid:r<1?.3:0,brow:r>1?'up':'smug',mouth:r>1?'smirk':'smile',look:[.5,-.2],armR:toss>0?lerp(120,30,toss):120,bendR:toss>0?lerp(-120,-20,toss):-120,armL:-30,bendL:-40,
  holdR:(hx,hy)=>{if(toss<1)passport3(hx+20,hy-40,.42,{rot:-.2+toss*2})}},YOU));
 if(toss>=1){const f=C((r-1.5)/.3);passport3(lerp(700,860,f),lerp(1100,1500,f),.36,{rot:1.2+f*1.5})}
 label3('You, in July 😎',C(r/.2))});
// A2 = frame-1/cover moment: 05:40 check-in, dawn, the agent shakes his head with your passport
function deskShot(t,r,o={}){const ok=o.ok;cam(540,1060,o.cv?1.06:lerp(1.04,1.1,C(r/4.5)),t,.1);
 checkin(t,{dawn:!ok,warm:ok});
 const ay=1560,as=1.0,shake=ok?0:Math.sin(t*9)*6*C((r-.2)/.3)*(1-C((r-2.5)/.4));
 sm(710,ay,as,Object.assign({t,eyes:ok?'happy':'open',brow:ok?'up':'sad',mouth:ok?'grin':(o.talk?'open':'frown'),talk:o.talk?t:null,tilt:shake,look:[-.7,.1],noshadow:1,
  armL:ok?62:120,bendL:ok?-8:-130,holdL:(hx,hy)=>{if(ok)bpass(hx-40,hy-10,.75,{rot:-.15});else passport3(hx-20,hy-30,.5,{rot:.15})},armR:-20,bendR:-30},AG));
 checkdesk(740,1610,.8,{no:!ok,ok:ok});
 const y=1860,s=1.2;
 sm(330,y,s,Object.assign({t,eyes:ok?'happy':'open',brow:ok?'up':'worried',mouth:ok?'grin':'o',sweat:ok?0:1,look:[.7,-.2],blush:ok?1:0,armR:ok?95:60,bendR:ok?-20:-40,armL:-25,bendL:-20},YOU));
 suitcase3(560,1860,.62,{col:'#2fb7a0'});
 if(ok)sparkles(520,980,C((r-.6)/.8),10,200,'#7cf0a0')}
sh(T('h1')+1.95,(t,r)=>{deskShot(t,r,{talk:r>T('m1')-T('h1')-1.95&&r<T('f1')-T('h1')-2.1});label3('You at 05:40 😳',C(r/.2))});
// B: the passport close-up, the date gets circled in red
sh(T('f1')-.06,(t,r)=>{cam(540,1000,lerp(1.02,1.08,C(r/2.6)),t,.08);
 checkin(t,{dawn:1});X.fillStyle='rgba(20,20,40,.35)';X.fillRect(-2000,-2000,5000,5000);glow(540,900,620,'255,230,200',.45);
 passport3(540,960,1.12,{open:1,ring:C((r-.5)/.6),rot:-.03});
 label3('Your passport 😬',C(r/.2))});
// D: rewind to July, same sofa: voice note, Memopai hops on the sofa arm, 🛂 flies into the phone
sh(T('s2')-.05,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/3.2)),t,.1);
 summer(t);SOFA(t);
 const y=1830,s=1.14,hy=HD(y,s),talk=r>1.4;
 passport3(250,1450,.4,{rot:-.4});
 sm(440,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'o',talk:talk?t:null,look:talk?[.6,.1]:[-.6,.5],armR:150,bendR:-160,holdR:(x,yy)=>phoneH(x+4,yy+10,.25,talk?1:0),armL:-30,bendL:-40},YOU));
 const mp=C((r-.9)/.5);if(mp>0){memo(810,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(810,1220,mp,8,180)}
 const ft=1.9,fl=C((r-ft)/.8);if(r>ft-.3){if(fl<1){const px=lerp(270,560,eo(fl)),py=lerp(1380,hy+40,eo(fl))-Math.sin(fl*Math.PI)*90;emo(px,py,'🛂',C((r-ft+.3)/.3)*(1-fl*.4))}else sparkles(560,hy+40,C((r-ft-.8)/.5),8,120,'#7cf0a0')}
 label3(r<.9?'You, in July 👀':'This time: Memopai 😎',C(r/.2))});
// E: the chat: voice note → confirmation
sh(T('s2b')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#ffb36b');g.addColorStop(1,'#ff7f8a');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'255,240,200',.3);
 phoneUI(540,930,1.16,r,{typing:r>.5&&r<.85,list:[{a:0,me:1,voice:1,pl:C(r/.5),dur:'0:03',time:'14:12'},{a:.85,me:0,text:'✅ Got it! Tue 1 Sep · 09:00 · 🛂 Renew your passport',time:'14:12'}]})});
// F: 1 September, morning kitchen: buzz, you book it on your phone, green glow
sh(T('s3')-.06,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/2.6)),t,.12);
 proom(t,{win:300,plant:860,frame:null,wall:'#f6ead2',wall2:'#ead4b0'});glow(300,640,640,'255,236,190',.55);wclock(800,560,.8,9,0);
 const ord=r>1.5,y=1880,s=1.26;
 sm(500,y,s,Object.assign({t,eyes:ord?'happy':'open',brow:'up',mouth:ord?'grin':'o',look:[.5,.2],armR:120,bendR:-120,holdR:(hx,hy)=>phoneH(hx+10,hy,.12,ord?1:3,ord?'#25d366':'#ffffff'),armL:75,bendL:-80,holdL:(hx,hy)=>pmug(hx-10,hy+20,1.1,'#ffd23f')},YOU));
 if(ord)sparkles(640,1000,C((r-1.5)/.7),10,180,'#7cf0a0');
 notif(338,C(r/.25)*(1-C((r-1.35)/.25)),'Memopai','🛂 Renew your passport')});
// G: payoff, same desk framing, morning light: boarding pass, both grinning
sh(T('p1')-.08,(t,r)=>{deskShot(t,r,{ok:1});label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: the 05:40 desk without overlays
sh(1000,(t,r)=>deskShot(t,2.0,{cv:1}));
