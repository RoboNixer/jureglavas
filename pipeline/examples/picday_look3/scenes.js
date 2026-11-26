// 2026-11-26 16:00 FUN FACT — "'Mum, look! My school photo!' (Picture day. Ketchup shirt, bed hair.)"
// craft ladder (look3.js): schoolPhoto3() school-portrait card (mottled blue backdrop, bad/good kid, optional gold frame), envelope3() email envelope with tag
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#5a3a22',tee:'#f4f4f4'};
const SON2={hair:'spike',hairc:'#5a3a22',jumper:'#2f4f8a'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function kitchen(t,o={}){proom(t,{win:880,plant:0,lamp:o.night?1:0,night:o.night||0,frame:null,wall:o.night?'#d6c4a6':'#f4e6cc',wall2:o.night?'#c2aa86':'#e7d0ab'});
 if(o.night)glow(560,620,600,'255,205,130',.45);else if(o.warm)glow(540,900,820,'255,210,140',o.warm);else glow(540,700,620,'255,236,190',.4)}
function hanger(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);line([[0,-120],[0,-150]],7,'#555');X.beginPath();X.arc(12,-160,14,Math.PI,Math.PI*2.2);X.strokeStyle='#555';X.lineWidth=7;X.stroke();
 X.beginPath();X.moveTo(-120,-50);X.lineTo(0,-120);X.lineTo(120,-50);X.lineTo(150,10);X.lineTo(105,30);X.lineTo(95,180);X.lineTo(-95,180);X.lineTo(-105,30);X.lineTo(-150,10);X.closePath();X.fillStyle='#f7f9ff';X.fill();X.strokeStyle='#151515';X.lineWidth=7;X.stroke();
 line([[0,-115],[0,175]],4,'#c9d2e6');for(const yy of[-60,0,60,120])circ(10,yy,6,'#9aa7c4',0);X.restore()}
