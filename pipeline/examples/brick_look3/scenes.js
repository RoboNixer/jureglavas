const YOU={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// tall fridge-freezer: freezer on top. o: openF (0..1 freezer door), openR (fridge door), frost
function fridge(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,240,26,0,0,7);X.fill();X.globalAlpha=1;
 rr(-200,-1000,400,1000,34,'#eef3f8',8);const g=X.createLinearGradient(-200,0,200,0);g.addColorStop(0,'rgba(255,255,255,.5)');g.addColorStop(1,'rgba(120,140,170,.18)');rr(-200,-1000,400,1000,34,g,0);
 line([[-196,-640],[196,-640]],7,O);
 const door=(top,h,p,inside)=>{if(p>0){rr(-180,top+16,360,h-32,18,inside,0);glow(0,top+h/2,260,'200,235,255',.5*p)}
   const w=400*(1-p*.85);X.save();rr(-200,top,w,h,30,'#f6f9fc',8);line([[-200+w-40,top+60],[-200+w-40,top+(h>500?260:220)]],14,'#9aa6b5');X.restore()};
 door(-1000,360,o.openF||0,'#bfe6ff');door(-640,640,o.openR||0,'#fff8e6');
 if(o.openF>.5){for(let k=0;k<3;k++)rr(-150+k*100,-900,80,60,10,'#e3f4ff',4)}
 if(o.openR>.5){line([[-170,-420],[170,-420]],6,'#c9d3dd');line([[-170,-200],[170,-200]],6,'#c9d3dd');rr(-130,-500,90,80,14,'#ffd36b',5);rr(40,-520,70,100,12,'#9ad48a',5)}
 if(o.frost){X.save();X.globalAlpha=.55;for(let k=0;k<14;k++){const a=rnd(k)*400-200,b=-1000+rnd(k+5)*360;txt('❄',a,b,30+rnd(k+2)*24,'#cfeaff',0,'400 ')}X.restore()}
 X.restore()}
// raw chicken: frozen = icy pale blue brick with frost; pack = in a tray
function chicken(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);X.rotate(o.rot||0);
 const fz=o.frozen,c=fz?'#efd6d0':(o.cooked?'#d98a3d':'#f2c9a8'),c2=fz?'#e2bcb3':(o.cooked?'#b5662a':'#e6ab88');
 if(o.tray)rr(-150,-10,300,70,20,'#f7f7f7',6);
 ell(0,-40,140,92,c,8);ell(-30,-80,60,24,'rgba(255,255,255,.4)',0);line([[-40,-20],[0,-6],[40,-20]],5,'rgba(0,0,0,.25)');
 for(const d of[-1,1]){X.save();X.translate(d*70,-80);X.rotate(d*.75);ell(0,-30,38,64,c2,7);circ(-12,-104,16,'#fffaf0',6);circ(12,-104,16,'#fffaf0',6);rr(-10,-104,20,26,6,'#fffaf0',0);X.restore()}
 if(fz){X.save();X.globalAlpha=.55;rr(-185,-175,370,250,26,'#cfeeff',0);X.restore();X.save();X.globalAlpha=.9;rr(-185,-175,370,250,26,null,7);X.strokeStyle='#ffffff';X.lineWidth=8;X.beginPath();X.moveTo(-160,-140);X.lineTo(-90,-150);X.moveTo(130,40);X.lineTo(160,0);X.stroke();
  for(let k=0;k<7;k++)txt('❄',-150+k*50,-150+(k%3)*95,30,'#ffffff',0,'400 ');X.restore()}
 if(o.cooked){X.save();X.globalAlpha=.25;ell(30,-70,50,18,'#fff',0);X.restore()}
 X.restore()}
