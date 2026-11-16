const YOU={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// tiny "screenshot" card (drifts out of your head)
function shotCard(x,y,s,rot,a,k){if(s<=0||a<=0)return;X.save();X.globalAlpha=a;X.translate(x,y);X.rotate(rot);X.scale(s,s);
 const cs=['#7cc4f0','#ffd23f','#f28a8a','#9be0a8','#c9a6f0','#f2b36a'];rr(-40,-70,80,140,12,'#fff',5);rr(-30,-58,60,24,5,cs[k%6],0);
 for(let i=0;i<4;i++)rr(-30,-24+i*20,i%2?40:60,10,4,'#c9ced6',0);X.restore()}
// camera roll: a phone full of screenshots, scrolling, with a counter
function camroll(x,y,s,t,r,n){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#fafafa',0);
 X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 const off=(1-eo(C(r/1.4)))*-2600;const cs=['#7cc4f0','#ffd23f','#f28a8a','#9be0a8','#c9a6f0','#f2b36a','#8fd6d0','#e8e8e8'];
 for(let row=-2;row<40;row++)for(let c=0;c<4;c++){const yy=-470+row*196+off;if(yy<-700||yy>700)continue;const xx=-292+c*147,k=row*4+c;
  X.fillStyle='#fff';X.fillRect(xx,yy,143,192);X.fillStyle=cs[(k*7)%8];X.fillRect(xx+10,yy+10,123,40);X.fillStyle='#d6dae0';for(let i=0;i<5;i++)X.fillRect(xx+10,yy+62+i*24,i%2?80:118,12);
  X.fillStyle='rgba(0,0,0,.08)';X.fillRect(xx,yy+190,143,2)}
 X.fillStyle='rgba(250,250,250,.97)';X.fillRect(-300,-640,600,170);X.font="800 46px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText('Screenshots',-250,-520);
 X.font="600 30px Inter";X.fillStyle='#0a84ff';X.textAlign='right';X.fillText('Select',250,-520);
 X.restore();
 if(n){const p=C((r-.5)/.35);if(p>0){X.save();X.translate(0,-360);X.scale(lerp(.5,1,eo(p)),lerp(.5,1,eo(p)));X.globalAlpha=C(p*2);X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=30;rr(-290,-70,580,140,70,'#e0533d',0);X.shadowColor='transparent';txt(n,0,4,54,'#fff',0);X.restore()}}
 X.restore()}
// the parcel locker: an object character with a face on its screen
function locker(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.25;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,300,34,0,0,7);X.fill();X.globalAlpha=1;
 rr(-260,-1000,520,1000,26,'#f2c230',9);rr(-245,-985,490,60,16,'#e0a91c',0);txt('📦 PARCELS',0,-955,40,'#5a3f00',0,'900 ');
 for(let c=0;c<2;c++)for(let rI=0;rI<5;rI++){const bx=c?40:-230,by=-905+rI*175;if(c===1&&rI===1){continue}
  const open=o.open&&c===1&&rI===3;rr(bx,by,190,160,10,open?'#3a2e1a':'#ffd75a',6);if(!open){rr(bx+150,by+66,18,30,6,'#9a7a1a',0)}
  else{const k=C(o.open);X.save();X.translate(bx,by);X.transform(1,0,-.0,1,0,0);rr(190,0,lerp(190,46,k),160,10,'#ffd75a',6);X.restore();if(o.box)shoebox(bx+95,by+150,.8)}}
 // screen with a face
 const sx=40,sy=-730;rr(sx,sy,190,160,14,'#1f2a38',6);X.save();X.beginPath();X.roundRect(sx+10,sy+10,170,140,10);X.clip();X.fillStyle=o.mood==='happy'?'#2a7d4f':'#2b4a7a';X.fillRect(sx,sy,190,160);
 const cx=sx+95,cy=sy+70,bl=(t%3.1)<.12;
 if(o.mood==='happy'){X.strokeStyle='#bfffd8';X.lineWidth=8;X.lineCap='round';X.beginPath();X.arc(cx-40,cy-5,16,Math.PI*1.1,Math.PI*1.9);X.stroke();X.beginPath();X.arc(cx+40,cy-5,16,Math.PI*1.1,Math.PI*1.9);X.stroke()}
 else{X.fillStyle='#bfe3ff';if(bl){X.fillRect(cx-55,cy-8,30,6);X.fillRect(cx+25,cy-8,30,6)}else{X.beginPath();X.ellipse(cx-40,cy-8,14,18,0,0,7);X.fill();X.beginPath();X.ellipse(cx+40,cy-8,14,18,0,0,7);X.fill()}
  X.strokeStyle='#bfe3ff';X.lineWidth=6;X.beginPath();X.moveTo(cx-60,cy-40);X.lineTo(cx-25,cy-32);X.moveTo(cx+60,cy-40);X.lineTo(cx+25,cy-32);X.stroke()}
 const mo=o.talk?Math.abs(Math.sin(o.talk*14))*16:0;X.fillStyle=o.mood==='happy'?'#bfffd8':'#bfe3ff';X.beginPath();
 if(o.mood==='happy'){X.arc(cx,cy+30,26+mo*.3,0,Math.PI);X.fill()}else{X.ellipse(cx,cy+38,22,4+mo,0,0,7);X.fill()}
 X.restore();
 // little arms (shrug or cheer)
 const up=o.cheer?1:0,sh=o.shrug?C(o.shrug):0;X.lineCap='round';X.strokeStyle='#151515';X.lineWidth=12;
 const arm=(sd)=>{const bx=sd*262,by=-560;const ex=bx+sd*(up?90:lerp(60,110,sh)),ey=by+(up?-170:lerp(80,-40,sh));X.beginPath();X.moveTo(bx,by);X.lineTo(ex,ey);X.stroke();X.fillStyle='#151515';X.beginPath();X.ellipse(ex,ey,22,20,0,0,7);X.fill()};arm(-1);arm(1);
 X.restore()}
