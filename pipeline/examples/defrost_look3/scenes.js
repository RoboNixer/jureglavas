// 2026-11-26 12:00 STORY — "'Mum, what's for dinner?' (The chicken's still a block of ice.)"
// craft ladder (look3.js): iceChicken3() frozen-solid bag of drumsticks, chickenDish3() roast drumsticks in an oven dish with steam
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#5a3a22',jumper:'#e0603a'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function fork(hx,hy){X.save();X.translate(hx,hy);line([[0,10],[0,-90]],9,'#9aa7b2');for(const dx of[-12,0,12])line([[dx,-90],[dx,-125]],6,'#9aa7b2');X.restore()}
function kitchen(t,o={}){proom(t,{win:880,plant:0,lamp:o.night?1:0,night:o.night||0,frame:null,wall:o.wall||(o.night?'#d6c4a6':'#f4e6cc'),wall2:o.wall2||(o.night?'#c2aa86':'#e7d0ab')});
 if(o.night)glow(560,620,600,'255,205,130',.45);else if(o.warm)glow(540,900,820,'255,210,140',o.warm);else glow(540,700,620,'255,236,190',.4)}
// A: 18:30 kitchen: your son with an empty plate + fork; you turn from the fridge holding the frozen chicken; at j1 you knock on it with your knuckles: CLONK CLONK
function shotA(t,r,cv){const J=T('j1')-.05,zk=cv?0:eo(C((r-J)/.4));
 if(cv)cam(560,960,1.06,t,0);else cam(lerp(580,540,zk),lerp(1130,1110,zk),lerp(1.12,1.17,C(r/3))+zk*.06,t,.1);
 kitchen(t,{night:1});wclock(560,560,.6,18,30);
 fridge3(150,1760,1.0,{open:cv?0:1-C((r-.2)/.5)});
 const ask=!cv&&r<1.4,shock=cv||r>1.6;
 sm(790,1800,.92,Object.assign({t,eyes:shock?'wide':'open',brow:'up',mouth:ask?'open':(shock?'o':'smile'),talk:ask?t:null,look:[-.7,0],armR:60,bendR:-70,holdR:(x,y)=>fork(x,y),armL:55,bendL:-50,holdL:(x,y)=>plate(x-20,y-10,.75)},SON));
 const k1=J+.35,k2=J+.8;const hit=cv?0:Math.max(0,1-Math.abs(r-k1)/.12,1-Math.abs(r-k2)/.12);
 const turn=cv?1:eo(C((r-.15)/.6)),knk=!cv&&r>J-.2;
 const HL=(x,y)=>{if(turn>.05){iceChicken3(x+45,y-30,lerp(.5,.76,turn),{t,rot:.05,frost:1});if(hit>.4){const q=1-hit;for(let k=0;k<7;k++){const a=k/7*Math.PI*2;line([[x+120+Math.cos(a)*110,y-90+Math.sin(a)*80],[x+120+Math.cos(a)*(150+q*70),y-90+Math.sin(a)*(115+q*45)]],9,'#ffffff')}}}};
 sm(450,1830,1.15,Object.assign({t,eyes:turn>.5?'wide':'open',lid:knk?.35:0,brow:knk?'flat':'worried',mouth:knk?'flat':(r>1.5||cv?'wavy':'o'),sweat:!knk&&(r>1.5||cv),look:knk?[.9,.1]:[.5,.1],
  armL:lerp(30,60,turn),bendL:-60,holdL:HL,armR:knk?lerp(62,45,hit):25,bendR:knk?lerp(-100,-130,hit):10},YOU));
 if(!cv){if(r<J)label3('You at 18:30 😬',C((r-.05)/.2));else label3('Dinner 🧊',C((r-J)/.2))}}
