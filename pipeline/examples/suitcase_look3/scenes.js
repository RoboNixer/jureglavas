// 22:00 STORY 2026-11-20: "Flight's on Saturday. Your suitcase? His cat lives in it."
// craft ladder: closet3() open hallway cupboard with an empty dashed outline, catSuit() cat curled in an open suitcase, hairTufts() floating cat hair
const YOU={hair:'curl'},LUKA={hair:'spike',hairc:'#3b2a1e',pj:'#4f8f6a',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+50;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);
// open hallway cupboard: shelves, a coat, and a dashed outline where the suitcase should be
function closet3(x,y,t,o={}){X.save();rr(x-190,y-1020,380,1030,12,'#fff8ef',8);rr(x-170,y-1000,340,990,8,'#7a5a3e',0);
 rr(x-160,y-990,320,970,6,'#5e4430',0);rr(x-160,y-700,320,22,4,'#c9a57a',4);
 // coat hanging top-left + shoe box
 path(()=>{X.moveTo(x-120,y-960);X.lineTo(x-60,y-960);X.lineTo(x-40,y-760);X.lineTo(x-140,y-760);X.closePath()},'#3d6fa8',5);
 rr(x+30,y-790,110,90,8,'#e7b45a',5);
 if(o.none){}else if(o.empty){X.save();X.setLineDash([24,16]);X.lineWidth=8;X.strokeStyle='#ffd23f';X.globalAlpha=.6+.4*Math.sin(t*6);rr(x-110,y-460,220,420,26,null,8);X.strokeStyle='#ffd23f';X.beginPath();X.roundRect(x-110,y-460,220,420,26);X.stroke();X.restore()}
 else{X.save();X.translate(x,y-10);X.scale(.62,.62);suitcase3(0,0,1,{});X.restore()}
 // open door leaf
 path(()=>{X.moveTo(x+190,y-1020);X.lineTo(x+290,y-1060);X.lineTo(x+290,y+40);X.lineTo(x+190,y+10);X.closePath()},'#8a6a4a',7);circ(x+265,y-500,12,'#e8c15a',4);X.restore()}
function hairTufts(cx,cy,t,n=10,rad=200){X.save();X.strokeStyle='#e8954a';X.lineWidth=5;X.lineCap='round';for(let i=0;i<n;i++){const a=i*2.4+t*.7,px=cx+Math.cos(a)*rad*(.5+rnd(i)*.6),py=cy+Math.sin(a*1.3)*rad*.5-((t*40+i*30)%120);X.globalAlpha=.8;X.beginPath();X.moveTo(px,py);X.quadraticCurveTo(px+12,py-10,px+22,py+4);X.stroke()}X.restore()}
function catSuit(x,y,s,t,o={}){suitcase3(x,y,s,{open:1});cat3(x,y-60*s,.62*s,{t,curl:1,eyes:o.eyes||'closed'});if(o.z){X.save();X.font="800 54px Inter";X.fillStyle='#fff';X.globalAlpha=.7+.3*Math.sin(t*3);X.fillText('z',x+120*s,y-230*s-(t*30%40));X.restore()}}
function lounge(t,night){proom(t,{night:night?1:0,lamp:night?150:0,win:800,frame:[300,540],plant:night?0:150,wall:'#dfe7d6',wall2:'#c7d3bd'})}
function friendAv(x,y,r){circ(x,y,r,'#4f8f6a',0);circ(x,y-6,r*.55,'#fff',3);X.fillStyle='#3b2a1e';X.beginPath();X.arc(x,y-14,r*.55,Math.PI,0);X.fill()}

