// ===== 800 KM: Lea reminds her dad every morning with Memopai =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const LEA={hair:'afro',shirt:'#2bb3a3',pants:'#34405e',shoes:'#f2f2f2',eyes:'wide',mouth:'smile',hw:108,hh:100,nose:26,skin:'#e9b48a'};
const DAD={hair:'bald',hairc:'#e0e0e0',mustache:1,glasses:1,shirt:'#c0703a',shirt2:'#cf8350',belly:1,cardigan:1,pants:'#4a4a5a',eyes:'sleepy',mouth:'smile',hw:122,hh:112,nose:32};
function phoneH(hx,hy,rot=-.15,on=0,t=0,buzz=0){X.save();X.translate(hx+(buzz?Math.sin(t*90)*4:0),hy-30);X.rotate(rot);if(on)glow(0,0,120,'130,240,160',.35);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a4a66',0);X.restore()}
function kitchen(t,warm=0){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#f7e1bd');g.addColorStop(1,'#efcf9f');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 // window with morning sky
 rr(150,330,420,420,16,'#ffffff',10);const sg=X.createLinearGradient(0,340,0,740);sg.addColorStop(0,'#8fd0ff');sg.addColorStop(1,'#ffe9b8');X.fillStyle=sg;X.fillRect(162,342,396,396);
 glow(470,430,160,'255,236,170',.7);circ(470,430,46,'#fff3b0',0);hills(700,'#9cc98a',0,0,30,2);X.fillStyle='#ffffff';X.fillRect(355,330,10,420);X.fillRect(150,535,420,10);
 rr(130,740,460,26,8,'#d9a86a',6);rays(470,430,t,'255,240,200',.12,7,1400);
 // cabinets + shelf with mugs
 for(let k=0;k<3;k++){rr(680+k*170,300,160,260,10,'#9ac7b4',7);circ(760+k*170,520,9,'#e8c35a',4)}
 rr(660,700,560,22,6,'#b9824e',6);for(let k=0;k<4;k++){rr(700+k*120,632,62,68,10,['#ff8a80','#ffd54f','#81d4fa','#a5d6a7'][k],6)}
 X.fillStyle='#e7b98a';X.fillRect(-3000,1300,8000,2000);for(let k=-10;k<20;k++){X.fillStyle=k%2?'#dcae7e':'#e7b98a';X.fillRect(k*130,1300,130,2000)}
 if(warm)glow(540,700,700,'255,200,120',.18)}
function table(x,y,w=700){gshadow(x,y+320,w*.55,.2);rr(x-w/2,y,w,54,14,'#a8693a',8);vol(()=>X.roundRect(x-w/2,y,w,54,14),x,y+10,w/2,40);rr(x-w/2+40,y+54,36,300,8,'#8a5530',6);rr(x+w/2-76,y+54,36,300,8,'#8a5530',6)}
function flat(t,night=0){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,night?'#4a4f7a':'#c9d6ec');g.addColorStop(1,night?'#5d5f8c':'#e6ecf6');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 rr(160,280,760,560,14,'#ffffff',10);const sg=X.createLinearGradient(0,290,0,830);sg.addColorStop(0,night?'#1d2350':'#7cc6f2');sg.addColorStop(1,night?'#5b4a8a':'#fff1d6');X.fillStyle=sg;X.fillRect(172,292,736,536);
 for(let k=0;k<9;k++){const bx=180+k*82,h=160+rnd(k+3)*260;rr(bx,828-h,72,h,4,night?'#2c2f5a':'#9fb3cf',4);for(let r=0;r<Math.floor(h/60);r++)for(let q=0;q<2;q++){X.fillStyle=(night?(rnd(k*9+r*3+q)>.4):(r+q)%3==0)?'#ffe9a8':'rgba(255,255,255,.35)';X.fillRect(bx+12+q*30,828-h+16+r*60,18,26)}}
 if(night)bokeh(t,'255,220,160',8,320,780);X.fillStyle='#ffffff';X.fillRect(535,280,10,560);
 rr(140,836,800,26,8,'#e0e6f0',6);
 // plant
 rr(860,1080,110,120,14,'#c96b4a',7);for(let k=0;k<6;k++){X.save();X.translate(915,1085);X.rotate(-1.2+k*.48+Math.sin(t*1.3+k)*.04);ell(0,-90,26,80,'#4d9f5a',6);X.restore()}
 X.fillStyle=night?'#6a5a7a':'#c7b89a';X.fillRect(-3000,1300,8000,2000);if(night)glow(540,600,700,'255,190,120',.2)}
