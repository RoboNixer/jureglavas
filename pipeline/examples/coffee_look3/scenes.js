const YOU={hair:'curl'};
const HER={hair:'bun',hairc:'#e2508a',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// city street: sky, blurred townhouses, pavement. o.grey = overcast mood, o.rain
function street(t,o={}){const g=o.grey;
 psky(g?'#7d8a9c':'#6fb6f0',g?'#a7b2c0':'#bfe3ff',g?'#cfd5dc':'#fff1d6',1150);
 if(!g)psun(860,330,70,t);pclouds(t,260,g?'#dfe3e8':'#fff',g?'#a9b2bf':'#dbe6f3',5,3);
 pblur(3,()=>{const cols=g?['#9a8f88','#8c9aa3','#a39488','#8f97a0']:['#f2a07b','#f6d38b','#9cc9d9','#e8a0b0','#b9d48f'];
  for(let k=0;k<7;k++){const x=-120+k*190,h=380+rnd(k+2)*220,w=200;X.fillStyle=cols[k%cols.length];X.fillRect(x,1150-h,w,h);
   X.fillStyle=g?'#c9cfd6':'#fff6e0';for(let r=0;r<3;r++)for(let c=0;c<2;c++)X.fillRect(x+34+c*86,1150-h+50+r*110,50,70);
   X.fillStyle='rgba(0,0,0,.18)';X.fillRect(x,1150-h,w,16)}});
 const pg=X.createLinearGradient(0,1150,0,2000);pg.addColorStop(0,g?'#b9bcc0':'#e8dccb');pg.addColorStop(1,g?'#8f9398':'#cbb89f');X.fillStyle=pg;X.fillRect(-3000,1150,8000,3000);
 X.strokeStyle='rgba(80,60,40,.18)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*60,1150);X.lineTo(540+k*300,2000);X.stroke()}
 for(const y of[1220,1330,1490,1700]){X.beginPath();X.moveTo(-100,y);X.lineTo(1200,y);X.stroke()}
 if(g&&o.rain){prain(t,.4,70)}
 haze(1050,1250,g?'210,215,222':'255,240,215',.4)}
// coffee cup with steam
function cup(x,y,s=1,t=0,c='#ffffff'){X.save();X.translate(x,y);X.scale(s,s);ell(0,4,70,16,'#e9e2d8',5);path(()=>{X.moveTo(-50,-80);X.lineTo(50,-80);X.lineTo(38,0);X.lineTo(-38,0);X.closePath()},c,6);path(()=>{X.arc(56,-46,22,-1.6,1.6)},null,8,'#151515');ell(0,-80,50,12,'#7a4a2a',5);
 X.globalAlpha=.55;for(let k=0;k<2;k++){const ph=(t*.8+k*.5)%1;path(()=>{X.moveTo(-14+k*26,-100);for(let j=1;j<=5;j++)X.lineTo(-14+k*26+Math.sin(t*4+j+k)*10,-100-j*22)},null,6,'rgba(255,255,255,'+(1-ph)+')')}X.restore()}
// round cafe table seen from the front (draw after the characters so it sits in front of the legs)
function ctable(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(0,10,260,26,0,0,7);X.fill();X.globalAlpha=1;
 rr(-18,-460,36,450,10,'#3b2f2a',5);ell(0,-8,130,22,'#3b2f2a',5);ell(0,-470,330,46,'#e9cfa6',7);rr(-330,-470,660,30,12,'#cfae80',6);X.restore()}
// friend chat notification (pink letter avatar, not Memopai)
function notifF(y,p,title,body){if(p<=0)return;X.save();X.globalAlpha=C(p*2);X.translate(0,lerp(-260,0,eo(p)));rr(60,y,960,200,48,'rgba(250,250,252,.97)',6);
 circ(142,y+100,46,'#e2508a',0);txt('B',142,y+102,50,'#fff',0);
 X.font="800 38px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,215,y+66);X.font="500 28px Inter";X.fillStyle='#888';X.textAlign='right';X.fillText('now',985,y+66);
 X.textAlign='left';X.font="600 38px Inter";X.fillStyle='#222';X.fillText(body,215,y+126);X.restore()}
function cafe(t){proom(t,{win:760,frame:null,plant:150,lamp:0,wall:'#fbe3c4',wall2:'#f1c99a',floor:'#b98a62',floor2:'#94673f',curtain:'#5aa37a',curtain2:'#3f8a60'});glow(760,520,700,'255,225,160',.5)}

// A: 'Let's grab coffee soon!' — you wave, she hurries off
sh(0,(t,r)=>{cam(540,1000,lerp(1.06,1.12,C(r/2.3)),t,.15);street(t);
 sm(770,1760,1.12,Object.assign({t,flip:1,eyes:'happy',mouth:'grin',brow:'up',armL:155,bendL:-20+Math.sin(t*12+1)*16,tilt:-6,blush:1,legL:10,legR:-4},HER));
 sm(330,1760,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:'grin',talk:r>.05&&r<2.2?t:null,look:[.7,0],armR:160,bendR:-20+Math.sin(t*14)*16,lean:-3},YOU));
 label3('You, Tuesday 18:12 🤗',C(r/.25))});
