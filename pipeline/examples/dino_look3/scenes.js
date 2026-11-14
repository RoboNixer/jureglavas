const YOU={hair:'curl'};const KID={hair:'spike'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function mug(hx,hy,steam=0,t=0){X.save();X.translate(hx,hy-20);rr(-34,-40,68,78,12,'#f2f2f2',6);X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.arc(38,0,18,-1.3,1.3);X.stroke();rr(-26,-34,52,12,5,'#6b4226',0);
 if(steam){X.globalAlpha=.6;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=6;X.beginPath();X.moveTo(-16+k*16,-50-ph*90);X.quadraticCurveTo(-6+k*16+Math.sin(t*3+k)*10,-80-ph*90,-16+k*16,-110-ph*90);X.stroke()}}X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
// front door with glass pane, hooks with coats
function hallway(t,o={}){proom(t,Object.assign({win:null,frame:null,plant:180,lamp:0,wall:'#f4e3c9',wall2:'#e8cda8',floor:'#b98a5e',floor2:'#94673f'},o));
 const dx=o.dx||760;X.save();rr(dx-200,420,400,830,14,'#fff8ef',0);rr(dx-170,450,340,800,10,o.doorc||'#3f7f9e',8);
 rr(dx-120,500,240,250,12,o.night?'#2a3466':(o.rainy?'#9fb2c7':'#cfeeff'),6);if(o.rainy){X.save();X.beginPath();X.rect(dx-120,500,240,250);X.clip();prain(t,.7,25);X.restore()}else if(!o.night)glow(dx,620,260,'255,250,220',.4);
 circ(dx+120,880,22,'#e8c15a',6);rr(dx-110,800,220,30,8,'rgba(0,0,0,.15)',0);
 X.restore();
 // hooks + coats on the left wall
 line([[90,640],[330,640]],12,'#7a5a3a');for(const[cx,c]of[[150,'#e86a5a'],[270,'#7bb36a']]){line([[cx,640],[cx,670]],8,'#555');path(()=>{X.moveTo(cx-55,670);X.lineTo(cx+55,670);X.lineTo(cx+70,900);X.lineTo(cx-70,900);X.closePath()},c,6)}
 if(o.clock)wclock(545,560,.6,7,52)}
function backpack(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-70,-90,140,180,34,'#f2b632',7);rr(-50,10,100,60,16,'#e09b1c',5);X.restore()}
// green cardboard dino costume: spikes + tail drawn behind, then a green kid
function dinoBack(x,y,s,t,roar){X.save();X.translate(x,y);X.scale(s,s);
 const sw=Math.sin(t*5)*.12;X.save();X.translate(-60,-380);X.rotate(-.5+sw);path(()=>{X.moveTo(0,-60);X.quadraticCurveTo(-200,-20,-330,90);X.quadraticCurveTo(-180,40,0,60);X.closePath()},'#5cb848',8);X.restore();
 for(let k=0;k<5;k++){const a=-1.0+k*.5;X.save();X.translate(Math.sin(a)*150,-770-Math.cos(a)*150);X.rotate(a);path(()=>{X.moveTo(-34,20);X.lineTo(0,-64);X.lineTo(34,20);X.closePath()},'#f2a33a',7);X.restore()}
 X.restore()}
function kidDino(x,y,s,t,o={}){dinoBack(x,y,s,t);sm(x,y,s,Object.assign({t,col:'#7ccc5e',limb:'#7ccc5e'},o))}
// black bin bag over the kid's body (head + arms out)
function binBag(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-150,-590);X.quadraticCurveTo(0,-620,150,-590);X.quadraticCurveTo(220,-330,190,-160);X.quadraticCurveTo(0,-120,-190,-160);X.quadraticCurveTo(-220,-330,-150,-590);X.closePath()},'#2f5d3a',8);
 X.strokeStyle='rgba(255,255,255,.25)';X.lineWidth=6;for(const[a,b,c,d]of[[-90,-560,-60,-300],[40,-600,80,-350],[-20,-420,10,-220],[110,-480,140,-260]]){X.beginPath();X.moveTo(a,b);X.quadraticCurveTo(a+30,(b+d)/2,c,d);X.stroke()}
 path(()=>{X.moveTo(-60,-600);X.lineTo(-30,-640);X.lineTo(-5,-610);X.lineTo(25,-645);X.lineTo(40,-595);X.closePath()},'#2f5d3a',6);X.restore()}
