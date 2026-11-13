// ===== ANNIVERSARY: you forgot (room freezes) -> one WhatsApp to Memopai a year ahead -> reminder the day before -> she never forgets either: same contact =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const YOU={hair:'messy',hairc:'#4a2f1e',shirt:'#2fa39a',shirt2:'#3cb8ae',pants:'#2e3a5a',shoes:'#333'};
const HER={hair:'pinkbun',hairc:'#7a3a1a',shirt:'#c2185b',shirt2:'#d81b60',pants:'#4a2a4a',shoes:'#5a2a3a'};
// hand position in WORLD coords for toon(x,y,s,{flip}) with arm angle a (d=+1 right arm, -1 left arm) — draw props AFTER the toon so they sit in front of the body
function hp(x,y,s,d,a,flip){const ang=a*Math.PI/180,sx=d*62,sy=-270,ex=sx+Math.sin(ang)*d*70,ey=sy+Math.cos(ang)*70,hx=ex+Math.sin(ang*1.3)*d*58,hy=ey+Math.cos(ang*1.3)*58;return[x+hx*s*(flip?-1:1),y+hy*s]}
function phoneH(hx,hy,rot=-.15,on=0,t=0,buzz=0){X.save();X.translate(hx+(buzz?Math.sin(t*90)*4:0),hy-30);X.rotate(rot);if(on)glow(0,0,120,'130,240,160',.35);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a4a66',0);X.restore()}
// one sad petrol-station rose in a plastic sleeve with a price sticker (local coords, stem bottom at 0,0)
function rose(x,y,s,o={}){const d=C(o.droop||0);X.save();X.translate(x,y);X.scale(s,s);X.rotate(o.rot||0);
 line([[0,0],[4,-90],[d*40,-170+d*20]],9,'#3f7a3a');path(()=>{X.moveTo(4,-80);X.quadraticCurveTo(40,-110,46,-80);X.quadraticCurveTo(24,-70,4,-80)},'#5a9a4a',5);
 X.save();X.translate(d*40,-175+d*22);X.rotate(d*1.1);circ(0,0,30,'#c0392b',6);path(()=>{X.arc(0,0,18,3.6,6.2)},null,5,'#7a1a14');path(()=>{X.moveTo(-26,6);X.quadraticCurveTo(0,30,26,6)},null,5,'#7a1a14');X.restore();
 if(o.fall!=null&&o.fall>0){const q=o.fall;X.save();X.translate(30+Math.sin(q*6)*20,-150+q*200);X.rotate(q*4);ell(0,0,12,18,'#c0392b',4);X.restore()}
 X.globalAlpha=.45;path(()=>{X.moveTo(-14,-30);X.lineTo(-62,-230);X.lineTo(70,-230);X.lineTo(16,-30);X.closePath()},'#e8f4ff',4,'#9ab');X.globalAlpha=1;
 if(o.price){X.save();X.translate(-26,-120);X.rotate(-.2);rr(-40,-20,80,40,8,'#ffe14d',4);txt(o.price,0,1,24,'#151515',0,'900 ');X.restore()}X.restore()}
// big bouquet of real flowers in a paper cone (stem bottom at 0,0)
function bouquet(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);X.rotate(o.rot||0);
 const cols=['#ff4f7b','#ffe14d','#ff8a3d','#c86bff','#ff4f7b','#fff','#ff6f91'];
 for(let k=0;k<12;k++)line([[0,0],[-70+rnd(k)*140,-150-rnd(k+3)*60]],8,'#3f7a3a');
 for(let k=0;k<11;k++){const bx=-95+rnd(k+11)*190,by=-170-rnd(k+21)*110+Math.sin(t*3+k)*3;for(let q=0;q<5;q++){const a=q/5*Math.PI*2+k;circ(bx+Math.cos(a)*16,by+Math.sin(a)*16,14,cols[k%cols.length],4)}circ(bx,by,9,'#ffd23f',3)}
 for(let k=0;k<5;k++){X.save();X.translate(-90+k*45,-150);X.rotate(-.6+k*.3);ell(0,0,14,34,'#4f9a3a',4);X.restore()}
 path(()=>{X.moveTo(-110,-160);X.lineTo(110,-160);X.lineTo(14,40);X.lineTo(-14,40);X.closePath()},'#f3e3c8',7);path(()=>{X.moveTo(-40,-60);X.quadraticCurveTo(0,-40,40,-60)},null,10,'#e24f6f');X.restore()}
