// 2026-11-26 09:00 "Is that your car? They're towing it!" (street-cleaning day)
// craft ladder (look3.js): parkSign3() street-cleaning no-parking sign, sweeper3() street-sweeper truck with spinning brush
const YOU={hair:'curl',pj:'#7cc3f0',limb:'#2b3550'};
const HER={hair:'bun',hairc:'#e2508a',lashes:1,pj:'#f2b36a',limb:'#3a3550'};
const NB={hair:'spike',hairc:'#c9c9c9',pj:'#9c4f3a',limb:'#3a3030'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function slippers(x,y,s=1){for(const d of[-1,1]){X.save();X.translate(x+d*58*s,y+4);X.scale(s,s);ell(0,0,46,20,'#f6a6c1',5);circ(-26*d,-14,13,'#fff',4);X.restore()}}
// a dirty car: pcar + dust patches + finger-written WASH ME on the door
function dirtyCar(x,y,s,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);pcar(0,0,s,{t:o.t||0,flip:o.flip,col:'#d9544a',col2:'#b33d33'});
 X.save();X.scale(s*(o.flip?-1:1),s);X.globalAlpha=.55;for(let k=0;k<26;k++){circ(-420+rnd(k+11)*840,-250+rnd(k+3)*160,14+rnd(k+7)*30,'#8a7a62',0)}
 X.globalAlpha=.5;for(let k=0;k<10;k++)circ(-300+rnd(k+51)*600,-430+rnd(k+33)*140,10+rnd(k+2)*16,'#8a7a62',0);X.restore();
 X.save();X.scale(s,s);X.rotate(-.04);txt('WASH ME',0,-185,62,'#fff4e0',0,'900 ');X.restore();
 X.restore()}
// street morning (pale, early)
function morning(t){street3(t,{});X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(190,200,230,.28)';X.fillRect(-3000,-3000,8000,8000);X.restore()}

// A1: 07:00, the tow truck hauls your car away; you in pyjamas + slippers, neighbour in his dressing gown with a mug
function shotA(t,r,cov){cam(560,1040,lerp(1.0,1.05,C(r/3)),t,.12);morning(t);
 const tx=lerp(-30,-80,C(r/3));towtruck(tx,1290,.55,{t,flip:1,spin:4});
 const hx=tx+600*.55;line([[hx-60,1290-235*.55],[hx+40,1290-430*.55]],10,'#3b4250');
 dirtyCar(hx+260,1170,.55,{t,flip:1,rot:.2});
 const run=Math.sin(t*9);
 sm(290,1780,1.05,Object.assign({t,eyes:'wide',brow:'worried',mouth:'open',sweat:1,look:[.2,-.4],armL:150+run*10,bendL:-30,armR:150-run*10,bendR:-30,tilt:-4},YOU));slippers(290,1780,1.05);
 sm(845,1780,.95,Object.assign({t,flip:1,eyes:'open',lid:.2,brow:'up',mouth:!cov&&r<2.6?'open':'o',talk:!cov&&r<2.6?t:null,look:[-.8,-.1],armR:95,bendR:-95,holdR:(x,y)=>pmug(x,y+20,1.1,'#ffffff'),armL:20},NB));
 if(!cov)label3('You, 07:00 😱',C((r-.1)/.2))}
sh(0,(t,r)=>shotA(t,r));
// A2: close-up: your car rising on the hook, WASH ME in the dust; you deadpan in front
sh(T('h1')-.08,(t,r)=>{cam(560,1080,lerp(1.06,1.12,C(r/3.3)),t,.12);morning(t);
 const lift=eo(C(r/2.5));
 line([[150,600],[220,1020-lift*80]],12,'#3b4250');
 dirtyCar(600,1330-lift*90,.82,{t,flip:1,rot:.06+lift*.12});
 const dep=r>1.6;
 sm(330,1820,1.2,Object.assign({t,eyes:dep?'open':'wide',lid:dep?.45:0,brow:dep?'flat':'worried',mouth:dep?'flat':'wavy',sweat:!dep,look:dep?[.9,0]:[.6,-.3],armL:15,armR:15},YOU));slippers(330,1820,1.2);
 label3('Your car, again 🙃',C(r/.2))});
// B: Monday night, dusk: you walk past your car + the sign, 'later 🙃' thought; Memopai hops in
sh(T('s1')-.08,(t,r)=>{cam(540,1060,lerp(1.02,1.07,C(r/2.4)),t,.12);street3(t,{dusk:1});
 pcar(560,1300,.52,{t,col:'#d9544a',col2:'#b33d33'});
 parkSign3(760,1420,.8,{t,rust:1,cob:1});
 const wx=lerp(260,380,C(r/1.2));
 sm(wx,1780,1.12,Object.assign({t,walk:r<1.2?t:null,eyes:'open',lid:.4,brow:'flat',mouth:'smirk',look:[.7,-.2],armR:95,bendR:-95,holdR:(x,y)=>phoneH(x,y,-.1,0)},YOU));
 const hy=HD(1780,1.12);
 thought3(500,hy-200,110,C((r-.25)/.3)*(1-C((r-1.0)/.15)),wx+60,hy-120,(x,y)=>{txt('later 🙃',x,y+6,54,'#151515',0,'900 ')});
 const mp=C((r-1.15)/.5);if(mp>0){memo(560,1052,.62,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(560,900,mp,10,180)}
 label3(mp>0?'Memopai 👋':'You, every Monday 🙃',C((mp>0?r-1.15:r)/.2))});
// C: the WhatsApp chat: one voice note, Memopai confirms for both of you, partner accepts
sh(T('s2')-.08,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#1d2350');g.addColorStop(1,'#2b3a6e');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>1.5&&r<2.2,list:[{a:.1,me:1,voice:1,pl:C((r-.15)/1.4),dur:'0:05',time:'21:04'},{a:2.2,me:0,text:'Got it ✅ Every Monday 20:00 · you + your partner: move the car 🚗',time:'21:04'},{a:3.6,date:'Partner tapped Accept ✓'}]})});
// D: Monday 20:00, living room: both phones buzz; you're closer, you grab the keys
sh(T('s3')-.08,(t,r)=>{cam(540,1040,lerp(1.02,1.06,C(r/3)),t,.1);
 proom(t,{night:1,lamp:880,win:220,curtain:'#7f95c9',curtain2:'#6276ad',plant:0});
 psofa(560,1700,1.15,'#d9775a','#b85e44');
 const bz=r>.25,up=r>1.6,j=bz&&r<1.4?Math.sin(t*60)*3:0;
 sm(720,1640,1.0,Object.assign({t,eyes:bz?'open':'open',brow:'up',mouth:up?'smile':'o',look:up?[-.8,-.3]:[0,.6],armR:110,bendR:-110,holdR:(x,y)=>phoneH(x+j,y,.1,bz),armL:20,bendL:-40},HER,SIT));
 if(!up)sm(400,1640,1.0,Object.assign({t,eyes:bz&&r<.9?'wide':'open',brow:'up',mouth:bz?'o':'smile',look:[0,.6],armR:110,bendR:-110,holdR:(x,y)=>phoneH(x-j,y,-.1,bz),armL:20,bendL:-40},YOU,SIT));
 else sm(380,1790,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,-.2],armR:105,bendR:-70,holdR:(x,y)=>keys3(x,y+10,1.4,{glow:1}),armL:20},YOU));
 const n=C((r-.3)/.25)*(1-C((r-1.5)/.25));if(n>0)notif(338,n,'Memopai','Move the car 🚗 (Mon 20:00)');
 if(n<=0&&r>1.5)label3('You two, Monday 20:00 📱',C((r-1.5)/.2))});
