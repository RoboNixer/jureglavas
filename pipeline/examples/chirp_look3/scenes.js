// 2026-11-20 18:00 FUN FACT — "03:14. Chirp. (He said he'd buy the battery.)"
// craft ladder: smokeAlarm() ceiling smoke alarm with blinking LED + chirp rings, pokeBroom() a broom held from the hand to any point,
// kchair() side-view kitchen chair with a wobble, doorLit() open bedroom doorway with warm lamp light behind.
const YOU={hair:'curl',pj:'#9fc0ec',limb:'#34405a'};
const HIM={hair:'spike',hairc:'#6b4a2a',pj:'#f2b36a',limb:'#4a3a2a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function chip(x,y,e,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';txt(e,0,4,64,'#111',0,'400 ');X.restore()}
// ---- craft ladder ----
// smokeAlarm(x,y,s,o): ceiling-mounted alarm, (x,y)=centre of the disc; o.chirp = 0..1 phase of a chirp (red flash + rings), o.ok = steady green LED
function smokeAlarm(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);rr(-40,-70,80,30,6,'#d8d4cc',4);
 X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=16;ell(0,0,110,46,'#f7f5f0',7);X.shadowColor='transparent';ell(0,-6,78,26,'#e7e3db',0);
 for(let k=-2;k<=2;k++)line([[k*22,-18],[k*22,6]],4,'#c5c0b6');
 const ch=o.chirp||0,on=ch>0&&ch<.35;
 if(on){glow(60,18,140,'255,60,60',.7);for(let j=0;j<3;j++){X.save();X.globalAlpha=(1-ch/.35)*.8;X.strokeStyle='#ff5a5a';X.lineWidth=7;X.beginPath();X.arc(0,10,130+j*45+ch*160,.15*Math.PI,.85*Math.PI);X.stroke();X.restore()}}
 circ(60,18,11,on?'#ff3b3b':(o.ok?'#4fe08a':'#7a2a2a'),3);if(o.ok)glow(60,18,60,'80,240,140',.5);X.restore()}
// pokeBroom(x0,y0,x1,y1): broom handle held at (x0,y0), bristles end at (x1,y1)
function pokeBroom(x0,y0,x1,y1){const a=Math.atan2(y1-y0,x1-x0),L=Math.hypot(x1-x0,y1-y0);X.save();X.translate(x0,y0);X.rotate(a);
 line([[-120,0],[L-110,0]],14,'#9a6a3a');rr(L-130,-34,40,68,8,'#c0392b',5);
 path(()=>{X.moveTo(L-92,-40);X.lineTo(L,-56);X.lineTo(L,56);X.lineTo(L-92,40);X.closePath()},'#e8c25a',6);for(let k=-2;k<=2;k++)line([[L-80,k*14],[L-6,k*20]],4,'#b8902a');X.restore()}
// kchair(x,y,s,wob): wooden kitchen chair, (x,y)=floor centre, seat top at y-300*s; wob = wobble angle (deg)
function kchair(x,y,s=1,wob=0){X.save();X.translate(x,y);X.rotate(wob*Math.PI/180);X.scale(s,s);gshadow(0,4,170,.28);
 for(const lx of[-120,120])rr(lx-12,-300,24,300,6,'#a8713f',5);rr(-150,-330,300,40,10,'#c98a56',6);rr(108,-640,26,330,6,'#a8713f',5);for(const yy of[-600,-520])rr(-10,yy,130,22,6,'#c98a56',4);X.restore()}
// doorLit(x,y): open doorway to a lamp-lit bedroom; (x,y)=floor centre; 300 wide, 820 tall
function doorLit(x,y){rr(x-175,y-850,350,850,10,'#f2e6d6',0);X.fillStyle='#3a2f4a';X.fillRect(x-150,y-820,300,820);glow(x-40,y-520,320,'255,200,120',.55);
 rr(x-150,y-150,300,150,0,'rgba(255,190,110,.18)',0);rr(x+150,y-820,30,820,4,'#7a5a3a',4)}
function hall(t,o={}){const n=!o.day;proom(t,{win:null,frame:null,plant:0,lamp:0,wall:n?'#7d8db5':'#f4e3c9',wall2:n?'#64739c':'#e8cda8',floor:n?'#6e5a4a':'#b98a5e',floor2:n?'#54443a':'#94673f'});
 const g=X.createLinearGradient(0,-400,0,470);g.addColorStop(0,n?'#4a5578':'#e9d6bc');g.addColorStop(1,n?'#5a6690':'#f3e2c8');X.fillStyle=g;X.fillRect(-3000,-3000,8000,3600);line([[-3000,600],[5000,600]],8,n?'#3b4566':'#d4bc9c');
 if(n){glow(540,1300,900,'120,150,255',.12)}}
