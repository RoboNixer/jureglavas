// 2026-11-27 13:00 WHAT IS MEMOPAI — "What is Memopai? It's not an app." (EXPLAINER CARD look: look5ex.js; craft ladder: look5ex kit, exChatList prop, sm o.beanie)
const GUY={beanie:'#ff7a3d',tee:'#2f9e8f'};
const BGA={c1:'#24103c',c2:'#5b2a86',acc:'#ffb347'};
const ROWS=[{name:'Mum ❤️',msg:'Did you eat? 🍲',time:'12:41',av:'👵',col:'#ffe0e6'},{name:'Football lads ⚽',msg:'Who brings the ball?',time:'12:30',av:'⚽',badge:4},{name:'Work 💼',msg:'Report due Friday',time:'11:58',av:'💼'},
 {name:'Memopai',msg:'✅ Got it! I\'ll remind you',time:'11:02',av:'memo',pin:1},{name:'Dentist 🦷',msg:'See you on the 3rd',time:'Tue',av:'🦷'},{name:'Ana 🌻',msg:'haha yes!!',time:'Mon',av:'🌻'}];
// A: the question + WhatsApp chat list; the frame camera scrolls down and pushes in on the Memopai row; NOT AN APP slams in
sh(0,(t,r)=>{NOFX=1;exBg(t,BGA);
 exFrame(t,r,(t,r)=>{psky('#cfe8ff','#e9f4ff','#ffffff',1900);for(let k=0;k<6;k++){X.globalAlpha=.25;circ(200+k*160,300+Math.sin(t+k)*30,60,'#bfe0ff',0)}X.globalAlpha=1;
   exChatList(130,230,820,t,{rows:ROWS,hl:3,hlp:C((r-1.1)/.3)});
   if(r>1.2){const p=C((r-1.2)/.4);X.save();X.globalAlpha=p;X.strokeStyle='#25d366';X.lineWidth=12;X.beginPath();X.roundRect(140,222+200+3*150-8,800,150,24);X.stroke();X.restore()}},
  {x:120,y:450,w:840,h:850,cx:lerp(540,560,eo(r/3.5)),cy:lerp(560,880,eio(C(r/1.4))),z:lerp(.92,1.22,eio(C((r-.3)/1.6))),rot:lerp(-2,0,eo(r/1.5))});
 exTitle('What is Memopai? 🤔',r);
 if(r<2.6)exChip('💬 A WhatsApp contact',540,1240,r-1.2,{bg:'#25d366',col:'#06301a'});
 if(r>2.6)exWord('NOT AN APP',540,880,150,r-2.6,{col:'#ff5a5a',side:'#7a0f0f',rot:-6});
 exProgress(0,4);});
// B1: problem — driving at dusk (tracking side view, the thought pops above the car)
sh(T('b1')-.1,(t,r)=>{NOFX=1;exBg(t,{c1:'#2a0f2e',c2:'#8a3a3a',acc:'#ffb347'});
 exFrame(t,r,(t,r)=>{psky('#2b2a5e','#e2735a','#ffc58a',1150);psun(760,1010,70,t);
   hills(1080,'#7a4a6a',t,-90,80,1);hills(1130,'#5a3456',t,-180,60,3);
   for(let k=0;k<7;k++){const px=((k*260-t*520)%1820+1820)%1820-300;X.fillStyle='#3a2440';X.fillRect(px,960,14,240);rr(px-30,950,74,16,6,'#3a2440',0);glow(px+40,958,40,'255,220,150',.4)}
   X.fillStyle='#3b3550';X.fillRect(-500,1200,2200,260);for(let k=0;k<10;k++){const dx=((k*240-t*900)%2400+2400)%2400-500;X.fillStyle='#f3e6c8';X.fillRect(dx,1320,120,14)}
   X.fillStyle='#2a2540';X.fillRect(-500,1460,2200,600);
   pcar(540,1300,1.15,{t,spin:1,col:'#ffcf3d',col2:'#d9a514',bounce:1,driver:{eyes:'wide',brow:'up',mouth:'o'}});
   if(r>.8){const p=C((r-.8)/.3);X.save();X.translate(560,820);X.scale(eo(p),eo(p));rr(-230,-70,460,140,60,'#ffffff',8);path(()=>{X.moveTo(-40,64);X.lineTo(-90,140);X.lineTo(30,64)},'#fff',0);txt('📞 Call Grandma!',0,0,50,'#2a1446',0);X.restore()}},
  {x:120,y:450,w:840,h:850,cx:lerp(470,580,eio(r/2.8)),cy:lerp(1060,1000,eo(r/2.8)),z:lerp(.78,.9,eo(r/2.8))});
 exTitle('The problem 😩',r);
 if(r>.25&&r<1.6)exWord('WORST TIME',540,700,140,r-.25,{rot:-5});
 exChip('🚗 On the highway',540,1240,r-1.6,{bg:'#ffffff'});
 exProgress(0.5,4);});
