function raccoon(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 X.save();X.translate(-60,-150);X.rotate(.55+Math.sin(t*3)*.15);for(let k=0;k<5;k++){ell(-60-k*38,-k*30,48-k*3,40-k*3,k%2?'#3a3a40':'#9aa0a8',7)}X.restore();
 [-1,1].forEach(d=>{path(()=>{X.moveTo(d*70,-470);X.lineTo(d*105,-580);X.lineTo(d*20,-520);X.closePath()},'#7d838c',7)});X.restore();
 toon(x,y,s,Object.assign({skin:'#a7adb6',shirt:'#f1f1f1',shirt2:'#e2e2e2',pants:'#f1f1f1',shoes:'#555',hw:112,hh:100,nose:22,eyes:'wide',mouth:'buck'},o));
 X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);X.translate(0,-410);X.rotate((o.tilt||0)*Math.PI/180);
 path(()=>{X.moveTo(-100,-30);X.quadraticCurveTo(-60,-62,0,-40);X.quadraticCurveTo(60,-62,100,-30);X.quadraticCurveTo(80,20,40,6);X.quadraticCurveTo(0,-6,-40,6);X.quadraticCurveTo(-80,20,-100,-30)},'#26262c',0);
 const lk=o.look||0;[-44,44].forEach(ex=>{circ(ex,-22,24,'#fff',6);circ(ex+lk*.4,-20,10,O,0);circ(ex+lk*.4-4,-25,3.5,'#fff',0)});circ(0,22,20,'#222',6);circ(-6,16,6,'#fff',0);
 for(let k=0;k<4;k++){const yy=-280+k*40+410;}X.restore();
 X.save();X.translate(x,y);X.scale(s,s);for(let k=0;k<4;k++){X.fillStyle='#222';X.fillRect(-72,-290+k*40,144,14)}X.restore()}
function hall(t){roomWall('#e9dcc6','#c9ae88','#3c5a9a');rr(80,380,170,220,8,'#fff8e8',7);txt('ARRESTS',165,430,26,'#333',0);txt('1?',165,510,70,'#c0392b',0);rr(840,420,160,140,8,'#cfe9ff',7)}
function kitchenIn(){X.fillStyle='#f6e7a8';X.fillRect(-200,-700,400,700);rr(-120,-520,120,520,10,'#e9eef2',6);rr(30,-260,200,260,6,'#d0884a',6)}
function kitchen(t){roomWall('#f6e7a8','#d9c27a','#e07b39');rr(640,560,300,740,24,'#e9eef2',8);line([[660,880],[920,880]],7);rr(880,640,18,140,6,'#999',4);rr(880,920,18,160,6,'#999',4);
 rr(-200,1080,780,60,8,'#c8763a',8);rr(-200,1140,780,200,0,'#a85f2a',8);rr(80,460,300,200,10,'#cfe9ff',8);line([[230,460],[230,660]],6);glow(230,560,260,'255,240,190',.35)}
function outside(t){sky('#ffb36b','#ffe0b0');hills(1000,'#7aa36a',t,4,60,1);hills(1100,'#5c8a50',t,8,50,2);X.fillStyle='#9a8a70';X.fillRect(-3000,1250,8000,1500)}
function brainQ(x,y,s,p){if(p<=0)return;X.save();X.translate(x,y);X.scale(s*eo(p),s*eo(p));for(let k=0;k<3;k++)circ(-90+k*30,150-k*40,10+k*6,'#fff',5);ell(0,0,170,110,'#fff',8);txt('?',0,6,150,'#e53935',0);X.restore()}
// ===== SHOTS =====
sh(0,(t,r)=>{cam(540,980,lerp(1.3,1.08,eo(r/1.4)),t,.6);hall(t);rays(560,700,t,'255,240,200',.12);door(560,1320,1.25,{open:.95,inside:kitchenIn,sign:'KITCHEN'});gshadow(520,1460,200);gary(520,1470,.95,{t,eyes:'wide',look:-20,mouth:'o',walk:r<.6?r:null});
 brainQ(830,760,.8,C((r-.5)/.25));if(r<.1)FL=.9;X.setTransform(1,0,0,1,0,0);tag(540,300,'GARY 0 : 1 DOOR','#ffe14d',C((r-.25)/.25));impact(C(r/.25))});
