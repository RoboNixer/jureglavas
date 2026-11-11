function interro(t){X.fillStyle='#2b2f3a';X.fillRect(-3000,-3000,8000,8000);X.fillStyle='#3a3f4c';for(let i=-10;i<20;i++)X.fillRect(i*160,-3000,8,8000);X.fillStyle='#1d2028';X.fillRect(-3000,1320,8000,3000);rr(80,1180,920,70,10,'#6b4a2a',8);rr(140,1250,50,260,6,'#4a3220',6);rr(890,1250,50,260,6,'#4a3220',6)}
function lamp(x,t){line([[x,-400],[x,320]],8);path(()=>{X.moveTo(x-90,400);X.lineTo(x-40,310);X.lineTo(x+40,310);X.lineTo(x+90,400);X.closePath()},'#2f3640',7);X.globalAlpha=.22;path(()=>{X.moveTo(x-90,400);X.lineTo(x-520,1400);X.lineTo(x+520,1400);X.lineTo(x+90,400);X.closePath()},'#fff3b0',0);X.globalAlpha=1}
function road(t,off){hills(980,'#1c2a4a',t,6,60,1);hills(1080,'#15203a',t,14,50,2);X.fillStyle='#262a33';X.fillRect(-3000,1250,8000,600);X.fillStyle='#ffd23f';for(let i=-4;i<12;i++){const xx=((i*260-off)%3120+3120)%3120-500;X.fillRect(xx,1380,140,18)}X.fillStyle='#1a1d24';X.fillRect(-3000,1600,8000,600)}
function beach(t){nightSky(t);glow(780,330,260,'255,245,210',.35);moon(780,330,.75,{face:{smug:1,squint:1}});hills(1000,'#16233f',t,0,40,3);X.fillStyle='#d8c08a';X.fillRect(-3000,1180,8000,1200);X.fillStyle='#c4aa74';X.fillRect(-3000,1400,8000,1200)}

// ===== SHOTS =====
sh(0,(t,r)=>{cam(540,980,lerp(1.25,1.05,eo(r/1.2)),t,.5);jail(t);glow(560,860,330,'255,245,210',.45);moon(560,860,.95,{face:{smug:1,squint:1,look:-12}});bars();gary(290,1560,1.0,{t,eyes:'crazy',mouth:'grin',armR:-150});if(r<.1)FL=.9;
 X.setTransform(1,0,0,1,0,0);tag(540,330,'ARRESTED: THE MOON 🌙','#ffe14d',C((r-.25)/.25))});
sh(T('h2'),(t,r)=>{cam(540,900,lerp(1.4,1.6,r/1.3),t,.4);nightSky(t);rays(540,900,t,'255,245,210',.12);glow(540,900,420,'255,245,210',.4);moon(540,900,1.5,{face:{look:Math.sin(t*5)>0?14:-14,squint:1}});
 X.setTransform(1,0,0,1,0,0);bubbleTxt(540,330,'STALKER? 👀','#e53935',C(sp(r-.3,16,.45)),110)});
sh(T('s1'),(t,r)=>{cam(540,1000,1.05,t,.3);nightSky(t);glow(820,360,240,'255,245,210',.4);moon(820,360,.6,{face:{look:-14,smug:1}});road(t,r*900);cruiser(480,1440,.95,{t,speed:-14,driver:{look:-10}});speedlines(t);
 X.setTransform(1,0,0,1,0,0);tag(540,700,'MILE 1 🌙','#ffe14d',C(r/.2));if(r>.9)tag(540,700,'MILE 40 🌙','#ff9fd6',C((r-.9)/.2))});
sh(T('s1')+1.55,(t,r)=>{cam(540,1000,lerp(1.2,1.3,r/1.3),t,.5);nightSky(t);glow(760,560,220,'255,245,210',.45);moon(760,560,.55,{face:{look:-16,squint:1,smug:1}});road(t,r*900);cruiser(500,1440,1.0,{t,speed:-14,driver:{look:18,shock:1,sweat:1}});
 X.setTransform(1,0,0,1,0,0);tag(540,700,'MILE 300 😰','#ff7a7a',C(r/.2))});
sh(T('g1'),(t,r)=>{cam(540,980,lerp(1.15,1.25,r),t,.5);interro(t);lamp(540,t);glow(740,960,260,'255,245,210',.35);moon(740,960,.55,{face:{smug:1,look:-14}});gary(320,1560,1.05,{t,eyes:'angry',talk:t,teeth:1,armR:-95,tilt:8})});
sh(T('k1'),(t,r)=>{cam(540,900,lerp(1.5,1.65,r/1.8),t,.4);interro(t);lamp(540,t);glow(540,900,380,'255,245,210',.4);moon(540,900,1.2,{face:{talk:r<1.6?t:null,squint:1,smug:r>1.6}});
 X.setTransform(1,0,0,1,0,0);if(r>.6)tag(540,330,'I FOLLOW EVERYONE 🌍','#c4b2ff',C((r-.6)/.2))});
