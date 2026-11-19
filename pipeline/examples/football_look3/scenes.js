function dog(x,y,s,o={}){const t=o.t||0,fl=o.flip?-1:1,col=o.col||'#e9b873',ear=o.ear||'#9a6234',OUT='#151515';
 X.save();X.translate(x,y);X.scale(s*fl,s);X.lineCap='round';X.lineJoin='round';
 X.save();X.globalAlpha=.22;X.fillStyle='#1a1020';X.beginPath();X.ellipse(-10,6,190,24,0,0,7);X.fill();X.restore();
 // tail
 const wa=o.wag?Math.sin(t*16)*.55:Math.sin(t*2)*.12;X.save();X.translate(-150,-70);X.rotate(-.6+wa);X.strokeStyle=OUT;X.lineWidth=40;X.beginPath();X.moveTo(0,0);X.quadraticCurveTo(-60,-60,-40,-150);X.stroke();X.strokeStyle=col;X.lineWidth=26;X.stroke();X.restore();
 // haunch + hind paw
 ell(-70,-95,115,98,col,9);
 const sc=o.scratch?Math.sin(t*34):0;
 if(!o.scratch)ell(-10,-12,52,22,col,8);
 // chest/body
 ell(25,-175,88,140,col,9,-.22);ell(55,-200,42,70,'#fff3dc',0,-.22);
 // front legs (stick, like the cast) + paws
 for(const lx of[35,85]){line([[lx,-130],[lx+8,-10]],18,OUT);X.fillStyle=OUT;X.beginPath();X.ellipse(lx+22,-8,34,16,0,0,7);X.fill()}
 // scratching hind leg (in front of the body, kicking at the ear)
 if(o.scratch){const kx=-10+sc*10,ky=-150,px=40+sc*28,py=-300+sc*16;X.strokeStyle=OUT;X.lineWidth=46;X.beginPath();X.moveTo(-60,-80);X.quadraticCurveTo(kx,ky,px,py);X.stroke();X.strokeStyle=col;X.lineWidth=32;X.stroke();X.fillStyle=OUT;X.beginPath();X.ellipse(px+8,py-6,28,22,0,0,7);X.fill()}
 // head
 const hx=70,hy=-345,R=100;X.save();X.translate(hx,hy);X.rotate((o.tilt||0)*Math.PI/180+(o.scratch?sc*.06:0));
 const eA=o.scratch?Math.sin(t*34)*.15:0;
 for(const d of[-1,1]){X.save();X.translate(d*86,-46);X.rotate(d*(.35+eA));path(()=>{X.moveTo(-26,-10);X.quadraticCurveTo(d*30,-30,d*36,30);X.quadraticCurveTo(d*40,120,d*4,128);X.quadraticCurveTo(-d*34,118,-d*30,40);X.closePath()},ear,8);X.restore()}
 X.fillStyle=col;X.strokeStyle=OUT;X.lineWidth=10;X.beginPath();X.arc(0,0,R,0,7);X.fill();
 const g=X.createRadialGradient(-R*.35,-R*.45,R*.1,0,0,R*1.05);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(.7,'rgba(255,255,255,0)');g.addColorStop(1,'rgba(0,0,0,.18)');X.fillStyle=g;X.fill();X.stroke();
 ell(0,46,62,44,'#fff3dc',7);
 // eyes
 const E=o.eyes||'wide',lk=o.look||[0,0],blink=((t*1.1+.7)%3.3)<.1;
 for(const d of[-1,1]){const ex=d*40,ey=-18;
  if(E=='happy'||E=='closed'||blink){X.lineWidth=8;X.strokeStyle=OUT;X.beginPath();if(E=='happy'){X.moveTo(ex-22,ey+4);X.quadraticCurveTo(ex,ey-22,ex+22,ey+4)}else{X.moveTo(ex-22,ey);X.quadraticCurveTo(ex,ey+12,ex+22,ey)}X.stroke();continue}
  const big=E=='puppy'?1.18:1;const rx=29*big,ry=35*big;X.fillStyle='#fff';X.lineWidth=7;X.strokeStyle=OUT;X.beginPath();X.ellipse(ex,ey,rx,ry,0,0,7);X.fill();X.stroke();
  const pr=E=='puppy'?.62:.46;const px=ex+lk[0]*rx*.35,py=ey+lk[1]*ry*.35;X.fillStyle='#2a1a10';X.beginPath();X.ellipse(px,py,rx*pr,ry*pr,0,0,7);X.fill();
  X.fillStyle='#fff';X.beginPath();X.arc(px-rx*.2,py-ry*.22,rx*.2,0,7);X.fill();if(E=='puppy'){X.beginPath();X.arc(px+rx*.18,py+ry*.18,rx*.09,0,7);X.fill();X.lineWidth=7;X.beginPath();X.moveTo(ex-d*4,ey-ry-10);X.lineTo(ex+d*26,ey-ry-2);X.stroke()}}
 // nose + mouth
 ell(0,28,20,14,OUT,0);
 const M=o.mouth||'smile';X.lineWidth=6;X.strokeStyle=OUT;
 if(M=='open'||o.tongue||o.lick){X.fillStyle='#6a1818';X.beginPath();X.moveTo(-26,52);X.quadraticCurveTo(0,58,26,52);X.quadraticCurveTo(18,86,0,86);X.quadraticCurveTo(-18,86,-26,52);X.fill();X.stroke();
  const L=C(o.lick||0);if(o.tongue||L>0){X.fillStyle='#ff8fa3';X.beginPath();X.ellipse(4+L*30,84+lerp(18,-10,L)-L*40,17,26+L*30,-.2-L*.9,0,7);X.fill();X.stroke()}}
 else if(M=='o'){X.fillStyle='#5a1414';X.beginPath();X.ellipse(0,64,10,13,0,0,7);X.fill();X.stroke()}
 else{X.beginPath();X.moveTo(0,40);X.lineTo(0,52);X.moveTo(-22,52);X.quadraticCurveTo(-10,62,0,52);X.quadraticCurveTo(10,62,22,52);X.stroke()}
 X.restore();
 // itch marks
 if(o.scratch){X.strokeStyle='rgba(30,30,30,.8)';X.lineWidth=6;for(let k=0;k<3;k++){const a=-1.2+k*.5+Math.sin(t*20+k)*.1;X.beginPath();X.moveTo(hx+Math.cos(a)*140,hy+Math.sin(a)*140);X.lineTo(hx+Math.cos(a)*175,hy+Math.sin(a)*175);X.stroke()}}
 X.restore()}
