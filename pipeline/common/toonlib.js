// ================= GOOFY TOON CHARACTERS =================
const SKIN='#f6c9a3';
function toon(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);const t=o.t||0;
 const w=o.walk;const ph=w!=null?Math.sin(w*10):0;const bob=w!=null?Math.abs(Math.sin(w*10))*8:0;X.translate(0,-bob);
 [-1,1].forEach((d,i)=>{const p=w!=null?(i?ph:-ph):0;line([[d*26,-150],[d*30+p*30,-30]],22,O);line([[d*26,-150],[d*30+p*30,-30]],12,o.pants||'#2f3b57');ell(d*34+p*30+d*10,-18,34,18,o.shoes||'#2a2a2a',7)});
 const arm=(d,a)=>{const ang=(a!=null?a:(d>0?18:-18)+(w!=null?Math.sin(w*10+(d>0?0:Math.PI))*30:0))*Math.PI/180;const sx=d*62,sy=-270;const ex=sx+Math.sin(ang)*d*70,ey=sy+Math.cos(ang)*70;const hx=ex+Math.sin(ang*1.3)*d*58,hy=ey+Math.cos(ang*1.3)*58;
  line([[sx,sy],[ex,ey],[hx,hy]],30,O);line([[sx,sy],[ex,ey],[hx,hy]],18,o.shirt||'#3c5a9a');circ(hx,hy,20,o.hand||SKIN,6);return [hx,hy]};
 const hl=arm(-1,o.armL);
 path(()=>{X.moveTo(-70,-300);X.quadraticCurveTo(-100,-210,-80,-140);X.quadraticCurveTo(0,-110,80,-140);X.quadraticCurveTo(100,-210,70,-300);X.quadraticCurveTo(0,-325,-70,-300)},o.shirt||'#3c5a9a',0);vol(()=>{X.moveTo(-70,-300);X.quadraticCurveTo(-100,-210,-80,-140);X.quadraticCurveTo(0,-110,80,-140);X.quadraticCurveTo(100,-210,70,-300);X.quadraticCurveTo(0,-325,-70,-300)},0,-215,100,105);path(()=>{X.moveTo(-70,-300);X.quadraticCurveTo(-100,-210,-80,-140);X.quadraticCurveTo(0,-110,80,-140);X.quadraticCurveTo(100,-210,70,-300);X.quadraticCurveTo(0,-325,-70,-300)},null,8);
 if(o.belly)ell(0,-185,62,48,o.shirt2||'#4a6ab0',6);
 if(o.badge){path(()=>{for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,r=k%2?11:24;X.lineTo(-34+Math.cos(a)*r,-250+Math.sin(a)*r)}X.closePath()},'#f2c94c',5)}
 if(o.tie)path(()=>{X.moveTo(-10,-300);X.lineTo(10,-300);X.lineTo(16,-220);X.lineTo(0,-200);X.lineTo(-16,-220);X.closePath()},'#c0392b',5);
 if(o.cardigan){line([[0,-300],[0,-130]],6);for(let k=0;k<3;k++)circ(-14,-270+k*40,7,'#f2e6c9',3)}
 const hr=arm(1,o.armR);
 if(o.holdR)o.holdR(hr[0],hr[1]);if(o.holdL)o.holdL(hl[0],hl[1]);
 const hw=o.hw||118,hh=o.hh||108,hy=-310-hh;X.save();X.translate(0,hy);X.rotate((o.tilt||0)*Math.PI/180);
 if(o.hair=='afro'){for(let k=0;k<11;k++){const a=Math.PI+k*Math.PI/10;circ(Math.cos(a)*hw*1.05,-20+Math.sin(a)*hh*1.1,48,'#5a3a22',7)}}
 if(o.hair=='pinkbun'){circ(0,-hh-34,50,'#ff8ccf',7);for(let k=-1;k<=1;k+=2)circ(k*hw*.95,-6,42,'#ff8ccf',7)}
 if(o.hair=='messy'){for(let k=0;k<9;k++){const a=Math.PI*1.05+k*Math.PI*.9/8;path(()=>{X.moveTo(Math.cos(a)*hw*.8,Math.sin(a)*hh*.8);X.lineTo(Math.cos(a)*hw*1.25,Math.sin(a)*hh*1.25-10);X.lineTo(Math.cos(a+.18)*hw*.9,Math.sin(a+.18)*hh*.9)},'#c9772e',6)}}
 if(o.hair=='bun'){circ(0,-hh-30,46,'#d9d9d9',7);for(let k=-1;k<=1;k+=2)circ(k*hw*.95,-10,40,'#d9d9d9',7)}
 circ(-hw+4,6,26,SKIN,7);circ(hw-4,6,26,SKIN,7);
 ell(0,0,hw,hh,o.skin||SKIN,8);
 if(o.hair=='comb'){for(let k=0;k<3;k++)path(()=>{X.moveTo(-80+k*14,-hh+18+k*4);X.quadraticCurveTo(10,-hh-30+k*6,90,-hh+30+k*8)},null,7,'#3a2a1a')}
 if(o.hair=='buzz'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.05,Math.PI*1.95)},'#3a2f2a',8);for(let k=0;k<14;k++)circ(-80+rnd(k)*160,-hh+30+rnd(k+5)*40,3,'#6a5a50',0)}
 if(o.hair=='bun'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.02,Math.PI*1.98)},'#d9d9d9',8)}
 if(o.hair=='pinkbun'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.02,Math.PI*1.98)},'#ff8ccf',8)}
 if(o.hair=='messy'){path(()=>{X.ellipse(0,0,hw,hh,0,Math.PI*1.05,Math.PI*1.95)},'#c9772e',8)}
 if(o.hair=='bald'){[-1,1].forEach(d=>{for(let k=0;k<3;k++)circ(d*(hw*.9+4),-hh*.32+k*26,24,o.hairc||'#d9d9d9',6)});X.globalAlpha=.55;ell(-hw*.3,-hh*.62,hw*.28,hh*.12,'#fff',0,-.3);X.globalAlpha=1}  // bald dome + grey side tufts (o.hairc)
 if(o.headband){rr(-hw+6,-hh*.62,hw*2-12,26,10,'#e53935',6)}
 const E=o.eyes||'sleepy',lk=o.look||0;const ey=-22;
 const eye=(ex,r,lid,pupil)=>{circ(ex,ey,r,'#fff',7);if(E!='closed'){circ(ex+lk*r/40,ey+(lid>0?r*.25:0),pupil,O,0);circ(ex+lk*r/40-pupil*.35,ey-pupil*.3+(lid>0?r*.25:0),pupil*.3,'#fff',0)}
  if(lid>0){X.save();X.beginPath();X.arc(ex,ey,r,0,7);X.clip();X.fillStyle=o.skin||SKIN;X.fillRect(ex-r-2,ey-r-2,2*r+4,(2*r+4)*lid);X.restore();line([[ex-r,ey-r+(2*r)*lid],[ex+r,ey-r+(2*r)*lid]],7);circ(ex,ey,r,null,7)}};
 const bl=o.blink?1:0;
 if(E=='closed'||E=='happy'||bl){line([[-62,ey],[-22,ey]],8);line([[22,ey],[62,ey]],8)}
 else if(E=='sleepy'){eye(-42,30,.5,11);eye(44,26,.55,10)}
 else if(E=='wide'){eye(-44,38,0,9);eye(46,30,0,8)}
 else if(E=='crazy'){eye(-46,40,0,8);X.save();X.translate(0,6);eye(46,24,0,12);X.restore()}
 else if(E=='angry'){eye(-42,30,.35,12);eye(44,28,.35,12);line([[-80,-62],[-16,-38]],12);line([[80,-62],[16,-38]],12)}
 if(o.unibrow&&E!='angry')line([[-74,-64],[-30,-70],[0,-62],[30,-70],[74,-64]],12,'#3a2a1a');
 if(o.glasses){circ(-42,ey,40,null,8);circ(44,ey,38,null,8);line([[-2,ey],[6,ey]],6);X.globalAlpha=.25;circ(-42,ey,36,'#bfe6ff',0);circ(44,ey,34,'#bfe6ff',0);X.globalAlpha=1}
 X.globalAlpha=.45;ell(-76,34,24,14,'#ff8a8a',0);ell(78,34,24,14,'#ff8a8a',0);X.globalAlpha=1;
 circ(0,22,o.nose||34,'#f59a8e',7);circ(-10,12,9,'#fff',0);
 const M=o.mouth||'flat';const my=70;const tk=o.talk!=null?Math.abs(Math.sin(o.talk*17)):0;
 if(o.talk!=null&&M!='scream'){ell(0,my,20+tk*10,8+tk*22,'#6b1d1d',7);if(o.teeth)rr(-14,my-8-tk*20,28,16,3,'#fff',4)}
 else if(M=='grin'){path(()=>{X.moveTo(-46,my-10);X.quadraticCurveTo(0,my+38,46,my-10);X.closePath()},'#6b1d1d',7);rr(-18,my-12,17,22,3,'#fff',4);rr(1,my-12,17,22,3,'#fff',4)}
 else if(M=='o')ell(0,my,16,20,'#6b1d1d',7);
 else if(M=='gums'){path(()=>{X.moveTo(-50,my-14);X.quadraticCurveTo(0,my+44,50,my-14);X.closePath()},'#6b1d1d',7);path(()=>{X.moveTo(-44,my-12);X.quadraticCurveTo(0,my-2,44,my-12);X.lineTo(44,my-4);X.quadraticCurveTo(0,my+8,-44,my-4);X.closePath()},'#ff8fa3',0)}
 else if(M=='creepy'){path(()=>{X.moveTo(-60,my-16);X.quadraticCurveTo(0,my+40,60,my-16);X.quadraticCurveTo(0,my+8,-60,my-16)},'#6b1d1d',7);for(let k=-4;k<=4;k++)rr(k*12-5,my-10+Math.abs(k)*-1,10,12,2,'#fff',2)}
 else if(M=='scream'){ell(0,my+6,40,46,'#6b1d1d',8);ell(0,my+30,22,12,'#ff7f8a',0)}
 else if(M=='sad')path(()=>{X.moveTo(-26,my+8);X.quadraticCurveTo(0,my-12,26,my+8)},null,8);
 else if(M=='smile')path(()=>{X.moveTo(-30,my-6);X.quadraticCurveTo(0,my+20,30,my-6)},null,8);
 else if(M=='buck'){line([[-24,my],[24,my]],8);rr(-14,my,13,18,3,'#fff',4);rr(1,my,13,18,3,'#fff',4)}
 else line([[-22,my],[22,my]],8);
 if(o.tape){X.save();X.translate(0,my);[-.35,.35].forEach(a=>{X.save();X.rotate(a);rr(-70,-16,140,32,4,'#cfcfcf',5);X.restore()});X.restore()}
 if(o.glow){[-42,44].forEach(ex=>{X.globalAlpha=.4;circ(ex,-22,40,'#ffe14d',0);X.globalAlpha=1})}
 if(o.mustache)path(()=>{X.moveTo(-40,my-18);X.quadraticCurveTo(0,my-36,40,my-18);X.quadraticCurveTo(0,my-6,-40,my-18)},'#3a2a1a',5);
 if(o.sweat){ell(hw-10,-60+((t*60)%30),10,16,'#7fd1ff',4)}
 if(o.tear){ell(-40,10+((t*70)%60),10,15,'#7fd1ff',4)}
 if(o.hat=='cop'){X.save();X.translate(10,-hh+20);X.rotate(-.18);path(()=>{X.moveTo(-hw-20,10);X.quadraticCurveTo(-hw,-70,0,-80);X.quadraticCurveTo(hw,-70,hw+20,10);X.closePath()},'#1d2b4f',8);rr(-hw-24,-6,2*hw+48,30,10,'#111a33',7);path(()=>{X.moveTo(-40,-60);X.lineTo(-20,-40);X.lineTo(-40,-20);X.lineTo(-60,-40);X.closePath()},'#f2c94c',5);path(()=>{X.moveTo(-hw-10,24);X.quadraticCurveTo(-hw*.3,70,hw*.6,30)},'#0b1222',7);X.restore()}
 if(o.lightbulb){const fl=o.lightbulb;X.save();X.translate(0,-hh-120);X.globalAlpha=fl;circ(0,0,70,'rgba(255,240,150,.35)',0);X.globalAlpha=1;circ(0,0,40,fl>.5?'#ffe866':'#888',7);rr(-18,34,36,26,4,'#999',5);X.restore()}
 X.restore();X.restore()}
