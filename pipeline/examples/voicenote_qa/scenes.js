// 2026-11-28 13:00 WHAT IS MEMOPAI — "Can you just voice-note Memopai? Yes." (Q&A-bubble explainer opened by the hit recipe)
// craft ladder (look3.js): qBubble3(), keysTeeth3(), formPaper3(), voiceRec3(), langBubbles3()
const DAD={col:'#d9a27a',beard:1,beardc:'#a7adb5',puffer:'#f2c230'};
const MIA={hair:'bun',hairc:'#2a1a12',col:'#d9a27a',lashes:1,jumper:'#7b4dff'};
const HD=(y,s)=>y-767*s;
function grade(c,a){X.save();X.setTransform(1,0,0,1,0,0);X.globalCompositeOperation='multiply';X.fillStyle=`rgba(${c},${a})`;X.fillRect(0,0,1080,1920);X.restore()}
function bagsHeld(o){return Object.assign({armL:14,bendL:-6,armR:14,bendR:-6,holdL:(x,y)=>{gbag(x,y+150,.62,{leaf:1});gbag(x+40,y+175,.55,{bottle:1})},holdR:(x,y)=>{gbag(x,y+150,.62,{baguette:1});gbag(x-40,y+175,.55,{})}},o)}
function door(t,op,rain=1){housefront(t,{rain,door:op});if(rain)prain(t,.7);}
function shotA(t,r,cv){const pull=cv?1:eo(C((r-.6)/1.8));
 if(cv)cam(540,800,1.02,t,0);else cam(lerp(470,560,pull),lerp(1060,1150,pull),lerp(1.6,1.0,pull),t,.08);
 door(t,cv?1:C((r-.1)/.4));
 const ds=.8,dy=1300;
 sm(650,dy,ds,Object.assign({t,eyes:'wide',brow:'angry',mouth:(!cv&&r<2.4)?'open':'frown',talk:(!cv&&r<2.4)?t:null,look:[-.6,.1],armL:120,bendL:-70,holdL:(x,y)=>formPaper3(x+20,y-40,.32,{rot:-.15}),armR:20,bendR:-20,noshadow:1},MIA));
 const s=1.0,y=1790;
 sm(380,y,s,bagsHeld(Object.assign({t,eyes:'wide',brow:'worried',mouth:'flat',look:[.6,-.3],sweat:1},DAD)));
 keysTeeth3(380,HD(y,s)+62,.9,t);
 grade('140,160,200',.16);
 if(cv)return;
 if(r>2.6)label3('You, hands full 🛍️',C((r-2.6)/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: the question + the nose boop on the phone propped on the window sill, then pull out: Memo hops onto the step
const B0=T('q1')-.3;
sh(B0,(t,r)=>{const out=eo(C((r-2.4)/.8));
 cam(lerp(310,560,out),lerp(830,1150,out),lerp(1.6,1.0,out),t,.06);
 door(t,1);
 // phone standing on the sill
 const px=250,boop=C((r-1.4)/.25);
 X.save();X.translate(px,880);rr(-78,-270,156,270,20,'#1b1b1f',6);rr(-66,-252,132,236,12,'#e9fbe9',0);rr(-66,-252,132,44,12,'#1f7a4a',0);txt('Memopai',0,-229,20,'#fff',0,'800 ');
 const live=r>1.4;circ(0,-60,live?40:34,'#25d366',5);rr(-9,-82,18,34,9,'#fff',0);
 if(live){for(let k=0;k<3;k++){const ph=((t*1.6+k/3)%1);X.save();X.globalAlpha=(1-ph)*.6;X.strokeStyle='#25d366';X.lineWidth=6;X.beginPath();X.arc(0,-60,40+ph*70,0,7);X.stroke();X.restore()}
  for(let k=0;k<8;k++){const h=6+Math.abs(Math.sin(t*12+k*1.7))*30;rr(-56+k*14,-150-h/2,8,h,4,'#25d366',0)}txt('0:0'+Math.min(5,Math.floor((r-1.4)*2)),0,-185,24,'#151515',0,'800 ')}
 X.restore();
 if(boop>0&&boop<1)impact(boop);
 const lean=eo(C((r-.5)/.9))*(1-eo(C((r-2.2)/.6))*.6);const s=1.15,y=1790,x=lerp(560,455,lean);
 sm(x,y,s,bagsHeld(Object.assign({t,eyes:live?'closed':'wide',brow:live?'up':'worried',mouth:live?'smile':'flat',look:[-.8,.2],tilt:-lean*22,lean:-lean*8},DAD)));
 keysTeeth3(x-lean*30,HD(y,s)+70,.95,t,{drop:C((r-1.5)/.6)});
 const mp=C((r-2.6)/.5);if(mp>0){memo(800,1300,.5,{t,hop:mp,glow:1});if(mp<1)sparkles(800,1180,mp,10,160)}
 grade('140,160,200',.12);
 if(r<2.5)qBubble3('Can I just voice-note it? 🎙️',C(r/.25));else label3('Memopai 😎 · in your WhatsApp',C((r-2.6)/.2))});
// C: the WhatsApp chat (voice note plays -> words -> ✅)
const C0=T('s2')-.2;
sh(C0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#3a2a7a');g.addColorStop(1,'#1f7a4a');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'200,255,220',.25);
 for(let k=0;k<30;k++){const x=(k*173)%1080,y=((k*311)+t*140)%1920;X.fillStyle='rgba(190,220,255,.5)';X.fillRect(x,y,3,26)}
 const q=r+.3;phoneUI(540,930,1.16,q,{list:[{a:0,me:1,voice:1,dur:'0:05',pl:C(q/3),time:'18:42'},{a:2.4,me:1,text:'🎙️ "Sunday at 7, remind me: sign Mia\'s trip form"',time:'18:42'},{a:3.1,me:0,text:'✅ Got it! Sun 19:00 → ✍️ Sign Mia\'s trip form',time:'18:42'}]})});
// D: languages — Memo hosts on a bright set, 4 bubbles pop, camera arcs
const D0=T('l1')-.2;
sh(D0,(t,r)=>{const u=eo(C(r/4.5));cam(lerp(470,600,u),lerp(1080,1020,u),lerp(1.02,1.12,u),t,.05,lerp(-.02,.02,u));
 psky('#ffb36b','#ffd9a0','#fff1d6',1500);rays(540,700,t,'255,240,200',.25);
 pblur(3,()=>{for(let k=-2;k<6;k++){const hx=k*260,hh=300+(k*97%5)*60;X.fillStyle=['#e98a5a','#f2b36a','#d9735a'][((k%3)+3)%3];X.fillRect(hx,1500-hh,220,hh);X.fillStyle='rgba(255,240,200,.8)';for(let w=0;w<3;w++)X.fillRect(hx+30,1500-hh+40+w*90,50,50)}});
 X.fillStyle='#f6d9b0';X.fillRect(-600,1500,2400,600);ell(560,1560,420,60,'rgba(0,0,0,.12)',0);
 for(let k=0;k<6;k++){const bx=((k*230+t*60)%1600)-200;circ(bx,420+Math.sin(t+k)*30,6,'rgba(255,255,255,.7)',0)}
 memo(560,1560,.72,{t,wave:1,glow:.6});
 langBubbles3(560,1080,t,r,{a:.5});
 qBubble3('Which languages? 🌍',C(r/.25))});
// E: Sunday 19:00 kitchen: the reminder lands, he signs the form
const E0=T('s3')-.2,NT=.35;
function kitchen(t,lamp){proom(t,{win:520,night:1,lamp:lamp?120:null,wall:'#f0dcc0',wall2:'#dcc09c',floor:'#9a6e4a',floor2:'#7a5434',curtain:'#5a7fb0',curtain2:'#47679a'});winFX(t,520,{});wclock(820,600,.7,7,0);
 rr(-200,1080,640,30,6,'#8a6a4a',6);for(let k=0;k<4;k++)rr(-150+k*130,960,90,120,10,['#e5383b','#f59f00','#2ea44f','#1c7ed6'][k],5)}
sh(E0,(t,r)=>{const u=eo(C(r/3.8));cam(lerp(520,560,u),lerp(1180,1240,u),lerp(1.0,1.25,u),t,.06);
 kitchen(t,1);
 const sig=C((r-1.4)/1.4),s=1.0,y=1880;
 sm(560,y,s,Object.assign({t,eyes:r>NT&&r<1.3?'wide':'happy',brow:'up',mouth:r>1.3?'smile':'o',look:r<1.3?[.5,-.2]:[0,.8],armR:sig>0?60+Math.sin(t*14)*6*(sig<1):110,bendR:sig>0?-80:-110,
  holdR:(x,yy)=>{if(sig<=0){X.save();X.translate(x,yy-30);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,r>NT?'#25d366':'#3a4a66',0);X.restore()}else line([[x,yy],[x+18,yy+50]],9,'#1d3fa8')},armL:30,bendL:-40},DAD,{puffer:0,jumper:'#3f6fb0'}));
 rr(140,1430,800,40,8,'#c48a5a',7);X.fillStyle='#a8724a';X.fillRect(160,1470,760,500);
 formPaper3(560,1400,.5,{rot:-.08,sign:sig,tick:sig>0});
 if(r>NT&&r<1.5)notif(338,C((r-NT)/.3)*(1-C((r-1.3)/.2)),'Memopai','⏰ Sun 19:00 · Sign Mia\'s trip form ✍️');
 if(r>1.5)label3('Sunday, 19:00 ✍️',C((r-1.5)/.2))});
// F: payoff: Mia walks in, grabs the signed form, stares... and checks your forehead
const F0=T('p1')-.45;
sh(F0,(t,r)=>{const u=eo(C(r/2.6));cam(lerp(600,540,u),1180,lerp(1.15,1.05,u),t,.06);
 kitchen(t,1);
 const wk=eo(C(r/.9)),mx=lerp(1100,650,wk),reach=eo(C((r-1.2)/.4));
 sm(450,1840,1.0,Object.assign({t,eyes:reach>.5?'closed':'happy',brow:'up',mouth:'grin',look:[.5,-.1],blush:reach>.5?1:0,armL:20,armR:20},DAD,{puffer:0,jumper:'#3f6fb0'}));
 sm(mx,1840,.86,Object.assign({t,walk:r<.9?t:null,flip:1,eyes:'wide',brow:'worried',mouth:r>1.0?'o':'flat',look:[-.6,-.4],armR:lerp(30,160,reach),bendR:lerp(-30,-8,reach),armL:60,bendL:-80,holdL:(x,y)=>formPaper3(x-10,y-30,.3,{rot:-.12,sign:1,tick:1})},MIA));
 if(r>1.1)label3('You, sorted 😌',C((r-1.1)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.0,1));
