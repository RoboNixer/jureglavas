// ===== BINS: remind someone else via a voice message =====
const MIA={hair:'#3a2418',dress:1,coat:'#d9546a',buttons:false};
const TOM={hair:'#7a5030',coat:'#4a78b8',buttons:false};
function lroom(t,night=1){X.fillStyle=night?'#e9d3b4':'#f3e3c8';X.fillRect(-3000,-3000,8000,8000);
 // wallpaper stripes
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.08)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 // window with street + bins outside
 X.save();X.beginPath();X.rect(560,330,400,460);X.clip();
 if(night){const g=X.createLinearGradient(0,330,0,790);g.addColorStop(0,'#0d1630');g.addColorStop(1,'#283e6a');X.fillStyle=g;X.fillRect(560,330,400,460);for(let i=0;i<20;i++){X.globalAlpha=.4+.5*Math.abs(Math.sin(t*2+i));circ(560+rnd(i)*400,340+rnd(i+4)*200,2+rnd(i+2)*2,'#fff',0)}X.globalAlpha=1;glow(880,420,90,'255,240,190',.6)}
 else{sky('#8fd0f5','#e8f6ff')}
 X.fillStyle=night?'#1d2a40':'#8ab07a';X.fillRect(560,690,400,120);X.fillStyle=night?'#3a4256':'#9a9ea8';X.fillRect(560,740,400,60);
 X.restore();rr(548,318,424,484,10,null,20,'#8a5a3a');line([[760,318],[760,802]],14,'#8a5a3a');rr(530,796,460,34,8,'#a8714a',6);
 // lamp light
 if(night){glow(200,520,380,'255,210,140',.45);line([[200,560],[200,1180]],10,'#5a4030');path(()=>{X.moveTo(130,560);X.lineTo(270,560);X.lineTo(240,460);X.lineTo(160,460);X.closePath()},'#ffd88a',7)}
 X.fillStyle=night?'#9a6e48':'#b98a5e';X.fillRect(-3000,1250,8000,3000);for(let k=-6;k<16;k++)line([[k*160,1250],[k*160-120,1900]],4,'rgba(0,0,0,.08)');
 haze(1150,1300,'60,30,10',.12)}
function sofa(x,y,col='#5b7fbf',c2='#4a6aa8'){gshadow(x,y+20,330,.3);rr(x-280,y-260,560,200,50,col,8);vol(()=>X.roundRect(x-280,y-260,560,200,50),x,y-160,280,100)}
function sofaFront(x,y,col='#4a6aa8'){rr(x-310,y-110,620,120,34,col,8);rr(x-340,y-210,90,230,34,col,8);rr(x+250,y-210,90,230,34,col,8)}
function mug(x,y,s){X.save();X.translate(x,y);X.scale(s,s);rr(-26,-40,52,56,10,'#fff',6);path(()=>X.arc(30,-14,16,-1.4,1.4),null,7);for(let k=0;k<2;k++)line([[-8+k*16,-56],[-14+k*16,-80],[-6+k*16,-104]],5,'rgba(255,255,255,.8)');X.restore()}
function houseFront(t,night){if(night){nightSky(t);glow(860,300,160,'246,240,210',.5);circ(860,300,70,'#f6f0d2',6)}else{sky('#7cc6f2','#fff1d6');glow(860,280,240,'255,230,150',.5);rays(860,280,t,'255,240,200',.12);clouds(t,260)}
 hills(1000,night?'#26385a':'#9fd38f',t,4,50,2);
 rr(40,520,780,620,10,night?'#7a6a8a':'#e9b98a',8);vol(()=>X.rect(40,520,780,620),430,830,390,310);path(()=>{X.moveTo(0,540);X.lineTo(430,240);X.lineTo(860,540);X.closePath()},night?'#4a3a55':'#b0523a',8);
 rr(120,640,200,190,10,night?'#ffd76a':'#bfe6ff',7);line([[220,640],[220,830]],6);line([[120,735],[320,735]],6);if(night)glow(220,735,160,'255,215,110',.45);
 rr(470,820,170,320,12,'#7a4a2a',8);circ(615,990,10,'#f2c94c',4);
 X.fillStyle=night?'#2c3a2e':'#5fae5a';X.fillRect(-3000,1140,8000,140);X.fillStyle=night?'#3a3f4d':'#a3a7b0';X.fillRect(-3000,1280,8000,2000);X.fillStyle=night?'#545a6a':'#c9ccd3';X.fillRect(-3000,1260,8000,30);
 for(let i=-6;i<12;i++)rr(i*240,1560,130,14,4,'rgba(255,255,255,.6)',0)}
