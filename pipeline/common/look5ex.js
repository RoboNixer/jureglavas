// ================= LOOK 5 "EXPLAINER CARD" (2026-11-27 13:00, WHAT IS MEMOPAI series, RUNBOOK 0h.2) =================
// A framed scene inside a textured backdrop + title plate + step progress bar + location chips + word art + radar mascot reveal.
// All overlays are drawn in SCREEN space and stay inside the safe TEXT box (x 150..900, y 300..1610).
// exBg(t,{c1,c2,acc,icons})            textured backdrop: diagonal gradient, halftone dots, soft grain stripes, drifting faint icons (background life)
// exFrame(t,r,fn,{x,y,w,h,cx,cy,z,rot,tilt,grow}) clip a world-space scene (drawn by fn(t,r) in 1080x1920 coords) into a rounded frame; cx/cy/z = the frame's own camera
//                                       (animate them per shot). grow 0..1 expands the frame to the full screen (frame-break transition).
// exTitle(text,r,{y,col,bg,sub})       cream title plate with a slight tilt that slides down in (top of the box, y≈350)
// exProgress(p,n,{y,labels})           step progress bar under the frame: n dots, filled up to p (0..n), the current step pulses
// exChip(text,x,y,r,{bg,col})          location/context chip that pops in with a spring (pill + emoji)
// exWord(text,x,y,size,r,{col,side,rot}) extruded 3D word art (stacked offset layers + outline) with a spring slam
// exRadar(x,y,t,p,{col})               radar rings + sweep behind a hero (use with memo())
// beanie(hx,hy,s,col)                  knit beanie with pom-pom for sm() heads (call via sm option o.beanie)
function exBg(t,o={}){X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,1080,1920);g.addColorStop(0,o.c1||'#2a1446');g.addColorStop(1,o.c2||'#5b2a86');X.fillStyle=g;X.fillRect(0,0,1080,1920);
 // soft diagonal stripes
 X.save();X.globalAlpha=.06;X.fillStyle='#fff';for(let k=-6;k<14;k++){const x0=k*180+(t*18)%180;X.beginPath();X.moveTo(x0,0);X.lineTo(x0+90,0);X.lineTo(x0-600,1920);X.lineTo(x0-690,1920);X.fill()}X.restore();
 // halftone dots fading towards the centre
 X.save();for(let yy=0;yy<1920;yy+=34)for(let xx=(yy/34%2)*17;xx<1080;xx+=34){const d=Math.hypot(xx-540,yy-900)/1100;const rr0=C(d-.25)*7;if(rr0>.4){X.globalAlpha=.16;X.fillStyle=o.acc||'#ffb347';X.beginPath();X.arc(xx,yy,rr0,0,7);X.fill()}}X.restore();
 // drifting faint icons
 const ic=o.icons||['⏰','💬','✅','🔔','📅'];X.save();X.globalAlpha=.13;X.textAlign='center';X.textBaseline='middle';for(let k=0;k<12;k++){const x=(rnd(k)*1180+t*(8+rnd(k+4)*14))%1180-50,y=(rnd(k+9)*2000-t*(10+rnd(k+2)*16)+4000)%2000-40;X.font=(48+rnd(k+1)*50|0)+"px 'Noto Color Emoji'";X.save();X.translate(x,y);X.rotate(Math.sin(t*.6+k)*.3);X.fillText(ic[k%ic.length],0,0);X.restore()}X.restore();
 // vignette
 const v=X.createRadialGradient(540,900,300,540,900,1300);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.45)');X.fillStyle=v;X.fillRect(0,0,1080,1920)}
