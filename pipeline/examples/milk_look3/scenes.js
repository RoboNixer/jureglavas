const YOU={hair:'curl'};let SP=[700,1150];
function spout(x,y,s,rot){const lx=0,ly=-140*s;SP=[x+lx*Math.cos(rot)-ly*Math.sin(rot),y+lx*Math.sin(rot)+ly*Math.cos(rot)]}
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// milk carton (gable top), drawn around its centre; rot in radians (tip it to pour)
function carton(x,y,s=1,rot=0,o={}){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);
 rr(-60,-70,120,190,10,'#ffffff',6);rr(-60,10,120,70,0,'#4da3e6',0);rr(-60,-70,120,190,10,null,6);
 path(()=>{X.moveTo(-60,-70);X.lineTo(0,-130);X.lineTo(60,-70);X.closePath()},'#f2f6fb',6);rr(-14,-150,28,24,4,'#f2f6fb',5);
 txt('MILK',0,-20,34,'#2a6fb0',0);txt('🐄',0,46,40,'#fff',0,'400 ');X.restore()}
// cereal bowl on a surface at (x,y); fill 0 = dry flakes, 1 = milk
function bowl(x,y,s=1,fill=0){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,6,170,20,0,0,7);X.fill();X.globalAlpha=1;
 if(fill>0){ell(0,-110,150,30,'#fbfbf6',0)}
 for(let k=0;k<11;k++){const a=-130+k*26,b=-118-((k*37)%5)*6-fill*6;ell(a,b,22,12,'#e8a94a',4)}
 path(()=>{X.moveTo(-160,-110);X.quadraticCurveTo(-150,0,0,0);X.quadraticCurveTo(150,0,160,-110);X.closePath()},'#e8605a',7);
 line([[-120,-60],[120,-60]],6,'rgba(255,255,255,.55)');X.restore()}
