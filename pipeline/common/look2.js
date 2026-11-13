// ================= LOOK v2 helpers (loaded after toonlib.js) =================
// Soft contact shadow under anything standing on the ground.
function gshadow(x,y,w=150,a=.28){X.save();X.translate(x,y+6);X.scale(1,.24);const g=X.createRadialGradient(0,0,0,0,0,w);g.addColorStop(0,`rgba(10,10,30,${a})`);g.addColorStop(.6,`rgba(10,10,30,${a*.55})`);g.addColorStop(1,'rgba(10,10,30,0)');X.fillStyle=g;X.beginPath();X.arc(0,0,w,0,7);X.fill();X.restore()}
// Every toon()/man() character gets a contact shadow automatically (pass {noshadow:1} to skip, e.g. when floating or cropped).
{const _t=toon;toon=function(x,y,s,o={}){if(!o.noshadow)gshadow(x,y,170*s);return _t(x,y,s,o)};const _m=man;man=function(x,y,s,o={}){if(!o.noshadow)gshadow(x,y,130*s);return _m(x,y,s,o)}}
// God rays from a light source (sun, window, lamp, phone). Draw after the background, before characters.
function rays(x,y,t,col='255,240,200',a=.16,n=9,len=2400){X.save();X.globalCompositeOperation='screen';X.translate(x,y);for(let k=0;k<n;k++){const ang=k/n*Math.PI*2+t*.08,w=.07+.05*Math.sin(t*.6+k*1.7);const g=X.createLinearGradient(0,0,Math.cos(ang)*len,Math.sin(ang)*len);g.addColorStop(0,`rgba(${col},${a})`);g.addColorStop(1,`rgba(${col},0)`);X.fillStyle=g;X.beginPath();X.moveTo(0,0);X.lineTo(Math.cos(ang-w)*len,Math.sin(ang-w)*len);X.lineTo(Math.cos(ang+w)*len,Math.sin(ang+w)*len);X.fill()}X.restore()}
// Soft glow blob: lamps, screens, magic, the Memopai notification.
function glow(x,y,r,col='255,225,77',a=.5){X.save();X.globalCompositeOperation='screen';const g=X.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(${col},${a})`);g.addColorStop(1,`rgba(${col},0)`);X.fillStyle=g;X.fillRect(x-r,y-r,r*2,r*2);X.restore()}
// Out-of-focus background lights for depth (night, city, party, office).
function bokeh(t,col='255,220,160',n=14,y0=100,y1=900){X.save();X.globalCompositeOperation='screen';for(let k=0;k<n;k++){const x=rnd(k+40)*1500-200+Math.sin(t*.3+k)*30,y=lerp(y0,y1,rnd(k+50)),r=30+rnd(k+60)*70;X.globalAlpha=.10+.08*Math.sin(t+k);X.fillStyle=`rgb(${col})`;X.beginPath();X.arc(x,y,r,0,7);X.fill()}X.restore()}
// Parallax hill/skyline layer. Use 2-3 with different y, colour and speed for depth.
function hills(y,col,t=0,speed=10,amp=70,seed=0){X.fillStyle=col;X.beginPath();X.moveTo(-3000,3000);for(let x=-3000;x<=5000;x+=120){const xx=x+((t*speed)%960);X.lineTo(x,y-amp*(.5+.5*Math.sin(xx*.004+seed))-amp*.35*Math.sin(xx*.011+seed*3))}X.lineTo(5000,3000);X.fill()}
// Atmospheric haze between background and characters (pushes the background back).
function haze(y0,y1,col='255,255,255',a=.35){const g=X.createLinearGradient(0,y0,0,y1);g.addColorStop(0,`rgba(${col},0)`);g.addColorStop(1,`rgba(${col},${a})`);X.fillStyle=g;X.fillRect(-3000,y0,8000,y1-y0)}
// Sparkle burst (reveals, Memopai moments). p = 0..1.
function sparkles(x,y,p,n=10,R=220,col='#ffe14d'){if(p<=0||p>=1)return;for(let k=0;k<n;k++){const a=k/n*Math.PI*2+rnd(k)*.6,d=R*eo(p)*(.5+rnd(k+2)*.5),s=(1-p)*(14+rnd(k+4)*18);X.save();X.translate(x+Math.cos(a)*d,y+Math.sin(a)*d);X.rotate(p*3+k);X.fillStyle=col;X.beginPath();for(let j=0;j<8;j++){const rr_=j%2?s*.3:s;X.lineTo(Math.cos(j*Math.PI/4)*rr_,Math.sin(j*Math.PI/4)*rr_)}X.fill();X.restore()}}
// Confetti rain in screen space (wins, endings). r = seconds since start.
function confetti(r,n=60){if(r<0)return;X.save();X.setTransform(1,0,0,1,0,0);const cols=['#ff5a5f','#ffe14d','#5ad1ff','#8ff07a','#c4b2ff','#ff9fd6'];for(let k=0;k<n;k++){const x=rnd(k)*1080+Math.sin(r*3+k)*40,y=-80+((r*(420+rnd(k+1)*380)+rnd(k+2)*1900)%2100);X.save();X.translate(x,y);X.rotate(r*(3+rnd(k+3)*5)+k);X.fillStyle=cols[k%6];X.fillRect(-12,-7,24,14);X.restore()}X.restore()}
// Impact frame: 2-3 frames of inverted high-contrast flash on a punchline or shock. p = 0..1 over ~0.12 s.
function impact(p){if(p<=0||p>=1)return;X.save();X.setTransform(1,0,0,1,0,0);X.globalCompositeOperation='difference';X.fillStyle=`rgba(255,255,255,${1-p})`;X.fillRect(0,0,1080,1920);X.restore()}
// Squash and stretch wrapper: draw fn() scaled around (x,y). k>0 stretch tall, k<0 squash wide. Use sp() springs for landings/pops.
function squash(x,y,k,fn){X.save();X.translate(x,y);X.scale(1-k*.5,1+k);X.translate(-x,-y);fn();X.restore()}
// ---- waves(y,t,o): animated layered water filling from y downward (sea, flood). o={col:'#1f6fb5',col2:'#3d8fd6',amp:26,foam:1}
function waves(y,t,o={}){const c1=o.col||'#1f6fb5',c2=o.col2||'#3d8fd6',amp=o.amp||26;
 [[c2,0,1,1.3],[c1,60,1.4,-1]].forEach(([c,dy,f,sp],L)=>{X.beginPath();X.moveTo(-3000,4000);for(let x=-3000;x<=4000;x+=40){X.lineTo(x,y+dy+Math.sin(x*.006*f+t*2.2*sp)*amp+Math.sin(x*.017+t*3)*amp*.35)}X.lineTo(4000,4000);X.closePath();X.fillStyle=c;X.fill();
  if(o.foam!==0){X.lineWidth=7;X.strokeStyle='rgba(255,255,255,.75)';X.beginPath();for(let x=-3000;x<=4000;x+=40){const yy=y+dy+Math.sin(x*.006*f+t*2.2*sp)*amp+Math.sin(x*.017+t*3)*amp*.35;x==-3000?X.moveTo(x,yy):X.lineTo(x,yy)}X.stroke()}});
 X.globalAlpha=.25;for(let k=0;k<14;k++){const xx=((k*263+t*40)%1400)-160,yy=y+90+(k%5)*70;line([[xx,yy],[xx+60,yy]],5,'#fff')}X.globalAlpha=1}
// freeze(p,t,label): "time stopped" screen-state overlay: desaturates whatever is already drawn, cool blue tint, vignette, scanline flicker and a PAUSED chip. p 0..1 fades it in. Call last in a shot (after X.setTransform(1,0,0,1,0,0)).
function freeze(p,t=0,label='⏸ PAUSED'){if(p<=0)return;X.save();X.setTransform(1,0,0,1,0,0);X.globalAlpha=C(p);X.globalCompositeOperation='saturation';X.fillStyle='#808080';X.fillRect(0,0,1080,1920);
 X.globalCompositeOperation='source-over';X.globalAlpha=.18*C(p);X.fillStyle='#4aa8ff';X.fillRect(0,0,1080,1920);
 const g=X.createRadialGradient(540,960,500,540,960,1200);g.addColorStop(0,'rgba(0,10,30,0)');g.addColorStop(1,'rgba(0,10,30,.55)');X.globalAlpha=C(p);X.fillStyle=g;X.fillRect(0,0,1080,1920);
 X.globalAlpha=.08*C(p);X.fillStyle='#fff';for(let yy=(t*240)%12;yy<1920;yy+=12)X.fillRect(0,yy,1080,2);
 X.globalAlpha=C(p*2);if(label){X.font="900 54px Inter";const w=X.measureText(label).width+60;rr(1020-w,150,w,90,45,'rgba(10,20,40,.8)',0);txt(label,1020-w/2,196,50,'#fff',0)}X.restore()}

// ---- split2(t,drawA,drawB,o): diagonal split screen, 2026-11-12. drawA(t) = left/top world, drawB(t) = right world; each is drawn in its own
// clipped panel with its own camera o.camA/o.camB = [cx,cy,zoom] (world centred in its half). o.slant (px, default 160) tilts the seam,
// o.badge = text in a dark pill on the seam (e.g. '800 KM'), o.p = 0..1 seam wipe-in. Screen space; call as the whole shot.
function split2(t,drawA,drawB,o={}){const sl=o.slant==null?160:o.slant,p=o.p==null?1:eo(C(o.p)),mx=540,top=-40,bot=1960;
 const seam=(y)=>mx+sl*(.5-y/1920);const panel=(left,fn,cm)=>{X.save();X.setTransform(1,0,0,1,0,0);X.beginPath();
  if(left){X.moveTo(-10,top);X.lineTo(seam(top),top);X.lineTo(seam(bot),bot);X.lineTo(-10,bot)}else{X.moveTo(1090,top);X.lineTo(seam(top),top);X.lineTo(seam(bot),bot);X.lineTo(1090,bot)}
  X.closePath();X.clip();const c=cm||[540,960,1];const off=left?-270:270;const dx=(1-p)*(left?-600:600);
  cam(c[0]-(off+dx)/c[2],c[1],c[2],t,.3);fn(t);X.restore()};
 panel(1,drawA,o.camA);panel(0,drawB,o.camB);X.setTransform(1,0,0,1,0,0);
 X.lineWidth=22;X.strokeStyle='#151515';X.beginPath();X.moveTo(seam(top),top);X.lineTo(seam(bot),bot);X.stroke();X.lineWidth=10;X.strokeStyle='#fff';X.stroke();
 if(o.badge){const by=o.badgeY||820,bx=seam(by);X.save();X.translate(bx,by);const k=C(sp(o.bp==null?1:o.bp,13,.5));X.scale(k,k);X.font="900 64px Inter";const w=X.measureText(o.badge).width+70;
  rr(-w/2,-52,w,104,52,'#151515',0);rr(-w/2+8,-44,w-16,88,44,o.badgeCol||'#ffd23f',0);X.fillStyle='#151515';X.textAlign='center';X.textBaseline='middle';X.fillText(o.badge,0,4);X.restore()}}

// ---- rewind(p,t,label): VHS rewind overlay, 2026-11-12 20:00. p = 0..1 strength (fade in/out yourself), t = time (moving tracking bars).
// Desaturates + cyan/magenta split tint, horizontal tracking lines that sweep upward, jitter bands, and a '◀◀ REWIND' chip top-left. Screen space; call last in a shot.
function rewind(p,t=0,label='◀◀ REWIND'){if(p<=0)return;const a=C(p);X.save();X.setTransform(1,0,0,1,0,0);
 X.globalAlpha=a*.85;X.globalCompositeOperation='saturation';X.fillStyle='#808080';X.fillRect(0,0,1080,1920);
 X.globalCompositeOperation='screen';X.globalAlpha=.16*a;X.fillStyle='#ff3cac';X.fillRect(0,0,1080,1920);X.globalAlpha=.12*a;X.fillStyle='#2bd2ff';X.fillRect(0,0,1080,1920);
 X.globalCompositeOperation='source-over';
 for(let k=0;k<5;k++){const yy=((1-((t*1.7+k*.21)%1))*2100)-90,h=18+rnd(k+3)*60;X.globalAlpha=.35*a;X.fillStyle='#fff';X.fillRect(0,yy,1080,h*.25);X.globalAlpha=.18*a;X.fillStyle='#000';X.fillRect(0,yy+h*.25,1080,h)}
 X.globalAlpha=.07*a;X.fillStyle='#fff';for(let yy=(t*600)%9;yy<1920;yy+=9)X.fillRect(0,yy,1080,2);
 const g=X.createRadialGradient(540,960,520,540,960,1250);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.6)');X.globalAlpha=a;X.fillStyle=g;X.fillRect(0,0,1080,1920);
 if(label&&(t*3)%1<.72){X.globalAlpha=a;X.font="900 66px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.shadowColor='rgba(0,0,0,.6)';X.shadowBlur=8;X.fillText(label,70,190)}
 X.restore()}
// membar: battery-style "MEMORY" gauge with live %, colour green->yellow->red, blinks when low, optional drips leaking out (p 0..1 = how full). o:{label,blink,drip,t,w}
function membar(x,y,s,p,o={}){p=C(p);const t=o.t||0,W=o.w||300,H=118;X.save();X.translate(x,y);X.scale(s,s);
 const col=p>.6?'#3ddc84':p>.3?'#ffd23f':'#ff4d4d',low=p<.15&&(t*4)%1<.5;
 X.save();X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=18;rr(-W/2,-H/2,W,H,26,'#1d1f2b',8);X.restore();rr(W/2+4,-24,22,48,8,'#1d1f2b',6);
 const iw=W-28;X.save();X.beginPath();X.roundRect(-iw/2,-H/2+14,iw,H-28,16);X.clip();X.fillStyle='#2c3040';X.fillRect(-iw/2,-H/2,iw,H);
 if(!low||p>0){const g=X.createLinearGradient(0,-H/2,0,H/2);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(.45,col);g.addColorStop(1,col);X.fillStyle=g;X.fillRect(-iw/2,-H/2,iw*p,H);
  for(let k=0;k<3;k++){const wx=-iw/2+iw*p;X.fillStyle='rgba(255,255,255,.25)';X.fillRect(wx-4,-H/2+((t*90+k*30)%H),4,10)}}
 X.restore();
 txt(Math.round(p*100)+'%',0,4,62,low?'#ff4d4d':'#ffffff',10);txt(o.label||'MEMORY',0,-H/2-34,34,'#ffffff',9,'900 ');
 if(o.drip){for(let k=0;k<4;k++){const ph=((t*1.3+k*.27)%1);X.globalAlpha=1-ph;circ(-W/2+40+k*70,H/2+10+ph*140,9-ph*4,col,0)}X.globalAlpha=1}
 if(o.blink&&low)glow(0,0,W*.8,'255,60,60',.4);X.restore()}
