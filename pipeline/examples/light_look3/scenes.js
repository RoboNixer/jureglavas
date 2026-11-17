const YOU={hair:'curl'};const GUY={hair:'spike',hairc:'#f08a24'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,'#8fd0ff',0);X.restore()}
 rr(240,-90,80,90,14,'#e86a5a',6);X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#fbe9cf',wall2:'#f2d3ae',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));}

// ---- craft ladder 2026-11-17 20:00: car kit ----
// engIcon(x,y,s,on,t): the orange check-engine warning symbol (glows + pulses when on)
function engIcon(x,y,s=1,on=1,t=0){X.save();X.translate(x,y);X.scale(s,s);const c=on?'#ffa21a':'#4a4f5a';
 if(on)glow(0,0,150,'255,160,30',.55+.15*Math.sin(t*6));
 X.fillStyle=c;X.strokeStyle=c;X.lineWidth=10;X.lineJoin='round';
 X.fillRect(-46,-26,84,56);X.fillRect(-20,-44,34,18);X.fillRect(-62,-12,16,30);X.fillRect(38,-14,14,12);X.fillRect(38,8,14,12);X.fillRect(52,-20,10,46);
 X.restore()}
// pcar(x,groundY,s,o): side-view hatchback, front = +x. o: col, t, spin (wheel speed), steam (0..1), flip, driver:{eyes,mouth,brow,sweat}, light (dash icon in window), bounce
function pcar(x,y,s=1,o={}){const t=o.t||0,col=o.col||'#e2533d',col2=o.col2||'#b93a28';X.save();X.translate(x,y-(o.bounce?Math.abs(Math.sin(t*9))*6:0));X.scale(s*(o.flip?-1:1),s);
 X.save();X.globalAlpha=.22;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,470,26,0,0,7);X.fill();X.restore();
 path(()=>{X.moveTo(-300,-250);X.lineTo(-210,-460);X.quadraticCurveTo(-200,-480,-170,-480);X.lineTo(150,-480);X.quadraticCurveTo(180,-480,200,-455);X.lineTo(330,-260);X.closePath()},col,8);
 rr(-450,-270,900,190,60,col,8);rr(-430,-160,860,40,18,col2,0);
 path(()=>{X.moveTo(-270,-265);X.lineTo(-195,-440);X.lineTo(-20,-440);X.lineTo(-20,-265);X.closePath()},'#bfe1f2',6);
 path(()=>{X.moveTo(10,-265);X.lineTo(10,-440);X.lineTo(150,-440);X.lineTo(285,-265);X.closePath()},'#bfe1f2',6);
 X.save();X.globalAlpha=.45;line([[-150,-420],[-210,-290]],14,'#fff');line([[90,-420],[40,-300]],14,'#fff');X.restore();
 if(o.driver){const d=o.driver;X.save();path(()=>{X.moveTo(10,-265);X.lineTo(10,-440);X.lineTo(150,-440);X.lineTo(285,-265);X.closePath()},null,0);X.clip();
  X.scale(o.flip?-1:1,1);const hx=(o.flip?-1:1)*120;circ(hx,-330,78,'#fff',7);ell(hx+18,-345,15,20,'#151515',0);ell(hx+52,-345,13,18,'#151515',0);circ(hx+22,-352,5,'#fff',0);circ(hx+55,-352,5,'#fff',0);
  path(()=>{X.arc(hx+34,-305,20,0.15,Math.PI-.15)},null,6);path(()=>{X.moveTo(hx-20,-405);X.quadraticCurveTo(hx+10,-450,hx+30,-400)},null,8);X.restore()}
 line([[-60,-230],[-20,-230]],10,'#333');line([[150,-230],[190,-230]],10,'#333');
 rr(400,-230,52,44,14,'#ffe9a0',5);rr(-452,-235,36,50,10,'#ff5a4a',5);
 for(const wx of[-270,270]){circ(wx,-80,98,'#222',8);circ(wx,-80,52,'#c8ccd2',6);const a=t*(o.spin||0);for(let k=0;k<5;k++){const b=a+k*Math.PI*2/5;line([[wx,-80],[wx+Math.cos(b)*44,-80+Math.sin(b)*44]],7,'#8a9099')}circ(wx,-80,12,'#555',0)}
 X.restore();
 if(o.steam>0){for(let k=0;k<7;k++){const ph=(t*.5+k/7)%1;X.save();X.globalAlpha=o.steam*.55*Math.sin(ph*Math.PI);X.fillStyle='#eef1f5';X.beginPath();X.arc(x+(o.flip?-1:1)*(320*s)+Math.sin(k*2+t)*30,y-300*s-ph*420,(40+ph*70)*s,0,7);X.fill();X.restore()}}}
