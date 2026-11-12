// ===== TRIAL: your trial ends tonight -> charged x3 -> REWIND -> text Memopai on day 1 -> day 6 buzz -> cancelled =====
function WT(tag,i){const l=L.find(z=>z.tag===tag);const w=l.text.split(' ');const wt=w.map(x=>x.length+1+(/[.,?:!]$/.test(x)?4:0));const tot=wt.reduce((a,b)=>a+b,0);let acc=0;for(let k=0;k<i;k++)acc+=wt[k];return l.t0+(l.t1-l.t0)*acc/tot}
const YOU={hair:'#4a2f1e',coat:'#2fa39a',buttons:false};
function room(t,night=0){X.fillStyle=night?'#cdbfae':'#e9d8bc';X.fillRect(-3000,-3000,8000,8000);
 for(let k=-10;k<30;k++){X.fillStyle=k%2?'rgba(255,255,255,.07)':'rgba(120,80,40,.05)';X.fillRect(k*90,-3000,45,4300)}
 X.save();X.beginPath();X.rect(640,300,330,400);X.clip();
 if(night){sky('#1b2350','#3b3f7a');for(let k=0;k<14;k++)circ(650+rnd(k)*320,320+rnd(k+9)*240,3+rnd(k+2)*3,'rgba(255,255,230,.9)',0);circ(880,380,38,'#fff4c8',0);hills(640,'#2a3a5a',t,3,40,2)}
 else{sky('#8fd0f5','#e8f6ff');hills(600,'#9fd38f',t,3,40,2);hills(660,'#7fb86f',t,5,30,5)}
 X.restore();path(()=>X.roundRect(628,288,354,424,10),null,18,'#8a5a3a');line([[805,288],[805,712]],10,'#8a5a3a');glow(805,500,330,night?'150,170,255':'255,240,200',.28);
 // lamp
 line([[150,1250],[150,620]],10,'#3a3a3a');path(()=>{X.moveTo(70,620);X.lineTo(230,620);X.lineTo(190,500);X.lineTo(110,500);X.closePath()},'#f2c46b',7);if(night)glow(150,600,380,'255,200,120',.45);
 X.fillStyle='#b98a5e';X.fillRect(-3000,1250,8000,3000);for(let k=-6;k<16;k++)line([[k*160,1250],[k*160-120,1900]],4,'rgba(0,0,0,.08)');haze(1150,1300,'60,30,10',.12)}
function sofa(x,y,col='#7a8f5a'){gshadow(x,y+20,330,.3);rr(x-280,y-260,560,200,50,col,8);vol(()=>X.roundRect(x-280,y-260,560,200,50),x,y-160,280,100)}
function sofaFront(x,y,col='#6a7f4a'){rr(x-310,y-110,620,120,34,col,8);rr(x-340,y-210,90,230,34,col,8);rr(x+250,y-210,90,230,34,col,8)}
function hphone(x,y,rot,on,buzz=0,col){X.save();X.translate(x+buzz,y);X.rotate(rot);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,col||(on?'#25d366':'#3a6ea8'),0);X.restore();if(on)glow(x,y,120,'130,240,160',.35)}
// bank-style charge notification (generic, no brand): card icon + amount
function charge(x,y,s,p,amt='−€12.99',sub='Card charged · Trial renewed'){if(p<=0)return;X.save();X.translate(x,y);const k=lerp(1.5,1,eo(C(p)));X.scale(s*k,s*k);X.globalAlpha=C(p*3);
 rr(-430,-95,860,190,40,'rgba(252,252,255,.98)',6);rr(-395,-50,130,90,14,'#2d5bd1',0);rr(-370,-25,34,26,6,'#e8c35a',0);line([[-390,25],[-280,25]],6,'rgba(255,255,255,.5)');
 txt(amt,-235,-22,60,'#e53935',0,'900 ','left');txt(sub,-235,38,32,'#555',0,'600 ','left');X.restore()}
function wallet(x,y,s,open=0){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,70,170,.3);rr(-150,-90,300,170,26,'#7a4a2a',7);if(open>0){for(let k=0;k<3;k++)rr(-120+k*18,-90-60*open-k*10,220,90,10,['#5aa86a','#6abf7a','#4f9a5f'][k],5)}rr(-150,-40,300,120,26,'#8f5a34',7);rr(60,-10,110,60,24,'#6a3e22',6);circ(130,20,12,'#e8c35a',4);X.restore()}

