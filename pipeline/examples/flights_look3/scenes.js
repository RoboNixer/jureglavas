const YOU={hair:'curl'};
const MOM={hair:'bun',hairc:'#b9b9c4',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// fare card: what's on your phone screen, blown up (flight search result)
function fare(x,y,s,price,o={}){X.save();X.translate(x,y);X.scale(s,s);X.rotate(o.rot||0);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=24;rr(-250,-150,500,300,36,'#fff',6);X.shadowColor='transparent';
 txt('✈️ Home for Christmas',0,-92,34,'#555',0,'600 ');txt(o.early?'Dec 23 · booked early':'Dec 23 · one way',0,-50,28,o.early?'#1b9e4b':'#999',0,'500 ');
 if(o.booked){rr(-170,-10,340,120,30,'#25d366',0);txt('€'+price+'  ✓',0,72,64,'#fff',0,'800 ')}
 else{txt('€'+price,o.up?-30:0,80,104,o.up?'#e5484d':'#1b9e4b',0,'800 ');if(o.up){X.fillStyle='#e5484d';X.beginPath();X.moveTo(150,70);X.lineTo(200,70);X.lineTo(175,20);X.fill();X.fillRect(166,68,18,30)}}
 X.restore()}
function lroom(t,day,rain){proom(t,{win:300,night:!day,rain:rain,wall:day?'#f9e2c8':'#8e9fc6',wall2:day?'#efc9a1':'#7385b2',curtain:day?'#e98a6a':'#5a6fc0',curtain2:day?'#cc6d50':'#41539e',plant:day?880:0,lamp:day?0:860,frame:[600,520]});
 if(day){glow(300,500,700,'255,240,190',.55)}else glow(860,700,450,'255,200,130',.35)}
function youSofa(t,o,phone){sm(470,1960,1.25,Object.assign({t},YOU,phone?{armR:150,bendR:-150,holdR:phone}:{},o));psofa(540,1900,1.3)}
function momRoom(t){proom(t,{win:760,night:1,wall:'#c9a98e',wall2:'#a98a72',curtain:'#8f6bb0',curtain2:'#72529a',lamp:0,frame:[420,520]});glow(300,900,500,'255,200,130',.35);xtree(250,1330,.95,t)}
function momTalk(t,x,o){sm(x,1760,1.15,Object.assign({t,flip:1,armL:165,bendL:-150,holdL:(hx,hy)=>{rr(hx-30,hy-80,60,120,14,'#1b1b1f',5)}},MOM,o))}
function suitcase(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,6,130,.25);rr(-95,-250,190,250,24,'#e86a5a',6);rr(-40,-290,80,50,14,'transparent',8);X.fillStyle='#c4523f';X.fillRect(-60,-240,14,230);X.fillRect(46,-240,14,230);circ(-60,8,16,'#151515',0);circ(60,8,16,'#151515',0);X.restore()}
// snowy night outside Mom's front door, warm open doorway, wreath
function frontDoor(t){NOFX=0;const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#1b2350');g.addColorStop(1,'#46519a');X.fillStyle=g;X.fillRect(-500,-500,2100,1900);
 X.fillStyle='#e6d2b8';X.fillRect(-500,250,2100,1200);X.fillStyle='#cdb597';for(let k=0;k<14;k++)X.fillRect(-500,290+k*80,2100,6);
 glow(700,900,620,'255,200,120',.55);rr(520,420,380,880,10,'#ffd89a',8);X.fillStyle='#fff1cf';X.fillRect(540,440,340,860);
 xtree(800,1290,.55,t);
 X.save();X.translate(700,360);X.strokeStyle='#2f7d4a';X.lineWidth=26;X.beginPath();X.arc(0,0,58,0,7);X.stroke();circ(0,58,14,'#e5484d',0);X.restore();
 const fg=X.createLinearGradient(0,1300,0,1920);fg.addColorStop(0,'#f4f7ff');fg.addColorStop(1,'#d4ddf2');X.fillStyle=fg;X.fillRect(-500,1300,2100,700);
 psnow(t,.9)}

// A: 23:40, scrolling the fare; price ticks 89 -> 410, eyes snap
sh(0,(t,r)=>{const snap=r>1.2;cam(520,1000,lerp(1.1,1.17,C(r/4)),t,.15);lroom(t,0);
 youSofa(t,{eyes:snap?'wide':'open',lid:snap?0:.45,brow:snap?'worried':'flat',mouth:snap?'o':'flat',look:[.5,-.3],sweat:r>2.4},(x,y)=>phoneH(x,y,.25,1,'#bfe0ff'));
 const k=eo(C((r-.15)/1.1)),price=Math.round(lerp(89,410,k));fare(720,640,1.05,price,{up:k>.05,rot:-.03});
 if(k>=1&&r<1.6)impact(C((r-1.25)/.35));
 label3('You at 23:40 😳',C(r/.2))});