function gary(x,y,s,o={}){toon(x,y,s,Object.assign({hair:'comb',hat:'cop',unibrow:1,belly:1,badge:1,shirt:'#3c5a9a',shirt2:'#4a6ab0',mouth:'buck',hw:122,hh:112,mustache:0},o))}
// ================= BACKGROUNDS & PROPS =================
function roomWall(c1='#f1dcc0',c2='#e7c9a6',tile='#6fa59a'){X.fillStyle=c1;X.fillRect(-3000,-3000,8000,4300);X.fillStyle=c2;X.fillRect(-3000,1300,8000,3000);
 X.fillStyle=tile;X.fillRect(-3000,1060,8000,40);for(let i=-20;i<40;i++){X.fillStyle=(i%2)?'#e9d6bd':'#dcc4a5';X.fillRect(i*120,1100,120,200)}}
function office(t){roomWall('#e8dcc8','#cdb796','#3c5a9a');rr(700,330,220,280,8,'#f7f0de',7);txt('WANTED',810,380,40,'#c0392b',0);txt('???',810,500,80,'#999',0);
 rr(120,350,230,170,8,'#fff8e8',7);txt('ARRESTS',235,400,34,'#333',0);txt('0',235,470,70,'#c0392b',0);
 rr(-200,1180,1500,60,10,'#8a5a30',8);rr(-150,1240,60,300,6,'#6a4422',6);rr(1140,1240,60,300,6,'#6a4422',6);rr(820,1100,120,80,8,'#d9d9d9',6);circ(880,1090,30,'#6b3e1f',5)}
function jail(t,dim){X.fillStyle=dim?'#3a3f4d':'#8b8f9a';X.fillRect(-3000,-3000,8000,8000);for(let r=0;r<30;r++)for(let c=-10;c<20;c++){X.fillStyle=((r+c)%3==0)?(dim?'#454a59':'#9aa0ac'):(dim?'#3f4453':'#939aa6');X.fillRect(c*140+(r%2)*70,r*70-200,134,64)}
 X.fillStyle=dim?'#2a2e38':'#6e737f';X.fillRect(-3000,1300,8000,2000);rr(150,1120,520,60,10,'#6a4a2a',7)}
function bars(){for(let k=0;k<9;k++)line([[60+k*125,-200],[60+k*125,2200]],26,O),line([[60+k*125,-200],[60+k*125,2200]],14,'#8c939e');rr(-40,250,1200,40,8,'#8c939e',8)}
function lockPhone(t,p,body,time='14:59'){X.setTransform(1,0,0,1,0,0);X.fillStyle='#07080c';X.fillRect(0,0,1080,1920);X.globalAlpha=.5;circ(540,820,520,'#123a26',0);X.globalAlpha=1;
 X.save();X.translate(540,860);const z=lerp(1,1.12,p);X.scale(z,z);X.rotate(-.03);rr(-330,-620,660,1240,90,'#1b1b1f',10);const g=X.createLinearGradient(0,-600,0,600);g.addColorStop(0,'#2a1240');g.addColorStop(1,'#0c2a1c');X.fillStyle=g;X.beginPath();X.roundRect(-306,-596,612,1192,70);X.fill();rr(-70,-580,140,40,20,'#000',0);
 txt('Sunday',0,-470,34,'#fff',0,'600 ');txt(time,0,-380,130,'#fff',0,'700 ');X.translate(0,-200);X.scale(.64,.64);X.translate(-540,0);notif(0,C(p*3),'Memopai',body);X.restore()}
