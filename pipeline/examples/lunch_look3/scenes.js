// 2026-11-21 22:00 FUN FACT — "Monday. You open her school bag. Friday's lunch."
// craft ladder: lunchbox3(), schoolbag3() (look3.js)
const YOU={hair:'curl'};
const DAU={hair:'bun',hairc:'#8a4b2a',pj:'#ff8fb1',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function kitchen(t,o={}){proom(t,{win:300,plant:860,lamp:0,night:o.night||0,frame:null,wall:o.wall||'#f4e6cc',wall2:o.wall2||'#e7d0ab'});
 if(!o.night)glow(300,700,620,'255,236,190',.45);}
const CT=1310; // counter top
// A: frame 1 = Monday 07:30, you unzip her school bag on the counter; the lunchbox pops up, lid opens, green fuzz + stink
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.04,t,0);else cam(540,1070,lerp(1.03,1.1,C(r/3.6)),t,.1);
 kitchen(t);wclock(800,560,.8,7,30);
 const op=cv?1:C((r-.25)/.5),up=cv?1:eo(C((r-.8)/.5)),lid=cv?1:sp(C((r-1.35)/.35),10,.5),shock=cv||r>1.5;
 sm(330,1900,1.22,Object.assign({t,eyes:'open',lid:0,brow:shock?'up':'flat',mouth:shock?'o':'smile',look:[.7,.3],sweat:shock,armR:70,bendR:-40,armL:30,bendL:20,lean:shock?-4:0},YOU));
 counter(540,CT+360,1);
 schoolbag3(700,CT,1.05,{open:op,inner:()=>lunchbox3(0,-300+lerp(130,-50,up),1.1,{open:lid,mould:1,t})});
 if(lid>.3)stink(700,CT-470,t,C((lid-.3)/.5),1.1);
 if(lab)label3('You, Monday 07:30 😳',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: two-shot: your daughter behind the counter with cereal shrugs 'Oops!'; you hold the box at arm's length, pinching your nose
sh(T('k1')-.08,(t,r)=>{cam(540,1080,lerp(1.04,1.09,C(r/4.4)),t,.1);
 kitchen(t);wclock(800,560,.8,7,31);
 const kidT=T('r1')-T('k1');
 sm(300,1880,1.12,Object.assign({t,eyes:r<kidT?'happy':'open',brow:'up',mouth:r<kidT?'grin':'smirk',talk:r<1.1?t:null,armR:r<kidT?150:30,bendR:r<kidT?-40:20,armL:r<kidT?-150:20,bendL:r<kidT?40:15,look:[.6,0],tilt:r<kidT?6:0},DAU));
 sm(790,1900,1.18,Object.assign({t,eyes:'closed',brow:'worried',mouth:'wavy',look:[-.5,0],armL:84,bendL:4,holdL:(hx,hy)=>{lunchbox3(hx+40,hy+70,.85,{open:1,mould:1,t});stink(hx+40,hy-50,t,.9,.65)},armR:150,bendR:-160},YOU));
 counter(540,CT+360,1);mixbowl(300,CT-6,.7,t);
 if(r<kidT)label3('Your kid 😁',C(r/.2));else label3("Friday's lunch 🤢",C((r-kidT)/.2))});
// C: evening sofa; Memopai hops onto the arm; voice note; 🍱 flies into the phone
const MP=.05;
sh(T('s2')-.05,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/4.5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.5&&r<4.2;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.5,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'🍱',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// D: the chat: voice note → confirmation → invite → she accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.35&&r<.65,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:05',time:'20:12'},{a:.6,me:0,text:'✅ Got it! Every Friday 16:00 → your daughter: 🍱 Lunchbox into the sink!',time:'20:12'},{a:1.25,date:'Invite sent · no app needed'},{a:1.85,date:'✓ She tapped Accept'}]})});
// E1: Friday 16:00 at home: her phone buzzes, she pulls the lunchbox out of her bag
const E0=T('s4')-.05,NT=.2,E2=T('s4')+2.45;
sh(E0,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/2.6)),t,.12);
 kitchen(t,{wall:'#f6dcc0',wall2:'#ecc79c'});glow(850,500,600,'255,200,120',.35);wclock(800,560,.8,16,0);
 const ping=r>NT,got=C((r-1.3)/.4);
 sm(420,1900,1.04,Object.assign({t,eyes:got>0?'happy':'open',brow:'up',mouth:got>0?'grin':'o',look:[.6,.3],armR:got>0?120:60,bendR:got>0?-60:-30,holdR:got>0?(hx,hy)=>lunchbox3(hx+30,hy+50,.55,{t}):null,armL:30,bendL:20},DAU));
 counter(540,CT+360,1);
 schoolbag3(760,CT,.9,{open:1,col:'#7e57c2'});
 phoneH(560,CT-10,0,ping&&Math.sin(t*24)>0);
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-2.0)/.25)),'Memopai','🍱 Lunchbox into the sink!')});
// E2: the gag: 'Sunday, in the bag' — tiny bacteria in party hats in the dark lunchbox, disco light
sh(E2,(t,r)=>{cam(540,1000,lerp(1.05,1.14,eo(C(r/2.6))),t,.08);
 X.fillStyle='#1d1630';X.fillRect(-2000,-2000,5000,5000);
 const hue=(t*90)%360;glow(540,900,700,`${180+Math.round(60*Math.sin(t*4))},90,255`,.35);glow(380,700,300,'255,90,170',.25+.15*Math.sin(t*7));glow(720,760,300,'90,200,255',.25+.15*Math.cos(t*6));
 lunchbox3(540,1340,2.0,{open:1,mould:1,faces:1,hats:1,t});
 if(r>.3)confetti(C((r-.3)/2),40);
 label3('Sunday, in her bag 🦠',C(r/.2))});
// F: same framing as A, Monday 07:30, warm: bag open = books only; the clean lunchbox sparkles on the counter; you with coffee
sh(T('p1')-.08,(t,r)=>{cam(540,1070,lerp(1.03,1.07,C(r/3.2)),t,.12);
 kitchen(t);glow(500,800,700,'255,215,150',.35);wclock(800,560,.8,7,30);
 sm(330,1900,1.22,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:r>1,look:[.6,.2],armR:95,bendR:-95,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:30,bendL:20},YOU));
 counter(540,CT+360,1);
 schoolbag3(720,CT,1.05,{open:1});
 lunchbox3(500,CT,.8,{clean:1,t});if(r>.3)sparkles(480,CT-120,C((r-.3)/1.4),10,140);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.0,0,1));
