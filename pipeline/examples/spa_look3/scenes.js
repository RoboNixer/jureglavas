const YOU={hair:'curl'};
const SIS={hair:'bun',hairc:'#7a4cc9',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// voucher(): the spa gift voucher, blown up like a prop card; o.exp = red EXPIRED stamp (0..1), o.rot
function voucher(x,y,s,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=24;
 rr(-260,-160,520,320,30,'#ffe3ef',6);X.shadowColor='transparent';X.fillStyle='#f48fb1';X.fillRect(-260,-160+20,40,280);
 X.setLineDash([10,10]);X.strokeStyle='#e06a97';X.lineWidth=4;X.beginPath();X.moveTo(-200,-130);X.lineTo(-200,130);X.stroke();X.setLineDash([]);
 txt('🧖 SPA DAY',30,-78,52,'#7a2050',0,'800 ');txt('GIFT VOUCHER',30,-18,32,'#b04a7a',0,'700 ');
 txt('Valid until 31 Oct',30,62,36,'#444',0,'600 ');txt('Happy birthday! ♥',30,112,26,'#b04a7a',0,'500 ');
 const e=o.exp||0;if(e>0){const k=1+(1-eo(e))*1.4;X.save();X.globalAlpha=C(e*1.5);X.translate(30,10);X.rotate(-.22);X.scale(k,k);X.strokeStyle='#e5484d';X.lineWidth=10;rr(-180,-56,360,112,18,'transparent',10);X.strokeRect(-180,-56,360,112);txt('EXPIRED',0,8,84,'#e5484d',0,'900 ');X.restore()}
 X.restore()}
function envelope(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-80,-52,160,104,10,'#ffe3ef',5);X.strokeStyle='#151515';X.lineWidth=5;X.beginPath();X.moveTo(-78,-50);X.lineTo(0,10);X.lineTo(78,-50);X.stroke();circ(0,10,12,'#e5484d',0);X.restore()}
// dresser with an open, messy drawer
function dresser(x,y,s=1,open=1){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,230,.25);rr(-220,-560,440,560,18,'#c98a5a',7);
 for(let k=0;k<3;k++){rr(-196,-530+k*170,392,150,12,'#b5774a',5);circ(0,-455+k*170,12,'#6b4428',0)}
 const o=open*90;rr(-210,-560+o-60,420,150,10,'#d79a68',7);X.fillStyle='#8a5a36';X.fillRect(-190,-560+o-56,380,30);
 // clutter peeking out
 X.lineWidth=8;X.strokeStyle='#222';X.beginPath();X.moveTo(-150,-560+o-60);X.bezierCurveTo(-120,-640+o,-60,-600+o,-40,-650+o);X.stroke();
 rr(20,-640+o,70,110,8,'#ffd23f',5);rr(110,-610+o,60,90,8,'#7cc6ff',5);rr(-110,-615+o,80,60,8,'#fff',5);
 X.restore()}
function lroom(t,day,rain){proom(t,{win:300,night:!day,rain:rain,wall:day?'#f9e2c8':'#8e9fc6',wall2:day?'#efc9a1':'#7385b2',curtain:day?'#e98a6a':'#5a6fc0',curtain2:day?'#cc6d50':'#41539e',plant:day?880:0,lamp:day?0:860,frame:[600,520]});
 if(day){glow(300,500,700,'255,240,190',.55)}else glow(860,700,450,'255,200,130',.35)}
