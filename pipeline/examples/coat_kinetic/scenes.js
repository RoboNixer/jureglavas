// 2026-11-28 08:00 REMINDER OF THE DAY — "'Mum... my coat's shrunk!' (It's Saturday. Shops open at 10.)"
// look: kinetic type + phone, now WITH characters in frame 1 (data 2026-11-27: no-character reels lose people at 7 s)
// craft ladder: sm o.puffer/o.tight/o.sleeve (outgrown vs roomy puffer coat), porch3() frosty doorstep set, heightMarks3(), coatRack3()
const KID=(x,y,s,t,o={})=>sm(x,y,s,Object.assign({t,puffer:'#e53935',tight:1,sleeve:.42,beanie:'#ffd23f',hair:'curl'},o));
const MUM=(x,y,s,t,o={})=>sm(x,y,s,Object.assign({t,hair:'bun',hairc:'#6b3a1f',lashes:1,jumper:'#1f8a7a'},o));
function breath(x,y,t,k){X.save();for(let i=0;i<3;i++){const u=((t*.9+i/3+k)%1);X.globalAlpha=.55*(1-u);X.fillStyle='#ffffff';X.beginPath();X.arc(x+u*90,y-u*60,18+u*40,0,7);X.fill()}X.restore()}
// A: Monday 07:40 doorstep, kid in the shrunk coat (camera starts tight on the short sleeve, pulls back)
sh(0,(t,r)=>{porch3(t);cam(lerp(700,560,eo(r/1.5)),lerp(1150,1010,eo(r/1.5)),lerp(1.75,1.06,eo(r/1.5)),t,.6);
 const sh2=Math.sin(t*30)*3;KID(470+sh2,1720,1.0,t,{armL:lerp(20,108,eo(C(r/.6))),armR:lerp(20,108,eo(C(r/.6))),bendL:-20,bendR:-20,mouth:r<1.6?'open':'frown',talk:r<1.6?t:0,brow:'worried',look:[.3,-.1]});
 breath(520,950,t,0);label3('Your kid, Monday 🥶',C(r/.3),400);});
// B: wider, mum in the doorway with coffee: "THIS WEEKEND 👍", kid trudges off (tracking pan right→left)
sh(T('h2')-.1,(t,r)=>{porch3(t);cam(lerp(640,520,eio(r/3)),1000,lerp(1.0,.92,eo(r/3)),t,.5);
 MUM(800,1700,.92,t,{armR:150,bendR:-60,armL:20,mouth:'smile',brow:'up',holdR:(hx,hy)=>{rr(hx-30,hy-70,60,70,10,'#ffffff',6);X.save();X.globalAlpha=.6;breath(hx,hy-90,t,.3);X.restore()}});
 const wk=C((r-1.2)/1.8);KID(lerp(430,170,eo(wk)),1720,.95,t,{walk:wk>0&&wk<1?t:null,flip:1,mouth:'frown',brow:'sad'});
 kinWord('THIS WEEKEND 👍',700,560,74,r-.9,{col:'#0d2b45',bg:'#ffffff',rot:-3,maxW:560});});
// C: icy kinetic backdrop: height marks on the door frame, he BOINGS past the old mark
sh(T('j1')-.1,(t,r)=>{NOFX=1;kinBg(t,{c1:'#0b2a4a',c2:'#3a86c8',words:["IT DIDN'T SHRINK",'HE GREW','+4 CM'],glow:'160,220,255',gy:1100});
 cam(540,lerp(1020,980,eo(r/2)),lerp(1.0,1.08,eo(r/2)),t,.4,lerp(-2,1,eo(r/2)));
 heightMarks3(360,1760,1.0,[{h:740,l:'SEPT'},{h:835,l:'NOW!'}],0);
 const g=C((r-.9)/.25),sq=r>1.15?1+.1*Math.exp(-(r-1.15)*7)*Math.cos((r-1.15)*28):lerp(1,.9,g);
 X.save();X.translate(560,1740);X.scale(1/sq,sq*lerp(.92,1.02,eo(g)));KID(0,0,.95,t,{armL:30,armR:30,mouth:r>1.2?'grin':'o',eyes:r>1.2?'happy':null,brow:'up'});X.restore();
 kinWord("IT DIDN'T SHRINK",540,420,96,r-.15,{from:'left',col:'#fff',rot:-3});
 kinWord('HE GREW',540,560,128,r-1.0,{col:'#0b2a4a',bg:'#ffd23f',rot:2});});
