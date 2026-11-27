// 2026-11-27 14:00 HALF-HALF "First snow: only one of you booked the tyre change"
// craft ladder (look3.js): splitPanel3() split-screen kit + capMid()/capLow() divider captions, snowStreet3() winter street (+ hill slope),
//  tyreShop3() garage set, tyreMarks() summer vs winter tyres on pcar(), kidInCar() rear-window kid
const DAD={hair:'spike',hairc:'#3a2a20',pj:'#2f4f7f',limb:'#26324a',beanie:'#f2b636'};
const DADIN={hair:'spike',hairc:'#3a2a20',pj:'#7a8f5a',limb:'#3a3530'};
const KID={hair:'bun',hairc:'#7a4a2a',pj:'#e2508a',limb:'#4a2a3a',lashes:1};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const LT='Without Memopai 😩',LB='With Memopai 😌',SP={lt:LT,lb:LB,lbY:1570};
const CAR='#d9544a',CAR2='#b33d33';
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.5);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function wclk(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,70,'#fff',7);const a=(h%12+m/60)/12*Math.PI*2,b=m/60*Math.PI*2;line([[0,0],[Math.sin(a)*38,-Math.cos(a)*38]],9,'#151515');line([[0,0],[Math.sin(b)*56,-Math.cos(b)*56]],6,'#151515');circ(0,0,7,'#e2533d',0);X.restore()}
// living room with an autumn (o.snow=0) window: falling leaves, a calendar page, a lamp, a plant
function lounge(t,o={}){proom(t,{win:null,frame:null,plant:0,lamp:0,wall:'#efe2cf',wall2:'#dcc8ae',floor:'#b98a5e',floor2:'#94673f'});
 rr(620,520,360,420,14,'#fff',8);X.save();X.beginPath();X.rect(630,530,340,400);X.clip();const g=X.createLinearGradient(0,530,0,930);g.addColorStop(0,'#9cc8ee');g.addColorStop(1,'#f6dcb0');X.fillStyle=g;X.fillRect(630,530,340,400);
 circ(760,760,110,'#e08a2e',0);circ(860,720,90,'#c9622a',0);rr(800,800,20,140,4,'#6a4428',0);
 for(let k=0;k<9;k++){const ph=(t*.25+k/9)%1;X.save();X.translate(640+((k*53)%320)+Math.sin(t*2+k)*20,530+ph*400);X.rotate(t*2+k);ell(0,0,12,6,k%2?'#e08a2e':'#c9622a',0);X.restore()}X.restore();
 line([[800,530],[800,930]],8,'#fff');line([[630,730],[970,730]],8,'#fff');
 rr(170,560,170,190,10,'#fff',6);rr(170,560,170,50,10,'#e2533d',6);txt(o.cal||'NOV',255,586,30,'#fff',0,'900 ');txt(o.day||'6',255,676,80,'#151515',0,'900 ');
 wclk(440,620,.8,o.h||19,o.m||0);
 X.save();X.translate(110,1240);rr(-50,-120,100,120,14,'#c96a3a',6);for(let k=0;k<5;k++){X.save();X.rotate(-.8+k*.4+Math.sin(t*1.5+k)*.04);ell(0,-200,26,90,'#4f9a5a',5);X.restore()}X.restore();
 psofa(540,1420,1.05,'#5a7fb5','#4a6a9a')}
function tv(x,y,s,t,on=1){X.save();X.translate(x,y);X.scale(s,s);rr(-170,-110,340,200,14,'#1b1b1f',7);if(on){X.fillStyle=`hsl(${(t*60)%360},60%,55%)`;X.fillRect(-150,-92,300,164);glow(0,-10,300,'150,180,255',.35)}rr(-20,90,40,40,4,'#333',0);X.restore()}