// gift/watch box: o.open 0..1 lid off, shows a watch with a glint
function watchbox(x,y,s,o={}){const t=o.t||0,op=eo(C(o.open||0));X.save();X.translate(x,y);X.scale(s,s);
 rr(-70,-60,140,90,12,'#1f2a44',6);if(op>0){rr(-52,-50,104,60,10,'#f3e9ff',0);circ(0,-20,30,'#d9b44a',6);circ(0,-20,21,'#fff',4);line([[0,-20],[0,-34]],4);line([[0,-20],[11,-20]],4);rr(-14,-60,28,16,4,'#5a3a2a',3);rr(-14,4,28,14,4,'#5a3a2a',3);sparkles(14,-30,(t*.8)%1,6,60,'#fff')}
 X.save();X.translate(op*-30,-op*110);X.rotate(-op*.5);rr(-76,-82,152,30,10,'#e2405a',6);rr(-10,-82,20,30,0,'#ffd23f',0);X.restore();
 if(op<.5){rr(-10,-60,20,90,0,'#ffd23f',0);path(()=>{X.moveTo(0,-82);X.quadraticCurveTo(-40,-120,-34,-86);X.closePath();X.moveTo(0,-82);X.quadraticCurveTo(40,-120,34,-86);X.closePath()},'#ffd23f',4)}X.restore()}
function hearts(t,t0,n=8,x0=540,y0=1200,col='#ff4f7b'){const q=t-t0;if(q<0)return;for(let k=0;k<n;k++){const qq=(q*.7+rnd(k))%1.6;if(qq>1.4)continue;const x=x0+(rnd(k+5)-.5)*700+Math.sin(qq*5+k)*30,y=y0-qq*700;X.save();X.globalAlpha=C(1.4-qq);X.translate(x,y);X.scale(.9+rnd(k)*.6,.9+rnd(k)*.6);path(()=>{X.moveTo(0,14);X.bezierCurveTo(-34,-10,-20,-40,0,-22);X.bezierCurveTo(20,-40,34,-10,0,14)},col,5);X.restore()}}
// living room, evening: window with moon, framed photo, heart garland, lamp; warm=1 cosier light
function livingRoom(t,warm=0){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#6b4a6e');g.addColorStop(1,'#8a5a6a');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.04)':'rgba(0,0,0,.04)';X.fillRect(k*90,-3000,45,4300)}
 rr(620,250,360,460,14,'#f1e2c8',10);const sg=X.createLinearGradient(0,260,0,700);sg.addColorStop(0,'#1d2550');sg.addColorStop(1,'#3a3f7a');X.fillStyle=sg;X.fillRect(632,262,336,436);
 glow(860,380,160,'255,250,220',.4);circ(860,380,42,'#fff6d8',0);for(let k=0;k<9;k++)circ(650+rnd(k)*300,280+rnd(k+4)*380,3,'#fff',0);X.fillStyle='#f1e2c8';X.fillRect(794,250,12,460);X.fillRect(620,474,360,12);
 rr(120,330,240,200,10,'#d9a85a',9);rr(140,350,200,160,4,'#f6d2dc',0);path(()=>{X.moveTo(240,470);X.bezierCurveTo(170,420,190,370,240,400);X.bezierCurveTo(290,370,310,420,240,470)},'#ff4f7b',5);
 for(let k=0;k<9;k++){const x=40+k*125,y=170+Math.sin(k*.9)*18;line([[x-60,y-10],[x+60,y-10]],3,'#e9c46a');X.save();X.translate(x,y+8);X.scale(.8,.8);path(()=>{X.moveTo(0,14);X.bezierCurveTo(-34,-10,-20,-40,0,-22);X.bezierCurveTo(20,-40,34,-10,0,14)},k%2?'#ff4f7b':'#ffd1dc',4);X.restore()}
 line([[1010,1300],[1010,820]],10,'#3a2a2a');path(()=>{X.moveTo(940,820);X.lineTo(1080,820);X.lineTo(1050,720);X.lineTo(970,720);X.closePath()},'#ffe0a0',7);glow(1010,800,warm?520:360,'255,210,140',warm?.55:.35);
 bokeh(t,'255,200,150',warm?10:5,250,900);
 X.fillStyle='#5a3a3a';X.fillRect(-3000,1300,8000,2000);for(let k=-10;k<20;k++){X.fillStyle=k%2?'#523434':'#5a3a3a';X.fillRect(k*160,1300,160,2000)}ell(540,1460,520,90,'#7a3a4a',0);haze(1150,1310,'40,10,20',.12)}