// towtruck(x,groundY,s,o): yellow tow truck, front = +x; o.flip, o.t, o.spin, o.beacon (blink)
function towtruck(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 X.save();X.globalAlpha=.22;X.fillStyle='#000';X.beginPath();X.ellipse(-80,8,560,26,0,0,7);X.fill();X.restore();
 rr(-620,-250,700,90,20,'#5b6270',8);line([[-600,-250],[-450,-420],[-380,-420]],18,'#3b4250');circ(-380,-410,16,'#3b4250',0);line([[-380,-410],[-380,-300]],6,'#222');
 rr(60,-480,330,400,46,'#f2b632',8);path(()=>{X.moveTo(110,-450);X.lineTo(300,-450);X.lineTo(360,-320);X.lineTo(110,-320);X.closePath()},'#bfe1f2',6);
 rr(380,-200,40,60,12,'#ffe9a0',5);rr(-640,-190,640,80,20,'#f2b632',8);txt('TOW',-300,-148,52,'#3b4250',0);
 const on=Math.sin(t*14)>0;rr(170,-530,90,50,18,on?'#ff8a00':'#a85a10',6);if(on)glow(215,-505,160,'255,150,30',.6);
 for(const wx of[-470,-200,250]){circ(wx,-80,90,'#222',8);circ(wx,-80,44,'#c8ccd2',6);const a=t*(o.spin||0);line([[wx,-80],[wx+Math.cos(a)*36,-80+Math.sin(a)*36]],7,'#8a9099')}
 X.restore()}
// carInt(t,o): inside the car, looking at the driver; o.rain, o.sunny, light (0..1 icon on), you = sm opts, memo hop
function carInt(t,o={}){X.fillStyle=o.sunny?'#4d5466':'#33384a';X.fillRect(-500,-500,2100,2900);
 const WY=180,WH=720;X.save();X.beginPath();X.roundRect?X.roundRect(70,WY,940,WH,90):X.rect(70,WY,940,WH);X.clip();
 if(o.sunny){const g=X.createLinearGradient(0,WY,0,WY+WH);g.addColorStop(0,'#8fd3ff');g.addColorStop(1,'#e8f6ff');X.fillStyle=g;X.fillRect(0,WY,1080,WH);psun(860,320,60,t);pblur(5,()=>{hills(760,'#7dbb6a',t,0,60,2);hills(840,'#5f9f55',t,0,50,5)})}
 else{const g=X.createLinearGradient(0,WY,0,WY+WH);g.addColorStop(0,'#5d6b86');g.addColorStop(1,'#8d9ab0');X.fillStyle=g;X.fillRect(0,WY,1080,WH);pblur(6,()=>{hills(780,'#55705a',t,0,60,2)});prain(t,.55,70);
  X.save();X.globalAlpha=.35;for(let k=0;k<14;k++){const dx=100+rnd(k)*880,dy=WY+20+((rnd(k+5)*700+t*90*(0.5+rnd(k+2)))%700);ell(dx,dy,7,11,'#dfe9f7',0)}X.restore()}
 X.restore();rr(70,WY,940,WH,90,null,14);
 rr(390,560,300,330,80,'#5a6070',7);
 const P=o.phone;sm(540,1860,1.3,Object.assign({t,armL:20,armR:P?150:20,bendR:P?-150:0,holdR:P?((hx,hy)=>phoneH(hx,hy,.25,P>1)):null},YOU,o.you||{}));
 if(o.light>0)glow(540,760,520,'255,150,40',.38*o.light*(1+.25*Math.sin(t*6)));
 rr(-60,1060,1200,1000,70,'#23262e',8);rr(290,1090,500,250,50,'#121419',6);
 for(const gx of[385,695]){path(()=>{X.arc(gx,1250,62,Math.PI*1.05,Math.PI*1.95)},null,7,'#8a93a3');line([[gx,1250],[gx+Math.cos(-2.2+.3*Math.sin(t))*50,1250+Math.sin(-2.2+.3*Math.sin(t))*50]],6,'#ff5a4a')}
 engIcon(540,1230,1.15,o.light>0?1:0,t);
 path(()=>{X.arc(540,1360,400,Math.PI*1.12,Math.PI*1.88)},null,46,'#15171c');ell(250,1070,40,34,'#151515',0);if(!P)ell(830,1070,40,34,'#151515',0);
 if(o.memo>0){memo(900,1060,.5,{t,wave:1,hop:o.memo,glow:1});if(o.memo<1)sparkles(900,880,o.memo,10,180)}}
