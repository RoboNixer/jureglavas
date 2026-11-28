// 2026-11-28 10:00 FUN FACT — "'Babe... why is there a ticket on the car?' (A bee would've been on time.)"
// Hit-recipe-first DOCUMENTARY: person + quoted line + comic object first, then the honeybee time-memory fact (look4doc v2: meadow, honeybee, feeder, docClock, parkingTicket).
const YOU={hair:'mop',hairc:'#6b3a1c',lashes:1,jumper:'#c2456b'};
const HIM={hair:'spike',hairc:'#1d1d1d',tee:'#e0a030'};
const WARD={cap:1,overalls:'#c9d62a'};
function carStreet(t,o={}){const _pb=pblur;pblur=(px,fn)=>fn();street3(t,{});pblur=_pb;
 // parked cars + meter + a tree for depth
 pcar(-260,1420,.62,{col:'#6f8fb8',col2:'#4f6f98'});pcar(1380,1420,.62,{col:'#e0b04a',col2:'#b88a2a'});
 for(let i=0;i<3;i++){const tx=-80+i*640;X.fillStyle='#6b4a2e';X.fillRect(tx,1060,22,300);X.fillStyle='#5f9e5a';X.beginPath();X.arc(tx+11,1020,110,0,7);X.fill();X.fillStyle='#78b56e';X.beginPath();X.arc(tx-20,990,60,0,7);X.fill()}
 const bx=((t*110)%2400)-500;X.save();X.translate(bx,620);X.strokeStyle='#333';X.lineWidth=5;X.beginPath();X.moveTo(-20,0);X.quadraticCurveTo(-10,-14+Math.sin(t*20)*8,0,0);X.quadraticCurveTo(10,-14+Math.sin(t*20)*8,20,0);X.stroke();X.restore()}
// A: HOOK. HIM at the red car holding the ticket up, YOU walk in from the left with a coffee (tracking + push-in on the ticket)
sh(0,(t,r)=>{const wx=lerp(-60,340,eo(C(r/1.3)));
 cam(lerp(440,560,eo(r/2.2)),lerp(960,1000,eo(r/2.2)),lerp(.86,.98,eio(C(r/2.3))),t,.4);carStreet(t);
 pmeter(900,1420,.85,{t,l1:'EXPIRED',l2:'10:00',col:'#ff6a5a',flash:1});
 pcar(560,1440,.72,{});parkingTicket(470,1180,.9,{t,flap:1,rot:-.08});
 sm(690,1760,.98,Object.assign({t,talk:r<2.2?t:null,brow:'up',mouth:'o',look:[-.6,0],armL:150,bendL:30,holdL:(x,y)=>parkingTicket(x,y-60,1.5,{t,flap:.6,rot:-.1}),armR:40,bendR:-30},HIM));
 sm(wx,1760,.98,Object.assign({t,walk:r<1.3?t:null,eyes:r>1.3?'wide':'open',brow:r>1.3?'worried':'flat',mouth:r>1.3?'o':'smile',sweat:r>1.6,look:[.6,0],armR:70,bendR:-90,holdR:(x,y)=>{rr(x-18,y-50,36,52,8,'#fff',4);rr(x-20,y-60,40,14,5,'#6b3a1c',3)}},YOU));
 label3('You, 12:00 😬',C((r-.2)/.3));});
// B: the meter, crane down. Clock widget spins 10:00 -> 12:00
sh(T('f1')-.08,(t,r)=>{cam(540,lerp(1060,1180,eo(r/2.6)),lerp(1.3,1.15,eo(r/2.6)),t,.4,lerp(-3,0,eo(r/.5)));carStreet(t);
 pmeter(540,1780,1.0,{t,l1:'EXPIRED',l2:'10:00',col:'#ff6a5a',flash:1,shake:r<.4?3:0});
 const k=C((r-.3)/1.8);docClock(540,560,110,10+2*eo(k),(120*eo(k))%60,{p:C((r-.1)/.3),col:'#e0453a'});
 if(r>2.1)docWord('2 HOURS LATE',540,1290,96,r-2.1,{key:1});});
// C: whip to the meadow. A honeybee flies in (tracking pan), context chip
sh(T('b1')-.08,(t,r)=>{const bx=lerp(-120,560,eo(C(r/1.6))),by=lerp(900,1120,eo(C(r/1.6)))+Math.sin(r*5)*30;
 cam(lerp(300,560,eo(r/2)),lerp(1100,1180,eo(r/2.6)),lerp(1.0,1.15,eio(C(r/2.6))),t,.4,lerp(5,0,eo(r/.5)));docMeadow(t);
 docFlower(600,1400,1.6,'#f28dbb',t);honeybee(bx,by,1.5,{t,fly:1,look:r>1.6?Math.sin(t*2)*.2:0});
 docChip('Honeybee · Munich, 1929',C((r-.15)/.4));
 docWord('KNOWS THE TIME',540,560,104,r-.6,{key:1,from:'left'});});
// D: the experiment. Feeder full at 10:00 for days, bees feeding; then the dish is emptied (clock + day counter)
sh(T('b2')-.08,(t,r)=>{cam(lerp(480,600,eio(C(r/3.8))),1110,lerp(1.05,1.15,eo(r/3.8)),t,.35);docMeadow(t,{top:'#6fbbe6'});
 const empty=r>2.4,full=empty?1-C((r-2.4)/.5):1;docFeeder(560,1560,1.25,full);
 for(let i=0;i<5;i++){const a=t*1.2+i*1.3,bx=560+Math.cos(a)*(empty?220+i*30:110+i*14),by=1180+Math.sin(a*1.4)*(empty?120:30)-(empty?160:0);honeybee(bx,by,.75,{t:t+i,fly:1,flip:Math.cos(a)<0,num:['#e94b4b','#2f7de1','#ffffff','#e94b4b','#2f7de1'][i]})}
 const day=Math.min(3,1+Math.floor(r/.8));docClock(540,600,110,10,0,{p:C((r-.1)/.3),label:empty?'10:00 · NO FOOD':'DAY '+day+' · 10:00'});
 if(empty)docWord('FOOD GONE',540,1330,92,r-2.5,{from:'up'});});
