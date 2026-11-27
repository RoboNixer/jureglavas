// 2026-11-27 08:00 REMINDER OF THE DAY — "Black Friday. You have 14 days to change your mind." (kinetic type + phone look; craft ladder: KINETIC TYPE KIT in look2.js)
const BFW=['BLACK FRIDAY','-70%','DEAL','-50%','SALE','ADD TO CART'];
function rainParcels(t,n,front){for(let k=0;k<n;k++){const sp=front?520:300,s=front?.55+rnd(k)*.25:.28+rnd(k+3)*.15;const x=front?(k%2?60+rnd(k+11)*90:930+rnd(k+11)*90):120+rnd(k+11)*840,y=((t*sp+rnd(k+5)*2400)%2400)-300;X.save();if(!front)X.globalAlpha=.55;kinParcel(x,y,s,{rot:(t*60+k*47)%360});X.restore()}}
// A: big date stamp, BLACK FRIDAY slams in, parcels raining (camera pulls back + untilts)
sh(0,(t,r)=>{NOFX=1;kinBg(t,{c1:'#07070d',c2:'#2b0c3f',words:BFW,glow:'255,200,60',gy:700});
 cam(540,lerp(700,960,eo(r/1.8)),lerp(1.4,1,eo(r/1.6)),t,.6,lerp(-5,0,eo(r/1.6)));
 rainParcels(t,6,0);
 kinDate(540,640,.95,r,{wd:'FRIDAY',d:'27',m:'NOVEMBER'});
 kinWord('BLACK',540,1060,190,r-.45,{from:'left',col:'#111',bg:'#ffd23f',rot:-3});
 kinWord('FRIDAY',540,1250,190,r-.7,{from:'right',col:'#fff',rot:-3});
 X.save();X.globalAlpha=.9;rainParcels(t+3,3,1);X.restore();
 if(r>1.25)kinWord('🛒',800,860,120,r-1.25,{});});
// B: 14 DAYS + EU chip, day boxes tick across (tracking pan)
sh(T('f1')-.12,(t,r)=>{NOFX=1;kinBg(t,{c1:'#0d1b4d',c2:'#1d4fa8',words:['14 DAYS','CHANGE YOUR MIND','EU RULE'],glow:'120,180,255',gy:650});
 cam(lerp(500,580,eio(r/2.6)),lerp(940,980,eo(r/2.6)),lerp(1.12,1.0,eo(r/2.2)),t,.5);
 kinWord('🇪🇺  EU rule · most online buys',540,420,46,r,{col:'#0d1b4d',bg:'#ffffff',k:16});
 kinWord('14',540,700,330,r-.15,{col:'#ffd23f'});
 kinWord('DAYS TO CHANGE',540,920,92,r-.35,{from:'up',col:'#fff'});
 kinWord('YOUR MIND',540,1030,92,r-.45,{from:'up',col:'#fff'});
 kinDays(540,1150,{n:14,tick:C((r-.6)/1.9)*14});});
// C: DAY 15 ... TOO LATE (push-in, the sad parcel drops in)
const C0=T('f2')-.08;
sh(C0,(t,r)=>{NOFX=1;kinBg(t,{c1:'#2a0606',c2:'#7a1414',words:['DAY 15','TOO LATE','OOPS'],glow:'255,90,90',gy:900});
 cam(540,960,lerp(1.0,1.13,eo(r/1.8)),t,.6,lerp(4,-2,eo(r/1.8)));if(r>1.0&&r<1.3)SHK=14*(1-(r-1)/.3);
 kinWord('DAY 15',540,560,180,r,{col:'#fff',bg:'#e53935',rot:-4});
 const land=C((r-.25)/.4),py=lerp(500,1330,eo(land)),sq=land>=1?1+.12*Math.exp(-(r-.65)*8)*Math.cos((r-.65)*30):1;
 X.save();X.translate(540,py);X.scale(1/sq,sq);kinParcel(0,0,1.25,{face:r>.7?'sad':null,label:'RETURN?'});X.restore();
 if(r>.95)stampBig('TOO LATE','#ffffff',-10,C((r-.95)/.22),900);});
// D: the phone: the exact message + ✅ reply (hero shot)
sh(T('s1')-.1,(t,r)=>{NOFX=1;kinBg(t,{c1:'#04352c',c2:'#0e7a5f',words:['REMIND ME','KEEP OR RETURN?','12 DAYS'],glow:'120,255,190',gy:950});
 cam(540,lerp(1010,960,eo(r/2.6)),lerp(.97,1.0,eo(r/3)),t,.3,lerp(2,0,eo(r/1.2)));
 phoneUI(540,960,1.16,r,{typing:r>1.5&&r<2.3,list:[{a:-1,date:'TUE 1 DEC · 📦 IT ARRIVED'},{a:.45,me:1,text:'Remind me in 12 days: keep or return the jacket? 🧥',time:'18:02'},{a:2.3,me:0,text:'✅ Got it! Sun 13 Dec · 10:00 ⏰ Keep or return the jacket? 🧥',time:'18:02'}]});
});
// E: Day 12 — the reminder lands, parcel opens (crane down), KEEP IT? / SEND IT BACK?
sh(T('p1')-.1,(t,r)=>{NOFX=1;kinBg(t,{c1:'#5a1d00',c2:'#e07a1f',words:['DAY 12','KEEP IT?','SEND IT BACK?'],glow:'255,220,140',gy:1000});
 cam(540,lerp(820,960,eo(r/2.6)),lerp(1.1,1,eo(r/2.6)),t,.5);
 kinParcel(540,1330,1.05,{open:C((r-.5)/.5),item:'🧥',face:r>.9?'happy':null});
 kinWord('KEEP IT?',540,720,120,r-1.1,{from:'left',col:'#08301a',bg:'#25d366',rot:-3});
 kinWord('SEND IT BACK?',540,880,104,r-1.6,{from:'right',col:'#3a1a00',bg:'#ffd23f',rot:2});
 notif(338,C(r/.35)*(1-C((r-1.0)/.3)),'Memopai','⏰ Day 12: keep or return the jacket? 🧥');});
// F: end card + CTA
sh(T('cta')-.12,(t,r)=>endcard(t,r));
// COVER (t=1000, never reached by render.js): parcels + date page, low in frame (cover lines sit at y 440..800)
sh(1000,(t,r)=>{NOFX=1;kinBg(t,{c1:'#07070d',c2:'#2b0c3f',words:BFW,glow:'255,200,60',gy:1150});
 kinParcel(400,1500,1.0,{rot:-4,label:'RETURN?',face:'sad'});kinParcel(700,1520,.8,{rot:6});kinParcel(560,1290,.75,{rot:-8});
 kinDays(540,880,{n:14,tick:14,cols:7,size:80});kinDate(800,1130,.45,5,{wd:'FRIDAY',d:'27',m:'NOVEMBER',rot:8});});
