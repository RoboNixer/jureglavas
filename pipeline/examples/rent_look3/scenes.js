const YOU={hair:'curl'};const MATE={hair:'spike',hairc:'#2f5fd0'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function mug(x,y,t=0){X.save();X.translate(x,y);rr(-40,-96,80,96,14,'#e86a5a',6);X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.arc(44,-50,22,-1.3,1.3);X.stroke();
 X.globalAlpha=.7;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=7;X.beginPath();X.moveTo(-18+k*18,-110-ph*90);X.quadraticCurveTo(-8+k*18+Math.sin(t*3+k)*10,-140-ph*90,-18+k*18,-170-ph*90);X.stroke()}X.restore()}
// ---- craft ladder 2026-11-16 18:00: gamer kit ----
// beanbag(x,floorY,s,col) soft sack seat drawn IN FRONT of a sm() to hide the legs
function beanbag(x,y,s=1,col='#e8a24a',col2='#c9822f'){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.22;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,330,40,0,0,7);X.fill();X.globalAlpha=1;
 const g=X.createLinearGradient(0,-330,0,0);g.addColorStop(0,col);g.addColorStop(1,col2);
 path(()=>{X.moveTo(-320,0);X.bezierCurveTo(-360,-200,-250,-320,-120,-300);X.quadraticCurveTo(0,-250,120,-300);X.bezierCurveTo(250,-320,360,-200,320,0);X.closePath()},g,7);
 X.strokeStyle='rgba(0,0,0,.18)';X.lineWidth=6;X.beginPath();X.moveTo(-160,-250);X.quadraticCurveTo(-120,-130,-170,-20);X.stroke();X.beginPath();X.moveTo(150,-250);X.quadraticCurveTo(110,-120,170,-20);X.stroke();
 ell(-90,-220,70,22,'rgba(255,255,255,.25)',0);X.restore()}
// headset over a sm() head (hx,hy = head centre, s = sm scale)
function headset(hx,hy,s,flip=0){X.save();X.translate(hx,hy);X.scale(s*(flip?-1:1),s);X.lineCap='round';X.strokeStyle='#222';X.lineWidth=22;X.beginPath();X.arc(0,-10,178,Math.PI*1.08,Math.PI*1.92);X.stroke();
 rr(-205,-60,50,110,22,'#e0533d',6);rr(155,-60,50,110,22,'#e0533d',6);X.strokeStyle='#222';X.lineWidth=9;X.beginPath();X.moveTo(-185,40);X.quadraticCurveTo(-170,130,-80,140);X.stroke();circ(-74,140,14,'#222',0);X.restore()}
// game controller held in a hand (world coords)
function pad(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-80,-30);X.quadraticCurveTo(0,-50,80,-30);X.quadraticCurveTo(120,40,90,60);X.quadraticCurveTo(60,70,40,30);X.lineTo(-40,30);X.quadraticCurveTo(-60,70,-90,60);X.quadraticCurveTo(-120,40,-80,-30);X.closePath()},'#3a3f4a',5);
 circ(45,-8,9,'#e0533d',0);circ(62,6,9,'#25d366',0);rr(-60,-12,30,10,3,'#ccc',0);rr(-50,-22,10,30,3,'#ccc',0);X.restore()}
// TV on a low stand, screen glow (game colours)
function tv(x,y,t,on=1){X.save();X.translate(x,y);rr(-230,40,460,70,10,'#6b4a3a',6);rr(-260,-260,520,300,16,'#151515',6);
 if(on){const g=X.createLinearGradient(-240,-240,240,20);g.addColorStop(0,'#5b3fd6');g.addColorStop(1,'#20c7c7');X.fillStyle=g;X.fillRect(-240,-240,480,260);for(let k=0;k<5;k++){circ(-180+((t*120+k*110)%380),-120+Math.sin(t*3+k)*50,16,'#ffe14d',0)}glow(0,-110,520,'120,140,255',.35)}else{rr(-240,-240,480,260,6,'#2b2f38',0)}
 X.restore()}
function lounge(t,o={}){proom(t,Object.assign({win:o.day?250:250,night:o.day?0:1,plant:o.day?140:0,lamp:o.day?0:0,frame:null,wall:o.day?'#f6e3c8':'#9fa8bf',wall2:o.day?'#ecc9a2':'#858fa8',curtain:'#7a9a6a',curtain2:'#5f7d52',floor:'#b48a64',floor2:'#8e6948'},o));
 if(o.day){glow(250,500,700,'255,230,170',.55)}}
