function cup(x,y,s,spill){X.save();X.translate(x,y);X.scale(s,s);rr(-45,-90,90,100,14,'#fff',7);line([[45,-70],[75,-60],[70,-20],[45,-15]],10,O);rr(-40,-88,80,16,8,'#6b3e1f',0);
 if(spill){X.globalAlpha=.95;ell(10,-160,40,26,'#6b3e1f',6);circ(-30,-210,14,'#6b3e1f',5);circ(40,-230,10,'#6b3e1f',5);circ(0,-270,8,'#6b3e1f',4);X.globalAlpha=1}X.restore()}
function wife(x,y,s,o){toon(x,y,s,Object.assign({hair:'pinkbun',shirt:'#c2185b',shirt2:'#d81b60',pants:'#5a1a3a',eyes:'angry',mouth:'grin'},o||{}))}
function station(t){office(t);bokeh(t,'255,230,170',8,120,600)}
function diner(t){roomWall('#3b2a4a','#2c1f38','#6a3b5a');bokeh(t,'255,200,120',16,100,900);glow(540,1080,420,'255,190,110',.35);
 rr(120,1150,840,60,14,'#7a4a2a',7);rr(170,1210,40,260,8,'#5a3420',6);rr(870,1210,40,260,8,'#5a3420',6);
 rr(450,1060,180,90,16,'#fff4e6',6);rr(450,1040,180,26,10,'#ff8fb1',5);[480,540,600].forEach((cx,k)=>{rr(cx-6,990,12,50,4,'#7fd1ff',3);ell(cx,980+Math.sin(t*12+k)*3,9,15,'#ffb300',0);glow(cx,975,50,'255,200,80',.5)})}

// 0 h1: Time behind bars
sh(0,(t,r)=>{cam(540,1000,lerp(1.25,1.05,eo(r/1.2)),t,.5);jail(t);glow(600,900,330,'255,220,180',.35);clockman(640,1500,1.0,{t,cuffs:1,face:{smug:1,squint:1,look:-14}});bars();gary(260,1450,.9,{t,eyes:'crazy',mouth:'grin',armR:-150});if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'ARRESTED: TIME ⏰','#ffe14d',C((r-.25)/.25))});
// h2: always late
sh(T('h2'),(t,r)=>{cam(540,1000,lerp(1.05,1.2,r/2.4),t,.5);station(t);const k=Math.floor(C(r/2.3)*4);
 gary(330+Math.sin(t*3)*30,1560,.95,{t,walk:t,eyes:'crazy',sweat:1,armR:-160});clockman(780,1480,.8,{t,ring:1,spin:1,face:{smug:1,talk:null}});gshadow(780,1482,160);
 X.setTransform(1,0,0,1,0,0);tag(540,300,'LATE AGAIN 😤','#ff9f43',C(r/.2));const days=[1,47,213,365][k];bubbleTxt(540,470,'DAY '+days+' / '+days,'#e53935',C(sp(r-.3,14,.45)),88)});
// g1: rights
sh(T('g1'),(t,r)=>{cam(470,900,lerp(1.45,1.55,r),t,.6);burst('#2d3f73','#3c5a9a',t);gary(470,1620,1.2,{t,eyes:'angry',talk:t,teeth:1,armR:-95,tilt:6});cuffs(820,820,.9,Math.sin(t*6)*.3,C(r/.3));SHK=r<.3?7:0;
 X.setTransform(1,0,0,1,0,0);impact(C(r/.35))});
// k1: Time threatens
sh(T('k1'),(t,r)=>{const slow=C((r-1.4)/1);cam(540,820,lerp(1.5,1.75,r/2.4),t,.4*(1-slow));jail(t,1);rays(540,400,t,'255,230,200',.12);clockman(540,1520,1.35,{t:t-slow*(t-T('k1')-1.4)*.9,cuffs:1,face:{talk:r<2.3?t:null,smug:1,squint:1}});
 X.setTransform(1,0,0,1,0,0);tag(540,300,r<1.2?'TICK… 🕰️':'TOCK…','#c4b2ff',C(r/.2));freeze(slow*.5,t,'')});
// s1: everything stopped (2nd hook)
const FR=a=>C((a-T('s1')-.35)/.5);
sh(T('s1'),(t,r)=>{const f=FR(t),tt=f>=1?T('s1')+.85:t;cam(540,1000,lerp(1.0,1.12,r/1.6),tt,.3);station(tt);gary(380,1560,1.0,{t:tt,eyes:'wide',armR:-130});cup(560,1170,1.0,1);clockman(800,1480,.75,{t:tt,cuffs:1,frozen:1,face:{smug:1,squint:1}});
 if(f>0){X.globalAlpha=.7;for(let k=0;k<14;k++)circ(rnd(k)*1080,200+rnd(k+40)*1100,4+rnd(k+3)*6,'#fff',0);X.globalAlpha=1}
 X.setTransform(1,0,0,1,0,0);freeze(f,t);if(r>.5)stampBig('TIME: STOPPED ⏸','#4aa8ff',-7,C(sp(r-.5,14,.5)),520)});
