function snowfall(t,n=70,a=.85){X.save();for(let i=0;i<n;i++){const sx=(rnd(i)*1400+Math.sin(t*1.3+i)*40+t*20)%1300-110,sy=((rnd(i+99)*2200+t*(90+rnd(i+7)*120))%2300)-200,r=4+rnd(i+3)*9;X.globalAlpha=a*(.5+rnd(i+5)*.5);circ(sx,sy,r,'#fff',0)}X.restore()}
function winter(t){sky('#7fa7d6','#dfeaf6');glow(820,300,240,'255,250,235',.35);hills(980,'#c9dbee',t,4,70,1);hills(1080,'#b3cbe4',t,8,50,2);haze(900,1200,'235,245,255',.4);X.fillStyle='#eef5fc';X.fillRect(-3000,1180,8000,1200);X.fillStyle='#dbe8f5';X.fillRect(-3000,1420,8000,1200);
 rr(80,700,260,480,10,'#c98f62',7);rr(120,760,80,90,6,'#ffe08a',6);rr(230,760,80,90,6,'#ffe08a',6);rr(70,680,280,40,10,'#fff',6);txt('POLICE',210,940,46,'#2d3f73',0)}
function heater(x,y,t,on){rr(x-120,y-170,240,170,18,'#9aa3ad',7);for(let k=0;k<5;k++)rr(x-100+k*42,y-150,26,130,8,on?'#ff6a2a':'#6b737d',5);if(on){glow(x,y-90,230,'255,120,40',.45+Math.sin(t*8)*.05);for(let k=0;k<3;k++){X.globalAlpha=.35;line([[x-50+k*50,y-200-((t*90+k*30)%80)],[x-40+k*50,y-260-((t*90+k*30)%80)]],6,'#ffb27a');X.globalAlpha=1}}}
function thermo(x,y,deg){rr(x-30,y-360,60,360,30,'#fff',7);const h=C((deg+5)/40)*300;rr(x-14,y-20-h,28,h+10,14,'#e53935',0);circ(x,y,46,'#e53935',7);txt(Math.round(deg)+'°',x,y-420,64,deg>15?'#ff5a3a':'#7fd1ff',12)}
const HEAT=a=>lerp(-2,32,C((a-T('s2')-.6)/4.5));

sh(0,(t,r)=>{cam(540,980,lerp(1.25,1.05,eo(r/1.2)),t,.5);jail(t);glow(560,900,330,'200,230,255',.4);snowman(600,1500,1.05,{t,hat:'cop',scarf:'#e53935',face:{smug:1,squint:1,look:-12}});bars();gary(250,1430,.85,{t,hat:0,eyes:'crazy',mouth:'grin',armR:-150});snowfall(t,25,.4);if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'ARRESTED: A SNOWMAN ⛄','#ffe14d',C((r-.25)/.25))});
sh(T('h2'),(t,r)=>{cam(540,700,lerp(1.5,1.7,r/1.3),t,.4);winter(t);rays(540,500,t,'255,250,235',.12);snowman(540,1500,1.4,{t,hat:'cop',scarf:'#e53935',face:{look:Math.sin(t*5)>0?12:-12,squint:1}});snowfall(t);
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'IDENTITY THEFT 🕵️','#e53935',C(sp(r-.3,16,.45)),100)});
sh(T('s1'),(t,r)=>{cam(540,1000,1.05,t,.3);winter(t);snowman(700,1450,.95,{t,hat:'cop',scarf:'#e53935',wave:1});gary(300,1560,.95,{t,hat:0,eyes:'angry',sweat:0,armR:-100});gshadow(700,1452,200);snowfall(t);
 X.setTransform(1,0,0,1,0,0);tag(540,640,"GARY'S HAT 🧢",'#ffe14d',C(r/.2));if(r>1.15)tag(540,780,"GARY'S SCARF 🧣",'#ff9fd6',C((r-1.15)/.2))});
sh(T('g1'),(t,r)=>{cam(420,900,lerp(1.4,1.5,r),t,.6);winter(t);gary(420,1600,1.15,{t,hat:0,eyes:'angry',talk:t,teeth:1,armR:-95,tilt:8});snowfall(t);SHK=r<.3?6:0});
sh(T('k1'),(t,r)=>{cam(540,700,lerp(1.6,1.75,r/1.7),t,.4);winter(t);snowman(540,1500,1.4,{t,hat:'cop',scarf:'#e53935',face:{talk:r<1.4?t:null,smug:1,squint:1}});snowfall(t);
 X.setTransform(1,0,0,1,0,0);if(r>.5)tag(540,330,'FINDERS KEEPERS 😏','#c4b2ff',C((r-.5)/.2))});
