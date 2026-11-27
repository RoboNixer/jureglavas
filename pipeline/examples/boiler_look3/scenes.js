// 2026-11-27 19:00 LIFE WITH vs WITHOUT — "'Babe... why can I see my breath?' (First frost. The boiler check you never booked.)"
// craft ladder (look3.js): radiator3() icicles/heat waves, boiler3() error/flame, breath3(), duvet3(), winFX() snow/frost/leaves in a window, calPage3(), vhsRewind3()
const YOU={hair:'curl',hairc:'#1e1714',jumper:'#e0a43a'};
const HIM={hair:'spike',hairc:'#d9b25a'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function grade(c,a){X.save();X.setTransform(1,0,0,1,0,0);X.globalCompositeOperation='multiply';X.fillStyle=`rgba(${c},${a})`;X.fillRect(0,0,1080,1920);X.restore()}
// the living room, cold (warm=0) or toasty (warm=1); same framing so the payoff mirrors frame 1
function livingRoom(t,warm){
 proom(t,{win:780,frame:[330,520],lamp:warm?140:null,night:1,wall:warm?'#efd2b0':'#c9d3de',wall2:warm?'#ddb58c':'#aab7c6',floor:warm?'#c58f62':'#8f8a86',floor2:warm?'#9c6a44':'#6c6460',curtain:warm?'#c8553d':'#6d7f96',curtain2:warm?'#a3402d':'#56667c'});
 winFX(t,780,{snow:1,frost:1});
 // shelf with books + plant for depth
 rr(110,700,170,16,4,'#8a6a4a',4);for(let k=0;k<5;k++)rr(122+k*26,612,22,88,4,['#c8553d','#3f6fb5','#e0a43a','#5a9a5a','#7a4fa0'][k],4);
 radiator3(780,1262,.95,{t,ice:warm?0:1,warm:warm?1:0});
 if(warm)cat3(790,1010,.55,{t,curl:1,purr:1});
}
// A: WITHOUT. Tight on HIM in the duvet (breath clouds), pull back + pan right to YOU touching the frozen radiator, push in on the icicles
function shotA(t,r,cv,nol){
 const pull=cv?1:eo(C((r-1.4)/1.5)),push=cv?0:eo(C((r-4.2)/1.6));
 cam(lerp(400,600,pull)+push*120,lerp(1000,1060,pull)+push*40,lerp(1.38,1.08,pull)+push*.16,t,.1);
 livingRoom(t,0);
 psofa(380,1700,1.05,'#6f7a92','#58627a');
 const talk=!cv&&r<1.9;
 sm(380,1790,1.0,Object.assign({t,eyes:'open',lid:.2,brow:'worried',mouth:talk?'open':'wavy',talk:talk?t:null,look:[.5,-.1],armL:20,armR:20,noshadow:1},HIM,SIT));
 duvet3(380,1790,1.0,{t,shiver:1});
 breath3(410,HD(1790,1.0)+40,t,1,1);
 const touch=cv?1:C((r-2.2)/.5);
 sm(630,1840,1.0,Object.assign({t,eyes:'open',brow:'worried',mouth:touch>.9?'o':'flat',look:[.6,.3],armR:lerp(20,75,touch),bendR:lerp(0,-20,touch),armL:25,bendL:-30,sweat:0},YOU));
 breath3(660,HD(1840,1.0)+40,t+.4,cv?1:C((r-2.4)/.4),1);
 grade('150,175,220',.32);
 if(!cv&&!nol&&r>1.9)label3('Without Memopai 🥶',C((r-1.9)/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: the boiler. Crane down from the blinking E119 to YOU on the phone; the calendar page for the first free slot slaps onto the wall
const B0=T('j1')-.3;
sh(B0,(t,r)=>{const cr=eo(C(r/1.4));cam(540,lerp(760,1020,cr),lerp(1.3,1.08,cr),t,.12);
 proom(t,{hz:1300,wall:'#d5dde6',wall2:'#b9c4d0',floor:'#8f8a86',floor2:'#6c6460'});
 X.save();X.strokeStyle='rgba(255,255,255,.35)';X.lineWidth=3;for(let y=900;y<1300;y+=60){X.beginPath();X.moveTo(-200,y);X.lineTo(1300,y);X.stroke()}X.restore();
 boiler3(540,640,1.25,{t,err:1});
 rr(80,1180,920,30,8,'#b0b8c2',5);
 sm(400,1860,1.02,Object.assign({t,eyes:'open',brow:'worried',mouth:r>1.2?'o':'flat',look:[.5,-.4],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.5,1),armL:20,bendL:-20},YOU));
 breath3(430,HD(1860,1.02)+40,t,1,1);
 const cp=C((r-.75)/.35);if(cp>0)calPage3(lerp(1250,730,eo(cp)),1090,1.05,{m:'JAN',d:'9',rot:lerp(.6,.08,eo(cp))});
 if(cp>=1&&r<1.4)impact(C((r-1.1)/.3));
 grade('150,175,220',.32);
 if(cp<=0)label3('The boiler 💀',C(r/.2))});
// C: VHS rewind: shot A plays backwards with scanlines, then the month word lands
const R0=T('rw')-.3;
sh(R0,(t,r)=>{const back=Math.max(0,5.5-r*3.2);shotA(t-r*2,back,0,1);vhsRewind3(t,C(r/2.4),'OCTOBER')});
// D: WITH. October afternoon, same sofa in daylight, falling leaves outside; the thought pops, Memo hops on, the 🔧 flies into your phone
const D0=T('rw')+2.2,MP=T('s2')-D0+.1;
sh(D0,(t,r)=>{const tr=eo(C(r/2.6));cam(lerp(420,560,tr),1060,lerp(1.16,1.1,tr),t,.1);
 proom(t,{win:780,frame:[330,520],plant:150,wall:'#f5e2c6',wall2:'#e8c9a2',curtain:'#d9a05a',curtain2:'#b98040'});
 winFX(t,780,{leaves:1});
 rr(110,700,170,16,4,'#8a6a4a',4);for(let k=0;k<5;k++)rr(122+k*26,612,22,88,4,['#c8553d','#3f6fb5','#e0a43a','#5a9a5a','#7a4fa0'][k],4);
 radiator3(780,1262,.95,{t});
 psofa(460,1700,1.05,'#c8553d','#a3402d');
 const s=1.0,y=1790,talk=r>MP+.5;
 sm(440,y,s,Object.assign({t,eyes:'open',brow:talk?'up':'flat',mouth:talk?'smile':'flat',talk:talk?t:null,look:talk?[.4,.3]:[.3,-.6],
  armL:60,bendL:-80,holdL:(x,yy)=>pmug(x+10,yy+20,.9,'#3f6fb5'),armR:talk?140:40,bendR:talk?-130:-30,holdR:(x,yy)=>{if(talk)phoneH(x,yy,.2,1)}},YOU,SIT));
 const hy=HD(y,s),ta=C((r-.2)/.3)*(1-C((r-MP-1.1)/.2));
 thought3(560,hy-230,150,ta,470,hy-110,(x,yy)=>{boiler3(x,yy-30,.28,{t});txt('boiler check?',x,yy+70,36,'#151515',0,'900 ')});
 const mp=C((r-MP)/.5);if(mp>0){memo(720,1520,.6,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(720,1400,mp,10,180)}
 const fl=C((r-MP-1.0)/.7);if(fl>0&&fl<1){X.save();X.font="74px 'Noto Color Emoji'";X.textAlign='center';X.fillText('🔧',lerp(560,520,eo(fl)),lerp(hy-230,hy+150,eo(fl))-Math.sin(fl*Math.PI)*60);X.restore()}
 if(fl>=1)sparkles(520,hy+150,C((r-MP-1.7)/.5),8,120,'#7cf0a0');
 if(mp<=0)label3('You, October 🍂',C(r/.2));else label3('Memopai 😎',C((r-MP)/.2))});
// E: the WhatsApp chat (voice note → transcript → ✅)
const E0=T('s2')+2.0;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#c8553d');g.addColorStop(1,'#e0a43a');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'255,230,180',.35);
 for(let k=0;k<14;k++){X.save();X.translate((k*173)%1080,((k*311)+t*80)%1920);X.rotate(t+k);X.fillStyle='rgba(255,240,200,.35)';X.beginPath();X.ellipse(0,0,22,11,0,0,7);X.fill();X.restore()}
 phoneUI(540,930,1.16,r+.9,{typing:r+.9>1.3&&r+.9<1.7,list:[{a:0,me:1,voice:1,dur:'0:04',pl:C((r+.9)/1),time:'16:12'},{a:.3,me:1,text:'"Saturday at 10, remind me: book the boiler check 🔧"',time:'16:12'},{a:1.7,me:0,text:'✅ Got it! Sat 10:00 → 🔧 Book the boiler check',time:'16:12'}]})});
// F: Saturday 10:00 kitchen: YOU walks in with coffee (tracking), the reminder lands, phone to ear, ✅
const F0=T('s3')-.2,NT=.7;
sh(F0,(t,r)=>{const wk=eo(C(r/1.1));cam(lerp(720,540,wk),1040,lerp(1.04,1.12,C(r/3.2)),t,.1);
 proom(t,{win:300,plant:930,frame:[720,520],wall:'#fbe7c8',wall2:'#f0cfa0',curtain:'#5a9a5a',curtain2:'#3f7a44'});
 winFX(t,300,{leaves:1});
 rr(600,1000,420,24,6,'#8a6a4a',5);for(let k=0;k<3;k++)pmug(660+k*90,1000,.7,['#c8553d','#ffffff','#3f6fb5'][k]);
 const call=C((r-1.6)/.4),s=1.04,y=1840;
 sm(lerp(980,540,wk),y,s,Object.assign({t,walk:r<1.1?t:null,eyes:r>NT&&r<1.6?'wide':'happy',brow:'up',mouth:r>1.9?'open':'o',talk:r>1.9?t:null,look:r<1.6?[.1,.5]:[.6,-.2],
  armL:60,bendL:-80,holdL:(x,yy)=>pmug(x+10,yy+20,.9,'#ffd23f'),armR:lerp(100,150,call),bendR:lerp(-110,-150,call),holdR:(x,yy)=>phoneH(x,yy,lerp(.1,.5,call),r>NT)},YOU));
 if(r>NT)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.6)/.25)),'Memopai','🔧 Book the boiler check · Sat 10:00');
 if(r>2.4)label3('Booked ✅',C((r-2.4)/.2))});
