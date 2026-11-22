// 2026-11-22 14:00 FUN FACT — "Sunday. Not one clean mug. (They're all in his room.)"
// craft ladder: mug3(), mugpile3(), cupboard3() (look3.js)
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#4caf7a',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function cpot(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-34,-110,68,110,12,'rgba(220,240,255,.75)',5);rr(-30,-60,60,56,8,'#4a2a14',0);rr(-38,-124,76,18,6,'#2b2b2b',4);line([[34,-90],[58,-80],[58,-30],[34,-20]],7,'#2b2b2b');X.restore()}
function kitchen(t,o={}){proom(t,{win:300,plant:0,lamp:0,night:0,frame:null,wall:o.wall||'#f4e6cc',wall2:o.wall2||'#e7d0ab'});glow(300,700,620,'255,236,190',.45)}
function teenRoom(t,o={}){proom(t,{win:o.night?null:820,plant:0,lamp:o.night?1:0,night:o.night?1:0,frame:[250,500],wall:o.night?'#c9bfe0':'#dfe6f2',wall2:o.night?'#a99cc8':'#c6d0e2',floor:'#a77b55',floor2:'#86603f'});
 if(o.night)glow(300,700,520,'180,120,255',.35);else glow(820,640,560,'255,240,200',.4);
 // poster
 X.save();X.translate(720,520);X.rotate(.04);rr(-110,-140,220,280,8,'#ff7a5a',6);circ(0,-30,60,'#ffd23f',5);line([[-70,90],[70,90]],12,'#151515');X.restore()}
function desk(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-300,0,600,40,10,'#8a5a3a',6);rr(-280,40,40,420,6,'#6e4528',5);rr(240,40,40,420,6,'#6e4528',5);X.restore()}
const CT=1310,DY=1250;
// A: frame 1 = Sunday 09:00, you with the coffee pot in front of an empty, open mug cupboard
function shotA(t,r,lab,cv){if(cv)cam(540,1040,1.04,t,0);else cam(540,1050,lerp(1.03,1.09,C(r/2.6)),t,.1);
 kitchen(t);
 const op=cv?1:eo(C((r-.1)/.45)),shock=cv||r>.6;
 cupboard3(640,500,1.0,{open:op});
 sm(360,1900,1.2,Object.assign({t,eyes:'open',brow:shock?'worried':'flat',mouth:shock?'wavy':'smile',look:[.8,-.3],sweat:shock,armR:115,bendR:-105,holdR:(hx,hy)=>cpot(hx+20,hy+40,1.15),armL:20,bendL:15,lean:shock?-3:0},YOU));
 counter(540,CT+360,1);
 if(lab)label3('You, Sunday 09:00 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: whip to the teen's room: the mug tower on his desk; he grins 'I'll bring them down later!'
const B0=2.45;
sh(B0,(t,r)=>{cam(540,1060,lerp(1.04,1.09,C(r/3)),t,.1);
 teenRoom(t);
 desk(330,DY,1);mugpile3(330,DY,.9,{t,mould:7});
 const kt=T('k1')-B0,talk=r>kt&&r<kt+1.3;
 sm(730,1890,1.1,Object.assign({t,eyes:r>kt?'happy':'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[-.4,.1],armR:r>kt?95:40,bendR:r>kt?-110:20,armL:100,bendL:-100,holdL:(hx,hy)=>phoneH(hx-6,hy,.15,1,'#5a8fe8')},SON));
 if(r<kt)label3("Your teen's room 🫠",C(r/.2));else label3('Your teen 😁',C((r-kt)/.2))});
// C: close-up: the October mug, fuzz with a little face, stink
sh(T('r1')-.06,(t,r)=>{cam(540,1020,lerp(1.05,1.12,eo(C(r/3))),t,.08);
 teenRoom(t);X.fillStyle='rgba(30,20,50,.25)';X.fillRect(-2000,-2000,5000,5000);
 desk(540,1380,1.7);X.save();X.globalAlpha=.9;mugpile3(540,1180,1.25,{t,mould:-1,wob:.6});X.restore();
 mug3(540,1420,2.3,{col:'#ffffff',stain:1,fuzz:eo(C((r+.4)/.8)),face:1,t});
 stink(540,1030,t,C((r-.2)/.5),1.0);
 label3('The October mug 🤢',C(r/.2))});
// D: evening sofa; Memopai hops onto the arm; voice note; ☕ flies into the phone
const MP=.02;
sh(T('s2')-.05,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/4.8)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.4&&r<4.4;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.6,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'☕',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// E: the chat: voice note → confirmation → invite → he accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:04',time:'19:40'},{a:.55,me:0,text:'✅ Got it! Every Sunday 18:00 → your son: ☕ Mugs back to the kitchen!',time:'19:40'},{a:1.2,date:'Invite sent to his WhatsApp'},{a:1.8,date:'✓ He tapped Accept'}]})});
// F: Sunday 18:00, his room at dusk: phone on the desk buzzes, he scoops up the stack of mugs
const F0=T('s4')-.05,NT=.15;
sh(F0,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/2.5)),t,.12);
 teenRoom(t,{night:1});
 desk(330,DY,1);
 const ping=r>NT,got=C((r-1.15)/.35);
 if(got<=0)mugpile3(330,DY,.9,{t,mould:-1,wob:0});
 phoneH(470,DY,0,ping&&Math.sin(t*24)>0);
 sm(720,1890,1.1,Object.assign({t,eyes:got>0?'happy':'open',brow:'up',mouth:got>0?'grin':'o',look:[-.6,.2],armR:got>0?60:40,bendR:got>0?-60:20,armL:got>0?70:30,bendL:got>0?70:20,
  holdL:got>0?(hx,hy)=>{for(let k=0;k<4;k++)mug3(hx+50,hy+40-k*70,.75,{col:['#ffd23f','#5a8fe8','#ff7a6a','#7bc86c'][k],stain:1,rot:(k%2?-.06:.06)})}:null,walk:got>0?t:null},SON));
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-2.0)/.25)),'Memopai','☕ Mugs back to the kitchen!')});
// G: same framing as A, warm: cupboard full of clean mugs; you with your favourite mug
sh(T('p1')-.08,(t,r)=>{cam(540,1050,lerp(1.03,1.07,C(r/3.6)),t,.12);
 kitchen(t,{wall:'#f8e9cf'});glow(500,800,700,'255,215,150',.35);
 cupboard3(640,500,1.0,{open:1,full:1});if(r>.2)sparkles(640,720,C((r-.2)/1.5),12,220);
 sm(360,1900,1.2,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:r>1,look:[.6,.2],armR:95,bendR:-95,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:20,bendL:15},YOU));
 counter(540,CT+360,1);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.0,0,1));
