const YOU={hair:'curl'},KID={hair:'spike',hairc:'#7a4a2a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function mug(x,y,steam=0,t=0){X.save();X.translate(x,y);rr(-40,-96,80,96,14,'#e86a5a',6);X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.arc(44,-50,22,-1.3,1.3);X.stroke();
 if(steam){X.globalAlpha=.7;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.strokeStyle='#fff';X.lineWidth=7;X.beginPath();X.moveTo(-18+k*18,-110-ph*90);X.quadraticCurveTo(-8+k*18+Math.sin(t*3+k)*10,-140-ph*90,-18+k*18,-170-ph*90);X.stroke()}}X.restore()}
function wclock(x,y,s,h,m,gl){X.save();X.translate(x,y);X.scale(s,s);if(gl)glow(0,0,150,gl,.35);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
// crumpled kitchen-foil blob (the emergency present)
function foil(x,y,s=1,t=0,k=1){if(k<=0)return;X.save();X.translate(x,y);X.scale(s*k,s*k);X.rotate(Math.sin(t*2)*.04);
 const pts=[];for(let i=0;i<14;i++){const a=i/14*Math.PI*2,r=(i%2?78:96)+Math.sin(i*2.7)*14;pts.push([Math.cos(a)*r*1.1,Math.sin(a)*r*.9])}
 const g=X.createLinearGradient(-90,-90,90,90);g.addColorStop(0,'#f4f6fa');g.addColorStop(.45,'#aab2bf');g.addColorStop(.7,'#e6e9ef');g.addColorStop(1,'#8a92a0');
 X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=18;path(()=>{X.moveTo(...pts[0]);pts.forEach(p=>X.lineTo(...p));X.closePath()},g,6);X.shadowColor='transparent';
 X.strokeStyle='rgba(90,96,110,.6)';X.lineWidth=3;for(let i=0;i<7;i++){X.beginPath();X.moveTo(Math.sin(i*3.1)*60,Math.cos(i*1.7)*50);X.lineTo(Math.sin(i*3.1+1)*40,Math.cos(i*1.7+1.3)*40);X.stroke()}
 // the soap nozzle poking out (the giveaway)
 rr(-14,-130,28,46,6,'#5ad1c8',5);rr(-30,-142,44,16,5,'#3fb3aa',4);
 for(let i=0;i<5;i++){const a=t*3+i*1.3;X.globalAlpha=.5+.5*Math.sin(a);txt('✦',Math.cos(i*2.1)*80,Math.sin(i*2.1)*60,26,'#fff',0,'400 ')}X.globalAlpha=1;X.restore()}
function soap(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-40,-150,80,150,18,'#5ad1c8',6);rr(-14,-190,28,44,6,'#3fb3aa',5);rr(-36,-200,50,16,5,'#3fb3aa',4);rr(-26,-110,52,50,8,'#fff',0);txt('🫧',0,-84,30,'#111',0,'400 ');X.restore()}
function hall(t,o={}){proom(t,{win:null,frame:null,plant:o.sun?900:0,lamp:0,wall:o.sun?'#f6dfb8':'#e7d6bf',wall2:o.sun?'#eac690':'#d3bd9e',floor:'#b98d63',floor2:'#94693f'});
 // front door
 rr(620,520,360,760,14,'#8a5a3a',8);rr(650,560,300,300,10,'#9d6a46',0);rr(650,900,300,330,10,'#9d6a46',0);circ(680,940,16,'#ffd23f',5);
 if(o.sun){glow(800,700,500,'255,235,170',.5)}
 wclock(250,640,.95,14,40,o.sun?'120,255,150':'255,90,90')}
function kitchen(t){proom(t,{win:820,frame:null,plant:0,lamp:0,wall:'#dff0e6',wall2:'#c3e0cf',floor:'#d9c3a0',floor2:'#b8a07a',curtain:'#f2a65a',curtain2:'#d9873c'});
 // open cupboard (left) with a few bottles
 rr(40,330,420,420,14,'#f5f0e6',7);rr(60,350,380,380,8,'#e2d9c8',0);X.save();X.translate(40,330);X.transform(1,.18,0,1,0,0);rr(-150,0,150,420,10,'#f5f0e6',7);X.restore();
 rr(60,540,380,10,3,'#c8bca6',0);soap(150,535,.7);rr(230,460,60,80,8,'#e0533d',5);rr(320,470,70,70,8,'#ffd23f',5);rr(140,650,80,80,8,'#7cc4f0',5);rr(260,640,100,90,8,'#c99a6b',5);
 // counter
 rr(-40,1300,1160,60,10,'#c99a6b',7);rr(-40,1360,1160,500,0,'#e9e1d2',0);for(let k=0;k<5;k++)rr(20+k*230,1400,200,300,10,'#f5f0e6',5)}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));glow(120,760,560,'255,214,150',.45)}
