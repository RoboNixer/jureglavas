const YOU={hair:'curl'};
const NB={pj:'#b5835a',limb:'#6b5040'}; // neighbour: cardigan-ish knit top
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
let HL=null,HR=null;function carry(o,s,sc){HL=null;HR=null;const dr=()=>{if(HL&&HR)parcel3((HL[0]+HR[0])/2-15,Math.max(HL[1],HR[1])+80,sc,{})};return Object.assign(o,{holdL:(x,y)=>{HL=[x,y];dr()},holdR:(x,y)=>{HR=[x,y];dr()}})}
function nbr(x,y,s,o){dad(x,y,s,Object.assign({},NB,o))}
// your front door seen from inside; o.eve = dusk outside
function opendoor(t,o={}){proom(t,{win:null,frame:null,plant:150,lamp:0,wall:o.wall||'#f4e3c9',wall2:o.wall2||'#e8cda8',floor:'#b98a5e',floor2:'#94673f'});
 const x0=540,x1=1040,y0=300,y1=1780;rr(x0-30,y0-30,x1-x0+60,y1-y0+40,10,'#fff8ef',8);
 X.save();X.beginPath();X.rect(x0,y0,x1-x0,y1-y0);X.clip();const g=X.createLinearGradient(0,y0,0,y1);
 if(o.eve){g.addColorStop(0,'#3b467f');g.addColorStop(.4,'#c47a8a');g.addColorStop(.55,'#f3b07a');g.addColorStop(.56,'#5f7f52');g.addColorStop(1,'#4a6a40')}else{g.addColorStop(0,'#8fd0ff');g.addColorStop(.55,'#d8f1ff');g.addColorStop(.56,'#8cc96a');g.addColorStop(1,'#6aa84f')}
 X.fillStyle=g;X.fillRect(x0,y0,x1-x0,y1-y0);
 pblur(3,()=>{if(!o.eve)pcloud(640,520,.7,'#fff','#e3eefa');for(const[bx,bs]of[[560,1.1],[960,1.3]])ell(bx,1120,120*bs,80*bs,o.eve?'#3f6a3a':'#4f9a45',6);path(()=>{X.moveTo(700,1130);X.lineTo(820,1130);X.lineTo(1000,1780);X.lineTo(520,1780);X.closePath()},o.eve?'#b7a58a':'#d9c7a6',0)});
 if(o.eve){glow(760,1000,420,'255,200,140',.35)}else glow(760,600,420,'255,250,210',.45);
 if(o.inside)o.inside();X.restore();
 path(()=>{X.moveTo(x0,y0);X.lineTo(x0+130,y0+70);X.lineTo(x0+130,y1+30);X.lineTo(x0,y1)},'#3f7f9e',8);circ(x0+105,1060,16,'#e8c15a',5);
 rr(x0-60,y1-10,x1-x0+120,40,8,'#8a6a4a',6);if(o.eve)glow(300,700,600,'255,210,150',.3)}
function living(t,night){proom(t,{night:night?1:0,lamp:night?150:0,win:800,frame:[330,560],plant:night?0:150,wall:'#e9d6bd',wall2:'#d6bd9c'})}
// A: 0.0 your door, evening: the neighbour asks
function doorA(t,r,lab){cam(560,1120,lerp(1.06,1.12,C(r/3.4)),t,.15);opendoor(t,{eve:1,inside:()=>nbr(770,1760,1.05,{t,eyes:'open',brow:'worried',mouth:'smile',talk:lab&&r<3.0?t:null,look:[-.6,0],armR:25,bendR:30,armL:150,bendL:-150})});
 const snap=r>2.2;
 sm(270,1880,1.28,Object.assign({t,eyes:snap?'wide':'open',brow:snap?'worried':'up',mouth:snap?'o':'smile',sweat:snap,look:[.65,-.05],tilt:-3,armL:25,bendL:20,armR:25,bendR:20},YOU));
 if(lab)label3('Your neighbour 🙂',C(r/.2))}
sh(0,(t,r)=>doorA(t,r,1));
// B: whip-pan into the living room: his parcel IS your coffee table
sh(T('h1')-.2,(t,r)=>{const w=eo(C(r/.32));cam(lerp(1400,560,w),1120,lerp(1.02,1.1,C(r/3)),t,.12);living(t,1);
 psofa(560,1330,1.05,'#5a7fb5','#4a6a9a');
 parcel3(450,1420,1.15,{t,items:1,ring:1});
 if(r>.9){const p=C((r-.9)/.4);X.save();X.globalAlpha=.6*p*(.6+.4*Math.sin(t*6));X.strokeStyle='#ffd23f';X.lineWidth=8;X.setLineDash([22,16]);X.beginPath();X.ellipse(480,1260,330,230,0,0,7);X.stroke();X.restore()}
 sm(785,1760,1.0,Object.assign({t,flip:1,eyes:'open',lid:.15,brow:'worried',mouth:'wavy',sweat:1,blush:1,look:[-.3,.15],armL:20,bendL:30,armR:40,bendR:-120},YOU));
 label3('His parcel 📦',C((r-.2)/.2))});
