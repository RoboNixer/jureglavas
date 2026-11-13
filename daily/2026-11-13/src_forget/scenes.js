// ===== FORGET: your brain deletes half in an hour -> "bring wine" at 8 AM -> voice message to Memopai -> brain at 0% by lunch -> 18:00 buzz -> in-laws impressed =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const YOU={hair:'#4a2f1e',coat:'#2fa39a',buttons:false};
const PART={hair:'#b5562b',coat:'#e07a9a',dress:1,buttons:false};
const MIL={hair:'#bdbdbd',coat:'#8a6fb5',dress:1,buttons:false},FIL={hair:'#9e9e9e',coat:'#4a6a8a',buttons:true,mustache:1};
// hand position of man() (same maths as engine.html)
function hand(x,y,s,d,a){const ang=a*Math.PI/180;const ex=d*48+Math.sin(ang)*70*d,ey=-220+Math.cos(ang)*70;return [x+(ex+Math.sin(ang*1.4)*60*d)*s,y+(ey+Math.cos(ang*1.4)*60)*s]}
function youTag(x,y,p=1){X.save();X.globalAlpha=C(p);rr(x-62,y-30,124,60,30,'#ffe14d',6);txt('YOU',x,y+2,34,'#222',0);X.restore()}
function hall(t,day=1){X.fillStyle='#ead9bf';X.fillRect(-3000,-3000,8000,8000);for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.08)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 X.save();X.beginPath();X.rect(330,360,300,360);X.clip();sky('#8fd0f5','#fff4dc');hills(620,'#a6d692',t,3,40,2);hills(680,'#86bf74',t,5,30,5);X.restore();path(()=>X.roundRect(318,348,324,384,10),null,16,'#8a5a3a');line([[480,348],[480,732]],9,'#8a5a3a');
 glow(480,540,380,'255,236,190',.35);rays(480,420,t,'255,240,200',.08);
 rr(60,1060,200,26,6,'#8a5a3a',6);for(let k=0;k<3;k++)circ(100+k*60,1046,14,['#e53935','#3b6fd1','#f2c46b'][k],5);
 X.fillStyle='#b98a5e';X.fillRect(-3000,1250,8000,3000);for(let k=-6;k<16;k++)line([[k*160,1250],[k*160-120,1900]],4,'rgba(0,0,0,.08)');haze(1150,1300,'60,30,10',.1)}
function office(t){X.fillStyle='#d9e2ea';X.fillRect(-3000,-3000,8000,8000);
 X.save();X.beginPath();X.rect(120,250,840,520);X.clip();sky('#7fb8e8','#e6f3ff');for(let k=0;k<9;k++){const h=200+rnd(k)*300;rr(100+k*100,770-h,84,h+20,4,['#9fb3c8','#8aa1b9','#b4c4d6'][k%3],3);for(let w=0;w<6;w++)rr(115+k*100,790-h+w*40,20,22,2,'rgba(255,255,255,.55)',0)}X.restore();
 path(()=>X.roundRect(110,240,860,540,8),null,16,'#5a6b7a');line([[540,240],[540,780]],10,'#5a6b7a');glow(540,500,520,'255,250,230',.3);rays(540,300,t,'255,250,230',.07);
 X.fillStyle='#9aa7b2';X.fillRect(-3000,1250,8000,3000);haze(1100,1300,'40,50,70',.12)}
function deskO(x,y){gshadow(x,y+10,400,.3);rr(x-380,y-200,760,210,12,'#a07a55',7);rr(x-400,y-222,800,34,8,'#c09060',6);
 rr(x+130,y-420,250,170,14,'#2b2f3a',7);rr(x+146,y-404,218,138,6,'#7fd3ff',0);line([[x+255,y-250],[x+255,y-222]],14,'#2b2f3a');rr(x-300,y-262,90,40,6,'#fff',5);circ(x-150,y-250,28,'#f2c46b',6)}
function street(t){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#2b2a6a');g.addColorStop(.6,'#e8806a');g.addColorStop(1,'#ffc98a');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 hills(820,'#5a4a7a',t,2,50,3);for(let k=0;k<7;k++){const h=260+rnd(k+4)*260;rr(-200+k*220,1250-h,200,h,6,['#6a4f6a','#7a5a5a','#5a5a7a'][k%3],5);for(let w=0;w<4;w++)rr(-170+k*220+(w%2)*90,1270-h+Math.floor(w/2)*80,50,40,4,'#ffd98a',0)}
 // shop front
 rr(420,700,560,560,10,'#3f6a5a',8);rr(440,640,520,90,10,'#e53935',7);txt('WINE & MORE',700,690,48,'#fff',0);rr(470,780,460,340,8,'#ffe9b0',6);glow(700,950,420,'255,220,140',.5);
 for(let r=0;r<3;r++)for(let k=0;k<6;k++)wineb(520+k*75,870+r*110,.38,{col:['#5a1626','#2f5a2a','#6a3a1a'][(k+r)%3]});
 bokeh(t,'255,200,140',12,200,900);X.fillStyle='#4a4a55';X.fillRect(-3000,1250,8000,3000);haze(1100,1320,'255,170,120',.18)}