const AX=760,AY=660;
function chirpPh(t){return ((t+.2)%1.6)/1.6}
function dogHowl(x,y,s,t,o={}){const ph=chirpPh(t);const howl=ph<.45;dog(x,y,s,Object.assign({t,eyes:howl?'closed':'wide',mouth:howl?'open':'flat',look:[.4,-.8],tilt:howl?-18:-6},o));
 if(howl){X.save();X.globalAlpha=1-ph/.45;txt('🎵',x+150*s,y-560*s-ph*160,56,'#fff',0,'400 ');X.restore()}}
// YOU standing on the chair with the broom up at the alarm
function youOnChair(t,o={}){const cx=o.cx||480,fy=1760,s=.95,wob=Math.sin(t*5)*1.4;if(o.phone){X.save();X.translate(cx-230,1330);X.rotate(-.12);broom(0,0,.85,0);X.restore()}kchair(cx,fy,1.0,wob);
 const sy=fy-300;sm(cx-10,sy,s,Object.assign({t,eyes:'open',lid:.45,brow:'angry',mouth:'wavy',look:[.9,-.3],armR:o.phone?150:125,bendR:o.phone?-160:-20,armL:o.phone?40:115,bendL:o.phone?-30:-10,
  holdR:(x,y)=>{if(o.phone)phoneH(x,y,.25,o.phoneOn);else pokeBroom(x,y,AX-70+Math.sin(t*9)*14,AY+20)}},YOU,o.you||{}));}

// A: 03:14, you on a wobbly chair poking the chirping alarm with a broom, the dog howls at every chirp
sh(0,(t,r)=>{cam(540,1020,lerp(1.02,1.07,C(r/3)),t,.12);hall(t);
 smokeAlarm(AX,AY,1.0,{chirp:chirpPh(t)});dogHowl(240,1670,1.0,t);youOnChair(t);
 if(r>.25)label3('You at 03:14 😩',C((r-.25)/.2))});

// B: two-shot: your partner in the bedroom doorway hugging a pillow: 'I'll get a battery tomorrow. Promise.'  → you, deadpan
const B0=T('m1')-.05;
sh(B0,(t,r)=>{cam(540,1020,lerp(1.0,1.04,C(r/3)),t,.1);hall(t);doorLit(270,1700);
 const rs=T('n1')-B0,me=r>rs;
 smokeAlarm(AX,AY,1.0,{chirp:chirpPh(t)});
 sm(250,1700,1.0,Object.assign({t,eyes:me?'happy':'open',lid:me?0:.6,brow:'flat',mouth:me?'smile':'open',talk:!me&&r<2.2?t:null,look:[.6,-.1],tilt:-8,armL:30,bendL:-120,armR:30,bendR:-120},HIM));
 X.save();X.translate(250,1700-470);X.rotate(-.08);rr(-120,-75,240,150,60,'#ffffff',6);line([[-60,-20],[60,-10]],4,'#d8dde8');X.restore();
 youOnChair(t,{cx:580,you:{armL:25,bendL:-20,lid:me?.55:.3,brow:me?'flat':'up',mouth:me?'flat':'o',look:me?[-.9,.1]:[-.8,-.2]}});
 label3(me?'You, 03:15 😑':'Your partner 😴',C((me?r-rs:r-.15)/.2))});

// C: still on the chair: Memopai hops onto the shelf, you speak into the phone, the 🔋 thought flies in
const C0=T('n1')+1.0,MP=.2;
sh(C0,(t,r)=>{cam(560,1020,lerp(1.04,1.08,C(r/3)),t,.12);hall(t);
 smokeAlarm(AX,AY,1.0,{chirp:chirpPh(t)});
 rr(700,1040,300,26,8,'#a8713f',5);line([[730,1066],[760,1110]],8,'#7a5a3a');line([[970,1066],[940,1110]],8,'#7a5a3a');
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1040,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,800,mp,8,160)}
 const talk=r>T('s2')-C0&&r<T('s2')-C0+3.6;
 youOnChair(t,{cx:460,phone:1,phoneOn:talk,you:{lid:0,brow:'up',mouth:talk?(Math.sin(t*14)>0?'open':'smile'):'smile',look:[.6,.1],eyes:'open'}});
 const ft=T('s2')-C0+1.2,fl=C((r-ft)/.9);if(r>ft-.3){if(fl<1){const px=lerp(330,600,eo(fl)),py=lerp(700,980,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🔋',C((r-ft+.3)/.3)*(1-fl*.5))}else sparkles(600,980,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 👋',C((r-MP)/.2))});

