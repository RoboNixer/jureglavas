// 2026-11-22 18:00 STORY — "You waited all year for Black Friday. Then you forgot."
// craft ladder: headphones3(), cobweb(), cart3() (look3.js)
const YOU={hair:'curl',pj:'#7cc3f0',limb:'#2b3550'};
const YOUD={hair:'curl'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,on===2?'255,90,100':'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function notes(x,y,t,a=1){X.save();X.globalAlpha=C(a);for(let k=0;k<3;k++){const ph=(t*.5+k/3)%1;X.globalAlpha=C(a)*Math.sin(ph*Math.PI);txt(k%2?'♫':'♪',x+Math.sin(ph*6+k)*40+k*60-60,y-ph*260,64,'#2b3550',0,'900 ')}X.restore()}
function living(t,o={}){proom(t,{win:780,plant:200,lamp:o.night?1:0,night:o.night||0,frame:[250,520],wall:o.wall||(o.night?'#e0cdb3':'#f4e6cc'),wall2:o.wall2||(o.night?'#cbb391':'#e7d0ab')});
 if(o.night)glow(220,800,600,'255,210,140',.4);else glow(780,700,640,o.gloom?'190,200,220':'255,236,190',o.gloom?.25:.5);}
const SOFA=(t)=>psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);
// A: frame 1 = the Saturday after Black Friday: you on the sofa in pyjamas, phone glowing red, jaw dropped
function shotA(t,r,lab,cv){if(cv)cam(540,1040,1.06,t,0);else cam(540,1050,lerp(1.04,1.12,C(r/4.3)),t,.1);
 living(t,{gloom:1});SOFA(t);
 const y=1830,s=1.18,hy=HD(y,s);
 sm(500,y,s,Object.assign({t,eyes:'open',brow:'worried',mouth:'o',sweat:1,look:[.55,.45],armR:118,bendR:-118,holdR:(hx,hy2)=>phoneH(hx+8,hy2,.12,2,'#ff5a64'),armL:150,bendL:-150},YOU));
 if(lab)label3('You, last November 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: YOUR CART, the concept character: price tag flips 79 -> 129, cobwebs, smug face
sh(T('s1')-.06,(t,r)=>{cam(540,1080,lerp(1.04,1.1,C(r/3.6)),t,.1);
 living(t,{gloom:1});X.fillStyle='rgba(40,30,60,.22)';X.fillRect(-2000,-2000,5000,5000);glow(540,1000,620,'255,220,170',.45);
 const tp=C((r-.55)/.5),face=r>T('r1')-T('s1')-.1;
 cart3(520,1760,1.18,{t,face:face?'smug':'happy',look:face?[-.6,-.2]:[-.8,.3],web:1,tag:{p:tp,from:'€79',to:'€129',sub1:'BLACK FRIDAY',sub2:'DEAL ENDED'},
  item:()=>{headphones3(20,-470,.8,{rot:-.12})}});
 if(tp>0&&tp<1)sparkles(250,1400,tp,8,160,'#ff6b7a');
 label3('Your cart, since August 🛒',C(r/.2))});
// D: this year, evening sofa: phone to your mouth (voice note), Memopai hops on the arm, 🎧 flies into the phone
sh(T('s2')-.05,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/2.7)),t,.1);
 living(t,{night:1});SOFA(t);
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.5;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,.1],armR:150,bendR:-160,holdR:(x,yy)=>phoneH(x+4,yy+10,.25,1),armL:20,bendL:10},YOUD));
 const mp=C((r-.05)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=1.1,fl=C((r-ft)/.8);if(r>ft-.3){if(fl<1){const px=lerp(330,560,eo(fl)),py=lerp(hy-300,hy+40,eo(fl))-Math.sin(fl*Math.PI)*70;emo(px,py,'🎧',C((r-ft+.3)/.3)*(1-fl*.4))}else sparkles(560,hy+40,C((r-ft-.8)/.5),8,120,'#7cf0a0')}
 label3('This year: Memopai 😎',C(r/.2))});
// E: the chat: voice note → confirmation with the date
sh(T('s2')+2.6,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.45&&r<.8,list:[{a:0,me:1,voice:1,pl:C(r/.5),dur:'0:03',time:'20:14'},{a:.8,me:0,text:'✅ Got it! Fri 27 Nov · 08:00 · 🎧 Buy the headphones (Black Friday!)',time:'20:14'}]})});
// F: Friday 08:00, morning kitchen: coffee in one hand, phone buzzes (Memopai), then the green 'ordered' glow
sh(T('s4')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/3.4)),t,.12);
 proom(t,{win:300,plant:860,frame:null,wall:'#f6ead2',wall2:'#ead4b0'});glow(300,640,640,'255,236,190',.55);wclock(800,560,.8,8,0);
 const ord=r>1.9,y=1880,s=1.26;
 sm(500,y,s,Object.assign({t,eyes:ord?'happy':'open',brow:'up',mouth:ord?'grin':'o',look:[.5,.2],armR:120,bendR:-120,holdR:(hx,hy)=>phoneH(hx+10,hy,.12,ord?1:3,ord?'#25d366':'#ffffff'),armL:75,bendL:-80,holdL:(hx,hy)=>pmug(hx-10,hy+20,1.1,'#ffd23f')},YOUD));
 if(ord)sparkles(640,1000,C((r-1.9)/.7),10,180,'#7cf0a0');
 notif(338,C(r/.25)*(1-C((r-1.7)/.25)),'Memopai','🎧 Black Friday! Buy the headphones')});
// G: payoff, same sofa framing as A: sunny, headphones on, open parcel, music notes
sh(T('p1')-.08,(t,r)=>{cam(540,1050,lerp(1.04,1.08,C(r/4.5)),t,.12);
 living(t);SOFA(t);glow(700,700,700,'255,225,150',.35);
 const y=1830,s=1.18,hy=HD(y,s),bob=Math.sin(t*4)*3;
 sm(500,y,s,Object.assign({t,eyes:'closed',brow:'up',mouth:'smile',blush:1,tilt:bob,armR:150,bendR:-140,armL:150,bendL:-140},YOU));
 headphones3(500+Math.sin(bob*Math.PI/180)*-120,hy+2,s*.95,{rot:bob*Math.PI/180});
 parcel3(830,1730,.7,{open:1});
 notes(760,hy-40,t,C(r/.6));
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,2.0,0,1));
