// 2026-11-27 18:00 FUN FACT 2 — "He left his lab dishes dirty. It won a Nobel Prize." First PAPER CUT-OUT stop-motion reel (look6paper.js).
const DOC={hair:'spike',hairc:'#8d8d8d',dress:'#f7f4ec',bow:'#c0392b',limb:'#2a1d14'};
const YOU={hair:'bun',hairc:'#5a2e17',jumper:'#1f8a8a',limb:'#2a1d14'};
function dishStack(x,y,n=4){for(let i=0;i<n;i++)cutout(()=>{X.fillStyle='#e9f1f2';X.beginPath();X.ellipse(x+(i%2)*8,y-i*22,70,26,0,0,7);X.fill();X.fillStyle='#f0d27a';X.beginPath();X.ellipse(x+(i%2)*8,y-i*22-3,58,19,0,0,7);X.fill()},{d:4})}
function carton(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);cutout(()=>{X.fillStyle='#fff';X.beginPath();X.moveTo(-30,0);X.lineTo(-30,-100);X.lineTo(0,-126);X.lineTo(30,-100);X.lineTo(30,0);X.closePath();X.fill();X.fillStyle='#3f7fd9';X.fillRect(-30,-74,60,30)},{d:4});X.restore()}
function chip(){docChip('Alexander Fleming · London, 1928',1,{x:150,y:318})}
// A: HOOK. 1928 lab, tracking pan: the scientist leaves the dirty dish stack and walks off on holiday with his suitcase
sh(0,(t,r)=>{const q=pq(r),tq=pq(t);const wx=lerp(380,980,C((q-.6)/3.4));
 cam(lerp(470,760,eio(C(r/4.4))),lerp(1050,1000,eo(r/4)),lerp(1.12,1.0,eo(r/4.4)),t,.4);labBench(t);
 dishStack(600,1170,5);paperTag('dirty 🧫',600,1020,C((r-.9)/.3),{size:40,rot:.06,maxW:260});
 cutout(()=>sm(wx,1760,1.1,Object.assign({t:tq,walk:q>.6?tq:null,eyes:'happy',brow:'up',mouth:'smile',look:[.6,0],tilt:pjit(r),armR:20,bendR:-10,holdR:(x,y)=>suitcase(x,y+150,.7)},DOC)),{d:10});
 paperGrain();chip();});
// B: two weeks later: he walks back in, camera pushes in to the one dish where mould grows and the germs around it die
sh(T('f1')-.1,(t,r)=>{const q=pq(r),tq=pq(t);const wx=lerp(200,330,C(q/1.0));const push=eio(C((r-.9)/1.0));
 cam(lerp(500,610,push),lerp(1000,1110,push),lerp(1.0,2.5,push),t,.3);labBench(t);
 petri(610,1110,.42,{mould:(r-1.3)/.9,halo:(r-1.9)/.8,t:tq});dishStack(780,1170,3);
 cutout(()=>sm(wx,1760,1.1,Object.assign({t:tq,walk:q<1?tq:null,eyes:r>.9?'wide':'open',brow:r>.9?'up':'flat',mouth:r>.9?'o':'smile',look:[.6,.3],tilt:pjit(r)},DOC)),{d:10});
 paperGrain();paperTag('2 weeks later 🗓️',540,560,C(r/.25)*(1-C((r-1.25)/.2)),{size:58});
 if(r>2.0)paperTag('Germs: gone 🦠❌',540,560,(r-2.0)/.3,{size:58,bg:'#e9f2d6'});});
