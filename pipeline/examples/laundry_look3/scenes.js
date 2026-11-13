const YOU={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function wbase(x){X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(x,1766,300,26,0,0,7);X.fill();X.globalAlpha=1;rr(x-260,1478,520,290,14,'#c99a6b',8);line([[x-230,1560],[x+230,1560]],5,'#a87c52');circ(x-60,1520,9,O,0);circ(x+60,1520,9,O,0)}
function room(t,o={}){proom(t,Object.assign({win:780,frame:[250,520],plant:120,lamp:0},o))}
// A: mirror, wash #3, stink rolls out
sh(0,(t,r)=>{cam(560,1050,1.02,t,.2);room(t,{win:820,rain:1,wall:'#d9d4cf',wall2:'#c8c0b8'});
 const d=C((r-.3)/.5);wbase(740);washer(740,1480,1.15,{door:d});stink(700,1270,t,C((r-.5)/.4),1.2);
 sm(300,1760,1.22,Object.assign({t,eyes:r>.8?'wide':'open',brow:'worried',mouth:r>.8?'wavy':'frown',look:[.7,0],armR:70,bendR:-20,sweat:r>.9,lean:-4},YOU));
 label3('You, wash #3 🤢',C(r/.3))});
// B: Sunday, timer rings, swiped, thought floats away
sh(T('s1'),(t,r)=>{cam(540,1020,1,t,.2);room(t,{win:820});
 wbase(760);washer(760,1480,1.15,{on:1,spin:1,t});
 const ring=r>1.6&&r<2.9,sw=r>=2.9;
 sm(310,1760,1.2,Object.assign({t,eyes:'open',brow:sw?'flat':'up',mouth:sw?'smirk':'smile',look:ring?[0,.6]:[.7,0],armR:ring||sw?20:80,bendR:ring||sw?-100:-10,
  holdR:(x,y)=>{if(ring||sw){const rx=x+(sw?Math.min(1,(r-2.9)*4)*120:Math.sin(t*60)*6);phoneH(rx,y,-.2,ring,ring?'#ff9f43':'#3a4a66');if(ring){X.save();X.globalAlpha=.8;for(let k=1;k<3;k++)circ(rx,y-30,60+k*28+((t*80)%28),null,4,'#ff9f43');X.restore()}}}},YOU));
 if(r>3.0){const p=C((r-3.0)/1.4);X.save();X.globalAlpha=1-p;X.translate(330+p*260,560-p*520);X.rotate(p*1.2);rr(-50,-40,100,90,14,'#e86a5a',6);X.restore()}
 label3('You, Sunday 🙃',C(r/.3))});
// C: two days later, damp stinky hoodie, rainy window
sh(T('s2'),(t,r)=>{cam(540,1000,1.05,t,.25);room(t,{win:540,frame:[220,560],rain:1,wall:'#cfd3d8',wall2:'#b9bfc7',plant:0});prain(t,.25,40);
 sm(380,1760,1.25,Object.assign({t,eyes:'closed',brow:'sad',mouth:'wavy',lean:-8,tilt:-6,armR:75,bendR:0,sweat:1,
  holdR:(x,y)=>{hoodie(x+40,y-20,1.05,'#c9655a');stink(x+40,y+160,t,1,.8)}},YOU));
 label3('Your favourite hoodie 🤢',C(r/.3))});
// D: the way out, Memopai on set
sh(T('s3'),(t,r)=>{cam(540,1020,1,t,.2);room(t,{win:820,wall:'#f6e2cc'});
 wbase(640);washer(640,1480,1.1,{on:1,spin:1,t});
 sm(230,1760,1.2,Object.assign({t,eyes:'open',brow:'up',mouth:'smile',look:[.7,-.2],armR:40,bendR:-90,holdR:(x,y)=>phoneH(x,y,-.15,1)},YOU));
 memo(640,960,1.05,{t,wave:1,hop:C((r-.2)/.6),glow:1});if(r>.2&&r<1.2)sparkles(640,700,C((r-.2)/1),10,240);
 label3('Memopai 😎',C(r/.3))});
// E: the voice message
sh(T('y1'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f6f5c';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,240,190',.35);
 phoneUI(540,900,1.28,r,{typing:r>.6&&r<1.0,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.8),dur:'0:03',time:'14:10'},{a:1.0,me:0,text:'Got it ✅ I’ll remind you at 15:10 👕',time:'14:10'}]})});
// F: buzz mid-episode, snooze, it comes back
sh(T('s4')+.6,(t,r)=>{cam(540,1000,1,t,.2);proom(t,{win:300,night:1,lamp:900,frame:[800,520],curtain:'#6a7fd0',curtain2:'#4f62b0'});
 glow(980,1100,420,'120,170,255',.35+.1*Math.sin(t*7));
 const up=r>3.6;if(up)psofa(470,1580,.95);sm(up?420:470,up?1760:1640,1.15,Object.assign({t,eyes:up?'open':(r<.4?'lid':'wide'),lid:.4,brow:up?'up':'flat',mouth:up?'smile':'o',look:[.2,.6],armR:40,bendR:-95,walk:up?t:0,
  holdR:(x,y)=>phoneH(x,y,-.1,(r>.2&&r<1.9)||(r>2.4&&r<3.8))},YOU));if(!up)psofa(470,1580,.95);
 const p1=r<1.9?C((r-.2)/.3):Math.max(0,1-(r-1.9)/.25),p2=r<3.8?C((r-2.4)/.3):Math.max(0,1-(r-3.8)/.25);
 if(p1>0)notif(150,p1,'Memopai','Hang the laundry 👕');if(p2>0)notif(150,p2,'Memopai','Hang the laundry 👕')});
// G: fixed life
sh(T('p1'),(t,r)=>{cam(540,1000,1,t,.15);room(t,{win:800,wall:'#fbe9cf',wall2:'#f2d3ae',plant:130});glow(800,700,600,'255,230,160',.45);
 rack(770,1560,1.4,t);
 sm(300,1760,1.22,Object.assign({t,eyes:'happy',brow:'flat',mouth:'smile',blush:1,armL:-20,armR:150,bendR:20,tilt:4,holdL:(x,y)=>{rr(x-30,y-50,60,70,12,'#fff',6);glow(x,y-80,60,'255,255,255',.3)}},YOU));
 sparkles(560,900,C(r/1.5),12,300);label3('You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