// dinner table she set: cloth, two candles (flicker), two plates
function dinnerTable(x,y,t){gshadow(x,y+170,300,.3);rr(x-250,y,500,40,10,'#f6efe4',7);path(()=>{X.moveTo(x-260,y+30);X.lineTo(x+260,y+30);X.lineTo(x+240,y+170);X.lineTo(x-240,y+170);X.closePath()},'#f6efe4',7);
 for(const dx of[-120,120]){ell(x+dx,y+8,62,14,'#fff',5);}for(const dx of[-30,30]){rr(x+dx-10,y-90,20,90,4,'#fff3d0',5);const f=1+Math.sin(t*20+dx)*.12;ell(x+dx,y-104,9*f,18*f,'#ffb43a',3);glow(x+dx,y-104,120,'255,190,90',.45)}}
// office, daytime: window with city, desk with monitor, coffee
function officeR(t){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#cfe3ea');g.addColorStop(1,'#b8d0d8');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 rr(560,240,440,500,14,'#fff',10);const sg=X.createLinearGradient(0,250,0,730);sg.addColorStop(0,'#7cc7ff');sg.addColorStop(1,'#e2f4ff');X.fillStyle=sg;X.fillRect(572,252,416,476);
 X.save();X.beginPath();X.rect(572,252,416,476);X.clip();for(let k=0;k<7;k++){const h=160+rnd(k)*260;rr(560+k*66,730-h,56,h+20,4,k%2?'#8fa6c4':'#a7b9d2',4);for(let w=0;w<5;w++)X.fillStyle='rgba(255,255,255,.5)',X.fillRect(570+k*66,750-h+w*44,12,18)}hills(760,'#9fc7a0',t,3,20,2);X.restore();
 rays(780,300,t,'255,250,220',.1,7,1400);X.fillStyle='#fff';X.fillRect(774,240,12,500);
 X.fillStyle='#8a9aa6';X.fillRect(-3000,1300,8000,2000);haze(1180,1320,'40,60,80',.12)}
function desk(x,y,t){gshadow(x,y+260,380,.3);rr(x-360,y,720,40,10,'#b98a5e',7);rr(x-330,y+40,40,220,6,'#8a6440',6);rr(x+290,y+40,40,220,6,'#8a6440',6);
 rr(x+60,y-250,280,190,14,'#1b1b1f',7);const g=X.createLinearGradient(0,y-240,0,y-70);g.addColorStop(0,'#3ad0ff');g.addColorStop(1,'#5a7bff');X.fillStyle=g;X.fillRect(x+74,y-236,252,162);for(let k=0;k<4;k++)rr(x+94,y-216+k*34,140+rnd(k)*60,14,6,'rgba(255,255,255,.6)',0);rr(x+180,y-60,40,60,4,'#333',0);
 rr(x-250,y-70,60,70,10,'#fff',6);path(()=>{X.arc(x-188,y-36,18,-1.4,1.4)},null,7);for(let k=0;k<2;k++){X.globalAlpha=.5;line([[x-232+k*22,y-90-Math.sin(t*3+k)*6],[x-226+k*22,y-130]],5,'#fff');X.globalAlpha=1}}
// wall month calendar: idx 0..12 months from NOV; pages fly off while flipping (fl = fractional page)
const MON=['NOV','DEC','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV'];
function mcal(x,y,s,fl,day){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,250,160,.15);line([[0,-250],[0,-215]],6);circ(0,-255,10,'#555',4);
 const i=Math.min(12,Math.floor(fl)),f=fl-i;rr(-160,-215,320,400,18,'#fff',8);rr(-160,-215,320,100,18,'#e2405a',8);txt(MON[i],0,-165,64,'#fff',0);
 if(day){txt(day,0,40,150,'#151515',0);if(i==12){X.lineWidth=10;X.strokeStyle='#e2405a';X.beginPath();X.ellipse(0,40,110,90,-.1,0,7);X.stroke()}}else for(let r=0;r<4;r++)for(let c=0;c<5;c++)rr(-130+c*54,-90+r*62,40,40,6,'#eee',0);
 if(i<12&&f>0){X.save();X.translate(-160+f*500,-215-f*300);X.rotate(f*1.4);X.globalAlpha=1-f;rr(0,0,320,400,18,'#fff',6);rr(0,0,320,100,18,'#e2405a',6);txt(MON[i],160,50,64,'#fff',0);X.restore()}X.restore()}

