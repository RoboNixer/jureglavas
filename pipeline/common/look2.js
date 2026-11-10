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
