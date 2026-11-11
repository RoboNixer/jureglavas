// ---- props ----
function park(t){sky('#7cc3f0','#e6f5ff');glow(860,260,200,'255,240,190',.55);rays(860,260,t,'255,240,200',.12);clouds(t,260);hills(1000,'#8fc98a',t,4,70,1);hills(1080,'#6fb36c',t,8,50,2);haze(900,1150,'255,255,255',.25);ground(1180,'#7bbf6a','#5c9e4f')}
function statue(x,y,s){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,0,220);rr(-150,-330,300,330,14,'#9aa1ab',8);rr(-180,-360,360,50,10,'#b4bac3',8);
 path(()=>{X.moveTo(-120,-360);X.quadraticCurveTo(-110,-520,0,-530);X.quadraticCurveTo(110,-520,120,-360);X.closePath()},'#b9c0c9',8);circ(0,-610,95,'#c3c9d1',8);ell(-30,-620,12,8,'#8e959e',0);ell(30,-620,12,8,'#8e959e',0);line([[-30,-575],[30,-575]],6,'#8e959e');
 txt('HERO',0,-180,56,'#6c727b',0);X.restore()}
function wire(y,t){line([[-200,y-40],[1300,y+30]],7,'#2a2a2a');line([[-200,y+60],[1300,y+120]],7,'#2a2a2a');rr(40,y-200,40,1200,6,'#6b4a2a',7);rr(1000,y-200,40,1200,6,'#6b4a2a',7)}
function cmask(x,y,s,a=1){X.save();X.globalAlpha=a;X.translate(x,y);X.scale(s,s);
 ell(0,0,130,160,'#d8c9a8',9);ell(0,-70,130,40,'#b8a684',8);ell(-50,-20,34,26,'#2a1f14',6);ell(50,-20,34,26,'#2a1f14',6);circ(-50,-18,8,'#ff3b30',0);circ(50,-18,8,'#ff3b30',0);
 path(()=>{X.moveTo(-20,-10);X.lineTo(-34,60);X.lineTo(34,60);X.lineTo(20,-10);X.closePath()},'#c9b893',7);path(()=>{X.moveTo(-60,105);X.quadraticCurveTo(0,80,60,105)},null,9);
 for(let i=0;i<16;i++)circ(-80+(i*37)%160,120+(i*13)%40,3,'#7d6b4f',0);path(()=>{X.moveTo(-130,-60);X.quadraticCurveTo(-150,-170,0,-175);X.quadraticCurveTo(150,-170,130,-60)},'#6b4a2a',8);X.globalAlpha=1;X.restore()}
function bakery(t){sky('#f7b98a','#ffe3c2');glow(540,250,260,'255,210,150',.5);hills(1000,'#c98f72',t,3,60,4);X.fillStyle='#e9d2b2';X.fillRect(-3000,520,8000,700);rr(130,600,820,560,12,'#f4e3c6',8);
 for(let i=0;i<8;i++)rr(130+i*102.5,560,102.5,90,0,i%2?'#fff':'#e53935',5);txt('BAKERY',540,720,90,'#7a3b16',0);rr(200,800,300,300,10,'#bfe6ff',8);rr(580,800,300,360,10,'#8a5a30',8);circ(840,990,12,'#ffd23f',4);ground(1180,'#b9a58a','#8d7a60')}
function flock(n,t,y0,y1,s,seed=0){for(let i=0;i<n;i++){const k=(i*97+seed)%1000/1000;const x=((k*1400+t*(180+i%5*40))%1500)-200;const y=y0+((i*53)%100)/100*(y1-y0)+Math.sin(t*3+i)*20;crow(x,y,s*(0.7+(i%4)*.12),{t:t+i*.3,flap:1,ph:i,scream:i%3==0,angry:1,noshadow:1})}}
function sci(x,y,s,t,o={}){toon(x,y,s,Object.assign({t,shirt:'#f4f4f4',shirt2:'#e2e2e2',pants:'#3a4a6a',eyes:'happy',mouth:'grin'},o));}

