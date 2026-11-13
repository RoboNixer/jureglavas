// ================= LOOK v3 "ILLUSTRATED" (owner 2026-11-13: clean storybook-cartoon look like the top stickman-allegory channels) =================
// Loaded after toonlib.js + look2.js. Big round-head stickmen with huge expressive eyes, thin long limbs, mitten hands,
// soft painted backgrounds with depth blur, and a white top LABEL card that names what the scene is about.
// NEVER copy another channel's characters: our cast = YOU (white head, one hair curl), HER (white head, bun + lashes), MEMO (the Memopai mascot), plus props.

// ---------- character ----------
// sm(x,y,s,o): feet at (x,y). Height ~1000*s px. o: col (head/body fill, default white head + black limbs), limb (limb colour), out (outline),
//  armL/armR (deg from straight down; 90 = sideways, 160 = up), bendL/bendR (elbow deg), legL/legR (deg), walk (time -> walk cycle), crawl:1 (on all fours),
//  look:[lx,ly] (-1..1 pupils), lid (0..1 upper eyelid, .45 = smug/tired), brow:'worried'|'angry'|'up'|'smug'|'flat'|'sad', mouth:'smile'|'smirk'|'frown'|'o'|'open'|'tongue'|'grin'|'wavy'|'flat',
//  eyes:'wide'|'closed'|'happy'|'wink'|'dizzy', sweat, blush, tear, hair:'curl'|'bun'|'spike', hairc, lashes, flip, tilt (deg head tilt), lean (deg body), holdR/holdL(fn(hx,hy) in WORLD coords, drawn on top), talk (time -> mouth flaps)
function sm(x,y,s,o={}){const t=o.t||0,OUT=o.out||'#151515',col=o.col||'#ffffff',limb=o.limb||(o.col?o.col:OUT),fl=o.flip?-1:1;
 const w=o.walk;const ph=w!=null?Math.sin(w*9):0;const bob=w!=null?Math.abs(Math.cos(w*9))*14:0;const br=Math.sin(t*2.2)*4;
 const P=(lx,ly)=>[x+lx*s*fl,y+ly*s];const hands={};
 X.save();X.lineCap='round';X.lineJoin='round';
 // shadow
 X.save();X.globalAlpha=.22;X.fillStyle='#1a1020';X.beginPath();X.ellipse(x,y+6*s,170*s,26*s,0,0,7);X.fill();X.restore();
 const LW=17*s,limbStroke=(pts)=>{if(o.col){X.strokeStyle=OUT;X.lineWidth=LW+9*s;poly(pts);}X.strokeStyle=limb;X.lineWidth=LW;poly(pts)};
 const poly=(pts)=>{X.beginPath();X.moveTo(...P(...pts[0]));for(let i=1;i<pts.length;i++)X.lineTo(...P(...pts[i]));X.stroke()};
 const lean=(o.lean||0)*Math.PI/180;
 let hipY=-340-bob*.3,neckY=-650-bob+br*.3;const nx=Math.sin(lean)*310;
 if(o.crawl){hipY=-280;neckY=-390;}
 const hip=o.crawl?[-140,hipY]:[0,hipY],neck=o.crawl?[170,neckY]:[nx,neckY];
 // legs
 const leg=(d,a,bend)=>{const A=(a)*Math.PI/180;const kx=hip[0]+d*14+Math.sin(A)*d*170,ky=hip[1]+Math.cos(A)*170;const B=(a-(bend||0))*Math.PI/180;const fx=kx+Math.sin(B)*d*170,fy=Math.min(-4,ky+Math.cos(B)*170);
  limbStroke([[hip[0]+d*12,hip[1]],[kx,ky],[fx,fy]]);const[sx,sy]=P(fx+d*20,fy+6);X.save();X.translate(sx,sy);X.rotate(fl*d*.08);X.fillStyle=o.col?OUT:OUT;X.beginPath();X.ellipse(0,0,46*s,21*s,0,0,7);X.fill();if(o.col){X.fillStyle=limb;X.beginPath();X.ellipse(0,-2*s,38*s,14*s,0,0,7);X.fill()}X.restore()};
 if(o.crawl){const cw=Math.sin(t*6)*14;limbStroke([[-140,-280],[-30+cw,-30],[-330+cw,-24]]);limbStroke([[-140,-280],[-90-cw,-30],[-400-cw,-24]]);X.fillStyle=OUT;for(const fx of[-350+cw,-420-cw]){const[a,b]=P(fx,-20);X.beginPath();X.ellipse(a,b,40*s,18*s,0,0,7);X.fill()}}
 else{leg(-1,(o.legL!=null?o.legL:6)+ph*26,w!=null?Math.max(0,ph)*30:0);leg(1,(o.legR!=null?o.legR:6)-ph*26,w!=null?Math.max(0,-ph)*30:0)}
 // body
 limbStroke([hip,o.crawl?[10,-350]:[nx*.5,(hipY+neckY)/2],neck]);
 // arms
 const arm=(d,a,bend)=>{const sh=[neck[0]+d*6,neck[1]+40];const A=(a!=null?a:14+(w!=null?(d>0?-ph:ph)*28:0))*Math.PI/180;const ex=sh[0]+Math.sin(A)*d*150,ey=sh[1]+Math.cos(A)*150;const B=(((a!=null?a:14)+(bend||0)))*Math.PI/180;const hx=ex+Math.sin(B)*d*140,hy=ey+Math.cos(B)*140;
  limbStroke([sh,[ex,ey],[hx,hy]]);const[wx,wy]=P(hx,hy);X.save();X.translate(wx,wy);X.fillStyle=o.col?OUT:OUT;X.beginPath();X.ellipse(0,0,31*s,27*s,0,0,7);X.fill();X.beginPath();X.ellipse(-fl*d*-20*s,-16*s,12*s,16*s,-.5,0,7);X.fill();
  if(o.col){X.fillStyle=limb;X.beginPath();X.ellipse(0,0,24*s,20*s,0,0,7);X.fill()}X.restore();hands[d>0?'R':'L']=[wx,wy]};
 if(o.crawl){const cw=Math.sin(t*6+1.5)*14;limbStroke([[170,-350],[220+cw,-180],[240+cw,-14]]);limbStroke([[170,-350],[140-cw,-180],[150-cw,-14]]);X.fillStyle=OUT;for(const hx of[255+cw,165-cw]){const[a,b]=P(hx,-14);X.beginPath();X.ellipse(a,b,32*s,22*s,0,0,7);X.fill()}}
 else{arm(-1,o.armL,o.bendL);arm(1,o.armR,o.bendR)}
 // head
 const R=125,hc=o.crawl?[300,-470]:[neck[0]+Math.sin(lean)*60,neck[1]-R+8];const[HX,HY]=P(hc[0],hc[1]);
 X.save();X.translate(HX,HY);X.rotate(((o.tilt||0)+(o.crawl?8:0))*Math.PI/180*fl);X.scale(s,s);
 if(o.hair=='bun'){X.fillStyle=o.hairc||'#e2508a';X.strokeStyle=OUT;X.lineWidth=9;X.beginPath();X.arc(0,-R-34,52,0,7);X.fill();X.stroke()}
 X.fillStyle=col;X.strokeStyle=OUT;X.lineWidth=10;X.beginPath();X.arc(0,0,R,0,7);X.fill();
 const g=X.createRadialGradient(-R*.35,-R*.45,R*.1,0,0,R*1.05);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(.7,'rgba(255,255,255,0)');g.addColorStop(1,o.col?'rgba(0,0,0,.18)':'rgba(120,120,160,.22)');X.fillStyle=g;X.fill();X.stroke();
 if(o.hair=='bun'){X.fillStyle=o.hairc||'#e2508a';X.beginPath();X.moveTo(-R*.95,-R*.3);X.quadraticCurveTo(-R*.6,-R*1.2,0,-R*1.02);X.quadraticCurveTo(R*.6,-R*1.2,R*.95,-R*.3);X.quadraticCurveTo(R*.5,-R*.75,0,-R*.7);X.quadraticCurveTo(-R*.5,-R*.75,-R*.95,-R*.3);X.fill();X.stroke()}
 if(o.hair=='curl'){X.lineWidth=9;X.beginPath();X.moveTo(-14,-R+4);X.bezierCurveTo(-30,-R-50,30,-R-60,18,-R-24);X.stroke()}
 if(o.hair=='spike'){X.fillStyle=o.hairc||'#151515';for(let k=-2;k<=2;k++){X.beginPath();X.moveTo(k*34-18,-R+12);X.lineTo(k*40,-R-46+Math.abs(k)*10);X.lineTo(k*34+18,-R+12);X.fill()}}
 if(o.blush){X.fillStyle='rgba(255,110,140,.35)';X.beginPath();X.ellipse(-78,38,24,14,0,0,7);X.ellipse(78,38,24,14,0,0,7);X.fill()}
 // eyes
 const E=o.eyes||'wide',lk=o.look||[0,0],lid=C(o.lid||0);const blink=(o.blink!==0)&&((t*1.0+(o.seed||0))%3.7)<.12;
 const eye=(ex,rx,ry,side)=>{if(E=='closed'||E=='happy'||blink||(E=='wink'&&side>0)){X.lineWidth=9;X.beginPath();if(E=='happy'||(E=='wink'&&side>0)){X.moveTo(ex-rx*.8,-8);X.quadraticCurveTo(ex,-ry*.9,ex+rx*.8,-8)}else{X.moveTo(ex-rx*.8,-6);X.quadraticCurveTo(ex,8,ex+rx*.8,-6)}X.stroke();return}
  X.fillStyle='#fff';X.lineWidth=7;X.beginPath();X.ellipse(ex,-14,rx,ry,0,0,7);X.fill();X.stroke();
  if(E=='dizzy'){X.lineWidth=5;X.beginPath();for(let a=0;a<12;a+=.3)X.lineTo(ex+Math.cos(a+t*8)*a*2.2,-14+Math.sin(a+t*8)*a*2.2);X.stroke()}
  else{const px=ex+lk[0]*rx*.42,py=-14+lk[1]*ry*.4+lid*ry*.3;X.fillStyle='#151515';X.beginPath();X.ellipse(px,py,rx*.42,ry*.45,0,0,7);X.fill();X.fillStyle='#fff';X.beginPath();X.arc(px-rx*.14,py-ry*.16,rx*.14,0,7);X.fill()}
  if(lid>0){X.save();X.beginPath();X.ellipse(ex,-14,rx,ry,0,0,7);X.clip();X.fillStyle=col;X.fillRect(ex-rx-4,-14-ry-4,2*rx+8,(2*ry+8)*lid);X.restore();X.lineWidth=7;X.beginPath();X.moveTo(ex-rx,-14-ry+2*ry*lid);X.lineTo(ex+rx,-14-ry+2*ry*lid);X.stroke();X.beginPath();X.ellipse(ex,-14,rx,ry,0,0,7);X.stroke()}
  if(o.lashes){X.lineWidth=5;for(let k=0;k<3;k++){const a=-2.4+k*.35*side;X.beginPath();X.moveTo(ex+side*rx*.6+Math.cos(a)*0,-14-ry*.8);X.lineTo(ex+side*(rx*.75+k*7),-14-ry-12+k*6);X.stroke()}}};
 eye(-44,36,46,-1);eye(44,36,46,1);
 // brows
 const bw=o.brow||'flat';X.lineWidth=10;const brow=(d)=>{X.beginPath();let y1=-74,y2=-74;if(bw=='worried'){y1=-80+(d<0?0:0);X.moveTo(d*16,-86);X.quadraticCurveTo(d*44,-80,d*76,-66)}else if(bw=='angry'){X.moveTo(d*14,-60);X.lineTo(d*76,-84)}else if(bw=='up'){X.moveTo(d*16,-88);X.quadraticCurveTo(d*46,-104,d*76,-90)}else if(bw=='smug'){if(d>0){X.moveTo(16,-92);X.quadraticCurveTo(46,-106,76,-94)}else{X.moveTo(-16,-72);X.lineTo(-76,-74)}}else if(bw=='sad'){X.moveTo(d*16,-84);X.lineTo(d*76,-70)}else{X.moveTo(d*18,-78);X.lineTo(d*74,-80)}X.stroke()};if(bw!='none'){brow(-1);brow(1)}
 // mouth
 let M=o.mouth||'smile';if(o.talk!=null)M=(Math.sin(o.talk*22)>0)?'o':(M=='o'?'smile':M);X.lineWidth=8;X.beginPath();
 if(M=='smile'){X.moveTo(-34,52);X.quadraticCurveTo(0,76,34,52);X.stroke()}
 else if(M=='smirk'){X.moveTo(-30,60);X.quadraticCurveTo(10,66,40,46);X.stroke()}
 else if(M=='frown'){X.moveTo(-28,68);X.quadraticCurveTo(0,52,28,68);X.stroke()}
 else if(M=='flat'){X.moveTo(-22,62);X.lineTo(22,62);X.stroke()}
 else if(M=='wavy'){X.moveTo(-34,62);X.quadraticCurveTo(-17,50,0,62);X.quadraticCurveTo(17,74,34,62);X.stroke()}
 else if(M=='o'){X.fillStyle='#5a1414';X.ellipse(0,62,16,20,0,0,7);X.fill();X.stroke()}
 else if(M=='open'||M=='tongue'){X.fillStyle='#6a1818';X.moveTo(-40,44);X.quadraticCurveTo(0,40,40,44);X.quadraticCurveTo(30,100,0,100);X.quadraticCurveTo(-30,100,-40,44);X.fill();X.stroke();if(M=='tongue'){X.fillStyle='#ff8fa3';X.beginPath();X.ellipse(8,94,16,22,.2,0,7);X.fill();X.stroke()}}
 else if(M=='grin'){X.fillStyle='#fff';X.moveTo(-48,42);X.quadraticCurveTo(0,52,48,42);X.quadraticCurveTo(36,96,0,96);X.quadraticCurveTo(-36,96,-48,42);X.fill();X.stroke();X.lineWidth=4;X.beginPath();X.moveTo(-44,58);X.quadraticCurveTo(0,66,44,58);X.stroke()}
 if(o.sweat){X.fillStyle='#bfe8ff';X.lineWidth=5;for(const[sx,sy,k]of[[96,-70,1],[-104,-40,.7]]){X.save();X.translate(sx,sy+((t*60*k)%30));X.scale(k,k);X.beginPath();X.moveTo(0,-20);X.quadraticCurveTo(14,4,0,10);X.quadraticCurveTo(-14,4,0,-20);X.fill();X.stroke();X.restore()}}
 if(o.tear){X.fillStyle='#8fd3ff';X.beginPath();X.ellipse(-50,40+((t*80)%40),9,13,0,0,7);X.fill()}
 X.restore();X.restore();
 if(o.holdR&&hands.R)o.holdR(hands.R[0],hands.R[1]);if(o.holdL&&hands.L)o.holdL(hands.L[0],hands.L[1]);return hands}

