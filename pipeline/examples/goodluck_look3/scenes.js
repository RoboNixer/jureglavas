const YOU={hair:'curl'};const HER={hair:'bun',hairc:'#e2508a',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0,a=1){if(s<=0||a<=0)return;X.save();X.globalAlpha=a;X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function sms(x,y,s,p,text,me){if(p<=0)return;X.save();X.translate(x,y);const k=eo(C(p));X.scale(s*k,s*k);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-230,-60,460,120,40,me?'#d9fdd3':'#fff',5);X.shadowColor='transparent';txt(text,0,4,46,'#111',0);X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function bag(hx,hy){rr(hx-60,hy-10,120,100,14,'#7a4a2e',6);path(()=>{X.arc(hx,hy-6,38,Math.PI,0)},null,7,'#5a3520')}
// living room with the front door on the right
function living(t,o={}){proom(t,{win:null,night:1,frame:[250,520],plant:0,lamp:110,wall:o.warm?'#e8cdb4':'#c9b6a4',wall2:o.warm?'#d4b394':'#ad9988'});glow(110,760,560,'255,214,150',o.warm?.6:.45);
 const dx=830,op=o.open||0;rr(dx-190,430,380,820,14,'#fff8ef',0);rr(dx-160,460,320,790,10,'#2d2a3e',0);
 X.save();X.translate(dx-160,460);X.scale(1-op*.75,1);rr(0,0,320,790,10,'#8a5a3c',8);rr(40,60,240,260,10,'#a06c48',5);rr(40,400,240,300,10,'#a06c48',5);circ(285,420,18,'#e8c15a',5);X.restore();
 wclock(520,560,.62,o.h||18,o.m||20)}
function sofaFront(){psofa(420,1650,1.15,'#5a7fb5','#4a6a9a')}
// chat with her (WhatsApp look)
function bub(y,str,time,p,me){if(p<=0)return 0;X.font="500 38px Inter";const lines=wrapT(str,420,"500 38px Inter");const w=Math.max(240,Math.max(...lines.map(l=>X.measureText(l).width))+60);const h=lines.length*50+66;const bx=me?270-w:-270;
 X.save();X.globalAlpha=C(p*1.6);rr(bx,y,w,h,24,me?'#d9fdd3':'#fff',4);X.textAlign='left';X.textBaseline='top';X.font="500 38px Inter";X.fillStyle='#111';lines.forEach((l,i)=>X.fillText(l,bx+26,y+16+i*50));
 X.font="500 22px Inter";X.fillStyle='#667781';X.textAlign='right';X.fillText(time+(me?'  ✓✓':''),bx+w-20,y+h-32);X.restore();return h}
function herChat(x,y,s,r,msgs){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#efe7dc',0);X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 X.fillStyle='#008069';X.fillRect(-300,-640,600,210);rr(-70,-618,140,40,20,'#000',0);
 X.font="600 26px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText('19:12',-240,-598);
 X.font="400 40px Inter";X.fillText('‹',-270,-488);circ(-180,-488,44,'#e2508a',0);txt('❤️',-180,-486,42,'#111',0,'400 ');
 X.font="800 40px Inter";X.fillStyle='#fff';X.textAlign='left';X.fillText('My love ❤️',-118,-506);X.font="400 26px Inter";X.fillText('online',-118,-466);
 rr(-100,-405,200,44,22,'#e1f3fb',0);X.font="600 24px Inter";X.fillStyle='#54656f';X.textAlign='center';X.fillText('MONDAY',0,-383);
 let yy=-320;msgs.forEach(m=>{if(r<m.a)return;yy+=bub(yy,m.s,m.time,C((r-m.a)/.22),m.me)+22});
 X.fillStyle='#f0f0f0';X.fillRect(-300,520,600,140);rr(-270,545,450,74,37,'#fff',0);X.font="400 30px Inter";X.fillStyle='#8696a0';X.textAlign='left';X.fillText('Message',-230,582);circ(235,582,38,'#00a884',0);
 X.restore();X.restore()}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);
 X.save();X.translate(160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,'#8fd0ff',0);X.restore();
 rr(-340,-90,80,90,14,'#e86a5a',6);X.restore()}