function treat(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-34,-12,68,24,12,'#c98a4b',5);for(const d of[-1,1])for(const e of[-1,1])circ(d*36,e*11,13,'#c98a4b',5);circ(6,0,7,'#fff',3);X.restore()}
const YOU={hair:'curl'},MATE={hair:'spike',hairc:'#e8742a'};
const HD=(y,s)=>y-767*s;
function phoneH(hx,hy,rot=-.15,on=0,col='#25d366'){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,130,'130,240,160',.4);rr(-36,-62,72,124,12,'#1b1b1f',5);rr(-28,-52,56,104,7,on?col:'#3a4a66',0);X.restore()}
function pill(x,y,text,s=1){if(s<=0)return;X.save();X.translate(x,y);X.scale(s,s);X.font="800 46px Inter,'Noto Color Emoji'";const w=X.measureText(text).width+60;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-w/2,-42,w,84,42,'#fff',6);X.shadowColor='transparent';X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
// ---- craft ladder: floodlit five-a-side pitch kit ----
function ball3(x,y,s=1,rot=0){X.save();X.translate(x,y);X.scale(s,s);X.rotate(rot);circ(0,0,34,'#fff',6);
 X.fillStyle='#151515';X.beginPath();for(let k=0;k<5;k++){const a=k*1.2566-1.57;X.lineTo(Math.cos(a)*12,Math.sin(a)*12)}X.closePath();X.fill();
 for(let k=0;k<5;k++){const a=k*1.2566-1.57;line([[Math.cos(a)*12,Math.sin(a)*12],[Math.cos(a)*30,Math.sin(a)*30]],4,'#151515')}X.restore()}
function flood(x,y,t,on=1){line([[x,y],[x,y+900]],14,'#3a4150');rr(x-60,y-40,120,50,10,'#2a303c',5);for(let k=0;k<3;k++)circ(x-36+k*36,y-15,13,on?'#fffbe0':'#888',3);if(on){glow(x,y-15,260,'255,250,215',.55);X.save();X.globalAlpha=.07;X.fillStyle='#fffbe0';X.beginPath();X.moveTo(x-40,y);X.lineTo(x+(x<540?700:-700),1900);X.lineTo(x+(x<540?200:-200),1900);X.closePath();X.fill();X.restore()}}
function goal3(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.save();X.globalAlpha=.35;X.strokeStyle='#fff';X.lineWidth=2;for(let i=-250;i<=250;i+=28){X.beginPath();X.moveTo(i,-300);X.lineTo(i*.86,-20);X.stroke()}for(let j=-300;j<=-20;j+=28){X.beginPath();X.moveTo(-250,j);X.lineTo(250,j);X.stroke()}X.restore();
 line([[-260,0],[-260,-320],[260,-320],[260,0]],22,'#151515');line([[-260,0],[-260,-320],[260,-320],[260,0]],12,'#ffffff');X.restore()}