function calendar(x,y,s,day){X.save();X.translate(x,y);X.scale(s,s);rr(-170,-200,340,400,22,'#fff',8);rr(-170,-200,340,100,22,'#e53935',8);txt('DAY',0,-150,50,'#fff',0);txt(String(day),0,40,190,'#151515',0);X.restore()}
// ---- cruiser(x,y,s,o): police car, side view. o={t, flip, speed (wheel spin), siren (blink lights), driver:{eyes,talk,shock,angry,sweat,look}, tilt}. y = ground line under wheels.
function cruiser(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);if(o.tilt)X.rotate(o.tilt);X.translate(0,-160);
 X.globalAlpha=.25;ell(0,165,330,24,'#000',0);X.globalAlpha=1;
 path(()=>{X.moveTo(-210,-60);X.lineTo(-150,-190);X.lineTo(140,-190);X.lineTo(220,-60);X.closePath()},'#f4f4f4',8);
 path(()=>{X.moveTo(-180,-66);X.lineTo(-135,-170);X.lineTo(-15,-170);X.lineTo(-15,-66);X.closePath()},'#bfe3ff',6);
 path(()=>{X.moveTo(5,-66);X.lineTo(5,-170);X.lineTo(125,-170);X.lineTo(190,-66);X.closePath()},'#bfe3ff',6);
 if(o.driver){X.save();X.beginPath();X.moveTo(5,-66);X.lineTo(5,-170);X.lineTo(125,-170);X.lineTo(190,-66);X.closePath();X.clip();const d=o.driver;
  circ(95,-92,62,'#ffd2a8',6);rr(40,-168,110,40,12,'#2d3f73',6);rr(30,-136,130,14,6,'#1d2a50',4);circ(95,-150,9,'#ffd23f',3);face2(95,-88,.32,d);
  if(d.sweat){ell(150,-110+((t*60)%20),6,10,'#7fd1ff',3)}X.restore()}
 X.globalAlpha=.35;path(()=>{X.moveTo(-120,-160);X.lineTo(-90,-160);X.lineTo(-140,-80);X.lineTo(-165,-80);X.closePath()},'#fff',0);X.globalAlpha=1;
 rr(-340,-70,690,160,46,'#f4f4f4',8);X.fillStyle='#2d4a8a';X.fillRect(-334,-8,678,46);txt('POLICE',0,16,46,'#fff',0);
 const bl=o.siren?(Math.floor(t*8)%2):0;rr(-80,-222,80,34,10,bl?'#ff4d4d':'#8a1f1f',6);rr(0,-222,80,34,10,bl?'#2f6bff':'#ff4d4d',6);
 if(o.siren){X.globalAlpha=.35;circ(bl?40:-40,-205,90,bl?'#4d7dff':'#ff4d4d',0);X.globalAlpha=1}
 ell(338,-30,16,22,'#fff6b0',5);rr(-352,-40,22,40,6,'#e53935',5);
 [[-200],[210]].forEach(([wx])=>{circ(wx,95,66,'#222',8);circ(wx,95,30,'#aaa',5);const a=t*(o.speed||0);for(let k=0;k<3;k++){const b=a+k*2.09;line([[wx,95],[wx+Math.cos(b)*26,95+Math.sin(b)*26]],6,'#555')}});
 X.restore()}
// ================= CROW (craft ladder 2026-11-11 10:00) =================
// crow(x,y,s,{t,flap,angry,talk,look,squint,shock,flip,scream}) — y = feet. Reusable bird character with wing flap follow-through.
function crow(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 const fl=o.flap?Math.sin(t*22+(o.ph||0)):0;const hop=o.flap?Math.abs(fl)*-18:0;X.translate(0,hop);
 if(!o.flap){line([[-20,-60],[-26,0]],9,'#e0a030');line([[20,-60],[24,0]],9,'#e0a030');line([[-40,2],[-10,2]],8,'#e0a030');line([[6,2],[40,2]],8,'#e0a030')}
 path(()=>{X.moveTo(-60,-120);X.lineTo(-170,-90+fl*10);X.lineTo(-160,-60);X.lineTo(-60,-80);X.closePath()},'#1f2230',7);
 ell(0,-120,90,72,'#2a2e40',8);ell(10,-100,52,36,'#3a3f58',0);
 X.save();X.translate(-20,-140);X.rotate(-.6+fl*.9);ell(-60,0,80,30,'#22263a',7);X.restore();
 const hx=60,hy=-205;circ(hx,hy,62,'#2a2e40',8);
 path(()=>{X.moveTo(hx+40,hy-14);X.lineTo(hx+(o.scream?120:130),hy+(o.scream?-30:4));X.lineTo(hx+44,hy+14);X.closePath()},'#f2b134',7);
 if(o.scream||o.talk!=null){const m=o.scream?1:Math.abs(Math.sin(o.talk*16));path(()=>{X.moveTo(hx+44,hy+16);X.lineTo(hx+118,hy+10+m*34);X.lineTo(hx+44,hy+28+m*10);X.closePath()},'#e09a1e',7)}
 const lk=o.look||0;const r=22;circ(hx+14,hy-14,r,'#fff',6);
 if(o.squint){X.fillStyle='#2a2e40';X.fillRect(hx+14-r,hy-14-r,2*r,r*.9);line([[hx+14-r,hy-14-r*.1],[hx+14+r,hy-14-r*.1]],6)}
 circ(hx+14+lk*8,hy-12,o.shock?6:10,'#111',0);circ(hx+10+lk*8,hy-16,3.5,'#fff',0);
 if(o.angry||o.scream)line([[hx-16,hy-48],[hx+40,hy-30]],10,'#111');
 X.restore()}
// door(x,y,s,o): a doorway with a swinging door. y = floor line, x = centre of the frame. o.open 0..1 (swing toward camera, hinge on left),
// o.col door colour, o.frame frame colour, o.inside colour/fn seen through the opening, o.sign optional label above. Size ~ 300x560 at s=1.
function door(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s,s);const W=300,H=560,op=C(o.open||0);
 rr(-W/2-34,-H-34,W+68,H+34,10,o.frame||'#8a5a30',8);
 X.save();X.beginPath();X.rect(-W/2,-H,W,H);X.clip();if(typeof o.inside=='function')o.inside();else{X.fillStyle=o.inside||'#2a2230';X.fillRect(-W/2,-H,W,H)}
 const g=X.createLinearGradient(-W/2,0,W/2,0);g.addColorStop(0,'rgba(0,0,0,.35)');g.addColorStop(.4,'rgba(0,0,0,0)');X.fillStyle=g;X.fillRect(-W/2,-H,W,H);X.restore();
 const k=Math.cos(op*Math.PI*.5*1.05),pw=W*k,bulge=Math.sin(op*Math.PI*.5)*40;
 if(pw>4){const hx=-W/2;path(()=>{X.moveTo(hx,-H);X.lineTo(hx+pw,-H-bulge);X.lineTo(hx+pw,bulge*.3);X.lineTo(hx,0);X.closePath()},o.col||'#b5763c',7);
  X.globalAlpha=.25;path(()=>{X.moveTo(hx+pw*.15,-H*.9);X.lineTo(hx+pw*.85,-H*.92-bulge*.85);X.lineTo(hx+pw*.85,-H*.55-bulge*.8);X.lineTo(hx+pw*.15,-H*.55);X.closePath()},'#000',0);
  path(()=>{X.moveTo(hx+pw*.15,-H*.45);X.lineTo(hx+pw*.85,-H*.45-bulge*.6);X.lineTo(hx+pw*.85,-H*.1-bulge*.3);X.lineTo(hx+pw*.15,-H*.1);X.closePath()},'#000',0);X.globalAlpha=1;
  circ(hx+pw*.86,-H*.48-bulge*.55,14,'#f2c94c',5)}
 if(o.sign){rr(-110,-H-110,220,64,12,'#fff8e8',6);txt(o.sign,0,-H-78,34,'#333',0)}
 X.restore()}
