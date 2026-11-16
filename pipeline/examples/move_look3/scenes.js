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
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));glow(120,760,560,'255,214,150',.45)}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function bub(x,y,p,text,me,who){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(k,k);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=18;
 X.font="700 62px Inter,'Noto Color Emoji'";const w=Math.max(X.measureText(text).width+90,who?380:0);rr(-w/2,-80,w,who?160:120,36,me?'#d9fdd3':'#fff',5);X.shadowColor='transparent';
 if(who){X.font="800 32px Inter";X.fillStyle='#d9488a';X.textAlign='left';X.textBaseline='middle';X.fillText(who,-w/2+40,-46)}
 txt(text,0,who?16:-20,62,'#111',0,'700 ');X.restore()}
function mug(x,y,t=0){X.save();X.translate(x,y);rr(-40,-96,80,96,14,'#e86a5a',6);X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.arc(44,-50,22,-1.3,1.3);X.stroke();
 X.globalAlpha=.7;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=7;X.beginPath();X.moveTo(-18+k*18,-110-ph*90);X.quadraticCurveTo(-8+k*18+Math.sin(t*3+k)*10,-140-ph*90,-18+k*18,-170-ph*90);X.stroke()}X.restore()}
const MATE={hair:'spike',hairc:'#e07a2a'};const GF={hair:'bun',hairc:'#6a4ad0',lashes:1};
// incoming call card (blue avatar 'M')
function callCard(y,p,title,body){if(p<=0)return;X.save();X.globalAlpha=C(p*2);X.translate(0,lerp(-260,0,eo(p)));rr(60,y,960,200,48,'rgba(250,250,252,.97)',6);
 circ(142,y+100,46,'#3a7bd5',0);txt('M',142,y+102,50,'#fff',0);
 X.font="800 40px Inter,'Noto Color Emoji'";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText(title,215,y+66);
 X.font="600 38px Inter";X.fillStyle='#25a35a';X.fillText(body,215,y+130);circ(930,y+100,40,'#25d366',0);txt('📞',930,y+102,40,'#fff',0,'400 ');X.restore()}
// stairwell: wall, diagonal steps rising to the right, banister; o.sun = warm light
function stairs(t,o={}){const g=X.createLinearGradient(0,-200,0,1900);g.addColorStop(0,o.sun?'#f6e2c0':'#c9c3b8');g.addColorStop(1,o.sun?'#e8c99a':'#a59d90');X.fillStyle=g;X.fillRect(-3000,-3000,8000,6000);
 // window up right
 rr(760,180,260,330,14,'#fff',8);rr(776,196,228,298,8,o.sun?'#bfe6ff':'#8fa0b8',0);if(o.sun){glow(890,340,420,'255,230,160',.6);rays(890,300,t,'255,240,200',.2)}else{X.save();X.beginPath();X.rect(776,196,228,298);X.clip();prain(t,.5,30);X.restore()}
 line([[890,196],[890,494]],6,'#fff');line([[776,345],[1004,345]],6,'#fff');
 // steps: from (-200,1960) up to (1280,1010)
 const n=14,dx=110,dy=68;for(let k=n;k>=0;k--){const x=-220+k*dx,y=1990-k*dy;
  X.fillStyle=k%2?'#b07a52':'#a86f48';X.fillRect(x,y,dx+4,2400);X.fillStyle='#c99266';X.fillRect(x,y,dx+4,16);X.fillStyle='rgba(0,0,0,.18)';X.fillRect(x,y+16,dx+4,8)}
 // banister
 X.strokeStyle='#5a3626';X.lineWidth=18;X.lineCap='round';X.beginPath();X.moveTo(-200,1640);X.lineTo(1280,690);X.stroke();
 for(let k=0;k<14;k++){const x=-160+k*110,yb=1990-(k)*68+(110*0.62*0)-0;line([[x,1630-k*68.5],[x,1960-k*68]],8,'#6e4630')}}
function sofaP(cx,cy,ang,s=1){X.save();X.translate(cx,cy);X.rotate(ang);X.scale(s,s);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=24;
 rr(-380,-130,760,200,40,'#3f8f7a',7);X.shadowColor='transparent';rr(-330,-200,660,110,34,'#4fa58c',6);rr(-420,-170,90,250,40,'#3a8270',7);rr(330,-170,90,250,40,'#3a8270',7);
 line([[-110,-120],[-110,60]],5,'rgba(0,0,0,.2)');line([[110,-120],[110,60]],5,'rgba(0,0,0,.2)');rr(-360,70,40,40,8,'#2a2a2a',0);rr(320,70,40,40,8,'#2a2a2a',0);X.restore()}
function earPhone(x,y,flip){X.save();X.translate(x,y);X.rotate(flip?.5:-.5);rr(-26,-50,52,100,10,'#1b1b1f',5);rr(-19,-40,38,80,6,'#25d366',0);X.restore()}
// the jam: mate up top, GF below, sofa over their heads
function jam(t,r,o={}){const fx=780,fy=1450,gx=270,gy=1790,s=.92;
 sofaP(520,800,-.64,.76);
 sm(gx,gy,s,Object.assign({t,eyes:'closed',brow:'worried',mouth:'wavy',sweat:1,armL:165,bendL:-20,armR:160,bendR:-30,tilt:4,legL:-8,legR:14},GF));
 sm(fx,fy,s,Object.assign({t,flip:1,eyes:'wide',brow:'angry',mouth:o.talk?'open':'wavy',talk:o.talk?t:null,sweat:1,look:[-.5,.2],armL:165,bendL:-25,armR:150,bendR:-40,tilt:-8},MATE));
 earPhone(fx-120,fy-700,0)}
