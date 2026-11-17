const YOU={hair:'curl'},KID={hair:'spike',hairc:'#7a4a2a'},BRIDE={hair:'bun',hairc:'#6b3d22',lashes:1,veil:1,dress:'#ffffff'},BOSS={hair:'spike',hairc:'#9aa3ad',bow:'#e0533d'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// knees poking up above the kids' table
function knees(x,y,s){const L=17*s;X.save();X.lineCap='round';X.lineJoin='round';X.strokeStyle='#151515';X.lineWidth=L;for(const d of[-1,1]){X.beginPath();X.moveTo(x+d*20*s,y+40*s);X.lineTo(x+d*70*s,y-90*s);X.lineTo(x+d*110*s,y+40*s);X.stroke()}X.restore()}
function office(t,o={}){proom(t,{win:880,frame:null,plant:0,lamp:0,wall:'#dfe6ee',wall2:'#c7d1dc',floor:'#9aa6b4',floor2:'#7d8896'});
 // whiteboard with a chart
 rr(80,360,520,360,14,'#fff',8);line([[130,660],[230,600],[330,630],[430,520],[540,470]],10,'#4a8fe0');for(let k=0;k<4;k++)rr(140+k*110,690-(k+1)*40,50,(k+1)*40,4,'#f2a65a',3);
 // meeting table edge (foreground) handled per shot
 if(o.dim){X.save();X.globalCompositeOperation='multiply';X.fillStyle=`rgba(110,120,170,${.4*o.dim})`;X.fillRect(-3000,-3000,8000,8000);X.restore()}}
function boss(t,x,y,s,talk){pblur(2,()=>sm(x,y,s,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.5,0],armR:120+Math.sin(t*3)*20,bendR:-30,armL:20,bendL:10},BOSS)))}
function sofaRoom(t,o={}){proom(t,Object.assign({win:780,night:1,frame:[300,520],plant:0,lamp:120,wall:'#c9b6a4',wall2:'#ad9988'},o));glow(120,760,560,'255,214,150',.45)}
// WhatsApp chat list (full phone)
function chatList(x,y,s,r,rows,tap){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#ffffff',0);X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 X.fillStyle='#008069';X.fillRect(-300,-640,600,190);rr(-70,-618,140,40,20,'#000',0);
 X.font="600 26px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText('21:00',-240,-598);X.font="800 46px Inter";X.fillText('WhatsApp',-250,-505);
 rows.forEach((w,i)=>{const yy=-400+i*150;if(w.hi){X.fillStyle=`rgba(37,211,102,${.10+.08*Math.sin(r*8)})`;X.fillRect(-300,yy-70,600,148)}
  if(tap&&i==tap.i&&r>tap.a){const q=C((r-tap.a)/.4);X.globalAlpha=1-q;circ(0,yy,40+q*260,'rgba(0,0,0,.08)',0);X.globalAlpha=1}
  if(w.memo)avatar(-220,yy,52,0);else{circ(-220,yy,52,w.col||'#b07ae0',0);txt(w.e||'🙂',-220,yy+3,52,'#111',0,'400 ')}
  X.textAlign='left';X.font="800 34px Inter,'Noto Color Emoji'";X.fillStyle='#111';X.fillText(w.n,-145,yy-22);X.font=(w.hi?"700 ":"400 ")+"28px Inter,'Noto Color Emoji'";X.fillStyle=w.hi?'#111':'#667781';X.fillText(w.m,-145,yy+24);
  X.textAlign='right';X.font="500 24px Inter";X.fillStyle=w.hi?'#1fa855':'#667781';X.fillText(w.time,265,yy-22);if(w.hi){circ(240,yy+24,22,'#25d366',0);X.textAlign='center';X.font="800 24px Inter";X.fillStyle='#fff';X.fillText('1',240,yy+25)}
  X.fillStyle='#eef0f1';X.fillRect(-145,yy+74,445,2)});
 X.restore();X.restore()}
function avB(x,y,r){X.save();circ(x,y,r,'#ffd1dc',0);txt('💍',x,y+3,r*1.1,'#111',0,'400 ');X.restore();X.textAlign='left'}

