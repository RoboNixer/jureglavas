// 2026-11-21 12:00 PRODUCTIVITY — "One grey tick. And Mom's not picking up."
// craft ladder: watick() WhatsApp delivery ticks, waChat() chat with any contact + ticks + 'last seen', keyhook(), chargeStand() (look3.js)
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const MOM={hair:'bun',hairc:'#b9b9c4',lashes:1,pj:'#b96ad9',limb:'#5a3a6a'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function momAv(x,y,r){circ(x,y,r,'#f6c56b',0);X.font=(r*1.1|0)+"px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('👩‍🦳',x,y+3);X.textAlign='left'}
// your living room (night = worry, day = sorted)
function myRoom(t,o={}){proom(t,{win:760,night:!o.day,lamp:o.day?0:230,frame:o.day?null:null,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:o.day?'#f6e6cf':'#d8c6b4',wall2:o.day?'#ecd2b0':'#bfa892',plant:o.day?200:0});
 if(o.day)glow(760,520,700,'255,236,180',.45);
 wclock(o.clockX||300,560,.62,o.h||19,o.m||40);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 keyhook(o.hookX||820,1000,1,o.keysOn?1:0)}
function momRoom(t,day){proom(t,{win:300,night:!day,wall:day?'#f9e2c8':'#c9a98e',wall2:day?'#efc9a1':'#a98a72',curtain:'#8f6bb0',curtain2:'#72529a',plant:day?860:0,lamp:day?0:820,frame:[620,520]});if(!day)glow(800,700,500,'255,200,130',.35);else glow(300,500,700,'255,240,190',.5);psofa(560,1700,1.1,'#c86b5a','#a85646')}
function momTalk(t,x,o){sm(x,1760,1.15,Object.assign({t,flip:1,armL:165,bendL:-150,holdL:(hx,hy)=>{rr(hx-30,hy-80,60,120,14,'#1b1b1f',5)}},MOM,o))}
function youEar(t,x,y,s,o){sm(x,y,s,Object.assign({t,armR:165,bendR:-115,holdR:(hx,hy)=>{rr(hx-30,hy-90,60,120,14,'#1b1b1f',5)}},YOU,o))}

// ---- A: frame 1 = your WhatsApp with Mom: every message on ONE grey tick, 'last seen yesterday'
const MSGS=(r,ring)=>[
 {a:-1,me:1,text:'Mom?',time:'17:10',kind:1},
 {a:-1,me:1,text:'Call me when you see this ❤️',time:'18:05',kind:1},
 {a:-1,me:1,text:'📞 Voice call · No answer',time:'19:39',kind:1},
 {a:-1,me:1,text:'Mom??',time:'19:40',kind:1,ring}];
function shotA(t,r){NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b4a';X.fillRect(0,0,1080,1920);glow(540,900,760,'150,190,255',.28);
 const ring=C((r-1.1)/.3);
 waChat(540,960,lerp(1.1,1.16,C(r/3)),r,{name:'Mom ❤️',sub:'last seen yesterday at 16:02',av:momAv,clock:'19:40',list:MSGS(r,ring)})}
sh(0,(t,r)=>shotA(t,r));

// ---- B: you at 19:40, the stomach drop: worst cases circle your head, you grab the car keys
const B0=T('s1')-.05;
sh(B0,(t,r)=>{cam(540,1010,lerp(1.02,1.08,C(r/3)),t,.12);myRoom(t,{keysOn:r<1.2,h:19,m:40});
 const y=1830,s=1.14,hy=HD(y,s),grab=r>1.2;
 sm(520,y,s,Object.assign({t,eyes:'wide',brow:'worried',mouth:r<1.2?'o':'wavy',look:grab?[.8,0]:[-.3,.5],sweat:1,lean:grab?6:0,
  armL:110,bendL:-110,holdL:(hx,hy2)=>phoneH(hx,hy2+10,-.1,1),
  armR:grab?120:30,bendR:grab?-20:10,holdR:grab?(hx,hy2)=>keys3(hx-6,hy2-6,.75,{glow:1}):null},YOU));
 headLoop(520,hy-250,t,['🚗','🏥','📵'],C((r-.15)/.4),320);
 label3('You at 19:40 😰',C((r-.15)/.2))});

// ---- C: split: she calls, all cheerful. Her phone died. Again.
const C0=T('m1')-.05;
sh(C0,(t,r)=>{const rel=r>.9;split2(t,
  (t)=>{myRoom(t,{keysOn:0,h:19,m:52});youEar(t,520,1830,1.12,{eyes:'open',lid:rel?.45:0,brow:rel?'flat':'up',mouth:rel?'flat':'o',look:[.6,0],sweat:!rel,holdL:(hx,hy)=>keys3(hx,hy,.7),armL:25,bendL:10})},
  (t)=>{momRoom(t,0);momTalk(t,560,{eyes:'happy',brow:'up',mouth:'grin',talk:r<2.2?t:null,blush:1});emo(420,700,'🪫',.9,C((r-.6)/.3))},
  {camA:[560,1000,1.0],camB:[560,1000,1.0],p:C(r/.3)});
 label3('Mom, 19:52 😊',C((r-.15)/.2))});

// ---- D: you sigh; Memopai hops onto the sofa; the 🔌 thought flies from your head into your phone
const D0=T('m1')+2.4,MP=.12;
sh(D0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/3.5)),t,.1);myRoom(t,{keysOn:1,h:19,m:54});
 const y=1830,s=1.14,hy=HD(y,s),talk=r>T('s2')-D0+.1&&r<T('s2')-D0+2.2;
 sm(430,y,s,Object.assign({t,eyes:r<.8?'closed':'open',brow:r<.8?'sad':'up',mouth:talk?'open':(r<.8?'wavy':'smile'),talk:talk?t:null,look:[.5,.35],
  armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(790,1530,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(790,1230,mp,8,180)}
 const ft=T('s2')-D0+.6,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(430,540,eo(fl)),py=lerp(hy-200,hy+520,eo(fl))-Math.sin(fl*Math.PI)*140;emo(px,py,'🔌',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(540,hy+520,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});

// ---- E: your chat with Memopai: the reminder, the confirmation, invite + 'Mom tapped Accept'
const E0=T('s2')+2.5;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const iv=1.6,ac=T('s3')-E0+.3;
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.75,list:[{a:0,me:1,text:'Every night at 21:30, remind Mom to charge her phone 🔌',time:'19:55'},{a:.75,me:0,text:'✅ Got it! Mom · every night 21:30 · 🔌 Charge your phone',time:'19:55'},{a:iv,date:'📩 Invite sent to Mom'}]});
 const k=C((r-ac)/.35);if(k>0){X.save();X.translate(540,1330);const sc=lerp(.6,1,eo(k));X.scale(sc,sc);X.globalAlpha=C(k*2);glow(0,0,380,'130,240,160',.45);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=30;rr(-300,-80,600,160,40,"#25d366",7);X.shadowColor='transparent';
  X.font="900 50px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('✓ Mom tapped Accept',0,4);X.restore();if(k<1)sparkles(540,1330,k,10,320,'#ffffff')}});

// ---- F: Mom at 21:30: her phone buzzes (Memopai), she plugs it in
const F0=T('s3')+2.35;
sh(F0,(t,r)=>{cam(560,1010,lerp(1.03,1.07,C(r/3)),t,.1);momRoom(t,0);wclock(380,560,.6,21,30);
 const nb=T('s3')-F0+2.75,pl=C((r-1.25)/.5),buzz=r<1.2;
 sm(360,1780,1.12,Object.assign({t,eyes:pl>0?'happy':'open',brow:'up',mouth:pl>.5?'smile':'o',look:[.8,.4],lean:pl>0?8:0,armR:pl>0?60:20,bendR:pl>0?-10:10,armL:20,bendL:10},MOM));
 chargeStand(700,1780,1.05,{on:buzz||pl>.6,plug:pl,buzz:buzz?t:null});
 if(r>1.4){emo(700,1240-C((r-1.4)/.4)*40,'🔋',.75,C((r-1.4)/.3))}
 if(r<1.25)notif(338,r<1.0?C(r/.25):C((1.25-r)/.25),'Memopai','🔌 Bedtime! Plug in your phone, Mom');
 else label3('Mom at 21:30 🔌',C((r-1.3)/.2))});

// ---- G: next day, sunny. You call: she picks up. Keys on the hook. Her story about the neighbour's cat.
const G0=T('p1')-.05;
sh(G0,(t,r)=>{const cat=r>T('p1')-G0+2.6;split2(t,
  (t)=>{myRoom(t,{day:1,keysOn:1,h:12,m:10,hookX:220});youEar(t,560,1830,1.12,{eyes:r>1.2?'happy':'open',brow:'up',mouth:r>1.2?'grin':'smile',blush:r>1.2?1:0,look:[.6,0],armL:150,bendL:-150})},
  (t)=>{momRoom(t,1);momTalk(t,560,{eyes:'happy',brow:'up',mouth:'open',talk:t,blush:1});emo(420,690,'🐈',.95,C((r-(T('p1')-G0+2.6))/.3))},
  {camA:[560,1000,1.0],camB:[560,1000,1.0],p:C(r/.3)});
 label3('You, sorted 😌',C((r-.2)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));

// cover-only shot: you at 19:40, phone glowing, worst cases circling, keys in the hand
sh(1000,(t,r)=>{cam(540,1060,1.0,t,.05);myRoom(t,{keysOn:0,h:19,m:40});
 const y=1900,s=1.08,hy=HD(y,s);
 sm(540,y,s,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',look:[-.3,.5],sweat:1,armL:110,bendL:-110,holdL:(hx,hy2)=>phoneH(hx,hy2+10,-.1,1),armR:120,bendR:-20,holdR:(hx,hy2)=>keys3(hx-6,hy2-6,.75,{glow:1})},YOU));
 headLoop(540,hy-250,2.2,['🚗','🏥','📵'],1,320)});
