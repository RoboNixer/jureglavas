// 2026-11-24 18:00 COMMENTS — "'Any homework?' 'Nope!' (21:30, his bag: due tomorrow.)"
// craft ladder (look3.js): worksheet3() school worksheet (crumple, DUE TOMORROW stamp, writing), banana3() fossil banana with a fly
const YOU={hair:'curl'};
const KID={hair:'spike',hairc:'#4a3426'};
const KIDP={hair:'spike',hairc:'#4a3426',pj:'#7cc3f0',limb:'#2b3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function tabH(hx,hy){X.save();X.translate(hx-30,hy-40);X.rotate(-.15);glow(0,0,120,'120,200,255',.35);rr(-70,-50,140,100,12,'#1b1b1f',5);rr(-60,-40,120,80,6,'#5fb4ff',0);X.restore()}
function pencil(hx,hy,rot=.6){X.save();X.translate(hx,hy);X.rotate(rot);rr(-8,-70,16,90,4,'#ffd23f',4);path(()=>{X.moveTo(-8,20);X.lineTo(0,40);X.lineTo(8,20);X.closePath()},'#f2c9a0',3);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function kitchen(t,o={}){proom(t,{win:300,plant:860,lamp:o.night?1:0,night:o.night||0,frame:null,wall:o.wall||(o.night?'#d9c7a8':'#f4e6cc'),wall2:o.wall2||(o.night?'#c4ad8a':'#e7d0ab')});
 if(o.night)glow(560,620,560,'255,205,130',.45);else if(o.warm)glow(300,700,800,'255,214,150',o.warm);else glow(300,700,620,'255,236,190',.45);}
// A: 16:30 kitchen: you ask from the left; your son behind the table on a tablet grins 'Nope!'
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.03,t,0);else cam(540,1060,lerp(1.02,1.07,C(r/2.9)),t,.1);
 kitchen(t);wclock(800,560,.75,16,30);
 const nope=cv||r>1.85;
 sm(700,1840,.95,Object.assign({t,eyes:nope?'happy':'open',brow:'up',mouth:nope?'grin':'smile',talk:(r>1.9&&r<2.8)?t:null,look:[-.6,0],tilt:nope?-5:0,armL:40,bendL:-60,armR:110,bendR:-100,holdR:(hx,hy)=>tabH(hx,hy)},KID));
 ctable(700,1690,1.3);
 sm(290,1860,1.14,Object.assign({t,eyes:'open',lid:nope?.3:0,brow:nope?'smug':'up',mouth:nope?'smirk':'open',talk:r<1.75&&!cv?t:null,look:[.7,.1],armL:30,bendL:-20,armR:60,bendR:-150,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0')},YOU));
 if(lab)label3('You, 16:30 🙂',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: 21:30 night kitchen: bag dumped on the table, fossil banana, you hold up the crumpled worksheet: DUE TOMORROW
sh(T('r1')-.3,(t,r)=>{cam(540,1040,lerp(1.03,1.09,C(r/2.6)),t,.1);
 kitchen(t,{night:1});wclock(820,560,.75,21,30);
 const up=eo(C((r-.3)/.6));
 sm(400,1880,1.16,Object.assign({t,eyes:up>.5?'wide':'open',brow:'worried',mouth:up>.5?'o':'flat',sweat:up>.8,look:[.5,-.2],armR:lerp(40,135,up),bendR:lerp(-30,-60,up),armL:50,bendL:-140,
  holdR:(hx,hy)=>{reachArm(hx,hy,lerp(hx+40,600,up),lerp(hy,960,up),1.16);worksheet3(lerp(hx+60,640,up),lerp(hy-80,860,up),lerp(.55,1.0,up),{rot:-.06,crumple:1,stamp:up>.7?'DUE TOMORROW':0})}},YOU));
 rr(-200,1410,1480,70,24,'#c48a5a',7);rr(-200,1470,1480,600,0,'#8a5a36',0);
 schoolbag3(795,1425,.6,{open:1,col:'#e0533d'});banana3(560,1432,1.1,{t,fossil:1});
 label3('You at 21:30 😳',C((r-.05)/.2))});
// C: your son in pyjamas in the doorway, sheepish grin, scratching his head
sh(T('k2')-.12,(t,r)=>{cam(540,1080,lerp(1.1,1.16,C(r/1.6)),t,.1);
 kitchen(t,{night:1});
 X.save();rr(330,700,420,1200,10,'#3a3346',8);glow(540,1000,300,'255,230,170',.25);X.restore();
 sm(540,1850,1.0,Object.assign({t,eyes:'open',lid:.2,brow:'worried',mouth:'grin',blush:1,talk:r>.15&&r<1.4?t:null,look:[.2,.1],tilt:-8,armR:165,bendR:-120,armL:20,bendL:10},KIDP));
 label3('Your son 😅',C((r-.05)/.2))});
// D: sofa: Memopai hops onto the sofa arm, you type, the 📚 flies into your phone
sh(T('s2')-.2,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/2.8)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s);
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'smirk',look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,r>.6),armL:110,bendL:-100},YOU));
 const mp=C((r-.05)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=1.2,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(240,600,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'📚',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(600,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-.05)/.2))});
