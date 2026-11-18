const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1};
const P1={hair:'spike',hairc:'#3b2a20'},P2={hair:'bun',hairc:'#c98a2e',lashes:1},P3={hair:'spike',hairc:'#e0762e'},P4={hair:'bun',hairc:'#5a3a7a',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function suitcase(x,y,s=1,c='#e86a5a'){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,6,110,.25);rr(-80,-230,160,230,22,c,6);line([[-30,-230],[-30,-280],[30,-280],[30,-230]],8,'#222');line([[-40,-190],[-40,-30]],5,'rgba(0,0,0,.25)');line([[40,-190],[40,-30]],5,'rgba(0,0,0,.25)');circ(-50,4,10,'#222',0);circ(50,4,10,'#222',0);X.restore()}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));if(o.night!==0)glow(120,760,560,'255,214,150',.45)}
function popcorn(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);for(let i=0;i<9;i++)circ(-60+((i*37)%120),-30-((i*23)%40),22,'#fff6d8',4);path(()=>{X.moveTo(-90,-30);X.lineTo(90,-30);X.lineTo(65,60);X.lineTo(-65,60);X.closePath()},'#e8463c',6);for(let k=-1;k<=1;k++)rr(k*40-10,-26,20,82,4,'#fff',0);X.restore()}
// ---------- craft ladder 2026-11-18 12:00: arrivals hall + cardboard sign ----------
// arrivals(t,{night,warm}) airport arrivals hall: big window (night sky + plane lights), ARRIVALS board, sliding doors, glossy floor
function arrivals(t,o={}){const n=o.night;const g=X.createLinearGradient(0,-200,0,1250);g.addColorStop(0,n?'#aeb6c6':'#e6ebf1');g.addColorStop(1,n?'#8f99ab':'#cdd5df');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 X.save();X.beginPath();X.rect(-200,380,1480,560);X.clip();const sk=X.createLinearGradient(0,380,0,940);if(n){sk.addColorStop(0,'#141c3a');sk.addColorStop(1,'#3a4772')}else{sk.addColorStop(0,'#ff9e6b');sk.addColorStop(1,'#ffd9a0')}X.fillStyle=sk;X.fillRect(-200,380,1480,560);
 if(n){for(let i=0;i<30;i++){X.globalAlpha=.4+.6*Math.abs(Math.sin(t*2+i));circ(-150+rnd(i)*1400,400+rnd(i+5)*300,2+rnd(i+2)*2,'#fff',0)}X.globalAlpha=1;const px=(t*90)%1700-300;circ(px,520,7,(t%1<.5)?'#ff4a4a':'#fff',0);glow(px,520,40,'255,120,120',.5)}else psun(820,700,90,t);
 X.fillStyle=n?'#232b45':'#a38b8a';X.fillRect(-200,860,1480,80);X.restore();
 X.fillStyle=n?'#d7dce4':'#f1f3f6';for(let k=0;k<6;k++)X.fillRect(-200+k*300,380,18,560);X.fillRect(-200,370,1480,20);X.fillRect(-200,930,1480,24);
 // board
 rr(640,130,330,90,14,'#1b1f2a',5);txt('ARRIVALS',770,176,46,'#ffd23f',0);txt('✈',915,176,46,'#ffd23f',0,'400 ');
 // sliding doors
 rr(330,960,420,300,8,n?'#6f7c93':'#b9c6d6',6);rr(340,970,195,290,4,'rgba(200,230,255,.45)',0);rr(545,970,195,290,4,'rgba(200,230,255,.45)',0);
 const fg=X.createLinearGradient(0,1240,0,2000);fg.addColorStop(0,n?'#b9c0cb':'#e2e5ea');fg.addColorStop(1,n?'#98a1ae':'#c4cad3');X.fillStyle=fg;X.fillRect(-3000,1240,8000,3000);X.strokeStyle='rgba(0,0,0,.07)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*50,1240);X.lineTo(540+k*300,2000);X.stroke()}
 X.save();X.globalAlpha=.12;rr(330,1250,420,120,10,'#fff',0);X.restore();
 if(o.warm)glow(540,700,800,'255,220,160',.35)}
