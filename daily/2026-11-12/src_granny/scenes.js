// ===== GRANDMA (84) AUTOMATES HER GRANDSON with Memopai =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const GRAN={hair:'bun',hairc:'#e4e4ea',glasses:1,cardigan:1,shirt:'#8e5cb5',shirt2:'#a273c6',pants:'#5a4a6a',shoes:'#6b4a3a',eyes:'happy',mouth:'smile',hw:112,hh:104,nose:26,skin:'#f1c4a0'};
const GARY={hat:0,badge:0,shirt:'#e0703a',shirt2:'#ee8650',pants:'#3d4a66',eyes:'sleepy',mouth:'flat'};
function phoneH(hx,hy,rot=-.15,on=0,t=0,buzz=0){X.save();X.translate(hx+(buzz?Math.sin(t*90)*4:0),hy-30);X.rotate(rot);if(on)glow(0,0,120,'130,240,160',.35);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a4a66',0);X.restore()}
// Grandma's living room: floral wallpaper, window with afternoon light, framed photo of Gary, lamp, rug
function granRoom(t,cal){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#f3dccb');g.addColorStop(1,'#e8c6ae');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 for(let r=0;r<9;r++)for(let c=-2;c<10;c++){const x=c*150+(r%2)*75,y=r*150+60;X.globalAlpha=.35;for(let k=0;k<5;k++){const a=k*1.256;circ(x+Math.cos(a)*12,y+Math.sin(a)*12,9,'#d99a9a',0)}circ(x,y,6,'#e8c35a',0);X.globalAlpha=1}
 rr(-40,280,360,460,14,'#fff',10);const sg=X.createLinearGradient(0,290,0,730);sg.addColorStop(0,'#9fd4ff');sg.addColorStop(1,'#ffe3b5');X.fillStyle=sg;X.fillRect(-28,292,336,436);hills(728,'#a8cf8e',0,0,24,4);X.fillStyle='#fff';X.fillRect(135,280,10,460);
 glow(150,420,240,'255,230,170',.55);rays(150,420,t,'255,236,190',.1,7,1500);rr(-60,730,400,24,8,'#c9a27a',6);
 // curtain
 path(()=>{X.moveTo(-80,250);X.quadraticCurveTo(40,520,-40,780);X.lineTo(-90,780);X.closePath()},'#c25b6e',6);path(()=>{X.moveTo(360,250);X.quadraticCurveTo(250,520,330,780);X.lineTo(380,780);X.closePath()},'#c25b6e',6);rr(-100,236,500,26,10,'#8a5a3a',6);
 // framed photo of Gary on the wall (tiny toon portrait)
 rr(500,330,170,200,10,'#c9a050',8);rr(516,346,138,168,4,'#bfe0f5',0);X.save();X.beginPath();X.rect(516,346,138,168);X.clip();toon(585,700,.42,Object.assign({t:0,eyes:'happy',mouth:'grin',noshadow:1},{hair:'comb',shirt:'#e0703a',hw:122,hh:112,belly:1,unibrow:1}));X.restore();
 if(cal)wallcal(860,560,.78,cal);
 // floor + rug
 X.fillStyle='#a8774f';X.fillRect(-3000,1300,8000,2000);for(let k=-10;k<20;k++){X.fillStyle=k%2?'#9c6c46':'#a8774f';X.fillRect(k*160,1300,160,2000)}
 ell(540,1440,520,90,'#7b8fc4',0);ell(540,1440,450,70,null,5)}
// side table with an old corded phone
function sideTable(x,y,ring=0,t=0){gshadow(x,y+260,140,.2);rr(x-120,y,240,30,10,'#8a5530',7);rr(x-12,y+30,24,230,6,'#7a4a28',6);rr(x-80,y+250,160,20,8,'#7a4a28',6);
 const sh=ring?Math.sin(t*70)*5:0;X.save();X.translate(x+sh,y);rr(-70,-70,140,70,22,'#d84a4a',6);ell(0,-82,74,20,'#c03a3a',6);circ(0,-40,22,'#f4f4f4',4);X.restore()}
// Gary's flat: dusk window, TV glow
function garyRoom(t){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#5a5f8f');g.addColorStop(1,'#7a6e9a');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 rr(640,300,420,420,14,'#2a2d4a',10);const sg=X.createLinearGradient(0,310,0,710);sg.addColorStop(0,'#2d3270');sg.addColorStop(1,'#ff9e6b');X.fillStyle=sg;X.fillRect(652,312,396,396);
 for(let k=0;k<6;k++){const bx=660+k*66,h=90+rnd(k+2)*170;rr(bx,708-h,58,h,3,'#262a52',3);for(let r=0;r<Math.floor(h/40);r++){X.fillStyle=rnd(k*7+r)>.45?'#ffe39a':'#3a3f6a';X.fillRect(bx+14,708-h+12+r*40,12,18);X.fillRect(bx+34,708-h+12+r*40,12,18)}}
 bokeh(t,'255,200,150',6,330,700);X.fillStyle='#2a2d4a';X.fillRect(845,300,10,420);
 // pizza box + poster
 circ(330,470,96,'#fff',9);circ(330,470,80,'#fdf6e8',0);for(let k=0;k<12;k++){const a=k*Math.PI/6;line([[330+Math.cos(a)*66,470+Math.sin(a)*66],[330+Math.cos(a)*76,470+Math.sin(a)*76]],5,'#333')}line([[330,470],[330,410]],9,'#222');line([[330,470],[330,540]],6,'#e53935');circ(330,470,9,'#222',0);
 X.fillStyle='#4b4466';X.fillRect(-3000,1300,8000,2000);ell(540,1440,520,80,'#3e3858',0)}
function couch(x,y,front){if(!front){gshadow(x,y+20,380,.3);rr(x-340,y-300,680,220,50,'#3f8f7a',8);vol(()=>X.roundRect(x-340,y-300,680,220,50),x,y-200,340,110)}
 else{rr(x-360,y-120,720,130,36,'#357a68',8);rr(x-400,y-230,100,250,36,'#2f6e5d',8);rr(x+300,y-230,100,250,36,'#2f6e5d',8)}}
function tvGlow(t,a=.22){X.save();X.globalAlpha=a*(.8+.2*Math.sin(t*9)*Math.sin(t*3.3));X.fillStyle='#7fd6ff';X.fillRect(-3000,-3000,8000,8000);X.restore()}

// 1 HOOK: Grandma in her armchair, smug grin, phone in hand. Tag "84"
sh(0,(t,r)=>{if(r<.08)FL=.5;cam(lerp(560,540,r/3.5),lerp(1060,1020,r/3.5),lerp(1.12,1.2,r/3.5),t,.35);granRoom(t);
 armchair(540,1460,1.0);toon(540,1400,.95,Object.assign({t,eyes:r>1.6?'happy':'wide',mouth:'grin',armR:115,armL:-25,holdR:(hx,hy)=>phoneH(hx+12,hy,-.2,1,t)},GRAN));armchair(540,1460,1.0,{front:1});
 X.setTransform(1,0,0,1,0,0);tag(540,190,'84 YEARS OLD 👵','#ffe14d',C((r-.25)/.3))});
// 2 Six weeks: silent corded phone, calendar with 6 crossed Sundays. Then arms crossed: "refuses to nag"
sh(T('s1')-.05,(t,r)=>{const nag=t>=WT('s1',6)-.05;cam(lerp(600,640,r/3.4),1000,lerp(1.1,1.16,r/3.4),t,.3);granRoom(t,{marks:'x',p:C((t-T('s1'))/1.6),month:'SUNDAYS'});
 sideTable(250,1080);armchair(560,1460,.95);toon(560,1400,.92,Object.assign({t,eyes:nag?'closed':'sleepy',mouth:nag?'flat':'o',look:nag?0:-1,armL:nag?-100:-20,armR:nag?100:20,tilt:nag?4:-3},GRAN));armchair(560,1460,.95,{front:1});
 X.setTransform(1,0,0,1,0,0);if(!nag)stampBig('6 WEEKS','#e53935',-10,C((t-WT('s1',4))/.3),1180);
 else tag(540,190,'NO NAGGING 🙅‍♀️','#ffe14d',C((t-WT('s1',6))/.25))});
// 3 MEMOPAI: Grandma records a voice message, it plays (g1), Memopai confirms
sh(T('s2')-.05,(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#123a3a','#174a48',t*.3);
 const g1=T('g1'),g1e=E('g1');const pl=C((t-g1)/(g1e-g1));const z=lerp(1.2,1.3,eo(C(r/2)));const a0=g1-T('s2')-.2;
 phoneUI(540,lerp(1060,1000,eo(C(r/2))),z,r,{typing:t>g1e&&t<g1e+.12,list:[
  {a:a0,me:1,voice:1,pl:pl,dur:pl>0&&pl<1?'0:0'+Math.floor(pl*3.9):'0:03',time:'11:04'},
  {a:g1e-T('s2')+.12,me:0,text:'Done ✅ Every Sunday at 18:00 I’ll remind Gary: call Grandma 📞',time:'11:04'}]});
 X.setTransform(1,0,0,1,0,0);
 if(t<g1-.2&&r>.6){X.save();X.translate(540,1250);const k=C((r-.6)/.25);X.scale(k,k);rr(-300,-50,600,100,50,'#fff',6);circ(-250,0,16,Math.sin(t*12)>0?'#e53935':'#ff8a80',0);X.font="700 34px Inter";X.fillStyle='#333';X.textAlign='left';X.textBaseline='middle';X.fillText('0:0'+Math.min(3,Math.floor((r-.6)*1.2)),-215,0);for(let k2=0;k2<15;k2++){const hh=10+Math.abs(Math.sin(t*14+k2*1.3))*30;X.fillStyle='#00a884';X.fillRect(-120+k2*20,-hh/2,10,hh)}circ(245,0,44,'#00a884',0);txt('🎤',245,2,40,'#fff',0);X.restore()}
 toon(150,2010,.66,Object.assign({t,eyes:t>g1e+.6?'happy':'wide',mouth:t>g1e+.6?'grin':'o',armR:-125,holdR:(hx,hy)=>phoneH(hx+8,hy,-.1,1,t)},GRAN))});
// 4 Sunday 6 PM: Gary on the couch, TV glow, phone buzzes -> Memopai notification "From Grandma"
sh(T('s3')-.05,(t,r)=>{const bz=WT('s3',6)-.05;const on=t>=bz;cam(lerp(520,540,r/3),1040,lerp(1.1,1.18,r/3),t,.35);garyRoom(t);
 couch(540,1440);gary(540,1400,.95,Object.assign({t,eyes:on?'wide':'sleepy',mouth:on?'o':'flat',armR:on?100:30,armL:-30,tilt:on?0:-8,holdR:(hx,hy)=>{if(on)phoneH(hx+16,hy,-.3,1,t,t<bz+1.2)}},GARY));couch(540,1440,1);
 if(!on)phoneH(860,1330,1.5,0,t);tvGlow(t);
 X.setTransform(1,0,0,1,0,0);if(!on)tag(540,190,'SUNDAY · 18:00','#ffe14d',C((r-.15)/.25));else notif(170,C((t-bz)/.35),'Memopai','⏰ From Grandma: call Grandma ❤️')});
// 5 "From Grandma? Busted. He calls." close-up: reads, laughs, phone to ear
sh(T('s4')-.05,(t,r)=>{const busted=t>=WT('s4',2)-.05,call=t>=WT('s4',3)-.05;cam(540,1000,lerp(1.42,1.52,r/2),t,.45);garyRoom(t);couch(540,1440);
 gary(540,1400,.95,Object.assign({t,eyes:busted?'happy':'wide',mouth:busted?'grin':'o',armR:call?150:100,tilt:busted&&!call?Math.sin(t*22)*4:0,holdR:(hx,hy)=>phoneH(call?hx-6:hx+16,call?hy+10:hy,call?-1.2:-.3,1,t)},GARY));couch(540,1440,1);tvGlow(t,.14);
 if(busted&&!call)sparkles(540,880,C((t-WT('s4',2))/.6),8,220)});
// 6 Split: Gary calling / Grandma picks up on the FIRST RING
sh(T('g2')-.1,(t,r)=>{if(r<.08)FL=.35;split2(t,
 tt=>{garyRoom(tt);couch(540,1440);gary(540,1400,.92,Object.assign({t:tt,eyes:'happy',mouth:'smile',armR:150,holdR:(hx,hy)=>phoneH(hx-6,hy+10,-1.2,1,tt)},GARY));couch(540,1440,1)},
 tt=>{granRoom(tt);armchair(540,1460,.95);toon(540,1400,.92,Object.assign({t:tt,eyes:'happy',mouth:null,talk:tt<E('g2')?tt:null,armR:150,holdR:(hx,hy)=>phoneH(hx-6,hy+10,-1.2,1,tt)},GRAN));armchair(540,1460,.95,{front:1})},
 {camA:[560,1060,1.0],camB:[560,1060,1.0],p:r/.35,badge:'FIRST RING ☎️',bp:r-.25,badgeY:720})});
// 7 PAYOFF: Grandma with tea, smug; calendar now has a heart on every Sunday
sh(T('p1')-.05,(t,r)=>{cam(lerp(620,600,r/3.8),lerp(1000,1030,r/3.8),lerp(1.12,1.2,r/3.8),t,.3);granRoom(t,{marks:'heart',p:C(r/1.6),month:'SUNDAYS'});
 armchair(520,1460,.95);toon(520,1400,.92,Object.assign({t,eyes:t>WT('p1',6)?'closed':'happy',mouth:'grin',armR:70,armL:-20},GRAN));armchair(520,1460,.95,{front:1});
 sideTable(180,1080);teacup(180,1080-75,.75,{t});
 sparkles(860,560,C((r-.3)/1.2),10,260,'#ff9fb5')});
// 8 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r,{tag:'Remind anyone. Even Gary.'}));
// COVER-ONLY shot (t=1000): Grandma smug with phone + the notification on Gary's side of the split
sh(1000,(t,r)=>{split2(t,
 tt=>{granRoom(tt);armchair(540,1460,.95);toon(540,1400,.92,Object.assign({t:tt,eyes:'happy',mouth:'grin',armR:115,holdR:(hx,hy)=>phoneH(hx+12,hy,-.2,1,tt)},GRAN));armchair(540,1460,.95,{front:1})},
 tt=>{garyRoom(tt);couch(540,1440);gary(540,1400,.92,Object.assign({t:tt,eyes:'wide',mouth:'o',armR:100,holdR:(hx,hy)=>phoneH(hx+16,hy,-.3,1,tt)},GARY));couch(540,1440,1)},
 {camA:[560,1180,.95],camB:[560,1180,.95],p:1});
 X.setTransform(1,0,0,1,0,0);notif(1580,1,'Memopai','⏰ From Grandma: call Grandma ❤️')});