// C: penicillin + Nobel: paper stage with curtains, crane up, medal pops on, paper confetti
sh(T('f2')-.1,(t,r)=>{const q=pq(r),tq=pq(t);cam(540,lerp(1250,1020,eo(r/2.6)),lerp(1.1,1.0,eo(r/2.6)),t,.3);
 paperBg('#3a1f3d','#5a2a3a');rays(540,200,t,'255,230,170',.18,7,1900);
 cutout(()=>{X.fillStyle='#a8323a';X.beginPath();X.moveTo(-200,250);X.quadraticCurveTo(250,500,180,1500);X.lineTo(-200,1500);X.fill();X.beginPath();X.moveTo(1280,250);X.quadraticCurveTo(830,500,900,1500);X.lineTo(1280,1500);X.fill();
  X.fillStyle='#8a2830';X.fillRect(-200,200,1480,120);X.fillStyle='#f2b134';for(let i=0;i<14;i++){X.beginPath();X.arc(-160+i*110,320,30,0,Math.PI);X.fill()}},{d:12});
 cutout(()=>{X.fillStyle='#7d563c';X.fillRect(-200,1500,1500,80);X.fillStyle='#5f3f2b';X.fillRect(-200,1580,1500,600)},{d:8});
 X.fillStyle='rgba(255,240,200,.18)';X.beginPath();X.moveTo(470,200);X.lineTo(610,200);X.lineTo(820,1560);X.lineTo(260,1560);X.fill();
 const hop=q>1.3&&q<1.6?40:0;
 cutout(()=>sm(540,1540-hop,1.1,Object.assign({t:tq,eyes:'happy',brow:'up',mouth:r>1.3?'grin':'smile',look:[0,0],armR:150,bendR:-20,armL:-30,tilt:pjit(r),holdR:(x,y)=>petri(x,y-30,.28,{mould:1,halo:1,t:tq})},DOC)),{d:10});
 medalP(540,960-hop,.9,(r-1.35)/.4);if(r>1.4)paperDots(t,26);
 paperGrain();paperTag('PENICILLIN 💊',540,560,C((r-.15)/.3)*(1-C((r-1.25)/.2)),{size:76,bg:'#e9f2d6'});
 if(r>1.4)paperTag('Nobel Prize · 1945 🏅',540,560,(r-1.4)/.3,{size:62,bg:'#fde7a8'});});
// D: and you. Modern kitchen, you close the fridge (milk inside) and walk out with your suitcase (tracking pan)
sh(T('y1')-.1,(t,r)=>{const q=pq(r),tq=pq(t);const wx=lerp(560,1000,C((q-1.3)/1.5));
 cam(lerp(440,700,eio(C(r/2.8))),1060,lerp(1.08,1.0,eo(r/2.8)),t,.4);kitchenP(t);
 fridgeP(300,1460,.95,{open:1-C((q-.9)/.3),t:tq});
 cutout(()=>sm(wx,1760,1.08,Object.assign({t:tq,walk:q>1.3?tq:null,eyes:'happy',brow:'up',mouth:'smile',look:q>1.2?[.6,0]:[-.6,0],flip:q<1.2?1:0,armR:q<1.2?60:20,bendR:-10,tilt:pjit(r),holdR:q>1.2?(x,y)=>suitcase(x,y+150,.7,'#e85d3f'):null},YOU)),{d:10});
 paperGrain();label3('You, last holiday 🧳',C(r/.3));});
// E: two weeks later at night you open the fridge: green fog, a bulging fuzzy milk carton, stink lines (whip push-in)
sh(T('y2')-.1,(t,r)=>{const q=pq(r),tq=pq(t);const push=eo(C(r/.5));
 cam(lerp(560,470,push),lerp(1100,1080,push),lerp(1.0,1.18,push),t,.3,lerp(4,0,push));kitchenP(t,{night:1});
 fridgeP(330,1460,.95,{open:C(q/.35),bad:C((q-.2)/.5),t:tq});if(r>.4){X.save();glow(330,1000,420,'140,210,90',.35);X.restore()}
 cutout(()=>sm(700,1760,1.08,Object.assign({t:tq,eyes:r>.4?'dizzy':'open',brow:'worried',mouth:r>.4?'wavy':'smile',flip:1,look:[-.6,0],sweat:r>.6,armR:110,bendR:-40,armL:-20,lean:r>.4?.12:0,tilt:pjit(r)},YOU)),{d:10});
 suitcase(860,1720,.6,'#e85d3f');
 paperGrain();label3('You, 2 weeks later 🤢',C(r/.3)*(1-C((r-1.25)/.2)));if(r>1.4)paperTag('Experiment #2 🧪',540,560,(r-1.4)/.3,{size:62,bg:'#e9f2d6'});});