sh(T('h2'),(t,r)=>{cam(540,820,lerp(2.0,2.25,r/1.5),t,.4);hall(t);glow(540,700,400,'200,220,255',.3);gary(540,1250,1.0,{t,eyes:'sleepy',mouth:'flat',look:Math.sin(t*6)*20});
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'YOU TOO 👀','#e53935',C(sp(r-.2,16,.45)),110)});
sh(T('s1'),(t,r)=>{cam(540,1000,lerp(1.1,1.2,r/2.5),t,.4);office(t);bokeh(t,'255,230,170',8,200,800);gshadow(720,1480,170);raccoon(730,1480,.85,{t,look:-20,mouth:r>1.2?'grin':'buck'});gshadow(300,1500,190);gary(300,1500,.92,{t,eyes:'happy',mouth:'grin',armR:-100,badge:1});
 X.setTransform(1,0,0,1,0,0);tag(730,560,'SUSPECT: RACCOON','#ffe14d',C((r-.2)/.25));if(r>1.3)tag(300,560,'CUFFS: ???','#ff9fd6',C((r-1.3)/.25))});
sh(T('g1'),(t,r)=>{cam(540,1000,1.15,t,.4);hall(t);door(780,1320,1.15,{open:C(r/.6)*.9,inside:kitchenIn,sign:'KITCHEN'});gshadow(380+r*150,1480,180);gary(380+r*150,1480,.92,{t,walk:t,talk:t,eyes:'sleepy'})});
sh(T('s2'),(t,r)=>{const k=eio(r/1.1);cam(540+k*80,960,lerp(1.1,1.5,k),t,.5);hall(t);door(620,1320,1.3,{open:.95,inside:kitchenIn,sign:'KITCHEN'});gshadow(500+k*120,1470,180);gary(500+k*120,1470,.95,{t,walk:t,eyes:'wide',flip:0});
 X.setTransform(1,0,0,1,0,0);tag(300,700,'STEP 1','#ffe14d',C(r/.2));if(r>1.05){X.globalAlpha=C((r-1.05)/.25)*.6;X.fillStyle='#fff';X.fillRect(0,0,1080,1920);X.globalAlpha=1}});
sh(T('g2'),(t,r)=>{cam(520,950,lerp(1.35,1.2,eo(r/.5)),t,.4);kitchen(t);gshadow(420,1480,190);gary(420,1480,.95,{t,eyes:'sleepy',talk:r<1.2?t:null,look:Math.sin(t*4)*25,armL:-40,armR:40});brainQ(650,560,.85,C((r-.2)/.25));
 X.setTransform(1,0,0,1,0,0);tag(540,300,'TRIP #1','#ffe14d',C(r/.2));if(r>.9)tag(540,300,'TRIP #7','#ff7a7a',C((r-.9)/.15))});
sh(T('s3'),(t,r)=>{cam(540,960,lerp(1.0,1.08,r/2.7),t,.3);X.fillStyle='#14182a';X.fillRect(-3000,-3000,8000,8000);rays(540,700,t,'160,190,255',.14);glow(540,760,420,'120,160,255',.35);
 ell(540,760,250,190,'#ff9fb8',9);for(let k=0;k<6;k++)path(()=>{X.moveTo(330+k*70,650+(k%2)*40);X.quadraticCurveTo(360+k*70,760,330+k*70,880-(k%2)*30)},null,7,'#d9607e');door(540,1260,.55,{open:.5+.4*Math.sin(t*2),inside:'#1c1c2c'});
 X.setTransform(1,0,0,1,0,0);txt('DOORWAY',540,330,120,'#ffe14d',16);txt('EFFECT',540,460,120,'#ffe14d',16);if(r>1.2)tag(540,1270,'Univ. of Notre Dame study','#9fd3ff',C((r-1.2)/.25))});