// ---------- A: first snow morning, dad + daughter walk to the car (tracking pan, in sync) ----------
function walkCar(t,r,win){cam(lerp(360,600,eio(r/4)),1170,1.0,t,.1);snowStreet3(t,{grey:!win});
 pcar(760,1460,.55,{t,col:CAR,col2:CAR2});tyreMarks(760,1460,.55,{kind:win?'winter':'summer'});
 X.save();X.globalAlpha=.9;ell(760,1460-470*.55+10,210,26,'#ffffff',0);X.restore();
 const dx=lerp(150,470,eo(r/3.4)),wk=r<3.4?t:null;
 sm(dx-190,1680,.6,Object.assign({t,walk:wk,eyes:win?'happy':'open',mouth:win?'grin':'o',look:[.6,-.3],armR:150,bendR:-20},KID));
 sm(dx,1700,.88,Object.assign({t,walk:wk,eyes:'open',brow:win?'up':'worried',mouth:win?'smile':'wavy',sweat:!win&&r>2.6,look:[.8,-.1],armR:95,bendR:-95,holdR:(x,y)=>{X.save();X.translate(x,y);rr(-12,-60,24,70,5,'#2a6fdb',4);rr(-50,-80,100,22,6,'#2a6fdb',4);X.restore()}},DAD))}
sh(0,(t,r)=>{capMid(1040);splitPanel3(t,tt=>walkCar(tt,r,0),tt=>walkCar(tt,r,1),Object.assign({tagA:C(r/.3)},SP))});

// ---------- B: three weeks ago, both on the sofa, same thought (push-in) ----------
function sofaThink(t,r,mode){cam(lerp(520,560,C(r/2.5)),1080,lerp(1.0,1.12,eo(r/2.6)),t,.1);lounge(t,{cal:'NOV',day:'6'});
 sm(500,1500,.92,Object.assign({t,eyes:'open',brow:'up',mouth:'smirk',look:[.5,-.6],armL:30,armR:95,bendR:-95,holdR:(x,y)=>phoneH(x,y,-.1,0)},SIT,DADIN));
 thought3(770,740,185,C((r-.2)/.3),640,860,(x,y)=>{txt('book',x,y-28,54,'#151515',0,'900 ');txt('tyres 🛞',x,y+38,54,'#151515',0,'900 ')})}
sh(T('s1')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>sofaThink(tt,r),tt=>sofaThink(tt,r),SP)});

// ---------- C: the split: top 'later 🙃' (pops), bottom voice note to Memopai ----------
function topLater(t,r){cam(540,1080,1.08,t,.1);lounge(t,{cal:'NOV',day:'6'});tv(860,1180,.9,t,1);
 const lean=eo(C((r-1.2)/.6));sm(500,1500,.92,Object.assign({t,eyes:'open',lid:lean*.5,brow:'flat',mouth:'smirk',look:[.9,0],tilt:-lean*8,armL:30,armR:40},SIT,DADIN));
 const a=C((r-.1)/.3)*(1-C((r-2.3)/.2));const lat=r>.9;
 thought3(770,740,185*(1+C((r-2.2)/.2)*.3),a,640,860,(x,y)=>{if(lat)txt('later 🙃',x,y+6,58,'#7a7f8a',0,'900 ');else{txt('book',x,y-28,54,'#151515',0,'900 ');txt('tyres 🛞',x,y+38,54,'#151515',0,'900 ')}})}
function botNote(t,r){cam(760,1080,1.08,t,.1);lounge(t,{cal:'NOV',day:'6'});
 const up=eo(C(r/.4));sm(450,1500,.92,Object.assign({t,eyes:'open',brow:'up',mouth:r<1.6?'open':'smile',talk:r<1.6?t:null,look:[.4,-.2],armL:30,armR:lerp(95,140,up),bendR:-120,holdR:(x,y)=>phoneH(x,y,-.3,1)},SIT,DADIN));
 if(r<1.7)for(let k=0;k<3;k++){X.save();X.globalAlpha=.6*(1-((t*2+k/3)%1));X.strokeStyle='#25d366';X.lineWidth=6;X.beginPath();X.arc(560,690,40+((t*2+k/3)%1)*90,-.7,.7);X.stroke();X.restore()}
 const mp=C((r-1.6)/.5);if(mp>0)memo(250,1160,.42,{t,wave:1,hop:mp,glow:1})}
