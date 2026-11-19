const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function thought(x,y,s,a=1){if(a<=0)return;X.save();X.globalAlpha=a;circ(x-70*s,y+110*s,12*s,'#fff',4);circ(x-40*s,y+70*s,20*s,'#fff',5);ell(x,y,110*s,80*s,'#fff',6);txt('🥚',x,y+6*s,90*s,'#111',0,'400 ');X.restore()}
function poof(x,y,q){if(q<=0||q>=1)return;X.save();X.globalAlpha=1-q;for(let k=0;k<9;k++){const a=k*0.7;circ(x+Math.cos(a)*q*170,y+Math.sin(a)*q*120,40*(1-q*.4),'#f2f2f2',4)}X.restore();txt('POOF',x,y-20-q*60,80*(1-q*.3),'#ffd23f',12)}
function counter2(x0,x1){rr(x0,1380,x1-x0,60,12,'#e9e2d6',7);rr(x0+10,1440,x1-x0-20,330,10,'#8fb7c9',7);for(let k=x0+40;k<x1-60;k+=220){rr(k,1470,180,270,12,'#a7c9d8',5);line([[k+70,1500],[k+110,1500]],10,'#5d7a88')}}
function kitchen(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:0,lamp:0,wall:'#dfe9ef',wall2:'#c8d7e0',floor:'#b9a58c',floor2:'#93806a',curtain:'#7fb3d5',curtain2:'#5f93b5'},o));
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore()}
const EVE={night:1,lamp:0,win:780,wall:'#e8dccb',wall2:'#d4c2a8'};
function flour(x,y){X.save();X.globalAlpha=.85;ell(x,y,90,22,'#fbfaf5',0);ell(x+60,y-6,40,12,'#fff',0);X.restore();rr(x-150,y-150,90,140,10,'#f1ece0',5);txt('FLOUR',x-105,y-80,22,'#7a6a50',0,'900 ')}
// A: 18:40 kitchen: you with the bowl, partner proudly back with five bags + pineapple
function kitA(t,r,lab){cam(560,1100,lerp(1.05,1.11,C(r/4)),t,.15);kitchen(t,EVE);glow(600,600,650,'255,214,150',.35);
 counter2(-100,1200);flour(170,1385);
 gbag(560,1385,.75,{leaf:1});gbag(760,1385,.8,{baguette:1});gbag(960,1385,.72,{bottle:1});
 const sp=r>T('f1')-.1, fq=C((r-T('f1'))/2.2);
 sm(840,1830,1.12,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:sp&&r<T('s1')-.3?'open':'grin',talk:sp&&r<T('s1')-.3?t:null,look:[-.6,0],armR:150,bendR:-40,holdR:(x,y)=>pineapple(x,y+40,1.0,t),armL:30,bendL:20,holdL:(x,y)=>gbag(x,y+190,.6,{leaf:1})},HER));
 sm(270,1880,1.25,Object.assign({t,eyes:r<1.6?'open':'wide',lid:r<1.6?.2:0,brow:r<1.6?'flat':'worried',mouth:r<1.6?'flat':'o',look:[.7,-.1],tilt:r>1.6?-3:0,armL:40,bendL:100,holdL:(x,y)=>mixbowl(x+60,y+30,.8,t,{whisk:0}),armR:20,bendR:30},YOU));
 if(lab)label3(r<T('f1')?'You, 18:40 🥣':'Your partner, 18:40 🛍️',C((r<T('f1')?r:r-T('f1'))/.2))}
sh(0,(t,r)=>kitA(t,r,1));
// B: earlier: she walks to the shop door with the egg thought; the door slides, POOF
sh(T('s1'),(t,r)=>{cam(540,1050,lerp(1.02,1.1,C(r/3.9)),t,.15);const wq=C(r/1.6);shopfront(t,{open:C((r-.8)/.6)});
 const x=lerp(900,600,eo(wq)),y=1820;
 sm(x,y,1.1,Object.assign({t,flip:1,walk:r<1.6?t:null,eyes:r<1.75?'open':'open',lid:r>1.75?.35:0,brow:r<1.75?'up':'flat',mouth:r<1.75?'smile':'flat',look:r<1.75?[-.6,0]:[0,-.3],armL:20,bendL:20,armR:30,bendR:-20,holdR:(x2,y2)=>{X.save();X.translate(x2,y2+40);rr(-40,-30,80,90,14,'#e0533d',5);X.restore()}},HER));
 const hy=HD(y,1.1);thought(x+150,hy-260,1,r<1.7?C(r/.3):0);poof(x+150,hy-260,C((r-1.7)/.7));
 if(r>2.4&&r<3.9){txt('…?',x+130,hy-240,90,'#ffffff',12)}
 label3('The doorway effect 🚪',C(r/.2))});
