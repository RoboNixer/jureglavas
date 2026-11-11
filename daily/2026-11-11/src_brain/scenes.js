// ===== helpers =====
function bedroom(t,dim){roomWall('#2f3d66','#233052','#4a5a8a');
 rr(640,300,340,400,14,'#0b1430',9);X.save();X.beginPath();X.rect(646,306,328,388);X.clip();for(let i=0;i<30;i++){circ(650+rnd(i)*320,310+rnd(i+5)*380,2+rnd(i+2)*3,'#fff',0)}moon(870,420,.35,{});X.restore();line([[810,300],[810,700]],8);line([[640,500],[980,500]],8);
 glow(810,500,420,'170,200,255',.25);rr(80,820,150,170,10,'#3b2f2a',7);rr(100,780,110,50,10,'#ffd27a',6);glow(155,800,260,'255,200,120',dim?.15:.4);
 X.fillStyle='rgba(10,20,60,'+(dim?.35:.15)+')';X.fillRect(-3000,-3000,8000,8000)}
function bedBack(x,y){rr(x-360,y-560,720,300,40,'#6b4a3a',9);rr(x-330,y-530,660,240,30,'#7d5847',0);ell(x-170,y-300,140,60,'#f4f0ff',8);ell(x+170,y-300,140,60,'#f4f0ff',8)}
function bedFront(x,y){rr(x-380,y-200,760,250,44,'#c94f5e',9);for(let k=0;k<5;k++)line([[x-330+k*160,y-180],[x-300+k*160,y+30]],6,'#a83a4a');rr(x-390,y+30,780,70,16,'#5a3b2e',8)}
function clock3(x,y,s,p){if(p<=0)return;X.save();X.translate(x,y);X.scale(s*eo(p),s*eo(p));rr(-170,-70,340,140,24,'#111',8);txt('3:07',0,4,100,'#ff3b3b',0);glow(0,0,200,'255,60,60',.3);X.restore()}
function card(x,y,label,col,rot,p){if(p<=0)return;X.save();X.translate(x,y);X.rotate(rot||0);X.scale(eo(C(p)),eo(C(p)));X.font="900 46px Inter";const w=X.measureText(label).width+60;rr(-w/2,-46,w,92,20,col||'#fff8e8',7);txt(label,0,0,46,'#222',0);X.restore()}
function cafe(t){X.fillStyle='#e8cfa0';X.fillRect(-3000,-3000,8000,8000);for(let k=0;k<9;k++){rr(-200+k*180,0,90,900,0,k%2?'#e1c391':'#e8cfa0',0)}rr(-200,880,1500,40,0,'#7a4b2a',0);X.fillStyle='#8a5a34';X.fillRect(-3000,920,8000,3000);
 for(let k=0;k<3;k++){circ(200+k*340,250,46,'#fff3c4',6);glow(200+k*340,250,220,'255,220,150',.4);line([[200+k*340,0],[200+k*340,204]],5)}
 [[150,1180],[930,1180]].forEach(([a,b])=>{ell(a,b,170,40,'#fff',7);rr(a-14,b,28,240,6,'#5a3b2e',6)});bokeh(t,'255,220,160',8,200,700)}
function waiter(x,y,s,o){toon(x,y,s,Object.assign({skin:'#f3c9a5',shirt:'#ffffff',shirt2:'#eeeeee',pants:'#222',shoes:'#111',hair:'comb',mustache:1,tie:1,mouth:'grin',eyes:'happy'},o||{}));
 X.save();X.translate(x,y);X.scale(s,s);rr(-78,-200,156,180,10,'#f6f6f6',6);X.restore()}
function sepia(a){X.setTransform(1,0,0,1,0,0);X.fillStyle='rgba(120,80,30,'+a+')';X.fillRect(0,0,1080,1920)}
const TASKS=['STAPLER','DISHES','GRANDMA B-DAY','TAXES','EMAIL BOB','DENTIST','GYM?','CALL MOM'];
function orbit(cx,cy,R,t,n,p){for(let i=0;i<n;i++){const a=t*.9+i*Math.PI*2/n;card(cx+Math.cos(a)*R,cy+Math.sin(a)*R*.55,TASKS[i%TASKS.length],i%2?'#fff3a0':'#ffd6e0',Math.sin(a)*.15,C(p*n-i))}}
// ===== SHOTS =====
// h1: 3 AM, Gary bolt upright, brain bursts out with megaphone
sh(0,(t,r)=>{cam(540,1080,lerp(1.35,1.1,eo(r/1.2)),t,.6);bedroom(t);bedBack(540,1520);gary(540,1520,.92,{t,eyes:'wide',mouth:'o',hat:0,sweat:1,armL:-30,armR:30});bedFront(540,1520);
 const p=C((r-.35)/.35);if(p>0){squash&&0;brain(560,lerp(1000,760,eo(p)),.85*eo(p),{t,talk:r>.5?t:null,angry:1,mega:1,armR:-60});}
 X.setTransform(1,0,0,1,0,0);clock3(800,330,1,C(r/.2));if(r<.08)FL=.8;if(r>.35&&r<.5)SHK=10;impact(C((r-.35)/.25))});
