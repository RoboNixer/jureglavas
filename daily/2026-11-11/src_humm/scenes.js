function garden(t,sun=1){sky('#7cc6f2','#fff1d6');if(sun){glow(860,330,260,'255,230,150',.55);rays(860,330,t,'255,240,200',.14)}
 hills(1080,'#8ccf7e',t,6,60,1);hills(1180,'#5fae5a',t,10,50,3);haze(950,1250,'255,250,235',.25);X.fillStyle='#4f9a48';X.fillRect(-3000,1250,8000,3000)}
function flower(x,y,s,col,t,glowk=0){X.save();X.translate(x,y);X.scale(s,s);line([[0,0],[Math.sin(t)*6,-300]],10,'#2e7d32');ell(-40,-120,40,16,'#43a047',5,-.5);
 X.translate(Math.sin(t)*6,-300);if(glowk>0){X.globalAlpha=glowk;circ(0,0,130,'#fff59d',0);X.globalAlpha=1}
 for(let k=0;k<6;k++){X.save();X.rotate(k*Math.PI/3);ell(0,-55,30,55,col,6);X.restore()}circ(0,0,30,'#ffd54f',6);X.restore()}
function room(t){X.fillStyle='#f3e3c8';X.fillRect(-3000,-3000,8000,8000);
 // window
 X.save();X.beginPath();X.rect(180,300,720,640);X.clip();sky('#8fd0f5','#e8f6ff');hills(900,'#8ccf7e',t,4,40,2);X.restore();
 rr(170,290,740,660,10,null,20,'#8a5a3a');line([[540,290],[540,950]],16,'#8a5a3a');line([[170,620],[910,620]],16,'#8a5a3a');rr(140,940,800,40,8,'#a8714a',6);
 X.fillStyle='#b98a5e';X.fillRect(-3000,1330,8000,3000)}
function couch(x,y){rr(x-260,y-180,520,170,40,'#5b7fbf',8);rr(x-300,y-60,600,120,30,'#4a6aa8',8);rr(x-320,y-150,80,200,30,'#4a6aa8',8);rr(x+240,y-150,80,200,30,'#4a6aa8',8)}

// ===== SHOTS =====
// 1 hook: bird visits flowers in order, each glows
sh(0,(t,r)=>{cam(540,960,lerp(1.12,1.0,eo(C(r/2))),t,.4);garden(t);
 const F=[[200,1330,'#ff6fa5'],[540,1380,'#b388ff'],[880,1330,'#ff8a65']];F.forEach((f,i)=>flower(f[0],f[1],1.75,f[2],t+i,C(1-Math.abs(r-1.1-i*1.1)*1.5)*.7));
 const ph=C((r-.3)/3.6)*2.2;const i=Math.floor(ph),fr=ph-i;const a=F[Math.min(i,2)],b=F[Math.min(i+1,2)];
 const k=eo(C(fr*1.6));hbird(lerp(a[0],b[0],k)-250,lerp(a[1],b[1],k)-560,1.0,{t,face:{look:15}});
 if(r<.08)FL=.6});
// 2 proof: close-up, tag
sh(T('s1')-.1,(t,r)=>{cam(540,960,lerp(1.0,1.08,r/3.4),t,.3);garden(t);bokeh(t,'255,230,170',12,200,900);
 flower(760,1500,1.9,'#ff6fa5',t,C(r-1.2)*.6);hbird(420,860,1.35,{t,face:{look:20,smug:r>1.6}});if(r>1.4)sparkles(790,930,C((r-1.4)/.8),10,180);
 X.setTransform(1,0,0,1,0,0);tag(540,300,'REAL STUDY · 2006','#ffe14d',C((r-.3)/.25))});
// 3 Dave hangs feeder, bird makes a schedule (nods)
sh(T('s2')-.1,(t,r)=>{cam(540,1000,1.0,t,.3);garden(t);
 line([[-100,330],[800,380]],34,'#7a5236');ell(700,340,130,60,'#4f9a48',0);ell(-40,320,140,70,'#4f9a48',0);
 const up=eo(C(r/1.0));feeder(620,lerp(720,620,up),1,1,Math.sin(t*2)*.04);
 gshadow(330,1380,260);man(330,1380,1.55,{coat:'#e07a3a',face:'happy',armR:lerp(-60,-150,up),t,buttons:false});
 hbird(860,980,.85,{t,flip:1,face:{look:-10,squint:r>1.5&&r<2.2}})});
// 4 escalation: empty feeder, bird glares through window, Dave on couch
sh(T('b1')-.15,(t,r)=>{cam(540,lerp(900,850,r/3.5),lerp(1.0,1.12,r/3.5),t,.3);room(t);
 X.save();X.beginPath();X.rect(180,300,720,640);X.clip();feeder(720,560,.9,0,Math.sin(t*1.5)*.05);hbird(380,560,1.05,{t,face:{angry:1,squint:1,talk:(r>.2&&r<1.9)?t:null}});X.restore();
 couch(640,1330);man(640,1390,1.05,{coat:'#e07a3a',face:'happy',t,buttons:false,look:20});rr(340,1270,600,120,30,'#4a6aa8',8);rr(320,1180,80,200,30,'#4a6aa8',8);rr(880,1180,80,200,30,'#4a6aa8',8);
 if(r>2.2){X.globalAlpha=.9;txt('?',800,880,110,'#fff',12);X.globalAlpha=1}});
// 5 Memopai message from the bird
sh(T('s3')+1.3,(t,r)=>{cam(540,960,1,t,.3);burst('#103a2a','#145236',t*.3);NOFX=1;
 phoneUI(540,930,1,r,{typing:(r>.1&&r<.55)||(r>1.5&&r<2.0),list:[{a:.55,me:1,text:'Remind Dave: refill the feeder. Every Sunday 🐦',time:'18:02'},{a:2.0,me:0,text:'Done ✅ Every Sunday, 7 AM.',time:'18:02'}]});
 hbird(190,1720,.55,{t,phone:1,face:{smug:1}})});
// 6 Sunday: Dave refills, proud
sh(T('s4')-.1,(t,r)=>{cam(540,1000,lerp(1.05,1.0,r/3),t,.3);garden(t);
 line([[-100,330],[800,380]],34,'#7a5236');ell(700,340,130,60,'#4f9a48',0);
 const pour=C((r-.4)/1.8);feeder(640,640,1,pour,0);
 gshadow(330,1380,260);man(330,1380,1.55,{coat:'#e07a3a',face:r>2.1?'smug':'happy',armR:-130,t,buttons:false});
 X.save();X.translate(560,430);X.rotate(pour>0&&pour<1?1.1:.3);rr(-40,-70,80,120,16,'#ff3b4f',6);rr(-14,-95,28,30,6,'#fff',5);X.restore();if(pour>0&&pour<1){line([[610,470],[630,520]],10,'#ff3b4f')}
 if(r>2.2)sparkles(640,560,C((r-2.2)/.6),8,160);
 X.setTransform(1,0,0,1,0,0);tag(540,300,'SUNDAY · 7:00 AM','#ffe14d',C((r-.1)/.25))});
// 7 payoff: bird already there, taps watch
sh(T('p1')-.1,(t,r)=>{cam(600,900,lerp(1.25,1.32,r/2.8),t,.3);garden(t);bokeh(t,'255,230,170',10,200,900);
 feeder(880,720,1.1,1,0);const tap=r>.3?Math.abs(Math.sin((r-.3)*7)):0;
 hbird(520,900,1.45,{t,face:{squint:1,smug:1,talk:(r>.05&&r<1.5)?t:null},watch:1,tap});if(r<.08){FL=.5}});
