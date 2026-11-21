// 2026-11-21 20:00 STORY — "Day 3 of your holiday. The cat cam shows an empty bowl."
// craft ladder: pbeach(), lounger3(), beachTowel(), headCloud(), catcam() (look3.js)
const YOU={hair:'curl'};
const PAL={hair:'spike',hairc:'#3a2a1e',pj:'#3d7fd0'};
const HD=(y,s)=>y-767*s;
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366',down=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,down?'#1b1b1f':(on?col:'#3a4a66'),0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
// beach set: lounger centred, you sitting on it facing right
const LX=470,LY=1760,LS=1.15,SEAT=LY-196*LS,SY=SEAT+340*1.12,SS=1.12;
function beachSet(t,gold){pbeach(t,{gold});lounger3(LX,LY,LS,{col:gold?'#ff9a5a':'#ff6a5a'})}
function youSit(t,o){sm(LX-60,SY,SS,sitO(Object.assign({t,flip:1},YOU,o)))}
// A: frame 1: you on holiday, relaxed, then you check the phone → shock
const A_SHOCK=1.9;
function shotA(t,r,lab,cv){if(cv)cam(540,1080,1.05,t,0);else cam(540,1080,lerp(1.02,1.09,C(r/2.8)),t,.1);
 beachSet(t,0);
 const sh=cv?1:C((r-A_SHOCK)/.2);
 youSit(t,{eyes:sh>0?'wide':'happy',brow:sh>0?'worried':'up',mouth:sh>0?'o':'smile',look:sh>0?[.4,.5]:[.3,-.2],sweat:sh>0,
  armR:110,bendR:-110,holdR:(x,y)=>phoneH(x+8,y,.1,1),armL:30,bendL:20});
 if(sh>0){const hy=HD(SY,SS);for(let k=0;k<3;k++){X.save();X.globalAlpha=.8*sh;line([[LX-60+120+k*30,hy-150-k*10],[LX-60+160+k*40,hy-200-k*20]],8,'#151515');X.restore()}}
 if(lab)label3('You on holiday 🏖️',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: the cat cam, full-screen phone: cat glaring at an empty bowl
sh(T('r0')-.1,(t,r)=>{cam(540,1000,lerp(1.0,1.06,eo(C(r/2.4))),t,.06);
 beachSet(t,0);X.save();X.fillStyle='rgba(10,20,40,.35)';X.fillRect(-2000,-2000,5000,5000);X.restore();
 const pop=sp(C(r/.35),10,.55);catcam(540,1040,1.12*pop,t,{fill:0,glare:r>.9,day:'Day 3'});
 if(r>1.6){const a=C((r-1.6)/.3);X.save();X.globalAlpha=a;X.strokeStyle='#ff3b30';X.lineWidth=10;X.beginPath();X.ellipse(540-70*1.12,1040+300*1.12,150,70,0,0,7);X.stroke();X.restore()}
 label3('Your cat 😾',C((r-.1)/.2))});
// C: your friend on his sofa, pizza, phone at ear: 'Wait... you meant every day?'
sh(T('m1')-.1,(t,r)=>{cam(540,1060,lerp(1.06,1.12,C(r/2.2)),t,.1);
 proom(t,{win:790,night:1,lamp:1,plant:1,frame:[250,520],wall:'#d9e6d0',wall2:'#bfd3b4'});glow(260,700,520,'255,210,140',.35);
 psofa(540,1900,1.35,'#c0703a','#a05a2c');
 const y=2040,s=1.12,talk=r>.05&&r<1.4;
 sm(540,y,s,sitO(Object.assign({t,eyes:'wide',brow:'up',mouth:talk?'open':'o',talk:talk?t:null,look:[-.3,-.1],tilt:-6,
  armL:150,bendL:-150,holdL:(x,yy)=>phoneH(x+6,yy+40,.3,1),armR:-110,bendR:100,holdR:(x,yy)=>{X.save();X.translate(x+10,yy-20);X.rotate(-.5);path(()=>{X.moveTo(0,0);X.lineTo(90,-30);X.lineTo(80,40);X.closePath()},'#f5c26b',6);for(const[a,b]of[[40,0],[60,15],[55,-10]])circ(a,b,7,'#d9483b',0);X.restore()}},PAL)));
 label3('Your friend 🍕',C(r/.2))});
// D: back on the sunbed: rain cloud over only your head; Memopai hops on; voice note; 🐱 flies into the phone, cloud clears
const MP=.35,FT=2.9;
sh(T('s2')-.05,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/5)),t,.1);
 beachSet(t,0);
 const hy=HD(SY,SS),talk=r>.9&&r<4.6,fl=C((r-FT)/.9),clear=C((r-FT-.6)/.6);
 headCloud(LX-60,hy-330,1,t,1-clear);
 youSit(t,{eyes:'open',lid:clear>0?0:.3,brow:clear>0?'up':'sad',mouth:talk?'open':(clear>0?'smile':'flat'),talk:talk?t:null,look:[.6,.3],
  armR:120,bendR:-120,holdR:(x,y)=>phoneH(x+8,y,.1,1),armL:30,bendL:20});
 const mp=C((r-MP)/.5);if(mp>0){memo(LX+250,SEAT-10,.72,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(LX+250,SEAT-260,mp,8,180)}
 if(r>FT-.35){if(fl<1){const px=lerp(LX-60,LX+90,eo(fl)),py=lerp(hy-300,hy+330,eo(fl))-Math.sin(fl*Math.PI)*80;emo(px,py,'🐱',C((r-FT+.35)/.3)*(1-fl*.3))}else sparkles(LX+90,hy+330,C((r-FT-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// E: the chat
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a7fc0');g.addColorStop(1,'#f4d9a0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'255,240,190',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,voice:1,pl:C(r/.35),dur:'0:06',time:'15:12'},{a:.6,me:0,text:'✅ Got it! Every day 18:00 → your friend: 🐱 Time to feed the cat!',time:'15:12'},{a:1.25,date:'Invite sent · no app needed'},{a:1.9,date:'✓ He tapped Accept'}]})});
// F: your kitchen, 18:00: his phone buzzes, he fills the bowl, the cat purrs
const NT=.25,POUR=1.3;
sh(T('s4')-.05,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/2.6)),t,.1);
 proom(t,{win:780,night:0,lamp:0,plant:1,frame:[250,520],wall:'#cfd8c8',wall2:'#b4bfae'});glow(800,600,600,'255,200,130',.35);wclock(250,560,.8,6,0);
 const pour=C((r-POUR)/.4),ping=r>NT;
 sm(360,1820,1.12,Object.assign({t,eyes:pour>0?'happy':'open',brow:'up',mouth:pour>0?'smile':'o',look:pour>0?[.6,.5]:[.2,.4],
  armR:pour>0?70:100,bendR:pour>0?-20:-100,holdR:pour>0?(hx,hy)=>{X.save();X.translate(hx+20,hy);X.rotate(1.1);rr(-45,-70,90,140,14,'#ffd23f',6);txt('🐟',0,0,48,'#000',0);X.restore()}:(hx,hy)=>phoneH(hx,hy+10,-.1,ping&&Math.sin(t*24)>0),armL:20,bendL:15},PAL));
 catbowl(570,1800,1.05,pour);cat3(760,1800,1.0,{t,eyes:pour>0?'happy':'open',mouth:pour>0?'smile':'flat',look:[-.6,.3],purr:pour>0,brow:pour>0?null:'angry',lid:pour>0?0:.4});
 if(pour>=1&&r>POUR+.5)sparkles(570,1650,C((r-POUR-.5)/.8),8,140);
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.0)/.3)),'Memopai','🐱 Time to feed the cat!')});
// G: same beach, golden hour, phone face down on the towel, eyes closed, sorted
sh(T('p1')-.08,(t,r)=>{cam(540,1080,lerp(1.03,1.07,C(r/3.6)),t,.08);
 beachSet(t,1);beachTowel(LX+60,1600,.0001);phoneH(LX+230,SEAT+10,1.5,0,'',1);
 youSit(t,{eyes:'closed',brow:'up',mouth:'smile',blush:1,look:[0,0],lean:-8,armR:150,bendR:-150,armL:150,bendL:-150});
 if(r>.6)sparkles(LX,HD(SY,SS)-150,C((r-.6)/1.4),10,220,'#fff1a0');
 label3('You, on holiday 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: you shocked on the lounger + the cat cam big next to you
sh(1000,(t,r)=>{cam(540,860,1.0,t,0);beachSet(t,0);
 youSit(t,{eyes:'wide',brow:'worried',mouth:'o',look:[.6,.1],sweat:1,armR:110,bendR:-110,holdR:(x,y)=>phoneH(x+8,y,.1,1),armL:30,bendL:20});
 catcam(730,1250,.6,t,{fill:0,glare:1,day:'Day 3'})});