// MEMO: the Memopai mascot as an on-set character (image) with stick legs + arms. o: t, hop (0..1), wave, look, flip, glow
function memo(x,y,s,o={}){const t=o.t||0,h=Math.max(0,Math.sin(C(o.hop||0)*Math.PI))*120;const b=Math.sin(t*3)*8;X.save();X.lineCap='round';
 X.globalAlpha=.22;X.fillStyle='#1a1020';X.beginPath();X.ellipse(x,y+6*s,110*s*(1-h/300),18*s,0,0,7);X.fill();X.globalAlpha=1;
 const by=y-h*s-b*s;X.strokeStyle='#151515';X.lineWidth=14*s;for(const d of[-1,1]){X.beginPath();X.moveTo(x+d*40*s,by-150*s);X.lineTo(x+d*48*s,by-8*s);X.stroke();X.fillStyle='#151515';X.beginPath();X.ellipse(x+d*62*s,by-6*s,34*s,15*s,0,0,7);X.fill()}
 if(o.glow)glow(x,by-300*s,360*s,'150,140,255',.4*o.glow);
 if(MAS.complete&&MAS.naturalWidth){const W=330*s,H=W*MAS.height/MAS.width;X.save();X.translate(x,by-150*s);X.scale(o.flip?-1:1,1);X.drawImage(MAS,-W/2,-H+30*s,W,H);X.restore()}
 X.strokeStyle='#151515';X.fillStyle='#151515';X.lineWidth=14*s;for(const d of[-1,1]){const up=d>0&&o.wave;const a0=up?-.9+Math.sin(t*12)*.35:.35;const sx=x+d*120*s,sy=by-190*s;const ex=sx+d*Math.cos(a0)*130*s,ey=sy+Math.sin(a0)*130*s;X.beginPath();X.moveTo(sx,sy);X.lineTo(ex,ey);X.stroke();X.beginPath();X.arc(ex,ey,24*s,0,7);X.fill()}X.restore()}