function counter(x0,x1){rr(x0,1380,x1-x0,60,12,'#e9e2d6',7);rr(x0+10,1440,x1-x0-20,330,10,'#8fb7c9',7);for(let k=x0+40;k<x1-60;k+=220){rr(k,1470,180,270,12,'#a7c9d8',5);line([[k+70,1500],[k+110,1500]],10,'#5d7a88')}}
function kitchen(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:0,lamp:0,wall:'#dfe9ef',wall2:'#c8d7e0',floor:'#b9a58c',floor2:'#93806a',curtain:'#7fb3d5',curtain2:'#5f93b5'},o));
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore();wclockK(250,470,.9,7,14)}
function wclockK(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
// corner shop street; o.dusk (evening light), o.lit (shop lights on)
function shopStreet(t,o={}){const sk=X.createLinearGradient(0,-400,0,1300);if(o.dusk){sk.addColorStop(0,'#3b3f78');sk.addColorStop(.6,'#c7708a');sk.addColorStop(1,'#f6b26b')}else{sk.addColorStop(0,'#7fb8e8');sk.addColorStop(1,'#f6d7a6')}X.fillStyle=sk;X.fillRect(-3000,-3000,8000,4400);
 // neighbour buildings (blurred)
 pblur(3,()=>{rr(-300,200,420,1200,0,o.dusk?'#6b5a7a':'#c9b29a',0);rr(940,120,500,1300,0,o.dusk?'#5a4f6e':'#b8a08a',0);for(let k=0;k<4;k++){rr(-220+k%2*160,320+Math.floor(k/2)*260,110,150,6,o.dusk?'#ffd98a':'#dfeaf2',0);rr(1000+k%2*160,260+Math.floor(k/2)*260,110,150,6,o.dusk?'#ffd98a':'#dfeaf2',0)}});
 // shop facade
 rr(100,330,880,1000,0,'#b5654a',7);for(let r=0;r<16;r++)line([[100,360+r*60],[980,360+r*60]],2,'rgba(0,0,0,.12)');
 rr(160,400,760,150,18,'#2f7d5a',7);txt('CORNER SHOP',540,476,64,'#fff',0);
 for(let k=0;k<8;k++){path(()=>{X.moveTo(130+k*103,560);X.lineTo(233+k*103,560);X.lineTo(223+k*103,660);X.lineTo(140+k*103,660);X.closePath()},k%2?'#ffffff':'#e0533d',5)}
 rr(170,690,500,520,10,o.lit?'#fff3c4':'#cfe4ee',7);if(o.lit)glow(420,950,420,'255,230,150',.55);
 for(let s=0;s<3;s++){line([[180,840+s*130],[660,840+s*130]],8,'#8a6a4a');for(let k=0;k<6;k++)rr(200+k*76,780+s*130,52,58,6,['#4da3e6','#ffd36b','#9ad48a','#e86a5a'][(k+s)%4],4)}
 carton(420,780,.55);
 rr(710,690,220,640,10,'#3a3f48',7);circ(890,1010,10,'#ffd36b',0);
 // pavement
 const fg=X.createLinearGradient(0,1330,0,2000);fg.addColorStop(0,o.dusk?'#9b93a8':'#c9c4bb');fg.addColorStop(1,o.dusk?'#6f6880':'#a49e95');X.fillStyle=fg;X.fillRect(-3000,1330,8000,3000);
 X.strokeStyle='rgba(0,0,0,.12)';X.lineWidth=3;for(let k=-6;k<=6;k++){X.beginPath();X.moveTo(540+k*90,1330);X.lineTo(540+k*400,2000);X.stroke()}
 if(o.dusk){X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(120,100,170,.18)';X.fillRect(-3000,-3000,8000,8000);X.restore()}}

// A: 07:14, one drop
sh(0,(t,r)=>{cam(600,1010,lerp(1.1,1.16,C(r/3.5)),t,.15);kitchen(t);
 const tip=eo(C((r-.05)/.4)),sad=r>1.3;
 sm(300,1760,1.28,Object.assign({t,eyes:sad?'open':'open',lid:sad?.45:.1,brow:sad?'sad':'up',mouth:sad?'wavy':'o',look:[.5,.6],sweat:r>2.2,
  armR:95,bendR:-35,holdR:(x,y)=>{const ro=lerp(.2,2.3,tip);carton(x+40,y-40,1.3,ro);spout(x+40,y-40,1.3,ro)},armL:15,bendL:30},YOU));
 counter(-200,1300);
 const bx=SP[0],dy=C((r-.6)/.6);bowl(bx,1390,1,0);
 if(r>.6&&r<1.2){circ(bx,lerp(SP[1]+10,1275,dy*dy),22,'#fbfbf6',4)}
 if(r>1.15&&r<1.7){X.save();X.globalAlpha=1-C((r-1.15)/.55);ell(bx,1278,34*C((r-1.15)/.2)+6,9,'#fbfbf6',3);X.restore()}
 label3('You at 07:14 🥣',C(r/.25),300)});
// B: last night, walking past the shop
sh(T('s1'),(t,r)=>{cam(540,1000,1.04,t,.2);shopStreet(t,{dusk:1,lit:1});
 const x=lerp(250,820,C(r/3.4));
 sm(x,1780,1.22,Object.assign({t,walk:t,eyes:'open',lid:.3,brow:'flat',mouth:r<1.6?'smile':'smirk',talk:r>.3&&r<1.5?t:null,look:[.3,.7],
  armR:40,bendR:-115,holdR:(hx,hy)=>phoneH(hx,hy,-.12,1)},YOU));
 label3('You, last night 🙃',C(r/.25))});
// C: your brain: the milk floats away; then Memopai brings a time
sh(T('s2'),(t,r)=>{cam(540,900,lerp(1.18,1.24,C(r/4.9)),t,.15);kitchen(t,{wall:'#e6dff0',wall2:'#d2c7e2'});
 const late=r>2.3;
 sm(400,1760,1.3,Object.assign({t,eyes:late?'open':'open',lid:late?0:.2,brow:late?'up':'worried',mouth:late?'smile':'frown',look:late?[.8,-.4]:[.5,-.7],armL:15,bendL:25,armR:15,bendR:25},YOU));
 const f=C(r/2.2);chip(lerp(560,740,f),lerp(600,520,f),'🥛',1-.1*f,Math.sin(t*2)*.15);
 if(r<2.3){X.save();X.globalAlpha=.9*f;for(let k=0;k<3;k++)circ(500+k*45,600-k*40,10+k*6,'#fff',4);X.restore()}
 if(late){const mp=C((r-2.3)/.6);memo(830,1500,.95,{t,wave:1,hop:mp,glow:1});chip(lerp(830,760,eo(C((r-2.6)/.5))),lerp(1100,520,eo(C((r-2.6)/.5))),'⏰',.95*C((r-2.5)/.3));if(mp<1)sparkles(830,1150,mp,10,240)}
 label3(late?'Memopai 😎':'Your brain 🫠',C(late?(r-2.3)/.25:r/.25))});
// D: spoon in hand, just say it; the 🥛 thought flies into the phone
sh(T('s3'),(t,r)=>{cam(540,1000,1.05,t,.2);kitchen(t);
 const talk=r>1.4;
 sm(380,1760,1.26,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.7,0],
  armR:45,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,r>.9),armL:-30,bendL:95,holdL:(x,y)=>{line([[x,y],[x+10,y-120]],10,'#c9ced6');ell(x+12,y-140,22,30,'#c9ced6',5)}},YOU));
 counter(-200,1300);bowl(640,1390,.9,0);
 memo(910,1390,.85,{t,wave:1,hop:C(r/.5),glow:1});
 const fl=C((r-1.0)/1.1);if(fl<1){const px=lerp(330,480,eo(fl)),py=lerp(560,1000,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🥛',.9-fl*.5)}else sparkles(480,1000,C((r-2.1)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.25))});
// E: the voice note in WhatsApp
sh(T('y1')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.5&&r<1.8,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/2.0),dur:'0:03',time:'07:15'},{a:1.8,me:0,text:'✅ Today 17:30 · Buy milk 🥛',time:'07:15'}]})});
// F: 17:30 leaving work, buzz, shop right there -> milk in hand
sh(T('s4'),(t,r)=>{cam(540,1000,1.04,t,.2);shopStreet(t,{dusk:0,lit:1});
 const buzz=r>.3,got=r>1.9;
 sm(got?560:300,1780,1.22,Object.assign({t,walk:buzz&&!got?null:null,eyes:buzz&&r<1.2?'wide':(got?'happy':'open'),brow:buzz?'up':'flat',mouth:got?'grin':(buzz?'o':'smile'),look:got?[.2,.2]:[.4,.6],
  armR:got?120:35,bendR:got?-40:-115,holdR:(x,y)=>{if(!got)phoneH(x,y,-.12,buzz);else carton(x+10,y-60,.9,.1)}},YOU));
 if(!got)notif(150,buzz?C((r-.3)/.3):0,'Memopai','Buy milk 🥛 (leaving work)');
 if(got&&r<2.6)sparkles(620,1000,C((r-1.9)/.6),8,160);
 label3(got?'You, 17:34 🥛':'You at 17:30 📲',C(got?(r-1.9)/.25:r/.25),got?300:470)});
