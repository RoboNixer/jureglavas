// 2026-11-28 14:00 HALF-HALF "Exam tomorrow: only one of you started revising"
// craft ladder (look3.js): sm hair 'braids' (+beadc), teenRoom3() night/day teen bedroom, studyDesk3(), deskLamp3(), canPile3(), notesPage3(), revChart3(), examHall3(), timer3()
const YOU={hair:'braids',hairc:'#24160f',col:'#a06a48',jumper:'#7a5af0',lashes:1,beadc:'#ffd23f'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const LT='Without Memopai 😩',LB='With Memopai 😌',SP={lt:LT,lb:LB,lbY:1570};
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.5);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function zzz(x,y,t,a=1){for(let k=0;k<3;k++){const ph=(t*.6+k/3)%1;X.save();X.globalAlpha=a*(1-ph);txt('z',x+ph*110,y-ph*200,40+ph*40,'#3a4a66',8,'900 ');X.restore()}}
function sleeper(t,o={}){bed3(560,1720,.82,{t,fresh:1,under:()=>{X.save();X.translate(-250,-300);X.rotate(-Math.PI/2);sm(0,0,.66,Object.assign({t,eyes:'closed',brow:'flat',mouth:o.smile?'smile':'o',noshadow:1,armL:20,armR:20},YOU));X.restore()}})}
// seated at the desk (front view); o: eyes, mouth, brow, holdNotes (0..1 raise), flip pages
function atDesk(t,o={}){const raise=o.raise||0;
 sm(540,1560,.9,Object.assign({t,eyes:o.eyes||'open',lid:o.lid||0,brow:o.brow||'worried',mouth:o.mouth||'wavy',sweat:o.sweat,talk:o.talk,look:o.look||[0,.4],tilt:o.tilt||0,
  armL:lerp(150,120,raise)+(o.flap?Math.sin(t*16)*16:0),bendL:-60,armR:lerp(-150,-120,raise)-(o.flap?Math.sin(t*16+1)*16:0),bendR:60,
  holdR:raise>0?(x,y)=>notesPage3(x-60,y-20,.75,{rot:-.08,scrawl:1}):null},SIT,YOU));
 studyDesk3(540,1390,.9,{mess:o.mess,cans:o.cans,neat:o.neat});deskLamp3(250,1368,.8,{on:1})}

// ---------- A: exam eve. top = 02:00 cramming at the desk; bottom = asleep, chart full of ticks ----------
const DADG={jumper:'#5a6f9a',limb:'#3a4560'};
function doorway(t,a){if(a<=0)return;X.save();X.globalAlpha=a;rr(110,540,230,1040,8,'#3a2a20',8);const g=X.createLinearGradient(0,540,0,1580);g.addColorStop(0,'#ffe0a0');g.addColorStop(1,'#f0b860');X.fillStyle=g;X.fillRect(122,552,206,1028);
 X.save();X.globalAlpha=a*.35;X.fillStyle='#ffe0a0';X.beginPath();X.moveTo(328,1580);X.lineTo(122,1580);X.lineTo(60,1800);X.lineTo(560,1800);X.closePath();X.fill();X.restore();X.restore()}
function topCram(t,r){const DT=T('h1')-T('k0')+1.2,da=1-C((r-DT)/.5),dx=lerp(250,-120,eio(C((r-DT)/.9)));cam(lerp(500,560,C(r/4)),lerp(1150,1100,C(r/4)),lerp(1.0,1.15,eo(r/4.5)),t,.12);teenRoom3(t,{night:1,clock:[2,0]});
 doorway(t,1);if(dx>-100)dad(dx,1620,.8,Object.assign({t,eyes:'open',brow:'angry',mouth:r<2.4?'open':'frown',talk:r<2.4?t:null,look:[.8,0],armR:r<2.6?120+Math.sin(t*8)*10:20,bendR:-20,armL:15,walk:r>DT?t:null},DADG));
 atDesk(t,{mess:1,cans:5,flap:1,sweat:1,mouth:'wavy',look:[Math.sin(t*5)*.6,.5]});
 // flying pages
 for(let k=0;k<3;k++){const ph=(t*.7+k/3)%1;X.save();X.globalAlpha=1-ph;X.translate(560+Math.sin(k*2+t)*200*ph,1300-ph*500);X.rotate(ph*4+k);notesPage3(0,0,.35,{scrawl:1});X.restore()}}
function botSleep(t,r){cam(lerp(400,500,eio(r/4.5)),1480,lerp(1.05,1.12,C(r/4)),t,.1);teenRoom3(t,{night:1,clock:[2,0],ticks:15,chartX:330,chartS:.85});sleeper(t,{smile:1});zzz(420,1260,t)}
sh(0,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topCram(tt,r),tt=>botSleep(tt,r),Object.assign({tagA:C(r/.3)},SP))});