function bench3(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);for(const lx of[-300,300]){rr(lx-14,-10,28,110,6,'#5a3c25',5)}rr(-360,-40,720,44,10,'#b07a4a',6);rr(-360,-150,720,40,10,'#9c6a3e',6);for(const lx of[-300,300])rr(lx-10,-150,20,120,5,'#5a3c25',4);X.restore()}
function pitch(t,o={}){X.setTransform(1,0,0,1,0,0);
 const g=X.createLinearGradient(0,0,0,1100);g.addColorStop(0,'#0b1430');g.addColorStop(1,o.rain?'#26304a':'#2b3a66');X.fillStyle=g;X.fillRect(0,0,1080,1100);
 bokeh(t,'255,220,160',10,700,960);
 pblur(4,()=>{X.fillStyle='#1a2140';for(let i=0;i<9;i++){const bw=90+rnd(i)*90,bh=120+rnd(i+3)*200;X.fillRect(i*130-20,960-bh,bw,bh);X.fillStyle='rgba(255,220,140,.5)';for(let k=0;k<4;k++)X.fillRect(i*130+10+(k%2)*30,980-bh+20+Math.floor(k/2)*40,14,18);X.fillStyle='#1a2140'}});
 cam(o.cx||540,o.cy||1000,o.z||1,t,o.amp||.12);
 const tg=X.createLinearGradient(0,940,0,2100);tg.addColorStop(0,'#2f8a4a');tg.addColorStop(1,'#46b45c');X.fillStyle=tg;X.fillRect(-300,940,1700,1300);
 for(let i=0;i<7;i++){const y0=940+Math.pow(i/7,1.6)*1200,y1=940+Math.pow((i+.5)/7,1.6)*1200;X.fillStyle='rgba(255,255,255,.05)';X.fillRect(-300,y0,1700,y1-y0)}
 X.save();X.strokeStyle='rgba(255,255,255,.75)';X.lineWidth=8;X.beginPath();X.moveTo(-300,1010);X.lineTo(1400,1010);X.stroke();X.beginPath();X.moveTo(150,1010);X.lineTo(60,1240);X.lineTo(1020,1240);X.lineTo(930,1010);X.stroke();X.restore();
 // fence
 X.save();X.strokeStyle='rgba(200,215,235,.35)';X.lineWidth=3;for(let i=-20;i<40;i++){X.beginPath();X.moveTo(i*40,620);X.lineTo(i*40+300,1000);X.stroke();X.beginPath();X.moveTo(i*40+300,620);X.lineTo(i*40,1000);X.stroke()}X.restore();line([[-300,620],[1400,620]],8,'#6a7488');
 flood(110,330,t);flood(970,330,t);
 if(o.goal!==0)goal3(540,1010,1.0);
 if(o.bench)bench3(o.bench[0],o.bench[1],o.bench[2]||.6);
}
const sitO=o=>Object.assign({legL:82,kneeL:82,legR:-82,kneeR:-82,noshadow:1},o);

// A: 20:05 empty floodlit pitch: you in goal, one mate, a stray dog with the ball
function shotA(t,r,lab){pitch(t,{z:lerp(1.02,1.08,C(r/2.8))});
 sm(540,1500,.82,Object.assign({t,eyes:'open',lid:.35,brow:'flat',mouth:'flat',look:[.5,.3],armL:60,bendL:-40,armR:60,bendR:-40,tee:'#3d7fd0',num:10},YOU));
 sm(250,1690,.78,Object.assign({t,eyes:'open',lid:.4,brow:'sad',mouth:'wavy',look:[.6,-.2],armL:40,bendL:10,armR:100,bendR:-130,tee:'#e0533d',num:7},MATE));
 const dx=780+Math.sin(t*2.2)*20;dog(dx,1470,.5,{t,wag:1,eyes:'happy',look:[-.4,.3]});ball3(dx-60+Math.sin(t*4.4)*12,1458,.95,t*4);
 if(lab&&r>.25)label3('You, Thursday 20:05 🙃',C((r-.25)/.2))}
sh(0,(t,r)=>shotA(t,r,1));

