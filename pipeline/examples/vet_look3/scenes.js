const YOU={hair:'curl'};
const VET={hair:'bun',hairc:'#6b4a2f',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}

// ---- DOG (look3 cast, craft ladder 2026-11-15): sitting dog, feet at (x,y), ~430*s tall. Faces right (flip:1 = faces left).
// o: t, col, ear, look:[x,y], eyes:'wide'|'happy'|'puppy'|'closed', scratch (hind leg scratches the ear), wag, tongue, lick (0..1 tongue up), tilt (deg), mouth:'smile'|'o'|'open'
function dog(x,y,s,o={}){const t=o.t||0,fl=o.flip?-1:1,col=o.col||'#e9b873',ear=o.ear||'#9a6234',OUT='#151515';
 X.save();X.translate(x,y);X.scale(s*fl,s);X.lineCap='round';X.lineJoin='round';
 X.save();X.globalAlpha=.22;X.fillStyle='#1a1020';X.beginPath();X.ellipse(-10,6,190,24,0,0,7);X.fill();X.restore();
 // tail
 const wa=o.wag?Math.sin(t*16)*.55:Math.sin(t*2)*.12;X.save();X.translate(-150,-70);X.rotate(-.6+wa);X.strokeStyle=OUT;X.lineWidth=40;X.beginPath();X.moveTo(0,0);X.quadraticCurveTo(-60,-60,-40,-150);X.stroke();X.strokeStyle=col;X.lineWidth=26;X.stroke();X.restore();
 // haunch + hind paw
 ell(-70,-95,115,98,col,9);
 const sc=o.scratch?Math.sin(t*34):0;
 if(!o.scratch)ell(-10,-12,52,22,col,8);
 // chest/body
 ell(25,-175,88,140,col,9,-.22);ell(55,-200,42,70,'#fff3dc',0,-.22);
 // front legs (stick, like the cast) + paws
 for(const lx of[35,85]){line([[lx,-130],[lx+8,-10]],18,OUT);X.fillStyle=OUT;X.beginPath();X.ellipse(lx+22,-8,34,16,0,0,7);X.fill()}
 // scratching hind leg (in front of the body, kicking at the ear)
 if(o.scratch){const kx=-10+sc*10,ky=-150,px=40+sc*28,py=-300+sc*16;X.strokeStyle=OUT;X.lineWidth=46;X.beginPath();X.moveTo(-60,-80);X.quadraticCurveTo(kx,ky,px,py);X.stroke();X.strokeStyle=col;X.lineWidth=32;X.stroke();X.fillStyle=OUT;X.beginPath();X.ellipse(px+8,py-6,28,22,0,0,7);X.fill()}
 // head
 const hx=70,hy=-345,R=100;X.save();X.translate(hx,hy);X.rotate((o.tilt||0)*Math.PI/180+(o.scratch?sc*.06:0));
 const eA=o.scratch?Math.sin(t*34)*.15:0;
 for(const d of[-1,1]){X.save();X.translate(d*86,-46);X.rotate(d*(.35+eA));path(()=>{X.moveTo(-26,-10);X.quadraticCurveTo(d*30,-30,d*36,30);X.quadraticCurveTo(d*40,120,d*4,128);X.quadraticCurveTo(-d*34,118,-d*30,40);X.closePath()},ear,8);X.restore()}
 X.fillStyle=col;X.strokeStyle=OUT;X.lineWidth=10;X.beginPath();X.arc(0,0,R,0,7);X.fill();
 const g=X.createRadialGradient(-R*.35,-R*.45,R*.1,0,0,R*1.05);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(.7,'rgba(255,255,255,0)');g.addColorStop(1,'rgba(0,0,0,.18)');X.fillStyle=g;X.fill();X.stroke();
 ell(0,46,62,44,'#fff3dc',7);
 // eyes
 const E=o.eyes||'wide',lk=o.look||[0,0],blink=((t*1.1+.7)%3.3)<.1;
 for(const d of[-1,1]){const ex=d*40,ey=-18;
  if(E=='happy'||E=='closed'||blink){X.lineWidth=8;X.strokeStyle=OUT;X.beginPath();if(E=='happy'){X.moveTo(ex-22,ey+4);X.quadraticCurveTo(ex,ey-22,ex+22,ey+4)}else{X.moveTo(ex-22,ey);X.quadraticCurveTo(ex,ey+12,ex+22,ey)}X.stroke();continue}
  const big=E=='puppy'?1.18:1;const rx=29*big,ry=35*big;X.fillStyle='#fff';X.lineWidth=7;X.strokeStyle=OUT;X.beginPath();X.ellipse(ex,ey,rx,ry,0,0,7);X.fill();X.stroke();
  const pr=E=='puppy'?.62:.46;const px=ex+lk[0]*rx*.35,py=ey+lk[1]*ry*.35;X.fillStyle='#2a1a10';X.beginPath();X.ellipse(px,py,rx*pr,ry*pr,0,0,7);X.fill();
  X.fillStyle='#fff';X.beginPath();X.arc(px-rx*.2,py-ry*.22,rx*.2,0,7);X.fill();if(E=='puppy'){X.beginPath();X.arc(px+rx*.18,py+ry*.18,rx*.09,0,7);X.fill();X.lineWidth=7;X.beginPath();X.moveTo(ex-d*4,ey-ry-10);X.lineTo(ex+d*26,ey-ry-2);X.stroke()}}
 // nose + mouth
 ell(0,28,20,14,OUT,0);
 const M=o.mouth||'smile';X.lineWidth=6;X.strokeStyle=OUT;
 if(M=='open'||o.tongue||o.lick){X.fillStyle='#6a1818';X.beginPath();X.moveTo(-26,52);X.quadraticCurveTo(0,58,26,52);X.quadraticCurveTo(18,86,0,86);X.quadraticCurveTo(-18,86,-26,52);X.fill();X.stroke();
  const L=C(o.lick||0);if(o.tongue||L>0){X.fillStyle='#ff8fa3';X.beginPath();X.ellipse(4+L*30,84+lerp(18,-10,L)-L*40,17,26+L*30,-.2-L*.9,0,7);X.fill();X.stroke()}}
 else if(M=='o'){X.fillStyle='#5a1414';X.beginPath();X.ellipse(0,64,10,13,0,0,7);X.fill();X.stroke()}
 else{X.beginPath();X.moveTo(0,40);X.lineTo(0,52);X.moveTo(-22,52);X.quadraticCurveTo(-10,62,0,52);X.quadraticCurveTo(10,62,22,52);X.stroke()}
 X.restore();
 // itch marks
 if(o.scratch){X.strokeStyle='rgba(30,30,30,.8)';X.lineWidth=6;for(let k=0;k<3;k++){const a=-1.2+k*.5+Math.sin(t*20+k)*.1;X.beginPath();X.moveTo(hx+Math.cos(a)*140,hy+Math.sin(a)*140);X.lineTo(hx+Math.cos(a)*175,hy+Math.sin(a)*175);X.stroke()}}
 X.restore()}
