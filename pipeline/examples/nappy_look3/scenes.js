// 2026-11-27 12:00 STORY — "'Babe... that was the last nappy.' (It's 02:00.)"
// craft ladder (look3.js): baby3(), nappyPack3(), cot3() with spinning mobile, nursery3() star-wallpaper nursery, changeTable3(), sm o.beard / o.bags
const YOU={hair:'bun',hairc:'#4a2e22',lashes:1};
const HIM={hair:'spike',hairc:'#5a3a22',beard:1};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function towelHook(x,y,s,a=1){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,10,'#9aa7b2',4);X.fillStyle='#ffffff';X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.moveTo(-60,0);X.lineTo(60,0);X.lineTo(70,200);X.lineTo(-70,200);X.closePath();X.fill();X.save();X.clip();X.fillStyle='rgba(225,60,60,.85)';for(let i=-4;i<5;i++){X.fillRect(i*22-6,0,11,210);X.fillRect(-80,20+i*24+90,160,7)}X.restore();X.stroke();X.restore()}
// A: 02:00 nursery. Camera starts tight on HIS upside-down empty pack, then pulls back + pans to YOU with the crying baby
function shotA(t,r,cv){
 const pull=cv?1:eo(C((r-1.3)/1.6));
 cam(lerp(720,560,pull),lerp(1080,1110,pull),lerp(1.3,1.12,pull)+(cv?0:C(r/6)*.04),t,.1);
 nursery3(t,{night:1,win:830,shelf:330,nl:150});
 cot3(170,1560,.95,{t});
 const shake=cv?0:Math.sin(r*16)*(r<1.9?.22:.05);
 sm(745,1830,1.02,Object.assign({t,eyes:'open',lid:.35,bags:1,brow:'worried',mouth:(!cv&&r<1.8)?'open':'wavy',talk:(!cv&&r<1.8)?t:null,look:[-.7,.1],pj:'#9fc0ec',limb:'#2b3550',
  armR:150,bendR:-30,holdR:(x,y)=>{nappyPack3(x-70,y+80,.82,{empty:1,rot:Math.PI+shake});if(!cv&&r>.4&&r<2.6){const f=((r-.4)*.9)%1;X.save();X.globalAlpha=1-f;X.fillStyle='#ffffff';X.beginPath();X.ellipse(x-10+Math.sin(f*9)*14,y+180+f*260,9,6,f*4,0,7);X.fill();X.restore()}},armL:30,bendL:-20},HIM));
 sm(400,1840,1.12,Object.assign({t,eyes:'open',lid:.3,bags:1,brow:'worried',mouth:'wavy',sweat:pull>.8,look:[.6,-.1],pj:'#f2a7c0',limb:'#5a2a44',
  armL:70,bendL:-90,armR:55,bendR:-110,holdR:(x,y)=>baby3(x-40,y-30,.92,{t,cry:1,kick:t})},YOU));
 if(!cv&&r>1.9)label3('You, 02:00 😩',C((r-1.9)/.2))}
sh(0,(t,r)=>shotA(t,r));
// A2: Plan B. Crane down over the changing table: the tea towel slides on, two strips of tape, the baby kicks happily
const A2=T('j1')-.3;
sh(A2,(t,r)=>{cam(540,lerp(980,1080,eo(C(r/2.4))),lerp(1.2,1.26,C(r/2.6)),t,.1);
 nursery3(t,{night:1,win:880,shelf:240,nl:900});
 const w=C((r-.35)/.8),tp=C((r-1.25)/.3)+C((r-1.6)/.3);
 sm(560,1480,1.0,Object.assign({t,eyes:r>1.9?'happy':'open',lid:.25,bags:1,brow:r>1.9?'up':'worried',mouth:r>1.9?'smile':'flat',look:[0,.6],pj:'#f2a7c0',limb:'#5a2a44',noshadow:1,armL:lerp(40,70,w),bendL:-60,armR:lerp(40,70,w),bendR:-60},YOU));
 changeTable3(540,1780,1.1);
 baby3(560,1300,1.25,{t,rot:-Math.PI/2,nappy:'towel',wrap:w,tape:tp,happy:r>1.9,kick:r>1.9?t:null});
 if(tp>=2)sparkles(450,1300,C((r-1.9)/.5),8,120,'#ffffff');
 label3('Plan B 🫠',C(r/.2))});
