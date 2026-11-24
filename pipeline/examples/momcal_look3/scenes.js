// 2026-11-24 14:00 CUSTOMERS — "'Don't worry, it's on my calendar!' (Mom's calendar: still October)"
// Tuesday 'Remind Mom' demo. craft ladder: wallcal3() hanging wall calendar (look3.js)
const YOU={hair:'curl',limb:'#34405a'};
const MOM={hair:'bun',hairc:'#b9b9c4',lashes:1,pj:'#b96ad9',limb:'#5a3a6a'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function momAv(x,y,r){circ(x,y,r,'#f6c56b',0);X.font=(r*1.1|0)+"px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('👩‍🦳',x,y+3);X.textAlign='left'}
// WhatsApp-style banner from MOM (not Memopai): screen space, same safe box as notif()
function notifMom(y,p,title,body){if(p<=0)return;X.save();X.setTransform(1,0,0,1,0,0);y=Math.max(y,338);X.globalAlpha=C(p*2);X.translate(540,lerp(-420,0,eo(p)));X.scale(.86,.86);X.translate(-540,0);rr(60,y,960,230,48,'rgba(250,250,252,.97)',6);
 X.save();X.beginPath();X.roundRect(100,y+40,84,84,20);X.fillStyle='#25d366';X.fill();X.restore();momAv(142,y+82,36);
 X.font="800 48px Inter,'Noto Color Emoji'";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,210,y+64);X.font="500 30px Inter";X.fillStyle='#888';X.textAlign='right';X.fillText('now',985,y+64);
 X.textAlign='left';X.font="600 46px Inter,'Noto Color Emoji'";X.fillStyle='#222';wrapT(body,770,X.font).slice(0,2).forEach((l,i)=>X.fillText(l,210,y+128+i*54));X.restore()}
// office desk seen from the front
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-430,320,40,40,6,'#5b4636',5);rr(390,320,40,40,6,'#5b4636',5);
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,o.glowc||'#8fd0ff',0);
  if(o.type){for(let k=0;k<4;k++)rr(-110,-196+k*38,lerp(80,220,(Math.sin(k*2+o.t*3)+1)/2),14,6,'rgba(255,255,255,.7)',0)}X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,'#e86a5a');if(o.steam){X.save();X.globalAlpha=.5;for(let k=0;k<3;k++)line([[-320+k*20,-110],[-310+k*20+Math.sin(o.t*3+k)*8,-170]],5,'#fff');X.restore()}}
 X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));}
function myRoom(t){proom(t,{win:780,night:0,wall:'#f6e6cf',wall2:'#ecd2b0',curtain:'#5a8fd0',curtain2:'#3f72b4',plant:200,lamp:0});glow(780,520,700,'255,236,180',.45);psofa(560,1700,1.15,'#5a7fb5','#4a6a9a')}
function momRoom(t,o={}){proom(t,{win:820,night:0,wall:'#f9e2c8',wall2:'#efc9a1',curtain:'#8f6bb0',curtain2:'#72529a',plant:0,lamp:0,frame:null});glow(820,500,700,'255,240,190',.5);
 rr(0,1240,1080,40,8,'#d9b48a',5);rr(0,1280,1080,700,0,'#c79a6c',0);for(let k=0;k<4;k++)rr(40+k*270,1320,230,300,14,'#b98a5c',5);
 if(!o.nocal)wallcal3(o.calX||300,o.calY||520,o.calS||1.05,{month:'OCTOBER',pic:'🎃',cob:o.cob==null?1:o.cob,sway:t,first:3});
 if(o.clock)wclock(o.clockX||800,520,.6,o.h||9,o.m||0)}
function momPhone(t,x,o){sm(x,1760,1.15,Object.assign({t,flip:1,armL:165,bendL:-150,holdL:(hx,hy)=>{rr(hx-30,hy-80,60,120,14,'#1b1b1f',5)}},MOM,o))}

