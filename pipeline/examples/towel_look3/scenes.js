// 2026-11-25 22:00 FOLLOWERS — "'I'll hang it up in a sec!' (22:00: the wet towel's still on his bed.)"
// craft ladder: teenBed3(), wetTowel3(), dripTowel3(), towelHook3() (look3.js)
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#e05a4a',limb:'#2b3550'};
const TC='#e8a33d';
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function teenRoom(t,o={}){proom(t,{win:o.night?null:860,plant:0,lamp:o.night?1:0,night:o.night?1:0,frame:null,wall:o.night?'#b9c3e6':'#dfe9f2',wall2:o.night?'#98a3cf':'#c6d4e2',floor:'#a77b55',floor2:'#86603f'});
 if(o.night)glow(260,640,560,'255,200,130',.38);else glow(860,640,560,'255,240,200',.42);
 X.save();X.translate(720,470);X.rotate(.04);rr(-95,-120,190,240,8,'#3fb58c',6);circ(0,-20,50,'#ffffff',5);line([[-60,80],[60,80]],12,'#151515');X.restore()}
const TBX=640,TBY=1560,TBS=.95;
const bedTop=(x)=>TBY-415*TBS;
// A: morning, your teen tosses the wet towel on his bed
function shotA(t,r,lab){cam(540,1060,lerp(1.03,1.08,C(r/1.6)),t,.1);
 teenRoom(t);teenBed3(TBX,TBY,TBS,{});towelHook3(250,820,1,{});
 const fl=C((r-.55)/.55);
 if(fl>=1)wetTowel3(TBX+40,bedTop()+30,.8,{t,wet:1,col:TC,drip:0});
 const talk=r<1.35;
 sm(330,1880,1.08,Object.assign({t,eyes:'happy',brow:'up',mouth:talk?'open':'grin',talk:talk?t:null,look:[.6,0],armR:fl>0?70:150,bendR:fl>0?-10:-40,armL:20,bendL:10,
  holdR:fl<=0?(hx,hy)=>dripTowel3(hx,hy-10,.6,t,TC):null},SON));
 if(fl>0&&fl<1){const px=lerp(470,TBX+40,eo(fl)),py=lerp(980,bedTop()+10,eo(fl))-Math.sin(fl*Math.PI)*220;X.save();X.translate(px,py);X.rotate(fl*4);wetTowel3(0,0,.55,{t,wet:0,col:TC,drip:0});X.restore()}
 if(lab)label3('Your teen, 07:40 😁',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: 22:00, you hold the soggy towel up by one corner, dripping
function shotB(t,r,lab,cv){if(cv)cam(540,1060,1.05,t,0);else cam(540,1060,lerp(1.04,1.09,C(r/3.8)),t,.1);
 teenRoom(t,{night:1});teenBed3(TBX,TBY,TBS,{});towelHook3(250,820,1,{});
 wetTowel3(TBX+150,bedTop()+30,.45,{t,wet:1,col:'#c9cfd8',drip:0});
 sm(470,1880,1.15,Object.assign({t,eyes:'open',brow:'worried',mouth:'wavy',look:[.7,-.2],sweat:1,armR:150,bendR:-35,armL:25,bendL:15,lean:-4,
  holdR:(hx,hy)=>dripTowel3(hx,hy-10,.75,t,TC)},YOU));
 stink(660,900,t,cv?1:C((r-.2)/.5),.8);
 if(lab)label3('You, 22:00 🤢',C(r/.2))}
sh(T('h1')-.06,(t,r)=>shotB(t,r,1));
// C: close-up: the towel heap on the duvet, wet patch, stink
sh(T('r1')-.06,(t,r)=>{cam(540,1020,lerp(1.05,1.12,eo(C(r/2))),t,.08);
 teenRoom(t,{night:1});X.fillStyle='rgba(30,20,60,.22)';X.fillRect(-2000,-2000,5000,5000);
 teenBed3(560,1900,1.9,{});
 wetTowel3(600,1900-415*1.9+40,1.35,{t,wet:1,col:TC});
 stink(600,980,t,C((r-.1)/.4),1.1);
 label3('The towel, 14 h later 🤢',C(r/.2))});
// D: evening sofa; Memopai hops onto the arm; voice note; 🚿 flies into the phone
const MP=.02;
sh(T('s2')-.05,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/6)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>1.4&&r<6.2;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=4.4,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'🚿',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// E: the chat: voice note → confirmation → invite → he accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:05',time:'21:58'},{a:.55,me:0,text:'✅ Got it! Every day 07:45 → your son: 🚿 Towel on the hook!',time:'21:58'},{a:1.1,date:'Invite sent to his WhatsApp'},{a:1.6,date:'✓ He tapped Accept'}]})});
// F: 07:45, towel in his hand, phone buzzes on the bed, he hangs it on the hook
const F0=T('s4')-.05,NT=1.55;
sh(F0,(t,r)=>{cam(540,1060,lerp(1.03,1.08,C(r/3.8)),t,.12);
 teenRoom(t);teenBed3(TBX,TBY,TBS,{});
 const ping=r>NT,hang=C((r-2.5)/.6);
 towelHook3(250,820,1,{towel:hang>=1,col:TC});
 phoneH(TBX+160,bedTop()+20,0,ping&&Math.sin(t*24)>0);
 const x=lerp(470,330,eo(C((r-2.2)/.5)));
 sm(x,1880,1.08,Object.assign({t,eyes:ping?'happy':'open',brow:'up',mouth:ping?'grin':'smirk',look:[ping&&r<2.2?.7:-.7,.1],armR:30,bendR:10,armL:hang>0&&hang<1?160:(ping?120:40),bendL:hang>0?-20:-60,
  holdL:hang<1?(hx,hy)=>dripTowel3(hx,hy-10,.6,t,TC):null},SON));
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.6)/.25)),'Memopai','🚿 Towel on the hook!')});
// G: same framing as B, warm: bed dry and neat, towel on the hook; you with tea
sh(T('p1')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/3.6)),t,.12);
 teenRoom(t,{night:1});glow(500,800,700,'255,215,150',.3);
 teenBed3(TBX,TBY,TBS,{neat:1});towelHook3(250,820,1,{towel:1,col:TC});if(r>.2)sparkles(250,980,C((r-.2)/1.5),10,180);
 sm(580,1880,1.15,Object.assign({t,eyes:'happy',brow:'up',mouth:'smile',blush:r>1,look:[.6,.1],armR:95,bendR:-95,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:20,bendL:15},YOU));
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: shot B without the label
sh(1000,(t,r)=>shotB(t,2.0,0,1));
