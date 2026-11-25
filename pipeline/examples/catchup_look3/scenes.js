// 2026-11-25 20:00 PRODUCTIVITY — "'We should catch up soon!' (You said it in March.)"
// craft ladder: pizza3(), slice3(), frame3() in look3.js
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const HER={hair:'bun',hairc:'#e2508a',lashes:1,pj:'#f2b36a',limb:'#3a3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,150,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function herAv(x,y,r){circ(x,y,r,'#ffb3cf',0);X.font=(r*1.1|0)+"px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('💛',x,y+3);X.textAlign='left'}
function myRoom(t,o={}){proom(t,{win:780,night:1,lamp:o.warm?230:0,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:o.warm?'#e9d2b6':'#9fa6bd',wall2:o.warm?'#d9b892':'#7d849c',plant:0});
 if(o.warm)glow(230,760,760,'255,206,140',.5);else{X.save();X.globalAlpha=.42;X.fillStyle='#0e1634';X.fillRect(-3000,-3000,8000,8000);X.restore()}
 frame3(300,620,.95,{web:!o.warm,fade:!o.warm});
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a')}
function herRoom(t){proom(t,{win:300,night:0,lamp:820,curtain:'#e88aa8',curtain2:'#c96a8a',wall:'#f3dfe8',wall2:'#e6c6d4',plant:820});glow(820,700,700,'255,210,170',.45);
 psofa(540,1700,1.15,'#e0a050','#c48838')}
const SY=1500+340*1.12+40,SS=1.12;
// A: frame 1 = 20:04, alone on the sofa, phone glowing, the dusty photo of you two on the wall
function shotA(t,r,lab,cv){if(cv)cam(540,1040,1.05,t,0);else cam(540,1040,lerp(1.02,1.08,C(r/3.4)),t,.1);
 myRoom(t);
 sm(560,SY,SS,Object.assign({t,eyes:'open',brow:'sad',mouth:'wavy',look:cv?[-.5,-.3]:(r<1.6?[.15,.7]:[-.7,-.35]),tilt:-3,armL:120,bendL:-120,armR:110,bendR:-115,holdR:(hx,hy2)=>phoneH(hx-6,hy2,.05,1)},YOU,SIT));
 if(lab)label3('You, 20:04 🥲',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: the chat with Bestie: your line in March, hers in July, today you start typing it AGAIN
sh(T('r1')-.15,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b4a';X.fillRect(0,0,1080,1920);glow(540,900,760,'150,190,255',.28);
 waChat(540,960,lerp(1.1,1.15,C(r/4)),r,{name:'Bestie 💛',sub:'last seen today',av:herAv,clock:'20:04',typing:r>1.9?1:0,typingMe:1,list:[
  {date:'Tue, Mar 3',a:-1},
  {a:-1,me:1,text:'We should catch up soon!! 🥹',time:'21:12',kind:3},
  {date:'Sat, Jul 19',a:.35},
  {a:.45,me:0,text:'omg YES we need to catch up soon 😭❤️',time:'22:40'},
  {date:'Today · Nov 25',a:1.7}]})});
// C: same sofa, you lift the phone and talk; Memopai hops onto the sofa; the 🍕 flies into your phone
const C0=T('s2')-.3,MP=.55;
sh(C0,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/5)),t,.1);
 myRoom(t);glow(540,900,700,'255,220,160',.18*C((r-MP)/.6));
 const talk=r>.5&&r<4.3,hy=HD(SY,SS);
 sm(470,SY,SS,Object.assign({t,eyes:'open',brow:'up',mouth:talk?(Math.sin(t*14)>0?'open':'smile'):'smirk',look:r<MP?[.6,.1]:[.25,.6],armL:120,bendL:-120,armR:100,bendR:-130,holdR:(hx,hy2)=>phoneH(hx-4,hy2-40,.1,talk)},YOU,SIT));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1560,.78,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1260,mp,8,180)}
 const ft=2.5,fl=C((r-ft)/.9);if(r>ft-.4){if(fl<1){const px=lerp(300,560,eo(fl)),py=lerp(hy-200,hy+210,eo(fl))-Math.sin(fl*Math.PI)*80;emo(px,py,'🍕',C((r-ft+.4)/.3)*(1-fl*.5))}else sparkles(560,hy+210,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 if(r>MP)label3('Memopai 😎',C((r-MP)/.2))});