function emailCard(x,y,s,p){if(p<=0)return;X.save();X.translate(x,y);X.scale(s*eo(C(p)),s*eo(C(p)));X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=16;rr(-230,-120,460,240,24,'#fff',6);X.shadowColor='transparent';
 rr(-230,-120,460,66,24,'#3d8bfd',0);X.font="800 30px Inter";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('School ✉',0,-86);
 X.fillStyle='#222';X.font="800 38px Inter";X.fillText('Dinosaur dress-up day',0,-4);X.font="600 32px Inter";X.fillStyle='#666';X.fillText('Friday 13th 🦖',0,56);X.restore()}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,frame:[300,520],plant:0,lamp:120},o))}

// A: 07:52 at the door
sh(0,(t,r)=>{cam(540,1000,lerp(1.1,1.16,C(r/3.8)),t,.15);hallway(t,{clock:1});
 const hit=r>.5,bj=Math.abs(Math.sin(t*7))*40;
 backpack(810,1300-bj,.8);
 sm(760,1760-bj,.78,Object.assign({t,eyes:'happy',brow:'up',mouth:'open',talk:r<2?t:null,armL:150,bendL:-40,armR:150,bendR:40,look:[-.5,0]},KID));
 sm(330,1760,1.27,Object.assign({t,eyes:hit?'wide':'open',lid:hit?0:.4,brow:hit?'worried':'flat',mouth:hit?'o':'smile',look:hit?[.7,.1]:[.2,.3],sweat:r>1.6,armR:40,bendR:-120,holdR:(x,y)=>mug(x,y,1,t)},YOU));
 if(hit&&r<1.3){X.save();X.globalAlpha=.8*(1-C((r-.5)/.8));for(let k=1;k<4;k++)circ(330,620,140+k*30*(1+C((r-.5)/.8)),null,5);X.restore()}
 label3('You at 07:52 😳',C(r/.25))});
// B: two weeks ago, sofa, 'I'll remember'
sh(T('s1'),(t,r)=>{cam(540,1000,1.05,t,.2);sofaRoom(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,600,'255,220,150',.45);
 sm(470,1640,1.18,Object.assign({t,eyes:'open',lid:.35,brow:'flat',mouth:'smirk',look:[.5,-.3],tilt:-6,armR:40,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,1,'#ffffff'),armL:70,bendL:-60},YOU));
 psofa(500,1640,1.15);
 emailCard(780,1000,1,C((r-.2)/.35));
 if(r>1.4){X.save();X.globalAlpha=C((r-1.4)/.3);txt('🤷',300,560,90,'#000',0,'400 ');X.restore()}
 label3('You, 2 weeks ago 🛋️',C(r/.25))});
// C: bin bag, quiet drive feeling
sh(T('s2'),(t,r)=>{cam(540,1020,lerp(1.05,1.12,C(r/3)),t,.2);hallway(t,{rainy:1,wall:'#c9cfd8',wall2:'#aeb7c4',floor:'#8a7a6a',floor2:'#6e5f50',clock:0});
 sm(760,1760,.8,Object.assign({t,eyes:'open',lid:.4,brow:'sad',mouth:'frown',look:[-.6,.1],armL:40,bendL:20,armR:40,bendR:20},KID));binBag(760,1760,.8,t);
 sm(330,1760,1.25,Object.assign({t,eyes:'open',brow:'worried',mouth:'grin',sweat:1,look:[.7,.2],tilt:6,armR:20,bendR:-30,armL:150,bendL:-130},YOU));
 label3('You, 07:56 😬',C(r/.25))});
