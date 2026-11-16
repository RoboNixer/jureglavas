const YOU={hair:'curl'};
const GRAN={hair:'bun',hairc:'#c9c9d4',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function mug(x,y,t=0){X.save();X.translate(x,y);rr(-40,-96,80,96,14,'#e86a5a',6);X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.arc(44,-50,22,-1.3,1.3);X.stroke();
 X.globalAlpha=.7;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=7;X.beginPath();X.moveTo(-18+k*18,-110-ph*90);X.quadraticCurveTo(-8+k*18+Math.sin(t*3+k)*10,-140-ph*90,-18+k*18,-170-ph*90);X.stroke()}X.restore()}
function heart(x,y,s,a=1){if(a<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.fillStyle='#ff4d6d';X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.moveTo(0,30);X.bezierCurveTo(-60,-10,-40,-60,0,-30);X.bezierCurveTo(40,-60,60,-10,0,30);X.fill();X.stroke();X.restore()}
// ---- craft ladder 2026-11-16 20:00: video-call kit ----
// glasses(hx,hy,s) round specs over a sm() head centre (hx,hy), s = sm scale
function glasses(hx,hy,s,tint=0){X.save();X.translate(hx,hy);X.scale(s,s);X.strokeStyle='#5a3b2a';X.lineWidth=8;if(tint){X.fillStyle='rgba(180,220,255,.18)'}
 for(const d of[-1,1]){X.beginPath();X.arc(d*46,-14,54,0,7);if(tint)X.fill();X.stroke()}X.beginPath();X.moveTo(-10,-20);X.quadraticCurveTo(0,-30,10,-20);X.stroke();
 X.beginPath();X.moveTo(-100,-22);X.lineTo(-122,-34);X.moveTo(100,-22);X.lineTo(122,-34);X.stroke();X.restore()}
// gface(cx,cy,s,o): a sm() head centred at (cx,cy) (body continues below, usually clipped) + glasses
function gface(cx,cy,s,o){sm(cx,cy+767*s,s,Object.assign({noshadow:1},GRAN,o));glasses(cx,cy,s,1)}
// vcall(t,r,o): full-screen WhatsApp video call, the caller's face far too close to her camera (ceiling behind), your self-view, call buttons
function vcall(t,r,o={}){NOFX=1;X.setTransform(1,0,0,1,0,0);
 const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#fbf1e2');g.addColorStop(1,'#e9d6bd');X.fillStyle=g;X.fillRect(0,0,1080,1920);
 X.strokeStyle='rgba(120,90,60,.25)';X.lineWidth=10;X.beginPath();X.moveTo(0,520);X.lineTo(330,380);X.lineTo(1080,470);X.stroke();X.beginPath();X.moveTo(330,380);X.lineTo(300,0);X.stroke();
 glow(240,200,330,'255,230,160',.7);circ(240,200,70,'#fff6d8',6);rr(232,0,16,130,4,'#5a4a3a',0);
 const sx=Math.sin(t*1.7)*14,sy=Math.cos(t*1.3)*10;X.save();X.translate(540,1150);X.rotate(Math.sin(t*1.1)*.04+(o.rot||0));X.translate(-540,-1150);
 gface(560+sx,1150+sy,3.3,Object.assign({t},o.face||{}));X.fillStyle='#9a6bb5';X.strokeStyle='#151515';X.lineWidth=10;X.beginPath();X.ellipse(560+sx,2010+sy,600,420,0,0,7);X.fill();X.stroke();X.fillStyle='#fff';X.beginPath();X.ellipse(560+sx,1600+sy,90,30,0,0,7);X.fill();X.restore();
 if(o.hearts)for(let k=0;k<6;k++){const ph=(t*.5+k/6)%1;heart(160+k*150+Math.sin(t*2+k)*30,1500-ph*900,1.1+.3*Math.sin(k),C(o.hearts)*(1-ph)*1.4)}
 // self view
 X.save();X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=24;rr(800,440,240,330,30,'#2b3a63',0);X.restore();X.save();X.beginPath();X.roundRect(800,440,240,330,30);X.clip();
 if(o.day){X.fillStyle='#f4d9b3';X.fillRect(800,440,240,330)}else{X.fillStyle='#3a4a7a';X.fillRect(800,440,240,330);glow(1000,500,160,'255,200,130',.4)}
 sm(920,1080,.48,Object.assign({t,noshadow:1},YOU,o.me||{}));X.restore();X.strokeStyle='#fff';X.lineWidth=6;X.beginPath();X.roundRect(800,440,240,330,30);X.stroke();
 // buttons
 X.fillStyle='rgba(0,0,0,.35)';X.fillRect(0,1700,1080,220);
 for(const[bx,c,ic]of[[300,'rgba(255,255,255,.25)','🎤'],[540,'#e5484d','📞'],[780,'rgba(255,255,255,.25)','📷']]){circ(bx,1800,62,c,0);txt(ic,bx,1804,52,'#fff',0,'400 ')}
 X.font="600 30px Inter";X.fillStyle='#fff';X.textAlign='center';X.fillText(o.timer||'00:07',540,1735);
}
// living room with a sofa; YOU sits behind it
function lroom(t,day){proom(t,{win:300,night:!day,wall:day?'#f9e2c8':'#8e9fc6',wall2:day?'#efc9a1':'#7385b2',curtain:day?'#e98a6a':'#5a6fc0',curtain2:day?'#cc6d50':'#41539e',plant:day?880:0,lamp:day?0:860,frame:[600,520]});
 if(day){glow(300,500,700,'255,240,190',.55)}else glow(860,700,450,'255,200,130',.35)}
function youSofa(t,o,phone){sm(470,1960,1.25,Object.assign({t},YOU,phone?{armR:150,bendR:-150,holdR:phone}:{},o));psofa(540,1900,1.3)}
// grandma's own living room + armchair, phone right up to her nose
function granRoom(t){proom(t,{win:800,wall:'#e8f0d8',wall2:'#cfdcb8',curtain:'#b07ac0',curtain2:'#8e5aa0',plant:200,lamp:0,frame:[480,520]});glow(800,500,600,'255,240,190',.5)}
function granChair(t,o){const x=560,s=1.2,y=1960,hy=y-767*s;sm(x,y,s,Object.assign({t,flip:1},GRAN,o));glasses(x,hy,s,1);psofa(560,1900,1.3,'#9a6bb5','#7d529a');
 line([[x+170,hy+330],[x+110,hy+150]],17*s,'#151515');X.save();X.translate(x+60,hy+95);X.rotate(-.12);rr(-42,-75,84,150,14,'#1b1b1f',5);rr(-33,-63,66,126,8,'#bfe0ff',0);X.restore();ell(x+105,hy+150,31*s,27*s,'#151515',0)}

// A: 21:40, phone buzzing on the sofa, eyes snap
sh(0,(t,r)=>{const snap=r>.45;cam(520,1000,lerp(1.12,1.18,C(r/3.5)),t,.15);lroom(t,0);
 const jig=r<3.4?Math.sin(t*70)*5:0;
 youSofa(t,{eyes:snap?'wide':'open',lid:snap?0:.45,brow:snap?'worried':'flat',mouth:snap?'o':'flat',look:[.5,.2],sweat:r>2.2},(x,y)=>{phoneH(x+jig,y,.25,1);if(r<3.4){X.save();X.strokeStyle='rgba(37,211,102,'+(1-(t*1.6)%1)+')';X.lineWidth=8;X.beginPath();X.arc(x,y-30,60+((t*1.6)%1)*90,0,7);X.stroke();X.restore()}});

 const cp=C((r-.8)/.35);chip(720,700,'👵',eo(cp),Math.sin(t*3)*.1);
 label3('You, Sunday 21:40 😳',C(r/.2))});
// B: the call: Grandma far too close to her camera
sh(T('g1')-.05,(t,r)=>{vcall(t,r,{timer:'00:0'+Math.min(9,Math.floor(r*2+1)),face:{eyes:'open',brow:'up',mouth:'smile',talk:r>.05&&r<2.3?t:null,look:[0,.2],blink:0},me:{eyes:'wide',brow:'worried',mouth:'grin',sweat:1}});
 label3('Grandma, 21:40 👵',C(r/.25))});
// C: after the call, the sting; Memopai hops on the sofa arm; you say it, the 👵 thought flies into the phone
sh(T('s1'),(t,r)=>{cam(560,1000,1.06,t,.2);lroom(t,0);
 const r2=T('s2')-T('s1');const talk=r>r2+.1&&r<r2+2.3;const up=r>r2-.1;
 const reach=C((r-(r2-.3))/.4);
 sm(470,1960,1.25,Object.assign({t,eyes:'open',lid:up?0:.35,brow:up?'up':'sad',mouth:talk?'open':(up?'smile':'frown'),talk:talk?t:null,look:up?[.6,-.1]:[0,.6],tilt:up?0:-5,armR:lerp(20,150,reach),bendR:lerp(0,-150,reach),holdR:(x,y)=>{if(reach>0)phoneH(x,y,.25,talk||r>r2+2.3)}},YOU));psofa(540,1900,1.3);
 const mp=C((r-1.1)/.6);if(mp>0){memo(860,1478,.8,{t,wave:r<r2,hop:mp,glow:1});if(mp<1)sparkles(860,1220,mp,10,220)}
 const fs=r2+.6,fl=C((r-fs)/1.0);if(r<fs)chip(720,700,'👵',1,Math.sin(t*3)*.1);else if(fl<1){const px=lerp(720,610,eo(fl)),py=lerp(700,1080,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'👵',1-fl*.55)}else sparkles(610,1080,C((r-fs-1)/.6),8,120,'#7cf0a0');
 label3(r<1.1?'You, 21:52 😅':(r<r2?'Memopai 👋':'You, right after 🎙️'),C(r/.2))});
// D: the voice note + Memopai's reply
sh(T('s2')+2.3,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1d2b5a';X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.6&&r<.9,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.8),dur:'0:04',time:'21:53'},{a:.9,me:0,text:'Got it ✅ Every Sunday · 11:00 · Call Grandma 👵',time:'21:53'}]})});
// E: next Sunday 11:00, coffee, the reminder lands; you call
sh(T('s3'),(t,r)=>{cam(540,980,1.08,t,.2);lroom(t,1);psun(260,380,40,t);
 const up=r>.9,call=r>1.9;youSofa(t,{eyes:up?'open':'happy',brow:'up',mouth:call?'grin':'smile',look:[.6,-.1],armL:120,bendL:-140,holdL:(x,y)=>mug(x+5,y+45,t)},(x,y)=>phoneH(x,y,.25,up));
 const n=r<1.75?C((r-.25)/.3):Math.max(0,1-(r-1.75)/.25);if(n>0)notif(150,n,'Memopai',"Call Grandma. It's Sunday!");
 label3('You, next Sunday 11:00 ☕',C((r-1.95)/.25))});
// F: the call again: same face too close, now beaming
sh(T('g2')-.25,(t,r)=>{vcall(t,r,{day:1,hearts:C((r-.6)/.5),timer:'00:0'+Math.min(9,Math.floor(r*2+1)),face:{eyes:r>1.3?'happy':'open',brow:'up',mouth:r<1.9?'open':'grin',talk:r>.25&&r<2.0?t:null,blush:1,blink:0},me:{eyes:'happy',brow:'up',mouth:'grin',blush:1}});
 label3('Grandma, 11:01 🥹',C(r/.25))});
// G: you, sorted — split: you laughing on the sofa / Grandma, phone at her nose
sh(T('p1')+1.0,(t,r)=>{split2(t,
  (t)=>{lroom(t,1);youSofa(t,{eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.6,-.1]},(x,y)=>phoneH(x,y,.25,1))},
  (t)=>{granRoom(t);granChair(t,{eyes:'happy',brow:'up',mouth:'grin',blush:1});if(r>.2)sparkles(560,700,C((r-.2)/1.2),10,260)},
  {camA:[540,1000,1.0],camB:[560,1000,1.0],p:C(r/.3)});
 label3('You, sorted 😌',C(r/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(520,1000,1.18,t,.1);lroom(t,0);
 youSofa(t,{eyes:'wide',brow:'worried',mouth:'o',look:[.5,.2]},(x,y)=>{phoneH(x,y,.25,1);X.save();X.strokeStyle='rgba(37,211,102,.6)';X.lineWidth=8;X.beginPath();X.arc(x,y-30,100,0,7);X.stroke();X.restore()});
 chip(720,700,'👵',1)});
