// 2026-11-20 12:00 FUN FACT — "09:00. Big meeting. And you're calling Dad about his pills. Again."
// craft ladder: meetroom() (glass-walled meeting room: city window, whiteboard chart, long table, office plant, wall clock),
// mchair() office chair back, glassW() water glass. Role-reversal payoff in the identical framing of shot A.
const YOU={hair:'curl',pj:'#ffffff',limb:'#34405a'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function emo(x,y,e,s=1,a=1){if(a<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);circ(0,0,62,'#fff',6);X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()}
// ---- craft ladder: meeting room kit ----
function mchair(x,y,s=1,col='#2f3a4f'){X.save();X.translate(x,y);X.scale(s,s);rr(-70,-230,140,170,30,col,6);line([[0,-60],[0,0]],12,'#222');X.restore()}
function glassW(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='rgba(200,230,255,.55)';X.strokeStyle='#151515';X.lineWidth=5;X.beginPath();X.moveTo(-26,-80);X.lineTo(26,-80);X.lineTo(20,0);X.lineTo(-20,0);X.closePath();X.fill();X.stroke();X.fillStyle='rgba(120,190,255,.5)';X.fillRect(-21,-45,42,42);X.restore()}
function mtable(y,o={}){// long table seen from the front, top edge at y
 X.save();X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=30;rr(-60,y,1200,60,18,o.top||'#c9925c',7);X.shadowColor='transparent';
 const g=X.createLinearGradient(0,y+50,0,y+320);g.addColorStop(0,'#9a6a40');g.addColorStop(1,'#7a5030');X.fillStyle=g;X.fillRect(-40,y+52,1160,300);
 X.strokeStyle='#151515';X.lineWidth=7;X.strokeRect(-40,y+52,1160,300);X.fillStyle='rgba(255,255,255,.12)';X.fillRect(-60,y+8,1200,10);X.restore()}
function meetroom(t,o={}){X.setTransform(1,0,0,1,0,0);
 cam(o.cx||540,o.cy||1000,o.z||1,t,o.amp||.1);
 proom(t,{hz:1240,wall:o.calm?'#e9f0f6':'#dde4ec',wall2:o.calm?'#d3e0ea':'#c3cfdb',floor:'#6f7f96',floor2:'#55657c'});
 // city window (left)
 X.save();rr(60,330,330,640,14,'#f6f8fb',0);const sg=X.createLinearGradient(0,350,0,950);sg.addColorStop(0,o.calm?'#9fd6ff':'#a9bfd6');sg.addColorStop(1,o.calm?'#ffe9c4':'#dfe7ef');X.fillStyle=sg;X.fillRect(78,348,294,604);
 X.beginPath();X.rect(78,348,294,604);X.clip();if(o.calm){glow(300,470,260,'255,236,170',.6);circ(300,470,46,'#fff4c8',0)}
 pblur(3,()=>{X.fillStyle=o.calm?'#8fa6c4':'#7d8ea6';for(let i=0;i<7;i++){const bh=180+rnd(i+11)*260;X.fillRect(60+i*48,952-bh,40,bh)}X.fillStyle='rgba(255,240,190,.55)';for(let i=0;i<7;i++)for(let k=0;k<5;k++)X.fillRect(68+i*48,760+k*34,10,14)});
 X.restore();X.fillStyle='#f6f8fb';X.fillRect(218,348,12,604);
 // whiteboard + rising chart (no words)
 rr(470,430,400,300,12,'#ffffff',7);X.save();X.strokeStyle='#4a8fe0';X.lineWidth=9;X.lineJoin='round';X.beginPath();X.moveTo(510,690);X.lineTo(590,650);X.lineTo(660,670);X.lineTo(740,580);X.lineTo(830,520);X.stroke();
 for(let i=0;i<4;i++)rr(520+i*80,700-(30+i*18),40,30+i*18,4,['#ffd23f','#ff8a6b','#7fd1ff','#8ff07a'][i],0);X.restore();rr(520,742,300,14,7,'#9aa6b4',0);
 // wall clock
 wclock(o.clockX||960,600,.7,9,o.min||0);
 if(o.table!==0)mtable(o.ty||1250);
}
function bigPlant(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,6,180,.3);
 for(let k=0;k<9;k++){X.save();X.translate(0,-230);X.rotate(-1.25+k*.31+Math.sin(t*1.4+k)*.03);const g=X.createLinearGradient(0,0,0,-420);g.addColorStop(0,'#2f7d39');g.addColorStop(1,k%2?'#5fb85f':'#4ea24f');X.fillStyle=g;X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.ellipse(0,-240,70,240,0,0,7);X.fill();X.stroke();X.strokeStyle='rgba(20,60,25,.6)';X.lineWidth=4;X.beginPath();X.moveTo(0,-30);X.lineTo(0,-440);X.stroke();X.restore()}
 path(()=>{X.moveTo(-130,-250);X.lineTo(130,-250);X.lineTo(100,0);X.lineTo(-100,0);X.closePath()},'#e7e2da',7);rr(-140,-270,280,40,12,'#d6cfc4',6);X.restore()}
