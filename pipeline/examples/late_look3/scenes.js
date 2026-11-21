// 2026-11-21 16:00 FUN FACT — "20:25. Table for two. He's '5 min away'."
// craft ladder: bistro() restaurant kit, chair3(), bread3(), stopwatch3() (look3.js)
const YOU={hair:'curl'};
const HIM={hair:'spike',hairc:'#151515'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function wab(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="700 52px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+70;X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=18;rr(-w/2,-50,w,100,30,'#ffffff',6);X.shadowColor='transparent';
 X.fillStyle='#ffffff';X.beginPath();X.moveTo(-w/2+30,44);X.lineTo(-w/2+10,74);X.lineTo(-w/2+64,46);X.fill();X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.font="500 26px Inter";X.fillStyle='#888';X.fillText('20:25',w/2-56,34);X.restore()}
function comb(x,y,s=1){X.save();X.translate(x,y);X.rotate(-.5);X.scale(s,s);rr(-14,-70,28,140,8,'#ff6a9a',5);for(let k=0;k<7;k++)line([[14,-60+k*20],[34,-60+k*20]],5,'#151515');X.restore()}
// the table scene (night = waiting alone, warm = sorted)
function tableScene(t,o){bistro(t,{night:1});if(o.warm)glow(540,900,800,'255,200,130',.35);
 if(o.chairR!==0)chair3(o.chairX||740,1560,1.05);
 if(o.chairL)chair3(330,1560,1.05)}
function tableFront(t,full){rtable(540,1760,1.35,{flowers:0});bread3(470,1530,.9,full);
 for(const gx of[300,780]){X.save();X.translate(gx,1545);rr(-24,-80,48,80,10,'rgba(220,240,255,.75)',5);X.restore()}}
// A: frame 1 = 20:25, you alone at a table for two, his chair empty, crumbs; his text pops
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.04,t,0);else cam(540,1080,lerp(1.04,1.1,C(r/3.6)),t,.12);
 tableScene(t,{});
 const y=1920,s=1.18,txtIn=C((r-2.2)/.25);
 sm(420,y,s,Object.assign({t,eyes:'open',lid:.42,brow:'flat',mouth:'flat',look:txtIn>0?[.5,.5]:[.8,-.1],tilt:-4,armR:118,bendR:-118,holdR:(x,yy)=>phoneH(x,yy+10,.1,txtIn>0),armL:30,bendL:60},YOU));
 tableFront(t,0);
 if(lab){label3('You at 20:25 😑',C(r/.2)*(1-C((r-2.0)/.2)));wab(560,560,'5 min away 🏃',sp(txtIn,12,.5))}}
sh(0,(t,r)=>shotA(t,r,1));
// B: split: you, deadpan | him in the shower, foam on his head, typing happily
sh(T('r1')-.1,(t,r)=>{split2(t,
  (t)=>{tableScene(t,{chairR:0});sm(610,1920,1.18,Object.assign({t,eyes:'open',lid:.55,brow:'flat',mouth:'flat',look:[.9,0],armR:118,bendR:-118,holdR:(x,yy)=>phoneH(x,yy+10,.1,1),armL:30,bendL:60},YOU));tableFront(t,0)},
  (t)=>{bathroom(t,{water:1,steam:1,glass:900,sx:300,sy:160});sm(420,1980,1.25,Object.assign({t,foam:1,eyes:'happy',brow:'up',mouth:'grin',look:[.3,.5],armL:160,bendL:-40,armR:115,bendR:-115,holdR:(x,yy)=>phoneH(x,yy+10,-.1,1)},HIM));drops(420,900,t,1,260)},
  {camA:[540,1080,1.0],camB:[560,1060,1.0],p:C(r/.3)});
 label3('Him, right now 🚿',C((r-.15)/.2))});
