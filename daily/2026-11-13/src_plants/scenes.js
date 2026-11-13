// ===== HOLIDAY PLANTS: neighbour always forgets -> one message to Memopai reminds Ivan every 2 days -> your plants thrive, his own die =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const YOU={hair:'messy',hairc:'#4a2f1e',shirt:'#2fa39a',shirt2:'#3cb8ae',pants:'#2e3a5a',shoes:'#333'};
const IVAN={hair:'buzz',hairc:'#2a1a12',shirt:'#e0703a',shirt2:'#ee8650',pants:'#3d4a66',glasses:1,hw:118,hh:108};
function phoneH(hx,hy,rot=-.15,on=0,t=0,buzz=0){X.save();X.translate(hx+(buzz?Math.sin(t*90)*4:0),hy-30);X.rotate(rot);if(on)glow(0,0,120,'130,240,160',.35);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a4a66',0);X.restore()}
function pad(hx,hy){rr(hx-46,hy-26,92,50,22,'#2a2a33',5);circ(hx-22,hy-2,7,'#ff4f7b',0);circ(hx+22,hy-2,7,'#3ad0ff',0)}
function suitcase(x,y,s,label){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,110,.3);rr(-95,-230,190,230,22,'#e0a63a',8);vol(()=>X.roundRect(-95,-230,190,230,22),0,-115,95,115);
 for(const dx of[-45,45])rr(dx-8,-230,16,230,0,'rgba(0,0,0,.15)',0);rr(-40,-280,80,56,14,null,10);circ(-55,6,14,'#333',0);circ(55,6,14,'#333',0);
 if(label){X.save();X.translate(60,-150);X.rotate(.15);rr(-52,-26,104,52,10,'#fff',5);txt(label,0,2,30,'#151515',0,'900 ');X.restore()}X.restore()}
// YOUR flat: daylight, big window, shelf, three plants on the floor
function flat(t,dim=0){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,dim?'#d9c7b0':'#f6e3c6');g.addColorStop(1,dim?'#c9b296':'#ecd2ad');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.07)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 rr(560,260,420,560,14,'#fff',10);const sg=X.createLinearGradient(0,270,0,810);sg.addColorStop(0,'#7cc7ff');sg.addColorStop(1,'#d8f0ff');X.fillStyle=sg;X.fillRect(572,272,396,536);
 X.save();X.beginPath();X.rect(572,272,396,536);X.clip();hills(700,'#9fd38f',t,3,40,2);hills(780,'#7fb86f',t,5,30,5);X.restore();X.fillStyle='#fff';X.fillRect(764,260,12,560);X.fillRect(560,530,420,12);rays(770,300,t,'255,240,200',dim?.05:.14,7,1600);glow(770,520,360,'255,240,200',dim?.1:.3);
 rr(60,520,360,22,6,'#a8774f',6);rr(90,450,60,70,8,'#e24f4f',5);rr(160,430,50,90,8,'#4f7ae2',5);rr(220,460,90,60,8,'#f2c46b',5);
 X.fillStyle='#b98a5e';X.fillRect(-3000,1300,8000,2000);for(let k=-10;k<20;k++){X.fillStyle=k%2?'#ad7f55':'#b98a5e';X.fillRect(k*160,1300,160,2000)}haze(1150,1310,'60,30,10',.1)}
// Ivan's room: dark, gaming monitor glow, his own plant in the corner
function ivanRoom(t,ownWilt=0,ownDead=0){X.fillStyle='#2b2d4a';X.fillRect(-3000,-3000,8000,4400);for(let k=0;k<5;k++)rr(-100+k*260,200,200,120,10,'rgba(255,255,255,.04)',0);
 bokeh(t,'120,160,255',8,200,800);rr(560,560,460,300,16,'#111',8);const g=X.createLinearGradient(0,570,0,850);g.addColorStop(0,'#3ad0ff');g.addColorStop(1,'#a04bff');X.fillStyle=g;X.fillRect(575,575,430,270);
 for(let k=0;k<5;k++)circ(640+k*80,700+Math.sin(t*6+k)*40,18,'#ffe14d',0);glow(790,710,420,'120,160,255',.5);rr(760,860,60,120,6,'#222',0);rr(680,970,220,24,8,'#222',0);
 X.fillStyle='#3a3355';X.fillRect(-3000,1300,8000,2000);ell(420,1440,480,80,'#2e2848',0);plant(130,1330,.9,{t,wilt:ownWilt,dead:ownDead,pot:'#8a5a9a',pot2:'#9a6aaa'})}