// ---- A: frame 1 = split call: you on the sofa | Mom in her kitchen, cheerful; then her side fills the frame and pushes into the calendar: OCTOBER
const B1=T('s1')-T('h1');
sh(0,(t,r)=>{
 if(r<B1){const rel=r>.25;split2(t,
   (t)=>{myRoom(t);sm(540,1830,1.12,Object.assign({t,armR:165,bendR:-115,holdR:(hx,hy)=>{rr(hx-30,hy-90,60,120,14,'#1b1b1f',5)},eyes:'open',lid:rel?.35:0,brow:'flat',mouth:'smile',look:[.6,0]},YOU))},
   (t)=>{momRoom(t,{nocal:1});momPhone(t,640,{eyes:'happy',brow:'up',mouth:'open',talk:t,blush:1,armR:40,bendR:-30})},
   {camA:[560,1000,1.0],camB:[560,1000,1.0],p:1});
  label3('You, calling Mom 🙂',C((r-.1)/.2))}
 else{const q=r-B1,z=eo(C(q/.9));cam(lerp(560,380,z),lerp(1000,840,z),lerp(1.0,1.38,z),t,.08);momRoom(t,{calX:300,calY:470,calS:.9,cob:C((q-.3)/.5)});
  momPhone(t,600,{eyes:'happy',brow:'up',mouth:'smile',blush:1,armR:40,bendR:-30});
  if(q>.6){X.save();X.globalAlpha=C((q-.6)/.3);X.strokeStyle='#ff3b30';X.lineWidth=8;X.beginPath();X.ellipse(300,741,150,46,-.05,0,7*C((q-.6)/.5));X.stroke();X.restore()}
  label3("Mom's calendar 🗓️",C((q-.2)/.2))}});

// ---- C: Thursday, rain: you at your desk, Mom's text lands: missed the doctor. Next slot: February.
const C0=T('s2')-.05;
sh(C0,(t,r)=>{cam(540,1000,lerp(1.04,1.12,C(r/3)),t,.15);office(t,{wall:'#b7c2d0',wall2:'#9eabbd'});prain(t,.35,60);
 const hit=r>.3;
 sm(470,1760,1.26,Object.assign({t,eyes:hit?'wide':'open',lid:hit?0:.3,brow:hit?'worried':'flat',mouth:hit?'o':'smile',look:hit?[.6,.7]:[0,0],sweat:r>1.4,tilt:r>1.6?-6:0,
  armR:35,bendR:-115,holdR:(x,y)=>phoneH(x,y,-.12,hit)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t,type:!hit,glowc:'#c9d6e6'});
 if(r<2.0)notifMom(338,r<1.75?C((r-.15)/.25):C((2.0-r)/.25),'Mom ❤️','I missed the doctor 🙈 Next slot: February');
 else label3('You, Thursday 😩',C((r-2.0)/.2))});

// ---- D: next time: you, voice note; Memopai hops onto the desk; the 🩺 thought leaves your head into the phone -> your chat
const D0=T('m1')-.05,DZ=1.55;
sh(D0,(t,r)=>{
 if(r<DZ){cam(540,1000,1.04,t,.2);office(t);glow(780,500,600,'255,240,200',.25);
  sm(400,1760,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:r>.35?'open':'smile',talk:r>.35?t:null,look:[.6,-.2],armR:40,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,1)},YOU));
  desk(540,1460,1.05,{laptop:1,lx:-260,t});
  const mp=C((r-.05)/.55);if(mp>0){memo(750,1440,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(750,1100,mp,10,240)}
  const fl=C((r-.5)/.9);if(fl<1){const px=lerp(560,470,eo(fl)),py=lerp(560,1060,eo(fl))-Math.sin(fl*Math.PI)*60;chip(px,py,'🩺',.9-fl*.5)}else sparkles(470,1060,C((r-1.4)/.3),8,120,'#7cf0a0');
  label3('Memopai 😎',C(r/.2))}
 else{const q=r-DZ;NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
  phoneUI(540,930,lerp(1.0,1.16,eo(C(q/.3))),q+.9,{typing:q>.3&&q<.6,list:[{a:0,me:1,voice:1,dur:'0:04',pl:C(q/1),time:'19:02'},{a:.3,me:1,text:'Remind Mom Thursday at 9: doctor at 10:30 🩺',time:'19:02'},{a:1.5,me:0,text:"✅ Got it! I'll remind Mom · Thu 9:00",time:'19:02'}]})}});

