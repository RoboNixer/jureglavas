const YOU={hair:'curl'};
const GRAN={hair:'bun',hairc:'#c9c9d4',lashes:1};
const KID={hair:'bun',hairc:'#7a4a2a',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function glasses(hx,hy,s){X.save();X.translate(hx,hy);X.scale(s,s);X.strokeStyle='#5a3b2a';X.lineWidth=8;X.fillStyle='rgba(180,220,255,.18)';
 for(const d of[-1,1]){X.beginPath();X.arc(d*46,-14,54,0,7);X.fill();X.stroke()}X.beginPath();X.moveTo(-10,-20);X.quadraticCurveTo(0,-30,10,-20);X.stroke();X.restore()}
function gran(x,y,s,o){sm(x,y,s,Object.assign({},GRAN,o));glasses(x+(o&&o.flip?-1:1)*((o&&o.look?o.look[0]:0)*10)*s,y-767*s,s)}
// ---- craft ladder 2026-11-18 20:00: school-play kit (stage, star costume, thumb-over-lens video call, fridge letter) ----
// star5(x,y,r,col): five-point star
function star5(x,y,r,col='#ffd23f',lw=8,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.beginPath();for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,rr2=k%2?r*.45:r;X.lineTo(Math.cos(a)*rr2,Math.sin(a)*rr2)}X.closePath();X.fillStyle=col;X.fill();X.strokeStyle='#151515';X.lineWidth=lw;X.lineJoin='round';X.stroke();X.restore()}
// starKid(x,y,s,o): the kid in a star costume (head pokes through the star)
function starKid(x,y,s,o={}){const hy=y-767*s,t=o.t||0;star5(x,hy+120*s,330*s,'#ffd23f',9*s,Math.sin(t*2)*.05);glow(x,hy+120*s,300*s,'255,230,120',.35);sm(x,y,s,Object.assign({},KID,o))}
// stage(t,o): school hall stage: red curtains, valance, wooden floor, spotlight, paper-star garland
function stage(t,o={}){const g=X.createLinearGradient(0,-300,0,1300);g.addColorStop(0,'#2a1f4a');g.addColorStop(1,'#4a3570');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 X.fillStyle='#b9824e';X.fillRect(-3000,1300,8000,3000);X.strokeStyle='rgba(90,55,25,.35)';X.lineWidth=5;for(let k=-6;k<14;k++){X.beginPath();X.moveTo(k*120,1300);X.lineTo(k*220-500,2400);X.stroke()}
 X.fillStyle='#8a5a32';X.fillRect(-3000,1290,8000,26);
 for(const sd of[-1,1]){const x0=sd<0?-200:1280;for(let k=0;k<6;k++){const xx=x0+sd*-1*k*58;X.fillStyle=k%2?'#b3243a':'#d23a4e';X.beginPath();X.moveTo(xx,-300);X.quadraticCurveTo(xx+sd*-30+Math.sin(t+k)*6,700,xx+sd*-1*40,1320);X.lineTo(xx+sd*-1*100,1320);X.quadraticCurveTo(xx+sd*-1*70,700,xx+sd*-1*58,-300);X.fill()}}
 X.fillStyle='#c22f44';X.beginPath();X.moveTo(-300,-300);X.lineTo(1400,-300);X.lineTo(1400,140);for(let k=0;k<9;k++){X.quadraticCurveTo(1400-k*190-95,240,1400-(k+1)*190,140)}X.closePath();X.fill();X.strokeStyle='#151515';X.lineWidth=6;X.stroke();
 for(let k=0;k<7;k++){const xx=60+k*160,yy=300+Math.sin(k*1.3)*30;X.strokeStyle='rgba(255,255,255,.5)';X.lineWidth=3;X.beginPath();X.moveTo(xx-80,yy-30);X.quadraticCurveTo(xx,yy+10,xx+80,yy-30);X.stroke();star5(xx,yy+30,30,k%2?'#ffd23f':'#ffffff',4,Math.sin(t*2+k)*.2)}
 if(o.spot!==0){X.save();X.globalCompositeOperation='lighter';const sx=o.sx||540;const gg=X.createLinearGradient(sx,-200,sx,1500);gg.addColorStop(0,'rgba(255,240,190,.35)');gg.addColorStop(1,'rgba(255,240,190,.08)');X.fillStyle=gg;X.beginPath();X.moveTo(sx-60,-200);X.lineTo(sx+60,-200);X.lineTo(sx+330,1500);X.lineTo(sx-330,1500);X.closePath();X.fill();X.restore();ell(sx,1500,330,60,'rgba(255,240,190,.25)',0)}}