// ---------- top label card (the scene's subject, e.g. "Your memory 🙃") ----------
function label3(text,p=1,y=300){if(p<=0)return;X.save();X.setTransform(1,0,0,1,0,0);X.translate(540,y);const k=eo(C(p));X.scale(lerp(.6,1,k),lerp(.6,1,k));X.globalAlpha=C(p*2);
 X.font="900 104px 'Inter Display',Inter,'Noto Color Emoji'";const w=Math.min(1000,X.measureText(text).width+90);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=24;X.shadowOffsetY=8;X.fillStyle='#fff';X.beginPath();X.roundRect(-w/2,-82,w,164,30);X.fill();X.shadowColor='transparent';
 X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,6,w-60);X.restore()}

// ---------- painted backgrounds (soft gradients, depth blur, light) ----------
function pblur(px,fn){X.save();X.filter=`blur(${px}px)`;fn();X.restore()}
function psky(top,mid,bot,hz=1100){const g=X.createLinearGradient(0,-400,0,hz);g.addColorStop(0,top);g.addColorStop(.6,mid);g.addColorStop(1,bot);X.fillStyle=g;X.fillRect(-3000,-3000,8000,4200)}
function pcloud(x,y,s,c1,c2){X.save();X.translate(x,y);X.scale(s,s);const pts=[[-160,20,90],[-70,-30,110],[40,-50,120],[150,-10,100],[230,30,80],[-230,40,70],[60,30,110]];for(const[a,b,r]of pts){const g=X.createRadialGradient(a-r*.3,b-r*.5,r*.2,a,b,r);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.beginPath();X.arc(a,b,r,0,7);X.fill()}X.restore()}
function pclouds(t,y,c1='#fbfbff',c2='#d9e2f0',n=5,blur=3){pblur(blur,()=>{for(let i=0;i<n;i++){const x=((i*430+t*14)%2200)-500;pcloud(x,y+(i%3)*80+rnd(i)*40,.9+rnd(i+3)*.7,c1,c2)}})}
function prain(t,a=.5,n=90){X.save();X.strokeStyle=`rgba(220,235,255,${a})`;X.lineWidth=3;X.lineCap='round';for(let k=0;k<n;k++){const x=(rnd(k)*1300-100+t*60)%1300-100,y=((rnd(k+9)*2100+t*1700)%2300)-300;X.beginPath();X.moveTo(x,y);X.lineTo(x-10,y+70);X.stroke()}X.restore()}
function psun(x,y,r,t){glow(x,y,r*5,'255,240,170',.75);X.fillStyle='#fffbe0';X.beginPath();X.arc(x,y,r,0,7);X.fill();rays(x,y,t,'255,245,190',.22,12,2600)}
// outdoor ground plane with perspective road; o: hz horizon y, grass, road, wet (puddles), dry (cracked earth), bushes
function proad(t,o={}){const hz=o.hz||1060;X.fillStyle=o.grass||'#8fbf6a';X.fillRect(-3000,hz,8000,3000);
 if(!o.dry)pblur(2,()=>{for(let k=0;k<14;k++){const x=-200+k*110+rnd(k)*40;const r=40+rnd(k+5)*50;const g=X.createRadialGradient(x-r*.3,hz-r*.6,4,x,hz-r*.3,r);g.addColorStop(0,'#9ccc74');g.addColorStop(1,'#5f8f4a');X.fillStyle=g;X.beginPath();X.arc(x,hz-r*.25,r,Math.PI,0);X.fill()}});
 if(o.road!==0){X.fillStyle=o.roadc||'#8d969e';X.beginPath();X.moveTo(470,hz);X.lineTo(610,hz);X.lineTo(1500,2000);X.lineTo(-420,2000);X.closePath();X.fill();
  X.fillStyle='rgba(255,255,255,.85)';for(let k=0;k<8;k++){const a=(k+((t*0)%1))/8,b=(k+.45)/8;const ya=hz+Math.pow(a,2.2)*960,yb=hz+Math.pow(b,2.2)*960;const wa=2+a*20,wb=2+b*20;X.beginPath();X.moveTo(540-wa,ya);X.lineTo(540+wa,ya);X.lineTo(540+wb,yb);X.lineTo(540-wb,yb);X.fill()}
  X.fillStyle='#a9b0b6';X.beginPath();X.moveTo(440,hz);X.lineTo(470,hz);X.lineTo(-420,2000);X.lineTo(-700,2000);X.fill();X.beginPath();X.moveTo(610,hz);X.lineTo(640,hz);X.lineTo(1780,2000);X.lineTo(1500,2000);X.fill()}
 if(o.wet){X.save();X.globalAlpha=.35;for(let k=0;k<7;k++){const x=rnd(k)*1000+40,y=hz+200+rnd(k+3)*700;X.fillStyle='#c8d8e8';X.beginPath();X.ellipse(x,y,90+rnd(k)*80,18+rnd(k+1)*10,0,0,7);X.fill();X.strokeStyle='#fff';X.lineWidth=2;const q=(t*1.2+rnd(k))%1;X.globalAlpha=.35*(1-q);X.beginPath();X.ellipse(x,y,q*60,q*12,0,0,7);X.stroke();X.globalAlpha=.35}X.restore()}
 if(o.dry){const sg=X.createLinearGradient(0,hz,0,2000);sg.addColorStop(0,'#f0d3a2');sg.addColorStop(1,'#dca86c');X.fillStyle=sg;X.fillRect(-3000,hz-2,8000,3000);
  pblur(3,()=>{for(let k=0;k<4;k++){X.fillStyle=k%2?'#efcf98':'#e6c088';X.beginPath();X.ellipse(-200+k*420,hz+8,380,70+rnd(k)*40,0,Math.PI,0);X.fill()}});X.fillStyle=sg;X.fillRect(-3000,hz+6,8000,3000);
  const NU=16,NV=22,PJ=(u,v)=>{const f=Math.pow(v/NV,1.9);return[540+(u/NU-.5)*(900+f*4200),hz+8+f*1050]};const V=[];for(let i=0;i<=NV;i++){V[i]=[];for(let j=0;j<=NU;j++){const ju=(rnd(i*41+j*7)-.5)*.75,jv=(i>0&&i<NV)?(rnd(i*13+j*29)-.5)*.7:0;V[i][j]=PJ(j+ju+(i%2)*.5,i+jv)}}
  for(let i=0;i<NV;i++)for(let j=0;j<NU;j++){const q=[V[i][j],V[i][j+1],V[i+1][j+1],V[i+1][j]];X.beginPath();X.moveTo(...q[0]);for(const z of q.slice(1))X.lineTo(...z);X.closePath();if(rnd(i*7+j*3)>.6){X.fillStyle='rgba(255,240,210,.18)';X.fill()}X.strokeStyle='rgba(120,72,30,.75)';X.lineWidth=1+Math.pow(i/NV,1.5)*7;X.stroke();
   if(rnd(i*5+j)>.55){X.lineWidth=1+i/NV*3;X.beginPath();const c=[(q[0][0]+q[2][0])/2,(q[0][1]+q[2][1])/2];X.moveTo(...q[0]);X.lineTo(c[0]+(rnd(i+j)-.5)*20,c[1]);X.stroke()}}
  X.fillStyle='rgba(255,236,190,.35)';X.fillRect(-3000,hz,8000,120)}
 haze(hz-60,hz+160,o.hazec||'230,240,255',.45)}
