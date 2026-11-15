const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1},KID={hair:'spike',hairc:'#7a4a2a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function mug(x,y,steam=0,t=0){X.save();X.translate(x,y);rr(-40,-96,80,96,14,'#e86a5a',6);X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.arc(44,-50,22,-1.3,1.3);X.stroke();
 if(steam){X.globalAlpha=.7;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=7;X.beginPath();X.moveTo(-18+k*18,-110-ph*90);X.quadraticCurveTo(-8+k*18+Math.sin(t*3+k)*10,-140-ph*90,-18+k*18,-170-ph*90);X.stroke()}}X.restore()}
// tiny tooth (crown + two roots), optional glow
function tooth(x,y,s=1,gl=0){X.save();X.translate(x,y);X.scale(s,s);if(gl)glow(0,0,90,'255,255,230',.5);
 path(()=>{X.moveTo(-26,-20);X.quadraticCurveTo(-30,-44,-12,-44);X.quadraticCurveTo(0,-36,12,-44);X.quadraticCurveTo(30,-44,26,-20);X.quadraticCurveTo(24,6,16,26);X.quadraticCurveTo(10,34,6,18);X.quadraticCurveTo(0,4,-6,18);X.quadraticCurveTo(-10,34,-16,26);X.quadraticCurveTo(-24,6,-26,-20);X.closePath()},'#fffef6',5);X.restore()}
// shiny €2 coin
function coin(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s*Math.abs(Math.cos(t*2))*.3+s*.7,s);glow(0,0,80,'255,220,120',.55);circ(0,0,34,'#c9ccd2',5);circ(0,0,22,'#e8b84a',3);txt('2',0,2,26,'#7a5a14',0);X.restore()}
// pillow held / lying
function pillow(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.2)';X.shadowBlur=16;ell(0,0,190,80,'#f4f1fb',6);X.shadowColor='transparent';ell(-50,-20,90,22,'rgba(255,255,255,.7)',0);X.restore()}
// kid's bed seen from the side-ish front: headboard + mattress; sleeper drawn between bedBack and bedFront
function bedBack(x,y){rr(x-390,y-560,780,520,60,'#6e8bd0',7);rr(x-350,y-520,700,440,44,'#86a2e0',0);txt('⭐',x-220,y-420,60,'#111',0,'400 ');txt('🚀',x+220,y-410,60,'#111',0,'400 ')}
function bedFront(x,top,col='#f2a65a',col2='#d9873c'){const g=X.createLinearGradient(0,top,0,top+700);g.addColorStop(0,col);g.addColorStop(1,col2);
 path(()=>{X.moveTo(x-410,top+40);X.quadraticCurveTo(x-260,top-10,x-110,top+8);X.quadraticCurveTo(x,top+22,x+120,top+6);X.quadraticCurveTo(x+280,top-12,x+410,top+40);X.lineTo(x+440,top+620);X.lineTo(x-440,top+620);X.closePath()},g,7);
 rr(x-395,top+10,790,70,30,'#fff3e0',6);for(let k=0;k<6;k++)circ(x-300+k*120,top+250+(k%2)*120,18,'rgba(255,255,255,.5)',0);rr(x-460,top+600,920,120,20,'#6e4a33',7)}
function nstand(x,y,time,glowc='255,90,90'){rr(x-130,y,260,330,18,'#8a6142',6);rr(x-110,y+150,220,10,4,'#6e4a33',0);
 if(time){rr(x-80,y-100,160,96,14,'#222',5);glow(x,y-52,120,glowc,.3);txt(time,x,y-50,48,'#ff5a5a',0)}}
function kidRoom(t,o={}){proom(t,Object.assign({win:820,night:o.night,lamp:o.night?150:0,frame:[300,540],plant:0,wall:o.night?'#8ea0c8':'#d8ecf7',wall2:o.night?'#7486b4':'#bfdcee',curtain:o.night?'#5a6fc0':'#f2a65a',curtain2:o.night?'#41539e':'#d9873c'},o));if(o.night)glow(150,760,480,'255,214,150',.42)}
function zzz(x,y,t,a=1){for(let k=0;k<3;k++){const ph=(t*.6+k/3)%1;X.save();X.globalAlpha=a*Math.sin(ph*Math.PI);txt('Z',x+ph*120+k*10,y-ph*220,50+k*14,'#fff',0);X.restore()}}
function doorway(x){rr(x-330,380,660,1400,10,'#f6efe4',0);line([[x-330,1780],[x-330,380],[x+330,380],[x+330,1780]],26,'#b98d63')}