// thumb(x,y,s,rot): a big thumb pad coming in from below (the filmer's thumb over the lens)
function thumb(x,y,s=1,rot=.35){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=40;
 rr(-210,-330,420,1100,210,'#f0c4a2',10);X.shadowColor='transparent';const g=X.createRadialGradient(-60,-170,20,0,-100,300);g.addColorStop(0,'rgba(255,230,210,.7)');g.addColorStop(1,'rgba(255,230,210,0)');X.fillStyle=g;X.beginPath();X.ellipse(0,-120,190,260,0,0,7);X.fill();
 X.strokeStyle='rgba(150,90,60,.35)';X.lineWidth=5;for(let k=0;k<5;k++){X.beginPath();X.ellipse(0,-120,60+k*28,90+k*34,0,3.6,5.8);X.stroke()}
 X.strokeStyle='rgba(150,90,60,.5)';X.lineWidth=6;X.beginPath();X.moveTo(-130,330);X.quadraticCurveTo(0,300,130,330);X.stroke();X.restore()}
// callView(t,w,h,o): a video call of the play, drawn inside a w*h box at the current origin (top-left 0,0)
function callView(t,w,h,o={}){X.save();X.beginPath();X.roundRect(0,0,w,h,o.rad||0);X.clip();const k=w/1080;X.save();X.scale(k,k);
 X.translate(Math.sin(t*1.7)*18,Math.cos(t*1.3)*14);pblur(o.blur==null?3:o.blur,()=>{stage(t,{sx:560});starKid(o.kx||560,1560,.62,{t,eyes:'happy',mouth:'open',talk:t,brow:'up',armL:150+Math.sin(t*6)*12,bendL:-30,armR:150,bendR:30})});
 thumb(o.tx||200,o.ty||1500,o.ts||1.5,o.tr||.4);X.restore();
 if(o.ui){X.fillStyle='rgba(0,0,0,.32)';X.fillRect(0,h-h*.1,w,h*.1);for(const[bx,c,ic]of[[.28,'rgba(255,255,255,.25)','🎤'],[.5,'#e5484d','📞'],[.72,'rgba(255,255,255,.25)','📷']]){circ(bx*w,h-h*.05,h*.032,c,0);txt(ic,bx*w,h-h*.048,h*.028,'#fff',0,'400 ')}
  X.font=`700 ${Math.round(h*.022)}px Inter`;X.fillStyle='#fff';X.textAlign='center';X.fillText('👵 Grandma',w/2,h*.05);X.font=`500 ${Math.round(h*.017)}px Inter`;X.fillText(o.timer||'03:12',w/2,h*.08)}
 X.restore()}
// bigPhone(x,y,s,rot,t,o): a large phone showing the call
function bigPhone(x,y,s,rot,t,o={}){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=30;rr(-170,-320,340,640,40,'#1b1b1f',8);X.shadowColor='transparent';
 X.save();X.translate(-150,-298);callView(t,300,596,Object.assign({rad:26,ui:1,blur:2},o));X.restore();X.restore()}
// fridge(x,y,s,o): kitchen fridge (bottom centre at y) with the school letter + magnets
function fridge(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,10,300,30,'#000',0);X.globalAlpha=1;
 rr(-260,-1250,520,1250,40,'#eef3f6',8);line([[-260,-830],[260,-830]],7,'#151515');rr(190,-1120,22,220,10,'#b9c3cc',5);rr(190,-760,22,260,10,'#b9c3cc',5);
 const gg=X.createLinearGradient(-260,0,260,0);gg.addColorStop(0,'rgba(255,255,255,.5)');gg.addColorStop(.3,'rgba(255,255,255,0)');gg.addColorStop(1,'rgba(120,140,160,.15)');X.fillStyle=gg;X.fillRect(-255,-1245,510,1240);
 circ(-170,-1180,22,'#ff5a7a',4);circ(140,-560,22,'#4a8fe0',4);rr(-200,-420,120,90,10,'#ffd23f',5);txt('🍕',-140,-372,50,'#111',0,'400 ');
 if(o.letter!==0){X.save();X.translate(-30,-1080);X.rotate(-.04);rr(-150,0,300,380,8,'#fffdf5',6);circ(0,6,18,'#e0533d',4);txt('⭐',0,80,64,'#111',0,'400 ');txt('Christmas',0,160,34,'#151515',0,'800 ');txt('play',0,200,34,'#151515',0,'800 ');
  rr(-110,240,220,60,12,'#ffe7a0',0);txt('Fri · 16:00',0,272,30,'#b3243a',0,'800 ');X.restore()}
 X.restore()}
