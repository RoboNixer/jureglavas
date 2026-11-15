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
function bedroom(t,o={}){proom(t,{win:o.win||830,night:o.night,rain:o.rain,wall:o.night?'#8ea0c8':'#f4dfc6',wall2:o.night?'#7486b4':'#e9c9a6',curtain:o.night?'#5a6fc0':'#e98a6a',curtain2:o.night?'#41539e':'#cc6d50',plant:0,lamp:0,frame:[220,560]})}
function zzz(x,y,t,a=1){for(let k=0;k<3;k++){const ph=(t*.6+k/3)%1;X.save();X.globalAlpha=a*Math.sin(ph*Math.PI);txt('Z',x+ph*120+k*10,y-ph*220,50+k*14,'#fff',0);X.restore()}}
function arm2(x0,y0,x1,y1,s=1){line([[x0,y0],[x1,y1]],17*s,'#151515');ell(x1,y1,31*s,27*s,'#151515',0)}
const HX=640,HY=900,SC=1.1,FY=HY+767*SC,BT=1030;
function sleeper(t,o){bedBack(HX,BT);sm(HX,FY,SC,Object.assign({t,blink:0},YOU,o))}
// friend notification (pink avatar letter, not Memopai)
function notifF(y,p,title,body){if(p<=0)return;X.save();X.globalAlpha=C(p*2);X.translate(0,lerp(-260,0,eo(p)));rr(60,y,960,200,48,'rgba(250,250,252,.97)',6);
 circ(142,y+100,46,'#e2508a',0);txt('A',142,y+102,50,'#fff',0);
 X.font="800 40px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,215,y+66);X.font="500 28px Inter";X.fillStyle='#888';X.textAlign='right';X.fillText('now',985,y+66);
 X.textAlign='left';X.font="600 40px Inter";X.fillStyle='#222';X.fillText(body,215,y+130);X.restore()}
// her room at night (lamp on, pink walls)
function herRoom(t){proom(t,{win:300,night:1,lamp:880,frame:null,plant:0,wall:'#e9b9cf',wall2:'#d39ab5',curtain:'#8a6fc9',curtain2:'#6d54ad'})}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));glow(120,760,560,'255,214,150',.45)}
// night street: dark sky, moon, blurred houses with lit windows, wet pavement, a street lamp
function nightStreet(t){psky('#141a3d','#2b3470','#4a4f8a',1150);X.fillStyle='#fff6d8';X.beginPath();X.arc(820,300,46,0,7);X.fill();glow(820,300,200,'255,250,220',.4);
 pblur(3,()=>{const cols=['#3a3f6b','#463a63','#33496b','#4a4466'];for(let k=0;k<7;k++){const x=-120+k*190,h=380+rnd(k+2)*220,w=200;X.fillStyle=cols[k%4];X.fillRect(x,1150-h,w,h);
  for(let r=0;r<3;r++)for(let c=0;c<2;c++){X.fillStyle=rnd(k*7+r*3+c)>.45?'#ffd98a':'#2a2f55';X.fillRect(x+34+c*86,1150-h+50+r*110,50,70)}}});
 const pg=X.createLinearGradient(0,1150,0,2000);pg.addColorStop(0,'#4b4f6e');pg.addColorStop(1,'#2f3250');X.fillStyle=pg;X.fillRect(-3000,1150,8000,3000);
 X.strokeStyle='rgba(255,255,255,.08)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*60,1150);X.lineTo(540+k*300,2000);X.stroke()}
 // street lamp
 line([[960,1500],[960,520]],16,'#20233a');line([[960,530],[880,500]],12,'#20233a');rr(830,490,90,40,14,'#20233a',0);glow(870,540,420,'255,214,140',.55);
 X.save();X.globalAlpha=.18;X.fillStyle='#ffd98a';X.beginPath();X.moveTo(840,530);X.lineTo(900,530);X.lineTo(1100,1500);X.lineTo(640,1500);X.fill();X.restore();
 haze(1050,1250,'90,90,150',.35)}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function sms(x,y,s,p,text,me){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(s*k,s*k);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-200,-60,400,120,40,me?'#d9fdd3':'#fff',5);X.shadowColor='transparent';txt(text,0,4,52,'#111',0);X.restore()}

// A: 01:12, phone buzzing, eyes snap open
sh(0,(t,r)=>{const snap=r>.55;cam(520,1000,lerp(1.1,1.16,C(r/2.7)),t,.15);bedroom(t,{night:1});
 sleeper(t,{eyes:snap?'wide':'closed',brow:snap?'worried':'flat',mouth:snap?'o':'smile',look:[-.5,-.1]});bedFront(HX,BT);nstand(190,1250,'01:12',2,t);
 if(r>.55&&r<.95)impact((r-.55)/.4);
 scr(()=>notifF(420,C((r-.2)/.3),'Ana 💛 · 4 missed calls','Are you home?? 😟'));
 label3(snap?'You at 01:12 😳':'You at 01:12 😴',C(r/.2))});