// snowman(x,y,s,{t,melt:0-1,hat:'cop'|'top'|0,scarf:'#e53935'|0,face:{...face2 opts},sweat,arms:1,wave}) — y = ground line. melt squashes + widens + puddle.
function snowman(x,y,s,o={}){const t=o.t||0,m=C(o.melt||0);X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
  if(m>0){X.globalAlpha=.85;ell(0,8,170+m*230,22+m*26,'#bfe6ff',6);X.globalAlpha=1;ell(-40,2,60+m*90,8+m*8,'#e9f7ff',0)}
  const sy=1-m*.78,sx=1+m*.35;X.save();X.scale(sx,sy);
  const W='#f7fbff',S2='#d6e6f5';
  const ball=(cy,r)=>{circ(0,cy,r,W,8);X.save();X.beginPath();X.arc(0,cy,r-4,0,7);X.clip();X.globalAlpha=.55;circ(r*.35,cy+r*.3,r*.9,S2,0);X.globalAlpha=1;X.restore();circ(-r*.35,cy-r*.4,r*.18,'#fff',0)};
  ball(-150,150);ball(-390,112);
  if(o.arms!==0&&m<.7){const w=o.wave?Math.sin(t*9)*18:0;line([[-90,-400],[-230,-470-w],[-270,-520-w]],12,'#6b4423');line([[-230,-470-w],[-275,-455-w]],9,'#6b4423');
    line([[90,-400],[230,-460+w],[275,-500+w]],12,'#6b4423');line([[230,-460+w],[270,-430+w]],9,'#6b4423')}
  [-330,-400,-470].forEach(b=>circ(0,b+10,11,'#222',0));
  ball(-590,92);
  if(o.scarf){rr(-100,-520,200,44,20,o.scarf,7);rr(30,-500,46,140,14,o.scarf,7);line([[40,-370],[40,-350]],6,'#fff');line([[66,-370],[66,-350]],6,'#fff')}
  const f=o.face||{};const lk=f.look||0;
  if(f.talk!=null||f.shock||f.angry||f.smug||f.squint){X.save();X.translate(0,-610);face2(0,0,.55,Object.assign({},f));X.restore()}
  else{circ(-30+lk,-625,12,'#222',0);circ(30+lk,-625,12,'#222',0);[-40,-20,0,20,40].forEach((dx,i)=>circ(dx,-560+Math.abs(dx)*-.25+12,7,'#222',0))}
  path(()=>{X.moveTo(-6+lk,-602);X.lineTo(90+lk,-588);X.lineTo(-6+lk,-578);X.closePath()},'#ff8a1e',6);
  if(o.hat=='cop'){rr(-95,-700,190,50,10,'#2d3f73',7);path(()=>{X.moveTo(-80,-690);X.quadraticCurveTo(0,-790,80,-690);X.closePath()},'#2d3f73',7);rr(-110,-662,220,22,10,'#1d2a50',6);circ(0,-718,13,'#ffd23f',4)}
  else if(o.hat=='top'){rr(-70,-800,140,130,8,'#222',7);rr(-110,-680,220,24,10,'#222',7);rr(-70,-712,140,22,0,'#c62828',0)}
  X.restore();
  if(o.sweat||m>.05){for(let k=0;k<5;k++){const ph=(t*1.6+k*.23)%1,dx=(k-2)*55*sx;X.globalAlpha=1-ph;ell(dx,(-520+ph*420)*sy,9,14,'#7fd1ff',3);X.globalAlpha=1}}
  X.restore()}
// ---- wombat(x,y,s,o): chunky wombat, side-ish 3/4 view. o={t, flip, walk (leg cycle), face:{talk,smug,squint,shock,angry,look}, shades (sunglasses), hat:'boss'}. y = ground.
function wombat(x,y,s,o={}){const t=o.t||0,F='#8a6a4f',F2='#6e523b',B='#a88768';X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 X.globalAlpha=.25;ell(0,4,230,22,'#000',0);X.globalAlpha=1;
 const lg=o.walk?Math.sin(t*12)*14:0;[[-130,lg],[-60,-lg],[70,lg],[140,-lg]].forEach(([lx,d])=>{rr(lx-28,-70+Math.abs(d)*.3,56,74,22,F2,7);ell(lx+d*.4,0,34,14,'#4a3828',5)});
 const br=1+Math.sin(t*3)*.015;X.save();X.scale(1,br);ell(0,-150,230,135,F,8);X.save();X.beginPath();X.ellipse(0,-150,226,131,0,0,7);X.clip();X.globalAlpha=.5;ell(60,-90,230,110,F2,0);X.globalAlpha=.35;ell(-80,-230,140,50,'#c9a888',0);X.globalAlpha=1;X.restore();X.restore();
 X.save();X.translate(150,-200);X.rotate(Math.sin(t*2)*.04);
 [-1,1].forEach(d=>{ell(d*70,-120,30,38,F,7);ell(d*70,-116,15,22,'#d9a7a0',0)});
 ell(0,-20,135,120,F,8);ell(10,30,95,70,B,0);
 X.save();X.translate(0,-55);face2(0,0,.5,Object.assign({},o.face||{}));X.restore();
 ell(18,10,52,34,'#3a2a20',7);circ(2,2,9,'#000',0);circ(34,2,9,'#000',0);circ(0,-4,8,'#fff',0);
 if(o.shades){rr(-95,-80,80,40,14,'#111',6);rr(5,-80,80,40,14,'#111',6);line([[-15,-62],[5,-62]],8,'#111');X.globalAlpha=.5;line([[-80,-72],[-55,-72]],6,'#fff');X.globalAlpha=1}
 if(o.hat=='boss'){rr(-90,-200,180,70,10,'#222',7);rr(-130,-140,260,22,10,'#222',7);rr(-90,-160,180,18,0,'#c62828',0)}
 X.restore();X.restore()}
// ---- pcube(x,y,s,o): small brown cube (wombat poop "die"), 3/4 view. o={rot, dots (draw dice dots), glow}
function pcube(x,y,s,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);const a=40,b=22;
 if(o.glow){X.globalAlpha=.35;circ(0,-30,90,'#ffd23f',0);X.globalAlpha=1}
 path(()=>{X.moveTo(-a,-b);X.lineTo(0,-2*b);X.lineTo(a,-b);X.lineTo(0,0);X.closePath()},'#9b7452',5);
 path(()=>{X.moveTo(-a,-b);X.lineTo(0,0);X.lineTo(0,2*a-b);X.lineTo(-a,2*a-2*b);X.closePath()},'#6f4f33',5);
 path(()=>{X.moveTo(a,-b);X.lineTo(0,0);X.lineTo(0,2*a-b);X.lineTo(a,2*a-2*b);X.closePath()},'#5a3e27',5);
 if(o.dots){circ(0,-b,6,'#f4e3c3',0);circ(-20,20,5,'#f4e3c3',0);circ(20,24,5,'#f4e3c3',0)}X.restore()}