function shop(t){proom(t,{win:null,frame:null,plant:0,lamp:0,wall:'#fde9c4',wall2:'#f6d39a',floor:'#c9b79a',floor2:'#a99677'});
 for(let row=0;row<3;row++){rr(60,380+row*260,960,24,6,'#b98d63',5);for(let k=0;k<6;k++){const cx=130+k*160,cy=380+row*260;const cs=['#4a8fe0','#e0533d','#7cc47c','#ffd23f','#b07ae0','#f2a65a'];rr(cx-55,cy-130,110,130,10,cs[(k+row)%6],5);circ(cx,cy-65,22,'rgba(255,255,255,.6)',0)}}
 glow(540,500,700,'255,240,200',.35)}

// A: 14:40 at the front door: your kid in a party hat with a balloon
sh(0,(t,r)=>{cam(560,1000,lerp(1.1,1.16,C(r/2.4)),t,.15);hall(t);
 const up=C((r-.05)/.3);
 sm(560,1780,1.0,Object.assign({t,party:1,eyes:'open',brow:'up',mouth:r<1.35?'open':'o',talk:r<1.35?t:null,look:[.4,-.1],tilt:Math.sin(t*4)*4,
  armL:lerp(20,60,up),bendL:lerp(10,70,up),holdL:(x,y)=>balloon(x,y,1.1,t,'#4a8fe0'),armR:lerp(20,120,up),bendR:lerp(10,-90,up)},KID));
 if(up<1&&r>.05)sparkles(560,700,up,8,180);
 label3('Your kid, 14:40 🎈',C(r/.2))});
// B: you, coffee in hand, eyes snap wide
sh(T('h1')+.9,(t,r)=>{cam(420,900,lerp(1.18,1.26,C(r/2.5)),t,.15);hall(t);
 const snap=r>.25;
 sm(400,1800,1.3,Object.assign({t,eyes:snap?'wide':'open',lid:snap?0:.4,brow:snap?'up':'flat',mouth:snap?'o':'smile',sweat:snap,look:snap?[.6,.1]:[0,0],armR:150,bendR:-150,holdR:(x,y)=>mug(x+10,y+40,1,t),armL:20,bendL:20},YOU));
 if(r>.25&&r<.6)impact((r-.25)/.35);
 chip(800,620,'🎁',r>.4?C((r-.4)/.3)*1.1:0,Math.sin(t*3)*.1);
 label3(snap?'You at 14:40 😳':'You, 14:39 ☕',C(r/.2))});
// C: the cupboard: you wrap the dish soap in foil; your kid's deadpan "Is that... soap?"
sh(T('s1'),(t,r)=>{cam(540,1000,1.06,t,.2);kitchen(t);
 const wr=C((r-.3)/1.4),k2=r>T('k2')-T('s1');
 sm(360,1800,1.12,Object.assign({t,eyes:'wide',brow:'worried',mouth:k2?'wavy':'grin',sweat:1,look:k2?[.7,0]:[.2,.6],tilt:k2?-6:Math.sin(t*12)*3,
  armR:lerp(60,95,wr)+Math.sin(t*14)*(k2?0:12),bendR:-70,armL:60,bendL:-60,holdR:(x,y)=>{if(!k2){if(wr<1)soap(x+30,y+40,.9);foil(x+40,y-40,1.5,t,wr)}}},YOU));
 if(k2){sm(820,1800,.82,Object.assign({t,flip:1,party:1,eyes:'open',lid:.55,brow:'flat',mouth:'flat',talk:r-(T('k2')-T('s1'))<1?t:null,look:[-.3,-.1],armR:120,bendR:-60,holdR:(x,y)=>foil(x-20,y-60,1.5,t,1),armL:20,bendL:10},KID))}
 else sm(880,1800,.82,Object.assign({t,flip:1,party:1,eyes:'open',brow:'up',mouth:'o',look:[-.6,0]},KID));
 if(!k2&&wr>0&&wr<1)sparkles(420,1150,wr,6,120,'#e6e9ef');
 label3(k2?'The present 🫠':'You, 14:41 😬',C(r/.2))});
