// ---- goldfish + bowl ----
function fish(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y+Math.sin(t*3)*8);X.scale(s*(o.flip?-1:1),s);
 const tw=Math.sin(t*8)*.25;X.save();X.translate(-120,0);X.rotate(tw);path(()=>{X.moveTo(20,0);X.quadraticCurveTo(-90,-110,-110,-60);X.quadraticCurveTo(-70,0,-110,60);X.quadraticCurveTo(-90,110,20,0)},'#ff9a3c',7);X.restore();
 path(()=>{X.moveTo(-20,-90);X.quadraticCurveTo(30,-170,80,-80)},'#ff8a2a',7);
 ell(0,0,140,110,'#ffa94d',8);ell(30,40,80,46,'#ffc078',0);
 X.save();X.translate(-70,70);X.rotate(-.5+Math.sin(t*9)*.2);ell(0,0,40,22,'#ff8a2a',6);X.restore();
 const lk=o.look||0,sq=o.squint?0.55:0;
 [[-30,-24,40],[60,-28,34]].forEach(([ex,ey,r])=>{circ(ex,ey,r,'#fff',7);if(sq){X.save();X.beginPath();X.arc(ex,ey,r,0,7);X.clip();X.fillStyle='#ffa94d';X.fillRect(ex-r-2,ey-r-2,2*r+4,(2*r+4)*sq);X.restore();line([[ex-r,ey-r+2*r*sq],[ex+r,ey-r+2*r*sq]],7);circ(ex,ey,r,null,7)}
  circ(ex+lk*r*.4,ey+(sq?r*.3:0),r*.36,O,0);circ(ex+lk*r*.4-6,ey-6+(sq?r*.3:0),r*.12,'#fff',0)});
 if(o.angry){line([[-70,-74],[-4,-54]],10);line([[96,-76],[34,-56]],10)}
 if(o.smug){line([[-66,-70],[0,-66]],9);line([[30,-74],[96,-60]],9)}
 const my=48,m=o.talk!=null?Math.abs(Math.sin(o.talk*16)):0;
 if(o.talk!=null)ell(20,my,16+m*8,8+m*16,'#7a1d1d',6);else if(o.smug)path(()=>{X.moveTo(-4,my);X.quadraticCurveTo(22,my+16,48,my-8)},null,7);else if(o.shock)ell(20,my,16,20,'#7a1d1d',6);else ell(20,my,14,10,'#7a1d1d',6);
 if(o.sweat)ell(120,-70+((t*60)%30),10,16,'#7fd1ff',4);
 if(o.phone){X.save();X.translate(-40,90);X.rotate(-.3);rr(-28,-50,56,100,10,'#1b1b1f',5);rr(-20,-42,40,84,6,'#25d366',0);X.restore();X.globalAlpha=.2;circ(-40,80,90,'#7ef0a0',0);X.globalAlpha=1}
 X.restore()}
function bowl(x,y,s,t,inner){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.35;circ(0,0,300,'#bfe6ff',0);X.globalAlpha=1;
 X.save();X.beginPath();X.arc(0,0,292,0,7);X.clip();X.fillStyle='rgba(90,170,230,.55)';X.fillRect(-300,-180,600,500);X.fillStyle='#e8d09a';X.fillRect(-300,200,600,120);
 for(let k=0;k<6;k++){const bx=-120+k*50,by=150-((t*120+k*60)%320);circ(bx,by,8+k%3*3,null,4,'#fff')}
 if(inner)inner();X.restore();
 circ(0,0,300,null,9);ell(0,-250,170,34,'#dff2ff',8);X.globalAlpha=.6;path(()=>{X.arc(0,0,250,3.6,4.3)},null,18,'#fff');X.globalAlpha=1;X.restore()}
function lamp(x,t){line([[x,-400],[x,320]],8);path(()=>{X.moveTo(x-90,400);X.lineTo(x-40,310);X.lineTo(x+40,310);X.lineTo(x+90,400);X.closePath()},'#2f3640',7);X.globalAlpha=.22;path(()=>{X.moveTo(x-90,400);X.lineTo(x-520,1400);X.lineTo(x+520,1400);X.lineTo(x+90,400);X.closePath()},'#fff3b0',0);X.globalAlpha=1}
function interro(t){X.fillStyle='#2b2f3a';X.fillRect(-3000,-3000,8000,8000);X.fillStyle='#3a3f4c';for(let i=-10;i<20;i++)X.fillRect(i*160,-3000,8,8000);X.fillStyle='#1d2028';X.fillRect(-3000,1320,8000,3000);rr(80,1180,920,70,10,'#6b4a2a',8);rr(140,1250,50,260,6,'#4a3220',6);rr(890,1250,50,260,6,'#4a3220',6)}
function lab(t){X.fillStyle='#dfeef2';X.fillRect(-3000,-3000,8000,8000);X.fillStyle='#c9dde3';for(let i=-10;i<20;i++)X.fillRect(i*200,-3000,10,8000);X.fillStyle='#9fb3bb';X.fillRect(-3000,1320,8000,3000);rr(60,1200,960,60,10,'#7d8b91',8)}

