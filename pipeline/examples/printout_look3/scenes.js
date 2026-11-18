const YOU={hair:'curl'},MOM={hair:'bun',hairc:'#b9b9c4',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
// printout(x,y,s,rot): A4 sheet with the delivery screenshot (x,y = bottom centre, held)
function printout(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=18;rr(-120,-330,240,330,10,'#fff',6);X.shadowColor='transparent';
 txt('📦',0,-262,70,'#111',0,'400 ');txt('Arriving',0,-180,34,'#555',0,'600 ');txt('Tue 29 Dec',0,-130,42,'#e53935',0,'900 ');
 for(let i=0;i<3;i++)rr(-90,-90+i*26,i==2?110:180,12,5,'#d5d9df',0);X.restore()}
// scarf(x,y,s,t): red striped knitted scarf hanging from two hands around (x,y)
function scarf(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);X.lineCap='round';
 for(const d of[-1,1]){const sw=Math.sin(t*2.4+d)*8;X.strokeStyle='#151515';X.lineWidth=82;X.beginPath();X.moveTo(d*70,0);X.quadraticCurveTo(d*80+sw,160,d*70+sw,320);X.stroke();
  X.strokeStyle='#d8343a';X.lineWidth=70;X.stroke();X.strokeStyle='#fff';X.lineWidth=70;X.setLineDash([16,44]);X.lineDashOffset=8;X.stroke();X.setLineDash([]);
  for(let k=-2;k<=2;k++){X.strokeStyle='#d8343a';X.lineWidth=8;X.beginPath();X.moveTo(d*70+sw+k*12,345);X.lineTo(d*70+sw+k*13,385);X.stroke()}}
 X.strokeStyle='#151515';X.lineWidth=82;X.beginPath();X.moveTo(-70,0);X.quadraticCurveTo(0,-40,70,0);X.stroke();X.strokeStyle='#d8343a';X.lineWidth=70;X.stroke();X.restore()}
// laptop on the lap; scr: 'cart' | 'buy' | 'done'
function lap(x,y,s=1,scrn='cart',p=1){X.save();X.translate(x,y);X.scale(s,s);
 path(()=>{X.moveTo(-190,0);X.lineTo(190,0);X.lineTo(215,22);X.lineTo(-215,22);X.closePath()},'#9aa3ad',6);rr(-170,-250,340,240,16,'#3b4250',7);rr(-152,-234,304,206,8,'#fff',0);
 rr(-152,-234,304,40,8,'#f2a65a',0);txt('🛒 shop',-80,-213,24,'#fff',0,'800 ');
 if(scrn=='done'){X.globalAlpha=C(p*2);circ(0,-130,46,'#25d366',0);txt('✓',0,-128,56,'#fff',0,'900 ');txt('Order placed',0,-60,30,'#151515',0,'800 ');X.globalAlpha=1}
 else{X.save();X.translate(-90,-110);X.scale(.42,.42);scarf(0,-120,1,0);X.restore();txt('Scarf',40,-150,28,'#151515',0,'800 ');txt('€29',40,-110,28,'#e53935',0,'800 ');
  rr(-20,-80,130,40,20,scrn=='buy'?'#25d366':'#ffd23f',0);txt(scrn=='buy'?'Buy ✓':'Buy',45,-60,24,'#151515',0,'800 ')}
 X.restore()}
// wall calendar with a flipping page
function wallcal(x,y,s,lab,flip=0){X.save();X.translate(x,y);X.scale(s,s);rr(-110,-130,220,260,16,'#fff',6);rr(-110,-130,220,64,16,'#e53935',6);circ(-50,-130,10,'#555',0);circ(50,-130,10,'#555',0);
 const [m,d]=lab.split(' ');txt(m,0,-98,34,'#fff',0,'900 ');txt(d,0,30,110,'#151515',0,'900 ');
 if(flip>0&&flip<1){X.save();X.transform(1,0,0,1-flip,0,-66*flip);rr(-110,-66,220,196,10,'#f4f4f4',6);X.restore()}X.restore()}
