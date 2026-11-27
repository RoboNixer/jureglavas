// 2026-11-27 10:00 FUN FACT — "This bird hides 30,000 seeds. You forgot the dentist." First DOCUMENTARY flat-vector reel (look4doc.js).
const YOU={hair:'curl',hairc:'#2b1d14',pj:'#3f6fb5',limb:'#24324f'};
function autumnWorld(t,par){docBg('#1d2b55','#c9794a','#f3b35f');X.save();
 docSun(760+par*.1,980,70);rays(760+par*.1,980,t,'255,220,160',.12,9,2200);
 X.save();X.filter='blur(3px)';docRidge(1080,'#6f6a8f',{amp:260,seed:2,step:220,snow:1,snowA:.7});X.restore();
 docRidge(1200,'#4b4a6a',{amp:160,seed:5,step:160,pines:3,ph:60,pc:'#3b3a58'});
 docRidge(1330,'#2f4a3c',{amp:90,seed:8,step:120,pines:2,ph:120,pc:'#22382d'});
 X.fillStyle='#b9773e';X.beginPath();X.moveTo(-1600,1500);X.quadraticCurveTo(540,1380,2700,1480);X.lineTo(2700,4000);X.lineTo(-1600,4000);X.fill();
 X.fillStyle='#9a5f30';for(let i=0;i<40;i++){const x=-1200+i*95+rnd(i)*40,y=1520+rnd(i+5)*300;X.beginPath();X.ellipse(x,y,22+rnd(i+9)*20,6,0,0,7);X.fill()}
 X.restore()}
function winterWorld(t,o={}){docBg(o.top||'#1a2742','#5d7396','#cfdcec');
 X.save();X.filter='blur(3px)';docRidge(1060,'#8ea0be',{amp:260,seed:2,step:220,snow:1,snowA:.95});X.restore();
 docRidge(1200,'#6f84a6',{amp:160,seed:5,step:160,pines:3,ph:60,pc:'#4d6182',psnow:1});
 docRidge(1330,'#3e5574',{amp:90,seed:8,step:120,pines:2,ph:120,pc:'#2c405c',psnow:1});
 X.fillStyle='#eef3fa';X.beginPath();X.moveTo(-1600,1500);X.quadraticCurveTo(540,1380,2700,1480);X.lineTo(2700,4000);X.lineTo(-1600,4000);X.fill();
 X.fillStyle='rgba(150,175,210,.35)';for(let i=0;i<26;i++){const x=-1200+i*150+rnd(i)*60,y=1540+rnd(i+5)*280;X.beginPath();X.ellipse(x,y,70,10,0,0,7);X.fill()}}
const PINS=[[180,1560],[420,1610],[300,1720],[620,1580],[760,1690],[520,1760],[900,1600],[1080,1700],[1220,1580],[1360,1680],[130,1820],[980,1820],[700,1860],[1250,1840],[400,1880],[1500,1620]];
// A: HOOK. Golden-hour mountain, the nutcracker flies in (tracking), lands, 30,000 counter
sh(0,(t,r)=>{const fx=lerp(-260,560,eo(r/1.25)),fy=lerp(1100,1440,eio(C(r/1.25)))-Math.sin(C(r/1.25)*Math.PI)*120;
 cam(lerp(260,560,eo(r/1.4)),lerp(1080,1180,eo(r/2.4)),lerp(1.15,1.0,eo(r/2.6)),t,.5);
 autumnWorld(t,r*20);docMound(380,1470,1);docMound(760,1490,.8);
 const landed=r>1.25;nutcracker(fx,landed?1450:fy,1.25,{t,fly:!landed,pouch:landed?.9:.6,look:landed?Math.sin(t*3)*.3:0,flip:0});
 docLeaves(t,14);docChip("Clark's nutcracker · Rocky Mountains",C((r-.15)/.4));
 docCounter(540,700,30000,r-.35,{label:'SEEDS HIDDEN · ONE AUTUMN',dur:1.6});});
// B: thousands of holes. Lateral tracking pan follows the hopping bird, orange pins pop all over the slope
sh(T('f1')-.08,(t,r)=>{const bx=lerp(240,1200,C(r/2.7)),hop=Math.abs(Math.sin(r*Math.PI*2.2))*60;
 cam(lerp(420,1020,eio(C(r/2.7))),1320,.92,t,.4);autumnWorld(t,0);
 PINS.forEach((p,i)=>{const at=i*.14;if(r>at){docMound(p[0],p[1],.7);docPin(p[0],p[1]-10,(r-at)*1.4)}});
 nutcracker(bx,1560-hop,1.0,{t,peck:hop<10?.8:0,pouch:.5});
 docLeaves(t,10);docChip("Clark's nutcracker · Rocky Mountains",1);
 docWord('THOUSANDS',540,560,120,r-.2,{key:1,from:'left'});docWord('OF HIDING SPOTS',540,720,76,r-.45,{from:'right'});});