function youSofa(t,o,phone){sm(470,1960,1.25,Object.assign({t},YOU,phone?{armR:150,bendR:-150,holdR:phone}:{},o));psofa(540,1900,1.3)}
function xroom(t){proom(t,{win:780,night:1,wall:'#c9a98e',wall2:'#a98a72',curtain:'#b03a3a',curtain2:'#8a2a2a',lamp:0,frame:[420,520]});glow(260,1000,560,'255,200,130',.4);xtree(230,1330,.95,t);gift(330,1330,.5,{col:'#e5484d'});gift(140,1340,.42,{col:'#4a8fe0'})}
// spa: teal tiles, plant, candles, white lounger
function spa(t){NOFX=0;const g=X.createLinearGradient(0,0,0,1500);g.addColorStop(0,'#bfe8e2');g.addColorStop(1,'#8fd0c8');X.fillStyle=g;X.fillRect(-500,-500,2100,2100);
 X.strokeStyle='rgba(255,255,255,.45)';X.lineWidth=4;for(let i=-6;i<16;i++){X.beginPath();X.moveTo(i*110,-500);X.lineTo(i*110,1400);X.stroke()}for(let j=-4;j<14;j++){X.beginPath();X.moveTo(-500,j*110);X.lineTo(1600,j*110);X.stroke()}
 X.fillStyle='#e9dccb';X.fillRect(-500,1400,2100,600);glow(540,500,700,'255,250,230',.5);
 for(const cx of[820,900,960]){rr(cx-18,1300,36,90,8,'#fff',4);X.fillStyle='#ffb347';X.beginPath();X.ellipse(cx,1288+Math.sin(t*9+cx)*3,9,16,0,0,7);X.fill();glow(cx,1285,60,'255,190,90',.5)}
sparkles(540,700,(t*.3)%1,6,500,'#ffffff')}
function towel(hx,hy,s){X.save();X.translate(hx,hy);X.scale(s,s);X.fillStyle='#ffffff';X.strokeStyle='#151515';X.lineWidth=8;X.beginPath();X.ellipse(0,-112,135,62,0,0,7);X.fill();X.stroke();X.beginPath();X.ellipse(30,-160,70,40,.3,0,7);X.fill();X.stroke();X.restore()}
function cukes(hx,hy,s){X.save();X.translate(hx,hy);X.scale(s,s);for(const ex of[-44,44]){circ(ex,-14,44,'#7cc96a',6);circ(ex,-14,32,'#dff5c8',0);for(let k=0;k<6;k++){circ(ex+Math.cos(k)*16,-14+Math.sin(k)*16,4,'#a8d98e',0)}}X.restore()}
function bubbleMe(x,y,txt_,p){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(k,k);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=16;rr(-230,-60,460,120,40,'#d9fdd3',5);X.shadowColor='transparent';txt(txt_,0,8,58,'#111',0,"800 ");X.restore()}

// A: 19:40, her text lights your phone
sh(0,(t,r)=>{const snap=r>.9;cam(520,1000,lerp(1.1,1.16,C(r/2)),t,.15);lroom(t,0);
 youSofa(t,{eyes:snap?'wide':'open',lid:snap?0:.4,brow:snap?'worried':'flat',mouth:snap?'grin':'smile',sweat:r>1.1,look:[.5,-.3]},(x,y)=>phoneH(x,y,.25,1,'#bfe0ff'));
 chip(730,690,'🧖',eo(C((r-.15)/.3)),Math.sin(t*3)*.12);
 label3('You at 19:40 😬',C(r/.2))});
// B: the drawer; the voucher; EXPIRED
sh(T('h1')-.05,(t,r)=>{cam(560,1000,lerp(1.04,1.1,C(r/3)),t,.15);lroom(t,0);dresser(250,1760,1.05,eo(C(r/.3)));
 const st=r>2.0;sm(640,1780,1.12,Object.assign({t,eyes:'wide',brow:st?'worried':'up',mouth:st?'o':'flat',sweat:st,look:[.3,-.6],armR:150,bendR:-140,armL:20},YOU));
 const vp=eo(C((r-.3)/.4));if(vp>0)voucher(640,650,.85*vp,{rot:-.04,exp:C((r-2.0)/.3)});
 if(r>2.0&&r<2.4)impact(C((r-2.0)/.4));
 label3('You, 19:41 😳',C(r/.2))});