// A: Monday 21:40, open cupboard, the suitcase spot is empty
function shotA(t,r,lab){cam(520,1060,lerp(1.12,1.04,eo(C(r/2.4))),t,.12);hallway(t,{dx:830,night:1,plant:0});glow(540,700,600,'255,210,150',.3);
 closet3(360,1560,t,{empty:1});
 const s=1.15,y=1830,snap=r>1.3;
 sm(700,y,s,Object.assign({t,flip:1,eyes:snap?'wide':'open',brow:snap?'worried':'up',mouth:snap?'o':'smile',sweat:snap,look:[-.7,.3],armL:snap?150:40,bendL:snap?-150:20,armR:30,bendR:20},YOU));
 if(lab)label3('You, Monday 21:40 😳',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: whip-pan: your suitcase is his cat's bed
sh(T('h2')-.25,(t,r)=>{const w=eo(C(r/.32));cam(lerp(1400,540,w),1100,lerp(1.02,1.1,C(r/3.4)),t,.12);lounge(t,0);glow(820,600,520,'255,236,170',.35);
 psofa(620,1330,1.05,'#c56a4a','#a55536');
 sm(700,1700,.95,sitO(Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'smile',look:[-.4,.3],armL:110,bendL:-120,armR:120,bendR:-120,holdL:(x,y)=>phoneH(x,y+10,.1,1,'#7fb2e0')},LUKA)));
 catSuit(380,1470,1.05,t,{z:1});
 if(r>.9){const p=C((r-.9)/.4);X.save();X.globalAlpha=.6*p*(.6+.4*Math.sin(t*6));X.strokeStyle='#ffd23f';X.lineWidth=8;X.setLineDash([22,16]);X.beginPath();X.ellipse(380,1340,240,210,0,0,7);X.stroke();X.restore()}
 label3('Your suitcase 🙃',C((r-.2)/.2))});
// C: your chat with Luka, August: "this week, promise!"
sh(T('n1')-.1,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#2b3f55';X.fillRect(0,0,1080,1920);glow(540,900,700,'255,200,140',.25);
 phoneUI(540,930,1.16,r,{name:'Luka 🙈',sub:'last seen today',avf:(x,y,rr2)=>friendAv(x,y,rr2),list:[{a:0,date:'AUG 14'},{a:.1,me:1,text:'hey, need my suitcase back soon 🙏',time:'10:12'},{a:.9,me:0,text:'omg yes!! this week, promise 👍',time:'10:40'},{a:2.0,date:'TODAY'}]})});
// D: hallway, you speak to Memopai; mascot hops onto the shelf; the 🧳 card flies into the phone
const D0=T('s2')-.05;
sh(D0,(t,r)=>{cam(540,1060,lerp(1.05,1.1,C(r/2.5)),t,.12);hallway(t,{dx:830,night:1,plant:0});glow(540,700,600,'255,210,150',.3);
 closet3(270,1560,t,{empty:1});
 const mp=C((r-.05)/.5);if(mp>0){memo(800,1560,.58,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1310,mp,8,160)}
 const s=1.15,y=1830,hy=HD(y,s);
 sm(520,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'open',talk:t,look:[.3,.4],armR:150,bendR:-150,holdR:(x,yy)=>phoneH(x,yy+10,.1,1),armL:30,bendL:20},YOU));
 const fl=C((r-.6)/.8);if(fl<1){const px=lerp(330,640,eo(fl)),py=lerp(hy-120,hy+170,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'🧳 Luka',1-fl*.6)}else sparkles(650,hy+170,C((r-1.4)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.2))});
// E: the Memopai chat: voice note, the reminder for Luka, he accepts once
const E0=T('s2')+2.4;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const acc=T('s3')+.6-E0;
 phoneUI(540,930,1.16,r,{typing:r>.8&&r<1.1,list:[{a:0,me:1,voice:1,pl:C(r/.8),dur:'0:04',time:'21:43'},{a:1.1,me:0,text:'✅ Thu 18:00 → Luka 🙈 · 🧳 Bring back the suitcase',time:'21:43'},{a:acc,date:'Luka 🙈 tapped Accept ✓'}]});
 if(r>acc&&r<acc+.8)glow(540,700,400,'130,240,160',.3*(1-C((r-acc)/.8)))});
