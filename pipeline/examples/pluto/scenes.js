function space(t){X.fillStyle='#070a1a';X.fillRect(-4000,-4000,10000,10000);for(let i=0;i<220;i++){const tw=.5+.5*Math.sin(t*3+i);X.globalAlpha=.35+.65*tw;circ(-1500+rnd(i)*4200,-1500+rnd(i+3)*5000,1.5+rnd(i+1)*3,'#fff',0)}X.globalAlpha=1;
 X.globalAlpha=.25;circ(200,500,500,'#3b2a7a',0);circ(900,1400,600,'#1d4a6a',0);X.globalAlpha=1}
function pluto(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y+Math.sin(t*2)*10);X.scale(s,s);X.rotate((o.tilt||0)*Math.PI/180);
 if(o.armL!=null||o.armR!=null){[-1,1].forEach(d=>{const a=(d<0?o.armL:o.armR);if(a==null)return;const ang=a*Math.PI/180;const ex=d*150+Math.sin(ang)*d*60,ey=60+Math.cos(ang)*60,hx=ex+Math.sin(ang)*d*55,hy=ey+Math.cos(ang)*55;line([[d*140,60],[ex,ey],[hx,hy]],14);circ(hx,hy,16,'#d9b48a',5);if(d>0&&o.phone){X.save();X.translate(hx,hy-30);X.rotate(-.2);rr(-30,-54,60,108,10,'#1b1b1f',5);rr(-22,-46,44,92,6,'#25d366',0);X.restore()}})}
 circ(0,0,150,'#d9b48a',8);X.save();X.beginPath();X.arc(0,0,146,0,7);X.clip();
 path(()=>{X.moveTo(40,40);X.bezierCurveTo(40,-20,130,-30,130,40);X.bezierCurveTo(130,90,60,120,40,160);X.bezierCurveTo(20,120,-50,90,-50,40);X.bezierCurveTo(-50,-30,40,-20,40,40)},'#f3e2c8',0);
 circ(-80,-60,20,'#b8926a',0);circ(-40,90,14,'#b8926a',0);circ(90,-90,12,'#b8926a',0);X.restore();circ(0,0,150,null,8);
 face2(-10,-10,.8,o.face||{});
 if(o.party){path(()=>{X.moveTo(-50,-140);X.lineTo(10,-290);X.lineTo(60,-140);X.closePath()},'#ff5fa2',7);circ(10,-296,16,'#ffe14d',5);for(let k=0;k<3;k++)circ(-20+k*30,-180-k*30,7,'#fff',0)}
 if(o.tear){ell(-60,40+((t*70)%60),10,15,'#7fd1ff',4)}
 if(o.sweat){ell(120,-110,10,16,'#7fd1ff',4)}
 X.restore()}
function planet(x,y,r,col,ring,face,t){if(ring){ell(x,y,r*1.9,r*.45,null,10,'#e8d29a')}circ(x,y,r,col,8);if(ring){X.save();X.beginPath();X.rect(x-r*2,y,r*4,r);X.clip();ell(x,y,r*1.9,r*.45,null,10,'#e8d29a');X.restore()}if(face)face2(x,y-r*.1,r/170,face)}
function sun(x,y,s,t,face){X.save();X.translate(x,y);X.scale(s,s);for(let k=0;k<16;k++){X.save();X.rotate(k*Math.PI/8+t*.3);path(()=>{X.moveTo(-30,-240);X.lineTo(0,-330);X.lineTo(30,-240)},'#ffb300',6);X.restore()}circ(0,0,240,'#ffd54f',9);face2(0,-10,1.1,face||{});X.restore()}
function cake(x,y,s,label,t,lit=1){X.save();X.translate(x,y);X.scale(s,s);rr(-170,-120,340,140,20,'#ff8fb8',8);rr(-130,-220,260,110,18,'#ffd1e3',8);for(let k=0;k<5;k++)circ(-120+k*60,-120,16,'#fff',0);
 rr(-10,-300,20,80,6,'#9fd3ff',5);if(lit){ell(0,-320+Math.sin(t*20)*3,12,22,'#ffb300',4)}txt(label,0,-50,64,'#fff',10);X.restore()}