sh(T('g2'),(t,r)=>{cam(540,700,lerp(2.4,2.1,eo(r/.3)),t,.8);burst('#b71c1c','#c62828',t*2);gary(540,1250,1.0,{t,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});SHK=12;
 X.setTransform(1,0,0,1,0,0);cuffs(540,420,.9,-.15,C(sp(r-.1,14,.5)))});
sh(T('s2'),(t,r)=>{cam(540,980,lerp(1.05,1.25,r/2.4),t,.3);jail(t,1);X.globalAlpha=.35;X.fillStyle='#000';X.fillRect(-3000,-3000,8000,8000);X.globalAlpha=1;glow(540,900,300,'255,245,210',.5);moon(540,900,.85,{face:{squint:1,smug:1,look:12}});bars();
 X.setTransform(1,0,0,1,0,0);tag(540,330,'BIG MISTAKE…','#cfd6e2',C(r/.2));if(r>1.0)stampBig('1 PHONE CALL ☎️','#e53935',-8,C(sp(r-1.0,14,.5)),1250)});
sh(T('s3'),(t,r)=>{NOFX=1;cam(540,960,1,t,.4);burst('#14182b','#1b2140',t*.3);
 phoneUI(540,960,1,r,{typing:r>1.0&&r<1.6,list:[{a:.15,me:1,text:'Remind Officer Gary: HIGH TIDE at 9 PM 🌊 He parked his car on the beach.',time:'20:41'},{a:1.6,me:0,text:'Done ✅ I’ll remind Gary at 20:55 😇',time:'20:41'}]});
 glow(170,1720,120,'255,245,210',.4);moon(170,1720,.4,{face:{smug:1,squint:1}})});
sh(T('g3')-1.0,(t,r)=>{lockPhone(t,C(r/.8),'⏰ Gary! High tide at 9 PM. Your car is on the beach 🌊','20:55');X.setTransform(1,0,0,1,0,0);if(r>.4)tag(540,1250,'SENT BY: THE MOON 🌙','#c4b2ff',C((r-.4)/.2))});
sh(T('g3'),(t,r)=>{cam(540,960,lerp(1.1,1.2,r/1.5),t,.4);office(t);gary(540,1520,1.05,{t,eyes:'sleepy',talk:r<1.2?t:null,mouth:'grin',armR:-60});
 X.setTransform(1,0,0,1,0,0);tag(540,330,'😏 NICE TRY','#8ff07a',C((r-.2)/.2))});
sh(T('s4'),(t,r)=>{cam(540,1000,1.0,t,.3);beach(t);const wy=lerp(1500,1260,eo(C(r/1.6)));cruiser(520,1360,.9,{t,siren:1});waves(wy,t,{amp:22});
 X.setTransform(1,0,0,1,0,0);tag(540,640,'🕘 21:00','#7fd1ff',C(r/.2))});
sh(T('g4'),(t,r)=>{cam(540,1000,lerp(1.15,1.05,eo(r/.4)),t,.8);beach(t);const bob=Math.sin(t*2.5)*30;waves(1040,t,{amp:30});cruiser(540,1260+bob,.9,{t,siren:1,tilt:Math.sin(t*1.8)*.08});
 gary(540,1080+bob,.62,{t,eyes:'crazy',talk:t,teeth:1,sweat:1,armR:-170});waves(1200,t+1.3,{amp:24,col:'#16588f',col2:'#2b78bf'});SHK=6;
 X.setTransform(1,0,0,1,0,0);tag(540,640,'FLOATING 🚓🌊','#ffe14d',C((r-.2)/.2))});
sh(T('k2'),(t,r)=>{cam(540,820,lerp(1.4,1.6,r/2.5),t,.4);nightSky(t);rays(540,820,t,'255,245,210',.14);glow(540,820,420,'255,245,210',.45);moon(540,820,1.35,{face:{talk:r<1.4?t:null,smug:1,squint:1}});sparkles(540,820,C(r/1.2),12,420,'#fff3b0');
 X.setTransform(1,0,0,1,0,0);if(r>1.4)tag(540,330,'CASE DISMISSED 🌙','#c4b2ff',C((r-1.4)/.2))});