// G: WITH, payoff: same frosty night, same framing as A but warm — radiator glowing, cat on it, HIM in a T-shirt, duvet folded on the sofa arm
sh(T('p1')-.45,(t,r)=>{const pn=eo(C((r-.2)/2.6));cam(lerp(700,560,pn),lerp(1000,1060,pn),lerp(1.2,1.1,pn),t,.1);
 livingRoom(t,1);
 psofa(380,1700,1.05,'#c8553d','#a3402d');
 X.save();X.translate(170,1490);rr(-70,-60,150,70,24,'#9cc3e6',6);X.strokeStyle='rgba(40,70,110,.3)';X.lineWidth=4;X.beginPath();X.moveTo(-60,-28);X.lineTo(70,-28);X.stroke();X.restore();
 sm(380,1790,1.0,Object.assign({t,tee:'#3f9a6a',eyes:r>1.2?'happy':'open',brow:'up',mouth:'grin',look:[.5,-.1],armR:lerp(30,150,C((r-.9)/.4)),bendR:lerp(-20,-120,C((r-.9)/.4)),holdR:(x,y)=>{if(r>1.2){X.save();X.translate(x,y-30);circ(0,0,26,'#151515',0);rr(-8,-62,18,44,9,'#151515',0);X.restore()}},armL:20,noshadow:1},HIM,SIT));
 sm(700,1840,1.0,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'up',mouth:'smile',blush:1,look:[-.6,.1],armL:60,bendL:-80,holdL:(x,yy)=>pmug(x+10,yy+20,.9,'#3f6fb5'),armR:20,bendR:-20},YOU));
 grade('255,215,170',.12);
 label3('With Memopai 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.6,1));