// interior room; o: wall, wall2, floor, floor2, win (window x), night, frame (heart picture), lamp, plant, sofa
function proom(t,o={}){const hz=o.hz||1240;const g=X.createLinearGradient(0,-200,0,hz);g.addColorStop(0,o.wall||'#f3dcc4');g.addColorStop(1,o.wall2||'#e6c3a3');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 for(let k=-12;k<30;k++){X.fillStyle='rgba(255,255,255,.05)';X.fillRect(k*120,-3000,8,4300)}
 X.fillStyle='rgba(0,0,0,.06)';X.fillRect(-3000,hz-60,8000,60);X.fillStyle='#fff8ef';X.fillRect(-3000,hz-28,8000,28);
 const fg=X.createLinearGradient(0,hz,0,2000);fg.addColorStop(0,o.floor||'#c58f62');fg.addColorStop(1,o.floor2||'#9c6a44');X.fillStyle=fg;X.fillRect(-3000,hz,8000,3000);
 X.strokeStyle='rgba(60,30,10,.18)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*40,hz);X.lineTo(540+k*260,2000);X.stroke()}
 if(o.win!=null){const wx=o.win;X.fillStyle='#fffaf2';X.beginPath();X.roundRect(wx-210,260,420,560,16);X.fill();const sg=X.createLinearGradient(0,280,0,800);if(o.night){sg.addColorStop(0,'#1c2452');sg.addColorStop(1,'#3d4790')}else{sg.addColorStop(0,'#8fd0ff');sg.addColorStop(1,'#e4f5ff')}X.fillStyle=sg;X.fillRect(wx-190,280,380,520);
  X.save();X.beginPath();X.rect(wx-190,280,380,520);X.clip();if(o.night){X.fillStyle='#fff6d8';X.beginPath();X.arc(wx+80,380,40,0,7);X.fill();glow(wx+80,380,160,'255,250,220',.4)}else{pclouds(t,360,'#fff','#e3eefa',3,1);X.fillStyle='#9fd08a';X.beginPath();X.ellipse(wx,820,320,90,0,0,7);X.fill()}if(o.rain)prain(t,.6,30);X.restore();
  X.fillStyle='#fffaf2';X.fillRect(wx-8,280,16,520);X.fillRect(wx-190,530,380,14);
  for(const d of[-1,1]){const cg=X.createLinearGradient(wx+d*200,0,wx+d*260,0);cg.addColorStop(0,o.curtain||'#d9577a');cg.addColorStop(1,o.curtain2||'#b8405f');X.fillStyle=cg;X.beginPath();X.moveTo(wx+d*170,230);X.quadraticCurveTo(wx+d*215,560,wx+d*190,880);X.lineTo(wx+d*290,880);X.lineTo(wx+d*280,230);X.fill()}
  if(!o.night){X.save();X.globalCompositeOperation='screen';X.globalAlpha=.18;X.fillStyle='#fff3c0';X.beginPath();X.moveTo(wx-190,800);X.lineTo(wx+190,800);X.lineTo(wx+500,hz+500);X.lineTo(wx-300,hz+500);X.fill();X.restore()}}
 if(o.frame){const[fx,fy]=o.frame;X.fillStyle='#c99a52';X.beginPath();X.roundRect(fx-110,fy-90,220,180,10);X.fill();X.fillStyle='#fde3ea';X.fillRect(fx-90,fy-70,180,140);X.fillStyle='#ff5a7a';X.beginPath();X.moveTo(fx,fy+40);X.bezierCurveTo(fx-60,fy,fx-40,fy-50,fx,fy-20);X.bezierCurveTo(fx+40,fy-50,fx+60,fy,fx,fy+40);X.fill()}
 if(o.lamp){const lx=o.lamp;X.strokeStyle='#4a3a32';X.lineWidth=10;X.beginPath();X.moveTo(lx,hz+40);X.lineTo(lx,820);X.stroke();X.fillStyle='#ffe6b0';X.beginPath();X.moveTo(lx-80,820);X.lineTo(lx+80,820);X.lineTo(lx+55,710);X.lineTo(lx-55,710);X.fill();glow(lx,800,o.night?560:360,'255,214,150',o.night?.6:.35)}
 if(o.plant){const px=o.plant;X.fillStyle='#d8774a';X.beginPath();X.moveTo(px-60,hz+40);X.lineTo(px+60,hz+40);X.lineTo(px+48,hz-60);X.lineTo(px-48,hz-60);X.fill();for(let k=0;k<7;k++){X.save();X.translate(px,hz-60);X.rotate(-1.2+k*.4);X.fillStyle=k%2?'#4f9a50':'#62b062';X.beginPath();X.ellipse(0,-90,26,90,0,0,7);X.fill();X.restore()}}
 if(o.night){X.save();X.globalCompositeOperation='multiply';X.fillStyle='rgba(90,90,160,.35)';X.fillRect(-3000,-3000,8000,8000);X.restore()}}