// B: the group chat: 'who's in?' 👍 x9 on Monday, tonight: 'wait is it TODAY??'
const B0=2.75;
sh(B0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#14361f';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,255,170',.25);
 const g0=T('s1')-B0-.35;
 phoneUI(540,930,1.16,r,{name:'Thursday football ⚽',sub:'You, Luka, Ana, Marko +6',avf:(x,y,R)=>{circ(x,y,R,'#25d366',0);X.font=`${R}px 'Noto Color Emoji'`;X.textAlign='center';X.textBaseline='middle';X.fillText('⚽',x,y+2);X.textAlign='left'},
  list:[{a:0,date:'Monday'},{a:.05,me:1,text:"Thu 20:00, who's in? ⚽",time:'10:12'},{a:.35,me:0,text:'👍👍👍👍👍👍👍👍👍',time:'10:14'},{a:g0-.25,date:'Thursday'},{a:g0,me:1,text:'guys?? 😩',time:'20:02'},{a:g0+.45,me:0,text:'Luka: wait is it TODAY?? 😅',time:'20:03'},{a:g0+.8,me:0,text:'Marko: omg forgot 🙈',time:'20:03'},{a:g0+1.15,me:0,text:'Ana: next week for sure!',time:'20:04'}]})});

// C: the bench in the drizzle; Memopai hops on; the ⚽ thought flies into your phone
const C0=T('s2'),D0=T('s3')+1.05,MP=1.25;
sh(C0,(t,r)=>{pitch(t,{rain:1,goal:0,cy:1050,z:1.06});
 bench3(540,1620,1.05);
 const y=1830,s=1.15,hy=HD(y,s);
 dog(225,1575,.48,{t,eyes:'open',look:[.6,-.3],noshadow:1});
 sm(470,y,s,sitO(Object.assign({t,eyes:'open',lid:.3,brow:r<MP+.6?'sad':'up',mouth:r<MP+.6?'wavy':'smile',look:r<MP?[.2,.5]:[.7,-.1],armL:120,bendL:-120,holdL:(x,yy)=>phoneH(x,yy+10,.1,r>MP+1.3),armR:30,bendR:20,tee:'#3d7fd0',num:10},YOU)));
 const mp=C((r-MP)/.5);if(mp>0){memo(770,1500,.72,{t,wave:mp>=1,hop:mp,glow:1});if(mp<1)sparkles(770,1220,mp,8,180)}
 const ft=T('s3')-C0,fl=C((r-ft-.1)/.8);if(r>ft-.4){if(fl<1){const px=lerp(470,430,eo(fl)),py=lerp(hy-280,hy+300,eo(fl))-Math.sin(fl*Math.PI)*120;pill(px,py,'⚽ Thu 20:00',C((r-ft+.4)/.3)*(1-fl*.6))}else sparkles(430,hy+300,C((r-ft-.9)/.5),8,120,'#7cf0a0')}
 prain(t,.45,70);
 if(r<MP)label3('You, 20:06 😩',C(r/.2));else label3('Memopai 👋',C((r-MP)/.2))});

// D: your chat with Memopai: one text, every Thursday, each friend privately; invites accepted
sh(D0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#1f3b4d';X.fillRect(0,0,1080,1920);glow(540,900,700,'140,220,255',.3);
 const iv=T('s4')-D0+.2,ac=T('s4')-D0+1.35;
 phoneUI(540,930,1.16,r,{typing:r>.55&&r<.95,list:[{a:0,me:1,text:'👥 9 contacts: Luka, Ana, Marko…',time:'20:07'},{a:.15,me:1,text:'Every Thursday at 6pm, remind the team: football at 8 ⚽',time:'20:07'},{a:.95,me:0,text:'✅ Got it! Every Thu 18:00 · each friend, privately · ⚽ Football 20:00',time:'20:07'},{a:iv,date:'📩 Invite sent to 9 friends'},{a:ac,date:'✓ Luka, Ana, Marko +6 tapped Accept'}]});
 if(r>ac&&r<ac+.8)glow(540,820,400,'130,240,160',.3*(1-C((r-ac)/.8)))});

