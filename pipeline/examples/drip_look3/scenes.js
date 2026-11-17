const YOU={hair:'curl'};const HER={hair:'bun',hairc:'#e2508a',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function bedBack(x,y){rr(x-390,y-560,780,520,60,'#6e4a33',7);rr(x-350,y-520,700,440,44,'#87603f',0);
 X.save();X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=20;ell(x,y-150,280,115,'#f4f1fb',6);X.restore();ell(x-60,y-180,170,40,'rgba(255,255,255,.6)',0)}
function bedFront(x,top,col='#5b78c9',col2='#4561ad'){const g=X.createLinearGradient(0,top,0,top+700);g.addColorStop(0,col);g.addColorStop(1,col2);
 path(()=>{X.moveTo(x-410,top+40);X.quadraticCurveTo(x-260,top-10,x-110,top+8);X.quadraticCurveTo(x,top+22,x+120,top+6);X.quadraticCurveTo(x+280,top-12,x+410,top+40);X.lineTo(x+440,top+620);X.lineTo(x-440,top+620);X.closePath()},g,7);
 rr(x-395,top+10,790,70,30,'#eef0fa',6);
 X.strokeStyle='rgba(20,30,80,.25)';X.lineWidth=6;for(const k of[-230,-50,160]){X.beginPath();X.moveTo(x+k,top+120);X.quadraticCurveTo(x+k+40,top+330,x+k-10,top+560);X.stroke()}
 rr(x-460,top+600,920,120,20,'#6e4a33',7)}
// nightstand; time = red clock digits; ph: 1 = phone face down, 2 = phone lit + buzzing
function nstand(x,y,time,ph,t=0){y-=70;rr(x-130,y,260,330,18,'#8a6142',6);rr(x-110,y+150,220,10,4,'#6e4a33',0);
 if(time){rr(x-35,y-90,150,90,14,'#222',5);glow(x+40,y-45,120,'255,90,90',.25);txt(time,x+40,y-44,46,'#ff5a5a',0)}
 if(ph==1)rr(x-110,y-22,110,22,8,'#1b1b1f',4);
 if(ph==2){const s=Math.sin(t*60)*5;glow(x-55+s,y-20,170,'130,240,160',.5);rr(x-115+s,y-26,120,26,8,'#1b1b1f',4);rr(x-105+s,y-24,100,8,4,'#7cf0a0',0);
  X.save();X.globalAlpha=.7;for(let k=1;k<3;k++)circ(x-55+s,y-20,40+k*26,null,5,'#25d366');X.restore()}}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-430,320,40,40,6,'#5b4636',5);rr(390,320,40,40,6,'#5b4636',5);
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,o.glowc||'#8fd0ff',0);
  if(o.type){for(let k=0;k<4;k++)rr(-110,-196+k*38,lerp(80,220,(Math.sin(k*2+o.t*3)+1)/2),14,6,'rgba(255,255,255,.7)',0)}X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,'#e86a5a')}
 X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));}