function exFrame(t,r,fn,o={}){const gw=C(o.grow||0),e=eio(gw);
 const x=lerp(o.x!=null?o.x:120,0,e),y=lerp(o.y!=null?o.y:450,0,e),w=lerp(o.w||840,1080,e),h=lerp(o.h||900,1920,e),rad=lerp(44,0,e);
 X.setTransform(1,0,0,1,0,0);
 // drop shadow + thick border card
 X.save();X.shadowColor='rgba(0,0,0,.45)';X.shadowBlur=50;X.shadowOffsetY=24;rr(x-14,y-14,w+28,h+28,rad+12,o.border||'#fff4e2',0);X.restore();
 X.save();X.beginPath();X.roundRect(x,y,w,h,rad);X.clip();
 const hx=Math.sin(t*1.7)*4+Math.sin(t*3.1)*2,hy=Math.cos(t*1.3)*4;
 X.translate(x+w/2+hx,y+h/2+hy);X.rotate((o.rot||0)*Math.PI/180);X.scale(o.z||1,o.z||1);X.translate(-(o.cx!=null?o.cx:540),-(o.cy!=null?o.cy:960));
 fn(t,r);
 X.setTransform(1,0,0,1,0,0);
 // inner light: top sheen + inner shadow
 const sg=X.createLinearGradient(0,y,0,y+h);sg.addColorStop(0,'rgba(255,255,255,.10)');sg.addColorStop(.25,'rgba(255,255,255,0)');sg.addColorStop(1,'rgba(20,0,40,.22)');X.fillStyle=sg;X.fillRect(x,y,w,h);
 X.restore();
 X.save();X.lineWidth=6;X.strokeStyle='rgba(40,16,70,.55)';X.beginPath();X.roundRect(x,y,w,h,rad);X.stroke();X.restore()}
function exTitle(text,r,o={}){X.setTransform(1,0,0,1,0,0);const p=C(r/.35),y=(o.y||352)+lerp(-90,0,eo(p))+Math.sin(r*2)*2;X.save();X.globalAlpha=C(p*2);X.translate(540,y);X.rotate((o.rot!=null?o.rot:-1.5)*Math.PI/180);
 X.font="900 58px 'Inter Display',Inter,'Noto Color Emoji'";let fs=58;while(X.measureText(text).width>640&&fs>34){fs-=2;X.font="900 "+fs+"px 'Inter Display',Inter,'Noto Color Emoji'"}const tw=X.measureText(text).width+76;
 X.save();X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=18;X.shadowOffsetY=8;rr(-tw/2,-48,tw,96,26,o.bg||'#fff4e2',0);X.restore();
 rr(-tw/2,-48,tw,96,26,null,0);X.fillStyle=o.acc||'#ff8a3d';X.fillRect(-tw/2+26,40,tw-52,8);
 X.fillStyle=o.col||'#2a1446';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,0);X.restore()}
function exProgress(p,n,o={}){X.setTransform(1,0,0,1,0,0);const y=o.y||1385,x0=250,x1=830;X.save();
 X.lineCap='round';X.lineWidth=14;X.strokeStyle='rgba(255,255,255,.22)';X.beginPath();X.moveTo(x0,y);X.lineTo(x1,y);X.stroke();
 const fp=C(p/(n-1));X.strokeStyle=o.col||'#ffb347';X.beginPath();X.moveTo(x0,y);X.lineTo(lerp(x0,x1,fp),y);X.stroke();
 for(let k=0;k<n;k++){const x=lerp(x0,x1,k/(n-1)),on=p>=k-.001,cur=on&&p<k+1;const pr=cur?1+.12*Math.sin(Date.now?0:0)+.1:1;
  X.fillStyle=on?(o.col||'#ffb347'):'#5a3a7a';X.strokeStyle='#fff4e2';X.lineWidth=6;X.beginPath();X.arc(x,y,(cur?26:20)*pr,0,7);X.fill();X.stroke();
  X.fillStyle=on?'#2a1446':'#cbb8e6';X.font="900 24px Inter";X.textAlign='center';X.textBaseline='middle';X.fillText(on&&!cur?'✓':String(k+1),x,y+1)}
 X.restore()}
