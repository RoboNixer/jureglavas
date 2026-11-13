// ===== SAW IT MONDAY: "sorry, just saw this" on Thursday -> brain holds ~4 things, her message was #5 -> rewind: tell Memopai the second you read it -> 19:00 ping -> same-day reply -> You, sorted =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const YOU={hair:'curl'};
function phoneH(hx,hy,rot=-.15,on=0,t=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,140,'130,240,160',.35);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a4a66',0);X.restore()}
// generic WhatsApp chat (title + letter avatar), same look as phoneUI
function chatUI(x,y,s,t,title,msgs){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#efe7dc',0);
 X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 for(let i=0;i<40;i++){X.globalAlpha=.5;circ(-280+rnd(i)*560,-600+rnd(i+7)*1220,6+rnd(i+3)*10,'#e0d3c2',0)}X.globalAlpha=1;
 X.fillStyle='#008069';X.fillRect(-300,-640,600,210);rr(-70,-618,140,40,20,'#000',0);
 X.font="600 26px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText(msgs.clock||'21:40',-240,-598);
 X.font="400 40px Inter";X.fillText('‹',-270,-488);circ(-180,-488,44,'#ff9fc0',0);txt('M',-180,-486,44,'#fff',0);
 X.font="800 40px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='left';X.fillText(title,-118,-506);X.font="400 26px Inter";X.fillText(msgs.sub||'online',-118,-466);
 let yy=-380;msgs.list.forEach(m=>{if(t<m.a)return;const p=C((t-m.a)/.22);if(m.day){rr(-110,yy,220,50,14,'#e1f2fb',0);txt(m.day,0,yy+26,26,'#54656f',0,'600 ');yy+=72;return}
  yy+=bubble(m.me?270:-270,yy,470,m.text,m.me,p,m.time)+22});
 X.fillStyle='#f0f0f0';X.fillRect(-300,520,600,140);rr(-270,545,450,74,37,'#fff',0);X.font="400 30px Inter,'Noto Color Emoji'";X.fillStyle=msgs.draft?'#111':'#8696a0';X.textAlign='left';X.fillText(msgs.draft||'Message',-230,582);circ(235,582,38,'#00a884',0);
 X.restore();X.restore()}
// a small thought chip (emoji in a white circle) orbiting the head
function chip(x,y,e,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.2)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';txt(e,0,4,62,'#111',0,'400 ');X.restore()}
function msgChip(x,y,s=1,rot=0,lbl='Mia: Saturday? 🥺'){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.font="800 40px Inter,'Noto Color Emoji'";const w=X.measureText(lbl).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=18;rr(-w/2,-42,w,84,26,'#dcf8c6',6);X.shadowColor='transparent';txt(lbl,0,2,40,'#111',0,'800 ');X.restore()}
function orbit(cx,cy,rx,ry,t,ic,sp=1.1,s=1){ic.forEach((e,k)=>{const a=t*sp+k*Math.PI*2/ic.length;chip(cx+Math.cos(a)*rx,cy+Math.sin(a)*ry,e,s*(.85+.15*Math.sin(a)))})}
function wallcal2(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-90,-110,180,220,12,'#fff',6);rr(-90,-110,180,56,12,'#e53935',0);txt('SHIFTS',0,-82,30,'#fff',0);txt('SAT',-30,-10,34,'#333',0);txt('OFF ✓',0,46,38,'#1f9d55',0);X.restore()}

// ===== SHOTS =====
// 1 MIRROR: Thursday 21:40, night bedroom, YOU cringes; her chat: Monday's question, Seen, and the late reply typed now
sh(0,(t,r)=>{cam(540,lerp(990,970,r/3.2),lerp(1.0,1.05,r/3.2),t,.25);proom(t,{win:820,night:1,lamp:120,curtain:'#6a7fd0',curtain2:'#4f62b0'});
 const ty=WT('h1',2),sent=WT('h1',6);const cr=t>sent;
 sm(215,1800,1.05,Object.assign({t,eyes:cr?'closed':'wide',brow:'worried',mouth:cr?'wavy':'flat',look:[.7,-.1],sweat:cr,blush:cr,tilt:cr?-8:0,armR:40,bendR:-80,holdR:(x,y)=>phoneH(x,y,-.2,1,t)},YOU));
 const typed='sorry, just saw this 🙈';const n=Math.floor(C((t-ty)/(sent-ty-.05))*typed.length);
 chatUI(705,1010,.88,t,'Mia 💛',{clock:'21:40',sub:'last seen today at 21:38',draft:t>ty&&!cr?typed.slice(0,n):null,list:[
  {a:0,day:'MONDAY'},{a:0,me:0,text:'Can you come Saturday?? Need numbers tonight 🙏',time:'14:12'},{a:0,day:'TODAY'},{a:sent,me:1,text:typed,time:'21:40 ✓✓'}]});
 X.setTransform(1,0,0,1,0,0);label3('You, Thursday 21:40 🙈',C(r/.25),250)});