sh(T('s2'),(t,r)=>{cam(540,1000,lerp(1.05,1.15,r/2.4),t,.3);jail(t,1);glow(860,1250,300,'255,120,40',.35);snowman(480,1500,.95,{t,hat:'cop',scarf:'#e53935',melt:C((r-1.2)/6)*.25,face:{shock:r>1.4,look:14}});bars();heater(860,1520,t,r>.9);thermo(920,900,HEAT(t));
 X.setTransform(1,0,0,1,0,0);tag(540,300,'BIG MISTAKE…','#cfd6e2',C(r/.2));if(r>1.2)stampBig('HEATER: ON 🔥','#e53935',-8,C(sp(r-1.2,14,.5)),560)});
sh(T('g2'),(t,r)=>{cam(540,900,lerp(1.6,1.45,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);snowman(700,1500,.9,{t,hat:'cop',scarf:'#e53935',melt:.3,face:{shock:1}});gary(280,1600,1.0,{t,hat:0,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});SHK=10;
 X.setTransform(1,0,0,1,0,0);thermo(960,640,HEAT(t))});
sh(T('s3'),(t,r)=>{NOFX=1;cam(540,960,1,t,.4);burst('#10233a','#16304d',t*.3);snowfall(t,30,.35);
 phoneUI(540,960,1,r,{typing:r>1.4&&r<2.3,list:[{a:.2,me:1,text:'Remind Officer Gary every December 1st: BUILD ME AGAIN ⛄ (and bring the scarf)',time:'12:58'},{a:2.3,me:0,text:'Done ✅ I’ll remind Gary every Dec 1st ❄️',time:'12:58'}]});
 snowman(150,1880,.32,{t,hat:'cop',scarf:'#e53935',melt:.55,face:{squint:1,smug:1}})});
sh(T('s4'),(t,r)=>{cam(540,1050,1.0,t,.3);jail(t,1);heater(880,1520,t,1);door(560,1560,1.0,{open:0,col:'#6b4a2a',sign:'CELL 2'});const px=lerp(240,520,eo(C((r-.4)/1.2)));X.globalAlpha=.85;ell(px,1560,lerp(260,120,C((r-.4)/1.3)),26,'#bfe6ff',6);X.globalAlpha=1;
 if(r<.6)snowman(240,1560,.8,{t,melt:lerp(.85,1,r/.6),face:{}});rr(-200,1556,1400,14,0,'#2a2d36',0);bars();
 X.setTransform(1,0,0,1,0,0);if(r>.9)tag(540,330,'ESCAPED 💧','#7fd1ff',C((r-.9)/.2))});
sh(T('g3'),(t,r)=>{cam(540,820,lerp(2.0,1.8,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1350,1.0,{t,hat:0,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});SHK=12;
 X.setTransform(1,0,0,1,0,0);impact(C(r/.4))});
sh(T('s5'),(t,r)=>{lockPhone(t,C(r/.6),'⏰ Gary! Build the snowman again ⛄ Bring the scarf 🧣','DEC 1');X.setTransform(1,0,0,1,0,0);if(r>.5)tag(540,1250,'SET BY: THE SNOWMAN ⛄','#c4b2ff',C((r-.5)/.2))});
sh(T('s5')+1.25,(t,r)=>{cam(540,1000,lerp(1.1,1.2,r/1.5),t,.4);winter(t);snowman(680,1460,.95,{t,scarf:0,melt:0,arms:0,face:{}});gary(300,1580,1.0,{t,hat:0,eyes:'sleepy',mouth:'grin',armR:-60});snowfall(t);gshadow(680,1462,200);
 X.setTransform(1,0,0,1,0,0);tag(540,330,'DEC 1st ❄️','#7fd1ff',C(r/.2))});
sh(T('k2'),(t,r)=>{cam(540,760,lerp(1.4,1.6,r/2.8),t,.4);winter(t);rays(540,500,t,'255,250,235',.14);snowman(540,1500,1.35,{t,hat:'cop',scarf:'#e53935',wave:1,face:{talk:r<1.3?t:null,smug:1,squint:1}});sparkles(540,900,C(r/1.2),12,420,'#ffffff');snowfall(t);
 X.setTransform(1,0,0,1,0,0);if(r>1.4)tag(540,330,'SEE YOU NEXT YEAR ⛄','#c4b2ff',C((r-1.4)/.2))});
