// 2026-11-23 20:00 FUN FACT — "'Text me when you get there.' 23:40. Nothing."
// craft ladder (look3.js): sm({hardhat}) = yellow construction hard hat ('his brain is under construction')
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#4caf7a',limb:'#2b3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,150,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function sonAv(x,y,r){circ(x,y,r,'#7fd3a0',0);X.font=(r*1.1|0)+"px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('🧢',x,y+3);X.textAlign='left'}
// your living room at night (worry) or warm (sorted)
function myRoom(t,o={}){proom(t,{win:780,night:1,lamp:o.warm?230:0,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:o.warm?'#e9d2b6':'#9fa6bd',wall2:o.warm?'#d9b892':'#7d849c',plant:0});
 if(o.warm)glow(230,760,760,'255,206,140',.5);else{X.save();X.globalAlpha=.42;X.fillStyle='#0e1634';X.fillRect(-3000,-3000,8000,8000);X.restore()}
 wclock(300,560,.62,o.h||23,o.m||40);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a')}
const SY=1500+340*1.12+40,SS=1.12;
// A: frame 1 = you on the sofa at 23:40, wide awake, phone glowing, worst cases circling
function shotA(t,r,lab,cv){if(cv)cam(540,1040,1.04,t,0);else cam(540,1040,lerp(1.02,1.08,C(r/4.4)),t,.1);
 myRoom(t,{h:23,m:40});
 const hy=HD(SY,SS),tap=Math.sin(t*9)*6;
 sm(540,SY,SS,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[.15,.7],armL:120,bendL:-120,armR:110,bendR:-115,
  holdR:(hx,hy2)=>phoneH(hx-6,hy2,.05,1),legR:-82+tap*.4},YOU,SIT));
 if(!cv)headLoop(540,hy-300,t,['🚌','📵','🌧️'],C((r-2.0)/.4),330);
 if(lab)label3('You at 23:40 😰',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: the chat with your son: three messages, ticks turn blue one by one ('Seen. Seen. Seen.'), status 'online'
sh(T('r1')-.15,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b4a';X.fillRect(0,0,1080,1920);glow(540,900,760,'150,190,255',.28);
 const k=i=>r>.25+i*.55?3:2;
 waChat(540,960,lerp(1.1,1.15,C(r/2.2)),r,{name:'Son 🧢',sub:'online',av:sonAv,clock:'23:41',list:[
  {a:-1,me:1,text:'Text me when you get there ❤️',time:'20:58',kind:k(0)},
  {a:-1,me:1,text:'Here yet?',time:'22:30',kind:k(1)},
  {a:-1,me:1,text:'??',time:'23:40',kind:k(2)}]})});
// C: Sunday on the same sofa: Memopai hops onto the sofa arm, you voice-note it, the 📱 worry flies into the phone
sh(T('s2')-.12,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/5)),t,.1);
 proom(t,{win:780,plant:200,lamp:0,night:0,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:'#f6e6cf',wall2:'#ecd2b0'});glow(760,520,700,'255,236,180',.45);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const talk=r>.5&&r<4.6,hy=HD(SY,SS);
 sm(430,SY,SS,Object.assign({t,eyes:'open',brow:'up',mouth:talk?(Math.sin(t*14)>0?'open':'smile'):'smirk',look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,talk),armL:110,bendL:-100},YOU,SIT));
 const mp=C((r-.05)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.8,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(240,560,eo(fl)),py=lerp(hy-420,hy+210,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'📱',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(560,hy+210,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-.05)/.2))});
// D: the chat: voice note → confirmation → invite → he accepts
sh(T('s3')-.1,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.15&&r<.4,list:[{a:-1,me:1,text:'🎤 0:04 · Every Saturday at 23:00, remind my son: text Mom 📱',time:'11:02'},{a:.35,me:0,text:'✅ Got it! Every Sat 23:00 → your son: 📱 Text Mom: all good?',time:'11:02'},{a:1.1,date:'Invite sent · no new app'},{a:1.8,date:'✓ He tapped Accept'}]})});
// party room: purple walls, string lights, cycling disco glows
function party(t){proom(t,{win:0,night:1,lamp:0,wall:'#5b3f8f',wall2:'#3b2a66',plant:0});
 bokeh(t,'255,120,230',12,200,1000);bokeh(t+3,'120,200,255',10,300,1100);strlights(t,330,4,70);
 const h=(t*.6)%1;glow(lerp(120,960,h),620,520,'255,90,200',.32);glow(lerp(960,120,h),760,520,'90,200,255',.3);
 X.save();X.globalAlpha=.25;X.fillStyle='#2a1a4a';X.fillRect(-3000,1500,8000,2000);X.restore();
 for(const[fx,fy,c]of[[150,1330,'#3a2a5a'],[930,1300,'#3a2a5a']]){X.save();X.globalAlpha=.55;circ(fx,fy-200,62,c,0);rr(fx-70,fy-140,140,320,60,c,0);X.restore()}}
