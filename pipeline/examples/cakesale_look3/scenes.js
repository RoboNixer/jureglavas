// 2026-11-24 20:00 FUN FACT — "'Mum, where are my cupcakes?' (The cake sale is today.)"
// craft ladder (look3.js): stove3() cooker + pot + steam (+oven glow), crackers3() plain cracker packet, cupcakes3() tray of 12 frosted cupcakes
const YOU={hair:'curl'};
const DAU={hair:'bun',hairc:'#8a4b2a',lashes:1,jumper:'#2f4f8a'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function spoon(hx,hy,t){X.save();X.translate(hx,hy);X.rotate(.5+Math.sin(t*6)*.25);line([[0,0],[0,170]],12,'#a0663a');ell(0,185,22,30,'#a0663a',4);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function kitchen(t,o={}){proom(t,{win:300,plant:880,lamp:o.night?1:0,night:o.night||0,frame:null,wall:o.wall||(o.night?'#d9c7a8':'#f4e6cc'),wall2:o.wall2||(o.night?'#c4ad8a':'#e7d0ab')});
 if(o.night)glow(560,620,560,'255,205,130',.45);else if(o.warm)glow(300,700,800,'255,214,150',o.warm);else glow(300,700,620,'255,236,190',.45);}
// A: Friday 07:50 kitchen: daughter in school jumper, hands out 'where are my cupcakes?'; at h1 you raise a packet of crackers
function shotA(t,r,lab,cv){const H1=T('h1')-.05,up=cv?1:eo(C((r-H1)/.45));
 if(cv)cam(540,1040,1.06,t,0);else cam(540,lerp(1060,1020,up),lerp(1.02,1.1,C(r/4.6)),t,.1);
 kitchen(t);wclock(800,560,.75,7,50);
 const ask=r<2.7&&!cv;
 sm(790,1840,.95,Object.assign({t,eyes:up>.5?'open':'wide',lid:up>.5?.5:0,brow:up>.5?'flat':'up',mouth:up>.5?'flat':'open',talk:ask?t:null,look:[-.7,up>.5?-.1:0],armL:ask?70:20,bendL:ask?-40:10,armR:ask?70:20,bendR:ask?-40:10},DAU));
 sm(290,1860,1.14,Object.assign({t,eyes:up>.5?'open':'wide',brow:'worried',mouth:up>.5?'grin':'o',sweat:up>.3,look:[.7,0],armL:30,bendL:-140,holdL:(hx,hy)=>pmug(hx,hy+20,.9,'#9be0b0'),armR:lerp(30,115,up),bendR:lerp(-20,-60,up),holdR:(hx,hy)=>crackers3(hx+10,hy-50,lerp(.5,.72,up),{rot:-.12})},YOU));
 if(lab)label3('You, Friday 07:50 😳',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: Monday 18:30 flashback at the stove; she talks, the 🧁 bounces off your head; at f1 the camera dives into your head: 🍝 fills it, 🧁 slides through and drops out
const B0=T('r1')-.3;
sh(B0,(t,r)=>{const F=T('f1')-B0-.05,z=eo(C((r-F)/.5));
 const y=1840,s=1.12,hy=HD(y,s);
 cam(lerp(540,590,z),lerp(1050,hy-200,z),lerp(1.03,1.55,z),t,.08);
 kitchen(t,{night:1});wclock(250,540,.6,18,30);
 stove3(800,1720,.9,t,{steam:1});
 sm(250,1840,.82,Object.assign({t,eyes:'open',brow:'up',mouth:'open',talk:r<F-.1?t:null,look:[.8,-.5],armR:120,bendR:-40,armL:20,bendL:10},DAU));
 sm(560,y,s,Object.assign({t,eyes:z>.5?'dizzy':'open',lid:z>.5?0:.2,brow:z>.5?'worried':'flat',mouth:z>.5?'wavy':'smile',talk:(r>.9&&r<1.5)?t:null,look:[.9,.4],armR:95,bendR:-60,holdR:(hx,hy)=>spoon(hx,hy,t),armL:30,bendL:10},YOU));
 if(z<.5){const p=C((r-.4)/1.1);emo(lerp(320,520,eo(p)),lerp(980,hy-200,eo(p))-Math.sin(p*Math.PI)*80,'🧁',.9,C(r*3)*(1-z*2))}
 else{const a=C((z-.5)*2),bx=640,by=hy-400;X.save();X.globalAlpha=a;X.shadowColor='rgba(0,0,0,.2)';X.shadowBlur=16;circ(bx,by,165,'#ffffff',6);circ(bx-150,by+190,30,'#ffffff',5);circ(bx-185,by+250,16,'#ffffff',4);X.restore();
  emo(bx,by,'🍝',1.5*a,a);for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.globalAlpha=.5*(1-ph)*a;circ(bx-50+k*50,by-110-ph*90,18+ph*20,'#ffffff',0);X.globalAlpha=1}
  const q=C((r-F-.6)/1.5);if(q>0){const hit=q<.45,qx=hit?lerp(390,470,q/.45):lerp(470,430,(q-.45)/.55),qy=hit?by-40:by-40+Math.pow((q-.45)/.55,2)*700;emo(qx,qy,'🧁',.75,1)}}
 if(z<.5)label3('Monday, 18:30 🍝',C(r/.2)*(1-C((z-.3)*5)));else label3('Your brain 🫠',C((z-.5)*5))});
// C: Monday again (next time): Memopai hops onto the worktop; you voice-note it, still stirring; the 🧁 flies into the phone
const C0=T('s2')-.25;
sh(C0,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/2.4)),t,.1);
 kitchen(t,{night:1});wclock(250,540,.6,18,32);
 stove3(800,1720,.9,t,{steam:1});
 const y=1840,s=1.12,hy=HD(y,s);
 sm(520,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'smile',talk:r>.5?t:null,look:[-.5,-.2],armR:95,bendR:-60,holdR:(hx,hy)=>spoon(hx,hy,t),armL:150,bendL:-110,holdL:(hx,hy)=>phoneH(hx,hy+10,.1,r>.4)},YOU));
 const mp=C((r-.05)/.5);if(mp>0){memo(210,1560,.72,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(210,1250,mp,8,180)}
 const ft=1.0,fl=C((r-ft)/.8);if(r>ft-.3){if(fl<1)emo(lerp(740,420,eo(fl)),lerp(hy-380,hy-120,eo(fl))-Math.sin(fl*Math.PI)*60,'🧁',C((r-ft+.3)/.3)*(1-fl*.4));else sparkles(420,hy-120,C((r-ft-.8)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-.05)/.2))});
