// 2026-11-21 18:00 PRODUCTIVITY — "'Retainer?' 'Yeah, yeah.'"
// craft ladder: teenDoor(), retainer3(), retCase(), junkDrawer() (look3.js)
const YOU={hair:'curl'};
const SON={hair:'spike',hairc:'#4a3426',pj:'#4caf7a',limb:'#2b3550'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
const DX=660;
function hall(t,o){teenDoor(t,Object.assign({dx:DX,night:1,lamp:0},o));wclock(260,560,.85,9,30);
 if(o.warm)glow(260,700,520,'255,210,140',.45);else{X.save();X.fillStyle='rgba(20,30,110,.42)';X.fillRect(-2000,-2000,5000,5000);X.restore();glow(260,600,380,'255,214,150',.25)}}
// A: frame 1 = 21:30 hallway, you knock on his door; it cracks open, purple light: 'Yeah, yeah.'
function shotA(t,r,lab,cv){if(cv)cam(540,1050,1.03,t,0);else cam(540,1060,lerp(1.03,1.09,C(r/3.6)),t,.12);
 const k1=T('k1')-T('h1'),op=C((r-k1+.1)/.3)*.12;
 hall(t,{open:op});
 const knock=r>.15&&r<1.4,kp=knock?Math.abs(Math.sin((r-.15)*Math.PI*2.4)):0;
 sm(360,1900,1.2,Object.assign({t,eyes:'open',lid:.45,brow:r>k1?'flat':'up',mouth:r<1.9&&r>.05?'open':(r>k1+.3?'flat':'smirk'),talk:r>.05&&r<2.3?t:null,look:[.8,-.05],armR:knock?95+kp*20:25,bendR:knock?-60-kp*30:15,armL:25,bendL:20,tilt:r>k1+.3?-5:0},YOU));
 if(knock){X.save();X.globalAlpha=.6*(1-kp);for(let k=1;k<3;k++)circ(DX-170,820,20+k*22+kp*20,null,5);X.restore()}
 if(op>0)emo(DX+110,760,'🎧',sp(C((r-k1)/.25),12,.5),1);
 if(lab)label3('You at 21:30 🙄',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: the drawer: retainer in its case under cables, a sock and dust
sh(T('r1')-.1,(t,r)=>{cam(540,1000,lerp(1.02,1.12,eo(C(r/3.2))),t,.08);
 X.fillStyle='#3b2a20';X.fillRect(-2000,-2000,5000,5000);glow(540,500,800,'190,120,255',.25);glow(800,300,600,'255,220,170',.25);
 junkDrawer(540,980,1.0,t,{dust:1,inner:()=>{retCase(-30,60,1.25,{open:1});retainer3(-30,35,.82,{rot:.08})}});
 label3('His retainer 😬',C((r-.15)/.2))});
// C: you on the sofa; Memopai hops onto the arm; voice note; 🦷 flies into the phone
const MP=.12;
sh(T('s2')-.05,(t,r)=>{cam(540,1010,lerp(1.03,1.08,C(r/4.5)),t,.1);
 proom(t,{win:780,plant:200,lamp:1,night:1,frame:[250,520],wall:'#e9d6bd',wall2:'#d6bd9c'});glow(220,800,600,'255,210,140',.4);
 psofa(560,1700,1.15,'#5a7fb5','#4a6a9a');
 const y=1830,s=1.14,hy=HD(y,s),talk=r>.5&&r<4.2;
 sm(430,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smirk',talk:talk?t:null,look:[.5,.35],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(800,1520,.8,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1220,mp,8,180)}
 const ft=2.4,fl=C((r-ft)/.9);if(r>ft-.35){if(fl<1){const px=lerp(250,610,eo(fl)),py=lerp(hy-430,hy+200,eo(fl))-Math.sin(fl*Math.PI)*60;emo(px,py,'😬',C((r-ft+.35)/.3)*(1-fl*.4))}else sparkles(610,hy+200,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 label3('Memopai 😎',C((r-MP)/.2))});
// D: the chat: voice note → confirmation → invite → he accepts
sh(T('s3')-.05,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2f62');g.addColorStop(1,'#b98fd0');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,930,1.16,r,{typing:r>.35&&r<.65,list:[{a:0,me:1,voice:1,pl:C(r/.4),dur:'0:05',time:'20:41'},{a:.65,me:0,text:'✅ Got it! Every day 21:30 → your son: 😁 Retainer time!',time:'20:41'},{a:1.3,date:'Invite sent · no app needed'},{a:1.95,date:'✓ He tapped Accept'}]})});
// E: his room, 21:30: phone buzzes on the desk, he rolls his eyes, grins, retainer in
const E0=T('s4')-.05,NT=.25;
sh(E0,(t,r)=>{cam(540,1020,lerp(1.03,1.08,C(r/3)),t,.12);
 proom(t,{win:800,night:1,lamp:0,plant:0,frame:null,wall:'#3a3570',wall2:'#2a2858',floor:'#4a3a5a',floor2:'#33284a',curtain:'#5a4a9a',curtain2:'#45387e'});
 glow(540,700,800,'170,90,255',.4);
 const ping=r>NT,up=C((r-1.2)/.4);
 sm(520,1900,1.2,Object.assign({t,eyes:up>0?'happy':(ping?'open':'open'),lid:ping&&up==0?.5:0,brow:up>0?'up':'smug',mouth:up>0?'grin':'flat',look:ping?[.2,.5]:[0,0],
  armR:up>0?125:100,bendR:up>0?-125:-100,holdR:up>0?(hx,hy)=>retainer3(hx+10,hy-40,.5,{rot:.25}):(hx,hy)=>phoneH(hx,hy+10,-.1,ping&&Math.sin(t*24)>0),armL:20,bendL:15},SON));
 if(ping)notif(338,C((r-NT)/.3)*(1-C((r-NT-2.0)/.3)),'Memopai','😁 Retainer time!')});
// F: same hallway, 21:30, warm: you walk past with tea; a thumbs-up pokes out of his door
sh(T('p1')-.08,(t,r)=>{cam(540,1060,lerp(1.03,1.07,C(r/3.2)),t,.12);
 hall(t,{open:.08,warm:1});
 const wk=C(r/1.8),x=lerp(60,340,eo(wk));
 const ta=C((r-1.0)/.3);if(ta>0)reachArm(DX+150,820,DX+150-lerp(0,150,eo(ta)),800,1.2);
 sm(x,1900,1.18,Object.assign({t,flip:0,walk:wk<1?t*1.3:null,eyes:'happy',brow:'up',mouth:'smile',blush:r>1.6,look:[.6,-.1],armR:90,bendR:-90,holdR:(hx,hy)=>pmug(hx,hy+20,1.1,'#ffd23f'),armL:20,bendL:15},YOU));
 if(r>1.3)sparkles(DX,790,C((r-1.3)/1.2),10,160);
 label3('You, off duty 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: frame 1 without overlays
sh(1000,(t,r)=>shotA(t,2.9,0,1));
