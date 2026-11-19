const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1,tee:'#7a3fd0'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function glitter(x,y,s,t){for(let k=0;k<7;k++){const a=k*0.9,rx=x+Math.cos(a)*60*s+(k%2?-90:90)*s,ry=y+30*s+Math.sin(a)*25*s;X.save();X.globalAlpha=.6+.4*Math.abs(Math.sin(t*5+k));txt('✦',rx,ry,(18+(k%3)*8)*s,['#ffd23f','#ff7ad9','#7ad7ff'][k%3],0,'900 ');X.restore()}}
function office3(t){proom(t,{win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'});glow(780,500,600,'255,240,200',.45);wclock(250,470,.8,10,0)}
function living3(t,o={}){proom(t,Object.assign({win:780,frame:[250,520],plant:1,lamp:0,wall:'#f2dcc0',wall2:'#e2c19e'},o))}
function ctable(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-330,0,660,40,14,'#c99a6b',7);rr(-300,40,24,240,6,'#9a7048',6);rr(276,40,24,240,6,'#9a7048',6);X.restore()}
function cereal(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-70,-10);X.lineTo(70,-10);X.quadraticCurveTo(66,60,0,64);X.quadraticCurveTo(-66,60,-70,-10);X.closePath()},'#5fa8e8',6);ell(0,-10,70,16,'#fff7e0',5);for(let k=0;k<6;k++)circ(-45+k*18,-14+(k%2)*4,7,'#e8a83c',0);line([[20,-12],[70,-70]],8,'#bbb');X.restore()}
// her face inside a WhatsApp video call on a phone (office behind her)
function callPhone(x,y,s,t,o={}){X.save();X.translate(x,y);X.rotate(o.rot||.06);X.scale(s,s);X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=30;rr(-200,-380,400,760,48,'#1b1b1f',9);X.shadowColor='transparent';
 X.save();X.beginPath();X.roundRect(-180,-360,360,720,34);X.clip();const g=X.createLinearGradient(0,-360,0,360);g.addColorStop(0,'#dfe7ee');g.addColorStop(1,'#bccad6');X.fillStyle=g;X.fillRect(-200,-380,400,760);
 rr(60,-300,110,150,8,'#9fc7e8',5);rr(-170,170,340,200,0,'#b5855a',0);
 const sad=o.sad,ty=560,ss=.8;sm(10,ty,ss,Object.assign({t,eyes:sad?'open':'happy',brow:sad?'sad':'up',mouth:sad?(o.talk?'o':'wavy'):'grin',talk:o.talk?t:null,blush:1,tear:sad&&o.tear,look:sad?[0,.15]:[0,0],armR:sad?20:150,bendR:sad?20:-20,holdR:sad?null:(hx,hy)=>lightstick(hx,hy,.55,t),armL:sad?150:30,bendL:sad?-150:20,holdL:sad?(hx,hy)=>lightstick(hx+10,hy+40,.45,t*.2):null},HER));glitter(10,HD(ty,ss)-10,ss,t);
 X.fillStyle='rgba(0,0,0,.35)';X.fillRect(-180,-360,360,70);txt('Bestie 💜',0,-322,30,'#fff',0,'800 ');
 rr(70,190,90,140,14,'#2e3440',4);circ(-100,300,34,'#ff3b30',0);txt('📞',-100,302,30,'#fff',0,'400 ');X.restore();X.restore()}

// A: Friday 10:47, you on the sofa in pyjamas, laptop SOLD OUT, best friend on video call in the tour T-shirt
const SOLD=2.0;
function shotA(t,r,lab){cam(540,1000,lerp(1.03,1.09,C(r/4.3)),t,.14);living3(t);glow(800,560,600,'255,236,180',.35);
 const sold=r>SOLD;
 sm(300,1960,1.25,Object.assign({t,pj:1,eyes:sold?'wide':'open',brow:sold?'worried':'flat',mouth:sold?'o':'flat',sweat:sold,look:sold?[.6,-.2]:[.2,.5],armR:118,bendR:-20,holdR:(x,y)=>callPhone(x+170,y-260,1.0,t,{sad:sold,talk:r>T('f1')&&r<T('s1')-.2,tear:r>T('f1')}),armL:30,bendL:-110},YOU));
 psofa(380,1900,1.25,'#7a6fb5','#5f559a');
 ctable(330,1420,1);cereal(560,1418,.9);laptop3(250,1420,.75,{mode:sold?'sold':'queue',p:sold?C((r-SOLD)/.3):1,t});
 if(lab)label3(r<T('f1')-.1?'You, Friday 10:47 😳':'Your best friend, at work 🥺',C((r<T('f1')-.1?r:r-T('f1')+.1)/.2))}
sh(0,(t,r)=>shotA(t,r,1));

// B: Monday's chat: "you're on it??" -> "Obviously! 💪"
const herAv=(x,y,rad)=>{circ(x,y,rad,'#e2508a',0);txt('💜',x,y+2,rad*1.1,'#fff',0,'400 ')};
sh(T('s1'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#2a2140';X.fillRect(0,0,1080,1920);glow(540,900,700,'200,140,255',.3);
 phoneUI(540,900,1.28,r,{name:'Bestie 💜',avf:herAv,sub:'online',list:[{a:0,date:'Monday'},{a:.1,me:0,text:"TOUR!!! 😱 Tickets Fri 10:00 🎟️ you're on it??",time:'19:12'},{a:1.55,me:1,text:'Obviously! 💪',time:'19:13'},{a:2.75,date:'Friday 10:47 · 🎟️ 0'}]})});

