const YOU={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// office desk seen from the front; laptop optional
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-430,320,40,40,6,'#5b4636',5);rr(390,320,40,40,6,'#5b4636',5);
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,o.glowc||'#8fd0ff',0);
  if(o.type){for(let k=0;k<4;k++)rr(-110,-196+k*38,lerp(80,220,(Math.sin(k*2+o.t*3)+1)/2),14,6,'rgba(255,255,255,.7)',0)}X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,'#e86a5a')}
 X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function feeSlip(x,y,s,rot){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=16;rr(-170,-90,340,180,18,'#fff',6);X.shadowColor='transparent';
 rr(-170,-90,340,54,18,'#e0533d',0);txt('NO-SHOW FEE',0,-56,34,'#fff',0);txt('€ 30',0,30,64,'#c0392b',0);X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));}
function tooth(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-60,-60);X.quadraticCurveTo(-70,-110,-25,-105);X.quadraticCurveTo(0,-95,25,-105);X.quadraticCurveTo(70,-110,60,-60);X.quadraticCurveTo(55,0,40,40);X.quadraticCurveTo(25,60,15,20);X.quadraticCurveTo(0,0,-15,20);X.quadraticCurveTo(-25,60,-40,40);X.quadraticCurveTo(-55,0,-60,-60);X.closePath()},'#fff',7);X.restore()}
function dchair(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(0,10,330,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-60,-200,120,200,20,'#c7ccd3',7);rr(-140,-20,280,30,12,'#9aa3ad',6);
 path(()=>{X.moveTo(-320,-260);X.lineTo(160,-260);X.quadraticCurveTo(220,-260,240,-330);X.lineTo(300,-560);X.quadraticCurveTo(310,-610,260,-600);X.lineTo(200,-590);X.lineTo(150,-320);X.lineTo(-300,-320);X.quadraticCurveTo(-340,-300,-320,-260);X.closePath()},'#4fb3a9',8);
 rr(230,-680,90,90,30,'#4fb3a9',8);
 line([[330,-20],[360,-820],[160,-900]],14,'#6b7480');ell(140,-900,80,38,'#e9eef2',7);glow(140,-870,220,'255,250,220',.5);
 X.restore()}
function clinic(t){proom(t,{win:0,frame:null,plant:1,lamp:0,wall:'#e6f4f3',wall2:'#cfe7e5',floor:'#d9dde2',floor2:'#bfc5cc'});
 X.save();X.globalAlpha=.9;rr(120,380,260,320,20,'#fff',6);tooth(250,560,1.2);X.restore();wclock(760,520,1.1,14,0)}

// SMS-style notification from someone who is NOT Memopai (blue icon with a tooth)
function notifSMS(y,p,title,body){if(p<=0)return;X.save();X.globalAlpha=C(p*2);X.translate(0,lerp(-260,0,eo(p)));rr(60,y,960,230,48,'rgba(250,250,252,.97)',6);
 X.save();X.beginPath();X.roundRect(100,y+40,84,84,20);X.fillStyle='#3d8bfd';X.fill();X.restore();tooth(142,y+92,.42);
 X.font="800 38px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,210,y+66);X.font="500 28px Inter";X.fillStyle='#888';X.textAlign='right';X.fillText('now',985,y+66);
 X.textAlign='left';X.font="600 36px Inter";X.fillStyle='#222';wrapT(body,760,X.font).forEach((l,i)=>X.fillText(l,210,y+122+i*46));X.restore()}
