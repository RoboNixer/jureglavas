function rock(x,y,s){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-150,0);X.quadraticCurveTo(-160,-110,-40,-130);X.quadraticCurveTo(120,-150,150,-40);X.lineTo(160,0);X.closePath()},'#8d8f97',7);X.globalAlpha=.35;ell(50,-40,90,40,'#5f6169',0);X.globalAlpha=1;X.restore()}
function park(t,night){if(night){sky('#0d1838','#2b3d6b');for(let i=0;i<40;i++){X.globalAlpha=.4+.5*Math.abs(Math.sin(t*2+i));circ((rnd(i)*1300)-100,rnd(i+50)*700,3+rnd(i+9)*3,'#fff',0)}X.globalAlpha=1;glow(820,260,200,'255,250,220',.5);circ(820,260,90,'#f3eccf',6);hills(950,'#1d2a4d',t,4,70,1);hills(1060,'#17223f',t,8,50,2);X.fillStyle='#22324f';X.fillRect(-3000,1150,8000,1300)}
 else{sky('#5fb4f0','#d6efff');glow(860,280,240,'255,240,180',.5);rays(860,280,t,'255,240,200',.12);hills(960,'#9fd18b',t,4,70,1);hills(1070,'#7fc06d',t,8,50,2);haze(900,1150,'240,255,240',.35);X.fillStyle='#6fb35c';X.fillRect(-3000,1150,8000,1300);X.fillStyle='#62a650';X.fillRect(-3000,1420,8000,1300)}}
function cubes(n,x0,x1,y0,y1,p,seed=0){for(let i=0;i<n;i++){if(p<i/n)continue;const x=lerp(x0,x1,rnd(i+seed)),y=lerp(y0,y1,rnd(i+seed+40));pcube(x,y,.7+rnd(i+seed+7)*.4,{rot:(rnd(i+seed+3)-.5)*.3})}}
function quiz(r){const op=[['A','ROUND',0],['B','TRIANGLE',1],['C','???',2]];op.forEach(([L,lab,k],i)=>{const p=C(sp(r-.35-i*.3,14,.5));if(p<=0)return;X.save();X.translate(540,700+i*230);X.scale(eo(p),eo(p));rr(-380,-90,760,180,40,'#151515',8);rr(-370,-80,140,160,32,['#e53935','#1e88e5','#ffd23f'][i],0);txt(L,-300,30,90,'#fff',0);
 if(k==0)circ(10,0,55,'#8a6a4f',6);else if(k==1)path(()=>{X.moveTo(10,-60);X.lineTo(70,50);X.lineTo(-50,50);X.closePath()},'#8a6a4f',6);else txt('?',10,35,110,'#ffd23f',0);txt(lab,200,22,50,'#fff',0);X.restore()})}

sh(0,(t,r)=>{cam(540,960,lerp(1.15,1.0,eo(r/1.0)),t,.4);park(t);rays(540,300,t,'255,240,200',.1);wombat(760,1560,.9,{t,face:{squint:1,smug:1,look:-10}});gary(250,1600,.8,{t,eyes:'crazy',mouth:'grin',armR:-150});if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);quiz(r)});
sh(T('h2'),(t,r)=>{cam(540,820,lerp(1.4,1.55,r/1.4),t,.5);park(t);gary(540,1650,1.15,{t,eyes:'crazy',mouth:'grin',armR:-150,tilt:-6});
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'WRONG ❌','#e53935',C(sp(r-.4,16,.45)),110)});
sh(T('s1'),(t,r)=>{cam(540,1100,lerp(1.05,1.2,r/1.9),t,.3);park(t);rock(300,1300,1.1);rock(820,1360,.9);cubes(14,80,1000,1320,1700,r/1.4);pcube(300,1170,.9,{});pcube(820,1240,.8,{});
 gary(540,1640,.75,{t,eyes:'wide',mouth:'grin',armR:-60,look:20});
 X.setTransform(1,0,0,1,0,0);tag(540,330,'EVIDENCE: TINY DICE 🎲','#ffe14d',C(r/.2))});