// C: your brain: rain, little cards circling; Memopai hops onto the sofa arm
sh(T('s1'),(t,r)=>{cam(540,1000,1.06,t,.2);lroom(t,0,1);
 const mt=T('s1')+3.4-T('s1'),up=r>mt+.4;
 youSofa(t,{eyes:up?'open':'open',lid:up?0:.35,brow:up?'up':'sad',mouth:up?'smile':'frown',look:up?[.7,0]:[0,.6],tilt:up?0:-5});
 const cards=['🧾','🎂','🧖','📦','📅'];const sp=up?.6:1.4;cards.forEach((e,i)=>{const a=t*sp+i*1.256;chip(470+Math.cos(a)*250,650+Math.sin(a)*70,e,.8)});
 const mp=C((r-mt)/.6);if(mp>0){memo(880,1478,.8,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(880,1220,mp,10,220)}
 label3(r<mt?'Your brain 🫠':'Memopai 👋',C(r/.2))});
// D: Christmas: she hands you another one; you tell Memopai, the voucher flies into the phone
sh(T('s2'),(t,r)=>{cam(560,1000,1.04,t,.15);xroom(t);
 const r3=T('s3')-T('s2'),give=eo(C((r-.3)/.6)),got=r>1.0,talk=r>r3+.6&&r<r3+3.4;
 sm(800,1780,1.08,Object.assign({t,flip:1,eyes:r>1.6&&r<r3?'happy':'open',brow:'up',mouth:'smile',blush:1,armL:lerp(20,95,got?0:give),bendL:-10,holdL:(x,y)=>{if(!got)envelope(x,y,.9,-.1)}},SIS));
 sm(450,1780,1.1,Object.assign({t,eyes:r<r3?'wide':'open',brow:r<r3?'up':'smug',mouth:talk?'open':'grin',talk:talk?t:null,blush:r<r3,look:r<r3?[.6,-.1]:[.6,-.4],
  armR:talk||r>r3+3.4?150:(got?70:90),bendR:talk||r>r3+3.4?-150:-60,holdR:(x,y)=>{if(got&&r<r3+.2)envelope(x,y,.9,.15);else if(r>=r3+.2)phoneH(x,y,.25,talk)}},YOU));
 if(r>r3-.4){memo(330,1330,.6,{t,wave:r<r3+.8,hop:C((r-r3+.4)/.6),glow:1})}
 const fs=r3+1.4,fl=C((r-fs)/1.0);if(r>r3+.6){if(r<fs)chip(470,600,'🧖',C((r-r3-.6)/.3),Math.sin(t*3)*.1);else if(fl<1){const px=lerp(470,560,eo(fl)),py=lerp(600,1000,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🧖',1-fl*.55)}else sparkles(560,1000,C((r-fs-1)/.6),8,120,'#7cf0a0')}
 label3(r<r3?'You, Christmas 🎄':'You, right then 🎙️',C(r/.2))});
// E: voice note + reply
sh(T('s3')+2.9,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.6&&r<.9,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.8),dur:'0:04',time:'20:12'},{a:.9,me:0,text:'Got it ✅ 1 Mar, 10:00 · Use the spa voucher 🧖',time:'20:12'}]})});
// F: March 1st: buzz, you book it
sh(T('s4')-.2,(t,r)=>{cam(540,980,1.08,t,.2);lroom(t,1);psun(260,380,40,t);
 const bk=r>1.3;youSofa(t,{eyes:bk?'happy':'open',brow:'up',mouth:bk?'grin':'smile',look:[.6,-.3]},(x,y)=>phoneH(x,y,.25,1,bk?'#25d366':'#bfe0ff'));
 const n=r<1.1?C((r-.1)/.3):Math.max(0,1-(r-1.1)/.25);if(n>0)notif(150,n,'Memopai','Use the spa voucher 🧖');
 if(bk){chip(730,690,'✅',eo(C((r-1.3)/.25)));sparkles(730,690,C((r-1.3)/.8),10,220,'#7cf0a0')}
 label3('You, March 1st ☀️',C((r-1.3)/.25))});
// G: the spa, cucumbers; same question, better answer
sh(T('m2')-.1,(t,r)=>{const rp=T('p1')-T('m2')+.1;cam(540,1050,lerp(1.0,1.05,C(r/4)),t,.15);spa(t);
 const sx=460,sy=1960,ss=1.25;const typing=r>1.0;
 sm(sx,sy,ss,Object.assign({t,eyes:'closed',brow:'up',mouth:r>rp?'grin':'smile',blush:1,armR:typing?150:40,bendR:typing?-150:-30,holdR:(x,y)=>phoneH(x,y,.25,r>.1)},YOU));
 const hx=sx,hy=sy-767*ss;towel(hx,hy,ss);cukes(hx,hy,ss);
 psofa(540,1900,1.3,'#f4f4f4','#d8d8d8');
 if(r>rp-.3)bubbleMe(720,640,'AMAZING 🥰',C((r-rp+.3)/.3));if(r>rp)sparkles(720,640,C((r-rp)/1.2),12,300);
 if(r<rp-.3)label3('You, a few days later 🧖',C(r/.2));else label3('You, sorted 😌',C((r-rp+.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,1000,1.08,t,.1);lroom(t,0);dresser(250,1760,1.05,1);
 sm(640,1780,1.12,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',sweat:1,look:[.3,-.6],armR:150,bendR:-140,armL:20},YOU));
 voucher(640,650,.85,{rot:-.04,exp:1})});
