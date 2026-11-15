const YOU={hair:'curl'};const HER={hair:'bun',hairc:'#e2508a',lashes:1};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function chip(x,y,e,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,70,'#fff',6);X.shadowColor='transparent';txt(e,0,4,70,'#111',0,'400 ');X.restore()}
// cosy restaurant at night: warm wall, window with city lights, string lights
function resto(t,o={}){proom(t,Object.assign({win:o.win==null?800:o.win,night:1,frame:[300,560],plant:1,lamp:0,wall:o.wall||'#b9775a',wall2:o.wall2||'#9a5e46',floor:'#6b4a3a',floor2:'#553a2d',curtain:'#7a2e3a',curtain2:'#5e2230'},o));
 // string lights
 X.strokeStyle='#2a1a14';X.lineWidth=4;X.beginPath();X.moveTo(-40,250);X.quadraticCurveTo(540,420,1120,250);X.stroke();
 for(let k=0;k<11;k++){const u=k/10,x=lerp(-40,1120,u),y=250+Math.sin(u*Math.PI)*170*0.5*2*(1-Math.abs(u-.5))*1.0;const fl=.75+.25*Math.sin(t*3+k*1.7);glow(x,y+16,60,'255,210,140',.55*fl);circ(x,y+16,11,'#ffe2a8',0)}
 glow(540,900,700,'255,190,120',.25)}
// table in FRONT of the characters: tablecloth, plates, glasses, candle
function table(t,o={}){const y=o.y||1330;X.save();
 X.globalAlpha=.25;X.fillStyle='#000';X.beginPath();X.ellipse(540,y+10,640,40,0,0,7);X.fill();X.globalAlpha=1;
 rr(-60,y,1200,700,24,'#f4efe6',7);rr(-60,y,1200,46,18,'#e6ddcf',0);
 for(let k=0;k<7;k++)line([[60+k*170,y+80],[40+k*175,1950]],3,'rgba(0,0,0,.06)');
 const pl=o.plates||[[300,y+40],[780,y+40]];pl.forEach(([px,py])=>{ell(px,py,130,34,'#fff',6);ell(px,py,84,20,o.empty?'#f1ece2':'#e9a35a',0)});
 // wine glasses
 [[460,y-4],[640,y-4]].forEach(([gx,gy])=>{X.save();X.globalAlpha=.85;path(()=>{X.moveTo(gx-34,gy-150);X.quadraticCurveTo(gx-38,gy-70,gx,gy-60);X.quadraticCurveTo(gx+38,gy-70,gx+34,gy-150);X.closePath()},'rgba(255,255,255,.35)',5);
  path(()=>{X.moveTo(gx-32,gy-110);X.quadraticCurveTo(gx-30,gy-72,gx,gy-66);X.quadraticCurveTo(gx+30,gy-72,gx+32,gy-110);X.closePath()},'#8e1f35',0);line([[gx,gy-60],[gx,gy]],6,'#151515');ell(gx,gy,30,8,'rgba(255,255,255,.4)',5);X.restore()});
 // candle
 const cx=550,cy=y+20;rr(cx-18,cy-90,36,90,8,'#fff6dc',5);const f=Math.sin(t*14)*3;glow(cx,cy-120,180,'255,200,110',.7);path(()=>{X.moveTo(cx,cy-150+f);X.quadraticCurveTo(cx+16,cy-112,cx,cy-96);X.quadraticCurveTo(cx-16,cy-112,cx,cy-150+f)},'#ffb547',0);
 if(o.phoneDown)rr(o.phoneDown-70,y+56,140,26,10,'#1b1b1f',4);
 X.restore()}
function office(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:1,lamp:0,wall:'#fbe9cf',wall2:'#f2d3ae',floor:'#a8a39a',floor2:'#8b867d',curtain:'#8aa9c4',curtain2:'#6d8cab'},o))}
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
// the looping thought: 🚗 chip orbiting the head, bumping it
function loopThought(hx,hy,t,s=1,a=1){if(a<=0)return;const ang=t*3.2;chip(hx+Math.cos(ang)*210*s,hy-90+Math.sin(ang)*80*s,'🚗',1.05*s*a,Math.sin(t*5)*.2)}