function chatOv(t,r){return (tt,y0,y1)=>{X.save();const y=y0+150;
 waBubble(885,y,430,'🎤 0:04  “Remind me Saturday at 10 to book the tyre change”',1,C((r-.25)/.3),'19:02');
 if(r>1.7){waBubble(455,y+230,430,'✅ Got it! Sat 10:00 · book the tyre change 🛞',0,C((r-1.7)/.3),'19:02')}
 X.restore()}}
sh(T('s2')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topLater(tt,r),tt=>botNote(tt,r),Object.assign({ovB:chatOv(t,r)},SP))});

// ---------- D: Saturday 10:00 (top naps, bottom gets pinged + books) ----------
function topNap(t,r){cam(lerp(560,520,C(r/2.6)),1100,lerp(1.05,1.12,C(r/2.6)),t,.1);lounge(t,{cal:'NOV',day:'8',h:10,m:0});tv(860,1180,.9,t,1);
 sm(520,1500,.92,Object.assign({t,eyes:'closed',brow:'flat',mouth:'o',tilt:-16,armL:20,armR:30},SIT,DADIN));
 for(let k=0;k<3;k++){const ph=(t*.6+k/3)%1;X.save();X.globalAlpha=1-ph;txt('z',560+ph*120,640-ph*220,40+ph*40,'#3a4a66',8,'900 ');X.restore()}}
function botPing(t,r){cam(lerp(520,580,C(r/2.6)),1100,lerp(1.05,1.12,C(r/2.6)),t,.1);lounge(t,{cal:'NOV',day:'8',h:10,m:0});
 const call=r>1.1;sm(480,1500,.92,Object.assign({t,eyes:'open',brow:'up',mouth:call?'open':'o',talk:call?t:null,look:[.5,-.3],armL:30,armR:call?150:95,bendR:call?-150:-95,holdR:(x,y)=>phoneH(x,y,call?.2:-.15,1)},SIT,DADIN));
 if(!call){const sh_=Math.sin(t*60)*6;glow(560,1100,160,'130,240,160',.5);txt('📳',560+sh_,1000,70,'#fff',0,'400 ')}}
function pingOv(t,r){return (tt,y0,y1)=>{const p=C((r-.15)/.35)*(1-C((r-1.4)/.2));if(p>0){X.save();X.globalAlpha=C(p*2);const yy=y0+150+lerp(-60,0,eo(p));X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=20;rr(160,yy,740,150,34,'rgba(250,250,252,.98)',5);X.shadowColor='transparent';avatar(240,yy+75,48,4);
  txt('Memopai · now',300,yy+48,30,'#6b7280',0,'700 ','left');txt('⏰ Book the tyre change 🛞',300,yy+100,40,'#151515',0,'800 ','left');X.restore()}
 const s=C((r-1.8)/.25);if(s>0){X.save();X.translate(735,y0+380);X.rotate(-.12);X.scale(lerp(1.5,.8,eo(s)),lerp(1.5,.8,eo(s)));X.globalAlpha=C(s*2);rr(-190,-62,380,124,20,'rgba(31,170,89,.12)',8,);X.lineWidth=8;X.strokeStyle='#1faa59';X.strokeRect(-190,-62,380,124);txt('BOOKED ✅',0,4,60,'#1faa59',0,'900 ');X.restore()}}}
sh(T('s3')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topNap(tt,r),tt=>botPing(tt,r),Object.assign({ovB:pingOv(t,r)},SP))});

// ---------- E: first snow, the hill (top slides backwards, bottom climbs) ----------
function hill(t,r,win){const SL=-.17;const x=win?lerp(330,680,eio(r/2.2)):lerp(620,380,eo(r/1.8))+Math.sin(t*30)*4,y=1420+(x-540)*Math.tan(SL);
 cam(lerp(540,x,.7),y-170,lerp(1.25,1.4,C(r/2)),t,.12);snowStreet3(t,{grey:!win,slope:SL});
 X.save();X.translate(x,y);X.rotate(SL+(win?0:Math.sin(t*6)*.03));pcar(0,0,.5,{t,col:CAR,col2:CAR2});tyreMarks(0,0,.5,{kind:win?'winter':'summer',t,spin:win?8:-26});kidInCar(0,0,.5,{wide:!win,mouth:win?'smile':'o'});
 if(!win)for(let k=0;k<10;k++){const ph=(t*2+k/10)%1;X.save();X.globalAlpha=.8*(1-ph);circ(140+ph*160,-30-ph*90+Math.sin(k)*20,10+ph*16,'#fff',0);circ(-130+ph*160,-30-ph*90,10+ph*16,'#fff',0);X.restore()}
 X.restore()}