// B2: in bed at 23:47 (crane down, the head pops up off the pillow)
sh(T('b1')+2.85,(t,r)=>{NOFX=1;exBg(t,{c1:'#0f1238',c2:'#3a2a7a',acc:'#9fb4ff'});
 exFrame(t,r,(t,r)=>{proom(t,{wall:'#2c3566',wall2:'#232a52',night:1,win:820,hz:1240});
   X.fillStyle='rgba(255,240,190,.18)';X.beginPath();X.moveTo(700,700);X.lineTo(940,700);X.lineTo(1000,1500);X.lineTo(560,1500);X.fill();
   nightstand3(230,1420,.9);txt('23:47',230,1120,52,'#ff5a5a',0,'800 ');glow(230,1120,90,'255,90,90',.25);
   hotelbed(560,1460,.72,{});
   const up=eo(C((r-.2)/.35));sm(560,1520-up*50,.55,Object.assign({},GUY,{t,eyes:'wide',brow:'up',mouth:'o',look:[0,-.3],lean:lerp(-55,0,up),armL:20,armR:150,bendR:60,noshadow:1}));
   hotelbed(560,1460,.72,{front:1});
   if(r>.6){const p=C((r-.6)/.3);X.save();X.translate(560,700);X.scale(eo(p),eo(p));rr(-300,-76,600,152,60,'#ffffff',8);txt('🧾 The bill was due today!',0,0,48,'#2a1446',0);X.restore()}},
  {x:120,y:450,w:840,h:850,cx:560,cy:lerp(980,1080,eio(r/1.6)),z:lerp(1.1,.95,eo(r/1.6))});
 exTitle('The problem 😩',5);
 exChip('🛏️ In bed · 23:47',540,1240,r-.25,{bg:'#ffffff'});
 exProgress(0.5,4);});
// C: Memopai revealed with radar rings, then the phone BREAKS OUT of the frame (frame-break): typed msg + voice note + ✅
sh(T('c1')-.1,(t,r)=>{NOFX=1;exBg(t,{c1:'#062a24',c2:'#0f6b55',acc:'#7dffc4'});
 const g=C((r-.85)/.45);
 exFrame(t,r,(t,r)=>{if(g<1){const q=g;X.fillStyle='#0b3d33';X.fillRect(-500,-500,2200,3000);exRadar(540,980,t,C(r/.5));glow(540,980,420,'120,255,190',.35);
    memo(540,1240,1.05*(1+.1*q),{t,hop:C(r/.6),wave:1,glow:1});}
   if(g>0){X.save();X.globalAlpha=C(g*1.6);phoneUI(540,960,lerp(.7,1.0,eio(g)),r,{list:[{a:-1,date:'TODAY'},{a:1.25,me:1,text:'Remind me Friday at 5 to call Grandma 📞',time:'13:02'},{a:2.0,me:1,voice:1,pl:C((r-2.05)/.9),dur:'0:04',time:'13:03'},{a:3.0,me:0,text:'✅ Got it! Friday 17:00 ⏰ Call Grandma 📞',time:'13:03'}],typing:r>2.6&&r<3.0});X.restore()}},
  {x:120,y:450,w:840,h:850,grow:g,cx:540,cy:lerp(1000,960,g),z:lerp(1.0,1.0,g)});
 if(g<.4){exTitle('Step 1 · Tell it 💬',r);if(r>.3)exWord('MEMOPAI',540,1000,150,r-.3,{col:'#7dffc4',side:'#0b4a36',rot:-4});}
 if(g<.3)exProgress(1,4);});
