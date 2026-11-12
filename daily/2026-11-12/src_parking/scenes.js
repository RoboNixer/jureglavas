// ===== PARKING: Gary vs Brenda, saved by Mom's Memopai reminder =====
// word-time helper (same weighting as the karaoke captions): time of word #i in line tag
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const MOM={hair:'bun',glasses:1,eyes:'wide',shirt:'#8e5aa8',cardigan:1,pants:'#5a4a6a',mouth:'smile',hw:112,hh:104,nose:30};
const BRENDA={hair:'afro',hat:'cop',shirt:'#c6e83a',shirt2:'#d8f25a',pants:'#2b3448',eyes:'sleepy',mouth:'smile',hw:112,hh:104,nose:28,skin:'#d9a07a'};
function donut(x,y,s,bite=0){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,46,'#d9a05b',6);path(()=>X.arc(0,0,40,Math.PI*1.05,Math.PI*2.95),'#ff7fb5',0);circ(0,0,15,'#f3e3c8',5);
 for(let k=0;k<7;k++){X.save();X.rotate(k*.9);rr(22,-4,12,5,2,['#fff','#7fd1ff','#ffe14d'][k%3],0);X.restore()}if(bite){X.fillStyle='#f3e3c8';X.beginPath();X.arc(40,-22,22,0,7);X.fill()}X.restore()}
function pad(x,y,s,blank=1){X.save();X.translate(x,y);X.scale(s,s);rr(-46,-62,92,124,8,'#fff6b8',5);rr(-46,-62,92,20,4,'#c0392b',0);if(!blank)for(let k=0;k<4;k++)line([[-32,-24+k*20],[32,-24+k*20]],4,'#888');X.restore()}
function car(x,y,s,col='#e05a4a',tk=0){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.25;ell(0,0,300,22,'#000',0);X.globalAlpha=1;
 path(()=>{X.moveTo(-180,-120);X.lineTo(-120,-220);X.lineTo(120,-220);X.lineTo(190,-120);X.closePath()},col,8);rr(-110,-205,100,80,8,'#bfe3ff',5);rr(10,-205,100,80,8,'#bfe3ff',5);
 rr(-300,-140,600,110,40,col,8);vol(()=>X.roundRect(-300,-140,600,110,40),0,-90,300,60);ell(285,-100,14,18,'#fff6b0',5);
 [-180,180].forEach(wx=>{circ(wx,-20,52,'#222',8);circ(wx,-20,22,'#aaa',5)});if(tk){X.save();X.translate(-60,-165);X.rotate(-.12);X.scale(tk,tk);rr(-34,-40,68,80,6,'#fff6b8',5);rr(-34,-40,68,16,3,'#c0392b',0);X.restore()}X.restore()}
function street(t,off=0){sky('#7cc6f2','#fff1d6');glow(880,250,260,'255,232,160',.55);rays(880,250,t,'255,240,200',.1);clouds(t,230);
 hills(900,'#a9cfe0',t,3,40,3);
 for(let k=-3;k<9;k++){const bx=k*300-off*.6,h=420+rnd(k+20)*260,c=['#e9b98a','#c97b63','#d9c59a','#a8b8d8'][((k%4)+4)%4];rr(bx,1050-h,270,h+20,6,c,7);for(let r=0;r<4;r++)for(let q=0;q<3;q++)rr(bx+30+q*80,1050-h+40+r*95,50,60,6,(r+q+k)%3?'#bfe6ff':'#ffe9a8',4)}
 haze(800,1080,'255,245,230',.3);X.fillStyle='#c9ccd3';X.fillRect(-3000,1050,8000,90);X.fillStyle='#9aa0aa';X.fillRect(-3000,1130,8000,14);X.fillStyle='#6f7480';X.fillRect(-3000,1144,8000,2000);
 for(let i=-6;i<14;i++)rr(i*240-off,1640,130,14,4,'rgba(255,255,255,.7)',0)}
