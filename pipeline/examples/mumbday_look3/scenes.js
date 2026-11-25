// 2026-11-25 12:00 PRODUCTIVITY — "'Babe? When's my mum's birthday?'"
// craft ladder (look3.js): sticky3() sticky note with an emoji icon (rot, curl, slap-in), stickyCoat3() a cloud of sticky notes stuck on a character, bouquet3() flower bouquet
const YOU={hair:'curl'};
const HIM={hair:'spike',hairc:'#5a3a2a',pj:'#3f6fb5',limb:'#2f3a55'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
// note layout relative to a character's feet (x,y,s): [dx,dy,icon,colour,rot]
const NOTES=[[-70,-520,'⚽','#ffe066',-.25],[65,-500,'🎒','#ff9ec4',.2],[-20,-400,'💊','#9fe3ff',.12],[90,-360,'🗑️','#b7f59a',-.18],[-100,-330,'🐶','#ffe066',.3],[15,-290,'📦','#ffb36b',-.1],[-60,-230,'🔑','#9fe3ff',.22],[80,-250,'🧾','#ffe066',-.3]];
function coatAt(x,y,s,t,n=NOTES.length,flap=1){stickyCoat3(x,y,s,NOTES.slice(0,n),t,flap)}
// A: 07:40 hallway: husband at the door, coat on, scratching his head; you with coffee, covered in sticky notes, deadpan
function shotA(t,r,lab,cv){if(cv)cam(540,760,1.0,t,0);else cam(540,1060,lerp(1.02,1.07,C(r/6)),t,.1);
 hallway(t,{dx:780});keyhook(300,820,1.1,0);
 const talk=!cv&&r<1.8,stare=cv||r>1.9;
 sm(790,1840,1.02,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[-.8,-.1],tilt:-5,armR:160,bendR:-120,armL:20,bendL:10},HIM));
 const y=1880,s=1.16;
 sm(380,y,s,Object.assign({t,eyes:'open',lid:stare?.45:0,brow:stare?'flat':'worried',mouth:stare?'flat':'o',look:[.9,0],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#ffd23f'),armL:20,bendL:10},YOU));
 coatAt(380,y,s,t,8,0);
 if(lab)label3('You, 07:40 😩',C((r-.1)/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close-up: more notes fly in from all sides and slap on; the 🎂 note smacks onto your forehead last
const B0=T('h1')+2.6;
sh(B0,(t,r)=>{cam(540,980,lerp(1.12,1.18,C(r/2.6)),t,.1);hallway(t,{dx:780});
 const y=1900,s=1.3,hy=HD(y,s);
 sm(520,y,s,Object.assign({t,eyes:r>1.6?'dizzy':'open',brow:'worried',mouth:r>1.6?'wavy':'o',sweat:1,look:[0,-.4],tilt:Math.sin(t*9)*(r>1.6?3:0),armL:30,bendL:20,armR:30,bendR:20},YOU));
 coatAt(520,y,s,t,8,1);
 const extra=[[-150,-480,'🎁','#ffb36b',-.3,.2,-500,-200],[150,-420,'🦮','#b7f59a',.25,.5,1500,-100],[-130,-200,'🧺','#9fe3ff',.2,.8,-600,600],[140,-230,'📅','#ffe066',-.2,1.0,1600,500]];
 for(const[dx,dy,ic,col,rot,at,fx,fy]of extra){const p=C((r-at)/.32);if(p<=0)continue;const xx=lerp(fx,520+dx*s,eo(p)),yy=lerp(fy,y+dy*s,eo(p));sticky3(xx,yy,.95*s*(p<1?1.15:1),{icon:ic,col,rot:rot+(1-p)*2})}
 const cp=C((r-1.35)/.3);if(cp>0){sticky3(lerp(-200,520+15*s,eo(cp)),lerp(300,hy-40*s,eo(cp)),1.05*s*(cp<1?1.3:1),{icon:'🎂',col:'#ff9ec4',rot:.08+(1-cp)*3});if(cp>=1&&r<1.9)impact(C((r-1.65)/.25))}
 label3('Your brain 🫠',C((r-.05)/.2))});
// C: you peel the 🎂 note off your forehead, voice-note into your phone; Memopai hops in on the right; the note flies into the phone
const C0=T('s2')-.25;
sh(C0,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/4)),t,.1);hallway(t,{dx:780});keyhook(300,820,1.1,0);
 const y=1880,s=1.16,hy=HD(y,s);
 const peel=C(r/.5),talk=r>.7&&r<3.4;
 sm(400,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,-.2],armR:120,bendR:-125,holdR:(hx,hy2)=>phoneH(hx+5,hy2-10,.15,r>.7),armL:r<.6?150:30,bendL:r<.6?-150:20},YOU));
 coatAt(400,y,s,t,Math.max(0,8-Math.floor(C((r-1.4)/2)*8)),0);
 // the cake note: on the forehead -> in your left hand -> flies to the phone
 const fl=C((r-1.0)/.8);
 if(fl<=0)sticky3(lerp(400+20*s,250,peel),lerp(hy-60*s,hy+40,peel),.95*s,{icon:'🎂',col:'#ff9ec4',rot:.08-peel*.4});
 else if(fl<1){const px=lerp(250,520,eo(fl)),py=lerp(hy+40,hy+250,eo(fl))-Math.sin(fl*Math.PI)*120;sticky3(px,py,.95*s*(1-fl*.7),{icon:'🎂',col:'#ff9ec4',rot:-.3+fl*4})}
 else if(r<2.6)sparkles(520,hy+250,C((r-1.8)/.6),8,120,'#7cf0a0');
 // the other notes peel off and drift away, one by one
 for(let k=0;k<8;k++){const p=C((r-1.4-k*.25)/.7);if(p<=0||p>=1)continue;const n=NOTES[k],sx=400+n[0]*s,sy=y+n[1]*s;sticky3(lerp(sx,520,eo(p)),lerp(sy,hy+250,eo(p))-Math.sin(p*Math.PI)*90,.9*s*(1-p*.75),{icon:n[2],col:n[3],rot:n[4]+p*3})}
 if(r>1.6&&r<3.8)glow(520,hy+250,160,'130,240,160',.35)
 const mp=C((r-.2)/.5);if(mp>0){memo(800,1560,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1260,mp,8,180)}
 label3('Memopai 😎',C((r-.2)/.2))});