// ---------- B: 'Who wrote these notes?! ...Oh. Me.' (top close-up push), bottom sleeps on ----------
function topNotes(t,r){const me=r>1.15;cam(540,lerp(1000,930,eo(r/1.5)),lerp(1.35,1.6,eo(r/1.6)),t,.1);teenRoom3(t,{night:1,clock:[2,4]});
 atDesk(t,{mess:1,cans:5,raise:eo(C(r/.35)),eyes:me?'wide':'open',lid:me?0:.55,brow:me?'up':'angry',mouth:me?'o':'open',talk:r<1.0?t:null,look:[.5,-.4],tilt:me?6:-8})}
function botSleep2(t,r){cam(lerp(320,290,C(r/2)),1520,1.3,t,.08);teenRoom3(t,{night:1,clock:[2,4],ticks:15});sleeper(t,{smile:1});zzz(330,1260,t)}
sh(T('k1')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topNotes(tt,r),tt=>botSleep2(tt,r),SP)});

// ---------- C: three weeks ago, daytime, both on the bed with the same thought (crane down) ----------
function bedSit(t,r,o={}){teenRoom3(t,{clock:o.clock||[16,40],ticks:o.ticks});bed3(560,1720,.82,{t,fresh:1});
 const fl=o.flop||0;sm(540,1530+fl*40,.86,Object.assign({t,eyes:o.eyes||'open',lid:o.lid||0,brow:o.brow||'up',mouth:o.mouth||'smirk',talk:o.talk,look:o.look||[.5,-.6],tilt:-fl*14,lean:-fl*10,armL:o.armL||30,armR:o.armR||95,bendR:o.bendR||-95,holdR:o.holdR},SIT,YOU))}
function weeksAgo(t,r){cam(540,lerp(950,1080,eo(r/2.6)),lerp(1.2,1.05,eo(r/2.6)),t,.1);bedSit(t,r,{holdR:(x,y)=>phoneH(x,y,-.1,0)});
 thought3(780,760,180,C((r-.3)/.3),650,880,(x,y)=>{txt('start',x,y-30,52,'#151515',0,'900 ');txt('revising? 📚',x,y+34,48,'#151515',0,'900 ')})}
function agoOv(t,r){return (tt,y0,y1)=>{const a=C(r/.25)*(1-C((r-2.4)/.3));if(a>0)splitTag('3 weeks ago 🗓️',165,y0+135,'#ff8a3d','#fff',a)}}
sh(T('s1')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>weeksAgo(tt,r),tt=>weeksAgo(tt,r),Object.assign({ovB:agoOv(t,r)},SP))});

// ---------- D: the split: top 'next week 🙃' flops back with the controller; bottom voice-notes Memopai ----------
function topLater(t,r){cam(540,1080,lerp(1.05,1.12,C(r/4)),t,.1);const fl=eo(C((r-1.2)/.6));
 bedSit(t,r,{flop:fl,lid:fl*.4,brow:'flat',mouth:'smirk',look:[.8,.2],armR:60+fl*40,bendR:-90,holdR:(x,y)=>pad3(x,y-10,.55,0)});
 const a=C((r-.1)/.3)*(1-C((r-3.6)/.3));thought3(780,760,180,a,650,880,(x,y)=>{if(r>.8)txt('next week 🙃',x,y+6,50,'#7a7f8a',0,'900 ');else{txt('start',x,y-30,52,'#151515',0,'900 ');txt('revising? 📚',x,y+34,48,'#151515',0,'900 ')}})}
function botNote(t,r){cam(lerp(760,800,C(r/4)),1080,1.08,t,.1);const up=eo(C(r/.4));
 bedSit(t,r,{eyes:'open',brow:'up',mouth:r<2.2?'open':'smile',talk:r<2.2?t:null,look:[.4,-.2],armR:lerp(95,140,up),bendR:-120,holdR:(x,y)=>phoneH(x,y,-.3,1)});
 if(r<2.3)for(let k=0;k<3;k++){X.save();X.globalAlpha=.6*(1-((t*2+k/3)%1));X.strokeStyle='#25d366';X.lineWidth=6;X.beginPath();X.arc(600,700,40+((t*2+k/3)%1)*90,-.7,.7);X.stroke();X.restore()}
 const mp=C((r-2.4)/.5);if(mp>0)memo(340,1180,.42,{t,wave:1,hop:mp,glow:1})}
function chatOv(t,r){return (tt,y0,y1)=>{X.save();const y=y0+150;
 waBubble(885,y,450,'🎤 0:05  “Every weekday at 5, remind me: 30 minutes of revision”',1,C((r-.3)/.3),'16:41');
 if(r>2.3)waBubble(455,y+240,450,'✅ Got it! Mon–Fri · 17:00 🔁 30 min revision 📚',0,C((r-2.3)/.3),'16:41');X.restore()}}
sh(T('s2')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topLater(tt,r),tt=>botNote(tt,r),Object.assign({ovB:chatOv(t,r)},SP))});

// ---------- E: 17:00. top games on the bed (chart empty); bottom: ping -> desk -> 30-min timer -> ticks fill ----------
function topGame(t,r){cam(lerp(520,580,C(r/4)),1100,lerp(1.05,1.14,C(r/4)),t,.1);
 bedSit(t,r,{flop:1,lid:.3,brow:'flat',mouth:'grin',look:[.8,.3],armL:60,armR:100,bendR:-90,holdR:(x,y)=>pad3(x,y-10+Math.sin(t*20)*4,.55,Math.sin(t*9)*.15),clock:[17,0],ticks:0})}
