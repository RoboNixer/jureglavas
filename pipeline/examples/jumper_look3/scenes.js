// 2026-11-23 12:00 PRODUCTIVITY — "Friday, after school. Your kid walks out. No jumper. Again."
// craft ladder: sm({jumper}) school jumper, jumper3(), lostbox3() (look3.js)
const YOU={hair:'curl'};
const KID={hair:'spike',hairc:'#5a3a22'};
const TEE={tee:'#f4f1ea',num:''};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
// cold breeze: a few autumn leaves drifting across
function leaves(t,a=1){X.save();X.globalAlpha=a;for(let k=0;k<7;k++){const q=((t*.18+k/7)%1),x=-80+q*1240,y=520+k*120+Math.sin(t*2+k)*40;X.save();X.translate(x,y);X.rotate(t*2+k);ell(0,0,22,11,k%2?'#e8913a':'#c9612f',3);X.restore()}X.restore()}
function gate(t,o={}){school(t,{h:o.h||3,m:o.m==null?35:o.m,warm:o.warm});if(o.cold){X.save();X.globalAlpha=.22;X.fillStyle='#8aa0c0';X.fillRect(-300,-300,1700,2400);X.restore();leaves(t,.9)}else psun(880,300,70,t)}
// A: frame 1 = Friday 15:35 at the school gate: your kid comes down the steps in a T-shirt, shivering; you, coffee in hand, look at his arms
function shotA(t,r,lab,cv){if(cv)cam(540,1040,1.06,t,0);else cam(540,1040,lerp(1.05,1.11,C(r/4)),t,.1);
 gate(t,{cold:1});
 const shv=Math.sin(t*40)*3,wk=cv?null:(r<1.6?t:null),kx=cv?380:lerp(330,390,C(r/1.6)),noticed=cv||r>1.9;
 kidbag(kx+shv,1800,1.0,'#ffb02e',1);
 sm(kx+shv,1800,1.0,Object.assign({t,walk:wk,eyes:'open',lid:.1,brow:'flat',mouth:'smile',look:[.6,.1],armL:150,bendL:-150,armR:150,bendR:-150},KID,TEE));
 sm(760,1820,1.16,Object.assign({t,flip:1,eyes:'open',brow:noticed?'up':'flat',mouth:noticed?'o':'smile',look:[-.6,.35],armR:100,bendR:-100,holdR:(hx,hy)=>pmug(hx,hy+20,1.0,'#ffd23f'),armL:20,bendL:10},YOU));
 if(lab)label3('You, Friday 15:35 🧐',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close on the kid: big happy shrug 'What jumper?'
sh(T('k1')-.08,(t,r)=>{cam(470,1000,lerp(1.32,1.38,C(r/1.2)),t,.1);
 gate(t,{cold:1});
 kidbag(430,1800,1.0,'#ffb02e',1);
 sm(430,1800,1.0,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',talk:r<.9?t:null,armR:150,bendR:-40,armL:-150,bendL:40,tilt:6,look:[.4,0]},KID,TEE));
 label3('Your kid 🤷',C(r/.2))});
// C: the lost-property crate; a jumper drops onto the heap at each price step: €25 → €50 → €75
const C0=T('r1')-.08,CS=[.15,1.15,2.15];
sh(C0,(t,r)=>{cam(560,1080,lerp(1.04,1.1,C(r/3.6)),t,.1);
 proom(t,{win:null,frame:[230,560],plant:0,lamp:0,wall:'#dfeee4',wall2:'#c8dfd0',floor:'#b9b2a6',floor2:'#a39c90'});
 // coat pegs on the wall: all empty
 for(let k=0;k<4;k++){const px=300+k*170;rr(px-50,700,100,26,8,'#9a7b5a',5);circ(px,740,14,'#6b4a35',4)}
 let n=6,fall=null;for(let i=0;i<3;i++){if(r>CS[i]+.45)n++;else if(r>CS[i]){fall=C((r-CS[i])/.45);break}}
 lostbox3(620,1720,1.12,{n,t});
 if(fall!=null)jumper3(620+60*(1-fall),lerp(560,1720-300*1.12-600*1.12+80,eo(fall)),.78,{rot:lerp(-1.2,.2,fall),drape:.8,tag:1});
 const step=CS.filter(c=>r>c).length;
 sm(250,1860,1.0,Object.assign({t,eyes:'open',brow:'worried',mouth:'wavy',sweat:step>=3,look:[.7,.2],armR:160,bendR:-170,armL:20,bendL:10},YOU));
 const lab=['Lost property €25','Lost property €50','Lost property €75 💸'][Math.max(0,step-1)];
 const k=CS[Math.max(0,step-1)];label3(lab,step?C((r-k)/.15):0)});
// D: that evening on the sofa: Memopai hops onto the sofa arm, you type, 👕 flies into the phone
const D0=T('s2')-.45;
sh(D0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s);
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'smirk',look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:110,bendL:-100},YOU));
 const mp=C((r-.05)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=3.0,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(240,600,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'👕',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(600,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-.05)/.2))});
