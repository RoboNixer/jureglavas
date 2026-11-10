function hatX(h,x,y){if(h=='bicorne'){path(()=>{X.moveTo(x-150,y-40);X.quadraticCurveTo(x,y-210,x+150,y-40);X.quadraticCurveTo(x,y-90,x-150,y-40)},'#16161c',8);
 circ(x,y-96,22,'#2a4fb0',4);circ(x,y-96,14,'#f4f4f4',0);circ(x,y-96,7,'#d22b2b',0);line([[x-120,y-56],[x+120,y-56]],5,'#d9b44a')}
 if(h=='bicorne2'){path(()=>{X.moveTo(x-130,y-44);X.quadraticCurveTo(x,y-180,x+130,y-44);X.quadraticCurveTo(x,y-84,x-130,y-44)},'#2b2b33',8);line([[x-110,y-58],[x+110,y-58]],6,'#f2f2f2');circ(x,y-92,16,'#f2f2f2',4)}
 if(h=='farmer'){ell(x,y-50,120,24,'#c9a85a',8);path(()=>{X.moveTo(x-60,y-52);X.quadraticCurveTo(x-56,y-120,x,y-118);X.quadraticCurveTo(x+56,y-120,x+60,y-52)},'#d8b866',8)}}
function napo(x,y,s,o={}){man(x,y,s,Object.assign({coat:'#24346a',hat:'bicorne',medal:1,belt:1,hair:null},o))}
function berthier(x,y,s,o={}){man(x,y,s,Object.assign({coat:'#3b5a3a',hat:'bicorne2',mustache:1,buttons:true},o))}
function bunny(x,y,s,o={}){const t=o.t||0,hop=o.hop!=null?Math.abs(Math.sin(o.hop*8))*40:0;X.save();X.translate(x,y-hop);X.scale(s*(o.flip?-1:1),s);
 const c=o.col||'#f4f1ea',in_='#f7b6c8';
 ell(0,-60,70,58,c,7);circ(60,-28,16,c,5);
 X.save();X.translate(-10,-120);[-22,22].forEach((d,i)=>{X.save();X.translate(d,-40);X.rotate(d*.012+Math.sin(t*6+i)*.08);ell(0,-50,18,62,c,7);ell(0,-46,8,44,in_,0);X.restore()});
 circ(0,0,52,c,7);
 if(o.angry){line([[-34,-26],[-8,-14]],7);line([[34,-26],[8,-14]],7)}
 [-18,18].forEach(d=>{circ(d,-6,o.big?14:9,O,0);circ(d-3,-10,o.big?5:3,'#fff',0)});
 path(()=>{X.moveTo(-8,12);X.lineTo(8,12);X.lineTo(0,22);X.closePath()},'#ff8fb0',3);
 if(o.chomp){ell(0,32,12,8+Math.abs(Math.sin(t*20))*8,'#6b1d1d',4);rr(-8,24,7,10,2,'#fff',2);rr(1,24,7,10,2,'#fff',2)}else{line([[0,22],[-10,32]],4);line([[0,22],[10,32]],4)}
 X.restore();X.restore()}
function horde(x0,x1,y0,y1,t,n=40,o={}){for(let i=0;i<n;i++){const x=x0+rnd(i)*(x1-x0),y=y0+rnd(i+11)*(y1-y0);bunny(x,y,.5+rnd(i+3)*.25,{t,hop:t+i*.37,col:i%5==0?'#c9a27a':(i%7==0?'#8a8a8a':'#f4f1ea'),angry:o.angry,chomp:o.chomp&&i%3==0,flip:o.flip})}}
function field(t){sky('#7fc4ef','#e8f6ff');clouds(t,260);X.fillStyle='#7fb357';X.fillRect(-3000,1050,8000,3000);for(let i=0;i<90;i++){line([[((rnd(i)*3600)-1200),1100+rnd(i+4)*900],[((rnd(i)*3600)-1200)+8,1080+rnd(i+4)*900]],6,'#5e9a3e')}
 for(let k=0;k<4;k++){const x=-200+k*460;rr(x,960,200,110,10,'#9c7a4a',7);for(let j=1;j<5;j++)line([[x+j*40,960],[x+j*40,1070]],5,'#6a4a2a')}}
function carriage(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);rr(-220,-380,440,280,30,'#2a3a6a',9);rr(-180,-340,150,140,16,'#bfe0ff',7);rr(30,-340,150,140,16,'#bfe0ff',7);path(()=>{X.moveTo(-240,-380);X.quadraticCurveTo(0,-470,240,-380)},'#1c2850',8);circ(0,-420,18,'#e8c35a',5);
 [-150,150].forEach(wx=>{circ(wx,-60,72,'#6a4a2a',9);circ(wx,-60,14,'#e8c35a',4);for(let k=0;k<6;k++){const a=k*Math.PI/3+t*4;line([[wx,-60],[wx+Math.cos(a)*64,-60+Math.sin(a)*64]],5)}});X.restore()}