function beanbag(x,y){gshadow(x,y+10,300,.35);path(()=>{X.moveTo(x-300,y);X.quadraticCurveTo(x-330,y-260,x-60,y-300);X.quadraticCurveTo(x+260,y-300,x+300,y);X.closePath()},'#e8a13a',8);vol(()=>{X.beginPath();X.ellipse(x,y-140,300,160,0,0,7)},x,y-140,300,160)}
function leafFall(x,y,t,t0,col='#a3843f'){const q=t-t0;if(q<0||q>2.2)return;X.save();X.translate(x+Math.sin(q*4)*50,y+q*260);X.rotate(Math.sin(q*5)*.8);X.beginPath();X.ellipse(0,0,18,30,0,0,7);X.fillStyle=col;X.fill();X.lineWidth=5;X.strokeStyle=O;X.stroke();X.restore()}
function threePlants(t,w,o={},xs=[180,430,690]){[[xs[0],1340,.95,0],[xs[1],1360,1.15,.12],[xs[2],1335,.9,.24]].forEach(([x,y,s,d],k)=>plant(x,y,s,Object.assign({t,wilt:typeof w=='function'?w(k,d):w,n:5+k%2},o)))}

// ===== SHOTS =====
// 1 HOOK: your empty flat, three plants wilt on screen, a leaf falls
sh(0,(t,r)=>{if(r<.08)FL=.35;cam(lerp(430,440,r/3),lerp(1120,1080,r/3),lerp(1.12,1.24,r/3),t,.3);flat(t,1);
 threePlants(t,(k,d)=>lerp(.25,1,eio(C((r-.2-d)/1.8))));leafFall(470,1000,t,1.4);leafFall(220,1050,t,1.9)});
// 2 IVAN gaming on the beanbag; his own plant still fine; tag at "He forgot by Tuesday"
sh(T('s1')-.05,(t,r)=>{const f=WT('s1',6);cam(lerp(470,450,r/3),lerp(1100,1060,r/3),lerp(1.15,1.22,r/3),t,.35);ivanRoom(t,0,0);
 beanbag(470,1450);toon(470,1390,.98,Object.assign({t,eyes:'happy',mouth:'grin',armR:70,armL:-70,tilt:Math.sin(t*5)*4,holdR:(hx,hy)=>pad(hx-40,hy)},IVAN));
 X.setTransform(1,0,0,1,0,0);tag(540,330,'IVAN · FORGOT BY TUESDAY','#ffe14d',C((t-f+.05)/.2))});
// 3 MEMOPAI CHAT: one message, Memopai confirms; YOU with suitcase (label ALEX) in the corner
sh(T('s2')-.05,(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#123a3a','#174a48',t*.3);
 const sent=WT('s2',5)-.1,rep=E('s2')-.6;const z=lerp(1.12,1.22,eo(C(r/1.5)));
 phoneUI(540,lerp(1080,1000,eo(C(r/1.2))),z,r,{typing:t>sent+.3&&t<rep,list:[
  {a:sent-T('s2'),me:1,text:'Remind Ivan every 2 days at 18:00: water my plants 🌿',time:'09:12'},
  {a:rep-T('s2'),me:0,text:'Done ✅ Ivan’s in. Every 2 days, 18:00 🌿',time:'09:12'}]});
 X.setTransform(1,0,0,1,0,0);suitcase(930,1990,.62,'ALEX');
 toon(140,2030,.62,Object.assign({t,eyes:t>rep+.3?'happy':'wide',mouth:t>rep+.3?'grin':'o',armR:-125,holdR:(hx,hy)=>phoneH(hx+8,hy,-.1,1,t)},YOU))});
// 4 BEACH: YOU reclined on a lounger, drink, phone face down in the sand
sh(T('s3')-.05,(t,r)=>{if(r<.08)FL=.3;cam(lerp(540,520,r/3),lerp(1060,1080,r/3),lerp(1.1,1.18,r/3),t,.25);
 const g=X.createLinearGradient(0,0,0,1000);g.addColorStop(0,'#5fb8ff');g.addColorStop(1,'#cdeeff');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4100);
 glow(820,330,420,'255,230,120',.6);circ(820,330,90,'#ffe14d',8);rays(820,330,t,'255,240,180',.18,9,2000);
 waves(930,t,{amp:18});X.fillStyle='#f3d79a';X.fillRect(-3000,1080,8000,3000);haze(1060,1120,'255,240,200',.25);
 // umbrella
 line([[250,1420],[330,780]],12,'#6a4a2a');path(()=>{X.moveTo(40,840);X.quadraticCurveTo(330,560,640,760);X.closePath()},'#ff4f7b',8);path(()=>{X.moveTo(240,800);X.quadraticCurveTo(330,640,430,780);X.closePath()},'#fff',0);
 gshadow(560,1420,380,.3);
 X.save();X.translate(560,1330);rr(-330,-30,640,40,14,'#2fa39a',7);line([[-280,10],[-300,90]],10,'#555');line([[260,10],[280,90]],10,'#555');rr(-360,-160,120,150,20,'#3cb8ae',7);X.restore();
 X.save();X.translate(860,1305);X.rotate(-1.25);toon(0,0,.9,Object.assign({t,eyes:'closed',mouth:'grin',armR:150,armL:-20,noshadow:1,holdR:(hx,hy)=>{X.save();X.translate(hx,hy);X.rotate(1.25);path(()=>{X.moveTo(-26,-60);X.lineTo(26,-60);X.lineTo(14,10);X.lineTo(-14,10);X.closePath()},'#ffb347',5);line([[8,-60],[24,-100]],5,'#ff4f7b');X.restore()}},YOU));X.restore();
 X.save();X.translate(880,1470);X.rotate(.1);rr(-40,-22,80,44,10,'#1b1b1f',5);X.restore();txt('z',700,900+Math.sin(t*3)*10,60,'#fff',8)});