// E: payoff: Tuesday 07:00, you both asleep; through the window the sweeper passes your empty kerb
sh(T('p1')-.08,(t,r)=>{cam(540,1040,lerp(1.02,1.06,C(r/4)),t,.1);
 proom(t,{win:540,curtain:'#7f95c9',curtain2:'#6276ad',lamp:0,plant:0,wall:'#f6e4cc',wall2:'#ead0ad'});
 X.save();X.beginPath();X.rect(350,280,380,520);X.clip();X.fillStyle='#7d858d';X.fillRect(340,700,400,110);X.fillStyle='#c9c4ba';X.fillRect(340,690,400,14);
 sweeper3(lerp(860,250,C((r-.1)/3.8)),790,.32,{t,spin:-8,flip:1});X.restore();
 hotelbed(540,1760,.82,{hb:'#7f95c9',hb2:'#6276ad'});
 const br=Math.sin(t*1.6)*4;
 X.save();X.beginPath();X.rect(-500,-500,2100,1900);X.clip();for(const [px,who,tl] of [[400,YOU,10],[680,HER,-10]]){sm(px,2040,.9,Object.assign({t,eyes:'closed',brow:'flat',mouth:'smile',tilt:tl,look:[0,0],armL:10,armR:10},who))}X.restore();
 X.save();X.translate(540,1760);X.scale(.82,.82);const dg=X.createLinearGradient(0,-430,0,-60);dg.addColorStop(0,'#ffffff');dg.addColorStop(1,'#dfe5f2');X.fillStyle=dg;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.roundRect(-600,-470+br,1200,420,60);X.fill();X.stroke();X.fillStyle='#c0504d';X.fillRect(-600,-200+br,1200,60);X.restore();
 hotelbed(540,1760,.82,{front:1,run:'#c0504d'});
 const z=C((r-.6)/.4);if(z>0){X.save();X.font="800 64px Inter";X.fillStyle='#ffffff';X.strokeStyle='#151515';X.lineWidth=8;X.textAlign='center';for(let k=0;k<3;k++){const zz=((t*.5+k/3)%1);X.globalAlpha=z*(1-zz);X.font=`800 ${44+k*14}px Inter`;X.strokeText('z',300-zz*80,1060-zz*180);X.fillText('z',300-zz*80,1060-zz*180)}X.restore()}
 label3('You, sorted 😴',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only frame: shot A without the label
sh(1000,(t,r)=>shotA(t,1.4,1));