sh(T('k1')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>hill(tt,r,0),tt=>hill(tt,r,1),SP)});

// ---------- F: top = the tyre shop queue with the whole town; bottom = school drop-off on time ----------
function topShop(t,r){cam(lerp(420,640,eio(r/2.4)),1100,1.0,t,.1);tyreShop3(t,{grey:1,board:C((r-.3)/.4),next:'11 DEC'});
 const cs=['#4a8fe0','#7cc47c','#e8a33a','#b07ae0'];for(let k=0;k<4;k++){const cx=-80+k*330;pcar(cx,1470,.36,{t,col:cs[k],col2:'#555'});X.save();X.globalAlpha=.9;ell(cx,1470-470*.36+8,140,18,'#fff',0);X.restore()}
 sm(560,1760,.85,Object.assign({t,eyes:'open',lid:.4,brow:'sad',mouth:'frown',look:[.6,-.4],armL:12,armR:12},DAD))}
function botSchool(t,r){cam(lerp(480,600,eio(r/2.4)),1120,1.0,t,.1);snowStreet3(t,{});
 X.save();X.translate(820,1250);rr(-14,-420,28,420,5,'#4a4f5a',0);rr(-170,-480,340,110,16,'#1f6fb5',6);txt('SCHOOL 🏫',0,-424,48,'#fff',0,'900 ');X.restore();
 pcar(180,1440,.5,{t,col:CAR,col2:CAR2});tyreMarks(180,1440,.5,{kind:'winter'});
 const kx=lerp(560,760,eo(r/2.2));sm(kx,1700,.6,Object.assign({t,walk:r<2.2?t:null,flip:1,eyes:'happy',mouth:'grin',armR:160,bendR:-20,armL:20},KID));kidbag(kx,1700,.6,'#ffb02e',-1);
 sm(420,1720,.88,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',look:[.9,-.2],armR:150+Math.sin(t*10)*14,bendR:-30},DAD))}
sh(T('s4')-.08,(t,r)=>{capMid(1040);splitPanel3(t,tt=>topShop(tt,r),tt=>botSchool(tt,r),SP)});

// ---------- G: the warm half takes over the screen ----------
function sorted(t,r){cam(540,lerp(1100,1060,C(r/2)),lerp(1.0,1.06,C(r/2)),t,.1);snowStreet3(t,{});
 pcar(800,1440,.5,{t,col:CAR,col2:CAR2});tyreMarks(800,1440,.5,{kind:'winter'});
 const hop=Math.abs(Math.sin(t*5))*30;sm(620,1700-hop,.62,Object.assign({t,eyes:'happy',mouth:'grin',armL:150,armR:150,bendL:-20,bendR:-20},KID));
 sm(400,1720,.9,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,-.2],armL:20,armR:120,bendR:-60},DAD));
 if(r>.9)sparkles(500,800,C((r-.9)/.6),10,300)}
sh(T('p1')-.08,(t,r)=>{const d=lerp(960,0,eio(r/.9));if(d<300)capLow();else capMid(1040);
 splitPanel3(t,tt=>topShop(tt,2.4),tt=>sorted(tt,r),Object.assign({div:d},SP));if(r>.95)label3('You, sorted 😌',C((r-.95)/.2))});
sh(T('cta'),(t,r)=>{capLow();endcard(t,r)});
sh(1000,(t,r)=>{capMid(1040);splitPanel3(t,tt=>hill(tt,1.3,0),tt=>hill(tt,1.3,1),SP)});