function lroom(t,o={}){proom(t,{win:o.win||760,night:0,frame:null,plant:o.plant?1:0,lamp:o.lamp?1:0,wall:o.wall||'#f2dcc0',wall2:o.wall2||'#e2c19e'});
 if(o.xmas){strlights(t,200,4,70);pblur(1,()=>xtree(o.tx||900,1380,1.15,t));bokeh(t,'255,214,150',8,150,800);glow(540,520,700,'255,205,150',.22)}}
// A: Mom holds up the printout (also the cover)
function shotA(t,r,cov){cam(540,1040,lerp(1.04,1.1,C(r/3)),t,.14);lroom(t,{xmas:1,tx:960});
 const up=cov?1:C((r-.3)/.4);
 gift(230,1780,.95,{col:'#4a8fe0'});
 sm(380,1800,1.16,Object.assign({t,eyes:'open',lid:up>.5?.4:0,brow:up>.5?'flat':'up',mouth:up>.5?'flat':'smile',look:up>.5?[.6,-.2]:[0,.6],armR:lerp(40,145,up),bendR:lerp(60,-140,up),armL:35,bendL:40,
  holdR:(x,y)=>printout(x+10,y+40,lerp(.7,1.15,up),-.08)},MOM));
 sm(790,1820,1.18,Object.assign({t,flip:1,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[-.6,-.3],armL:25,armR:25,tilt:-4},YOU));
 if(!cov)label3('You, Christmas morning 😬',C(r/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: close on Mom
sh(T('f1')-.05,(t,r)=>{cam(500,980,lerp(1.1,1.15,C(r/2)),t,.14);lroom(t,{xmas:1,tx:980});
 sm(420,1800,1.32,Object.assign({t,eyes:'open',lid:.45,brow:r>1?'up':'flat',mouth:'flat',talk:r<1.8?t:null,look:[.7,-.1],armR:145,bendR:-140,armL:30,bendL:30,holdR:(x,y)=>printout(x+10,y+40,1.2,-.08)},MOM));
 pblur(1,()=>sm(940,1860,.85,Object.assign({t,flip:1,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[-.7,-.2]},YOU)));
 label3('Mom 🙃',C(r/.2))});
// C: REWIND November: sofa, laptop with the scarf in the basket; calendar flips week after week
const WEEKS=['NOV 2','NOV 9','NOV 16','NOV 23','NOV 30','DEC 7','DEC 14','DEC 21'];
sh(T('s1')-.05,(t,r)=>{cam(540,1030,1.05,t,.14);lroom(t,{plant:1,lamp:1});
 const k=Math.min(WEEKS.length-1,Math.floor(Math.max(0,r-.6)/.55)),fl=(Math.max(0,r-.6)/.55)%1;
 wallcal(250,700,1.1,WEEKS[k],k<WEEKS.length-1?C((fl-.7)/.3):0);
 const late=k>=5;
 sm(560,1960,1.25,Object.assign({t,eyes:late?'open':'happy',lid:late?0:.2,brow:late?'worried':'up',mouth:late?'wavy':'smile',sweat:late&&r>4,look:late?[-.7,-.6]:[.2,.6],armR:110,bendR:-40,armL:110,bendL:40},YOU));
 psofa(540,1900,1.3);lap(560,1560,1,'cart');
 const hy=1960-767*1.25,a=t*1.6;chip(560+Math.cos(a)*300,hy-60+Math.sin(a)*90,'🎁',eo(C((r-3)/.3))*.85);
 rewind(1-C(r/.5),t,'◀◀ NOVEMBER');
 if(r>.45)label3(r<3.1?'You, in November 🛋️':'Your brain 🫠',C((r<3.1?r-.45:r-3.1)/.2))});
// D: right there on the sofa: mascot hops on the arm, voice note, the 🎁 flies into the phone
sh(T('s2')-.05,(t,r)=>{cam(560,1030,1.07,t,.14);lroom(t,{plant:1,lamp:1});
 const mp=C(r/.6),vn=r>.7;
 sm(520,1960,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:vn?(Math.sin(t*14)>0?'open':'smile'):'o',look:[.5,.2],armR:150,bendR:-160,holdR:(x,y)=>phoneH(x,y,.3,1),armL:110,bendL:40},YOU));
 psofa(540,1900,1.3);lap(520,1560,.9,'cart');
 memo(905,1540,.9,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(905,1250,mp,8,180);
 const hy=1960-767*1.25,fl=C((r-.9)/1.0);if(fl<1){const px=lerp(820,650,eo(fl)),py=lerp(hy-120,hy+240,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🎁',1-fl*.5)}else sparkles(650,hy+240,C((r-1.9)/.5),8,120,'#7cf0a0');
 label3('Memopai 👋',C(r/.2))});
// E: WhatsApp chat
sh(T('s2')+2.5,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r+.6,{typing:r>.45&&r<.75,list:[{a:.05,me:1,voice:1,pl:C((r+.5)/1.4),dur:'0:04',time:'21:14'},{a:1.35,me:0,text:'Got it ✅ Tue 1 Dec, 10:00 · Payday 💸 Order Mom\'s present 🎁',time:'21:14'}]})});
// F: December 1st, payday: buzz, two taps, ordered
sh(T('s3')-.05,(t,r)=>{cam(540,1030,lerp(1.04,1.1,C(r/3)),t,.14);lroom(t,{plant:1,lamp:0,wall:'#f6e3c8'});
 const bz=r>1.75,buy=r>2.45,done=r>2.8;
 wallcal(250,700,1.1,'DEC 1',0);
 sm(540,1960,1.25,Object.assign({t,eyes:bz&&!buy?'wide':(done?'happy':'open'),brow:'up',mouth:done?'grin':(bz?'o':'smile'),look:buy?[0,.7]:[.5,.3],armR:buy?110:150,bendR:buy?-40:-160,holdR:buy?null:((x,y)=>phoneH(x,y,.3,bz)),armL:110,bendL:40},YOU));
 psofa(540,1900,1.3);lap(540,1560,1,done?'done':(buy?'buy':'cart'),C((r-2.8)/.3));
 if(done)sparkles(540,1300,C((r-2.8)/.6),10,200,'#7cf0a0');
 const n=r<2.4?C((r-1.75)/.3):Math.max(0,1-(r-2.4)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Payday 💸 Order Mom\'s present 🎁'));
 if(n<=0)label3('You, 1 Dec 💸',C(r/.2))});
// G: same Christmas morning: real scarf
sh(T('f2')-.05,(t,r)=>{const p1=r>T('p1')-T('f2');cam(540,1040,lerp(1.04,1.1,C(r/4.5)),t,.14);lroom(t,{xmas:1,tx:960});
 gift(230,1780,.95,{col:'#4a8fe0'});
 sm(380,1800,1.16,Object.assign({t,eyes:'happy',brow:'up',mouth:p1?'grin':'open',talk:!p1&&r<1.1?t:null,blush:1,look:[.5,0],armR:150,bendR:-150,armL:150,bendL:150},MOM));
 scarf(380,1800-767*1.16+300,1,t);
 sm(790,1820,1.18,Object.assign({t,flip:1,eyes:p1?'happy':'open',brow:'up',mouth:p1?'grin':'smile',blush:p1,look:[-.6,0],armL:p1?150:25,bendL:p1?-30:20,armR:25},YOU));
 chip(560,600,'❤️',eo(C((r-.3)/.3))*.85,Math.sin(t*3)*.1);
 if(p1){psnow(t,.5,60);sparkles(380,1300,C((r-(T('p1')-T('f2')))/1.2),10,220)}
 label3(p1?'You, sorted 😌':'Mom 🥹',C((p1?r-(T('p1')-T('f2')):r)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,1.6,1));