function shop(t){X.fillStyle='#f7d9c4';X.fillRect(-3000,-3000,8000,8000);for(let k=-10;k<30;k++){X.fillStyle=k%2?'#ffc9de':'#f7d9c4';X.fillRect(k*80,-3000,40,3760)}
 rr(-100,560,1300,180,20,'#ff8cb8',8);txt('DONUTS',540,650,90,'#fff',12);glow(540,640,420,'255,180,210',.3);
 X.fillStyle='#c98f62';X.fillRect(-3000,1180,8000,3000);for(let k=-6;k<16;k++){X.fillStyle=k%2?'#b67d52':'#c98f62';X.fillRect(k*140,1180,140,2000)}
 rr(-60,980,1220,210,14,'#fff',8);for(let k=0;k<6;k++)donut(90+k*180,960,.9,0)}
function wallClock(x,y,s,txtT='1:50'){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,80,'#fff',8);for(let k=0;k<12;k++){const a=k*Math.PI/6;line([[Math.cos(a)*62,Math.sin(a)*62],[Math.cos(a)*70,Math.sin(a)*70]],5)}const m=txtT=='1:55'?55:50;
 line([[0,0],[Math.cos(-Math.PI/2+(1+m/60)*Math.PI/6)*36,Math.sin(-Math.PI/2+(1+m/60)*Math.PI/6)*36]],9);line([[0,0],[Math.cos(-Math.PI/2+m/60*2*Math.PI)*58,Math.sin(-Math.PI/2+m/60*2*Math.PI)*58]],6,'#c0392b');circ(0,0,8,O,0);X.restore()}
function bingo(t){X.fillStyle='#3a2a5a';X.fillRect(-3000,-3000,8000,8000);bokeh(t,'255,220,140',16,100,900);
 rr(140,430,800,180,24,'#ffcf3a',8);txt('B I N G O',540,520,96,'#c0392b',0);glow(540,520,460,'255,210,80',.35);
 for(let k=0;k<8;k++){const x=120+k*120,y=760+((k%2)*50);circ(x,y,40,['#e53935','#1e88e5','#43a047','#fdd835','#8e24aa'][k%5],6);txt(String(7+k*9),x,y,30,'#fff',6)}
 X.fillStyle='#7a4a2a';X.fillRect(-3000,1180,8000,3000);rr(-100,1150,1300,90,14,'#2e7d4f',8)}
function bcard(x,y,s,rot=0,win=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-110,-130,220,260,12,'#fff',6);for(let r=0;r<4;r++)for(let c=0;c<4;c++){rr(-92+c*46,-110+r*58,40,50,4,'#f2f2f2',3);if((r+c)%3==0||(win&&r==2))circ(-72+c*46,-85+r*58,16,'rgba(229,57,53,.75)',0)}X.restore()}

// 1 HOOK (h1) + his own car at the meter (s1): one street shot, camera pans right at s1
sh(0,(t,r)=>{const pan=eio(C((t-T('s1')+.1)/.9));cam(lerp(470,1120,pan),980,lerp(1.12,1.0,eo(C(r/2))),t,.4);street(t);
 car(330,1330,.95,'#e05a4a',C(sp(r-.55,14,.5)));
 gary(lerp(640,700,C(r/.5)),1350,.92,{t,eyes:r<2.6?'happy':'sleepy',mouth:r<2.6?'grin':'flat',armL:r>.3&&r<1.1?-150:null,walk:t>T('s1')+1.4?t:null,armR:r<1?-40:null});
 cruiser(1260,1330,.88,{t});pmeter(1560,1340,.9,{t,l1:'PAID UNTIL',l2:'2:00 PM'});
 if(r<.08)FL=.6;X.setTransform(1,0,0,1,0,0);if(t<T('s1')-.05){const n=Math.min(10000,9997+Math.floor(C((r-.4)/1.6)*3.99));tag(540,290,n.toLocaleString('en-US')+' TICKETS 🎫','#ffe14d',C((r-.2)/.25))}});