// b1: brain close-up yelling
sh(T('b1'),(t,r)=>{cam(540,850,lerp(1.6,1.75,r/2),t,.8);burst('#b71c1c','#d32f2f',t*2);brain(540,1300,1.15,{t,talk:t,angry:1,mega:1,armR:-70,armL:-40});SHK=r<1.2?7:2;
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'THE STAPLER!','#ffd23f',C(sp(r-.5,16,.45)),110);card(860,1150,'OWED SINCE 2019',  '#fff3a0',.12,C((r-1.1)/.2))});
// s1: 1920s cafe, waiter juggling orders in his head
sh(T('s1'),(t,r)=>{cam(540+r*10,1000,lerp(1.15,1.25,r/5.3),t,.4);cafe(t);gshadow(540,1500,190);waiter(540,1500,.92,{t,walk:r>2.6&&r<3.6?t:null,look:Math.sin(t*2)*15,armR:-150+Math.sin(t*6)*10});
 const ords=['COFFEE x3','STRUDEL','TABLE 7: SOUP','2 BEERS','CAKE!','TEA + LEMON'];const n=Math.min(6,Math.floor(r/0.6)+1);
 for(let i=0;i<n;i++){const a=t*.8+i*1.05;card(540+Math.cos(a)*300,640+Math.sin(a)*120,ords[i],i%2?'#fff3a0':'#fff8e8',Math.sin(a)*.12,C((r-i*.6)/.2))}
 X.setTransform(1,0,0,1,0,0);sepia(.12);tag(540,300,'BERLIN, 1920s','#ffe14d',C(r/.25));if(r>3.4)tag(540,420,'UNPAID: REMEMBERS ALL','#9fd3ff',C((r-3.4)/.25))});
// s2: bill paid -> orders vanish
sh(T('s2'),(t,r)=>{cam(540,960,lerp(1.25,1.4,eo(r/1.8)),t,.4);cafe(t);gshadow(540,1500,190);const paid=r>.75;waiter(540,1500,.92,{t,eyes:paid?'sleepy':'happy',mouth:paid?'flat':'grin',armR:-150});
 if(!paid){['COFFEE x3','STRUDEL','2 BEERS','CAKE!'].forEach((o,i)=>card(260+i*190,640+(i%2)*120,o,'#fff8e8',(i-1.5)*.08,1))}else{sparkles(540,700,C((r-.75)/.5),16,320);X.globalAlpha=C(1-(r-.75)/.3);['COFFEE x3','STRUDEL','2 BEERS','CAKE!'].forEach((o,i)=>card(260+i*190,640+(i%2)*120-(r-.75)*300,o,'#fff8e8',(i-1.5)*.3,1));X.globalAlpha=1;
  X.save();X.translate(820,700);X.scale(.8,.8);ell(0,0,170,110,'#fff',8);txt('?',0,6,150,'#e53935',0);X.restore()}
 X.setTransform(1,0,0,1,0,0);sepia(.12);if(paid){stampBig('PAID','#2e7d32',-10,C(sp(r-.75,14,.5)),900);if(r<.9)FL=.4}});
// s3: second hook - title card
sh(T('s3'),(t,r)=>{cam(540,960,lerp(1.0,1.08,r/1.8),t,.3);X.fillStyle='#14182a';X.fillRect(-3000,-3000,8000,8000);rays(540,900,t,'255,160,190',.16);glow(540,1000,460,'255,120,170',.35);
 brain(540,1350,.9,{t,squint:1,smug:1,armL:-120,armR:-120});for(let k=0;k<2;k++){X.beginPath();X.arc(540,1050,330+k*40,t*2+k,t*2+k+4.2);X.lineWidth=12;X.strokeStyle=k?'#ffd23f':'#ff9fb8';X.stroke()}
 X.setTransform(1,0,0,1,0,0);txt('ZEIGARNIK',540,330,130,'#ffe14d',16);txt('EFFECT',540,470,130,'#ffe14d',16);impact(C(r/.2));if(r<.08)FL=.5});