function office(t){proom(t,{win:780,frame:null,plant:1,lamp:0,wall:'#dfe7ee',wall2:'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'});glow(780,500,600,'255,240,200',.45);wclock(250,470,.8,9,30)}
function street(t){psky('#7fb8f0','#bfe0ff','#eef7ff',1250);psun(860,330,70,t);pclouds(t,300,'#ffffff','#dfe9f5',4,3);
 pblur(2,()=>{rr(120,240,560,1040,10,'#7d8fa8',7);for(let i=0;i<6;i++)for(let j=0;j<4;j++)rr(170+j*125,300+i*150,90,100,6,'#cfe6ff',0);rr(330,1040,140,240,8,'#3a4658',5)});
 const fg=X.createLinearGradient(0,1250,0,2000);fg.addColorStop(0,'#cfc8bd');fg.addColorStop(1,'#a9a196');X.fillStyle=fg;X.fillRect(-3000,1250,8000,3000)}

// A: Thursday 18:20 — you on the sofa, she walks in from her interview day; 'So... no good luck text?'
sh(0,(t,r)=>{const f=T('f1'),hit=r>f-.1;cam(560,1060,lerp(1.02,hit?1.13:1.05,C(r/4.5)),t,.12);living(t,{open:C((r-.2)/.5)*(1-C((r-1.6)/.4))});
 sm(330,1610,1.12,Object.assign({t,eyes:hit?'wide':'open',lid:hit?0:.25,brow:hit?'worried':'flat',mouth:hit?'o':'smile',look:hit?[.8,-.1]:[.3,.6],sweat:r>f+.6,
  armR:hit?30:60,bendR:hit?-60:-110,holdR:(x,y)=>phoneH(x,y,-.1,!hit)},YOU));
 sofaFront();
 const wi=eo(C((r-.4)/1.0));if(wi>0)sm(lerp(1050,800,wi),1770,1.2,Object.assign({t,flip:1,walk:wi<1?t:null,eyes:'open',lid:hit?.2:.35,brow:hit?'sad':'flat',mouth:hit?'frown':'flat',talk:r>f+.05&&r<f+1.4?t:null,look:[-.8,.1],tilt:hit?6:0,armL:20,bendL:20,holdL:(x,y)=>bag(x,y)},HER));
 label3(hit?'You, 18:21 😳':'You, Thursday 18:20 🛋️',C(r/.25))});
// B: Monday's chat — the promise, in writing
sh(T('s1'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#3a2140';X.fillRect(0,0,1080,1920);glow(540,900,700,'255,170,210',.28);
 herChat(540,880,1.28,r,[{a:.05,s:'Interview Thursday at 10!! 😬',time:'19:11'},{a:.75,me:1,s:"You'll smash it! I'll text you that morning 💪",time:'19:12'}])});
