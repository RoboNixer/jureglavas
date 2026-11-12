// ===== HOTMAIL: Microsoft forgot a $35 bill -> Jake makes Memopai remind his flatmate =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const JAKE={hair:'#2a1a12',coat:'#3e9a6a',buttons:false};
const SAM={hair:'#c9772e',coat:'#e0773a',buttons:false};
const STR={hair:'#6a6a6a',coat:'#6a5a8a',buttons:false,mustache:1};
function tower(t){sky('#6fb8ee','#ffe9cf');glow(880,260,280,'255,228,150',.55);rays(880,260,t,'255,240,200',.12);clouds(t,240);
 hills(1020,'#b4d3e6',t,3,50,4);hills(1110,'#8fc27e',t,5,40,1);
 // glass tower
 rr(250,200,520,980,16,'#5f86b8',9);vol(()=>X.rect(250,200,520,980),510,690,260,490);
 for(let r=0;r<9;r++)for(let c=0;c<5;c++)rr(282+c*98,370+r*88,74,60,6,(r*3+c)%5?'#a9d2f5':'#ffe9a8',4);
 rr(300,240,420,90,14,'#151a2a',7);txt('MICROSOFT',510,286,56,'#fff',0);
 haze(900,1200,'255,245,230',.3);X.fillStyle='#c9ccd3';X.fillRect(-3000,1180,8000,70);X.fillStyle='#7d828e';X.fillRect(-3000,1250,8000,2000);
 for(let i=-6;i<14;i++)rr(i*240,1660,130,14,4,'rgba(255,255,255,.6)',0)}
function bill(x,y,s,rot,label='$35',col='#fff7e0',top='#e53935'){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-80,-100,160,200,10,col,6);rr(-80,-100,160,40,8,top,0);txt('BILL',0,-80,26,'#fff',0);txt(label,0,10,50,'#151515',0);for(let k=0;k<3;k++)line([[-50,55+k*16],[50,55+k*16]],4,'#bbb');X.restore()}
function xmasRoom(t){X.fillStyle='#3a2a4a';X.fillRect(-3000,-3000,8000,8000);for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.04)':'rgba(0,0,0,.05)';X.fillRect(k*90,-3000,45,4300)}
 bokeh(t,'255,200,120',14,150,900);
 // window with snow
 
 // calendar on wall
 X.save();X.translate(360,560);X.scale(.9,.9);rr(-120,-150,240,290,16,'#fff',7);rr(-120,-150,240,70,14,'#e53935',7);txt('DEC 1999',0,-114,30,'#fff',0);txt('24',0,20,120,'#151515',0);X.restore();
 // xmas tree
 X.save();X.translate(150,1230);gshadow(0,0,160,.3);rr(-20,-60,40,60,6,'#6a4024',5);for(let k=0;k<3;k++)path(()=>{X.moveTo(-140+k*25,-60-k*150);X.lineTo(0,-260-k*150);X.lineTo(140-k*25,-60-k*150);X.closePath()},'#2f8a4a',7);
 for(let k=0;k<9;k++){const on=Math.sin(t*5+k*1.7)>0;circ(-80+rnd(k)*160*(1-rnd(k+9)*.4),-110-rnd(k+2)*380,12,on?['#ffe14d','#ff5a5f','#5ad1ff'][k%3]:'#555',4);if(on)glow(-80+rnd(k)*160*(1-rnd(k+9)*.4),-110-rnd(k+2)*380,40,'255,220,120',.4)}
 path(()=>{for(let j=0;j<10;j++){const a=-Math.PI/2+j*Math.PI/5,rr_=j%2?18:42;X.lineTo(Math.cos(a)*rr_,-600+Math.sin(a)*rr_)}X.closePath()},'#ffe14d',5);X.restore();
 X.fillStyle='#6a4a3a';X.fillRect(-3000,1230,8000,3000);rr(380,1080,700,40,8,'#8a5a3a',7);line([[440,1120],[440,1240]],14,'#6a4024');line([[1010,1120],[1010,1240]],14,'#6a4024')}