function hall(t){X.fillStyle='#2a2440';X.fillRect(-3000,-3000,8000,8000);rr(140,260,800,300,14,'#11131f',9);txt('IAU 2006 · PRAGUE',540,330,46,'#ffe14d',0);txt('IS PLUTO A PLANET?',540,420,58,'#fff',0);txt('VOTE NOW',540,500,40,'#8ff07a',0);
 X.fillStyle='#3a3254';X.fillRect(-3000,1150,8000,3000);for(let r=0;r<3;r++)for(let k=0;k<6;k++)rr(40+k*180+(r%2)*60,1330+r*200,150,60,10,'#5a3a2a',6)}
function illinois(x,y,s){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-120,-300);X.lineTo(100,-300);X.lineTo(110,-200);X.quadraticCurveTo(140,-60,130,60);X.lineTo(160,170);X.quadraticCurveTo(110,260,40,310);X.lineTo(-10,250);X.quadraticCurveTo(-60,200,-80,120);X.quadraticCurveTo(-150,40,-170,-60);X.quadraticCurveTo(-140,-160,-120,-300)},'#8fd18a',9);txt('IL',0,-20,90,'#151515',0);X.restore()}
function orbit(t,p){X.save();ell(540,960,430,300,null,5,'rgba(255,255,255,.35)');X.restore();sun(540,960,.35,t,{smug:1});const a=-Math.PI/2+p*Math.PI*2*.12;pluto(540+Math.cos(a)*430,960+Math.sin(a)*300,.42,{t,face:{look:-10}})}

// ===== SHOTS =====
sh(0,(t,r)=>{cam(540,960,lerp(1.1,1.0,eo(r/1.5)),t,.5);space(t);
 sun(60,420,.55,t,{smug:1});planet(360,560,70,'#4fa3e0',0,{smug:1},t);planet(590,610,90,'#e0703a',0,{smug:1},t);planet(860,560,110,'#d9a066',1,{smug:1},t);
 const k=eo(C((r-.5)/1.2));pluto(lerp(540,820,k),lerp(1000,1040,k),.9,{t,tilt:k*25,face:{shock:1},sweat:1});
 rr(lerp(380,660,k),lerp(1150,1190,k),240,150,10,'#c49a5a',7);txt('PLUTO’S STUFF',lerp(500,780,k),lerp(1225,1265,k),26,'#151515',0);if(r<.1)FL=.9;
 if(r>1.0)stampBig('FIRED','#e53935',-12,C(sp(r-1.0,14,.5)),330)});
sh(T('h2'),(t,r)=>{cam(540,1000,lerp(1.3,1.5,r/1.9),t,.4);space(t);pluto(540,920,1.25,{t,face:{squint:1},tear:1});cake(540,1330,.8,'0',t,Math.sin(t*3)>-.2);
 X.setTransform(1,0,0,1,0,0);tag(540,330,'BIRTHDAYS: 0 🎂','#cfd6e2',C((r-.3)/.25))});
sh(T('s1'),(t,r)=>{cam(540,1000,1.05,t,.4);hall(t);
 for(let k=0;k<6;k++){const x=120+k*170,up=r>.8+k*.1;man(x,1300,.6,{coat:['#5a6f8a','#8a5a4a','#4f7a5a'][k%3],face:up?'smug':'neutral',armR:up?-165:null,buttons:false,t});if(up){rr(x+30,830,60,80,6,k%2?'#ffe14d':'#9fd3ff',5)}}
 X.setTransform(1,0,0,1,0,0);tag(540,640,'2006','#ffe14d',C(r/.2));if(r>2.1)stampBig('PLUTO: OUT','#e53935',-10,C(sp(r-2.1,14,.5)),760)});
