// 20:00 PRODUCTIVITY 2026-11-20: "18:40. The dog's waiting at the door. With his leash."
// craft ladder: leash3() red dog leash with handle loop (mouth -> floor), headphones3() over-ear headphones for sm(),
// pad3() game controller, doorOpen() open front doorway with dusk/day light, pawPrints() muddy prints.
const YOU={hair:'curl'},KID={hair:'spike',hairc:'#4a3426',pj:'#e0533d',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function leash3(x1,y1,x2,y2,sag=120,col='#e0533d'){X.save();X.lineCap='round';
 X.strokeStyle='#151515';X.lineWidth=20;X.beginPath();X.moveTo(x1,y1);X.quadraticCurveTo((x1+x2)/2,Math.max(y1,y2)+sag,x2,y2);X.stroke();
 X.strokeStyle=col;X.lineWidth=11;X.stroke();
 X.lineWidth=20;X.strokeStyle='#151515';X.beginPath();X.ellipse(x2,y2+34,26,40,0,0,7);X.stroke();X.lineWidth=11;X.strokeStyle=col;X.stroke();
 circ(x1,y1,10,'#c9ced6',5);X.restore()}
function headphones3(hx,hy,s=1){X.save();X.translate(hx,hy);X.scale(s,s);X.lineCap='round';
 X.strokeStyle='#151515';X.lineWidth=26;X.beginPath();X.arc(0,10,190,Math.PI*1.08,Math.PI*1.92);X.stroke();X.strokeStyle='#3d7fd0';X.lineWidth=14;X.stroke();
 for(const d of[-1,1]){rr(d*190-34,-40,68,110,30,'#3d7fd0',7);rr(d*190-20,-24,40,78,18,'#2b5fa8',0)}X.restore()}
function pad3(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);path(()=>{X.moveTo(-70,-26);X.quadraticCurveTo(0,-40,70,-26);X.quadraticCurveTo(100,30,70,40);X.quadraticCurveTo(40,46,24,18);X.lineTo(-24,18);X.quadraticCurveTo(-40,46,-70,40);X.quadraticCurveTo(-100,30,-70,-26);X.closePath()},'#2a2f3a',6);
 circ(40,-6,8,'#e0533d',0);circ(56,6,8,'#7bb36a',0);rr(-56,-10,30,10,3,'#c9ced6',0);rr(-46,-20,10,30,3,'#c9ced6',0);X.restore()}
function doorOpen(dx,t,day){X.save();const g=X.createLinearGradient(0,450,0,1250);if(day){g.addColorStop(0,'#ffcf8a');g.addColorStop(1,'#ff9f6b')}else{g.addColorStop(0,'#394a7a');g.addColorStop(1,'#e98b6b')}
 X.fillStyle=g;X.fillRect(dx-170,450,340,800);X.globalAlpha=.6;X.fillStyle='#2f4a3a';X.beginPath();X.ellipse(dx-60,1250,180,90,0,Math.PI,0);X.fill();X.globalAlpha=1;
 // open door leaf swung in to the left
 path(()=>{X.moveTo(dx-170,450);X.lineTo(dx-250,420);X.lineTo(dx-250,1290);X.lineTo(dx-170,1250);X.closePath()},'#3f7f9e',7);X.restore();glow(dx,850,380,day?'255,210,150':'255,170,130',.35)}
function pawPrints(x,y,n,s=1){X.save();X.globalAlpha=.75;for(let k=0;k<n;k++){const px=x+k*70*s,py=y+((k%2)?24:-10)*s;ell(px,py,16*s,13*s,'#7a5232',0);for(let j=-1;j<=1;j++)ell(px+j*13*s,py-18*s,6*s,6*s,'#7a5232',0)}X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+50;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);
// dog mouth (world) for dog(x,y,s): head centre (x+70s, y-345s), mouth ~ +56 below centre
const dogMouth=(x,y,s,fl)=>[x+(70+30)*s*(fl?-1:1),y-(345-62)*s];