// Filip's avatar for the chat header
function filipAv(x,y,r){circ(x,y,r,'#e8eef8',0);X.save();X.beginPath();X.arc(x,y,r,0,7);X.clip();circ(x,y+r*.25,r*.62,'#fff',4);
 X.fillStyle='#2f5fd0';for(let k=-2;k<=2;k++){X.beginPath();X.moveTo(x+k*r*.22-r*.14,y-r*.2);X.lineTo(x+k*r*.22,y-r*.62);X.lineTo(x+k*r*.22+r*.14,y-r*.2);X.fill()}X.restore()}
// accept card on his phone
function acceptCard(x,y,s,p,tap){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(s*k,s*k);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=18;
 rr(-250,-170,500,340,36,'#fff',6);X.shadowColor='transparent';avatar(-160,-90,46,0);
 X.font="800 40px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText('Memopai',-96,-104);X.font="500 28px Inter";X.fillStyle='#667781';X.fillText('wants to remind you',-96,-62);
 rr(-200,20,400,100,50,tap?'#1aa260':'#25d366',0);X.font="800 44px Inter";X.fillStyle='#fff';X.textAlign='center';X.fillText(tap?'Accepted ✓':'Accept',0,72);X.restore()}
const RENT="hey, sooo... rent? 😅";
function rentChat(r,full){NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const a3=full?0:1.15;
 phoneUI(540,880,1.22,r,{name:'Filip 🛋️',sub:'online',avf:filipAv,typing:0,list:[{a:0,date:'Sep 4'},{a:0,me:1,text:RENT,time:'21:40'},{a:0,date:'Oct 5'},{a:0,me:1,text:RENT,time:'21:52'},{a:0,date:'Nov 4'},{a:a3,me:1,text:RENT,time:'21:40'}]})}
// head centre of a standing sm()
const HD=(y,s)=>y-772*s;

// A: frame 1 = your chat with Filip: the same message every month
sh(0,(t,r)=>{rentChat(r,0);
 // typing dots in the input bar before the third send
 if(r<1.15){X.setTransform(1,0,0,1,0,0);X.save();X.translate(540,880);X.scale(1.22,1.22);X.font="600 30px Inter,'Noto Color Emoji'";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(RENT.slice(0,Math.floor(C(r/1.0)*RENT.length)),-230,582);X.restore()}
 if(r>1.15&&r<1.6){X.setTransform(1,0,0,1,0,0);impact((r-1.15)/.45)}});
// B: the lounge: he games on the beanbag, you stand with your phone
sh(T('f1')-.05,(t,r)=>{cam(560,1000,lerp(1.06,1.12,C(r/2.6)),t,.2);lounge(t);tv(860,1150,t);
 sm(280,1760,1.15,Object.assign({t,eyes:'open',lid:.35,brow:'flat',mouth:'flat',look:[.7,.1],armL:165,bendL:-150,holdL:(x,y)=>{rr(x-30,y-80,60,120,14,'#1b1b1f',5)},armR:20,bendR:20},YOU));
 const fx=640,fy=1830,fs=1.08;
 sm(fx,fy,fs,Object.assign({t,flip:0,eyes:r<1.0?'open':'happy',lid:.2,brow:'up',mouth:'open',talk:r<2.2?t:null,look:r<.8?[.8,0]:[-.6,0],tilt:-6,armL:60,bendL:-90,armR:70,bendR:-100,holdR:(x,y)=>pad(x-40,y-10,1.1)},MATE));
 headset(fx-Math.sin(-6*Math.PI/180)*0,HD(fy,fs),fs*.95);
 beanbag(fx,1800,1.0);
 label3('Your flatmate 🎮',C((r-.1)/.25))});
// C: you alone, grey, the flat's debt collector; Memopai hops in on "And you?"
sh(T('s1')+.25,(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/3.4)),t,.2);lounge(t,{wall:'#8d93a3',wall2:'#767c8c'});prain(t,.25,40);
 const mp=C((r-1.35)/.6);
 sm(380,1760,1.25,Object.assign({t,eyes:'open',lid:.45,brow:'sad',mouth:'wavy',sweat:mp<.5,look:mp>0?[.7,.3]:[.1,.4],tilt:-6,armL:10,bendL:10,armR:12,bendR:-10,holdR:(x,y)=>phoneH(x,y+10,.1,0)},YOU));
 // floating 'rent?' bubbles orbiting the head
 if(mp<.6){for(let k=0;k<3;k++){const a=t*1.4+k*2.1;X.save();X.globalAlpha=1-mp;X.translate(380+Math.cos(a)*260,HD(1760,1.25)+Math.sin(a)*120-80);X.scale(.85,.85);rr(-150,-45,300,90,30,'#d9fdd3',5);txt('rent? 😅',0,2,48,'#111',0,'700 ');X.restore()}}
 if(mp>0){memo(820,1720,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(820,1380,mp,10,240)}
 label3(mp>.3?'Memopai 😎':"The flat's debt collector 😩",C(r/.25))});
