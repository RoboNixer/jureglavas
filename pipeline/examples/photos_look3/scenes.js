// 2026-11-25 16:00 STORY — "'I'll send you the photos tonight!' (Three weeks ago.)"
// craft ladder: splitPanel3() in look3.js = split-screen before/after panel (clip + world-to-panel transform + divider)
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const HER={hair:'bun',hairc:'#e2508a',lashes:1,pj:'#f2b36a',limb:'#3a3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,150,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function herAv(x,y,r){circ(x,y,r,'#ffb3cf',0);X.font=(r*1.1|0)+"px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('💛',x,y+3);X.textAlign='left'}
function myRoom(t,o={}){proom(t,{win:780,night:1,lamp:o.warm?230:0,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:o.warm?'#e9d2b6':'#9fa6bd',wall2:o.warm?'#d9b892':'#7d849c',plant:o.warm?0:0});
 if(o.warm)glow(230,760,760,'255,206,140',.5);else{X.save();X.globalAlpha=.42;X.fillStyle='#0e1634';X.fillRect(-3000,-3000,8000,8000);X.restore()}
 wclock(300,560,.62,o.h||21,o.m||14);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a')}
const SY=1500+340*1.12+40,SS=1.12;
function youGuilty(t,r,x){const hy=HD(SY,SS);
 sm(x,SY,SS,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[.15,.7],armL:120,bendL:-120,armR:110,bendR:-115,holdR:(hx,hy2)=>phoneH(hx-6,hy2,.05,1)},YOU,SIT));return hy}
function youCalm(t,r,x,hearts){const hy=HD(SY,SS);
 sm(x,SY,SS,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:1,look:[.2,.5],tilt:Math.sin(t*1.5)*2,armL:120,bendL:-120,armR:110,bendR:-115,holdR:(hx,hy2)=>phoneH(hx-6,hy2,.05,1)},YOU,SIT));
 if(hearts)for(let k=0;k<3;k++){const z=((t*.45+k/3)%1);X.save();X.globalAlpha=1-z;X.font="70px 'Noto Color Emoji'";X.textAlign='center';X.fillText(['😍','💛','🥹'][k],x+120+k*40,hy+120-z*260);X.restore()}
 return hy}
