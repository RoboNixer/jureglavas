// 2026-11-28 12:00 STORY — "'So... did the parcel get lost?' (Grandpa's Christmas parcel is still in your hallway.)"
// craft ladder (look3.js): videoCall3(), catNap3(), boxOpen3(), hallTable3(), scarf3(), postFront3(), postCounter3(), sm hair 'afro'
const YOU={hair:'afro',hairc:'#1e1714',col:'#c08457',jumper:'#3f9a6a'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function grade(c,a){X.save();X.setTransform(1,0,0,1,0,0);X.globalCompositeOperation='multiply';X.fillStyle=`rgba(${c},${a})`;X.fillRect(0,0,1080,1920);X.restore()}
// Grandpa inside the video call (local coords: screen centre = 0,0)
function grandpaCam(t,talk,happy){const g=X.createLinearGradient(0,-200,0,200);g.addColorStop(0,'#8a4a32');g.addColorStop(1,'#5e2f22');X.fillStyle=g;X.fillRect(-300,-200,600,400);
 rr(120,-150,120,90,6,'#d9b25a',5);rr(130,-140,100,70,4,'#6fa0c8',0);xtree(-190,180,.42,t);
 for(let k=0;k<6;k++){const on=Math.sin(t*4+k)>0;circ(-250+k*100,-170+Math.sin(k)*8,7,on?'#ffd23f':'#7a5a2a',0)}
 const wv=happy?Math.sin(t*9)*18:0;
 dad(-10,262,.36,{t,hairc:'#eceff3',santa:happy?0:1,eyes:happy?'happy':'open',brow:happy?'up':'worried',mouth:talk?'open':(happy?'grin':'flat'),talk:talk?t:null,look:[0,.2],armR:happy?150+wv:20,bendR:happy?-140:0,armL:20,noshadow:1,jumper:'#8a6a4a'});
 if(happy)scarf3(-10,262,.36,'#e2353a')}
// the living room + hallway (one continuous set so the camera can pan from the call to the parcel)
function flat(t,day){proom(t,{win:520,frame:null,lamp:day?null:120,night:day?0:1,wall:day?'#f3e3cc':'#d9c0a8',wall2:day?'#e6cfb0':'#b99c84',floor:'#a8794e',floor2:'#86603c',curtain:'#c8553d',curtain2:'#a3402d'});
 winFX(t,520,day?{}:{snow:1});
 if(!day){fairyLights3(-80,640,980,640,60,t,16);bokeh(t,'255,210,140',8,500,900)}
 xtree(80,1420,1.15,t);
 // arch into the hallway
 rr(1060,560,520,1000,0,day?'#f6e6cf':'#cdb196',7);rr(1090,600,460,960,0,day?'#fbefdc':'#e1c7aa',0);
 X.fillStyle='rgba(0,0,0,.08)';X.fillRect(1090,600,40,960);
 rr(1420,700,120,760,10,'#7a4a2a',7);circ(1440,1100,9,'#ffd23f',4);
 hallTable3(1260,1500,.9,{});}
function shotA(t,r,cv,nol,happy){
 const pull=cv?1:eo(C((r-1.7)/1.4)),pan=cv?0:eo(C((r-3.9)/1.3));
 cam(lerp(325,560,pull)+pan*690,lerp(1110,1170,pull)+pan*120,lerp(2.6,1.0,pull)+pan*.32,t,.08);
 flat(t,0);
 psofa(730,1700,1.0,'#4f6f9a','#3f5a80');
 rr(150,1330,370,30,8,'#8a5a3a',6);rr(170,1360,20,200,4,'#6e4a2e',4);rr(480,1360,20,200,4,'#6e4a2e',4);
 videoCall3(335,1330,1.0,{t,fn:tt=>grandpaCam(tt,!cv&&!happy&&r<1.9,happy)});
 const fr=cv?1:C((r-1.9)/.3);
 sm(740,1790,1.0,Object.assign({t,eyes:happy?'happy':'wide',brow:happy?'up':'worried',mouth:happy?'grin':(fr>.5?'o':'flat'),look:[-.7,.2],sweat:!happy&&fr>.5?1:0,blush:happy?1:0,
  armL:happy?150+Math.sin(t*8)*12:60,bendL:happy?-140:-80,holdL:(x,y)=>{if(!happy)pmug(x+10,y+20+Math.sin(t*30)*fr*3,.9,'#c8323c')},armR:20,bendR:-20,noshadow:1},YOU,SIT));
 // the parcel on the hall table (with the cat asleep on it) or the cat in the empty box
 if(!happy){parcel3(1250,1474,.55,{t});X.save();X.translate(1180,1365);rr(-50,-8,100,16,4,'#fff',0);X.restore();catNap3(1250,1338,.62,{t})}
 else{boxOpen3(1250,1474,.62);catNap3(1250,1420,.62,{t})}
 if(!happy)grade('150,170,215',.18);else grade('255,215,170',.1);
 if(cv||nol)return;
 if(!happy){if(r>2.2&&r<4.0)label3('You, Christmas Eve 😬',C((r-2.2)/.2));if(r>4.6)label3("Grandpa's present 📦",C((r-4.6)/.2))}
 else{if(r>2.0)label3('You, sorted 😌',C((r-2.0)/.2))}}
sh(0,(t,r)=>shotA(t,r));
// B: the boot. Post office street, your car drives past twice (day, then dusk), the parcel bouncing in the back window
const B0=T('b1')-.3;
sh(B0,(t,r)=>{const p2=r>1.35?1:0,u=p2?C((r-1.35)/1.35):C(r/1.35);
 cam(lerp(470,610,C(r/2.8)),1130,1.08,t,.08);
 const top=p2?'#2a2f5a':'#8fc9ff',mid=p2?'#c8607a':'#cfe8ff',bot=p2?'#f3a86a':'#fff1d8';psky(top,mid,bot,1150);
 hills(1160,p2?'#5a5a7a':'#a9c79a',t,0,50,3);
 for(let k=0;k<5;k++){const hx=-260+k*360;if(Math.abs(hx-540)<380)continue;rr(hx-110,820,220,350,6,['#e8a87c','#9ec5e0','#c9b0d8','#f2d38a','#a8d8b0'][k],6);path(()=>{X.moveTo(hx-130,830);X.lineTo(hx,720);X.lineTo(hx+130,830);X.closePath()},'#8a4a3a',6);rr(hx-60,900,50,60,4,p2?'#ffe6a8':'#dff0ff',4);rr(hx+10,900,50,60,4,p2?'#ffe6a8':'#dff0ff',4)}
 X.fillStyle=p2?'#5b5f73':'#9a9aa2';X.fillRect(-600,1450,2400,90);X.fillStyle=p2?'#3a3d4c':'#5d6068';X.fillRect(-600,1540,2400,600);
 X.fillStyle='rgba(255,255,255,.7)';for(let k=-4;k<12;k++)X.fillRect(k*200,1760,110,14);
 postFront3(560,1450,.95,{t,night:p2});
 const cx=lerp(-420,1520,u);pcar(cx,1740,.95,{t,bounce:1});
 X.save();X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.fillText('📦',cx-70,1590+Math.abs(Math.sin(t*9))*-8);X.restore();
 if(p2)grade('90,90,160',.25);
 label3('Your boot · 2 weeks 🫠',C(r/.2));
 X.save();X.setTransform(1,0,0,1,0,0);const pp=p2?C((r-1.6)/.2):C((r-.5)/.2);if(pp>0){X.translate(540,560);X.scale(lerp(1.4,1,eo(pp)),lerp(1.4,1,eo(pp)));rr(-230,-50,460,100,50,'#c8323c',6);txt('Drove past: '+(p2?2:1),0,2,50,'#fff',0,'900 ')}X.restore()});
// C: VHS rewind of shot A, then '1 DECEMBER'
const C0=T('rw')-.3;
sh(C0,(t,r)=>{const back=Math.max(0,5.6-r*3.4);shotA(t-r*2,back,0,1);vhsRewind3(t,C(r/1.5),'1 DEC')});
// D: 1 December, daylight. You tape the parcel at the coffee table, the thought pops, Memo hops onto the sofa, the 📦 flies into your phone
const D0=T('rw')+1.6,MP=.35;
sh(D0,(t,r)=>{const tr=eo(C(r/3.2));cam(lerp(470,560,tr),1150,lerp(1.18,1.06,tr),t,.08);
 flat(t,1);
 psofa(560,1700,1.0,'#4f6f9a','#3f5a80');
 rr(150,1450,560,30,8,'#8a5a3a',6);
 const tap=r<1.2,talk=r>1.6;
 parcel3(330,1450,.62,{t,squash:tap?Math.abs(Math.sin(t*10))*.6:0});
 sm(600,1790,1.0,Object.assign({t,eyes:'open',brow:talk?'up':'flat',mouth:talk?'smile':'flat',talk:talk?t:null,look:talk?[.3,-.3]:[-.6,.4],
  armL:tap?70+Math.sin(t*10)*8:60,bendL:tap?-70:-60,holdL:(x,y)=>{if(tap)tape3(x-10,y+10,.6,t*3)},armR:talk?140:40,bendR:talk?-130:-30,holdR:(x,y)=>{if(talk)phoneH(x,y,.2,1)},noshadow:1},YOU,SIT));
 const hy=HD(1790,1.0),ta=C((r-.6)/.3)*(1-C((r-1.6)/.2));
 thought3(700,hy-210,140,ta,640,hy-100,(x,yy)=>{X.save();X.font="70px 'Noto Color Emoji'";X.textAlign='center';X.fillText('📦',x,yy-10);X.restore();txt('post it!',x,yy+62,34,'#151515',0,'900 ')});
 const mp=C((r-MP)/.5);if(mp>0){memo(850,1500,.58,{t,hop:mp,glow:1});if(mp<1)sparkles(850,1380,mp,10,170)}
 const fl=C((r-1.6)/.7);if(fl>0&&fl<1){X.save();X.font="74px 'Noto Color Emoji'";X.textAlign='center';X.fillText('📦',lerp(700,700,eo(fl)),lerp(hy-210,hy+150,eo(fl))-Math.sin(fl*Math.PI)*60);X.restore()}
 if(fl>=1)sparkles(700,hy+150,C((r-2.3)/.5),8,120,'#7cf0a0');
 if(r<MP+.2)label3('You, 1 December 📦',C(r/.2));else label3('Memopai 😎 · on WhatsApp',C((r-MP-.2)/.2))});
// E: the WhatsApp chat (voice note → transcript → ✅)
const E0=T('s2')-.15;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#1f7a4a');g.addColorStop(1,'#c8323c');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'255,230,180',.3);
 for(let k=0;k<26;k++){const x=(k*173)%1080,y=((k*311)+t*90)%1920;circ(x,y,4+(k%3)*3,'rgba(255,255,255,.7)',0)}
 const q=r+.6;phoneUI(540,930,1.16,q,{typing:q>1.3&&q<1.8,list:[{a:0,me:1,voice:1,dur:'0:04',pl:C(q/1),time:'10:12'},{a:.4,me:1,text:'"Saturday at 9, remind me: post Grandpa\'s parcel 📦"',time:'10:12'},{a:1.8,me:0,text:'✅ Got it! Sat 5 Dec · 09:00 → 📦 Post Grandpa\'s parcel',time:'10:12'}]})});