sh(T('s4'),(t,r)=>{cam(540,960,1.0,t,.3);roomWall('#e8f0e0','#c7d6b8','#5a8a5a');door(540,1250,1.0,{open:.95,inside:'#f6e7a8'});
 rr(90,560,280,200,14,'#fff8e8',7);txt('ROOM 1',230,610,40,'#333',0);txt('🔑 cuffs',230,690,44,'#333',0);rr(710,560,280,200,14,'#fff8e8',7);txt('ROOM 2',850,610,40,'#333',0);txt('🍪 ???',850,690,44,'#333',0);
 const p=C((r-1.6)/1.0);if(p>0){const fx=lerp(230,230,p),fy=lerp(760,1150,eo(p));X.save();X.translate(fx,fy);X.rotate(p*3);rr(-60,-40,120,80,10,'#fff3a0',5);txt('cuffs',0,0,28,'#333',0);X.restore()}
 rr(150,1150,160,180,10,'#7b8794',8);rr(130,1130,200,30,8,'#5d6875',6);X.setTransform(1,0,0,1,0,0);tag(540,300,'NEW SCENE = OLD ONE DELETED','#ffe14d',C(r/.25));if(p>.9)stampBig('DELETED','#e53935',-10,C(sp(r-2.6,14,.5)),860)});
sh(T('g3'),(t,r)=>{cam(540,700,lerp(2.4,2.1,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1250,1.0,{t,eyes:'angry',talk:t,teeth:1,sweat:1,armR:-170});SHK=12});
sh(T('s5'),(t,r)=>{cam(540,960,1,t,.4);burst('#1d2b4f','#22355e',t*.3);glow(540,900,600,'37,211,102',.18);phoneUI(540,960,1,r,{typing:r>1.0&&r<1.6,list:[{a:.15,me:1,text:'Remind me: HANDCUFFS 🚔 the second I enter the kitchen',time:'11:58'},{a:1.6,me:0,text:'Done ✅ I’ll ping you on the other side of that door 🚪',time:'11:58'}]});gary(150,2080,.75,{t,eyes:'sleepy',mouth:'grin'})});
sh(T('g4')-.75,(t,r)=>{cam(520,950,lerp(1.2,1.3,r/1.4),t,.4);kitchen(t);gshadow(420,1480,190);const hit=r>.75;gary(420,1480,.95,{t,eyes:hit?'crazy':'sleepy',talk:hit?t:null,armR:hit?-160:20,lightbulb:hit?1:0});
 if(hit)sparkles(420,600,C((r-.75)/.6),12,260);X.setTransform(1,0,0,1,0,0);glow(540,280,420,'37,211,102',.25*C(r/.3));notif(150,C(r/.3),'Memopai','⏰ HANDCUFFS, Gary 🚔 They’re in your hand.');if(hit)SHK=8});
sh(T('s7'),(t,r)=>{cam(540,1000,1.15,t,.4);office(t);door(820,1320,1.1,{open:C(r/1.2)*.9,inside:outside});gshadow(380+r*220,1480,160);raccoon(380+r*220,1480,.8,{t,walk:t,look:20,mouth:'grin'});
 X.setTransform(1,0,0,1,0,0);tag(540,320,'ESCAPE 🏃','#ff9fd6',C(r/.2))});
sh(T('s8'),(t,r)=>{cam(540,960,lerp(1.1,1.4,eio(r/1.2)),t,.4);outside(t);rays(800,300,t,'255,220,160',.15);door(540,1300,1.2,{open:.95,inside:'#e8dcc8'});gshadow(560,1470,160);raccoon(560,1470,.82,{t,walk:r<.5?t:null,look:r>.6?Math.sin(t*5)*25:0,mouth:'flat'});brainQ(790,560,.8,C((r-.6)/.25))});
sh(T('k1'),(t,r)=>{cam(540,820,lerp(1.9,2.1,r/1.8),t,.4);outside(t);raccoon(540,1260,1.0,{t,talk:r<1.5?t:null,look:Math.sin(t*4)*20,tilt:10});X.setTransform(1,0,0,1,0,0);tag(540,300,'STEP 1 😶','#ffe14d',C(r/.2))});
sh(T('g5'),(t,r)=>{cam(540,1000,lerp(1.25,1.1,eo(r/1.5)),t,.4);office(t);gshadow(720,1480,170);raccoon(720,1480,.85,{t,mouth:'buck',look:-15,armL:-20,armR:20});cuffs(720,1480-.85*200,.28,0,1);gshadow(300,1500,190);gary(300,1500,.92,{t,eyes:'sleepy',talk:r<1.1?t:null,mouth:'grin',armR:-60});
 X.setTransform(1,0,0,1,0,0);if(r>.4)stampBig('DOOR 2 : 0','#e53935',-8,C(sp(r-.4,14,.5)),440);if(r>.4&&r<.6)FL=.3});
