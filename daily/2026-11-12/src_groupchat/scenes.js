// ===== GROUP CHAT: you're the only one who remembers -> one message to Memopai reminds 3 friends -> tickets =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const YOU={hair:'messy',hairc:'#4a2f1e',shirt:'#2fa39a',shirt2:'#3cb8ae',pants:'#2e3a5a',shoes:'#333'};
const LUKA={hair:'buzz',hairc:'#2a1a12',shirt:'#e0703a',shirt2:'#ee8650',pants:'#3d4a66',hw:118,hh:108};
const ANA={hair:'pinkbun',hairc:'#7a3a1a',shirt:'#8e5cb5',shirt2:'#a273c6',pants:'#3a3a5a'};
const MARKO={hair:'afro',hairc:'#1e1410',shirt:'#3c7a4a',shirt2:'#4a9058',pants:'#4a4a4a',skin:'#b07850'};
function phoneH(hx,hy,rot=-.15,on=0,t=0,buzz=0){X.save();X.translate(hx+(buzz?Math.sin(t*90)*4:0),hy-30);X.rotate(rot);if(on)glow(0,0,120,'130,240,160',.35);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a4a66',0);X.restore()}
// YOUR living room: warm evening, window, concert poster with ticket, lamp
function yourRoom(t,clock){const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#f2d9b8');g.addColorStop(1,'#e6c39c');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.07)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 rr(-60,300,330,420,14,'#fff',10);const sg=X.createLinearGradient(0,310,0,710);sg.addColorStop(0,'#3a3f86');sg.addColorStop(1,'#ff9e6b');X.fillStyle=sg;X.fillRect(-48,312,306,396);hills(708,'#4a3f6a',t,2,40,3);X.fillStyle='#fff';X.fillRect(100,300,10,420);glow(105,500,300,'255,200,150',.35);
 // concert poster
 X.save();X.translate(820,520);X.rotate(.04);rr(-170,-240,340,480,10,'#1d1846',9);glow(0,-60,200,'255,80,140',.45);
 for(let k=0;k<7;k++){const a=-1.2+k*.4;line([[0,-40],[Math.cos(a-1.57)*260,-40+Math.sin(a-1.57)*260]],10,'rgba(255,220,120,.35)')}
 circ(0,-40,46,'#ffd23f',6);rr(-60,0,120,150,20,'#ff4f7b',6);txt('LIVE!',0,-170,64,'#ffd23f',9);txt('FRI 10:00',0,195,44,'#fff',8,'800 ');X.restore();
 if(clock){X.save();X.translate(560,560);circ(0,0,80,'#fff',8);line([[0,0],[0,-55]],8,'#222');line([[0,0],[0,-38]],10,'#222');txt('10:00',0,118,34,'#7a4a2a',0,'800 ');X.restore()}
 line([[1000,1250],[1000,640]],10,'#3a3a3a');path(()=>{X.moveTo(920,640);X.lineTo(1080,640);X.lineTo(1040,520);X.lineTo(960,520);X.closePath()},'#f2c46b',7);glow(1000,620,380,'255,200,120',.4);
 X.fillStyle='#a8774f';X.fillRect(-3000,1300,8000,2000);for(let k=-10;k<20;k++){X.fillStyle=k%2?'#9c6c46':'#a8774f';X.fillRect(k*160,1300,160,2000)}
 ell(540,1450,520,90,'#5d8fa8',0);haze(1150,1310,'60,30,10',.12)}
function couch(x,y,front,col){if(!front){gshadow(x,y+20,380,.3);rr(x-340,y-300,680,220,50,col||'#c25b6e',8);vol(()=>X.roundRect(x-340,y-300,680,220,50),x,y-200,340,110)}
 else{rr(x-360,y-120,720,130,36,col?'#2f6e5d':'#a84a5c',8);rr(x-400,y-230,100,250,36,col?'#2a6050':'#963f50',8);rr(x+300,y-230,100,250,36,col?'#2a6050':'#963f50',8)}}
// round group-chat avatar with a tiny toon head inside (clip trick)
function avBubble(x,y,R,o,p=1,zz=0,t=0){if(p<=0)return;X.save();X.translate(x,y);X.scale(eo(C(p)),eo(C(p)));circ(0,0,R+8,'#fff',7);X.save();X.beginPath();X.arc(0,0,R,0,7);X.clip();X.fillStyle='#bfe0f5';X.fillRect(-R,-R,2*R,2*R);toon(0,R*2.55,R/155,Object.assign({t,noshadow:1},o));X.restore();
 if(zz)txt('?',R*.8,-R*.8,R*.7,'#ff4f7b',8);X.restore()}
// Luka's room: dark, gaming monitor glow, beanbag
function lukaRoom(t){X.fillStyle='#2b2d4a';X.fillRect(-3000,-3000,8000,4400);for(let k=0;k<5;k++)rr(-100+k*260,200,200,120,10,'rgba(255,255,255,.04)',0);
 bokeh(t,'120,160,255',8,200,800);rr(560,560,460,300,16,'#111',8);const g=X.createLinearGradient(0,570,0,850);g.addColorStop(0,'#3ad0ff');g.addColorStop(1,'#a04bff');X.fillStyle=g;X.fillRect(575,575,430,270);
 for(let k=0;k<5;k++)circ(640+k*80,700+Math.sin(t*6+k)*40,18,'#ffe14d',0);glow(790,710,420,'120,160,255',.5);rr(760,860,60,120,6,'#222',0);rr(680,970,220,24,8,'#222',0);
 X.fillStyle='#3a3355';X.fillRect(-3000,1300,8000,2000);ell(420,1440,480,80,'#2e2848',0)}
function beanbag(x,y){gshadow(x,y+10,300,.35);path(()=>{X.moveTo(x-300,y);X.quadraticCurveTo(x-330,y-260,x-60,y-300);X.quadraticCurveTo(x+260,y-300,x+300,y);X.closePath()},'#e8a13a',8);vol(()=>{X.beginPath();X.ellipse(x,y-140,300,160,0,0,7)},x,y-140,300,160)}
function headset(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.beginPath();X.arc(0,-40,120,Math.PI*1.08,Math.PI*1.92);X.lineWidth=18;X.strokeStyle='#222';X.stroke();rr(-140,-40,40,80,14,'#e53935',5);rr(100,-40,40,80,14,'#e53935',5);X.restore()}
// mini Memopai notification card inside a panel
function miniNotif(x,y,p,body){if(p<=0)return;X.save();X.translate(x,y+lerp(-60,0,eo(C(p))));X.scale(.82,.82);X.globalAlpha=C(p*2.5);rr(-330,-62,660,124,30,'rgba(250,250,252,.97)',5);X.save();X.beginPath();X.roundRect(-305,-40,80,80,18);X.fillStyle='#25d366';X.fill();X.restore();avatar(-265,0,34,0);
 X.font="800 32px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText('Memopai',-205,-20);X.font="600 31px Inter,'Noto Color Emoji'";X.fillStyle='#222';X.fillText(body,-205,22);X.restore()}

// ===== SHOTS =====
// 1 HOOK: YOU on the couch with the phone; 3 group-chat avatars above all with '?'. At s1 the camera drifts to the poster
sh(0,(t,r)=>{if(r<.08)FL=.4;const s1=T('s1');const pan=eio(C((t-s1-.2)/1.2));cam(lerp(lerp(560,540,r/3),760,pan),lerp(1080,900,pan),lerp(lerp(1.12,1.2,r/3),1.25,pan),t,.35);yourRoom(t);
 couch(470,1450);toon(470,1400,1.0,Object.assign({t,eyes:t<s1?'wide':'sleepy',mouth:t<s1?'o':'flat',armR:115,armL:-25,tilt:t<s1?0:-6,holdR:(hx,hy)=>phoneH(hx+12,hy,-.2,1,t)},YOU));couch(470,1450,1);
 X.setTransform(1,0,0,1,0,0);
 if(t<s1){[[230,LUKA],[540,ANA],[850,MARKO]].forEach(([x,o],k)=>avBubble(x,600-k%2*30,105,Object.assign({eyes:'sleepy',mouth:'flat'},o),(r-.15-k*.12)/.25,1,t));
  tag(540,1180,'👆 THEY FORGET · 👇 YOU REMEMBER','#ffe14d',C((r-.7)/.25))}});
// 2 Luka gaming; his phone on the floor buzzes, counter REMINDED 1x..9x; then he looks up: "Wait... what tickets?"
sh(WT('s1',6)-.05,(t,r)=>{const g1=T('g1');const up=t>=g1-.1;const c0=WT('s1',6),c1=E('s1');const n=Math.max(1,Math.min(9,1+Math.floor((t-c0)/(c1-c0)*9)));
 cam(lerp(470,450,r/3),lerp(1100,1060,r/3),up?lerp(1.25,1.45,eo(C((t-g1+.1)/.3))):1.2,t,.35);lukaRoom(t);
 beanbag(420,1450);toon(420,1390,.98,Object.assign({t,eyes:up?'wide':'happy',mouth:up?null:'grin',talk:up&&t<E('g1')?t:null,armR:up?40:70,armL:up?-40:-70,tilt:up?6:-4,look:up?1:0},LUKA));
 const buzz=!up;phoneH(760,1420,1.45,1,t,buzz&&Math.sin(t*9)>0);
 X.setTransform(1,0,0,1,0,0);if(!up)tag(540,300,`MONDAY · REMINDED ${n}×`,'#ffe14d',C((r-.05)/.2));else txt('?',780,700,200,'#ff4f7b',14)});
// 3 MEMOPAI CHAT: you type one message, Memopai confirms; at m1 'no app needed' badge
sh(T('s2')-.05,(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#123a3a','#174a48',t*.3);
 const sent=WT('s2',4),rep=WT('s2',11);const z=lerp(1.12,1.24,eo(C(r/1.5)));
 phoneUI(540,lerp(1100,1010,eo(C(r/1.2))),z,r,{typing:t>sent+.3&&t<rep,list:[
  {a:sent-T('s2'),me:1,text:'Remind Luka, Ana, Marko Fri 9:55: TICKETS at 10! 🎶',time:'21:12'},
  {a:rep-T('s2'),me:0,text:'Done ✅ Friday 9:55 I’ll remind all 3 in their WhatsApp 🎶',time:'21:12'}]});
 X.setTransform(1,0,0,1,0,0);
 if(t>=T('m1')-.05){X.save();X.translate(540,1745);const k=eo(C((t-T('m1')+.05)/.25));X.scale(k,k);rr(-330,-56,660,112,56,'#ffe14d',7);txt('✅ THEY NEED NO APP',0,2,50,'#151515',0);X.restore()}
 toon(130,2030,.62,Object.assign({t,eyes:t>rep+.3?'happy':'wide',mouth:t>rep+.3?'grin':'o',armR:-125,holdR:(hx,hy)=>phoneH(hx+8,hy,-.1,1,t)},YOU))});
// 4 FRIDAY 9:55: three columns, three friends, three phones buzz at once (staggered 0.15 s); bottom strip keeps captions clear
function colNotif(x,y,p){if(p<=0)return;X.save();X.translate(x,y+lerp(-50,0,eo(C(p))));X.globalAlpha=C(p*2.5);const k=lerp(1.25,1,eo(C(p)));X.scale(k,k);rr(-160,-95,320,190,34,'rgba(250,250,252,.97)',5);X.save();X.beginPath();X.roundRect(-140,-75,64,64,16);X.fillStyle='#25d366';X.fill();X.restore();avatar(-108,-43,28,0);
 txt('Memopai',-62,-43,30,'#111',0,'800 ','left');txt('⏰ TICKETS',0,10,36,'#222',0,'800 ');txt('at 10!',0,54,36,'#222',0,'800 ');X.restore()}
sh(T('s3')-.05,(t,r)=>{if(r<.08)FL=.35;const bz=WT('s3',3)-.05;const W=360,HH=1390;NOFX=0;
 const panels=[
  {o:LUKA,bg:tt=>lukaRoom(tt)},
  {o:ANA,bg:tt=>{const g=X.createLinearGradient(0,0,0,1300);g.addColorStop(0,'#bfe6ff');g.addColorStop(1,'#eaf7ff');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);hills(1000,'#9fd38f',tt,4,60,1);hills(1150,'#7fb86f',tt,8,40,4);rays(400,500,tt,'255,240,200',.12,7,1600);X.fillStyle='#c9b08a';X.fillRect(-3000,1300,8000,2000)}},
  {o:MARKO,bg:tt=>{X.fillStyle='#d9dde6';X.fillRect(-3000,-3000,8000,4400);for(let k=0;k<8;k++)rr(-200+k*200,300,150,700,6,'rgba(120,130,160,.18)',0);rr(-200,1000,900,40,8,'#8a6a4a',6);X.fillStyle='#7a8090';X.fillRect(-3000,1300,8000,2000)}}];
 X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,HH,0,1920);g.addColorStop(0,'#1b1f3a');g.addColorStop(1,'#0d1024');X.fillStyle=g;X.fillRect(0,HH,1080,1920-HH);
 panels.forEach((P,k)=>{const on=t>=bz+k*.15;X.save();X.setTransform(1,0,0,1,0,0);X.beginPath();X.rect(k*W,0,W,HH);X.clip();
  X.translate(k*W+W/2,lerp(800,780,r/3));X.scale(.7,.7);X.translate(-300,-1150);P.bg(t);
  toon(300,1400,1.0,Object.assign({t,eyes:on?'wide':(k==0?'happy':'sleepy'),mouth:on?'o':'flat',armR:on?100:30,armL:-30,holdR:(hx,hy)=>{if(on)phoneH(hx+16,hy,-.3,1,t,t<bz+1.2)}},P.o));
  X.restore();X.save();X.setTransform(1,0,0,1,0,0);colNotif(k*W+W/2,190,(t-bz-k*.15)/.3);X.restore()});
 X.setTransform(1,0,0,1,0,0);for(let k=1;k<3;k++){X.fillStyle='#151515';X.fillRect(k*W-6,0,12,HH)}X.fillRect(0,HH-6,1080,12);
 txt('FRI · 9:55 ⏰',540,1790,72,'#ffe14d',10);
 for(let k=0;k<3;k++)if(t>=bz+k*.15&&t<bz+k*.15+.06)FL=.25});