function lroom(t){X.fillStyle='#ecd6b6';X.fillRect(-3000,-3000,8000,8000);
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.08)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 X.save();X.beginPath();X.rect(600,300,380,440);X.clip();sky('#8fd0f5','#e8f6ff');hills(640,'#9fd38f',t,3,40,2);X.fillStyle='#d9c59a';for(let k=0;k<4;k++)rr(610+k*95,560-rnd(k)*120,80,300,4,['#e9b98a','#c97b63','#a8b8d8','#d9c59a'][k],4);X.restore();
 rr(588,288,404,464,10,null,20,'#8a5a3a');line([[790,288],[790,752]],12,'#8a5a3a');rr(570,746,440,30,8,'#a8714a',6);glow(790,520,380,'255,240,200',.3);
 X.fillStyle='#b98a5e';X.fillRect(-3000,1250,8000,3000);for(let k=-6;k<16;k++)line([[k*160,1250],[k*160-120,1900]],4,'rgba(0,0,0,.08)');haze(1150,1300,'60,30,10',.12)}
function sofa(x,y,col='#5b7fbf'){gshadow(x,y+20,330,.3);rr(x-280,y-260,560,200,50,col,8);vol(()=>X.roundRect(x-280,y-260,560,200,50),x,y-160,280,100)}
function sofaFront(x,y,col='#4a6aa8'){rr(x-310,y-110,620,120,34,col,8);rr(x-340,y-210,90,230,34,col,8);rr(x+250,y-210,90,230,34,col,8)}
function hphone(x,y,rot,on,buzz=0){X.save();X.translate(x+buzz,y);X.rotate(rot);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#2a2a2a',0);X.restore();if(on)glow(x,y,120,'130,240,160',.35)}

// ===== SHOTS =====
// 1 HOOK: Microsoft tower, a $35 bill flutters down into a bin
sh(0,(t,r)=>{cam(540,lerp(900,1000,eo(C(r/3))),lerp(1.15,1.0,eo(C(r/2.6))),t,.4);tower(t);
 wbin(800,1450,.9,{col:'#3a5fa8',dark:'#26437a',lid:C((r-1.6)/.3)*.6});
 const k=C((r-.4)/1.7);const bx=lerp(560,800,eo(k))+Math.sin(r*6)*60*(1-k),by=lerp(520,1250,k*k);if(r<2.2)bill(bx,by,1.05,Math.sin(r*5)*.5);
 gshadow(200,1500,150);man(200,1500,1.2,{coat:'#2a3550',buttons:true,face:'happy',armR:-100,t});
 if(r<.08)FL=.6;X.setTransform(1,0,0,1,0,0);tag(540,640,'$35 BILL · UNPAID 💸','#ffe14d',C((r-.25)/.25))});
// 2 CHRISTMAS EVE 1999: stranger's Hotmail login fails, he pays the $35 himself
sh(T('s1')-.05,(t,r)=>{const pay=t>WT('s1',7)-.1;cam(lerp(600,660,r/4),1020,lerp(1.08,1.15,r/4),t,.35);xmasRoom(t);
 crt(820,1080,1.0,{t,scr:pay?'PAID $35':'HOTMAIL',scr2:pay?'thanks, stranger':'LOGIN FAILED',col:pay?'#1f8a4a':'#c0392b',glowc:pay?'90,240,140':'255,90,80'});
 gshadow(500,1400,150);man(500,1400,1.1,Object.assign({face:pay?'smug':'shock',sweat:!pay,armR:pay?-160:40,armL:-60,t},STR));
 if(pay){X.save();X.translate(660,900+Math.sin(t*6)*6);X.rotate(-.2);rr(-60,-38,120,76,10,'#ffcf3a',5);rr(-60,-20,120,14,0,'#333',0);X.restore()}
 X.setTransform(1,0,0,1,0,0);tag(540,180,pay?'A STRANGER PAID IT 💳':'DEC 24, 1999 🎄','#ffe14d',pay?C((t-WT('s1',7))/.25):C((r-.1)/.25))});
// 3 FLATMATE: Sam on the sofa ignores the internet bill, router red, Jake fed up
sh(T('s3')-.1,(t,r)=>{cam(560,1050,lerp(1.12,1.2,r/3.6),t,.35);lroom(t);
 router(870,1250,.8,{t,on:0});bill(930,900,.8,.12,'LATE','#fff','#e53935');
 sofa(380,1380,'#7a8f5a');man(380,1350,1.05,Object.assign({face:'happy',armR:-170,armL:-170,t},SAM));sofaFront(380,1420,'#6a7f4a');
 gshadow(720,1450,150);man(720,1450,1.05,Object.assign({face:'angry',armL:-60,armR:r>2?-150:40,t},JAKE));if(r>2)hphone(805,1060,.2,1);
 X.setTransform(1,0,0,1,0,0);tag(540,180,'SAM’S TURN TO PAY. AGAIN. 😤','#ffe14d',C((r-.2)/.25))});
// 4 MEMOPAI: Jake's voice message plays, Memopai confirms it will remind Sam (s4 + m1)
sh(T('s4')-.1,(t,r)=>{cam(540,960,1,t,.3);burst('#103a2a','#145236',t*.3);NOFX=1;
 const m1=T('m1'),m1e=E('m1');const pl=C((t-m1)/(m1e-m1));const z=lerp(1.25,1.36,eo(C(r/2)));
 phoneUI(540,lerp(1080,1010,eo(C(r/2))),z,r,{typing:t>m1e&&t<m1e+.5,list:[
  {a:m1-T('s4')-.25,me:1,voice:1,pl:pl,dur:pl>0&&pl<1?'0:0'+Math.floor(pl*3.9):'0:04',time:'19:12'},
  {a:m1e-T('s4')+.3,me:0,text:'Done ✅ I’ll remind Sam on the 1st of every month: pay the internet 🌐',time:'19:12'}]});
 X.setTransform(1,0,0,1,0,0);
 if(t<m1-.25&&r>.25){X.save();X.translate(540,1180);const k=C((r-.25)/.25);X.scale(k,k);rr(-300,-50,600,100,50,'#fff',6);circ(-250,0,16,Math.sin(t*12)>0?'#e53935':'#ff8a80',0);X.font="700 34px Inter";X.fillStyle='#333';X.textAlign='left';X.textBaseline='middle';X.fillText('0:0'+Math.min(4,Math.floor(r*1.2)),-215,0);for(let k2=0;k2<15;k2++){const hh=10+Math.abs(Math.sin(t*14+k2*1.3))*30;X.fillStyle='#00a884';X.fillRect(-120+k2*20,-hh/2,10,hh)}circ(245,0,44,'#00a884',0);txt('🎤',245,2,40,'#fff',0);X.restore()}
 man(140,2010,.75,Object.assign({face:t>m1e+.5?'happy':'neutral',armR:-120,t},JAKE))});
// 5 THE 1ST: Sam's phone buzzes, Memopai notification in HIS WhatsApp
sh(WT('s5',2)-.05,(t,r)=>{cam(540,1000,lerp(1.08,1.16,r/3.2),t,.35);lroom(t);router(870,1250,.8,{t,on:0});
 sofa(460,1380,'#7a8f5a');const on=r>.4;man(460,1350,1.05,Object.assign({face:r>1.2?'shock':'neutral',armR:-125,t},SAM));
 hphone(575,975,-.15,on,on?Math.sin(t*90)*4:0);sofaFront(460,1420,'#6a7f4a');
 X.setTransform(1,0,0,1,0,0);if(r<1.0)tag(540,290,'1ST OF THE MONTH 📅','#ffe14d',C((r-.05)/.25));
 notif(150,C((r-.95)/.35),'Memopai','🌐 Sam, pay the internet today! (from Jake)')});
// 6 PAYOFF: router turns green, Jake + Sam high five
sh(T('p1')-.1,(t,r)=>{cam(560,1000,lerp(1.1,1.18,r/3),t,.35);lroom(t);
 const g=C((r-.2)/.3);router(560,860,.8,{t,on:g});
 const hi=C((r-.9)/.25);gshadow(380,1450,150);man(380,1450,1.1,Object.assign({face:'happy',armR:lerp(20,-150,hi),t},SAM));
 gshadow(720,1450,150);man(720,1450,1.1,Object.assign({face:r>1.6?'wink':'happy',flip:1,armR:lerp(20,-150,hi),t},JAKE));
 if(r>1.1)sparkles(560,880,C((r-1.1)/.7),12,260);
 X.setTransform(1,0,0,1,0,0);tag(540,180,'INTERNET: PAID ✅','#8ff07a',C((r-.3)/.25))});
// 7 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
