const YOU={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// bed seen from its foot: headboard + pillow behind the sleeper, blanket in front (blanket to the chin)
function bedBack(x,y){rr(x-390,y-560,780,520,60,'#6e4a33',7);rr(x-350,y-520,700,440,44,'#87603f',0);
 X.save();X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=20;ell(x,y-150,280,115,'#f4f1fb',6);X.restore();ell(x-60,y-180,170,40,'rgba(255,255,255,.6)',0)}
function bedFront(x,top,col='#5b78c9',col2='#4561ad'){const g=X.createLinearGradient(0,top,0,top+700);g.addColorStop(0,col);g.addColorStop(1,col2);
 path(()=>{X.moveTo(x-410,top+40);X.quadraticCurveTo(x-260,top-10,x-110,top+8);X.quadraticCurveTo(x,top+22,x+120,top+6);X.quadraticCurveTo(x+280,top-12,x+410,top+40);X.lineTo(x+440,top+620);X.lineTo(x-440,top+620);X.closePath()},g,7);
 rr(x-395,top+10,790,70,30,'#eef0fa',6);
 X.strokeStyle='rgba(20,30,80,.25)';X.lineWidth=6;for(const k of[-230,-50,160]){X.beginPath();X.moveTo(x+k,top+120);X.quadraticCurveTo(x+k+40,top+330,x+k-10,top+560);X.stroke()}
 rr(x-460,top+600,920,120,20,'#6e4a33',7)}
function nstand(x,y,time,ph){y-=70;x=x;rr(x-130,y,260,330,18,'#8a6142',6);rr(x-110,y+150,220,10,4,'#6e4a33',0);
 if(time){rr(x-35,y-90,150,90,14,'#222',5);glow(x+40,y-45,120,'255,90,90',.25);txt(time,x+40,y-44,46,'#ff5a5a',0)}
 if(ph)rr(x+70,y-22,70,22,8,'#1b1b1f',4)}
function bedroom(t,o={}){proom(t,{win:o.win||830,night:o.night,wall:o.night?'#8ea0c8':'#f4dfc6',wall2:o.night?'#7486b4':'#e9c9a6',curtain:o.night?'#5a6fc0':'#e98a6a',curtain2:o.night?'#41539e':'#cc6d50',plant:0,lamp:0,frame:[220,560]})}
function zzz(x,y,t,a=1){for(let k=0;k<3;k++){const ph=(t*.6+k/3)%1;X.save();X.globalAlpha=a*Math.sin(ph*Math.PI);txt('Z',x+ph*120+k*10,y-ph*220,50+k*14,'#fff',0);X.restore()}}
function arm2(x0,y0,x1,y1,s=1){line([[x0,y0],[x1,y1]],17*s,'#151515');ell(x1,y1,31*s,27*s,'#151515',0)}
const HX=640,HY=900,SC=1.1,FY=HY+767*SC,BT=1030;
function sleeper(t,o){bedBack(HX,BT);sm(HX,FY,SC,Object.assign({t,blink:0},YOU,o))}
// A: 23:46 -> 23:47, eyes snap open
sh(0,(t,r)=>{const snap=r>1.55;cam(560,960,lerp(1.25,1.32,C(r/3.6)),t,.15);bedroom(t,{night:1});
 sleeper(t,{eyes:snap?'wide':'closed',brow:snap?'worried':'flat',mouth:snap?'o':'smile',look:[0,-.3]});bedFront(HX,BT);nstand(190,1250,snap?'23:47':'23:46',1);
 const cp=C((r-2.4)/.35);chip(HX+190,HY-230,'🧾',eo(cp)*1.0,Math.sin(t*3)*.1);
 if(r>1.55&&r<1.95)impact((r-1.55)/.4);
 label3(snap?'You, 23:47 😳':'You, 23:46 😴',C(r/.25))});
// B: lying awake, guarding it
sh(T('s1'),(t,r)=>{cam(580,990,1.14,t,.2);bedroom(t,{night:1});
 sleeper(t,{eyes:'wide',lid:.2,brow:'worried',mouth:'wavy',look:[0,-.7],sweat:r>2});bedFront(HX,BT);nstand(190,1250,'00:52',1);
 const a=t*1.6;chip(HX+Math.cos(a)*300,HY-120+Math.sin(a)*110,'🧾',1.1+.15*Math.sin(r*2));
 label3('Your brain 🫠',C(r/.3))});
// C: half asleep, reach the phone, Memopai on the nightstand, the bill leaves the head
sh(T('s3'),(t,r)=>{cam(500,1000,1.08,t,.2);bedroom(t,{night:1});
  sleeper(t,{eyes:'lid',lid:.55,brow:'flat',mouth:r>2.4?'open':'smile',talk:r>2.4?t:0,look:[-.5,-.2],tilt:-6});bedFront(HX,BT);nstand(190,1250,null,0);const mp=C((r-.3)/.6);if(mp>0){memo(185,1185,.82,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(185,880,mp,10,220)}
 const reach=C((r-.5)/.8);const hx=lerp(400,450,reach),hy=lerp(1080,880,reach);arm2(470,1060,hx,hy,SC);phoneH(hx+8,hy+10,.15,r>1.5);
 const fl=C((r-2.4)/1.2);if(fl<1){const px=lerp(HX+170,hx,eo(fl)),py=lerp(HY-230,hy-30,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🧾',1-fl*.6)}else sparkles(hx,hy-30,C((r-3.6)/.6),8,120,'#7cf0a0');
 label3(r<.6?'You, 00:53 🥱':'Memopai 😎',C(r/.25))});
// D: the voice note in the chat
sh(T('y1')-.3,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>2.0&&r<2.3,list:[{a:.05,me:1,voice:1,pl:C((r-.3)/1.9),dur:'0:03',time:'00:53'},{a:2.3,me:0,text:'Got it ✅ Tomorrow 08:00, I’ll remind you 💡',time:'00:53'}]})});
// E: out cold (the fact)
sh(T('s2')+.9,(t,r)=>{cam(600,980,lerp(1.14,1.24,C(r/3.8)),t,.15);bedroom(t,{night:1});
 sleeper(t,{eyes:'closed',brow:'flat',mouth:'smile',tilt:8});bedFront(HX,BT);nstand(190,1250,'00:58',1);zzz(HX+150,HY-170,t);
 label3('Sleep study, 2018 🧪',C(r/.3))});
// F: 08:00 buzz, coffee, you pay it
sh(T('s4'),(t,r)=>{cam(540,1000,1,t,.2);bedroom(t,{night:0});glow(830,520,700,'255,235,170',.45);
 const tap=r>1.9;sm(330,1760,1.2,Object.assign({t,eyes:tap?'happy':'open',brow:'up',mouth:'smile',look:[.6,-.2],armR:40,bendR:-110,armL:-30,bendL:100,
  holdR:(x,y)=>phoneH(x+10,y-20,-.1,1,'#3b82f6'),holdL:(x,y)=>{rr(x-38,y-90,76,90,14,'#fff',6);line([[x+38,y-70],[x+60,y-50],[x+38,y-30]],8,'#fff');for(let k=0;k<2;k++){X.save();X.globalAlpha=.5;line([[x-10+k*20,y-110-((t*40+k*20)%40)],[x-14+k*20,y-150-((t*40+k*20)%40)]],6,'#fff');X.restore()}}},YOU));
 const n=r<1.3?C((r-.05)/.3):Math.max(0,1-(r-1.3)/.25);if(n>0)notif(150,n,'Memopai','Pay the electricity bill 💡');
 const b=C((r-1.4)/.35);if(b>0){X.save();X.translate(760,860);X.scale(eo(b)*1.25,eo(b)*1.25);rr(-230,-200,460,400,36,'#fff',6);txt('⚡ Electricity',0,-120,46,'#333',0);txt('€42.10',0,-30,80,'#111',0);
  rr(-160,60,320,100,50,tap?'#2ecc71':'#3b82f6',0);txt(tap?'Paid ✅':'Pay',0,112,52,'#fff',0);X.restore();if(tap&&r<2.6)sparkles(760,1000,(r-1.9)/.7,10,220)}});
// G: the fixed life
sh(T('p1'),(t,r)=>{cam(600,980,1.16,t,.12);bedroom(t,{night:1});glow(540,900,500,'255,220,160',.25);
  sleeper(t,{eyes:'closed',brow:'flat',mouth:'smile',blush:1,tilt:6});bedFront(HX,BT);nstand(190,1250,'23:47',1);zzz(HX+150,HY-170,t,.8);
 label3('You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,960,1.28,t,.1);bedroom(t,{night:1});
 sleeper(t,{eyes:'wide',brow:'worried',mouth:'o',look:[0,-.3]});bedFront(HX,BT);nstand(190,1250,'23:47',1);chip(HX+190,HY-230,'🧾',1)});