// csign(x,y,s,text,{rev:0..1 marker reveal, rot, heart}) cardboard sign (taped box flap) with marker writing
function csign(x,y,s=1,text='WELCOME HOME',o={}){const rev=o.rev==null?1:o.rev;X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;
 path(()=>{X.moveTo(-210,-120);X.lineTo(205,-128);X.lineTo(214,118);X.lineTo(-206,124);X.closePath()},'#d6a76a',6);X.shadowColor='transparent';
 X.strokeStyle='rgba(120,80,30,.35)';X.lineWidth=4;X.beginPath();X.moveTo(-200,-60);X.lineTo(205,-64);X.stroke();
 rr(-60,-140,120,34,4,'rgba(240,235,200,.85)',0);
 X.save();X.beginPath();X.rect(-200,-120,400*rev,250);X.clip();const ws=text.split(' ');
 X.font="900 66px 'Comic Sans MS','Inter Display',Inter";X.fillStyle='#1a1a1a';X.textAlign='center';X.textBaseline='middle';X.save();X.rotate(-.04);X.fillText(ws[0]||'',-10,-30);X.fillText(ws.slice(1).join(' '),-30,40);X.restore();
 if(o.heart!==0){X.save();X.translate(150,50);X.rotate(.2);X.fillStyle='#e8463c';X.beginPath();X.moveTo(0,22);X.bezierCurveTo(-40,-6,-26,-38,0,-18);X.bezierCurveTo(30,-42,40,-4,0,22);X.fill();X.restore()}
 X.restore();X.restore()}
// background arrivals crowd: a hugging couple with a balloon, a stranger with a sign greeting a traveller
function crowdBack(t,o={}){const s=.6,fy=1420;
 pblur(1.5,()=>{
 balloon(70,fy-380,.9,t,'#ff5a7a');
 sm(80,fy,s,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,armR:80,bendR:-60,armL:120,bendL:-20,tilt:8,noshadow:1},P2));
 sm(175,fy,s,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',blush:1,armR:80,bendR:-60,armL:80,bendL:-60,tilt:-8},P1));
 suitcase(250,fy+8,.5,'#5fa8e8');
 sm(950,fy,s,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'open',armR:150,bendR:-20,armL:150,bendL:-20,holdR:(x,y)=>csign(x-10,y-30,.55,'WELCOME HOME',{heart:0,rot:.05})},P3));
 sm(1060,fy,s*.95,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',armR:140,bendR:-10,armL:140,bendL:-10,walk:o.walk?t:null},P4));});}
function holdUp(x,y){return 0}
// A 0.0: arrivals 22:40, everyone hugged, your partner alone with her suitcase, on the phone
function shotA(t,r,lab,talk){cam(540,1050,lerp(1.02,1.1,C(r/4.4)),t,.12);arrivals(t,{night:1});crowdBack(t);
 suitcase(760,1800,1.0,'#7a5af0');
 sm(500,1780,1.22,Object.assign({t,eyes:'open',lid:.35,brow:'flat',mouth:talk?'open':'flat',talk:talk?t:null,look:[-.2,-.1],armR:150,bendR:-160,holdR:(x,y)=>phoneH(x,y,-.3,1),armL:15,bendL:10},HER));
 if(lab)label3('Your partner, 22:40 🙃',C(r/.25))}
sh(0,(t,r)=>{shotA(t,r,1,r>T('f1')&&r<T('f1')+1.9)});
// B: you, sofa, pyjamas, popcorn, TV on: phone at your ear, eyes snap
sh(T('f1')+.85,(t,r)=>{cam(520,1060,lerp(1.06,1.12,C(r/3)),t,.15);sofaRoom(t,{lamp:0});glow(1000,1000,600,'120,170,255',.35*(.8+.2*Math.sin(t*9)));
 const snap=r>.55;
 sm(450,1960,1.25,Object.assign({t,eyes:snap?'wide':'open',lid:snap?0:.4,brow:snap?'worried':'flat',mouth:snap?'o':'smile',sweat:snap&&r>1.2,look:snap?[.2,-.3]:[.7,.1],armR:150,bendR:-160,holdR:(x,y)=>phoneH(x,y,.3,1),armL:40,bendL:-90,holdL:(x,y)=>popcorn(x+60,y-40,.9)},YOU));psofa(540,1900,1.3,'#7a6fb5','#5f559a');
 label3(snap?'You, 22:41 😳':'You, 22:41 🍿',C(snap?(r-.55)/.2:r/.2))});
// D: rewind, daylight sofa: her text, your 'Got it! ❤️', Memopai hops on, voice note
sh(T('s2')-.05,(t,r)=>{cam(540,1040,1.06,t,.15);sofaRoom(t,{night:0,lamp:0,curtain:'#e98a6a',curtain2:'#cc6d50',wall:'#f2dcc0',wall2:'#e6c49e'});glow(300,600,700,'255,236,190',.45);
 const vn=r>3.3;
 sm(420,1960,1.25,Object.assign({t,eyes:vn?'open':'happy',brow:'up',mouth:vn?(Math.sin(t*14)>0?'open':'smile'):'smile',look:vn?[.5,.1]:[.5,.5],armR:150,bendR:vn?-165:-150,holdR:(x,y)=>phoneH(x,y,.25,1)},YOU));psofa(540,1900,1.3);
 if(vn){X.save();X.globalAlpha=.7;for(let k=1;k<3;k++){const q=((t*1.5+k/2)%1);X.globalAlpha=.7*(1-q);circ(560,1010,40+q*90,null,5,'#25d366')}X.restore()}
 // her text + your reply as a floating chat card
 const ca=C((r-.25)/.25)*(1-C((r-3.0)/.3));if(ca>0){X.save();X.globalAlpha=ca;rr(380,440,630,430,40,'rgba(239,231,220,.98)',6);
  rr(405,470,560,170,28,'#fff',0);txt('Landing Fri 22:15 ✈️',685,525,50,'#111',0,'800 ');txt('pick me up? 🥺',685,595,44,'#555',0,'600 ');
  if(r>1.75){rr(560,680,420,140,28,'#d9fdd3',0);txt('Got it! ❤️',770,750,58,'#111',0,'900 ')}X.restore()}
 const mp=C((r-.45)/.6);if(mp>0){memo(890,1530,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(890,1220,mp,8,180)}
 label3(r>3.3?'Memopai 👋':(r>1.1?'Memopai 👋':'You, two weeks ago 📱'),C(r>1.1?(r-1.1)/.2:r/.2))});
// E: the WhatsApp chat: voice note + reply
sh(T('y1')-.1,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#2a2340';X.fillRect(0,0,1080,1920);glow(540,900,700,'255,214,150',.25);
 phoneUI(540,900,1.28,r,{typing:r>2.3&&r<2.7,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/2.2),dur:'0:04',time:'14:12'},{a:2.7,me:0,text:"Got it ✅ Fri 21:30 · Leave for the airport ✈️",time:'14:12'}]})});