// D: rewind to the sofa, voice note, Memopai hops on
sh(T('s3'),(t,r)=>{cam(540,1000,1.04,t,.2);sofaRoom(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,600,'255,220,150',.45);
 const talk=r>1.5;
 sm(400,1640,1.18,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,talk)},YOU));
 psofa(500,1640,1.15);
 const mp=C((r-.9)/.6);if(mp>0){memo(820,1390,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(820,1050,mp,10,240)}
 emailCard(760,820,.75,r<.9?1:1-C((r-.9)/.3));
 rewind(1-C((r-.1)/.6),t,'◀◀ 2 WEEKS AGO');
 label3(r<1.0?'You, 2 weeks ago 🛋️':'Memopai 😎',C(r/.25))});
// E: WhatsApp chat
sh(T('y1')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>2.0&&r<2.3,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/2.6),dur:'0:03',time:'20:14'},{a:2.3,me:0,text:'✅ Thu 12th, 19:00 · Dinosaur costume 🦖',time:'20:14'}]})});
// F: Thursday 19:00 buzz, making the costume
sh(T('s4'),(t,r)=>{cam(540,1000,1.04,t,.2);proom(t,{win:780,night:1,lamp:140,frame:null,plant:0,wall:'#f6dfc0',wall2:'#ecc9a0'});glow(140,800,600,'255,214,150',.5);
 const buzz=r>.2,make=r>1.3;
 if(!make){sm(420,1760,1.25,Object.assign({t,eyes:r<.9?'wide':'open',brow:'up',mouth:'o',look:[.5,.6],armR:35,bendR:-115,holdR:(x,y)=>phoneH(x,y,-.12,buzz)},YOU));
  notif(150,buzz?C((r-.2)/.3):0,'Memopai','Dinosaur costume for Friday')}
 else{const q=r-1.3;
  sm(300,1760,1.2,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,.4],armR:70,bendR:-60+Math.sin(t*9)*15,holdR:(x,y)=>{path(()=>{X.moveTo(x-10,y-40);X.lineTo(x+30,y-130);X.lineTo(x+70,y-40);X.closePath()},'#7ccc5e',6)}},YOU));
  sm(770,1760,.8,Object.assign({t,eyes:'happy',brow:'up',mouth:'open',look:[-.6,.3],armL:110,bendL:-40,armR:120,bendR:30},KID));
  rr(140,1390,800,60,18,'#c99a6b',7);rr(180,1450,40,310,8,'#a6774f',5);rr(860,1450,40,310,8,'#a6774f',5);
  for(let k=0;k<4;k++)path(()=>{const bx=420+k*80;X.moveTo(bx,1392);X.lineTo(bx+30,1330);X.lineTo(bx+60,1392);X.closePath()},'#7ccc5e',5);
  sparkles(540,1200,C(q/1),8,200)}
 if(make)label3('You, Thursday 19:00 ✂️',C((r-1.3)/.25))});
// G: Friday 07:52, sorted
sh(T('p1'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/4.5)),t,.15);hallway(t,{clock:1,wall:'#fdecd2',wall2:'#f6d7ae'});glow(760,620,700,'255,240,190',.5);
 const roar=(t*1.2)%1<.5;
 backpack(810,1290,.8);
 kidDino(760,1760,.8,t,{eyes:roar?'closed':'happy',brow:'angry',mouth:'open',armL:120,bendL:-60,armR:120,bendR:60,look:[-.5,0]});
 if(roar&&r>.8){X.save();X.globalAlpha=.8;txt('ROAR!',830,720,64,'#e0533d',0,'900 ');X.restore()}
 sm(330,1760,1.27,Object.assign({t,eyes:r>1.5?'happy':'open',lid:.2,brow:'flat',mouth:'smile',blush:1,look:[.6,.1],tilt:4,armR:150,bendR:-150,holdR:(x,y)=>mug(x+10,y+40,1,t)},YOU));
 sparkles(560,900,C((r-.5)/1.5),10,300);
 label3(r<1.6?'You, Friday 07:52 ☀️':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>{cam(540,1000,1.13,t,.1);hallway(t,{clock:1});backpack(810,1300,.8);
 sm(760,1760,.78,Object.assign({t,eyes:'happy',brow:'up',mouth:'open',armL:150,bendL:-40,armR:150,bendR:40,look:[-.5,0]},KID));
 sm(330,1760,1.27,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',look:[.7,.1],sweat:1,armR:40,bendR:-120,holdR:(x,y)=>mug(x,y,1,t)},YOU))});