function sofa(x,y){rr(x-330,y-250,660,200,40,'#e0705a',8);vol(()=>X.roundRect(x-330,y-250,660,200,40),x,y-200,330,100);rr(x-380,y-120,760,140,40,'#d4604b',8);rr(x-400,y-200,90,230,30,'#c85543',8);rr(x+310,y-200,90,230,30,'#c85543',8)}
function trainBG(t){X.fillStyle='#cfd8e3';X.fillRect(-3000,-3000,8000,8000);
 for(let k=-2;k<4;k++){const wx=k*420+60;rr(wx,330,340,380,30,'#2c3e57',8);X.save();X.beginPath();X.roundRect(wx+8,338,324,364,24);X.clip();
  const sg=X.createLinearGradient(0,340,0,700);sg.addColorStop(0,'#8fd0ff');sg.addColorStop(1,'#ffe9b8');X.fillStyle=sg;X.fillRect(wx,330,340,380);
  for(let b=0;b<8;b++){const bx=((b*190-t*900)%1500+1500)%1500-300+wx-200,h=120+rnd(b)*180;X.fillStyle='#9fb3cf';X.fillRect(bx,700-h,120,h)}
  speedlines(t,'rgba(255,255,255,.35)');X.restore()}
 rr(-3000,250,8000,40,0,'#9aa7b8',0);for(let k=-3;k<6;k++){line([[k*300+150,250],[k*300+150,330]],6,'#7a8698');ell(k*300+150,350,22,26,null,7)}
 line([[100,200],[100,1500]],18,'#c9ced6');line([[980,200],[980,1500]],18,'#c9ced6');
 X.fillStyle='#8c97a8';X.fillRect(-3000,1300,8000,2000)}

// 1 HOOK: split screen, Lea in the city / Dad in his kitchen, 800 KM badge on the seam
sh(0,(t,r)=>{if(r<.08)FL=.5;split2(t,
 tt=>{flat(tt);toon(540,1420,.92,Object.assign({t:tt,armR:120,mouth:'smile',holdR:(hx,hy)=>phoneH(hx+10,hy,-.15,1,tt)},LEA))},
 tt=>{kitchen(tt);toon(560,1420,.92,Object.assign({t:tt,eyes:'sleepy',mouth:'smile',armL:-20},DAD));table(560,1220,620);pillbox(560,1222,.62,{full:7})},
 {camA:[560,1060,1.0],camB:[560,1060,1.0],p:r/.45,badge:'800 KM',bp:r-.35,badgeY:700})});
// 2 He forgot every day. Calls? Nagging. Alarms? Ignored.
sh(T('s1')-.05,(t,r)=>{const call=t>=WT('s1',4)-.1&&t<WT('s1',6)-.1,alarm=t>=WT('s1',6)-.1;cam(lerp(540,600,r/3),1030,lerp(1.08,1.16,r/3),t,.35);kitchen(t);
 toon(470,1440,1.0,Object.assign({t,eyes:alarm?'closed':(call?'wide':'sleepy'),mouth:alarm?'smile':(call?'o':'flat'),armR:call?135:(alarm?60:20),armL:call?null:-30,tilt:alarm?-6:0,
  holdR:(hx,hy)=>{if(call)phoneH(hx+30,hy,-.4,1,t,1)}},DAD));
 table(620,1240,700);pillbox(560,1242,.66,{full:7});clockman(860,1240,.36,{t,ring:alarm&&r%0.9<.6,face:alarm?'angry':'happy'});
 X.setTransform(1,0,0,1,0,0);if(call)bubbleTxt(700,360,'DAD! YOUR PILL!','#e53935',C(sp(t-WT('s1',4)+.1,16,.45)),84);
 if(alarm){X.globalAlpha=.9;txt('Zzz',300,800+Math.sin(t*3)*8,70,'#cfd6e2',10);X.globalAlpha=1}});
// 3 Lea texts Memopai (chat), Lea small bottom-left
sh(T('s2')-.05,(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#123a3a','#174a48',t*.3);
 phoneUI(540,lerp(1000,960,eo(C(r/1.4))),1.22,r,{typing:r>2.1&&r<2.7,list:[{a:.55,me:1,text:'Remind Dad every day at 8: take your pill 💊',time:'21:12'},{a:2.7,me:0,text:'Done ✅ Dad’s in! I’ll remind him every day at 8:00',time:'21:12'}]});
 toon(150,2000,.62,Object.assign({t,armR:-120,mouth:r>2.8?'grin':'smile'},LEA))});