// ===== SHOTS =====
// 1 HOOK: tonight, on the sofa, phone says "trial ends tonight"; at "You didn't" YOU just keeps watching TV
sh(0,(t,r)=>{const nd=WT('h1',8);cam(lerp(520,470,r/3),lerp(1060,1020,r/3),lerp(1.22,1.3,r/3),t,.35);room(t,1);
 glow(330,1000,520,'120,170,255',.25*(1+.3*Math.sin(t*13)));
 sofa(400,1400);man(400,1370,1.12,Object.assign({face:t>nd?'happy':'neutral',armR:70,armL:t>nd?-30:-20,t},YOU));
 hphone(600,1100,-.15,0,0,'#e9e2ff');if(t<nd){X.save();X.translate(600,1100);X.rotate(-.15);txt('⏳',0,-8,40,'#000',0);X.restore()}
 sofaFront(400,1440);X.setTransform(1,0,0,1,0,0);
 if(t<nd)tag(560,560,'TRIAL ENDS TONIGHT ⏳','#ffe14d',C((r-.05)/.25));else tag(520,560,'FORGOT 🙈','#ffffff',C((t-nd)/.2))});
// 2 CHARGED x3 (s1), then the total (s1b)
sh(T('s1')-.05,(t,r)=>{const c=[WT('s1',0),WT('s1',3),WT('s1',4)+.15],tot=WT('s1b',1)-.1;cam(540,lerp(1000,980,r/5),lerp(1.05,1.1,r/5),t,.3);room(t,0);
 const hit=c.filter(x=>t>x).length;man(540,1500,1.3,Object.assign({face:hit?'shock':'neutral',sweat:hit>1,armL:hit?-150:-20,armR:hit?150:20,t},YOU));gshadow(540,1505,200,.3);
 X.setTransform(1,0,0,1,0,0);
 if(t<tot){for(let k=0;k<3;k++)if(t>c[k])charge(540,330+k*215,1,(t-c[k])/.22,'−€12.99',['Card charged · Trial renewed','Card charged · Month 2','Card charged · Month 3'][k]);
  for(let k=0;k<3;k++)if(t>c[k]&&t<c[k]+.06)FL=.35}
 else stampBig('−€38.97','#e53935',-.1,C((t-tot)/.3),800)});
// 3 REWIND -> DAY 1: you hit "Start trial" (s2 first half)
sh(T('s2')-.05,(t,r)=>{const t0=T('s2')-.05,rw=WT('s2',2);const back=t<rw;cam(540,lerp(1040,1000,r/2.5),lerp(1.15,1.22,r/2.5),t,.3);room(t,0);
 sofa(400,1400);man(400,1370,1.12,Object.assign({face:back?'shock':'happy',armR:70,t:back?t0-(t-t0)*3:t},YOU));
 hphone(600,1100,-.15,!back,0,back?'#3a6ea8':'#ffffff');if(!back){X.save();X.translate(600,1100);X.rotate(-.15);rr(-22,-12,44,24,8,'#2d5bd1',0);X.restore()}
 sofaFront(400,1440);X.setTransform(1,0,0,1,0,0);
 if(back){for(let k=0;k<3;k++)charge(540,330+k*215,1,1-C((t-t0-k*.12)/.35),'−€12.99','');rewind(C((t-t0)/.12)*(1-C((t-rw+.12)/.15)),t)}
 else tag(400,640,'DAY 1 · 7-DAY TRIAL ✅','#ffe14d',C((t-rw)/.2))});