// F: Saturday 09:00 hallway: the reminder lands, you lift the parcel from under the cat (it slides off, offended), out the door
const F0=T('s3')-.2,NT=.35;
sh(F0,(t,r)=>{const wk=eo(C(r/.9)),out=eo(C((r-1.8)/.7));cam(lerp(420,560,wk)+out*160,1150,lerp(1.05,1.12,C(r/2.5)),t,.08);
 hallway(t,{wall:'#fbe9d0',wall2:'#f1d3a8'});
 rr(820,640,240,880,10,'#7a4a2a',7);circ(850,1100,9,'#ffd23f',4);rr(840,660,200,200,8,'#bfe3ff',5);
 wclock(250,620,.8,9,0);
 hallTable3(560,1500,.9,{});
 const lift=C((r-1.1)/.3);
 if(lift<1){parcel3(560,1474,.55,{t});catNap3(560,1338,.62,{t})}
 else catNap3(lerp(560,470,C((r-1.4)/.3)),1474,.55,{t,zzz:0,mad:1});
 const s=1.02,y=1840,x=lerp(-60,400,wk)+out*520;
 sm(x,y,s,Object.assign({t,walk:(r<.9||r>1.8)?t:null,eyes:r>NT&&r<1.1?'wide':'happy',brow:'up',mouth:r>1.1?'grin':'o',look:r<1.1?[.6,.1]:[.4,.3],
  armL:lift>0?100:20,bendL:lift>0?-60:-20,armR:lift>0?80:120,bendR:lift>0?-40:-120,holdR:(xx,yy)=>{if(lift<=0)phoneH(xx,yy,.3,r>NT)},jumper:'#e0a43a'},YOU));
 if(lift>0)parcel3(x+20,lerp(1474,1360,lift),.5,{t});
 if(r>NT&&r<1.9)notif(338,C((r-NT)/.3)*(1-C((r-1.7)/.2)),'Memopai','📦 Post Grandpa\'s parcel · Sat 09:00');
 if(r>1.9)label3('Leaving the house 📦',C((r-1.9)/.2))});