// C: Monday night (rewind), sofa: the Memopai mascot hops on, the ticket thought flies into your phone
sh(T('s2'),(t,r)=>{cam(540,1040,1.05,t,.15);living3(t,{night:1,lamp:110,wall:'#c9b6a4',wall2:'#ad9988'});glow(120,760,560,'255,214,150',.5);
 const mp=C((r-.35)/.5);
 const y=1960,s=1.25,hy=HD(y,s);
 sm(380,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:r>1.2?'open':'smile',talk:r>1.2?t:null,look:[.5,.3],armR:150,bendR:-150,holdR:(x,yy)=>phoneH(x,yy,.25,r>1.2)},YOU));psofa(540,1900,1.3);
 if(mp>0){memo(850,1440,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(850,1200,mp,8,160)}
 const fl=C((r-1.2)/.8);if(r>.6&&fl<1){const px=lerp(330,560,eo(fl)),py=lerp(hy-230,hy+120,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🎟️',r<1.2?C((r-.6)/.25):1-fl*.5)}else if(fl>=1)sparkles(560,hy+120,C((r-2)/.5),8,120,'#7cf0a0');
 if(r>.5)label3(r<1.0?'You, Monday 19:15 🛋️':'Memopai 😎',C((r<1.0?r-.5:r-1.0)/.2));
 rewind(r<.55?1-C((r-.35)/.2):0,t,'◀◀ MONDAY')});

// D: your Memopai chat: contact + voice note -> Got it, then her one-time Accept
sh(T('y1'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const acc=T('y1')+2.45-T('y1');
 phoneUI(540,900,1.28,r,{typing:r>1.1&&r<1.45,list:[{a:.05,me:1,text:'👤 Bestie 💜 (contact)',time:'19:16'},{a:.35,me:1,voice:1,pl:C((r-.4)/.7),dur:'0:04',time:'19:16'},{a:1.45,me:0,text:'✅ Got it! Fri 09:50 · Tickets 🎟️ · you + Bestie 💜',time:'19:16'},{a:acc,date:'Bestie 💜 accepted ✓ (once)'}]});
 if(r>acc&&r<acc+.8)glow(540,700,400,'130,240,160',.3*(1-C((r-acc)/.8)))});

// E: Friday 09:50 split: you at home | her at the office. Both phones buzz; she gets through
sh(T('s4'),(t,r)=>{const bz=r>.35,go=T('f2')-T('s4')-.1,got=r>go;
 split2(t,
  (t)=>{living3(t);ctable(300,1420,1);sm(330,1960,1.2,Object.assign({t,pj:1,eyes:bz?'wide':'open',brow:'up',mouth:got?'grin':(bz?'o':'smile'),look:[.1,.6],armR:60,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.1,bz)},YOU));psofa(380,1900,1.2,'#7a6fb5','#5f559a');laptop3(330,1420,.62,{mode:'queue',n:'5,870',t});if(got)sparkles(330,860,C((r-go)/1),8,220)},
  (t)=>{office3(t);sm(560,1780,1.2,Object.assign({t,flip:1,eyes:got?'happy':(bz?'wide':'open'),brow:'up',mouth:got?'open':(bz?'o':'smile'),talk:got&&r<go+1.2?t:null,blush:got,look:[-.4,.5],armL:got?160:60,bendL:got?-20:-110,holdL:got?null:(x,y)=>phoneH(x,y,.1,bz),armR:got?160:30,bendR:got?-20:20},HER));glitter(560,HD(1780,1.2)-10,1.2,t);rr(260,1440,560,50,12,'#c99a6b',6);laptop3(560,1440,.6,{mode:got?'ok':'queue',n:'3,512',p:got?C((r-go)/.3):1,t});if(got)confetti(r-go,30)},
  {camA:[300,1060,1.0],camB:[560,1080,1.0],p:C(r/.3)});
 const n=r<1.7?C((r-.35)/.3):Math.max(0,1-(r-1.7)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','⏰ Tickets 🎟️ · sale opens 10:00'));
 if(r>2.0)scr(()=>label3(got?'Her, 10:00 🤩':'You both, 10:00 💻',C((r-(got?go:2.0))/.2)))});

// F: the concert: same T-shirt, light stick, both beaming; you two, sorted
sh(T('p1'),(t,r)=>{cam(540,1020,lerp(1.04,1.1,C(r/4)),t,.12);concert(t);
 sm(330,1900,1.22,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.4,-.2],armR:150,bendR:-30,armL:40,bendL:20},YOU));
 sm(730,1880,1.2,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'open',blush:1,look:[-.4,-.2],armR:160,bendR:-10,holdR:(x,y)=>lightstick(x,y,1,t),armL:60,bendL:-40},HER));glitter(730,HD(1880,1.2)-10,1.2,t);
 sparkles(540,700,C((r-.3)/1.5),12,360,'#ff9ad9');
 label3(r<1.4?'Your best friend 🤩':'You two, sorted 😌',C((r<1.4?r:r-1.4)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.2,0));
