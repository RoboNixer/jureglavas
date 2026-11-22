// 2026-11-22 12:00 STORY — "Your kid promised to feed the hamster. Guess who's feeding him?"
// craft ladder: hamster3(), cage3(), hfood() (look3.js)
const YOU={hair:'curl',pj:'#8fa8d8',limb:'#2b3550'};
const SON={hair:'spike',hairc:'#4a3426',tee:'#ff9f43',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function lroom(t,o={}){proom(t,{win:820,plant:0,lamp:1,night:o.night?1:0,frame:[250,560],wall:o.warm?'#ecd5b5':'#d9c7a8',wall2:o.warm?'#d8b892':'#c4ad8a',curtain:'#6a7fb0',curtain2:'#56699a'});
 if(o.night&&!o.warm){X.save();X.fillStyle='rgba(20,30,100,.38)';X.fillRect(-2000,-2000,5000,5000);X.restore();glow(700,900,420,'255,214,150',.32)}
 if(o.warm)glow(300,800,620,'255,205,130',.5)}
function ctable(x,y,s){X.save();X.translate(x,y);X.scale(s*.8,s);rr(-250,-20,500,34,8,'#8a5a3a',6);rr(-220,10,30,170,6,'#6d4429',5);rr(190,10,30,170,6,'#6d4429',5);X.restore()}
const CX=690,CY=1470,CS=.78; // cage on a low table (right)
// A: frame 1 = 22:10, you in pyjamas pouring food into the cage; hamster stuffing its cheeks
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.03,t,0);else cam(540,1060,lerp(1.03,1.09,C(r/4.8)),t,.12);
 lroom(t,{night:1});wclock(250,600,.85,10,10);
 ctable(CX,CY+20,1);
 const pour=r>.4&&r<4.2;
 cage3(CX,CY,CS,{t,fill:C((r-.8)/1),inner:()=>hamster3(-100,-92,.8,{t,cheeks:C((r-1)/1.6),munch:r>1,seed:r>1,look:[-.8,-.4]})});
 if(pour){X.save();for(let k=0;k<6;k++){const q=((r*2.2+k/6)%1);ell(CX-101+Math.sin(k)*8,1060+q*300,7,5,k%2?'#6b4a2a':'#e0b060',2)}X.restore()}
 sm(340,1880,1.15,Object.assign({t,eyes:'open',lid:.5,brow:'flat',mouth:r>3?'wavy':'flat',look:[.7,.2],armR:pour?150:40,bendR:pour?-40:20,holdR:pour?(hx,hy)=>hfood(hx+40,hy-10,.9,1.9):null,armL:20,bendL:15,tilt:4,lean:6},YOU));
 if(lab)label3('You at 22:10 😑',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close-up, Nugget with puffed cheeks staring at you, smug
sh(T('r1')-.12,(t,r)=>{cam(540,1000,lerp(1.02,1.1,eo(C(r/2.8))),t,.08);
 lroom(t,{night:1});X.save();X.fillStyle='rgba(30,20,60,.25)';X.fillRect(-2000,-2000,5000,5000);X.restore();glow(540,900,600,'255,214,150',.35);
 cage3(540,1720,2.15,{t,fill:1,front:1,inner:()=>hamster3(-20,-92,.95,{t,cheeks:1,munch:1,seed:r<1.2,lid:r>1.2?.38:0,look:[0,.1]})});
 label3('Nugget 🐹',C((r-.15)/.2))});
// C: you on the sofa; Memopai hops onto the arm; voice note; 🐹 flies into the phone
const MP=.12;
sh(T('s2')-.1,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/4.2)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.4&&r<4.0;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.2,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'🐹',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// D: the chat: voice note → confirmation → invite → he accepts
sh(T('s3')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.55,list:[{a:0,me:1,voice:1,pl:C(r/.35),dur:'0:04',time:'21:58'},{a:.55,me:0,text:'✅ Got it! Every day 17:00 → your son: 🐹 Feed Nugget!',time:'21:58'},{a:1.15,date:'Invite sent · no app needed'},{a:1.7,date:'✓ He tapped Accept'}]})});
// E: next day 17:00, his room: phone buzzes, eye-roll "Okay, okay...", then he feeds Nugget himself
const E0=T('k2')-.75,NT=.2;
sh(E0,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/3)),t,.12);
 proom(t,{win:300,night:0,lamp:0,plant:0,frame:null,wall:'#cfe3f2',wall2:'#b4cfe6',floor:'#c9a27a',floor2:'#a37f5c',curtain:'#ffb02e',curtain2:'#e8981a'});
 glow(300,700,700,'255,236,190',.5);wclock(250,600,.85,5,0);
 ctable(CX,CY+20,1);
 const k=T('k2')-E0,feed=C((r-k-1.0)/.4);
 cage3(CX,CY,CS,{t,fill:feed,inner:()=>hamster3(-100,-92,.8,{t,cheeks:feed>.9?C((r-k-1.5)/.6):0,munch:feed>.9,eyes:feed>0?'open':'wide',look:[-.8,-.3]})});
 const ping=r>NT,roll=r>k&&r<k+1.0;
 sm(380,1880,1.12,Object.assign({t,eyes:feed>0?'happy':'open',lid:roll?.55:0,brow:roll?'flat':'up',mouth:r>k&&r<k+2.0?'open':'smile',talk:r>k&&r<k+2.0?t:null,look:roll?[0,-.9]:[.3,.5],
  armR:feed>0?150:100,bendR:feed>0?-40:-100,holdR:feed>0?(hx,hy)=>hfood(hx+40,hy-10,.8,1.9):(hx,hy)=>phoneH(hx,hy+10,-.1,ping&&r<k),armL:20,bendL:15},SON));
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-k-.9)/.3)),'Memopai','🐹 Feed Nugget!');
 else label3('Your son, 17:00 🐹',1);
});
// F: same room, 22:10, warm: you on the sofa with tea; Nugget asleep, round
sh(T('p1')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/3.2)),t,.12);
 lroom(t,{night:1,warm:1});wclock(250,600,.85,10,10);
 psofa(400,1760,1.0,'#5a7fb5','#4a6a9a');
 ctable(745,CY+20,.9);
 cage3(745,CY,.7,{t,fill:.6,front:1,inner:()=>hamster3(-90,-92,.85,{t,fat:1,eyes:'closed',zz:1})});
 sm(390,1860,.98,Object.assign({t,flip:0,eyes:'happy',brow:'up',mouth:'smile',blush:r>1.2,look:[.5,-.1],armR:55,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:15,bendL:10,legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},YOU));
 label3('You, off duty 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.2,0,1));
