// 2026-11-25 09:00 FOLLOWERS — "In the shower, you remember everything."
// craft ladder (look3.js): brainGuy3() pink talking brain character with folds, foamHat3() shampoo foam hat, towel3() towel dropped over a head
const YOU={hair:'curl'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
// tooth3: a cartoon molar (x,y centre); toothBadge: white round badge with the tooth (emoji 🦷 is missing from the render font)
function tooth3(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#ffffff';X.strokeStyle='#151515';X.lineWidth=6;X.lineJoin='round';
 X.beginPath();X.moveTo(-38,-30);X.bezierCurveTo(-46,-62,-14,-66,0,-50);X.bezierCurveTo(14,-66,46,-62,38,-30);X.bezierCurveTo(34,0,30,20,24,52);X.bezierCurveTo(20,66,8,62,6,46);X.lineTo(0,18);X.lineTo(-6,46);X.bezierCurveTo(-8,62,-20,66,-24,52);X.bezierCurveTo(-30,20,-34,0,-38,-30);X.closePath();X.fill();X.stroke();
 X.strokeStyle='rgba(120,170,220,.7)';X.lineWidth=5;X.beginPath();X.arc(-14,-30,10,3.6,5.2);X.stroke();X.restore()}
function toothBadge(x,y,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';tooth3(0,4,.82);X.restore()}
// pink brain character: sm() with a pink head + brain folds; x,y = feet
function brainGuy3(x,y,s,o={}){sm(x,y,s,Object.assign({col:'#f7a8c8',limb:'#151515'},o));
 const hy=y-767*s;X.save();X.strokeStyle='rgba(190,60,110,.55)';X.lineWidth=9*s;X.lineCap='round';
 for(const [dx,dy,r,a0,a1] of [[-70,-120,55,3.4,5.6],[40,-140,60,3.6,6.0],[-10,-60,45,3.3,5.9],[100,-60,40,4.2,6.4],[-110,-40,38,3.2,5.0]]){X.beginPath();X.arc(x+dx*s,hy+dy*s,r*s,a0,a1);X.stroke()}
 X.beginPath();X.moveTo(x,hy-190*s);X.quadraticCurveTo(x+18*s,hy-120*s,x,hy-70*s);X.stroke();X.restore()}
// shampoo foam on top of a head (hx,hy = head centre)
function foamHat3(hx,hy,s,t){X.save();X.fillStyle='#ffffff';X.strokeStyle='#bcd6e6';X.lineWidth=4*s;
 for(let k=0;k<11;k++){const a=Math.PI*(1.05+k/10*.9),rr0=170*s,bx=hx+Math.cos(a)*rr0*.95,by=hy+Math.sin(a)*rr0*.85-30*s,r=(46+rnd(k)*26)*s+Math.sin(t*5+k)*2*s;X.beginPath();X.arc(bx,by,r,0,7);X.fill();X.stroke()}
 for(let k=0;k<6;k++){const q=(t*.7+k/6)%1;X.globalAlpha=1-q;X.beginPath();X.arc(hx-120*s+k*48*s+Math.sin(t*3+k)*12*s,hy-200*s-q*220*s,(8+rnd(k+3)*10)*s,0,7);X.fill();X.stroke()}X.restore()}
// towel dropped over a head; p 0..1 = falling in
function towel3(hx,hy,s,p,col='#5fb3a8'){if(p<=0)return;const y=lerp(hy-900*s,hy-120*s,eo(C(p)));X.save();X.translate(hx,y);X.scale(s,s);
 X.fillStyle=col;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-200,40);X.quadraticCurveTo(-210,-140,0,-150);X.quadraticCurveTo(210,-140,200,40);X.lineTo(230,260);X.lineTo(150,250);X.lineTo(140,60);X.quadraticCurveTo(0,0,-140,60);X.lineTo(-150,250);X.lineTo(-230,260);X.closePath();X.fill();X.stroke();
 X.strokeStyle='rgba(255,255,255,.55)';X.lineWidth=10;X.beginPath();X.moveTo(-215,200);X.lineTo(-160,205);X.moveTo(160,205);X.lineTo(215,200);X.stroke();X.restore()}
function shower(t,o={}){bathroom(t,{sx:o.sx||470,water:o.water==null?1:o.water,steam:o.steam==null?.8:o.steam,dim:o.dim||0});
 if(o.warm){glow(560,520,900,'255,214,150',.5);X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(255,226,180,.35)';X.fillRect(-3000,-3000,8000,8000);X.restore()}}
// ---- bed (from the bill_look3 example)
function bedBack(x,y){rr(x-390,y-560,780,520,60,'#6e4a33',7);rr(x-350,y-520,700,440,44,'#87603f',0);
 X.save();X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=20;ell(x,y-150,280,115,'#f4f1fb',6);X.restore();ell(x-60,y-180,170,40,'rgba(255,255,255,.6)',0)}
function bedFront(x,top,col='#5b78c9',col2='#4561ad'){const g=X.createLinearGradient(0,top,0,top+700);g.addColorStop(0,col);g.addColorStop(1,col2);
 path(()=>{X.moveTo(x-410,top+40);X.quadraticCurveTo(x-260,top-10,x-110,top+8);X.quadraticCurveTo(x,top+22,x+120,top+6);X.quadraticCurveTo(x+280,top-12,x+410,top+40);X.lineTo(x+440,top+620);X.lineTo(x-440,top+620);X.closePath()},g,7);
 rr(x-395,top+10,790,70,30,'#eef0fa',6);
 X.strokeStyle='rgba(20,30,80,.25)';X.lineWidth=6;for(const k of[-230,-50,160]){X.beginPath();X.moveTo(x+k,top+120);X.quadraticCurveTo(x+k+40,top+330,x+k-10,top+560);X.stroke()}
 rr(x-460,top+600,920,120,20,'#6e4a33',7)}
function nstand(x,y,time){y-=70;rr(x-130,y,260,330,18,'#8a6142',6);rr(x-110,y+150,220,10,4,'#6e4a33',0);
 if(time){rr(x-35,y-90,150,90,14,'#222',5);glow(x+40,y-45,120,'255,90,90',.25);txt(time,x+40,y-44,46,'#ff5a5a',0)}}
function bedroom(t){proom(t,{win:830,night:1,wall:'#8ea0c8',wall2:'#7486b4',curtain:'#5a6fc0',curtain2:'#41539e',plant:0,lamp:0,frame:[220,560]})}

// A: 07:30, in the shower, happy, foam hat; eyes snap open at the end (the thought arrives)
function shotA(t,r,lab){cam(540,1040,lerp(1.02,1.07,C(r/3.2)),t,.1);shower(t);
 const s=1.15,y=1880,hy=HD(y,s),snap=r>2.2,sc=Math.sin(t*8);
 sm(540,y,s,Object.assign({t,eyes:snap?'wide':'closed',brow:snap?'up':'flat',mouth:snap?'o':'smile',look:[0,-.6],armL:150+sc*10,bendL:-60,armR:150-sc*10,bendR:60},YOU));
 foamHat3(540,hy,s,t);drops(540,1100,t,1,420);
 if(snap)emo(760,hy-260,'💡',eo(C((r-2.2)/.25))*.9,1);
 if(lab)label3('You, 07:30 🚿',C((r-.05)/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close-up, the pink brain springs out of your head shouting with a 🦷 sign; then the towel drops and it all goes poof
const B0=T('b1')-.12,TW=T('r1')-B0+.15;
function shotB(t,r,lab){cam(540,1000,lerp(1.02,1.06,C(r/3)),t,.1);shower(t);
 const s=1.0,y=1990,hy=HD(y,s),tw=C((r-TW)/.4);
 const pop=eo(C((r-.05)/.3))*(1-C((r-TW-.1)/.3));
 if(pop>0){const bs=.64,fy=hy+40+(1-pop)*420;
  brainGuy3(730,fy,bs,{t,eyes:'wide',brow:'angry',mouth:'open',talk:r<TW?t:null,look:[-.5,.3],armL:160,bendL:-25,armR:40,bendR:10});
  toothBadge(560,fy-640,pop*1.0,pop)}
 sm(500,y,s,Object.assign({t,eyes:'wide',brow:'up',mouth:tw>0?'wavy':'o',look:[.6,-.6],armL:150,bendL:-60,armR:150,bendR:60},YOU));
 if(tw<1)foamHat3(500,hy,s,t);
 towel3(500,hy,s,tw);
 const pf=C((r-TW-.3)/.6);if(pf>0&&pf<1){emo(720,hy-300,'💨',.8*(1-pf*.3),1-pf);sparkles(720,hy-300,pf,8,160)}
 if(lab)label3(tw>.5?'Your brain 🫠':'Your brain 🧠',C((r-.05)/.2))}
sh(B0,(t,r)=>shotB(t,r,1));
// C: 23:47 in bed, eyes closed... then the brain pops up from the pillow: DENTIST!
const C0=T('r1')+1.55,BB=T('b2')-C0;
sh(C0,(t,r)=>{const snap=r>BB-.1;cam(560,960,lerp(1.22,1.28,C(r/2.6)),t,.15);bedroom(t);
 const HX=600,SC=1.05,HY=900,FY=HY+767*SC,BT=1030;bedBack(HX,BT);
 const pop=eo(C((r-BB+.15)/.25));
 if(pop>0)brainGuy3(780,BT-20+(1-pop)*360,.58,{t,eyes:'wide',brow:'angry',mouth:'open',talk:t,look:[-.5,.2],armL:165,bendL:-20,armR:40,bendR:10});
 sm(HX,FY,SC,Object.assign({t,blink:0,eyes:snap?'wide':'closed',brow:snap?'worried':'flat',mouth:snap?'o':'smile',look:[.5,-.3],sweat:snap},YOU));
 bedFront(HX,BT);nstand(270,1250,'23:47');
 if(pop>0)toothBadge(640,BT-470,pop*.9,pop);
 if(snap&&r<BB+.3)impact((r-BB+.1)/.4);
 label3('You at 23:47 😳',C(r/.2))});
// D: still dripping, phone in hand, you tell Memopai; the 🦷 flies into the phone; Memo hops onto the sink
const D0=T('s1')-.2;
sh(D0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/2.8)),t,.1);shower(t,{water:.6,steam:.5});
 sink(750,1160,.8);
 const s=1.12,y=1880,hy=HD(y,s),talk=r>.5;
 sm(400,y,s,Object.assign({t,eyes:'open',lid:talk?.25:0,brow:talk?'smug':'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.4,.2],armR:140,bendR:-140,holdR:(x,yy)=>phoneH(x+6,yy,.15,1),armL:20,bendL:10},YOU));
 foamHat3(400,hy,s,t);drops(400,1150,t,.8,300);
 const fl=C((r-.9)/.7);if(fl<1)toothBadge(560,lerp(hy-300,hy+60,eo(fl)),lerp(.85,.3,fl),r<.2?C(r/.2):1);
 if(talk&&fl>=1)emo(560,hy-60,'🎤',.62,C((r-1.6)/.2));
 const mp=C((r-.0)/.5);if(mp>0){memo(750,1150,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(750,900,mp,8,160)}
 label3('You, still dripping 💧',C(r/.2))});
// E: the chat
const E0=D0+2.75;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a5f7a');g.addColorStop(1,'#9fd3e0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.7&&r<.95,list:[{a:.1,me:1,voice:1,pl:C((r-.15)/.55),dur:'0:03',time:'07:31'},{a:.95,me:0,text:'✅ Got it! Today 10:00 → 📞 Book the dentist',time:'07:31'}]})});
// F: 10:00, kitchen, phone buzzes; then you on the call, grinning
const F0=T('s2')-.1,NT=.1,SW=1.75;
function kitchen(t){proom(t,{win:780,plant:200,lamp:0,frame:[220,520],wall:'#f3e6cf',wall2:'#e2cfae',floor:'#c49a6c',floor2:'#a07a50'});glow(780,600,700,'255,240,200',.4)}
sh(F0,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/3.4)),t,.1);kitchen(t);wclock(300,620,.6,10,0);
 const s=1.14,y=1880,hy=HD(y,s),ping=r>NT;
 if(r<SW){sm(540,y,s,Object.assign({t,eyes:ping?'wide':'open',brow:'up',mouth:ping?'o':'smile',look:[.3,.5],armR:70,bendR:-110,holdR:(hx,hy2)=>phoneH(hx,hy2,0,ping&&Math.sin(t*24)>0),armL:30,bendL:10},YOU,{tee:0}));
  notif(338,C((r-NT)/.3)*(1-C((r-SW+.25)/.2)),'Memopai','📞 Book the dentist (they\'re open now)');}
 else{const q=r-SW;
  sm(540,y,s,Object.assign({t,eyes:q>.9?'happy':'open',brow:'up',mouth:q>.9?'grin':'open',talk:q<.9?t:null,blush:q>.9,look:[.4,-.2],armR:155,bendR:-150,holdR:(hx,hy2)=>phoneH(hx-10,hy2+40,.5,1),armL:q>.9?140:30,bendL:q>.9?-40:10},YOU));
  if(q>.9){emo(800,hy-120,'✅',eo(C((q-.9)/.25))*.9,1);sparkles(760,hy-150,C((q-.9)/.8),8,170)}
  label3('You, 10:00 😎',C((q-.05)/.2))}});
// G: same shower, warm: singing, head empty, the brain hums along
const G0=T('p1')-.35;
sh(G0,(t,r)=>{cam(540,1040,lerp(1.03,1.07,C(r/3.8)),t,.1);shower(t,{warm:1});
 const s=1.15,y=1880,hy=HD(y,s),sw=Math.sin(t*3);
 sm(540,y,s,Object.assign({t,eyes:'happy',brow:'up',mouth:'open',talk:t,blush:1,tilt:sw*5,look:[0,-.4],armL:150+sw*12,bendL:-60,armR:150-sw*12,bendR:60},YOU));
 foamHat3(540,hy,s,t);drops(540,1100,t,1,420);
 const bp=eo(C((r-.3)/.4));if(bp>0)brainGuy3(770,hy+260+lerp(160,0,bp),.55,{t,eyes:'happy',brow:'up',mouth:'smile',tilt:-sw*8,armR:140+sw*20,bendR:-30,armL:40,bendL:10});
 for(let k=0;k<3;k++){const ph=(t*.5+k/3)%1;const e=k%2?'🎶':'🎵';emo(330+k*60+Math.sin(t*2+k)*30,hy-180-ph*300,e,.6,Math.sin(ph*Math.PI))}
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: the brain shouting in the shower, no overlays
sh(1000,(t,r)=>shotB(t,1.0,0));