// A: Saturday dinner. She talks, you nod... your brain loops the insurance
sh(0,(t,r)=>{cam(540,1000,lerp(1.06,1.14,C(r/4.6)),t,.15);resto(t);
 const brain=r>T('h1')+2.6;
 sm(820,1760,1.18,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'open',talk:t,look:[-.6,0],armL:60+Math.sin(t*5)*25,bendL:-90,armR:30,bendR:20},HER));
 sm(270,1760,1.22,Object.assign({t,eyes:brain?'open':'open',lid:brain?.45:.1,brow:brain?'worried':'flat',mouth:brain?'flat':'smile',look:brain?[-.3,-.6]:[.6,0],tilt:Math.sin(t*4)*4,armL:20,bendL:30,armR:20,bendR:30},YOU));
 table(t);
 loopThought(270,700,t,1,C((r-T('h1')-2.6)/.4));
 label3(brain?'Your brain 🫠':'You at dinner 🍝',C(r/.2))});
// B: her face: "You didn't hear a word, did you?"
sh(T('f1')-.05,(t,r)=>{cam(680,920,1.2,t,.1);resto(t);
 sm(820,1760,1.18,Object.assign({t,flip:1,eyes:'open',lid:.35,brow:'smug',mouth:r<1.6?'open':'smirk',talk:r<1.6?t:null,look:[-.7,0],armL:150,bendL:-130,armR:30,bendR:20,tilt:-6},HER));
 sm(270,1760,1.22,Object.assign({t,eyes:'wide',brow:'worried',mouth:'o',sweat:1,look:[.6,0]},YOU));
 table(t);
 label3('Her, 20:14 🤨',C(r/.2))});
// C: your brain, close-up: the unfinished task keeps nagging; Memopai hops in at the end
sh(T('s1')+1.2,(t,r)=>{cam(420,900,lerp(1.2,1.12,C(r/4)),t,.2);resto(t,{wall:'#7d6a8a',wall2:'#5e4f6d'});
 const mp=C((r-(T('s2')-T('s1')-1.2-1.1))/.6);
 sm(420,1760,1.32,Object.assign({t,eyes:'open',lid:.4,brow:'sad',mouth:'wavy',look:[.4,-.6],tilt:Math.sin(t*9)*3*(1-mp),sweat:mp<.5,armL:150,bendL:-140,armR:20,bendR:30},YOU));
 // the 🚗 chip bonks the head again and again
 if(mp<.6){const b=(t*1.4)%1,bx=420+lerp(320,120,eo(Math.min(1,b*2))),by=560-Math.sin(Math.min(1,b*2)*Math.PI)*80;chip(bx,by,'🚗',.95);if(b>.48&&b<.6)impact((b-.48)/.12*.4)}
 table(t,{plates:[[420,1370]]});
 if(mp>0){memo(830,1330,.9,{t,wave:1,hop:mp,glow:1});if(mp<1)sparkles(830,1000,mp,10,220)}
 label3(mp>.3?'Memopai 😎':'Your brain 🫠',C(r/.25))});
// D: she steps away; one voice note, the 🚗 thought flies out of your head into the phone
sh(T('s2'),(t,r)=>{cam(540,1000,1.06,t,.15);resto(t);
 const gone=C(r/1.0),talk=r>.9;
 if(gone<1)sm(lerp(820,1250,eo(gone)),1760,1.18,Object.assign({t,flip:0,walk:t,eyes:'happy',brow:'up',mouth:'smile',look:[.6,0]},HER));
 sm(330,1760,1.22,Object.assign({t,eyes:'open',brow:'up',mouth:talk?'open':'smile',talk:talk?t:null,look:[.6,-.2],armR:150,bendR:-150,holdR:(x,y)=>phoneH(x,y,.25,talk)},YOU));
 table(t,{plates:[[330,1370],[800,1370]]});
 memo(800,1330,.85,{t,glow:1});
 const fl=C((r-1.0)/1.1);if(fl<1){const px=lerp(330,520,eo(fl)),py=lerp(560,880,eo(fl))-Math.sin(fl*Math.PI)*120;chip(px,py,'🚗',.95-fl*.45)}else sparkles(520,880,C((r-2.1)/.5),8,120,'#7cf0a0');
 label3(r<1?'You, 30 seconds alone 🍷':'Right in WhatsApp 💬',C(r/.25))});
