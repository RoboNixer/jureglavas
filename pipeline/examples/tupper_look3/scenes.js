const YOU={hair:'curl'};
const MOM={hair:'bun',hairc:'#b9b9c4',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';if(e=='T')tupper(0,30,.62,{w:150,h:62,lid:'#e0533d'});else txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function wine(hx,hy){X.save();X.translate(hx,hy);X.rotate(.15);rr(-20,-140,40,150,12,'#6b1f3a',5);rr(-9,-190,18,58,6,'#6b1f3a',5);rr(-16,-90,32,44,4,'#f3e6c8',3);X.restore()}
function keysI(hx,hy){X.save();X.translate(hx,hy);circ(0,0,16,'rgba(0,0,0,0)',5);line([[8,8],[34,40]],7,'#c9a227');line([[24,28],[32,22]],5,'#c9a227');X.restore()}
// rooms
function momHall(t,sun){hallway(t,{wall:sun?'#f3e3f2':'#e2cfe4',wall2:sun?'#e8cfe6':'#cdb4d1',doorc:'#a0523d',plant:150,dx:800});glow(560,560,620,'255,236,190',sun?.5:.3)}
function myHall(t,o={}){hallway(t,Object.assign({dx:820,plant:0},o));}
function counter(x,y,w){rr(x,y,w,40,8,'#d8c3a5',6);rr(x+10,y+40,w-20,y>0?2000-y:300,0,'#b89a76',6)}
function kitchen(t){proom(t,{win:820,frame:null,plant:0,lamp:0,wall:'#e6efe4',wall2:'#cfdccb',floor:'#c9b08d',floor2:'#a88d68'})}
function cupBack(x,y){rr(x-300,y-760,600,760,14,'#f6efe2',8);rr(x-280,y-740,560,720,8,'#e3d7c3',0)}
function cupDoor(x,y,p){const dw=lerp(560,70,eo(C(p)));rr(x-280-(p>0?dw*0.15*C(p):0),y-740,dw,720,8,'#d9a86a',7);if(p<.6)circ(x-280+dw-34,y-380,13,'#7a5a3a',0)}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));glow(120,760,560,'255,214,150',.45)}
function avM(x,y,r){X.save();circ(x,y,r,'#ffe0a8',0);txt('👩',x,y+3,r*1.1,'#111',0,'400 ');X.restore();X.textAlign='left'}

// A 0.0: Mom at her door, hands on hips: "Did you bring my containers back?"
function shotA(t,r,lab){cam(560,1040,lerp(1.06,1.12,C(r/2.2)),t,.15);momHall(t,0);
 sm(300,1800,1.15,Object.assign({t,eyes:'open',lid:.3,brow:'up',mouth:r<1.9&&lab?'open':'smirk',talk:lab&&r>.05&&r<1.85?t:null,look:[.7,0],armL:45,bendL:-105,armR:45,bendR:-105,tilt:5},MOM));
 sm(770,1830,1.15,Object.assign({t,flip:1,eyes:'wide',brow:'worried',mouth:'wavy',sweat:r>.9,look:[-.6,0],armR:25,bendR:-40,holdR:(x,y)=>wine(x,y),armL:12,bendL:10},YOU));
 if(lab)label3('Mom, Sunday 13:00 🤨',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: your cupboard swings open: the wobbling tower with MOM tape
sh(T('s1')-.05,(t,r)=>{cam(540,1020,lerp(1.02,1.08,C(r/2.5)),t,.15);kitchen(t);counter(-200,1520,1500);
 const op=C((r-.15)/.35);cupBack(540,1520);
 if(op>0)stack(540,1500,1.3,7,t,{wob:op<1?1.2:.5});
 cupDoor(540,1520,op);
 sm(170,2050,.95,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',look:[.6,-.6],sweat:1,armR:150,bendR:-20},YOU));
 label3('Your cupboard 🫠',C((r-.2)/.2))});
// C: every Sunday: autopilot. Keys, phone, door — the stack stays on the counter
sh(T('s2'),(t,r)=>{const L=T('s3')-T('s2');cam(560,1040,1.06,t,.15);myHall(t);
 counter(-60,1380,420);stack(140,1380,.75,7,t,{wob:.15});
 const walk=C((r-.6)/(L-1.2));const x=lerp(470,690,walk);
 sm(x,1830,1.12,Object.assign({t,walk:walk>0&&walk<1?t:null,eyes:'open',lid:.55,brow:'flat',mouth:'flat',look:[.7,0],armR:r>2.1?40:150,bendR:r>2.1?-30:-30,holdR:(hx,hy)=>{keysI(hx,hy)},armL:r>2.9?40:20,bendL:-30,holdL:r>2.9?(hx,hy)=>phoneH(hx,hy,-.1,0):null},YOU));
 // icon ticks over the head: 🔑 📱 🚪 ... 🥡 ✗
 const hy=1830-767*1.12-180;const ic=[['🔑',2.0],['📱',2.6],['🚪',3.2]];ic.forEach(([e,a],i)=>{const p=C((r-a)/.25);if(p>0)chip(x-150+i*150,hy,e,eo(p)*.75)});
 const pX=C((r-3.9)/.3);if(pX>0){chip(140,1380-420,'T',eo(pX)*.8);X.save();X.globalAlpha=pX;X.strokeStyle='#e0533d';X.lineWidth=14;X.lineCap='round';X.beginPath();X.moveTo(95,915);X.lineTo(185,1005);X.moveTo(185,915);X.lineTo(95,1005);X.stroke();X.restore()}
 label3('Your autopilot 🙃',C(r/.2))});
// D: that evening on the sofa: Memopai hops onto the sofa arm, the 🥡 flies into your phone
sh(T('s3'),(t,r)=>{cam(540,1040,1.06,t,.15);sofaRoom(t);
 const reach=C((r-.9)/.4);
 sm(470,1960,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:r>1.6?'smile':'flat',look:r<.9?[.7,-.2]:[.4,.5],armR:lerp(20,150,reach),bendR:lerp(0,-150,reach),holdR:(x,y)=>{if(reach>0)phoneH(x,y,.25,r>1.4)}},YOU));psofa(540,1900,1.3);
 const mp=C((r-.25)/.6);if(mp>0){memo(880,1530,.82,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(880,1220,mp,8,180)}
 const hy=1960-767*1.25,fl=C((r-1.3)/1.0);const px0=680,py0=hy-170;
 if(r<1.3)chip(px0,py0,'T',C(r/.3)*.9,Math.sin(t*3)*.1);else if(fl<1){const px=lerp(px0,620,eo(fl)),py=lerp(py0,hy+60,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'T',.9-fl*.5)}else sparkles(640,hy+60,C((r-2.3)/.5),8,120,'#7cf0a0');
 label3(mp>.5?'Memopai 👋':'You, Sunday 20:00 🛋️',C(mp>.5?(r-.55)/.2:r/.2))});
// E: the WhatsApp chat: voice note + reply
sh(T('s3')+2.7,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#2a2340';X.fillRect(0,0,1080,1920);glow(540,900,700,'255,214,150',.25);
 phoneUI(540,900,1.28,r,{typing:r>1.45&&r<1.75,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/1.3),dur:'0:05',time:'20:04'},{a:1.75,me:0,text:"Got it ✅ Every Sunday · 11:30 · Mom's containers 🍲",time:'20:04'}]})});
