const YOU={hair:'curl'};
const HOST={hair:'bun',hairc:'#2b2b33',lashes:1};
const FR=[{hair:'bun',hairc:'#e2508a',lashes:1},{hair:'spike',hairc:'#e07a2a'},{hair:'spike',hairc:'#3a2a20'},{hair:'bun',hairc:'#6a4ad0',lashes:1}];
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// chat bubble in screen space (group chat in shot A)
function bub(x,y,p,text,me,who){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(k,k);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=18;
 X.font="700 62px Inter,'Noto Color Emoji'";const w=Math.max(X.measureText(text).width+90,who?380:0);rr(-w/2,-80,w,who?160:120,36,me?'#d9fdd3':'#fff',5);X.shadowColor='transparent';
 if(who){X.font="800 32px Inter";X.fillStyle='#d9488a';X.textAlign='left';X.textBaseline='middle';X.fillText(who,-w/2+40,-46)}
 txt(text,0,who?16:-20,62,'#111',0,'700 ');X.restore()}
// kebab wrap
function kebab(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.rotate(-.3);path(()=>{X.moveTo(-40,-70);X.lineTo(40,-70);X.lineTo(12,60);X.lineTo(-12,60);X.closePath()},'#e8c27a',6);
 ell(0,-72,44,16,'#7cc47c',5);circ(-18,-80,9,'#e0533d',0);circ(14,-82,8,'#e0533d',0);rr(-30,-30,60,50,6,'#fff',4);circ(-12,-56,12,'#8a4a2a',0);circ(12,-58,11,'#9a5a32',0);X.restore()}
// reservation book
function rbook(x,y,s=1,open=1){X.save();X.translate(x,y);X.scale(s,s);rr(-110,-70,220,140,10,'#7a2e2e',6);rr(-100,-62,98,124,6,'#fffaf0',0);rr(2,-62,98,124,6,'#fffaf0',0);
 for(let k=0;k<5;k++){line([[-88,-40+k*22],[-16,-40+k*22]],4,'#9aa');line([[14,-40+k*22],[86,-40+k*22]],4,'#9aa')}X.restore()}
// restaurant facade at night: brick wall, glowing windows, striped awning, string lights, door, host podium
function resto(t,o={}){psky('#10153a','#26306a','#46508a',1150);
 pblur(2,()=>{rr(-60,330,1200,900,0,'#6e3428',0);for(let r=0;r<16;r++)for(let c=0;c<10;c++){X.fillStyle=(r+c)%3?'rgba(0,0,0,.08)':'rgba(255,255,255,.05)';X.fillRect(c*120-60+(r%2)*60,340+r*56,112,48)}});
 // windows with warm light + table silhouettes
 for(const wx of [40,780]){rr(wx,560,260,420,16,'#ffcf7a',8);glow(wx+130,770,330,'255,200,110',.55);for(let k=0;k<2;k++){circ(wx+70+k*120,840,26,'rgba(120,60,30,.45)',0);rr(wx+40+k*120,880,60,60,8,'rgba(120,60,30,.35)',0)}line([[wx,770],[wx+260,770]],6,'#5a2a20');line([[wx+130,560],[wx+130,980]],6,'#5a2a20')}
 // door
 rr(380,520,320,700,14,'#4a2a1e',8);rr(410,560,260,330,10,'#ffd98a',0);glow(540,720,380,'255,210,120',o.warm?.7:.45);circ(650,900,14,'#ffd23f',5);
 // awning
 for(let k=0;k<12;k++){const x=-40+k*100;path(()=>{X.moveTo(x,360);X.lineTo(x+100,360);X.lineTo(x+110,480);X.lineTo(x+10,480);X.closePath()},k%2?'#f4efe6':'#d9443a',4)}
 for(let k=0;k<12;k++){const x=-40+k*100;path(()=>X.arc(x+60,480,50,0,Math.PI),k%2?'#f4efe6':'#d9443a',4)}
 rr(300,240,480,100,22,'#1f2a44',6);txt('TRATTORIA',540,292,64,'#ffd98a',0,'900 ');
 // string lights
 for(let k=0;k<14;k++){const x=k*84,y=200+Math.sin(k*.9)*14+Math.abs(Math.sin(k*.45))*30;circ(x,y,9,'#ffe7a0',0);glow(x,y,o.warm?60:40,'255,220,140',.7)}
 // pavement
 const pg=X.createLinearGradient(0,1220,0,2000);pg.addColorStop(0,'#5a5870');pg.addColorStop(1,'#34334a');X.fillStyle=pg;X.fillRect(-3000,1220,8000,3000);
 X.strokeStyle='rgba(255,255,255,.08)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*70,1220);X.lineTo(540+k*320,2000);X.stroke()}
 glow(540,1300,600,'255,200,120',.25)}
