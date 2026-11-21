// 2026-11-21 09:00 FUN FACT — "Quick question: when did you buy your toothbrush?"
// craft ladder (look3.js): toothbrush() with a 'wear' splay (palm-tree fan), mirror3() wall mirror, tcup() toothbrush cup.
const YOU={hair:'curl',pj:'#9fc0ec',limb:'#34405a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';txt(e,0,4,64,'#111',0,'400 ');X.restore()}
// phone lying on the sink, buzzing
function phoneFlat(x,y,on,t,rot=0){const j=on?Math.sin(t*70)*5:0;X.save();X.translate(x+j,y);X.rotate(rot);if(on)glow(0,-10,150,'130,240,160',.45);rr(-70,-22,140,30,10,'#1b1b1f',4);rr(-62,-20,124,16,5,on?'#25d366':'#3a4a66',0);X.restore();
 if(on){X.save();X.strokeStyle='rgba(255,255,255,.8)';X.lineWidth=5;for(const d of[-1,1]){X.beginPath();X.arc(x+d*90,y-10,16+((t*3)%1)*14,d>0?-.9:Math.PI-.9+0,d>0?.9:Math.PI+.9);X.stroke()}X.restore()}}
function phoneUp(x,y,on,t,rot=0){const j=on?Math.sin(t*70)*5:0;X.save();X.translate(x+j,y);X.rotate(rot);if(on)glow(0,-80,170,'130,240,160',.5);rr(-42,-170,84,170,14,'#1b1b1f',5);rr(-34,-160,68,150,9,on?'#25d366':'#3a4a66',0);if(on)txt('🦷',0,-88,44,'#fff',0,'400 ');X.restore();
 if(on){X.save();X.strokeStyle='rgba(255,255,255,.85)';X.lineWidth=6;for(const d of[-1,1]){X.beginPath();X.arc(x,y-90,70+((t*3)%1)*26,d>0?-.6:Math.PI-.6,d>0?.6:Math.PI+.6);X.stroke()}X.restore()}}
// bathroom set: tiles, mirror, sink
function bath(t,o={}){bathroom(t,{shower:0,dim:o.dim||0});mirror3(600,500,330,520);sink(770,1470,1);
 if(o.warm)glow(300,600,900,'255,214,150',o.warm);else glow(760,700,700,'255,255,255',.25)}
const HX=400,FY=1980,HS=1.3,HY=FY-767*HS; // YOU's position at the sink; HY = head centre

// A: 07:30, sleepy you at the mirror, holding the toothbrush up, squinting at it
sh(0,(t,r)=>{cam(540,1040,lerp(1.02,1.07,C(r/3)),t,.12);bath(t);
 sm(HX,FY,HS,Object.assign({t,eyes:'open',lid:.55,brow:r>1.2?'up':'flat',mouth:r>1.2?'o':'flat',look:[.6,-.3],tilt:-4,armR:95,bendR:-108,armL:20,bendL:10,
  holdR:(x,y)=>toothbrush(x,y,1.0,.2,{wear:1,t})},YOU));
 if(r>.2)label3('You at 07:30 😴',C((r-.2)/.2))});

// B: close-up: the palm-tree brush, slowly turning, the bristles still splaying
const B0=T('n1')-.1;
sh(B0,(t,r)=>{cam(540,1000,1.0,t,.08);bathroom(t,{shower:0});X.fillStyle='rgba(30,50,70,.25)';X.fillRect(-3000,-3000,8000,8000);glow(560,880,700,'255,240,200',.5);
 toothbrush(470,1340,2.3,.28+Math.sin(t*1.3)*.04,{wear:lerp(.8,1.12,C(r/2.2)),t});
 label3('Your toothbrush 🌴',C((r-.15)/.2))});

// C: you grimace, the four seasons circle your head; Memopai hops onto the sink
const C0=T('f1')+1.1,MP=2.0;
sh(C0,(t,r)=>{cam(560,1020,lerp(1.04,1.09,C(r/3)),t,.12);bath(t);
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1460,.7,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1180,mp,8,170)}
 sm(470,2000,1.4,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[.5,-.4],tilt:5,armR:100,bendR:-118,armL:20,bendL:10,
  holdR:(x,y)=>toothbrush(x,y,1.0,.15,{wear:1.1,t})},YOU));
 headLoop(480,2000-767*1.4,t,['☀️','🍂','❄️','🌸'],C(r/.4),235);
 label3('Four seasons 😬',C((r-.1)/.2))});

