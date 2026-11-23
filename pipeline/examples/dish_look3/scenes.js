// 2026-11-23 22:00 FOLLOWERS — "Your teen said he'd empty the dishwasher. (It's been clean since Tuesday.)"
// craft ladder (look3.js): dishwasher3() closed with a glowing CLEAN light / open with a rack of clean plates, dishtower3() leaning tower of dirty dishes in the sink
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#4caf7a',limb:'#2b3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function pstack(hx,hy,n=5,s=1){for(let k=0;k<n;k++)plate(hx,hy-k*14*s,.62*s)}
function crisps(hx,hy){X.save();X.translate(hx,hy-40);X.rotate(.2);rr(-40,-60,80,110,14,'#ff5a3c',5);circ(0,-5,22,'#ffd23f',0);X.restore()}
function kitchen(t,o={}){proom(t,{win:o.night?null:200,plant:0,lamp:o.night?1:0,night:o.night?1:0,frame:null,wall:o.wall||'#f4e6cc',wall2:o.wall2||'#e7d0ab'});
 if(o.night){X.save();X.globalAlpha=.28;X.fillStyle='#1c2448';X.fillRect(-3000,-3000,8000,8000);X.restore();glow(700,600,560,'255,220,150',.35)}
 else glow(260,700,620,'255,236,190',o.warm||.45)}
const CT=1250;
// A: Thursday 19:00 kitchen: tower of dirty dishes in the sink, the dishwasher below glows CLEAN; you stare; your teen slides in with crisps: 'I'll do it later!'
function shotA(t,r,lab,cv){if(cv)cam(540,1040,1.03,t,0);else cam(540,1040,lerp(1.02,1.07,C(r/5.8)),t,.1);
 kitchen(t);cupboard3(680,330,.75,{open:0});
 const kt=T('k1'),tin=cv?0:C((r-(kt-.45))/.4),tout=C((r-(kt+1.25))/.4),tx=lerp(1160,815,eo(tin))+lerp(0,360,eo(tout));
 counter(540,CT+360,1);
 dishtower3(600,CT+6,1.0,{t,n:13,stink:cv?1:C((r-.6)/.6)});
 dishwasher3(600,CT+40,.92,{clean:cv?1:C((r-1.6)/.4),t});
 if(tin>0&&tout<1)sm(tx,1880,.95,Object.assign({t,eyes:'happy',brow:'up',mouth:(r>kt&&r<kt+1.1)?'open':'grin',talk:(r>kt&&r<kt+1.1)?t:null,look:[-.6,0],tilt:-6,armR:20,bendR:10,armL:120,bendL:-110,holdL:(hx,hy)=>crisps(hx,hy)},SON));
 const shock=cv||r>.5;
 sm(270,1910,1.16,Object.assign({t,eyes:'open',brow:shock?'worried':'flat',mouth:shock?'wavy':'smile',look:[.9,-.4],sweat:shock,armL:150,bendL:-150,armR:-150,bendR:150,lean:shock?-3:0},YOU));
 if(lab)label3('You, Thursday 19:00 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: Saturday 23:10, dim kitchen: you, exhausted, unloading the clean dishwasher alone; clock on the wall
sh(T('r1')-.3,(t,r)=>{cam(540,1040,lerp(1.04,1.1,C(r/2.8)),t,.1);
 kitchen(t,{night:1,wall:'#c9c2dc',wall2:'#aaa2c6'});wclock(800,560,.7,11,10);
 counter(540,1440,1);dishwasher3(620,1100,1.02,{open:1,t});
 const bob=Math.sin(r*3.2)*10;
 sm(330,1900,1.14,Object.assign({t,eyes:'open',lid:.55,brow:'sad',mouth:'wavy',look:[.6,.4],tilt:6,lean:6,armR:70+bob,bendR:-70,holdR:(hx,hy)=>pstack(hx+10,hy+10,6,1),armL:60,bendL:-80},YOU));
 label3('You, Saturday 23:10 🫠',C(r/.2))});
// D: evening sofa; Memopai hops onto the sofa arm; you voice-note it; 🍴 flies into the phone
const D0=T('s2')-.25;
sh(D0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.5&&r<4.9;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C(r/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.9,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'🍴',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C(r/.2))});
// E: the chat: voice note → confirmation → invite → he accepts
const E0=T('s3')-.15;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fc8b0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:04',time:'21:12'},{a:.55,me:0,text:'✅ Got it! Every day 17:00 → your son: 🍴 Dishwasher time!',time:'21:12'},{a:1.2,date:'Invite sent to his WhatsApp'},{a:1.8,date:'✓ He tapped Accept'}]})});
// F: next day 17:00: he's on the sofa with his phone, it buzzes, he groans and gets up
const F0=E0+2.5,NT=.2;
sh(F0,(t,r)=>{cam(540,1040,lerp(1.05,1.1,C(r/2.5)),t,.12);
 proom(t,{win:780,plant:0,lamp:0,night:0,frame:[700,480],wall:'#f1dcc0',wall2:'#e2c39e'});glow(780,640,700,'255,220,160',.4);wclock(640,700,.6,5,0);
 psofa(540,1700,1.1,'#e07a5f','#c4644b');
 const ping=r>NT,up=r>T('k2')-F0+.2;
 if(!up)sm(520,1500+340*.92+40,.92,Object.assign({t,eyes:ping?'wide':'open',brow:ping?'up':'flat',mouth:ping?'o':'smile',look:[.2,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:40,bendL:-90},SON,SIT));
 else{const u=r-(T('k2')-F0+.2),hop=Math.sin(C(u/.5)*Math.PI)*40;sm(560,1840-hop,.95,Object.assign({t,eyes:'closed',brow:'sad',mouth:'wavy',talk:u<1.1?t:null,tilt:-8,look:[-.5,0],armR:20,bendR:10,armL:20,bendL:10,walk:u>.5?t:null},SON))}
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.7)/.25)),'Memopai','🍴 Dishwasher time!')});
// G: same framing as A, warm light: empty sparkling sink, he stacks plates into the open cupboard, you with tea
sh(T('p1')-.35,(t,r)=>{cam(540,1040,lerp(1.03,1.07,C(r/3.5)),t,.1);
 kitchen(t,{warm:.6});cupboard3(680,330,.75,{open:1,full:0});
 counter(540,CT+360,1);
 dishtower3(600,CT+6,1.0,{t,bare:1});dishwasher3(600,CT+40,.92,{clean:0,t});
 sm(785,1880,.95,Object.assign({t,eyes:"happy",brow:"up",mouth:"smile",look:[-.3,-.6],armR:70,bendR:-110,holdR:(hx,hy)=>pstack(hx-10,hy+30,5,1),armL:20,bendL:10},SON));
 sparkles(580,CT-80,C((r-.2)/1.2),10,200,'#fff7b0');
 sm(270,1910,1.16,Object.assign({t,eyes:r>1.2?'happy':'open',brow:'up',mouth:'smile',blush:r>1.2,look:[.7,-.2],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU));
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.2,0,1));