function podium(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-90,-330);X.lineTo(90,-330);X.lineTo(70,0);X.lineTo(-70,0);X.closePath()},'#3b2418',7);rr(-110,-360,220,40,8,'#5a3626',6);rbook(0,-390,.7);line([[60,-360],[60,-470]],6,'#222');circ(60,-480,22,'#ffd98a',4);glow(60,-470,140,'255,220,140',.6);X.restore()}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));glow(120,760,560,'255,214,150',.45)}
function wclock(x,y,s,h,m,gl){X.save();X.translate(x,y);X.scale(s,s);if(gl)glow(0,0,150,gl,.35);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function mug(x,y,t=0){X.save();X.translate(x,y);rr(-40,-96,80,96,14,'#e86a5a',6);X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.arc(44,-50,22,-1.3,1.3);X.stroke();
 X.globalAlpha=.7;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=7;X.beginPath();X.moveTo(-18+k*18,-110-ph*90);X.quadraticCurveTo(-8+k*18+Math.sin(t*3+k)*10,-140-ph*90,-18+k*18,-170-ph*90);X.stroke()}X.restore()}
// friends behind you; turn=0 look at host, 1 look at you (judging)
function friends(t,turn,o={}){const xs=o.xs||[110,250,620,760],s=o.s||.74,y=o.y||1640;
 xs.forEach((x,i)=>{const toYou=x>420?-1:1;sm(x,y,s,Object.assign({t,flip:x>420?1:0,eyes:o.happy?'happy':'open',lid:turn?.5:0,brow:o.happy?'up':turn?'flat':'up',mouth:o.happy?'grin':turn?'flat':'smile',
  look:turn?[.7*toYou,.1]:[.6,-.1],tilt:turn?toYou*6:0,armL:o.happy?150+Math.sin(t*9+i)*12:20,bendL:o.happy?-20:10,armR:o.happy?150-Math.sin(t*9+i)*12:20,bendR:o.happy?-20:10},FR[i]))})}

// A: Thursday 23:40 on the sofa: the group chat. "Who's booking?" "Me! 🙋"  → 2.5 s cut to the door
sh(0,(t,r)=>{cam(470,1000,lerp(1.12,1.18,C(r/2.5)),t,.15);sofaRoom(t);
 sm(330,1640,1.15,Object.assign({t,eyes:'happy',brow:'up',mouth:r>1.0?'grin':'smile',look:[.6,.4],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,1)},YOU));psofa(520,1640,1.15);
 scr(()=>{bub(580,1000,C((r-.05)/.25),"Who's booking Saturday? 🍝",0,'Dinner gang 🍝');bub(800,1220,C((r-1.0)/.25),'Me! 🙋',1)});
 label3('You, Thursday 23:40 😎',C(r/.2))});