// ===== SHOTS =====
// 1 HOOK: candle dinner she set up, she holds a gift and stares; YOU sweats; the room FREEZES over
sh(0,(t,r)=>{if(r<.08)FL=.3;cam(lerp(540,540,r/2),lerp(1080,1040,r/2),lerp(1.12,1.22,r/2),t,.3);livingRoom(t);dinnerTable(540,1180,t);
 toon(270,1420,.95,Object.assign({t,eyes:'wide',mouth:'o',sweat:1,armL:-20,armR:20,tilt:-3},YOU));
 toon(810,1420,.95,Object.assign({t,eyes:r>.9?'angry':'happy',mouth:r>.9?'flat':'smile',armR:70,armL:20,flip:1},HER));{const[hx,hy]=hp(810,1420,.95,1,70,1);watchbox(hx,hy+20,.9,{t})}
 frost(eio(C((r-.5)/1.4))*.85,t)});
// 2 GIFTS: her open watch box vs your petrol-station rose (sticker), petal drops at "rose"
sh(T('s1')-.05,(t,r)=>{const w=WT('s1',3),ro=WT('s1',7);cam(540,lerp(1000,980,r/3),lerp(1.3,1.38,r/3),t,.3);livingRoom(t);
 toon(810,1440,1,Object.assign({t,eyes:'angry',mouth:'flat',armR:70,armL:20,flip:1},HER));{const[hx,hy]=hp(810,1440,1,1,70,1);watchbox(hx,hy+20,1,{t,open:C((t-w)/.4)})}
 toon(280,1440,1,Object.assign({t,eyes:t>=ro?'sleepy':'wide',mouth:t>=ro?'grin':'o',sweat:1,armR:65,armL:-15},YOU));{const[hx,hy]=hp(280,1440,1,1,65,0);rose(hx,hy+30,1.1,{droop:C((t-ro)/.5),fall:t>=ro+.2?(t-ro-.2)/1.5:null,price:'€2.99',rot:.15})}
 frost(.7,t)});
// 3 MEMOPAI CHAT that night: one message, a year ahead; YOU in the corner typing
sh(T('s2')-.05,(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#2a1a3a','#35204a',t*.3);
 const sent=WT('s2',4)-.1,rep=WT('s2',9)-.2;const z=lerp(1.12,1.2,eo(C(r/1.5)));
 phoneUI(540,lerp(1080,1010,eo(C(r/1.2))),z,r,{typing:t>sent+.3&&t<rep,list:[
  {a:sent-T('s2'),me:1,text:'Remind me Nov 13 next year at 9:00: anniversary tomorrow! 🌹',time:'23:48'},
  {a:rep-T('s2'),me:0,text:'Done ✅ Nov 13 next year, 09:00 🌹',time:'23:48'}]});
 X.setTransform(1,0,0,1,0,0);toon(150,2030,.62,Object.assign({t,eyes:t>rep+.3?'happy':'angry',mouth:t>rep+.3?'grin':'flat',armR:-125,holdR:(hx,hy)=>phoneH(hx+8,hy,-.1,1,t)},YOU))});
// 4 A YEAR PASSES: office, calendar pages fly NOV -> NOV, YOU careless with coffee, feet up
sh(T('s3')-.05,(t,r)=>{const fl=C((t-T('s3')-.2)/2.5)*12;cam(lerp(520,540,r/3),lerp(1060,1040,r/3),lerp(1.12,1.18,r/3),t,.3);officeR(t);
 mcal(250,700,1.05,eio(fl/12)*12,0);desk(620,1150,t);
 toon(500,1420,.92,Object.assign({t,eyes:'closed',mouth:'grin',armR:-150,armL:-150,tilt:-8},YOU));txt('♪',380,860+Math.sin(t*4)*14,70,'#fff',8)});
