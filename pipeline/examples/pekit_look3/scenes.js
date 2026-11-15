const YOU={hair:'curl'};const KID={hair:'spike',hairc:'#7a4a2a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function arm2(x0,y0,x1,y1,s=1){line([[x0,y0],[x1,y1]],17*s,'#151515');ell(x1,y1,31*s,27*s,'#151515',0)}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-430,320,40,40,6,'#5b4636',5);rr(390,320,40,40,6,'#5b4636',5);
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,o.glowc||'#8fd0ff',0);
  for(let k=0;k<4;k++)rr(-110,-196+k*38,lerp(80,220,(Math.sin(k*2)+1)/2),14,6,'rgba(255,255,255,.7)',0);X.restore()}
 X.restore()}
function mug(x,y,steam=0,t=0){X.save();X.translate(x,y);rr(-40,-96,80,96,14,'#e86a5a',6);X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.arc(44,-50,22,-1.3,1.3);X.stroke();
 if(steam){X.globalAlpha=.7;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=7;X.beginPath();X.moveTo(-18+k*18,-110-ph*90);X.quadraticCurveTo(-8+k*18+Math.sin(t*3+k)*10,-140-ph*90,-18+k*18,-170-ph*90);X.stroke()}}X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));if(o.clock)wclock(250,470,.9,o.clock[0],o.clock[1])}
// phone face-down on the desk (quiet)
function phoneDown(x,y){rr(x-70,y-22,140,26,10,'#1b1b1f',4)}
// PE kit: a sports bag with a sneaker + a football sticker
function peBag(x,y,s=1,t=0,open=0){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,6,130,.22);
 rr(-130,-150,260,150,50,'#2f7fd6',7);rr(-130,-95,260,22,0,'#1f62ad',0);path(()=>{X.moveTo(-70,-150);X.quadraticCurveTo(0,-250,70,-150)},null,12,'#1f62ad');
 circ(70,-60,30,'#fff',5);txt('⚽',70,-58,40,'#111',0,'400 ');
 if(open){X.save();X.translate(-40,-150-open*40);X.rotate(-.3);ell(0,0,70,30,'#fff',6);rr(-70,-4,140,16,6,'#e0533d',0);X.restore()}
 X.restore()}
// school corridor with lockers
function corridor(t){proom(t,{win:null,frame:null,plant:0,lamp:0,wall:'#cfe3d6',wall2:'#b7d1c1',floor:'#c9b79a',floor2:'#a99677'});
 for(let k=0;k<6;k++){const lx=-60+k*200;rr(lx,560,180,680,10,k%2?'#e8a24a':'#e0533d',6);rr(lx+30,620,120,14,6,'rgba(0,0,0,.25)',0);rr(lx+30,650,120,14,6,'rgba(0,0,0,.25)',0);circ(lx+150,900,12,'#ddd',4)}
 rr(380,330,320,120,18,'#fff',6);txt('GYM →',540,392,56,'#2f7fd6',0)}
// kid's bedroom at night
function kidRoom(t,o={}){proom(t,Object.assign({win:780,night:1,lamp:160,frame:[330,520],plant:0,wall:'#b7c4e8',wall2:'#99a8d6',curtain:'#e8a24a',curtain2:'#c9862f'},o));glow(160,780,520,'255,214,150',.45);
 txt('⚽',330,520,90,'#111',0,'400 ')}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120},o));glow(120,760,560,'255,214,150',.45)}
// kid's phone card: Memopai asks to accept (big, readable)
function acceptCard(x,y,s,p,tap){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(s*k,s*k);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=18;
 rr(-250,-170,500,340,36,'#fff',6);X.shadowColor='transparent';avatar(-160,-90,46,0);
 X.font="800 40px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText('Memopai',-96,-104);X.font="500 28px Inter";X.fillStyle='#667781';X.fillText('wants to remind you',-96,-62);
 rr(-200,20,400,100,50,tap?'#1aa260':'#25d366',0);X.font="800 44px Inter";X.fillStyle='#fff';X.textAlign='center';X.fillText(tap?'Accepted ✓':'Accept',0,72);X.restore()}