// E: the chat
const E0=T('s2')+2.6;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.1&&r<.35,list:[{a:0,me:1,text:'Every school day at 17:00 remind my son: homework first 📚',time:'21:52'},{a:.45,me:0,text:'✅ Got it! Mon–Fri 17:00 → your son: 📚 Homework first! Check your bag.',time:'21:52'},{a:1.2,date:'Invite sent to his WhatsApp · no app'},{a:1.8,date:'✓ He tapped Accept'}]})});
// F: next day 17:00: he's gaming on the sofa, his phone buzzes, he groans 'Ugh... fine.' and gets up
const F0=T('s3')-.35,NT=.15;
sh(F0,(t,r)=>{cam(540,1040,lerp(1.05,1.1,C(r/3.8)),t,.12);
 proom(t,{win:780,plant:0,lamp:0,night:0,frame:[700,480],wall:'#f1dcc0',wall2:'#e2c39e'});glow(260,700,700,'255,226,170',.35);wclock(640,700,.6,17,0);
 psofa(540,1700,1.1,'#e07a5f','#c4644b');
 const ping=r>NT,up=r>T('k3')-F0+.1;
 if(!up)sm(520,1500+340*.92+40,.92,Object.assign({t,eyes:ping?'wide':'open',brow:ping?'up':'flat',mouth:ping?'o':'smile',look:[.2,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:40,bendL:-90,noshadow:1},KID,SIT));
 else{const u=r-(T('k3')-F0+.1),hop=Math.sin(C(u/.5)*Math.PI)*40;sm(560,1840-hop,.95,Object.assign({t,eyes:'closed',brow:'sad',mouth:'wavy',talk:u<1.0?t:null,tilt:-8,look:[-.5,0],armR:20,bendR:10,armL:20,bendL:10},KID))}
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-2.3)/.25)),'Memopai','📚 Homework first! Check your bag.')});
// G: same framing as A, warm light: he writes in the worksheet at the table, open bag; you with tea, smiling
sh(T('p1')-.5,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/4)),t,.1);
 kitchen(t,{warm:.5});wclock(800,560,.75,17,5);
 const sc=Math.sin(t*9)*8;
 sm(700,1840,.95,Object.assign({t,eyes:'open',lid:.15,brow:'flat',mouth:'smile',look:[-.1,.8],armL:40,bendL:-60,armR:60+sc,bendR:-120,holdR:(hx,hy)=>pencil(hx,hy+10,.5)},KID));
 ctable(700,1690,1.3);
 worksheet3(640,1470,.46,{rot:-1.5,written:C((r-.2)/3)});schoolbag3(850,1515,.4,{open:1,col:'#e0533d'});
 sm(290,1860,1.14,Object.assign({t,eyes:r>1.4?'happy':'open',brow:'up',mouth:'smile',blush:r>1.4,look:[.7,.1],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU));
 sparkles(700,HD(1840,.95),C((r-.4)/1.2),10,220,'#fff7b0');
 label3('You, sorted 😌',C((r-.4)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,2.6,0,1));