// 5 NOV 13, 09:00: phone on the desk buzzes, Memopai notification, YOU jumps
sh(T('s4')-.05,(t,r)=>{const bz=WT('s4',2)-.15;const up=t>=bz+.35;if(t>=bz&&t<bz+.07)FL=.25;cam(lerp(540,560,r/3),lerp(1060,1050,r/3),up?lerp(1.15,1.28,eo(C((t-bz)/.4))):1.15,t,.35);officeR(t);
 mcal(330,720,1,12,'13');desk(620,1150,t);
 const j=up?Math.max(0,Math.sin(C((t-bz-.35)/.5)*Math.PI))*60:0;
 toon(500,1420-j,.92,Object.assign({t,eyes:up?'wide':'closed',mouth:up?'o':'grin',sweat:up?1:0,armR:up?-30:-150,armL:up?-160:-150,tilt:up?4:-8,holdR:up&&t>WT('s4',6)?(hx,hy)=>phoneH(hx+10,hy,-.15,1,t):null},YOU));
 if(!up||t<WT('s4',6))phoneH(860,1150,1.5,t>=bz,t,t>=bz&&Math.sin(t*9)>0);
 X.setTransform(1,0,0,1,0,0);if(t>=bz){notif(120,C((t-bz)/.35),'Memopai','🌹 Anniversary tomorrow!')}});
// 6 THE DAY: YOU walks in with a huge bouquet, she lights up, hearts, the frost is long gone
sh(T('f1')-.25,(t,r)=>{cam(540,lerp(1060,1030,r/2),lerp(1.15,1.24,r/2),t,.3);livingRoom(t,1);
 const wk=C(r/.7);
 {const yx=lerp(-100,330,eo(wk));toon(yx,1430,.98,Object.assign({t,walk:wk<1?t:null,eyes:'happy',mouth:'grin',armR:60},YOU));const[hx,hy]=hp(yx,1430,.98,1,60,0);bouquet(hx,hy+40,1,{t,rot:.15})}
 const tk=t>=T('f1')&&t<E('f1');toon(800,1430,.98,Object.assign({t,eyes:'wide',mouth:tk?null:'grin',talk:tk?t:null,armR:150,armL:150,flip:1},HER));
 hearts(t,T('f1')+.2,8,700,1150);sparkles(560,1000,C((t-T('f1'))/1.4),14,300)});
// 7 YOU winks at the camera: "Memo Pie did."
sh(T('p1')-.05,(t,r)=>{const wi=WT('p1',2);cam(lerp(420,410,r/2),lerp(980,960,r/2),lerp(1.65,1.75,r/2),t,.25);livingRoom(t,1);
 toon(420,1450,1,Object.assign({t,eyes:t>=wi?'wink':'happy',mouth:'grin',armR:60,look:1},YOU));{const[hx,hy]=hp(420,1450,1,1,60,0);bouquet(hx,hy+40,1,{t,rot:.15})}
 if(t>=wi)sparkles(470,820,C((t-wi)/.5),6,90,'#fff')});
// 8 TWIST: her phone — her own Memopai reminder; she winks too
sh(T('p2')-.05,(t,r)=>{const ap=T('p2')+.25,wi=WT('p2',7);cam(lerp(640,650,r/3),lerp(1040,1020,r/3),lerp(1.5,1.6,r/3),t,.25);livingRoom(t,1);
 toon(660,1460,1,Object.assign({t,eyes:t>=wi?'wink':'happy',mouth:'smile',armR:20,armL:60,flip:1,look:-1},HER));{const[hx,hy]=hp(660,1460,1,-1,60,1);phoneH(hx,hy,.15,1,t)}
 X.setTransform(1,0,0,1,0,0);notif(110,C((t-ap)/.35),'Memopai','🎁 Anniversary in 2 weeks: buy his gift!')});
// 9 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
// COVER-ONLY: frozen dinner, she stares with the gift, YOU with the petrol-station rose, Memopai notification below
sh(1000,(t,r)=>{cam(540,1060,1.2,t,.2);livingRoom(t);dinnerTable(540,1180,t);
 toon(280,1430,.95,Object.assign({t,eyes:'wide',mouth:'o',sweat:1,armR:65},YOU));{const[hx,hy]=hp(280,1430,.95,1,65,0);rose(hx,hy+30,1.05,{droop:.7,price:'€2.99',rot:.15})}
 toon(800,1430,.95,Object.assign({t,eyes:'angry',mouth:'flat',armR:70,armL:20,flip:1},HER));{const[hx,hy]=hp(800,1430,.95,1,70,1);watchbox(hx,hy+20,.9,{t,open:1})}
 frost(.75,t);X.setTransform(1,0,0,1,0,0);notif(1520,1,'Memopai','🌹 Anniversary tomorrow!')});