sh(T('g1'),(t,r)=>{cam(540,900,lerp(1.5,1.4,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1600,1.1,{t,eyes:'crazy',talk:t,teeth:1,armR:-170});pcube(830,1100,1.5,{dots:1,rot:Math.sin(t*6)*.3,glow:1});SHK=10;
 X.setTransform(1,0,0,1,0,0);stampBig('ILLEGAL CASINO?!','#e53935',-8,C(sp(r,14,.5)),420)});
sh(T('s2'),(t,r)=>{cam(540,1000,lerp(1.0,1.12,r/2),t,.3);park(t,1);rock(760,1360,1.0);cubes(8,600,960,1380,1600,1,3);
 X.save();X.translate(0,0);gary(240,1560,.8,{t,eyes:'wide',look:20,armR:-40});X.restore();circ(170,1470,110,'#2f4a24',7);circ(300,1490,95,'#36552a',7);
 const wx=lerp(1350,820,eo(C((r-.3)/.9)));wombat(wx,1470,.8,{t,walk:r<2,shades:1,hat:'boss',face:{smug:1}});
 X.setTransform(1,0,0,1,0,0);tag(540,330,r<1.1?'STAKEOUT 🌙 2:47 AM':'THE BOSS 😎','#7fd1ff',C(r/.2))});
sh(T('s2b'),(t,r)=>{cam(600,1100,lerp(1.5,1.65,r/1),t,.5);park(t,1);rays(600,0,t,'255,250,220',.18);wombat(560,1450,1.1,{t,shades:1,hat:'boss',face:{smug:1,squint:1}});
 X.setTransform(1,0,0,1,0,0);stampBig('A WOMBAT 🐾','#ffd23f',-6,C(sp(r,14,.5)),330)});
sh(T('s3'),(t,r)=>{cam(540,1000,lerp(1.05,1.15,r/3),t,.3);park(t);rock(780,1340,1.0);wombat(360,1560,.9,{t,face:{smug:1,squint:1}});
 const n=Math.floor(C((r-1.6)/1.3)*9);for(let i=0;i<n;i++)pcube(640+(i%4)*70,1260-Math.floor(i/4)*60,.7,{});
 X.setTransform(1,0,0,1,0,0);if(r<1.6){quiz(9);X.save();X.globalAlpha=C((r-.2)/.3);rr(150,1120,780,200,40,'rgba(0,0,0,0)',10);X.restore();stampBig('C) CUBE ✅','#2e7d32',-5,C(sp(r-.2,14,.5)),1160)}
 else{tag(540,330,'UP TO ~100 A NIGHT','#ffe14d',C((r-1.6)/.2));const k=Math.round(C((r-1.7)/1.2)*100);txt(k,540,560,150,'#fff',12)}});
sh(T('s3b'),(t,r)=>{cam(540,1050,lerp(1.1,1.2,r/3),t,.3);park(t);rock(560,1380,1.6);[[0,0],[-80,0],[80,0],[-40,-60],[40,-60],[0,-120]].forEach(([dx,dy],i)=>{if(r>.4+i*.35)pcube(560+dx,1170+dy,.85,{})});
 wombat(880,1600,.7,{t,flip:1,face:{smug:1}});sparkles(560,1100,C((r-2.4)/.6),10,260,'#ffe14d');
 X.setTransform(1,0,0,1,0,0);tag(540,330,'= “MY TURF” 🚩','#c4b2ff',C((r-.2)/.2));if(r>.4)tag(540,470,'cubes don’t roll away','#ffe14d',C((r-1.2)/.2))});
sh(T('s4'),(t,r)=>{NOFX=1;cam(540,960,1,t,.4);burst('#10233a','#16304d',t*.3);
 phoneUI(540,960,1,r,{typing:r>1.3&&r<2.2,list:[{a:.2,me:1,text:'Remind Officer Gary every night at 3 AM: check your car roof 🎲😎',time:'02:59'},{a:2.2,me:0,text:'Done ✅ I’ll remind Gary every night at 3 AM 🌙',time:'02:59'}]});
 wombat(170,1900,.3,{t,shades:1,face:{smug:1}})});
sh(T('s5'),(t,r)=>{lockPhone(t,C(r/.6),'⏰ Gary! Check your car roof 🎲','3:00');X.setTransform(1,0,0,1,0,0);if(r>.5)tag(540,1250,'SET BY: THE WOMBAT 🐾','#c4b2ff',C((r-.5)/.2))});
sh(T('g2'),(t,r)=>{cam(540,1050,lerp(1.4,1.1,eo(r/.4)),t,.8);park(t,1);glow(540,900,400,'255,60,60',.25+.15*Math.sin(t*20));cruiser(540,1500,1.15,{t,siren:1});
 for(let i=0;i<22;i++){const row=i<8?0:i<14?1:i<19?2:3,idx=row==0?i:row==1?i-8:row==2?i-14:i-19,cnt=[8,6,5,3][row];pcube(540+(idx-(cnt-1)/2)*62,1230-row*52,.72,{})}
 gary(200,1650,.85,{t,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});SHK=r<.4?12:0;X.setTransform(1,0,0,1,0,0);impact(C(r/.4))});
sh(T('k2'),(t,r)=>{cam(620,1150,lerp(1.4,1.55,r/2.5),t,.4);park(t,1);rays(620,0,t,'255,250,220',.14);rock(880,1380,.8);pcube(880,1250,.8,{dots:1,glow:1});wombat(540,1440,1.0,{t,shades:1,hat:'boss',face:{talk:r<1.9?t:null,smug:1}});
 X.setTransform(1,0,0,1,0,0);if(r>1.2)tag(540,330,'THE HOUSE ALWAYS WINS 🎲','#ffd23f',C((r-1.2)/.2))});
