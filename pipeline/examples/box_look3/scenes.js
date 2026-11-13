const YOU={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
// parcel box with shoe sticker, optional pile of stuff on top
function parcel(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.22;X.fillStyle='#000';X.beginPath();X.ellipse(0,6,190,22,0,0,7);X.fill();X.globalAlpha=1;
 path(()=>{X.moveTo(-170,0);X.lineTo(-170,-200);X.lineTo(-110,-250);X.lineTo(190,-250);X.lineTo(190,-50);X.lineTo(130,0);X.closePath()},'#b07a45',0);
 rr(-170,-200,300,200,8,'#d39a5c',7);path(()=>{X.moveTo(-170,-200);X.lineTo(-110,-250);X.lineTo(190,-250);X.lineTo(130,-200);X.closePath()},'#e2b071',7);
 path(()=>{X.moveTo(130,0);X.lineTo(190,-50);X.lineTo(190,-250);X.lineTo(130,-200);X.closePath()},'#b07a45',7);
 X.fillStyle='#c9a46a';X.fillRect(-40,-200,40,200);X.fillStyle='rgba(255,255,255,.25)';X.fillRect(-40,-200,40,200);
 rr(-150,-170,90,70,8,'#fff',4);txt('👟',-105,-134,48,'#000',0);
 rr(30,-90,80,50,6,'#fffbe6',4);line([[42,-74],[96,-74]],4,'#999');line([[42,-58],[84,-58]],4,'#999');
 if(o.stuff){const k=C(o.stuff);
  if(k>.1){X.save();X.translate(-40,-262);X.rotate(-.06);rr(-110,-14,200,30,4,'#f4f1ea',4);rr(-80,-40,170,28,4,'#dfe9f7',4);X.restore()}
  if(k>.4){X.save();X.translate(60,-300);X.rotate(.18);rr(-90,-20,180,40,6,'#e86a5a',4);line([[-70,-4],[-40,30]],10,'#e86a5a');X.restore()}
  if(k>.7){X.save();X.translate(-120,-300);X.rotate(-.1);rr(-50,-30,100,60,8,'#ffd23f',4);txt('%',0,0,34,'#c0392b',0);X.restore()}}
 if(o.keys)keysP(o.keysX||70,-275,1);
 X.restore()}
function keysP(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);circ(0,0,22,null,7,'#9aa3ad');X.save();X.translate(14,10);X.rotate(.6);rr(-10,0,20,70,6,'#e9c25a',4);X.restore();X.save();X.translate(-10,14);X.rotate(-.3);rr(-10,0,20,60,6,'#c0c8d0',4);X.restore();rr(-30,-70,50,40,12,'#4a90e2',4);X.restore()}
function cal13(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-90,-100,180,200,14,'#fff',6);X.save();X.beginPath();X.roundRect(-90,-100,180,60,[14,14,0,0]);X.fillStyle='#e74c3c';X.fill();X.restore();txt('NOV',0,-70,34,'#fff',0);txt('13',0,30,90,'#222',0);X.restore()}
function slip(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-170,-110,340,220,10,'#fffdf5',6);txt('RETURN BY',0,-60,36,'#555',0);txt('12 NOV',0,10,78,'#d63031',0);line([[-130,72],[130,72]],4,'#ccc');X.restore()}
function hall(t,o={}){proom(t,Object.assign({win:null,frame:[230,560],plant:0,lamp:0},o));
 door(o.dx||780,1250,1.55,{open:o.open||0,inside:o.inside||(()=>{const g=X.createLinearGradient(0,-560,0,0);g.addColorStop(0,'#8fd0ff');g.addColorStop(1,'#d9f2ff');X.fillStyle=g;X.fillRect(-200,-600,400,620);X.fillStyle='#8fbf6a';X.fillRect(-200,-120,400,140)}),col:'#3d6fb6',frame:'#f3ece2'})}
function hook(x,y,keys){rr(x-80,y-14,160,28,10,'#7a5236',5);for(const k of[-45,0,45])line([[x+k,y+10],[x+k,y+36]],7,'#555');if(keys)keysP(x-45,y+70,.9)}
// A: mirror, day 29, box piled with stuff
sh(0,(t,r)=>{cam(560,1080,1.03,t,.2);hall(t,{wall:'#e9dccd',wall2:'#d6c3ad'});
 parcel(680,1420,1.25,{stuff:1,keys:1});
 const w=C(r/1.2);sm(lerp(200,330,w),1760,1.22,Object.assign({t,walk:w<1?t:0,eyes:r>1.6?'lid':'open',lid:.45,brow:r>1.6?'worried':'flat',mouth:r>1.6?'wavy':'flat',look:[.8,.3],armR:70,bendR:-10,sweat:r>2.2},YOU));
 label3('You, day 29 📦',C(r/.3))});
// B: keys tossed onto it
sh(T('s1'),(t,r)=>{cam(600,1150,1.12,t,.2);hall(t,{wall:'#e9dccd',wall2:'#d6c3ad'});
 const land=C((r-.9)/.55);parcel(690,1420,1.25,{stuff:1,keys:land>=1});
 sm(300,1760,1.25,Object.assign({t,eyes:'lid',lid:.35,brow:'flat',mouth:r<1.5?'smirk':'flat',look:[.8,.2],armR:r<.9?60:120,bendR:r<.9?-40:10},YOU));
 if(land>0&&land<1){const px=lerp(420,777,land),py=lerp(900,1076,land)-Math.sin(land*Math.PI)*260;keysP(px,py,1.25,land*8)}
 if(r>1.45&&r<1.9)impact(777,1076,(r-1.45)/.45);
 label3('Your "reminder" 🙃',C(r/.3))});