// D: Friday 17:00 — walking home at golden hour (tracking pan), the reminder lands, he makes the call
sh(T('d1')+.3,(t,r)=>{NOFX=1;exBg(t,{c1:'#3a1406',c2:'#c2601f',acc:'#ffe08a'});
 const sg=1-C(r/.4),walk=r<1.2,wx=lerp(380,620,C(r/1.2));
 exFrame(t,r,(t,r)=>{psky('#ffcf7a','#ffe7b5','#fff3dd',1180);psun(860,820,60,t);
   for(let k=0;k<6;k++){const bx=k*230-60,bh=360+((k*137)%5)*60;rr(bx,1200-bh,200,bh,10,['#d98d63','#c97a58','#e3a77a'][k%3],0);for(let j=0;j<3;j++)for(let i=0;i<2;i++)rr(bx+30+i*90,1200-bh+40+j*110,60,70,6,(k+j+i)%3?'#ffe9b8':'#8a5a48',0)}
   X.fillStyle='#bfa48c';X.fillRect(-500,1200,2200,400);X.fillStyle='#a88d76';for(let k=0;k<12;k++)X.fillRect(k*160-200,1200,6,400);
   const bxp=((r*120)%600);sm(120-bxp+600>900?120-bxp:120-bxp+600,1440,.32,{t:t+2,walk:t*1.1,hair:'bun',hairc:'#5a3a22',lashes:1,col:'#ffffff',noshadow:0});
   sm(wx,1480,.62,Object.assign({},GUY,{t,walk:walk?t:null,eyes:r>1.3?'happy':'open',mouth:r>1.3?'grin':(r>.6?'o':'smile'),brow:r>.6&&r<1.3?'up':null,look:r>.6&&r<1.3?[.2,.4]:[0,0],
     armR:r>1.25?150:(r>.6?60:8),bendR:r>1.25?150:(r>.6?80:0),holdR:(hx,hy)=>{rr(hx-24,hy-46,48,92,10,'#1b1b1f',5);if(r>.5&&r<1.3)glow(hx,hy,70,'120,255,190',.6)}}));
   if(r>1.4){X.save();X.globalAlpha=C((r-1.4)/.3);txt('Hi Grandma! 📞',wx+10,820,46,'#2a1446',10,'900 ');X.restore()}},
  {x:120,y:450,w:840,h:850,grow:sg,cx:lerp(470,620,C(r/1.3)),cy:lerp(1050,1080,eo(r/2)),z:lerp(1.05,1.15,eo(r/2.2))});
 if(sg<.2){exTitle('Step 2 · It pings you ⏰',r);exProgress(2,4);}
 if(r>1.6)exChip('📍 Friday · 17:00',540,1240,r-1.6,{bg:'#ffffff'});
 notif(338,C((r-.45)/.3)*(1-C((r-1.5)/.3)),'Memopai','⏰ Friday 17:00 · Call Grandma 📞');});