// 5 18:00 IVAN's room: phone on the floor buzzes, notification, Ivan reads it, "The plants! On it!"
sh(T('s4')-.05,(t,r)=>{const bz=WT('s4',3)-.1,g1=T('g1');const up=t>=bz+.5;cam(lerp(480,470,r/3),lerp(1120,1080,r/3),up?lerp(1.2,1.4,eo(C((t-g1+.2)/.4))):1.2,t,.35);ivanRoom(t,0,0);
 beanbag(470,1450);toon(470,1390,.98,Object.assign({t,eyes:up?'wide':'happy',mouth:up?(t>=g1&&t<E('g1')?null:'o'):'grin',talk:t>=g1&&t<E('g1')?t:null,armR:up?115:70,armL:up?-30:-70,tilt:up?4:Math.sin(t*5)*4,look:up?1:0,holdR:(hx,hy)=>{if(up)phoneH(hx+12,hy,-.2,1,t);else pad(hx-40,hy)}},IVAN));
 if(!up)phoneH(780,1440,1.45,t>=bz,t,t>=bz&&Math.sin(t*9)>0);
 X.setTransform(1,0,0,1,0,0);if(t>=bz){notif(120,C((t-bz)/.35),'Memopai','🌿 Water the plants! — reminder from Alex');for(let k=0;k<2;k++)if(t>=bz+k*.2&&t<bz+k*.2+.06)FL=.2}});
// 6 YOUR FLAT: Ivan pours, plants perk up; at p1 YOU walks in with the suitcase, plants bloom
sh(E('g1')+.1,(t,r)=>{const p1=T('p1'),back=WT('p1',3);cam(lerp(540,550,r/3),lerp(1060,1040,r/3),lerp(1.0,1.05,r/3),t,.3);flat(t,0);
 const per=eo(C(r/1.2));threePlants(t,(k,d)=>1-eo(C((r-d)/1.0)),{bloom:C((t-back)/.6),big:lerp(1,1.15,C((t-back)/.6))},[100,300,500]);
 toon(700,1420,.9,Object.assign({t,eyes:'happy',mouth:'grin',armR:-60,armL:-20,holdR:(hx,hy)=>wcan(hx-40,hy+60,.8,{t,tilt:-.35*(1-C((t-p1)/.4)),pour:1-C((t-p1)/.4),flip:1})},IVAN));
 if(t>=p1){const wk=C((t-p1)/.8);toon(lerp(1300,950,eo(wk)),1440,.92,Object.assign({t,walk:wk<1?t:null,eyes:t>=back?'wide':'happy',mouth:t>=back?'o':'grin',armL:-30,flip:1},YOU));}
 if(t>=back)sparkles(430,1050,C((t-back)/1.2),14,320)});
// 7 PAYOFF: Ivan's own plant, dead; Ivan stares; leaf drops; impact on "Dead."
sh(T('p2')-.05,(t,r)=>{const d=WT('p2',2)-.05;if(t>=d&&t<d+.07)FL=.4;cam(lerp(360,330,r/3),lerp(1120,1110,r/3),t>=d?lerp(1.25,1.4,eo(C((t-d)/.3))):1.25,t,.3);
 ivanRoom(t,1,t>=d?1:0);if(t<d)leafFall(130,1060,t,T('p2')+.1);
 toon(480,1420,.98,Object.assign({t,eyes:t>=d?'wide':'sleepy',mouth:t>=d?'o':'flat',armR:20,armL:-40,tilt:t>=d?-6:0,look:-1},IVAN));
 X.setTransform(1,0,0,1,0,0);if(t>=d)impact(C((t-d)/.4))});
// 8 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r,{tag:'Reminds you. And anyone you want.'}));
// COVER-ONLY shot: your flat, three wilted plants, Memopai notification below
sh(1000,(t,r)=>{cam(440,1150,1.12,t,.2);flat(t,1);threePlants(t,.85);
 X.setTransform(1,0,0,1,0,0);notif(1520,1,'Memopai','🌿 Water the plants! — reminder from Alex')});