// s4: Gary in bed, unfinished tasks orbit + counter
sh(T('s4'),(t,r)=>{cam(540,1000,lerp(1.1,1.25,r/2.6),t,.4);bedroom(t,1);bedBack(540,1520);gary(540,1520,.92,{t,eyes:'wide',mouth:'flat',hat:0,look:Math.sin(t*3)*20});bedFront(540,1520);
 orbit(540,760,380,t,8,C(r/2.2));X.setTransform(1,0,0,1,0,0);const n=Math.floor(lerp(1,47,eio(C(r/2.4))));tag(540,300,'UNFINISHED: '+n,'#ff7a7a',C(r/.2));if(r>1.4)card(540,430,'ON REPEAT 🔁','#9fd3ff',0,C((r-1.4)/.2))});
// b2: brain screams the list, cards flying
sh(T('b2'),(t,r)=>{cam(540,900,lerp(1.5,1.35,eo(r/.4)),t,.8);burst('#6a1b9a','#8e24aa',t*1.5);brain(540,1340,1.05,{t,talk:t,angry:1,mega:1,armR:-70,armL:-150});SHK=6;
 X.setTransform(1,0,0,1,0,0);card(300,420,'DISHES!','#fff3a0',-.15,C(sp(r-.2,14,.5)));card(760,560,"GRANDMA'S B-DAY!",'#ffd6e0',.12,C(sp(r-1.0,14,.5)));if(r>1.0&&r<1.15)FL=.25});
// s5: WhatsApp to Memopai
sh(T('s5'),(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#1d2b4f','#22355e',t*.3);glow(540,900,600,'37,211,102',.18);
 phoneUI(540,960,1,r,{typing:r>1.3&&r<2.0,list:[{a:.1,me:1,text:'Remind me: return the stapler, dishes, Grandma’s birthday Saturday, taxes…',time:'03:09'},{a:2.0,me:0,text:'Got it ✅ I’ll remind you at the right time. Sleep, Gary 😴',time:'03:09'}]})});
// s6: brain gets PAID stamp, yawns
sh(T('s6'),(t,r)=>{cam(540,960,lerp(1.2,1.1,eo(r/1.5)),t,.4);bedroom(t,1);glow(540,900,500,'255,170,200',.25);brain(540,1350,1.0,{t,squint:r>.9,shock:r<.9,armL:-20,armR:20,cap:r>1.2?'#4a6ab0':null});
 X.setTransform(1,0,0,1,0,0);tag(540,300,'UNFINISHED: '+(r<.8?47:0),r<.8?'#ff7a7a':'#7dffa8',1);if(r>.8){stampBig('PAID','#2e7d32',-10,C(sp(r-.8,14,.5)),760);if(r<.95)FL=.35;sparkles(540,900,C((r-.8)/.6),12,300)}});
// g1: Gary asleep, calm
sh(T('g1'),(t,r)=>{cam(540,1150,lerp(1.15,1.25,r/1.8),t,.3);bedroom(t,1);bedBack(540,1520);gary(540,1520,.92,{t,eyes:'sleepy',mouth:'grin',hat:0,tilt:8});bedFront(540,1520);
 brain(830,1060,.42,{t,squint:1,cap:'#4a6ab0',zz:1});X.setTransform(1,0,0,1,0,0);tag(540,300,'03:10 😴','#7dffa8',C(r/.2))});
// k1: twist - brain peeks, whispers
sh(T('k1'),(t,r)=>{const z=r>1.6;cam(600,1160,lerp(1.45,1.6,r/2),t,.3);bedroom(t,1);bedBack(540,1520);gary(540,1520,.92,{t,eyes:z?'wide':'sleepy',mouth:z?'o':'grin',hat:0,tilt:z?0:8,sweat:z?1:0});bedFront(540,1520);
 brain(760,1030,.45,{t,talk:r<1.6?t:null,smug:1,look:-20,armR:-140});
 X.setTransform(1,0,0,1,0,0);if(r<1.6)tag(540,300,'03:11','#ffe14d',C(r/.2));if(z){stampBig('GARY 0 : 1 BRAIN','#e53935',-8,C(sp(r-1.6,14,.5)),420);if(r<1.75){FL=.5;SHK=10}}});