// brain(x,y,s,{t,talk,shock,angry,smug,squint,look,mega,armL,armR,walk,cap,col,zz,stamp}) — talking brain character (feet at y). Craft ladder 2026-11-11 16:00.
function brain(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 const w=o.walk;const ph=w!=null?Math.sin(w*12):0;const bob=w!=null?Math.abs(ph)*10:Math.sin(t*3)*4;
 [-1,1].forEach((d,i)=>{const p=w!=null?(i?ph:-ph)*22:0;line([[d*38,-70],[d*44+p,-14]],20,O);line([[d*38,-70],[d*44+p,-14]],10,'#e7849c');ell(d*50+p,-10,30,14,'#7a2e45',6)});
 X.translate(0,-bob);const P=o.col||'#ff9fb8',D='#d9607e';
 const L=[[-100,-200,92],[100,-200,92],[-50,-280,92],[55,-285,88],[-115,-130,70],[115,-130,70],[0,-140,100]];
 L.forEach(([a,b,r])=>circ(a,b,r,P,9));L.forEach(([a,b,r])=>circ(a,b,r-4,P,0));
 X.save();X.globalAlpha=.35;circ(-60,-300,40,'#fff',0);X.restore();
 const fold=(pts)=>path(()=>{X.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=4)X.quadraticCurveTo(pts[i],pts[i+1],pts[i+2],pts[i+3])},null,7,D);
 fold([0,-360,-20,-300,0,-250]);fold([-150,-240,-120,-270,-90,-230,-60,-200,-30,-240]);fold([150,-240,120,-275,95,-230,70,-195,40,-235]);fold([-170,-150,-150,-110,-120,-140]);fold([170,-150,150,-110,120,-140]);
 const arm=(d,a)=>{const ang=(a!=null?a:(d>0?25:-25)+(w!=null?Math.sin(w*12+(d>0?0:3))*25:Math.sin(t*5+d)*6))*Math.PI/180;const sx=d*170,sy=-140;const ex=sx+Math.sin(ang)*d*60,ey=sy+Math.cos(ang)*60;const hx=ex+Math.sin(ang*1.2)*d*50,hy=ey+Math.cos(ang*1.2)*50;
  line([[sx,sy],[ex,ey],[hx,hy]],20,O);line([[sx,sy],[ex,ey],[hx,hy]],10,'#e7849c');circ(hx,hy,17,'#ffc2d1',6);return [hx,hy]};
 arm(-1,o.armL);const hr=arm(1,o.armR);
 X.save();X.translate(0,-170);face2(0,0,.62,{talk:o.talk,shock:o.shock,angry:o.angry,smug:o.smug,squint:o.squint,look:o.look});X.restore();
 if(o.mega){X.save();X.translate(hr[0],hr[1]);X.rotate(-.35);path(()=>{X.moveTo(0,-22);X.lineTo(120,-70);X.lineTo(120,70);X.lineTo(0,22);X.closePath()},'#ffd23f',8);ell(120,0,22,70,'#f4a51c',8);rr(-30,-14,40,60,8,'#e53935',6);
  if(o.talk!=null){for(let k=0;k<3;k++){const a=(t*3+k/3)%1;X.globalAlpha=1-a;X.beginPath();X.arc(130,0,60+a*120,-.6,.6);X.lineWidth=10;X.strokeStyle='#fff';X.stroke()}X.globalAlpha=1}X.restore()}
 if(o.cap){path(()=>{X.moveTo(-120,-300);X.quadraticCurveTo(-20,-440,140,-330);X.quadraticCurveTo(200,-260,230,-200);X.lineTo(110,-310);X.quadraticCurveTo(0,-330,-120,-300)},o.cap,8);circ(235,-195,26,'#fff',7)}
 if(o.zz){X.font="900 70px Inter";X.fillStyle='#fff';X.strokeStyle=O;X.lineWidth=8;for(let k=0;k<3;k++){const a=(t*.6+k/3)%1;X.globalAlpha=Math.sin(a*Math.PI);const zx=150+a*120+k*10,zy=-330-a*200;X.strokeText('Z',zx,zy);X.fillText('Z',zx,zy)}X.globalAlpha=1}
 X.restore()}
// ---- clockman(x,y,s,o): walking alarm-clock character ("Time"). o={t, flip, face:{talk,smug,squint,shock,angry,look}, frozen (hands stop at 10:10), spin (hands race), ring (bells shake + motion lines), cuffs (handcuffed wrists), walk (leg cycle), col (body colour)}. y = ground under feet.
function clockman(x,y,s,o={}){const t=o.t||0,B=o.col||'#e94b3c',B2='#b8352a';X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 const rg=o.ring?Math.sin(t*60)*.08:0;X.rotate(rg*.3);
 const lg=o.walk?Math.sin(t*12)*18:0;[[-70,lg],[70,-lg]].forEach(([lx,d])=>{line([[lx,-120],[lx+d,-30]],22,O);line([[lx,-120],[lx+d,-30]],12,'#333');ell(lx+d+12,-18,38,18,'#2a2a2a',7)});
 // bells + hammer
 [-1,1].forEach(d=>{X.save();X.translate(d*120,-470);X.rotate(d*.5+(o.ring?Math.sin(t*55+d)*.25:0));path(()=>{X.arc(0,0,62,Math.PI,0);X.closePath()},'#ffd23f',7);rr(-10,-80,20,22,6,'#ffd23f',5);X.restore()});
 line([[0,-500],[0,-560]],12,O);circ(0,-565,16,'#ffd23f',6);
 if(o.ring){X.save();X.lineWidth=8;X.strokeStyle='#fff';[1,2].forEach(k=>{X.globalAlpha=.6-k*.15;X.beginPath();X.arc(0,-470,180+k*40+(t*200%30),-2.6,-0.5);X.stroke()});X.restore()}
 // arms
 const ar=(d)=>{const up=o.cuffs?0:Math.sin(t*4+d)*10;const hx=o.cuffs?d*28:d*190,hy=o.cuffs?-150:-230+up;line([[d*150,-300],[d*175,-260],[hx,hy]],22,O);line([[d*150,-300],[d*175,-260],[hx,hy]],12,'#333');circ(hx,hy,22,'#fff',6);return[hx,hy]};
 const L=ar(-1),R=ar(1);
 // body
 circ(0,-310,190,B,9);X.save();X.beginPath();X.arc(0,-310,186,0,7);X.clip();X.globalAlpha=.4;circ(70,-240,190,B2,0);X.globalAlpha=1;X.restore();
 circ(0,-310,150,'#fffaf0',7);
 for(let k=0;k<12;k++){const a=k*Math.PI/6;line([[Math.sin(a)*128,-310-Math.cos(a)*128],[Math.sin(a)*(k%3?140:116),-310-Math.cos(a)*(k%3?140:116)]],k%3?5:9,'#333')}
 // hands (behind the face features)
 const sp=o.spin?t*14:t*.05,hA=o.frozen?-Math.PI/3*1.0:sp/12,mA=o.frozen?Math.PI/3:sp;
 X.save();X.translate(0,-310);X.globalAlpha=.35;line([[0,0],[Math.sin(hA)*70,-Math.cos(hA)*70]],12,'#333');line([[0,0],[Math.sin(mA)*110,-Math.cos(mA)*110]],8,'#333');X.globalAlpha=1;circ(0,0,10,'#333',0);X.restore();
 X.save();X.translate(0,-330);face2(0,0,.62,Object.assign({},o.face||{}));X.restore();
 if(o.cuffs)cuffs(0,-150,.32,0,1);
 X.restore()}

// ---- hbird(): hummingbird character (2026-11-11 20:00 craft ladder). o:{t,face,flip,watch,tap,phone,col,belly,throat}
// blurred fast wings (3 ghost frames), long beak, hover bob; tap 0..1 lifts the near wing to tap a tiny wristwatch.
function hbird(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y+Math.sin(t*7)*8);X.scale(s*(o.flip?-1:1),s);
 const col=o.col||'#e8833a',bel=o.belly||'#fff3e0',thr=o.throat||'#e53935';
 // far wing blur
 for(let k=0;k<3;k++){const a=Math.sin(t*60+k*2.1);X.globalAlpha=.22;X.save();X.translate(-10,-40);X.rotate(-1.1+a*.7);ell(0,-90,34,95,'#cfe8ff',0);X.restore()}X.globalAlpha=1;
 // tail
 path(()=>{X.moveTo(-70,40);X.lineTo(-170,110);X.lineTo(-150,60);X.lineTo(-185,55);X.lineTo(-80,10);X.closePath()},col,7);
 // body
 ell(0,10,105,72,col,8,-.35);ell(18,30,62,40,bel,0,-.35);
 // head + throat
 circ(70,-55,62,col,8);path(()=>{X.moveTo(40,-15);X.quadraticCurveTo(80,20,118,-25);X.quadraticCurveTo(90,-5,40,-15)},thr,0);
 // beak
 path(()=>{X.moveTo(122,-62);X.lineTo(250,-74);X.lineTo(124,-46);X.closePath()},'#2b2b2b',5);
 face2(78,-68,.42,o.face||{});
 // near wing (blur) or tapping wing
 if(o.tap!=null){const k=o.tap;X.save();X.translate(-5,-20);X.rotate(lerp(.25,.75,k));ell(45,0,90,28,'#bfe0ff',6);X.restore();}
 else for(let k=0;k<3;k++){const a=Math.sin(t*60+k*2.1+1);X.globalAlpha=k?0.3:0.55;X.save();X.translate(-5,-30);X.rotate(-1.3+a*.8);ell(0,-95,36,100,'#e3f2ff',k?0:5);X.restore()}
 X.globalAlpha=1;
 if(o.watch){X.save();X.translate(o.tap!=null?60:30,o.tap!=null?40:60);rr(-30,-8,60,16,6,'#5a3a2a',4);circ(0,0,24,'#fff',6);line([[0,0],[0,-14]],4);line([[0,0],[10,4]],4);X.restore()}
 if(o.phone){X.save();X.translate(40,70);X.rotate(-.15);rr(-26,-46,52,92,10,'#1b1b1f',5);rr(-19,-38,38,76,6,'#25d366',0);X.restore()}
 X.restore()}
