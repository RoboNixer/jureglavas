// 2026-11-26 14:00 CUSTOMERS — "'Babe... why does the water taste like a pond?' (The filter says June.)"
// craft ladder (look3.js): jug3() filter jug, cartridge3() slimy cartridge with marker label, fbox3() filter box, wglass3() murky/clear glass
const YOU={hair:'curl'};
const HIM={hair:'spike',hairc:'#3b2a1e',jumper:'#3f7fbf'};
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function kitchen(t,o={}){proom(t,{win:860,plant:0,lamp:0,frame:null,wall:o.warm?'#f6e3c4':'#e9eef0',wall2:o.warm?'#ead0a8':'#d5dde2'});
 rr(60,1180,960,70,12,'#d9dde0',7);rr(80,1250,920,420,10,o.warm?'#c98f5a':'#9fb0bd',7);for(const cx of[310,540,770])rr(cx-100,1290,200,330,10,null,6);
 if(o.warm)glow(540,850,820,'255,210,140',o.warm);else glow(760,650,600,'235,245,255',.35)}
// A: 08:10 kitchen: he grimaces at a murky glass, you hold the jug; at h1 you lift the lid
function shotA(t,r,cv){const L=cv?0:C((r-2.9)/.4);
 cam(cv?540:lerp(560,540,C(r/3)),cv?1040:1060,cv?1.05:lerp(1.06,1.12,C(r/3.8)),t,.1);
 kitchen(t);wclock(540,520,.55,8,10);
 const talk=!cv&&r<2.5,yuck=cv||r>.9;
 sm(800,1800,1.05,Object.assign({t,eyes:yuck?'closed':'open',brow:yuck?'angry':'flat',mouth:yuck?'tongue':'open',talk:talk&&!yuck?t:null,look:[-.6,0],tilt:yuck?-.08:0,armL:-20,bendL:20,armR:75,bendR:-100,holdR:(x,y)=>wglass3(x+10,y+80,1.2,{murk:1,full:.6})},HIM));
 sm(310,1820,1.12,Object.assign({t,eyes:L>.5?'wide':'open',brow:L>.5?'up':'worried',mouth:L>.5?'o':'wavy',sweat:L>.5,look:L>.5?[.3,.6]:[.7,0],armR:55,bendR:-40,holdR:(x,y)=>jug3(x+80,y+150,.64,{dirty:1,murk:.8,lid:L,t}),armL:20,bendL:10},YOU));
 if(!cv)label3('You, 08:10 😬',C((r-.05)/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: close-up of the slimy cartridge marked JUNE, a NOVEMBER calendar behind it
const B0=T('h1')+1.15;
sh(B0,(t,r)=>{cam(540,960,lerp(1.0,1.08,C(r/2.2)),t,.1);kitchen(t);
 X.save();X.translate(770,640);X.rotate(.05);rr(-120,-150,240,300,12,'#fff',7);rr(-120,-150,240,80,12,'#e2508a',0);rr(-120,-150,240,300,12,null,7);txt('NOV',0,-110,52,'#fff',0,'900 ');txt('26',0,20,110,'#151515',0,'900 ');X.restore();
 glow(470,960,420,'160,220,120',.25);
 const h=eo(C(r/.4));X.save();X.translate(0,(1-h)*260);
 for(const dx of[-1,1])ell(470+dx*150,1250,52,62,'#151515',0);
 cartridge3(470,1040,2.1,{dirty:1,label:'JUNE',t,stink:C((r-.3)/.4)});X.restore();
 label3('The filter 🤢',C((r-.05)/.2))});
// C: you both shrug: 'next time 🙃'; Memopai hops onto the worktop, you voice-note it, the 💧 card flies into your phone
const C0=T('r1')-.1,MP=T('s2')-.75-C0;
sh(C0,(t,r)=>{cam(540,1060,lerp(1.05,1.1,C(r/4)),t,.1);kitchen(t);wclock(540,520,.55,8,12);
 const talk=r>MP+.7;
 jug3(160,1180,.42,{dirty:1,murk:.8,lid:0,t});
 sm(780,1800,1.0,Object.assign({t,eyes:'open',brow:talk?'up':'worried',mouth:talk?'smile':'wavy',look:talk?[-.5,.2]:[-.6,0],armL:20,bendL:10,armR:-20,bendR:20,tilt:talk?0:.08},HIM));
 sm(310,1820,1.12,Object.assign({t,eyes:'open',lid:talk?0:.3,brow:talk?'up':'flat',mouth:talk?'smile':'smirk',talk:talk?t:null,look:talk?[.4,.4]:[.6,0],armR:talk?140:20,bendR:talk?-130:10,holdR:talk?(x,y)=>phoneH(x,y,.2,1):null,armL:-20,bendL:20,tilt:talk?0:-.08},YOU));
 const ta=C((r-.3)/.3)*(1-C((r-MP+.1)/.2));
 thought3(560,700,200,ta,560,860,(x,y)=>txt('next time 🙃',x,y,58,'#151515',0,'900 '));
 const mp=C((r-MP)/.5);if(mp>0){memo(560,1185,.6,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(560,1060,mp,10,180)}
 const fl=C((r-MP-1.3)/.8);if(fl>0&&fl<1){X.save();X.font="80px 'Noto Color Emoji'";X.textAlign='center';X.fillText('💧',lerp(560,470,eo(fl)),lerp(980,760,eo(fl))-Math.sin(fl*Math.PI)*80);X.restore()}
 if(fl>=1)sparkles(470,760,C((r-MP-2.1)/.5),8,120,'#7cf0a0');
 if(mp>0)label3('Memopai 😎',C((r-MP)/.2))});
// D: the WhatsApp chat
const D0=T('s2')+1.7;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#1d2350');g.addColorStop(1,'#2b3a6e');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>1.2&&r<1.8,list:[{a:0,me:1,voice:1,dur:'0:05',pl:C(r/1.1),time:'08:13'},{a:.3,me:1,text:'"Every month, remind me + Babe: buy a new water filter"',time:'08:13'},{a:1.8,me:0,text:'✅ Got it! Every 1st · 09:00 · 💧 New water filter · You + Babe 💛',time:'08:13'},{a:3.2,me:0,text:'Babe 💛 tapped Accept ✓',time:'08:14'}]})});
// E: Dec 1st, 09:00, supermarket: his phone pings by the filter shelf, he grabs a box
const E0=T('s4')-.1,NT=T('s4')+1.1-E0;
sh(E0,(t,r)=>{cam(560,1040,lerp(1.03,1.08,C(r/3.2)),t,.1);shopIn(t);
 for(let k=0;k<3;k++)fbox3(560+k*150,1010,.55);
 const grab=C((r-NT-1.0)/.5);
 sm(380,1800,1.08,Object.assign({t,walk:r<NT?t:null,eyes:r>NT?'wide':'open',brow:'up',mouth:r>NT?(grab>0?'grin':'o'):'smile',look:r>NT&&grab<=0?[.2,.5]:[.7,-.1],
  armR:r<NT?20:(grab>0?lerp(100,60,grab):100),bendR:r<NT?10:-110,holdR:(x,y)=>{if(r>=NT&&grab<=0)phoneH(x,y,.1,1);else if(grab>0)fbox3(x+30,y+90,.5)},armL:20,bendL:10},HIM));
 if(r<NT-.05)label3('Him, Dec 1st 🛒',C(r/.2));else notif(338,C((r-NT)/.3)*(1-C((r-NT-2.2)/.25)),'Memopai','⏰ 09:00 · 💧 Buy a new water filter')});
// F: payoff, same framing as A, warm: he walks in with the box, you click the new filter in, clear water
sh(T('m2')-.25,(t,r)=>{cam(540,1080,lerp(1.08,1.12,C(r/4)),t,.1);kitchen(t,{warm:.45});wclock(540,520,.55,9,40);
 const w=eo(C(r/.8));
 sm(lerp(980,745,w),1800,1.05,Object.assign({t,walk:w<1?t:null,eyes:r>1.3?'happy':'open',brow:'up',mouth:'grin',talk:r<1.3?t:null,blush:1,look:[-.6,.2],armL:-20,bendL:20,armR:80,bendR:-105,holdR:(x,y)=>fbox3(x-15,y+110,.55)},HIM));
 sm(310,1820,1.12,Object.assign({t,eyes:r>1.6?'happy':'open',lid:.1,brow:'up',mouth:'smile',blush:r>1.6,look:[.6,.2],armR:55,bendR:-40,holdR:(x,y)=>jug3(x+80,y+150,.64,{dirty:0,murk:0,water:.75,lid:0,t}),armL:20,bendL:10},YOU));
 if(r>1.4)sparkles(520,1330,C((r-1.4)/.6),10,160,'#bfe6ff');
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.6,1));