// F: Friday 21:30: buzz, box flap, marker, go
sh(T('s4')-.05,(t,r)=>{cam(540,1040,1.06,t,.15);sofaRoom(t);
 const up=r>1.55,sign=C((r-1.6)/.9);
 if(!up){sm(450,1960,1.25,Object.assign({t,eyes:r>1.0?'wide':'open',brow:r>1.0?'up':'flat',mouth:r>1.0?'o':'smile',look:[.6,.3],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,r>1.0)},YOU));psofa(540,1900,1.3,'#7a6fb5','#5f559a')}
 else{psofa(540,1900,1.3,'#7a6fb5','#5f559a');sm(520,1780,1.2,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[0,.4],armR:60,bendR:-80,armL:60,bendL:-80,walk:r>2.6?t:null},YOU));
  X.save();csign(520,1250,1.0,'WELCOME HOME',{rev:sign,rot:-.04});X.restore();if(sign<1){const mx=lerp(330,700,sign);X.save();X.translate(mx,1270-Math.abs(Math.sin(t*20))*20);X.rotate(.6);rr(-12,-70,24,110,8,'#222',4);rr(-10,-80,20,16,4,'#e8463c',0);X.restore()}}
 const n=r<1.55?C((r-1.0)/.3):Math.max(0,1-(r-1.55)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Leave for the airport ✈️ (Fri 21:30)'));
 if(n<=0)label3(r>2.6?'You, 21:31 🏃':'You, Friday 21:30 ✍️',C((r-1.7)/.2))});
// G: same arrivals, warm: you with the sign, she runs at you laughing
sh(T('f2')-.1,(t,r)=>{const q=T('p1')-T('f2')+.1,run=C(r/1.2);cam(540,1050,lerp(1.04,1.1,C(r/5)),t,.12);arrivals(t,{night:1,warm:1});crowdBack(t);
 suitcase(lerp(980,900,run),1800,1.0,'#7a5af0');
 sm(lerp(1000,740,eo(run)),1780,1.2,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:r<1.3?'open':'grin',talk:r<1.25?t:null,blush:1,look:[-.6,0],walk:run<1?t:null,armR:run<1?20:120,bendR:run<1?10:-30,armL:run<1?20:120,bendL:run<1?10:-30,tilt:-6},HER));
 sm(330,1780,1.2,Object.assign({t,eyes:r>q?'happy':'open',brow:'up',mouth:'grin',blush:r>q,look:[.6,0],armR:60,bendR:-80,armL:60,bendL:-80},YOU));
 csign(330,1250,1.0,'WELCOME HOME',{rot:-.04+Math.sin(t*4)*.03});
 if(r>q){sparkles(540,900,C((r-q)/1.2),12,320,'#ff7aa8')}
 label3(r<q?'Her, 22:20 🥹':'You, sorted 😌',C((r<q?r:r-q)/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{shotA(t+.4,1.5,0,0)});
