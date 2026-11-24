// 2026-11-24 22:00 FOLLOWERS — "POV: Christmas Eve. Where did you hide the present?"
// craft ladder (look3.js): thought3() cartoon thought cloud with clipped content, redcase3() small red suitcase with lid + gift inside
const YOU={hair:'curl'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function lroom(t,o={}){proom(t,{win:null,frame:[200,560],plant:0,lamp:0,wall:o.warm?'#f6e2c4':'#e6dccd',wall2:o.warm?'#e9c9a0':'#d2c4ae',floor:'#b98a5e',floor2:'#94673f'});
 strlights(t,250,4,70);xtree(170,1450,1.15,t);
 if(o.warm){glow(760,560,800,'255,226,160',.55)}else{glow(700,520,600,'220,230,255',.16);X.save();X.globalAlpha=.16;X.fillStyle='#2a3450';X.fillRect(-3000,-3000,8000,8000);X.restore()}}
// A: Dec 24, 23:10: tree with nothing under it, cupboard flung open, empty suitcase, you hurling socks and boxes out of the way
function shotA(t,r,lab,cv){if(cv)cam(540,760,1.0,t,0);else cam(540,1040,lerp(1.02,1.07,C(r/4)),t,.1);
 lroom(t);cupboard3(700,640,.95,{open:1});
 redcase3(790,1500,.8,{open:1});
 const th=Math.sin(t*9);
 sm(430,1860,1.14,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[.5,-.4],tilt:th*3,armL:120+th*30,bendL:-30,armR:130-th*30,bendR:30},YOU));
 const it=['🧦','📦','🧣','👕'];
 for(let k=0;k<4;k++){const ph=cv?(.35+k*.17):((t*.85+k*.25)%1),d=k%2?1:-1;const x=430+d*(120+ph*300)*(k<2?1:.8),y=1000-Math.sin(ph*Math.PI)*380+ph*120;if(x>170&&x<900)emo(x,y,it[k],.8,cv?1:Math.min(1,(1-ph)*4))}
 if(lab)label3('You, Dec 24, 23:10 😰',C((r-.1)/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close-up: 'Your brain' — the thought cloud shows the wrapped present... it fades into a big ❓
sh(T('r1')-.2,(t,r)=>{cam(540,1000,lerp(1.03,1.08,C(r/3)),t,.1);
 pblur(6,()=>lroom(t));X.save();X.globalAlpha=.25;X.fillStyle='#1c2440';X.fillRect(-3000,-3000,8000,8000);X.restore();
 const s=1.55,y=2330,hy=HD(y,s);
 sm(400,y,s,Object.assign({t,eyes:'open',lid:r>1.6?.2:0,brow:r>1.6?'worried':'up',mouth:r>1.6?'wavy':'smile',sweat:r>1.6,look:[.6,-.7],armL:20,bendL:10,armR:20,bendR:10},YOU));
 const g=C((r-1.1)/.5);
 thought3(650,720,190,C((r-.15)/.35),480,hy-150,(x,y)=>{if(g<1)gift(x,y+80,.85*(1-g*.3),{col:'#4a8fe0',rib:'#ffd23f',shake:0});X.save();X.globalAlpha=1;if(g>0){X.globalAlpha=C(g);X.font="170px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('❓',x,y+10)}X.restore();if(g>0&&g<1){X.save();X.globalAlpha=C(1-g);X.fillStyle='#fff';X.fillRect(-200,-200,400,400*g*.0);X.restore()}});
 label3('Your brain 🫠',C((r-.05)/.2))});
// C: November, daytime, hall cupboard: you tuck the present into the red suitcase, then voice-note Memopai; Memo hops in
const C0=T('s2')-.25;
function hallC(t,o={}){proom(t,{win:820,plant:180,lamp:0,frame:[230,520],wall:o.wall||'#e3ecdc',wall2:o.wall2||'#cbd9c2',floor:'#c49a6c',floor2:'#a07a50'});glow(820,600,700,'255,240,200',.35)}
sh(C0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/2.6)),t,.1);
 hallC(t);cupboard3(640,560,1.0,{open:1});
 const put=C((r-.3)/.6),inC=put>=1;
 redcase3(640,774,.62,{open:inC?C(1-(r-1.0)/.3):1,gift:1});
 const s=1.14,y=1880,hy=HD(y,s),talk=r>1.1;
 sm(420,y,s,Object.assign({t,eyes:'open',lid:talk?.25:0,brow:talk?'smug':'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:talk?[.2,.3]:[.6,-.8],
  armR:inC?110:lerp(150,165,put),bendR:inC?-115:-10,holdR:inC?(x,yy)=>phoneH(x+6,yy,.15,1):(x,yy)=>gift(lerp(x,600,put),lerp(yy+60,720,put),lerp(.55,.42,put)),armL:20,bendL:10},YOU));
 if(talk)emo(560,hy-40,'🎤',.62,C((r-1.1)/.2));
 const mp=C((r-.2)/.5);if(mp>0){memo(800,1560,.78,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1260,mp,8,180)}
 label3('You, in November 🤫',C(r/.2))});
// D: the chat: voice note → Memopai confirms when + where
const D0=C0+2.5;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.75&&r<1.0,list:[{a:.15,me:1,voice:1,pl:C((r-.2)/.6),dur:'0:05',time:'16:42'},{a:1.0,me:0,text:'✅ Got it! Dec 20, 09:00 → 🎁 The Lego is in the red suitcase, hall cupboard.',time:'16:42'}]})});
// E: Dec 20, 09:00: phone buzzes on the sofa with the note... then you at the cupboard, present held high
const E0=T('s3')-.1,NT=.15,SW=2.05;
sh(E0,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/3.6)),t,.1);
 if(r<SW){hallC(t,{wall:'#efe3d0',wall2:'#dccbb0'});wclock(560,640,.55,9,0);psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
  const ping=r>NT,s=1.12,y=1500+340*s+40;
  sm(470,y,s,Object.assign({t,eyes:ping?'wide':'open',brow:'up',mouth:ping?'o':'smile',look:[.3,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:40,bendL:-90},YOU,SIT));
  if(ping)notif(338,C((r-NT)/.3)*(1-C((r-SW+.25)/.2)),'Memopai','🎁 The Lego is in the red suitcase, hall cupboard');}
 else{const q=r-SW;hallC(t);cupboard3(640,560,1.0,{open:1});redcase3(640,774,.62,{open:1});
  const up=eo(C(q/.4));
  sm(420,1880,1.14,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.3,-.6],armR:lerp(120,165,up),bendR:-10,holdR:(x,yy)=>gift(x,yy+40,.55,{col:'#4a8fe0'}),armL:lerp(40,150,up),bendL:-20},YOU));
  sparkles(560,800,C(q/1.0),10,200,'#fff7b0');
  label3('You, Dec 20 😎',C((q-.1)/.2))}});
// F: Christmas Eve, same room as A, warm: present wrapped under the tree, 21:00 on the clock, feet up with a mug
sh(T('p1')-.35,(t,r)=>{cam(540,1040,lerp(1.03,1.07,C(r/4)),t,.1);
 lroom(t,{warm:1});wclock(700,700,.55,9,0);
 psofa(690,1700,1.0,'#5a7fb5','#4a6a9a');
 gift(300,1450,.72,{col:'#4a8fe0'});gift(190,1460,.5,{col:'#e86a5a',rib:'#fff'});
 const s=1.1,y=1500+340*s+40;
 sm(670,y,s,Object.assign({t,eyes:r>1.4?'happy':'open',lid:.25,brow:'flat',mouth:'smile',blush:r>1.4,look:[-.5,.2],tilt:-6,armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU,SIT));
 sparkles(330,1250,C((r-.2)/1.2),8,160,'#fff7b0');
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.0,0,1));
