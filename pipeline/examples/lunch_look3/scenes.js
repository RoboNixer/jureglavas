// 2026-11-25 18:00 COMMENTS/FUN FACT — "The lunch you made last night? Still in your fridge."
// craft ladder (added here, moved to look3.js): fridge3() kitchen fridge with a swinging door + lit interior, lunch3() lunchbox with a face, desk3() office desk + monitor
const YOU={hair:'curl'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
// lunch3 / fridge3 / pmugLike / desk3 now live in look3.js
function office(t,o={}){proom(t,{win:760,rain:o.rain,frame:null,plant:150,lamp:0,wall:o.wall||'#dfe6ee',wall2:o.wall2||'#c9d3de',floor:'#8f98a6',floor2:'#6f7886',curtain:'#7f93b0',curtain2:'#647894'});
 if(o.rain){X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(170,185,210,.35)';X.fillRect(-3000,-3000,8000,8000);X.restore()}
 else glow(760,560,800,'255,236,180',.45)}
function kitchen(t,o={}){proom(t,Object.assign({win:330,plant:0,lamp:0,frame:null,wall:'#f3e6cf',wall2:'#e2cfae',floor:'#c49a6c',floor2:'#a07a50'},o))}

// A: office, 12:30, rainy; you hold a sad machine sandwich; thought bubble: your lunch alone in the fridge
function shotA(t,r,lab){cam(540,1030,lerp(1.02,1.07,C(r/3.2)),t,.1);office(t,{rain:1});wclock(250,560,.55,12,30);
 const s=1.08,y=1880,hy=HD(y,s);
 sm(620,y,s,Object.assign({t,eyes:'open',lid:.35,brow:'sad',mouth:'frown',look:[.4,-.5],armR:120,bendR:-120,holdR:(hx,hy2)=>sandwich(hx,hy2-10,.9,{bite:1,rot:-.2}),armL:20,bendL:10},YOU));
 desk3(560,1470,1.0,{lit:1,mx:-260});
 const tp=C((r-.6)/.3);
 thought3(745,640,118,tp,680,hy-170,(cx,cy)=>{X.save();X.fillStyle='#f4fbff';X.fillRect(cx-150,cy-150,300,300);glow(cx,cy,140,'255,245,200',.6);line([[cx-120,cy+36],[cx+120,cy+36]],6,'rgba(140,170,190,.9)');lunch3(cx,cy+32,.7,{mood:'sad',t});X.restore()});
 if(lab)label3('You at 12:30 🥲',C((r-.05)/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: 07:45, autopilot: you sleep-walk past the fridge with keys; the lunch peeks through the door gap; Memo naps on top of the fridge
const B0=T('fact')-.12;
sh(B0,(t,r)=>{cam(540,1020,lerp(1.03,1.07,C(r/5)),t,.1);kitchen(t,{win:760,wall:'#f6ecd8'});glow(760,560,700,'255,240,200',.4);wclock(560,520,.5,7,45);
 const peek=C((r-1.2)/.4)*(1-C((r-3.4)/.4));
 fridge3(310,1720,1.0,{open:peek*.18,inside:(fx,fy)=>lunch3(fx+90,fy-6,.62,{mood:'sad',t})});
 if(peek>.3){emo(520,880,'🥺',.8*peek,peek)}
 const wx=lerp(380,800,C(r/4.8)),s=1.08,y=1880;
 sm(wx,y,s,Object.assign({t,walk:t*.8,eyes:'open',lid:.6,brow:'flat',mouth:'wavy',look:[.7,0],armR:95,bendR:0,armL:100,bendL:0,holdR:(hx,hy2)=>keys3(hx,hy2,.8,{rot:.2})},YOU));
 const mp=C((r-3.9)/.5);if(mp>0){memo(300,1020,.5,{t,hop:mp,glow:1});if(mp<1)sparkles(300,880,mp,6,120)}
 label3('You on autopilot 🤖',C((r-.05)/.2))});
// C: night kitchen: you close the fridge (lunch inside), phone up, tell Memopai; the 🍱 flies into the phone; Memo hops on the counter
const C0=T('memo')-.25;
sh(C0,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/3.2)),t,.1);kitchen(t,{win:760,night:1,wall:'#e8d6b8',wall2:'#d4bf9c'});glow(540,700,900,'255,214,150',.45);
 const op=1-C((r-.2)/.5);
 fridge3(300,1720,1.0,{open:op,dark:1,inside:(fx,fy)=>lunch3(fx,fy-6,.62,{mood:'calm',t})});
 const s=1.1,y=1880,hy=HD(y,s),talk=r>.9;
 sm(600,y,s,Object.assign({t,eyes:'open',lid:talk?.2:0,brow:talk?'smug':'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.2],armR:140,bendR:-140,holdR:(x,yy)=>phoneH(x+6,yy,.15,1),armL:talk?20:150,bendL:talk?10:-40},YOU));
 const fl=C((r-1.2)/.7);if(fl<1&&r>.7)emo(lerp(380,640,eo(fl)),lerp(hy-120,hy+90,eo(fl)),'🍱',lerp(.8,.3,fl),C((r-.7)/.2));
 const mp=C((r-.0)/.5);if(mp>0){memo(830,1340,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(830,1100,mp,8,160)}
 label3('Memopai 😎',C(r/.2))});
// D: the chat (voice note + Memopai confirms)
const D0=T('ask')-.15;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#3a2a5a');g.addColorStop(1,'#a99ad8');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'200,180,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>2.2&&r<2.55,list:[{a:.1,me:1,voice:1,pl:C((r-.15)/2.0),dur:'0:04',time:'21:34'},{a:2.55,me:0,text:'✅ Got it! Tomorrow 07:45 → 🍱 Lunch is in the fridge!',time:'21:34'}]})});
// E: 07:45 hallway, shoes on, phone buzzes; then you spin back, fridge open, lunch glows
const E0=T('buzz')-.1,NT=1.15,SW=2.1;
sh(E0,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/3.2)),t,.1);kitchen(t,{win:760,wall:'#f6ecd8'});glow(760,560,700,'255,240,200',.45);wclock(560,520,.5,7,45);
 const s=1.08,y=1880,hy=HD(y,s),ping=r>NT;
 if(r<SW){fridge3(300,1720,1.0,{open:0});
  sm(700,y,s,Object.assign({t,eyes:ping?'wide':'open',lid:ping?0:.3,brow:'up',mouth:ping?'o':'flat',look:[.2,.6],armR:70,bendR:-110,holdR:(hx,hy2)=>phoneH(hx,hy2,0,ping&&Math.sin(t*24)>0),armL:110,bendL:0,holdL:(hx,hy2)=>keys3(hx,hy2,.8)},YOU));
  }
 else{const q=r-SW;fridge3(300,1720,1.0,{open:C(q/.35),inside:(fx,fy)=>lunch3(fx,fy-6,.62,{mood:'happy',t})});
  if(q>.35){glow(300,1180,220,'255,240,160',.5);sparkles(300,1150,C((q-.35)/.8),8,160)}
  sm(640,y,s,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.7,-.2],armL:120,bendL:-20,armR:30,bendR:10,blush:1,holdR:(hx,hy2)=>keys3(hx,hy2,.8)},YOU));
  }
 notif(338,C((r-NT)/.3)*(1-C((r-3.0)/.2)),'Memopai','🍱 Lunch is in the fridge!')});
