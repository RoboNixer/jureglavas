const YOU={hair:'curl'},PAL={hair:'spike',hairc:'#c0542a'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// €20 banknote (craft ladder 2026-11-15 12:00): note(x,y,s,rot) centred
function note(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=12;rr(-120,-62,240,124,10,'#7fb7e8',6);X.shadowColor='transparent';
 rr(-104,-48,208,96,6,null,3);circ(-50,0,34,'#a9d2f2',4);txt('20',62,-10,46,'#1d4f86',0);txt('€',-50,4,40,'#1d4f86',0);line([[20,26],[100,26]],4,'#1d4f86');X.restore()}
// pizza box open on a table
function pizza(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-170,-40,340,60,8,'#d9b07a',6);path(()=>{X.moveTo(-170,-40);X.lineTo(-150,-260);X.lineTo(150,-260);X.lineTo(170,-40);X.closePath()},'#e8c58f',6);
 ell(0,-40,140,26,'#f2b34a',5);for(let k=0;k<6;k++)circ(-90+k*36,-42+((k%2)*8),11,'#c8402c',0);X.restore()}
function ctable(x,y,w=700){X.globalAlpha=.18;ell(x,y+330,w*.55,30,'#000',0);X.globalAlpha=1;rr(x-w/2,y,w,40,14,'#8a5a3a',6);rr(x-30,y+40,60,290,6,'#6b4329',5);rr(x-140,y+320,280,22,10,'#6b4329',5)}
function lounge(t,o={}){proom(t,Object.assign({win:540,night:!o.day,rain:o.rain,lamp:o.lamp===0?0:900,plant:o.plant||0,curtain:'#6a8f6a',curtain2:'#4f7350',wall:o.warm?'#f6d9b8':'#e8d6c2',wall2:o.warm?'#eec29a':'#d8bfa4'},o))}

// A: Friday 21:00, sofa, friend asks
sh(0,(t,r)=>{const ask=r>T('f1');cam(540,1050,lerp(1.02,ask?1.14:1.06,C(r/5.5)),t,.12);lounge(t,{});psofa(540,1700,1.15,'#c06a4a','#9c5236');
 sm(330,1720,1.18,Object.assign({t,eyes:ask?'wide':'happy',brow:ask?'up':'flat',mouth:ask?'o':'grin',look:[.7,0],sweat:ask&&r>T('f1')+1,armR:40,bendR:-60,holdR:(x,y)=>{if(!ask)path(()=>{X.moveTo(x-10,y);X.lineTo(x+70,y-40);X.lineTo(x+60,y+20);X.closePath()},'#f2b34a',4)}},YOU));
 sm(760,1720,1.18,Object.assign({t,flip:1,eyes:'open',brow:ask?'worried':'flat',mouth:ask?'smile':'smile',talk:ask&&r<T('f1')+2.2?t:null,look:[-.7,0],lean:ask?-6:0,armL:ask?35:20,bendL:ask?-70:20},PAL));
 pizza(540,1880,.9);
 label3(ask?'You at 21:00 😳':'You, Friday 21:00 🍕',C((ask?r-T('f1'):r)/.25))});
// B: in your head it was sorted; the €20 floats away; Memopai hops in
sh(T('s1'),(t,r)=>{cam(540,920,lerp(1.16,1.24,C(r/3.8)),t,.15);lounge(t,{rain:1,lamp:0});
 const m=r>2.4;
 sm(420,1760,1.3,Object.assign({t,eyes:'open',lid:m?0:.35,brow:m?'up':'sad',mouth:m?'smile':'wavy',look:m?[.8,.2]:[.4,-.7],armL:15,bendL:25,armR:15,bendR:25,sweat:!m},YOU));
 const f=C(r/2.4);note(lerp(560,800,f),lerp(640,470,f),.9,Math.sin(t*2)*.2+f*.4);
 if(!m){X.save();X.globalAlpha=.9;for(let k=0;k<3;k++)circ(500+k*40,640-k*36,10+k*6,'#fff',4);X.restore();chip(560,330+120,'✅',.0)}
 if(m){const mp=C((r-2.4)/.6);memo(820,1520,.9,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(820,1180,mp,10,240)}
 label3(m?'Memopai 😎':'Your memory 🫠',C(m?(r-2.4)/.25:r/.25))});
// C: rewind to a month earlier, café: he hands you the €20, voice note, thought flies into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.05,t,.2);lounge(t,{day:1,lamp:0,plant:930,warm:1});
 const got=r>1.0,talk=r>1.5;
 ctable(540,1380,760);
 sm(300,1760,1.2,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk&&r<3.6?t:null,look:[.6,0],armR:got?45:70,bendR:got?-110:-20,holdR:(x,y)=>{if(got)phoneH(x,y,-.15,r>1.3);},armL:20,bendL:30},YOU));
 sm(800,1760,1.2,Object.assign({t,flip:1,eyes:'happy',brow:'flat',mouth:'grin',look:[-.6,.1],armL:got?20:75,bendL:got?20:-10,holdL:(x,y)=>{if(!got)note(x-40,y-10,.6,-.2)}},PAL));
 memo(560,1300,.75,{t,wave:1,hop:C((r-.6)/.5),glow:1});
 const fl=C((r-1.7)/1.1);if(r>1.7){if(fl<1){const px=lerp(330,380,eo(fl)),py=lerp(560,1000,eo(fl))-Math.sin(fl*Math.PI)*120;note(px,py,.55-fl*.3,fl*3)}else sparkles(380,1000,C((r-2.8)/.5),8,120,'#7cf0a0')}
 rewind(1-C((r-.15)/.6),t,'◀◀ A MONTH AGO');
 label3(r<.9?'A month ago ⏪':'Memopai 😎',C(r<.9?r/.25:(r-.9)/.25))});