// ---- feeder(): hanging red nectar feeder prop. lvl 0..1 nectar level, swing angle in rad
function feeder(x,y,s,lvl=1,swing=0){X.save();X.translate(x,y);X.scale(s,s);X.rotate(swing);line([[0,-260],[0,-150]],5,'#444');
 rr(-60,-160,120,200,40,'rgba(230,245,255,.55)',7);if(lvl>0){X.save();X.beginPath();X.roundRect(-56,-156,112,192,36);X.clip();X.fillStyle='#ff3b4f';X.fillRect(-60,36-192*lvl,120,200);X.restore()}
 rr(-60,-160,120,200,40,null,7);ell(0,60,130,36,'#e53935',8);for(let k=-1;k<=1;k++){circ(k*80,52,18,'#ffe14d',5)}X.restore()}
// ---- endcard(t,r,o): Memopai end card (owner asked for a logo end card + spoken call to action, 2026-11-11). Full screen: mascot pops in and bobs,
// "Memopai" wordmark, tagline, green "memopai.com" pill. Use as the LAST shot: sh(T('cta'),(t,r)=>endcard(t,r)). o={tag:'tagline text', url:'memopai.com'}
function endcard(t,r,o={}){NOFX=1;X.setTransform(1,0,0,1,0,0);
 const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#17123d');g.addColorStop(.55,'#2b2070');g.addColorStop(1,'#0d2748');X.fillStyle=g;X.fillRect(0,0,1080,1920);
 glow(540,620,640,'150,140,255',.5);for(let k=0;k<26;k++){const a=.25+.5*Math.abs(Math.sin(t*1.7+k));X.globalAlpha=a;circ(rnd(k)*1080,rnd(k+50)*1300+((t*18+k*40)%60),2+rnd(k+9)*4,'#fff',0)}X.globalAlpha=1;
 const p=C(sp(r,12,.5)),bob=Math.sin(t*3)*14;
 if(MAS.complete&&MAS.naturalWidth){const w=580*p,h=w*MAS.height/MAS.width;X.save();X.globalAlpha=.3;X.fillStyle='#000';X.beginPath();X.ellipse(540,930,230*p-bob,26,0,0,7);X.fill();X.restore();X.drawImage(MAS,540-w/2,620-h/2+bob,w,h)}
 const a1=C((r-.2)/.3);X.save();X.globalAlpha=a1;X.translate(0,lerp(40,0,eo(a1)));txt('Memopai',540,1060,156,'#ffffff',0);txt(o.tag||'Your reminder assistant on WhatsApp',540,1172,46,'#cfd3ff',0,'600 ');X.restore();
 const a2=C(sp(r-.5,14,.5));if(a2>0){X.save();X.translate(540,1290);X.scale(a2,a2);X.font="900 66px 'Inter Display',Inter";const u=o.url||'memopai.com',w=X.measureText(u).width+110;X.fillStyle='#25d366';X.beginPath();X.roundRect(-w/2,-58,w,116,58);X.fill();txt(u,0,2,66,'#08301a',0);X.restore()}}

// wbin(x,y,s,o): wheelie bin (feet at y). o.col lid/body colour, o.full 0..1 rubbish overflowing, o.tilt deg (tilted back on its wheels while pulled), o.lid 0..1 lid open, o.flies
function wbin(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);X.rotate((o.tilt||0)*Math.PI/180);const col=o.col||'#2f7d4f',dk=o.dark||'#1f5a38';
 circ(-58,-26,26,'#222',7);circ(-58,-26,9,'#888',0);
 path(()=>{X.moveTo(-90,-40);X.lineTo(-110,-330);X.lineTo(110,-330);X.lineTo(90,-40);X.closePath()},col,8);if(typeof vol==='function')vol(()=>{X.rect(-110,-330,220,290)},-20,-190,110,150);
 for(let k=0;k<3;k++)line([[-60+k*60,-290],[-52+k*52,-70]],5,dk);rr(-122,-350,244,26,8,dk,7);
 if(o.full){const f=o.full;for(let k=0;k<7;k++){const bx=-90+k*30,by=-360-rnd(k)*70*f;circ(bx,by,26+rnd(k+3)*14,['#444','#5a5a5a','#3a3a3a','#e0e0e0'][k%4],6)}X.save();X.translate(40,-430*f);X.rotate(.4);rr(-30,-20,60,40,6,'#f2c94c',5);X.restore()}
 X.save();X.translate(-122,-350);X.rotate(-(o.lid||0)*1.9);rr(0,-24,252,30,10,col,7);rr(236,-30,30,18,6,dk,5);X.restore();
 rr(96,-372,26,46,8,dk,6);
 if(o.flies){for(let k=0;k<4;k++){const a=(o.t||0)*6+k*1.6;txt('·',Math.cos(a)*90,-470+Math.sin(a*1.3)*40,60,'#111',0)}}
 X.restore()}

// ================= PARKING METER (craft ladder 2026-11-12 09:00) =================
// pmeter(x,y,s,o): parking meter on a post, feet at y. o.l1/o.l2 = two display lines (e.g. 'PAID UNTIL','2:00 PM'),
// o.col display text colour, o.flash (true = display blinks red), o.coin 0..1 coin dropping into the slot, o.t time,
// o.shake px wobble, o.glow (display glow). Head centre ≈ y-560*s.
function pmeter(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x+(o.shake?Math.sin(t*70)*o.shake:0),y);X.scale(s,s);
 if(typeof gshadow==='function')gshadow(0,0,70,.3);
 rr(-16,-430,32,430,8,'#5d6470',7);rr(-34,-20,68,24,6,'#4a505a',6);
 path(()=>{X.moveTo(-110,-430);X.lineTo(-110,-640);X.quadraticCurveTo(-110,-730,0,-735);X.quadraticCurveTo(110,-730,110,-640);X.lineTo(110,-430);X.quadraticCurveTo(0,-405,-110,-430)},'#9aa6b4',8);
 if(typeof vol==='function')vol(()=>{X.rect(-110,-735,220,320)},-20,-590,110,170);
 rr(-84,-690,168,120,18,'#0f1a14',7);const bl=o.flash?(Math.floor(t*6)%2):1;
 if(o.glow!==false&&bl&&typeof glow==='function')glow(0,-630,120,o.flash?'255,80,60':'120,255,170',.25);
 if(bl){txt(o.l1||'PAID UNTIL',0,-660,24,o.col||'#7dffb0',0,'800 ');txt(o.l2||'2:00 PM',0,-612,o.l2&&o.l2.length>8?30:40,o.col||'#7dffb0',0,'900 ')}
 rr(-24,-548,48,14,6,'#222',4);rr(-60,-510,120,46,10,'#7b8592',5);txt('P',0,-487,32,'#fff',0);
 if(o.coin!=null&&o.coin<1){const p=C(o.coin);const cy=lerp(-760,-545,eo(p));X.save();X.translate(lerp(60,0,p),cy);X.rotate(p*9);X.scale(lerp(1,.6,p),1);circ(0,0,30,'#f2c94c',6);circ(0,0,20,null,4,'#c79a22');X.restore()}
 X.restore()}

