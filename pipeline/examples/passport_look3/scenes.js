const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1},AGT={hair:'bun',hairc:'#3b2a20',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// passport (craft ladder 2026-11-15 14:00): passport(x,y,s,rot,{open,exp,red})
function passport(x,y,s=1,rot=0,o={}){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.28)';X.shadowBlur=14;
 if(!o.open){rr(-70,-95,140,190,12,'#1f3b73',6);X.shadowColor='transparent';circ(0,-10,30,null,0);X.strokeStyle='#e8c25a';X.lineWidth=5;X.beginPath();X.arc(0,-12,28,0,7);X.stroke();txt('PASSPORT',0,62,20,'#e8c25a',0,'800 ')}
 else{rr(-170,-110,340,220,12,'#1f3b73',6);X.shadowColor='transparent';rr(-160,-100,155,200,6,'#f3efe2',0);rr(5,-100,155,200,6,'#eef3e6',0);
  rr(-140,-80,70,90,6,'#cfd8e3',0);circ(-105,-50,18,'#fff',3);line([[-140,30],[-30,30]],4,'#9aa3ad');line([[-140,55],[-50,55]],4,'#9aa3ad');
  txt('EXPIRES',82,-50,22,'#555',0,'700 ');txt(o.exp||'14 SEP',82,0,40,o.red?'#d8312f':'#222',0,'900 ');if(o.red){X.strokeStyle='#d8312f';X.lineWidth=6;X.beginPath();X.ellipse(82,-12,74,36,0,0,7);X.stroke()}}
 X.restore()}
function suitcase(x,y,s=1,c='#e86a5a'){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,6,110,.25);rr(-80,-230,160,230,22,c,6);line([[-30,-230],[-30,-280],[30,-280],[30,-230]],8,'#222');line([[-40,-190],[-40,-30]],5,'rgba(0,0,0,.25)');line([[40,-190],[40,-30]],5,'rgba(0,0,0,.25)');circ(-50,4,10,'#222',0);circ(50,4,10,'#222',0);X.restore()}
function plane(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);ell(0,0,150,26,'#f4f6fa',4);path(()=>{X.moveTo(-20,0);X.lineTo(40,90);X.lineTo(70,90);X.lineTo(40,0);X.closePath()},'#dfe4ec',4);path(()=>{X.moveTo(-130,0);X.lineTo(-150,-60);X.lineTo(-115,-60);X.lineTo(-95,-5);X.closePath()},'#3b82f6',4);for(let k=0;k<6;k++)circ(-60+k*30,-6,6,'#6b7d99',0);X.restore()}
function airport(t,o={}){const g=X.createLinearGradient(0,-200,0,1250);g.addColorStop(0,o.sun?'#eef3f8':'#c9d1db');g.addColorStop(1,o.sun?'#dde6ee':'#aeb8c4');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 X.save();X.beginPath();X.rect(-200,200,1480,800);X.clip();const sk=X.createLinearGradient(0,200,0,1000);if(o.sun){sk.addColorStop(0,'#5fb6ff');sk.addColorStop(1,'#d9f1ff')}else{sk.addColorStop(0,'#5d6b80');sk.addColorStop(1,'#9aa6b5')}X.fillStyle=sk;X.fillRect(-200,200,1480,800);
 if(o.sun){psun(850,380,80,t)}pclouds(t,380,o.sun?'#fff':'#c4ccd7',o.sun?'#e3eefa':'#9aa5b3',4,2);X.fillStyle=o.sun?'#9aa7b4':'#6d7784';X.fillRect(-200,900,1480,100);
 if(o.plane!=null){const p=o.plane;plane(lerp(250,1200,p),lerp(880,560,p*p),.9,-.25*p)}else plane(760,890,.8,0);if(o.rain)prain(t,.7,50);X.restore();
 X.fillStyle='#e9edf2';for(let k=0;k<6;k++)X.fillRect(-200+k*300,200,18,800);X.fillRect(-200,190,1480,20);X.fillRect(-200,990,1480,24);
 const fg=X.createLinearGradient(0,1240,0,2000);fg.addColorStop(0,'#d7dbe0');fg.addColorStop(1,'#b5bcc5');X.fillStyle=fg;X.fillRect(-3000,1240,8000,3000);X.strokeStyle='rgba(0,0,0,.08)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*50,1240);X.lineTo(540+k*300,2000);X.stroke()}
 if(o.rain)haze(200,1000,'120,130,150',.12)}