// E: next Thursday 18:00: a 3x3 grid, nine friends, nine phones buzz in turn
const E0=T('s5');
const SPOTS=[['#8fb8e8','#5f86b8'],['#f3d27a','#d6a94a'],['#e8867a','#c4594d'],['#b49ae8','#8a6cc4'],['#8fd6a8','#5fae7c'],['#f0a8c8','#c87aa0'],['#9ad0e0','#6aa6b8'],['#f2b07a','#cf8650'],['#c8c8d8','#9a9ab0']];
const HAIR=[['spike','#e8742a'],['bun','#e2508a'],['curl','#4a3426'],['spike','#2a2a2a'],['bun','#7a3fd0'],['spike','#4a8fe0'],['curl','#c0392b'],['bun','#3a2a1a'],['spike','#e0b040']];
sh(E0,(t,r)=>{NOFX=1;X.setTransform(1,0,0,1,0,0);X.fillStyle='#16233a';X.fillRect(0,0,1080,1920);glow(540,960,700,'120,200,255',.25);
 const tw=220,th=262,gx=192,gy=560;
 for(let i=0;i<9;i++){const cx=gx+(i%3)*(tw+18),cy=gy+Math.floor(i/3)*(th+18);const on=r>1.1+i*.13;
  X.save();X.beginPath();X.roundRect(cx,cy,tw,th,26);X.clip();const g=X.createLinearGradient(0,cy,0,cy+th);g.addColorStop(0,SPOTS[i][0]);g.addColorStop(1,SPOTS[i][1]);X.fillStyle=g;X.fillRect(cx,cy,tw,th);
  X.globalAlpha=.25;rr(cx+20,cy+30,70,60,8,'#fff',0);rr(cx+130,cy+40,60,90,8,'#fff',0);X.globalAlpha=1;
  const s=.3,fx=cx+tw/2-18,fy=cy+th+70;const bob=on?Math.sin((r-1.1-i*.13)*20)*3*Math.max(0,1-(r-1.1-i*.13)):0;
  sm(fx,fy+bob,s,{t,num:i+1,hair:HAIR[i][0],hairc:HAIR[i][1],lashes:HAIR[i][0]=='bun'?1:0,eyes:on?'wide':'open',brow:on?'up':'flat',mouth:on?'grin':'flat',look:on?[.6,-.2]:[0,.4],armR:120,bendR:-120,armL:20,bendL:10,noshadow:1,tee:SPOTS[(i+4)%9][1]});
  const px=cx+tw/2+52,py=cy+th-110;X.save();X.translate(px,py);X.rotate(.15);if(on)glow(0,0,70,'130,240,160',.5);rr(-18,-32,36,64,7,'#1b1b1f',3);rr(-13,-26,26,52,4,on?'#25d366':'#3a4a66',0);X.restore();
  if(on&&r<1.1+i*.13+.6){X.save();X.globalAlpha=.6;for(let k=1;k<3;k++)circ(px,py,22+k*14,null,3);X.restore()}
  X.restore();rr(cx,cy,tw,th,26,null,6)}
 if(r<1.1)label3('Next Thursday, 18:00 ⏰',C(r/.2));else notif(338,C((r-1.1)/.3),'Memopai','⏰ Football tonight 20:00 ⚽')});

// F: SAME pitch, same framing: full team, you score, the dog on the bench
const F0=T('p1');
sh(F0,(t,r)=>{pitch(t,{z:lerp(1.02,1.08,C(r/3)),bench:[300,1000,.45]});
 dog(300,985,.3,{t,wag:1,eyes:'happy',look:[-.5,.2]});
 ball3(600,1300,.8,0);
 const team=[[800,1600,.68,'bun','#e2508a','#3d7fd0'],[700,1430,.55,'spike','#4a8fe0','#e0533d'],[160,1650,.62,'curl','#c0392b','#3d7fd0']];
 team.forEach((m,i)=>sm(m[0],m[1],m[2],{t,hair:m[3],hairc:m[4],lashes:m[3]=='bun'?1:0,tee:m[5],num:[4,9,2][i],eyes:'happy',brow:'up',mouth:'grin',armL:150+Math.sin(t*8+i)*10,bendL:-20,armR:150+Math.cos(t*8+i)*10,bendR:-20}));
 sm(540,1880,1.1,Object.assign({t,eyes:'happy',brow:'up',mouth:'grin',blush:1,look:[0,-.3],armL:165,bendL:-10,armR:165,bendR:-10,tee:'#3d7fd0',num:10,bounce:1},YOU));
 sm(300,1860,.9,Object.assign({t,eyes:'happy',brow:'up',mouth:'open',look:[.5,-.2],armL:150,bendL:-30,armR:150,bendR:-30,tee:'#e0533d',num:7},MATE));
 confetti(C(r/2.5),70);
 label3('You, sorted 😌',C((r-.2)/.2))});
sh(T('cta'),(t,r)=>endcard(t,r));
sh(1000,(t,r)=>shotA(t,1.0,0));