function europe(t,p){rr(130,330,820,620,20,'#efe2bf',10);X.save();X.beginPath();X.roundRect(130,330,820,620,20);X.clip();
 const blobs=[[300,520,120,80],[520,480,140,100],[700,560,130,90],[420,700,150,90],[760,760,120,80],[260,760,90,70]];blobs.forEach(([x,y,a,b],i)=>{ell(x,y,a,b,i<Math.ceil(p*6)?'#6f86c9':'#cdbf96',6)});
 for(let i=0;i<Math.ceil(p*6);i++){const [x,y]=blobs[i];txt('🇫🇷',x,y,46,'#fff',0)}X.restore()}
function stall(t){sky('#8fd0f5','#fff1d6');clouds(t,240);X.fillStyle='#9ccf6a';X.fillRect(-3000,1100,8000,3000);rr(90,700,900,90,14,'#c0392b',9);for(let k=0;k<6;k++){rr(90+k*150,700,75,90,0,'#fff',0)}rr(90,700,900,90,14,null,9);
 line([[130,790],[130,1150]],14,'#6a4a2a');line([[950,790],[950,1150]],14,'#6a4a2a');rr(60,1060,960,60,10,'#8a5a30',8);txt('FARM BUNNIES 🐰',540,745,52,'#151515',0)}
function quillRoom(t){X.fillStyle='#3a2a20';X.fillRect(-3000,-3000,8000,8000);X.globalAlpha=.35;circ(780,800,520,'#ffcf7a',0);X.globalAlpha=1;rr(80,1180,920,70,10,'#6b4a2a',8);
 rr(420,1060,320,140,6,'#f3e7c8',6);for(let k=0;k<4;k++)line([[440,1090+k*26],[720-k*30,1090+k*26]],4,'#7a6a50');rr(820,1060,40,120,6,'#f4efe6',5);ell(840,1040,12,24,'#ffcf40',0)}

// ===== SHOTS =====
sh(0,(t,r)=>{cam(540,1000,lerp(1.25,1.08,eo(r/1.4)),t,.5);sky('#d9a86a','#ffe9c4');europe(t,C(r/1.4));napo(540,1500,1.05,{face:'smug',armR:-150,t});if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);tag(540,250,'NAPOLEON 👑','#ffe14d',C((r-.2)/.25))});
sh(T('h2'),(t,r)=>{cam(540,1150,lerp(1.5,1.3,eo(r/1.2)),t,.9);field(t);horde(-100,1180,1150,1600,t,46,{chomp:1});napo(540,1380,.95,{face:'shock',sweat:1,armL:-160,armR:-160,t});SHK=4;
 if(r>1.1)stampBig('DEFEATED','#e53935',-10,C(sp(r-1.1,14,.5)),520)});
sh(T('s1'),(t,r)=>{cam(500,1150,lerp(1.25,1.35,r/3),t,.4);field(t);berthier(420,1450,1.0,{face:'happy',armR:-60,t});
 X.setTransform(1,0,0,1,0,0);tag(540,250,'1807','#ffe14d',C(r/.2));if(r>1.1)tag(540,360,'BERTHIER · CHIEF OF STAFF','#cfd6e2',C((r-1.1)/.25));if(r>2.0)bubbleTxt(760,560,'RABBIT HUNT! 🎯','#151515',C(sp(r-2.0,16,.45)),70)});
sh(T('s2'),(t,r)=>{cam(540,1120,lerp(1.15,1.25,r/4.2),t,.4);stall(t);
 man(780,1450,.95,{hat:'farmer',coat:'#8a6a3a',face:'happy',buttons:false,armR:-70,t});berthier(300,1460,.95,{face:'happy',armR:-80,t});
 for(let k=0;k<Math.min(8,Math.floor(r*2.2));k++){const cx=150+(k%4)*260,cy=1640+Math.floor(k/4)*150;rr(cx-90,cy-120,180,130,10,'#c49a5a',7);bunny(cx,cy-20,.45,{t,big:1});for(let j=0;j<4;j++)line([[cx-70+j*45,cy-120],[cx-70+j*45,cy+10]],4,'#7a5a2a')}
 X.setTransform(1,0,0,1,0,0);if(r>1.2)tag(260,300,'TAME 🐰','#ffe14d',C((r-1.2)/.2));if(r>2.6)tag(540,300,'THOUSANDS','#ffe14d',C((r-2.6)/.2));if(r>3.4)tag(820,300,'UNFED 🍽️','#ff6b5a',C((r-3.4)/.2))});