// 2 THE FEELING / FACT: Monday 14:12 at work, four things orbit the head, her message flies in as #5 and gets knocked out
sh(T('f1')-.05,(t,r)=>{cam(540,lerp(980,1000,r/4.4),lerp(1.0,1.04,r/4.4),t,.25);proom(t,{win:540,wall:'#dfe8ee',wall2:'#c9d6df',floor:'#9aa7b2',floor2:'#7d8a95',curtain:'#7aa6c8',curtain2:'#5b87ab'});
 const hit=WT('f1',13);const hx=540,hy=2290-1.95*767;
 sm(540,2290,1.95,Object.assign({t,eyes:t>hit?'dizzy':'wide',brow:'worried',mouth:t>hit?'wavy':'flat',look:[Math.sin(t*3)*.5,-.4],sweat:t>WT('f1',8)},YOU));
 const sh4=C((t-T('f1'))/.9);orbit(hx,hy-40,360,170,t,['🧾','🔑','📊','🎂'].slice(0,Math.ceil(sh4*4)),1.3,1.1);
 // the 5th: her message flies in, bonks, falls away spinning
 const a0=WT('f1',10);if(t>a0){const q=(t-a0);if(t<hit){const k=eo(C(q/(hit-a0)));msgChip(lerp(1300,800,k),lerp(500,560,k),1.1,0)}else{const f=t-hit;msgChip(800+f*260,560+f*f*1500-f*500,1.1,f*2.4);if(f<.15)FL=.25;sparkles(800,560,C(f/.5),12,200,'#ffe14d')}}
 X.setTransform(1,0,0,1,0,0);label3('Your brain at 14:12 🫠',C(r/.25),250)});
// 3 WAY OUT: REWIND to Monday 14:12 -> Memopai chat (on screen from ~8.4 s)
sh(T('s1')-.05,(t,r)=>{NOFX=1;cam(540,960,1,t,.2);burst('#103a2a','#145236',t*.3);
 const ty=T('s1')+.35,rep=WT('s1',6);const z=lerp(1.28,1.34,eo(C(r/2)));
 phoneUI(540,lerp(1180,1130,eo(C(r/1.5))),z,r,{typing:t>ty+.6&&t<rep,list:[
  {a:ty-T('s1')+.05,me:1,text:'Remind me at 7pm: check my shift + answer Mia',time:'14:12'},
  {a:rep-T('s1')+.05,me:0,text:'Got it ✅ Today at 19:00 I’ll remind you: check your shift, answer Mia 💬',time:'14:12'}]});
 X.setTransform(1,0,0,1,0,0);rewind(1-C((r-.55)/.25),t,'◀◀ MONDAY 14:12')});
// 4 OUT OF YOUR HEAD: Memo on set takes her message from YOU's head; four chips left, YOU relaxes
sh(WT('s2',3),(t,r)=>{cam(540,lerp(1000,980,r/3.6),lerp(1.02,1.07,r/3.6),t,.25);proom(t,{win:540,wall:'#dfe8ee',wall2:'#c9d6df',floor:'#9aa7b2',floor2:'#7d8a95',curtain:'#7aa6c8',curtain2:'#5b87ab',plant:960});
 const fly=C((r-.3)/1.1),k=eio(fly);const out=WT('s2',8);
 sm(330,1780,1.12,Object.assign({t,eyes:t>out?'happy':'wide',brow:t>out?'up':'flat',mouth:t>out?'smile':'flat',look:[.6,0],armR:30,bendR:-70,holdR:(x,y)=>phoneH(x,y,-.2,1,t)},YOU));
 orbit(330,1780-1.12*767-40,230,95,t,['🧾','🔑','📊','🎂'],.9,.62);
 memo(800,1780,1.45,{t,wave:t>out,hop:C((t-out)/.6)*(t<out+.6?1:0),glow:t>out?.8:.3});
 msgChip(lerp(330,820,k),lerp(1780-1.12*767-200,1780-1.45*560-k*40,k),lerp(.8,.95,k),Math.sin(k*Math.PI)*.2);if(fly>0&&fly<1)sparkles(lerp(330,820,k),lerp(820,980,k),fly,6,90,'#c4b2ff');
 if(t>out)sparkles(800,900,C((t-out)/.7),14,260,'#ffe14d');
 X.setTransform(1,0,0,1,0,0);label3('Memopai 😎',C(r/.25),250)});