function treat(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-34,-12,68,24,12,'#c98a4b',5);for(const d of[-1,1])for(const e of[-1,1])circ(d*36,e*11,13,'#c98a4b',5);circ(6,0,7,'#fff',3);X.restore()}
function etable(x,top){X.save();X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(x,1770,300,26,0,0,7);X.fill();X.restore();
 rr(x-40,top+40,80,1720-top-40,10,'#9aa3ad',6);rr(x-200,1700,400,40,14,'#7b848e',6);rr(x-290,top,580,52,18,'#d5dde4',7);rr(x-280,top+8,560,12,6,'rgba(255,255,255,.7)',0)}
function poster(x,y){X.save();X.translate(x,y);X.rotate(-.03);rr(-130,-170,260,340,16,'#fff',6);rr(-130,-170,260,70,16,'#4fb3a9',0);txt('🐾',0,40,120,'#111',0,'400 ');X.restore()}
function vroom(t,o={}){proom(t,Object.assign({win:o.sun?840:0,frame:null,plant:1,lamp:0,wall:'#e3f3f1',wall2:'#cbe6e3',floor:'#d9dde2',floor2:'#bfc5cc'},o));
 if(o.sun)glow(840,600,700,'255,235,170',.45);
 if(o.clock)wclock(o.cx||170,470,1.0,o.clock[0],o.clock[1]);if(o.poster)poster(o.px||860,560)}
function vet(x,y,s,o){const h=sm(x,y,s,Object.assign({},VET,o));const fl=o.flip?-1:1;const nx=x,ny=y-650*s;
 // teal scrubs top + stethoscope
 path(()=>{X.moveTo(nx-62*s,ny+20*s);X.lineTo(nx+62*s,ny+20*s);X.lineTo(nx+80*s,ny+300*s);X.lineTo(nx-80*s,ny+300*s);X.closePath()},'#4fb3a9',6*s);
 path(()=>{X.moveTo(nx-22*s,ny+20*s);X.lineTo(nx,ny+70*s);X.lineTo(nx+22*s,ny+20*s)},null,5*s);
 X.lineWidth=7*s;X.strokeStyle='#33393f';X.beginPath();X.moveTo(nx-40*s,ny+24*s);X.quadraticCurveTo(nx-50*s,ny+170*s,nx,ny+190*s);X.quadraticCurveTo(nx+50*s,ny+170*s,nx+40*s,ny+24*s);X.stroke();circ(nx,ny+200*s,14*s,'#9aa3ad',5*s);
 // glasses
 const hx=x,hy=y-767*s;X.save();X.translate(hx,hy);X.scale(s,s);X.lineWidth=7;X.strokeStyle='#151515';X.beginPath();X.ellipse(-44,-14,48,54,0,0,7);X.moveTo(92,-14);X.ellipse(44,-14,48,54,0,0,7);X.stroke();X.beginPath();X.moveTo(-6,-20);X.lineTo(6,-20);X.stroke();X.restore();
 if(o.clip&&h.L){const[cx,cy]=h.L;X.save();X.translate(cx,cy-40);X.rotate(-.15*fl);rr(-60,-90,120,160,10,'#c98a4b',5);rr(-48,-72,96,130,6,'#fff',0);for(let k=0;k<4;k++)line([[-36,-50+k*26],[36,-50+k*26]],4,'#bbb');X.restore()}
 return h}
