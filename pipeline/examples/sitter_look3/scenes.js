const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1},KID={hair:'spike',hairc:'#7a4a2a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function lounge(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));glow(160,760,560,'255,214,150',.4)}
function ctable(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,150,360,30,'#000',0);X.globalAlpha=1;rr(-340,-20,680,44,14,'#8a6a4a',7);rr(-300,24,30,130,6,'#6f543a',5);rr(270,24,30,130,6,'#6f543a',5);X.restore()}
// A: date night on the sofa, dressed up, fish fingers with your kid. Partner speaks.
function sofaHook(t,r,lab){const fr=T('f1')-0.0,inF=r>fr&&r<fr+1.6;cam(lerp(540,600,C((r-fr)/1)),1080,lerp(1.06,1.13,C(r/3.9)),t,.15);lounge(t);
 sm(250,1930,1.05,Object.assign({t,bow:'#151515',eyes:r<fr?'open':'open',brow:'worried',mouth:r<fr?'wavy':'o',sweat:1,look:r<fr?[.2,-.1]:[.7,0],armR:60,bendR:40,armL:20,bendL:20},YOU));
 sm(560,1900,.72,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[0,0],armR:120+Math.sin(t*7)*12,bendR:-50,holdR:(x,y)=>ffinger(x,y-10,1.1,-.6),armL:30,bendL:20},KID));
 sm(840,1930,1.05,Object.assign({t,flip:1,dress:'#c0392b',eyes:'open',lid:.4,brow:'flat',mouth:inF?'open':'flat',talk:inF?t:null,look:[-.7,0],armR:r>fr-.3?lerp(20,120,C((r-fr+.3)/.3)):20,bendR:r>fr-.3?-60:20,holdR:r>fr-.3?(x,y)=>ffinger(x,y-12,1.2,-1.2):null,armL:20,bendL:20},HER));
 psofa(540,1880,1.25,'#6a5a9a','#544684');
 ctable(540,1700,1);ffplate(540,1690,1.05,3);
 if(lab)label3(r<fr?'You, date night 🙃':'Your date 😐',C((r<fr?r:r-fr)/.2))}
sh(0,(t,r)=>sofaHook(t,r,1));
// C: Tuesday in the shower: foam, eyes snap, babysitter chip; then the mind wanders off and it drains away
sh(T('s1'),(t,r)=>{const nb=T('s1b')-T('s1'),gone=T('s1b')+1.9-T('s1'),dim=C((r-gone)/.5);cam(540,1000,lerp(1.05,1.12,C(r/5)),t,.15);bathroom(t,{water:1,steam:1,glass:900,dim,sx:180,sy:200});
 const snap=r>.55;
 sm(520,1980,1.3,Object.assign({t,foam:1,eyes:snap?'wide':'closed',brow:snap?'up':'flat',mouth:snap?'o':'smile',look:[.4,-.6],armL:160,bendL:-40,armR:snap?150:160,bendR:snap?-70:40},YOU));
 const hy=1980-767*1.3;
 if(r<nb){chip(800,hy-60,'🧸',C((r-.6)/.25)*1.0,Math.sin(t*3)*.12)}
 else if(r<gone){const a=(r-nb)*2.2;chip(520+Math.cos(a)*300,hy-40+Math.sin(a)*70,'🧸',.9,Math.sin(t*3)*.2)}
 else{const q=C((r-gone)/1.1);X.globalAlpha=1-q;chip(lerp(820,1000,q),lerp(hy-40,hy-420,q),'🧸',.9-q*.4);X.globalAlpha=1}
 rewind(1-C(r/.5),t,'◀◀ TUESDAY');
 label3(r<nb?'You, Tuesday 07:10 🚿':'Your brain 🫠',C((r<nb?r:r-nb)/.2))});