// A: 07:02, your kid holds up the pillow: the tooth is still there
sh(0,(t,r)=>{cam(540,1020,lerp(1.14,1.2,C(r/2.8)),t,.15);kidRoom(t,{});glow(820,560,600,'255,245,210',.45);
 bedBack(560,1330);bedFront(560,1330);nstand(170,1290,'07:02');
 tooth(400,1340,1.8,1);
 const up=C((r-.1)/.35);
 sm(700,1780,1.0,Object.assign({t,eyes:'wide',brow:'angry',mouth:r<1.4?'wavy':'frown',tear:r>.8,look:[-.6,.5],tilt:Math.sin(t*9)*3,
  armL:lerp(30,60,up),bendL:lerp(10,40,up),armR:lerp(30,45,up),bendR:lerp(10,-120,up)},KID));
 if(r>.15&&r<.5)impact((r-.15)/.35);
 label3('Your kid, 07:02 😤',C(r/.2))});
// B: the doorway: you and your partner look at each other
sh(T('h1')+.9,(t,r)=>{cam(540,1000,lerp(1.06,1.12,C(r/4.6)),t,.15);psky('#d8ecf7','#e6f1f8','#eef4f8',1240);proom(t,{win:null,frame:null,plant:0,lamp:0,wall:'#d8ecf7',wall2:'#bfdcee'});doorway(540);
 const s1=r>T('s1')-T('h1')-.9,lk=C((r-.4)/.5);
 sm(330,1780,1.15,Object.assign({t,eyes:'wide',brow:s1?'up':'worried',mouth:s1?'wavy':'o',sweat:s1,look:[lerp(-.2,.8,lk),0],armR:s1?120:150,bendR:s1?-60:-150,holdR:(x,y)=>mug(x+10,y+40,1,t),armL:s1?120:20,bendL:s1?-60:20},YOU));
 sm(760,1780,1.12,Object.assign({t,flip:1,eyes:'wide',brow:s1?'up':'worried',mouth:s1?'wavy':'o',look:[lerp(.2,-.8,lk),0],armL:s1?120:150,bendL:s1?-60:-150,holdL:(x,y)=>mug(x-10,y+40,1,t),armR:s1?120:20,bendR:s1?-60:20},HER));
 label3(s1?'You both 🙃':'You both 😳',C(r/.25))});