// C: Monday, your sofa: Memopai hops onto the arm; voice note; 🏃 flies into the phone
const C0=T('s2')-.05,MP=.12;
sh(C0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/4.5)),t,.1);
 proom(t,{win:760,plant:200,lamp:0,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:'#f6e6cf',wall2:'#ecd2b0'});glow(760,520,700,'255,236,180',.45);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.5&&r<4.4;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.6,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'🏃',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// D: the chat: voice note → confirmation → invite → he accepts
const D0=T('s3')-.05;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a3f62');g.addColorStop(1,'#d9a77f');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.45&&r<.8,list:[{a:0,me:1,voice:1,pl:C(r/.45),dur:'0:04',time:'Mon 18:02'},{a:.8,me:0,text:'✅ Got it! Sat 19:15 → Marko 🏃 Leave now for dinner!',time:'18:02'},{a:1.6,date:'Invite sent to Marko · no app needed'},{a:2.3,date:'✓ Marko tapped Accept'}]})});
// E: Saturday 19:14, his bathroom: towel, combing, his 'minute' runs to 77 s; then the ping, and he runs
const E0=T('f1')-.05,NT=T('f1')+3.9-E0;
sh(E0,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/5)),t,.12);bathroom(t,{water:0,steam:.4,shower:0});
 sink(300,1480,1);
 const ping=r>NT,run=C((r-NT-.9)/.8);
 stopwatch3(770,610,.55,{sec:lerp(48,77,C((r-.2)/3.4)),t});
 const x=lerp(400,1100,eo(run));
 sm(x,1900,1.22,Object.assign({t,towel:'#5aa9e6',eyes:ping?'wide':'open',lid:ping?0:.35,brow:ping?'up':'smug',mouth:ping?'o':'smile',look:ping?[-.3,.5]:[.4,-.2],walk:run>0?t*1.6:null,lean:run>0?10:0,
  armR:ping?110:150,bendR:ping?-110:-120,holdR:ping?(hx,hy)=>phoneH(hx,hy+10,-.1,Math.sin(t*24)>0):(hx,hy)=>comb(hx,hy,.9),armL:20,bendL:15},HIM));
 if(!ping)label3('His minute ⏱️',C((r-.1)/.2));
 else notif(338,C((r-NT)/.3)*(1-C((r-NT-2.2)/.3)),'Memopai','🏃 Leave now for dinner! (from you)')});
// F: same restaurant, 19:55: HE is already there, waving; you walk in
sh(T('b2')-.1,(t,r)=>{cam(540,1080,lerp(1.06,1.1,C(r/1.6)),t,.12);
 tableScene(t,{warm:1,chairR:0});
 const wk=C(r/.9);sm(lerp(-80,250,eo(wk)),1920,1.12,Object.assign({t,eyes:'open',brow:'up',mouth:'o',look:[.8,-.1],walk:wk<1?t*1.6:null,armL:20,bendL:15,armR:20,bendR:15},YOU));
 sm(720,1920,1.18,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:r<1.1?'open':'grin',talk:r<1.1?t:null,look:[-.8,0],armR:150+Math.sin(t*14)*14,bendR:-30,armL:30,bendL:60},HIM));
 tableFront(t,1);
 label3('Him, 19:55 😎',C(r/.2))});
// G: both laughing at the table; full bread basket; you, sorted
sh(T('p1')-.08,(t,r)=>{cam(540,1080,lerp(1.04,1.08,C(r/4)),t,.12);
 tableScene(t,{warm:1,chairR:0});
 sm(360,1920,1.14,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.6,0],tilt:Math.sin(t*6)*3,armL:30,bendL:60,armR:60,bendR:-70},YOU));
 sm(730,1920,1.14,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[.6,0],tilt:-Math.sin(t*6)*3,armR:70,bendR:-70,armL:30,bendL:60},HIM));
 tableFront(t,1);
 if(r>.5)sparkles(540,800,C((r-.5)/1.4),12,300);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3,0,1));
