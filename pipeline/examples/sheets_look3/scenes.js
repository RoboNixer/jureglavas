// 2026-11-27 20:00 STORY 2 — "'Son... when did you last change these sheets?'"
// craft ladder (look3.js): sm hair 'mop' (shaggy ginger mop + bed-head tuft), studio3() sunny studio-flat set, bed3() messy/fresh bed (+o.under for a sleeper),
//   sheetFling3() billowing fresh sheet, fly3(), poster3()
const YOU={hair:'mop',hairc:'#d8662a',tee:'#2f9e8f'};
const DAD={jumper:'#9a6b3c'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function steam3(x,y,t){X.save();X.strokeStyle='rgba(255,255,255,.75)';X.lineWidth=6;X.lineCap='round';for(let k=0;k<3;k++){const ph=(t*.7+k/3)%1;X.globalAlpha=Math.sin(ph*Math.PI)*.8;X.beginPath();X.moveTo(x-16+k*16,y-ph*90);X.quadraticCurveTo(x-16+k*16+Math.sin(t*3+k)*14,y-30-ph*90,x-16+k*16,y-60-ph*90);X.stroke()}X.restore()}
const SBX=470,SBY=1780,SBS=.78;
// A: Dad lifts the duvet corner with two fingers. Camera starts tight on the pinch, pulls back + pans to YOU behind the bed
function shotA(t,r,cv){
 const pull=cv?1:eo(C((r-.9)/1.7));
 if(cv)cam(540,1030,.97,t,0);else cam(lerp(740,540,pull),lerp(1380,1150,pull),lerp(1.45,1.04,pull)+C(r/6)*.04,t,.1);
 studio3(t,{win:800,plant:0});
 const yt=r>2.6||cv;
 sm(255,1800,.98,Object.assign({t,eyes:'open',brow:'worried',mouth:yt?'wavy':'flat',sweat:yt,blush:yt,look:[.7,0],armR:155,bendR:-120,armL:20,bendL:-10},YOU));
 bed3(SBX,SBY,SBS,{t,sock:0});
 const talk=!cv&&r<2.4;
 dad(800,1840,1.0,Object.assign({t,eyes:'open',lid:.15,brow:'up',mouth:talk?'open':'wavy',talk:talk?t:null,look:[-.8,.4],
  armL:lerp(40,60,C(r/.8)),bendL:-20,holdL:(x,y)=>{const c1=[SBX+380*SBS,SBY-332*SBS],c2=[SBX+472*SBS,SBY-150*SBS];X.save();X.fillStyle='#a89a80';X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.moveTo(c1[0],c1[1]);X.lineTo(x-6,y+4);X.lineTo(c2[0],c2[1]);X.closePath();X.fill();X.stroke();X.restore()},
  armR:25,bendR:-60},DAD));
 if(!cv&&r>.25&&r<2.5)label3('Your dad 🤨',C((r-.25)/.2)*(1-C((r-2.3)/.2)));
 if(!cv&&r>2.6)label3('You 😅',C((r-2.6)/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: macro tracking pan along the duvet: drool pillow → crumbs → the mystery sock pops out, a fly loops, stink lines
const B0=T('r1')-.3;
sh(B0,(t,r)=>{const tr=eo(C(r/2.6));cam(lerp(250,590,tr),lerp(1480,1560,tr),lerp(1.75,1.62,tr),t,.08);
 studio3(t,{win:800,plant:0});
 const sp=C((r-1.9)/.35);
 bed3(SBX,SBY,SBS,{t,sock:sp});
 fly3(SBX-60,SBY-420,t,1);
 if(sp>=1)stink(SBX+120,SBY-150,t,C((r-2.2)/.4),.45);
 if(sp>0&&sp<1)sparkles(SBX+120,SBY-170,sp,8,90,'#ffffff');
 label3('Your sheets · week ?? 🫠',C(r/.2))});
// C: YOU on the move, tracking pan: the thought "sheets" leaves the head and flies into the phone, Memo hops in
const C0=T('s2')-.25,MP=1.0,C1=T('s2')+2.6;
sh(C0,(t,r)=>{const tr=eo(C(r/2.2));cam(lerp(380,560,tr),1120,lerp(1.12,1.08,C(r/3)),t,.1);
 studio3(t,{win:820});
 bed3(980,1800,.7,{t,sock:1});
 const s=1.02,y=1810,wk=C(r/.9);
 sm(lerp(300,430,wk),y,s,Object.assign({t,walk:r<.9?t:null,eyes:'open',brow:'up',mouth:'smile',talk:r>.6?t:null,look:[.5,.3],armR:140,bendR:-130,holdR:(x,yy)=>phoneH(x,yy,.2,r>.6)},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(760,1520,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(760,1400,mp,10,180)}
 const fl=C((r-.5)/.9),hy=HD(y,s);if(fl>0&&fl<1){X.save();X.font="80px 'Noto Color Emoji'";X.textAlign='center';X.fillText('🛏️',lerp(430,560,eo(fl)),lerp(hy-260,hy+150,eo(fl))-Math.sin(fl*Math.PI)*80);X.restore()}
 if(fl>=1)sparkles(560,hy+130,C((r-1.4)/.5),8,120,'#7cf0a0');
 if(mp<=0)label3('You, Wednesday 💬',C(r/.2));else label3('Memopai 😎',C((r-MP)/.2))});
// D: the WhatsApp chat (voice note, transcript, ✅ recurring)
sh(C1,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#1f6f66');g.addColorStop(1,'#2f9e8f');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'200,255,230',.3);
 phoneUI(540,930,1.16,r+.9,{typing:r+.9>1.2&&r+.9<1.6,list:[{a:0,me:1,voice:1,dur:'0:04',pl:C((r+.9)/1),time:'21:12'},{a:.3,me:1,text:'"Every Sunday at 10, remind me: change the sheets 🛏️"',time:'21:12'},{a:1.6,me:0,text:'✅ Got it! Every Sunday 10:00 🔁 Change the sheets',time:'21:12'}]})});
// E: Sunday 10:00, crane down onto YOU asleep in the old sheets; phone on the duvet buzzes; 'snooze'; wall clock jumps to 10:10; buzz again, eyes open
const E0=T('s3')-.25,N1=1.55,SN=2.45,N2=3.35;
sh(E0,(t,r)=>{const cr=eo(C(r/2.2));cam(lerp(560,500,cr),lerp(1040,1290,cr),lerp(1.0,1.24,cr),t,.08);
 studio3(t,{win:860,plant:0,sunday:1});
 const mm=r<SN+.3?0:Math.round(lerp(0,10,C((r-SN-.3)/.5)));wclock(470,1010,.62,10,mm);
 const awake=r>N2+.2;
 bed3(640,1760,.85,{t,sock:1,under:()=>{X.save();X.translate(200,-300);X.rotate(-Math.PI/2);sm(0,0,.7,Object.assign({t,eyes:awake?'open':'closed',brow:awake?'angry':'flat',mouth:awake?'flat':'o',noshadow:1,armL:20,armR:20},YOU));X.restore()}});
 const on=(r>N1&&r<SN)||r>N2,bz=on?Math.sin(r*60)*4:0;X.save();X.translate(640+bz,1440);X.rotate(-1.2);rr(-34,-58,68,116,12,'#1b1b1f',5);rr(-26,-48,52,96,7,on?'#25d366':'#3a4a66',0);X.restore();if(on)glow(640,1440,120,'130,240,160',.45);
 if(r<N1&&r>.2)label3('You, Sunday 10:00 😴',C((r-.2)/.2)*(1-C((r-N1+.2)/.2)));
 if(r>N1&&r<SN)notif(338,C((r-N1)/.25)*(1-C((r-SN+.2)/.2)),'Memopai','🛏️ Change the sheets · Sun 10:00');
 if(r>SN&&r<N2){const p=C((r-SN)/.2)*(1-C((r-N2+.15)/.15));X.save();X.setTransform(1,0,0,1,0,0);X.globalAlpha=p;rr(330,560,420,110,55,'#d9fdd3',6);txt('snooze 😴',540,635,58,'#151515',0,'900 ');X.restore()}
 if(r>N2)notif(338,C((r-N2)/.25),'Memopai','⏰ Back again: change the sheets 🛏️')});
// F: payoff, A's framing: YOU flings a fresh sheet that floats down; Dad sits on the bed with his tea
function shotF(t,r,cv){const pi=cv?0:eo(C((r-1.6)/2.2));cam(lerp(540,525,pi),lerp(1150,1170,pi),lerp(1.04,1.12,pi),t,.1);
 studio3(t,{win:800,plant:0,sunday:1});
 const fl=cv?1:C(r/1.3);
 sm(255,1800,.98,Object.assign({t,eyes:fl<1?'open':'happy',brow:'up',mouth:fl<1?'open':'grin',look:[.6,-.4],armR:lerp(150,40,fl),bendR:-20,armL:lerp(150,40,fl),bendL:20},YOU));
 bed3(SBX,SBY,SBS,{t,fresh:fl>=.85});
 sheetFling3(SBX,SBY-300*SBS,SBS,fl,t);
 if(fl>=1&&!cv)sparkles(SBX+60,SBY-330*SBS,C((r-1.3)/.6),10,300,'#ffffff');
 const sit=cv?1:C((r-1.4)/.5);
 if(sit>0){X.save();X.globalAlpha=sit;dad(lerp(860,660,eo(sit)),1800,.95,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:1,look:[-.4,0],armR:70,bendR:-110,holdR:(x,y)=>{pmug(x,y+20,.9,'#e8584a');steam3(x,y-50,t)},armL:40,bendL:-40},DAD,sit>=1?SIT:{}));X.restore()}
 if(!cv&&r>1.9)label3('You, sorted 😌',C((r-1.9)/.2))}
sh(T('p1')-.45,(t,r)=>shotF(t,r));
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>{shotA(t,3.4,1);});
