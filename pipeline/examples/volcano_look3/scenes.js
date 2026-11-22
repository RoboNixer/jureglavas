// 2026-11-22 09:00 PRODUCTIVITY — "Sunday, 21:30. 'It's a volcano!' (Due tomorrow.)"
// craft ladder: volcano3(), tape3(), glueStick() (look3.js)
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#7cc3f0',limb:'#2b3550'};
const SOND={hair:'spike',hairc:'#4a3426',pj:'#ff9f43',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function kitchen(t,o={}){proom(t,{win:300,plant:860,lamp:o.night?1:0,night:o.night||0,frame:null,wall:o.wall||(o.night?'#d9c7a8':'#f4e6cc'),wall2:o.wall2||(o.night?'#c4ad8a':'#e7d0ab')});
 if(o.night)glow(560,620,560,'255,205,130',.45);else glow(300,700,620,'255,236,190',.45);}
const CT=1310; // counter top
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);
// A: frame 1 = Sunday 21:30, night kitchen, you wrestling tape over the emergency volcano
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.04,t,0);else cam(540,1070,lerp(1.03,1.1,C(r/4.6)),t,.1);
 kitchen(t,{night:1});wclock(800,560,.8,21,30);
 const tug=cv?0:Math.sin(r*6)*12;
 sm(330,1900,1.22,Object.assign({t,eyes:'open',lid:.45,brow:'worried',mouth:'wavy',sweat:1,look:[.7,.35],armR:70+tug,bendR:-50,holdR:(hx,hy)=>tape3(hx+10,hy+10,.9,r*3),armL:40,bendL:30},YOU));
 counter(540,CT+360,1);
 volcano3(700,CT-6,1.0,{sad:1,t});
 troll(450,CT-60,.5,{empty:1,rot:.2});glueStick(880,CT-4,.7,.5);
 if(lab)label3('You, Sunday 21:30 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: your kid in pyjamas bounces in front of the counter: 'It's a volcano!'
sh(T('k1')-.08,(t,r)=>{cam(540,1080,lerp(1.04,1.09,C(r/1.6)),t,.1);
 kitchen(t,{night:1});wclock(800,560,.8,21,31);
 sm(760,1900,1.18,Object.assign({t,eyes:'dizzy',brow:'worried',mouth:'wavy',sweat:1,look:[-.5,.2],armL:20,bendL:10,armR:20,bendR:10},YOU));
 counter(540,CT+360,1);volcano3(860,CT-6,.7,{sad:1,t});
 const hop=Math.abs(Math.sin(r*5))*30;
 sm(360,1900-hop,.98,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',talk:r<1.0?t:null,armR:150,bendR:-30,armL:-150,bendL:30,look:[.4,0],tilt:6},SON));
 label3('Your kid 😁',C(r/.2))});
// C: close-up on the masterpiece: ketchup bottle in a cereal box, the drip
sh(T('r1')-.06,(t,r)=>{cam(540,1080,lerp(1.05,1.12,eo(C(r/2.6))),t,.08);
 kitchen(t,{night:1});X.fillStyle='rgba(30,20,10,.25)';X.fillRect(-2000,-2000,5000,5000);glow(540,900,520,'255,210,140',.5);
 counter(540,CT+560,1.3);
 volcano3(540,CT+190,1.9,{sad:1,t:t*1.6});
 label3('Your volcano 🌋',C(r/.2))});
// D: later on the sofa; Memopai hops on; voice note; 📚 flies into the phone
const MP=.05;
sh(T('s2')-.05,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.4&&r<4.8;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=3.0,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'📚',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// E: the chat: voice note → confirmation → invite → he accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:06',time:'21:52'},{a:.55,me:0,text:'✅ Got it! Every Sunday 11:00 → your son: 📚 Anything due for school this week? Tell Mum or Dad now!',time:'21:52'},{a:1.6,date:'Invite sent to his WhatsApp'},{a:2.6,date:'✓ He tapped Accept'}]})});
// F: next Sunday 11:00, daylight kitchen: his phone buzzes, he runs in waving it
sh(T('k2')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/2.4)),t,.12);
 kitchen(t);glow(850,500,600,'255,230,160',.35);wclock(800,560,.8,11,0);
 sm(760,1900,1.18,Object.assign({t,eyes:'open',brow:'up',mouth:'smile',look:[-.5,.1],armR:95,bendR:-95,holdR:(hx,hy)=>pmug(hx,hy+20,1.0,'#ffd23f'),armL:20,bendL:10},YOU));
 counter(540,CT+360,1);
 const run=eo(C(r/.5)),hop=Math.abs(Math.sin(r*7))*24*run;
 sm(lerp(140,360,run),1900-hop,.98,Object.assign({t,walk:r<.5?t:null,eyes:'open',brow:'up',mouth:'open',talk:r>.3&&r<2.2?t:null,armR:150,bendR:-20,holdR:(hx,hy)=>phoneH(hx,hy-10,.2,1),armL:-40,bendL:20,look:[.5,0]},SOND));
 notif(338,C(r/.25)*(1-C((r-2.1)/.25)),'Memopai','📚 Anything due for school this week? Tell Mum or Dad now!')});
// G: same framing as A, Sunday 21:30: proper volcano finished on the counter, you with tea instead of tape
sh(T('p1')-.08,(t,r)=>{cam(540,1070,lerp(1.03,1.07,C(r/4.4)),t,.12);
 kitchen(t,{night:1});glow(500,800,700,'255,215,150',.45);wclock(800,560,.8,21,30);
 sm(330,1900,1.22,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:r>1,look:[.6,.2],lean:-3,armR:150,bendR:-140,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:30,bendL:20},YOU));
 counter(540,CT+360,1);
 volcano3(690,CT-6,.8,{t,erupt:.55+.25*Math.sin(t*2)});
 if(r>.4)sparkles(690,CT-330,C((r-.4)/1.6),10,160);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,2.0,0,1));
