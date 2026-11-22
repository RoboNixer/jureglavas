// 2026-11-22 16:00 PRODUCTIVITY — "His gym bag. By the door since Tuesday."
// craft ladder: gymbag3() duffel gym bag (open / stinky / clean) + sock3() tube sock that stands on its own (look3.js)
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const HIM={hair:'spike',hairc:'#5a3a2a',pj:'#5a8fe8',limb:'#2f3a55'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function lounge(t,o={}){proom(t,{win:760,night:!o.day,lamp:o.day?0:230,curtain:'#5a8fd0',curtain2:'#3f72b4',wall:o.day?'#f6e6cf':'#d8c6b4',wall2:o.day?'#ecd2b0':'#bfa892',plant:o.day?200:0});
 if(!o.day)glow(250,700,500,'255,200,130',.3);psofa(560,1700,1.15,'#c86b5a','#a85646')}
function hall(t,o={}){hallway(t,{night:!o.day,plant:o.day?180:0});if(o.day)glow(760,620,650,'255,240,190',.45);else glow(400,600,600,'255,200,130',.28)}

// ---- A: frame 1 = you open his gym bag by the door: stink cloud
sh(0,(t,r)=>{cam(560,1260,lerp(1.02,1.08,C(r/4)),t,.12);hall(t);
 const op=C((r-.5)/.4),y=1830,s=1.12;
 gymbag3(650,1720,1.05,{open:op,t,stink:op});
 sm(380,y,s,Object.assign({t,lean:14,eyes:op>0?'wide':'open',brow:op>0?'worried':'flat',mouth:op>0?'wavy':'flat',look:[.7,.6],sweat:op>0,
  armR:op>0?70:40,bendR:op>0?40:20,armL:op>0?150:30,bendL:op>0?-140:10},YOU));
 if(op>0)stink(650,1570,t,op,1.5);
 label3('You, Sunday 18:00 🤢',C((r-.15)/.2))});

// ---- B: the sock stands up on its own; he waves it off from the sofa
const B0=T('s1')-.05;
sh(B0,(t,r)=>{cam(540,1240,lerp(1.02,1.07,C(r/3.3)),t,.1);lounge(t);
 const m=T('m1')-B0;
 sm(700,1790,1.08,Object.assign({t,flip:1,eyes:'open',lid:.5,brow:'flat',mouth:r>m&&r<m+1.3?'open':'smirk',talk:r>m&&r<m+1.3?t:null,look:[-.6,.2],
  armL:150+Math.sin(t*9)*12,bendL:-30,armR:110,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy+10,.1,1,'#4a8fe0')},HIM));
 sm(260,1830,1.02,Object.assign({t,eyes:'open',lid:.3,brow:'angry',mouth:'frown',look:[.8,.4],armR:75,bendR:5},YOU));
 sock3(470,1720,1.25,{t,stand:1});stink(470,1560,t,.6,.8);
 label3(r<m-.1?'His sock. Standing. 😵':'Your partner 😅',r<m-.1?C((r-.1)/.2):C((r-m+.1)/.2))});

// ---- C: you sigh; Memopai hops in; the 👟 thought flies from your head into your phone
const C0=T('s2')-.05,MP=.25;
sh(C0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/3)),t,.1);lounge(t);
 const y=1830,s=1.14,hy=HD(y,s),talk=r>1.0;
 sm(430,y,s,Object.assign({t,eyes:r<.9?'closed':'open',brow:r<.9?'sad':'up',mouth:talk?'smile':'wavy',look:[.5,.35],
  armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(790,1530,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(790,1230,mp,8,180)}
 const ft=1.1,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(430,540,eo(fl)),py=lerp(hy-200,hy+520,eo(fl))-Math.sin(fl*Math.PI)*140;emo(px,py,'👟',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(540,hy+520,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});

// ---- D: your chat with Memopai: the weekly reminder for HIM + 'He tapped Accept'
const D0=T('s2')+2.55;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const ac=T('s3')-D0+1.1;
 phoneUI(540,930,1.16,r,{typing:r>.2&&r<.6,list:[{a:0,me:1,text:'Every Sunday at 18:00, remind my partner: gym bag in the wash 👟',time:'18:04'},{a:.6,me:0,text:'✅ Got it! Him · every Sunday 18:00 · 👟 Gym bag in the wash',time:'18:04'},{a:1.4,date:'📩 Invite sent to him'}]});
 const k=C((r-ac)/.35);if(k>0){X.save();X.translate(540,1330);const sc=lerp(.6,1,eo(k));X.scale(sc,sc);X.globalAlpha=C(k*2);glow(0,0,380,'130,240,160',.45);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=30;rr(-290,-80,580,160,40,"#25d366",7);X.shadowColor='transparent';
  X.font="900 50px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('✓ He tapped Accept',0,4);X.restore();if(k<1)sparkles(540,1330,k,10,320,'#ffffff')}});

// ---- E: next Sunday 18:00: his phone buzzes (Memopai) -> he grabs the bag for the washer
const E0=T('s3')+2.05;
sh(E0,(t,r)=>{cam(560,1220,lerp(1.03,1.07,C(r/2.6)),t,.1);hall(t);
 const go=C((r-1.2)/.5),buzz=r<1.2;
 washer(800,1770,.78,{door:go,t});
 sm(lerp(380,520,eo(go)),1800,1.1,Object.assign({t,eyes:go>0?'happy':'wide',brow:'up',mouth:go>0?'grin':'o',talk:r>.75&&r<1.9?t:null,look:[.6,.2],walk:go>0&&go<1?t:null,
  armL:go>0?60:110,bendL:go>0?-20:-110,holdL:go>0?(hx,hy)=>gymbag3(hx+40,hy+90,.5,{t}):(hx,hy)=>phoneH(hx,hy+10,-.1,1),armR:20,bendR:10},HIM));
 if(go<=0)gymbag3(600,1730,.9,{t});
 if(r<1.3)notif(338,r<1.05?C(r/.25):C((1.3-r)/.25),'Memopai','👟 Sunday 18:00 · Gym bag → washing machine');
 else label3('Your partner, 18:00 👟',C((r-1.35)/.2))});

// ---- F: three Sundays later: sunny hallway, fresh bag, you with a coffee
const F0=T('p1')-.05;
sh(F0,(t,r)=>{cam(560,1240,lerp(1.02,1.07,C(r/4.5)),t,.1);hall(t,{day:1});
 gymbag3(640,1720,1.0,{clean:1,t});sparkles(640,1560,(r*0.5)%1,8,200,'#ffffff');
 sm(350,1830,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.6,.3],armR:110,bendR:-120,holdR:(hx,hy)=>pmug(hx+10,hy+30,1.1,'#ffd23f'),armL:20,bendL:10},YOU));
 label3('You, sorted 😌',C((r-.2)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));

// cover-only shot: the stink cloud from frame 1
sh(1000,(t,r)=>{cam(560,1260,1.0,t,.05);hall(2.2);
 gymbag3(650,1720,1.05,{open:1,t:2.2,stink:1});
 sm(380,1830,1.12,Object.assign({t:2.2,lean:14,eyes:'wide',brow:'worried',mouth:'wavy',look:[.7,.6],sweat:1,armR:70,bendR:40,armL:150,bendL:-140},YOU));
 stink(650,1570,2.2,1,1.5)});