// B: split — you in bed on the phone / her in her room, worried
sh(T('f1')-.05,(t,r)=>{split2(t,
  (t)=>{bedroom(t,{night:1});sleeper(t,{eyes:'wide',lid:.1,brow:'worried',mouth:'wavy',sweat:1,look:[.5,-.2]});bedFront(HX,BT);arm2(820,1060,820,880,SC);phoneH(805,900,.25,1)},
  (t)=>{herRoom(t);sm(620,1760,1.1,Object.assign({t,flip:1,eyes:'wide',brow:'worried',mouth:r<2.2?'open':'smile',talk:r<2.3?t:null,look:[-.5,0],armR:165,bendR:-150,holdR:(x,y)=>{rr(x-28,y-76,56,112,12,'#1b1b1f',5)},armL:60,bendL:-80},HER))},
  {camA:[640,960,1.0],camB:[620,1000,1.0],p:C(r/.3)});
 label3('Your best friend, 01:12 😟',C((r-.15)/.25))});
// C: guilt in bed, rain, the 🏠 'text her' thought circling
sh(T('s1'),(t,r)=>{cam(580,990,1.14,t,.2);bedroom(t,{night:1,rain:1});
 sleeper(t,{eyes:'open',lid:.35,brow:'sad',mouth:'wavy',look:[0,-.6],sweat:r>1.5,tilt:-4});bedFront(HX,BT);nstand(190,1250,'01:13',1);
 const a=t*1.6;chip(HX+Math.cos(a)*300,HY-130+Math.sin(a)*110,'🏠',1.0+.12*Math.sin(r*2));
 label3('You, 01:13 😖',C(r/.25))});
// D: next Friday 22:30, she waves goodbye; Memopai hops in; the 🏠 thought flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.03,t,.2);nightStreet(t);
 const go=C((r-.2)/2.6);
 sm(lerp(720,980,go),lerp(1720,1640,go),lerp(1.0,.82,go),Object.assign({t,flip:go>.15?0:1,walk:go>.15?t:0,eyes:'happy',brow:'up',mouth:'smile',look:[-.6,0],armR:go>.15?150+Math.sin(t*10)*15:150+Math.sin(t*10)*15,bendR:-30,noshadow:0},HER));
 const talk=r>1.4;
 sm(330,1760,1.22,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.1],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,talk),armL:r<1.3?160+Math.sin(t*10)*12:20,bendL:r<1.3?-20:30},YOU));
 const mp=C((r-.05)/.6);if(mp>0){memo(640,1740,.85,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(640,1420,mp,10,220)}
 const fl=C((r-1.5)/1.2);if(r>.9){if(fl<1){const px=lerp(520,470,eo(fl)),py=lerp(560,870,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🏠',.95-fl*.45)}else sparkles(470,870,C((r-2.7)/.5),8,120,'#7cf0a0')}
 label3('You, next Friday 22:30 🫶',C(r/.25))});
// E: the WhatsApp chat
sh(T('y1')-.25,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2350';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>2.2&&r<2.5,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/2.0),dur:'0:03',time:'22:30'},{a:2.5,me:0,text:'✅ Today 23:10 · Text Ana: I’m home 🏠',time:'22:30'}]})});
// F: 23:10, home on the sofa, eyes closing... buzz; 'Home! 💛' sent; her reply
sh(T('s3'),(t,r)=>{cam(540,1000,1.04,t,.2);sofaRoom(t);
 const bz=r>1.55,typ=r>2.2;
 sm(420,1640,1.12,Object.assign({t,eyes:bz?(typ?'happy':'wide'):'lid',lid:bz?0:.6,brow:bz?'up':'flat',mouth:bz?(typ?'smile':'o'):'smile',look:[.6,.2],tilt:bz?0:-8,lean:bz?0:-6,
  armR:bz?60:20,bendR:bz?-110:40,holdR:(x,y)=>{if(bz)phoneH(x,y,-.1,1)}},YOU));
 psofa(500,1640,1.15);
 if(!bz){rr(560,1440,110,24,8,'#1b1b1f',4)}else if(r<1.8)impact((r-1.55)/.25);
 if(!bz&&r>.6)zzz(560,820,t,.7);
 const n=r<2.1?C((r-1.55)/.25):Math.max(0,1-(r-2.1)/.25);if(n>0)scr(()=>notif(420,n,'Memopai','Text Ana: I’m home 🏠 (23:10)'));
 sms(720,860,1.0,C((r-2.2)/.3),'Home! 💛 ✓✓',1);
 scr(()=>notifF(420,C((r-(T('f2')-T('s3'))+.05)/.3),'Ana 💛','Yay! Night night 💛'));
 label3('You, 23:10 🛋️',C(r/.25))});
// G: the fixed life, 01:12 asleep
sh(T('p1'),(t,r)=>{cam(600,980,lerp(1.14,1.2,C(r/4)),t,.12);bedroom(t,{night:1});glow(540,900,520,'255,220,160',.3);
 sleeper(t,{eyes:'closed',brow:'flat',mouth:'smile',blush:1,tilt:6});bedFront(HX,BT);nstand(190,1250,'01:12',1);zzz(HX+150,HY-170,t,.8);
 label3(r<1.4?'You at 01:12 😴':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,960,1.28,t,.1);bedroom(t,{night:1});
 sleeper(t,{eyes:'wide',brow:'worried',mouth:'o',look:[-.5,-.1]});bedFront(HX,BT);nstand(190,1250,'01:12',2,t)});