// C: dinner chaos, hands full: one voice note; Memopai hops onto the table; the tooth thought flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.05,t,.2);proom(t,{win:800,night:1,frame:[300,520],plant:0,lamp:160,wall:'#f0c9a0',wall2:'#dcae80'});glow(540,560,620,'255,214,150',.45);
 const talk=r>1.5;
 sm(330,1780,1.15,Object.assign({t,eyes:'open',brow:talk?'up':'worried',mouth:talk?'open':'wavy',talk:talk?t:null,look:[.5,-.2],armL:70,bendL:-40,holdL:(x,y)=>{ell(x-20,y-10,110,26,'#fff',6);ell(x-20,y-24,70,20,'#e0533d',0)},armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.2,talk)},YOU));
 // table
 rr(420,1330,700,40,14,'#c99a6b',7);rr(470,1370,40,420,8,'#b5855a',6);rr(1030,1370,40,420,8,'#b5855a',6);
 sm(820,1780,.78,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[-.4,0],armL:110+Math.sin(t*10)*25,bendL:-40,armR:60,bendR:-30},KID));
 ell(820,1325,90,20,'#fff',5);ell(820,1312,60,16,'#f2c14e',0);
 const mp=C((r-.5)/.6);if(mp>0){memo(640,1330,.85,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(620,1100,mp,8,180)}
 const fl=C((r-1.6)/.9);if(fl>0&&fl<1){const px=lerp(330,450,eo(fl)),py=lerp(560,830,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🦷',.95-fl*.45)}else if(fl>=1)sparkles(450,830,C((r-2.5)/.5),8,120,'#7cf0a0');
 label3(mp>.4?'Memopai 😎':'You, 19:15 🍝',C(r/.25))});
// D: the WhatsApp chat
sh(T('s2')+2.95,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.95&&r<1.25,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.0),dur:'0:03',time:'19:15'},{a:1.25,me:0,text:'✅ Today 22:00 · Tooth fairy 🧚',time:'19:15'}]})});
// E: 22:00, nodding off at the bedtime story; buzz; tiptoe, swap
sh(T('s4'),(t,r)=>{const bz=T('s4')+2.85-T('s4'),sw=T('s5')+.3-T('s4');cam(560,1000,lerp(1.08,1.14,C(r/5)),t,.15);kidRoom(t,{night:1});
 bedBack(640,1330);sm(640,1720,.7,Object.assign({t,eyes:'closed',mouth:'smile',look:[0,0]},KID));bedFront(640,1330);
 const awake=r>bz,swap=r>sw;
 if(!swap){const nod=awake?0:Math.max(0,Math.sin(t*2.2))*12;
  sm(220,1800,1.1,Object.assign({t,eyes:awake?'wide':'open',lid:awake?0:.75,brow:awake?'up':'flat',mouth:awake?'o':'flat',look:awake?[.3,.5]:[.3,.3],tilt:awake?0:8+nod,lean:awake?0:6,
   armR:70,bendR:-60,holdR:(x,y)=>{rr(x-70,y-50,140,100,8,'#e0533d',5);rr(x-60,y-40,120,80,6,'#ffd23f',0)},armL:40,bendL:-90,holdL:(x,y)=>phoneH(x,y,.1,awake)},YOU));
  if(!awake)zzz(330,700,t,.8);
  if(awake)notif(150,C((r-bz)/.3),'Memopai','Tooth fairy 🧚')}
 else{const q=r-sw;
  sm(lerp(300,440,C(q/.8)),1800,1.1,Object.assign({t,walk:q<.8?t*1.5:null,eyes:'open',brow:'up',mouth:'smirk',look:[.7,.4],lean:14,armR:lerp(60,115,C((q-.6)/.5)),bendR:-20,holdR:(x,y)=>{if(q<1.0)coin(x+10,y,1,t);else tooth(x+10,y,.9,1)}},YOU));
  if(q>1.2)sparkles(700,1150,C((q-1.2)/.8),10,200);if(q<.9)notif(150,1,'Memopai','Tooth fairy 🧚')}
 if(!awake)label3('You, 22:00 😴',C(r/.25));else if(swap&&r-sw>.9)label3('You, 22:01 🧚',C((r-sw-.9)/.25))});
// F: the next morning: she came (just late); you, sorted
sh(T('k2'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/4)),t,.15);kidRoom(t,{});glow(820,560,700,'255,235,170',.6);psun(860,520,40,t);
 bedBack(560,1330);bedFront(560,1330);nstand(170,1290,'07:02','120,255,150');
 const hop=Math.abs(Math.sin(t*6))*60*(r<2?1:.3);
 sm(620,1600-hop,.8,Object.assign({t,eyes:'happy',brow:'up',mouth:r<1.6?'open':'grin',talk:r<1.6?t:null,look:[0,0],armR:165,bendR:-10,holdR:(x,y)=>coin(x,y-20,1.2,t),armL:120,bendL:-30},KID));
 const p1=r>T('p1')-T('k2');
 sm(260,1820,1.0,Object.assign({t,eyes:p1?'happy':'open',brow:'up',mouth:'smile',blush:p1,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>mug(x+10,y+40,1,t)},YOU));
 sm(900,1820,.9,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'smile',look:[-.7,-.1],armL:150,bendL:-150,holdL:(x,y)=>mug(x-10,y+40,1,t),armR:p1?140:20,bendR:p1?-40:20},HER));
 sparkles(560,900,C((r-.3)/1.5),12,320);
 label3(p1?'You, sorted 😌':'Your kid, 07:02 🤩',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>{cam(540,1060,1.2,t,.1);kidRoom(t,{});glow(820,560,600,'255,245,210',.45);bedBack(560,1330);bedFront(560,1330);nstand(170,1290,'07:02');tooth(400,1340,1.8,1);
 sm(700,1780,1.0,Object.assign({t,eyes:'wide',brow:'angry',mouth:'wavy',tear:1,look:[-.6,.5],armL:60,bendL:40,armR:45,bendR:-120},KID))});