// E: the chat: your message → confirmation → invite → he accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,text:'Every school day at 15:30, remind my son: bring your jumper 👕',time:'20:41'},{a:.6,me:0,text:'✅ Got it! Mon–Fri 15:30 → your son: 👕 Jumper! Before you leave.',time:'20:41'},{a:1.5,date:'Invite sent · no app needed'},{a:2.4,date:'✓ He tapped Accept'}]})});
// F: next school day, 15:30 at the school door: his phone buzzes, he grabs the jumper off the bench and pulls it on
const F0=T('k2')-1.0,NT=.15;
sh(F0,(t,r)=>{cam(540,1040,lerp(1.05,1.1,C(r/2.4)),t,.12);
 gate(t,{h:3,m:30,cold:1});
 const ping=r>NT,grab=r>1.15,on=r>1.75;
 rr(770,930,120,30,10,'#6b4a35',5);circ(830,975,14,'#3a2a20',4);
 if(!grab)jumper3(830,985,.7,{rot:0,drape:1,tag:1});
 kidbag(520,1810,1.04,'#ffb02e',1);
 sm(520,1810,1.04,Object.assign({t,eyes:ping&&!on?'open':'happy',brow:'up',mouth:on?'grin':(ping?'o':'smile'),talk:r>1.0&&r<1.9?t:null,look:ping&&!grab?[0,.5]:[.6,.1],
  armR:on?38:(grab?150:60),bendR:on?-10:(grab?-20:-50),holdR:grab&&!on?(hx,hy)=>jumper3(hx+20,hy-40,.7,{rot:.3,drape:1}):(!grab?(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0):null),armL:on?38:30,bendL:on?-10:20},KID,on?{jumper:1}:TEE));
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.6)/.25)),'Memopai','👕 Jumper! Before you leave.')});
// G: same gate framing as A, warm sun: your kid walks out IN the jumper, you raise your coffee
sh(T('p1')-.08,(t,r)=>{cam(540,1040,lerp(1.05,1.09,C(r/3.5)),t,.12);
 gate(t,{warm:1,h:3,m:35});
 const kx=lerp(330,400,C(r/1.6));
 kidbag(kx,1800,1.0,'#ffb02e',1);
 sm(kx,1800,1.0,Object.assign({t,walk:r<1.6?t:null,eyes:'happy',brow:'up',mouth:'grin',look:[.6,.1],armR:r>1.6?150:20,bendR:r>1.6?-40:10,armL:20,bendL:10,jumper:1},KID));
 sm(760,1820,1.16,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'smile',blush:r>1.2,look:[-.6,.3],armR:r>1.6?150:100,bendR:r>1.6?-40:-100,holdR:(hx,hy)=>pmug(hx,hy+20,1.0,'#ffd23f'),armL:20,bendL:10},YOU));
 if(r>1.7)sparkles(400,1200,C((r-1.7)/1.2),8,160);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.0,0,1));
