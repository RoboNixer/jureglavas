// 2026-11-23 14:00 CUSTOMERS — "Monday 08:40. Bus in one minute. Three things in your head." (demo: 3 reminders in 10 seconds)
// craft ladder: street3() city street, busstop3() shelter + LED board, bus3() side-view city bus with opening doors, drybag3() (look3.js)
const YOU={hair:'curl'};
const MOM={hair:'bun',hairc:'#b9b9c4',lashes:1};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
const ICONS=['👔','🗑️','💊'];
// timer pill in screen space (the one overlay in D/E)
function timer(sec,a=1,done=0){if(a<=0)return;X.save();X.setTransform(1,0,0,1,0,0);X.globalAlpha=C(a);const w=330;rr(540-w/2,300,w,86,43,done?'#25d366':'#151515',0);
 X.font="800 50px Inter,'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillStyle='#fff';X.fillText('⏱ 0:0'+Math.min(9,Math.floor(sec))+(done?' ✅':''),540,344);X.restore()}
const SX=400,SY=1790,SS=1.15;
function stop(t,o={}){street3(t,{dusk:o.dusk});busstop3(560,1560,.95,{eta:o.eta})}
// A: frame 1 = 08:40, bus stop, coffee in hand, three jobs orbiting your head, board says 1 min
function shotA(t,r,lab,cv){if(cv)cam(540,1080,1.04,t,0);else cam(540,1090,lerp(1.03,1.09,C(r/4.3)),t,.1);
 stop(t,{eta:'🚌 1 min'});
 sm(SX,SY,SS,Object.assign({t:cv?1.2:t,eyes:'wide',brow:'worried',mouth:'o',look:[.2,-.7],sweat:1,tilt:-4,armL:110,bendL:-110,holdL:(hx,hy)=>pmug(hx,hy+10,.9,'#ffd23f'),armR:15,bendR:10},YOU));
 headLoop(SX,HD(SY,SS)-150,cv?.9:t,ICONS,cv?1:C((r-.5)/.4),245);
 if(lab)label3('You at 08:40 😵‍💫',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close-up: the three jobs fade one by one as she names them
sh(T('s1')-.06,(t,r)=>{cam(SX+40,1010,lerp(1.28,1.36,C(r/3.4)),t,.1);
 stop(t,{eta:'🚌 1 min'});X.fillStyle='rgba(30,30,70,.12)';X.fillRect(-2000,-2000,5000,5000);
 sm(SX,SY,SS,Object.assign({t,eyes:'open',brow:'sad',mouth:'wavy',look:[-.3,-.6],sweat:1,tilt:6,armL:110,bendL:-110,holdL:(hx,hy)=>pmug(hx,hy+10,.9,'#ffd23f'),armR:15,bendR:10},YOU));
 const cy=HD(SY,SS)-150;for(let i=0;i<3;i++){const ang=t*1.3+i/3*Math.PI*2,f=C((r-.5-i*.75)/.6);emo(SX+Math.cos(ang)*(245+f*120),cy+Math.sin(ang)*103-f*80,ICONS[i],.85*(1-f*.3),1-f)}
 label3('Your brain 🫠',C(r/.2))});
// C: Memopai hops onto the bench, phone up, the jobs come back and fly into the phone
const C0=T('s1')+3.3;
sh(C0,(t,r)=>{cam(540,1080,lerp(1.03,1.08,C(r/2.6)),t,.1);
 stop(t,{eta:'🚌 1 min'});
 const hy=HD(SY,SS);
 sm(SX,SY,SS,Object.assign({t,eyes:'open',brow:'up',mouth:'smirk',look:[.5,.35],armL:110,bendL:-110,holdL:(hx,hy)=>pmug(hx,hy+10,.9,'#ffd23f'),armR:120,bendR:-115,holdR:(x,yy)=>phoneH(x+10,yy,.1,1)},YOU));
 const mp=C(r/.5);memo(790,1250,.72,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(790,980,mp,8,160);
 const px0=SX+140,py0=hy+300;
 for(let i=0;i<3;i++){const ft=.6+i*.45,fl=C((r-ft)/.7);const ang=t*1.3+i/3*Math.PI*2,sx=SX+Math.cos(ang)*245,sy=hy-150+Math.sin(ang)*103;
  if(r<ft-.3)continue;const ap=C((r-ft+.3)/.3);if(fl<1)emo(lerp(sx,px0,eo(fl)),lerp(sy,py0,eo(fl))-Math.sin(fl*Math.PI)*60,ICONS[i],.85*(1-fl*.5),ap);else sparkles(px0,py0,C((r-ft-.7)/.5),6,90,'#7cf0a0')}
 label3('Memopai 😎',C(r/.2))});
// D: the chat: three voice notes, three confirmations, timer running
const D0=T('s2')-.05,TEND=T('t1')-.1,secAt=tt=>C((tt-D0)/(TEND-D0))*9.0;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const v2=T('s3')-D0-.15,v3=T('s4')-D0-.15;
 let L=[
  {a:0,me:1,voice:1,pl:C(r/.6),dur:'0:03',time:'08:40'},
  {a:.75,me:0,text:'✅ Today 18:00 · 👔 Pick up the dry cleaning',time:'08:40'},
  {a:v2,me:1,voice:1,pl:C((r-v2)/.6),dur:'0:03',time:'08:40'},
  {a:v2+.75,me:0,text:'✅ Every Monday 07:00 → your son · 🗑️ Bins out!',time:'08:40'},
  {a:v3,me:1,voice:1,pl:C((r-v3)/.6),dur:'0:03',time:'08:40'},
  {a:v3+.75,me:0,text:'✅ Today 12:00 → Mom · 💊 Take your pills',time:'08:40'},
  {a:v3+1.4,date:'📩 Mom & your son tap Accept once'}];
 const drop=r>v3+1.4?3:r>v3?2:0;L=L.slice(drop);
 phoneUI(540,1080,.98,r,{list:L});
 timer(secAt(D0+r),1)});
// E: timer stops at 0:09, the bus pulls in, doors open, you step on
sh(T('t1')-.06,(t,r)=>{cam(540,1080,lerp(1.03,1.07,C(r/1.8)),t,.1);
 street3(t);const bx=lerp(1900,560,eo(C(r/1.0)));bus3(bx,1300,.62,{door:C((r-1.0)/.35)});busstop3(560,1560,.95,{eta:'🚌 now'});
 const st=C((r-1.1)/.6);
 sm(SX+st*20,SY,SS,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.4,-.1],walk:st>0&&st<1?t:null,armL:110,bendL:-110,holdL:(hx,hy)=>pmug(hx,hy+10,.9,'#ffd23f'),armR:15,bendR:10},YOU));
 timer(9,1,1)});
