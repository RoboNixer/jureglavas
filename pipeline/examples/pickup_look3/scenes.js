const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1},KID={hair:'bun',hairc:'#7a4a2a',lashes:1},JAN={cap:'#2f5d8a',overalls:'#3f6fb0',hair:'spike',hairc:'#8a8f98'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function desk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;X.fillStyle='#000';X.beginPath();X.ellipse(0,350,460,30,0,0,7);X.fill();X.globalAlpha=1;
 rr(-460,0,920,60,16,'#c99a6b',7);rr(-440,60,880,270,10,'#b5855a',7);rr(-400,100,300,90,8,'#a6774f',5);circ(-250,145,10,'#e8d2a8',0);
 if(o.laptop){X.save();X.translate(o.lx||160,0);path(()=>{X.moveTo(-170,-6);X.lineTo(170,-6);X.lineTo(200,8);X.lineTo(-200,8);X.closePath()},'#9aa3ad',6);
  rr(-150,-230,300,215,14,'#3b4250',7);rr(-134,-216,268,188,8,'#8fd0ff',0);rr(-110,-190,160,18,6,'#fff',0);rr(-110,-160,200,14,6,'#d8ecff',0);rr(-110,-130,180,14,6,'#d8ecff',0);X.restore()}
 if(o.mug){rr(-340,-90,80,90,14,o.mug===2?'#4a8fe0':'#e86a5a',6);path(()=>{X.arc(-252,-46,26,-1.4,1.4)},null,8,o.mug===2?'#4a8fe0':'#e86a5a');if(o.steam){X.save();X.globalAlpha=.5;for(let k=0;k<2;k++)line([[-320+k*30,-110],[-330+k*30,-150],[-315+k*30,-190]],6,'#ffffff');X.restore()}}
 X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:o.wall||'#dfe7ee',wall2:o.wall2||'#c9d5df',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o));if(o.clock)wclock(o.cx||250,470,.85,o.clock[0],o.clock[1])}
function living(t){proom(t,{night:1,lamp:1,win:780,frame:[250,520],plant:1,wall:'#e9d6bd',wall2:'#d6bd9c'})}
// two people sitting on the steps sharing a sandwich (steps top surfaces: 1220 / 1304 / 1388)
function sitO(o){return Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o)}
function janitor(x,top,s,o){broom(x+200*s,top-120*s,s*.9,.25);sm(x,top+340*s,s,sitO(Object.assign({},JAN,o)))}
function kidSit(x,top,s,o){kidbag(x,top+340*s,s,'#ffb02e',o.flip?-1:1);sm(x,top+340*s,s,sitO(Object.assign({},KID,o)))}
// A: 16:10 the school steps, your kid and the janitor share one sandwich
function shotA(t,r,lab){cam(540,1020,lerp(1.08,1.14,C(r/4)),t,.12);school(t,{h:4,m:10,warm:1});
 const chew=Math.sin(t*9)>0;
 janitor(680,1304,1.0,{t,flip:1,eyes:'open',lid:.3,brow:'flat',mouth:chew?'flat':'smile',look:[-.6,.1],armR:120,bendR:-95,holdR:(x,y)=>sandwich(x,y-20,.9,{bite:1,rot:.3}),armL:25,bendL:15});
 kidSit(400,1304,.72,{t,eyes:'open',lid:.15,brow:'flat',mouth:chew?'flat':'smile',look:[.6,-.3],armL:125,bendL:-100,holdL:(x,y)=>sandwich(x,y-20,.75,{bite:1,rot:-.3}),armR:25,bendR:10});
 if(r>2.3&&r<3.9){txt('🥪',540,700-C((r-2.3)/1.6)*40,70,'#111',0,'400 ')}
 if(lab)label3('Your kid, 16:10 🥪',C(r/.2))}
sh(0,(t,r)=>shotA(t,r,1));
// B: split screen 16:11, partner at her desk | you at yours, both on the phone
const BR=T('s1')-T('f1');
sh(T('f1'),(t,r)=>{split2(t,
 (t)=>{office(t,{clock:[4,11],cx:300});desk(540,1450,1.0,{laptop:1,lx:200,mug:1});
  sm(470,1990,1.2,Object.assign({t,eyes:'wide',brow:'worried',mouth:r<BR-.1?'open':'o',talk:r<BR-.2?t:null,look:[.5,-.1],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y+10,.2,1),armL:150,bendL:-160},HER))},
 (t)=>{office(t,{clock:[4,11],cx:820,wall:'#e7e2ef',wall2:'#d2cbe0'});desk(560,1450,1.0,{laptop:1,lx:-160,mug:2});
  sm(620,1990,1.2,Object.assign({t,flip:1,eyes:'wide',brow:'worried',mouth:r>BR?'grin':'o',sweat:1,look:[-.5,-.1],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y+10,-.2,1),armL:30,bendL:20},YOU))},
 {camA:[520,1050,1.0],camB:[560,1050,1.0],p:C(r/.3)});
 label3(r<BR?'Your partner, 16:11 😳':'You, 16:11 😬',C((r<BR?r:r-BR)/.2))});