// D: back to that shower: towel, dripping, Memopai hops on the sink; the chip flies into the phone
const DE=T('s2')+2.65;
sh(T('s2'),(t,r)=>{cam(540,1000,1.06,t,.15);bathroom(t,{water:.35,steam:.6,glass:900,sx:180,sy:200});
 sink(860,1460,1);
 sm(420,1980,1.3,Object.assign({t,towel:'#5aa9e6',eyes:'open',brow:'up',mouth:r>1.7?'smile':'open',talk:r>.9&&r<1.7?t:null,look:[.5,.6],armR:115,bendR:-115,armL:20,bendL:15,holdR:(x,y)=>phoneH(x,y+10,.1,r>1.2)},YOU));
 drops(420,960,t,1,260);
 const mp=C((r-.45)/.55);if(mp>0){memo(860,1450,.78,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(860,1150,mp,8,180)}
 const hy=1980-767*1.3,fl=C((r-1.0)/.9);
 if(r<1.0)chip(650,hy-120,'🧸',.9,Math.sin(t*3)*.1);else if(fl<1){const px=lerp(650,560,eo(fl)),py=lerp(hy-120,1420,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🧸',.9-fl*.45)}else sparkles(560,1420,C((r-1.9)/.5),8,120,'#7cf0a0');
 rewind(1-C(r/.55),t,'↺ THIS TIME');
 label3(r>1.9?'Memopai 😎':'You, Tuesday 07:11 🚿',C((r>1.9?r-1.9:r-.5)/.2))});
// E: the chat: voice note + reply, Wednesday 09:00 reminder; then the babysitter chat: booked
sh(DE,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const sw=T('s4')+2.5-DE;
 if(r<sw)phoneUI(540,900,1.28,r,{typing:r>.95&&r<1.25,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.9),dur:'0:03',time:'07:11'},{a:1.25,me:0,text:'Got it ✅ Wed 09:00 · Book the babysitter for Saturday 🧸',time:'07:11'},{a:T('s4')-DE+.15,me:0,text:'⏰ Book the babysitter for Saturday 🧸',time:'Wed 09:00'}]});
 else{const q=r-sw;phoneUI(540,900,1.28,q,{name:'Sara 🧸',avf:(x,y,rr2)=>{circ(x,y,rr2,'#ffe0a8',0);txt('🧸',x,y+3,rr2*1.1,'#111',0,'400 ');X.textAlign='left'},sub:'online',list:[{a:-1,me:1,text:'Hi Sara! Saturday 7pm? 🙏',time:'09:01'},{a:.35,me:0,text:"I'm in! 😊",time:'09:02'}]})}
 if(r>=T('s4')-DE&&r<sw){/* buzz shake handled by cues */}});
// G: restaurant, table for two, candles; partner: "Look at us"; then You, sorted
sh(T('f2'),(t,r)=>{const p1=r>T('p1')-T('f2');cam(540,1040,lerp(1.04,1.1,C(r/5)),t,.15);
 proom(t,{win:null,frame:null,plant:180,lamp:0,wall:'#6a4a5a',wall2:'#4a3242',floor:'#5a3d2e',floor2:'#3e2a20'});strlights(t,220,4,80);glow(540,1250,600,'255,200,120',.35);
 sm(270,1900,1.12,Object.assign({t,bow:'#151515',eyes:p1?'happy':'open',brow:'up',mouth:p1?'grin':'smile',blush:p1,look:[.6,0],armR:p1?150:40,bendR:p1?-150:30,holdR:p1?(x,y)=>champ(x,y+30,1.15):null,armL:20,bendL:20},YOU));
 sm(810,1900,1.12,Object.assign({t,flip:1,dress:'#c0392b',eyes:'happy',brow:'up',mouth:p1?'grin':'open',talk:!p1&&r<1.9?t:null,look:[-.6,0],armR:p1?150:120,bendR:p1?-150:-40,holdR:p1?(x,y)=>champ(x,y+30,1.15):null,armL:20,bendL:20},HER));
 rtable(540,1860,1.3,{flowers:1});
 if(p1)sparkles(540,1000,C((r-(T('p1')-T('f2')))/1.2),12,300);
 label3(p1?'You, sorted 😌':'Your date 🥂',C((p1?r-(T('p1')-T('f2')):r)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>sofaHook(t,1.0,0));