// 5 PAYOFF: 10:00, YOU feet up, eyes closed, smug; group chat ping "Luka: GOT 4 TICKETS!!!" + confetti + tickets
sh(T('p1')-.05,(t,r)=>{const got=WT('p1',2)-.05,you=WT('p1',7)-.05;cam(lerp(540,520,r/4),lerp(1040,1060,r/4),lerp(1.12,1.2,r/4),t,.3);yourRoom(t,1);
 couch(520,1450);toon(520,1400,1.0,Object.assign({t,eyes:t>=you?'closed':'happy',mouth:'grin',armR:150,armL:-150,tilt:t>=you?-8:0},YOU));couch(520,1450,1);
 if(t>=got){for(let k=0;k<4;k++)ticket(280+k*160,640-Math.abs(Math.sin(t*2+k))*30,.55,{rot:-.3+k*.2,p:(t-got-.2-k*.1)/.4,glow:'255,210,90',title:'LIVE!',sub:'FRI 10:00'})}
 X.setTransform(1,0,0,1,0,0);if(t>=got){notif(130,C((t-got)/.35),'Luka','GOT 4 TICKETS!!! 🎉🎉');confetti(C((t-got)/2.5),70)}});
// 6 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r,{tag:'Stop being the group’s alarm clock.'}));
// COVER-ONLY shot: YOU smug on couch, 3 friend avatars, Memopai notification
sh(1000,(t,r)=>{cam(540,1080,1.12,t,.3);yourRoom(t);couch(540,1450);toon(540,1400,1.0,Object.assign({t,eyes:'happy',mouth:'grin',armR:115,armL:-25,holdR:(hx,hy)=>phoneH(hx+12,hy,-.2,1,t)},YOU));couch(540,1450,1);
 X.setTransform(1,0,0,1,0,0);[[230,LUKA],[540,ANA],[850,MARKO]].forEach(([x,o],k)=>avBubble(x,1300-k%2*30,95,Object.assign({eyes:'wide',mouth:'o'},o),1,0,t));notif(1560,1,'Memopai','⏰ TICKETS at 10! 🎶 (all 3 reminded)')});