function truck(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,0,380,.3);
 rr(-360,-330,520,280,20,'#e0892e',8);vol(()=>X.rect(-360,-330,520,280),-100,-190,260,140);for(let k=0;k<4;k++)line([[-320+k*110,-300],[-320+k*110,-80]],6,'#b86a1a');
 path(()=>{X.moveTo(170,-60);X.lineTo(170,-300);X.lineTo(300,-300);X.lineTo(370,-190);X.lineTo(370,-60);X.closePath()},'#f2f2f2',8);rr(200,-280,110,90,10,'#9fc6e0',6);rr(-60,-380,80,40,8,'#ffb300',6);
 [-250,-100,260].forEach(wx=>{circ(wx,-40,52,'#151515',8);circ(wx,-40,20,'#bbb',5)});
 for(let k=0;k<3;k++){X.globalAlpha=.35-k*.1;circ(-420-k*60-(t*80)%60,-80-k*20,30+k*10,'#bbb',0)}X.globalAlpha=1;X.restore()}

// ===== SHOTS =====
// 1 HOOK: Mia relaxed on the sofa with tea, bins visible outside the window.
sh(0,(t,r)=>{cam(560,980,lerp(1.18,1.04,eo(C(r/2.4))),t,.4);lroom(t,1);
 X.save();X.beginPath();X.rect(560,330,400,460);X.clip();wbin(660,760,.42,{col:'#2f7d4f'});wbin(860,760,.42,{col:'#3a5fa8',dark:'#26437a'});X.restore();
 sofa(420,1360);man(420,1330,1.08,Object.assign({face:'happy',armR:-120,t},MIA));mug(560,980,1.1);sofaFront(420,1400);
 if(r<.08)FL=.6;X.setTransform(1,0,0,1,0,0);tag(540,290,'30 DAYS · 0 NAGS','#8ff07a',C((r-.3)/.25))});
// 2 BEFORE: Tuesday fight, bins overflowing, truck leaving
sh(T('s1')-.1,(t,r)=>{cam(540,1000,lerp(1.0,1.08,r/3.8),t,.4);houseFront(t,0);
 truck(lerp(800,1300,C(r/3.8)),1420,.9,t);
 wbin(170,1300,.95,{full:1,lid:.35,flies:1,t});wbin(395,1300,.95,{full:.8,lid:.25,col:'#3a5fa8',dark:'#26437a'});
 gshadow(560,1180,150);man(560,1180,.95,Object.assign({face:'angry',armL:-150,armR:-60,t:r>1.5?t:null},MIA));
 gshadow(760,1150,150);man(760,1150,.9,Object.assign({face:'sad',armL:-100,armR:100,sweat:1},TOM));
 X.setTransform(1,0,0,1,0,0);tag(540,290,'EVERY TUESDAY 😤','#ffe14d',C((r-.2)/.25))});
