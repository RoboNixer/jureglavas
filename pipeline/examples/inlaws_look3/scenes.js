const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1},MIL={hair:'bun',hairc:'#b9bec8',lashes:1,dress:'#c0607e'};
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1,rot=0){if(s<=0)return;X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function mug(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-34,-40,68,80,12,'#ffd23f',6);X.lineWidth=8;X.strokeStyle='#151515';X.beginPath();X.arc(40,0,20,-1.3,1.3);X.stroke();X.restore()}
function flowers(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);for(const[a,c]of[[-.5,'#ff5a7a'],[0,'#ffd23f'],[.5,'#b07ae0'],[-.25,'#ff8a3d'],[.25,'#ff5a7a']]){const fx=Math.sin(a)*90,fy=-120-Math.cos(a)*40;line([[0,0],[fx,fy]],6,'#3f8a3a');for(let k=0;k<5;k++)circ(fx+Math.cos(k*1.26+t)*16,fy+Math.sin(k*1.26+t)*16,13,c,3);circ(fx,fy,9,'#fff3b0',3)}
 path(()=>{X.moveTo(-50,-40);X.lineTo(50,-40);X.lineTo(14,40);X.lineTo(-14,40);X.closePath()},'#f4e9d8',5);X.restore()}
// craft ladder: opendoor(t,o) = front door wide open from the inside, sunny porch + path outside, door leaf swung in
function opendoor(t,o={}){proom(t,{win:null,frame:null,plant:150,lamp:0,wall:o.wall||'#f4e3c9',wall2:o.wall2||'#e8cda8',floor:'#b98a5e',floor2:'#94673f'});
 const x0=540,x1=1040,y0=300,y1=1780;rr(x0-30,y0-30,x1-x0+60,y1-y0+40,10,'#fff8ef',8);
 X.save();X.beginPath();X.rect(x0,y0,x1-x0,y1-y0);X.clip();const g=X.createLinearGradient(0,y0,0,y1);g.addColorStop(0,'#8fd0ff');g.addColorStop(.55,'#d8f1ff');g.addColorStop(.56,'#8cc96a');g.addColorStop(1,'#6aa84f');X.fillStyle=g;X.fillRect(x0,y0,x1-x0,y1-y0);
 pblur(3,()=>{pcloud(640,520,.7,'#fff','#e3eefa');for(const[bx,bs]of[[560,1.1],[960,1.3]])ell(bx,1120,120*bs,80*bs,'#4f9a45',6);path(()=>{X.moveTo(700,1130);X.lineTo(820,1130);X.lineTo(1000,1780);X.lineTo(520,1780);X.closePath()},'#d9c7a6',0)});glow(760,600,420,'255,250,210',.45);
 if(o.inside)o.inside();X.restore();
 path(()=>{X.moveTo(x0,y0);X.lineTo(x0+130,y0+70);X.lineTo(x0+130,y1+30);X.lineTo(x0,y1)},'#3f7f9e',8);circ(x0+105,1060,16,'#e8c15a',5);
 rr(x0-60,y1-10,x1-x0+120,40,8,'#8a6a4a',6)}
function inlaws(t,happy,r){sm(745,1760,.92,Object.assign({t,eyes:happy?'happy':'open',lid:happy?0:.2,brow:happy?'up':'up',mouth:happy?'grin':'smile',look:[-.6,0],armR:40,bendR:60,armL:30,bendL:40,holdR:(x,y)=>cakebox(x+10,y+70,.55)},MIL));
 dad(930,1770,.95,{t,flip:1,eyes:happy?'happy':'open',brow:happy?'up':'up',mouth:happy?'grin':'smile',look:[-.7,0],armR:50,bendR:50,holdR:(x,y)=>flowers(x,y+10,.8,t)})}
