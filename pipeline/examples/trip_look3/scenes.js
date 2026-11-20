// 2026-11-20 14:00 PRODUCTIVITY — "Day one of your trip. Nine missed calls from home."
// craft ladder: hotelbed() (padded headboard, two pillows, white duvet with a runner, front panel to draw OVER legs),
// suitcase3() (hard-shell, open or closed, with a handle), nightstand3() + headLoop() orbiting worry icons.
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const PART={hair:'spike',hairc:'#3a2a20',pj:'#9fc7a8',limb:'#3b4152'};
const KID={hair:'curl',hairc:'#c46a2a',pj:'#ffd23f',limb:'#3b4f7a'};
const HD=(y,s)=>y-767*s;
const SITF={legL:-28,kneeL:-40,legR:28,kneeR:40};
function phoneH(hx,hy,rot=-.15,on=0,badge=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,140,'130,240,160',.45);rr(-38,-66,76,132,12,'#1b1b1f',5);rr(-30,-56,60,112,7,on?col:'#3a4a66',0);
 if(badge){circ(26,-58,26,'#e53935',4);X.font="900 30px Inter";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText(String(badge),26,-56)}X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);circ(0,0,62,'#fff',6);X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
// ---- craft ladder: hotel kit ----
function hotelbed(x,y,s=1,o={}){// y = floor line under the bed front
 X.save();X.translate(x,y);X.scale(s,s);
 if(!o.front){gshadow(0,6,560,.3);
  // headboard
  const hg=X.createLinearGradient(0,-900,0,-420);hg.addColorStop(0,o.hb||'#7d8fb0');hg.addColorStop(1,o.hb2||'#62739a');X.fillStyle=hg;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.roundRect(-560,-900,1120,520,40);X.fill();X.stroke();
  X.strokeStyle='rgba(0,0,0,.18)';X.lineWidth=4;for(let k=-3;k<=3;k++){X.beginPath();X.moveTo(k*150,-880);X.lineTo(k*150,-400);X.stroke()}
  for(let k=-3;k<=3;k++)circ(k*150-75,-650,6,'rgba(0,0,0,.25)',0);
  // pillows
  for(const px of[-260,260]){X.save();X.translate(px,-470);X.rotate(px<0?-.04:.04);rr(-200,-90,400,170,70,'#fbfbff',7);X.strokeStyle='rgba(120,130,170,.25)';X.lineWidth=4;X.beginPath();X.moveTo(-150,0);X.quadraticCurveTo(0,30,150,0);X.stroke();X.restore()}
  // mattress top / duvet back part
  const dg=X.createLinearGradient(0,-430,0,-250);dg.addColorStop(0,'#ffffff');dg.addColorStop(1,'#e3e8f3');X.fillStyle=dg;X.lineWidth=7;X.strokeStyle='#151515';X.beginPath();X.roundRect(-600,-420,1200,200,40);X.fill();X.stroke();
 }else{
  // front of the bed: duvet front panel + runner, drawn OVER the sitter's legs
  const fg=X.createLinearGradient(0,-260,0,0);fg.addColorStop(0,'#f4f6fb');fg.addColorStop(1,'#d8deeb');X.fillStyle=fg;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.roundRect(-620,-260,1240,210,36);X.fill();X.stroke();
  X.fillStyle=o.run||'#c0504d';X.fillRect(-620,-205,1240,58);X.strokeStyle='rgba(0,0,0,.25)';X.lineWidth=4;X.strokeRect(-620,-205,1240,58);
  rr(-600,-55,1200,55,10,'#5b4636',6);
 }
 X.restore()}
function nightstand3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,150,.3);rr(-120,-260,240,260,14,'#a7724a',6);rr(-100,-200,200,70,10,'#946240',4);circ(0,-165,9,'#e8c15a',3);
 if(o.lamp!==0){glow(0,-470,o.warm?320:180,'255,214,150',o.warm?.55:.25);line([[0,-262],[0,-380]],10,'#4a3a32');path(()=>{X.moveTo(-70,-380);X.lineTo(70,-380);X.lineTo(50,-480);X.lineTo(-50,-480);X.closePath()},'#ffe6b0',6)}
 X.restore()}