function kitchen(t,o={}){proom(t,{win:o.win||820,night:o.night||0,frame:null,plant:0,lamp:o.night?1:0,wall:o.night?'#a9b6d6':'#f6e6c8',wall2:o.night?'#8e9cc2':'#ead1a8',curtain:'#7cc47c',curtain2:'#5aa45a'});
 for(let k=0;k<6;k++){rr(40+k*84,1180,84,84,0,k%2?'#ffffff':'#e8eef2',3)}}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);const sh2=o.shut||0;path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);
  X.save();X.scale(1,1-sh2*.93);rr(-150,-230,300,215,14,'#3b4250',7);if(sh2<.6){rr(-134,-216,268,188,8,'#8fd0ff',0);rr(-110,-190,160,18,6,'#fff',0);rr(-110,-160,200,14,6,'#d8ecff',0);rr(-110,-130,180,14,6,'#d8ecff',0)}X.restore();X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,'#e86a5a')}
 X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));if(o.clock)wclock(250,470,.9,o.clock[0],o.clock[1])}
function coat(x,y){rr(x-70,y-20,140,230,40,'#3c6e91',7);line([[x-20,y-10],[x,y+60],[x+20,y-10]],6,'#2a4f6a')}
// hall seats (front row) seen from behind-ish
function seats(y,n=5,x0=-40){for(let k=0;k<n;k++){const x=x0+k*260;rr(x,y,200,170,30,'#3b4a7a',6);rr(x+10,y+170,180,40,10,'#2c3860',5)}}

