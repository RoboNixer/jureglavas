const YOU={hair:'curl'};const BOSS={hair:'spike',hairc:'#8d939c'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-430,320,40,40,6,'#5b4636',5);rr(390,320,40,40,6,'#5b4636',5);
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,o.glowc||'#8fd0ff',0);
  if(o.sent){circ(0,-130,52,'#25d366',0);line([[-24,-130],[-6,-110],[26,-150]],12,'#fff');}
  else if(o.type){for(let k=0;k<4;k++)rr(-110,-196+k*38,lerp(80,220,(Math.sin(k*2+o.t*3)+1)/2),14,6,'rgba(255,255,255,.7)',0)}X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,'#e86a5a')}
 X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));if(o.clock)wclock(250,470,.9,o.clock[0],o.clock[1])}
function coat(x,y){rr(x-70,y-20,140,230,40,'#3c6e91',7);line([[x-20,y-10],[x,y+60],[x+20,y-10]],6,'#2a4f6a')}
// the boss: spiky grey hair + red tie (tie drawn at the neck of sm())
function boss(x,y,s,o){sm(x,y,s,Object.assign({},BOSS,o));const nx=x,ny=y-650*s;
 path(()=>{X.moveTo(nx-16*s,ny+30*s);X.lineTo(nx+16*s,ny+30*s);X.lineTo(nx+26*s,ny+200*s);X.lineTo(nx,ny+235*s);X.lineTo(nx-26*s,ny+200*s);X.closePath()},'#d8433a',5)}
// chat-style notification from a person (emoji avatar), not from Memopai
function notifP(y,p,title,body,em,bg){if(p<=0)return;X.save();X.globalAlpha=C(p*2);X.translate(0,lerp(-260,0,eo(p)));rr(60,y,960,230,48,'rgba(250,250,252,.97)',6);
 X.save();X.beginPath();X.roundRect(100,y+40,84,84,20);X.fillStyle=bg;X.fill();X.restore();txt(em,142,y+84,50,'#fff',0,'400 ');
 X.font="800 38px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,210,y+66);X.font="500 28px Inter";X.fillStyle='#888';X.textAlign='right';X.fillText('now',985,y+66);
 X.textAlign='left';X.font="600 36px Inter";X.fillStyle='#222';wrapT(body,760,X.font).forEach((l,i)=>X.fillText(l,210,y+122+i*46));X.restore()}
function terrace(t){psky('#ffb36b','#ffd59a','#fff0d2',1150);psun(820,380,90,t);pclouds(t,260,'#fff4e4','#f7d2b0',4,3);
 const fg=X.createLinearGradient(0,1150,0,2000);fg.addColorStop(0,'#cdbfae');fg.addColorStop(1,'#a8998a');X.fillStyle=fg;X.fillRect(-3000,1150,8000,3000);
 X.strokeStyle='rgba(0,0,0,.1)';X.lineWidth=3;for(let k=-6;k<=6;k++){X.beginPath();X.moveTo(540+k*90,1150);X.lineTo(540+k*400,2000);X.stroke()}
 pblur(2,()=>{rr(560,520,560,640,0,'#7a4a3a',7);rr(580,560,520,110,14,'#2f7d5a',6);txt('BAR',840,618,60,'#fff',0);
  for(let k=0;k<6;k++)path(()=>{X.moveTo(560+k*94,680);X.lineTo(654+k*94,680);X.lineTo(644+k*94,760);X.lineTo(570+k*94,760);X.closePath()},k%2?'#fff':'#e0533d',4);
  rr(610,800,200,300,8,'#ffe9a8',5);glow(710,950,260,'255,220,140',.5);rr(860,800,200,360,8,'#3a3f48',5)});
 rr(700,1230,280,24,10,'#6b4a3a',5);line([[840,1254],[840,1420]],10,'#6b4a3a');rr(780,1410,120,16,8,'#6b4a3a',4)}

// A: Friday 16:52, coat on -> the boss leans in
sh(0,(t,r)=>{cam(560,1000,lerp(1.1,1.16,C(r/6)),t,.15);office(t,{clock:[16,52]});
 const bs=T('b1')-.25,hit=r>bs;
 desk(420,1460,1.0,{laptop:1,lx:-120,t,glowc:'#2b3240'});
 sm(380,1760,1.26,Object.assign({t,eyes:hit?'wide':'happy',lid:0,brow:hit?'worried':'up',mouth:hit?'o':'grin',look:hit?[.8,-.1]:[0,0],sweat:r>bs+1,
  armR:150,bendR:-160,holdR:(x,y)=>coat(x,y),armL:20,bendL:30},YOU));
 const bi=eo(C((r-bs+.3)/.5));if(bi>0)boss(lerp(1300,860,bi),1760,1.2,{t,eyes:'open',lid:.25,brow:'up',mouth:'smile',talk:r>bs+.2&&r<T('s1')-.2?t:null,look:[-.7,0],lean:-6,armL:120,bendL:-40});
 label3(hit?'You at 16:52 😳':'You at 16:52 🎉',C(r/.25),300)});