// A: 0.0 the kids' table at your best friend's wedding
function kidsTable(t,r,lab){cam(540,1060,lerp(1.08,1.14,C(r/2.6)),t,.15);hallW(t);
 balloon(190,1640,1.15,t,'#ff5a7a');
 sm(470,2125,1.25,Object.assign({t,party:'#4a8fe0',eyes:'open',lid:.25,brow:'worried',mouth:'wavy',sweat:1,look:[.55,.2],tilt:-4,legL:72,bendL:150,legR:72,bendR:150,armL:120,bendL:-70,armR:115,bendR:-75},YOU));
 sm(850,1940,.8,Object.assign({t,flip:1,party:1,eyes:'happy',brow:'up',mouth:'grin',look:[-.6,0],armR:lerp(30,95,C((r-.4)/.4)),bendR:-15,holdR:(x,y)=>crayon(x,y-10,1.1,'#7cc47c'),armL:20,bendL:20},KID));
 kidtable(560,1700,1.15);
 if(lab)label3("You at the kids' table 🙃",C(r/.2))}
sh(0,(t,r)=>kidsTable(t,r,1));
// B: the bride leans in: "You never replied!"
sh(T('f1'),(t,r)=>{cam(540,1040,1.06,t,.15);hallW(t);
 sm(320,1820,1.12,Object.assign({t,eyes:'happy',brow:'worried',mouth:'open',talk:r<2.5?t:null,look:[.6,.3],lean:8,armL:115,bendL:60,armR:115,bendR:-60},BRIDE));
 sm(790,2100,1.0,Object.assign({t,party:'#4a8fe0',eyes:'wide',brow:'worried',mouth:'o',sweat:1,look:[-.6,-.3],legL:72,bendL:150,legR:72,bendR:150,armL:120,bendL:-70,armR:115,bendR:-75},YOU));
 kidtable(820,1760,.95);
 label3('The bride 👰',C(r/.2))});
// C: two months ago, mid-meeting: the invite pops up; "I'll reply tonight"; then it floats away
sh(T('s1'),(t,r)=>{const nb=T('s1b')-T('s1'),dim=C((r-nb)/.4);cam(560,1000,lerp(1.04,1.1,C(r/4)),t,.15);office(t,{dim});
 boss(t,250,1560,.72,r<nb);
 const hy=1860-767*1.25;
 sm(660,1860,1.25,Object.assign({t,eyes:r<nb?'open':'open',lid:r<nb?0:.45,brow:r<nb?'up':'flat',mouth:r<nb?(r>1.2?'smile':'o'):'flat',look:r<nb?[.3,.6]:[-.2,-.5],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,r<nb&&r>.2)},YOU));
 rr(-100,1640,1300,60,10,'#8a6a4a',7);rr(-100,1700,1300,300,0,'#6f543a',0);
 if(r<nb){notif(150,C((r-.15)/.3),'Bestie 💍',"You're invited!! 🎉 Please RSVP by Friday 🙏")}
 else{const q=C((r-nb)/1.1);chip(lerp(800,960,q),lerp(hy-120,hy-380,q),'💍',1.15-q*.7,Math.sin(t*3)*.2);X.globalAlpha=1}
 label3(r<nb?'You, two months ago 💼':'Your memory 🫠',C((r<nb?r:r-nb)/.2),r<nb?560:300)});