// you at the bottom carrying, mate on top grinning
function carry(t,r,o={}){const fx=800,fy=1430,yx=300,yy=1790,s=.95;
 sofaP(540,800,-.64,.76);
 sm(fx,fy,s,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:o.talk?'open':'grin',talk:o.talk?t:null,look:[-.6,.3],armL:165,bendL:-20,armR:160,bendR:-30},MATE));
 sm(yx,yy,1.0,Object.assign({t,eyes:o.p1?'happy':'open',brow:'up',mouth:'grin',blush:o.p1,sweat:o.p1?0:1,look:[.5,-.3],armL:165,bendL:-20,armR:160,bendR:-30,tilt:3},YOU))}

// A: Saturday 09:20, phone buzzing, eyes snap open
function shotA(t,r){const snap=r>.55;cam(520,1000,lerp(1.1,1.16,C(r/3)),t,.15);bedroom(t,{});
 sleeper(t,{eyes:snap?'wide':'closed',brow:snap?'worried':'flat',mouth:snap?'o':'smile',look:[-.5,-.1]});bedFront(HX,BT);nstand(190,1250,'09:20',2,t);
 if(r>.55&&r<.95)impact((r-.55)/.4);
 scr(()=>callCard(420,C((r-.15)/.3),'Marko 📦','Incoming call…'));
 label3(snap?'You at 09:20 😳':'You, Saturday 09:20 😴',C(r/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: the stairwell jam
sh(T('f1')-.05,(t,r)=>{cam(560,1000,lerp(1.02,1.1,C(r/2.4)),t,.2);stairs(t);jam(t,r,{talk:r<2.1});if(r<.3)impact(r/.3);
 label3('Your best mate, 09:20 😩',C(r/.2))});
// C: guilt in bed, rain, the 📦 thought fading
sh(T('s1'),(t,r)=>{cam(580,990,1.14,t,.2);bedroom(t,{rain:1});
 sleeper(t,{eyes:'open',lid:.35,brow:'sad',mouth:'wavy',look:[0,-.6],sweat:1,tilt:-4});bedFront(HX,BT);nstand(190,1250,'09:21',1);
 const a=t*1.4;X.save();X.globalAlpha=lerp(1,.25,C((r-1)/2.5));chip(HX+Math.cos(a)*300,HY-140+Math.sin(a)*110,'📦',1.0);X.restore();
 label3('Your memory 🫠',C(r/.25))});
// D: rewind to Tuesday 21:00, sofa: his message, your 'Sure!!', Memopai hops on, 📦 flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.04,t,.2);sofaRoom(t);
 const talk=r>2.3;
 sm(400,1640,1.18,Object.assign({t,eyes:talk?'open':'happy',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,1)},YOU));
 psofa(500,1640,1.15);
 const bo=1-C((r-1.15)/.25);if(bo>0)scr(()=>{X.save();X.globalAlpha=bo;bub(560,980,C((r-.15)/.25),'Help me move Sat at 9? 🙏',0,'Marko 📦');bub(760,1180,C((r-.7)/.25),'Sure!! 💪',1);X.restore()});
 const mp=C((r-1.1)/.5);if(mp>0){memo(840,1390,.95,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(840,1100,mp,8,180)}
 const fl=C((r-2.1)/.9);if(fl>0&&fl<1){const px=lerp(300,520,eo(fl)),py=lerp(400,930,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'📦',.95-fl*.45)}else if(fl>=1)sparkles(520,930,C((r-3)/.5),8,120,'#7cf0a0');
 if(fl<=0&&r>1.6)chip(300,400,'📦',C((r-1.6)/.3)*.95,Math.sin(t*3)*.1);
 rewind(1-C(r/.5),t,'◀◀ TUESDAY');
 label3(r>1.9?'Memopai 😎':'You, Tuesday 21:00 🛋️',C(r/.2))});
// E: private WhatsApp chat with Memopai
sh(T('s3'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.3&&r<1.7,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.2),dur:'0:03',time:'21:02'},{a:1.7,me:0,text:'✅ Sat 08:00 · Help Marko move 📦',time:'21:02'}]})});
// F: Saturday 08:00, sunny: ping, coffee, shoes, out
sh(T('s4'),(t,r)=>{cam(540,1000,1.05,t,.15);bedroom(t,{});const out=r>1.5;
 if(!out){sm(470,1800,1.2,Object.assign({t,eyes:r>.3?'wide':'open',brow:'up',mouth:r>.3?'o':'smile',look:[.5,-.3],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.2,1),armL:60,bendL:-60,holdL:(x,y)=>mug(x-10,y+40,t)},YOU));
  scr(()=>notif(150,C((r-.1)/.3),'Memopai','⏰ Help Marko move 📦'))}
 else{const q=r-1.5;sm(lerp(470,980,C(q/1.0)),1800,1.2,Object.assign({t,walk:t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,0],armL:60,bendL:-60,holdL:(x,y)=>mug(x-10,y+40,t)},YOU))}
 label3(out?'You, Saturday 08:05 👟':'You, Saturday 08:00 ☕',C(r/.2),out?300:560)});
// G: same stairs, sunny: you've got the heavy end
sh(T('f2'),(t,r)=>{const p1=r>T('p1')-T('f2');cam(560,1000,lerp(1.02,1.08,C(r/4)),t,.15);stairs(t,{sun:1});carry(t,r,{talk:r<1.4,p1});
 sparkles(560,700,C((r-.2)/1.5),12,300);if(p1)confetti(r-(T('p1')-T('f2')),40);
 label3(p1?'You, sorted 😌':'Saturday, 08:58 📦',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only frame
sh(1000,(t,r)=>shotA(t,1.2));