function counter(x0,x1){rr(x0,1380,x1-x0,60,12,'#e9e2d6',7);rr(x0+10,1440,x1-x0-20,330,10,'#8fb7c9',7);for(let k=x0+40;k<x1-60;k+=220){rr(k,1470,180,270,12,'#a7c9d8',5);line([[k+70,1500],[k+110,1500]],10,'#5d7a88')}}
function kitchen(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:0,lamp:0,wall:'#dfe9ef',wall2:'#c8d7e0',floor:'#b9a58c',floor2:'#93806a',curtain:'#7fb3d5',curtain2:'#5f93b5'},o));
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore();wclockK(250,470,.9,7,14)}
function wclockK(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function bedroom(t,o={}){proom(t,{win:o.win||830,night:o.night,rain:o.rain,wall:o.night?'#8ea0c8':'#f4dfc6',wall2:o.night?'#7486b4':'#e9c9a6',curtain:o.night?'#5a6fc0':'#e98a6a',curtain2:o.night?'#41539e':'#cc6d50',plant:0,lamp:0,frame:[220,560]})}
function zzz(x,y,t,a=1){for(let k=0;k<3;k++){const ph=(t*.6+k/3)%1;X.save();X.globalAlpha=a*Math.sin(ph*Math.PI);txt('Z',x+ph*120+k*10,y-ph*220,50+k*14,'#fff',0);X.restore()}}
function arm2(x0,y0,x1,y1,s=1){line([[x0,y0],[x1,y1]],17*s,'#151515');ell(x1,y1,31*s,27*s,'#151515',0)}
// ---- drip video ----
const PER=.85,OFF=.15,BXX=640,BT=1010,SCB=1.0,HYB=880,FYB=HYB+767*SCB,XY=500,XH=800;
function dph(t){return(((t-OFF)/PER)%1+1)%1}
// the drip 'sound' made visible: a 💧 chip that pulses on every plink, with ripple rings
function dripChip(x,y,t,s=1){const ph=dph(t),k=ph>.75?(ph-.75)/.25:0;chip(x,y,'💧',s*(1+.18*Math.sin(k*Math.PI)));if(k>0){X.save();X.globalAlpha=1-k;for(let j=0;j<2;j++)circ(x,y,(80+k*70+j*28)*s,null,5,'#bfe3ff');X.restore()}}
function bed2(t,you,her,o={}){bedroom(t,{night:1,rain:o.rain});if(o.warm)glow(160,900,620,'255,210,140',.45);bedBack(BXX,BT);
 sm(XH,FYB,SCB,Object.assign({t,flip:1,blink:0},HER,her));sm(XY,FYB,SCB,Object.assign({t,blink:0},YOU,you));bedFront(BXX,BT)}
function pot(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-170,-10,340,30,14,'#aab4bf',6);rr(-150,10,300,190,26,'#c3ccd6',7);X.fillStyle='rgba(255,255,255,.5)';X.fillRect(-120,40,30,120);
 ell(0,0,160,22,'#6fa8d6',5);rr(-205,40,60,26,12,'#3b4250',5);rr(145,40,60,26,12,'#3b4250',5);X.restore()}

// A: 03:12, both awake in the dark, the drip pulsing
sh(0,(t,r)=>{cam(600,980,lerp(1.08,1.12,C(r/4)),t,.12);
 const snap=r>.4;bed2(t,{eyes:snap?'wide':'closed',brow:snap?'flat':'flat',mouth:snap?'flat':'smile',look:[.4,-.6],lid:snap?.25:0},{eyes:'wide',lid:.3,brow:'flat',mouth:'flat',look:[-.3,-.6]});
 nstand(170,1250,'03:12',1);dripChip(900,520,t,1.05);
 label3(snap?'You at 03:12 😳':'You at 03:12 😴',C(r/.2))});
// B: she turns to you: 'Did you call the plumber?'  then your sheepish 'Monday. Promise.'
sh(T('f1')-.05,(t,r)=>{cam(610,960,1.12,t,.12);const rs=T('s1')-T('f1')+.05,me=r>rs;
 bed2(t,{eyes:me?'happy':'wide',brow:me?'worried':'up',mouth:me?'grin':'o',sweat:me,blush:me,look:[.8,-.1],tilt:me?-4:0},
  {eyes:'open',lid:.35,brow:me?'smug':'up',mouth:r<1.1?'open':'smirk',talk:r<1.15?t:null,look:[-.9,0],tilt:6});
 nstand(170,1250,'03:12',1);dripChip(930,500,t,.85);
 label3(me?'You, 03:12 😅':'Her, 03:12 🙃',C((me?r-rs:r)/.2))});
// C: the kitchen tap at night, rain on the window, plink into the pot
sh(T('s1')+1.55,(t,r)=>{cam(560,1220,lerp(1.12,1.2,C(r/3)),t,.15);proom(t,{win:780,frame:null,plant:0,lamp:0,night:1,rain:1,wall:'#7f93b8',wall2:'#6c80a6',floor:'#b9a58c',floor2:'#93806a',curtain:'#7fb3d5',curtain2:'#5f93b5'});glow(560,1150,520,'190,215,255',.3);
 counter(40,1080);pot(578,1400,1.0);tap(380,1020,1.8,{t,drip:1,per:PER,off:OFF,fall:111});
 label3('The tap, week 3 💧',C(r/.2))});
