// 2026-11-20 16:00 STORY — "Wait... Mom's birthday was TODAY?!" (your brother forgot; Mom asks YOU why you didn't remind him)
// craft ladder: partyHat() cone hat on any sm() head, callFrame() full-screen WhatsApp video-call chrome (name, timer, buttons, self-view),
// bubbleCall() round video-call bubble that clips any drawing (Mom inset). SIBLING remind-someone-else.
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const BRO={hair:'spike',hairc:'#3a6fd8',pj:'#ffb347',limb:'#3a4256'};
const MOM={hair:'bun',hairc:'#a3a8b2',lashes:1,pj:'#b96ad9',limb:'#5a3a6a'};
const HD=(y,s)=>y-767*s, HC=(y,s)=>y-845*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
// ---- craft ladder ----
// partyHat(x,y,s,rot,col): striped cone party hat whose brim centre sits at (x,y) (top of a head)
function partyHat(x,y,s=1,rot=-.12,col='#ff5a7a'){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);
 X.save();X.beginPath();X.moveTo(-95,0);X.lineTo(0,-230);X.lineTo(95,0);X.closePath();X.fillStyle=col;X.fill();X.clip();
 X.strokeStyle='#ffd23f';X.lineWidth=26;for(let k=-3;k<4;k++){X.beginPath();X.moveTo(-160,k*70+40);X.lineTo(160,k*70-60);X.stroke()}X.restore();
 X.beginPath();X.moveTo(-95,0);X.lineTo(0,-230);X.lineTo(95,0);X.closePath();X.strokeStyle='#151515';X.lineWidth=7;X.stroke();
 circ(0,-236,30,'#ffffff',6);X.restore()}
// callFrame(t,name,timer,o): WhatsApp video-call chrome in screen space (inside the safe box)
function callFrame(t,name,timer,o={}){X.save();X.setTransform(1,0,0,1,0,0);
 const g=X.createLinearGradient(0,1500,0,1920);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.45)');X.fillStyle=g;X.fillRect(0,1500,1080,420);
 if(o.top){X.font="800 46px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.shadowColor='rgba(0,0,0,.5)';X.shadowBlur=12;X.fillText(name,540,470);X.font="500 34px Inter";X.fillText(timer,540,520);X.shadowColor='transparent'}
 for(const[bx,c,ic]of[[330,'rgba(255,255,255,.28)','🎤'],[540,'#e5484d','📞'],[750,'rgba(255,255,255,.28)','📷']]){circ(bx,1500,62,c,0);X.font="56px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(ic,bx,1504)}
 X.restore()}
// bubbleCall(x,y,r,fn,ring): round video-call bubble; fn draws in a local 1080x1920 world scaled into the circle
function bubbleCall(x,y,R,fn,ring='#25d366'){X.save();X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=24;circ(x,y,R+10,ring,0);X.shadowColor='transparent';X.beginPath();X.arc(x,y,R,0,7);X.clip();X.translate(x-R,y-R);const k=(2*R)/1080;X.scale(k,k);X.translate(0,-420);fn();X.restore();X.beginPath();X.arc(x,y,R,0,7);X.strokeStyle='#151515';X.lineWidth=7;X.stroke()}
function broRoom(t,o={}){proom(t,{win:o.morning?760:0,night:o.morning?0:1,frame:[300,560],plant:1,lamp:o.morning?0:1,wall:o.morning?'#dff0e4':'#b9c6e6',wall2:o.morning?'#c6e2cf':'#9aa9d0',curtain:'#e0a24a',curtain2:'#c4862e'})}
function momKitchen(t,o={}){proom(t,{win:760,night:o.sun?0:1,frame:[260,560],plant:0,lamp:o.sun?0:1,wall:o.sun?'#ffe9d2':'#e2c9b4',wall2:o.sun?'#f7d3b0':'#c9ac94',curtain:'#7cc47c',curtain2:'#5aa45a'});bunting(t,330,55);if(o.sun)glow(820,560,700,'255,236,180',.5)}
function ktable(y){X.save();X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=26;rr(-60,y,1200,54,16,'#c98a56',7);X.shadowColor='transparent';X.fillStyle='#a46a3c';X.fillRect(-40,y+50,1160,400);X.strokeStyle='#151515';X.lineWidth=7;X.strokeRect(-40,y+50,1160,400);X.restore()}
function momShot(t,r,o={}){const y=1720,s=1.08;
 sm(470,y,s,Object.assign({t},MOM,o.mom));partyHat(478,HC(y,s)-118*s,.8*s,-.12,'#4a8fe0');
 ktable(1420);cake(770,1430,.5,{t,lit:1});}

// A (cover): full-screen WhatsApp video call: your brother on his sofa, hands on head; you in the self-view, unimpressed
function shotA(t,r,lab){X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.02,1.07,C(r/4)),t,.12);broRoom(t);psofa(540,1880,1.3,'#d0703a','#b05a2a');
 const y=1960,s=1.3,talk=r<1.8;
 sm(540,y,s,Object.assign({t,eyes:'wide',brow:'worried',mouth:talk?(Math.sin(t*15)>0?'open':'o'):'o',sweat:1,armL:165,bendL:-150,armR:165,bendR:-150,look:[0,-.1]},BRO));
 psofa(540,1960,1.3,'#d0703a','#b05a2a');
 callFrame(t,'Your brother 🧢','21:40',{top:0});
 // self-view: you, unimpressed (screen space, inside the safe box)
 X.save();X.setTransform(1,0,0,1,0,0);X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=20;rr(668,640,210,320,26,'#1b1b1f',0);X.shadowColor='transparent';X.beginPath();X.roundRect(676,648,194,304,20);X.clip();X.translate(676,648);X.scale(.2,.2);
 proom(t,{win:0,night:1,lamp:1,frame:null,plant:0,wall:'#e9d3bd',wall2:'#d4b394'});sm(500,2100,1.5,Object.assign({t,eyes:'open',lid:.55,brow:'flat',mouth:'flat',look:[0,0],noshadow:1},YOU));X.restore();
 if(lab&&r>.2)label3('You, 21:40 🙃',C((r-.2)/.2))}