// B: next evening, sofa. Two thought bubbles (he'll / she'll buy them), then Memopai hops on, voice note, 🍼 flies into your phone
const B0=T('r1')-.3,MP=T('r1')+1.2-B0;
sh(B0,(t,r)=>{const tr=eo(C(r/1.6));cam(lerp(680,520,tr),1060,lerp(1.08,1.13,C(r/4)),t,.1);
 proom(t,{win:820,plant:960,lamp:150,frame:[400,520],night:1,wall:'#e9d6bd',wall2:'#d6bd9c',curtain:'#d9a05a',curtain2:'#b98040'});glow(160,800,560,'255,210,140',.45);
 psofa(540,1700,1.2,'#7a6fb5','#5f569a');
 const s=1.02,y=1800,talk=r>MP+.7;
 sm(700,y,s,Object.assign({t,eyes:'open',lid:.35,bags:1,brow:'flat',mouth:'smirk',look:[.5,-.4],armR:60,bendR:-70,armL:60,bendL:-70},HIM,SIT));
 sm(380,y,s,Object.assign({t,eyes:'open',lid:talk?0:.35,brow:talk?'up':'flat',mouth:talk?'smile':'smirk',talk:talk?t:null,look:talk?[.3,.4]:[-.5,-.4],armR:talk?140:60,bendR:talk?-130:-70,holdR:(x,y)=>phoneH(x,y,talk?.2:-.1,talk),armL:60,bendL:-70},YOU,SIT));
 const ta=C((r-.15)/.3)*(1-C((r-MP+.15)/.2));
 thought3(360,HD(y,s)-220,150,ta,380,HD(y,s)-110,(x,yy)=>{txt("he'll buy",x,yy-22,44,'#151515',0,'900 ');txt("them 🙃",x,yy+30,44,'#151515',0,'900 ')});
 thought3(730,HD(y,s)-220,150,ta,700,HD(y,s)-110,(x,yy)=>{txt("she'll buy",x,yy-22,44,'#151515',0,'900 ');txt("them 🙃",x,yy+30,44,'#151515',0,'900 ')});
 const mp=C((r-MP)/.5);if(mp>0){memo(540,1500,.6,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(540,1380,mp,10,180)}
 const fl=C((r-MP-1.6)/.8),hy=HD(y,s);if(fl>0&&fl<1){X.save();X.font="74px 'Noto Color Emoji'";X.textAlign='center';X.fillText('🍼',lerp(380,450,eo(fl)),lerp(hy-250,hy+170,eo(fl))-Math.sin(fl*Math.PI)*70);X.restore()}
 if(fl>=1)sparkles(450,hy+150,C((r-MP-2.4)/.5),8,120,'#7cf0a0');
 if(mp<=0)label3('You two, 21:00 🙃',C(r/.2));else label3('Memopai 😎',C((r-MP)/.2))});
// C: the WhatsApp chat (voice note, transcript, ✅, he tapped Accept)
const C0=T('s2')+2.0;
sh(C0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#24305e');g.addColorStop(1,'#3b4c86');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'170,200,255',.3);
 phoneUI(540,930,1.16,r+.9,{typing:r+.9>1.2&&r+.9<1.6,list:[{a:0,me:1,voice:1,dur:'0:05',pl:C((r+.9)/1),time:'21:04'},{a:.3,me:1,text:'"Every Saturday at 10, remind me and Babe: buy nappies 🍼"',time:'21:04'},{a:1.6,me:0,text:'✅ Got it! Every Saturday 10:00 → You + Babe: 🍼 Buy nappies',time:'21:04'},{a:2.6,me:0,text:'✓ Babe tapped Accept · no app needed',time:'21:05'}]})});
// D: Saturday 10:00, supermarket aisle: he walks in (tracking), his phone pings, he grabs a big pack of nappies
const D0=T('s3')-.2,NT=.8;
sh(D0,(t,r)=>{const wk=eo(C(r/1.1));cam(lerp(700,560,wk),1050,lerp(1.05,1.1,C(r/4)),t,.1);
 shopIn(t);
 for(let k=0;k<3;k++)nappyPack3(560+k*150,1070,.5,{});for(let k=0;k<2;k++)nappyPack3(630+k*150,1300,.5,{});
 const grab=C((r-2.4)/.5),s=1.06,y=1830;
 sm(lerp(980,540,wk),y,s,Object.assign({t,walk:r<1.1?t:null,eyes:r>NT&&r<2.4?'wide':'happy',brow:'up',mouth:r>2.4?'grin':'o',look:r<2.4?[.1,.5]:[.8,-.2],
  armL:r<2.4?100:55,bendL:r<2.4?-110:-60,holdL:(x,yy)=>{if(r<2.4)phoneH(x,yy,.1,r>NT)},armR:lerp(30,95,grab),bendR:lerp(10,-40,grab),holdR:(x,yy)=>{if(grab>.5)nappyPack3(x+40,yy+30,.6,{rot:.1})}},HIM));
 if(r>NT)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.7)/.25)),'Memopai','🍼 Buy nappies · Saturday 10:00');
 if(r>2.9)label3('Him, 10:01 😎',C((r-2.9)/.2))});
// E: payoff, same nursery framing as A, warm nightlight: full pack on the shelf, baby asleep, he gives a thumbs up; pan right to the tea towel back on its hook
sh(T('p1')-.45,(t,r)=>{const pn=eo(C((r-3.0)/1.1));cam(lerp(560,680,pn),1110,lerp(1.12,1.16,C(r/4.5)),t,.1);
 nursery3(t,{night:1,win:830,shelf:330,nl:150,warm:.25});
 cot3(170,1560,.95,{t});
 nappyPack3(450,505,.5,{});
 X.save();rr(905,620,40,1000,6,'#f6efe4',6);X.restore();towelHook(905,820,.9);if(pn>.6)sparkles(905,900,C((r-3.8)/.6),9,150,'#ffffff');
 sm(800,1830,1.02,Object.assign({t,eyes:r>1.4?'happy':'open',brow:'up',mouth:'smile',look:[-.6,.2],pj:'#9fc0ec',limb:'#2b3550',armR:lerp(30,150,C((r-.8)/.4)),bendR:lerp(-20,-120,C((r-.8)/.4)),holdR:(x,y)=>{if(r>1.1){X.save();X.translate(x,y-30);circ(0,0,26,'#151515',0);rr(-8,-62,18,44,9,'#151515',0);X.restore()}},armL:30,bendL:-20},HIM));
 sm(400,1840,1.12,Object.assign({t,eyes:r>1.8?'happy':'closed',lid:.2,brow:'up',mouth:'smile',blush:1,look:[.6,.1],pj:'#f2a7c0',limb:'#5a2a44',
  armL:70,bendL:-90,armR:55,bendR:-110,holdR:(x,y)=>baby3(x-40,y-30,.92,{t,sleep:1,nappy:'nappy'})},YOU));
 label3('You two, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.4,1));