// A: frame 1 = 3 weeks later, night sofa, phone glowing, guilty face, 📸 circling your head
function shotA(t,r,lab,cv){if(cv)cam(540,1040,1.04,t,0);else cam(540,1040,lerp(1.02,1.08,C(r/3.2)),t,.1);
 myRoom(t,{h:21,m:14});
 const hy=youGuilty(t,r,540);
 if(!cv)headLoop(540,hy-260,t,['📸','🙈','📸'],C((r-1.2)/.4),300);else emo(760,hy-140,'📸',1.05,1);
 if(lab)label3('You, 3 weeks later 😬',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: the chat with her: your promise from Nov 2 (blue ticks), today her 'sooo... the photos? 👀', you start typing
sh(T('r1')-.15,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b4a';X.fillRect(0,0,1080,1920);glow(540,900,760,'150,190,255',.28);
 waChat(540,960,lerp(1.1,1.15,C(r/3.3)),r,{name:'Mia 💛',sub:'online',av:herAv,clock:'21:14',typing:r>2.3?1:0,typingMe:1,list:[
  {date:'Sun, Nov 2',a:-1},
  {a:-1,me:1,text:"Best weekend EVER 😭 I'll send you the photos tonight!! 📸",time:'23:58',kind:3},
  {date:'Today',a:.3},
  {a:.4,me:0,text:'sooo... the photos? 👀',time:'21:14'}]})});
// C: next time: Sunday goodbye outside, she waves and walks off, you voice-note, Memopai hops in, the 📸 flies into your phone
sh(T('s2')-.3,(t,r)=>{cam(540,1080,lerp(1.03,1.08,C(r/5.8)),t,.1);
 psky('#7ec8f0','#bfe4f7','#f6ecd8',1060);psun(840,380,90,t);pclouds(t,280);proad(t,{hz:1060});glow(780,420,700,'255,236,180',.35);
 const talk=r>1.6&&r<4.6,y=1800,s=1.12,hy=HD(y,s);
 const hx=lerp(700,1250,eo(C((r-1.2)/1.6)));
 if(hx<1200)sm(hx,y,s*.95,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.7,0],armR:r<1.6?150+Math.sin(t*12)*15:20,bendR:-30,armL:20,bendL:10,walk:r>1.2?t:null},HER));
 sm(370,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?(Math.sin(t*14)>0?'open':'smile'):'smile',look:r<1.6?[.8,0]:[.4,.3],armL:r<1.4?150+Math.sin(t*12)*15:20,bendL:r<1.4?-30:10,armR:110,bendR:-115,holdR:(hx2,hy2)=>phoneH(hx2+8,hy2,.1,talk)},YOU));
 const mp=C((r-2.2)/.5);if(mp>0){memo(790,1600,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(790,1300,mp,8,180)}
 const ft=3.5,fl=C((r-ft)/.9);if(r>ft-.4){if(fl<1){const px=lerp(250,500,eo(fl)),py=lerp(hy-200,hy+250,eo(fl))-Math.sin(fl*Math.PI)*80;emo(px,py,'📸',C((r-ft+.4)/.3)*(1-fl*.5))}else sparkles(500,hy+250,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 if(r>2.2)label3('Memopai 😎',C((r-2.2)/.2))});
// D: the chat with Memopai: voice note -> confirmation
sh(T('s3')-.15,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.6&&r<.95,list:[{a:0,me:1,voice:1,pl:C(r/.7),dur:'0:03',time:'17:40'},{a:.95,me:0,text:'✅ Got it! Today 21:00 ⏰ Send Mia the photos 📸',time:'17:40'}]})});
// E: 21:00 on the sofa, zoned out (forgot again); the ping; you grin and send; photos fly out
const E0=T('f1')-.2,NT=2.2;
sh(E0,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/4.2)),t,.1);
 myRoom(t,{warm:1,h:21,m:0});
 const ping=r>NT,hy=HD(SY,SS);
 sm(540,SY,SS,Object.assign({t,eyes:ping?(r<NT+.6?'wide':'happy'):'open',lid:ping?0:.45,brow:ping?'up':'flat',mouth:ping?'grin':'flat',look:ping?[.15,.7]:[-.6,-.2],armL:120,bendL:-120,armR:110,bendR:-115,holdR:(hx,hy2)=>phoneH(hx-6,hy2,.05,ping&&r<NT+1?Math.sin(t*24)>0:ping)},YOU,SIT));
 if(r>NT+1.1)for(let k=0;k<5;k++){const p=C((r-NT-1.1-k*.12)/.8);if(p<=0||p>=1)continue;emo(lerp(600,820,eo(p)),lerp(hy+300,hy-200,eo(p))-Math.sin(p*Math.PI)*80,['🏖️','🌅','🍕','🥂','📸'][k],.75*(1-p*.4),1-C((p-.8)/.2))}
 if(ping)notif(338,C((r-NT)/.25)*(1-C((r-NT-1.4)/.25)),'Memopai','⏰ 21:00 · Send Mia the photos 📸');
 else label3('You, 21:00 🛋️',C(r/.2)*(1-C((r-NT+.3)/.2)))});
// F: SPLIT SCREEN: top = 3 weeks late (night, sweating), bottom = same night (warm, her hearts)
sh(T('p1')-.45,(t,r)=>{NOFX=1;
 splitPanel3(0,(tt)=>{myRoom(tt,{h:21,m:14});youGuilty(tt,r,540)},t,{cx:540,cy:1150,k:.8});
 splitPanel3(1,(tt)=>{myRoom(tt,{warm:1,h:21,m:4});youCalm(tt,r,540,1)},t,{cx:540,cy:1250,k:.7});
 X.setTransform(1,0,0,1,0,0);
 emo(790,500,'❌',.85,C((r-.2)/.2));emo(800,1280,'✅',.85,C((r-.6)/.2));
 label3('You, sorted 😌',C((r-.9)/.2),1060)});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,2.5,0,1));