function desk(x,y,w=560,sign='CHECK-IN 12'){rr(x-w/2,y,w,420,20,'#eef1f5',6);rr(x-w/2,y+60,w,40,0,'#2f6fd6',0);rr(x-w/2-10,y-20,w+20,34,12,'#c9d0d9',6);}
function lounge(t,o={}){proom(t,Object.assign({win:780,night:!o.day,lamp:o.day?0:220,plant:o.day?220:0,curtain:'#6a8f6a',curtain2:'#4f7350',wall:'#e8d6c2',wall2:'#d8bfa4'},o))}

// A: 06:00 check-in desk, she hands your passport back
sh(0,(t,r)=>{const bad=r>T('a1')-.15;cam(540,1050,lerp(1.02,bad?1.14:1.06,C(r/5.5)),t,.12);airport(t,{});
 sm(790,1700,1.08,Object.assign({t,flip:1,eyes:'open',brow:bad?'sad':'flat',mouth:bad?'frown':'smile',talk:bad&&r<T('s1')-.3?t:null,look:[-.7,.1],armL:bad?55:20,bendL:bad?-60:20,holdL:(x,y)=>{if(bad)passport(x-50,y-10,.85,-.2)}},AGT));
 desk(760,1330,520);
 suitcase(120,1880,1.05);
 sm(330,1760,1.2,Object.assign({t,eyes:bad?'wide':'happy',brow:bad?'up':'flat',mouth:bad?'o':'grin',sweat:bad&&r>T('a1')+.8,look:[.7,0],armR:bad?60:30,bendR:bad?-40:20,armL:10,bendL:20,holdR:(x,y)=>{if(!bad)passport(x+30,y-20,.5,.2)}},YOU));
 label3(bad?'You at check-in, 06:00 😳':'You, holiday mode 🏖️',C((bad?r-T('a1')+.15:r)/.25))});