sh(0,(t,r)=>shotA(t,r));
// B: yesterday 15:00 at your office desk: thought 'tonight 🙃' with the 🍗; Memopai hops onto the desk, you voice-note it, 🍗 flies into the phone
const B0=T('r1')-.3,MP=T('s2')-.75-B0;
sh(B0,(t,r)=>{cam(540,1080,lerp(1.04,1.09,C(r/3.4)),t,.1);
 proom(t,{win:820,plant:200,lamp:0,wall:'#e3e8ef',wall2:'#cfd7e2',floor:'#8f9bab',floor2:'#6f7b8c',curtain:'#9fb3cc',curtain2:'#8aa0bd'});
 const talk=r>MP+.75,y=1720,s=1.12,hy=HD(y,s);
 sm(560,y,s,Object.assign({t,eyes:'open',lid:talk?0:.35,brow:talk?'up':'flat',mouth:talk?'smile':'smirk',talk:talk?t:null,look:talk?[.4,.3]:[.6,-.4],armR:talk?140:60,bendR:talk?-130:-70,holdR:(x,y)=>phoneH(x,y,talk?.2:-.1,talk),armL:60,bendL:-70},YOU,SIT));
 desk3(540,1440,1.0,{lit:1,mx:-300});rr(130,1468,820,300,14,'#b98c5e',7);rr(170,1500,740,236,10,'#c99a6a',0);
 const ta=C((r-.25)/.3)*(1-C((r-MP+.1)/.2));
 thought3(660,hy-205,185,ta,600,hy-110,(x,y)=>{txt('tonight 🙃',x+55,y+8,56,'#151515',0,'900 ');X.font="56px 'Noto Color Emoji'";X.textAlign='center';X.fillText('🍗',x-100,y+10)});
 const mp=C((r-MP)/.5);if(mp>0){memo(820,1430,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(820,1300,mp,10,180)}
 const fl=C((r-MP-1.2)/.8);if(fl>0&&fl<1){X.save();X.font="70px 'Noto Color Emoji'";X.textAlign='center';X.fillText('🍗',lerp(660,580,eo(fl)),lerp(hy-240,hy+120,eo(fl))-Math.sin(fl*Math.PI)*60);X.restore()}
 if(fl>=1)sparkles(580,hy+110,C((r-MP-2)/.5),8,120,'#7cf0a0');
 if(mp<=0)label3('You, yesterday 15:00 🙃',C(r/.2));else label3('Memopai 😎',C((r-MP)/.2))});
// C: the WhatsApp chat
const C0=T('s2')+1.6;
sh(C0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#1d2350');g.addColorStop(1,'#2b3a6e');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>1.3&&r<1.9,list:[{a:0,me:1,voice:1,dur:'0:04',pl:C(r/1.2),time:'15:04'},{a:.35,me:1,text:'"Remind me at 9 tonight: chicken from the freezer into the fridge"',time:'15:04'},{a:1.9,me:0,text:'✅ Got it! Today 21:00 · 🍗 Chicken into the fridge',time:'15:04'}]})});
// D: 21:00 kitchen, pyjamas: phone buzzes on the worktop, you move the ice block from the freezer into the fridge
const D0=T('s3')-.1,NT=.25;
sh(D0,(t,r)=>{cam(540,1050,lerp(1.03,1.08,C(r/2.9)),t,.1);
 kitchen(t,{night:1});wclock(800,520,.6,21,0);
 const op=C((r-1.2)/.4);fridge3(300,1760,1.0,{open:op,dark:1,inside:(fx,fy)=>{if(r>2.1)iceChicken3(fx,fy+90,.42,{t,frost:.6})}});
 const mv=C((r-1.4)/.7),y=1830,s=1.1;
 sm(lerp(680,560,mv),y,s,Object.assign({t,pj:'#9fd0a8',limb:'#2b3550',eyes:r>NT&&r<1.2?'wide':'happy',brow:'up',mouth:r>1.2?'grin':'o',look:r<1.2?[.2,.5]:[-.7,.1],armL:r<2.1?55:20,bendL:-60,armR:r<1.2?100:55,bendR:r<1.2?-110:-60,
  holdR:(x,y)=>{if(r<1.2)phoneH(x,y,.1,r>NT);else if(r<2.1)iceChicken3(x-60,y+20,.45,{t,frost:.8})}},YOU));
 if(r>NT)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.9)/.25)),'Memopai','🍗 Chicken into the fridge (21:00)')});
// E: payoff, same framing as A, warm: you hold the steaming dish of roast drumsticks, your son grins with his plate + fork
sh(T('p1')-.4,(t,r)=>{cam(560,1130,lerp(1.12,1.16,C(r/4.2)),t,.1);
 kitchen(t,{warm:.45});wclock(560,560,.6,18,30);
 fridge3(150,1760,1.0,{});
 sm(790,1800,.92,Object.assign({t,eyes:r>1?'happy':'open',brow:'up',mouth:'grin',blush:1,look:[-.6,.3],armR:60,bendR:-70,holdR:(x,y)=>fork(x,y),armL:55,bendL:-50,holdL:(x,y)=>plate(x-20,y-10,.75)},SON));
 sm(390,1830,1.15,Object.assign({t,eyes:r>1.8?'happy':'open',lid:.15,brow:'up',mouth:'smile',blush:r>1.8,look:[.6,.3],armR:60,bendR:-60,armL:60,bendL:-60,holdR:(x,y)=>chickenDish3(x+20,y-10,.55,{t,steam:1})},YOU));
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.0,1));