// F2: post office counter: you slide the parcel over, the clerk stamps it SENT
const F2=T('s3')+2.3;
sh(F2,(t,r)=>{cam(lerp(440,540,eo(C(r/1.6))),1130,lerp(1.12,1.04,C(r/1.6)),t,.08);
 postCounter3(t);
 sm(760,1560,.92,{t,hair:'bun',hairc:'#7a4fa0',col:'#e8c4a0',eyes:'happy',brow:'up',mouth:'smile',look:[-.5,.2],armL:lerp(40,150,C((r-.6)/.2))-C((r-.8)/.15)*30,bendL:-90,armR:20,noshadow:1,jumper:'#c8323c'});
 counter(540,1600,1.0);
 parcel3(lerp(330,460,eo(C(r/.5))),1290,.5,{t});
 const st=C((r-.8)/.15);if(st>0){X.save();X.translate(470,1150);X.rotate(-.18);X.scale(lerp(1.6,1,eo(st)),lerp(1.6,1,eo(st)));X.globalAlpha=st;X.strokeStyle='#c8323c';X.lineWidth=10;X.strokeRect(-130,-46,260,92);txt('SENT ✓',0,2,56,'#c8323c',0,'900 ');X.restore();if(r<1.1)impact(C((r-.8)/.3))}
 sm(260,1860,1.02,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,-.1],armR:90,bendR:-50,armL:20,bendL:-20,jumper:'#e0a43a'},YOU));
 label3('Post office · Sat 09:12 📮',C(r/.2))});
// G: payoff = frame 1 again: Grandpa in the scarf waves, pull back to you laughing, pan to the cat asleep IN the empty box
sh(T('p1')-.45,(t,r)=>shotA(t,r*1.05+.9,0,0,1));
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.4,1));
