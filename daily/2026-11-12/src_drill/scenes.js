// ===== DRILL: 288-year library book -> Ana makes Memopai remind her neighbour to return her drill =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const ANA={hair:'#3a2216',coat:'#d9486a',dress:1,buttons:false};
const MARK={hair:'#a8642e',coat:'#4d7cc0',buttons:false};
const LIB={hair:'#8a8a8a',coat:'#6a5a3a',buttons:true};
function library(t){X.fillStyle='#5a3a28';X.fillRect(-3000,-3000,8000,8000);
 glow(540,200,520,'255,214,150',.45);rays(540,120,t,'255,230,180',.1);
 for(let c=-2;c<6;c++){const x0=c*260-80;rr(x0,180,240,1000,8,'#6b4530',6);for(let r=0;r<6;r++){rr(x0+10,330+r*150,220,14,3,'#4a2e1e',0);for(let b=0;b<9;b++){const h=90+rnd(c*50+r*9+b)*40;rr(x0+16+b*24,344+r*150-h,20,h,3,['#a8452e','#2f6a8a','#c9a24a','#3a7a4a','#7a3b6a'][(b+r+c+10)%5],2)}}}
 haze(700,1250,'255,220,170',.22);X.fillStyle='#7a5236';X.fillRect(-3000,1250,8000,3000);for(let k=-8;k<16;k++)line([[k*170,1250],[k*170-140,1950]],4,'rgba(0,0,0,.1)');
 bokeh(t,'255,210,140',10,200,900)}
function desk(x,y){gshadow(x,y+10,380,.3);rr(x-360,y-230,720,240,14,'#8a5a3a',8);vol(()=>X.rect(x-360,y-230,720,240),x,y-110,360,120);rr(x-380,y-250,760,36,10,'#a8714a',7)}
function lroom(t){X.fillStyle='#e9d8bc';X.fillRect(-3000,-3000,8000,8000);
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.08)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 X.save();X.beginPath();X.rect(90,300,330,400);X.clip();sky('#8fd0f5','#e8f6ff');hills(600,'#9fd38f',t,3,40,2);hills(660,'#7fb86f',t,5,30,5);X.restore();
 rr(78,288,354,424,10,null,18,'#8a5a3a');line([[255,288],[255,712]],10,'#8a5a3a');glow(255,500,330,'255,240,200',.3);
 X.fillStyle='#b98a5e';X.fillRect(-3000,1250,8000,3000);for(let k=-6;k<16;k++)line([[k*160,1250],[k*160-120,1900]],4,'rgba(0,0,0,.08)');haze(1150,1300,'60,30,10',.12)}
function shelf(x,y){rr(x-200,y,400,26,6,'#7a4f32',6);line([[x-150,y+26],[x-150,y+70]],10,'#5a3a24');line([[x+150,y+26],[x+150,y+70]],10,'#5a3a24')}
function sofa(x,y,col='#7a8f5a'){gshadow(x,y+20,330,.3);rr(x-280,y-260,560,200,50,col,8);vol(()=>X.roundRect(x-280,y-260,560,200,50),x,y-160,280,100)}
function sofaFront(x,y,col='#6a7f4a'){rr(x-310,y-110,620,120,34,col,8);rr(x-340,y-210,90,230,34,col,8);rr(x+250,y-210,90,230,34,col,8)}
function hphone(x,y,rot,on,buzz=0){X.save();X.translate(x+buzz,y);X.rotate(rot);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#2a2a2a',0);X.restore();if(on)glow(x,y,120,'130,240,160',.35)}
function hallway(t){X.fillStyle='#cfd8e3';X.fillRect(-3000,-3000,8000,8000);for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.1)':'rgba(40,60,90,.04)';X.fillRect(k*120,-3000,60,4300)}
 glow(540,160,420,'255,240,210',.5);rr(470,120,140,30,10,'#fff6d8',4);
 X.fillStyle='#8a94a6';X.fillRect(-3000,1250,8000,3000);rr(-200,1250,1500,16,0,'#6a7488',0);haze(1100,1300,'255,255,255',.18);
 rr(140,1180,200,60,10,'#c0392b',5);txt('WELCOME',240,1210,26,'#fff',0)}

// ===== SHOTS =====
// 1 HOOK: an ancient dusty book slams onto the library desk; the librarian is stunned; stamp 288 YEARS LATE
sh(0,(t,r)=>{cam(540,lerp(1000,960,eo(C(r/3))),lerp(1.18,1.04,eo(C(r/2.8))),t,.4);library(t);
 man(560,1250,1.15,Object.assign({face:r>1.1?'shock':'neutral',sweat:r>1.1,armL:r>1.1?-150:-20,armR:r>1.1?150:20,t},LIB));
 desk(540,1440);
 const k=C((r-.15)/.9);const bx=lerp(1150,560,eo(k)),by=lerp(500,1120,k)-Math.sin(k*Math.PI)*260;
 oldbook(bx,by,.85,{rot:lerp(1.8,-.08,eo(k)),dust:r>1.05?C((r-1.05)/.8):0,label:'1668'});
 if(r>1.03&&r<1.1)FL=.5;
 X.setTransform(1,0,0,1,0,0);if(r>1.25)stampBig('288 YEARS LATE','#e53935',-.12,C((r-1.25)/.3),430)});