function comb(x,y,s=1,rot=-.5){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-70,-14,140,28,8,'#ff7ab0',5);for(let i=-60;i<=60;i+=12)line([[i,12],[i,40]],5,'#ff7ab0');X.restore()}
// A: 15:30 kitchen: your son proudly holds up his school photo; you with coffee, shocked
function shotA(t,r,cv){cam(560,1120,cv?1.1:lerp(1.1,1.16,C(r/3.6)),t,.1);
 kitchen(t,{});wclock(560,560,.6,15,30);fridge3(150,1760,1.0,{});
 const shock=cv||r>1.7;
 sm(330,1830,1.15,Object.assign({t,eyes:shock?'wide':'open',brow:shock?'worried':'up',mouth:shock?'o':'smile',sweat:shock,look:[.8,-.1],armL:60,bendL:-60,armR:62,bendR:-70,holdR:(x,y)=>{pmug(x+5,y-15,.7,'#ffd23f')}},YOU));
 const up=cv?1:eo(C((r-.05)/.4));
 sm(790,1800,.92,Object.assign({t,eyes:'happy',brow:'up',mouth:r<1.6&&!cv?'open':'grin',talk:!cv&&r<1.6?t:null,blush:1,look:[-.6,-.2],armR:20,bendR:-10,armL:lerp(30,95,up),bendL:lerp(-20,-15,up),
  holdR:(x,y)=>{schoolPhoto3(lerp(x,585,up),lerp(y,1120,up),.8,{t,rot:-.06})}},SON));
 if(!cv)label3('You at 15:30 😳',C((r-.05)/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: close-up of the photo; at 'Grandma's framing it' a gold frame snaps around it
const B0=T('j1')-.1,FR=T('j1')+1.45-B0;
sh(B0,(t,r)=>{cam(540,960,lerp(1.0,1.05,C(r/2.8)),t,.1);
 proom(t,{win:0,plant:0,lamp:0,frame:null,wall:'#ffe9d2',wall2:'#f7d7b5'});glow(540,900,700,'255,230,190',.5);
 const f=C((r-FR)/.35);
 squash(540,980,f>0&&f<1?Math.sin(f*Math.PI)*.08:0,()=>schoolPhoto3(540,980,1.35,{t,frame:f}));
 if(f>=1)sparkles(540,980,C((r-FR-.35)/.6),12,420);
 label3(f>0?'Grandma\'s wall 🖼️':'His school photo 🙈',f>0?C((r-FR)/.2):C(r/.2))});
// C: night sofa: school emails rain into a pile, the red 'Picture day' one sinks; Memo hops in with the RETAKE email; you voice-note it
const C0=T('f1')-.15,MC=T('s2')-1.4-C0,VN=T('s2')+.5-C0,C_RE=T('s2')-.2-C0,C_FL=T('s2')+.9-C0;
sh(C0,(t,r)=>{cam(540,1080,lerp(1.04,1.09,C(r/4.8)),t,.1);
 proom(t,{win:820,night:1,lamp:1,plant:0,frame:null,wall:'#c9b6d6',wall2:'#ad98c0'});glow(300,700,520,'255,205,130',.35);
 psofa(540,1500,1.15);
 const talk=r>VN;
 sm(400,1640,1.05,Object.assign({t,eyes:talk?'open':'open',lid:talk?0:.4,brow:talk?'up':'sad',mouth:talk?'smile':'wavy',talk:talk?t:null,look:talk?[.6,-.2]:[.3,.5],armR:talk?130:70,bendR:talk?-120:-80,holdR:(x,y)=>phoneH(x,y,talk?.2:-.1,1),armL:40,bendL:-40},YOU,SIT));
 // envelope pile beside you (right side, sinking red one)
 const n=Math.min(14,Math.floor(r*5.5));const px=700,base=1420;
 for(let i=0;i<14;i++){const ti=i/5.5;const k=C((r-ti)/.45);if(k<=0)continue;
  const col=i%3,row=Math.floor(i/3);const tx=px+(col-1)*95+(row%2)*40,ty=base-row*62;
  envelope3(lerp(tx+(i%2?120:-120),tx,eo(k)),lerp(560,ty,k*k),.62,(i%5-2)*.12,{})}
 const red=C(r/.3)*(1-C((r-2.4)/.3));if(red>0){const sk=C((r-.6)/1.8);envelope3(700,lerp(1180,1420,sk),.72,-.08,{tag:'📸 Picture day',a:red})}
 const mp=C((r-MC)/.5);if(mp>0){memo(760,1210,.6,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(760,1100,mp,10,180)}
 const re=C((r-C_RE)/.35),fl=C((r-C_FL)/.6);
 if(re>0&&fl<=0){glow(640,930,170,'255,120,100',.4*re);envelope3(640,lerp(860,930,eo(re)),.62,.05,{tag:'📸 RETAKE · Thu 10 Dec',a:re})}
 if(fl>0&&fl<1){const ex=lerp(470,760,eo(fl)),ey=lerp(1150,1150,eo(fl))-Math.sin(fl*Math.PI)*120;glow(ex,ey,110,'130,240,160',.6);rr(ex-70,ey-32,140,64,32,'#25d366',5);X.font="40px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('🎙️',ex,ey+2)}
 if(fl>=1)sparkles(760,1150,C((r-C_FL-.6)/.4),8,120,'#7cf0a0');
 if(mp<=0)label3('Your inbox 🫠',C(r/.2));else label3('Memopai 😎',C((r-MC)/.2))});
// D: the WhatsApp chat
const D0=T('s2')+1.9;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#1d2350');g.addColorStop(1,'#2b3a6e');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>1.0&&r<1.5,list:[{a:0,me:1,voice:1,dur:'0:04',pl:C(r/1.0),time:'21:12'},{a:.3,me:1,text:'"Wed 9 Dec at 8pm: clean shirt + comb his hair, photo retake tomorrow"',time:'21:12'},{a:1.5,me:0,text:'✅ Got it! Wed 9 Dec · 20:00 · 👕 Clean shirt + comb hair',time:'21:12'}]})});
// E: Wednesday 20:00, night kitchen: you on autopilot, ping, then you hold the ironed shirt, son with a comb stuck in his hair
const E0=T('s3')-.1,NT=T('s3')+2.0-E0;
sh(E0,(t,r)=>{cam(540,1080,lerp(1.03,1.08,C(r/4.2)),t,.1);
 kitchen(t,{night:1});wclock(800,520,.6,20,0);
 const after=r>NT+.9,y=1830,s=1.1;
 sm(400,y,s,Object.assign({t,pj:'#9fd0a8',limb:'#2b3550',eyes:r>NT&&r<NT+.9?'wide':(after?'happy':'open'),lid:r<NT?.45:0,brow:'up',mouth:after?'grin':(r>NT?'o':'flat'),look:r<NT+.9?[.2,.5]:[.7,0],
  armR:r<NT+.9?100:60,bendR:r<NT+.9?-110:-60,armL:after?60:30,bendL:-60,holdR:(x,y)=>{if(r<NT+.9)phoneH(x,y,.1,r>NT)},holdL:(x,y)=>{if(after)hanger(x+60,y+40,.6)}},YOU));
 if(after){const k=C((r-NT-.9)/.3);sm(780,1800,.9,Object.assign({t,eyes:'open',lid:.3,brow:'flat',mouth:'smirk',look:[-.6,-.3],armL:20,bendL:-20,armR:20,bendR:-20},SON));
  const hx=780,hy=1800-767*.9;comb(hx+20,hy-110,1.0*Math.max(k,.01),-.6)}
 if(r>NT)notif(338,C((r-NT)/.3)*(1-C((r-NT-.75)/.2)),'Memopai','👕 Clean shirt + comb hair: retake tomorrow!');
 else label3('You, Wed 20:00 📺',C(r/.2))});
// F: payoff, same framing as A, warm: son holds the good photo, you grin
sh(T('p1')-.4,(t,r)=>{cam(560,1120,lerp(1.12,1.16,C(r/4)),t,.1);
 kitchen(t,{warm:.45});wclock(560,560,.6,15,30);fridge3(150,1760,1.0,{});
 sm(330,1830,1.15,Object.assign({t,eyes:r>1.6?'happy':'open',lid:.1,brow:'up',mouth:'grin',blush:r>1.6,look:[.8,-.1],armL:60,bendL:-60,armR:62,bendR:-70,holdR:(x,y)=>{pmug(x+5,y-15,.7,'#ffd23f')}},YOU));
 sm(790,1800,.92,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[-.6,-.2],armR:20,bendR:-10,armL:95,bendL:-15,holdR:(x,y)=>{schoolPhoto3(585,1120,.8,{t,good:1,rot:-.06})}},SON2));
 if(r>.8)sparkles(585,1120,C((r-.8)/.7),10,260);
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.0,1));