// B: 19:40, empty office, rain, friends at the bar
sh(T('s1'),(t,r)=>{cam(540,1010,lerp(1.05,1.12,C(r/5)),t,.15);office(t,{night:1,rain:1,wall:'#7d889c',wall2:'#66718a',floor:'#6f6b66',floor2:'#57534f',clock:[19,40]});
 X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(70,80,140,.25)';X.fillRect(-3000,-3000,8000,8000);X.restore();
 const ping=r>2.5;
 sm(400,1760,1.25,Object.assign({t,eyes:'open',lid:.5,brow:'sad',mouth:'wavy',look:ping?[.7,.6]:[.4,.5],tilt:-6,lean:8,armR:40,bendR:-90,armL:40,bendL:-90},YOU));
 desk(500,1460,1.05,{laptop:1,lx:-60,t,type:1,glowc:'#bfe0ff'});glow(440,1300,260,'170,210,255',.35);
 if(ping){phoneH(820,1440,.4,1)}
 notifP(150,ping?C((r-2.5)/.3):0,'Bar crew','where are you??','🍻','#f2a33a');
 label3('You at 19:40 🫠',C(r/.25),470)});
// C: Memopai hops on the desk, the 📄 thought leaves the head into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.04,t,.2);office(t,{night:1,wall:'#8d97ab',wall2:'#76819a',floor:'#7a756f',floor2:'#625e59',clock:[19,41]});
 const talk=r>1.4;
 sm(380,1760,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:40,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.15,r>1.0)},YOU));
 desk(540,1460,1.05,{laptop:1,lx:-200,t,glowc:'#bfe0ff'});
 const mp=C((r-.1)/.6);if(mp>0){memo(800,1440,.95,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(800,1100,mp,10,240)}
 const fl=C((r-1.3)/1.1);if(fl<1){const px=lerp(310,500,eo(fl)),py=lerp(560,960,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'📄',.9-fl*.5)}else sparkles(500,960,C((r-2.4)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.25))});
// D: the voice note in WhatsApp
sh(T('y1')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.3&&r<1.6,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/2.0),dur:'0:03',time:'19:42'},{a:1.6,me:0,text:'✅ Every Friday 14:00 · Weekly report 📄',time:'19:42'}]})});
// E: next Friday 14:00, buzz, you write it, sent by 15:00, boss stunned
sh(T('s4'),(t,r)=>{cam(560,1000,1.05,t,.2);const late=r>2.1;office(t,{wall:'#fbe9cf',wall2:'#f2d3ae',clock:late?[15,0]:[14,0]});glow(780,500,650,'255,225,160',.55);
 const buzz=r>.2,bs=T('b2')-T('s4')-.2;
 desk(440,1460,1.0,{laptop:1,lx:-100,t,type:!late,sent:late,mug:1});
 sm(360,1760,1.25,Object.assign({t,eyes:buzz&&r<.9?'wide':(late?'happy':'open'),brow:buzz?'up':'flat',mouth:late?'grin':(buzz?'o':'smile'),look:r>bs?[.8,-.1]:[.3,.5],armR:40,bendR:-90,armL:40,bendL:-90},YOU));
 const bi=eo(C((r-bs+.1)/.45));if(bi>0)boss(lerp(1300,880,bi),1760,1.2,{t,eyes:'wide',brow:'up',mouth:'o',talk:r>bs+.15&&r<bs+1.6?t:null,look:[-.7,.2],lean:-8,armL:150,bendL:-60});
 if(r<2.1)notif(150,buzz?C((r-.2)/.3):0,'Memopai','Weekly report (Friday 14:00)');
 label3(late?'You, 15:00 ✅':'You, next Friday 📲',C(late?(r-2.1)/.25:r/.25),late?300:470)});
// F: 16:52, coat on, out the door
sh(T('p1'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/3)),t,.15);terrace(t);
 sm(860,1520,.72,{t,hair:'bun',hairc:'#e2508a',lashes:1,eyes:'happy',mouth:'grin',armR:160,bendR:-20,armL:30,bendL:20,noshadow:1});
 sm(330,1780,1.24,Object.assign({t,walk:r<1.4?t:null,eyes:r>1.4?'happy':'open',brow:'flat',mouth:'grin',blush:1,look:[.6,-.1],armL:160,bendL:-10,armR:150,bendR:-160,holdR:(x,y)=>coat(x,y)},YOU));
 sparkles(330,800,C((r-.6)/1.5),10,260);
 label3(r<1.3?'You at 16:52 🧥':'You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,1000,1.14,t,.1);office(t,{clock:[16,52]});
 desk(420,1460,1.0,{laptop:1,lx:-120,t,glowc:'#2b3240'});
 sm(380,1760,1.26,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',look:[.8,-.1],sweat:1,armR:150,bendR:-160,holdR:(x,y)=>coat(x,y),armL:20,bendL:30},YOU));
 boss(860,1760,1.2,{t,eyes:'open',lid:.25,brow:'up',mouth:'smile',look:[-.7,0],lean:-6,armL:120,bendL:-40})});