// A: 14:20, the text lands
sh(0,(t,r)=>{cam(560,1000,lerp(1.12,1.18,C(r/3.8)),t,.15);office(t);
 const hit=r>.35;
 sm(470,1760,1.28,Object.assign({t,eyes:hit?'wide':'open',lid:hit?0:.3,brow:hit?'worried':'flat',mouth:hit?'o':'smile',look:hit?[.6,.7]:[0,0],sweat:r>1.4,
  armR:35,bendR:-115,holdR:(x,y)=>phoneH(x,y,-.12,hit)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t,type:!hit,mug:0});
 if(hit&&r<1.2){X.save();X.globalAlpha=.8*(1-C((r-.35)/.85));for(let k=1;k<4;k++)circ(630,1000,30+k*30*(1+C((r-.35)/.85)),null,5);X.restore()}
 notifSMS(150,C((r-.3)/.3),'Dental clinic','We missed you at your 14:00 check-up today');
 label3('You at 14:20 😬',C(r/.25),470)});
// B: six weeks ago 'I'll remember' -> now: fee + sinking feeling
sh(T('s1'),(t,r)=>{const now=r>1.75;
 if(!now){cam(540,1000,1.05,t,.2);office(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,600,'255,220,150',.5);
  sm(500,1760,1.25,Object.assign({t,eyes:'open',lid:.35,brow:'smug',mouth:'smirk',talk:r>.6&&r<1.5?t:null,look:[-.4,-.2],tilt:-5,armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.3,1,'#ffffff'),armL:20,bendL:40},YOU));
  label3('You, 6 weeks ago 😎',C(r/.25))}
 else{const q=r-1.75;cam(540,1010,lerp(1.04,1.12,C(q/2.3)),t,.2);office(t,{rain:1,wall:'#b7c2d0',wall2:'#9eabbd',night:0});prain(t,.35,60);
  sm(470,1760,1.25,Object.assign({t,eyes:'open',lid:.45,brow:'sad',mouth:'wavy',look:[.2,.6],tilt:-8,lean:6,sweat:1,armL:30,bendL:20,armR:30,bendR:20},YOU));
  desk(540,1460,1.05,{laptop:1,lx:-200,t,glowc:'#c9d6e6'});
  feeSlip(760,1180,eo(C(q/.35))*1.0,.12);
  label3('You, 14:21 😖',C(q/.25))}});
// C: rebook, voice note, Memopai hops on, the 🦷 thought leaves the head
sh(T('s3'),(t,r)=>{cam(540,1000,1.04,t,.2);office(t,{wall:'#dfe7ee',wall2:'#c9d5df'});
 const talk=r>1.5;
 sm(400,1760,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:40,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,r>1.2)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-260,t,mug:0});
 const mp=C((r-.2)/.6);if(mp>0){memo(800,1440,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(800,1100,mp,10,240)}
 const fl=C((r-1.6)/1.1);if(fl<1){const px=lerp(330,520,eo(fl)),py=lerp(560,960,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🦷',.9-fl*.5)}else sparkles(520,960,C((r-2.7)/.5),8,120,'#7cf0a0');
 label3(r<.4?'You, rebooking 📞':'Memopai 😎',C(r/.25))});
// D: the voice note in WhatsApp
sh(T('y1')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.0&&r<1.3,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/1.9),dur:'0:03',time:'14:31'},{a:1.3,me:0,text:'✅ Thu 3 Dec, 13:00 · Dentist at 14:00 🦷',time:'14:31'}]})});
// E: three weeks later, buzz, grab the coat
sh(T('s4'),(t,r)=>{cam(540,1000,1.04,t,.2);office(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,650,'255,225,160',.55);
 const buzz=r>.25,go=r>1.6;
 sm(470,1760,1.25,Object.assign({t,eyes:buzz&&r<1.0?'wide':'open',brow:buzz?'up':'flat',mouth:go?'grin':(buzz?'o':'smile'),look:buzz?[.6,.6]:[.3,.5],
  armR:go?140:35,bendR:go?-160:-115,holdR:(x,y)=>{if(!go)phoneH(x,y,-.12,buzz);else{rr(x-70,y-20,140,230,40,'#3c6e91',7);line([[x-20,y-10],[x,y+60],[x+20,y-10]],6,'#2a4f6a')}}},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t,type:!buzz});
  notif(150,buzz?C((r-.25)/.3):0,'Memopai','Dentist at 14:00 (in 1 hour)');
 label3('You, 3 weeks later 🙂',C(r/.25),470)});
// F: in the chair at two, sorted
sh(T('p1'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/3.4)),t,.15);clinic(t);glow(540,600,700,'255,245,210',.35);
 dchair(680,1760,1.05);
 sm(330,1760,1.25,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'flat',mouth:'grin',blush:1,look:[.2,.3],tilt:4,armR:150,bendR:-20,armL:20,bendL:10},YOU));
 const sp=(t*1.5)%1;X.save();X.globalAlpha=Math.sin(sp*Math.PI);txt('✨',420,770,70,'#fff',0,'400 ');X.restore();sparkles(330,800,C((r-.3)/1.5),10,260);
 label3(r<1.4?'You, 14:00 sharp ⏰':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,1000,1.16,t,.1);office(t);
 sm(470,1760,1.28,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',look:[.6,.7],sweat:1,armR:35,bendR:-115,holdR:(x,y)=>phoneH(x,y,-.12,1)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t});
 notifSMS(1060,1,'Dental clinic','We missed you at your 14:00 check-up today')});
