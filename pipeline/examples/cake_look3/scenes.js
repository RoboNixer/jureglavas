const YOU={hair:'curl'};
const DAD={hair:'spike',hairc:'#b8bdc6'};
const P2={hair:'bun',hairc:'#c98a2e',lashes:1},P3={hair:'spike',hairc:'#e0762e'},P4={hair:'bun',hairc:'#5a3a7a',lashes:1},P5={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
// cake(), muffin(), plate(), bunting(), numBalloon(), partyRoom(), bakery(), counter(), cakebox(), specs(), stache(), dad() live in look3.js (craft ladder 2026-11-18 14:00)
function tag(x,y,s,a,lines){if(a<=0)return;X.save();X.globalAlpha=a;X.translate(x,y);X.rotate(.08);X.scale(s,s);X.shadowColor='rgba(0,0,0,.2)';X.shadowBlur=12;rr(-140,-60,280,120,14,'#fffbe9',5);X.shadowColor='transparent';txt(lines[0],0,-18,40,'#1a7a3a',0,'900 ');txt(lines[1],0,30,34,'#333',0,'700 ');X.restore()}
// back row of family singing (blurred)
function family(t,sing=1,y=1440,s=.62){pblur(1.6,()=>{const F=[[150,P2],[290,P3],[800,P4],[950,P5]];F.forEach(([fx,P],i)=>{sm(fx,y,s,Object.assign({t,flip:fx>540?1:0,eyes:sing?'happy':'open',brow:sing?'up':'flat',mouth:sing?(Math.sin(t*6+i)>0?'open':'o'):'flat',party:['#ff5a7a','#4a8fe0','#7cc47c','#ffd23f'][i],armR:sing?40:15,armL:sing?40:15,bendR:sing?-40:0,noshadow:1},P))})})}
// A 0.0: Dad's 60th, he holds a muffin with one candle; you sweating beside him
function shotA(t,r,lab,talk,push){const z=push?lerp(1.04,1.18,C((r-T('s1'))/1.2)):lerp(1.02,1.06,C(r/4));cam(push?lerp(540,640,C((r-T('s1'))/1.2)):540,push?lerp(1050,980,C((r-T('s1'))/1.2)):1050,z,t,.12);
 partyRoom(t);numBalloon(250,700,.9,t);family(t,r<T('d1')-.1);
 dad(400,1780,1.2,{t,eyes:'open',lid:.3,brow:'sad',mouth:talk?'open':'wavy',talk:talk?t:null,look:[.4,.3],party:'#4a8fe0',armR:70,bendR:-90,holdR:(x,y)=>{plate(x+50,y-20,1.1);muffin(x+50,y-36,1.15,{t})}});
 const sw=r>T('d1')+.3||!lab;sm(790,1780,1.18,Object.assign({t,flip:1,eyes:'wide',brow:'worried',mouth:'wavy',sweat:sw,look:[-.5,.1],party:'#ff5a7a',armR:20,armL:20,bendR:10},YOU));
 if(lab)label3(r>T('s1')?'You, Saturday 15:00 😬':"Dad's 60th 🎉",C(r>T('s1')?(r-T('s1'))/.2:r/.25))}
sh(0,(t,r)=>{shotA(t,r,1,r>T('d1')&&r<T('d1')+1.75,r>T('s1'))});
// B: the bakery: your real cake still waiting (PAID), Memopai hops on; then 'This time' at the counter on Monday, voice note
const tB=T('s1')+1.05;
sh(tB,(t,r)=>{cam(540,1040,lerp(1.04,1.1,C(r/5)),t,.12);bakery(t);const back=T('s2')-tB;const mon=r>back;
 if(!mon){counter(540,1500,1);cake(540,1260,.85,{t,num:60,lit:0});tag(830,1080,1,C((r-.1)/.25),['PAID ✓','pick up: Sat']);}
 else{sm(330,1960,1.25,Object.assign({t,eyes:r>back+2.6?'open':'happy',brow:'up',mouth:(r>back+1.4&&r<back+3.6)?(Math.sin(t*14)>0?'open':'smile'):'smile',look:[.5,.2],flip:0,armR:150,bendR:-160,holdR:(x,y)=>phoneH(x,y,.25,r>back+1.3)},YOU));
  counter(640,1560,1);tag(820,1150,.9,1,['PAID ✓','pick up: Sat']);
  const fl=C((r-back-2.2)/.8);if(fl<1)chip(lerp(330,330,fl)+lerp(0,230,fl),lerp(700,1000,fl)-Math.sin(fl*Math.PI)*160,'🎂',lerp(1,.35,fl),Math.sin(t*3)*.1);
  if(r>back+1.4){X.save();for(let k=1;k<3;k++){const q=((t*1.5+k/2)%1);X.globalAlpha=.7*(1-q);circ(560,1000,40+q*90,null,5,'#25d366')}X.restore()}}
 const mp=C((r-.2)/.6);memo(mon?860:250,mon?1180:1180,.7,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(mon?860:250,900,mp,8,180);
 if(mon&&r<back+.5){X.save();X.setTransform(1,0,0,1,0,0);X.globalAlpha=1-C((r-back)/.5);X.fillStyle='#fff';X.fillRect(0,0,1080,1920);X.restore()}
 label3(!mon?'Your cake, still waiting 🎂':(r>back+1.6?'Memopai 👋':'You, Monday 🧾'),C(!mon?r/.25:(r>back+1.6?(r-back-1.6)/.2:(r-back)/.2)))});
// C: the WhatsApp chat: voice note + reply
sh(T('y1')-.1,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#2a2340';X.fillRect(0,0,1080,1920);glow(540,900,700,'255,214,150',.25);
 phoneUI(540,900,1.28,r,{typing:r>2.2&&r<2.6,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/2.1),dur:'0:04',time:'10:12'},{a:2.6,me:0,text:"Got it ✅ Sat 11:00 · Pick up Dad's cake 🎂",time:'10:12'}]})});