sh(T('s3'),(t,r)=>{cam(540,1000,lerp(1.4,1.6,r/1.6),t,.4);field(t);X.fillStyle='rgba(0,0,0,.25)';X.fillRect(-3000,-3000,8000,8000);
 for(let k=0;k<5;k++)bunny(140+k*200,1500,.9,{t,big:1,angry:1});
 X.setTransform(1,0,0,1,0,0);X.save();X.translate(540,560);X.scale(eo(C(r/.3)),eo(C(r/.3)));circ(-260,330,26,'#fff',6);circ(-200,250,40,'#fff',6);ell(0,0,330,190,'#fff',9);txt('🥬',-110,0,150,'#fff',0);X.restore();
 X.save();cam(540,1000,1,t,0);X.setTransform(1,0,0,1,0,0);man(640,700,.55,{coat:'#24346a',hat:'bicorne',face:'neutral',t});X.restore();
 if(r>.8)tag(540,240,'LUNCH 🍽️','#ff6b5a',C((r-.8)/.2))});
sh(T('c1'),(t,r)=>{cam(540,720,lerp(2.3,2.0,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);napo(540,1260,1.0,{face:'shock',talk:t,sweat:1,armR:-170,armL:-170});SHK=12});
sh(T('s4'),(t,r)=>{cam(560+r*60,1200,1.2,t,1.0);field(t);speedlines(t);carriage(880,1500,.9,t);
 napo(lerp(150,700,eo(r/1.8)),1500,.8,{walk:t*2,face:'shock',sweat:1,armL:-150,armR:-150,t});horde(-600,lerp(200,560,r/1.8),1350,1650,t,26,{chomp:1});
 X.setTransform(1,0,0,1,0,0);tag(540,250,'RETREAT 🏃','#ffe14d',C(r/.25))});
sh(T('s5'),(t,r)=>{cam(540,1150,1.3,t,.3);field(t);const k=1-C(r/1.6);horde(-100,lerp(560,1180,k),1150,1600,t*-1,30);napo(lerp(700,540,1-k),1380,.95,{face:'neutral',t});
 scan(t);X.setTransform(1,0,0,1,0,0);if(r>.9)bubbleTxt(540,560,'1807 + PHONES 📱','#151515',C(sp(r-.9,16,.45)),90)});
sh(E('s5')+.1,(t,r)=>{cam(540,960,1,t,.4);burst('#1b2a4a','#22355e',t*.3);
 phoneUI(540,960,1,r,{typing:r>.7&&r<1.3,list:[{a:.1,me:1,text:'Remind Berthier: buy WILD rabbits 🐇 NOT pets!!',time:'05:40'},{a:1.3,me:0,text:'Done ✅ I’ll remind him at 6:00 😇',time:'05:40'}]});
 napo(150,2060,.75,{face:'smug',t})});
sh(T('b1')-.35,(t,r)=>{cam(540,1180,1.45,t,.4);stall(t);berthier(540,1500,1.0,{face:r>.5?'neutral':'shock',talk:r>.35&&r<1.5?t:null,armR:-100,armL:r>1.2?-150:null,t});
 X.setTransform(1,0,0,1,0,0);notif(170,C((r)/.3),'Memopai','⏰ Napoleon says: buy WILD rabbits 🐇 (not pets!)')});
sh(T('s6'),(t,r)=>{cam(540,1100,1.2,t,.4);stall(t);berthier(300,1460,.95,{face:'happy',armR:-80,t});man(780,1450,.95,{hat:'farmer',coat:'#8a6a3a',face:'happy',buttons:false,armR:-70,t});
 for(let k=0;k<6;k++){const cx=170+(k%3)*370,cy=1640+Math.floor(k/3)*150;rr(cx-90,cy-120,180,130,10,'#c49a5a',7);bunny(cx,cy-20,.45,{t,big:1});}
 X.setTransform(1,0,0,1,0,0);if(r>.6)stampBig('AGAIN. 🐰','#e53935',-8,C(sp(r-.6,14,.5)),420)});
sh(T('s7'),(t,r)=>{cam(440,1150,lerp(1.3,1.45,r/3.2),t,.4);quillRoom(t);man(300,1500,1.0,{coat:'#5a3a5a',hat:'bicorne',face:r>1.8?'smug':'neutral',mustache:1,armR:-60,t});
 X.setTransform(1,0,0,1,0,0);tag(540,260,'MEMOIRS OF GEN. THIÉBAULT ✍️','#ffe14d',C((r-.6)/.25));if(r>2.0)stampBig('PETTY?','#e53935',-10,C(sp(r-2.0,14,.5)),440)});