// C: Monday on the sofa: the 💼 thought drifts away ... Memopai hops in; back to Monday: you say it, the thought flies into the phone
sh(T('fa'),(t,r)=>{cam(540,1040,1.06,t,.15);living(t,{h:19,m:13});
 const mt=T('s2')-T('fa'),hopAt=2.0,talk=r>mt+.7;
 const phoneUp=r>mt+.3;
 sm(330,1610,1.12,Object.assign({t,eyes:r>mt?'open':'happy',lid:0,brow:r>mt?'up':'flat',mouth:talk?'open':'smile',talk:talk?t:null,look:r>hopAt&&r<mt+.3?[.8,0]:[.2,-.3],
  armR:phoneUp?40:150,bendR:phoneUp?-120:-160,holdR:(x,y)=>{if(phoneUp)phoneH(x,y,-.12,1)}},YOU));
 sofaFront();
 // the drifting thought
 if(r<mt){const d=C((r-.5)/1.5);chip(lerp(560,940,eo(d)),lerp(640,560,eo(d))+Math.sin(t*3)*12,'💼',1-d*.35,Math.sin(t*2)*.15,1-C((d-.6)/.4))}
 // Memopai hops in on the side table
 rr(730,1450,240,30,10,'#8a6142',5);line([[850,1480],[850,1760]],14,'#6e4a33');
 const mp=C((r-hopAt)/.6);if(mp>0){memo(850,1440,.82,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(850,1150,mp,10,220)}
 // back on Monday: the thought comes back and flies into the phone
 if(r>mt+.9){const fl=C((r-mt-.9)/1.0);if(fl<1){const px=lerp(900,470,eo(fl)),py=lerp(600,1180,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'💼',1-fl*.5)}else sparkles(470,1180,C((r-mt-1.9)/.5),8,120,'#7cf0a0')}
 label3(r<.6?'You, Monday 😎':(r<hopAt?'Your memory 🫠':'Memopai 😎'),C(r/.25))});
// D: the voice note + reply
sh(T('s2')+2.0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.0&&r<1.3,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/1.0),dur:'0:03',time:'19:13'},{a:1.3,me:0,text:'✅ Thu 09:30 · Text her good luck 💼',time:'19:13'}]})});
// E: Thursday 09:30 — buzz at your desk; your text lands in her phone outside the building
sh(T('s3')-.3,(t,r)=>{split2(t,
  (t)=>{office(t);desk(300,1460,1.0);const bz=r>.4;sm(330,1760,1.2,Object.assign({t,eyes:bz?'wide':'open',brow:bz?'up':'flat',mouth:r>1.2?'smile':(bz?'o':'flat'),look:[.4,.5],armR:60,bendR:-110,holdR:(x,y)=>phoneH(x,y,-.1,bz)},YOU))},
  (t)=>{street(t);const got=r>1.5;sm(560,1780,1.2,Object.assign({t,flip:1,eyes:got?'happy':'open',brow:got?'up':'flat',mouth:got?'grin':'flat',blush:got,look:[-.4,.5],armL:60,bendL:-110,holdL:(x,y)=>phoneH(x,y,.1,got)},HER));if(got)sparkles(560,860,C((r-1.5)/1),8,220)},
  {camA:[290,1060,1.0],camB:[560,1080,1.0],p:C(r/.3)});
 const n=r<1.3?C((r-.35)/.3):Math.max(0,1-(r-1.3)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Text her good luck! 💼 (09:30)'));
 scr(()=>sms(790,400,1.0,C((r-1.45)/.3),"You've got this! 💪❤️",1))});
// F: 18:20, same door — she walks in beaming; the hug; you, sorted
sh(T('f2')-.2,(t,r)=>{const pb=T('p1')-T('f2')+.2,hug=r>pb-.3;cam(560,1060,lerp(1.06,1.12,C(r/5)),t,.12);living(t,{warm:1});glow(560,900,600,'255,200,170',.35);
 const wi=eo(C(r/.6));
 sm(hug?400:380,1770,1.2,Object.assign({t,eyes:hug?'happy':'open',brow:'up',mouth:'grin',blush:hug,look:[.7,0],armR:hug?100:20,bendR:hug?-40:20,armL:20,bendL:20},YOU));
 sm(hug?700:lerp(1000,760,wi),1770,1.2,Object.assign({t,flip:1,walk:wi<1?t:null,eyes:r>pb?'happy':'open',brow:'up',mouth:r<pb-.3?'open':'grin',talk:r>.2&&r<pb-.3?t:null,blush:1,look:[-.8,0],armL:hug?100:20,bendL:hug?-40:20,holdR:(x,y)=>bag(x,y)},HER));
 if(hug){sparkles(560,780,C((r-pb)/1.5),12,300);txt('❤️',560,560-C((r-pb)/2)*80,90,'#e2508a',0,'400 ')}
 label3(r<pb?'Her, 18:20 🥰':'You, sorted 😌',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(560,1060,1.13,t,.1);living(t,{});
 sm(330,1610,1.12,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',look:[.8,-.1],sweat:1,armR:30,bendR:-60,holdR:(x,y)=>phoneH(x,y,-.1,0)},YOU));sofaFront();
 sm(800,1770,1.2,Object.assign({t,flip:1,eyes:'open',lid:.2,brow:'sad',mouth:'frown',look:[-.8,.1],tilt:6,armL:20,bendL:20,holdL:(x,y)=>bag(x,y)},HER))});