// coworkers + boss (seated behind the table)
function crew(t,o={}){const ann=o.ann;
 sm(860,1060,.5,{t,hair:'spike',hairc:'#2a2a2a',pj:'#e8eef5',limb:'#2b3446',flip:1,eyes:'open',lid:ann?.3:.1,brow:ann?'angry':'flat',mouth:ann?'frown':'smile',look:ann?[1,.3]:[-.6,0],armR:o.point?100:20,bendR:o.point?10:10,armL:15,noshadow:1});
 for(const[i,c]of[[0,[230,'bun','#e2508a','#ffd9e4']],[1,[420,'curl','#7a4a2a','#cfe6ff']],[2,[610,'spike','#e0b040','#e0f5d8']]]){const[x,h,hc,pj]=c;
  mchair(x,1250,.95);sm(x,1420,.62,{t,hair:h,hairc:hc,lashes:h=='bun'?1:0,pj,limb:'#3a4256',eyes:'open',lid:ann?.35:0,brow:ann?(i==1?'up':'angry'):'flat',mouth:ann?(i==1?'o':'flat'):'smile',look:ann?[1,.2]:[.6,-.2],armL:20,armR:20,noshadow:1})}
 mtable(1250);glassW(300,1262,.9);glassW(700,1262,.9);rr(470,1236,120,22,6,'#2e3440',4)}

// A (cover): 09:00, big meeting, you hiding behind the office plant, phone cupped to your ear; everyone stares
function shotA(t,r,lab){meetroom(t,{z:lerp(1.0,1.05,C(r/4)),cx:560});crew(t,{ann:r>1.0||!lab,point:1});
 const y=1830,s=1.12,hy=HD(y,s);
 sm(600,y,s,Object.assign({t,eyes:'wide',brow:'worried',mouth:(r>.1&&r<3.8)?(Math.sin(t*15)>0?'o':'wavy'):'wavy',look:[-.7,.1],sweat:1,armR:165,bendR:-115,armL:150,bendL:-150},YOU));
 X.save();X.translate(600+138*s,hy+45);X.rotate(.25);glow(0,0,110,'130,240,160',.35);rr(-34,-70,68,140,12,'#1b1b1f',5);rr(-26,-60,52,120,7,'#25d366',0);X.restore();
 bigPlant(900,1880,.82,t);
 if(lab&&r>.25)label3('You at 09:00 😬',C((r-.25)/.2))}
sh(0,(t,r)=>shotA(t,r,1));

// B: Dad in his armchair: Mon–Thu empty, Friday still full; phone at his ear, scratching his head
function livroom(t,o={}){X.setTransform(1,0,0,1,0,0);cam(540,1020,o.z||1.03,t,.1);proom(t,{win:760,lamp:o.morning?0:180,frame:[300,560],curtain:'#e0a24a',curtain2:'#c4862e',wall:'#f6e3c8',wall2:'#ecd0ad'});
 if(o.morning){X.save();X.globalCompositeOperation='screen';X.globalAlpha=.22;X.fillStyle='#fff1b8';X.beginPath();X.moveTo(570,800);X.lineTo(950,800);X.lineTo(1200,1900);X.lineTo(300,1900);X.fill();X.restore()}}