// 2 MARK: on his sofa; Ana's drill on his shelf, dusty with cobwebs
sh(T('s1')-.05,(t,r)=>{cam(lerp(600,560,r/3.3),1080,lerp(1.22,1.3,r/3.3),t,.35);lroom(t);
 shelf(780,880);drill(720,880,.95,{t,dust:1,cob:1});
 sofa(420,1400);man(420,1370,1.05,Object.assign({face:'happy',armR:-170,armL:-170,t},MARK));sofaFront(420,1440);
 X.setTransform(1,0,0,1,0,0);tag(540,200,r<1.7?'ANA’S DRILL 🔧':'BORROWED: 8 MONTHS AGO 🕸️','#ffe14d',r<1.7?C((r-.1)/.25):C((r-1.7)/.25))});
// 3 ASKING: Ana at Mark's door, he says "sure!" (s2 first half)
sh(T('s2')-.05,(t,r)=>{cam(540,1000,lerp(1.05,1.12,r/2.2),t,.3);hallway(t);
 door(720,1250,1.05,{open:1,inside:'#3a3040',frame:'#7a5236'});
 gshadow(720,1460,140);man(720,1460,1.05,Object.assign({face:r<1.1?'happy':'wink',armR:-140,t},MARK));
 gshadow(320,1460,140);man(320,1460,1.05,Object.assign({face:r<1.1?'neutral':'angry',armR:-60,t},ANA));
 X.setTransform(1,0,0,1,0,0);tag(720,330,'“SURE! 👍”','#ffffff',C((r-.15)/.25))});
// 4 MEMOPAI: Ana texts Memopai; it confirms
sh(WT('s2',6)-.05,(t,r)=>{cam(540,960,1,t,.3);burst('#103a2a','#145236',t*.3);NOFX=1;
 const m1=T('m1'),m1e=E('m1'),t0=WT('s2',6);const z=lerp(1.25,1.36,eo(C(r/2)));
 phoneUI(540,lerp(1080,1010,eo(C(r/2))),z,r,{typing:t>m1e-.2&&t<m1e+.15,list:[
  {a:m1-t0-.1,me:1,text:'Remind Mark Saturday at 10: bring back my drill! 🔧',time:'19:40'},
  {a:m1e-t0+.15,me:0,text:'Got it ✅ I’ll remind Mark on Saturday at 10:00 🔧',time:'19:40'}]});
 X.setTransform(1,0,0,1,0,0);man(150,2010,.75,Object.assign({face:t>m1e+.5?'happy':'neutral',armR:-120,t},ANA))});
// 5 SATURDAY 10:00: Mark home on the sofa, phone buzzes with the Memopai notification
sh(T('s3')-.05,(t,r)=>{cam(540,1080,lerp(1.2,1.28,r/2.8),t,.35);lroom(t);shelf(780,880);drill(720,880,.95,{t,dust:1,cob:1});
 sofa(420,1400);const on=r>1.6;man(420,1370,1.05,Object.assign({face:r>2.1?'shock':'neutral',armR:-125,t},MARK));
 hphone(535,995,-.15,on,on?Math.sin(t*90)*4:0);sofaFront(420,1440);
 X.setTransform(1,0,0,1,0,0);if(r<1.7)tag(540,290,'SATURDAY · 10:00 ⏰','#ffe14d',C((r-.05)/.25));
 notif(150,C((r-1.75)/.35),'Memopai','🔧 Mark, bring back Ana’s drill today! (from Ana)')});
// 6 RETURNED: Mark hands the drill back at Ana's door
sh(T('s4')-.05,(t,r)=>{cam(560,1000,lerp(1.1,1.16,r/2),t,.35);hallway(t);door(330,1250,1.05,{open:1,inside:'#3a3040',frame:'#7a5236'});
 const k=C((r-.2)/.6);gshadow(330,1460,140);man(330,1460,1.05,Object.assign({face:r>.9?'happy':'neutral',armR:r>.9?-150:20,t},ANA));
 const mx=lerp(900,640,eo(k));gshadow(mx,1460,140);man(mx,1460,1.05,Object.assign({face:'smug',flip:1,walk:k<1?t:null,armR:-100,t},MARK));
 drill(mx-120,1290,.55,{t,flip:1,rot:.1});
 if(r>.9)sparkles(500,1050,C((r-.9)/.7),10,220);
 X.setTransform(1,0,0,1,0,0);tag(540,200,'DRILL: RETURNED ✅','#8ff07a',C((r-.6)/.25))});
// 7 PAYOFF: split screen 288 YEARS (library) vs 1 MESSAGE (Ana with drill + phone)
sh(T('p1')-.05,(t,r)=>{split2(t,(tt)=>{library(tt);man(560,1300,1.1,Object.assign({face:'sad',t:tt},LIB));desk(540,1480);oldbook(560,1180,.7,{rot:-.05});X.setTransform(1,0,0,1,0,0)},
 (tt)=>{lroom(tt);man(560,1450,1.1,Object.assign({face:'happy',armR:-150,armL:-60,t:tt},ANA));drill(650,1060,.55,{t:tt,spin:1});hphone(470,1150,-.2,1);X.setTransform(1,0,0,1,0,0)},
 {p:r/.4,badge:'VS',camA:[560,1150,1.0],camB:[700,1100,.95]});
 X.setTransform(1,0,0,1,0,0);
 const P1=T('p1'),P1e=E('p1');const a=C((t-lerp(P1,P1e,.25))/.25),b=C((t-lerp(P1,P1e,.6))/.25);
 tag(270,300,'288 YEARS','#ff8a80',a);tag(810,300,'1 MESSAGE','#8ff07a',b)});
// 8 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