// E: remind someone else — Mum's living room, the invite card, she taps Accept once
sh(T('e1')-.1,(t,r)=>{NOFX=1;exBg(t,{c1:'#3d0f2c',c2:'#a83a6e',acc:'#ffd0e6'});
 exFrame(t,r,(t,r)=>{proom(t,{wall:'#f6dfe8',wall2:'#ecc6d6',lamp:220,plant:900,frame:[560,640],hz:1240});
   armchair(560,1480,1.05,{col:'#7a5cc2',col2:'#5e44a0',front:0});
   sm(560,1440,.6,{t,hair:'bun',hairc:'#c9ccd6',lashes:1,jumper:'#e07a3d',eyes:r>1.75?'happy':'open',mouth:r>1.75?'grin':'smile',look:[.3,.5],armR:70,bendR:90,armL:40,bendL:70,holdR:(hx,hy)=>{rr(hx-26,hy-50,52,96,10,'#1b1b1f',5)}});
   armchair(560,1480,1.05,{col:'#7a5cc2',col2:'#5e44a0',front:1});
   specs(560,1440-845*.6,.6);},
  {x:120,y:450,w:840,h:850,cx:lerp(600,560,eo(r/2.8)),cy:lerp(1180,1100,eo(r/2.8)),z:lerp(1.25,1.05,eo(r/2.8))});
 exTitle('Bonus · Remind others 👵',r);
 // the invite card (screen space, inside the frame)
 if(r>.5){const p=C((r-.5)/.3),y=lerp(1300,1100,eo(p));X.save();X.globalAlpha=C(p*2);X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=24;rr(220,y-150,640,300,36,'#ffffff',0);X.restore();
  X.save();X.globalAlpha=C(p*2);avatar(300,y-80,44,0);X.font="800 38px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText('Memopai',364,y-98);X.font="500 30px Inter,'Noto Color Emoji'";X.fillStyle='#555';X.fillText('Reminders for you, from your kid 💛',264,y-12);
  const tp=r>1.7?1:0,bs=r>1.6&&r<1.8?.92:1;X.save();X.translate(540,y+82);X.scale(bs,bs);rr(-200,-44,400,88,44,tp?'#128c4a':'#25d366',0);txt(tp?'Accepted ✓':'Accept',0,2,42,'#fff',0,'900 ');X.restore();
  if(r>1.1){const fp=C((r-1.1)/.5);ffinger(lerp(780,600,eo(fp)),lerp(y+330,y+120,eo(fp)),1,-.4)}X.restore()}
 exProgress(3,4);});
// F: payoff — Think it. Text it. Forget it. (calm sofa, Memo beside you, word art stacks)
sh(T('f1')-.1,(t,r)=>{NOFX=1;exBg(t,{c1:'#24103c',c2:'#7a3cb0',acc:'#ffb347'});
 exFrame(t,r,(t,r)=>{proom(t,{wall:'#ffe7c7',wall2:'#f5d2a8',lamp:880,plant:180,win:300,hz:1240});
   psofa(560,1470,1.15,'#3fa58f','#2f8a76');
   sm(450,1500,.6,Object.assign({},GUY,{t,eyes:'happy',mouth:'grin',armL:150+Math.sin(t*3)*8,bendL:20,armR:150-Math.sin(t*3)*8,bendR:20,tilt:Math.sin(t*2)*5}));
   memo(740,1480,.62,{t,wave:1,hop:C((r-.8)/.6)});},
  {x:120,y:450,w:840,h:850,cx:lerp(520,590,eio(r/2)),cy:lerp(1180,1120,eo(r/2)),z:lerp(1.18,1.05,eo(r/2))});
 exTitle("That's Memopai 😌",r);
 exWord('THINK IT.',540,620,110,r-.05,{rot:-5});exWord('TEXT IT.',540,760,110,r-.6,{col:'#7dffc4',side:'#0b4a36',rot:3});exWord('FORGET IT.',540,900,110,r-1.15,{col:'#ffffff',side:'#5a2a86',rot:-3});
 exProgress(4,4);});
// G: end card + CTA
sh(T('cta')-.12,(t,r)=>endcard(t,r));
// COVER (t=1000): chat list in the frame with the Memopai row lit, everything below y 850 (cover lines sit at y 440..800)
sh(1000,(t,r)=>{NOFX=1;exBg(3,BGA);
 exFrame(3,0,(t,r)=>{psky('#cfe8ff','#e9f4ff','#ffffff',1900);exChatList(130,230,820,3,{rows:ROWS,hl:3,hlp:1});X.strokeStyle='#25d366';X.lineWidth=12;X.beginPath();X.roundRect(140,222+200+3*150-8,800,150,24);X.stroke();},
  {x:150,y:880,w:780,h:640,cx:540,cy:900,z:1.0,rot:0});
 memo(860,1620,.55,{t:3,wave:1});});
