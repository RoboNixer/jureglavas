// ===== LATER: 288-year library book -> YOU text your "later" list to Memopai =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const YOU={hair:'#4a2f1e',coat:'#2fa39a',buttons:false};
const LIB={hair:'#8a8a8a',coat:'#6a5a3a',buttons:true};
const ITEMS=['Call Mom back','Pay the bill','Return parcel'];
function library(t){X.fillStyle='#5a3a28';X.fillRect(-3000,-3000,8000,8000);
 glow(540,200,520,'255,214,150',.45);rays(540,120,t,'255,230,180',.1);
 for(let c=-2;c<6;c++){const x0=c*260-80;rr(x0,180,240,1000,8,'#6b4530',6);for(let r=0;r<6;r++){rr(x0+10,330+r*150,220,14,3,'#4a2e1e',0);for(let b=0;b<9;b++){const h=90+rnd(c*50+r*9+b)*40;rr(x0+16+b*24,344+r*150-h,20,h,3,['#a8452e','#2f6a8a','#c9a24a','#3a7a4a','#7a3b6a'][(b+r+c+10)%5],2)}}}
 haze(700,1250,'255,220,170',.22);X.fillStyle='#7a5236';X.fillRect(-3000,1250,8000,3000);for(let k=-8;k<16;k++)line([[k*170,1250],[k*170-140,1950]],4,'rgba(0,0,0,.1)');
 bokeh(t,'255,210,140',10,200,900)}
function desk(x,y){gshadow(x,y+10,380,.3);rr(x-360,y-230,720,240,14,'#8a5a3a',8);vol(()=>X.rect(x-360,y-230,720,240),x,y-110,360,120);rr(x-380,y-250,760,36,10,'#a8714a',7)}
function lroom(t,win=1){X.fillStyle='#e9d8bc';X.fillRect(-3000,-3000,8000,8000);
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.08)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 if(win){X.save();X.beginPath();X.rect(90,300,330,400);X.clip();sky('#8fd0f5','#e8f6ff');hills(600,'#9fd38f',t,3,40,2);hills(660,'#7fb86f',t,5,30,5);X.restore();
 path(()=>X.roundRect(78,288,354,424,10),null,18,'#8a5a3a');line([[255,288],[255,712]],10,'#8a5a3a');glow(255,500,330,'255,240,200',.3)}
 X.fillStyle='#b98a5e';X.fillRect(-3000,1250,8000,3000);for(let k=-6;k<16;k++)line([[k*160,1250],[k*160-120,1900]],4,'rgba(0,0,0,.08)');haze(1150,1300,'60,30,10',.12)}