// D: Saturday 11:00, sofa, buzz → walking out of the bakery with the box
sh(T('s4')-.05,(t,r)=>{const out=r>1.55;cam(540,1040,1.06,t,.15);
 if(!out){proom(t,{win:800,night:0,frame:[300,520],plant:0,lamp:0,wall:'#e8eef6',wall2:'#cfd9e6',curtain:'#4a8fe0',curtain2:'#3a70c0'});
  sm(450,1960,1.25,Object.assign({t,eyes:r>.75?'wide':'open',lid:r>.75?0:.4,brow:r>.75?'up':'flat',mouth:r>.75?'o':'smile',look:[.6,.3],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,r>.7)},YOU));psofa(540,1900,1.3,'#7a6fb5','#5f559a')}
 else{psky('#8fd0ff','#cfeaff','#fff4dc',1100);psun(860,330,70,t);pclouds(t,420);proad(t,{dry:1,hz:1150});
  X.save();rr(-40,560,620,620,10,'#f2c6a0',7);rr(20,620,500,90,10,'#ff7aa8',5);txt('BAKERY',270,668,60,'#fff',0);rr(60,760,200,420,8,'#8a5a34',6);rr(300,760,220,240,8,'rgba(210,235,255,.8)',5);X.restore();
  const w=C((r-1.55)/1.3);sm(lerp(420,640,w),1780,1.2,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.5,0],walk:t,armR:70,bendR:-100,armL:70,bendL:-100,holdR:(x,y)=>cakebox(x-60,y+40,.8)},YOU))}
 const n=r<1.55?C((r-.7)/.3):Math.max(0,1-(r-1.55)/.25);if(n>0)scr(()=>notif(150,n,'Memopai',"Pick up Dad's cake 🎂 (Sat 11:00)"));
 if(n<=0)label3(out?'You, 11:20 🎂':'You, Saturday 11:00 🛋️',C(out?(r-1.7)/.2:r/.2))});
// E: same party, sunny: big cake, Dad beams; you, sorted
sh(T('d2')-.1,(t,r)=>{const q=T('p1')-T('d2')+.1;cam(540,1050,lerp(1.03,1.09,C(r/5)),t,.12);partyRoom(t,{sun:1});numBalloon(250,700,.9,t);family(t,1);
 rr(330,1500,520,40,10,'#c0905e',5);cake(590,1500,.72,{t,num:60});
 dad(330,1780,1.15,{t,eyes:'happy',brow:'up',mouth:r<1.3?'open':'grin',talk:r<1.2?t:null,blush:1,look:[.5,0],party:'#4a8fe0',armR:140,bendR:-30,armL:120,bendL:-30});
 sm(840,1780,1.15,Object.assign({t,flip:1,eyes:r>q?'happy':'open',brow:'up',mouth:'grin',blush:r>q,look:[-.5,0],party:'#ff5a7a',armR:120,bendR:-40,armL:30,bendL:-20},YOU));
 if(r>.3)confetti(r-.3);
 label3(r<q?'Dad, 15:00 🥹':'You, sorted 😌',C((r<q?r:r-q)/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{shotA(t+.4,1.5,0,0,0)});