function porch(t){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#0e1640');g.addColorStop(1,'#3a3f7a');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 for(let k=0;k<20;k++)circ(rnd(k)*1080,rnd(k+7)*500,2+rnd(k+3)*3,'rgba(255,255,230,.9)',0);circ(880,240,46,'#fff4c8',0);glow(880,240,200,'255,240,200',.4);hills(980,'#22305a',t,2,40,4);
 rr(80,520,920,760,10,'#c98b5a',8);for(let k=0;k<9;k++)line([[80,560+k*80],[1000,560+k*80]],4,'rgba(0,0,0,.08)');
 rr(390,620,300,640,8,'#ffd98a',8);glow(540,900,520,'255,210,130',.55);circ(540,560,30,'#fff2b0',5);glow(540,560,240,'255,230,150',.6);
 X.fillStyle='#7a5a4a';X.fillRect(-3000,1250,8000,3000);haze(1150,1320,'255,200,120',.15)}

// ===== SHOTS =====
// 1 HOOK: YOU + live MEMORY meter 100% -> 44%, words float out of the head; PROVEN 1885 tag at the end
sh(0,(t,r)=>{const d0=WT('h1',1),d1=WT('h1',9),p=lerp(1,.44,eo(C((t-d0)/(d1-d0))));cam(540,lerp(1040,1000,r/3.6),lerp(1.12,1.2,r/3.6),t,.3);hall(t);
 man(540,1520,1.35,Object.assign({face:p<.6?'shock':'neutral',sweat:p<.6,armL:p<.6?-150:-20,armR:p<.6?150:20,t},YOU));gshadow(540,1525,200,.3);
 const W=['milk','PIN','7 pm','keys','mom','wine'];W.forEach((w,k)=>{const a=d0+k*.38;if(t<a)return;const q=(t-a)/1.6;if(q>1)return;X.globalAlpha=1-q;txt(w,540+(k%2?1:-1)*(80+q*260),1020-q*420-k*8,46,'#fff',9);X.globalAlpha=1});
 X.setTransform(1,0,0,1,0,0);membar(540,330,1.25,p,{t,drip:t>d0&&t<d1+.3});
 if(t>WT('h1',10)-.1)tag(540,1700,'📉 FORGETTING CURVE · 1885','#ffe14d',C((t-WT('h1',10)+.1)/.2))});
// 2 8:00 AM hallway: partner calls after YOU, who is half out of the door with coffee + bag
sh(T('g1')-.05,(t,r)=>{cam(lerp(560,520,r/2.6),1020,lerp(1.08,1.14,r/2.6),t,.3);hall(t);
 door(800,1250,1.05,{open:.85,inside:()=>{sky('#8fd0f5','#fff4dc');hills(-120,'#9fd38f',t,3,30,1)}});
 man(250,1500,1.2,Object.assign({face:'happy',armR:-140,armL:-20,t,look:1},PART));gshadow(250,1505,170,.3);
 const w=(t-T('g1'))*.6;man(780,1500,1.2,Object.assign({face:'neutral',armL:20,armR:-60,walk:t*1.4,t,look:-1},YOU));gshadow(780,1505,170,.3);
 const [hx,hy]=hand(780,1500,1.2,1,-60);rr(hx-8,hy-58,48,62,10,'#fff',5);rr(hx-8,hy-58,48,16,6,'#7a4a2a',0);rr(640,1250,130,110,14,'#3a3a4a',6);
 X.setTransform(1,0,0,1,0,0);tag(540,200,'8:00 AM ☕','#ffe14d',C((r-.05)/.2));membar(780,520,.6,1,{t})});
// 3 MEMOPAI: voice message plays, Memopai confirms (Memopai on screen from ~7 s)
sh(T('s2')-.05,(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#103a2a','#145236',t*.3);
 const v0=WT('s2',4)-.1,v1=WT('s2',8),rep=WT('s2',8)+.2;const pl=C((t-v0)/(v1-v0));const z=lerp(1.34,1.42,eo(C(r/2)));
 phoneUI(540,lerp(1200,1140,eo(C(r/2))),z,r,{typing:t>v1&&t<rep,list:[
  {a:v0-T('s2')+.05,me:1,voice:1,pl:pl,dur:pl>0&&pl<1?'0:0'+Math.floor(pl*3.9):'0:03',time:'08:01'},
  {a:rep-T('s2')+.05,me:0,text:'Got it ✅ Today at 18:00 I’ll remind you: buy wine 🍷 (dinner at 7)',time:'08:01'}]});
 X.setTransform(1,0,0,1,0,0);man(170,2010,.72,Object.assign({face:t>rep+.3?'happy':'neutral',armR:-120,t},YOU));
 if(t<v0)tag(540,300,'🎤 HOLD & SPEAK','#ffe14d',C((r-.05)/.2))});
