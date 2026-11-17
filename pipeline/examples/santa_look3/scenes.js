const YOU={hair:'curl'},COW={hair:'bun',hairc:'#7a3fb0',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
function scr(f){X.save();X.setTransform(1,0,0,1,0,0);f();X.restore()}
// office; party:1 adds string lights, tinsel and a little tree
function officeP(t,o={}){proom(t,{win:820,night:o.party?1:0,frame:null,plant:o.party?0:1,lamp:0,wall:o.party?'#e9dccb':'#e3e9ef',wall2:o.party?'#d6c4ae':'#cad3dc',floor:'#9aa6b4',floor2:'#7d8896'});
 if(o.party){strlights(t,230,4,80);X.strokeStyle='#d8b23a';X.lineWidth=10;X.setLineDash([4,10]);X.beginPath();X.moveTo(-60,420);X.quadraticCurveTo(540,560,1140,420);X.stroke();X.setLineDash([]);
  pblur(2,()=>xtree(140,1380,.9,t));bokeh(t,'255,214,150',10,150,800);glow(540,500,700,'255,200,140',.25)}
 else{rr(80,380,480,330,14,'#fff',8);line([[130,640],[230,590],[330,610],[430,510],[520,470]],10,'#4a8fe0')}}
function desk2(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-600,0,1200,56,14,'#c99a6b',7);rr(-580,56,1160,400,0,'#b5855a',0);X.restore()}
// A: the reveal at the office party (also the cover)
function shotA(t,r,cov){cam(560,1040,lerp(1.04,1.1,C(r/3.8)),t,.14);officeP(t,{party:1});
 const up=cov?1:C((r-.45)/.4);
 // coworker unwrapping, then holding the tree up
 sm(330,1800,1.12,Object.assign({t,eyes:up>.5?'open':'happy',lid:up>.5?.35:0,brow:up>.5?'flat':'up',mouth:up>.5?'flat':'smile',look:up>.5?[.3,-.7]:[.2,.6],armR:lerp(40,150,up),bendR:lerp(60,-150,up),armL:40,bendL:50,
  holdR:(x,y)=>fresh(x,y-14,lerp(1.2,2.1,up),{t,price:'€2.49',string:30})},COW));
 if(up<1)gift(330,1640,.9,{col:'#e2353a',open:1});
 sm(770,1820,1.18,Object.assign({t,flip:1,santa:1,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[-.6,-.4],armL:25,armR:25,tilt:-4},YOU));
 if(up>0.95&&!cov)sparkles(470,1000,C((r-1.4)/.6),6,120,'#7cf0a0');
 if(!cov)label3('You at Secret Santa 😬',C(r/.2))}
sh(0,(t,r)=>shotA(t,r));
// B: close on the coworker: "A little tree... for my car? I don't have a car."
sh(T('f1')-.05,(t,r)=>{cam(520,980,lerp(1.1,1.16,C(r/2.8)),t,.14);officeP(t,{party:1});
 sm(430,1800,1.3,Object.assign({t,eyes:'open',lid:.4,brow:r>1.4?'up':'flat',mouth:'flat',talk:r<2.6?t:null,look:r>1.4?[.8,-.1]:[.4,-.7],armR:150,bendR:-150,armL:30,bendL:30,holdR:(x,y)=>fresh(x,y-14,2.3,{t,price:'€2.49',string:30})},COW));
 pblur(1,()=>sm(930,1860,.85,Object.assign({t,flip:1,santa:1,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[-.7,-.2]},YOU)));
 label3('Your coworker 🎄',C(r/.2))});
// C: REWIND 3 weeks: you draw her name; "I'll get something nice." Memopai hops onto the desk
sh(T('s1')-.05,(t,r)=>{cam(560,1020,1.05,t,.14);officeP(t);
 const smug=r>1.9;
 sm(520,1840,1.25,Object.assign({t,eyes:smug?'happy':'open',brow:'up',mouth:smug?'grin':'o',look:[.4,-.4],armR:150,bendR:-150,armL:30,bendL:30,
  holdR:(x,y)=>{X.save();X.translate(x,y-30);X.rotate(.15);rr(-80,-45,160,90,8,'#fff',5);txt('🎄 Her',0,2,40,'#111',0,'700 ');X.restore()}},YOU));
 desk2(540,1640,1);santabowl(260,1640,.9);
 const hy=1840-767*1.25;chip(820,hy-150+Math.sin(t*3)*8,'🎁',eo(C((r-1.0)/.3)));
 const mp=C((r-.75)/.6);if(mp>0){memo(870,1630,.95,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(870,1300,mp,8,180)}
 rewind(1-C(r/.5),t,'◀◀ 3 WEEKS AGO');
 if(r>.45)label3('You, 3 weeks ago 🎅',C((r-.45)/.2))});
// D: right there: voice note; the 🎁 flies into the phone
sh(T('s2')-.05,(t,r)=>{cam(560,1020,1.07,t,.14);officeP(t);
 sm(520,1840,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:r>.4?'open':'smile',talk:r>.4?t:null,look:[.5,.3],armR:150,bendR:-160,armL:30,bendL:30,holdR:(x,y)=>phoneH(x,y,.3,1)},YOU));
 desk2(540,1640,1);memo(870,1630,.95,{t,glow:1});
 const hy=1840-767*1.25,fl=C((r-.3)/1.0);if(fl<1){const px=lerp(820,640,eo(fl)),py=lerp(hy-150,hy+250,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🎁',1-fl*.5)}else sparkles(640,hy+250,C((r-1.3)/.5),8,120,'#7cf0a0');
 label3('Memopai 😎',C(r/.2))});
// E: the WhatsApp chat with Memopai
sh(T('s2')+2.55,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r+.6,{typing:r>.45&&r<.7,list:[{a:.05,me:1,voice:1,pl:C((r+.5)/1.4),dur:'0:04',time:'11:20'},{a:1.3,me:0,text:'Got it ✅ Thu 10 Dec, 18:00 · Secret Santa gift 🎁 She loves tea 🍵',time:'11:20'}]})});
// F: December 10th, 18:00, a shop: buzz, you'd forgotten, you grab the tea box
function shop(t){proom(t,{win:null,frame:null,plant:0,lamp:0,wall:'#f3e6d2',wall2:'#e6d2b6',floor:'#c9b08e',floor2:'#a88f6e'});strlights(t,200,4,60);
 for(let k=0;k<3;k++){const y=560+k*260;rr(-40,y,1160,26,6,'#8a6142',6);for(let j=0;j<8;j++){const c=['#e2533d','#4a8fe0','#f2a65a','#2f6d5a','#b07ae0'][(j+k)%5];rr(20+j*135,y-120,100,120,10,c,5)}}}
