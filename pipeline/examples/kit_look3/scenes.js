// 2026-11-26 18:00 PRODUCTIVITY — "'Mum! Where's my football kit?!' (It's been in the bag since last Saturday.)"
// craft ladder: muddyKit3() (stiff mud football kit that stands up on its own) + flies3() (look3.js)
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#4a3426',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function hall(t,sun){hallway(t,{dx:780});if(sun)glow(780,640,520,'255,240,190',.45);wclock(470,560,.55,8,40)}
// A: Saturday 08:40, hallway, your son yells, you with coffee
function shotA(t,r,lab){cam(540,1060,lerp(1.03,1.08,C(r/2.6)),t,.12);hall(t,0);
 const talk=r<2.4;
 sm(340,1880,1.05,Object.assign({t,tee:'#f4f4f4',eyes:'open',brow:'worried',mouth:talk?'open':'o',talk:talk?t:null,look:[.7,0],armL:150,bendL:-30,armR:150,bendR:-30,tilt:Math.sin(t*9)*3},SON));
 sm(740,1880,1.12,Object.assign({t,eyes:'open',brow:'up',mouth:'o',look:[-.7,0],sweat:1,armR:95,bendR:-95,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:20,bendL:15},YOU));
 if(lab)label3('You, Sat 08:40 😳',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: you open his bag... the mud-stiff kit rises out and stands up on its own
const B0=T('h1')-.06,RB=T('r1')-B0;
function shotB(t,r,lab){cam(540,1080,lerp(1.04,1.1,C(r/5)),t,.08);
 proom(t,{win:null,frame:null,plant:0,lamp:0,wall:'#f4e3c9',wall2:'#e8cda8',floor:'#b98a5e',floor2:'#94673f'});glow(540,700,600,'255,236,190',.3);
 const up=C((r-.9)/1.2),hop=C((r-RB+.1)/.6),out=hop>0;
 sm(240,1880,1.02,Object.assign({t,eyes:out?'open':'open',lid:out?0:.2,brow:out?'up':'worried',mouth:out?'o':'wavy',look:[.8,.5],sweat:out?1:0,lean:6,armR:60,bendR:20,armL:20,bendL:10},YOU));
 if(!out&&up>0)muddyKit3(490,1580-up*260,.85,{t,wob:.3});
 gymbag3(470,1640,1.1,{t,open:1});
 if(out){const px=lerp(520,650,eo(hop)),py=lerp(1320,1640,eo(hop))-Math.sin(hop*Math.PI)*260;muddyKit3(px,py,.95,{t,wob:hop>=1?1:0});if(hop>=1)squash&&0;flies3(650,1250,t,C((hop-.5)/.5),1,4)}
 stink(out?650:520,out?1280:1420,t,C((r-.6)/.5),out?.9:.7);
 if(lab)label3(out?"Last week's kit 🤢":'His football bag 😬',C(r/.2))}
sh(B0,(t,r)=>shotB(t,r,1));
// C: Thursday evening sofa, Memopai hops on, voice note, ⚽ flies into the phone
const C0=T('s2')-.05;
sh(C0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/3.2)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.9&&r<3.2;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C(r/.5);memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180);
 const ft=1.9,fl=C((r-ft)/.8);if(r>ft-.3){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'⚽',C((r-ft+.3)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.8)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C(r/.2))});
// D: the chat
const D0=C0+3.1;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.4&&r<.8,list:[{a:0,me:1,voice:1,pl:C(r/.5),dur:'0:05',time:'Thu 18:12'},{a:.8,me:0,text:'✅ Got it! Every Thursday 19:00 → your son: ⚽ Kit in the wash!',time:'18:12'},{a:2.0,date:'Invite sent to his WhatsApp'},{a:3.1,date:'✓ He tapped Accept · no app needed'}]})});
// E: Thursday 19:00, his phone buzzes, he grabs the stiff kit and heads for the washer
const E0=T('s4')-.05,NT=T('s4')+.95-E0,GK=T('k2')-E0;
sh(E0,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/3.2)),t,.12);
 proom(t,{win:300,plant:0,lamp:1,night:1,frame:null,wall:'#dfe9f2',wall2:'#c6d4e2',floor:'#a77b55',floor2:'#86603f'});glow(760,700,520,'255,220,160',.3);
 washer(700,1560,.82,{t,door:C((r-GK-.4)/.5)});
 const ping=r>NT,grab=r>GK;
 if(!grab){muddyKit3(250,1600,.62,{t,wob:.6});flies3(250,1330,t,1,.7,3)}
 const x=grab?lerp(340,400,eo(C((r-GK)/1.2))):400;
 sm(x,1880,1.06,Object.assign({t,tee:'#f4f4f4',eyes:ping&&!grab?'open':(grab?'closed':'open'),brow:grab?'worried':'up',mouth:grab?(r<GK+1.4?'open':'wavy'):'smirk',talk:grab&&r<GK+1.4?t:null,look:[ping&&!grab?.2:.7,.3],
  armR:grab?95:110,bendR:grab?-5:-100,holdR:!grab?(hx,hy)=>phoneH(hx+10,hy,.1,ping&&Math.sin(t*24)>0):(hx,hy)=>{X.save();X.translate(hx+30,hy+300);muddyKit3(0,0,.62,{t,wob:.4});X.restore();flies3(hx+20,hy-30,t,1,.55,3);stink(hx+20,hy-20,t,.6,.5)},
  armL:grab?120:20,bendL:grab?-150:10},SON));
 if(ping&&r<GK+.2)notif(338,C((r-NT)/.25)*(1-C((r-GK)/.2)),'Memopai','⚽ Kit in the wash! Match on Saturday')});
// F: next Saturday, same hallway framing, sunny: clean kit, ball, you calm with coffee
sh(T('p1')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/3.6)),t,.12);hall(t,1);
 sm(340,1880,1.05,Object.assign({t,tee:'#2f7de0',num:7,eyes:'happy',brow:'up',mouth:'grin',look:[.7,0],armR:40,bendR:-20,holdR:(hx,hy)=>ball3(hx+10,hy+30,.55,t*3),armL:30,bendL:10},SON));
 if(r>.2)sparkles(340,1300,C((r-.2)/1.5),10,200);
 sm(740,1880,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:r>1,look:[-.6,.1],armR:95,bendR:-95,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:20,bendL:15},YOU));
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: shot B with the kit standing, no label
sh(1000,(t,r)=>shotB(t,RB+1.2,0));