// A: Friday 16:10 at your desk, watching the play through Grandma's thumb (also the cover)
function shotA(t,r,cov){cam(540,cov?960:1000,cov?1.0:lerp(1.05,1.12,C(r/3.4)),t,.12);office(t,{clock:[16,10]});
 desk(560,1500,1.0,{laptop:1,lx:-200,mug:0});
 sm(300,1830,1.22,Object.assign({t,eyes:'open',brow:'worried',mouth:'wavy',look:[.75,-.1],sweat:r>1||cov,tilt:6,armR:115,bendR:-70,holdR:(x,y)=>bigPhone(x+170,y-260,1.15,.06,t,{})},YOU));
 if(!cov)label3('You, at work, Fri 16:10 😬',C(r/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: full-screen call: the thumb fills half the screen
sh(T('g1')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.save();X.translate(Math.sin(t*2.3)*10,0);callView(t,1080,1920,{ui:1,blur:2,kx:760,tx:180+Math.sin(t*1.5)*30,ty:1500,ts:2.3,tr:.42,timer:'03:1'+Math.min(9,Math.floor(r*2))});X.restore();
 // your self-view
 X.save();X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=24;rr(800,440,240,330,30,'#dfe7ee',0);X.restore();X.save();X.beginPath();X.roundRect(800,440,240,330,30);X.clip();X.fillStyle='#dfe7ee';X.fillRect(800,440,240,330);
 sm(920,1080,.48,Object.assign({t,noshadow:1,eyes:'open',brow:'worried',mouth:'wavy',look:[-.2,-.1],sweat:1},YOU));X.restore();X.strokeStyle='#fff';X.lineWidth=6;X.beginPath();X.roundRect(800,440,240,330,30);X.stroke();
 label3('Grandma, filming 👵',C(r/.2))});
// C: the letter on your fridge, for weeks; you walk past with coffee
sh(T('s1')-.05,(t,r)=>{if(r>2.2){cam(540,1020,lerp(1.04,1.1,C((r-2.2)/2)),t,.12);office(t,{clock:[16,0]});desk(560,1500,1.0,{laptop:1,lx:120,mug:1});
 sm(380,1830,1.24,Object.assign({t,eyes:'open',lid:.3,brow:'flat',mouth:'flat',look:[.5,.4],armR:60,bendR:-60,armL:50,bendL:-70},YOU));label3('You, Friday 16:00 💻',C((r-2.2)/.2));return}
 cam(560,1020,lerp(1.04,1.1,C(r/4)),t,.12);kitchen(t);
 fridge(700,1790,.9,{});
 const wx=lerp(140,420,C(r/4));sm(wx,1820,1.18,Object.assign({t,walk:t,eyes:'open',brow:'flat',mouth:'smile',look:[-.5,.2],armR:110,bendR:-130,holdR:(x,y)=>{rr(x-30,y-80,60,80,12,'#e86a5a',5)}},YOU));
 label3('Your fridge, for weeks 🧲',C(r/.2))});
// D: rewind: the day it came home; Memopai hops on the fridge; the ⭐ flies into your phone
sh(T('s2')-.05,(t,r)=>{cam(560,1020,1.06,t,.12);kitchen(t,{night:1});
 fridge(700,1790,.9,{});
 const mp=C((r-.5)/.6);if(mp>0){memo(720,700,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(720,460,mp,8,180)}
 const hy=1820-767*1.18;sm(300,1820,1.18,Object.assign({t,eyes:'open',brow:'up',mouth:r>1.6&&r<3.6?'open':'smile',talk:r>1.6&&r<3.6?t:null,look:[.6,-.2],armR:150,bendR:-160,holdR:(x,y)=>phoneH(x,y,.25,r>1.6)},YOU));
 const fl=C((r-1.7)/1.0);if(r<1.7)chip(420,hy-170,'⭐',C((r-.2)/.3),Math.sin(t*3)*.1);else if(fl<1){const px=lerp(420,420,eo(fl)),py=lerp(hy-170,hy+330,eo(fl))-Math.sin(fl*Math.PI)*150;chip(px,py,'⭐',1-fl*.5)}else sparkles(420,hy+320,C((r-2.7)/.5),8,120,'#7cf0a0');
 rewind(1-C(r/.5),t,'◀◀ THE DAY IT CAME HOME');
 if(r>.45)label3(mp<1?'You, 3 weeks ago ✉️':'Memopai 👋',C((r-(mp<1?.45:1.1))/.2))});
// E: WhatsApp chat: voice note + reply
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#2a1f4a';X.fillRect(0,0,1080,1920);glow(540,900,700,'255,220,140',.25);
 phoneUI(540,900,1.28,r+.3,{typing:r>.5&&r<.85,list:[{a:.05,me:1,voice:1,pl:C((r-.05)/1.6),dur:'0:03',time:'19:42'},{a:1.0,me:0,text:'Got it ✅ Fri 15:00 · Leave for the play ⭐',time:'19:42'}]})});
// F: Friday 15:00 at the desk: buzz, laptop shut, coat on
sh(T('s4')-.05,(t,r)=>{cam(540,1020,lerp(1.04,1.1,C(r/2.4)),t,.12);office(t,{clock:[15,0],wall:'#fbe9cf',wall2:'#f2d3ae'});glow(780,500,650,'255,225,160',.5);
 const bz=r>.35,up=r>1.3;
 desk(560,1500,1.0,{laptop:1,lx:120,mug:1,shut:C((r-1.2)/.3)});
 sm(380,1830,1.24,Object.assign({t,eyes:bz&&!up?'wide':'happy',brow:'up',mouth:up?'grin':(bz?'o':'flat'),look:[.4,.3],armR:150,bendR:-160,holdR:up?((x,y)=>coat(x,y)):((x,y)=>phoneH(x,y,.3,bz)),armL:40,bendL:-90},YOU));
 const n=r<1.3?C((r-.3)/.3):Math.max(0,1-(r-1.3)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Leave for the play ⭐'));
 if(n<=0)label3('You, Fri 15:00 💻',C((r-1.5)/.2))});
// G: on stage: the star spots you and waves
sh(T('k1')-.1,(t,r)=>{cam(540,1000,lerp(1.06,1.12,C(r/1.6)),t,.12);stage(t,{sx:540});
 starKid(540,1760,1.0,{t,eyes:'happy',brow:'up',mouth:'open',talk:r<1.1?t:null,blush:1,look:[0,.5],armR:160+Math.sin(t*12)*14,bendR:-20,armL:30,bendL:20});
 sparkles(540,700,C(r/1),10,300,'#ffe680');
 label3('Your kid, on stage ⭐',C(r/.2))});
// H: front row: you clapping; Grandma beside you, filming, thumb still over the lens
sh(T('p1')-.1,(t,r)=>{cam(540,1040,lerp(1.02,1.08,C(r/4)),t,.12);
 pblur(4,()=>{stage(t,{sx:540});starKid(540,1250,.42,{t,eyes:'happy',mouth:'open',armR:150,bendR:-20})});
 X.save();X.fillStyle='rgba(20,12,40,.25)';X.fillRect(-3000,-3000,8000,8000);X.restore();
 seats(1500,5,-60);
 const clap=Math.sin(t*14)>0;
 sm(330,1860,1.2,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.2,-.4],armR:clap?120:105,bendR:clap?-110:-95,armL:clap?120:105,bendL:clap?-110:-95},YOU));
 gran(760,1880,1.12,{t,flip:1,eyes:'happy',brow:'up',mouth:'smile',look:[-.2,-.4],armL:160,bendL:-40,armR:160,bendR:-40,holdL:(x,y)=>bigPhone(x,y-150,.5,-.1,t,{blur:2,tx:280,ty:1400,ts:1.9})});
 label3('You, sorted 😌',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,r,1));