// router(x,y,s,o): home WiFi router (feet at y). o={t, on:0..1 (0 = red offline LED, 1 = green + wifi arcs pulse), label}
function router(x,y,s,o={}){const t=o.t||0,on=C(o.on||0);X.save();X.translate(x,y);X.scale(s,s);gshadow(0,0,190,.28);
 [-110,110].forEach((ax,i)=>{X.save();X.translate(ax,-90);X.rotate((i?1:-1)*.18+Math.sin(t*2+i)*.03);rr(-11,-170,22,175,10,'#2b2f3a',6);circ(0,-172,14,'#2b2f3a',5);X.restore()});
 rr(-170,-120,340,110,30,'#f3f4f8',8);vol(()=>X.roundRect(-170,-120,340,110,30),0,-80,170,60);rr(-150,-28,300,16,8,'#d6d9e2',0);
 for(let k=0;k<5;k++){const lit=on>.5?(k<4||Math.sin(t*14+k)>0):(k==0&&Math.sin(t*6)>-.3);const c=on>.5?'#3bdc6a':'#ff3b30';circ(-100+k*50,-62,11,lit?c:'#b9bdc8',4);if(lit)glow(-100+k*50,-62,40,on>.5?'80,240,120':'255,70,60',.5)}
 if(o.label)txt(o.label,0,-150,30,'#151515',0);
 if(on>0){for(let k=0;k<3;k++){const ph=((t*1.2+k/3)%1);X.save();X.globalAlpha=on*(1-ph)*.9;X.lineWidth=14;X.lineCap='round';X.strokeStyle='#25d366';X.beginPath();X.arc(0,-150,60+ph*170,-Math.PI*.78,-Math.PI*.22);X.stroke();X.restore()}}
 X.restore()}
// crt(x,y,s,o): retro 1999 CRT monitor + keyboard on a desk line at y. o={t, scr:'TEXT', scr2:'2nd line', col:screen colour, glowc:'r,g,b', on}
function crt(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);gshadow(0,0,260,.3);
 rr(-200,-470,400,360,40,'#e6dfc9',8);vol(()=>X.roundRect(-200,-470,400,360,40),0,-290,200,180);rr(-120,-120,240,60,14,'#d4ccb2',7);
 const col=o.col||'#1d63d6';rr(-160,-430,320,250,26,col,7);X.save();X.beginPath();X.roundRect(-160,-430,320,250,26);X.clip();
 for(let k=0;k<26;k++){X.fillStyle='rgba(0,0,0,.10)';X.fillRect(-160,-430+k*10+((t*40)%10),320,4)}X.restore();
 if(o.scr)txt(o.scr,0,o.scr2?-330:-305,o.scr.length>12?30:38,'#fff',6);if(o.scr2)txt(o.scr2,0,-270,30,'#ffe14d',6);
 glow(0,-305,260,o.glowc||'90,150,255',.35);circ(150,-150,8,'#5ad16a',0);
 rr(-230,-50,460,50,12,'#d9d2bb',7);for(let r=0;r<2;r++)for(let k=0;k<9;k++)rr(-210+k*47,-42+r*20,38,14,3,'#bdb59c',0);X.restore()}

// ---- pillbox(x,y,s,{full:[7 bools]|n, open:-1..6, lidP:0-1, t}): weekly pill organizer (M T W T F S S), 2026-11-12. full: which days still hold pills
// (array, or a number = first n days full). open: index of the day whose lid is flipping open (lidP 0..1). Bottom-centre at (x,y), width ~560*s.
function pillbox(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s,s);const D='MTWTFSS',W=76,full=Array.isArray(o.full)?o.full:D.split('').map((_,i)=>i<(o.full==null?7:o.full));
 gshadow(0,0,320,.25);rr(-290,-110,580,110,22,'#ffffff',8);vol(()=>X.roundRect(-290,-110,580,110,22),0,-60,290,60);
 for(let i=0;i<7;i++){const cx=-246+i*82;rr(cx-W/2+4,-98,W-8,86,14,'#eef3f7',5);
  if(full[i]){circ(cx-12,-46,15,['#ff6b6b','#ffd23f','#7fd1ff','#8ff07a','#c4b2ff','#ff9fd6','#ffb74d'][i],5);ell(cx+14,-38,13,9,'#ffffff',4,.4)}
  const lp=i===o.open?eo(C(o.lidP||0)):0;X.save();X.translate(cx,-104);X.scale(1,1-lp*1.9);
  X.globalAlpha=.92;rr(-W/2+2,-22,W-4,30,10,['#ff8a80','#ffd54f','#81d4fa','#a5d6a7','#b39ddb','#f48fb1','#ffcc80'][i],5);X.globalAlpha=1;
  if(lp<.5)txt(D[i],0,-7,26,'#151515',0);X.restore()}
 X.restore()}

// armchair(x,y,s,{col,col2,front}) — cosy wingback armchair, y = floor line. Call once with front:0 BEFORE the seated toon (back + seat), then with front:1 AFTER it (arm rests + cushion lip) so the character sits inside.
function armchair(x,y,s,o={}){const c=o.col||'#b5523b',c2=o.col2||'#9a4230';X.save();X.translate(x,y);X.scale(s,s);
 if(!o.front){gshadow(0,0,300,.3);rr(-60-170,-30,30,40,8,'#5a3a26',6);rr(200,-30,30,40,8,'#5a3a26',6);
  path(()=>{X.moveTo(-230,-260);X.quadraticCurveTo(-250,-640,-120,-660);X.lineTo(120,-660);X.quadraticCurveTo(250,-640,230,-260);X.closePath()},c,8);vol(()=>{X.moveTo(-230,-260);X.quadraticCurveTo(-250,-640,-120,-660);X.lineTo(120,-660);X.quadraticCurveTo(250,-640,230,-260);X.closePath()},0,-500,240,200);
  for(let k=0;k<3;k++)circ(-90+k*90,-520,8,c2,0);rr(-240,-300,480,280,40,c2,8)}
 else{rr(-280,-340,110,330,46,c,8);rr(170,-340,110,330,46,c,8);circ(-225,-330,52,c,8);circ(225,-330,52,c,8);rr(-200,-90,400,70,30,c2,7)}
 X.restore()}
// wallcal(x,y,s,{weeks:6,marks:'x'|'heart', n, p, month}) — month wall calendar; Sunday column gets n marks (X or heart) that pop in as p goes 0..1.
function wallcal(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s,s);const W=420,H=440;gshadow(0,H/2+20,180,.15);line([[0,-H/2-40],[0,-H/2]],5,'#555');circ(0,-H/2-44,9,'#888',4);
 rr(-W/2,-H/2,W,H,18,'#fff',7);rr(-W/2,-H/2,W,86,18,'#e53935',0);X.fillStyle='#e53935';X.fillRect(-W/2,-H/2+50,W,36);txt(o.month||'SUNDAYS',0,-H/2+44,44,'#fff',0);
 const wk=o.weeks||6,cw=W/7-6,chh=(H-110)/wk;for(let r=0;r<wk;r++)for(let c=0;c<7;c++){X.fillStyle=c==6?'#ffe9e6':'#f1f1f1';X.fillRect(-W/2+8+c*(cw+5),-H/2+96+r*chh,cw,chh-6)}
 const n=o.n==null?wk:o.n,p=o.p==null?1:o.p;for(let r=0;r<n;r++){const k=C(p*n-r);if(k<=0)continue;const cx=-W/2+8+6*(cw+5)+cw/2,cy=-H/2+96+r*chh+chh/2-3;X.save();X.translate(cx,cy);X.scale(eo(k)*1.0,eo(k)*1.0);
  if(o.marks=='heart'){path(()=>{X.moveTo(0,14);X.bezierCurveTo(-30,-6,-16,-30,0,-14);X.bezierCurveTo(16,-30,30,-6,0,14)},'#ff3d71',3)}else{line([[-18,-18],[18,18]],7,'#e53935');line([[18,-18],[-18,18]],7,'#e53935')}X.restore()}
 X.restore()}