// D: REWIND: same meeting; Memopai hops in; you text it under the table; the 💍 flies into the phone
sh(T('s2'),(t,r)=>{cam(560,1000,1.05,t,.15);office(t);boss(t,250,1560,.72,1);
 sm(600,1860,1.25,Object.assign({t,eyes:'open',brow:'up',mouth:r>1.6?'smile':'o',look:[.2,.8],armR:110,bendR:-110,armL:110,bendL:110,holdR:(x,y)=>phoneH(x-20,y+10,0,r>1.2)},YOU));
 rr(-100,1640,1300,60,10,'#8a6a4a',7);rr(-100,1700,1300,300,0,'#6f543a',0);
 const mp=C((r-.7)/.6);if(mp>0){memo(880,1560,.82,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(880,1250,mp,8,180)}
 const hy=1860-767*1.25,fl=C((r-1.4)/.9);if(fl>0&&fl<1){const px=lerp(700,560,eo(fl)),py=lerp(hy-180,1560,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'💍',.95-fl*.45)}else if(fl>=1)sparkles(570,1560,C((r-2.3)/.5),8,120,'#7cf0a0');
 rewind(1-C(r/.55),t);
 label3(mp>.5?'Memopai 😎':'You, mid-meeting 💼',C((r-.5)/.2))});
// E: the chat with Memopai
sh(T('s2')+2.6,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 phoneUI(540,900,1.28,r,{typing:r>.75&&r<1.05,list:[{a:.05,me:1,text:'tonight at 9 remind me: RSVP to the wedding 💍',time:'11:42'},{a:1.05,me:0,text:'Got it ✅ Today 21:00 · RSVP to the wedding 💍',time:'11:42'}]})});
// F: 21:00 on the sofa: chat list, Memopai right above her chat; tap across; RSVP sent
sh(T('s4'),(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#2a2340');g.addColorStop(1,'#46365a');X.fillStyle=g;X.fillRect(0,0,1080,1920);glow(540,900,700,'255,214,150',.25);
 const sw=1.75;
 if(r<sw){chatList(540,900,1.28,r,[{memo:1,hi:1,n:'Memopai',m:'⏰ RSVP to the wedding 💍',time:'21:00'},{n:'Bestie 💍',e:'💍',col:'#ffd1dc',m:"You're invited!! 🎉 Please RSVP…",time:'11:40'},{n:'Mom ❤️',e:'👩',col:'#ffe0a8',m:'Call me when you can',time:'Mon'},{n:'Team 💼',e:'💼',col:'#cfe0ff',m:'Notes from today',time:'Mon'}],{i:1,a:1.25});
  if(r>1.15&&r<1.6){X.globalAlpha=C((1.6-r)/.2);circ(540,900-400*1.28+150*1.28,44,'rgba(255,255,255,.55)',0);X.globalAlpha=1}}
 else{const q=r-sw;phoneUI(540,900,1.28,q,{name:'Bestie 💍',avf:(x,y,rr2)=>avB(x,y,rr2),sub:'online',list:[{a:-1,me:0,text:"You're invited!! 🎉 Please RSVP by Friday 🙏",time:'11:40'},{a:.15,me:1,text:"We're coming!! 🎉 2 of us, chicken please 🍗",time:'21:01'},{a:.95,me:0,text:'YAY!! 💍❤️',time:'21:01'}]})}});
// G: the wedding again: "Table four, right next to us!" then you, sorted, at the grown-up table
sh(T('f2'),(t,r)=>{const p1=r>T('p1')-T('f2');cam(560,1040,lerp(1.04,1.1,C(r/4.4)),t,.15);hallW(t,{sun:1});
 pblur(3,()=>{kidtable(140,1420,.5);sm(150,1430,.42,Object.assign({t,party:1,eyes:'happy',mouth:'grin',armR:150+Math.sin(t*9)*18,bendR:-20,holdR:(x,y)=>crayon(x,y,1,'#7cc47c'),flip:1},KID))});
 sm(300,1820,1.08,Object.assign({t,eyes:'happy',brow:'up',mouth:p1?'grin':'open',talk:!p1&&r<1.8?t:null,look:[.6,0],armR:p1?40:lerp(30,100,C(r/.3)),bendR:p1?20:-10,armL:p1?150:155+Math.sin(t*10)*14,bendL:p1?-150:-20,holdL:p1?(x,y)=>champ(x,y+30,1.1):null},BRIDE));
 sm(720,1900,1.15,Object.assign({t,bow:'#151515',eyes:p1?'happy':'open',brow:'up',mouth:p1?'grin':'smile',blush:p1,look:[-.5,0],armR:p1?150:30,bendR:p1?-150:30,holdR:p1?(x,y)=>champ(x,y+30,1.15):null,armL:30,bendL:30},YOU));
 rtable(700,1860,1.3,{num:'4',flowers:1});
 if(p1)sparkles(560,950,C((r-(T('p1')-T('f2')))/1.2),12,300);
 label3(p1?'You, sorted 😌':'The bride 🥂',C((p1?r-(T('p1')-T('f2')):r)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>kidsTable(t,1.5,0));