function shoebox(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-80,-80,160,80,8,'#e8743c',5);rr(-88,-96,176,26,6,'#f28a50',5);rr(-20,-96,40,26,0,'#fff',0);X.restore()}
function street(t,o={}){if(o.dusk){psky('#5b5fa8','#e89a7a','#ffc48a',1080)}else if(o.warm){psky('#ffb877','#ffd59a','#ffe7b8',1080);psun(820,860,100,t)}else{psky('#6f7f92','#9aabbb','#c3cfd8',1080);pclouds(t,260,'#8a97a6','#5f6c7c',6,2)}
 pblur(3,()=>{for(let k=0;k<5;k++){const bx=-60+k*250,bh=380+((k*137)%5)*60;X.fillStyle=o.warm||o.dusk?['#c98a6a','#b07a7a','#d1a070','#a8806a','#c4906a'][k]:['#8d97a6','#7c8796','#98a2b0','#87919f','#9aa4b1'][k];X.fillRect(bx,1080-bh,230,bh);
  X.fillStyle=o.dusk?'rgba(255,220,140,.8)':'rgba(255,255,255,.35)';for(let w=0;w<6;w++)X.fillRect(bx+30+(w%2)*100,1080-bh+40+Math.floor(w/2)*110,60,70)}});
 proad(t,o.warm||o.dusk?{road:0,hz:1080,grass:o.dusk?'#7f9a62':'#a6c46e'}:{wet:1,road:0,hz:1080})}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:0,frame:[300,520],plant:120,lamp:0,wall:'#e3d2bd',wall2:'#cdb79c'},o))}

// A: your camera roll
sh(0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a3550');g.addColorStop(1,'#151b2b');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,190,255',.25);
 camroll(540,1000,1.12,t,r,'4,812 screenshots');label3('Your camera roll 📸',C(r/.2),200)});
// B: Saturday 11:00 at the parcel locker: "Sorry! Your parcel went back to sender!"
sh(2.55,(t,r)=>{cam(560,1000,lerp(1.02,1.08,C(r/2.4)),t,.15);street(t);
 const lt=r-(T('l1')-2.55),talking=lt>0&&lt<1.6;
 locker(760,1770,.86,{t,talk:talking?t:0,shrug:C((lt-.1)/.3)});
 sm(280,1780,1.12,Object.assign({t,eyes:lt>.3?'wide':'open',brow:lt>.3?'up':'flat',mouth:lt>.3?'o':'smile',look:[.7,-.2],armR:lt>0?60:100,bendR:-40,holdR:(x,y)=>phoneH(x,y,.3,1)},YOU));
 prain(t,.35);label3(lt>.4?'The parcel locker 🤷':'You, Saturday 11:00 📦',C(r/.2))});
// C: close-up: the screenshot was there all along; screenshots drift out of your head; Memopai hops in
sh(T('f1'),(t,r)=>{cam(540,950,1.06,t,.15);street(t);
 const mp=C((r-(T('w1')-T('f1')-1.55))/.55);
 sm(420,1900,1.45,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[.3,.5],armR:120,bendR:-110,holdR:(x,y)=>{X.save();X.translate(x+40,y-80);X.rotate(.08);rr(-120,-210,240,400,30,'#1b1b1f',7);rr(-104,-192,208,364,18,'#fafafa',0);
   rr(-92,-176,184,64,12,'#f2c230',0);txt('📦 Parcel ready!',0,-144,26,'#3a2a00',0,'800 ');txt('Pick up by Wed',0,-70,28,'#111',0,'700 ');txt('Code 4471',0,-20,40,'#e0533d',0,'900 ');txt('Screenshot · Mon',0,120,22,'#888',0,'500 ');X.restore()}},YOU));
 for(let k=0;k<7;k++){const ph=((r*.45+k/7)%1);shotCard(420+Math.sin(k*2.3)*200+ph*(k%2?120:-120),640-ph*520,.9,Math.sin(k+t)*.4,(1-ph)*C(r/.4),k)}
 if(mp>0){memo(860,1500,1.0,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(860,1200,mp,8,180)}
 prain(t,.3);label3(mp>.5?'Memopai 👋':'Your brain 🫠',C(r/.2))});