// D: back in bed: Memopai hops onto the nightstand, the 🔧 thought flies into your phone
sh(T('s3')-.3,(t,r)=>{cam(600,960,1.08,t,.15);
 const up=r>.3;bed2(t,{eyes:'open',brow:'up',mouth:r>1.0?'smile':'flat',look:[.6,-.2]},{eyes:'closed',brow:'flat',mouth:'smile'});
 arm2(XY+110,1060,XY+130,930,SCB);phoneH(XY+125,950,.2,r>.9);
 nstand(170,1250,null,0);const mp=C((r-.25)/.6);if(mp>0){memo(200,1180,.62,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(200,960,mp,10,200)}
 const fl=C((r-1.0)/1.0);if(r>.5){if(fl<1){const px=lerp(XY,XY+125,eo(fl)),py=lerp(560,930,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🔧',.95-fl*.45)}else sparkles(XY+125,930,C((r-2.0)/.5),8,120,'#7cf0a0')}
 dripChip(930,500,t,.7);
 label3(r<.45?'You, right then 📱':'Memopai 👋',C((r<.45?r:r-.45)/.2))});
// E: the WhatsApp chat
sh(T('s3')+2.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2350';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.9&&r<1.2,list:[{a:.05,me:1,text:'remind me monday morning to call the plumber 🔧',time:'03:13'},{a:1.2,me:0,text:'Got it ✅ Mon 09:00 · Call the plumber 🔧',time:'03:13'}]})});
// F: Monday 09:00 at your desk: buzz, you call, booked
sh(T('s4')+.45,(t,r)=>{cam(540,1000,1.04,t,.2);office(t,{wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,650,'255,225,160',.55);wclock(840,560,.9,9,0);
 const bz=r>.45,call=r>1.7,ok=r>2.6;
 sm(450,1760,1.25,Object.assign({t,eyes:bz&&r<1.2?'wide':(ok?'happy':'open'),brow:bz?'up':'flat',mouth:call&&!ok?'open':(ok?'grin':(bz?'o':'smile')),talk:call&&!ok?t:null,look:bz?[.6,.4]:[.3,.5],
  armR:call?150:35,bendR:call?-160:-115,holdR:(x,y)=>phoneH(x,y,call?.3:-.12,bz)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t,type:!bz});
 const n=r<1.7?C((r-.45)/.3):Math.max(0,1-(r-1.7)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Call the plumber 🔧 (Mon 09:00)'));
 if(ok){chip(760,800,'✅',eo(C((r-2.6)/.25)));sparkles(760,800,C((r-2.6)/.8),10,220,'#7cf0a0')}
 if(n<=0)label3('You, Monday 09:00 📱',C((r-1.7)/.2))});
// G: a few nights later, 03:12, warm, both asleep, no drip
sh(T('f2')-.1,(t,r)=>{cam(610,960,lerp(1.08,1.12,C(r/6)),t,.1);const rp=T('p1')-T('f2')+.1;
 bed2(t,{eyes:'closed',brow:'flat',mouth:'smile',blush:1,tilt:5},{eyes:'closed',brow:'up',mouth:r<1.7?'open':'smile',talk:r>.1&&r<1.6?t*.6:null,blush:1,tilt:-6},{warm:1});
 nstand(170,1250,'03:12',1);if(r>1.6)zzz(XY+120,HYB-170,t,.8);
 label3(r<rp+1.4?'You, Thursday 03:12 😴':'You, sorted 😌',C((r<rp+1.4?r:r-rp-1.4)/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(610,960,1.12,t,.1);
 bed2(t,{eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[.4,-.6]},{eyes:'wide',lid:.35,brow:'smug',mouth:'smirk',look:[-.9,0]});
 nstand(170,1250,'03:12',1);chip(910,560,'💧',1.2)});
