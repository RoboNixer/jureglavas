// 2026-11-26 22:00 FOLLOWERS — "'Mum! The Christmas tree's going bald!'"
// craft ladder (look3.js): bigTree3() real tree that dries out (droop, brown, bare patches, needle pile, stand water window), needleRain3() falling needles
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#5a3a22',jumper:'#e0603a'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.45);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?'#25d366':'#3a4a66',0);X.restore()}
function lroom(t,o={}){proom(t,{win:880,plant:0,lamp:o.night?140:0,night:o.night||0,frame:null,wall:o.night?'#d9c8b0':'#f4e6cc',wall2:o.night?'#c4ad8c':'#e7d0ab',curtain:'#3f8a5e',curtain2:'#2f6e4a'});
 if(o.snow){X.save();X.beginPath();X.rect(690,280,380,520);X.clip();psnow(t,.95,70);X.restore()}
 if(o.night)glow(560,900,620,'255,205,130',o.warm?.55:.35);else glow(540,760,640,'255,236,190',.4)}
function gifts(o={}){gift(470,1600,.55,{col:'#e23b3b'});gift(700,1610,.62,{col:'#4a8fe0',rib:'#ffffff'});gift(590,1650,.45,{col:'#ffd23f',rib:'#e23b3b'})}
// A: Dec 15th night: your son points at the bald, brown tree; dry stand, needle pile; you with a mug, sweating
function shotA(t,r,cv){if(cv)cam(560,1080,1.04,t,0);else cam(560,lerp(1110,1080,C(r/4)),lerp(1.06,1.12,C(r/5)),t,.1);
 lroom(t,{night:1});
 bigTree3(580,1560,.95,{t,dry:.9,water:0,sway:0});gifts();
 const ask=!cv&&r<2.1;
 sm(830,1800,.86,Object.assign({t,eyes:'wide',brow:'up',mouth:ask?'open':'o',talk:ask?t:null,look:[-.9,-.3],armL:ask?105:70,bendL:0,armR:20,bendR:10},SON));
 sm(330,1820,1.12,Object.assign({t,eyes:'wide',brow:'worried',mouth:cv||r>2.2?'wavy':'o',sweat:cv||r>2.2,look:[.8,-.2],armR:60,bendR:-80,holdR:(x,y)=>mug3(x+10,y+20,.55,{col:'#e2508a'}),armL:20,bendL:10},YOU));
 if(!cv)label3('You, Dec 15th 😬',C((r-.05)/.2))}
sh(0,(t,r)=>shotA(t,r));
// J: close-up: your son walks past, the tree sways and needles rain down like snow onto the presents
sh(T('j1')-.2,(t,r)=>{cam(600,1250,1.3,t,.1);lroom(t,{night:1});
 const sw=r>.55?.035*Math.exp(-(r-.55)*1.2):0;
 bigTree3(600,1560,.95,{t,dry:.9,water:0,sway:sw});gifts();
 needleRain3(600,880,420,C((r-.5)/1.3)*1.3,t,1);
 sm(lerp(1050,150,C(r/1.5)),1830,.8,Object.assign({t,walk:t,eyes:'open',brow:'up',mouth:'smile',look:[-1,0]},SON));
 label3('Your tree 🥀',C((r-.05)/.2))});