// 3 MEMOPAI: Mia records a voice message, it plays, Memopai confirms (spans s2 + m1)
sh(T('s2')-.1,(t,r)=>{cam(540,960,1,t,.3);burst('#103a2a','#145236',t*.3);NOFX=1;
 const m1=T('m1'),m1e=E('m1');const pl=C((t-m1)/(m1e-m1));const z=lerp(1.25,1.38,eo(C(r/2)));
 phoneUI(540,lerp(1080,1010,eo(C(r/2))),z,r,{typing:false,list:[
  {a:2.4,me:1,voice:1,pl:pl,dur:pl>0&&pl<1?'0:0'+Math.floor(pl*3):'0:03',time:'19:12'},
  {a:m1e-T('s2')+.15,me:0,text:'Done ✅ I’ll remind Tom every Tuesday at 20:00 🗑️',time:'19:12'}]});
 X.setTransform(1,0,0,1,0,0);
 if(r<2.4&&r>.2){X.save();X.translate(540,1180);const k=C((r-.2)/.25);X.scale(k,k);rr(-300,-50,600,100,50,'#fff',6);circ(-250,0,16,Math.sin(t*12)>0?'#e53935':'#ff8a80',0);X.font="700 34px Inter";X.fillStyle='#333';X.textAlign='left';X.textBaseline='middle';X.fillText('0:0'+Math.min(3,Math.floor(r)),-215,0);for(let k2=0;k2<15;k2++){const hh=10+Math.abs(Math.sin(t*14+k2*1.3))*30;X.fillStyle='#00a884';X.fillRect(-120+k2*20,-hh/2,10,hh)}circ(245,0,44,'#00a884',0);txt('🎤',245,2,40,'#fff',0);X.restore()}});
// 4 TUESDAY 20:00: Tom on the sofa, phone buzzes, Memopai notification in HIS WhatsApp
sh(T('s3')-.1,(t,r)=>{cam(540,1000,lerp(1.05,1.15,r/3.6),t,.35);lroom(t,1);
 sofa(540,1360,'#7a8f5a');const buzz=r>.6?Math.sin(t*90)*4:0;
 man(540,1330,1.05,Object.assign({face:r>1.4?'shock':'neutral',armR:-125,t},TOM));
 X.save();X.translate(650+buzz,960);X.rotate(-.15);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,r>.6?'#25d366':'#2a2a2a',0);X.restore();if(r>.6)glow(650,960,120,'130,240,160',.35);
 sofaFront(540,1400,'#6a7f4a');
 X.setTransform(1,0,0,1,0,0);if(r<1.0)tag(540,290,'TUESDAY · 20:00','#ffe14d',C((r-.1)/.25));
 notif(150,C((r-1.05)/.35),'Memopai','🗑️ Tom, bins out tonight! Truck comes at 7.')});
// 5 Tom wheels the bins out at night
sh(T('s4')-.1,(t,r)=>{cam(lerp(460,560,r/2.8),1000,1.02,t,.35);houseFront(t,1);glow(950,900,260,'255,220,150',.35);line([[950,1290],[950,780]],14,'#333');rr(900,760,100,40,12,'#ffd88a',6);
 const x=lerp(260,640,eo(C(r/2.4)));wbin(x+150,1420,.9,{tilt:-14,col:'#2f7d4f'});
 gshadow(x,1420,150);man(x,1420,1.0,Object.assign({face:'happy',walk:r<2.4?t:null,armR:-60,t},TOM));
 wbin(860,1400,.85,{col:'#3a5fa8',dark:'#26437a'});if(r>2.3)sparkles(x+150,1200,C((r-2.3)/.6),8,180)});
// 6 PAYOFF: Mia with tea, Tom back proud, bins at the curb outside
sh(T('p1')-.1,(t,r)=>{cam(560,960,lerp(1.1,1.2,r/3.6),t,.3);lroom(t,1);
 X.save();X.beginPath();X.rect(560,330,400,460);X.clip();wbin(660,760,.42,{col:'#2f7d4f'});wbin(860,760,.42,{col:'#3a5fa8',dark:'#26437a'});X.restore();
 sofa(460,1360);man(340,1330,1.02,Object.assign({face:r>2.2?'wink':'happy',armR:-120,t},MIA));mug(480,985,1.05);
 man(640,1330,1.02,Object.assign({face:'smug',armL:-160,armR:20,t},TOM));sofaFront(460,1400);
 if(r>2.4)sparkles(560,700,C((r-2.4)/.7),10,260)});
// 7 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
