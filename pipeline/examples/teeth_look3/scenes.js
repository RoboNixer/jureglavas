// 2026-11-23 18:00 COMMENTS — "'Did you brush your teeth?' 'Yep!' (The toothbrush is bone dry.)"
// craft ladder (look3.js): tumbleweed3() rolling desert gag, tapwater() running tap stream, foam3() toothpaste foam
const YOU={hair:'curl'};
const KID={hair:'spike',hairc:'#4a3426',pj:'#7cc3f0',limb:'#2b3550'};
const SIT={legL:82,kneeL:82,legR:-82,kneeR:-82};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function tabH(hx,hy){X.save();X.translate(hx+10,hy-40);X.rotate(-.25);glow(0,0,120,'120,200,255',.35);rr(-70,-50,140,100,12,'#1b1b1f',5);rr(-60,-40,120,80,6,'#5fb4ff',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
function bath(t,o={}){bathroom(t,{shower:0,dim:o.dim||0});mirror3(560,480,330,500);sink(760,1470,1);
 if(o.warm)glow(300,600,900,'255,214,150',o.warm);else{glow(760,700,600,'255,255,255',.18);X.save();X.globalAlpha=.1;X.fillStyle='#44506a';X.fillRect(-3000,-3000,8000,8000);X.restore()}}
// A: 20:30 bathroom: dry brush in the cup on the sink; your kid in pyjamas grins 'Yep!'; you in the doorway, arms crossed, one eyebrow up
function shotA(t,r,lab,cv){if(cv)cam(540,1060,1.03,t,0);else cam(540,1060,lerp(1.02,1.07,C(r/3.5)),t,.1);
 bath(t);tcup(700,1470,1,[{col:'#3fa9f5',wear:0}]);
 const yep=cv||r>2.75;
 sm(610,1840,.98,Object.assign({t,eyes:yep?'happy':'open',brow:'up',mouth:yep?'grin':'smile',talk:(r>2.8&&r<3.4)?t:null,look:[-.6,0],tilt:yep?-5:0,armL:20,bendL:10,armR:160,bendR:-10},KID));
 sm(250,1860,1.14,Object.assign({t,eyes:'open',lid:yep?.35:0,brow:yep?'smug':'up',mouth:yep?'smirk':'open',talk:r<2.6&&!cv?t:null,look:[.7,.1],armL:60,bendL:-150,armR:60,bendR:-150},YOU));
 if(lab)label3('You, every night 🙄',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: the touch test: your finger on bone-dry bristles; a tumbleweed rolls across the sink
sh(T('r1')-.36,(t,r)=>{cam(540,1000,1.0,t,.08);bathroom(t,{shower:0});X.fillStyle='rgba(120,90,40,.18)';X.fillRect(-3000,-3000,8000,8000);glow(540,900,800,'255,226,170',.5);
 rr(-200,1560,1480,80,30,'#ffffff',7);
 tcup(470,1640,3.0,[{col:'#3fa9f5',wear:0}]);
 const fq=eo(C((r-.2)/.6)),fx=lerp(980,560,fq),fy=lerp(560,900,fq);
 X.save();X.lineCap='round';X.strokeStyle='#151515';X.lineWidth=26;X.beginPath();X.moveTo(1150,380);X.quadraticCurveTo(900,560,fx,fy);X.stroke();X.restore();circ(fx,fy,30,'#151515',0);
 const tw=C((r-.9)/1.5);if(tw>0)tumbleweed3(lerp(-120,1220,tw),1560,1.0,t);
 label3('His toothbrush 🏜️',C((r-.1)/.2))});
// C: the next night: your son holds the brush head under the running tap, smirking at camera
const TAPX=812,TAPY=1414;
sh(T('r2')-.12,(t,r)=>{cam(560,1080,lerp(1.12,1.17,C(r/2.5)),t,.1);bath(t);
 const on=r>.3;
 sm(560,1840,.98,Object.assign({t,eyes:'open',lid:.35,brow:'smug',mouth:'smirk',look:[-.5,.1],armL:20,bendL:10,armR:62,bendR:-40,
  holdR:(hx,hy)=>{const tx=TAPX+6,ty=TAPY+92,dx=tx-hx,dy=ty-hy,d=Math.hypot(dx,dy),rot=Math.atan2(dx,-dy);toothbrush(hx,hy,d/292,rot,{wear:0});
   tapwater(TAPX,TAPY,on?Math.max(20,ty-TAPY-18):0,t,C((r-.3)/.2));drops(tx,ty,t,C((r-.5)/.3),40)}},KID));
 label3('Your son 😇',C((r-.1)/.2))});
// D: later on the sofa: Memopai hops onto the sofa arm, you voice-note it, the 🦷 thought flies into the phone
sh(T('s2')-.2,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.9&&r<4.6;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?(Math.sin(t*14)>0?'open':'smile'):'smirk',look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,talk),armL:110,bendL:-100},YOU));
 const mp=C((r-.05)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.4,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(240,600,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'😁',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(600,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-.05)/.2))});