// 4 12:30 office: meter drains to 0%, the wine thought bubble pops at "deleted"
sh(T('s3')-.05,(t,r)=>{const dl=WT('s3',2),cp=WT('s3',4);const p=lerp(.44,.2,eo(C((t-T('s3'))/(cp-T('s3')+.2))));cam(540,lerp(1040,1010,r/2.8),lerp(1.1,1.16,r/2.8),t,.3);office(t);
 man(540,1500,1.15,Object.assign({face:t>dl+.3?'shock':'neutral',armL:-60,armR:60,t},YOU));deskO(540,1560);
 if(t<dl+.05){const q=C((t-T('s3'))/.3);X.save();X.translate(760,800);X.scale(q,q);circ(-150,170,16,'#fff',5);circ(-110,120,24,'#fff',5);ell(0,0,140,110,'#fff',7);wineb(0,10,.55);X.restore()}
 else if(t<dl+.5){boom(760,800,(t-dl)/.5);if(t<dl+.06)FL=.3}
 X.setTransform(1,0,0,1,0,0);tag(540,1720,'12:30 🥪','#ffe14d',C((r-.05)/.2));membar(540,330,1.1,p,{t,blink:1})});
// 5 18:00: buzz -> Memopai notification -> YOU grabs the wine
sh(T('s4')-.05,(t,r)=>{const bz=WT('s4',2)+.05,gr=WT('s4',6);cam(lerp(520,560,r/3),1030,lerp(1.1,1.16,r/3),t,.35);street(t);
 const on=t>bz,got=t>gr;man(330,1510,1.2,Object.assign({face:got?'happy':on?'shock':'neutral',armR:on?-120:20,armL:got?-150:-20,walk:on?null:t*1.5,t},YOU));gshadow(330,1515,170,.3);
 if(on){const [hx,hy]=hand(330,1510,1.2,1,-120);hphoneF(hx,hy,t<bz+.8,t)}
 if(got){const [hx,hy]=hand(330,1510,1.2,-1,-150);wineb(hx,hy-40,.6,{bow:1,glint:1,t});sparkles(hx,hy-60,C((t-gr)/.8),10,180)}
 X.setTransform(1,0,0,1,0,0);if(!on)tag(540,200,'18:00 ⏰','#ffe14d',C((r-.05)/.2));else notif(150,C((t-bz)/.3),'Memopai','🍷 Buy wine! Dinner at 7 (her parents)')});
function hphoneF(x,y,buzz,t){const b=buzz?Math.sin(t*90)*5:0;X.save();X.translate(x+b,y-30);X.rotate(-.2);rr(-30,-54,60,108,12,'#1b1b1f',5);rr(-23,-45,46,90,7,'#25d366',0);X.restore();glow(x,y-30,120,'130,240,160',.4)}
// 6 PAYOFF 19:00: in-laws open the door, YOU holds out the wine; ORGANISED stamp on "Let them"
sh(T('p1')-.05,(t,r)=>{const lt=WT('p1',5);cam(540,lerp(1260,1230,r/2.8),lerp(1.05,1.1,r/2.8),t,.3);porch(t);
 man(470,1460,1.0,Object.assign({face:'happy',armR:-30,armL:30,t,look:1},MIL));man(610,1460,1.02,Object.assign({face:'happy',armL:-30,armR:30,t,look:1},FIL));
 man(850,1530,1.2,Object.assign({face:'happy',armL:-80,armR:20,t,look:-1,flip:0},YOU));gshadow(850,1535,170,.3);
 const [hx,hy]=hand(850,1530,1.2,-1,-80);wineb(hx-10,hy-30,.6,{bow:1,glint:1,t,rot:-.2});
 for(let k=0;k<5;k++){const q=((t*.6+k*.2)%1);X.globalAlpha=1-q;txt('❤',420+k*55,1000-q*200,40,'#ff5a7a',0);X.globalAlpha=1}
 X.setTransform(1,0,0,1,0,0);if(t>lt-.1){stampBig('ORGANISED ✓','#1fa463',-8,C((t-lt+.1)/.3),400);if(t<lt)FL=.2}});
// 7 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
// COVER-ONLY shot (use cover_t=1000.5): YOU, meter at 44% leaking, words flying off
sh(1000,(t,r)=>{cam(540,960,1,0,0);hall(0);man(540,1760,1.45,Object.assign({face:'shock',sweat:true,armL:-150,armR:150,t:0},YOU));gshadow(540,1765,210,.3);
 ['milk','PIN','7 pm','keys','wine'].forEach((w,k)=>{txt(w,540+(k%2?1:-1)*(230+(k%3)*60),1130+k*70,56,'#fff',10)});X.setTransform(1,0,0,1,0,0);membar(540,900,1.4,.44,{t:.3,drip:1})});