// E: next day, 10:00 sharp: bees arrive at the EMPTY dish anyway (push-in, stamp)
sh(T('b3')-.08,(t,r)=>{cam(560,lerp(1110,1170,eo(r/2.8)),lerp(1.05,1.3,eio(C((r-.3)/2.4))),t,.4);docMeadow(t,{top:'#6fbbe6'});
 docFeeder(560,1560,1.25,0);const k=C((r-.3)/1.3);
 for(let i=0;i<7;i++){const d=C(k*1.4-i*.08),sx=i%2?1400:-300,bx=lerp(sx,470+i*30,eo(d)),by=lerp(700+i*60,1225+Math.sin(t*6+i)*8,eo(d));honeybee(bx,by,.75,{t:t+i,fly:d<1,flip:sx>500,num:['#e94b4b','#2f7de1','#ffffff'][i%3]})}
 docClock(540,600,105,9+C(r/1.1),(r<1.1?59*eo(r/1.1):0),{p:1,label:'NEXT DAY · 10:00'});
 if(r>1.7){X.save();X.setTransform(1,0,0,1,0,0);stampBig('RIGHT ON TIME','#25b35a',-8,C((r-1.7)/.22),1320);X.restore()}});
// F: the Memopai beat: you park, voice note, transcript, ✅ (phone hero over a blurred street)
sh(T('s1')-.1,(t,r)=>{NOFX=1;docBg('#0d3b30','#125c48','#1d8566');
 cam(540,lerp(990,960,eo(r/3)),lerp(.97,1.0,eo(r/3)),t,.3,lerp(2,0,eo(r/1.2)));
 phoneUI(540,960,1.16,r,{typing:r>2.4&&r<3.1,list:[{a:-1,date:'SAT 28 NOV'},{a:.25,me:1,voice:1,dur:'0:03',pl:C((r-.25)/1.6),time:'08:02'},{a:1.4,me:1,text:'"Remind me at 9:45: move the car 🚗"',time:'08:02'},{a:3.1,me:0,text:'✅ Got it! Today · 09:45 ⏰ 🚗 Move the car',time:'08:02'}]});});
// G: 09:45. Tracking shot, YOU hurry back to the car, notification; warden in the background finds nothing
sh(T('s2')-.1,(t,r)=>{const wx=lerp(-40,470,eo(C(r/1.8)));cam(lerp(420,560,eo(r/2.2)),980,.92,t,.5);carStreet(t);
 pmeter(880,1420,.85,{t,l1:'PAID UNTIL',l2:'10:00'});pcar(560,1440,.72,{});
 const ww=lerp(880,720,C(r/2.6));sm(ww,1700,.78,Object.assign({t,walk:t,flip:1,brow:r>1.8?'sad':'flat',mouth:r>1.8?'frown':'flat',look:[-.5,0],armR:60,bendR:-80,holdR:(x,y)=>rr(x-26,y-40,52,70,8,'#30343c',4)},WARD));
 sm(wx,1760,.98,Object.assign({t,walk:r<1.8?t:null,eyes:'happy',brow:'up',mouth:'smile',look:[.6,-.2],armR:r>1.8?150:60,bendR:-40},YOU));
 notif(338,C((r-.05)/.3)*(1-C((r-2.3)/.25)),'Memopai','⏰ 09:45 · 🚗 Move the car');});
// H: payoff. Same framing as frame 1: clean windscreen, both happy, a bee lands on the wiper (callback)
sh(T('p1')-.1,(t,r)=>{cam(lerp(600,560,eo(r/3)),lerp(940,900,eo(r/3)),lerp(1.0,.9,eo(r/3)),t,.4);carStreet(t);
 pmeter(880,1420,.85,{t,l1:'PAID UNTIL',l2:'10:00'});pcar(560,1440,.72,{});
 const k=C(r/1.4);honeybee(lerp(-100,560,eo(k)),lerp(800,1130,eo(k)),.8,{t,fly:k<1,wink:r>1.8&&r<2.3});
 sm(720,1760,.98,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.5,0],armR:120,bendR:-60},HIM));
 sm(340,1760,.98,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',look:[.5,0],armL:150,bendL:-40},YOU));
 docWord('THE BEE HAS A CLOCK IN ITS HEAD.',540,430,56,r-.15,{from:'left',bg:'#14203a',col:'#ffffff',maxW:760});docWord('YOU HAVE WHATSAPP. 😉',540,570,80,r-1.5,{key:1,from:'right',maxW:760});});
// I: end card + CTA
sh(T('cta')-.12,(t,r)=>endcard(t,r));
// COVER (t=1000): him holding the ticket, you in shock, low in frame (cover lines at y 440..800)
sh(1000,(t,r)=>{cam(560,900,.95,t,0);carStreet(2);pmeter(880,1420,.85,{t:0,l1:'EXPIRED',l2:'10:00',col:'#ff6a5a'});pcar(560,1440,.72,{});
 sm(690,1760,.98,Object.assign({t:0,brow:'up',mouth:'o',look:[-.6,0],armL:150,bendL:30,holdL:(x,y)=>parkingTicket(x,y-60,1.5,{rot:-.1})},HIM));
 sm(340,1760,.98,Object.assign({t:0,eyes:'wide',brow:'worried',mouth:'o',sweat:1,look:[.6,0]},YOU));});