// 5 19:00 PING: evening room, notification lands, YOU checks the shift note and answers her
sh(T('s3')-.05,(t,r)=>{cam(540,lerp(1000,980,r/2.6),lerp(1.03,1.08,r/2.6),t,.25);proom(t,{win:820,night:1,lamp:140,curtain:'#d9577a',curtain2:'#b8405f'});psofa(560,1700,.95,'#e0915a','#c47544');wallcal2(320,760,.9);
 const bz=WT('s3',3),ans=WT('s3',6);
 sm(560,1790,1.12,Object.assign({t,eyes:'wide',brow:t>bz?'up':'flat',mouth:t>ans?'smile':'o',look:t>WT('s3',4)&&t<ans?[-.8,-.3]:[.5,.2],armR:35,bendR:-75,holdR:(x,y)=>phoneH(x,y,-.2,t>bz,t)},YOU));
 X.setTransform(1,0,0,1,0,0);
 if(t<ans)notif(110,C((t-bz)/.35),'Memopai','⏰ Check your shift + answer Mia 💬');
 else msgChip(540,330,lerp(.6,1.25,eo(C((t-ans)/.3))),0,'Just checked, I’m in! 🎉')});
// 6 FIXED LIFE: her reply pops, then label "You, sorted", phone face down, Memo waves
sh(T('p1')-.05,(t,r)=>{const sp=T('p2')-.05;const S2=t>sp;cam(540,lerp(1000,975,r/5),lerp(1.03,1.1,r/5),t,.2);
 proom(t,{win:820,night:1,lamp:140,curtain:'#d9577a',curtain2:'#b8405f',frame:[300,560]});glow(540,1000,900,'255,200,140',.25);psofa(500,1700,1.0,'#e0915a','#c47544');
 sm(470,1790,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:S2?'smile':'grin',blush:1,lean:S2?-6:0,armL:S2?150:20,bendL:S2?70:0,armR:S2?20:35,bendR:S2?0:-75,holdR:S2?null:(x,y)=>phoneH(x,y,-.2,1,t)},YOU));
 if(S2){memo(860,1790,1.3,{t,wave:1,hop:C((t-sp)/.5)})}
 X.setTransform(1,0,0,1,0,0);
 if(!S2){const q=C((t-T('p1')-.1)/.3);msgChip(560,360,lerp(.5,1.25,eo(q)),0,'Mia: Yesss 😍 see you Saturday!');if(q>0)sparkles(560,360,C((t-T('p1'))/.8),14,300,'#ff9fd6')}
 else label3('You, sorted 😌',C((t-sp)/.25),250)});
// 7 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
// COVER-ONLY shot (cover_t=1000.5): YOU cringing + the chat with the late reply
sh(1000,(t,r)=>{cam(540,980,1.0,0,0);proom(0,{win:820,night:1,lamp:120,curtain:'#6a7fd0',curtain2:'#4f62b0'});
 sm(215,1900,1.05,Object.assign({t:0,eyes:'closed',brow:'worried',mouth:'wavy',sweat:1,blush:1,tilt:-8,armR:40,bendR:-80,holdR:(x,y)=>phoneH(x,y,-.2,1,0)},YOU));
 chatUI(705,1150,.86,9,'Mia 💛',{clock:'21:40',sub:'last seen today at 21:38',list:[{a:0,day:'MONDAY'},{a:0,me:0,text:'Can you come Saturday?? Need numbers tonight 🙏',time:'14:12'},{a:0,day:'TODAY'},{a:0,me:1,text:'sorry, just saw this 🙈',time:'21:40 ✓✓'}]})});