// B: Saturday 20:00 at the door; the host can't find it; four friends turn to you
sh(2.5,(t,r)=>{const q=T('f1')-2.5,tu=T('s1')-2.5+.2;const f1=r>q,turn=r>tu;
 cam(lerp(540,580,C((r-q)/.6)),1000,lerp(1.02,1.12,C((r-q)/.8)),t,.15);resto(t);
 friends(t,turn);
 sm(360,1790,1.12,Object.assign({t,eyes:f1?'wide':'happy',lid:0,brow:f1?'worried':'up',mouth:f1?(turn?'wavy':'o'):'grin',sweat:f1,look:f1?[.6,0]:[.5,-.1],armR:f1?20:120,bendR:f1?10:-110,armL:20,bendL:10,tilt:turn?-5:0},YOU));
 podium(830,1790,1.0);
 sm(850,1460,.82,Object.assign({t,flip:1,eyes:'open',lid:f1?.45:0,brow:f1?'up':'flat',mouth:f1&&r<q+1.9?'o':'smile',talk:f1&&r<q+1.9?t:null,look:[-.3,.5]},HOST));
 if(r>q&&r<q+.3)impact((r-q)/.3);
 label3(f1?'You at 20:01 😳':'You, Saturday 20:00 😎',C(r/.2)+(f1?C((r-q)/.2):0))});
// C: plan B: kebabs on the pavement, in the rain
sh(T('s1')+.85,(t,r)=>{cam(540,1000,lerp(1.05,1.1,C(r/2.5)),t,.2);psky('#3a4160','#59607e','#7a7f98',1150);
 pblur(3,()=>{for(let k=0;k<6;k++){const x=-100+k*220,h=420+rnd(k+3)*200;X.fillStyle=['#3e4562','#4a4a66','#3a4f68'][k%3];X.fillRect(x,1150-h,200,h);for(let w=0;w<3;w++){X.fillStyle=rnd(k*5+w)>.5?'#e8c87a':'#2c3350';X.fillRect(x+40,1150-h+60+w*110,50,70)}}});
 const pg=X.createLinearGradient(0,1150,0,2000);pg.addColorStop(0,'#4b5068');pg.addColorStop(1,'#2e3248');X.fillStyle=pg;X.fillRect(-3000,1150,8000,3000);
 for(let k=0;k<5;k++){const ph=(t*.7+k*.37)%1;X.strokeStyle=`rgba(200,215,255,${.5*(1-ph)})`;X.lineWidth=3;X.beginPath();X.ellipse(150+k*190,1700+(k%2)*80,20+ph*70,6+ph*18,0,0,7);X.stroke()}
 sm(170,1700,.78,Object.assign({t,eyes:'open',lid:.6,brow:'sad',mouth:'flat',look:[.6,.2],armR:110,bendR:-110,holdR:(x,y)=>kebab(x,y-20,.8)},FR[1]));
 sm(900,1700,.78,Object.assign({t,flip:1,eyes:'open',lid:.6,brow:'sad',mouth:'frown',look:[-.6,.2],armR:110,bendR:-110,holdR:(x,y)=>kebab(x,y-20,.8)},FR[0]));
 sm(540,1800,1.15,Object.assign({t,eyes:'open',lid:.35,brow:'sad',mouth:'wavy',tear:1,sweat:0,look:[0,.3],armR:115,bendR:-120,holdR:(x,y)=>kebab(x,y-20,1.1)},YOU));
 prain(t,.55,110);haze(1000,1500,'160,170,200',.3);
 label3('You, 20:15 🌧️',C(r/.2))});
