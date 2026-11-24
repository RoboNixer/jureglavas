// 2026-11-24 12:00 PRODUCTIVITY — "'Mum! The elf didn't move!'"
// craft ladder (look3.js): elf3() generic felt toy Christmas elf (sit, cobweb, wink), wshelf3() floating wall shelf, fbowl3() fruit bowl (elf-in-the-bowl gag)
const YOU={hair:'curl'};
const HIM={hair:'spike',hairc:'#5a3a2a',pj:'#5a8fe8',limb:'#2f3a55'};
const KID={hair:'bun',hairc:'#7a4a2a',lashes:1,pj:'#e86a9a',limb:'#5a2a44'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function lroom(t,o={}){proom(t,{win:null,frame:[200,560],plant:0,lamp:0,wall:o.warm?'#f6e2c4':'#e6dccd',wall2:o.warm?'#e9c9a0':'#d2c4ae',floor:'#b98a5e',floor2:'#94673f'});
 strlights(t,250,4,70);
 xtree(150,1560,1.25,t);
 if(o.warm){glow(760,560,800,'255,226,160',.55)}else{glow(700,520,600,'220,230,255',.16);X.save();X.globalAlpha=.1;X.fillStyle='#3a4660';X.fillRect(-3000,-3000,8000,8000);X.restore()}}
const SHX=700,SHY=880;
// A: 07:00 living room: elf on the same shelf, cobweb from its hat; your kid in pyjamas points up: 'Mum! The elf didn't move!'; you (coffee) and your husband freeze and glance at each other
function shotA(t,r,lab,cv){if(cv)cam(540,700,1.0,t,0);else cam(540,1060,lerp(1.02,1.07,C(r/5)),t,.1);
 lroom(t);wshelf3(SHX,SHY,400,{t});elf3(SHX,SHY,1.25,{t,sit:1,web:1,look:[-.4,.5]});
 const yell=!cv&&r<1.5,glance=cv||r>1.9;
 sm(250,1800,1.02,Object.assign({t,eyes:'open',brow:'worried',mouth:glance?'wavy':'o',sweat:glance,look:glance?[.9,0]:[.6,-.6],tilt:glance?4:0,armL:20,bendL:10,armR:20,bendR:10},HIM));
 sm(430,1880,1.12,Object.assign({t,eyes:'open',lid:glance?.25:0,brow:'worried',mouth:glance?'wavy':'o',sweat:glance,look:glance?[-.9,0]:[.6,-.7],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#ffd23f'),armL:20,bendL:10},YOU));
 sm(730,1840,.82,Object.assign({t,eyes:'wide',brow:'up',mouth:yell?'open':'o',talk:yell?t:null,look:[-.2,-.8],tilt:-4,armR:150,bendR:5,armL:20,bendL:10},KID));
 if(lab)label3('You, 07:00 😬',C((r-.1)/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: you improvise, flapping your arms like wings ('tired... from flying'); your kid squints, arms crossed
sh(T('r1')-.25,(t,r)=>{cam(540,1020,lerp(1.04,1.1,C(r/2.6)),t,.1);lroom(t);
 const fl=r>.9?Math.sin(t*15):0;
 sm(390,1900,1.24,Object.assign({t,eyes:'open',brow:'up',mouth:r>.9?'grin':'wavy',sweat:1,look:[.7,0],tilt:fl*3,armL:110+fl*35,bendL:15,armR:110+fl*35,bendR:15},YOU));
 sm(770,1880,.9,Object.assign({t,eyes:'open',lid:.45,brow:'angry',mouth:'frown',look:[-.8,0],armL:60,bendL:-150,armR:60,bendR:-150},KID));
 label3('You, improvising 😅',C((r-.05)/.2))});
// C: that night on the sofa: Memopai hops onto the sofa arm; you text it; 🧝 flies into your phone
const C0=T('s2')-.3;
sh(C0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/3)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),typ=r>.4;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'smirk',look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,typ),armL:110,bendL:-100},YOU));
 const mp=C(r/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=1.1,fe=C((r-ft)/.9);if(r>ft-.35){if(fe<1){const px=lerp(250,600,eo(fe)),py=lerp(hy-430,hy+200,eo(fe))-Math.sin(fe*Math.PI)*60;emo(px,py,'🧝',C((r-ft+.35)/.3)*(1-fe*.4))}else sparkles(600,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C(r/.2))});
// D: the chat: message → daily confirmation → invite → he accepts
const D0=C0+2.6;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.5&&r<.8,list:[{a:0,me:1,text:'Every night at 22:00 remind my husband: move the elf 🧝',time:'21:12'},{a:.8,me:0,text:'✅ Got it! Daily 22:00 → your husband: 🧝 Move the elf! (until you say stop)',time:'21:12'},{a:1.5,date:'Invite sent to his WhatsApp · no app needed'},{a:2.1,date:'✓ He tapped Accept'}]})});
// E: 22:00: you asleep on the sofa under a blanket; HIS phone buzzes with Memopai; he grins, grabs the elf and tiptoes off
const E0=T('s3')+.15,NT=.1;
sh(E0,(t,r)=>{cam(540,1020,lerp(1.04,1.09,C(r/4)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#cdbfa8',wall2:'#b8a88e'});X.save();X.globalAlpha=.25;X.fillStyle='#1c2440';X.fillRect(-3000,-3000,8000,8000);X.restore();glow(220,800,500,'255,210,140',.3);wclock(560,640,.55,10,0);
 psofa(540,1700,1.15,'#5a7fb5','#4a6a9a');
 // you asleep, slumped left, blanket
 sm(330,1500+340*1.05+40,1.05,Object.assign({t,eyes:'closed',brow:'flat',mouth:'smile',tilt:-14,look:[0,0],armL:20,bendL:10,armR:20,bendR:10},YOU,SIT));
 path(()=>{X.moveTo(140,1470);X.quadraticCurveTo(330,1330,540,1470);X.lineTo(560,1780);X.lineTo(120,1780);X.closePath()},'#e86a5a',7);
 X.fillStyle='rgba(255,255,255,.18)';for(let k=0;k<4;k++)X.fillRect(160+k*95,1480,40,280);
 X.save();X.font="bold 58px sans-serif";X.fillStyle='rgba(255,255,255,'+(.5+.4*Math.sin(t*3))+')';X.fillText('z',360,1060-((t*30)%60));X.fillText('Z',400,1000-((t*30)%60));X.restore();
 const ping=r>NT,up=r>2.0;
 if(!up)sm(720,1500+340*1.0+40,1.0,Object.assign({t,eyes:ping?'wide':'open',brow:'up',mouth:ping?'grin':'smile',look:[0,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:40,bendL:-90},HIM,SIT));
 else{const tip=Math.abs(Math.sin(t*6))*18;sm(720,1840-tip,1.02,Object.assign({t,eyes:'open',lid:.3,brow:'smug',mouth:'smirk',look:[.4,0],armR:70,bendR:-60,holdR:(hx,hy)=>elf3(hx+30,hy+60,.72,{t,look:[-.5,0]}),armL:120,bendL:-150,walk:t},HIM))}
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-2.0)/.25)),'Memopai','🧝 Move the elf!');
 if(r>2.3)label3('Your husband, 22:00 🤫',C((r-2.3)/.2))});
// F: next morning, same framing as A, warm sun: the elf grins from the fruit bowl; your kid gasps with joy; you sip coffee, rested
sh(T('p1')-.45,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/5)),t,.1);
 lroom(t,{warm:1});wshelf3(SHX,SHY,400,{t});
 ctable(560,1680,1.0);fbowl3(560,1545,1.0,{t,elf:1,wink:r>2.5&&r<3.1});
 const joy=r>.6;
 sm(300,1880,1.12,Object.assign({t,eyes:r>1.8?'happy':'open',brow:'up',mouth:'smile',blush:r>1.8,look:[.7,.2],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU));
 sm(780,1860,.82,Object.assign({t,eyes:joy?'wide':'open',brow:'up',mouth:joy?'o':'smile',blush:joy,look:[-.6,.5],tilt:joy?Math.sin(t*5)*4:0,armL:joy?150:20,bendL:joy?-160:10,armR:joy?150:20,bendR:joy?-160:10},KID));
 sparkles(560,1300,C((r-.3)/1.2),10,220,'#fff7b0');
 label3('You, sorted 😌',C((r-.4)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.2,0,1));