// ===== SHOTS =====
sh(0,(t,r)=>{cam(540,1000,lerp(1.25,1.05,eo(r/1.2)),t,.5);jail(t);bowl(560,1010,.62,t,()=>fish(0,20,1.05,{t,look:-.5,smug:1}));bars();gary(300,1520,1.0,{t,eyes:'crazy',mouth:'grin',armR:-150});if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'ARRESTED: GOLDFISH 🐟','#ffe14d',C((r-.25)/.25))});
sh(T('h2'),(t,r)=>{cam(540,900,lerp(1.5,1.65,r/1.4),t,.4);burst('#1d3f6e','#22497d',t*.4);bowl(540,880,1.1,t,()=>fish(0,20,1.35,{t,look:Math.sin(t*6)>0?.9:-.9,sweat:1}));
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'LIAR? 🤥','#e53935',C(sp(r-.35,16,.45)),110)});
sh(T('s1'),(t,r)=>{cam(540,1000,lerp(1.15,1.05,eo(r)),t,.4);office(t);gary(540,1520,1.05,{t,eyes:'sleepy',mouth:'buck',armR:-40});
 X.setTransform(1,0,0,1,0,0);tag(540,680,'12 YEARS · 0 ARRESTS','#ffe14d',C(r/.25));if(r>1.1)tag(540,790,'ONCE ARRESTED DEATH 💀','#c4b2ff',C((r-1.1)/.25))});
sh(T('g1'),(t,r)=>{cam(540,980,lerp(1.2,1.3,r),t,.5);interro(t);lamp(540,t);bowl(700,1040,.45,t,()=>fish(0,20,1.05,{t,look:-.8}));gary(330,1560,1.05,{t,eyes:'angry',talk:t,teeth:1,armR:-95,tilt:8})});
sh(T('k1'),(t,r)=>{cam(540,920,lerp(1.6,1.75,r/1.6),t,.4);interro(t);lamp(540,t);bowl(540,900,1.0,t,()=>fish(0,20,1.35,{t,talk:t,look:.2}));
 X.setTransform(1,0,0,1,0,0);if(r>.7)tag(540,330,'⏱️ 3 SECONDS','#ff9fd6',C((r-.7)/.2))});
sh(T('s2'),(t,r)=>{cam(540,920,1.4,t,.4);interro(t);lamp(540,t);bowl(540,900,1.0,t,()=>fish(0,20,1.35,{t,shock:1,sweat:1,look:.6}));stampBig('MYTH','#e53935',-10,C(sp(r-.35,14,.5)),560)});
sh(T('s2b'),(t,r)=>{cam(540,960,1.0,t,.3);lab(t);
 rr(170,560,740,600,20,'rgba(140,200,240,.55)',9);X.fillStyle='#e8d09a';X.fillRect(178,1080,724,72);
 const press=(Math.sin(r*5)>.6);line([[760,560],[760,700]],12);rr(730,690+(press?24:0),60,40,10,'#e53935',6);
 for(let k=0;k<6;k++){const py=((r*500+k*120)%500);if(press||py<400)circ(760+((k*37)%50)-25,720+py,10,'#a0522d',4)}
 fish(520,880+Math.sin(r*3)*20,.9,{t,look:1,smug:1});
 const months=['JAN','FEB','MAR','APR','MAY'];const mi=Math.min(4,Math.floor(C((r-1.2)/2.6)*5));
 X.setTransform(1,0,0,1,0,0);tag(540,330,'LEVER = FOOD 🍤','#ffe14d',C(r/.25));if(r>1.2){X.save();X.translate(880,1260);X.scale(.6,.6);rr(-170,-200,340,400,22,'#fff',8);rr(-170,-200,340,100,22,'#e53935',8);txt('STILL',0,-150,50,'#fff',0);txt(months[mi],0,40,150,'#151515',0);X.restore()}
 if(r>2.9)tag(300,1260,'REMEMBERS 🧠','#8ff07a',C((r-2.9)/.25))});