// B: the plane leaves without you; Memopai hops in
sh(T('s1'),(t,r)=>{cam(540,950,lerp(1.1,1.18,C(r/3)),t,.15);airport(t,{rain:1,plane:C(r/2.6)});
 const m=r>1.9;
 sm(300,1760,1.25,Object.assign({t,eyes:'open',lid:m?0:.3,brow:m?'up':'sad',mouth:m?'smile':'wavy',look:m?[.8,.2]:[.3,-.6],armL:15,bendL:25,armR:25,bendR:-30,holdR:(x,y)=>passport(x+20,y-10,.45,.3),sweat:!m},YOU));
 sm(780,1760,1.15,Object.assign({t,flip:1,eyes:'open',brow:'sad',mouth:'frown',look:[-.6,-.3],armL:15,bendL:25,armR:15,bendR:25},HER));
 suitcase(980,1880,.9,'#3aa1a0');
 if(m){const mp=C((r-1.9)/.55);memo(560,1500,.85,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(560,1180,mp,10,240)}
 label3(m?'Memopai 😎':'Your holiday 🫠',C(m?(r-1.9)/.25:r/.25))});
// C: rewind to booking night, voice note, the trip thought flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1020,1.05,t,.2);lounge(t,{});psofa(540,1700,1.15,'#5a7fb5','#4a6a9a');
 const talk=r>1.4;
 sm(360,1720,1.18,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'grin',talk:talk&&r<3.2?t:null,look:[.5,-.1],armR:55,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,r>1.2),armL:20,bendL:30},YOU));
 sm(790,1720,1.12,Object.assign({t,flip:1,eyes:'happy',brow:'flat',mouth:'grin',look:[-.6,.2],armL:40,bendL:-50,holdL:(x,y)=>{X.save();X.translate(x-60,y-20);rr(-90,-60,180,110,10,'#2b2f38',5);rr(-80,-52,160,90,6,'#dff5e6',0);txt('BOOKED ✓',0,-14,24,'#1d7a43',0,'800 ');txt('✈️ Oct 1',0,20,24,'#222',0,'700 ');X.restore()}},HER));
 memo(560,1330,.7,{t,wave:1,hop:C((r-.5)/.5),glow:1});
 const fl=C((r-1.6)/1.1);if(r>1.6){if(fl<1){const px=lerp(540,450,eo(fl)),py=lerp(460,1000,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🛂',.75-fl*.4,fl*3)}else sparkles(450,1000,C((r-2.7)/.5),8,120,'#7cf0a0')}
 rewind(1-C((r-.15)/.6),t,'◀◀ BOOKING NIGHT');
 label3(r<.9?'Booking night ⏪':'Memopai 😎',C(r<.9?r/.25:(r-.9)/.25))});
// D: the voice note in WhatsApp
sh(T('y1')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.7&&r<2.05,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/2.2),dur:'0:04',time:'21:14'},{a:2.05,me:0,text:'✅ 1 Aug, 09:00 · Check passports 🛂',time:'21:14'}]})});
// E: 1 Aug, buzz, you check: expires 14 Sep -> renewal booked
sh(T('s3'),(t,r)=>{cam(540,1000,1.05,t,.2);lounge(t,{day:1,wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,600,'255,225,160',.35);
 const buzz=r>.25,chk=r>.9,ok=r>1.9;
 sm(330,1760,1.25,Object.assign({t,eyes:chk&&!ok?'wide':(ok?'happy':'open'),brow:chk?'up':'flat',mouth:ok?'grin':(chk?'o':'smile'),look:[.6,-.2],sweat:chk&&!ok,
  armR:50,bendR:-115,holdR:(x,y)=>phoneH(x,y,-.12,buzz&&!chk),armL:chk?60:20,bendL:chk?-50:30},YOU));
 if(buzz&&!chk)notif(150,C((r-.25)/.3),'Memopai','Check passports 🛂 (flight Oct 1)');
 if(chk&&!ok){const p=eo(C((r-.9)/.3));passport(720,880,1.15*p,-.05,{open:1,red:1})}
 if(ok){X.save();X.translate(720,880);const q=eo(C((r-1.9)/.3));X.scale(q,q);rr(-200,-90,400,180,30,'#fff',6);circ(-120,0,48,'#2fbf71',0);txt('✓',-120,16,60,'#fff',0);txt('Renewed',50,-14,44,'#111',0);txt('6 weeks early',50,36,30,'#555',0,'600 ');X.restore();sparkles(720,880,C((r-1.9)/.6),8,220)}
 label3('You, 1 Aug 📲',C(r/.25))});
// F: same desk, sunny, enjoy your trip
sh(T('a2')-.12,(t,r)=>{cam(540,1050,lerp(1.06,1.12,C(r/1.5)),t,.15);airport(t,{sun:1});
 sm(790,1700,1.08,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',talk:r<1.2?t:null,look:[-.7,.1],armL:60,bendL:-50,holdL:(x,y)=>{rr(x-90,y-40,90,56,8,'#fff',4);rr(x-90,y-40,90,16,0,'#2f6fd6',0)}},AGT));
 desk(760,1330,520);suitcase(120,1880,1.05);
 sm(330,1760,1.2,Object.assign({t,eyes:'happy',brow:'flat',mouth:'grin',blush:1,look:[.7,0],armR:65,bendR:-40,armL:150,bendL:-20},YOU));
 sparkles(560,900,C(r/1.2),8,200);
 label3(r<1.6?'You at check-in, 06:00 😎':'You, Oct 1st ✈️',C(r<1.6?r/.25:(r-1.6)/.25))});
// G: the beach, sorted
sh(T('p1')+1.75,(t,r)=>{cam(540,1050,lerp(1.04,1.1,C(r/2.4)),t,.12);
 const g=X.createLinearGradient(0,-300,0,1100);g.addColorStop(0,'#4fb0ff');g.addColorStop(1,'#dff4ff');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4200);psun(830,420,90,t);rays(830,420,t,'255,240,190',.14);pclouds(t,330,'#fff','#e3eefa',3,2);
 X.fillStyle='#2b8fd6';X.fillRect(-3000,1050,8000,260);waves(1150,t,{});X.fillStyle='#f2d79b';X.fillRect(-3000,1290,8000,1000);
 X.save();X.translate(880,1500);line([[0,0],[-40,-420]],10,'#7a5a3a');path(()=>{X.moveTo(-260,-380);X.quadraticCurveTo(-40,-560,180,-420);X.closePath()},'#e8505b',5);X.restore();
 sm(360,1760,1.2,Object.assign({t,eyes:'happy',brow:'flat',mouth:'grin',blush:1,look:[.6,0],tilt:-4,armR:150,bendR:-20,armL:20,bendL:30},YOU));
 sm(700,1760,1.14,Object.assign({t,flip:1,eyes:'happy',brow:'flat',mouth:'open',look:[-.6,0],tilt:5,armL:140,bendL:-20},HER));
 sparkles(540,900,C((r-.4)/1.4),10,260);
 label3('You, sorted 😌',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(540,1050,1.14,t,.1);airport(t,{});
 sm(790,1700,1.08,Object.assign({t,flip:1,eyes:'open',brow:'sad',mouth:'frown',look:[-.7,.1],armL:55,bendL:-60,holdL:(x,y)=>passport(x-40,y-10,.55,-.2)},AGT));
 desk(760,1330,520);suitcase(120,1880,1.05);
 sm(330,1760,1.2,Object.assign({t,eyes:'wide',brow:'up',mouth:'o',sweat:1,look:[.7,0],armR:60,bendR:-40,armL:10,bendL:20},YOU))});