// g2: floating coffee
sh(T('g2'),(t,r)=>{cam(560,1000,lerp(1.7,1.55,eo(r/.3)),T('s1')+.85,.8);station(T('s1'));gary(420,1700,1.25,{t:T('s1'),eyes:'crazy',talk:t,teeth:1,armR:-130});cup(700,1050+Math.sin(t*2)*6,1.4,1);SHK=r<.25?8:0;
 X.setTransform(1,0,0,1,0,0);freeze(1,t);bubbleTxt(540,360,'FLOATING ☕','#4aa8ff',C(sp(r-.15,16,.45)),96)});
// s2: Time texts Memopai
sh(T('s2'),(t,r)=>{NOFX=1;cam(540,960,1,t,.3);burst('#10233a','#16304d',t*.3);
 phoneUI(540,960,1,r,{typing:r>2.0&&r<3.4,list:[{a:.25,me:1,text:'Remind Officer Gary: his wife’s birthday dinner is TONIGHT, 7 PM 🎂 He forgot. Again.',time:'18:00'},{a:3.4,me:0,text:'Done ✅ I’ll remind Gary right now ⏰',time:'18:00'}]});
 clockman(150,1900,.38,{t,cuffs:1,face:{smug:1,squint:1}});X.setTransform(1,0,0,1,0,0);freeze(.35,t,'')});
// s3: press play -> buzz
sh(T('s3'),(t,r)=>{const f=1-C((r-1.0)/.25);cam(540,1000,lerp(1.05,1.18,r/2.8),t,.4);station(t);gary(400,1580,1.0,{t,eyes:r>1.6?'wide':'angry',armR:-60});clockman(800,1480,.8,{t,cuffs:1,spin:r>1.0,face:{smug:1,talk:null}});gshadow(800,1482,160);
 if(r>.5&&r<1.1){X.setTransform(1,0,0,1,0,0);circ(540,960,110,'rgba(255,255,255,.9)',0);path(()=>{X.moveTo(510,900);X.lineTo(510,1020);X.lineTo(600,960);X.closePath()},'#4aa8ff',0)}
 X.setTransform(1,0,0,1,0,0);freeze(f,t,f>0?'▶ PLAY':'');if(r>1.6){glow(540,240,320,'37,211,102',.35);notif(130,C((r-1.6)/.4),'Memopai','🎂 Your wife’s birthday dinner is TONIGHT, 7 PM!')}});
// g3: today?!
sh(T('g3'),(t,r)=>{cam(540,900,lerp(1.6,1.45,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);calendar(680,640,.7,'🎂');gary(420,1650,1.15,{t,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});SHK=10;
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'TODAY?!','#ffe14d',C(sp(r-.1,16,.45)),110)});
// s4: Time set free
sh(T('s4'),(t,r)=>{cam(540,1000,lerp(1.05,1.15,r/1.5),t,.3);jail(t);door(300,1560,.95,{open:C(r/.5),col:'#6b6f78',sign:'CELL 1'});clockman(lerp(560,900,C(r/1.4)),1500,.85,{t,walk:1,spin:1,face:{smug:1,squint:1}});gary(180,1560,.85,{t,eyes:'sleepy',armR:-40});
 X.setTransform(1,0,0,1,0,0);sparkles(700,1100,C(r/1),10,320,'#ffe14d');tag(540,320,'RELEASED ⏰','#7bed9f',C((r-.2)/.2))});
// s5: still late
sh(T('s5'),(t,r)=>{cam(540,1000,lerp(1.1,1.2,r),t,.3);diner(t);wife(720,1560,1.0,{t,armL:150,armR:-150});gary(260+lerp(-200,0,eo(C(r/.5))),1580,.95,{t,walk:r<.5?t:null,eyes:'wide',sweat:1,armR:-160});
 X.setTransform(1,0,0,1,0,0);stampBig('7:45 PM 😬','#e53935',-8,C(sp(r-.2,14,.5)),420)});
// g4: custody + loop
sh(T('g4'),(t,r)=>{cam(540,1000,lerp(1.15,1.3,r/2.6),t,.4);diner(t);wife(740,1560,1.0,{t,armL:150,armR:-150});gary(330,1590,1.0,{t,eyes:'crazy',talk:r<1.1?t:null,teeth:1,sweat:1,armR:-170});
 if(r>1.1){const px=lerp(1240,900,eo(C((r-1.1)/.4)));clockman(px,1080,.55,{t,ring:r>1.6,face:{smug:1,squint:1,look:-14},noshadow:1})}
 X.setTransform(1,0,0,1,0,0);if(r>1.6)tag(540,320,'TIME 1 – GARY 0 ⏰','#ffe14d',C((r-1.6)/.2))});
