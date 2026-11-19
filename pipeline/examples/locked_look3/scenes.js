const YOU={hair:'curl'},SON={hair:'spike',hairc:'#4a3426',cap:'#e0533d',pj:'#3d7fd0',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);
  rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,'#8fd0ff',0);rr(-110,-190,160,18,6,'#fff',0);rr(-110,-160,200,14,6,'#d8ecff',0);rr(-110,-130,180,14,6,'#d8ecff',0);X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,'#e86a5a');if(o.steam){X.save();X.globalAlpha=.5;for(let k=0;k<2;k++)line([[-320+k*30,-110+Math.sin(o.steam*3+k)*6],[-330+k*30,-150],[-315+k*30,-190]],6,'#ffffff');X.restore()}}
 if(o.phoneDown){rr(-120,-22,150,22,8,'#1b1b1f',4)}
 X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));if(o.clock)wclock(o.cx||250,470,.85,o.clock[0],o.clock[1])}
function living(t){proom(t,{night:1,lamp:1,win:780,frame:[250,520],plant:1,wall:'#e9d6bd',wall2:'#d6bd9c'})}
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);

// A: 15:42, you at your office desk, the text from your son drops in
function shotA(t,r,lab){cam(540,1040,lerp(1.04,1.12,C(r/3.5)),t,.12);office(t,{clock:[3,42],cx:250});
 const bz=r>.35;
 sm(560,1990,1.25,Object.assign({t,eyes:bz?'wide':'open',brow:bz?'worried':'flat',mouth:bz?'o':'flat',sweat:r>1.4,look:bz?[-.2,.6]:[.4,0],armR:bz?135:30,bendR:bz?-140:20,holdR:(x,y)=>phoneH(x,y+10,-.15,bz),armL:30,bendL:20},YOU));
 desk(540,1450,1.0,{laptop:1,lx:230,mug:1});
 if(bz){const sh2=Math.sin(t*60)*4;X.save();X.globalAlpha=.55;for(let k=1;k<3;k++)circ(410+sh2,1090,40+k*22,null,5);X.restore()}
 if(r>.35&&r<2.5)notif(338,C((r-.35)/.3),'Son 🧢','locked out 🙃');
 if(lab&&r>=2.5)label3('You, 15:42 😩',C((r-2.5)/.2))}
sh(0,(t,r)=>shotA(t,r,1));

// B: 16:05 rain: your son on the doorstep, you arrive with an umbrella, push into the window: keys on the hook
const B0=T('s1'),BZ=1.7;
function shotB(t,r,lab){const zp=eo(C((r-BZ)/.6));cam(lerp(560,250,zp),lerp(1080,690,zp),lerp(1.04,2.3,zp),t,.1);
 housefront(t,{rain:1,keys:1,glowKeys:C((r-BZ-.3)/.4)});
 const s=.95,top=1300;sm(540,top+340*s,s,sitO(Object.assign({t,flip:0,eyes:'open',lid:.35,brow:'sad',mouth:'wavy',tear:0,sweat:1,look:[.6,.2],armL:150,bendL:-150,holdL:(x,y)=>phoneH(x,y+10,.2,1),armR:30,bendR:20},SON)));
 const wx=lerp(1340,790,eo(C(r/1.1)));sm(wx,1800,1.0,Object.assign({t,flip:1,walk:r<1.1?t:null,eyes:'open',lid:.3,brow:'flat',mouth:'flat',look:[-.6,.1],armR:150,bendR:-150,holdR:(x,y)=>umbrella3(x,y,1.0,{rot:-.1,col:'#4a8fe0'}),armL:20,bendL:10},YOU));
 prain(t,.65,95);
 if(lab)label3(r<BZ+.2?'Your kid, 16:05 🌧️':'The keys 🔑',C((r<BZ+.2?r:r-BZ-.2)/.2))}
sh(B0,(t,r)=>shotB(t,r,1));

// C: that night on the sofa: Memopai hops onto the sofa arm, the 🔑 thought flies into your phone
const C0=T('s2'),D0=T('s2')+2.6;
sh(C0,(t,r)=>{cam(560,1050,1.06,t,.15);living(t);glow(250,700,600,'255,210,140',.35);
 psofa(460,1900,1.3,'#5a7fb5','#4a6a9a');
 const mp=C((r-.05)/.5);if(mp>0){memo(860,1330,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(860,1020,mp,8,180)}
 const y=2107,s=1.22,hy=HD(y,s);
 sm(400,y,s,Object.assign({t,flip:1,legL:82,kneeL:82,legR:-82,kneeR:-82,eyes:'open',brow:'up',mouth:'smile',look:[.3,.4],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,.1,1),armR:40,bendR:-30},YOU));
 const fl=C((r-.6)/.9);if(fl<1){const px=lerp(560,520,eo(fl)),py=lerp(hy-330,hy+250,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'🔑 keys · 7:40',1-fl*.6)}else sparkles(520,hy+250,C((r-1.5)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.2))});

