// 2026-11-23 TREND FORMAT #1: "It's NO-vember" + "No, No, No... Yes!" (labelled 'no' clips ~1.5 s each, the 'yes' clip held longer), Memopai version
const YOU={hair:'curl'};
const KID={hair:'spike',hairc:'#4a3426',pj:'#7cc3f0',limb:'#2b3550'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#4caf7a',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function crisps(hx,hy){X.save();X.translate(hx,hy-40);X.rotate(.2);rr(-40,-60,80,110,14,'#ff5a3c',5);circ(0,-5,22,'#ffd23f',0);X.restore()}
function bath(t){bathroom(t,{shower:0});mirror3(560,480,330,500);sink(760,1470,1);glow(760,700,600,'255,255,255',.18);X.save();X.globalAlpha=.1;X.fillStyle='#44506a';X.fillRect(-3000,-3000,8000,8000);X.restore()}
function kitchen(t){proom(t,{win:200,plant:0,lamp:0,night:0,frame:null,wall:'#f4e6cc',wall2:'#e7d0ab'});glow(260,700,620,'255,236,190',.45)}
// big red NO stamp that slams in (the trend's on-screen label)
function stampNo(p,txtS='NO',col='#ff3b3b'){if(p<=0)return;X.save();X.setTransform(1,0,0,1,0,0);X.translate(540,470);const s=lerp(2.2,1,eo(C(p)));X.scale(s,s);X.rotate(-.07);X.globalAlpha=C(p*1.5);rr(-190,-95,380,190,34,col,10);txt(txtS,0,8,150,'#ffffff',0);X.restore()}
const CT=1250;
// 0: hook: you, big, arms crossed, shaking your head
function shot0(t,r,cv){cam(540,1010,cv?1.04:lerp(1.02,1.1,C(r/1.8)),t,cv?0:.1);
 proom(t,{win:780,plant:200,lamp:1,night:0,frame:[250,520],wall:'#f1dcc0',wall2:'#e2c39e'});glow(780,640,700,'255,220,160',.4);
 sm(540,1860,1.3,Object.assign({t,eyes:'closed',brow:'angry',mouth:'frown',tilt:cv?-5:Math.sin(r*9)*7,armL:60,bendL:-150,armR:60,bendR:-150},YOU));
 if(!cv)label3("It's NO-vember 🙅",C(r/.15))}
sh(0,(t,r)=>shot0(t,r,0));
// 1: 'Did you brush your teeth?' : bathroom, kid grins, you in the doorway
sh(T('n1')-.1,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/1.4)),t,.1);bath(t);tcup(700,1470,1,[{col:'#3fa9f5',wear:0}]);
 sm(610,1840,.98,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.6,0],tilt:-5,armL:20,bendL:10,armR:160,bendR:-10},KID));
 sm(250,1860,1.14,Object.assign({t,eyes:'open',lid:.35,brow:'smug',mouth:'open',talk:t,look:[.7,.1],armL:60,bendL:-150,armR:60,bendR:-150},YOU));
 stampNo((r-.25)/.2)});
// 2: 'Who's emptying the dishwasher?' : dirty tower, CLEAN light, teen with crisps
sh(T('n2')-.1,(t,r)=>{cam(540,1040,lerp(1.03,1.08,C(r/2)),t,.1);kitchen(t);cupboard3(680,330,.75,{open:0});
 counter(540,CT+360,1);dishtower3(600,CT+6,1.0,{t,n:13,stink:1});dishwasher3(600,CT+40,.92,{clean:1,t});
 sm(815,1880,.95,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.6,0],tilt:-6,armR:20,bendR:10,armL:120,bendL:-110,holdL:(hx,hy)=>crisps(hx,hy)},SON));
 sm(270,1910,1.16,Object.assign({t,eyes:'open',brow:'worried',mouth:'open',talk:t,look:[.9,-.4],sweat:1,armL:150,bendL:-150,armR:-150,bendR:150},YOU));
 stampNo((r-.75)/.2)});
// 3: 'I'll remember.' : you at night, the things you'll 'remember' circling your head
sh(T('n3')-.1,(t,r)=>{cam(540,980,lerp(1.03,1.09,C(r/1.5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#cfc4e0',wall2:'#b0a3cc'});glow(220,800,600,'255,210,140',.35);
 const y=1860,s=1.25;headLoop(540,HD(y,s)+10,t*1.6,['💸','🎂','🗑️','📦'],1,290);
 sm(540,y,s,Object.assign({t,eyes:'open',brow:'worried',mouth:'wavy',look:[Math.sin(t*5)*.7,-.5],sweat:1,armL:20,bendL:10,armR:20,bendR:10},YOU));
 stampNo((r-.55)/.2)});
// 4: YES: sofa, Memopai hops on, you voice-note it, the thoughts fly into the phone
const Y0=T('y1')-.15;
sh(Y0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/2.6)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s);
 sm(430,y,s,Object.assign({t,eyes:'happy',brow:'up',mouth:'open',talk:t,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C(r/.45);memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180);
 ['😁','🍴','💸'].forEach((e,k)=>{const ft=.7+k*.35,fl=C((r-ft)/.7);if(r>ft-.2&&fl<1){emo(lerp(250+k*60,610,eo(fl)),lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60,e,C((r-ft+.2)/.2)*(1-fl*.4))}});
 stampNo((r-.1)/.2*(r<1.5?1:0),'YES','#25d366')});
// 5: the chat: three reminders, three confirmations
const Y1=T('y1')+2.25;
sh(Y1,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fc8b0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:09',time:'21:12'},{a:.4,me:0,text:'✅ Daily 20:00 → your son: 😁 Teeth time!',time:'21:12'},{a:.9,me:0,text:'✅ Daily 17:00 → your son: 🍴 Dishwasher!',time:'21:12'},{a:1.4,me:0,text:'✅ Fri 09:00 → you: 💸 Pay the bill',time:'21:12'}]})});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shot0(t,1,1));