// F: same office framing, sunny: real lasagna, phone face down, happy
const F0=T('pay')-.15;
sh(F0,(t,r)=>{cam(540,1030,lerp(1.03,1.07,C(r/3.8)),t,.1);office(t,{wall:'#e9eef2',wall2:'#d6dee6'});wclock(250,560,.55,12,30);
 const s=1.08,y=1880,hy=HD(y,s),ch=Math.sin(t*7);
 sm(620,y,s,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.3,.4],armR:110+ch*8,bendR:-120,armL:40,bendL:-20},YOU));
 desk3(560,1470,1.0,{lit:1,mx:-260});rr(560,1430,80,36,10,'#1b1b1f',4);
 lunch3(780,1458,.72,{mood:'happy',lid:0,t});
 X.save();X.translate(720+ch*6,hy+170);X.rotate(-.5);line([[0,0],[0,90]],8,'#9aa0aa');rr(-14,-30,28,36,8,'#c0c6ce',4);X.restore();
 for(let k=0;k<3;k++){const ph=(t*.5+k/3)%1;X.globalAlpha=Math.sin(ph*Math.PI)*.6;X.strokeStyle='#fff';X.lineWidth=6;X.beginPath();X.moveTo(750+k*30,1340-ph*160);X.quadraticCurveTo(736+k*30,1300-ph*160,754+k*30,1260-ph*160);X.stroke();X.globalAlpha=1}
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: shot A with the thought bubble fully open, no label
sh(1000,(t,r)=>shotA(t,1.6,0));
