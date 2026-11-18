const YOU={hair:'curl'};const KID={hair:'spike',hairc:'#7a4a2a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
function mug(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-34,-40,68,80,14,'#e86a5a',6);path(()=>{X.arc(40,0,22,-1.4,1.4)},null,8,'#e86a5a');X.globalAlpha=.5;line([[-10,-60],[-4,-90],[-12,-120]],5,'#fff');X.restore()}
// fridge(x,y,s,o): tall fridge, feet at y. o.notes = sticky-note grid (0..1 reveal), o.cal = advent calendar on the door, o.door1 = door #1 open 0..1
function fridge(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,240,26,0,0,7);X.fill();X.globalAlpha=1;
 rr(-200,-1000,400,1000,34,'#eef3f8',8);const g=X.createLinearGradient(-200,0,200,0);g.addColorStop(0,'rgba(255,255,255,.5)');g.addColorStop(1,'rgba(120,140,170,.18)');rr(-200,-1000,400,1000,34,g,0);
 line([[-196,-640],[196,-640]],7,'#151515');line([[160,-940],[160,-720]],14,'#9aa6b5');line([[160,-590],[160,-360]],14,'#9aa6b5');
 if(o.bare){X.save();X.setLineDash([16,14]);rr(-150,-900,280,380,16,null,5,'#b8c2ce');X.restore()}
 if(o.notes){const n=Math.floor(24*C(o.notes));for(let i=0;i<n;i++){const c=i%4,rw=Math.floor(i/4);const nx=-150+c*72,ny=-930+rw*64;X.save();X.translate(nx+30,ny+28);X.rotate(((i*37)%9-4)*.02);rr(-30,-28,60,56,4,'#ffe066',3);txt(''+(i+1),0,2,26,'#5a4a00',0,'800 ');X.restore()}}
 if(o.cal)advent(-10,-700,.95,o);
 X.restore()}
// advent(x,y,s,o): advent calendar card (tree scene + 24 little doors), o.door1 0..1 opens door #1 with a chocolate
function advent(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 rr(-170,-200,340,400,18,'#c0392b',7);rr(-150,-180,300,360,12,'#e74c3c',0);
 path(()=>{X.moveTo(0,-170);X.lineTo(90,-20);X.lineTo(-90,-20);X.closePath()},'#2f9e5b',0);circ(0,-176,12,'#ffd23f',0);
 for(let i=0;i<24;i++){const c=i%6,r=Math.floor(i/6);const dx=-125+c*50,dy=10+r*42;if(i==0&&o.door1>0){rr(dx-2,dy-2,44,38,5,'#3b2414',0);circ(dx+20,dy+17,13,'#7a4a2a',0);rr(dx,dy,40*(1-o.door1*.8),34,5,'#ffd23f',3)}else{rr(dx,dy,40,34,5,'#fff3c4',3);txt(''+(i+1),dx+20,dy+18,18,'#8a1a10',0,'800 ')}}
 X.restore()}
function advBox(hx,hy,s=1){X.save();X.translate(hx,hy-120*s);X.rotate(-.05);advent(0,0,s*.75,{});X.restore()}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function kitchen(t,o={}){proom(t,Object.assign({win:300,frame:null,plant:0,lamp:0,wall:o.sun?'#fbeed6':'#dfe9ef',wall2:o.sun?'#f3dcb6':'#c8d7e0',floor:'#b9a58c',floor2:'#93806a',curtain:'#7fb3d5',curtain2:'#5f93b5'},o));
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore();
 if(o.clock)wclock(560,430,.75,o.clock[0],o.clock[1]);if(o.sun)glow(300,500,600,'255,225,160',.45)}