function counter2(x0,x1){rr(x0,1380,x1-x0,60,12,'#e9e2d6',7);rr(x0+10,1440,x1-x0-20,330,10,'#8fb7c9',7);for(let k=x0+40;k<x1-60;k+=220){rr(k,1470,180,270,12,'#a7c9d8',5);line([[k+70,1500],[k+110,1500]],10,'#5d7a88')}}
function kitchen(t,o={}){proom(t,Object.assign({win:780,frame:null,plant:0,lamp:0,wall:'#dfe9ef',wall2:'#c8d7e0',floor:'#b9a58c',floor2:'#93806a',curtain:'#7fb3d5',curtain2:'#5f93b5'},o));
 X.save();X.globalAlpha=.25;for(let i=0;i<12;i++)for(let j=0;j<3;j++)rr(-60+i*110,1040+j*110,104,104,6,'#ffffff',0);X.restore()}
function pot(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);rr(-120,-120,240,120,20,'#d0453a',7);rr(-140,-140,280,30,12,'#e0574a',6);line([[-140,-90],[-185,-95]],12,'#151515');line([[140,-90],[185,-95]],12,'#151515');X.restore();
 X.save();X.globalAlpha=.5;for(let k=0;k<3;k++){const ph=(t*.6+k/3)%1;X.globalAlpha=.45*(1-ph);circ(x-40*s+k*40*s+Math.sin(t*3+k)*10,y-170*s-ph*160,22+ph*20,'#ffffff',0)}X.restore()}
const TUE={night:1,lamp:0,win:780,wall:'#e8dccb',wall2:'#d4c2a8'};

// A: 0.0 Sunday 12:58, front door, you in pyjamas, in-laws on the doorstep
function doorA(t,r,lab){cam(560,1120,lerp(1.06,1.12,C(r/3.4)),t,.15);opendoor(t,{inside:()=>inlaws(t,0,r)});
 sm(260,1880,1.28,Object.assign({t,pj:1,eyes:'wide',brow:'worried',mouth:'o',sweat:1,look:[.65,-.05],tilt:-3,armL:35,bendL:95,holdL:(x,y)=>mug(x+10,y+5,1.1),armR:25,bendR:20},YOU));
 if(lab)label3('You, Sunday 12:58 😳',C(r/.2))}
sh(0,(t,r)=>doorA(t,r,1));
// B: your partner behind you, hands on cheeks, half laughing, half panicking
sh(T('f1'),(t,r)=>{cam(540,1080,1.05,t,.15);hallway(t,{dx:830});
 sm(380,1800,1.12,Object.assign({t,eyes:'wide',brow:'worried',mouth:'open',talk:r<1.4?t:null,look:[.5,.1],armL:150,bendL:-125,armR:150,bendR:-125},HER));
 sm(850,1960,1.0,Object.assign({t,pj:1,flip:1,eyes:'wide',brow:'worried',mouth:'wavy',sweat:1,look:[-.6,-.1],armL:20,bendL:40,armR:35,bendR:95,holdR:(x,y)=>mug(x-10,y+5,1)},YOU));
 label3('Your partner 🙈',C(r/.2))});
// C: Tuesday evening kitchen: "Yeah, Sunday, got it." then the week happens and the plan floats away
sh(T('s1'),(t,r)=>{const wk=1.55,q=C((r-wk)/1.1);cam(560,1060,lerp(1.04,1.1,C(r/2.8)),t,.15);kitchen(t,TUE);glow(700,700,600,'255,214,150',.3);
 sm(250,1800,.98,Object.assign({t,eyes:'open',brow:'up',mouth:r<wk?'open':'smile',talk:r<wk?t:null,look:[.6,0],armR:70,bendR:-40,armL:20,bendL:20},HER));
 counter2(420,1200);pot(800,1380,1,t);
 const hy=1860-767*1.2;
 sm(700,1860,1.2,Object.assign({t,flip:1,eyes:r<wk?'happy':'open',lid:r<wk?0:.35,brow:r<wk?'up':'flat',mouth:r<wk?'smile':'flat',look:r<wk?[-.6,0]:[.3,.5],armR:115,bendR:-30,holdR:(x,y)=>line([[x,y],[x+10,y+170]],12,'#9a6a3a'),armL:20,bendL:30},YOU));
 if(r<wk)pill(560,hy-230,'👵👴 Sun 13:00',C(r/.3));else pill(lerp(560,1000,eo(q)),lerp(hy-230,hy-560,q),'👵👴 Sun 13:00',1-q*.65,Math.sin(t*3)*.15);
 if(r>wk){for(const[i,e]of[[0,'💻'],[1,'📧'],[2,'🏋️']]){const a=C((r-wk-i*.25)/.25);if(a>0){X.globalAlpha=a*(1-C((r-wk-1.2)/.3));txt(e,300+i*240,600+(i%2)*90,110,'#111',0,'400 ');X.globalAlpha=1}}}
 label3(r<wk?'You, Tuesday 🍝':'Your memory 🫠',C((r<wk?r:r-wk)/.2))});
