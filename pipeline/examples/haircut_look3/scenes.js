// 2026-11-25 14:00 CUSTOMERS (Wed 'Memo explains') — "You picked up your phone to book a haircut. 40 minutes ago."
// craft ladder (look3-style, local): mopHair3() overgrown fringe over the eyes, reelStream3() short-video cards floating out of a phone, fadeBadge() emoji thought badge
const YOU={hair:0},MOP={hair:0};
// fresh short haircut: neat cap with a side part
function neatHair3(hx,hy,s){const R=125*s;X.save();X.translate(hx,hy);X.fillStyle='#5a3b26';X.strokeStyle='#151515';X.lineWidth=7*s;X.lineJoin='round';X.beginPath();X.moveTo(-R*1.02,-R*.25);X.quadraticCurveTo(-R*1.05,-R*1.12,0,-R*1.12);X.quadraticCurveTo(R*1.05,-R*1.12,R*1.02,-R*.25);X.quadraticCurveTo(R*.7,-R*.62,R*.1,-R*.6);X.quadraticCurveTo(-R*.2,-R*.75,-R*.4,-R*.55);X.quadraticCurveTo(-R*.8,-R*.5,-R*1.02,-R*.25);X.closePath();X.fill();X.stroke();X.strokeStyle='rgba(255,220,180,.45)';X.lineWidth=6*s;X.lineCap='round';X.beginPath();X.moveTo(-R*.35,-R*.98);X.quadraticCurveTo(R*.2,-R*1.0,R*.6,-R*.8);X.stroke();X.restore()}
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,on===2?'120,170,255':'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?(on===2?'#5b8cff':col):'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
// overgrown messy hair: hx,hy = head centre, s = character scale, flop 0..1 = fringe swings further down over the eyes
function mopHair3(hx,hy,s,t,flop=0){const R=125*s;X.save();X.translate(hx,hy);X.fillStyle='#5a3b26';X.strokeStyle='#151515';X.lineWidth=7*s;X.lineJoin='round';
 X.beginPath();X.moveTo(-R*1.08,R*.05);
 for(let k=0;k<=10;k++){const a=Math.PI*(1+k/10),rr0=R*(1.14+.08*Math.sin(k*2.3));X.lineTo(Math.cos(a)*rr0,Math.sin(a)*rr0*1.02-R*.06)}
 X.lineTo(R*1.08,R*.05);
 // fringe: wavy strands hanging over the eyes
 const fl=R*(.12+.2*flop)+Math.sin(t*2)*2*s;
 for(let k=0;k<=8;k++){const xx=R*1.0-k*R*.25,yy=(k%2?fl+R*.08:fl-R*.1)+Math.sin(t*3+k)*3*s;X.quadraticCurveTo(xx+R*.06,yy+R*.12,xx-R*.12,yy)}
 X.closePath();X.fill();X.stroke();
 X.strokeStyle='rgba(255,220,180,.35)';X.lineWidth=6*s;X.lineCap='round';for(let k=0;k<4;k++){X.beginPath();X.moveTo(-R*.6+k*R*.35,-R*.95);X.quadraticCurveTo(-R*.5+k*R*.35,-R*.5,-R*.62+k*R*.35,-R*.1);X.stroke()}
 X.restore()}