function exChip(text,x,y,r,o={}){if(r<0)return;X.setTransform(1,0,0,1,0,0);const p=C(r/.3),sc=p<1?eo(p)*1.08:1+.08*Math.exp(-(r-.3)*9)*Math.cos((r-.3)*24);X.save();X.translate(x,y);X.scale(sc,sc);X.rotate((o.rot||0)*Math.PI/180);
 X.font="800 44px Inter,'Noto Color Emoji'";let fs=44;while(X.measureText(text).width>560&&fs>28){fs-=2;X.font="800 "+fs+"px Inter,'Noto Color Emoji'"}const tw=X.measureText(text).width+64;
 X.save();X.shadowColor='rgba(0,0,0,.3)';X.shadowBlur=14;X.shadowOffsetY=6;rr(-tw/2,-38,tw,76,38,o.bg||'#ffffff',0);X.restore();
 X.fillStyle=o.col||'#2a1446';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,2);X.restore()}
function exWord(text,x,y,size,r,o={}){if(r<0)return;X.setTransform(1,0,0,1,0,0);const p=C(r/.28),sc=p<1?lerp(2.2,1,eo(p)):1+.06*Math.exp(-(r-.28)*8)*Math.cos((r-.28)*26);
 X.save();X.translate(x,y);X.rotate((o.rot!=null?o.rot:-4)*Math.PI/180);X.scale(sc,sc);X.globalAlpha=C(p*3);let fs=size;X.font="900 "+fs+"px 'Inter Display',Inter,'Noto Color Emoji'";while(X.measureText(text).width>(o.maxW||680)&&fs>40){fs-=4;X.font="900 "+fs+"px 'Inter Display',Inter,'Noto Color Emoji'"}
 X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';const d=Math.max(6,fs*.09)|0;
 for(let k=d;k>0;k-=2){X.fillStyle=o.side||'#7a2e00';X.fillText(text,k*.6,k)}
 X.lineWidth=fs*.16;X.strokeStyle=o.out||'#1b0a2e';X.strokeText(text,0,0);X.fillStyle=o.col||'#ffb347';X.fillText(text,0,0);
 X.save();X.globalAlpha=.35;X.fillStyle='#fff';X.beginPath();X.rect(-2000,-fs*.5,4000,fs*.32);X.clip();X.fillText(text,0,0);X.restore();X.restore()}
function exRadar(x,y,t,p,o={}){const col=o.col||'120,255,190';X.save();for(let k=0;k<4;k++){const q=((t*.7+k/4)%1),R=lerp(60,520,q)*p;X.globalAlpha=(1-q)*.55*p;X.lineWidth=10*(1-q)+2;X.strokeStyle=`rgb(${col})`;X.beginPath();X.arc(x,y,R,0,7);X.stroke()}
 X.globalAlpha=.22*p;const a=t*2.4;const g=X.createRadialGradient(x,y,0,x,y,480*p);g.addColorStop(0,`rgba(${col},.9)`);g.addColorStop(1,`rgba(${col},0)`);X.fillStyle=g;X.beginPath();X.moveTo(x,y);X.arc(x,y,480*p,a,a+.7);X.closePath();X.fill();X.restore()}
// beanie(hx,hy,s,col): knit beanie with fold + pom-pom, centred on a sm() head at (hx,hy) world coords, head radius 125*s
function beanie(hx,hy,s,col='#ff7a3d'){const R=125;X.save();X.translate(hx,hy);X.scale(s,s);X.fillStyle=col;X.strokeStyle='#151515';X.lineWidth=9;
 X.beginPath();X.moveTo(-R*1.0,-R*.38);X.bezierCurveTo(-R*1.02,-R*1.42,R*1.02,-R*1.42,R*1.0,-R*.38);X.closePath();X.fill();X.stroke();
 X.globalAlpha=.25;X.strokeStyle='#000';X.lineWidth=5;for(let k=-3;k<=3;k++){X.beginPath();X.moveTo(k*28,-R*.6);X.quadraticCurveTo(k*24,-R*.95,k*16,-R*1.15);X.stroke()}X.globalAlpha=1;
 X.strokeStyle='#151515';X.lineWidth=9;X.fillStyle=shade(col,-.12);X.beginPath();X.roundRect(-R*1.06,-R*.62,R*2.12,R*.34,R*.12);X.fill();X.stroke();
 X.fillStyle='#fff4e2';X.beginPath();X.arc(0,-R*1.28,R*.24,0,7);X.fill();X.stroke();X.restore()}