// D: NEXT TIME: same kitchen, she says it, you tell Memopai right there; mascot hops onto the counter; the plan flies into the phone
sh(T('s2'),(t,r)=>{cam(560,1060,1.05,t,.15);kitchen(t,TUE);glow(700,700,600,'255,214,150',.3);
 sm(220,1800,.95,Object.assign({t,eyes:r>1.4?'happy':'open',brow:'up',mouth:r>1.4?'grin':'smile',look:[.6,0],armR:30,bendR:20,armL:20,bendL:20},HER));
 counter2(420,1200);pot(720,1380,1,t);
 const mp=C((r-.25)/.5);if(mp>0){memo(980,1380,.62,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(980,1130,mp,8,160)}
 const hy=1860-767*1.2;
 sm(560,1860,1.2,Object.assign({t,eyes:'open',brow:'up',mouth:'open',talk:t,look:[.2,.4],armL:120,bendL:-120,holdL:(x,y)=>phoneH(x,y+10,.1,1),armR:60,bendR:-30},YOU));
 const fl=C((r-.7)/.8);if(fl<1){const px=lerp(560,520,eo(fl)),py=lerp(hy-230,hy+200,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'👵👴 Sun 13:00',1-fl*.6)}else sparkles(520,hy+180,C((r-1.5)/.5),8,120,'#7cf0a0');
 label3(r<.5?'Next time 🎤':'Memopai 😎',C((r<.5?r:r-.5)/.2))});
// E: the chat: voice note -> "Got it" -> Saturday divider -> the reminder arrives
const E0=T('s2')+2.55;
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const sat=T('s3')-E0;
 phoneUI(540,900,1.28,r,{typing:r>.95&&r<1.2,list:[{a:.05,me:1,voice:1,pl:C((r-.1)/.9),dur:'0:04',time:'Tue 19:12'},{a:1.2,me:0,text:'Got it ✅ Sat 10:00 · In-laws Sunday 13:00 👵👴',time:'19:12'},{a:sat+.05,date:'SATURDAY'},{a:sat+.75,me:0,text:'⏰ In-laws TOMORROW 13:00 👵👴 Time to get ready!',time:'10:00'}]});
 if(r>sat+.75&&r<sat+1.6)glow(540,1200,500,'130,240,160',.35*(1-C((r-sat-.75)/.85)))});
// G: Sunday 12:58 again: the door opens on you in a shirt + bow tie; partner: "A bow tie? Okay, show-off."; then sorted
sh(T('s4'),(t,r)=>{const p1=r>T('p1')-T('s4'),pr=r-(T('p1')-T('s4'));cam(560,1120,lerp(1.04,1.1,C(r/6)),t,.15);opendoor(t,{wall:'#f8ead6',wall2:'#efd9bb',inside:()=>inlaws(t,1,r)});
 const fr=r>T('f2')-T('s4')&&!p1;
 sm(130,1800,.95,Object.assign({t,flip:1,eyes:'happy',brow:'up',mouth:fr?'open':'grin',talk:fr?t:null,look:[.6,0],armL:fr?150+Math.sin(t*9)*10:30,bendL:fr?-150:20,armR:20,bendR:20},HER));
 sm(330,1880,1.22,Object.assign({t,pj:'#ffffff',limb:'#34405a',bow:'#e0533d',eyes:p1?'happy':'open',brow:'up',mouth:'grin',blush:p1,look:[.6,0],armR:25,bendR:20,armL:150+Math.sin(t*6)*8,bendL:-150},YOU));
 if(p1)sparkles(560,900,C(pr/1.2),12,320);
 label3(p1?'You, sorted 😌':'You, Sunday 12:58 😎',C((p1?pr:r)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
// cover-only
sh(1000,(t,r)=>doorA(t,1.6,0));