// A + F share the SAME framing: hallway, front door open at x 760, you step in; the dog in front of you
function hallDoor(t,r,o){const day=o.day;hallway(t,{dx:760,plant:0});doorOpen(760,t,day);
 if(o.prints)pawPrints(170,1620,7,1.0);
 const s=1.12,y=1820;
 sm(740,y,s,Object.assign({t,flip:1,eyes:o.ye||'wide',brow:o.yb||'up',mouth:o.ym||'o',look:o.yl||[-.6,.5],armR:30,bendR:15,armL:o.yarm||30,bendL:o.ybend||15,holdL:o.yhold||null,blush:o.yblush},YOU));
 // the dog: legs-crossed jiggle when waiting, wag + tongue when happy
 const ds=1.0,dx=o.dx||330,dy=1580,jig=o.wait?Math.sin(t*26)*5:0;
 dog(dx+jig,dy,ds,{t,eyes:o.wait?'puppy':'happy',mouth:o.wait?'smile':'open',tongue:!o.wait,wag:!o.wait,tilt:o.wait?-6:8});
 const [mx,my]=dogMouth(dx+jig,dy,ds,0);
 if(o.wait){leash3(mx,my,mx+40,1560,70);ell(mx,my,22,12,'#e0533d',5);
  // sweat + crossed back paws
  X.save();X.translate(dx+jig-40,dy-14);line([[-40,0],[40,-6]],18,'#151515');line([[-40,-8],[40,4]],18,'#151515');X.restore();
  if(Math.sin(t*4)>0)ell(dx+jig+180,dy-430,12,18,'#7fd3ff',4)}
 if(o.kid)sm(o.kx||560,y-20,.92,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[-.4,-.2],armL:60,bendL:-30,holdL:(x,yy)=>leash3(mx+10,my+6,x,yy-30,60),armR:150,bendR:-20},KID));
}
// A: 18:40, you open the door. Camera starts on your face, then drops to reveal the dog with his own leash
function shotA(t,r,lab){const z=eo(C((r-1.2)/.7));cam(lerp(700,540,z),lerp(820,1060,z),lerp(1.55,1.05,z),t,.12);
 hallDoor(t,r,{wait:1,ye:r>1.6?'wide':'open',ym:r>1.6?'o':'smile',yb:r>1.6?'up':'flat',yl:r>1.6?[-.7,.6]:[-.2,0]});
 if(lab&&r>2.0)label3('You at 18:40 😳',C((r-2.0)/.2))}
sh(0,(t,r)=>shotA(t,r,1));

// B: living room: your kid on the sofa, headphones, controller: "He didn't ask!"
const B0=T('k1')-.1;
function living(t,day){proom(t,{night:day?0:1,lamp:day?0:1,win:780,frame:[250,520],plant:1,wall:'#e9d6bd',wall2:'#d6bd9c'})}
function kidSofa(t,r,o){psofa(540,1900,1.35,'#5a7fb5','#4a6a9a');
 const y=2040,s=1.12,hy=HD(y,s);const sh2=o.shrug?C((r-o.shrug)/.25):0;
 sm(540,y,s,sitO(Object.assign({t,eyes:o.e||'open',lid:o.lid||0,brow:o.b||'flat',mouth:o.m||'flat',look:o.l||[0,.4],talk:o.talk,
  armL:o.armL!=null?o.armL:lerp(120,160,sh2),bendL:o.bendL!=null?o.bendL:lerp(-120,-60,sh2),armR:o.armR!=null?o.armR:lerp(-120,-160,sh2),bendR:o.bendR!=null?o.bendR:lerp(120,60,sh2),
  holdR:o.pad?(x,yy)=>pad3(x-40,yy-10,1,-.1):null,holdL:o.holdL||null},KID)));
 if(o.hp)headphones3(540,hy+60,1.12*.98);
 return hy}
sh(B0,(t,r)=>{cam(540,1050,lerp(1.08,1.14,C(r/2.6)),t,.12);living(t,0);glow(840,620,500,'130,180,255',.25);
 const talk=r>.15&&r<1.1;kidSofa(t,r,{hp:1,pad:1,shrug:.15,e:'open',b:'up',m:talk?'open':'smirk',talk:talk?t:null,l:[0,0]});
 label3('Your kid 🎮',C(r/.2))});