// B: Mom calls
sh(T('m1')-.05,(t,r)=>{split2(t,
  (t)=>{lroom(t,0);sm(470,1960,1.25,Object.assign({t,eyes:'wide',brow:'worried',mouth:'grin',sweat:1,look:[.6,-.2],armR:160,bendR:-160,holdR:(x,y)=>rr(x-30,y-90,60,120,14,'#1b1b1f',5)},YOU));psofa(540,1900,1.3)},
  (t)=>{momRoom(t);momTalk(t,620,{eyes:'open',brow:'up',mouth:'smile',talk:r<1.9?t:null,look:[-.3,0]})},
  {camA:[520,1000,1.0],camB:[560,1000,1.0],p:C(r/.3)});
 label3('Mom, 23:41 🎄',C(r/.25))});
// C: the sting; Memopai hops on; you say it, the ✈️ thought flies into the phone
sh(T('s1'),(t,r)=>{cam(560,1000,1.06,t,.2);lroom(t,0,1);
 const r2=T('s2')-T('s1');const talk=r>r2+.1&&r<r2+2.3;const up=r>r2-.1;const reach=C((r-(r2-.3))/.4);
 sm(470,1960,1.25,Object.assign({t,eyes:'open',lid:up?0:.35,brow:up?'up':'sad',mouth:talk?'open':(up?'smile':'frown'),talk:talk?t:null,look:up?[.6,-.1]:[0,.6],tilt:up?0:-5,armR:lerp(20,150,reach),bendR:lerp(0,-150,reach),holdR:(x,y)=>{if(reach>0)phoneH(x,y,.25,talk||r>r2+2.3)}},YOU));psofa(540,1900,1.3);
 if(r<r2){const a=t*1.6;fare(540+Math.cos(a)*230,700+Math.sin(a)*60,.55,410,{up:1})}
 const mp=C((r-1.6)/.6);if(mp>0){memo(860,1478,.8,{t,wave:r<r2,hop:mp,glow:1});if(mp<1)sparkles(860,1220,mp,10,220)}
 const fs=r2+.6,fl=C((r-fs)/1.0);if(r>r2-.2){if(r<fs)chip(720,700,'✈️',C((r-r2+.2)/.3),Math.sin(t*3)*.1);else if(fl<1){const px=lerp(720,610,eo(fl)),py=lerp(700,1080,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'✈️',1-fl*.55)}else sparkles(610,1080,C((r-fs-1)/.6),8,120,'#7cf0a0')}
 label3(r<1.6?"You: 'next week' 🙃":(r<r2?'Memopai 👋':'You, right then 🎙️'),C(r/.2))});
// D: voice note + reply
sh(T('s2')+2.3,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.6&&r<.9,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.8),dur:'0:05',time:'23:43'},{a:.9,me:0,text:'Got it ✅ Every year · 1 Sep, 09:00 · Book flights home ✈️',time:'23:43'}]})});
// E: next September: buzz, you book it
sh(T('s3')-.25,(t,r)=>{cam(540,980,1.08,t,.2);lroom(t,1);psun(260,380,40,t);
 const up=r>.8,bk=r>1.5;youSofa(t,{eyes:up?'open':'happy',brow:'up',mouth:bk?'grin':'smile',look:[.6,-.3]},(x,y)=>phoneH(x,y,.25,1,'#bfe0ff'));
 const n=r<1.2?C((r-.2)/.3):Math.max(0,1-(r-1.2)/.25);if(n>0)notif(150,n,'Memopai','Book your flights home ✈️');
 if(r>1.3){fare(720,640,1.05*eo(C((r-1.3)/.25)),89,{booked:bk,early:1});if(bk&&r<2.4)sparkles(720,640,C((r-1.5)/.8),10,260,'#7cf0a0')}
 label3('You, next September ☀️',C((r-1.5)/.25))});
// F: Mom's front door, snow; then you, sorted
sh(T('m2')-.1,(t,r)=>{const rp=T('p1')-T('m2')+.1;cam(600,1050,lerp(1.0,1.06,C(r/5)),t,.15);frontDoor(t);
 suitcase(300,1770,1);
 sm(420,1780,1.1,Object.assign({t,eyes:r>rp?'happy':'open',brow:'up',mouth:'grin',blush:1,look:[.6,-.1],armR:r>rp?120:40,bendR:r>rp?-60:-20},YOU));
 sm(720,1780,1.1,Object.assign({t,flip:1,eyes:r>1.2?'happy':'open',brow:'up',mouth:r<1.8?'open':'grin',talk:r<1.8?t:null,blush:1,armL:r>rp?120:150,bendL:r>rp?-60:-120},MOM));
 if(r>rp)sparkles(570,900,C((r-rp)/1.2),12,300);
 label3(r<rp?'Mom, Dec 23 🎄':'You, sorted 😌',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(520,1000,1.17,t,.1);lroom(t,0);
 youSofa(t,{eyes:'wide',brow:'worried',mouth:'o',look:[.5,-.3],sweat:1},(x,y)=>phoneH(x,y,.25,1,'#bfe0ff'));
 fare(720,640,1.05,410,{up:1,rot:-.03})});