function psofa(x,y,s=1,c='#5a7fb5',c2='#4a6a9a'){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(0,10,420,40,0,0,7);X.fill();X.globalAlpha=1;
 const g=X.createLinearGradient(0,-330,0,0);g.addColorStop(0,c);g.addColorStop(1,c2);X.fillStyle=g;X.beginPath();X.roundRect(-360,-330,720,220,50);X.fill();X.beginPath();X.roundRect(-400,-160,800,150,40);X.fill();X.fillStyle=c2;X.beginPath();X.roundRect(-430,-250,100,250,40);X.fill();X.beginPath();X.roundRect(330,-250,100,250,40);X.fill();X.restore()}

// ---------- craft ladder 2026-11-13 18:00: laundry kit ----------
// washer(x,floorY,s,{door:0..1 open, t, spin:1, glow}) front-loader washing machine standing on the floor
function washer(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.22;X.fillStyle='#000';X.beginPath();X.ellipse(0,6,230,26,0,0,7);X.fill();X.globalAlpha=1;
 rr(-200,-470,400,470,34,'#f4f6f8',9);rr(-200,-470,400,110,34,'#e3e8ee',0);line([[-196,-360],[196,-360]],6,'#c5ced8');
 circ(130,-415,26,'#d7dde4',6);circ(130,-415,8,O,0);rr(-170,-436,150,40,10,'#9fd8ff',5);
 if(o.on){X.fillStyle='#2ecc71';X.beginPath();X.arc(60,-415,9,0,7);X.fill()}
 circ(0,-185,140,'#dfe5ea',8);X.save();X.beginPath();X.arc(0,-185,104,0,7);X.clip();X.fillStyle='#4a5a6e';X.fillRect(-110,-295,220,220);
 const sp=o.spin?t*6:0;for(let k=0;k<5;k++){const a=sp+k*1.26;ell(Math.cos(a)*48,-185+Math.sin(a)*48,42,30,['#e86a5a','#5a8fe8','#f2c94c','#7bc86c','#c77ddb'][k],4,a)}
 if(o.spin){X.fillStyle='rgba(140,200,255,.35)';X.fillRect(-110,-185+Math.sin(t*4)*10,220,120)}X.restore();
 X.globalAlpha=.5;path(()=>{X.arc(0,-185,88,3.6,4.4)},null,10,'#fff');X.globalAlpha=1;
 const d=C(o.door||0);if(d>0){X.save();X.translate(-140,-185);X.scale(Math.cos(d*1.35),1);circ(140,0,118,'rgba(200,230,255,.55)',9);X.restore()}else circ(0,-185,104,null,9);
 X.restore()}
