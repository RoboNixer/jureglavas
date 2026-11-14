const YOU={hair:'curl'};
const MOM={hair:'bun',hairc:'#b9b9c4',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function bedBack(x,y){rr(x-390,y-560,780,520,60,'#6e4a33',7);rr(x-350,y-520,700,440,44,'#87603f',0);
 X.save();X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=20;ell(x,y-150,280,115,'#f4f1fb',6);X.restore();ell(x-60,y-180,170,40,'rgba(255,255,255,.6)',0)}
function bedFront(x,top,col='#5b78c9',col2='#4561ad'){const g=X.createLinearGradient(0,top,0,top+700);g.addColorStop(0,col);g.addColorStop(1,col2);
 path(()=>{X.moveTo(x-410,top+40);X.quadraticCurveTo(x-260,top-10,x-110,top+8);X.quadraticCurveTo(x,top+22,x+120,top+6);X.quadraticCurveTo(x+280,top-12,x+410,top+40);X.lineTo(x+440,top+620);X.lineTo(x-440,top+620);X.closePath()},g,7);
 rr(x-395,top+10,790,70,30,'#eef0fa',6);
 X.strokeStyle='rgba(20,30,80,.25)';X.lineWidth=6;for(const k of[-230,-50,160]){X.beginPath();X.moveTo(x+k,top+120);X.quadraticCurveTo(x+k+40,top+330,x+k-10,top+560);X.stroke()}
 rr(x-460,top+600,920,120,20,'#6e4a33',7)}
function nstand(x,y,time,ph){y-=70;rr(x-130,y,260,330,18,'#8a6142',6);rr(x-110,y+150,220,10,4,'#6e4a33',0);
 if(time){rr(x-35,y-90,150,90,14,'#222',5);glow(x+40,y-45,120,'255,90,90',.25);txt(time,x+40,y-44,46,'#ff5a5a',0)}
 if(ph)rr(x+70,y-22,70,22,8,'#1b1b1f',4)}
function bedroom(t,o={}){proom(t,{win:o.win||830,night:o.night,rain:o.rain,wall:o.night?'#8ea0c8':'#f4dfc6',wall2:o.night?'#7486b4':'#e9c9a6',curtain:o.night?'#5a6fc0':'#e98a6a',curtain2:o.night?'#41539e':'#cc6d50',plant:0,lamp:0,frame:[220,560]})}
function arm2(x0,y0,x1,y1,s=1){line([[x0,y0],[x1,y1]],17*s,'#151515');ell(x1,y1,31*s,27*s,'#151515',0)}
const HX=640,HY=900,SC=1.1,FY=HY+767*SC,BT=1030;
function sleeper(t,o){bedBack(HX,BT);sm(HX,FY,SC,Object.assign({t,blink:0},YOU,o))}
// phone in front of the face (reading), screen glow on the face
function readPhone(t,on=1){arm2(470,1060,440,920,SC);X.save();X.translate(440,900);X.rotate(.18);if(on)glow(0,-20,220,'150,200,255',.45);rr(-40,-70,80,140,14,'#1b1b1f',5);rr(-31,-58,62,116,8,on?'#bfe0ff':'#3a4a66',0);X.restore()}
// phone at the ear
function earPhone(){arm2(460,1060,505,820,SC);rr(470,740,60,120,14,'#1b1b1f',5)}
// mum's living room (night/morning) with a sofa behind her
function momRoom(t,day){proom(t,{win:300,night:!day,wall:day?'#f9e2c8':'#c9a98e',wall2:day?'#efc9a1':'#a98a72',curtain:'#8f6bb0',curtain2:'#72529a',plant:860,lamp:day?0:780,frame:[620,520]});if(!day)glow(780,700,500,'255,200,130',.35);else glow(300,500,700,'255,240,190',.5);psofa(560,1700,1.1,'#c86b5a','#a85646')}
function momTalk(t,x,o){sm(x,1760,1.15,Object.assign({t,flip:1,armL:165,bendL:-150,holdL:(hx,hy)=>{rr(hx-30,hy-80,60,120,14,'#1b1b1f',5)}},MOM,o))}
// family group chat
function gbub(y,name,nc,str,time,p,me){if(p<=0)return 0;X.font="500 34px Inter";const lines=wrapT(str,400,"500 34px Inter");const w=Math.max(260,Math.max(...lines.map(l=>X.measureText(l).width))+60);const h=(me?0:40)+lines.length*46+56;const bx=me?270-w:-270;
 X.save();X.globalAlpha=C(p*1.6);rr(bx,y,w,h,24,me?'#d9fdd3':'#fff',4);X.textAlign='left';X.textBaseline='top';let yy=y+16;
 if(!me){X.font="800 28px Inter";X.fillStyle=nc;X.fillText(name,bx+26,yy);yy+=40}
 X.font="500 34px Inter";X.fillStyle='#111';lines.forEach((l,i)=>X.fillText(l,bx+26,yy+i*46));X.font="500 22px Inter";X.fillStyle='#667781';X.textAlign='right';X.fillText(time,bx+w-20,y+h-32);X.restore();return h}
function groupUI(x,y,s,r,clock,msgs){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#efe7dc',0);X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 X.fillStyle='#008069';X.fillRect(-300,-640,600,210);rr(-70,-618,140,40,20,'#000',0);
 X.font="600 26px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText(clock,-240,-598);
 X.font="400 40px Inter";X.fillText('‹',-270,-488);circ(-180,-488,44,'#f6c56b',0);txt('👨‍👩‍👧',-180,-486,46,'#111',0,'400 ');
 X.font="800 38px Inter";X.fillStyle='#fff';X.textAlign='left';X.fillText('Family ❤️',-118,-506);X.font="400 24px Inter";X.fillText('Mom, Dad, Sis, Aunt Vesna, You',-118,-466);
 rr(-90,-405,180,44,22,'#e1f3fb',0);X.font="600 24px Inter";X.fillStyle='#54656f';X.textAlign='center';X.fillText('TODAY',0,-383);
 let yy=-340;msgs.forEach(m=>{if(r<m.a)return;yy+=gbub(yy,m.n,m.c,m.s,m.time,C((r-m.a)/.22),m.me)+18});
 X.fillStyle='#f0f0f0';X.fillRect(-300,520,600,140);rr(-270,545,450,74,37,'#fff',0);X.font="400 30px Inter";X.fillStyle='#8696a0';X.textAlign='left';X.fillText('Message',-230,582);circ(235,582,38,'#00a884',0);
 X.restore();X.restore()}

// A: 23:51, reading the phone in bed, eyes snap open
sh(0,(t,r)=>{const snap=r>.5;cam(580,950,lerp(1.24,1.3,C(r/2.5)),t,.15);bedroom(t,{night:1});
 sleeper(t,{eyes:snap?'wide':'open',lid:snap?0:.5,brow:snap?'worried':'flat',mouth:snap?'o':'flat',look:[-.6,-.1]});bedFront(HX,BT);readPhone(t);nstand(190,1250,'23:51',0);
 if(r>.5&&r<.9)impact((r-.5)/.4);
 const cp=C((r-.9)/.35);chip(HX+200,HY-240,'🎂',eo(cp)*1.0,Math.sin(t*3)*.1);
 label3('You at 23:51 😳',C(r/.2))});
// A2: the family group chat
sh(2.45,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 groupUI(540,880,1.28,r,'23:51',[
  {a:.05,n:'Sis',c:'#e2508a',s:'Happy birthday Mom!! 🎂❤️',time:'08:02'},
  {a:.35,n:'Aunt Vesna',c:'#7a5af8',s:'Happy birthday!! 🥳🌸',time:'08:15'},
  {a:.65,n:'Dad',c:'#1f8a70',s:'Love you ❤️',time:'09:40'},
  {a:1.0,n:'Mom',c:'#d9822b',s:'Off to bed. Thank you all, my loves ❤️',time:'23:50'}])});