function suitcase3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,170,.3);const c=o.col||'#e0533d';
 if(o.open){rr(-170,-120,340,120,18,c,7);rr(-150,-108,300,96,12,'#f6e7d6',0);rr(-120,-100,110,50,10,'#7fb2e0',4);rr(10,-96,120,40,10,'#ffd23f',4);rr(-170,-330,340,210,18,c,7);rr(-150,-312,300,170,12,'rgba(0,0,0,.12)',0)}
 else{line([[-50,-470],[-50,-360]],12,'#333');line([[50,-470],[50,-360]],12,'#333');line([[-56,-470],[56,-470]],14,'#333');rr(-150,-360,300,350,30,c,7);for(const k of[-75,0,75])line([[k,-340],[k,-30]],5,'rgba(0,0,0,.18)');circ(-110,0,16,'#222',0);circ(110,0,16,'#222',0)}
 X.restore()}
// worry icons circling the head
function headLoop(cx,cy,t,icons,a=1,rad=300){for(let i=0;i<icons.length;i++){const ang=t*1.3+i/icons.length*Math.PI*2;emo(cx+Math.cos(ang)*rad,cy+Math.sin(ang)*rad*.42-40,icons[i],.85,a)}}
function hotel(t,o={}){X.setTransform(1,0,0,1,0,0);cam(o.cx||540,o.cy||1000,o.z||1,t,o.amp||.1);
 proom(t,{hz:1300,win:250,night:0,curtain:o.warm?'#d9a04a':'#8a96ad',curtain2:o.warm?'#b98030':'#6e7a92',wall:o.warm?'#f6e6cf':'#dfe3ea',wall2:o.warm?'#ebd3b0':'#c9cfda',floor:o.warm?'#9c7a5c':'#7d7f8f',floor2:o.warm?'#7a5a40':'#5e6070'});
 if(!o.warm){X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(150,160,190,.28)';X.fillRect(-3000,-3000,8000,8000);X.restore()}
 // framed art over the bed
 rr(640,330,300,200,10,'#c99a52',6);X.fillStyle=o.warm?'#ffd9a0':'#b9c7dc';X.fillRect(660,350,260,160);X.fillStyle=o.warm?'#e98a5a':'#7f93b3';X.beginPath();X.moveTo(660,510);X.lineTo(740,420);X.lineTo(810,480);X.lineTo(860,440);X.lineTo(920,510);X.fill();
 nightstand3(960,1420,.9,{warm:o.warm});
 hotelbed(560,1720,.9)}

// A (cover): hotel, 07:40, you on the bed edge in work clothes, phone buzzing, 9 missed calls
function shotA(t,r,lab){hotel(t,{z:lerp(1.0,1.05,C(r/3.4)),cx:560});
 suitcase3(170,1720,.95,{open:1});
 const y=1790,s=1.08,hy=HD(y,s),bz=Math.sin(t*55)*5;
 sm(560,y,s,Object.assign({t,eyes:'wide',brow:'worried',mouth:'wavy',look:[.55,.15],sweat:1,armR:120,bendR:-125,holdR:(x,yy)=>phoneH(x+12+bz,yy-10,.12,1,Math.min(9,3+Math.floor(r*2.4))),armL:30,bendL:20},YOU));
 X.save();X.globalAlpha=.55;for(let k=1;k<3;k++)circ(560+150*s,hy+150,40+k*20+((t*60)%12),null,4);X.restore();
 if(lab&&r>.2)label3('You, away 🧳',C((r-.2)/.2))}
sh(0,(t,r)=>shotA(t,r,1));

// B: home, the same morning: partner on the phone, kid with ONE sock, bin overflowing
function binO(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,120,.3);path(()=>{X.moveTo(-90,-260);X.lineTo(90,-260);X.lineTo(70,0);X.lineTo(-70,0);X.closePath()},'#5f6b7a',7);
 for(let k=0;k<4;k++){X.save();X.translate(-60+k*40,-280-Math.abs(Math.sin(k*1.7))*40);X.rotate(k*.6);rr(-34,-28,68,56,16,['#f2f2f2','#2b2b2b','#e9d8a6','#9ad0f5'][k],5);X.restore()}
 rr(-100,-282,200,30,10,'#4a5563',6);X.restore()}
