// craft ladder: troll() toilet/kitchen/empty roll, rolltower(), rollpack(), bathdoor() hallway bathroom door ajar, reachArm() (look3.js)
const YOU={hair:'curl'};
const FM={hair:'spike',hairc:'#7a4a2a',pj:'#6fb36a',limb:'#4f8a4a'}; // flatmate: green hoodie
const FR={hair:'spike',hairc:'#151515'}; // dinner guest: orange shirt
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function eve(a=.35){X.save();X.globalCompositeOperation='multiply';X.fillStyle=`rgba(150,120,190,${a})`;X.fillRect(-3000,-3000,8000,8000);X.restore()}
const DX=590; // bathroom door centre
// A: 0.0 hallway, evening: a hand pokes out of the bathroom door
function shotA(t,r,lab){cam(560,1080,lerp(1.04,1.1,C(r/2.7)),t,.15);
 bathdoor(t,{open:.13,dx:DX,lamp:180,night:0});eve(.3);glow(180,800,420,'255,214,150',.45);
 const gx=DX+180-36,wv=Math.sin(t*7)*14;reachArm(gx+10,860,gx+120,880+wv,1.15);
 const snap=r>1.1;
 sm(300,1800,1.22,Object.assign({t,eyes:snap?'wide':'open',brow:snap?'worried':'up',mouth:snap?'o':'smile',sweat:snap,look:[.7,-.1],tilt:-3,armL:20,bendL:20,armR:20,bendR:20},YOU));
 if(lab)label3('Your dinner guest 😬',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: the reveal: you pass KITCHEN ROLL through the gap
function shotB(t,r,lab,cv){if(cv)cam(560,800,1.02,t,0);else cam(600,1060,lerp(1.12,1.18,C(r/3)),t,.12);
 bathdoor(t,{open:.13,dx:DX,lamp:180});eve(.3);glow(180,800,420,'255,214,150',.45);
 const gx=DX+180-36,give=eo(C((r-.2)/.6));
 sm(400,1800,1.2,Object.assign({t,eyes:'open',lid:.1,brow:'worried',mouth:'wavy',sweat:1,blush:1,look:[.8,0],armL:15,bendL:25,armR:95,bendR:-5,
  holdR:(x,y)=>{troll(x+30,y-20,.9,{kitchen:1,rot:.08})}},YOU));
 reachArm(gx+10,860,lerp(gx+150,gx+80,give),lerp(900,960,give),1.15);
 if(lab)label3('You at 21:10 😳',C(r/.2))}
sh(T('h1')-.12,(t,r)=>shotB(t,r,1));
// C: you + flatmate point at each other over the empty tube; Memopai hops in
sh(T('s1')-.08,(t,r)=>{cam(540,1100,lerp(1.04,1.09,C(r/2.8)),t,.15);
 proom(t,{win:null,frame:[540,560],plant:0,lamp:0,wall:'#efd9bf',wall2:'#dcc0a0'});eve(.25);glow(540,600,520,'255,214,150',.35);
 const pt=Math.sin(t*9)*6;
 sm(300,1800,1.12,Object.assign({t,eyes:'open',brow:'angry',mouth:'open',look:[.7,0],armR:88+pt,bendR:0,armL:15,bendL:20},YOU));
 sm(780,1800,1.12,Object.assign({t,flip:1,eyes:'open',brow:'angry',mouth:'open',look:[.7,0],armR:88-pt,bendR:0,armL:15,bendL:20},FM));
 const mp=C((r-1.75)/.5);
 troll(540,1640,1.25,{empty:1,rot:Math.sin(t*2)*.05});
 if(mp>0){memo(540,1500,.42,{t,hop:mp,wave:mp>=1,glow:1});if(mp<1)sparkles(540,1330,mp,8,140)}
 label3('You + your flatmate 🫠',C(r/.2))});
// D: next morning: one voice note; the 🧻 flies into the phone
const E0=T('s2')+2.55;
sh(T('s2')-.08,(t,r)=>{cam(560,1100,1.06,t,.15);proom(t,{win:780,plant:150,lamp:0,wall:'#f4e3c9',wall2:'#e8cda8'});glow(780,560,560,'255,246,200',.45);
 memo(790,1640,.58,{t,wave:1,glow:1});
 const s=1.2,y=1820,hy=y-845*s;
 sm(370,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'open',talk:r<2.2?t:null,look:[.3,.4],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,.1,1),armR:20,bendR:20},YOU));
 const fl=C((r-.4)/.9);if(fl<1){const px=lerp(680,330,eo(fl)),py=lerp(hy-120,hy+170,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'🧻 every Sunday',1-fl*.6)}else sparkles(330,hy+160,C((r-1.3)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.2))});