// B: you call, way too late — split with Mom on her sofa
sh(T('s1')+1.5,(t,r)=>{split2(t,
  (t)=>{bedroom(t,{night:1});sleeper(t,{eyes:'open',brow:'up',mouth:r<1.6?'grin':'wavy',talk:r>.3&&r<1.5?t:null,look:[.5,0],sweat:r>1.9});bedFront(HX,BT);earPhone();nstand(190,1250,'23:52',0)},
  (t)=>{momRoom(t,0);const sp=r>1.65;momTalk(t,560,{eyes:'open',lid:sp?.1:.35,brow:sp?'up':'flat',mouth:sp?'smile':'flat',talk:sp&&r<3.2?t:null})},
  {camA:[600,950,1.0],camB:[560,1000,1.0],p:C(r/.3)});
 label3('You, 23:52 😬',C((r-.2)/.25))});
// C: lying awake, the sting; Memopai hops on the nightstand, the 🎂 thought flies into the phone
sh(T('s2'),(t,r)=>{cam(520,980,1.1,t,.2);bedroom(t,{night:1,rain:1});
 const talk=r>1.6;
 sleeper(t,{eyes:'open',lid:r<1.2?.35:.1,brow:r<1.2?'sad':'up',mouth:talk?'open':(r<1.2?'frown':'smile'),talk:talk?t:null,look:r<1.2?[0,-.6]:[-.5,-.1],tilt:-4});bedFront(HX,BT);
 nstand(190,1250,null,0);
 const mp=C((r-.9)/.6);if(mp>0){memo(185,1185,.82,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(185,880,mp,10,220)}
 const reach=C((r-1.2)/.5);if(reach>0){arm2(470,1060,lerp(470,450,reach),lerp(1060,880,reach),SC);phoneH(lerp(470,458,reach),lerp(1060,890,reach),.15,r>1.6)}
 const fl=C((r-1.9)/1.1);if(r<1.9)chip(HX+200,HY-240,'🎂',1,Math.sin(t*3)*.1);else if(fl<1){const px=lerp(HX+200,458,eo(fl)),py=lerp(HY-240,860,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🎂',1-fl*.6)}else sparkles(458,860,C((r-3)/.6),8,120,'#7cf0a0');
 label3(r<.95?'You, 23:53 😔':'Memopai 😎',C(r/.2))});
// D: the voice note in WhatsApp + the reply
sh(T('s3')+2.7,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.2&&r<1.5,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/1.2),dur:'0:04',time:'23:54'},{a:1.5,me:0,text:'Got it ✅ 2 Mar, 07:30 · Call Mom first 🎂',time:'23:54'}]})});
// E: next year, 07:30, buzz
sh(T('s4'),(t,r)=>{cam(560,960,1.12,t,.2);bedroom(t,{night:0});glow(830,520,700,'255,235,170',.5);psun(830,430,40,t);
 const up=r>.9;sleeper(t,{eyes:up?'open':'closed',brow:up?'up':'flat',mouth:up?'grin':'smile',look:[-.5,-.1]});bedFront(HX,BT,'#e8a24a','#cf8636');
 if(up)readPhone(t,1);nstand(190,1250,'07:30',up?0:1);
 const n=r<1.7?C((r-.1)/.3):Math.max(0,1-(r-1.7)/.25);if(n>0)notif(150,n,'Memopai',"Call Mom first. It's her birthday!");
 label3('You, next year 😌',C((r-1.95)/.25))});
// F: first call — Mom delighted; you, sorted
sh(T('m2'),(t,r)=>{split2(t,
  (t)=>{bedroom(t,{night:0});glow(830,520,600,'255,235,170',.5);sleeper(t,{eyes:r>1.4?'happy':'open',brow:'up',mouth:'grin',blush:1,talk:r<1.2?null:null,look:[.5,0]});bedFront(HX,BT,'#e8a24a','#cf8636');earPhone();nstand(190,1250,'07:31',0)},
  (t)=>{momRoom(t,1);momTalk(t,560,{eyes:r>1.2?'happy':'open',brow:'up',mouth:r<1.1?'open':'grin',talk:r<1.1?t:null,blush:1});if(r>.2)sparkles(560,800,C((r-.2)/1.2),10,260)},
  {camA:[600,950,1.0],camB:[560,1000,1.0]});
 label3(r<1.3?'Mom, 07:31 🥹':'You, sorted 😌',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(580,950,1.3,t,.1);bedroom(t,{night:1});
 sleeper(t,{eyes:'wide',brow:'worried',mouth:'o',look:[-.6,-.1]});bedFront(HX,BT);readPhone(t);nstand(190,1250,'23:51',0);chip(HX+200,HY-240,'🎂',1)});