const B0=T('m1')-.05;
sh(B0,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.02,1.07,C(r/2.6)),t,.14);hallway(t,{dx:820,plant:0});
 binO(170,1640,.9,t);
 const talk=r>.0&&r<2.4;
 sm(450,1800,1.0,Object.assign({t,eyes:'wide',brow:'worried',mouth:talk?'open':'wavy',talk:talk?t:null,look:[-.3,-.1],tilt:-6,sweat:1,armR:150,bendR:-160,holdR:(x,y)=>phoneH(x-4,y+20,.3,1),armL:70,bendL:-60},PART));
 sm(760,1800,.62,Object.assign({t,eyes:'open',brow:'up',mouth:'o',look:[-.6,-.3],armR:160,bendR:-10,holdR:(x,y)=>{X.save();X.translate(x,y+30);X.rotate(.2);path(()=>{X.moveTo(-18,-10);X.lineTo(18,-10);X.lineTo(18,50);X.lineTo(46,64);X.lineTo(40,86);X.lineTo(-18,80);X.closePath()},'#ff8fb1',5);X.restore()},armL:20,bendL:10},KID));
 if(r>.15)label3('Home without you 🌀',C((r-.15)/.2))});

// C: back in the hotel, close: the whole family schedule circling your head; Memo hops in at the end
const C0=T('s1')-.05;
sh(C0,(t,r)=>{hotel(t,{z:lerp(1.18,1.25,C(r/3)),cx:560,cy:900});
 const y=1790,s=1.08,hy=HD(y,s);
 sm(560,y,s,Object.assign({t,eyes:r<2.2?'dizzy':'open',brow:'worried',mouth:'wavy',look:[0,-.3],sweat:1,armR:150,bendR:-150,armL:150,bendL:-150},YOU));
 headLoop(560,hy-40,t,['🏊','🗑️','🐶','🦷','📅','🎂'],C(r/.3),300);
 const mp=C((r-2.35)/.5);if(mp>0){memo(310,1440,.48,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(310,1210,mp,8,160)}
 if(r>.2)label3('Your head 🫠',C((r-.2)/.2))});

// D: home, suitcase by the door: one voice note, Memo on set, the icons fly from your head into the phone
const D0=T('s2')-.05;
sh(D0,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.03,1.08,C(r/2.6)),t,.1);hallway(t,{dx:820,plant:0});
 suitcase3(800,1760,.78);
 const y=1810,s=1.08,hy=HD(y,s);
 sm(360,y,s,Object.assign({t,eyes:r>1.6?'happy':'open',brow:'up',mouth:(r>.25&&r<2.3)?(Math.sin(t*14)>0?'open':'smile'):'smile',look:[.4,.4],armR:120,bendR:-130,holdR:(x,yy)=>phoneH(x+6,yy-40,.05,1),armL:20,bendL:10},YOU));
 memo(610,1600,.6,{t,wave:1,glow:1});
 const ic=['🏊','🗑️','🐶','🦷'];const px=360+128*s,py=hy+80;
 for(let i=0;i<ic.length;i++){const st=.35+i*.35,f=C((r-st)/.55);if(f<=0){const ang=t*1.3+i/ic.length*Math.PI*2;emo(360+Math.cos(ang)*240,hy-80+Math.sin(ang)*110,ic[i],.75,1)}else if(f<1)emo(lerp(360+Math.cos(i*1.6)*240,px,eo(f)),lerp(hy-80,py,eo(f))-Math.sin(f*Math.PI)*90,ic[i],lerp(.75,.3,f),1-f*.6);else if(f<1.6)sparkles(px,py,C((r-st-.55)/.4),6,90,'#7cf0a0')}
 label3('Memopai 👋',C((r-.05)/.2))});

