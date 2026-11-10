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