// A2: 'since March. Four times.' — the smile freezes
sh(T('h1'),(t,r)=>{cam(470,880,lerp(1.25,1.33,C(r/2.4)),t,.12);street(t);
 sm(1000,1760,.8,Object.assign({t,walk:t,flip:1,eyes:'happy',mouth:'smile',armL:140,bendL:-20},HER));
 const fr=r>.9;
 sm(380,1760,1.25,Object.assign({t,eyes:'open',lid:fr?.25:0,brow:fr?'worried':'up',mouth:fr?'wavy':'grin',look:fr?[-.3,.1]:[.7,0],armR:fr?40:150,bendR:fr?10:-30,sweat:r>1.4,blink:0},YOU));
 label3('You, since March 🙃',C(r/.25))});
// B: 'Soon' never comes — she fades, sky goes grey
sh(T('s1'),(t,r)=>{const q=C(r/4.2);cam(540,1000,lerp(1.04,1.1,q),t,.15);street(t,{grey:1,rain:r>1.2});
 X.save();X.globalAlpha=lerp(1,.5,eo(C(r/3.6)));const fx=lerp(760,860,q),fs=lerp(1.0,.42,q);
 sm(fx,lerp(1760,1380,q),fs,Object.assign({t,walk:t,flip:1,eyes:'open',mouth:'flat',armL:10,armR:10},HER));X.restore();
 sm(330,1760,1.25,Object.assign({t,eyes:'open',lid:.4,brow:'sad',mouth:'frown',look:[.7,-.1],tilt:-8,armL:12,armR:12},YOU));
 label3('Your friendship 🫠',C(r/.25))});
// C: Memopai hops in, the ☕ thought leaves the head into the phone
sh(T('s1')+3.7,(t,r)=>{cam(540,1000,1.04,t,.2);street(t);
 const talk=r>1.6;
 sm(380,1760,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:40,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,r>1.3)},YOU));
 X.save();X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(830,1766,150,22,0,0,7);X.fill();X.restore();rr(720,1340,220,420,30,'#d9443a',8);rr(700,1300,260,70,30,'#c23a31',8);rr(770,1430,120,20,8,'#222',0);
 const mp=C((r-.1)/.6);if(mp>0){memo(830,1300,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(830,1000,mp,10,240)}
 const fl=C((r-1.7)/1.2);if(fl<1){const px=lerp(390,520,eo(fl)),py=lerp(560,1000,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'☕',.9-fl*.5)}else sparkles(520,1000,C((r-2.9)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.25))});