// 4 MEMOPAI CHAT: "Remind me in 6 days to cancel the trial" -> Done (s2 end + m1)
sh(WT('s2',7)-.2,(t,r)=>{const t0=WT('s2',7)-.2;cam(540,960,1,t,.3);burst('#103a2a','#145236',t*.3);NOFX=1;
 const z=lerp(1.25,1.33,eo(C(r/2)));const send=WT('s2',8)-.1-t0,rep=T('m1')+.7-t0;
 phoneUI(540,lerp(1040,960,eo(C(r/2))),z,r,{typing:r>send+.25&&r<rep,list:[
  {a:send,me:1,text:'Remind me in 6 days to cancel the trial ❌',time:'10:00'},
  {a:rep,me:0,text:'Done ✅ I’ll remind you on Tuesday at 10:00',time:'10:00'}]});
 X.setTransform(1,0,0,1,0,0);man(150,2010,.75,Object.assign({face:r>rep?'happy':'neutral',armR:-120,t},YOU))});
// 5 DAY 6: buzz, Memopai notification, two taps, CANCELLED
sh(T('s3')-.05,(t,r)=>{const bz=WT('s3',2),tap=WT('s3',3),cn=WT('s3',5);cam(lerp(560,520,r/2.5),1030,lerp(1.2,1.27,r/2.5),t,.35);room(t,0);
 sofa(400,1400);const on=t>bz;man(400,1370,1.12,Object.assign({face:t>cn?'happy':on?'shock':'neutral',armR:t>tap?-20:70,t},YOU));
 const tp=t>tap&&t<cn?Math.abs(Math.sin((t-tap)*14))*8:0;hphone(600,1100-tp,-.15,on,on&&t<tap?Math.sin(t*90)*4:0);sofaFront(400,1440);
 if(t>tap){const q=C((t-tap)/.2);X.save();X.translate(720,880);X.scale(eo(q),eo(q));rr(-150,-70,300,120,24,'#ffffff',6);rr(-120,-40,240,60,30,t>cn-.15?'#9aa0a6':'#e53935',0);txt('Cancel plan',0,-10,32,'#fff',0);X.restore()}
 X.setTransform(1,0,0,1,0,0);if(t<bz)tag(400,640,'DAY 6 · 10:00 ⏰','#ffe14d',C((r-.05)/.2));
 else if(t<cn)notif(150,C((t-bz)/.3),'Memopai','❌ Cancel your trial today! (ends tomorrow)');
 else{stampBig('DONE ✓','#1fa463',-.1,C((t-cn)/.3),560);if(t<cn+.07)FL=.3}});
// 6 PAYOFF: you kept the whole trial, the money stays in the wallet
sh(T('p1')-.05,(t,r)=>{const g=WT('p1',5);cam(540,lerp(1020,990,r/2.5),lerp(1.12,1.18,r/2.5),t,.3);room(t,1);glow(330,1000,520,'120,170,255',.25*(1+.3*Math.sin(t*13)));
 sofa(400,1400);man(400,1370,1.12,Object.assign({face:'happy',armR:-150,armL:150,t},YOU));sofaFront(400,1440);
 gshadow(820,1250,150,.3);rr(700,1150,240,30,10,'#8a5a3a',6);line([[730,1180],[730,1250]],12,'#6a4028');line([[910,1180],[910,1250]],12,'#6a4028');wallet(820,1080,.75,C((t-g)/.4));if(t>g+.3)sparkles(820,980,C((t-g-.3)/.7),12,260);
 X.setTransform(1,0,0,1,0,0);if(t>T('p1')+.2)tag(540,560,t>g?'€0 CHARGED 😎':'WHOLE TRIAL WATCHED 📺',t>g?'#8ff07a':'#ffe14d',t>g?C((t-g)/.2):C((t-T('p1')-.2)/.2))});
// 7 END CARD + CTA
sh(T('cta')-.05,(t,r)=>endcard(t,r));
// COVER-ONLY shot (t=1000, never reached): YOU on the sofa at night, phone + 3 charge cards. Use cover_t=1000.5
sh(1000,(t,r)=>{cam(540,960,1,0,0);room(0,1);sofa(400,1760);man(400,1730,1.15,Object.assign({face:'shock',sweat:true,armR:70,armL:-150,t:0},YOU));hphone(606,1456,-.15,0,0,'#e9e2ff');sofaFront(400,1800);X.setTransform(1,0,0,1,0,0);
 for(let k=0;k<3;k++)charge(560,800+k*165,.8,1,'−€12.99',['Card charged · Trial renewed','Card charged · Month 2','Card charged · Month 3'][k])});