// C: winter comes. Whip into the same slope, snow falls, the pins vanish under snow (crane down)
sh(T('f2')-.08,(t,r)=>{cam(760,lerp(1150,1420,eo(r/1.6)),lerp(1.0,.95,eo(r/1.6)),t,.6,lerp(-4,0,eo(r/.6)));winterWorld(t);
 const cover=C(r/1.2);PINS.forEach((p,i)=>{X.save();X.globalAlpha=1-C(cover*1.5-i*.04);docPin(p[0],p[1]-10,1);X.restore();docMound(p[0],p[1],.7,1)});
 X.fillStyle=`rgba(255,255,255,${.25*cover})`;X.fillRect(-1000,1000,4000,1500);
 docSnow(t,120,{size:7,speed:260,wind:120});docChip("Winter · Rocky Mountains",C(r/.3));
 docWord('THE SNOW',540,600,130,r-.15,{from:'up'});docWord('BURIES IT ALL',540,790,86,r-.35,{key:1});});
// D: up to 9 months later. Bird lands on snow, digs straight down, pops up with the seed (push-in), stamp
sh(T('f3')-.08,(t,r)=>{cam(560,lerp(1250,1330,eo(r/3)),lerp(1.0,1.28,eio(C((r-.4)/2.6))),t,.4);winterWorld(t,{top:'#22355c'});
 const ly=r<.6?lerp(1100,1500,eo(r/.6)):1500,dig=r>.9&&r<2.3?1:0,up=r>2.3;
 X.fillStyle='#b8c8dc';X.beginPath();X.ellipse(690,1505,60*C((r-.9)/.6),16*C((r-.9)/.6),0,0,7);X.fill();
 for(let k=0;k<8&&dig;k++){const a=t*9+k;X.fillStyle='#fff';X.beginPath();X.arc(700+Math.cos(a)*90*((t*3+k*.13)%1),1480-Math.abs(Math.sin(a))*120*((t*3+k*.13)%1),8,0,7);X.fill()}
 nutcracker(560,ly,1.25,{t,fly:r<.6,peck:dig?1:up?-.1:0,dig,seed:up,look:up?-.2:0});
 if(up)sparkles(720,1240,C((r-2.3)/.6),10,160,'#ffd23f');
 docSnow(t,50,{size:5,speed:120,wind:40});
 if(r<2.35)docPill('UP TO 9 MONTHS LATER',540,560,54,C((r-.1)/.4)*(1-C((r-2.1)/.25)),{bg:'#ffffff'});
 if(r>2.45){X.save();X.setTransform(1,0,0,1,0,0);stampBig('STILL FINDS IT','#25b35a',-8,C((r-2.45)/.22),560);X.restore()}});
// E: the pivot. YOU walk into the night hallway, stop, phone buzzes: missed dentist (push-in)
sh(T('y1')-.1,(t,r)=>{const wx=lerp(-80,470,eo(r/1.0)),walking=r<1.0;
 cam(lerp(420,500,eo(r/2)),lerp(1150,1080,eo(r/2.2)),lerp(.95,1.1,eio(C((r-.8)/1.6))),t,.5);
 proom(t,{win:820,plant:180,lamp:1,night:1,wall:'#3b4a6b',wall2:'#2c3954',floor:'#4a3f3a',floor2:'#3a312d',curtain:'#4d5f86',curtain2:'#3f4f74'});
 const look=r>1.1;sm(wx,1760,1.12,Object.assign({t,walk:walking?t:null,eyes:look?'wide':'open',brow:look?'worried':'flat',mouth:look?'o':'smile',sweat:r>1.6,look:look?[.3,.5]:[.6,0],
  armR:look?130:60,bendR:look?-120:-60,holdR:(x,y)=>{X.save();X.translate(x,y);X.rotate(-.2);rr(-28,-52,56,100,12,'#1b1f2a',5);X.fillStyle=look?'#bfe3ff':'#334';X.fillRect(-20,-42,40,80);X.restore();if(look)glow(x,y,120,'190,225,255',.35)},armL:55,bendL:-50},YOU));
 notif(338,C((r-.35)/.3)*(1-C((r-1.75)/.25)),'Dental clinic 🦷','You missed your appointment today.');
 if(r>1.85)docWord('AGAIN. 🙃',540,440,110,r-1.85,{key:1});});
// F: the Memopai beat: one voice note, transcript, ✅ (phone hero, slow tilt)
sh(T('s1')-.1,(t,r)=>{NOFX=1;docBg('#062a24','#0b5c4a','#13886a');X.save();X.globalAlpha=.25;docSnow(t,30,{size:4,speed:40,wind:10});X.restore();
 cam(540,lerp(990,960,eo(r/3)),lerp(.97,1.0,eo(r/3)),t,.3,lerp(2,0,eo(r/1.2)));
 phoneUI(540,960,1.16,r,{typing:r>1.9&&r<2.6,list:[{a:-1,date:'FRI 27 NOV'},{a:.25,me:1,voice:1,dur:'0:03',pl:C((r-.25)/1.4),time:'21:42'},{a:1.1,me:1,text:'"Remind me Tuesday at 8: dentist at 9:30 🦷"',time:'21:42'},{a:2.6,me:0,text:'✅ Got it! Tue 1 Dec · 08:00 ⏰ 🦷 Dentist at 9:30',time:'21:42'}]});});