// E: the chat
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a4a62');g.addColorStop(1,'#e9b98a');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.7&&r<1.0,list:[{a:0,me:1,voice:1,pl:C(r/.7),dur:'0:04',time:'10:02'},{a:1.0,me:0,text:'Got it ✅ Every Sunday 11:00 · You + Luka (flatmate) · 🧻 Toilet paper',time:'10:02'},{a:1.9,date:'Luka tapped Accept ✅ · no app needed'}]})});
// F: Sunday 11:00: both phones buzz; the flatmate comes in with a jumbo pack
sh(T('s3')-.08,(t,r)=>{cam(560,1100,lerp(1.04,1.09,C(r/4)),t,.15);hallway(t,{dx:740});glow(740,620,420,'255,250,220',.35);
 const buzz=r<2.1,hop=C((r-2.1)/.4),hh=Math.sin(hop*Math.PI)*60;
 if(buzz){sm(320,1810,1.12,Object.assign({t,eyes:'open',brow:'up',mouth:'smile',look:[.2,.4],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,.1,Math.sin(t*20)>0)},YOU));
  sm(760,1810,1.12,Object.assign({t,flip:1,eyes:'open',brow:'up',mouth:'smile',look:[.2,.4],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,-.1,Math.sin(t*20+1)>0)},FM));
  notif(338,C(r/.3)*(1-C((r-1.8)/.3)),'Memopai','🧻 Sunday: toilet paper check!')}
 else{sm(320,1810,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,-.2],armL:-150,bendL:20,armR:-150,bendR:-20},YOU));
  const fy=1810-hh;sm(740,fy,1.12,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[-.3,-.1],armL:60,bendL:-60,armR:60,bendR:-60},FM));
  rollpack(740,fy-560,.78,{});if(r>2.3)sparkles(760,700,C((r-2.3)/1),10,240);
  label3('Your flatmate 🦸',C((r-2.1)/.2))}});
// G: same door: the same friend, out of the bathroom, pointing back at the tower
sh(T('b2')-.1,(t,r)=>{cam(560,1080,lerp(1.04,1.1,C(r/2.6)),t,.15);
 bathdoor(t,{open:.85,dx:DX,lamp:180,inside:()=>rolltower(DX+40,1290,.42,{t,wob:.4})});eve(.3);glow(180,800,420,'255,214,150',.45);
 sm(330,1800,1.15,Object.assign({t,eyes:'wide',brow:'up',mouth:r<2.2?'open':'grin',talk:r<2.2?t:null,look:[.8,-.1],armR:80,bendR:-15,armL:15,bendL:20},FR));
 label3('Same friend 😂',C(r/.2))});
// H: dinner, both laughing; you, sorted
sh(T('p1')-.08,(t,r)=>{cam(540,1120,lerp(1.04,1.08,C(r/3.5)),t,.12);
 bathdoor(t,{open:0,dx:DX,lamp:180});eve(.22);glow(540,900,700,'255,210,150',.45);
 sm(320,1820,1.14,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.6,0],tilt:Math.sin(t*6)*3,armL:20,bendL:20,armR:40,bendR:-60},YOU));
 sm(720,1820,1.1,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[.6,0],tilt:-Math.sin(t*6)*3,armR:70,bendR:-70,armL:20,bendL:20,holdR:(x,y)=>troll(x,y-70,.8,{})},FR));
 if(r>.5)sparkles(540,760,C((r-.5)/1.4),12,300);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: the reveal frame
sh(1000,(t,r)=>shotB(t,1.2,0,1));
