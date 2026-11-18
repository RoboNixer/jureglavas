const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-430,320,40,40,6,'#5b4636',5);rr(390,320,40,40,6,'#5b4636',5);
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,o.glowc||'#8fd0ff',0);
  if(o.scr=='form'){rr(-134,-216,268,40,8,'#4a8fe0',0);txt('Leave request',0,-196,22,'#fff',0,'800 ');txt('🎄 23 Dec – 2 Jan',0,-140,24,'#151515',0,'800 ');rr(-70,-100,140,44,22,o.click?'#25d366':'#ffd23f',0);txt(o.click?'Sent ✓':'Send',0,-78,24,'#151515',0,'800 ')}
  if(o.scr=='sent'){circ(0,-140,46,'#25d366',0);line([[-22,-140],[-6,-122],[24,-158]],11,'#fff');txt('Request sent',0,-66,26,'#151515',0,'800 ')}
  X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,'#e86a5a')}
 if(o.printer)printer(o.px||-300,0,.9,o.t||0);
 if(o.ooo)oooCard(o.ox||0,0,1);
 X.restore()}
// printer(x,y,s,t): office printer sitting on a surface at y (bottom centre), blinking light, paper tray
function printer(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);rr(-150,-170,300,170,22,'#e9ecef',7);rr(-150,-170,300,46,18,'#cfd5db',6);rr(-110,-60,220,30,8,'#9aa3ad',5);
 rr(-90,-230,180,70,6,'#fff',5);circ(110,-100,12,Math.sin(t*5)>0?'#25d366':'#1b6b3a',3);rr(60,-112,30,24,5,'#3b4250',0);X.restore()}
// oooCard(x,y,s): little folded desk card '🌴 Out of office' standing on a surface at y
function oooCard(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-110,0);X.lineTo(-90,-120);X.lineTo(90,-120);X.lineTo(110,0);X.closePath()},'#fff',6);
 txt('🌴',0,-84,40,'#111',0,'400 ');txt('Out of office',0,-34,22,'#151515',0,'800 ');X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));if(o.clock)wclock(250,470,.9,o.clock[0],o.clock[1])}
function coat(x,y){rr(x-70,y-20,140,230,40,'#3c6e91',7);line([[x-20,y-10],[x,y+60],[x+20,y-10]],6,'#2a4f6a')}
function notifP(y,p,title,body,em,bg){if(p<=0)return;X.save();X.globalAlpha=C(p*2);X.translate(0,lerp(-260,0,eo(p)));rr(60,y,960,230,48,'rgba(250,250,252,.97)',6);
 X.save();X.beginPath();X.roundRect(100,y+40,84,84,20);X.fillStyle=bg;X.fill();X.restore();txt(em,142,y+84,50,'#fff',0,'400 ');
 X.font="800 38px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,210,y+66);X.font="500 28px Inter";X.fillStyle='#888';X.textAlign='right';X.fillText('now',985,y+66);
 X.textAlign='left';X.font="600 36px Inter";X.fillStyle='#222';wrapT(body,760,X.font).forEach((l,i)=>X.fillText(l,210,y+122+i*46));X.restore()}
function thought(x,y,text,p){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(k,k);X.shadowColor='rgba(0,0,0,.2)';X.shadowBlur=14;rr(-210,-70,420,130,65,'#fff',6);X.shadowColor='transparent';circ(-110,80,20,'#fff',5);circ(-140,120,11,'#fff',4);txt(text,0,-4,60,'#151515',0,'800 ');X.restore()}
function lroom(t,o={}){proom(t,{win:o.win||760,night:o.night||0,frame:null,plant:o.plant?1:0,lamp:o.lamp?1:0,wall:o.wall||'#f2dcc0',wall2:o.wall2||'#e2c19e'});
 if(o.xmas){strlights(t,200,4,70);pblur(1,()=>xtree(o.tx||900,1380,1.15,t));bokeh(t,'255,214,150',8,150,800);glow(540,520,700,'255,205,150',.22)}}