// D: your chat with Memopai: weekday reminder to your son, he accepts once
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const acc=T('s3')-D0+1.2;
 phoneUI(540,900,1.28,r,{typing:r>.9&&r<1.25,list:[{a:.0,me:1,text:'👤 Son 🧢 (contact)',time:'21:12'},{a:.2,me:1,text:'Weekdays 7:40, remind my son: keys! 🔑',time:'21:12'},{a:1.25,me:0,text:'✅ Every weekday 07:40 → Son 🧢 · 🔑 Keys!',time:'21:12'},{a:acc,date:'Son 🧢 tapped Accept ✓'}]});
 if(r>acc&&r<acc+.8)glow(540,700,400,'130,240,160',.3*(1-C((r-acc)/.8)))});

// E: next morning, hallway: your son putting his shoes on, brain "still loading"; 07:40 ping, he grabs the keys
const E0=T('f1'),PG=T('s4')-E0-.15;
function hookBoard(x,y,keysOn,t){rr(x-90,y-20,180,40,8,'#7a5a3a',5);line([[x,y+18],[x,y+40]],7,'#555');if(keysOn)keys3(x,y+36,.85,{rot:Math.sin(t*2)*.08})}
sh(E0,(t,r)=>{const on=r>PG,gr=C((r-PG-.6)/.5);cam(540,1040,lerp(1.04,1.1,C(r/7)),t,.12);hallway(t,{dx:780,clock:0});wclock(545,520,.6,7,on?40:39);
 hookBoard(470,720,gr<.5,t);
 const s=1.18,y=1780;
 const reach=on&&gr<1;
 sm(380,y,s,Object.assign({t,flip:0,eyes:on?(gr>=1?'happy':'open'):'open',lid:on?0:.4,brow:on?'up':'flat',mouth:gr>=1?'grin':(on?'o':'flat'),look:on?[.6,-.4]:[.2,.5],
  armR:reach?165:(gr>=1?40:40),bendR:reach?-10:20,armL:on&&!reach?120:30,bendL:on&&!reach?-120:20,holdL:on&&!reach?(x,yy)=>phoneH(x,yy+10,.15,1):null,
  holdR:gr>=1?(x,yy)=>keys3(x,yy-20,.7,{rot:.2}):(reach&&gr>.4?(x,yy)=>keys3(x,yy-20,.85,{rot:0}):null)},SON));
 if(!on){loadbar(470,HD(y,s)-250,.8,.72,t)}
 if(on){const sh2=Math.sin(t*60)*4;if(r<PG+.8){X.save();X.globalAlpha=.55;for(let k=1;k<3;k++)circ(200+sh2,1060,40+k*22,null,5);X.restore()}}
 if(on&&r<PG+1.3)notif(338,C((r-PG)/.3),'Memopai','⏰ 07:40 · 🔑 Keys!');
 if(!on)label3('His brain: loading 🚧',C(r/.2));else if(r>=PG+1.3)label3('Your kid, 07:40 🔑',C((r-PG-1.3)/.2))});

// F: 15:42 sunshine: he unlocks the front door himself
const F0=T('p1'),G0=T('p1')+2.5;
sh(F0,(t,r)=>{cam(640,1050,lerp(1.05,1.12,C(r/2.5)),t,.1);housefront(t,{sun:1,door:C((r-1.2)/.6)});
 const s=1.12;sm(760,1810,s,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[-.4,-.2],armR:95,bendR:-20,holdR:(x,y)=>keys3(x-10,y-30,.8,{rot:Math.sin(t*10)*.5}),armL:20,bendL:10},SON));
 label3('Your kid, 15:42 ☀️',C(r/.2))});

// G: you at your desk, coffee, phone face down
sh(G0,(t,r)=>{cam(540,1040,lerp(1.05,1.1,C(r/2)),t,.1);office(t,{clock:[3,43],cx:250});glow(780,500,500,'255,240,200',.35);
 sm(560,1990,1.25,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:1,look:[-.3,0],armL:110,bendL:-120,holdL:(x,y)=>{rr(x-40,y-80,80,90,14,'#4a8fe0',6)},armR:30,bendR:20},YOU));
 desk(540,1450,1.0,{laptop:1,lx:230,phoneDown:1});
 X.save();X.globalAlpha=.45;for(let k=0;k<2;k++)line([[700+k*30,HD(1990,1.25)+160+Math.sin(t*3+k)*6],[690+k*30,HD(1990,1.25)+120],[705+k*30,HD(1990,1.25)+80]],6,'#fff');X.restore();
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotB(t,1.25,0));