sh(0,(t,r)=>shotA(t,r,1));

// B: Mom at her kitchen table: party hat, cake, phone in hand, side-eye at YOU
sh(T('m1')-.05,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(560,1000,lerp(1.03,1.08,C(r/3)),t,.1);momKitchen(t);
 momShot(t,r,{mom:{eyes:'open',lid:.5,brow:r>.6?'up':'flat',mouth:'flat',look:[.75,0],tilt:-5,armR:120,bendR:-140,holdR:(x,y)=>phoneH(x,y,.2,1),armL:25,bendL:10}});
 if(r>.2)label3('Mom, 21:41 🎂',C((r-.2)/.2))});

// C: that night on your sofa: voice note, Memopai hops onto the sofa arm, the 🎂 thought flies into the phone
const C0=T('s2')-.05,MP=.15;
sh(C0,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.04,1.08,C(r/3)),t,.1);proom(t,{win:760,night:1,frame:null,plant:1,lamp:1,wall:'#e9d3bd',wall2:'#d4b394'});
 const y=1960,s=1.25,hy=HD(y,s);
 sm(420,y,s,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'up',mouth:(r>.4&&r<2.9)?(Math.sin(t*14)>0?'open':'smile'):'smile',look:[.5,.2],armR:150,bendR:-160,holdR:(x,yy)=>phoneH(x,yy,.25,1),armL:30,bendL:-40},YOU));
 psofa(540,1900,1.3);
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1470,.72,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1180,mp,8,180)}
 const ft=1.0,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(440,560,eo(fl)),py=lerp(hy-260,hy+40,eo(fl))-Math.sin(fl*Math.PI)*140;pill(px,py,'🎂 Brother · 14 Mar',C((r-ft+.35)/.3)*(1-fl*.5))}else sparkles(560,hy+40,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 👋',C((r-MP)/.2))});

// D: your chat with Memopai: voice note, date + brother, invite, BIG 'Brother tapped Accept'
const D0=T('s2')+3.0;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const iv=T('s3')-D0-.6,ac=T('s3')-D0+.4;
 phoneUI(540,930,1.16,r,{typing:r>.4&&r<.85,list:[{a:0,me:1,text:'🎤 0:05 · 14 March, 9am: remind my brother to call Mom 🎂',time:'21:52'},{a:.85,me:0,text:'✅ Got it! Brother 🧢 · 14 Mar 09:00 · 🎂 Call Mom!',time:'21:52'},{a:iv,date:'📩 Invite sent to Brother'}]});
 const k=C((r-ac)/.35);if(k>0){X.save();X.translate(540,1250);const sc=lerp(.6,1,eo(k));X.scale(sc,sc);X.globalAlpha=C(k*2);glow(0,0,380,'130,240,160',.45);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=30;rr(-320,-85,640,170,40,'#25d366',7);X.shadowColor='transparent';
  X.font="900 50px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('✓ Brother tapped Accept',0,4);X.restore();if(k<1)sparkles(540,1250,k,10,320,'#ffffff')}});

// E: March 14th, 09:00: his kitchen, phone buzzes (Memopai), he calls Mom; Mom beams in the round call bubble
const E0=T('s3')+1.75;
sh(E0,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.03,1.07,C(r/4)),t,.1);broRoom(t,{morning:1});
 const call=r>1.3,buzzOn=r>.2&&r<1.3,y=1830,s=1.18,hy=HD(y,s);
 sm(400,y,s,Object.assign({t,eyes:call?'happy':'wide',brow:'up',mouth:call?(r>1.4&&r<3.6?(Math.sin(t*15)>0?'open':'grin'):'grin'):'o',look:call?[.5,-.1]:[.6,.3],blush:call?1:0,
  armR:call?150:110,bendR:call?-160:-110,holdR:(x,yy)=>{const j=buzzOn?Math.sin(t*60)*4:0;phoneH(x+j,yy,.2,buzzOn||call)},armL:call?150:30,bendL:call?-40:20},BRO));
 ktable(1480);X.save();X.translate(170,1478);rr(-70,-40,140,40,10,'#f2c27a',5);rr(-60,-60,120,26,10,'#e0a85a',4);X.restore();
 if(call){const a=C((r-1.4)/.3);X.save();X.globalAlpha=a;bubbleCall(730,820,150,()=>{momKitchen(t,{sun:1});sm(560,1900,1.25,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,noshadow:1},MOM));partyHat(560,HC(1900,1.25)-150*1.25,1.0,-.15,'#4a8fe0')});X.restore();
  for(let k=0;k<3;k++){const hp=C((r-1.7-k*.35)/1);if(hp>0&&hp<1){X.save();X.globalAlpha=1-hp;txt('❤️',640+k*90,640-hp*160,56,'#e33',0,'400 ');X.restore()}}}
 if(r<1.3)notif(338,r<1.0?C((r-.15)/.25):C((1.3-r)/.3),'Memopai',"🎂 Mom's birthday! Call her 📞");
 else label3('Your brother, 09:01 😎',C((r-1.35)/.2))});

// F: payoff: you on the same sofa, morning sun, coffee, phone face down on the arm: sorted
sh(T('p1')-.05,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.03,1.07,C(r/4)),t,.1);proom(t,{win:760,night:0,frame:null,plant:1,lamp:0,wall:'#ffe9d2',wall2:'#f7d3b0'});glow(820,620,700,'255,236,180',.5);
 const y=1960,s=1.25;
 sm(470,y,s,Object.assign({t,eyes:r>1.6?'happy':'open',lid:r<1.6?.35:0,brow:r>1.6?'up':'smug',mouth:r>1.6?'grin':'smirk',look:[.3,-.1],armR:150,bendR:-150,holdR:(x,yy)=>pmug(x+10,yy+20,1.0,'#e86a5a'),armL:30,bendL:-40},YOU));
 psofa(540,1900,1.3);
 X.save();X.translate(800,1590);rr(-58,-18,116,30,10,'#1b1b1f',5);X.restore();
 if(r>.2)label3('You, sorted 😌',C((r-.2)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,2.2,0));