// D: next Monday on the sofa: the invite pops up in the class group; Memopai hops in; the 🎁 thought flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.04,t,.2);sofaRoom(t);
 const talk=r>1.8;
 sm(400,1640,1.18,Object.assign({t,eyes:r<1.8?'wide':'open',brow:'up',mouth:talk?'open':'o',talk:talk?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,1)},YOU));
 psofa(500,1640,1.15);
 const mp=C((r-.9)/.6);if(mp>0){memo(830,1390,.95,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(830,1100,mp,8,180)}
 const fl=C((r-1.9)/1.0);if(fl>0&&fl<1){const px=lerp(320,520,eo(fl)),py=lerp(540,930,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🎁',.95-fl*.45)}else if(fl>=1)sparkles(520,930,C((r-2.9)/.5),8,120,'#7cf0a0');
 if(r<1.9)notif(150,C(r/.3),'Class 2B parents 🎈','Party on Saturday, 15:00! 🎂');
 label3(mp>.5?'Memopai 😎':'You, next Monday 🛋️',C(r/.2),r<1.9?560:300)});
// E: the WhatsApp chat
sh(T('s2')+3.5,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.05&&r<1.35,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.0),dur:'0:03',time:'20:14'},{a:1.35,me:0,text:'✅ Thu 18:00 · Buy the party present 🎁',time:'20:14'}]})});
// F: Thursday 18:00: ping in WhatsApp; then you and your kid at the toy shop with the present
sh(T('s4'),(t,r)=>{const sw=1.3;cam(540,1000,1.05,t,.15);
 if(r<sw){sofaRoom(t,{night:0,lamp:0,wall:'#e3d2bd',wall2:'#cdb79c'});wclock(880,760,.9,18,0);
  sm(460,1800,1.2,Object.assign({t,eyes:r>.25?'wide':'open',brow:'up',mouth:r>.25?'o':'flat',look:[.5,-.3],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.2,r>.2)},YOU));
  notif(150,C((r-.15)/.3),'Memopai','Buy the party present 🎁');label3('You, Thursday 18:00 📲',C(r/.2),560)}
 else{const q=r-sw;shop(t);
  sm(380,1800,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.6,.2],armR:lerp(40,130,C(q/.4)),bendR:-40,holdR:(x,y)=>gift(x+20,y+60,.85,{col:'#b07ae0',shake:Math.sin(t*6)*4})},YOU));
  sm(780,1800,.8,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'open',look:[-.6,-.2],armL:150+Math.sin(t*10)*15,bendL:-20,armR:150-Math.sin(t*10)*15,bendR:-20},KID));
  sparkles(500,1200,C(q/.8),10,220);label3('You, Thursday 18:10 🧸',C(q/.2))}});
// G: Saturday 14:40, same door, sunny: the real present
sh(T('k3'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/3.6)),t,.15);hall(t,{sun:1});
 const p1=r>T('p1')-T('k3');
 sm(680,1780,.95,Object.assign({t,flip:1,party:1,eyes:p1?'happy':'wide',brow:'up',mouth:p1?'grin':'open',talk:!p1&&r<1.3?t:null,look:[-.2,.3],
  armL:110,bendL:-40,armR:110,bendR:-40,holdR:(x,y)=>gift(680,1420,1.0,{col:'#b07ae0',shake:p1?0:Math.sin(t*16)*10})},KID));
 sm(260,1820,1.08,Object.assign({t,eyes:p1?'happy':'open',brow:'up',mouth:'smile',blush:p1,look:[.6,-.1],armR:150,bendR:-150,holdR:(x,y)=>mug(x+10,y+40,1,t),armL:20,bendL:20},YOU));
 sparkles(620,1000,C((r-.2)/1.5),12,300);
 label3(p1?'You, sorted 😌':'Your kid, Saturday 14:40 🤩',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>{cam(560,1040,1.16,t,.1);hall(t);
 sm(560,1780,1.0,Object.assign({t,party:1,eyes:'wide',brow:'up',mouth:'open',look:[.4,-.1],armL:60,bendL:70,holdL:(x,y)=>balloon(x,y,1.1,t,'#4a8fe0'),armR:120,bendR:-90},KID))});