function sofa(x,y,col='#7a8f5a'){gshadow(x,y+20,330,.3);rr(x-280,y-260,560,200,50,col,8);vol(()=>X.roundRect(x-280,y-260,560,200,50),x,y-160,280,100)}
function sofaFront(x,y,col='#6a7f4a'){rr(x-310,y-110,620,120,34,col,8);rr(x-340,y-210,90,230,34,col,8);rr(x+250,y-210,90,230,34,col,8)}
function hphone(x,y,rot,on,buzz=0){X.save();X.translate(x+buzz,y);X.rotate(rot);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a6ea8',0);X.restore();if(on)glow(x,y,120,'130,240,160',.35)}

// ===== SHOTS =====
// 1 HOOK: "I'll do it later" -> ancient book slams on the library desk, stamp 288 YEARS LATE
sh(0,(t,r)=>{cam(540,lerp(1000,960,eo(C(r/3))),lerp(1.18,1.04,eo(C(r/3.5))),t,.4);library(t);
 const tb=WT('h1',5)-.45,land=tb+.9,k=C((t-tb)/.9);
 man(560,1250,1.15,Object.assign({face:t>land?'shock':'neutral',sweat:t>land,armL:t>land?-150:-20,armR:t>land?150:20,t},LIB));
 desk(540,1440);
 if(t>tb){const bx=lerp(1150,560,eo(k)),by=lerp(500,1120,k)-Math.sin(k*Math.PI)*260;oldbook(bx,by,.85,{rot:lerp(1.8,-.08,eo(k)),dust:t>land?C((t-land)/.8):0,label:'1668'})}
 if(t>land&&t<land+.07)FL=.5;
 X.setTransform(1,0,0,1,0,0);const ts=Math.max(land+.2,WT('h1',10)-.1);
 if(t<land)tag(540,430,'“I’LL DO IT LATER” 😌','#ffffff',C((r-.1)/.25));
 if(t>ts)stampBig('288 YEARS LATE','#e53935',-.12,C((t-ts)/.3),430)});
// 2 YOU: on the sofa scrolling; the wall list gets LATER, LATER, LATER (s1 + "Later never comes")
sh(T('s1')-.05,(t,r)=>{const bad=t>T('s2')-.05;cam(lerp(590,560,r/5),1010,lerp(1.2,1.27,r/5),t,.35);lroom(t,0);
 todo(700,520,1.05,{items:ITEMS,w:540,show:[(t-WT('s1',2))/.2,(t-WT('s1',6))/.2,(t-WT('s1',9))/.2],later:[(t-WT('s1',5))/.22,(t-WT('s1',8))/.22,(t-WT('s1',11))/.22]});
 sofa(330,1400);man(330,1370,1.05,Object.assign({face:bad?'shock':'happy',sweat:bad,armR:70,armL:bad?-150:-20,t},YOU));hphone(518,1128,-.15,0);sofaFront(330,1440);
 X.setTransform(1,0,0,1,0,0);if(t<WT('s1',2))tag(280,850,'YOU 👇','#ffe14d',C((r-.05)/.2))});
// 3 MEMOPAI: you text it; it confirms; then the bill and the parcel (s2 second half + m1 + s3)
sh(WT('s2',3)-.05,(t,r)=>{cam(540,960,1,t,.3);burst('#103a2a','#145236',t*.3);NOFX=1;
 const t0=WT('s2',3)-.05,m1=T('m1'),m1e=E('m1'),s3=T('s3');const z=lerp(1.25,1.33,eo(C(r/2)));
 phoneUI(540,lerp(1040,960,eo(C(r/2))),z,r,{typing:t>m1e-.15&&t<m1e+.1,list:[
  {a:m1-t0+.15,me:1,text:'Remind me at 6 to call Mom back 📞',time:'14:02'},
  {a:m1e-t0+.1,me:0,text:'Done ✅ I’ll remind you today at 18:00',time:'14:02'},
  {a:s3-t0+.2,me:1,text:'Thu 9:00: pay bill 💡',time:'14:02'},
  {a:WT('s3',3)-t0+.1,me:1,text:'Fri 17:00: parcel 📦',time:'14:02'},
  {a:E('s3')-t0+.05,me:0,text:'Got both ✅',time:'14:02'}]});
 X.setTransform(1,0,0,1,0,0);man(150,2010,.75,Object.assign({face:t>m1e?'happy':'neutral',armR:-120,t},YOU))});
// 4 SIX O'CLOCK: buzz, the reminder lands, you call Mom; first item gets ticked
sh(T('s4')-.05,(t,r)=>{const bz=WT('s4',2),call=WT('s4',3)+.1;cam(lerp(590,560,r/3),1010,lerp(1.2,1.27,r/3),t,.35);lroom(t,0);
 todo(700,520,1.05,{items:ITEMS,w:540,done:[(t-call-.2)/.3,0,0]});
 sofa(330,1400);const on=t>bz;man(330,1370,1.05,Object.assign({face:t>call?'happy':on?'shock':'neutral',armR:t>call?-150:70,t},YOU));
 if(t>call)hphone(415,985,.25,1);else hphone(518,1128,-.15,on,on?Math.sin(t*90)*4:0);sofaFront(330,1440);
 X.setTransform(1,0,0,1,0,0);if(t<bz)tag(280,850,'18:00 ⏰','#ffe14d',C((r-.05)/.2));
 notif(150,C((t-bz)/.3),'Memopai','📞 Call Mom back!')});
// 5 PAYOFF: split screen 288 YEARS (library) vs your list, all ticked
sh(T('p1')-.05,(t,r)=>{const P1=T('p1'),P1e=E('p1'),d0=lerp(P1,P1e,.62);
 split2(t,(tt)=>{library(tt);man(560,1300,1.1,Object.assign({face:'sad',t:tt},LIB));desk(540,1480);oldbook(560,1180,.7,{rot:-.05});X.setTransform(1,0,0,1,0,0)},
 (tt)=>{lroom(tt,0);todo(700,430,.85,{items:ITEMS,w:540,done:[1,(tt-d0)/.25,(tt-d0-.35)/.25]});man(700,1330,.95,Object.assign({face:'happy',armR:tt>d0?-150:20,armL:tt>d0?150:-20,t:tt},YOU));if(tt>d0+.4)sparkles(700,700,C((tt-d0-.4)/.7),10,240);X.setTransform(1,0,0,1,0,0)},
 {p:r/.4,badge:'VS',camA:[560,1150,1.0],camB:[700,1000,.95]});
 X.setTransform(1,0,0,1,0,0);
 const a=C((t-lerp(P1,P1e,.22))/.25),b=C((t-d0-.3)/.25);
 if(b<=0)tag(270,300,'288 YEARS','#ff8a80',a);else tag(790,300,'DONE BY FRIDAY ✅','#8ff07a',b)});
// 6 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
// COVER-ONLY shot (t=1000, never reached by render.js): YOU on the sofa under the list stamped LATER x3. Use cover_t=1000.5
sh(1000,(t,r)=>{cam(540,960,1,0,0);lroom(0,0);todo(690,760,1.1,{items:ITEMS,w:540,later:[1,1,1]});
 sofa(300,1620);man(300,1590,1.15,Object.assign({face:'happy',armR:70,t:0},YOU));hphone(506,1326,-.15,0);sofaFront(300,1660);X.setTransform(1,0,0,1,0,0)});
