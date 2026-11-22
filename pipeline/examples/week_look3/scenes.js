// 2026-11-22 22:00 FOLLOWERS — "Sunday night. Your brain starts the week's list." (Set up your week, Sunday series)
// craft ladder: monday3() (look3.js) = Monday as a concept character with a tear-off calendar page
const YOU={hair:'curl'};
const KID={hair:'spike',hairc:'#4a3426',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
const ICONS=['🎒','🗑️','💊'];
function lounge(t,o={}){proom(t,{win:790,plant:o.plant===0?0:150,lamp:1,night:1,curtain:'#5a6fc0',curtain2:'#41539e',frame:null,wall:o.warm?'#e9d6bd':'#b9b4cc',wall2:o.warm?'#d6bd9c':'#9e98b6'});
 glow(200,760,560,o.warm?'255,205,130':'190,180,255',o.warm?.5:.22);wclock(320,640,.7,21,0)}
const SY=1900,SS=1.1,SX=420; // you on the sofa
const sit=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);
function sofa(){psofa(470,1690,1.12,'#5a7fb5','#4a6a9a')}
// A: frame 1 = Sunday 21:00, you slumped on the sofa, the week's worries orbiting your head
function shotA(t,r,lab,cv){if(cv)cam(540,1080,1.05,t,0);else cam(540,1090,lerp(1.04,1.1,C(r/4.4)),t,.1);
 lounge(t);sofa();
 sm(SX,SY,SS,sit(Object.assign({t,eyes:'open',lid:.5,brow:'worried',mouth:'wavy',look:[.2,-.6],tilt:-5,armR:20,bendR:10,armL:-20,bendL:-10},YOU)));
 ctable(800,1830,.85);pmug(800,1690,.9,'#9aa0aa');
 headLoop(SX,HD(SY,SS)-20,cv?.9:t,ICONS,C((r-(cv?0:.6))/.4),270);
 if(lab)label3('You, Sunday 21:00 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: Monday looms behind the sofa and grows; you sink
sh(T('r1')-.06,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/3)),t,.1);
 lounge(t);X.fillStyle='rgba(20,15,50,.18)';X.fillRect(-2000,-2000,5000,5000);
 const g=eo(C(r/2.2)),ms=lerp(.95,1.22,g);
 X.save();X.beginPath();X.rect(-3000,-3000,7000,4560);X.clip();monday3(700,1920,ms,{t,eyes:'open',look:[-.6,.3],armR:lerp(10,60,g),bendR:-30,armL:lerp(-10,-60,g),bendL:30});X.restore();
 sofa();
 sm(SX-40,SY+lerp(0,25,g),SS,sit(Object.assign({t,eyes:'open',brow:'worried',mouth:'o',look:[.7,-.5],sweat:1,tilt:-8,armR:20,bendR:10,armL:-20,bendL:-10},YOU)));
 label3('Monday 😈',C(r/.2))});
// C: Memopai hops onto the sofa, voice note; the three worries fly out of your head into the phone
const MP=.05;
sh(T('s2')-.05,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/5)),t,.1);
 lounge(t,{warm:1});sofa();
 const hy=HD(SY,SS),talk=r>.5&&r<4.4;
 sm(SX,SY,SS,sit(Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:-20,bendL:-10},YOU)));
 const mp=C((r-MP)/.5);if(mp>0){memo(770,1480,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(770,1180,mp,8,180)}
 const px0=SX+120,py0=hy+190;
 for(let i=0;i<3;i++){const ft=1.4+i*.75,fl=C((r-ft)/.8);const ang=t*1.3+i/3*Math.PI*2;const sx=SX+Math.cos(ang)*270,sy=hy-60+Math.sin(ang)*113;
  if(fl<=0)emo(sx,sy,ICONS[i],.85,1);else if(fl<1){emo(lerp(sx,px0,eo(fl)),lerp(sy,py0,eo(fl))-Math.sin(fl*Math.PI)*70,ICONS[i],.85*(1-fl*.5),1)}else sparkles(px0,py0,C((r-ft-.8)/.5),6,90,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// D: the chat: three confirmations, Mom accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.2&&r<.45,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:09',time:'21:04'},{a:.45,me:0,text:'✅ Tue 07:30 · 🎒 Pack the PE kit',time:'21:04'},{a:1.15,me:0,text:'✅ Every Wed 19:00 · 🗑️ Bins out',time:'21:04'},{a:2.0,me:0,text:'✅ Every day 09:00 → Mom · 💊 Your pills',time:'21:05'},{a:3.0,date:'✓ Mom tapped Accept'}]})});
// E: Tuesday 07:30 hallway: the ping, you hand your kid the PE kit at the door
function pekit(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,95,90,.2);line([[-40,-70],[-30,-120],[30,-120],[40,-70]],10,'#1c3d6e');rr(-85,-80,170,170,34,'#4a8fe0',7);rr(-60,-20,120,60,16,'rgba(0,0,0,.13)',4);txt('PE',0,10,40,'#fff',0,'900 ');X.restore()}
sh(T('s4')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/2.6)),t,.12);
 hallway(t,{dx:780});glow(780,600,420,'255,240,190',.35);
 const hand=eo(C((r-.9)/.7));
 sm(380,1880,1.16,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',look:[.6,.1],armR:lerp(55,80,hand),bendR:lerp(-50,-5,hand),armL:110,bendL:-110,holdL:(hx,hy)=>phoneH(hx-10,hy,-.1,r<2.2)},YOU));
 sm(730,1880,.95,Object.assign({t,eyes:hand>.6?'happy':'open',brow:'up',mouth:hand>.5?'grin':'smile',look:[-.6,0],armR:lerp(-20,-80,hand),bendR:lerp(10,20,hand),armL:20,bendL:-10},KID));
 pekit(lerp(560,615,hand),lerp(1330,1400,hand)-Math.sin(hand*Math.PI)*40,1.0);
 notif(338,C(r/.25)*(1-C((r-2.0)/.25)),'Memopai','🎒 Pack the PE kit')});
// F: same framing as A, Sunday 21:00: warm, head clear, tea; Monday shrunk to pocket size on the coffee table
sh(T('p1')-.08,(t,r)=>{cam(540,1085,lerp(1.03,1.07,C(r/4.4)),t,.12);
 lounge(t,{warm:1});glow(480,900,700,'255,215,150',.35);sofa();
 sm(SX,SY,SS,sit(Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:r>1,look:[.6,.2],lean:-3,armR:150,bendR:-140,holdR:(hx,hy)=>pmug(hx,hy+20,1.05,'#ffd23f'),armL:-20,bendL:-10},YOU)));
 ctable(800,1830,.85);
 monday3(800,1690,.42,{t,tiny:1,eyes:r>2?'closed':'open',look:[-.5,0],armR:40,armL:-40});
 if(r>.4)sparkles(SX,HD(SY,SS)-120,C((r-.4)/1.4),8,160);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,2.0,0,1));