// D: one voice note on the sofa: the 🏠 thought flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.04,t,.2);lounge(t,{wall:'#b9b0c8',wall2:'#a097b3'});
 const talk=r>.3;
 sm(400,1640,1.18,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,talk)},YOU));
 psofa(500,1640,1.15);
 memo(830,1390,.95,{t,wave:0,glow:1});
 const fl=C((r-.4)/1.0);if(fl<1){const px=lerp(330,520,eo(fl)),py=lerp(560,930,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🏠',.95-fl*.45)}else sparkles(520,930,C((r-1.4)/.5),8,120,'#7cf0a0');
 label3('You, the 4th, 21:45 🎙️',C(r/.25))});
// E: the Memopai chat
sh(T('s2')+2.4,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.9&&r<1.2,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.9),dur:'0:05',time:'21:45'},{a:1.2,me:0,text:"✅ Filip · Every 1st, 09:00 · Rent's due 🏠",time:'21:45'}]})});
// F: split — your phone / HIS WhatsApp: he accepts once, grinning
sh(T('f3')-.05,(t,r)=>{split2(t,
  (t)=>{lounge(t,{wall:'#b9b0c8',wall2:'#a097b3'});sm(420,1640,1.1,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',look:[.6,.3],armR:60,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.1,1)},YOU));psofa(500,1640,1.1)},
  (t)=>{lounge(t);tv(980,1150,t);const fx=640,fy=1830,fs=1.0;
   sm(fx,fy,fs,Object.assign({t,flip:1,eyes:r>1.4?'happy':'open',brow:'up',mouth:r>.2?'grin':'o',talk:r>.2&&r<2.0?t:null,look:[-.4,.5],armR:60,bendR:-110,holdR:(x,y)=>phoneH(x,y,.1,1)},MATE));
   headset(fx,HD(fy,fs),fs*.95,1);beanbag(fx,1800,.95);
   acceptCard(560,660,.9,C((r-.15)/.3),r>1.2)},
  {camA:[540,1000,1.0],camB:[640,1000,1.0],p:C(r/.3)});
 label3(r<.15?'Your phone 📱':'His WhatsApp 📲',C(r/.25))});
// G: Dec 1st 09:00: buzz on HIS phone, he sends it
sh(T('s4'),(t,r)=>{cam(560,1000,1.06,t,.2);lounge(t,{day:1});tv(880,1150,t,0);
 const send=r>T('f2')-T('s4')-.1;const fx=560,fy=1830,fs=1.12;
 sm(fx,fy,fs,Object.assign({t,eyes:send?'happy':(r<.4?'closed':'wide'),brow:'up',mouth:send?'grin':(r<.4?'smile':'o'),talk:send&&r<T('f2')-T('s4')+1.2?t:null,look:[.2,.6],armR:send?70:40,bendR:send?-120:-110,holdR:(x,y)=>phoneH(x,y,-.12,r>.3),armL:send?150:30,bendL:send?-60:20},MATE));
 beanbag(fx,1800,1.02);
 if(!send){notif(150,r>.3?C((r-.3)/.3):0,'Memopai',"Rent's due today 🏠");if(r>.3){const s=Math.sin(t*60)*5;X.save();X.globalAlpha=.7;for(let k=1;k<3;k++)circ(fx+90+s,1180,50+k*26,null,5,'#25d366');X.restore()}}
 else{const q=r-(T('f2')-T('s4')-.1);sparkles(fx+120,1100,C(q/1.0),10,200,'#7cf0a0');label3('Your flatmate, Dec 1st 09:00 💸',C(q/.25))}});
// H: same lounge, sunny: you relaxed with coffee next to him, phone face down
sh(T('p1'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/4)),t,.15);lounge(t,{day:1});psun(250,420,40,t);
 sm(330,1640,1.15,Object.assign({t,eyes:r>1.2?'happy':'open',lid:.2,brow:'flat',mouth:'smile',blush:1,look:[.6,.1],tilt:4,armR:150,bendR:-150,holdR:(x,y)=>mug(x+10,y+40,t),armL:20,bendL:30},YOU));
 psofa(420,1640,1.1);rr(560,1452,130,24,8,'#1b1b1f',4);
 const fx=840,fy=1830,fs=1.0;sm(fx,fy,fs,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[-.6,0],armL:60,bendL:-90,armR:70,bendR:-100,holdR:(x,y)=>pad(x+30,y-10,1.0)},MATE));headset(fx,HD(fy,fs),fs*.95,1);beanbag(fx,1800,.9);
 sparkles(540,900,C((r-.5)/1.5),10,300);
 label3(r<1.6?'You, Dec 1st ☕':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: the chat with three identical messages
sh(1000,(t,r)=>{rentChat(5,1)});