// D: next Thursday 23:40, sofa: Memopai hops onto the sofa arm, the 🍽️ thought flies into the phone
sh(T('s2')+.55,(t,r)=>{cam(540,1000,1.04,t,.2);sofaRoom(t);
 const talk=r>1.9;
 sm(400,1640,1.18,Object.assign({t,eyes:talk?'open':'happy',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,1)},YOU));
 psofa(500,1640,1.15);
 const mp=C((r-.1)/.6);if(mp>0){memo(830,1390,.95,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(830,1100,mp,8,180)}
 const fl=C((r-1.6)/1.0);if(fl>0&&fl<1){const px=lerp(330,520,eo(fl)),py=lerp(560,930,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🍝',.95-fl*.45)}else if(fl>=1)sparkles(520,930,C((r-2.6)/.5),8,120,'#7cf0a0');
 if(fl<=0&&r>.6)chip(330,560,'🍝',C((r-.6)/.3)*.95,Math.sin(t*3)*.1);
 label3(mp>.5&&r>.9?'Memopai 😎':'You, next Thursday 23:40 🛋️',C(r/.2))});
// E: the private WhatsApp chat with Memopai
sh(T('s3'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.25&&r<1.6,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.2),dur:'0:03',time:'23:41'},{a:1.6,me:0,text:'✅ Fri 10:00 · Book a table for 5 🍝',time:'23:41'}]})});
// F: Friday 10:00: ping, you call, booked
sh(T('s4'),(t,r)=>{const sw=1.35;cam(540,1000,1.05,t,.15);
 proom(t,{win:820,frame:null,plant:700,lamp:0,wall:'#f6e3c4',wall2:'#ead0a2'});wclock(880,720,.85,10,0,r<sw?'120,255,150':null);
 if(r<sw){sm(440,1800,1.2,Object.assign({t,eyes:r>.3?'wide':'open',brow:'up',mouth:r>.3?'o':'flat',look:[.5,-.3],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.2,r>.2),armL:60,bendL:-60,holdL:(x,y)=>mug(x-10,y+40,t)},YOU));
  scr(()=>notif(150,C((r-.12)/.3),'Memopai','⏰ Book a table for 5 🍝'))}
 else{const q=r-sw;sm(440,1800,1.2,Object.assign({t,eyes:'happy',brow:'up',mouth:q>.7?'grin':'open',talk:q<.7?t:null,look:[.4,-.2],armR:160,bendR:-160,holdR:(x,y)=>phoneH(x-30,y+30,-.4,1),armL:60,bendL:-60,holdL:(x,y)=>mug(x-10,y+40,t)},YOU));
  chip(760,620,'✅',C((q-.6)/.3)*1.1);if(q>.6)sparkles(760,620,C((q-.6)/.8),10,200,'#7cf0a0')}
 label3(r<sw?'You, Friday 10:00 ☕':'You, Friday 10:01 ✅',C(r/.2),r<sw?560:300)});
// G: Saturday 20:00, same door, warm: "Table for five? Right this way!" → You, sorted
sh(T('f2'),(t,r)=>{const p1=r>T('p1')-T('f2');cam(540,1000,lerp(1.02,1.08,C(r/4)),t,.15);resto(t,{warm:1});
 friends(t,0,{happy:1});
 sm(360,1790,1.12,Object.assign({t,eyes:p1?'happy':'open',brow:'up',mouth:'grin',blush:p1,look:[.5,-.1],armR:p1?150:40,bendR:p1?-30:10,armL:20,bendL:10},YOU));
 podium(830,1790,1.0);
 sm(850,1460,.82,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:r<1.9?'open':'smile',talk:r<1.9?t:null,look:[-.4,.3],armL:lerp(20,100,C(r/.5)),bendL:-20},HOST));
 sparkles(540,800,C((r-.2)/1.5),12,300);if(p1)confetti(r-(T('p1')-T('f2')),50);
 label3(p1?'You, sorted 😌':'Saturday, 20:00 🍝',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only frame: group chat + your grin
sh(1000,(t,r)=>{cam(470,1000,1.14,t,.1);sofaRoom(t);
 sm(330,1640,1.15,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,.4],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,1)},YOU));psofa(520,1640,1.15);
 scr(()=>{bub(580,1060,1,"Who's booking Saturday? 🍝",0,'Dinner gang 🍝');bub(800,1270,1,'Me! 🙋',1)})});