function shade(hex,k){const n=parseInt(hex.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=v=>Math.max(0,Math.min(255,Math.round(v+(k<0?v*k:(255-v)*k))));return'#'+[f(r),f(g),f(b)].map(v=>v.toString(16).padStart(2,'0')).join('')}
// exChatList(x,y,w,t,{rows,hl,hlp}) WhatsApp chat list (header + rows) in WORLD coords, top-left x,y, width w; row h=150.
//  rows=[{name,msg,time,av:'memo'|emoji,badge,pin}], hl = index of the highlighted row, hlp 0..1 highlight strength (green glow + scale)
function exChatList(x,y,w,t,o={}){const rows=o.rows||[];X.save();rr(x,y,w,260+rows.length*150,40,'#ffffff',0);
 X.save();X.beginPath();X.roundRect(x,y,w,260+rows.length*150,40);X.clip();X.fillStyle='#008069';X.fillRect(x,y,w,170);
 X.font="800 52px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText('WhatsApp',x+44,y+92);
 X.font="400 44px 'Noto Color Emoji',Inter";X.textAlign='right';X.fillText('🔍  ⋮',x+w-40,y+92);
 X.font="700 30px Inter";X.textAlign='center';['Chats','Updates','Calls'].forEach((s,i)=>{X.fillStyle=i==0?'#fff':'rgba(255,255,255,.7)';X.fillText(s,x+w*(i+.5)/3,y+145)});X.fillStyle='#fff';X.fillRect(x+w*.06,y+164,w*.21,6);
 rows.forEach((rw,i)=>{const ry=y+200+i*150,h=o.hl===i?C(o.hlp||0):0;if(h>0){X.save();X.globalAlpha=h;X.fillStyle='#d9fdd3';X.fillRect(x,ry-8,w,150);X.restore()}
  const ax=x+90,ay=ry+66;if(rw.av=='memo'){circ(ax,ay,52,'#25d366',0);avatar(ax,ay,48,0)}else{circ(ax,ay,52,rw.col||'#dfe5e7',0);X.font="54px 'Noto Color Emoji'";X.textAlign='center';X.fillText(rw.av||'🙂',ax,ay+3)}
  X.textAlign='left';X.font="800 40px Inter,'Noto Color Emoji'";X.fillStyle='#111';X.fillText(rw.name,x+170,ry+42);
  X.font="500 32px Inter,'Noto Color Emoji'";X.fillStyle='#667781';const m=rw.msg||'';X.fillText(m.length>26?m.slice(0,25)+'…':m,x+170,ry+92);
  X.textAlign='right';X.font="500 26px Inter";X.fillStyle=rw.badge?'#25d366':'#667781';X.fillText(rw.time||'',x+w-36,ry+40);
  if(rw.badge){circ(x+w-56,ry+92,22,'#25d366',0);X.font="800 24px Inter";X.fillStyle='#fff';X.textAlign='center';X.fillText(String(rw.badge),x+w-56,ry+93)}
  if(rw.pin){X.font="26px 'Noto Color Emoji'";X.textAlign='right';X.fillText('📌',x+w-(rw.badge?96:36),ry+92)}
  X.fillStyle='#eef1f2';X.fillRect(x+170,ry+142,w-200,2)});
 X.restore();X.restore()}