// ===== SHOTS =====
sh(0,(t,r)=>{cam(540,1000,lerp(1.25,1.05,eo(r/1.2)),t,.5);park(t);statue(600,1530,1.0);crow(640,920,.85,{t,angry:1,squint:1,look:-1,flip:1});gary(250,1560,1.0,{t,eyes:'crazy',sweat:1,mouth:'buck',armR:-40});if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'GRUDGE: 17 YEARS 🐦','#ffe14d',C((r-.25)/.25))});
sh(T('h2'),(t,r)=>{cam(540,900,lerp(1.2,1.05,eo(r/1.3)),t,.4);sky('#6a8fc0','#c9dcf0');bokeh(t);wire(820,t);const n=Math.min(7,1+Math.floor(r*6));for(let i=0;i<n;i++)crow(120+i*140,830+i*12,.62,{t:t+i,angry:1,squint:i%2,look:-1,flip:1,noshadow:1});
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'THE WHOLE FAMILY 👀','#e53935',C(sp(r-.3,16,.45)),78)});
sh(T('s1'),(t,r)=>{cam(540,1000,lerp(1.05,1.15,r/2),t,.4);park(t);statue(640,1530,1.0);crow(680,920,.85,{t,look:-1,flip:1,shock:r>1.2});gary(330,1560,1.0,{t,eyes:'happy',mouth:'grin',armR:-140});
 const k=eo(C((r-.6)/.5));X.save();X.translate(lerp(380,600,k),lerp(1150,1300,k));X.rotate(-.15);rr(-70,-90,140,180,8,'#fff6a8',6);txt('TICKET',0,-40,30,'#c0392b',0);line([[-45,10],[45,10]],5,'#999');line([[-45,45],[45,45]],5,'#999');X.restore();
 X.setTransform(1,0,0,1,0,0);tag(540,330,'🎫 PARKING TICKET','#ffe14d',C(r/.2))});
sh(T('g1'),(t,r)=>{cam(540,760,lerp(2.2,1.9,eo(r/.3)),t,.8);park(t);gary(540,1300,1.0,{t,eyes:'angry',talk:t,teeth:1,armR:-170,tilt:6});SHK=8;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'NO PARKING ON THE STATUE! 🗿','#ff9fd6',C((r-.1)/.2))});
sh(T('k1'),(t,r)=>{cam(540,900,lerp(1.5,1.75,r/2),t,.3);park(t);X.globalAlpha=.35;X.fillStyle='#000';X.fillRect(-3000,-3000,8000,8000);X.globalAlpha=1;glow(560,760,380,'255,80,60',.25);crow(480,1260,1.9,{t,talk:r<1.6?t:null,squint:1,angry:1,noshadow:1});
 X.setTransform(1,0,0,1,0,0);if(r>.5)tag(540,330,'👁️ FACE SAVED','#ff7a7a',C((r-.5)/.2))});
sh(T('s2'),(t,r)=>{cam(540,960,1.3,t,.4);burst('#1d3f6e','#22497d',t*.4);crow(480,1260,1.6,{t,squint:1,noshadow:1});X.setTransform(1,0,0,1,0,0);tag(540,330,'FUN FACT 🧠','#8ff07a',C(r/.2));stampBig('100% REAL','#e53935',-10,C(sp(r-.35,14,.5)),1300)});
sh(T('s2b'),(t,r)=>{cam(540,1000,lerp(1.0,1.12,r/3.4),t,.3);park(t);haze(400,1200,'230,240,255',.3);const k=C((r-1.3)/.8);
 sci(380,1560,.95,t,{armR:-150});cmask(388,1560-445*.95,.8);rr(520,560,10,520,4,'#6b4a2a',5);X.save();X.globalAlpha=.85;ell(560,560,110,80,null,6);for(let i=-3;i<=3;i++)line([[560+i*30,490],[560+i*30,630]],3,'#555');X.restore();
 for(let i=0;i<3;i++)crow(700+i*110,1240-k*0,.55,{t:t+i,shock:r>1.3,flap:r>1.3&&r<2.4,ph:i,flip:1,noshadow:1});
 X.setTransform(1,0,0,1,0,0);tag(540,330,'REAL STUDY · SEATTLE 🔬','#ffe14d',C(r/.2));if(r>1.4)tag(540,450,'CROWS TRAPPED: 7','#cfd6e2',C((r-1.4)/.2))});