// B: this year, daytime, a fresh green tree; Memopai hops in; you record a voice note, the 💧 to-do flies out of your head into the phone
const B0=T('s2')-.2,MP=.75;
sh(B0,(t,r)=>{cam(540,1110,lerp(1.04,1.09,C(r/3.6)),t,.1);lroom(t,{});
 bigTree3(720,1560,.86,{t,dry:0,water:.9,lights:0});
 const talk=r>MP+.5,y=1820,s=1.12,hy=HD(y,s);
 sm(330,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'smile':'smirk',talk:talk?t:null,look:talk?[.3,.4]:[.7,-.3],armR:talk?140:60,bendR:talk?-130:-70,holdR:(x,y)=>phoneH(x,y,talk?.2:-.1,talk),armL:25,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(560,1660,.6,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(560,1540,mp,10,180)}
 const fl=C((r-MP-1.1)/.8);if(fl>0&&fl<1){X.save();X.font="80px 'Noto Color Emoji'";X.textAlign='center';X.fillText('💧',lerp(330,430,eo(fl)),lerp(hy-120,hy+40,eo(fl))-Math.sin(fl*Math.PI)*120);X.restore()}
 if(fl>=1)sparkles(440,hy+30,C((r-MP-1.9)/.5),8,120,'#7cf0a0');
 if(mp<=0)label3('This year 🎄',C(r/.2));else label3('Memopai 😎',C((r-MP)/.2))});
// C: the WhatsApp chat (remind you + your son, he accepts once)
sh(T('s3')-.15,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#1d2350');g.addColorStop(1,'#2b3a6e');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'150,200,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.9&&r<1.4,list:[{a:0,me:1,voice:1,dur:'0:04',pl:C(r/.9),time:'10:12'},{a:.3,me:1,text:'"Every morning at 8, remind me and my son: water the tree"',time:'10:12'},{a:1.4,me:0,text:'✅ Got it! Every day 08:00 → You + your son: 💧 Water the tree',time:'10:12'},{a:2.3,date:'✓ Your son tapped Accept · no app'}]})});
// D: 08:00 morning: both phones ping; your son races you with a jug and fills the stand
const D0=T('s4')-.15,NT=.3;
sh(D0,(t,r)=>{cam(540,1110,lerp(1.03,1.08,C(r/3.2)),t,.1);lroom(t,{});wclock(250,560,.55,8,0);
 const pour=C((r-1.7)/.9);
 bigTree3(560,1560,.86,{t,dry:0,water:lerp(.15,.95,pour),lights:1});
 const run=C((r-1.0)/.7),sx=lerp(860,720,run);
 sm(sx,1800,.86,Object.assign({t,walk:run>0&&run<1?t:null,eyes:r>NT&&r<1?'wide':'happy',brow:'up',mouth:'grin',look:[-.8,.4],armL:run>=1?lerp(60,95,pour):40,bendL:-30,armR:r<1?110:30,bendR:r<1?-120:10,
  holdR:(x,y)=>{if(r<1)phoneH(x,y,.1,r>NT)},holdL:(x,y)=>{if(r>=1)jug3(x-40,y+60,.32,{water:1-pour*.8,t,rot:-pour*.9})}},SON));
 sm(290,1820,1.1,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'up',mouth:r>1.6?'grin':'smile',look:[.8,.2],armR:100,bendR:-110,holdR:(x,y)=>phoneH(x,y,.1,r>NT),armL:20,bendL:10},YOU));
 if(r>NT)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.6)/.25)),'Memopai','💧 Water the tree (08:00)')});
// E: payoff, same framing as A: Christmas Eve, lush lit tree, presents, snow outside the window
sh(T('p1')-.4,(t,r)=>{cam(560,lerp(1110,1080,C(r/4)),lerp(1.06,1.1,C(r/4.4)),t,.1);
 lroom(t,{night:1,warm:1,snow:1});
 bigTree3(580,1560,.92,{t,dry:0,water:.9,lights:1});gifts();sparkles(580,900,C(r/1.2),10,260);
 sm(830,1800,.86,Object.assign({t,eyes:r>1?'happy':'open',brow:'up',mouth:'grin',blush:1,look:[-.6,-.2],armL:20,bendL:10,armR:20,bendR:10},SON));
 sm(330,1820,1.12,Object.assign({t,eyes:r>1.8?'happy':'open',lid:.15,brow:'up',mouth:'smile',blush:r>1.8,look:[.6,-.1],armR:60,bendR:-80,holdR:(x,y)=>mug3(x+10,y+20,.55,{col:'#e2508a'}),armL:20,bendL:10},YOU));
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,3.0,1));