// E: the chat: voice note, weekly reminders for your partner, invite, BIG 'Partner tapped Accept'
const E0=T('s2')+2.45;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const ac=T('s3')-E0+.85;
 phoneUI(540,930,1.16,r,{typing:r>.3&&r<.6,list:[{a:0,me:1,text:'🎤 Remind my partner every Thursday: 7:00 swimming bag 🏊, 20:00 bins 🗑️',time:'18:12'},{a:.6,me:0,text:'✅ Got it! Partner · every Thu · 07:00 🏊 · 20:00 🗑️',time:'18:12'},{a:1.05,date:'📩 Invite sent to your partner'}]});
 const k=C((r-ac)/.35);if(k>0){X.save();X.translate(540,1250);const sc=lerp(.6,1,eo(k));X.scale(sc,sc);X.globalAlpha=C(k*2);glow(0,0,380,'130,240,160',.45);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=30;rr(-320,-85,640,170,40,"#25d366",7);X.shadowColor='transparent';
  X.font="900 50px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('✓ Partner tapped Accept',0,4);X.restore();if(k<1)sparkles(540,1250,k,10,320,'#ffffff')}});

// F: Thursday 07:00 at home: partner's phone buzzes (Memopai), bag handed over, kid cheers
const F0=T('s3')+3.2;
sh(F0,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.02,1.06,C(r/3.5)),t,.1);hallway(t,{dx:820,plant:0});
 X.save();X.globalCompositeOperation='screen';X.globalAlpha=.22;X.fillStyle='#fff1b8';X.beginPath();X.moveTo(640,450);X.lineTo(1000,450);X.lineTo(1150,1900);X.lineTo(420,1900);X.fill();X.restore();
 const buzzOn=r>.2&&r<1.6,give=C((r-1.7)/.5),got=r>2.2;
 sm(430,1800,1.0,Object.assign({t,eyes:got?'happy':'open',brow:'up',mouth:got?'grin':'o',look:got?[.6,.2]:[-.2,.5],armR:give>0?lerp(120,80,give):120,bendR:give>0?lerp(-130,-20,give):-130,holdR:give>0?null:(x,y)=>{const j=buzzOn?Math.sin(t*60)*4:0;phoneH(x+j,y,.1,buzzOn)},armL:give>0?lerp(20,95,give):20,bendL:give>0?-10:10,holdL:give>0&&!got?(x,y)=>kidbag(x+150,y+380,.55,'#3dbfb0',-1):null},PART));
 if(got)kidbag(720,1800,.62,'#3dbfb0',1);
 sm(720,1800,.62,Object.assign({t,eyes:got?'happy':'open',brow:'up',mouth:got?'grin':'smile',look:[-.6,-.2],armR:got?165:40,bendR:got?-10:10,armL:got?165:20,bendL:got?-10:10},KID));
 if(r<1.9)notif(338,r<1.6?C((r-.2)/.3):C((1.9-r)/.3),'Memopai','🏊 Swimming bag today!');
 else label3('Thursday, 07:00 ✅',C((r-1.9)/.2))});

// G: SAME hotel framing as A: warm light, tea, phone quiet; one photo from home
const G0=T('p1')-.05;
sh(G0,(t,r)=>{hotel(t,{warm:1,z:lerp(1.0,1.05,C(r/4)),cx:560});
 suitcase3(170,1720,.95,{open:1});
 const y=1790,s=1.08,hy=HD(y,s);
 sm(560,y,s,Object.assign({t,eyes:r>1.4?'happy':'closed',brow:'up',mouth:'smile',blush:r>1.4?1:0,look:[.4,.4],lean:-4,armR:115,bendR:-120,holdR:(x,yy)=>{X.save();X.translate(x+8,yy-10);glow(0,-60,90,'255,230,190',.3);for(let k=0;k<3;k++){X.save();X.globalAlpha=.5;line([[-14+k*14,-70],[-10+k*14+Math.sin(t*3+k)*6,-120]],5,'#ffffff');X.restore()}rr(-40,-60,80,70,14,'#ffffff',6);X.restore()},armL:40,bendL:20},YOU));
 const ph=C((r-1.3)/.4);if(ph>0){X.save();X.translate(700,1120);X.scale(lerp(.5,1,eo(ph)),lerp(.5,1,eo(ph)));X.globalAlpha=C(ph*2);X.rotate(.06);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=20;rr(-120,-150,240,270,16,'#ffffff',6);X.shadowColor='transparent';
  X.fillStyle='#cfeeff';X.fillRect(-100,-130,200,190);X.save();X.beginPath();X.rect(-100,-130,200,190);X.clip();kidbag(20,50,.18,'#3dbfb0',1);sm(20,50,.18,Object.assign({t,eyes:'happy',mouth:'grin',armR:165,bendR:-10,armL:165,bendL:-10,noshadow:1},KID));X.restore();
  X.font="56px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText('😎',0,92);X.restore()}
 if(r>.2)label3('You, off duty 😌',C((r-.2)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,1.6,0));