// ---- E: MOM's phone: the Memopai invite, she taps Accept once
const E0=T('m2')-.05,TAP=T('m2')+2.55-E0;
function acceptBtn(x,y,p,tap){X.save();X.translate(x,y);const sc=lerp(.7,1,eo(C(p)))*(tap>0&&tap<.3?.92:1);X.scale(sc,sc);X.globalAlpha=C(p*2);
 X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=20;rr(-200,-52,400,104,52,tap>0?'#128c4a':'#25d366',6);X.shadowColor='transparent';
 X.font="900 50px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText(tap>0?'✓ Accepted':'Accept',0,4);X.restore()}
function finger(x,y,s,a){if(a<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.rotate(-.35);rr(-34,-20,68,240,34,'#1b1b1f',0);ell(0,-10,34,40,'#1b1b1f',0);X.restore()}
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#4a2f5c';X.fillRect(0,0,1080,1920);glow(540,900,760,'230,180,255',.28);
 const s=lerp(1.08,1.16,C(r/3.6)),tap=r-TAP;
 waChat(540,930,s,r,{name:'Memopai',sub:'online',av:(x,y,rr2)=>avatar(x,y,rr2,0),clock:'19:03',list:[
  {a:.15,me:0,text:'👋 Hi Mom! Your kid set a reminder for you here. Tap Accept to get it.',time:'19:03'}]});
 acceptBtn(540,1150,C((r-.5)/.3),tap);
 const fa=r<TAP?C((r-.9)/.3):C(1-(tap-.5)/.3),fy=r<TAP?lerp(1500,1210,eo(C((r-.9)/(TAP-.9)))):1210;finger(600,fy,1,fa);
 if(tap>0&&tap<.7)sparkles(540,1150,C(tap/.6),12,300,'#ffffff');
 if(r<TAP+.1)label3("Mom's phone 📱",C((r-.1)/.2));else label3('Tapped once ✅',C((r-TAP-.1)/.2))});

// ---- F: Thursday 9:00, Mom's kitchen (calendar still October): the reminder buzzes; she grabs her bag, beaming
const F0=T('m3')-.05;
function handbag(x,y,s){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.arc(0,-40,46,Math.PI,0)},null,9,'#7a3f2a');rr(-70,-50,140,110,22,'#c4643f',6);rr(-20,-20,40,16,6,'#f2c14e',0);X.restore()}
sh(F0,(t,r)=>{cam(560,1010,lerp(1.03,1.08,C(r/3)),t,.1);momRoom(t,{calX:270,calY:470,calS:.75,cob:1,clock:1,clockX:820,h:9,m:0});
 const buzz=r<1.5,go=C((r-1.5)/.5);
 sm(470,1780,1.15,Object.assign({t,eyes:go>0?'happy':'wide',brow:'up',mouth:go>.3?'grin':'o',look:[.6,-.3],lean:go*6,blush:go>0?1:0,
  armL:110,bendL:-110,holdL:(hx,hy)=>{X.save();if(buzz){X.translate(Math.sin(t*60)*4,0)}phoneH(hx,hy+10,-.1,1);X.restore()},
  armR:go>0?40:20,bendR:go>0?-20:10,holdR:go>0?(hx,hy)=>handbag(hx,hy+50,.9*go+.1):null},MOM));
 if(buzz){X.save();X.globalAlpha=.7;for(let k=1;k<4;k++)circ(380,1060,30+k*24+Math.sin(t*20)*4,null,4);X.restore()}
 if(r<1.85)notif(338,r<1.6?C((r-.1)/.25):C((1.85-r)/.25),'Memopai','⏰ Doctor at 10:30 today, Mom! 🩺');
 else label3('Mom, Thursday 9:00 🩺',C((r-1.85)/.2))});

// ---- G: same desk, SUN: Mom's text 'At the doctor's. Early!' You lean back with a coffee.
const G0=T('p1')-.05;
sh(G0,(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/3.8)),t,.12);office(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,480,760,'255,226,150',.55);rays(780,380,t,'255,236,170',.2);
 const rel=r>.5;
 sm(470,1760,1.26,Object.assign({t,eyes:rel?'happy':'open',brow:'up',mouth:rel?'grin':'smile',look:[.6,.6],tilt:rel?6:0,lean:rel?-6:0,blush:rel?1:0,
  armR:35,bendR:-115,holdR:(x,y)=>phoneH(x,y,-.12,1)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t,mug:1,steam:1});
 if(r<2.0)notifMom(338,r<1.75?C((r-.1)/.25):C((2.0-r)/.25),'Mom ❤️',"At the doctor's. Early! 😎");
 else label3('You, sorted 😌',C((r-2.0)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));

// cover-only shot: Mom in her kitchen, phone at ear, beaming, next to the OCTOBER calendar with cobwebs
sh(1000,(t,r)=>{cam(540,960,1.0,t,.0);momRoom(t,{calX:310,calY:600,calS:1.0,cob:1});
 momPhone(2.2,700,{eyes:'happy',brow:'up',mouth:'grin',blush:1,armR:40,bendR:-30});
 X.save();X.strokeStyle='#ff3b30';X.lineWidth=9;X.beginPath();X.ellipse(310,901,170,52,-.05,0,7);X.stroke();X.restore()});