// D: the Memopai chat: voice note -> confirmation -> Bestie accepted
sh(T('s3')-.15,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.7&&r<1.05,list:[{a:0,me:1,voice:1,pl:C(r/.8),dur:'0:04',time:'20:06'},{a:1.05,me:0,text:'✅ Got it! Every 1st Friday, 18:00 ⏰ You + Bestie 💛: pizza at 19:00 🍕',time:'20:06'},{a:3.4,me:0,text:'Bestie 💛 accepted ✅ No app needed.',time:'20:07'}]})});
// E: SPLIT: first Friday, 18:00. Top = you, bottom = her; both zoned out, then both phones ping
const NT=2.0;
function pinged(tt,r,x,who,room){room(tt);const ping=r>NT;
 sm(x,SY,SS,Object.assign({t:tt,eyes:ping?(r<NT+.6?'wide':'happy'):'open',lid:ping?0:.45,brow:ping?'up':'flat',mouth:ping?'grin':'flat',look:ping?[.15,.7]:[-.6,-.2],armL:120,bendL:-120,armR:110,bendR:-115,holdR:(hx,hy2)=>phoneH(hx-6,hy2,.05,ping&&r<NT+1?Math.sin(tt*24)>0:ping)},who,SIT));
 if(ping&&r>NT+.9)emo(x+250,HD(SY,SS)+60,'🍕',.9,C((r-NT-.9)/.3))}
sh(T('f1')-.2,(t,r)=>{NOFX=1;
 splitPanel3(0,(tt)=>pinged(tt,r,540,YOU,(q)=>myRoom(q,{warm:1})),t,{cx:540,cy:920,k:.78});
 splitPanel3(1,(tt)=>pinged(tt,r-.15,540,HER,herRoom),t,{cx:540,cy:1340,k:.72});
 X.setTransform(1,0,0,1,0,0);

 if(r>NT)notif(338,C((r-NT)/.25)*(1-C((r-NT-2.2)/.25)),'Memopai','⏰ Pizza with Bestie at 19:00 🍕')});
// F: the pizza place, warm light: you + her laughing, slices up, phones face down (reverses frame 1)
function phoneDown(x,y,rot){X.save();X.translate(x,y);X.rotate(rot);rr(-40,-16,80,32,8,'#1b1b1f',4);X.restore()}
function pizzaShot(t,r,lab){cam(540,1060,lerp(1.03,1.09,C(r/4.5)),t,.1);
 bistro(t,{night:0});glow(540,700,900,'255,206,140',.45);strlights(t,330,4,70);
 chair3(300,1560,1.05);chair3(780,1560,1.05);
 const y=1920,s=1.12,lf=Math.sin(t*9)>0;
 sm(330,y,s,Object.assign({t,eyes:'happy',brow:'up',mouth:lf?'grin':'open',blush:1,look:[.8,0],tilt:Math.sin(t*3)*4,armR:150,bendR:-60,holdR:(x,yy)=>slice3(x+10,yy-40,1,.3),armL:30,bendL:60},YOU));
 sm(760,y,s*.98,Object.assign({t,eyes:'happy',brow:'up',mouth:lf?'open':'grin',blush:1,look:[-.8,0],tilt:-Math.sin(t*3+1)*4,armL:150,bendL:-60,holdL:(x,yy)=>slice3(x-10,yy-40,1,-.3),armR:30,bendR:60},HER));
 rtable(540,1760,1.35,{flowers:0});pizza3(540,1560,.95,{gone:2,steam:1,t});phoneDown(330,1610,.2);phoneDown(760,1612,-.15);
 if(lab)label3('You, sorted 😌',C((r-.3)/.2))}
sh(T('p1')-.45,(t,r)=>pizzaShot(t,r,1));
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,2.5,0,1));