sh(T('g2'),(t,r)=>{cam(540,700,lerp(2.4,2.1,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1250,1.0,{t,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});SHK=12;
 X.setTransform(1,0,0,1,0,0);cuffs(540,420,.9,-.15,C(sp(r-.1,14,.5)))});
sh(T('s3'),(t,r)=>{cam(540,1000,1.2,t,.3);jail(t,1);X.globalAlpha=.35;X.fillStyle='#000';X.fillRect(-3000,-3000,8000,8000);X.globalAlpha=1;bowl(540,1010,.72,t,()=>fish(0,20,1.1,{t,squint:1,smug:1,phone:1}));bars();
 X.setTransform(1,0,0,1,0,0);tag(540,330,'MEANWHILE, IN CELL 3','#cfd6e2',C(r/.25))});
sh(T('s3')+1.45,(t,r)=>{cam(540,960,1,t,.4);burst('#1d1d27','#26263a',t*.3);
 phoneUI(540,960,1,r,{typing:r>1.0&&r<1.6,list:[{a:.15,me:1,text:'Remind Officer Gary: his wife’s birthday is TODAY 🎂',time:'09:12'},{a:1.6,me:0,text:'Done ✅ Reminding Gary now 😇',time:'09:12'}]});
 fish(170,1720,.55,{t,smug:1,squint:1})});
sh(T('g3')-1.05,(t,r)=>{lockPhone(t,C(r/1.0),'⏰ Gary! Linda’s birthday is TODAY 🎂','09:13');X.setTransform(1,0,0,1,0,0);if(r>.45)tag(540,1250,'SENT BY: A GOLDFISH 🐟','#ff9fd6',C((r-.45)/.2))});
sh(T('g3'),(t,r)=>{cam(540,700,lerp(2.6,2.2,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1250,1.0,{t,eyes:'crazy',mouth:'scream',sweat:1,hat:r>.3?null:'cop'});SHK=14;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'🎂 TODAY?!','#ffe14d',C((r-.2)/.2))});
sh(T('s4'),(t,r)=>{cam(540,960,1,t,.4);burst('#1d2b4f','#22355e',t*.3);
 phoneUI(540,960,1,r,{typing:r>1.0&&r<1.6,list:[{a:.15,me:1,text:'Remind me EVERY year: Linda’s birthday 🎂🎂🎂',time:'09:14'},{a:1.6,me:0,text:'Done ✅ Every year. Forever. 😇',time:'09:14'}]});
 gary(160,2080,.75,{t,eyes:'sleepy',mouth:'grin',sweat:1})});
sh(T('s4')+2.6,(t,r)=>{cam(540,1000,1.05,t,.4);jail(t);X.save();X.translate(0,0);bars();X.restore();
 const k=eo(C(r/.6));bowl(lerp(560,760,k),1010,.6,t,()=>fish(0,20,1.05,{t,smug:1}));gary(300,1520,1.0,{t,eyes:'happy',mouth:'grin',armR:-60});
 X.setTransform(1,0,0,1,0,0);tag(540,330,'RELEASED 🐟','#8ff07a',C(r/.25))});
sh(T('k2'),(t,r)=>{cam(540,920,lerp(1.6,1.8,r/1.6),t,.4);burst('#3a1d4f','#45245e',t*.3);bowl(540,900,1.0,t,()=>fish(0,20,1.35,{t,talk:r<1.4?t:null,squint:1,smug:1,angry:r>.3}));
 X.setTransform(1,0,0,1,0,0);tag(540,330,'🐟 NEVER FORGETS','#ff9fd6',C((r-.3)/.25))});
sh(T('g4'),(t,r)=>{cam(540,860,lerp(1.5,1.65,r/2),t,.4);office(t);gary(540,1420,1.0,{t,eyes:'sleepy',talk:r<.9?t:null,mouth:'buck',look:-20});
 X.setTransform(1,0,0,1,0,0);for(let k=0;k<3;k++){const a=r*2+k*2.1;txt('?',540+Math.cos(a)*300,520+Math.sin(a)*90,110,'#ffe14d',12)}
 if(r>1.0)tag(540,700,'3-SECOND MEMORY: GARY','#8ff07a',C((r-1.0)/.25))});