sh(T('s2'),(t,r)=>{cam(540,1000,1.05,t,.4);hall(t);for(let k=0;k<6;k++){const x=120+k*170;man(x,1300,.6,{coat:'#5a6f8a',face:k%2?'neutral':'sad',buttons:false,t,blink:1})}
 X.setTransform(1,0,0,1,0,0);const n=Math.round(lerp(0,424,eo(C((r-.6)/1.2))));txt(String(n),540,760,220,'#ffe14d',18);txt('VOTED',540,900,70,'#fff',12);if(r>1.6)tag(540,1020,'≈2,400 ASTRONOMERS WERE THERE','#cfd6e2',C((r-1.6)/.25))});
sh(T('p1'),(t,r)=>{cam(540,860,lerp(2.0,1.8,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);pluto(540,860,1.0,{t,face:{shock:1,talk:t},sweat:1,armL:-160,armR:-160});SHK=12});
sh(T('s3'),(t,r)=>{cam(540,960,1.0,t,.4);sky('#9fd3ff','#eaf6ff');illinois(400,880,1.3);
 man(800,1450,.8,{coat:'#3a3a40',tie:1,face:'happy',armR:-120,t,mustache:1});
 X.setTransform(1,0,0,1,0,0);tag(540,280,'ILLINOIS SENATE · 2009','#ffe14d',C(r/.25));if(r>1.2)stampBig('PLUTO = PLANET ✅','#2e7d32',-8,C(sp(r-1.2,14,.5)),520);if(r>2.0)tag(400,1250,'(only in Illinois)','#cfd6e2',C((r-2.0)/.2))});
sh(T('s4'),(t,r)=>{cam(540,960,1.0,t,.3);space(t);orbit(t,C(r/3.3));
 X.setTransform(1,0,0,1,0,0);const y=Math.round(lerp(1930,2026,C(r/3)));tag(540,330,'1 LAP = 248 YEARS','#ffe14d',C((r-1.6)/.25));txt(String(y),540,560,120,'#fff',12)});
sh(T('s5'),(t,r)=>{cam(540,1000,lerp(1.15,1.3,r/3.3),t,.4);space(t);pluto(380,900,.9,{t,face:{look:30,smug:r>2.2}});cake(720,1250,.85,r>2.3?'2178':'?',t,1);
 X.setTransform(1,0,0,1,0,0);if(r>.9)tag(540,330,'1930 + 248 = 2178','#ffe14d',C((r-.9)/.25))});
sh(T('s6'),(t,r)=>{cam(540,1000,lerp(1.25,1.4,r/1),t,.4);space(t);pluto(540,960,1.15,{t,face:{smug:1,look:20},armR:-160,armL:20,phone:1});X.globalAlpha=.2;circ(760,760,160,'#7ef0a0',0);X.globalAlpha=1});
sh(T('s6')+1.0,(t,r)=>{cam(540,960,1,t,.4);burst('#1a1446','#221a5a',t*.3);
 phoneUI(540,960,1,r,{typing:(r>.4&&r<.95)||(r>2.0&&r<2.6),list:[{a:.1,me:1,text:'Remind me: my 1st birthday 🎂 (2178)',time:'2026'},{a:.95,me:0,text:'Done ✅ See you in 152 years 😇',time:'2026'},{a:1.55,me:1,text:'Also remind the astronomers I’m STILL a planet 🙄',time:'2026'},{a:2.6,me:0,text:'Done ✅ Reminding all 424 of them 😇',time:'2026'}]});
 pluto(180,1760,.45,{t,face:{smug:1}})});
sh(T('p2'),(t,r)=>{cam(540,1000,lerp(1.3,1.45,r/1.6),t,.4);space(t);pluto(540,900,1.1,{t,face:{smug:1,talk:r<1.3?t:null},party:1,armR:-140,armL:-140});
 illinois(820,1240,.4);line([[820,1370],[800,1600]],4,'#fff');
 X.setTransform(1,0,0,1,0,0);tag(540,320,'GUEST LIST: ILLINOIS 🎉','#ffe14d',C((r-.3)/.25))});