// F: Thursday 18:00, his lounge: HIS phone pings
const F0=T('s3')+2.0,PG=T('s3')+2.55-F0;
sh(F0,(t,r)=>{cam(540,1080,lerp(1.05,1.1,C(r/2.4)),t,.12);lounge(t,1);glow(840,620,500,'255,200,140',.3);wclock(250,560,.6,6,0);
 psofa(620,1330,1.05,'#c56a4a','#a55536');catSuit(330,1470,.95,t,{z:r<PG});
 const on=r>PG;
 sm(680,1700,.95,sitO(Object.assign({t,flip:1,eyes:on?'wide':'open',lid:on?0:.3,brow:on?'up':'flat',mouth:on?'o':'smile',look:on?[-.3,.5]:[0,.3],armL:on?120:20,bendL:on?-120:20,armR:20,bendR:20,holdL:on?(x,y)=>phoneH(x,y+10,.15,1):null},LUKA)));
 if(on&&r<PG+1.6)notif(338,C((r-PG)/.3),'Memopai','⏰ 18:00 · 🧳 Bring back the suitcase · from you');
 if(r<PG)label3('Luka, Thursday 18:00 🎮',C(r/.2));else if(r>=PG+1.6)label3('His WhatsApp 📲',C((r-PG-1.6)/.2))});
// G: your front door: Luka with your suitcase, cat on top, hair everywhere
const G0=T('m1')-.15;
function doorFrame(t){proom(t,{win:null,frame:null,plant:0,lamp:0,wall:'#f4e3c9',wall2:'#e8cda8',floor:'#b98a5e',floor2:'#94673f'});
 rr(250,330,560,1470,10,'#fff8ef',8);X.save();X.beginPath();X.rect(270,350,520,1440);X.clip();const g=X.createLinearGradient(0,350,0,1790);g.addColorStop(0,'#3b467f');g.addColorStop(.45,'#c47a8a');g.addColorStop(.6,'#f3b07a');g.addColorStop(.61,'#5f7f52');g.addColorStop(1,'#4a6a40');X.fillStyle=g;X.fillRect(270,350,520,1440);glow(540,1050,420,'255,200,140',.35);X.restore()}
sh(G0,(t,r)=>{cam(540,1080,lerp(1.04,1.09,C(r/3)),t,.12);doorFrame(t);
 const talk=r>.1&&r<2.8;
 sm(540,1800,1.05,Object.assign({t,eyes:'happy',brow:'worried',mouth:talk?'open':'grin',talk:talk?t:null,blush:1,look:[0,.2],armL:-40,bendL:30,armR:40,bendR:-30},LUKA));
 suitcase3(540,1660,.75,{});cat3(690,1300,.42,{t,eyes:'open'});hairTufts(560,1250,t,12,240);
 label3('Your friend 😅',C(r/.2))});
// H: Saturday morning, same hallway: packed, passport, sorted
sh(T('p1')-.05,(t,r)=>{cam(540,1060,lerp(1.04,1.09,C(r/3.4)),t,.12);hallway(t,{dx:830,plant:0});glow(700,620,600,'255,240,190',.45);
 closet3(270,1560,t,{none:1});
 const s=1.15,y=1830,hy=HD(y,s);
 suitcase3(700,1830,.8,{});hairTufts(700,1580,t*.5,4,120);
 sm(520,y,s,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:1,look:[.3,0],armR:60,bendR:-60,armL:150,bendL:-150,holdL:(x,yy)=>{rr(x-30,yy-60,60,80,8,'#7a1f3a',4);circ(x,yy-20,14,'#e8c15a',0)}},YOU));
 if(r>.5)sparkles(540,800,C((r-.5)/1.4),12,320);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>{cam(540,1100,1.08,t,.12);lounge(t,0);psofa(620,1330,1.05,'#c56a4a','#a55536');catSuit(380,1470,1.05,t,{z:1})});