// 4 8:00 AM split: Lea squeezed on a packed train / Dad at the table
sh(T('s3')-.05,(t,r)=>{if(r<.08)FL=.4;split2(t,
 tt=>{trainBG(tt);for(let k=0;k<2;k++)toon(250+k*620,1440,.95,{t:tt,shirt:['#6b8f5a','#8e5aa8'][k],hair:['buzz','messy'][k],eyes:'sleepy',mouth:'flat',flip:k,armR:-160});
  toon(560,1440,.95,Object.assign({t:tt,eyes:'wide',mouth:'o',sweat:1,armR:-165,armL:20,tilt:Math.sin(tt*6)*3},LEA))},
 tt=>{kitchen(tt);toon(560,1430,.92,Object.assign({t:tt,eyes:'sleepy',mouth:'flat',armL:-20},DAD));table(560,1220,620);pillbox(560,1222,.62,{full:7});phoneH(760,1215,1.45,0,tt)},
 {camA:[560,1060,1.0],camB:[560,1060,1.0],p:r/.4,badge:'8:00 AM',bp:r-.2,badgeY:700})});
// 5 Dad's phone buzzes: Memopai notification "From Lea" -> "A reminder from Lea!"
sh(WT('s3',8)-.05,(t,r)=>{const read=r>.9;cam(580,1040,lerp(1.36,1.46,r/3.6),t,.45);kitchen(t);table(800,1240,560);pillbox(800,1242,.66,{full:7});
 toon(450,1440,1.0,Object.assign({t,eyes:read?'wide':'sleepy',mouth:t>T('d1')?null:(read?'grin':'o'),talk:t>T('d1')?t:null,armR:read?112:70,holdR:(hx,hy)=>phoneH(hx+20,hy-10,-.5,1,t,r<1.6)},DAD));
 X.setTransform(1,0,0,1,0,0);notif(170,C((r-.1)/.35),'Memopai','⏰ From Lea: take your pill 💊')});
// 6 "Okay, okay, I'm taking it!": Monday lid flips open, pill out
sh(WT('d1',4)-.05,(t,r)=>{cam(620,1090,lerp(1.34,1.44,r/2.4),t,.4);kitchen(t,1);table(820,1250,560);pillbox(820,1252,.74,{full:[0,1,1,1,1,1,1],open:0,lidP:C(r/.4)});
 toon(450,1460,1.0,Object.assign({t,eyes:'happy',mouth:'grin',talk:t<E('d1')?t:null,armR:78},DAD));
 sparkles(620,1150,C((r-.3)/.9),8,140)});
// 7 PAYOFF split (callback to the hook): both on the phone, laughing, evening
sh(T('p1')-.05,(t,r)=>{split2(t,
 tt=>{flat(tt,1);sofa(540,1440);toon(540,1440,.9,Object.assign({t:tt,eyes:'happy',mouth:'grin',armR:140,holdR:(hx,hy)=>phoneH(hx+10,hy,-.4,1,tt)},LEA))},
 tt=>{kitchen(tt,1);toon(560,1430,.92,Object.assign({t:tt,eyes:'happy',mouth:'grin',armR:140,holdR:(hx,hy)=>phoneH(hx+10,hy,-.4,1,tt)},DAD));table(560,1230,620)},
 {camA:[560,1060,1.0],camB:[560,1060,1.0],p:1,badge:'JUST TALKING ❤',badgeCol:'#ff9fb5',bp:r-WT('p1',3)+T('p1'),badgeY:700});
 X.setTransform(1,0,0,1,0,0);sparkles(540,700,C((r-1.2)/1.2),12,300,'#ff9fb5')});
// 8 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r,{tag:'Remind the people you love'}));
// COVER-ONLY shot (t=1000): split screen + the Memopai notification on Dad's side
sh(1000,(t,r)=>{split2(t,
 tt=>{trainBG(tt);toon(560,1440,.95,Object.assign({t:tt,eyes:'happy',mouth:'grin',armR:120,holdR:(hx,hy)=>phoneH(hx+10,hy,-.15,1,tt)},LEA))},
 tt=>{kitchen(tt);toon(560,1430,.92,Object.assign({t:tt,eyes:'wide',mouth:'grin',armR:140,holdR:(hx,hy)=>phoneH(hx+10,hy,-.3,1,tt)},DAD));table(560,1220,620);pillbox(560,1222,.62,{full:7})},
 {camA:[560,1180,.95],camB:[560,1180,.95],p:1});
 X.setTransform(1,0,0,1,0,0);notif(1580,1,'Memopai','⏰ From Lea: take your pill 💊')});