// empty Christmas office: lights, two blurred empty desks with OOO cards
function xoffice(t){office(t,{wall:'#cfd8e2',wall2:'#b9c6d3'});strlights(t,190,4,60);
 pblur(1,()=>{for(const dx of[150,930]){rr(dx-50,1000,100,150,30,'#4a5568',5);rr(dx-150,1180,300,24,8,'#c99a6b',5);rr(dx-140,1204,280,120,6,'#b5855a',5);oooCard(dx,1180,1.1)}});
 X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(90,100,150,.18)';X.fillRect(-3000,-3000,8000,8000);X.restore()}
// A: Christmas Eve, alone in the office (also the cover)
function shotA(t,r,cov){cam(540,cov?880:1040,cov?1.0:lerp(1.04,1.1,C(r/3)),t,.14);xoffice(t);
 sm(470,1780,1.24,Object.assign({t,santa:1,eyes:'open',lid:.45,brow:'sad',mouth:'wavy',look:[-.2,.5],tilt:-5,armR:40,bendR:-100,armL:40,bendL:-100},YOU));
 desk(540,1440,1.0,{laptop:1,lx:60,t,glowc:'#bfe0ff',mug:1,printer:1,px:-280});
 if(!cov)label3('You, Dec 24 (if you wait) 🎄',C(r/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: her at home by the tree, on the phone
sh(T('f1')-.05,(t,r)=>{cam(520,1000,lerp(1.08,1.14,C(r/2.5)),t,.14);lroom(t,{xmas:1,tx:880});
 sm(440,1800,1.3,Object.assign({t,eyes:'open',lid:.4,brow:'up',mouth:r>1.9?'smirk':'smile',talk:r<2.2?t:null,look:[.6,-.1],armR:150,bendR:-160,holdR:(x,y)=>phoneH(x,y,.3,0),armL:30,bendL:30},HER));
 label3('Her, at home 🙃',C(r/.2))});
// C: REWIND this week, 17:58, coat on, the HR email, 'tomorrow'
sh(T('s1')-.05,(t,r)=>{cam(540,1020,lerp(1.04,1.1,C(r/4)),t,.14);office(t,{clock:[17,58]});
 const em=C((r-.9)/.3),tm=r>3.2;
 desk(560,1460,1.0,{laptop:1,lx:120,t,glowc:'#2b3240'});
 sm(380,1780,1.26,Object.assign({t,eyes:tm?'happy':'open',lid:tm?.3:0,brow:tm?'smug':'up',mouth:tm?'smirk':'o',look:tm?[0,0]:[.6,-.5],armR:150,bendR:-160,holdR:(x,y)=>coat(x,y),armL:40,bendL:-110,holdL:(x,y)=>phoneH(x,y,-.2,em>0)},YOU));
 const nOut=tm?C((r-3.2)/.3):0;scr(()=>notifP(150,em*(1-nOut),'HR 📩','Christmas leave: first come, first served 🎄','🏢','#4a8fe0'));
 thought(660,560,'tomorrow 🙃',C((r-3.3)/.3));
 rewind(1-C(r/.5),t,'◀◀ THIS WEEK');
 const lab=r>.45&&(em<=0||nOut>=1);if(lab)label3('You, this week 📩',C((r-(em>0?3.5:.45))/.2))});
// D: instead: mascot hops on the desk, the 🎄 flies into the phone
sh(T('s2')-.05,(t,r)=>{cam(540,1020,1.06,t,.14);office(t,{clock:[17,59]});
 const mp=C(r/.6);
 desk(560,1460,1.0,{laptop:1,lx:120,t,glowc:'#2b3240'});
 sm(380,1780,1.26,Object.assign({t,eyes:'open',brow:'up',mouth:'smile',look:[.6,.3],armR:150,bendR:-160,holdR:(x,y)=>coat(x,y),armL:110,bendL:-150,holdL:(x,y)=>phoneH(x,y,.2,1)},YOU));
 memo(830,1430,.9,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(830,1140,mp,8,180);
 const hy=1780-767*1.26,fl=C((r-.7)/1.0);if(fl<1){const px=lerp(380,250,eo(fl)),py=lerp(hy-130,hy+330,eo(fl))-Math.sin(fl*Math.PI)*140;chip(px,py,'🎄',.9-fl*.4)}else sparkles(250,hy+330,C((r-1.7)/.5),8,120,'#7cf0a0');
 label3('Memopai 👋',C(r/.2))});
// E: WhatsApp chat
sh(T('s2')+2.3,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r+.3,{typing:r>.45&&r<.8,list:[{a:.1,me:1,text:'remind me tomorrow 9am: book christmas leave 🎄',time:'17:59'},{a:1.0,me:0,text:'Got it ✅ Thu 09:00 · Book Christmas leave 🎄',time:'17:59'}]})});
// F: next morning 09:00: buzz, you book it
sh(T('s3')-.05,(t,r)=>{cam(540,1020,lerp(1.04,1.1,C(r/3)),t,.14);office(t,{clock:[9,0],wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,650,'255,225,160',.5);
 const bz=r>.75,bk=r>1.6,done=r>2.1;
 sm(380,1780,1.26,Object.assign({t,eyes:bz&&!bk?'wide':(done?'happy':'open'),brow:'up',mouth:done?'grin':(bz?'o':'smile'),look:bk?[.7,.5]:[.4,.3],armR:bk?60:150,bendR:bk?-40:-160,holdR:bk?null:((x,y)=>phoneH(x,y,.3,bz)),armL:40,bendL:-90},YOU));
 desk(560,1460,1.0,{laptop:1,lx:120,t,glowc:'#fff',scr:done?'sent':'form',click:r>1.9,mug:1});
 if(done)sparkles(680,1250,C((r-2.1)/.6),10,200,'#7cf0a0');
 const n=r<1.55?C((r-.75)/.3):Math.max(0,1-(r-1.55)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Book Christmas leave 🎄'));
 if(n<=0)label3('You, Thu 09:00 ☕',C(r/.2))});
// G: Christmas Eve at home: she hugs you; your OOO card on the side table
sh(T('f2')-.05,(t,r)=>{const p1=r>T('p1')-T('f2');cam(540,1040,lerp(1.04,1.1,C(r/4.5)),t,.14);lroom(t,{xmas:1,tx:960,lamp:1});
 rr(60,1450,300,30,10,'#8a5a3a',5);rr(80,1480,260,300,8,'#7a4e33',5);rr(120,1420,180,30,6,'#3b4250',5);oooCard(210,1420,1.15);
 sm(450,1810,1.18,Object.assign({t,eyes:'happy',brow:'up',mouth:p1?'grin':'open',talk:!p1&&r<1.0?t:null,blush:1,look:[.5,0],armR:100,bendR:-100,armL:40,bendL:20},HER));
 sm(760,1820,1.2,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',blush:p1,look:[-.6,0],armL:120,bendL:-60,armR:30},YOU));
 chip(600,560,'❤️',eo(C((r-.3)/.3))*.8,Math.sin(t*3)*.1);
 if(p1){psnow(t,.5,60);sparkles(600,1200,C((r-(T('p1')-T('f2')))/1.2),10,220)}
 label3(p1?'You, sorted 😌':'Her, Dec 24 🥹',C((p1?r-(T('p1')-T('f2')):r)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,1.6,1));