// C: two weeks ago, daylight: you carry it in smiling... then a mug lands on it and the plan floats away
sh(T('s1'),(t,r)=>{const wk=1.35,q=C((r-wk-.5)/1.1);cam(560,1110,lerp(1.04,1.1,C(r/2.8)),t,.15);living(t,0);glow(800,600,600,'255,236,170',.35);
 psofa(560,1330,1.05,'#5a7fb5','#4a6a9a');
 const s=1.15,y=1800,hy=y-845*s;
 if(r<wk){HL=null;sm(400,y,s,carry(Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[.3,0],armL:-60,bendL:60,armR:60,bendR:-60},YOU),s,.6));pill(720,hy-40,'📦 tonight',C(r/.3))}
 else{parcel3(660,1440,1.1,{t,mugDrop:(r-wk)/.35,squash:r>wk+.35&&r<wk+.55?1:0});
  sm(340,y,s,Object.assign({t,eyes:'open',lid:.2,brow:'flat',mouth:'smile',look:[.6,.4],armR:60,bendR:-40,armL:20,bendL:20},YOU));
  pill(lerp(560,860,eo(q)),lerp(hy-40,hy-200,q),'📦 tonight',(1-q)*.95,Math.sin(t*3)*.12*q)}
 X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(255,230,190,.25)';X.fillRect(-2000,-2000,6000,6000);X.restore();
 label3('You, two weeks ago 🙃',C(r/.2))});
// D: NEXT TIME: box in your arms at the door, voice note to Memopai; mascot hops in, the thought flies into the phone
sh(T('s2'),(t,r)=>{cam(560,1110,1.06,t,.15);opendoor(t,{});
 const mp=C((r-.1)/.5);if(mp>0){memo(800,1560,.6,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(800,1310,mp,8,160)}
 const s=1.2,y=1860,hy=y-845*s;
 sm(380,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:'open',talk:t,look:[.2,.4],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,.1,1),armR:60,bendR:-60,holdR:(x,yy)=>parcel3(x-40,yy+90,.6,{})},YOU));
 const fl=C((r-.6)/.8);if(fl<1){const px=lerp(640,350,eo(fl)),py=lerp(hy-60,hy+170,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'📦 next door',1-fl*.6)}else sparkles(340,hy+150,C((r-1.4)/.5),8,120,'#7cf0a0');
 label3(r<.45?'Next time 🎤':'Memopai 😎',C((r<.45?r:r-.45)/.2))});
// E: the chat
const E0=T('s2')+2.4;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a4a62');g.addColorStop(1,'#e9b98a');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const at=T('s3')+.55-E0;
 phoneUI(540,930,1.16,r,{typing:r>1.0&&r<1.3,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/1.0),dur:'0:04',time:'14:12'},{a:1.3,me:0,text:'Got it ✅ Today 19:00 · Take the parcel next door 📦',time:'14:12'},{a:at-.5,date:'TODAY 19:00'},{a:at,me:0,text:'⏰ Parcel next door 📦 Now\'s a good time!',time:'19:00'}]});
 if(r>at&&r<at+.9)glow(540,1150,500,'130,240,160',.35*(1-C((r-at)/.9)))});
// F: 19:02, his front door: he lights up
sh(T('b2')-.15,(t,r)=>{cam(620,1080,lerp(1.05,1.1,C(r/2.2)),t,.1);housefront(t,{door:1});
 X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(120,110,190,.45)';X.fillRect(-2000,-2000,6000,6000);X.restore();glow(650,900,420,'255,214,150',.55);
 nbr(670,1310,.78,{t,eyes:'happy',brow:'up',mouth:r<1.3?'open':'grin',talk:r<1.3?t:null,look:[-.5,.2],armL:60,bendL:-60,armR:60,bendR:-60});
 HL=null;sm(400,1900,1.2,carry(Object.assign({t,flip:0,eyes:'happy',brow:'up',mouth:'grin',look:[.6,-.2],armL:-50,bendL:40,armR:70,bendR:-40},YOU),1.2,.72));
 if(r>.6)sparkles(560,1000,C((r-.6)/1),10,240);
 label3('Your neighbour 🥹',C(r/.2))});
// G: same living room, mug on an actual table, phone face down: sorted
sh(T('p1'),(t,r)=>{cam(560,1330,lerp(1.04,1.09,C(r/5)),t,.12);living(t,1);glow(250,900,700,'255,210,150',.4);
 psofa(460,1900,1.3,'#5a7fb5','#4a6a9a');
 const y=2107,s=1.22;
 sm(400,y,s,Object.assign({t,flip:0,legL:82,kneeL:82,legR:-82,kneeR:-82,eyes:'happy',brow:'up',mouth:'smile',blush:1,look:[.3,.2],armL:150,bendL:-160,armR:30,bendR:20},YOU));
 ctable(780,1820,.9);pmug(730,1680,1);rr(800,1668,110,24,8,'#1b1b1f',4);
 if(r>.5)sparkles(560,800,C((r-.5)/1.4),12,320);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only: the reveal frame
sh(1000,(t,r)=>{cam(560,1120,1.08,t,.12);living(t,1);psofa(560,1330,1.05,'#5a7fb5','#4a6a9a');parcel3(450,1420,1.15,{t,items:1,ring:1});
 sm(785,1760,1.0,Object.assign({t,flip:1,eyes:'open',lid:.15,brow:'worried',mouth:'wavy',sweat:1,blush:1,look:[-.3,.15],armL:20,bendL:30,armR:40,bendR:-120},YOU))});