function bench(x,y){rr(x-200,y-150,400,30,10,'#8a6142',6);rr(x-200,y-90,400,30,10,'#8a6142',6);rr(x-180,y-60,24,60,6,'#555',4);rr(x+156,y-60,24,60,6,'#555',4)}
function clinicFront(t){psky('#7d8ea8','#a6b3c6','#c9d1dc',1060);pclouds(t,260,'#e6eaf0','#b9c2cf',5,4);
 pblur(3,()=>{rr(-60,420,640,700,10,'#e9eef0',7);rr(-60,420,640,90,10,'#4fb3a9',0);txt('VET CLINIC',260,466,52,'#fff',0);rr(140,700,240,420,10,'#b8d8e8',6);rr(400,600,140,160,8,'#b8d8e8',5)});
 proad(t,{wet:1,road:0});prain(t,.4,70)}
function kitchen(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:0,lamp:0,wall:'#f3e6d4',wall2:'#e7d2b6',floor:'#b9a58c',floor2:'#93806a',curtain:'#f0a868',curtain2:'#d58a4c'},o));
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore();glow(780,560,700,'255,235,170',.45);wclock(230,470,.9,9,0)}

const SC=1.15;
// A: 10:14 at the vet — dog scratching on the exam table, you beside it
sh(0,(t,r)=>{cam(560,1020,lerp(1.08,1.14,C(r/3)),t,.15);vroom(t,{clock:[10,14],poster:1,px:900});
 sm(290,1760,SC,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',look:[.7,.3],armR:40,bendR:-30},YOU));
 etable(720,1300);dog(700,1300,1.05,{t,scratch:1,eyes:'closed',flip:1,mouth:'smile'});
 label3('You at the vet 😬',C(r/.2))});
// B: the vet asks
sh(2.95,(t,r)=>{cam(600,1000,1.12,t,.15);vroom(t,{clock:[10,14],cx:880});
 vet(640,1760,1.2,{t,flip:1,eyes:'open',lid:.25,brow:'smug',mouth:'flat',talk:r>.3&&r<2.1?t:null,look:[-.5,.2],armL:30,bendL:-70,clip:1});
 etable(150,1350);dog(170,1350,.9,{t,scratch:r<1.2,eyes:'closed'});
 label3('Your vet 🧐',C(r/.2))});
// C: "Last month," you say. It was July. The dog looks at you.
sh(5.45,(t,r)=>{cam(560,1000,lerp(1.1,1.16,C(r/3)),t,.15);vroom(t,{clock:[10,15],cx:880});
 const fp=C((r-1.25)/.35),month=fp<.5?'NOVEMBER':'JULY',sq=Math.abs(Math.cos(fp*Math.PI));
 X.save();X.translate(610,640);X.scale(1,Math.max(.05,sq));wallcal(0,0,.82,{month,n:0});X.restore();
 const caught=r>1.6;
 sm(330,1760,1.2,Object.assign({t,eyes:'wide',brow:caught?'worried':'up',mouth:'grin',sweat:caught,look:caught?[.6,.4]:[.6,-.2],tilt:caught?-5:3,armL:20,armR:30,bendR:-90},YOU));
 etable(790,1320);const turn=r>2.6;dog(780,1320,1.1,{t,flip:1,eyes:turn?'puppy':'open',look:turn?[.2,-.7]:[0,0],tilt:turn?-12:0,mouth:'smile'});
 if(turn&&r<3.1)sparkles(700,950,C((r-2.6)/.5),6,90,'#ffffff');
 label3('You, 10:15 😅',C(r/.2))});
// D: outside in the rain — Memopai hops onto the bench, the 🐾 thought flies into the phone
sh(8.6,(t,r)=>{cam(540,1000,1.06,t,.2);clinicFront(t);bench(830,1610);
 const mp=C((r-.15)/.6);if(mp>0){memo(830,1475,1.0,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(830,1150,mp,10,260)}
 const reach=C((r-.7)/.4);
 sm(360,1760,1.15,Object.assign({t,eyes:'open',brow:r<.7?'sad':'up',mouth:r<.7?'frown':'smile',look:[.6,0],armL:25,bendL:-20,armR:lerp(15,40,reach),bendR:lerp(0,-115,reach),holdR:(x,y)=>{if(reach>.3)phoneH(x,y,-.1,r>1.2)}},YOU));
 const hx=360,hy=1760-767*1.15;const fl=C((r-1.0)/.9);
 if(r<1.0)chip(hx+170,hy-170,'🐾',eo(C(r/.3)),Math.sin(t*3)*.1);else if(fl<1){const ph=[470,1080];const px=lerp(hx+170,ph[0],eo(fl)),py=lerp(hy-170,ph[1],eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🐾',1-fl*.6)}else sparkles(470,1080,C((r-1.9)/.6),8,120,'#7cf0a0');
 label3(r<.2?'You, 10:20 🌧️':'Memopai 😎',C(r/.2))});
// E: WhatsApp voice note + reply
sh(11.4,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.95&&r<1.2,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.0),dur:'0:03',time:'10:20'},{a:1.2,me:0,text:'Got it ✅ Every 1st of the month · 09:00 · Flea tablet 🐶',time:'10:20'}]})});
// F: Dec 1st, 09:00 — buzz, tablet in a treat, gulp
sh(13.85,(t,r)=>{cam(540,1020,1.08,t,.2);kitchen(t);
 const n=r<1.15?C((r-.05)/.3):Math.max(0,1-(r-1.15)/.25);
 const toss=C((r-1.1)/.45);
 sm(330,1760,1.15,Object.assign({t,eyes:r>1.5?'happy':'open',brow:'up',mouth:'grin',look:[.6,.3],armR:lerp(40,95,toss),bendR:lerp(-60,-10,toss),holdR:(x,y)=>{if(toss<.05)treat(x+20,y-10,1)}},YOU));
 const caught=toss>=1;dog(780,1760,1.3,{t,flip:1,eyes:caught?'happy':'wide',look:[-.3,-.6],mouth:caught?'smile':'open',wag:1,tongue:caught&&r>1.8});
 if(toss>0&&toss<1){const px=lerp(520,690,toss),py=lerp(1130,1380,toss)-Math.sin(toss*Math.PI)*200;treat(px,py,1)}
 if(caught&&r<2.2)sparkles(690,1360,C((r-1.55)/.6),8,140);
 if(n>0)notif(150,n,'Memopai','Flea tablet for the dog. Today!');
 label3('You, Dec 1st 😌',C((r-1.4)/.25))});