// F: next Sunday 11:30 at your door: buzz, grab the stack
sh(T('s4'),(t,r)=>{cam(560,1040,1.06,t,.15);myHall(t);glow(820,620,500,'255,250,220',.35);
 const g=r>2.1;
 counter(-60,1380,420);if(!g)stack(140,1380,.75,7,t,{wob:.1});
 sm(560,1830,1.12,Object.assign({t,eyes:r>.9?'open':'open',brow:r>.9?'up':'flat',mouth:g?'grin':(r>.9?'o':'flat'),look:r>.9&&!g?[-.7,0]:[.4,.3],armR:g?35:120,bendR:g?-75:-120,holdR:g?null:(x,y)=>phoneH(x,y,.2,r>.6),armL:g?35:15,bendL:g?-75:10,holdL:g?(x,y)=>stack(x+95,y+50,.8,5,t,{wob:.2}):null},YOU));
 const n=r<1.9?C((r-.45)/.3):Math.max(0,1-(r-1.9)/.25);if(n>0)notif(150,n,'Memopai',"Mom's containers 🍲");
 label3('You, next Sunday 11:30 😌',C((r-2.15)/.2))});
// G: Mom's door, sunny: she beams, hands back a FULL stack; you, sorted
sh(T('m2'),(t,r)=>{const P1=T('p1')-T('m2'),p1=r>P1,sw=r>1.2;cam(560,1040,lerp(1.04,1.1,C(r/6)),t,.15);momHall(t,1);
 sm(300,1800,1.15,Object.assign({t,eyes:r>.15&&r<1.0?'happy':'open',brow:'up',mouth:r<P1?'grin':'smile',talk:r<P1-.2?t:null,blush:1,look:[.7,0],armL:p1?150+Math.sin(t*9)*15:30,bendL:p1?-20:-60,armR:sw?20:40,bendR:sw?20:-75,holdR:!sw?(x,y)=>stack(x+70,y+50,.8,5,t,{wob:.1}):null},MOM));
 sm(770,1830,1.15,Object.assign({t,flip:1,eyes:p1?'happy':'open',brow:'up',mouth:'grin',blush:p1,look:[-.6,0],armR:30,bendR:-70,armL:30,bendL:-70,holdR:sw?(x,y)=>stack(x+95,y+50,.8,5,t,{wob:.15,full:'#f2a03d',off:3}):null},YOU));
 if(p1)sparkles(560,950,C((r-P1)/1.2),12,300);
 label3(p1?'You, sorted 😌':'Mom, next Sunday 🥹',C((p1?r-P1:r)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>shotA(t,1.3,0));