// D: the chat: voice note -> Memopai's confirmation -> he accepts
const D0=T('s3')-.2;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.45&&r<.75,list:[{a:0,me:1,voice:1,pl:C(r/.6),dur:'0:04',time:'07:41'},{a:.75,me:0,text:"✅ Got it! Friday 18:00 → your husband: 🎂 Your mum's birthday is tomorrow!",time:'07:41'},{a:1.9,date:'✓ He tapped Accept'}]})});
// E: Friday 18:00 outside the mini market: HIS phone buzzes; he grins; then walks off with a big bouquet
const E0=T('f1')-.2,NT=.15;
sh(E0,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/3.2)),t,.1);shopfront(t);
 X.save();X.globalAlpha=.18;X.fillStyle='#ff9a4a';X.fillRect(-3000,-3000,8000,8000);X.restore();glow(800,500,700,'255,190,120',.35);
 const ping=r>NT,fl=r>1.9;
 if(!fl)sm(540,1860,1.12,Object.assign({t,eyes:ping?'wide':'open',brow:'up',mouth:ping?'grin':'smile',look:[0,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:20,bendL:10},HIM));
 else{sm(540,1860,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.3,0],armR:95,bendR:-95,holdR:(hx,hy)=>bouquet3(hx+10,hy-20,1.1,{t}),armL:20,bendL:10,walk:t*.6},HIM));sparkles(600,1150,C((r-1.9)/1),8,200,'#fff7b0')}
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.6)/.25)),'Memopai',"🎂 Your mum's birthday is tomorrow! 💐");
 if(r>2.0)label3('Your husband, Fri 💐',C((r-2.0)/.2))});
// F: same hallway framing as A, warm sun: no sticky notes; you sip coffee, eyes closed, smiling
sh(T('p1')-.45,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/4)),t,.1);
 hallway(t,{dx:780});glow(540,700,900,'255,226,160',.45);keyhook(300,820,1.1,1);
 const y=1880,s=1.16;
 sm(420,y,s,Object.assign({t,eyes:r>.8?'happy':'open',brow:'up',mouth:'smile',blush:r>.8,look:[.3,-.1],tilt:Math.sin(t*1.5)*2,armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU));
 sparkles(420,1000,C((r-.3)/1.2),10,240,'#fff7b0');
 label3('You, sorted 😌',C((r-.4)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.2,0,1));