// short-video cards rising out of a phone (dogs!), a = alpha
function reelStream3(x,y,t,a=1,n=5){if(a<=0)return;const em=['🐶','🐕','🐾','🐶','😂','🐩'];X.save();for(let k=0;k<n;k++){const q=(t*.45+k/n)%1;const xx=x+Math.sin(q*5+k*2)*90*(q),yy=y-q*560;X.globalAlpha=C(a)*Math.sin(q*Math.PI);X.save();X.translate(xx,yy);X.rotate(Math.sin(k*1.7+q)*.25);
 X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=12;rr(-48,-80,96,160,14,'#141418',5);X.shadowColor='transparent';rr(-40,-70,80,120,8,['#ffcf6b','#8fd3ff','#ffb3c7','#b9f1a6','#d7c2ff'][k%5],0);
 X.font="54px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(em[k%em.length],0,-10);circ(-22,62,6,'#ff4d6d',0);X.restore()}X.restore()}
function living(t,o={}){proom(t,{win:780,night:o.warm?0:1,frame:[230,520],lamp:1,plant:1,wall:o.warm?'#e9d3bd':'#7d86b8',wall2:o.warm?'#d4b394':'#646c9e',curtain:'#5a6fc0',curtain2:'#41539e'});
 if(o.clock)wclock(780,560,.62,o.clock[0],o.clock[1]);
 if(o.blue){X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(120,140,220,.35)';X.fillRect(-3000,-3000,8000,8000);X.restore()}
 if(o.warm){glow(300,520,800,'255,214,150',.45)}
 psofa(520,1660,1.15,'#5a7fb5','#4a6a9a')}
const SX=450,SY=1960,SS=1.25,SH=HD(SY,SS);
// A: 22:30, sofa, hair over the eyes, you lift the phone; ✂️ thought pops
function shotA(t,r,lab){cam(540,1060,lerp(1.02,1.07,C(r/3.4)),t,.1);living(t,{clock:[10,30]});
 const blow=Math.sin(t*1.3);
 sm(SX,SY,SS,Object.assign({t,eyes:'open',lid:.15,brow:'worried',mouth:r>.6?'wavy':'frown',look:[.3,-.6],armR:150,bendR:-160,holdR:(x,y)=>phoneH(x,y,.3,r>1.6?1:0),armL:150,bendL:-40},MOP));
 mopHair3(SX+4,SH,SS,t,.4+blow*.1);psofa(540,1900,1.3,'#7a6fb5','#5f559a');
 emo(SX+250,SH-250,'✂️',eo(C((r-.9)/.3))*.95,1);
 if(lab)label3('You, 22:30 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: 23:10, face lit blue by the phone, dog videos floating up, the ✂️ badge shrinks and poofs at "Gone"
const B0=T('r1')-.1,GONE=T('r1')+4.7-B0;
function shotB(t,r,lab){cam(520,1000,lerp(1.14,1.22,C(r/5)),t,.12);living(t,{clock:[11,10],blue:1});
 sm(SX,SY,SS,Object.assign({t,eyes:'open',lid:.5,brow:'flat',mouth:'o',look:[.5,.4],armR:150,bendR:-165,holdR:(x,y)=>{phoneH(x,y,.25,2);reelStream3(x+20,y-80,t,lab?C((r-.3)/.4):1)},armL:40,bendL:-90},MOP));
 mopHair3(SX+4,SH,SS,t,.4);psofa(540,1900,1.3,'#7a6fb5','#5f559a');
 glow(SX+60,SH+40,260,'120,160,255',.35);
 const g=C((r-GONE)/.35);
 if(g<1)emo(SX+250,SH-250,'✂️',.95*(1-g*.8),lab?1-g:1);
 if(g>0&&g<1){emo(SX+250,SH-250,'💨',.8,1-g);sparkles(SX+250,SH-250,g,8,150)}
 if(lab)label3('You, 23:10 🫠',C(r/.2))}
sh(B0,(t,r)=>shotB(t,r,1));
// C: phone down, the fringe flops back into your eyes, Memo hops onto the sofa arm and talks to you
const C0=T('m1')-.9;
sh(C0,(t,r)=>{cam(560,1080,lerp(1.03,1.08,C(r/5)),t,.1);living(t,{clock:[11,10]});
 const turn=r>1.4;
 sm(SX-40,SY,SS,Object.assign({t,eyes:turn?'wide':'open',lid:turn?0:.3,brow:turn?'up':'worried',mouth:turn?'o':'frown',look:turn?[.8,0]:[0,-.7],armR:40,bendR:-80,holdR:(x,y)=>phoneH(x,y,1.2,0),armL:30,bendL:-10},MOP));
 mopHair3(SX-36,SH,SS,t,C(r/.6));psofa(540,1900,1.3,'#7a6fb5','#5f559a');
 const mp=C((r-.3)/.6);if(mp>0){memo(770,1600,.8,{t,wave:mp>=1&&r<3.2,hop:mp,glow:1});if(mp<1)sparkles(770,1300,mp,8,160)}
 if(r>.9&&r<1.4)emo(SX+170,SH-260,'✂️',.7,1);
 label3('Memopai 👋',C((r-.5)/.2))});
// D: you talk into the phone, the ✂️ flies out of your head into it
const D0=T('s1')-.15;
sh(D0,(t,r)=>{cam(540,1060,lerp(1.04,1.09,C(r/2.5)),t,.1);living(t,{clock:[11,11]});
 sm(SX-40,SY,SS,Object.assign({t,eyes:'open',lid:.2,brow:'smug',mouth:'open',talk:t,look:[.4,.3],armR:150,bendR:-165,holdR:(x,y)=>phoneH(x+10,y-10,.25,1),armL:30,bendL:-10},MOP));
 mopHair3(SX-36,SH,SS,t,.5);psofa(540,1900,1.3,'#7a6fb5','#5f559a');
 memo(770,1600,.8,{t,glow:1});
 const fl=C((r-.4)/.8);if(fl<1)emo(lerp(SX+170,SX+170,fl),lerp(SH-260,SH+200,eo(fl)),'✂️',lerp(.8,.25,fl),1);
 if(fl>=1)emo(SX+160,SH-200,'🎤',.6,C((r-1.2)/.2));
 label3('You, 23:11 🎤',C(r/.2))});
// E: the chat: voice note → ✅ Got it
const E0=D0+2.3;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#26305e');g.addColorStop(1,'#6f7fc8');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,180,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.6&&r<.85,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.5),dur:'0:03',time:'23:11'},{a:.85,me:0,text:'✅ Got it! Tomorrow 09:00 → ✂️ Book a haircut',time:'23:11'}]})});
// F: 09:00 kitchen, phone buzzes; then you on the call to the salon, grinning
const F0=T('s2')-.1,NT=.1,SW=1.6;
function kitchen(t){proom(t,{win:780,plant:200,lamp:0,frame:[220,520],wall:'#f3e6cf',wall2:'#e2cfae',floor:'#c49a6c',floor2:'#a07a50'});glow(780,600,700,'255,240,200',.4)}
sh(F0,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/3.2)),t,.1);kitchen(t);wclock(300,620,.6,9,0);
 const s=1.14,y=1880,hy=HD(y,s),ping=r>NT;
 if(r<SW){sm(540,y,s,Object.assign({t,eyes:ping?'wide':'open',brow:'up',mouth:ping?'o':'smile',look:[.3,.5],armR:70,bendR:-110,holdR:(hx,hy2)=>phoneH(hx,hy2,0,ping&&Math.sin(t*24)>0),armL:30,bendL:10},MOP));mopHair3(544,hy,s,t,.3);
  notif(338,C((r-NT)/.3)*(1-C((r-SW+.25)/.2)),'Memopai','✂️ Book a haircut');}
 else{const q=r-SW;
  sm(540,y,s,Object.assign({t,eyes:q>.9?'happy':'open',brow:'up',mouth:q>.9?'grin':'open',talk:q<.9?t:null,blush:q>.9,look:[.4,-.2],armR:155,bendR:-150,holdR:(hx,hy2)=>phoneH(hx-10,hy2+40,.5,1),armL:q>.9?140:30,bendL:q>.9?-40:10},MOP));mopHair3(544,hy,s,t,.2);
  if(q>.9){emo(800,hy-160,'✅',eo(C((q-.9)/.25))*.9,1);sparkles(760,hy-180,C((q-.9)/.8),8,170)}
  label3('You, 09:00 😎',C((q-.05)/.2))}});
// G: same sofa, warm light, fresh haircut, dog videos, Memo beside you
const G0=T('p1')-.35;
sh(G0,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/3.6)),t,.1);living(t,{warm:1,clock:[23,10]});
 sm(SX-40,SY,SS,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:1,tilt:-4,look:[.5,.2],armR:150,bendR:-165,holdR:(x,y)=>{phoneH(x,y,.25,1);reelStream3(x+150,y-120,t,.8,3)},armL:40,bendL:-90},YOU));
 neatHair3(SX-40,SH,SS);psofa(540,1900,1.3,'#7a6fb5','#5f559a');
 sparkles(SX-40,SH-120,C(r/1.2),10,200);
 memo(770,1600,.8,{t,glow:.5});
 label3('You, sorted 😌',C((r-.2)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only frame: 23:10 phone glow, no overlays
sh(1000,(t,r)=>shotB(t,2.4,0));