// G: back at the vet, sunny — same question, calm answer, the lick
sh(16.35,(t,r)=>{const pan=C((r-1.9)/1.2);cam(lerp(620,430,eo(pan)),lerp(1000,980,eo(pan)),lerp(1.0,1.12,eo(pan)),t,.15);vroom(t,{sun:1,clock:[10,0],cx:640});
 vet(880,1760,1.0,{t,flip:1,eyes:r>2.4?'happy':'open',brow:'up',mouth:r<1.9?'flat':'smile',talk:r>.05&&r<1.85?t:null,look:[-.6,.2],armL:30,bendL:-70,clip:1});
 const lick=C((r-4.15)/.4)*(r<6.6?1:0);
 sm(240,1760,1.1,Object.assign({t,eyes:lick>0?'happy':'open',lid:lick>0?0:.15,brow:lick>0?'up':'smug',mouth:lick>0?'grin':'smile',talk:r>2.05&&r<4.0?t:null,look:[.6,0],blush:lick>0,tilt:lick>0?8:0},YOU));
 etable(520,1330);dog(500,1330,1.0,{t,flip:1,wag:1,eyes:lick>0?'happy':'open',look:[-.5,-.3],tilt:lick>0?-14:0,lick:lick,mouth:'smile'});
 if(lick>0)sparkles(330,860,C((r-4.2)/1.4),10,220,'#ff8fb1');
 label3(r<1.95?'Your vet 🧐':(r<4.1?'You, 3 months later 😎':'You, sorted 😌'),C((r-(r<1.95?0:r<4.1?1.95:4.1))/.22))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot: the lie + the calendar on JULY + the dog staring
sh(1000,(t,r)=>{cam(560,1000,1.14,t,.1);vroom(t,{clock:[10,15],cx:880});
 X.save();X.translate(610,640);wallcal(0,0,.82,{month:'JULY',n:0});X.restore();
 sm(330,1760,1.2,Object.assign({t,eyes:'wide',brow:'worried',mouth:'grin',sweat:1,look:[.6,.4],tilt:-5,armL:20,armR:30,bendR:-90},YOU));
 etable(790,1320);dog(780,1320,1.1,{t,flip:1,eyes:'puppy',look:[.2,-.7],tilt:-12,mouth:'smile'})});