// E: next Saturday, the party: your son dancing in a hard hat ('His brain 🚧'), phone in his back pocket
sh(T('f1')-.2,(t,r)=>{cam(540,1050,lerp(1.03,1.09,C(r/4)),t,.1);party(t);
 const bob=Math.abs(Math.sin(t*5))*26,sw=Math.sin(t*5);
 sm(540,1840-bob,1.1,Object.assign({t,hardhat:1,eyes:'happy',brow:'up',mouth:'grin',look:[0,0],tilt:sw*6,armL:150+sw*20,bendL:-40,armR:150-sw*20,bendR:40,legL:10+sw*8,legR:-10+sw*8},SON));
 X.save();X.translate(540+120,1840-bob-420);glow(0,0,90,'130,240,160',.25+.2*Math.sin(t*20));X.restore();
 label3('His brain 🚧',C((r-.1)/.2))});
// F: 23:00, close: the phone buzzes in his pocket, he groans and types 'all good'
const F0=T('k1')-1.15,NT=.12;
sh(F0,(t,r)=>{cam(540,1020,lerp(1.12,1.16,C(r/2.5)),t,.1);party(t);
 const ping=r>NT,out=r>.8;
 sm(540,1840,1.1,Object.assign({t,hardhat:1,eyes:out?'open':'wide',lid:out?.3:0,brow:out?'flat':'up',mouth:out?(r>1.2&&r<2.6?(Math.sin(t*12)>0?'open':'wavy'):'wavy'):'o',look:out?[.2,.6]:[.6,.3],tilt:out?-6:0,
  armL:20,bendL:10,armR:out?110:30,bendR:out?-115:20,holdR:out?(hx,hy)=>phoneH(hx,hy,0,1):null},SON));
 if(!out&&ping){X.save();const j=Math.sin(t*60)*4;X.translate(660+j,1420);glow(0,0,110,'130,240,160',.5);rr(-26,-44,52,88,10,'#1b1b1f',5);X.restore()}
 if(ping)notif(338,C((r-NT)/.25)*(1-C((r-NT-1.9)/.25)),'Memopai','📱 Text Mom: all good?')});
// G: same framing as A, warm lamp: you asleep under a blanket, phone on your chest glowing green with his reply
sh(T('p1')-.5,(t,r)=>{cam(540,1040,lerp(1.03,1.07,C(r/4.5)),t,.1);
 myRoom(t,{warm:1,h:23,m:1});
 const hy=HD(SY,SS),br=Math.sin(t*1.6)*6;
 sm(540,SY,SS,Object.assign({t,eyes:'closed',brow:'flat',mouth:'smile',tilt:-14,look:[0,0],armL:30,bendL:-60,armR:30,bendR:-60},YOU,SIT));
 X.save();X.translate(560,hy+400+br*.3);X.rotate(-.04);rr(-260,-170,520,360,80,'#9be0b0',7);for(let k=0;k<4;k++){X.save();X.globalAlpha=.25;line([[-260+k*150,-200],[-220+k*150,170]],10,'#5fae7a');X.restore()}
 const on=r>.3;if(on)glow(40,-120,170,'130,240,160',.55);rr(-30,-190,64,110,12,'#1b1b1f',5);rr(-22,-180,48,90,7,on?'#25d366':'#3a4a66',0);X.restore();
 if(r>.5)emo(660,hy-330+Math.sin(t*2)*10,'👍',1,C((r-.5)/.3)*(1-C((r-2.4)/.4)));
 const z=C((r-1.4)/.4);if(z>0){X.save();X.globalAlpha=z;X.font="800 64px Inter";X.fillStyle='#ffffff';X.strokeStyle='#151515';X.lineWidth=8;X.textAlign='center';for(let k=0;k<3;k++){const zz=((t*.5+k/3)%1);X.globalAlpha=z*(1-zz);X.font=`800 ${44+k*14}px Inter`;X.strokeText('z',380-zz*90,hy-160-zz*200-k*10);X.fillText('z',380-zz*90,hy-160-zz*200-k*10)}X.restore()}
 sparkles(540,hy,C((r-.4)/1.2),10,240,'#fff7b0');
 label3('You, sorted 😌',C((r-.4)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.2,0,1));