// F: the Memopai beat: voice note -> transcript -> ✅ (paper desk backdrop, phone hero, Memo hops in beside)
sh(T('s1')-.1,(t,r)=>{NOFX=1;paperBg('#0b5c4a','#13886a');paperDots(t,14,['#25d366','#fff6e2','#f2b134']);
 cam(540,lerp(990,960,eo(r/3)),lerp(.97,1.0,eo(r/3)),t,.3,lerp(2,0,eo(r/1.2)));
 phoneUI(540,960,1.16,r,{typing:r>1.9&&r<2.5,list:[{a:-1,date:'SUN 13 DEC'},{a:.2,me:1,voice:1,dur:'0:04',pl:C((r-.2)/1.4),time:'20:15'},{a:1.1,me:1,text:'"Remind me Friday at 6: empty the fridge before we leave"',time:'20:15'},{a:2.5,me:0,text:'✅ Got it! Fri 18 Dec · 18:00 ⏰ Empty the fridge',time:'20:15'}]});
 paperGrain(.1);});
// G: Friday 18:00. Golden kitchen, the reminder arrives, you take the milk out, tracking toward the bin
sh(T('s2')-.1,(t,r)=>{const q=pq(r),tq=pq(t);const wx=lerp(620,760,C((q-1.0)/.8));
 cam(lerp(480,620,eio(C(r/2.4))),1080,1.02,t,.4);kitchenP(t);X.fillStyle='rgba(255,170,90,.18)';X.fillRect(-500,0,2200,2200);
 fridgeP(300,1460,.95,{open:C((q-.5)/.3),t:tq,milk:q<.9?1:0});
 cutout(()=>{X.fillStyle='#5b6670';X.beginPath();X.roundRect(830,1560,110,170,10);X.fill();X.fillStyle='#46505a';X.fillRect(820,1550,130,20)},{d:6});
 cutout(()=>sm(q<.9?600:560,1760,1.08,Object.assign({t:tq,walk:q>1&&q<1.8?tq:null,eyes:'happy',brow:'up',mouth:'smile',flip:q<1?1:0,look:q<1?[-.6,0]:[.6,0],armR:q>.9?70:40,bendR:-30,tilt:pjit(r),holdR:q>.9?(x,y)=>carton(x,y+40,.9,q>1.9?.9:0):null},YOU)),{d:10});
 notif(338,C((r-.05)/.3)*(1-C((r-1.7)/.25)),'Memopai','⏰ 18:00 · Empty the fridge');
 paperGrain();if(r>1.9)paperTag('Milk: out ✅',540,560,(r-1.9)/.3,{size:62});});
// H: payoff. Identical kitchen framing to E, daylight: back from holiday, clean bright fridge, sparkles; the scientist cut-out slides in and nods
sh(T('p1')-.1,(t,r)=>{const q=pq(r),tq=pq(t);cam(lerp(500,560,eo(r/2.2)),1080,lerp(1.1,1.0,eo(r/2.2)),t,.3);kitchenP(t);
 fridgeP(330,1460,.95,{open:C(q/.3),clean:1,milk:0,t:tq});if(r>.3){glow(330,1000,380,'255,250,220',.35);sparkles(330,1000,t,'255,255,255')}
 cutout(()=>sm(620,1760,1.05,Object.assign({t:tq,eyes:'happy',brow:'up',mouth:'grin',flip:1,look:[-.6,0],armR:120,bendR:-30,armL:-25,tilt:pjit(r)},YOU)),{d:10});
 const sx=lerp(1200,800,eo(C((q-.8)/.4)));if(r>.8)cutout(()=>sm(sx,1760,.78,Object.assign({t:tq,eyes:r>1.6&&r<1.9?'wink':'happy',brow:'up',mouth:'smile',flip:1,look:[-.5,0],armR:140,bendR:-20,tilt:pjit(r)+.05,holdR:(x,y)=>petri(x,y-20,.2,{mould:1,halo:1,t:tq})},DOC)),{d:10});
 paperGrain();label3('You, sorted 😌',C(r/.3));});
// I: end card + CTA
sh(T('cta')-.12,(t,r)=>endcard(t,r));
// COVER (t=1000): the scientist proudly holding the mould dish on the paper stage
sh(1000,(t,r)=>{cam(540,1150,1.0,t,0);labBench(0);dishStack(800,1170,4);
 cutout(()=>sm(540,1760,1.15,Object.assign({t:0,eyes:'happy',brow:'up',mouth:'grin',look:[0,0],armR:150,bendR:-20,armL:-30,holdR:(x,y)=>petri(x,y-40,.32,{mould:1,halo:1,t:0})},DOC)),{d:10});
 paperGrain();});