// G: Tuesday 08:00. Morning street, tracking shot follows YOU walking, Memopai notification, dental shop front
function street(t){docBg('#8cc7ef','#cfe6f5','#f6efe0');X.save();X.filter='blur(2px)';docRidge(1050,'#a9bfd6',{amp:200,seed:3,step:200,snow:1});X.restore();
 const B=[[-300,'#e9b872'],[60,'#d97b5f'],[420,'#8fb3a0'],[780,'#efd7a8'],[1140,'#b48ec9'],[1500,'#e9b872'],[1860,'#d97b5f']];
 B.forEach((b,i)=>{const h=520+(i%3)*90;X.fillStyle=b[1];X.fillRect(b[0],1500-h,330,h);X.fillStyle='rgba(0,0,0,.12)';X.fillRect(b[0]+300,1500-h,30,h);
  for(let r_=0;r_<3;r_++)for(let c=0;c<3;c++){X.fillStyle=(i+r_+c)%4?'#cfe8f7':'#fff6d8';X.fillRect(b[0]+40+c*95,1500-h+50+r_*120,60,80)}
  if(i==4){X.fillStyle='#ffffff';X.beginPath();X.roundRect(b[0]+30,1500-h-90,270,80,20);X.fill();X.fillStyle='#2a6fdb';X.font="900 44px Inter,'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('🦷 DENTIST',b[0]+165,1500-h-48)}});
 X.fillStyle='#9aa3ad';X.fillRect(-2000,1500,6000,90);X.fillStyle='#5f6670';X.fillRect(-2000,1590,6000,600);X.fillStyle='#f2f2f2';for(let i=0;i<30;i++)X.fillRect(-1600+i*200,1760,110,16);
 for(let i=0;i<6;i++){const x=-200+i*420;X.fillStyle='#6b4a2e';X.fillRect(x,1360,16,140);X.fillStyle='#5f9e5a';X.beginPath();X.arc(x+8,1330,70,0,7);X.fill()}}
sh(T('s2')-.1,(t,r)=>{const wx=lerp(200,1180,r/2.4);cam(wx+40,1180,1.0,t,.5);street(t);
 const bx=((t*90)%2600)-600;X.save();X.translate(bx,700);X.strokeStyle='#333';X.lineWidth=5;X.beginPath();X.moveTo(-20,0);X.quadraticCurveTo(-10,-14+Math.sin(t*20)*8,0,0);X.quadraticCurveTo(10,-14+Math.sin(t*20)*8,20,0);X.stroke();X.restore();
 sm(wx,1720,1.05,{t,walk:t,hair:'curl',hairc:'#2b1d14',eyes:'happy',brow:'up',mouth:'smile',look:[.6,-.2]});
 notif(338,C((r-.05)/.3)*(1-C((r-1.85)/.25)),'Memopai','⏰ 08:00 · 🦷 Dentist at 9:30');});
// H: payoff. Back on the snowy pine branch, the nutcracker with its seed, winks (crane back)
sh(T('p1')-.1,(t,r)=>{cam(lerp(620,560,eo(r/2.4)),lerp(1200,1120,eo(r/2.4)),lerp(1.3,1.02,eo(r/2.4)),t,.4);winterWorld(t,{top:'#1f3156'});
 docPine(200,1520,900,'#2c405c',1);X.fillStyle='#5b4130';X.save();X.translate(220,1180);X.rotate(-.06);X.fillRect(0,-14,560,28);X.restore();X.fillStyle='#fff';X.fillRect(260,1158,460,10);
 nutcracker(560,1170,1.15,{t,seed:1,wink:r>1.3&&r<1.7,look:r>1.3?-.15:0});
 docSnow(t,60,{size:5,speed:90,wind:30});
 docWord("THE NUTCRACKER DOESN'T NEED IT.",540,520,62,r-.1,{from:'left',bg:'#14203a',col:'#ffffff',maxW:760});docWord('YOU MIGHT. 😉',540,670,110,r-1.1,{key:1,from:'right'});});
// I: end card + CTA
sh(T('cta')-.12,(t,r)=>endcard(t,r));
// COVER (t=1000): hero bird with full pouch, golden mountain, low in frame (cover lines sit at y 440..800)
sh(1000,(t,r)=>{cam(560,1150,1.0,t,0);autumnWorld(t,0);docMound(380,1470,1);docMound(780,1490,.8);
 PINS.slice(0,6).forEach(p=>docPin(p[0]-60,p[1]-90,1));nutcracker(560,1450,1.4,{t:0,pouch:.9,seed:1});docLeaves(3,10);});