// stink(x,y,t,a,s) rising green stink cloud with wavy lines
function stink(x,y,t,a=1,s=1){if(a<=0)return;X.save();X.globalAlpha=C(a)*.85;for(let k=0;k<7;k++){const ph=((t*.6+k/7)%1),px=x+Math.sin(k*2.1+t*1.5)*70*s+(k-3)*26*s,py=y-ph*360*s,r=(40+ph*70)*s;X.globalAlpha=C(a)*.55*(1-ph);circ(px,py,r,'#9bd36a',0)}
 X.globalAlpha=C(a)*.9;for(let k=0;k<3;k++){const bx=x+(k-1)*70*s;path(()=>{X.moveTo(bx,y-40*s);for(let j=1;j<=6;j++)X.lineTo(bx+Math.sin(t*5+j+k)*18*s,y-40*s-j*40*s)},null,9*s,'#5fa83a')}X.restore()}
// rack(x,floorY,s,t) drying rack with laundry that sways in a breeze
function rack(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);line([[-230,0],[-150,-430]],10,'#8a9099');line([[230,0],[150,-430]],10,'#8a9099');line([[-170,-330],[170,-330]],8,'#8a9099');line([[-190,-220],[190,-220]],8,'#8a9099');
 const it=[[-120,-330,'#e86a5a'],[10,-330,'#5a8fe8'],[120,-330,'#f2c94c'],[-70,-220,'#7bc86c'],[80,-220,'#c77ddb']];it.forEach(([ix,iy,c],k)=>{X.save();X.translate(ix,iy);X.rotate(Math.sin(t*2+k)*.06);rr(-46,0,92,110,12,c,6);line([[-30,24],[30,24]],4,'rgba(255,255,255,.5)');X.restore()});X.restore()}
// hoodie(x,y,s,c) a hoodie held by the hood (draw in a holdR callback)
function hoodie(x,y,s=1,c='#e86a5a'){X.save();X.translate(x,y);X.scale(s,s);ell(0,10,60,46,c,7);path(()=>{X.moveTo(-90,40);X.lineTo(90,40);X.lineTo(120,150);X.lineTo(80,160);X.lineTo(70,290);X.lineTo(-70,290);X.lineTo(-80,160);X.lineTo(-120,150);X.closePath()},c,7);rr(-50,190,100,50,14,'rgba(0,0,0,.12)',0);line([[-12,50],[-16,110]],4);line([[12,50],[16,110]],4);X.restore()}
