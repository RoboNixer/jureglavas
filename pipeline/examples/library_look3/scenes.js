// 2026-11-23 09:00 FOLLOWERS — "Monday 07:50. Library day. Where's the book?"
// craft ladder: libbook3() library book (sticker, barcode, bitten corner, drool), dogbed3() round plush dog bed (look3.js)
const YOU={hair:'curl'};
const KID={hair:'spike',hairc:'#4a3426',pj:'#3d8fd8',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function backpack(x,y,s=1,col='#ffb02e'){X.save();X.translate(x,y);X.scale(s,s);rr(-80,-110,160,220,40,col,8);rr(-60,0,120,80,20,'rgba(0,0,0,.12)',5);circ(0,-60,12,'#151515',0);X.restore()}
function frontDoor(x){X.save();rr(x-150,500,300,760,10,'#3f7f9e',8);rr(x-110,560,220,280,8,'rgba(255,255,255,.12)',4);rr(x-110,900,220,300,8,'rgba(255,255,255,.12)',4);circ(x-110,900,14,'#ffd23f',5);X.restore()}
function living(t,o={}){proom(t,{win:o.night?null:300,plant:0,lamp:o.night?1:0,night:o.night?1:0,frame:null,wall:o.wall||'#f1dcc0',wall2:o.wall2||'#e2c39f'});
 if(!o.night)glow(300,640,560,'255,236,190',.45)}
// A + G share the SAME framing: living room, sofa left, front door right, clock 07:50 above
function room(t,r,o){living(t,{wall:o.calm?'#f6e4c8':null});frontDoor(830);wclock(600,720,.85,7,50);
 psofa(330,1640,1.05,'#5a7fb5','#4a6a9a');
 // kid at the door with backpack (book in hand when calm)
 const ks=.82,ky=1700;
 sm(805,ky,ks,Object.assign({t,flip:1,eyes:o.calm?'happy':'open',brow:o.calm?'up':'worried',mouth:o.calm?'grin':'wavy',look:[-.6,.2],
  armL:o.calm?60:25,bendL:o.calm?-120:15,armR:o.calm?60:25,bendR:o.calm?120:15,
  tilt:o.calm?0:-4},KID));
 backpack(870,HD(ky,ks)+420,.8,'#ffb02e');
 if(o.calm)libbook3(785,HD(ky,ks)+300,.5,{rot:-.08})}
// A: 07:50, you on all fours by the sofa, head down looking under it
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.04,t,0);else cam(540,1070,lerp(1.03,1.09,C(r/3.8)),t,.1);
 room(t,r,{});
 sm(600,1800,1.05,{t:cv?1.7:t,crawl:1,flip:1,eyes:'wide',brow:'worried',mouth:'o',look:[-.7,.6],sweat:1,tilt:-8,hair:'curl'});
 if(lab)label3('You, Monday 07:50 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: whip to the dog's bed: dog sitting on it, the library book between his paws, bitten corner
sh(T('r1')-.08,(t,r)=>{cam(540,1060,lerp(1.06,1.12,eo(C(r/3.5))),t,.1);
 living(t,{wall:'#ead2b4',wall2:'#d9b993'});
 dogbed3(520,1500,1.2);
 dog(460,1440,1.15,{t,eyes:r>1.3?'puppy':'wide',mouth:r>1.3?'smile':'flat',tilt:r>1.3?-10:4,look:[.2,.6],wag:r>1.3});
 libbook3(610,1330,1.0,{rot:.18,chew:1,drool:1,t});
 dogbed3(520,1500,1.2,{front:1});
 label3('The library book 📕',C(r/.2))});
// C: that evening, sofa; Memopai hops onto the arm; the book emoji flies into your phone
const MP=.02;
sh(T('s2')-.05,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/2.6)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.3&&r<2.4;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'smile':'smirk',look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=1.0,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'📕',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// D: the chat: message -> confirmation -> invite -> he accepts
const D0=T('s2')+2.55;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.25&&r<.6,list:[{a:0,me:1,text:'Every Sunday 7pm, remind my son: library book in your bag 📚',time:'20:14'},{a:.6,me:0,text:'✅ Got it! Every Sunday 19:00 → your son: 📚 Library book in your bag!',time:'20:14'},{a:1.5,date:'📩 Invite sent to his WhatsApp'},{a:T('s3')-D0+1.5,date:'✓ He tapped Accept'}]})});
// E: Sunday 19:00, his room: phone buzzes, notification, he drops the book into his school bag; the dog watches it go
const E0=T('s3')+2.75,NT=.12;
function kidRoom(t){proom(t,{win:null,plant:0,lamp:1,night:1,frame:[250,500],wall:'#c9d6ea',wall2:'#a9b9d4',floor:'#a77b55',floor2:'#86603f'});glow(300,700,520,'255,200,140',.35);
 X.save();X.translate(760,540);X.rotate(.05);rr(-100,-120,200,240,8,'#7bc86c',6);circ(0,-20,50,'#ffd23f',5);X.restore()}
sh(E0,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/3.4)),t,.12);
 kidRoom(t);
 const ping=r>NT,kt=T('k1')-E0,drop=C((r-kt-.2)/.45);
 // desk with phone
 rr(80,1180,330,34,10,'#8a5a3a',6);rr(100,1214,30,330,6,'#6e4528',5);rr(360,1214,30,330,6,'#6e4528',5);
 phoneH(250,1180,0,ping&&r<kt&&Math.sin(t*24)>0);
 schoolbag3(520,1720,.75,{open:1,col:'#7e57c2'});
 const talk=r>kt&&r<kt+1.4;
 sm(730,1830,1.0,Object.assign({t,flip:1,eyes:talk?'closed':'open',brow:talk?'flat':'up',mouth:talk?'open':'o',talk:talk?t:null,look:[-.6,.4],
  armL:drop>0?60:95,bendL:drop>0?-20:-70,armR:20,bendR:10},KID));
 if(drop<1){const bx=lerp(610,520,eo(drop)),by=lerp(1330,1470,eo(drop))-Math.sin(drop*Math.PI)*90;libbook3(bx,by,lerp(.6,.45,drop),{rot:-.2+drop*.6})}
 if(drop>=1&&drop<1.6)sparkles(560,1480,C((r-kt-.65)/.5),8,140,'#ffd23f');
 dog(190,1760,.7,{t,eyes:drop>0?'puppy':'wide',mouth:drop>0?'smile':'flat',tilt:-8,look:[.6,-.2]});
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-kt+.1)/.25)),'Memopai','📚 Library book in your bag!')});
// G: same framing as A, Monday 07:50 again: you on the sofa with a coffee, kid at the door with the book, dog with a ball
function shotG(t,r){cam(540,1070,lerp(1.03,1.07,C(r/3.4)),t,.12);
 room(t,r,{calm:1});glow(500,800,700,'255,215,150',.3);
 const y=1780,s=1.05;
 sm(330,y,s,{legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1,t,eyes:'happy',brow:'up',mouth:'smile',blush:r>1,look:[.6,.2],armR:95,bendR:-95,holdR:(hx,hy)=>pmug(hx,hy+20,1.0,'#ffd23f'),armL:20,bendL:15,hair:'curl'});
 dog(550,1650,.72,{t,eyes:'happy',mouth:'open',tongue:1,wag:1,tilt:8});ball3(670,1630,.9);
 if(r>.3)sparkles(560,1100,C((r-.3)/1.5),10,200);
 label3('You, sorted 😌',C(r/.2))}
sh(T('p1')-.08,(t,r)=>shotG(t,r));
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.0,0,1));