// D: your WhatsApp chat with Memopai
const D0=T('s2')+1.9;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#232a52';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.35&&r<.8,list:[{a:0,me:1,text:'🎤 0:04 · tomorrow 5pm remind my partner to buy a battery 🔋',time:'03:15'},{a:.8,me:0,text:'✅ Got it! Partner ❤️ · Tomorrow 17:00 · Buy a battery 🔋',time:'03:15'},{a:1.35,date:'07:40 · ✓ Partner accepted'}]})});

// E: next day 17:00 by the corner shop: his WhatsApp pings, he turns into the shop
const E0=T('s3')+.35;
sh(E0,(t,r)=>{cam(540,1000,lerp(1.02,1.06,C(r/3)),t,.12);shopfront(t,{open:C((r-1.6)/.5)});
 const bz=r>.25&&r<1.7,y=1780,s=1.12,wx=r<1.6?lerp(760,640,C(r/1.6)):640;
 sm(wx,y,s,Object.assign({t,flip:1,walk:r<1.5?t:0,eyes:bz?'wide':'happy',brow:'up',mouth:bz?'o':'grin',look:bz?[.5,.5]:[-.6,-.2],armR:110,bendR:-110,
  holdR:(x,yy)=>{const j=bz?Math.sin(t*60)*4:0;phoneH(x+j,yy,.2,bz)}},HIM));
 notif(338,r<2.4?C((r-.2)/.25):C((2.7-r)/.3),'Memopai','Buy a battery 🔋 (from your partner)')});

// F: that evening at home: he clicks the new battery in, you steady the chair, the open-loop fact
const F0=T('f1')+.2;
sh(F0,(t,r)=>{cam(560,1020,lerp(1.02,1.06,C(r/4)),t,.1);hall(t,{day:1});glow(200,700,700,'255,220,160',.45);
 const done=r>2.4;smokeAlarm(AX,AY,1.0,{ok:done});
 kchair(660,1760,1.0,0);
 sm(650,1460,.95,Object.assign({t,eyes:done?'happy':'open',brow:'up',mouth:done?'grin':'o',look:[.7,-.5],armR:125,bendR:-20,armL:30,bendL:-30,
  holdR:(x,y)=>{if(!done){X.save();X.translate(lerp(x,AX-30,C(r/2)),lerp(y-20,AY+50,C(r/2)));rr(-24,-36,48,72,8,'#3a3f48',4);rr(-24,-36,48,18,6,'#e0533d',0);X.restore()}}},HIM));
 sm(320,1760,1.12,Object.assign({t,eyes:'open',lid:.3,brow:'smug',mouth:'smirk',look:[.8,-.4],armR:70,bendR:-20,armL:20,bendL:0},YOU));
 if(done){chip(AX,AY+190,'✅',eo(C((r-2.4)/.25)));sparkles(AX,AY+190,C((r-2.4)/.8),10,200,'#7cf0a0')}
 else chip(AX,AY+200,'🥶',.9);
 label3('Why at night? 🥶',C((r-.1)/.2))});

// G: payoff: same hallway, same 03:14, dark and calm; chair back by the wall, broom leaning, dog asleep; you peek out of the bedroom door, smiling
const G0=T('p1')-.1;
sh(G0,(t,r)=>{cam(540,1020,lerp(1.0,1.05,C(r/4)),t,.08);hall(t);glow(270,1100,700,'255,200,120',.25);doorLit(270,1700);
 smokeAlarm(AX,AY,1.0,{ok:1});kchair(800,1760,.9,0);X.save();X.translate(880,1260);X.rotate(.12);broom(0,0,.75,0);X.restore();
 sm(300,1760,1.1,Object.assign({t,eyes:r>1.2?'happy':'open',lid:.2,brow:'up',mouth:'smile',blush:1,look:[.7,-.6],tilt:6,armL:30,bendL:-30,armR:30,bendR:-30},YOU));
 dog(610,1640,.85,{t,eyes:'closed',mouth:'smile',look:[0,0],tilt:4});
 const zp=(t*.6)%1;X.save();X.globalAlpha=Math.sin(zp*Math.PI);txt('z',700+zp*90,1180-zp*170,58,'#fff',0);X.restore();
 label3(r<1.6?'You, 03:14 😌':'You, sorted 😌',C((r<1.6?r-.1:r-1.6)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(540,760,1.0,t,.1);hall(t);smokeAlarm(AX,AY,1.0,{chirp:.1});dogHowl(240,1670,1.0,.25);youOnChair(.3,{you:{brow:'angry',sweat:1}})});