function slice(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);path(()=>{X.moveTo(0,40);X.lineTo(-70,-110);X.quadraticCurveTo(0,-140,70,-110);X.closePath()},'#ffd36b',6);rr(-78,-130,156,30,14,'#d9953f',6);circ(-20,-70,14,'#e0533d',0);circ(22,-50,12,'#e0533d',0);circ(0,-10,10,'#e0533d',0);X.restore()}
function pbox(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-220,0);X.lineTo(220,0);X.lineTo(180,-60);X.lineTo(-180,-60);X.closePath()},'#d9b07a',7);path(()=>{X.moveTo(-180,-60);X.lineTo(180,-60);X.lineTo(140,-150);X.lineTo(-140,-150);X.closePath()},'#e8c58f',7);txt('PIZZA',0,-104,40,'#c0392b',0);X.restore()}
function pan(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);line([[90,0],[260,-30]],18,'#3a3a40');ell(0,0,130,40,'#2b2b30',7);ell(0,-6,108,28,'#4a4a52',0);chicken(0,18,.5,{cooked:1});
 for(let k=0;k<3;k++){const ph=(t*.7+k/3)%1;X.save();X.globalAlpha=.6*Math.sin(ph*Math.PI);line([[-50+k*50,-40-ph*200],[-40+k*50+Math.sin(t*3+k)*20,-90-ph*200]],12,'#ffffff');X.restore()}X.restore()}
function counter(x0,x1){rr(x0,1380,x1-x0,60,12,'#e9e2d6',7);rr(x0+10,1440,x1-x0-20,330,10,'#8fb7c9',7);for(let k=x0+40;k<x1-60;k+=220){rr(k,1470,180,270,12,'#a7c9d8',5);line([[k+70,1500],[k+110,1500]],10,'#5d7a88')}}
function kitchen(t,o={}){proom(t,Object.assign({win:330,frame:null,plant:0,lamp:0,wall:'#dfe9ef',wall2:'#c8d7e0',floor:'#b9a58c',floor2:'#93806a',curtain:'#7fb3d5',curtain2:'#5f93b5'},o));
 // tiles band
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore()}
function tvGlow(t,a=1){glow(980,1000,520,'120,170,255',(.35+.12*Math.sin(t*7))*a)}
function sofaYou(t,o,night){psofa(500,1640,1.15,night?'#4f5f9a':'#5a7fb5',night?'#3f4f86':'#4a6a9a')}
// A: 18:30, knock knock on the frozen brick
sh(0,(t,r)=>{cam(560,1020,lerp(1.1,1.16,C(r/2.8)),t,.15);kitchen(t,{win:300});counter(-200,560);fridge(820,1760,1.05,{openF:1,frost:1});glow(820,850,380,'190,230,255',.45);
 const kn=(r%0.5)<0.12&&r<1.4;
 sm(380,1760,1.25,Object.assign({t,eyes:r>1.6?'wide':'open',brow:'worried',mouth:r>1.6?'wavy':'frown',look:[.3,.5],sweat:r>1.8,
  armL:-25,bendL:105,armR:kn?55:75,bendR:kn?-95:-120,
  holdL:(x,y)=>{chicken(x+150,y+60,1.05,{frozen:1,rot:-.05})},holdR:(x,y)=>{if(kn){X.save();X.globalAlpha=.85;for(let k=1;k<3;k++)circ(x,y,30+k*26,null,5);X.restore()}}},YOU));
 label3('You at 18:30 🥶',C(r/.25))});
// B: last night's lie -> pizza #3 on the sofa
sh(T('s1'),(t,r)=>{cam(540,1020,1.04,t,.2);proom(t,{win:780,night:1,lamp:160,frame:[800,560],wall:'#c9b8d8',wall2:'#b5a2c8'});tvGlow(t,.6);
 sm(500,1600,1.18,Object.assign({t,eyes:'open',lid:.35,brow:'sad',mouth:'frown',look:[-.3,.2],tilt:-6,armR:60,bendR:-120,armL:20,bendL:30,
  holdR:(x,y)=>slice(x+20,y-20,1.25,.5)},YOU));sofaYou(t,{},1);pbox(820,1800,1.1);
 const cp=C((r-.6)/.4);chip(250,640,'🍗',eo(cp)*.9,Math.sin(t*3)*.12);if(cp>0)chip(320,560,'❄️',eo(cp)*.5);
 label3('You, pizza #3 🍕',C(r/.3))});
