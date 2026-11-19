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
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore();wclockK(250,470,.9,o.h||7,o.m==null?40:o.m)}
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
 catbag(420,800,.5);
 rr(710,690,220,640,10,'#3a3f48',7);circ(890,1010,10,'#ffd36b',0);
 // pavement
 const fg=X.createLinearGradient(0,1330,0,2000);fg.addColorStop(0,o.dusk?'#9b93a8':'#c9c4bb');fg.addColorStop(1,o.dusk?'#6f6880':'#a49e95');X.fillStyle=fg;X.fillRect(-3000,1330,8000,3000);
 X.strokeStyle='rgba(0,0,0,.12)';X.lineWidth=3;for(let k=-6;k<=6;k++){X.beginPath();X.moveTo(540+k*90,1330);X.lineTo(540+k*400,2000);X.stroke()}
 if(o.dusk){X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(120,100,170,.18)';X.fillRect(-3000,-3000,8000,8000);X.restore()}}

function ham(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);ell(0,0,70,48,'#f7a3b0',6);ell(-10,-6,40,24,'#fbc3cc',0);ell(26,14,14,9,'#fff0f2',0);X.restore()}
const NIGHT={night:1,lamp:0,wall:'#dfe9ef',wall2:'#c8d7e0',h:9,m:47};
// A: 21:47, empty bowl, cat yowls then glares; you offer ham
sh(0,(t,r)=>{cam(560,1080,lerp(1.1,1.16,C(r/4.2)),t,.15);kitchen(t,NIGHT);glow(860,1250,520,'255,214,150',.25);
 const glare=r>1.6;
 sm(270,1760,1.2,Object.assign({t,eyes:'open',lid:glare?.15:0,brow:'worried',mouth:glare?'wavy':'o',sweat:glare,look:[.8,.5],armR:70,bendR:-20,holdR:(x,y)=>ham(x+30,y,1,-.3),armL:20,bendL:30},YOU));
 counter(470,1400);catbowl(600,1390,.85,0);
 cat3(840,1392,1.08,{t,mouth:glare?'flat':'meow',lid:glare?.5:0,brow:glare?'angry':null,eyes:glare?'open':'wide',look:glare?[-.9,-.1]:[-.3,.3]});
 label3('You at 21:47 😬',C(r/.25),300)});
// B: 07:40 this morning: last pouch, "after work"
sh(T('s1'),(t,r)=>{cam(560,1060,1.06,t,.15);kitchen(t,{h:7,m:40,wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,650,'255,225,160',.45);
 const talk=r>.9&&r<2.6;
 sm(330,1760,1.22,Object.assign({t,eyes:'open',lid:.15,brow:'flat',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,.4],armR:60,bendR:-40,holdR:(x,y)=>pouch(x+20,y-30,1,.5,{open:1}),armL:-20,bendL:60},YOU));
 catbowl(680,1770,1,1);cat3(860,1770,1.0,{t,eyes:'happy',mouth:'smile',look:[-.5,.4]});
 label3('You, 07:40 🙃',C(r/.25))});
// C: night, sofa, the stare
sh(T('s2'),(t,r)=>{cam(540,1160,lerp(1.08,1.16,C(r/2.4)),t,.12);proom(t,{win:780,night:1,frame:null,plant:0,lamp:180,wall:'#e9d3bd',wall2:'#d4b394'});
 sm(430,1960,1.22,Object.assign({t,eyes:'open',lid:.3,brow:'worried',mouth:'wavy',sweat:r>1,look:[.9,-.2],armR:20,bendR:40,armL:20,bendL:40},YOU));psofa(500,2010,1.3,'#5a7fb5','#4a6a9a');
 cat3(880,1590,.95,{t,lid:.55,brow:'angry',mouth:'flat',look:[-1,0]});
 label3('Her, all night 😾',C(r/.25))});
// D: next time: last pouch in hand, tell Memopai; the 🐟 leaves your head
sh(T('s3'),(t,r)=>{cam(540,1000,1.05,t,.2);kitchen(t,{h:7,m:40,wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,650,'255,225,160',.4);
 const talk=r>2.6;
 sm(360,1760,1.24,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.7,0],
  armR:45,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,r>1.2),armL:-25,bendL:80,holdL:(x,y)=>pouch(x-10,y-40,.8,-.2,{open:1})},YOU));
 memo(860,1560,.95,{t,wave:1,hop:C(r/.5),glow:1});if(r<.6)sparkles(860,1250,C(r/.6),10,220);
 const fl=C((r-1.2)/1.2);if(fl<1){const px=lerp(330,520,eo(fl)),py=lerp(520,980,eo(fl))-Math.sin(fl*Math.PI)*140;chip(px,py,'🐟',.95-fl*.45)}else sparkles(520,980,C((r-2.4)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.25))});
// E: the voice note
sh(T('y1')-.15,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.6&&r<1.9,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/2.2),dur:'0:03',time:'07:40'},{a:1.9,me:0,text:'✅ Today 17:30 · Buy cat food 🐟',time:'07:40'}]})});
// F: 17:30 buzz outside the shop -> bag of cat food
sh(T('s4'),(t,r)=>{cam(540,1000,1.04,t,.2);shopStreet(t,{dusk:1,lit:1});
 const buzz=r>.25,got=r>1.55;
 sm(got?560:300,1780,1.22,Object.assign({t,eyes:buzz&&r<1.0?'wide':(got?'happy':'open'),brow:buzz?'up':'flat',mouth:got?'grin':(buzz?'o':'smile'),look:got?[.2,.2]:[.4,.6],
  armR:got?110:35,bendR:got?-40:-115,holdR:(x,y)=>{if(!got)phoneH(x,y,-.12,buzz);else catbag(x+10,y-40,.85)}},YOU));
 if(!got)notif(150,buzz?C((r-.25)/.3):0,'Memopai','Buy cat food 🐟 (on your way home)');
 if(got&&r<2.2)sparkles(620,1000,C((r-1.55)/.6),8,160);
 if(got)label3('You, 17:34 🐟',C((r-1.55)/.25),300)});
// G: same 21:47, full bowl, cat on your lap
sh(T('p1'),(t,r)=>{cam(540,1260,lerp(1.05,1.1,C(r/4.4)),t,.12);proom(t,{win:780,night:1,frame:[300,560],plant:0,lamp:180,wall:'#f3dcc4',wall2:'#e6c3a3'});glow(540,1200,800,'255,214,150',.35);
 sm(470,1960,1.22,Object.assign({t,eyes:'happy',brow:'flat',mouth:'smile',blush:1,look:[.3,.5],tilt:3,armR:-10,bendR:70,armL:10,bendL:-70},YOU));psofa(500,2010,1.3,'#5a7fb5','#4a6a9a');
 cat3(560,1600,.92,{t,curl:1,eyes:'closed',mouth:'smile',purr:1});
 catbowl(920,1880,.9,1);
 label3(r<1.6?'Same 21:47 🌙':'You, sorted 😌',C(r<1.6?r/.25:(r-1.6)/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,1080,1.14,t,.1);kitchen(t,NIGHT);glow(860,1250,520,'255,214,150',.25);
 sm(270,1760,1.2,Object.assign({t,eyes:'open',lid:.15,brow:'worried',mouth:'wavy',sweat:1,look:[.8,.5],armR:70,bendR:-20,holdR:(x,y)=>ham(x+30,y,1,-.3),armL:20,bendL:30},YOU));
 counter(470,1400);catbowl(600,1390,.85,0);cat3(840,1392,1.08,{t,mouth:'flat',lid:.5,brow:'angry',look:[-.9,-.1]})});