// teacup(x,y,s,{t,steam}) — cup on saucer with curling steam.
function teacup(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);ell(0,0,70,16,'#fff',6);path(()=>{X.moveTo(-50,-60);X.lineTo(50,-60);X.quadraticCurveTo(46,-4,0,-4);X.quadraticCurveTo(-46,-4,-50,-60);X.closePath()},'#fff',6);
 X.lineWidth=7;X.strokeStyle='#222';X.beginPath();X.arc(56,-36,18,-1.4,1.4);X.stroke();ell(0,-60,50,10,'#a0522d',4);rr(-50,-44,100,10,4,'#7ec8e3',0);
 if(o.steam!==0){X.globalAlpha=.55;for(let k=0;k<3;k++){const ph=(t*.8+k/3)%1;X.lineWidth=6;X.strokeStyle='#fff';X.beginPath();for(let j=0;j<8;j++){const yy=-70-j*14-ph*30,xx=(k-1)*20+Math.sin(j*.8+t*3+k)*10;j?X.lineTo(xx,yy):X.moveTo(xx,yy)}X.stroke()}X.globalAlpha=1}
 X.restore()}

// ================= DRILL + OLD BOOK (craft ladder 2026-11-12 18:00) =================
// drill(x,y,s,o): cordless power drill, handle bottom at (x,y). o.col body colour, o.t time, o.spin (true = bit spins + motion lines),
// o.dust 0..1 dust layer + o.cob (cobweb strands from the top), o.rot radians, o.flip mirror.
function drill(x,y,s,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s*(o.flip?-1:1),s);const col=o.col||'#f2b33d',dk=o.dark||'#2b2b30',t=o.t||0;
 gshadow&&o.shadow&&gshadow(0,6,90,.25);
 rr(-46,-40,92,40,10,dk,7);rr(-40,-34,80,24,6,'#4a4a52',0);              // battery
 path(()=>{X.moveTo(-30,-40);X.lineTo(-38,-150);X.lineTo(22,-150);X.lineTo(30,-40);X.closePath()},dk,7); // grip
 rr(-14,-128,22,30,6,'#e04b3a',4);                                        // trigger
 rr(-70,-230,190,90,30,col,8);if(typeof vol==='function')vol(()=>X.roundRect(-70,-230,190,90,30),20,-190,95,45); // body
 for(let k=0;k<4;k++)line([[-50+k*14,-216],[-50+k*14,-158]],5,'rgba(0,0,0,.25)');
 rr(118,-212,46,54,10,dk,6);                                              // chuck
 const sp=o.spin?t*40:0;X.save();X.translate(164,-185);rr(0,-7,110,14,4,'#c9ccd3',4);for(let k=0;k<5;k++){const xx=10+k*20+((sp*6)%20);if(xx<104)line([[xx,-7],[xx+10,7]],4,'#7d828e')}X.restore();
 if(o.spin){for(let k=0;k<3;k++)line([[290,-215+k*30],[330,-215+k*30]],6,'rgba(255,255,255,.8)')}
 if(o.dust){X.globalAlpha=C(o.dust)*.75;for(let k=0;k<14;k++)ell(-60+rnd(k)*200,-232+rnd(k+5)*10,14+rnd(k+2)*12,7,'#b8b0a2',0);X.globalAlpha=1}
 if(o.cob){X.globalAlpha=.8;for(let k=0;k<5;k++){const a=-1.2+k*.35;line([[20,-232],[20+Math.cos(a)*170,-232-Math.abs(Math.sin(a))*150-60]],3,'rgba(255,255,255,.9)')}
  for(let r2=1;r2<4;r2++){X.beginPath();for(let k=0;k<5;k++){const a=-1.2+k*.35;const px=20+Math.cos(a)*55*r2,py=-232-Math.abs(Math.sin(a))*50*r2-20*r2;k?X.lineTo(px,py):X.moveTo(px,py)}X.strokeStyle='rgba(255,255,255,.8)';X.lineWidth=2.5;X.stroke()}X.globalAlpha=1}
 X.restore()}
// oldbook(x,y,s,o): thick leather-bound antique book (closed), centred at (x,y). o.rot radians, o.dust 0..1 (dust puff + specks), o.label spine/cover text, o.col leather colour.
function oldbook(x,y,s,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);const col=o.col||'#7a3b22';
 rr(-120,-150,240,300,14,'#efe2bf',7);for(let k=0;k<6;k++)line([[112,-130+k*50],[112,-110+k*50]],3,'#c9b98f');   // page block
 rr(-130,-160,236,320,16,col,8);if(typeof vol==='function')vol(()=>X.roundRect(-130,-160,236,320,16),-10,0,120,160);
 rr(-130,-160,40,320,12,'rgba(0,0,0,.25)',0);for(let k=0;k<3;k++)rr(-136,-110+k*100,52,14,6,'#c9a24a',3);  // spine bands
 rr(-70,-90,150,90,10,null,5,'#c9a24a');txt(o.label||'1668',5,-45,40,'#e8c35a',0);
 for(let k=0;k<4;k++)circ(-100+k*0+rnd(k)*170,-150+rnd(k+3)*300,5,'rgba(255,255,255,.35)',0);
 if(o.dust){const d=o.dust;X.globalAlpha=C(1.2-d);for(let k=0;k<10;k++){const a=k*.63;circ(Math.cos(a)*(120+d*160),Math.sin(a)*(120+d*120),26+d*30,'rgba(210,200,180,.7)',0)}X.globalAlpha=1}
 X.restore()}

// ================= TO-DO NOTEPAD (craft ladder 2026-11-12 18:00 v2) =================
// todo(x,y,s,o): wall notepad, top-centre at (x,y). o.items = ['Call Mom back',...] (max ~4), o.title ('TO DO'),
// o.w = pad width (default 460; use 540+ with LATER stamps), per-item arrays 0..1: o.show (line pops in), o.later (red LATER stamp slams on), o.done (green tick + strike-through).
function todo(x,y,s,o={}){X.save();X.translate(x,y);X.scale(s,s);const it=o.items||[],n=it.length,W=o.w||460,H=120+n*112;
 X.save();X.translate(8,10);rr(-W/2,0,W,H,18,'rgba(0,0,0,.18)',0);X.restore();
 rr(-W/2,0,W,H,18,'#fffbe8',7);rr(-W/2,0,W,84,16,'#ffd23f',7);txt(o.title||'TO DO',0,44,46,'#151515',0);
 for(let k=0;k<5;k++)circ(-W/2+50+k*90,0,11,'#8a8a8a',4);
 for(let i=0;i<n;i++){const sp=o.show?C(o.show[i]||0):1;if(sp<=0)continue;const yy=150+i*112;X.save();X.globalAlpha=sp;X.translate(lerp(-40,0,eo(sp)),0);
  const dn=o.done?C(o.done[i]||0):0,lt=o.later?C(o.later[i]||0):0;
  rr(-W/2+26,yy-24,48,48,10,dn>0?'#3ecf6a':'#fff',5);if(dn>0)line([[-W/2+36,yy],[-W/2+47,yy+12],[-W/2+66,yy-14]],8,'#fff');
  txt(it[i],-W/2+92,yy+2,36,dn>0?'#8a8a8a':'#151515',0,'700 ','left');
  if(dn>0)line([[-W/2+90,yy+2],[-W/2+90+(W-130)*dn,yy+2]],5,'#3ecf6a');
  if(lt>0){X.save();X.translate(W/2-92,yy);X.rotate(-.14);const z=lerp(2.2,1,eo(lt));X.scale(z,z);X.globalAlpha=C(lt*3)*sp;path(()=>X.roundRect(-82,-28,164,56,10),'#fff',6,'#e53935');txt('LATER',0,2,36,'#e53935',0);X.restore()}
  X.restore()}
 X.restore()}