function sideTable(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,200,.3);rr(-170,-260,340,40,14,'#a7724a',6);line([[-130,-220],[-140,0]],14,'#7a5030');line([[130,-220],[140,0]],14,'#7a5030');X.restore()}
const DADSIT={legL:-28,kneeL:-40,legR:28,kneeR:40};
function dadChair(t,o){armchair(560,1640,1.12,{col:'#5f8f6e',col2:'#4d7a5c'});
 dad(560,1700,1.0,Object.assign({t,pj:'#c9a77a',limb:'#4a4a56'},DADSIT,o));
 armchair(560,1640,1.12,{front:1,col:'#5f8f6e',col2:'#4d7a5c'})}
const B0=T('d1')-.05;
sh(B0,(t,r)=>{livroom(t,{z:lerp(1.03,1.07,C(r/3))});
 const talk=r>.05&&r<2.8;
 dadChair(t,{eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[-.5,.45],tilt:-6,armR:150,bendR:-160,holdR:(x,y)=>phoneH(x-6,y+18,.35,1),armL:155,bendL:-120});
 sideTable(250,1700,1);pillbox(250,1440,.48,{full:[0,0,0,0,1,1,1]});
 if(r>.2)label3('Your dad 🤔',C((r-.2)/.2))});

// C: the corridor outside: voice note to Memopai, the mascot hops in, 💊 flies from your head into the phone
const C0=T('s2')-.05,MP=.15;
sh(C0,(t,r)=>{X.setTransform(1,0,0,1,0,0);cam(540,1000,lerp(1.04,1.09,C(r/3)),t,.1);
 proom(t,{hz:1240,wall:'#e6edf3',wall2:'#ccd8e3',floor:'#6f7f96',floor2:'#55657c',plant:180});
 // glass wall of the meeting room behind (blurred)
 pblur(5,()=>{rr(420,380,700,860,10,'rgba(170,200,225,.45)',0);X.fillStyle='rgba(60,70,90,.35)';for(const x of[540,700,860])X.fillRect(x-40,880,80,200)});
 const y=1830,s=1.15,hy=HD(y,s);
 sm(420,y,s,Object.assign({t,eyes:r>1.2?'happy':'open',brow:'up',mouth:(r>.5&&r<3.6)?(Math.sin(t*14)>0?'open':'smile'):'smile',look:[.5,.3],armR:110,bendR:-110,holdR:(x,yy)=>phoneH(x+10,yy,.1,1),armL:20,bendL:10},YOU));
 const mp=C((r-MP)/.5);if(mp>0){memo(790,1560,.78,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(790,1240,mp,8,180)}
 const ft=1.2,fl=C((r-ft)/.8);if(r>ft-.35){if(fl<1){const px=lerp(420,520,eo(fl)),py=lerp(hy-180,hy+520,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'💊 Dad · 9:00',C((r-ft+.35)/.3)*(1-fl*.5))}else sparkles(520,hy+520,C((r-ft-.8)/.5),8,120,'#7cf0a0')}
 label3('Memopai 👋',C((r-MP)/.2))});

// D: your chat with Memopai: one voice note, daily 09:00, invite to Dad, BIG 'Dad tapped Accept'
const D0=T('s2')+2.6;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const iv=T('s3')-D0-.2,ac=T('s3')-D0+.45;
 phoneUI(540,930,1.16,r,{typing:r>.35&&r<.75,list:[{a:0,me:1,text:'🎤 Every day at 9, remind Dad: take your pills 💊',time:'09:04'},{a:.75,me:0,text:'✅ Got it! Dad · every day 09:00 · 💊 Pills',time:'09:04'},{a:iv,date:'📩 Invite sent to Dad'}]});
 const k=C((r-ac)/.35);if(k>0){X.save();X.translate(540,1250);const sc=lerp(.6,1,eo(k));X.scale(sc,sc);X.globalAlpha=C(k*2);glow(0,0,380,'130,240,160',.45);X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=30;rr(-300,-85,600,170,40,"#25d366",7);X.shadowColor='transparent';
  X.font="900 52px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('✓ Dad tapped Accept',0,4);X.restore();if(k<1)sparkles(540,1250,k,10,320,'#ffffff')}});

// E: next morning 09:00: Dad's phone buzzes (Memopai), Friday lid opens, pills taken, happy arms
const E0=T('f1')-.05;
sh(E0,(t,r)=>{livroom(t,{morning:1,z:lerp(1.03,1.07,C(r/4))});
 const buzzOn=r>.25&&r<2.2,took=r>2.3;
 dadChair(t,{eyes:took?'happy':'open',brow:'up',mouth:took?'grin':'o',look:took?[0,-.2]:[.6,-.3],blush:took?1:0,armR:took?160:120,bendR:took?-20:-130,holdR:took?null:(x,y)=>{const j=buzzOn?Math.sin(t*60)*4:0;phoneH(x+j,y,.2,buzzOn)},armL:took?160:40,bendL:took?-20:20});
 sideTable(250,1700,1);pillbox(250,1440,.48,{full:[0,0,0,0,took?0:1,1,1],open:4,lidP:C((r-1.6)/.5)});
 if(buzzOn&&r<1.2){X.save();X.globalAlpha=.6;for(let k=1;k<3;k++)circ(560+150,1080,30+k*18+((t*60)%10),null,3);X.restore()}
 if(r<2.25)notif(338,r<1.95?C((r-.25)/.3):C((2.25-r)/.3),'Memopai','💊 Morning! Time for your pills');
 else label3('Dad, 09:00 ✅',C((r-2.3)/.2))});

// F: SAME meeting, same framing: you calm at the table; your phone lights up: Dad ⚽
const F0=T('p1')-.05;
sh(F0,(t,r)=>{meetroom(t,{calm:1,z:lerp(1.0,1.05,C(r/4)),cx:560});
 // the crew, relaxed, plus YOU seated at the right end of the table
 sm(860,1060,.5,{t,hair:'spike',hairc:'#2a2a2a',pj:'#e8eef5',limb:'#2b3446',flip:1,eyes:'happy',brow:'up',mouth:'smile',armR:100,bendR:10,noshadow:1});
 for(const[x,h,hc,pj]of[[230,'bun','#e2508a','#ffd9e4'],[420,'curl','#7a4a2a','#cfe6ff']]){mchair(x,1250,.95);sm(x,1420,.62,{t,hair:h,hairc:hc,lashes:h=='bun'?1:0,pj,limb:'#3a4256',eyes:'open',brow:'flat',mouth:'smile',look:[.6,-.2],noshadow:1})}
 mchair(660,1300,1.25);sm(660,1560,.9,Object.assign({t,eyes:r>1.2?'happy':'open',brow:'up',mouth:r>1.2?'grin':'smile',blush:r>1.2?1:0,look:r<1.2?[.3,.6]:[0,-.1],armL:20,armR:20,noshadow:1},YOU));
 mtable(1250);glassW(300,1262,.9);
 // phone on the table, buzzing, Dad ⚽
 const on=r>.5,j=on&&r<2.4?Math.sin(t*60)*3:0;X.save();X.translate(540+j,1262);if(on)glow(0,-10,150,'130,240,160',.5);rr(-70,-26,140,30,10,'#1b1b1f',5);rr(-62,-22,124,20,6,on?'#25d366':'#3a4a66',0);X.restore();
 emo(540,1150-C((r-.6)/.4)*40,'⚽',.8,C((r-.6)/.3));
 bigPlant(900,1880,.82,t);
 if(r>.25)label3('You, sorted 😌',C((r-.25)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,1.6,0));