// C: the label, the stomach drop
sh(T('s2'),(t,r)=>{cam(540,1050,1.05,t,.25);proom(t,{win:820,night:1,wall:'#d9d4cf',wall2:'#c8c0b8',lamp:0,plant:0,curtain:'#6a7fd0',curtain2:'#4f62b0'});
 cal13(300,560,1.0);parcel(820,1400,.9,{stuff:1});
 const drop=r>1.9;sm(470,1760,1.3,Object.assign({t,eyes:drop?'wide':'open',brow:drop?'worried':'flat',mouth:drop?'o':'flat',look:drop?[-.6,-.5]:[.2,.5],armR:50,bendR:-100,armL:-50,bendL:100,sweat:drop,
  holdR:(x,y)=>{}},YOU));
 slip(470,1130,1.05,-.05);
 if(drop&&r<2.4)impact(470,700,(r-1.9)/.5);
 label3(drop?'You, 23:47 😬':'You, 23:46 🙂',C(r/.3))});
// D: rewind to day 1, voice note, Memopai on set
sh(T('s3'),(t,r)=>{cam(540,1060,1,t,.2);hall(t,{wall:'#f6e2cc',open:C((r-.2)/.5)*0.0});
 parcel(640,1400,1.05,{});
 const talk=r>2.2;sm(260,1760,1.22,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:0,look:[.6,-.3],armR:20,bendR:-120,holdR:(x,y)=>phoneH(x+10,y-40,-.1,talk)},YOU));
 const mp=C((r-1.3)/.7);if(mp>0){memo(760,1020,1.0,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(760,800,mp,10,240)}
 if(talk){const p=C((r-2.2)/1.4);X.save();X.globalAlpha=1-p;X.translate(lerp(300,700,p),lerp(560,880,p));X.scale(1-p*.5,1-p*.5);rr(-70,-60,140,120,20,'#fff',6);txt('👟',0,0,64,'#000',0);X.restore()}
 rewind(1-C((r-.15)/.6),t,'◀◀ DAY 1');
 label3(r<1.4?'You, day 1 📦':'Memopai 😎',C(r/.3))});
// E: the voice note in the chat
sh(T('y1')-.6,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f6f5c';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,240,190',.35);
 phoneUI(540,900,1.28,r,{typing:r>1.5&&r<1.8,list:[{a:.05,me:1,voice:1,pl:C((r-.25)/1.4),dur:'0:03',time:'18:42'},{a:1.8,me:0,text:'Got it ✅ Saturday 10:00, I’ll remind you 👟',time:'18:42'}]})});
// F: Saturday 10:00 buzz, grab the box, out the door
sh(T('s4'),(t,r)=>{cam(560,1050,1,t,.2);hall(t,{wall:'#fbe9cf',wall2:'#f2d3ae',open:C((r-1.6)/.5)});glow(780,800,600,'255,240,170',.35);
 const go=C((r-1.7)/1.6);
 if(r<1.5)parcel(640,1400,1.05,{});
 sm(lerp(300,800,go),lerp(1760,1500,go),lerp(1.22,.95,go),Object.assign({t,walk:go>0&&go<1?t:0,eyes:'open',brow:'up',mouth:'smile',look:[.6,0],
  armR:r<1.5?40:-30,bendR:r<1.5?-100:-60,armL:r<1.5?10:30,bendL:r<1.5?0:60,holdR:(x,y)=>{if(r<1.5)phoneH(x,y,-.1,r>.1&&r<1.4)}},YOU));
 if(r>=1.5){const bx=lerp(390,850,go),by=lerp(1420,1300,go);parcel(bx,by,lerp(.7,.55,go),{})}
 const p1=r<1.6?C((r-.1)/.3):Math.max(0,1-(r-1.6)/.25);if(p1>0)notif(150,p1,'Memopai','Return the shoes 👟 (Saturday 10:00)')});
// G: the fixed life
sh(T('p1'),(t,r)=>{cam(540,1060,1,t,.15);hall(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,800,620,'255,230,160',.45);
 hook(600,720,1);
 sm(330,1760,1.22,Object.assign({t,eyes:'happy',brow:'flat',mouth:'smile',blush:1,armL:-20,armR:150,bendR:20,tilt:4,holdL:(x,y)=>{rr(x-30,y-50,60,70,12,'#fff',6);glow(x,y-80,60,'255,255,255',.3)}},YOU));
 sparkles(700,1600,C(r/1.5),12,280);label3('You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,1080,1.03,t,.2);hall(t,{wall:'#e9dccd',wall2:'#d6c3ad'});parcel(680,1420,1.25,{stuff:1,keys:1});
 sm(330,1760,1.22,Object.assign({t,eyes:'lid',lid:.45,brow:'worried',mouth:'wavy',look:[.8,.3],armR:70,bendR:-10,sweat:1},YOU));});
