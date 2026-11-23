// 2026-11-23 16:00 STORY — "Piano lesson in 10 minutes. He hasn't practised once."
// craft ladder: piano3() upright piano with cobweb + spider, note3() flying music note (bad red / golden) (look3.js)
const YOU={hair:'curl'};
const KID={hair:'spike',hairc:'#5a3a22'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function tabH(hx,hy){X.save();X.translate(hx+10,hy-40);X.rotate(-.25);glow(0,0,120,'120,200,255',.35);rr(-70,-50,140,100,12,'#1b1b1f',5);rr(-60,-40,120,80,6,'#5fb4ff',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function bench(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-110,-14,220,34,8,'#4a2a1c',6);line([[-90,20],[-90,220]],12,'#3a2014');line([[90,20],[90,220]],12,'#3a2014');X.restore()}
function room(t,o={}){proom(t,{win:o.night?780:800,night:o.night,lamp:o.lamp,plant:0,frame:[700,480],wall:o.warm?'#f1dcc0':'#d9dde6',wall2:o.warm?'#e2c39e':'#c3c8d4'});
 if(o.warm)glow(260,700,700,'255,210,140',.35);else{X.save();X.globalAlpha=.12;X.fillStyle='#55607a';X.fillRect(-300,-300,1700,2400);X.restore()}
 wclock(640,700,.6,o.h==null?4:o.h,o.m==null?50:o.m)}
// A: frame 1 = 16:50: cobweb on the piano, your kid on the bench with his back to it, on the tablet; you, mug in hand, stare
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.04,t,0);else cam(540,1060,lerp(1.03,1.09,C(r/4)),t,.1);
 room(t,{});
 piano3(360,1600,1.0,{t,web:1});
 bench(520,1500,.9);
 sm(520,1500+340*.92,.92,Object.assign({t,eyes:'open',lid:.3,brow:'flat',mouth:'smile',look:[.2,.6],armR:60,bendR:-110,holdR:(hx,hy)=>tabH(hx,hy),armL:40,bendL:-90},KID,SIT));
 const noticed=cv||r>1.4;
 sm(825,1830,.98,Object.assign({t,flip:1,eyes:'open',brow:noticed?'worried':'flat',mouth:noticed?'wavy':'flat',sweat:noticed,look:[-.7,.25],armR:100,bendR:-100,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#ffd23f'),armL:20,bendL:10},YOU));
 if(lab)label3('You, 16:50 😬',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: close on the kid: taps his head, proud: 'I did! In my head.'
sh(T('k1')-.08,(t,r)=>{cam(500,1080,lerp(1.34,1.4,C(r/1.2)),t,.1);
 room(t,{});piano3(360,1600,1.0,{t,web:1});bench(520,1500,.9);
 const tap=Math.sin(r*14)>0&&r<1.1;
 sm(520,1500+340*.92,.92,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',talk:r<1.0?t:null,tilt:-6,look:[.4,0],armL:155,bendL:tap?-125:-115,armR:60,bendR:-110,holdR:(hx,hy)=>tabH(hx,hy)},KID,SIT));
 label3('Your kid 😇',C(r/.2))});
// C: he finally bangs the keys: four wobbly red notes fly out, one per beat; the cobweb snaps
const C0=T('r1')-.66;
sh(C0,(t,r)=>{cam(520,1080,lerp(1.06,1.12,C(r/3.4)),t,.12);
 room(t,{h:4,m:58});
 const hit=Math.floor(r/.12)%2;
 piano3(360,1600,1.0,{t,web:C(1-r/.5)*.6,press:r<.6?[4,5,3,6][Math.min(3,Math.floor(r/.12))]:(r>1.2?(hit?4:6):-1)});
 bench(660,1500,.9);
 sm(660,1500+340*.92,.92,Object.assign({t,flip:1,eyes:r<.7?'closed':'open',brow:'up',mouth:'grin',look:[-.6,.3],armL:82+(hit?6:-6),bendL:-30,armR:72+(hit?-6:6),bendR:-30},KID,SIT));
 for(let i=0;i<4;i++){const q=C((r-i*.12)/1.6);if(q>0)note3(lerp(330+i*60,250+i*150,eo(q))+Math.sin(t*9+i)*18,lerp(1400,660+(i%2)*120,eo(q)),.95,{bad:1,rot:Math.sin(t*7+i)*.4,a:C((r-i*.12)/.15)})}
 label3('€30 a lesson 💸',C((r-.5)/.2))});
// D: that evening on the sofa: Memopai hops onto the sofa arm, you type, 🎹 flies into the phone
const D0=T('s2')-.45;
sh(D0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s);
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'smirk',look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:110,bendL:-100},YOU));
 const mp=C((r-.05)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.6,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(240,600,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'🎹',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(600,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-.05)/.2))});
// E: the chat: your message → confirmation → invite → he accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,text:'Every day at 17:00, remind my son: practise piano 15 min 🎹',time:'20:41'},{a:.6,me:0,text:'✅ Got it! Daily 17:00 → your son: 🎹 Piano time, 15 minutes.',time:'20:41'},{a:1.3,date:'Invite sent · no app needed'},{a:2.0,date:'✓ He tapped Accept'}]})});
// F: next day 17:00: his tablet goes down, phone buzzes, he jumps up
const F0=T('k2')-1.0,NT=.15;
sh(F0,(t,r)=>{cam(540,1060,lerp(1.05,1.1,C(r/2.4)),t,.12);
 room(t,{h:5,m:0,warm:1});
 piano3(360,1600,1.0,{t,web:0});
 const ping=r>NT,up=r>1.1;
 if(!up){bench(520,1500,.9);sm(520,1500+340*.92,.92,Object.assign({t,eyes:ping?'wide':'open',brow:ping?'up':'flat',mouth:ping?'o':'smile',look:[.2,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:40,bendL:-90},KID,SIT))}
 else{bench(520,1500,.9);const hop=Math.sin(C((r-1.1)/.5)*Math.PI)*60;sm(560,1830-hop,.92,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',talk:r<1.9?t:null,look:[-.5,0],armR:160,bendR:-20,armL:150,bendL:-20},KID))}
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.7)/.25)),'Memopai','🎹 Piano time! 15 minutes.')});
// G: same framing as A, warm lamp: no cobweb, he plays, golden notes float up; you smile with your tea
sh(T('p1')-.62,(t,r)=>{cam(540,1060,lerp(1.04,1.08,C(r/4)),t,.12);
 room(t,{h:5,m:10,warm:1,lamp:1});
 const hit=Math.floor(t*4)%2;
 piano3(360,1600,1.0,{t,web:0,music:1,press:hit?9:12});
 bench(510,1500,.9);
 sm(510,1500+340*.92,.92,Object.assign({t,flip:1,eyes:'closed',brow:'up',mouth:'smile',look:[-.6,.2],armL:78+(hit?3:-3),bendL:-30,armR:72+(hit?-3:3),bendR:-30},KID,SIT));
 for(let i=0;i<5;i++){const q=((r*.35+i/5)%1);note3(240+i*60+Math.sin(t*2+i)*30,lerp(1380,560,q),.8,{rot:Math.sin(t*2+i)*.25,a:Math.sin(q*Math.PI)})}
 sm(830,1830,.96,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'smile',blush:r>1.2,look:[-.6,.3],armR:100,bendR:-100,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU));
 label3('You, sorted 😌',C((r-.5)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.0,0,1));