// C: greasy fingers, voice note, the thought leaves the head
sh(T('s3'),(t,r)=>{cam(540,1020,1.02,t,.2);proom(t,{win:780,night:1,lamp:160,frame:[800,560],wall:'#c9b8d8',wall2:'#b5a2c8'});tvGlow(t,.5);
 const talk=r>2.2;
 sm(440,1600,1.18,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.5,-.3],armR:40,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,r>1.4)},YOU));sofaYou(t,{},1);pbox(860,1800,1.0);
 const mp=C((r-.3)/.6);if(mp>0){memo(860,1500,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(860,1150,mp,10,240)}
 const fl=C((r-2.4)/1.2);if(fl<1){const hx=560,hy=960;const px=lerp(330,hx,eo(fl)),py=lerp(600,hy,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🍗',.9-fl*.5)}else sparkles(560,960,C((r-3.6)/.5),8,120,'#7cf0a0');
 label3(r<.5?'You, greasy fingers 🍕':'Memopai 😎',C(r/.25))});
// D: the voice note in WhatsApp
sh(T('y1')-.25,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#2a2350';X.fillRect(0,0,1080,1920);glow(540,900,700,'170,150,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.45&&r<1.75,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/1.25),dur:'0:04',time:'18:52'},{a:1.75,me:0,text:'Got it ✅ Every night at 22:00, I’ll remind you 🍗',time:'18:52'}]})});
// E: 22:00 mid-episode, snooze, it's back, freezer -> fridge
sh(T('s4'),(t,r)=>{const k2=r>2.9;
 if(!k2){cam(540,1020,1.02,t,.2);proom(t,{win:780,night:1,lamp:0,frame:[800,560],wall:'#9aa7cf',wall2:'#8290bd'});tvGlow(t,1.2);
  sm(470,1600,1.18,Object.assign({t,eyes:r<.3?'lid':'open',lid:.4,brow:'flat',mouth:(r>1.1&&r<1.6)?'o':'smile',talk:(r>1.1&&r<1.6)?t:null,look:[.3,.6],armR:40,bendR:-100,holdR:(x,y)=>phoneH(x,y,-.1,(r>.1&&r<1.2)||(r>2.0))},YOU));sofaYou(t,{},1);
  const n1=r<1.2?C((r-.1)/.3):Math.max(0,1-(r-1.2)/.25),n2=C((r-2.0)/.3);
  if(n1>0)notif(150,n1,'Memopai','Tomorrow’s dinner → fridge 🍗');if(n2>0)notif(150,n2,'Memopai','Tomorrow’s dinner → fridge 🍗');
  label3(r<1.8?'You, 22:00 📺':'You, 22:10 📺',C(r/.25),470)}
 else{const q=r-2.9;cam(560,1020,1.04,t,.2);kitchen(t,{night:1});counter(-200,420);fridge(760,1760,1.05,{openF:C(q/.4)*(q<1.1?1:Math.max(0,1-(q-1.1)/.3)),openR:C((q-1.0)/.3)});
  const into=q>1.2;sm(330,1760,1.22,Object.assign({t,eyes:'open',brow:'up',mouth:'smile',look:[.8,-.2],armR:into?80:110,bendR:into?-10:-40,walk:q<1.0?t:null,
   holdR:(x,y)=>chicken(x+70,y+20,.6,{tray:1,frozen:1})},YOU));if(q>1.4)sparkles(700,1100,C((q-1.4)/.6),10,200,'#7cf0a0');
  label3('You, 22:10 🍗',1)}});
// F: next day, cooking, sorted
sh(T('p1'),(t,r)=>{cam(560,1010,1.06,t,.15);kitchen(t,{wall:'#fbe9cf',wall2:'#f2d3ae',curtain:'#e98a6a',curtain2:'#cc6d50'});glow(330,520,700,'255,220,150',.5);counter(-200,1300);fridge(960,1760,.95,{});
 rr(470,1330,420,50,10,'#3a3a40',6);
 sm(330,1760,1.22,Object.assign({t,eyes:r>1.5?'happy':'open',brow:'flat',mouth:'smile',blush:1,look:[.7,.4],tilt:4,armR:70,bendR:-30,armL:20,bendL:10},YOU));
 pan(650,1300,1.0,t);sparkles(560,900,C((r-.2)/1.5),12,300);
 label3(r<2.2?'You, next day 😌':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,1020,1.14,t,.1);kitchen(t,{win:300});counter(-200,560);fridge(820,1760,1.05,{openF:1,frost:1});glow(820,850,380,'190,230,255',.45);
 sm(380,1760,1.25,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',look:[.3,.5],sweat:1,armL:-25,bendL:105,armR:55,bendR:-95,holdL:(x,y)=>chicken(x+150,y+60,1.05,{frozen:1,rot:-.05})},YOU))});