sh(T('s3')-.05,(t,r)=>{cam(540,1020,lerp(1.04,1.1,C(r/2.6)),t,.14);shop(t);
 const bz=r>.2,grab=r>1.3;
 sm(480,1840,1.25,Object.assign({t,eyes:bz&&r<.9?'wide':(grab?'happy':'open'),brow:'up',mouth:grab?'grin':'o',look:grab?[.6,0]:[.5,.5],armR:grab?100:150,bendR:grab?-20:-160,holdR:grab?((x,y)=>teabox(x+60,y+100,1.1)):((x,y)=>phoneH(x,y,.3,bz)),armL:30,bendL:30},YOU));
 const n=r<1.3?C((r-.15)/.3):Math.max(0,1-(r-1.3)/.25);if(n>0)scr(()=>notif(150,n,'Memopai','Secret Santa gift 🎁 She loves tea 🍵'));
 if(grab)sparkles(620,1250,C((r-1.3)/.7),10,200);
 if(n<=0)label3('You, 10 Dec 18:00 🛍️',C((r-1.3)/.2))});
// G: same party: "Wait... how did you know I love tea?!" -> "Same party. Better Santa."
sh(T('f2')-.05,(t,r)=>{const p1=r>T('p1')-T('f2');cam(560,1040,lerp(1.04,1.1,C(r/3.8)),t,.14);officeP(t,{party:1});
 sm(330,1800,1.12,Object.assign({t,eyes:'happy',brow:'up',mouth:p1?'grin':'open',talk:!p1&&r<1.7?t:null,blush:1,look:[.5,0],armR:150,bendR:-150,armL:150,bendL:150,holdR:(x,y)=>teabox(x+70,y+110,1.05)},COW));
 sm(770,1820,1.18,Object.assign({t,flip:1,santa:1,eyes:p1?'happy':'open',brow:'up',mouth:p1?'grin':'smile',blush:p1,look:[-.6,0],armL:p1?150:25,bendL:p1?-30:20,armR:25},YOU));
 chip(330,620,'❤️',eo(C((r-.3)/.3))*.9,Math.sin(t*3)*.1);
 if(p1)confetti(C((r-(T('p1')-T('f2')))/1.6),50);
 label3(p1?'You, sorted 😌':'Your coworker 🥰',C((p1?r-(T('p1')-T('f2')):r)/.2))});
// H: the little tree, swinging from YOUR car mirror; driving home relaxed
function carIn(t){X.fillStyle='#4d5466';X.fillRect(-500,-500,2100,2900);
 const WY=180,WH=720;X.save();X.beginPath();X.roundRect?X.roundRect(70,WY,940,WH,90):X.rect(70,WY,940,WH);X.clip();
 const g=X.createLinearGradient(0,WY,0,WY+WH);g.addColorStop(0,'#f7a46b');g.addColorStop(1,'#ffe0b0');X.fillStyle=g;X.fillRect(0,WY,1080,WH);psun(780,640,70,t);
 pblur(5,()=>{hills(760,'#8a7aa0',t,40,60,2);hills(840,'#6b6a8a',t,80,50,5)});X.fillStyle='#5a5f66';X.beginPath();X.moveTo(380,WY+WH);X.lineTo(530,840);X.lineTo(550,840);X.lineTo(700,WY+WH);X.closePath();X.fill();
 X.restore();rr(70,WY,940,WH,90,null,14);
 rr(680,380,220,74,30,'#2a2e38',6)}
sh(T('p2')-.05,(t,r)=>{cam(540,1050,lerp(1.04,1.1,C(r/2.2)),t,.12);carIn(t);
 sm(540,1860,1.3,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',look:[0,-.6],armL:40,bendL:40,armR:40,bendR:-40},YOU));
 rr(-60,1060,1200,1000,70,'#23262e',8);rr(290,1090,500,250,50,'#121419',6);
 path(()=>{X.arc(540,1360,400,Math.PI*1.12,Math.PI*1.88)},null,46,'#15171c');ell(250,1070,40,34,'#151515',0);ell(830,1070,40,34,'#151515',0);
 fresh(790,452,1.9,{t,string:40,swing:1.4});
 glow(540,500,500,'255,190,120',.25);
 label3('You, sorted 😌',C(r/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>shotA(t,1.6,1));
