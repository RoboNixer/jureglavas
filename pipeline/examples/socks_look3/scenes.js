// 2026-11-24 09:00 FOLLOWERS — "'Mum! I've got NO clean socks!' (Monday, 07:40)"
// craft ladder (look3.js): stairs3() staircase with banister, clothespile3() floordrobe mountain, lbasket3() wicker laundry basket (empty+cobweb / full)
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#5f7fd6',limb:'#2b3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function hall(t,o={}){proom(t,{win:null,frame:[250,560],plant:0,lamp:0,wall:o.wall||'#f1e0c6',wall2:o.wall2||'#e3c7a2',floor:'#b98a5e',floor2:'#94673f'});
 if(o.warm)glow(420,700,800,'255,214,150',o.warm);else{glow(700,500,600,'255,255,255',.18);X.save();X.globalAlpha=.08;X.fillStyle='#44506a';X.fillRect(-3000,-3000,8000,8000);X.restore()}}
const SX=440,SY=1720,SW=56,SH=72,SN=7;
const KX=SX+5.5*SW,KY=SY-6*SH;
// A: Monday 07:40 hallway: you at the foot of the stairs with coffee; your son at the top in pyjamas holding up one crusty sock: 'Mum! I've got NO clean socks!'
function shotA(t,r,lab,cv){if(cv)cam(560,1040,1.03,t,0);else cam(560,1040,lerp(1.02,1.07,C(r/4)),t,.1);
 hall(t);stairs3(SX,SY,{n:SN,w:SW,h:SH});
 const kt=T('k1'),yell=!cv&&r>kt&&r<kt+1.7,up=cv||r>kt-.2;
 sm(KX,KY,.82,Object.assign({t,eyes:up?'wide':'open',brow:'worried',mouth:yell?'open':(up?'o':'smile'),talk:yell?t:null,look:[-.7,.3],tilt:up?-6:0,armL:20,bendL:10,armR:up?165:30,bendR:up?-10:10,
  holdR:(hx,hy)=>{if(up){X.save();X.translate(hx+55,hy-20);X.rotate(Math.sin(t*9)*.08);sock3(0,260*.42,.42,{t,stand:1});X.restore()}}},SON));
 const shock=cv||r>kt+.3;
 sm(250,1880,1.14,Object.assign({t,eyes:'open',lid:shock?.3:0,brow:shock?'worried':'flat',mouth:shock?'wavy':'smile',look:[.8,-.6],sweat:shock,armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#ffd23f'),armL:20,bendL:10},YOU));
 if(lab)label3('You, Monday 07:40 😩',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: his bedroom: a mountain of clothes; the laundry basket beside it is EMPTY (cobweb); you, sniff-testing a sock at 07:41
sh(T('r1')-.3,(t,r)=>{cam(540,1040,lerp(1.03,1.09,C(r/4)),t,.1);
 proom(t,{win:760,plant:0,lamp:0,frame:null,wall:'#cfe0ee',wall2:'#b4c9dc',curtain:'#5f7fd6',curtain2:'#4a66b8'});glow(760,560,600,'255,250,220',.3);
 clothespile3(620,1560,1.3,{t,stink:C((r-.4)/.6)*.5});
 lbasket3(805,1660,.7,{web:C((r-.8)/.5)});
 const sn=r>1.9,sq=sn?eo(C((r-1.9)/.35)):0,ux=300,uy=1890,us=1.12,hy=HD(uy,us);
 sm(ux,uy,us,Object.assign({t,eyes:sn?'closed':'open',brow:sn?'worried':'up',mouth:sn?'wavy':'o',look:[.7,.2],tilt:sn?6:0,armL:20,bendL:10,armR:lerp(40,140,sq),bendR:lerp(-30,-165,sq),
  holdR:(hx,hy2)=>{}},YOU));
 const sx=lerp(ux+170,ux+120,sq),sy=lerp(hy+520,hy+20,sq);
 X.save();X.translate(sx,sy);X.rotate(lerp(-.2,-1.9,sq));sock3(0,0,.42,{t});X.restore();circ(lerp(ux+170,ux+150,sq),lerp(hy+520,hy+60,sq),26,'#151515',0);
 if(sn)stink(ux+140,hy+40,t,C((r-2)/.4)*.7,.55);
 label3(r<1.9?'His floor 🏔️':'You, 07:41 🤢',1)});
// D: evening sofa; Memopai hops onto the sofa arm; you voice-note it; 🧦 flies into the phone
const D0=T('s2')-.4;
sh(D0,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.6&&r<4.9;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C(r/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.9,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'🧦',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C(r/.2))});
// E: the chat: voice note → weekly confirmation → invite → he accepts
const E0=T('s3')-.15;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fa8e0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:04',time:'20:41'},{a:.55,me:0,text:'✅ Got it! Every Sunday 18:00 → your son: 🧺 Clothes in the basket!',time:'20:41'},{a:1.2,date:'Invite sent to his WhatsApp'},{a:1.8,date:'✓ He tapped Accept'}]})});
// F: Sunday 18:00: he's on the sofa with his phone, it buzzes, he groans and gets up
const F0=E0+2.5,NT=.2;
sh(F0,(t,r)=>{cam(540,1040,lerp(1.05,1.1,C(r/2.5)),t,.12);
 proom(t,{win:780,plant:0,lamp:1,night:1,frame:[700,480],wall:'#f1dcc0',wall2:'#e2c39e'});glow(260,700,700,'255,210,140',.35);wclock(640,700,.6,6,0);
 psofa(540,1700,1.1,'#e07a5f','#c4644b');
 const ping=r>NT,up=r>T('k2')-F0+.2;
 if(!up)sm(520,1500+340*.92+40,.92,Object.assign({t,eyes:ping?'wide':'open',brow:ping?'up':'flat',mouth:ping?'o':'smile',look:[.2,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:40,bendL:-90},SON,SIT));
 else{const u=r-(T('k2')-F0+.2),hop=Math.sin(C(u/.5)*Math.PI)*40;sm(560,1840-hop,.95,Object.assign({t,eyes:'closed',brow:'sad',mouth:'wavy',talk:u<1.1?t:null,tilt:-8,look:[-.5,0],armR:20,bendR:10,armL:20,bendL:10,walk:u>.5?t:null},SON))}
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-1.7)/.25)),'Memopai','🧺 Clothes in the basket!')});
// G: same framing as A, warm light: three Mondays later he holds up a pair of clean socks, the basket at the foot of the stairs is full; you sip coffee, smiling
sh(T('p1')-.35,(t,r)=>{cam(560,1040,lerp(1.03,1.07,C(r/4)),t,.1);
 hall(t,{warm:.5});stairs3(SX,SY,{n:SN,w:SW,h:SH});
 sm(KX,KY,.82,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.7,.3],armL:20,bendL:10,armR:165,bendR:-10,
  holdR:(hx,hy)=>{X.save();X.translate(hx+55,hy-20);X.rotate(Math.sin(t*4)*.06);sock3(-14,250*.34,.34,{clean:1});sock3(18,250*.34+10,.34,{clean:1,rot:.15});X.restore()}},SON));
 sparkles(KX,HD(KY,.82)-40,C((r-.3)/1.2),10,200,'#fff7b0');
 sm(250,1880,1.14,Object.assign({t,eyes:r>1.4?'happy':'open',brow:'up',mouth:'smile',blush:r>1.4,look:[.8,-.6],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU));
 label3('You, sorted 😌',C((r-.3)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.2,0,1));