// G: next morning, actual milk
sh(T('p1'),(t,r)=>{cam(600,1010,lerp(1.05,1.1,C(r/4)),t,.15);kitchen(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,650,'255,225,160',.55);
 const pour=C((r-.2)/1.6);
 sm(300,1760,1.28,Object.assign({t,eyes:r>2?'happy':'open',brow:'flat',mouth:'grin',blush:1,look:[.5,.6],tilt:3,
  armR:95,bendR:-35,holdR:(x,y)=>{const ro=lerp(.2,2.3,eo(C(r/.4)));carton(x+40,y-40,1.3,ro);spout(x+40,y-40,1.3,ro)},armL:15,bendL:30},YOU));
 counter(-200,1300);const bx=SP[0];bowl(bx,1390,1,pour);
 if(r>.35&&r<1.9){X.save();X.strokeStyle='#fbfbf6';X.lineWidth=26;X.lineCap='round';X.beginPath();X.moveTo(SP[0],SP[1]+5);X.lineTo(bx,1270);X.stroke();X.restore()}
 sparkles(bx,1150,C((r-1.8)/1.2),10,220);
 label3(r<1.8?'You, next 07:14 ☀️':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(600,1010,1.14,t,.1);kitchen(t);
 sm(300,1760,1.28,Object.assign({t,eyes:'open',lid:.45,brow:'sad',mouth:'wavy',look:[.5,.6],sweat:1,armR:95,bendR:-35,holdR:(x,y)=>{carton(x+40,y-40,1.3,2.3);spout(x+40,y-40,1.3,2.3)},armL:15,bendL:30},YOU));
 counter(-200,1300);bowl(SP[0],1390,1,0);circ(SP[0],(SP[1]+1270)/2,22,'#fbfbf6',4)});