// C: that evening on the sofa: Memopai hops onto the sofa arm, you talk to your phone, 🎒 flies in
sh(T('s2'),(t,r)=>{cam(560,1050,1.06,t,.15);living(t);glow(250,700,600,'255,210,140',.35);
 psofa(460,1900,1.3,'#5a7fb5','#4a6a9a');
 const mp=C((r-.1)/.5);if(mp>0){memo(945,1590,.55,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(945,1360,mp,8,160)}
 const y=2107,s=1.22,hy=HD(y,s);
 sm(400,y,s,Object.assign({t,flip:1,legL:82,kneeL:82,legR:-82,kneeR:-82,eyes:'open',brow:'up',mouth:'open',talk:t,look:[.3,.4],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,.1,1),armR:40,bendR:-30},YOU));
 const fl=C((r-.8)/.9);if(fl<1){const px=lerp(620,400,eo(fl)),py=lerp(hy-300,hy+190,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'🎒 pickup · Wed',1-fl*.6)}else sparkles(420,hy+170,C((r-1.7)/.5),8,120,'#7cf0a0');
 label3(r<.4?'You, that night 🛋️':'Memopai 😎',C((r<.4?r:r-.4)/.2))});
// D: your chat with Memopai
const D0=T('s2')+2.6;
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const acc=T('s3')-D0+.6;
 phoneUI(540,900,1.28,r,{typing:r>1.0&&r<1.35,list:[{a:.0,me:1,text:'👤 Babe 💕 (contact)',time:'21:04'},{a:.25,me:1,voice:1,pl:C((r-.3)/.8),dur:'0:05',time:'21:04'},{a:1.35,me:0,text:"✅ Got it! Every Wed 15:00 · to you + Babe 💕 · 🎒 Pickup 15:30: you've got it 🙋",time:'21:04'},{a:acc,date:'Babe 💕 tapped Accept ✓ (once, no app)'}]});
 if(r>acc&&r<acc+.8)glow(540,700,400,'130,240,160',.3*(1-C((r-acc)/.8)))});
// E: next Wednesday 15:00: both phones buzz; she reads hers and smiles
const E0=T('s3')+2.6,BZ=T('s3')+3.55-E0,F2=T('f2')-E0;
sh(E0,(t,r)=>{const on=r>BZ;split2(t,
 (t)=>{office(t,{clock:[3,0],cx:300});desk(540,1450,1.0,{laptop:1,lx:200,mug:1});
  sm(470,1990,1.2,Object.assign({t,eyes:r>F2?'happy':(on?'open':'open'),brow:'up',mouth:r>F2?'grin':(on?'smile':'flat'),talk:r>F2&&r<F2+1.2?t:null,blush:r>F2,look:on?[.3,.5]:[.5,0],armR:on?120:30,bendR:on?-120:20,holdR:(x,y)=>phoneH(x,y+10,.15,on),armL:30,bendL:20},HER));
  if(on){const sh2=Math.sin(t*60)*4;X.save();X.globalAlpha=.6;for(let k=1;k<3;k++)circ(330+sh2,1080,40+k*22,null,5);X.restore()}},
 (t)=>{office(t,{clock:[3,0],cx:820,wall:'#e7e2ef',wall2:'#d2cbe0'});desk(560,1450,1.0,{laptop:1,lx:-160,mug:2});
  sm(620,1990,1.2,Object.assign({t,flip:1,eyes:on?'happy':'open',brow:'up',mouth:on?'grin':'flat',look:on?[-.3,.5]:[-.5,0],armR:on?120:30,bendR:on?-120:20,holdR:(x,y)=>phoneH(x,y+10,-.15,on),armL:30,bendL:20},YOU));
  if(on){const sh2=Math.sin(t*60)*4;X.save();X.globalAlpha=.6;for(let k=1;k<3;k++)circ(760+sh2,1080,40+k*22,null,5);X.restore()}},
 {camA:[520,1050,1.0],camB:[560,1050,1.0],p:C(r/.3)});
 if(on&&r<F2-.1)notif(150,C((r-BZ)/.3),'Memopai',"⏰ Pickup 15:30 🎒 · you've got it 🙋");
 if(!on||r>F2-.1)label3(r<F2-.1?'Next Wednesday, 15:00 📲':'Your partner 💕',C((r<F2-.1?r:r-F2+.1)/.2))});
// F: 15:30 the same steps: you arrive, your kid jumps into your arms; the janitor eats alone
sh(T('p1'),(t,r)=>{cam(540,1040,lerp(1.05,1.11,C(r/4.4)),t,.12);school(t,{h:3,m:30});psun(900,300,70,t);
 const jq=C((r-.2)/.7);
 janitor(820,1220,.72,{t,flip:1,eyes:'open',lid:.35,brow:'sad',mouth:'wavy',look:[-.7,.2],armR:120,bendR:-95,holdR:(x,y)=>sandwich(x,y-16,.7,{rot:.3}),armL:r>2.4?140+Math.sin(t*7)*12:25,bendL:r>2.4?-30:15});
 const kx=lerp(700,560,eo(jq)),ky=1880-Math.sin(jq*Math.PI)*120-jq*90;
 sm(400,1990,1.25,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.6,-.2],armR:120,bendR:-60,armL:20,bendL:15},YOU));
 kidbag(kx,ky,.75,'#ffb02e',-1);sm(kx,ky,.75,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'open',look:[-.6,-.3],armL:150,bendL:-20,armR:150,bendR:20,legL:jq<1?30:0,legR:jq<1?40:0},KID));
 if(jq>=1){txt('❤️',480,820+Math.sin(t*4)*10,70,'#111',0,'400 ');sparkles(480,900,C((r-.9)/1.5),12,300)}
 label3(r<2.0?'Wednesday, 15:30 🎒':'You, sorted 😌',C((r<2.0?r:r-2.0)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,2.6,0));