// D: the voice note in WhatsApp
sh(T('y1')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.1&&r<1.4,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/2.0),dur:'0:03',time:'18:13'},{a:1.4,me:0,text:'✅ Sat 10:00 · Text her about coffee ☕',time:'18:13'}]})});
// E: Saturday 10:00 — the reminder sits in your WhatsApp chat list, right above her chat; you tap across, she's in
function chatRow(y,name,msg,time,av,o={}){if(o.hl){X.fillStyle='rgba(0,168,132,'+(.18*o.hl)+')';X.fillRect(-298,y-70,596,140)}
 if(av=='memo')avatar(-220,y,46,0);else{circ(-220,y,46,{b:'#e2508a',m:'#6aa0e0',w:'#9b8ad8'}[av]||'#999',0);txt(name[0],-220,y+2,46,'#fff',0)}
 X.font="800 34px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(name,-150,y-22);
 X.font=(o.bold?"700 ":"500 ")+"28px Inter";X.fillStyle=o.bold?'#111':'#667781';X.fillText(msg,-150,y+22);
 X.font="500 24px Inter";X.fillStyle=o.badge?'#25d366':'#667781';X.textAlign='right';X.fillText(time,270,y-22);
 if(o.badge){circ(250,y+22,20,'#25d366',0);X.font="800 22px Inter";X.fillStyle='#fff';X.textAlign='center';X.fillText('1',250,y+23)}
 X.fillStyle='#e9edef';X.fillRect(-150,y+68,450,2)}
sh(T('s4'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#ffe2b8');g.addColorStop(1,'#f6b98a');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,800,'255,240,200',.4);
 const tap=r>1.4,yes=r>2.3;
 X.save();X.translate(540,1160);X.scale(1.1,1.1);X.translate(0,lerp(80,0,eo(C(r/.35))));
 rr(-320,-660,640,1320,92,'#1b1b1f',10);X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();X.fillStyle='#fff';X.fillRect(-300,-640,600,1300);
 X.fillStyle='#fff';X.fillRect(-300,-640,600,190);rr(-70,-618,140,40,20,'#000',0);X.font="600 26px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText('10:00',-240,-598);
 X.font="900 46px Inter";X.fillStyle='#008069';X.fillText('WhatsApp',-260,-500);
 const p1=C((r-.25)/.25);X.save();X.globalAlpha=p1;X.translate(0,lerp(-40,0,eo(p1)));chatRow(-370,'Memopai','⏰ Text her about coffee','10:00','memo',{badge:!tap,bold:!tap});X.restore();
 chatRow(-230,'Bestie',yes?'YES!! Finally. 10:30? ☕':(tap?'typing…':'haha see you soon!!'),yes?'10:01':'Tue','b',{hl:tap&&!yes?1:0,bold:yes,badge:yes});
 chatRow(-90,'Mum','Did you eat? 🙂','Fri','m');chatRow(50,'Work group','Ok see you Monday','Fri','w');
 X.restore();X.restore();
 if(tap&&!yes){const k=C((r-1.4)/.3);X.save();X.globalAlpha=.6*(1-k);circ(540,1160+(-230)*1.1,40+k*60,null,6);X.restore()}
 if(yes)sparkles(700,1160-230*1.1,C((r-2.3)/.6),10,200);
 label3('You, Saturday 10:00 ☕',C(r/.25))});
// F: the cafe, sorted
sh(T('p1'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/4)),t,.15);cafe(t);
 const lg=Math.sin(t*7)*4;
 sm(300,1760,1.18,Object.assign({t,eyes:r>.8?'happy':'open',brow:'up',mouth:'grin',blush:1,look:[.6,0],tilt:4+lg*.5,armR:70,bendR:60},YOU));
 sm(790,1760,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,tilt:-4-lg*.5,armL:70,bendL:60},HER,{flip:1}));
 ctable(545,1760,1.0);cup(470,1286,.9,t);cup(630,1286,.9,t+1,'#fbe3ea');
 sparkles(545,900,C((r-.3)/1.4),10,300);
 label3(r<1.6?'You, Saturday 10:30 ☕':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(470,900,1.2,t,.1);street(t);
 sm(800,1760,.85,Object.assign({t,flip:1,eyes:'happy',mouth:'smile',armL:140,bendL:-20},HER));
 sm(380,1760,1.25,Object.assign({t,eyes:'open',brow:'worried',mouth:'wavy',look:[.6,0],armR:150,bendR:-30,sweat:1,blink:0},YOU))});
