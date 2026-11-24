// 2026-11-24 16:00 STORY — "'Mum, why didn't you remind me??' (You did. Three times. At breakfast.)"
// First CHAT-ONLY text-thread reel (trend #3). craft ladder (look3.js): waDots() typing bubble + o.typing/o.typingMe in waChat
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const DAU={hair:'bun',hairc:'#5a3a26',lashes:1,pj:'#ff7aa8',limb:'#2b3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
const SS=1.12,SY=1500+340*1.12+40;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,150,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function dauAv(x,y,r){circ(x,y,r,'#ffb3cc',0);X.font=(r*1.1|0)+"px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('👧',x,y+3);X.textAlign='left'}
function chatBg(t,warm){X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);if(warm){g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0')}else{g.addColorStop(0,'#3a2440');g.addColorStop(1,'#c2645a')}X.fillStyle=g;X.fillRect(0,0,1080,1920);
 bokeh(t,warm?'140,220,255':'255,170,140',9,200,1000);glow(540,900,760,warm?'140,220,255':'255,170,140',.28)}
const OLD=[{a:-1,me:0,text:"MUM why didn't u remind me about football?? 😡",time:'16:40'},{a:-1,me:0,text:'coach is SO mad',time:'16:40'}];
const MINE={me:1,text:'I did. 3 times. At breakfast. 🙂',time:'16:41',kind:3};
// A: frame 1 = her angry texts; your deadpan reply pops in
const RA=T('r1')+.15-0;
sh(0,(t,r)=>{NOFX=1;chatBg(t,0);
 waChat(540,960,lerp(1.08,1.12,C(r/5)),r,{name:'Daughter 👧',sub:'online',av:dauAv,clock:'16:41',list:OLD.concat([Object.assign({a:RA},MINE)])})});
// A2: closer: she's typing… then the comeback
const A2=T('k1')-.65;
sh(A2,(t,r)=>{NOFX=1;chatBg(t,0);
 waChat(540,900,lerp(1.1,1.13,C(r/2.5)),r,{name:'Daughter 👧',sub:'online',av:dauAv,clock:'16:41',typing:r<.6?C(r/.15):0,
  list:OLD.concat([Object.assign({a:-1},MINE),{a:.6,me:0,text:"I wasn't LISTENING at breakfast 🙄",time:'16:41'}])})});
// B1: Memopai chat: one plain message, ✅ confirmation
sh(T('s2')-.15,(t,r)=>{NOFX=1;chatBg(t,1);
 phoneUI(540,930,1.16,r,{typing:r>3.0&&r<3.8,list:[{a:.55,me:1,text:'Every Tue + Thu at 15:30, remind my daughter: football ⚽',time:'16:43'},{a:3.8,me:0,text:'✅ Got it! Tue + Thu 15:30 → your daughter: ⚽ Football at 4, boots on! 👟',time:'16:43'}]});
 if(r>3.8)sparkles(540,1000,C((r-3.8)/1),10,300,'#7cf0a0')});
// B2: HER phone: Memopai's invite lands, she taps Accept once (finger tap ripple)
sh(T('s3')-.1,(t,r)=>{NOFX=1;chatBg(t,1);
 const tap=C((r-1.0)/.35);
 waChat(540,960,1.08,r,{name:'Memopai',sub:'online',clock:'16:44',list:[{a:-1,date:'TODAY'},{a:.1,me:0,text:"👋 Hi! Your mum set a reminder for you: ⚽ Football · every Tue + Thu at 15:30",time:'16:44'},{a:.5,date:r<1.25?'👉  Accept  ':'✅ Accepted · no app needed'}]});
 if(r>.8&&r<1.8){X.save();X.globalAlpha=1-C((r-1.35)/.4);circ(540,952+60*(1-eo(C((r-.8)/.3))),46,'rgba(255,255,255,.55)',5);if(tap>0){X.strokeStyle='rgba(255,255,255,.8)';X.lineWidth=6;X.beginPath();X.arc(540,952,46+tap*60,0,7);X.stroke()}X.restore()}});
// C: Thursday 15:30: she's gaming in headphones, her phone buzzes on the sofa; she groans and gets up with the ball
function room(t,o={}){proom(t,{win:780,night:0,lamp:o.warm?230:0,plant:200,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:o.warm?'#f6e2c6':'#e8eef6',wall2:o.warm?'#ecd0a8':'#cfd9e6'});
 glow(780,520,720,'255,236,180',o.warm?.5:.38);wclock(300,560,.62,o.h||15,o.m||30);psofa(560,1700,1.15,o.sofa||'#5a7fb5',o.sofa2||'#4a6a9a')}
const C0=T('p1')-.2,NB=.15,UP=1.75;
sh(C0,(t,r)=>{cam(540,1030,lerp(1.03,1.08,C(r/2.8)),t,.1);room(t,{h:15,m:30,sofa:'#e07a5f',sofa2:'#c4644b'});
 const hy=HD(SY,SS),ping=r>NB;
 if(r<UP){const heard=r>1.0;
  sm(500,SY,SS,Object.assign({t,eyes:heard?'open':(ping?'wide':'open'),lid:heard?.4:0,brow:heard?'flat':'up',mouth:heard?'wavy':'grin',look:ping?[.7,.5]:[0,.4],armL:110,bendL:-100,armR:110,bendR:-110,
   holdR:(x,yy)=>pad3(x-40,yy-10,1,-.1)},DAU,SIT));
  if(!heard)headphones3(500,hy+60,1.1);
  X.save();const j=ping&&r<1.4?Math.sin(t*60)*5:0;X.translate(790+j,1585);X.rotate(-.25);if(ping)glow(0,0,130,'130,240,160',.5);rr(-60,-26,120,52,10,'#1b1b1f',5);rr(-50,-18,100,36,6,ping?'#25d366':'#3a4a66',0);X.restore();
 }else{const k=eo(C((r-UP)/.35));
  sm(540,1790-Math.sin(k*Math.PI)*60,1.12,Object.assign({t,eyes:'open',brow:'up',mouth:'smirk',look:[.4,.2],armL:20,bendL:-20,armR:60,bendR:-120,holdR:(x,yy)=>ball3(x+10,yy-20,1.3,t)},DAU));
  sparkles(540,1100,C((r-UP)/.8),8,220)}
 if(ping)notif(338,C((r-NB)/.25)*(1-C((r-NB-1.35)/.2)),'Memopai','⚽ Football at 4, boots on! 👟');
 if(r>UP+.05)label3('Your daughter, 15:30 ⚽',C((r-UP-.05)/.2))});
// D: you, same sofa, warm light, coffee: her text slides in, then 'You, sorted'
const D0=T('p2')-.35;
sh(D0,(t,r)=>{cam(540,1040,lerp(1.03,1.07,C(r/4)),t,.1);room(t,{warm:1,h:15,m:31});
 const hy=HD(SY,SS);
 sm(540,SY,SS,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'flat',mouth:'smile',tilt:-6,look:[.3,.5],armR:110,bendR:-120,holdR:(x,yy)=>mug3(x,yy-30,1.2,{t}),armL:100,bendL:-110,holdL:(x,yy)=>phoneH(x,yy,-.1,r>.15)},YOU,SIT));
 if(r>.1)notif(338,C((r-.1)/.25)*(1-C((r-1.55)/.2)),'Daughter 👧','omw to football ⚽');
 sparkles(540,hy,C((r-1.6)/1.2),10,240,'#fff7b0');
 if(r>1.75)label3('You, sorted 😌',C((r-1.75)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: you on the sofa, phone glowing, her 😡 popping out of it, deadpan face
sh(1000,(t,r)=>{cam(540,1040,1.04,t,0);room(t,{h:16,m:40});
 const hy=HD(SY,SS);
 sm(540,SY,SS,Object.assign({t,eyes:'open',lid:.45,brow:'flat',mouth:'wavy',look:[.3,.6],armR:110,bendR:-115,holdR:(x,yy)=>phoneH(x-6,yy,.05,1)},YOU,SIT));
 emo(760,hy-80,'😡',1.25,1)});