// 2 MOM texts Memopai (s1b): full chat, Mom small bottom-left
sh(T('s1b')-.1,(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#3a2252','#47295f',t*.3);
 phoneUI(540,lerp(1000,960,eo(C(r/1.5))),1.22,r,{typing:r>2.2&&r<2.8,list:[{a:.9,me:1,text:'Remind Gary at 1:55 PM: move the car! 🚗',time:'12:31'},{a:2.8,me:0,text:'Done ✅ I’ll remind Gary at 1:55 PM',time:'12:31'}]});
 toon(150,2000,.62,Object.assign({t,armR:-120,mouth:r>2.9?'grin':'smile'},MOM))});
// 3 DONUT LINE (s2, first half)
sh(T('s2')-.45,(t,r)=>{cam(lerp(500,560,r/2.6),980,lerp(1.05,1.12,r/2.6),t,.35);shop(t);wallClock(880,330,1,'1:50');
 for(let k=0;k<3;k++)toon(820+k*210,1420,.78,{t,shirt:['#6b8f5a','#a0563c','#4a6aa0'][k],hair:['messy','buzz','afro'][k],eyes:'sleepy',mouth:'flat',flip:1});
 gary(380,1430,.9,{t,eyes:'closed',mouth:'o',sweat:1,lightbulb:0});
 for(let k=0;k<3;k++){X.globalAlpha=.6;ell(395,1050+((t*80+k*30)%90),6,10,'#7fd1ff',3)}X.globalAlpha=1});
// 4 BRENDA waits at Gary's car (s2, second half)
sh(WT('s2',7)-.05,(t,r)=>{cam(lerp(560,520,r/3.5),1000,lerp(1.15,1.05,eo(C(r/1.5))),t,.35);street(t,200);
 cruiser(380,1330,.88,{t});pmeter(720,1340,.9,{t,l1:'PAID UNTIL',l2:'2:00 PM'});
 toon(900,1360,.9,Object.assign({t,flip:1,mouth:r>1.3?'creepy':'smile',armR:60,armL:60,holdR:(hx,hy)=>pad(hx+10,hy-40,.9,1),holdL:(hx,hy)=>{line([[hx,hy],[hx-10,hy-60]],8,'#2a2a2a')}},BRENDA));
 X.setTransform(1,0,0,1,0,0);if(r>.8)tag(540,290,'BRENDA · 12 YEARS WAITING ⏳','#ffe14d',C((r-.8)/.25))});
// 5 MOM AT BINGO, 1:55 (s4, first part)
sh(T('s4')-.1,(t,r)=>{cam(540,1030,lerp(1.15,1.24,r/2.6),t,.35);bingo(t);
 toon(540,1460,1.0,Object.assign({t,eyes:'wide',mouth:'o',armR:-70,armL:-70,holdR:(hx,hy)=>{rr(hx-8,hy-70,26,70,8,'#e53935',4)}},MOM));
 bcard(300,1180,.9,-.1);bcard(780,1180,.9,.12);rr(860,1260,150,110,20,'#a0522d',6);
 X.setTransform(1,0,0,1,0,0);tag(540,180,'1:55 PM · MOM IS BUSY','#ffe14d',C((r-.1)/.25))});
// 6 Gary's phone buzzes in the queue: Memopai notification (s4 'Memopai isn't.' + hold)
sh(WT('s4',5)-.05,(t,r)=>{cam(470,1010,lerp(1.5,1.6,r/2.2),t,.5);shop(t);
 const buzz=Math.sin(t*90)*4;gary(430,1430,.92,{t,eyes:r>.55?'wide':'closed',mouth:r>.55?'o':'flat',sweat:r>.55,armR:120,holdR:(hx,hy)=>{X.save();X.translate(hx+buzz+20,hy-30);X.rotate(-.15);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,'#25d366',0);X.restore()}});
 glow(560,950,140,'130,240,160',.35);
 X.setTransform(1,0,0,1,0,0);notif(170,C((r-.12)/.35),'Memopai','⏰ Gary! Move the car! 🚗 from Mom 👵')});