function roadside(t,o={}){psky('#6b7891','#8e9ab0','#aab3c4',1080);pclouds(t,160,'#b9c1cf','#949db0',5,4);proad(t,{wet:1,hz:1080});prain(t,.5,90)}

// A: Monday 08:10, rainy roadside, your car steaming, the tow truck arrives; then the tow guy's deadpan line
function shotA(t,r,cov){const rm=T('m1')-.05,me=r>rm;cam(me?620:560,me?1000:1050,lerp(1.0,me?1.1:1.05,C(r/3)),t,.15);roadside(t);
 const tx=lerp(1700,1060,eo(C((r-.6)/1.6)));towtruck(tx,1250,.7,{t,flip:1,spin:-eo(C((r-.6)/1.6))*6});
 pcar(250,1330,.62,{t,steam:1});
 sm(330,1760,1.15,Object.assign({t,eyes:'wide',brow:'worried',mouth:me?'flat':'wavy',sweat:1,look:me?[.9,-.1]:[.2,-.3],armL:30,armR:30},YOU));
 if(r>1.6)sm(820,1760,1.12,Object.assign({t,flip:1,eyes:'open',lid:.5,brow:'flat',mouth:me?'smirk':'flat',talk:me&&r<rm+1.8?t:null,look:[-.9,0],armR:me?25:15,armL:me?40:15},GUY));
 if(me)chip(680,560,'🟠',.0);
 if(cov){X.save();X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=24;circ(545,1330,150,'#1b1d22',8);X.restore();engIcon(540,1332,1.5,1,t);return}
 label3(me?'The tow guy 🙄':'You, Monday 08:10 😩',C((me?r-rm:r)/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: inside the car, the orange light on since August, it stares at you; Memopai hops onto the dashboard
sh(T('s1')-.05,(t,r)=>{cam(540,1050,lerp(1.06,1.12,C(r/4)),t,.12);const mp=C((r-1.9)/.6);
 carInt(t,{light:1,you:{eyes:'open',lid:r>1.3?.35:0,brow:'worried',mouth:r>1.3?'wavy':'flat',look:[0,.8],sweat:r>1.3},memo:mp});
 label3(mp>0?'Memopai 👋':'You, since August 😬',C((mp>0?r-1.9:r)/.2))});
// C: rewind to August: the light pops on, still parked, one voice note to Memopai, the 🔧 flies into the phone
sh(T('s2')-.05,(t,r)=>{cam(540,1050,1.08,t,.12);const on=r>.7?1:0,ph=r>1.1?(r>1.5?2:1):0;
 carInt(t,{sunny:1,light:on,phone:ph,you:{eyes:on&&r<1.2?'wide':'open',brow:'up',mouth:r>1.6&&r<3.2?'open':'smile',talk:r>1.6&&r<3.2?t:null,look:on&&r<1.3?[0,.8]:[.6,.3]},memo:1});
 const fl=C((r-1.8)/1.1);if(r>1.5){if(fl<1){const px=lerp(540,700,eo(fl)),py=lerp(420,800,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🔧',.95-fl*.45)}else sparkles(700,800,C((r-2.9)/.5),8,120,'#7cf0a0')}
 rewind(1-C(r/.5),t,'◀◀ AUGUST');
 if(r>.5)label3('You, back in August 📱',C((r-.5)/.2))});
// D: the WhatsApp chat
sh(T('s2')+3.45,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2350';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.3&&r<1.7,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.2),dur:'0:03',time:'08:41'},{a:1.7,me:0,text:'Got it ✅ Mon 09:00 · Book the garage 🔧',time:'08:41'}]})});
// E: Monday 09:00 at your desk: buzz, one call, booked
sh(T('s3')-.25,(t,r)=>{cam(540,1000,1.04,t,.2);office(t);glow(780,500,650,'255,225,160',.55);wclock(840,560,.9,9,0);
 const bz=r>.3,call=r>1.2,ok=r>2.0;
 sm(450,1760,1.25,Object.assign({t,eyes:bz&&r<.9?'wide':(ok?'happy':'open'),brow:bz?'up':'flat',mouth:call&&!ok?'open':(ok?'grin':(bz?'o':'smile')),talk:call&&!ok?t:null,look:bz?[.6,.4]:[.3,.5],
  armR:call?150:35,bendR:call?-160:-115,holdR:(x,y)=>phoneH(x,y,call?.3:-.12,bz)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t});
 const n=r<1.2?C((r-.3)/.3):Math.max(0,1-(r-1.2)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Book the garage 🔧 (Mon 09:00)'));
 if(ok){chip(760,800,'✅',eo(C((r-2.0)/.25)));sparkles(760,800,C((r-2.0)/.8),10,220,'#7cf0a0')}
 if(n<=0)label3('You, Monday 09:00 📱',C((r-1.2)/.2))});
// F: the garage, sunny, same guy: 'Let me guess... the little light? Caught it early!'
function garage(t){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#cfd8e2');g.addColorStop(1,'#b3bfcc');X.fillStyle=g;X.fillRect(-500,-500,2100,1800);
 rr(-40,330,560,900,10,'#8fd3ff',10);psun(380,520,50,t);pblur(4,()=>hills(1050,'#7dbb6a',t,0,60,3));for(let k=0;k<4;k++)rr(-40,330+k*40,560,22,4,'#9aa6b4',0);
 rays(250,400,t,'255,245,200',.22,9,2200);rr(640,520,360,420,16,'#8a6142',8);
 for(let k=0;k<3;k++){line([[700+k*110,600],[700+k*110,740]],16,'#c8ccd2');circ(700+k*110,590,22,null,8)}
 const f=X.createLinearGradient(0,1230,0,1920);f.addColorStop(0,'#9aa1a9');f.addColorStop(1,'#7b828b');X.fillStyle=f;X.fillRect(-500,1230,2100,1200);ell(400,1500,300,40,'rgba(0,0,0,.12)',0)}
sh(T('m2')-.05,(t,r)=>{cam(560,1050,lerp(1.02,1.08,C(r/3)),t,.12);garage(t);
 pcar(330,1480,.62,{t});
 sm(780,1760,1.18,Object.assign({t,flip:1,eyes:r>1.4?'happy':'open',lid:r>1.4?0:.45,brow:r>1.4?'up':'smug',mouth:r>1.4?'grin':'smirk',talk:r<2.3?t:null,look:[-.8,0],armL:r>1.4?150:20,bendL:r>1.4?-40:0},GUY));
 if(r>1.4){chip(560,700,'👍',eo(C((r-1.4)/.25)));sparkles(560,700,C((r-1.4)/.8),10,200,'#7cf0a0')}
 label3('Same guy 😏',C(r/.2))});
// G: payoff: driving home in the sun, dashboard clear
sh(T('p1')-.05,(t,r)=>{cam(540,1000,1.04,t,.12);psky('#7cc6f5','#bfe6fb','#eaf7ff',1150);psun(850,330,70,t);pclouds(t*3,180);
 pblur(4,()=>{hills(950,'#9ccc7a',t,60,70,1);hills(1050,'#7db463',t,120,60,4)});
 X.fillStyle='#8fbf6a';X.fillRect(-500,1100,2100,200);rr(-500,1240,2100,300,0,'#5a5f66',0);for(let k=-2;k<9;k++){const x=((k*260-t*700)%2340+2340)%2340-500;rr(x,1440,140,18,8,'#f1f1f1',0)}X.fillStyle='#8fbf6a';X.fillRect(-500,1540,2100,700);
 for(let k=0;k<5;k++){const x=((k*480-t*380)%2400+2400)%2400-500;rr(x-14,1000,28,190,8,'#7a5236',5);circ(x,970,95,'#5f9f55',7)}
 pcar(520,1400,1.05,{t,spin:9,bounce:1,driver:1});
 label3('You, sorted 😌',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only frame
sh(1000,(t,r)=>shotA(t,1.7,1));