// A: 08:43 at your desk, the phone buzzes: your kid
sh(0,(t,r)=>{cam(520,1000,lerp(1.12,1.18,C(r/3.6)),t,.15);office(t,{clock:[8,43]});glow(780,500,600,'255,240,200',.45);
 const ring=r>.15&&r<1.0,up=r>1.0;
 desk(520,1460,1.0,{laptop:1,lx:140,glowc:'#8fd0ff'});
 if(!up){phoneH(260,1450,0,ring);if(ring){const sh=Math.sin(t*60)*6;X.save();X.globalAlpha=.8;for(let k=1;k<3;k++)circ(262+sh,1400,60+k*28,null,5,'#25d366');X.restore()}}
 sm(330,1760,1.25,Object.assign({t,eyes:up?'wide':'open',lid:up?0:.3,brow:up?'worried':'flat',mouth:up?'o':'smile',look:up?[.6,-.1]:[.3,.6],sweat:r>2,
  armL:up?165:20,bendL:up?-150:30,holdL:up?(x,y)=>{rr(x-30,y-80,60,120,14,'#1b1b1f',5)}:null,armR:40,bendR:-100},YOU));
 if(up&&r<1.5)impact((r-1)/.5);
 label3(up?'You at 08:43 😳':'You at 08:43 ☕',C(r/.2))});
// B: split — you at the desk vs your kid in the school corridor
sh(T('k1')-.05,(t,r)=>{split2(t,
  (t)=>{office(t,{clock:[8,43]});desk(560,1460,1.0,{laptop:1,lx:160});sm(380,1760,1.2,Object.assign({t,eyes:'open',lid:.35,brow:'flat',mouth:'flat',look:[.6,0],armL:165,bendL:-150,holdL:(x,y)=>{rr(x-30,y-80,60,120,14,'#1b1b1f',5)}},YOU))},
  (t)=>{corridor(t);sm(660,1760,1.05,Object.assign({t,flip:1,eyes:'open',brow:'worried',mouth:r>1.8?'wavy':'open',talk:r<2.6?t:null,look:[-.6,0],armR:165,bendR:-150,holdR:(x,y)=>{rr(x-28,y-76,56,112,12,'#1b1b1f',5)},armL:30,bendL:20},KID))},
  {camA:[560,960,1.0],camB:[620,1000,1.0],p:C(r/.3)});
 label3('Your kid, 08:43 🥺',C((r-.15)/.25))});
// C: the school gate in the rain, you with the PE bag: the family alarm clock; Memopai hops in
sh(T('s1'),(t,r)=>{cam(540,1000,lerp(1.05,1.1,C(r/3.4)),t,.2);psky('#7d8aa3','#98a3b8','#b9c1cf',1150);pclouds(t,300,'#9aa4b6','#7f8aa0',5,4);
 pblur(3,()=>{rr(80,620,920,560,10,'#c98b6a',7);rr(80,580,920,70,10,'#a86e50',7);for(let k=0;k<4;k++)rr(150+k*220,720,140,180,8,'#d8e6f2',5);rr(440,960,200,220,8,'#6b4a3a',5);txt('SCHOOL',540,615,52,'#fff',0)});
 const fg=X.createLinearGradient(0,1150,0,2000);fg.addColorStop(0,'#8c8f96');fg.addColorStop(1,'#6c6f76');X.fillStyle=fg;X.fillRect(-3000,1150,8000,3000);
 for(let k=0;k<9;k++)line([[60+k*120,1150],[60+k*120,1420]],10,'#3c3f46');line([[0,1180],[1080,1180]],10,'#3c3f46');
 prain(t,.6,90);
 const mp=C((r-2.5)/.6);
 sm(400,1760,1.25,Object.assign({t,eyes:'open',lid:.4,brow:'sad',mouth:'wavy',sweat:1,look:mp>0?[.7,.3]:[.2,-.2],tilt:-5,armR:40,bendR:-20,holdR:(x,y)=>peBag(x,y+150,.8,t),armL:150,bendL:-120},YOU));
 // ringing alarm clock floating by the head
 const ac=C((r-.9)/.4);if(ac>0&&mp<.5){X.save();X.translate(720,780+Math.sin(t*4)*10);X.rotate(Math.sin(t*40)*.12);X.scale(ac,ac);circ(-60,-90,34,'#e0533d',6);circ(60,-90,34,'#e0533d',6);circ(0,0,100,'#e0533d',8);circ(0,0,78,'#fff',0);line([[0,0],[0,-50]],9,'#151515');line([[0,0],[36,10]],9,'#151515');X.restore()}
 if(mp>0){memo(820,1700,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(820,1360,mp,10,240)}
 label3(mp>.3?'Memopai 😎':(r<.9?'You, 08:58 🌧️':'The family alarm clock ⏰'),C(r/.25))});
// D: that night on the sofa: one voice note, the ⚽ thought flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.04,t,.2);sofaRoom(t,{wall:'#c9b6a4',wall2:'#ad9988'});
 const talk=r>.5;
 sm(400,1640,1.18,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,talk)},YOU));
 psofa(500,1640,1.15);
 memo(830,1390,.95,{t,wave:0,glow:1});
 const fl=C((r-.6)/1.1);if(fl<1){const px=lerp(320,520,eo(fl)),py=lerp(540,930,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'⚽',.95-fl*.45)}else sparkles(520,930,C((r-1.7)/.5),8,120,'#7cf0a0');
 label3('You, that night 🛋️',C(r/.25))});