// A: Dec 1, 07:05, kid at the bare fridge (also the cover)
function shotA(t,r,cov){cam(540,cov?900:1020,cov?1.0:lerp(1.05,1.12,C(r/T('s1'))),t,.14);kitchen(t,{clock:[7,5]});fridge(880,1760,1.0,{bare:1});
 const ask=1;
 sm(330,1780,1.2,Object.assign({t,eyes:ask?'wide':'open',brow:ask?'worried':'up',mouth:ask?'o':'smile',sweat:ask?1:0,look:[.6,.2],armR:40,bendR:-110,holdR:(x,y)=>mug(x,y+10),armL:30,bendL:20},YOU));
 sm(610,1780,.86,Object.assign({t,flip:1,eyes:'open',brow:'up',mouth:ask?'open':'smile',talk:!cov&&r<T('h1')?t:null,look:[-.6,-.3],armR:120,bendR:-20,armL:150,bendL:-40},KID));
 if(!cov)label3('You, Dec 1, 07:05 😳',C(r/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: sticky notes + one raisin
sh(T('s1')-.4,(t,r)=>{cam(620,1020,lerp(1.08,1.14,C(r/3.6)),t,.14);kitchen(t,{clock:[7,6]});fridge(850,1760,1.05,{notes:C(r/1.0)*1});
 sm(270,1780,1.15,Object.assign({t,eyes:'open',lid:.3,brow:'worried',mouth:'wavy',sweat:1,look:[.5,.3],armR:120,bendR:-40,armL:30,bendL:20},YOU));
 sm(560,1780,.86,Object.assign({t,eyes:'open',lid:.35,brow:'sad',mouth:'frown',tear:r>1.0?1:0,look:[-.5,-.2],armR:150,bendR:-30,holdR:(x,y)=>{circ(x,y-18,20,'#5a3a1e',4)},armL:30,bendL:20},KID));
 label3('Your kid, 07:06 🥲',C(r/.2))});
// C: tonight on the sofa, Memo hops in, the 🎄 flies into the phone
sh(T('s2')-.05,(t,r)=>{cam(540,1020,1.06,t,.14);proom(t,{win:760,night:1,frame:null,plant:1,lamp:1,wall:'#e9d3bd',wall2:'#d4b394'});psofa(520,1660,1.15,'#5a7fb5','#4a6a9a');
 const mp=C((r-.2)/.5);
 sm(400,1790,1.2,Object.assign({t,eyes:r>1.5?'happy':'open',brow:'up',mouth:'smile',look:[.6,.4],armR:110,bendR:-150,holdR:(x,y)=>phoneH(x,y,.2,r>1.5),armL:30,bendL:20},YOU));
 memo(840,1440,.85,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(840,1150,mp,8,180);
 const hy=1790-767*1.2,fl=C((r-.9)/1.0);if(fl<1){const px=lerp(430,560,eo(fl)),py=lerp(hy-130,hy+330,eo(fl))-Math.sin(fl*Math.PI)*140;chip(px,py,'🎄',.9-fl*.4)}else sparkles(560,hy+330,C((r-1.9)/.5),8,120,'#7cf0a0');
 label3(mp<1?'You, Nov 18, tonight 🛋️':'Memopai 👋',C((mp<1?r:r-.7)/.2))});
// D: WhatsApp chat: voice note + reply
sh(T('s2')+2.6,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r+.3,{typing:r>.9&&r<1.25,list:[{a:.1,me:1,voice:1,pl:C(r/.8),dur:'0:04',time:'21:58'},{a:1.3,me:0,text:'Got it ✅ Sat 10:00 · Buy the advent calendar 🎄',time:'21:58'}]})});
// E: Saturday 10:00: buzz, you grab one
sh(T('s3')-.05,(t,r)=>{cam(540,1020,lerp(1.04,1.1,C(r/5.5)),t,.14);psky('#7fc0ee','#bfe3f7','#eaf6fc');psun(820,380,70,t);pclouds(t,260);proad(t,{});
 const bz=r>.6,got=r>1.9;
 sm(480,1780,1.24,Object.assign({t,eyes:bz&&!got?'wide':(got?'happy':'open'),brow:'up',mouth:got?'grin':(bz?'o':'smile'),look:got?[.3,.2]:[.5,.4],armR:got?150:120,bendR:got?-20:-150,holdR:got?((x,y)=>advBox(x,y+60,1.2)):((x,y)=>phoneH(x,y,.3,bz)),armL:got?140:30,bendL:got?20:20},YOU));
 if(got)sparkles(700,1000,C((r-1.9)/.6),10,220,'#ffd23f');
 const n=r<1.75?C((r-.6)/.3):Math.max(0,1-(r-1.75)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Buy the advent calendar 🎄'));
 if(n<=0)label3('You, Sat 10:00 ☕',C((r-2)/.2))});
// F: Dec 1, sunny kitchen, door #1, joy; then 'You, sorted'
sh(T('p1')-.05,(t,r)=>{cam(600,1020,lerp(1.05,1.12,C(r/4.8)),t,.14);kitchen(t,{clock:[7,5],sun:1});const d1=C((r-1.0)/.6);fridge(850,1760,1.05,{cal:1,door1:d1});
 const joy=d1>.5,bj=joy?Math.abs(Math.sin(t*6))*30:0;
 sm(270,1780,1.15,Object.assign({t,eyes:'happy',brow:'up',mouth:joy?'grin':'smile',blush:joy?1:0,look:[.5,0],armR:40,bendR:-110,holdR:(x,y)=>mug(x,y+10),armL:30,bendL:20},YOU));
 sm(560,1780-bj,.86,Object.assign({t,eyes:joy?'happy':'open',brow:'up',mouth:joy?'open':'smile',look:[.5,-.4],armR:joy?160:130,bendR:joy?-20:-40,armL:joy?160:30,bendL:joy?20:20},KID));
 if(joy){sparkles(720,1100,C((r-1.4)/1.0),12,240,'#ffd23f');psnow(t,.4,40)}
 const so=r>2.3;label3(so?'You, sorted 😌':'Your kid, Dec 1 🤩',C((so?r-2.3:r)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,1.6,1));