// D: the chat: voice note + ✅ reply
const D0=T('s2')+2.15;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{list:[{a:0,me:1,voice:1,dur:'0:04',pl:C(r/1.2),time:'18:32'},{a:.25,me:1,text:'"Remind me Thursday at 6: bake cupcakes for the bake sale"',time:'18:32'},{a:.9,me:0,text:'✅ Got it! Thu 18:00 · 🧁 Bake cupcakes for the bake sale',time:'18:32'}]})});
// E: Thursday 18:00: your phone buzzes on the worktop, notif; you grab the mixing bowl, oven on
const E0=T('s3')-.2,NT=.2;
sh(E0,(t,r)=>{cam(540,1040,lerp(1.04,1.09,C(r/2.7)),t,.1);
 kitchen(t,{night:1});wclock(250,540,.6,18,0);
 const on=r>1.3;stove3(800,1720,.9,t,{pot:0,oven:on});
 const y=1840,s=1.12;
 sm(500,y,s,Object.assign({t,eyes:r>NT&&r<1.3?'wide':'happy',brow:'up',mouth:r>1.3?'grin':'o',look:[.3,.4],armR:55,bendR:-90,armL:55,bendL:-90,holdR:(hx,hy)=>mixbowl(hx-60,hy+70,.8,t,{whisk:on,batter:1})},YOU));
 if(r>NT)notif(338,C((r-NT)/.3)*(1-C((r-NT-2.2)/.25)),'Memopai','🧁 Bake cupcakes for the bake sale')});
// F: same framing as A, warm: she holds the tray of cupcakes, you calm with your coffee
sh(T('p1')-.5,(t,r)=>{cam(540,1050,lerp(1.03,1.07,C(r/4.4)),t,.1);
 kitchen(t,{warm:.5});wclock(800,560,.75,7,50);
 sm(735,1840,.95,Object.assign({t,eyes:r>1.2?'happy':'open',brow:'up',mouth:'grin',blush:1,look:[-.5,.4],armL:75,bendL:-95,armR:75,bendR:-95,holdR:(hx,hy)=>cupcakes3(hx-55,hy-20,.5,{t,shine:r>.6})},DAU));
 sm(310,1860,1.14,Object.assign({t,eyes:r>1.6?'happy':'open',lid:.15,brow:'up',mouth:'smile',blush:r>1.6,look:[.7,.1],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.9,'#9be0b0'),armL:20,bendL:10},YOU));
 label3('You, sorted 😌',C((r-.4)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.6,0,1));