// C: next time, morning: you tell Memopai, mascot hops on the counter, the egg flies into the phone
const CK={win:780,wall:'#f3ead8',wall2:'#e6d6b8'};
sh(T('s2'),(t,r)=>{cam(560,1080,1.05,t,.15);kitchen(t,CK);psun(860,520,60,t);glow(800,600,600,'255,236,170',.35);
 counter2(-100,1200);const mp=C((r-.15)/.5);if(mp>0){memo(880,1380,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(880,1130,mp,8,160)}
 const y=1870,s=1.22,hy=HD(y,s);
 sm(380,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'open',talk:t,look:[.3,.4],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,.1,1),armR:60,bendR:-30},YOU));
 const fl=C((r-.9)/.8);if(fl<1){const px=lerp(380,330,eo(fl)),py=lerp(hy-240,hy+190,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'🥚 eggs · 17:30',1-fl*.6)}else sparkles(330,hy+170,C((r-1.7)/.5),8,120,'#7cf0a0');
 label3(r<.35?'Next time 🎤':'Memopai 😎',C((r<.35?r:r-.35)/.2))});
// D: your chat with Memopai
const D0=T('s2')+2.6;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const acc=T('s3')-D0+.3;
 phoneUI(540,900,1.28,r,{typing:r>.8&&r<1.05,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.8),dur:'0:03',time:'08:12'},{a:1.05,me:0,text:'✅ Got it! Babe 💕 · Today 17:30 · Buy eggs 🥚',time:'08:12'},{a:acc,date:'Babe 💕 tapped Accept ✓'}]});
 if(r>acc&&r<acc+.8)glow(540,700,400,'130,240,160',.3*(1-C((r-acc)/.8)))});
// E: 17:30 inside the shop: buzz, she reads it, grabs the eggs
const E0=T('s2')+5.6;
sh(E0,(t,r)=>{cam(560,1050,lerp(1.04,1.1,C(r/4.4)),t,.15);shopIn(t);
 const bz=T('s3')+3.05-E0, gr=T('f2')-E0;const on=r>bz;const y=1830,s=1.15,x=500;
 sm(x,y,s,Object.assign({t,flip:0,eyes:on?(r>gr?'happy':'wide'):'open',brow:'up',mouth:r>gr?'grin':(on?'o':'smile'),talk:r>gr&&r<gr+1.1?t:null,look:on?[.2,.5]:[.6,-.1],armL:on?115:20,bendL:on?-115:20,holdL:(x2,y2)=>phoneH(x2,y2+10,.15,on),armR:r>gr?140:30,bendR:r>gr?-30:20,holdR:r>gr?(x2,y2)=>eggbox(x2+20,y2-10,.9,{}):null},HER));
 if(on&&r<gr+.2){notif(150,C((r-bz)/.3),'Memopai','⏰ Buy eggs 🥚');const sh2=Math.sin(t*60)*5;X.save();X.globalAlpha=.7;for(let k=1;k<3;k++)circ(x-150+sh2,1100,50+k*26,null,5);X.restore()}
 if(r>gr)sparkles(x+150,900,C((r-gr)/1),10,200,'#7cf0a0');
 if(!on||r>gr+.2)label3('Her WhatsApp, 17:30 📲',C(r/.2))});
// F: 18:40 kitchen again: eggs up like a trophy, pineapple under her arm; you sorted
sh(T('p1'),(t,r)=>{cam(560,1100,lerp(1.04,1.1,C(r/4.3)),t,.15);kitchen(t,EVE);glow(600,600,700,'255,214,150',.45);
 counter2(-100,1200);flour(170,1385);gbag(700,1385,.75,{leaf:1});
 sm(840,1830,1.12,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',look:[-.6,0],armR:150,bendR:-35,holdR:(x,y)=>eggbox(x,y+10,1.0,{open:r>1.2}),armL:30,bendL:30,holdL:(x,y)=>pineapple(x+10,y+130,.8,t)},HER));
 sm(270,1880,1.25,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.6,-.2],armL:40,bendL:100,holdL:(x,y)=>mixbowl(x+60,y+30,.8,t,{whisk:1,batter:1}),armR:150,bendR:-140},YOU));
 sparkles(560,800,C((r-.3)/1.5),12,320);
 label3(r<1.2?'Your partner, 18:40 🥚':'You, sorted 😌',C((r<1.2?r:r-1.2)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>kitA(t,2.6,0));