sh(T('s2c'),(t,r)=>{cam(540,1000,lerp(1.15,1.0,eo(r/3.7)),t,.5);park(t);const yr=Math.min(17,1+Math.floor(C(r/1.8)*16));
 sci(540,1560,.95,t,{eyes:'crazy',mouth:'scream',sweat:1,armR:-170});cmask(548,1560-445*.95,.8);flock(r>1.9?18:6,t,380,900,.55,3);
 X.setTransform(1,0,0,1,0,0);tag(540,330,'YEAR '+yr+' 📅 STILL SCREAMING','#ffe14d',C(r/.2));if(r>1.9)tag(540,1250,'NEVER EVEN CAUGHT 😡','#ff7a7a',C((r-1.9)/.2))});
sh(T('s3'),(t,r)=>{NOFX=1;cam(540,960,1,t,.4);burst('#14182b','#1b2140',t*.3);
 phoneUI(540,960,1,r,{typing:r>1.1&&r<1.8,list:[{a:.15,me:1,text:'Remind the WHOLE family every morning: Officer Gary 👮 at the bakery, 7 AM 🥐',time:'06:12'},{a:1.8,me:0,text:'Done ✅ Reminding 43 crows daily 😇',time:'06:12'}]});
 crow(190,1830,.55,{t,squint:1,angry:1,noshadow:1})});
sh(T('s4')-.4,(t,r)=>{cam(540,1000,lerp(1.1,1.0,eo(r/.6)),t,.6);bakery(t);gary(540,1560,1.0,{t,eyes:r>.6?'crazy':'happy',mouth:r>.6?'scream':'grin',sweat:r>.6,armR:-120});const n=Math.min(30,Math.floor(r*24));flock(n,t,300,1000,.55,7);
 X.setTransform(1,0,0,1,0,0);tag(540,330,'🕖 7:00 AM','#7fd1ff',C(r/.2));if(r>.6)tag(540,450,'CROWS: 43','#ff7a7a',C((r-.6)/.2))});
sh(T('g2'),(t,r)=>{cam(540,700,lerp(2.4,2.1,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1250,1.0,{t,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170,hat:null});flock(10,t,150,500,.4,11);SHK=12;
 X.setTransform(1,0,0,1,0,0);tag(540,1420,'DISGUISE! 🎭','#ffe14d',C((r-.1)/.2))});
sh(T('s5'),(t,r)=>{cam(540,1000,lerp(1.3,1.15,eo(r/1)),t,.4);bakery(t);gary(540,1560,1.0,{t,eyes:'happy',mouth:'grin',armR:-60});const k=eo(C((r-.3)/.5));cmask(548,lerp(300,1560-445,k),.84,C(r/.3));
 X.setTransform(1,0,0,1,0,0);tag(540,330,'NOBODY WILL KNOW 😎','#8ff07a',C((r-.6)/.2))});
sh(T('k2'),(t,r)=>{cam(540,900,lerp(1.5,1.7,r/1.5),t,.4);bakery(t);X.globalAlpha=.3;X.fillStyle='#000';X.fillRect(-3000,-3000,8000,8000);X.globalAlpha=1;crow(480,1260,1.8,{t,talk:r<1.5?t:null,squint:1,noshadow:1});
 X.setTransform(1,0,0,1,0,0);tag(540,330,'…THAT MASK? 👀','#ff9fd6',C((r-.3)/.2))});
sh(T('k2')+1.6,(t,r)=>{cam(540,1000,lerp(1.15,1.0,eo(r/.5)),t,.9);bakery(t);gary(540,1560,1.0,{t,eyes:'crazy',mouth:'scream',sweat:1,armR:-170,walk:t});cmask(548,1560-445,.84);flock(40,t,250,1150,.5,21);SHK=6;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'CROWS: ALL OF THEM','#ff7a7a',C((r-.1)/.2))});