// D: Saturday: date page swings in, the 'coat' sticky note drifts away (slipped your mind), then the phone = hero
sh(T('s1')-.1,(t,r)=>{NOFX=1;kinBg(t,{c1:'#04352c',c2:'#12a37f',words:['SATURDAY','COPY THIS','10:00'],glow:'140,255,200',gy:950});
 cam(540,lerp(1000,960,eo(r/3)),lerp(1.04,1.0,eo(r/3)),t,.3);
 const out=C((r-1.9)/.4);
 if(out<1){X.save();X.globalAlpha=1-out;X.translate(0,-out*500);kinDate(540,820,1.0,r,{wd:'SATURDAY',d:'28',m:'NOVEMBER'});
  const fl=C((r-.7)/1.2);X.save();X.translate(lerp(780,1120,eio(fl)),lerp(1240,820,eio(fl)));X.rotate(lerp(.1,1.2,fl));X.globalAlpha=(1-fl);rr(-110,-90,220,180,10,'#ffe14d',6);X.fillStyle='#333';X.font="700 54px Inter,'Noto Color Emoji'";X.textAlign='center';X.fillText('coat 🧥',0,18);X.restore();
  if(r>.7&&r<1.9){X.font="900 54px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='center';X.globalAlpha=C((r-1)/.3)*(1-out);X.fillText('...forgot 🫠',540,1380)}X.restore()}
 if(r>1.9){const k=eo(C((r-1.9)/.5));X.save();X.translate(0,(1-k)*900);
  phoneUI(540,960,1.16,r-2.0,{typing:r>3.4&&r<3.9,list:[{a:-1,date:'SAT 28 NOV · 08:01'},{a:.35,me:1,text:'Remind me today at 10: new winter coat for Leo, one size up 🧥',time:'08:01'},{a:1.9,me:0,text:'✅ Got it! Today 10:00 ⏰ New winter coat for Leo 🧥',time:'08:01'}]});X.restore()}});
// E: 10:00 ping, then the shop: he twirls in the roomy coat (crane down + orbit)
sh(T('p1')-.1,(t,r)=>{NOFX=1;kinBg(t,{c1:'#6a2400',c2:'#f08a24',words:['SIZE UP','10:00','SORTED'],glow:'255,225,150',gy:1000});
 cam(lerp(500,560,eio(r/2.6)),lerp(860,990,eo(r/2.6)),lerp(1.12,1.0,eo(r/2.6)),t,.5);
 // shop window frame + snow outside
 rr(150,560,780,640,20,'#ffffff22',6);X.save();X.fillStyle='#fff';for(let k=0;k<30;k++){X.globalAlpha=.6;X.beginPath();X.arc(170+rnd(k)*740,580+((t*80+rnd(k+3)*600)%600),5,0,7);X.fill()}X.restore();
 coatRack3(300,1460,.9);coatRack3(800,1460,.9,['#f9a825','#00897b','#5e35b1','#ef6c00','#1e88e5']);
 X.fillStyle='#5a2a0a';X.fillRect(-500,1460,2100,800);
 const tw=C((r-1.0)/1.0),fl=Math.floor(tw*4)%2===1;
 KID(560,1740,1.0,t,{puffer:'#2e7d32',tight:0,sleeve:.95,beanie:'#ffd23f',flip:fl,armL:lerp(20,120,eo(tw)),armR:lerp(20,120,eo(tw)),mouth:'grin',eyes:'happy',brow:'up'});
 if(r>1.4)sparkles(560,950,C((r-1.4)/1.2),14,320);
 notif(338,C(r/.3)*(1-C((r-1.1)/.3)),'Memopai','⏰ 10:00 · New winter coat for Leo 🧥');
 kinWord('SIZE UP ✅',540,470,110,r-1.45,{col:'#08301a',bg:'#25d366',rot:-3});});
// F: end card + CTA
sh(T('cta')-.12,(t,r)=>endcard(t,r));
// COVER (t=1000): the kid in the shrunk coat, low in frame (cover lines sit at y 440..800)
sh(1000,(t,r)=>{porch3(2);cam(560,820,.9,2,0);KID(500,1760,.95,2,{armL:108,armR:108,bendL:-20,bendR:-20,mouth:'open',brow:'worried'});breath(550,1010,2.2,0);});
