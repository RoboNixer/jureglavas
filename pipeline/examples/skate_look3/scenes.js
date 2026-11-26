// 2026-11-26 20:00 STORY — "'You said we'd go skating this weekend!' (Third weekend in a row.)"
// craft ladder: skates3() + skatePair3() + fairyLights3() + iceRink3() (look3.js)
const YOU={hair:'curl'};
const KID={hair:'bun',hairc:'#7a4a2a',lashes:1,dress:'#d1495b'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function nightRoom(t,warm){proom(t,{win:790,night:1,lamp:170,plant:0,frame:[330,560],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(200,800,620,'255,210,140',warm?.5:.4)}
// A: Sunday 19:00, you on the sofa, your daughter in her coat with skates
function shotA(t,r,lab){cam(560,1080,lerp(1.02,1.09,C(r/5)),t,.1);nightRoom(t);
 psofa(400,1700,1.08,'#5a7fb5','#4a6a9a');
 const talk=r<2.3,hit=r>2.6;
 sm(400,1830,1.1,Object.assign({t,eyes:'open',brow:hit?'worried':'up',mouth:hit?'wavy':'o',look:[.8,-.1],sweat:hit?1:0,armR:110,bendR:-110,holdR:(x,y)=>phoneH(x+10,y,.1,0),armL:20,bendL:10},YOU));
 sm(770,1880,.92,Object.assign({t,eyes:'open',brow:talk?'angry':'sad',mouth:talk?'open':'frown',talk:talk?t:null,look:[-.8,0],armR:150,bendR:-10,holdR:(hx,hy)=>skatePair3(hx,hy,.55,t),armL:25,bendL:-30,tilt:talk?Math.sin(t*8)*3:0},KID));
 if(lab)label3('You, Sunday 19:00 😬',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close-up, she holds up her tiny skates
const B0=T('k2')-.06;
function shotB(t,r,lab){cam(560,1080,lerp(1.04,1.09,C(r/2.6)),t,.08);nightRoom(t,1);
 const talk=r<1.9;
 sm(680,1880,.8,Object.assign({t,eyes:'open',brow:'angry',mouth:talk?'open':'frown',talk:talk?t:null,look:[0,-.2],armR:165,bendR:-55,armL:165,bendL:-55,
  holdR:(hx,hy)=>skates3(hx+10,hy+40,.4,{rot:-.1}),holdL:(hx,hy)=>skates3(hx-10,hy+40,.4,{rot:.1,flip:1})},KID));
 sm(330,1880,.98,Object.assign({t,eyes:'open',brow:'worried',mouth:'wavy',sweat:1,look:[.8,-.3],armR:20,bendR:10,armL:20,bendL:10,noshadow:0},YOU));
 if(lab)label3("Last year's skates ⛸️",C(r/.2))}
sh(B0,(t,r)=>shotB(t,r,1));
// C: the promise moment: Memopai hops on the sofa, voice note, ⛸️ flies into the phone
const C0=T('s2')+.42;
sh(C0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/3)),t,.1);
 proom(t,{win:790,plant:0,lamp:180,frame:[330,560],wall:'#f3dcc4',wall2:'#e6c3a3'});glow(200,800,600,'255,214,150',.35);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=y-767*s,talk=r>.5&&r<2.6;
 sm(420,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C(r/.5);memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180);
 const ft=1.0,fl=C((r-ft)/.8);if(r>ft-.3){if(fl<1){const px=lerp(250,600,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'⛸️',C((r-ft+.3)/.3)*(1-fl*.4))}else sparkles(600,hy+200,C((r-ft-.8)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C(r/.2))});
// D: the chat
const D0=C0+2.75;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.5&&r<1.0,list:[{a:0,me:1,voice:1,pl:C(r/.6),dur:'0:04',time:'Mon 19:42'},{a:.45,date:'🎤 "Saturday at 10: skating with her"'},{a:1.0,me:0,text:'✅ Got it! Saturday 10:00 → ⛸️ Skating with her',time:'19:42'}]})});
// E: Saturday 10:00, sunny room, phone buzzes, you jump up
const E0=T('s3')+1.25,NT=T('s4')+.9-E0;
sh(E0,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/2.8)),t,.12);
 proom(t,{win:790,plant:190,lamp:0,frame:null,wall:'#f6e6cf',wall2:'#ead2b2'});glow(790,600,600,'255,240,190',.5);
 psofa(420,1700,1.08,'#5a7fb5','#4a6a9a');
 const ping=r>NT,up=C((r-NT-.35)/.4);
 sm(420,1830-Math.sin(up*Math.PI)*90,1.1,Object.assign({t,eyes:ping?(up>0?'happy':'open'):'open',brow:'up',mouth:ping?(up>0?'grin':'o'):'smile',look:[.4,.3],armR:ping?150:110,bendR:ping?-10:-110,holdR:(x,y)=>phoneH(x+10,y,ping?-.3:.1,ping&&Math.sin(t*24)>0),armL:ping?140:20,bendL:ping?-20:10},YOU));
 if(ping&&r<NT+2.2)notif(338,C((r-NT)/.25),'Memopai','⛸️ Skating with her! Grab the coats');
 else if(!ping)label3('You, Saturday 10:00 🙂',C(r/.2))});
// F: the ice rink at dusk, fairy lights, you wobbling, holding her hand, both laughing
sh(T('p1')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/3)),t,.12);iceRink3(t);
 const wob=Math.sin(t*5);
 const blade=(x,y,s)=>{X.save();X.strokeStyle='#9aa4b2';X.lineWidth=9*s;X.lineCap='round';X.beginPath();X.moveTo(x-150*s,y+16*s);X.lineTo(x+150*s,y+16*s);X.stroke();X.restore()};
 blade(410,1840,1.1);blade(700,1860,.9);
 sm(410,1840,1.1,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',lean:wob*5,look:[.5,0],armL:95+wob*20,bendL:-20,armR:70,bendR:-30,blush:1},YOU));
 sm(700,1860,.9,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.5,0],armL:80,bendL:-20,armR:120,bendR:-30,tilt:Math.sin(t*3)*4},KID));
 if(r>.3)sparkles(560,1150,C((r-.3)/1.5),10,260);
 label3('You, Saturday 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: shot A with no label
sh(1000,(t,r)=>shotA(t,1.0,0));