// F: noon, Mom's kitchen: her phone buzzes, notification, she smiles and takes her pills
function pillbox(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-110,-40,220,80,14,'#7cc6f0',6);for(let k=0;k<4;k++)rr(-100+k*52,-34,44,40,8,'#fff',3);circ(-78,-14,8,'#ffd23f',0);X.restore()}
sh(T('m1')-.06,(t,r)=>{cam(540,1070,lerp(1.03,1.07,C(r/3)),t,.1);
 proom(t,{win:300,plant:860,frame:[640,520],wall:'#f9e2c8',wall2:'#efc9a1',curtain:'#8f6bb0',curtain2:'#72529a'});glow(300,520,700,'255,240,190',.5);
 rr(80,1330,920,40,12,'#c8a07a',6);rr(110,1370,860,420,10,'#e8d2b4',6);pillbox(760,1290,.9);pmug(240,1270,.85,'#e86a5a');
 const buzz=r<1.6&&Math.sin(t*26)>0;
 sm(540,1790,1.12,Object.assign({t,eyes:r>1.5?'happy':'open',brow:'up',mouth:r>1.5?'smile':'o',blush:r>1.6,look:r>1.5?[.6,.2]:[-.5,-.2],armL:150,bendL:-120,holdL:(hx,hy)=>phoneH(hx,hy,-.1,buzz||r<1.6),armR:r>1.6?60:20,bendR:r>1.6?-40:10},MOM));
 notif(338,C(r/.25)*(1-C((r-1.7)/.25)),'Memopai','💊 Take your pills (from your son)');
 if(r>1.9)label3('Mom, 12:00 😊',C((r-1.9)/.2))});
// G: same bus stop at sunset, 18:00: the ping, dry-cleaning bag over your shoulder, head clear
sh(T('p1')-.08,(t,r)=>{cam(540,1085,lerp(1.03,1.07,C(r/4)),t,.12);
 stop(t,{dusk:1,eta:'🚌 4 min'});
 const w=C(r/1.4);
 sm(SX-lerp(140,0,eo(w)),SY,SS,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'up',mouth:'smile',blush:r>2,look:[.5,.1],walk:w<1?t:null,armR:150,bendR:-160,holdR:(hx,hy)=>drybag3(hx+10,hy+40,.75,{rot:.05}),armL:20,bendL:10},YOU));
 if(r>1.8)sparkles(SX,HD(SY,SS)-140,C((r-1.8)/1.4),8,150);
 notif(338,C(r/.25)*(1-C((r-1.5)/.25)),'Memopai','👔 Pick up the dry cleaning');
 if(r>1.75)label3('You, sorted 😌',C((r-1.75)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.0,0,1));