// D: the voice note in WhatsApp
sh(T('y1')-.2,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.6&&r<1.95,list:[{a:.05,me:1,voice:1,pl:C((r-.2)/2.0),dur:'0:03',time:'19:42'},{a:1.95,me:0,text:'✅ Fri 09:00 · Pay him back €20 💸',time:'19:42'}]})});
// E: Friday 09:00, buzz, bank app, sent
sh(T('s4'),(t,r)=>{cam(540,1000,1.05,t,.2);lounge(t,{day:1,lamp:0,plant:150,wall:'#fbe9cf',wall2:'#f2d3ae'});glow(540,500,650,'255,225,160',.4);
 const buzz=r>.8,sent=r>1.9;
 sm(480,1760,1.28,Object.assign({t,eyes:buzz&&!sent?'wide':(sent?'happy':'open'),brow:buzz?'up':'flat',mouth:sent?'grin':(buzz?'o':'smile'),look:[.4,.5],
  armR:50,bendR:-115,holdR:(x,y)=>phoneH(x,y,-.12,buzz,sent?'#3b82f6':'#25d366'),armL:sent?150:20,bendL:sent?-20:30},YOU));
 if(buzz&&!sent)notif(150,C((r-.8)/.3),'Memopai','Pay him back €20 💸');
 if(sent){X.save();X.translate(760,820);X.scale(eo(C((r-1.9)/.3)),eo(C((r-1.9)/.3)));rr(-170,-80,340,160,30,'#fff',6);circ(-100,0,44,'#2fbf71',0);txt('✓',-100,14,56,'#fff',0);txt('Sent',30,-12,46,'#111',0);txt('€20.00',30,38,34,'#555',0,'600 ');X.restore();sparkles(760,820,C((r-1.9)/.6),8,200)}
 label3('You, Friday 09:00 📲',C(r/.25),470)});
// F: friend gets it
sh(T('f2')-.12,(t,r)=>{cam(540,1000,lerp(1.06,1.12,C(r/1.5)),t,.2);proom(t,{win:300,lamp:0,curtain:'#5a7fb5',curtain2:'#3f6396',wall:'#dfe9ef',wall2:'#c8d7e0'});glow(300,500,500,'255,240,200',.35);
 sm(560,1760,1.3,Object.assign({t,flip:1,eyes:r>.3?'happy':'wide',brow:'up',mouth:r>.3?'grin':'o',talk:r<1.3?t:null,look:[-.3,.5],blush:1,armL:50,bendL:-115,holdL:(x,y)=>phoneH(x,y,.12,1,'#3b82f6')},PAL));
 notif(150,C(r/.3),'Bank','+€20.00 received from You');
 label3('Your friend 😄',C(r/.25),470)});
// G: a month later, same sofa, same pizza, zero awkward
sh(T('p1')-.2,(t,r)=>{cam(540,1050,lerp(1.04,1.1,C(r/3.2)),t,.12);lounge(t,{warm:1});glow(900,800,600,'255,214,150',.35);psofa(540,1700,1.15,'#c06a4a','#9c5236');
 sm(330,1720,1.18,Object.assign({t,eyes:'happy',brow:'flat',mouth:'grin',blush:1,look:[.7,0],tilt:-4,armR:40,bendR:-60,holdR:(x,y)=>path(()=>{X.moveTo(x-10,y);X.lineTo(x+70,y-40);X.lineTo(x+60,y+20);X.closePath()},'#f2b34a',4)},YOU));
 sm(760,1720,1.18,Object.assign({t,flip:1,eyes:'happy',brow:'flat',mouth:'open',look:[-.7,0],tilt:5,armL:60,bendL:-40},PAL));
 pizza(540,1880,.9);sparkles(540,900,C((r-.4)/1.4),10,260);
 label3(r<1.2?'You, a month later 🍕':'You, sorted 😌',C(r<1.2?r/.25:(r-1.2)/.25))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only shot
sh(1000,(t,r)=>{cam(540,1050,1.14,t,.1);lounge(t,{});psofa(540,1700,1.15,'#c06a4a','#9c5236');
 sm(330,1720,1.18,Object.assign({t,eyes:'wide',brow:'up',mouth:'o',look:[.7,0],sweat:1,armR:40,bendR:-60},YOU));
 sm(760,1720,1.18,Object.assign({t,flip:1,eyes:'open',brow:'worried',mouth:'smile',look:[-.7,0],lean:-6,armL:60,bendL:-40,holdL:(x,y)=>note(x-40,y-30,.55,-.3)},PAL));pizza(540,1880,.9)});