// E: the WhatsApp chat
sh(T('s2')+2.3,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.0&&r<1.3,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/1.0),dur:'0:04',time:'21:12'},{a:1.3,me:0,text:'✅ Luka · Every Tue 20:00 · PE kit ⚽',time:'21:12'}]})});
// F: split — your phone vs HIS WhatsApp: he accepts once
sh(T('s3'),(t,r)=>{split2(t,
  (t)=>{sofaRoom(t,{wall:'#c9b6a4',wall2:'#ad9988'});sm(420,1640,1.1,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',look:[.6,.3],armR:60,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.1,1)},YOU));psofa(500,1640,1.1)},
  (t)=>{kidRoom(t);sm(640,1760,1.0,Object.assign({t,flip:1,eyes:'open',brow:'up',mouth:r>2.2?'smile':'o',look:[-.4,.5],armR:60,bendR:-110,holdR:(x,y)=>phoneH(x,y,.1,1)},KID));
   acceptCard(650,640,.85,C((r-1.0)/.35),r>2.1)},
  {camA:[540,1000,1.0],camB:[640,1000,1.0],p:C(r/.3)});
 label3(r<1.0?'Your phone 📱':'His WhatsApp 📲',C(r/.25))});
// G: Tuesday 20:00: buzz on HIS phone, he packs the bag himself
sh(T('s4'),(t,r)=>{cam(540,1000,1.05,t,.2);kidRoom(t);
 const pack=r>T('k2')-T('s4')-.1;
 if(!pack){sm(560,1760,1.2,Object.assign({t,eyes:r<.6?'open':'wide',brow:'up',mouth:'o',look:[.2,.6],armR:40,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.12,r>.2)},KID));
  peBag(860,1700,1.0,t,0);notif(150,r>.2?C((r-.2)/.3):0,'Memopai','Pack your PE kit for tomorrow ⚽')}
 else{const q=r-(T('k2')-T('s4')-.1);
  sm(500,1760,1.2,Object.assign({t,eyes:'happy',brow:'up',mouth:q<1.4?'open':'grin',talk:q<1.3?t:null,look:[.7,.4],lean:8,armR:110,bendR:-40+Math.sin(t*8)*10,armL:30,bendL:20},KID));
  peBag(820,1700,1.05,t,Math.max(0,1-q/1.2));sparkles(820,1400,C(q/1.2),8,180)}
 label3('Your kid, Tuesday 20:00 📲',C(r/.25))});
// H: Wednesday 08:43 — quiet phone, hot coffee, you sorted
sh(T('p1'),(t,r)=>{cam(520,1000,lerp(1.05,1.12,C(r/4.3)),t,.15);office(t,{clock:[8,43],wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,700,'255,230,160',.6);psun(800,420,50,t);
 desk(520,1460,1.0,{laptop:1,lx:140,glowc:'#bfe8ff'});phoneDown(470,1458);
 sm(330,1760,1.25,Object.assign({t,eyes:r>1.6?'happy':'open',lid:.2,brow:'flat',mouth:'smile',blush:1,look:[.5,.1],tilt:4,armR:150,bendR:-150,holdR:(x,y)=>mug(x+10,y+40,1,t),armL:20,bendL:30},YOU));
 sparkles(560,900,C((r-.5)/1.5),10,300);
 label3(r<1.8?'You, Wednesday 08:43 ☕':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>{cam(520,1000,1.18,t,.1);office(t,{clock:[8,43]});glow(780,500,600,'255,240,200',.45);desk(520,1460,1.0,{laptop:1,lx:140});
 sm(330,1760,1.25,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',look:[.6,-.1],sweat:1,armL:165,bendL:-150,holdL:(x,y)=>{rr(x-30,y-80,60,120,14,'#1b1b1f',5)},armR:40,bendR:-100},YOU))});