// 7 SPRINT + COIN at 0:01, Brenda's pen freezes; then Brenda fumes (g1 + 'Brenda's still waiting.')
sh(T('g1')-.05,(t,r)=>{const run=eo(C(r/.55));cam(lerp(380,560,run),1000,lerp(1.25,1.08,eo(C(r/.6))),t,.6);street(t,200+r*40);
 cruiser(300,1330,.88,{t});const paid=r>.75;
 pmeter(660,1340,.9,{t,l1:paid?'PAID UNTIL':'EXPIRES IN',l2:paid?'4:00 PM':'0:01',col:paid?'#7dffb0':'#ff5a4a',flash:!paid,coin:r>.35&&r<.8?(r-.35)/.4:null,shake:r>.72&&r<.95?6:0});
 const fume=r>1.3;toon(880,1360,.9,Object.assign({t,flip:1,eyes:fume?'angry':'wide',mouth:fume?'sad':'o',sweat:fume,armR:60,armL:60,holdR:(hx,hy)=>pad(hx+10,hy-40,.9,1),holdL:(hx,hy)=>{line([[hx,hy],[hx-10,hy-60]],8,'#2a2a2a')}},BRENDA));
 const gx=lerp(-150,500,run);gary(gx,1370,.9,{t,walk:r<.55?t*1.8:null,eyes:'crazy',mouth:'grin',armR:r>.3&&r<.9?-150:(r>1.3?-60:null),holdL:(hx,hy)=>{if(r>1.3)donut(hx+10,hy-30,.8,1)}});
 if(r<.55)speedlines(t,'rgba(255,255,255,.55)');if(r<.6)donut(gx+90,1370-420*.9+60,.55,0);
 if(r>.72&&r<1.0)SHK=10;X.setTransform(1,0,0,1,0,0);if(r>.72)impact(C((r-.72)/.4));if(fume)tag(540,290,'TICKETS FOR GARY: 0','#8ff07a',C((r-1.3)/.25))});
// 8 MOM WINS BINGO ('And Mom? Still undefeated.')
sh(WT('p1',3)-.05,(t,r)=>{cam(540,1020,lerp(1.25,1.15,eo(C(r/1.2))),t,.4);bingo(t);
 toon(540,1460,1.0,Object.assign({t,eyes:'happy',mouth:'grin',armR:-165,armL:-165,holdR:(hx,hy)=>bcard(hx,hy-90,.55,.2,1)},MOM));sparkles(540,800,C(r/1.0),12,380);confetti(r,50);
 X.setTransform(1,0,0,1,0,0);tag(540,180,'MOM: UNDEFEATED 🏆','#ffe14d',C((r-.2)/.25))});
// 9 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
// COVER-ONLY shot at t=1000 (never reached by render.js): claim cover with the Memopai notification visible (experiment: product-in-cover)
sh(1000,(t,r)=>{cam(560,1180,1.18,t,0);street(t,200);cruiser(330,1500,.95,{t});pmeter(640,1510,.95,{t,l1:'EXPIRES IN',l2:'0:01',col:'#ff5a4a'});
 toon(880,1530,.95,Object.assign({t,flip:1,mouth:'creepy',armR:60,armL:60,holdR:(hx,hy)=>pad(hx+10,hy-40,.9,1),holdL:(hx,hy)=>{line([[hx,hy],[hx-10,hy-60]],8,'#2a2a2a')}},BRENDA));
 gary(250,1600,1.0,{t,eyes:'wide',mouth:'o',sweat:1,armR:120,holdR:(hx,hy)=>{X.save();X.translate(hx+20,hy-30);X.rotate(-.15);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,'#25d366',0);X.restore()}});
 X.setTransform(1,0,0,1,0,0);notif(1560,1,'Memopai','⏰ Gary! Move the car! 🚗 from Mom 👵')});