// D: rewind to Monday: the pickup code comes in; the 📦 thought flies into the phone
sh(T('w1'),(t,r)=>{cam(540,1000,1.04,t,.2);sofaRoom(t);
 sm(400,1640,1.18,Object.assign({t,eyes:r>.9?'open':'wide',brow:'up',mouth:r>2.2?'open':'smile',talk:r>2.2?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,1)},YOU));
 psofa(500,1640,1.15);memo(830,1390,.95,{t,wave:1,glow:1});
 if(r>.55&&r<2.1)notif(150,C((r-.55)/.3),'📦 Parcel Locker','Ready! Pick up by Wed · Code 4471');
 const fl=C((r-2.2)/.9);if(fl>0&&fl<1){const px=lerp(300,520,eo(fl)),py=lerp(420,930,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'📦',.95-fl*.45)}else if(fl>=1)sparkles(520,930,C((r-3.1)/.5),8,120,'#7cf0a0');
 if(r>=2.1&&fl<=0)chip(300,420,'📦',.95);
 rewind(1-C(r/.5),t,'◀◀ MONDAY');
 if(r>2.1)label3('Memopai 😎',C((r-2.1)/.2))});
// E: WhatsApp chat with Memopai
sh(T('w2')+1.25,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.2&&r<1.6,list:[{a:.05,me:1,text:'Remind me Tue 18:00: parcel, code 4471 📦',time:'14:11'},{a:1.6,me:0,text:'✅ Tue 18:00 · Parcel 📦 code 4471',time:'14:11'}]})});
// F: Tuesday 18:00 walking home: ping → the locker pops open
sh(T('s4'),(t,r)=>{cam(540,1000,1.04,t,.15);const sw=T('l2')-T('s4')-.25;
 if(r<sw){street(t,{dusk:1});
  sm(460,1780,1.2,Object.assign({t,walk:r<.4?t:null,eyes:r>.4?'wide':'open',brow:'up',mouth:r>.4?'grin':'smile',look:[.5,-.3],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.2,r>.3)},YOU));
  notif(150,C((r-.3)/.3),'Memopai','Parcel 📦 code 4471')}
 else{const q=r-sw;street(t,{dusk:1});
  locker(720,1770,.86,{t,mood:'happy',cheer:1,talk:q>.25&&q<1.1?t:0,open:C((q-.05)/.3),box:1});
  sm(260,1780,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.7,-.1],armR:70,bendR:-30,armL:20,bendL:20},YOU));
  sparkles(800,1150,C(q/.8),10,220);label3('The parcel locker 🥳',C(q/.2))}});
// G: payoff: walking home in warm light, shoe box under your arm, camera roll still 4,812
sh(T('p1'),(t,r)=>{cam(540,1000,lerp(1.02,1.08,C(r/4)),t,.15);street(t,{warm:1});
 sm(470,1780,1.25,Object.assign({t,walk:t*.6,eyes:'happy',brow:'up',mouth:'smile',blush:1,look:[.3,-.2],armL:40,bendL:-60,holdL:(x,y)=>shoebox(x+10,y+40,1.05),armR:130,bendR:-130,holdR:(x,y)=>{X.save();X.translate(x+20,y-40);X.rotate(.1);rr(-60,-105,120,210,16,'#1b1b1f',5);rr(-50,-95,100,190,10,'#fafafa',0);for(let i=0;i<4;i++)for(let j=0;j<3;j++)rr(-46+j*32,-80+i*40,28,36,3,['#7cc4f0','#ffd23f','#f28a8a','#9be0a8'][(i+j)%4],0);rr(-46,80,92,22,10,'#e0533d',0);txt('4,812',0,91,16,'#fff',0,'800 ');X.restore()}},YOU));
 sparkles(560,900,C((r-.3)/1.5),10,300);label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: you staring at 4,812 screenshots
sh(1000,(t,r)=>{cam(540,1000,1.05,t,.1);sofaRoom(t,{night:1,lamp:900,wall:'#9d8f9e',wall2:'#837586'});glow(520,900,500,'150,200,255',.35);
 sm(420,1800,1.35,Object.assign({t,eyes:'wide',brow:'up',mouth:'o',sweat:1,look:[.6,-.1],armR:130,bendR:-140,holdR:(x,y)=>{X.save();X.translate(x+80,y-120);X.rotate(.1);camroll(0,0,.42,t,9,'4,812');X.restore()}},YOU))});