// C: hallway, you with the dog; tiny to-dos circle your head. Memopai hops onto the shelf; the 🐕 card flies into your phone
const C0=B0+2.6,MEM=T('n1')+2.6-C0,VN=T('s2')-C0,D0=T('s2')+2.5;
function shelf(x,y){rr(x-170,y,340,26,8,'#9a6f48',6);line([[x-120,y+26],[x-120,y+70]],10,'#7a5a3a');line([[x+120,y+26],[x+120,y+70]],10,'#7a5a3a')}
sh(C0,(t,r)=>{cam(540,1040,lerp(1.05,1.12,C(r/5)),t,.12);hallway(t,{dx:760,plant:0});
 shelf(770,1080);
 const ph=r>VN-.2,y=1820,s=1.15,hy=HD(y,s);
 dog(195,1640,.78,{t,eyes:'wide',tilt:-8,look:[.4,-.4]});
 sm(530,y,s,Object.assign({t,eyes:r<MEM?'open':'open',lid:r<MEM?.45:0,brow:r<MEM?'sad':'up',mouth:r<MEM?'wavy':'smile',look:r<MEM?[0,.2]:[.6,-.3],
  armR:ph?150:30,bendR:ph?-150:20,holdR:ph?(x,yy)=>phoneH(x,yy+10,.1,1):null,armL:r<MEM?150:-25,bendL:r<MEM?-160:-20},YOU));
 const cards=['🐕','🦷','🧾','🎁'];
 cards.forEach((c,i)=>{const a=t*1.6+i*Math.PI/2;let px=530+Math.cos(a)*220,py=hy-250+Math.sin(a)*45;let sc=.85;
  if(i==0&&r>VN+.3){const f=C((r-VN-.3)/.8);if(f>=1)return;px=lerp(px,530+150,eo(f));py=lerp(py,hy+290,eo(f));sc=.85-.5*f}
  if(i>0&&r>VN+1.2){sc=.85*(1-C((r-VN-1.2)/.5));if(sc<=0)return}
  pill(px,py,c,sc)});
 if(r>VN+1.1)sparkles(680,hy+290,C((r-VN-1.1)/.5),8,110,'#7cf0a0');
 const mp=C((r-MEM)/.5);if(mp>0){memo(770,1080,.56,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(770,880,mp,8,160)}
 if(r<MEM)label3('Your brain 🫠',C(r/.2));else label3('Memopai 😎',C((r-MEM)/.2))});

// D: your WhatsApp chat with Memopai: voice note, weekday reminder for your son, he accepts once
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const acc=T('s3')+1.3-D0;
 phoneUI(540,900,1.28,r,{typing:r>.7&&r<1.05,list:[{a:0,me:1,voice:1,pl:C(r/.7),dur:'0:04',time:'18:52'},{a:1.05,me:0,text:'✅ Every weekday 16:00 → Son 🎮 · 🐕 Walk the dog',time:'18:52'},{a:acc,date:'Son 🎮 tapped Accept ✓'}]});
 if(r>acc&&r<acc+.8)glow(540,700,400,'130,240,160',.3*(1-C((r-acc)/.8)))});

// E: 16:00 next day, living room in daylight: his phone pings "from Mom", he groans... and goes
const E0=T('s3')+2.4,PG=T('s3')+3.0-E0,K2=T('k2')-E0;
sh(E0,(t,r)=>{cam(540,1050,lerp(1.05,1.1,C(r/3.5)),t,.12);living(t,1);glow(800,560,520,'255,230,170',.4);wclock(250,560,.6,4,0);
 const on=r>PG,go=r>K2+.6;
 if(!go){const hy=kidSofa(t,r,{hp:!on,pad:!on,e:on?(r>K2?'closed':'wide'):'open',b:on?'sad':'flat',m:r>K2&&r<K2+1.1?'open':(on?'o':'flat'),talk:r>K2&&r<K2+1.1?t:null,l:on?[-.3,.5]:[0,.4],
   armL:on?120:null,bendL:on?-120:null,holdL:on?(x,yy)=>phoneH(x,yy+10,.15,1):null,armR:on?-20:null,bendR:on?20:null});
  if(on&&r<PG+.6){const s2=Math.sin(t*60)*4;X.save();X.globalAlpha=.55;for(let k=1;k<3;k++)circ(410+s2,hy+330,40+k*22,null,5);X.restore()}}
 else{psofa(540,1900,1.35,'#5a7fb5','#4a6a9a');sm(600,1840,1.08,Object.assign({t,walk:t,eyes:'open',lid:.3,brow:'flat',mouth:'smirk',look:[-.6,.3],armL:30,bendL:20,armR:40,bendR:-20},KID))}
 const dx=go?300:250;dog(dx,1650,.86,{t,eyes:'happy',mouth:'open',tongue:1,wag:1,tilt:8});
 if(go){const[mx,my]=dogMouth(dx,1650,.86,0);leash3(mx,my,560,1500,50)}
 if(on&&r<K2+.9)notif(338,C((r-PG)/.3),'Memopai','⏰ 16:00 · 🐕 Walk the dog · from Mom 💛');
 if(r<PG)label3('Your kid, 16:00 🎮',C(r/.2));else if(r>=K2+.9)label3('Your kid, 16:01 🙄',C((r-K2-.9)/.2))});

// F: payoff, IDENTICAL framing to A: 18:40, you open the door: walked dog, muddy paws, kid with the leash
const F0=T('p1')-.05;
sh(F0,(t,r)=>{cam(540,1060,lerp(1.05,1.1,C(r/3)),t,.12);
 hallDoor(t,r,{day:1,prints:1,kid:1,kx:540,dx:250,ye:'happy',yb:'up',ym:'smile',yl:[-.6,.3],yblush:1});
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,2.6,0));