// E: the WhatsApp chat
sh(T('s2')+2.7,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#3a2a2a';X.fillRect(0,0,1080,1920);glow(540,900,700,'255,200,140',.3);
 phoneUI(540,900,1.28,r,{typing:r>1.1&&r<1.4,list:[{a:.05,me:1,voice:1,pl:C((r-.15)/1.1),dur:'0:04',time:'20:21'},{a:1.4,me:0,text:'✅ Mon 09:00 · Call the insurance 📞',time:'20:21'}]})});
// F: Monday 09:00, the buzz; one call, sorted
sh(T('s4'),(t,r)=>{cam(520,1000,1.06,t,.15);office(t);wclock(250,470,.9,9,0);glow(780,500,700,'255,230,160',.5);psun(820,420,46,t);
 const call=r>1.6,done=r>2.3;
 sm(380,1760,1.24,Object.assign({t,eyes:done?'happy':(r>.9?'wide':'open'),brow:'up',mouth:done?'grin':(call?'open':'o'),talk:call&&!done?t:null,look:call?[.5,-.2]:[.4,.6],
  armR:call?165:60,bendR:call?-155:-110,holdR:(x,y)=>phoneH(x,y,call?-.1:-.15,r>.9),armL:done?150:20,bendL:done?-30:30},YOU));
 if(!call)notif(150,r>.9?C((r-.9)/.3):0,'Memopai','Call the insurance 📞');
 if(done){circ(800,980,90*eo(C((r-2.3)/.3)),'#25d366',6);txt('✓',800,990,110*eo(C((r-2.3)/.3)),'#fff',0);sparkles(800,980,C((r-2.3)/.8),8,200)}
 if(done)label3('You, Monday 09:04 ✅',C((r-2.3)/.25));else if(r<.85)label3('You, Monday 09:00 📞',C(r/.25))});
// G: next Saturday, same table: she tells the story, you're right there
sh(T('s5'),(t,r)=>{cam(540,1000,lerp(1.04,1.1,C(r/4)),t,.15);resto(t);
 const laugh=r>T('f2')-T('s5')+1.5;
 sm(820,1760,1.18,Object.assign({t,flip:1,eyes:laugh?'happy':'wide',brow:'up',mouth:laugh?'grin':'open',talk:!laugh?t:null,look:[-.6,0],armL:laugh?40:160+Math.sin(t*6)*12,bendL:laugh?20:-40,armR:laugh?30:150,bendR:laugh?20:-40},HER));
 sm(270,1760,1.22,Object.assign({t,eyes:laugh?'happy':'open',brow:'up',mouth:laugh?'grin':'o',look:[.6,0],lean:laugh?-6:6,armL:20,bendL:30,armR:20,bendR:30},YOU));
 table(t,{phoneDown:180});
 label3('You, next Saturday 🍝',C(r/.25))});
// H: both laughing, candle glow: sorted
sh(T('p1')-.3,(t,r)=>{cam(540,960,lerp(1.1,1.16,C(r/3)),t,.15);resto(t,{wall:'#c98a62',wall2:'#ab6f4c'});
 sm(820,1760,1.18,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[-.6,0],tilt:-5+Math.sin(t*7)*3},HER));
 sm(270,1760,1.22,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[.6,0],tilt:5+Math.sin(t*7+1)*3},YOU));
 table(t,{phoneDown:180});sparkles(540,800,C(r/1.5),10,320);
 label3('You, sorted 😌',C(r/.3))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>{cam(540,1000,1.12,t,.1);resto(t);
 sm(820,1760,1.18,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:'open',look:[-.6,0],armL:70,bendL:-90},HER));
 sm(270,1760,1.22,Object.assign({t,eyes:'open',lid:.45,brow:'worried',mouth:'flat',look:[-.3,-.6]},YOU));
 table(t);loopThought(270,700,1.2,1.1,1)});