// D: the old brush goes down, the new one up; you voice-note Memopai, the 🪥 thought flies into the phone
const D0=T('s1')-.05;
sh(D0,(t,r)=>{cam(560,1030,lerp(1.04,1.08,C(r/3)),t,.12);bath(t);
 memo(800,1460,.7,{t,wave:1,glow:1});
 const talk=r>1.4&&r<3.4;
 sm(HX,FY,HS,Object.assign({t,eyes:'open',brow:'up',mouth:talk?(Math.sin(t*14)>0?'open':'smile'):'smile',look:[.6,.2],armR:105,bendR:-125,armL:40,bendL:-70,
  holdR:(x,y)=>phoneH(x,y,.2,talk),holdL:(x,y)=>toothbrush(x,y,.8,-.1,{wear:0,fresh:1,t})},YOU));
 const ft=1.6,fl=C((r-ft)/.9);if(r>ft-.3){if(fl<1){const px=lerp(HX-40,HX+170,eo(fl)),py=lerp(HY-300,HY+330,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🦷',C((r-ft+.3)/.3)*(1-fl*.5))}else sparkles(HX+170,HY+330,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 👋',C((r-.1)/.2))});

// E: the WhatsApp chat: one voice note, a reminder for both of you, partner accepts
const E0=T('s2')-.1;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#24405a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.75,list:[{a:0,me:1,text:'🎤 0:04 · Remind me + my partner Feb 21, 7:30: new toothbrushes 🦷',time:'07:32'},{a:.75,me:0,text:'✅ Got it! You + Partner ❤️ · Sun 21 Feb · 07:30 · New toothbrushes 🦷',time:'07:32'},{a:1.6,date:'✓ Partner tapped Accept'}]})});

// F: the old brush, retired, scrubbing the grout (medal on)
const F0=T('o1')-.2;
sh(F0,(t,r)=>{cam(540,960,1.0,t,.08);X.save();X.translate(-420,-260);X.scale(1.8,1.8);bathroom(t,{shower:0});X.restore();
 const sx=555+Math.sin(t*9)*75,sy=900;
 X.save();X.globalAlpha=.85;for(let k=0;k<7;k++){const q=(t*.9+rnd(k+2))%1;circ(380+rnd(k)*320,sy-40-q*260,10+rnd(k+5)*16,'rgba(255,255,255,.75)',3)}X.restore();
 toothbrush(sx+130,sy+190,1.3,-1.35,{wear:1.15,t});circ(sx+130,sy+190,40,'#151515',0);
 const mp=eo(C((r-.3)/.35));chip(sx+80,sy+170,'🏅',mp*.85,Math.sin(t*4)*.15);
 label3('The old one 🏅',C((r-.1)/.2))});

// G: February 21st, 07:30: both phones on the sink buzz; you walk in sleepy
const G0=T('s3')-.05;
sh(G0,(t,r)=>{cam(560,1040,lerp(1.02,1.06,C(r/3)),t,.12);bath(t,{warm:.35});
 const bz=r>.9;phoneUp(690,1462,bz,t,-.08);phoneUp(840,1462,bz&&r>1.0,t+.3,.08);
 const wx=r<1.4?lerp(250,HX-20,eo(C(r/1.4))):HX-20;
 sm(wx,FY,HS,Object.assign({t,walk:r<1.3?t:null,eyes:bz?'wide':'open',lid:bz?0:.6,brow:bz?'up':'flat',mouth:bz?'o':'flat',look:bz?[.7,.6]:[.3,0],armR:20,bendR:10,armL:20,bendL:10},YOU));
 if(r<.9)label3('February 21st 📅',C((r-.1)/.2));
 else notif(338,r<2.4?C((r-.95)/.25):C((2.7-r)/.3),'Memopai','New toothbrush day 🦷 (you + partner)')});

// H: payoff in the frame of shot A: grin, shiny new brush, cup with your partner's new one, Memopai waves
const H0=T('p1')-.1;
sh(H0,(t,r)=>{cam(540,1040,lerp(1.02,1.06,C(r/4)),t,.1);bath(t,{warm:.45});
 tcup(620,1470,1,[{col:'#ff7aa8',wear:0}]);memo(800,1460,.62,{t,wave:1,glow:.6});
 sm(HX,FY,HS,Object.assign({t,eyes:r>1.4?'happy':'open',brow:'up',mouth:'grin',blush:1,look:[.6,-.3],tilt:5,armR:100,bendR:-118,armL:20,bendL:10,
  holdR:(x,y)=>toothbrush(x,y,1.0,.12,{wear:0,fresh:1,t,paste:1})},YOU));
 sparkles(HX+60,HY+60,C((r-.3)/1.2),10,220,'#fff7b0');
 label3(r<1.6?'You, February 😁':'You, sorted 😌',C((r<1.6?r-.1:r-1.6)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(540,1000,1.0,t,.1);bath(t);
 sm(HX+40,FY,HS,Object.assign({t:.3,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[.6,-.3],tilt:-4,armR:100,bendR:-118,armL:20,bendL:10,
  holdR:(x,y)=>toothbrush(x,y,1.05,.12,{wear:1.1,t:.3})},YOU))});