function botStudy(t,r){const d=r>1.2;cam(lerp(540,560,C(r/4)),lerp(1080,1120,C(r/4)),lerp(1.05,1.15,C(r/4)),t,.1);
 if(!d){bedSit(t,r,{clock:[17,0],ticks:0,eyes:'open',brow:'up',mouth:'o',look:[.4,-.2],armR:120,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.2,1)});const sh_=Math.sin(t*60)*6;glow(600,1000,150,'130,240,160',.5);txt('📳',600+sh_,960,64,'#fff',0,'400 ')}
 else{const n=Math.floor(lerp(1,15,C((r-1.6)/2.4)));teenRoom3(t,{clock:[17,30],ticks:n,chartX:300,chartS:1.0});atDesk(t,{neat:1,eyes:'open',brow:'up',mouth:'smile',look:[0,.6]});timer3(800,1140,.8,C((r-1.3)/1.6));if(r>2.9)sparkles(300,960,C((r-2.9)/.6),8,180)}}
function pingOv(t,r){return (tt,y0,y1)=>{const p=C((r-.1)/.3)*(1-C((r-1.2)/.2));if(p>0){X.save();X.globalAlpha=C(p*2);const yy=y0+150+lerp(-60,0,eo(p));X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=20;rr(160,yy,740,150,34,'rgba(250,250,252,.98)',5);X.shadowColor='transparent';avatar(240,yy+75,48,4);
  txt('Memopai · 17:00',300,yy+48,30,'#6b7280',0,'700 ','left');txt('⏰ 30 min revision 📚',300,yy+100,40,'#151515',0,'800 ','left');X.restore()}
 const a=C((r-1.7)/.3)*(1-C((r-4.1)/.2));if(a>0)splitTag('Every weekday 🔁',540-180,y0+150,'#1faa59','#fff',a)}}
sh(T('s3')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topGame(tt,r),tt=>botStudy(tt,r),Object.assign({ovB:pingOv(t,r)},SP))});

// ---------- F: exam morning, tracking along the rows to you (top: eye bags + yawns; bottom: calm, writing) ----------
function hall(t,r,win){cam(lerp(380,540,eio(r/2.6)),lerp(1080,1120,C(r/3)),lerp(1.0,1.15,eo(r/3)),t,.1);examHall3(t,{grey:!win,h:9,m:5});
 const yawn=!win&&((r%2.2)>1.0&&(r%2.2)<1.8),nod=!win?Math.max(0,Math.sin(t*1.6))*14:0;
 sm(540,1640,.95,Object.assign({t,eyes:win?'open':(yawn?'closed':'open'),lid:win?0:.6,brow:win?'up':'sad',mouth:win?'smile':(yawn?'open':'wavy'),look:win?[0,.7]:[0,.2],tilt:nod,
  armL:win?130:150,bendL:-50,armR:win?-120+Math.sin(t*14)*8:-150,bendR:60,holdR:win?(x,y)=>line([[x,y],[x+16,y-50]],8,'#2a6fdb'):null},SIT,YOU));
 if(!win){X.save();X.globalAlpha=.55;ell(495,1640-0.95*545+0,22,8,'#6a5a8a',0);ell(585,1640-0.95*545,22,8,'#6a5a8a',0);X.restore();zzz(640,1000,t,.8)}
 rr(150,1500,780,40,10,'#c99a6a',7);X.save();X.translate(560,1488);X.rotate(-.04);rr(-130,-26,260,30,4,'#fffef8',4);if(win){X.fillStyle='#2a3a8a';for(let k=0;k<3;k++)X.fillRect(-110,-20+k*8,lerp(40,220,C(r/2))-k*30,3)}X.restore()}
sh(T('s4')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>hall(tt,r,0),tt=>hall(tt,r,1),SP)});

// ---------- G: the warm half takes over: pen down, big grin, 'You, sorted' ----------
function sorted(t,r){cam(540,lerp(1100,1060,C(r/2)),lerp(1.1,1.0,eo(r/2)),t,.1);examHall3(t,{h:10,m:30});
 sm(540,1640,.95,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[0,-.2],armL:150,bendL:-20,armR:-150+Math.sin(t*8)*10,bendR:20},SIT,YOU));
 rr(150,1500,780,40,10,'#c99a6a',7);X.save();X.translate(560,1488);rr(-130,-26,260,30,4,'#fffef8',4);X.restore();if(r>.9)sparkles(540,800,C((r-.9)/.6),10,300)}
sh(T('p1')-.08,(t,r)=>{const d=lerp(960,0,eio(r/.9));if(d<300)capLow();else capMid(1040);
 splitPanel3(t,tt=>hall(tt,2.6,0),tt=>sorted(tt,r),Object.assign({div:d},SP));if(r>.95)label3('You, sorted 😌',C((r-.95)/.2))});
sh(T('cta'),(t,r)=>{capLow();endcard(t,r)});
sh(1000,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topCram(tt,1.2),tt=>botSleep(tt,1.2),SP)});