// E: the chat: voice note → confirmation → invite → he accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#7fb8d0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.2&&r<.5,list:[{a:0,me:1,text:'🎤 0:05 · Remind my son every night at 20:00: brush your teeth 😁',time:'21:14'},{a:.5,me:0,text:'✅ Got it! Daily 20:00 → your son: ✨ Teeth time! Two minutes.',time:'21:14'},{a:1.2,date:'Invite sent · no new app'},{a:1.9,date:'✓ He tapped Accept'}]})});
// F: next day 20:00: he's on the sofa with the tablet, his phone buzzes, he groans and gets up
const F0=T('k2')-1.1,NT=.15;
sh(F0,(t,r)=>{cam(540,1040,lerp(1.05,1.1,C(r/2.5)),t,.12);
 proom(t,{win:780,plant:0,lamp:1,night:1,frame:[700,480],wall:'#f1dcc0',wall2:'#e2c39e'});glow(260,700,700,'255,210,140',.35);wclock(640,700,.6,8,0);
 psofa(540,1700,1.1,'#e07a5f','#c4644b');
 const ping=r>NT,up=r>1.3;
 if(!up)sm(520,1500+340*.92+40,.92,Object.assign({t,eyes:ping?'wide':'open',brow:ping?'up':'flat',mouth:ping?'o':'smile',look:[.2,.6],armR:60,bendR:-110,holdR:(hx,hy)=>phoneH(hx,hy,0,ping&&Math.sin(t*24)>0),armL:40,bendL:-90},KID,SIT));
 else{const hop=Math.sin(C((r-1.3)/.5)*Math.PI)*40;sm(560,1840-hop,.95,Object.assign({t,eyes:'closed',brow:'sad',mouth:'wavy',talk:r<2.6?t:null,tilt:-8,look:[-.5,0],armR:20,bendR:10,armL:20,bendL:10,walk:r>1.8?t:null},KID))}
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-2.0)/.25)),'Memopai','✨ Teeth time! Two minutes.')});
// G: same framing as A, warm light: he brushes for real (foam, wet brush), you lean in the doorway with tea, smiling
sh(T('p1')-.5,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/4)),t,.1);
 bath(t,{warm:.45});tcup(700,1470,1,[]);
 const sc=Math.sin(t*16)*10,ky=1840,ks=.98,mx=610-14,my=HD(ky,ks)+70;
 sm(610,ky,ks,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[-.4,0],armL:20,bendL:10,armR:150+sc*.3,bendR:-150,
  holdR:(hx,hy)=>toothbrush(hx,hy,.55,-1.6,{wear:0})},KID));
 foam3(mx,my,.8,t);
 sm(250,1860,1.14,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'up',mouth:'smile',blush:r>1.6,look:[.7,.1],armR:25,bendR:-125,holdR:(hx,hy)=>pmug(hx,hy+20,.95,'#9be0b0'),armL:20,bendL:10},YOU));
 sparkles(610,HD(ky,ks),C((r-.4)/1.2),10,220,'#fff7b0');
 label3('You, sorted 😌',C((r-.4)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,3.2,0,1));
