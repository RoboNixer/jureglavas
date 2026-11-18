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
 // craft ladder 2026-11-17: o.dress (colour) = A-line dress over the body; o.bow (colour) = bow tie at the neck
 if(o.dress&&!o.crawl){const d1=P(neck[0]-46,neck[1]+40),d2=P(neck[0]+46,neck[1]+40),d3=P(hip[0]+150,hip[1]+190),d4=P(hip[0]-150,hip[1]+190);X.fillStyle=o.dress;X.strokeStyle=OUT;X.lineWidth=8*s;X.beginPath();X.moveTo(...d1);X.lineTo(...d2);X.quadraticCurveTo(...P(hip[0]+70,hip[1]-40),...d3);X.quadraticCurveTo(...P(hip[0],hip[1]+215),...d4);X.quadraticCurveTo(...P(hip[0]-70,hip[1]-40),...d1);X.fill();X.stroke();X.fillStyle='rgba(0,0,0,.06)';X.beginPath();X.moveTo(...P(hip[0]+20,hip[1]-60));X.lineTo(...d3);X.quadraticCurveTo(...P(hip[0]+60,hip[1]+205),...P(hip[0]+40,hip[1]+200));X.fill()}
// craft ladder 2026-11-18: o.towel (colour) = bath towel wrapped round the waist (with stripe + tucked corner)
 if(o.towel&&!o.crawl){const tc=o.towel===1?'#5aa9e6':o.towel;const a=P(hip[0]-78,hip[1]-70),b=P(hip[0]+78,hip[1]-70),c=P(hip[0]+92,hip[1]+120),d=P(hip[0]-92,hip[1]+120);X.fillStyle=tc;X.strokeStyle=OUT;X.lineWidth=8*s;X.beginPath();X.moveTo(...a);X.lineTo(...b);X.lineTo(...c);X.lineTo(...d);X.closePath();X.fill();X.stroke();X.strokeStyle='rgba(255,255,255,.75)';X.lineWidth=10*s;X.beginPath();X.moveTo(...P(hip[0]-86,hip[1]+88));X.lineTo(...P(hip[0]+86,hip[1]+88));X.stroke();X.strokeStyle=OUT;X.lineWidth=6*s;X.beginPath();X.moveTo(...P(hip[0]+40,hip[1]-70));X.lineTo(...P(hip[0]+55,hip[1]+40));X.stroke()}
 if(o.bow&&!o.crawl){const[bx,by]=P(neck[0],neck[1]+18);X.save();X.translate(bx,by);X.scale(s,s);X.fillStyle=o.bow;X.strokeStyle=OUT;X.lineWidth=6;for(const d of[-1,1]){X.beginPath();X.moveTo(0,0);X.lineTo(d*46,-24);X.lineTo(d*46,24);X.closePath();X.fill();X.stroke()}X.beginPath();X.arc(0,0,11,0,7);X.fill();X.stroke();X.restore()}
 // arms
 const arm=(d,a,bend)=>{const sh=[neck[0]+d*6,neck[1]+40];const A=(a!=null?a:14+(w!=null?(d>0?-ph:ph)*28:0))*Math.PI/180;const ex=sh[0]+Math.sin(A)*d*150,ey=sh[1]+Math.cos(A)*150;const B=(((a!=null?a:14)+(bend||0)))*Math.PI/180;const hx=ex+Math.sin(B)*d*140,hy=ey+Math.cos(B)*140;
  limbStroke([sh,[ex,ey],[hx,hy]]);const[wx,wy]=P(hx,hy);X.save();X.translate(wx,wy);X.fillStyle=o.col?OUT:OUT;X.beginPath();X.ellipse(0,0,31*s,27*s,0,0,7);X.fill();X.beginPath();X.ellipse(-fl*d*-20*s,-16*s,12*s,16*s,-.5,0,7);X.fill();
  if(o.col){X.fillStyle=limb;X.beginPath();X.ellipse(0,0,24*s,20*s,0,0,7);X.fill()}X.restore();hands[d>0?'R':'L']=[wx,wy]};
 if(o.crawl){const cw=Math.sin(t*6+1.5)*14;limbStroke([[170,-350],[220+cw,-180],[240+cw,-14]]);limbStroke([[170,-350],[140-cw,-180],[150-cw,-14]]);X.fillStyle=OUT;for(const hx of[255+cw,165-cw]){const[a,b]=P(hx,-14);X.beginPath();X.ellipse(a,b,32*s,22*s,0,0,7);X.fill()}}
 else{arm(-1,o.armL,o.bendL);arm(1,o.armR,o.bendR)}
 // head
 const R=125,hc=o.crawl?[300,-470]:[neck[0]+Math.sin(lean)*60,neck[1]-R+8];const[HX,HY]=P(hc[0],hc[1]);
 X.save();X.translate(HX,HY);X.rotate(((o.tilt||0)+(o.crawl?8:0))*Math.PI/180*fl);X.scale(s,s);
 // craft ladder 2026-11-17: o.veil = translucent bridal veil behind the head (+ tiny flower crown)
 if(o.veil){X.save();X.globalAlpha=.78;const vg=X.createLinearGradient(0,-R,0,R*3.2);vg.addColorStop(0,'#ffffff');vg.addColorStop(1,'rgba(240,244,255,.55)');X.fillStyle=vg;X.strokeStyle='rgba(150,160,190,.7)';X.lineWidth=5;X.beginPath();X.moveTo(-R*.7,-R*.9);X.quadraticCurveTo(-R*1.7,R*.6,-R*1.55,R*3.1);X.quadraticCurveTo(0,R*3.4,R*1.55,R*3.1);X.quadraticCurveTo(R*1.7,R*.6,R*.7,-R*.9);X.quadraticCurveTo(0,-R*1.35,-R*.7,-R*.9);X.fill();X.stroke();X.restore()}
 if(o.hair=='bun'){X.fillStyle=o.hairc||'#e2508a';X.strokeStyle=OUT;X.lineWidth=9;X.beginPath();X.arc(0,-R-34,52,0,7);X.fill();X.stroke()}
 X.fillStyle=col;X.strokeStyle=OUT;X.lineWidth=10;X.beginPath();X.arc(0,0,R,0,7);X.fill();
 const g=X.createRadialGradient(-R*.35,-R*.45,R*.1,0,0,R*1.05);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(.7,'rgba(255,255,255,0)');g.addColorStop(1,o.col?'rgba(0,0,0,.18)':'rgba(120,120,160,.22)');X.fillStyle=g;X.fill();X.stroke();
 if(o.hair=='bun'){X.fillStyle=o.hairc||'#e2508a';X.beginPath();X.moveTo(-R*.95,-R*.3);X.quadraticCurveTo(-R*.6,-R*1.2,0,-R*1.02);X.quadraticCurveTo(R*.6,-R*1.2,R*.95,-R*.3);X.quadraticCurveTo(R*.5,-R*.75,0,-R*.7);X.quadraticCurveTo(-R*.5,-R*.75,-R*.95,-R*.3);X.fill();X.stroke()}
 if(o.veil){for(let k=-3;k<=3;k++){const a=-Math.PI/2+k*.28;X.fillStyle=k%2?'#ffd1dc':'#fff6c8';X.strokeStyle=OUT;X.lineWidth=4;X.beginPath();X.arc(Math.cos(a)*R*1.0,Math.sin(a)*R*1.0,15,0,7);X.fill();X.stroke()}}
 if(o.hair=='curl'){X.lineWidth=9;X.beginPath();X.moveTo(-14,-R+4);X.bezierCurveTo(-30,-R-50,30,-R-60,18,-R-24);X.stroke()}
 if(o.hair=='spike'){X.fillStyle=o.hairc||'#151515';for(let k=-2;k<=2;k++){X.beginPath();X.moveTo(k*34-18,-R+12);X.lineTo(k*40,-R-46+Math.abs(k)*10);X.lineTo(k*34+18,-R+12);X.fill()}}
// craft ladder 2026-11-18: o.foam = shampoo foam piled on the head (bubbles wobble with t)
 if(o.foam){X.save();for(let k=0;k<11;k++){const a=-Math.PI+k/10*Math.PI,rr0=R*(.92+.08*Math.sin(k*2.3)),bx=Math.cos(a)*rr0*.95,by=Math.sin(a)*rr0*.85-R*.12,br0=(30+18*Math.abs(Math.sin(k*1.7)))*(1+.04*Math.sin(t*4+k));X.fillStyle='#ffffff';X.strokeStyle='#b9c6d6';X.lineWidth=5;X.beginPath();X.arc(bx,by,br0,0,7);X.fill();X.stroke()}for(let k=0;k<5;k++){X.fillStyle='#fff';X.strokeStyle='#b9c6d6';X.lineWidth=5;X.beginPath();X.arc(-60+k*30,-R-20-12*Math.sin(k*1.3),26+6*Math.sin(k),0,7);X.fill();X.stroke()}X.globalAlpha=.7;for(let k=0;k<6;k++){const q=(t*.7+k/6)%1;X.fillStyle='#fff';X.strokeStyle='#b9c6d6';X.lineWidth=3;X.beginPath();X.arc(-90+k*36+Math.sin(t+k)*10,-R-60-q*160,8+k%3*4,0,7);X.fill();X.stroke()}X.restore()}
 if(o.party){const pc=o.party===1?'#ff5a7a':o.party;X.save();X.rotate(-.18);X.fillStyle=pc;X.strokeStyle=OUT;X.lineWidth=8;X.beginPath();X.moveTo(-58,-R+18);X.lineTo(0,-R-150);X.lineTo(58,-R+18);X.closePath();X.fill();X.stroke();X.fillStyle='#ffd23f';for(let k=0;k<3;k++){X.beginPath();X.arc(-20+k*20,-R-20-k*38,9,0,7);X.fill()}X.fillStyle='#fff';X.beginPath();X.arc(0,-R-156,20,0,7);X.fill();X.stroke();X.restore()}
 // craft ladder 2026-11-17 22:00: o.santa = floppy red Santa hat with white fur band + pompom (true or a colour)
 if(o.santa){const sc=o.santa===1||o.santa===true?'#e2353a':o.santa;X.save();X.rotate(.12);X.fillStyle=sc;X.strokeStyle=OUT;X.lineWidth=8;X.beginPath();X.moveTo(-R*.92,-R*.55);X.quadraticCurveTo(-R*.5,-R*1.55,R*.35,-R*1.45);X.quadraticCurveTo(R*1.15,-R*1.35,R*1.2,-R*.6);X.quadraticCurveTo(R*.9,-R*1.05,R*.6,-R*.9);X.lineTo(R*.92,-R*.55);X.closePath();X.fill();X.stroke();
  X.fillStyle='#fff';X.beginPath();X.roundRect?X.roundRect(-R*1.0,-R*.78,R*2.0,R*.36,R*.18):X.rect(-R,-R*.78,R*2,R*.36);X.fill();X.stroke();X.beginPath();X.arc(R*1.2,-R*.55,R*.2,0,7);X.fill();X.stroke();X.restore()}
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

// gift(x,y,s,o): wrapped present box with ribbon + bow; o.col box colour, o.rib ribbon colour, o.shake (deg wobble)
function gift(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate((o.shake||0)*Math.PI/180);X.scale(s,s);const c=o.col||'#4a8fe0',rb=o.rib||'#ffd23f';
 X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=16;rr(-90,-150,180,150,14,c,7);X.shadowColor='transparent';rr(-100,-176,200,40,10,c,7);
 X.fillStyle=rb;X.fillRect(-14,-176,28,176);X.fillRect(-100,-160,200,16);X.strokeStyle='#151515';X.lineWidth=6;
 for(const d of[-1,1]){X.fillStyle=rb;X.beginPath();X.ellipse(d*34,-196,40,22,d*.5,0,7);X.fill();X.stroke()}circ(0,-190,16,rb,6);
 X.fillStyle='rgba(255,255,255,.25)';X.fillRect(-80,-140,30,130);X.restore()}
// balloon(x,y,s,t,col): floating balloon on a string; (x,y)=string end (hand)
function balloon(x,y,s=1,t=0,col='#ff5a7a'){const bx=x+Math.sin(t*1.7)*14*s,by=y-330*s;X.save();X.strokeStyle='#444';X.lineWidth=3;X.beginPath();X.moveTo(x,y);X.quadraticCurveTo(x+30*s,y-160*s,bx,by+80*s);X.stroke();
 X.fillStyle=col;X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.ellipse(bx,by,62*s,76*s,0,0,7);X.fill();X.stroke();X.fillStyle='rgba(255,255,255,.45)';X.beginPath();X.ellipse(bx-22*s,by-28*s,14*s,22*s,-.4,0,7);X.fill();
 X.fillStyle=col;X.beginPath();X.moveTo(bx-10*s,by+86*s);X.lineTo(bx+10*s,by+86*s);X.lineTo(bx,by+74*s);X.fill();X.restore()}

// --- added 2026-11-16 22:00 (screenshot video): parcel-locker object character with a face, shoebox, camera-roll phone, drifting screenshot cards
function shotCard(x,y,s,rot,a,k){if(s<=0||a<=0)return;X.save();X.globalAlpha=a;X.translate(x,y);X.rotate(rot);X.scale(s,s);
 const cs=['#7cc4f0','#ffd23f','#f28a8a','#9be0a8','#c9a6f0','#f2b36a'];rr(-40,-70,80,140,12,'#fff',5);rr(-30,-58,60,24,5,cs[k%6],0);
 for(let i=0;i<4;i++)rr(-30,-24+i*20,i%2?40:60,10,4,'#c9ced6',0);X.restore()}
function camroll(x,y,s,t,r,n){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#fafafa',0);
 X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 const off=(1-eo(C(r/1.4)))*-2600;const cs=['#7cc4f0','#ffd23f','#f28a8a','#9be0a8','#c9a6f0','#f2b36a','#8fd6d0','#e8e8e8'];
 for(let row=-2;row<40;row++)for(let c=0;c<4;c++){const yy=-470+row*196+off;if(yy<-700||yy>700)continue;const xx=-292+c*147,k=row*4+c;
  X.fillStyle='#fff';X.fillRect(xx,yy,143,192);X.fillStyle=cs[(k*7)%8];X.fillRect(xx+10,yy+10,123,40);X.fillStyle='#d6dae0';for(let i=0;i<5;i++)X.fillRect(xx+10,yy+62+i*24,i%2?80:118,12);
  X.fillStyle='rgba(0,0,0,.08)';X.fillRect(xx,yy+190,143,2)}
 X.fillStyle='rgba(250,250,250,.97)';X.fillRect(-300,-640,600,170);X.font="800 46px Inter";X.fillStyle='#111';X.textAlign='left';X.textBaseline='middle';X.fillText('Screenshots',-250,-520);
 X.font="600 30px Inter";X.fillStyle='#0a84ff';X.textAlign='right';X.fillText('Select',250,-520);
 X.restore();
 if(n){const p=C((r-.5)/.35);if(p>0){X.save();X.translate(0,-360);X.scale(lerp(.5,1,eo(p)),lerp(.5,1,eo(p)));X.globalAlpha=C(p*2);X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=30;rr(-290,-70,580,140,70,'#e0533d',0);X.shadowColor='transparent';txt(n,0,4,54,'#fff',0);X.restore()}}
 X.restore()}
function locker(x,y,s,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.25;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,300,34,0,0,7);X.fill();X.globalAlpha=1;
 rr(-260,-1000,520,1000,26,'#f2c230',9);rr(-245,-985,490,60,16,'#e0a91c',0);txt('📦 PARCELS',0,-955,40,'#5a3f00',0,'900 ');
 for(let c=0;c<2;c++)for(let rI=0;rI<5;rI++){const bx=c?40:-230,by=-905+rI*175;if(c===1&&rI===1){continue}
  const open=o.open&&c===1&&rI===3;rr(bx,by,190,160,10,open?'#3a2e1a':'#ffd75a',6);if(!open){rr(bx+150,by+66,18,30,6,'#9a7a1a',0)}
  else{const k=C(o.open);X.save();X.translate(bx,by);X.transform(1,0,-.0,1,0,0);rr(190,0,lerp(190,46,k),160,10,'#ffd75a',6);X.restore();if(o.box)shoebox(bx+95,by+150,.8)}}
 // screen with a face
 const sx=40,sy=-730;rr(sx,sy,190,160,14,'#1f2a38',6);X.save();X.beginPath();X.roundRect(sx+10,sy+10,170,140,10);X.clip();X.fillStyle=o.mood==='happy'?'#2a7d4f':'#2b4a7a';X.fillRect(sx,sy,190,160);
 const cx=sx+95,cy=sy+70,bl=(t%3.1)<.12;
 if(o.mood==='happy'){X.strokeStyle='#bfffd8';X.lineWidth=8;X.lineCap='round';X.beginPath();X.arc(cx-40,cy-5,16,Math.PI*1.1,Math.PI*1.9);X.stroke();X.beginPath();X.arc(cx+40,cy-5,16,Math.PI*1.1,Math.PI*1.9);X.stroke()}
 else{X.fillStyle='#bfe3ff';if(bl){X.fillRect(cx-55,cy-8,30,6);X.fillRect(cx+25,cy-8,30,6)}else{X.beginPath();X.ellipse(cx-40,cy-8,14,18,0,0,7);X.fill();X.beginPath();X.ellipse(cx+40,cy-8,14,18,0,0,7);X.fill()}
  X.strokeStyle='#bfe3ff';X.lineWidth=6;X.beginPath();X.moveTo(cx-60,cy-40);X.lineTo(cx-25,cy-32);X.moveTo(cx+60,cy-40);X.lineTo(cx+25,cy-32);X.stroke()}
 const mo=o.talk?Math.abs(Math.sin(o.talk*14))*16:0;X.fillStyle=o.mood==='happy'?'#bfffd8':'#bfe3ff';X.beginPath();
 if(o.mood==='happy'){X.arc(cx,cy+30,26+mo*.3,0,Math.PI);X.fill()}else{X.ellipse(cx,cy+38,22,4+mo,0,0,7);X.fill()}
 X.restore();
 // little arms (shrug or cheer)
 const up=o.cheer?1:0,sh=o.shrug?C(o.shrug):0;X.lineCap='round';X.strokeStyle='#151515';X.lineWidth=12;
 const arm=(sd)=>{const bx=sd*262,by=-560;const ex=bx+sd*(up?90:lerp(60,110,sh)),ey=by+(up?-170:lerp(80,-40,sh));X.beginPath();X.moveTo(bx,by);X.lineTo(ex,ey);X.stroke();X.fillStyle='#151515';X.beginPath();X.ellipse(ex,ey,22,20,0,0,7);X.fill()};arm(-1);arm(1);
 X.restore()}
function shoebox(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-80,-80,160,80,8,'#e8743c',5);rr(-88,-96,176,26,6,'#f28a50',5);rr(-20,-96,40,26,0,'#fff',0);X.restore()}
// ---- craft ladder 2026-11-17 09:00: seasonal kit ----
// xtree(x,y,s,t): small Christmas tree standing at (x,y) with twinkling lights + star
function xtree(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,150,.25);rr(-30,-70,60,70,8,'#7a4a2a',5);rr(-70,-40,140,40,10,'#c4523f',5);
 const tiers=[[-70,210,150],[-200,170,140],[-320,125,130]];
 for(const[ty,w,h]of tiers){X.fillStyle='#2f8a4e';X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-w,ty);X.lineTo(w,ty);X.lineTo(0,ty-h);X.closePath();X.fill();X.stroke();X.fillStyle='rgba(255,255,255,.12)';X.beginPath();X.moveTo(-w*.2,ty-h*.1);X.lineTo(0,ty-h);X.lineTo(-w*.55,ty-h*.1);X.fill()}
 const cols=['#ffd23f','#ff5a7a','#7cd0ff','#7cf0a0'];for(let k=0;k<14;k++){const a=k*2.39,rr2=(k%5)/5,lx=Math.sin(a)*(40+rr2*120),ly=-90-k*22;const on=.5+.5*Math.sin(t*4+k*1.7);X.globalAlpha=.4+.6*on;circ(lx*(1-(-ly-90)/400),ly,9,cols[k%4],0);X.globalAlpha=1}
 X.fillStyle='#ffd23f';X.strokeStyle='#151515';X.lineWidth=5;X.beginPath();for(let k=0;k<10;k++){const rad=k%2?18:40,a=-Math.PI/2+k*Math.PI/5;X.lineTo(Math.cos(a)*rad,-455+Math.sin(a)*rad)}X.closePath();X.fill();X.stroke();glow(0,-455,90,'255,220,90',.45);X.restore()}
// psnow(t,a,n): soft falling snow over the whole frame (world coords)
function psnow(t,a=.8,n=110){X.save();for(let k=0;k<n;k++){const sx=(k*137.5)%1500-200,sp=60+(k%7)*18,yy=((k*311)%2100+t*sp)%2100-100,xx=sx+Math.sin(t*1.2+k)*24,rad=4+(k%4)*2.5;X.globalAlpha=a*(.45+(k%3)*.2);X.fillStyle='#fff';X.beginPath();X.arc(xx,yy,rad,0,7);X.fill()}X.restore()}
// tap(): chrome wall tap over a sink/pot; o.drip=1 animates a water drop forming, falling and rippling every o.per s (offset o.off),
// o.fall = drop distance (px, unscaled), o.fixed = 0..1 shows a green ✅ sparkle (no drip). Sync drip SFX to the same per/off.
function tap(x,y,s=1,o={}){const t=o.t||0,per=o.per||.85,off=o.off||0,fall=o.fall||300;X.save();X.translate(x,y);X.scale(s,s);
 rr(-150,-40,60,80,14,'#b9c2cc',6);rr(-100,-28,170,56,26,'#d6dde5',6);path(()=>{X.moveTo(40,-28);X.quadraticCurveTo(130,-30,130,40);X.lineTo(130,70);X.lineTo(90,70);X.lineTo(90,40);X.quadraticCurveTo(90,22,40,26);X.closePath()},'#d6dde5',6);
 ell(110,72,26,10,'#9aa6b2',4);rr(-60,-100,90,60,16,'#e5484d',5);rr(-30,-60,30,36,6,'#b9c2cc',5);X.fillStyle='rgba(255,255,255,.7)';X.fillRect(-90,-20,120,8);
 if(o.drip){const ph=(((t-off)/per)%1+1)%1;const dx=110;
  if(ph<.55){const k=ph/.55;X.save();X.fillStyle='#7cc4ff';X.strokeStyle='#151515';X.lineWidth=4;X.beginPath();const r=8+k*14;X.ellipse(dx,82+r,r*.8,r,0,0,7);X.fill();X.stroke();X.restore()}
  else if(ph<.75){const k=(ph-.55)/.2,yy=100+k*k*fall;X.save();X.fillStyle='#7cc4ff';X.strokeStyle='#151515';X.lineWidth=4;X.beginPath();X.moveTo(dx,yy-36);X.quadraticCurveTo(dx+22,yy,dx,yy+18);X.quadraticCurveTo(dx-22,yy,dx,yy-36);X.fill();X.stroke();X.restore()}
  else{const k=(ph-.75)/.25;X.save();X.globalAlpha=1-k;X.strokeStyle='#bfe3ff';X.lineWidth=6;for(let j=0;j<2;j++){X.beginPath();X.ellipse(dx,100+fall+10,30+k*90+j*30,8+k*20+j*6,0,0,7);X.stroke()}
   for(let j=0;j<4;j++){circ(dx+(j-1.5)*26*(1+k),100+fall-k*70*Math.sin((j+1)*.8),7,'#7cc4ff',0)}X.restore()}}
 if(o.fixed>0){sparkles(110,180,C(o.fixed),10,160,'#7cf0a0')}
 X.restore()}

// ---------- craft ladder 2026-11-17: wedding kit ----------
// string lights hanging in catenaries across the top of a room
function strlights(t,y=200,n=4,sag=90){for(let k=0;k<n;k++){const x0=-80+k*310,x1=x0+330;X.strokeStyle='rgba(60,40,30,.55)';X.lineWidth=3;X.beginPath();X.moveTo(x0,y);X.quadraticCurveTo((x0+x1)/2,y+sag*2,x1,y);X.stroke();
 for(let j=1;j<8;j++){const u=j/8,bx=x0+(x1-x0)*u,by=(1-u)*(1-u)*y+2*u*(1-u)*(y+sag*2)+u*u*y;const tw=.65+.35*Math.sin(t*3+j*1.7+k);glow(bx,by+10,46,'255,214,140',.5*tw);circ(bx,by+10,9,'#fff3c4',0)}}}
// flower arch (behind the couple's table)
function farch(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#f6efe6';X.lineWidth=26;X.beginPath();X.moveTo(-300,0);X.lineTo(-300,-420);X.arc(0,-420,300,Math.PI,0);X.lineTo(300,0);X.stroke();
 for(let k=0;k<26;k++){const a=Math.PI+k/25*Math.PI,r=300,fx=Math.cos(a)*r,fy=-420+Math.sin(a)*r;circ(fx,fy,22+(k%3)*6,['#ffb3c6','#fff','#ffd6a5','#f28bb0'][k%4],3);if(k%2)ell(fx+18,fy+14,16,9,'#7cbf7c',0)}
 for(const d of[-1,1])for(let k=0;k<5;k++)circ(d*300+(k%2?14:-12),-60-k*70,20,['#ffb3c6','#fff','#f28bb0'][k%3],3);X.restore()}
// round guest table with white cloth (o.num = name card, o.flowers, o.glass)
function rtable(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,10,300,34,'#000',0);X.globalAlpha=1;
 const g=X.createLinearGradient(0,-170,0,0);g.addColorStop(0,'#ffffff');g.addColorStop(1,'#e6e8f0');X.fillStyle=g;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-280,-150);X.quadraticCurveTo(-300,-60,-260,0);X.quadraticCurveTo(0,30,260,0);X.quadraticCurveTo(300,-60,280,-150);X.closePath();X.fill();X.stroke();
 ell(0,-150,280,46,'#fbfbff',7);if(o.flowers!==0){for(let k=0;k<5;k++)circ(-30+k*15,-196-(k%2)*16,18,['#ffb3c6','#fff','#f28bb0'][k%3],3);rr(-18,-180,36,30,6,'#cfe8ff',4)}
 if(o.num){rr(80,-200,90,64,8,'#fff',5);txt(o.num,125,-168,44,'#151515',0)}if(o.glass)champ(-150,-150,1);X.restore()}
function champ(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#151515';X.lineWidth=5;X.fillStyle='rgba(255,226,140,.9)';X.beginPath();X.moveTo(-22,-110);X.lineTo(22,-110);X.lineTo(14,-50);X.quadraticCurveTo(0,-38,-14,-50);X.closePath();X.fill();X.stroke();X.beginPath();X.moveTo(0,-42);X.lineTo(0,-6);X.moveTo(-20,-4);X.lineTo(20,-4);X.stroke();for(let k=0;k<3;k++)circ(-6+k*6,-90+k*12,3,'#fff',0);X.restore()}
// tiny kids' table with a crayon drawing (front edge at y)
function kidtable(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.22;ell(0,180,330,30,'#000',0);X.globalAlpha=1;
 for(const d of[-1,1])rr(d*260-14,0,28,180,8,'#f2a65a',5);rr(-330,-46,660,56,12,'#ffd23f',7);rr(-330,6,660,22,6,'#e8b92c',0);
 X.save();X.rotate(-.06);rr(-120,-70,200,30,4,'#fff',4);X.restore();line([[-90,-58],[-40,-62],[0,-54]],4,'#e0533d');
 const cs=['#e0533d','#4a8fe0','#7cc47c','#b07ae0'];for(let k=0;k<4;k++){X.save();X.translate(120+k*34,-56);X.rotate(.3+k*.2);rr(-6,-26,12,52,4,cs[k],3);X.restore()}X.restore()}
function crayon(x,y,s=1,col='#4a8fe0'){X.save();X.translate(x,y);X.scale(s,s);X.rotate(-.5);rr(-9,-44,18,80,5,col,4);path(()=>{X.moveTo(-9,-44);X.lineTo(0,-64);X.lineTo(9,-44)},col,4);X.restore()}
function hallW(t,o={}){proom(t,{win:null,frame:null,plant:0,lamp:0,wall:o.sun?'#fbe9df':'#f1d7cc',wall2:o.sun?'#f3d2c2':'#ddb8a8',floor:'#d9b38c',floor2:'#b48a62'});
 strlights(t,170,4,80);pblur(5,()=>{farch(540,1240,1.1);rtable(170,1300,.7,{flowers:1});rtable(910,1300,.7,{flowers:1})});
 glow(540,700,600,'255,226,170',o.sun?.5:.32)}

// craft ladder 2026-11-17 18:00: hallway() front-door set (promoted from dino_look3), wclock(), tupper() food container with MOM tape + stack() wobbling tower
function wclock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);circ(0,0,90,'#fff',8);for(let k=0;k<12;k++){const a=k/12*Math.PI*2;line([[Math.sin(a)*70,-Math.cos(a)*70],[Math.sin(a)*80,-Math.cos(a)*80]],5,'#333')}
 const ha=((h%12)+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;line([[0,0],[Math.sin(ha)*45,-Math.cos(ha)*45]],10,'#151515');line([[0,0],[Math.sin(ma)*66,-Math.cos(ma)*66]],7,'#151515');circ(0,0,8,'#e0533d',0);X.restore()}
function hallway(t,o={}){proom(t,Object.assign({win:null,frame:null,plant:180,lamp:0,wall:'#f4e3c9',wall2:'#e8cda8',floor:'#b98a5e',floor2:'#94673f'},o));
 const dx=o.dx||760;X.save();rr(dx-200,420,400,830,14,'#fff8ef',0);rr(dx-170,450,340,800,10,o.doorc||'#3f7f9e',8);
 rr(dx-120,500,240,250,12,o.night?'#2a3466':(o.rainy?'#9fb2c7':'#cfeeff'),6);if(o.rainy){X.save();X.beginPath();X.rect(dx-120,500,240,250);X.clip();prain(t,.7,25);X.restore()}else if(!o.night)glow(dx,620,260,'255,250,220',.4);
 circ(dx+120,880,22,'#e8c15a',6);rr(dx-110,800,220,30,8,'rgba(0,0,0,.15)',0);
 X.restore();
 // hooks + coats on the left wall
 line([[90,640],[330,640]],12,'#7a5a3a');for(const[cx,c]of[[150,'#e86a5a'],[270,'#7bb36a']]){line([[cx,640],[cx,670]],8,'#555');path(()=>{X.moveTo(cx-55,670);X.lineTo(cx+55,670);X.lineTo(cx+70,900);X.lineTo(cx-70,900);X.closePath()},c,6)}
 if(o.clock)wclock(545,560,.6,7,52)}
// ---- craft ladder: food container ("Mom's Tupperware") + wobbling stack, marker tape "MOM" on the front ----
const LIDS=['#e0533d','#4a8fe0','#f2b33d','#7bb36a','#b07ae0','#e86aa0','#3dbfb0'];
function tupper(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);const w=o.w||150,h=o.h||70,lid=o.lid||'#4a8fe0';
 // body (translucent) with optional soup inside
 path(()=>{X.moveTo(-w/2,-h);X.lineTo(w/2,-h);X.lineTo(w/2-10,0);X.lineTo(-w/2+10,0);X.closePath()},'rgba(235,245,250,.92)',5);
 if(o.full)path(()=>{X.moveTo(-w/2+6,-h+16);X.lineTo(w/2-6,-h+16);X.lineTo(w/2-13,-5);X.lineTo(-w/2+13,-5);X.closePath()},o.full,0);
 X.fillStyle='rgba(255,255,255,.55)';X.fillRect(-w/2+14,-h+8,10,h-18);
 rr(-w/2-8,-h-18,w+16,22,9,lid,5);
 if(o.tag!==0){X.save();X.rotate(-.04);rr(-36,-h+14,72,30,4,'#fffbe6',3);X.font="800 22px 'Comic Sans MS',Inter";X.fillStyle='#222';X.textAlign='center';X.textBaseline='middle';X.fillText('MOM',0,-h+30);X.restore()}
 X.restore()}
function stack(x,y,s,n,t=0,o={}){const wob=o.wob||0;let yy=0;for(let i=0;i<n;i++){const k=i/(Math.max(1,n-1));const sway=Math.sin(t*7+i*.6)*wob*k*28;const w=150-((i*37)%40);const h=58+((i*23)%26);
  tupper(x+sway*s+(((i*53)%30)-15)*s,y+yy*s,s,{w,h,lid:LIDS[(i+(o.off||0))%LIDS.length],rot:sway*.004,full:o.full,tag:(i%2==0||o.full)?1:0});yy-=h+22}}

// ---- craft ladder 2026-11-17 20:00: car kit ----
// engIcon(x,y,s,on,t): the orange check-engine warning symbol (glows + pulses when on)
function engIcon(x,y,s=1,on=1,t=0){X.save();X.translate(x,y);X.scale(s,s);const c=on?'#ffa21a':'#4a4f5a';
 if(on)glow(0,0,150,'255,160,30',.55+.15*Math.sin(t*6));
 X.fillStyle=c;X.strokeStyle=c;X.lineWidth=10;X.lineJoin='round';
 X.fillRect(-46,-26,84,56);X.fillRect(-20,-44,34,18);X.fillRect(-62,-12,16,30);X.fillRect(38,-14,14,12);X.fillRect(38,8,14,12);X.fillRect(52,-20,10,46);
 X.restore()}
// pcar(x,groundY,s,o): side-view hatchback, front = +x. o: col, t, spin (wheel speed), steam (0..1), flip, driver:{eyes,mouth,brow,sweat}, light (dash icon in window), bounce
function pcar(x,y,s=1,o={}){const t=o.t||0,col=o.col||'#e2533d',col2=o.col2||'#b93a28';X.save();X.translate(x,y-(o.bounce?Math.abs(Math.sin(t*9))*6:0));X.scale(s*(o.flip?-1:1),s);
 X.save();X.globalAlpha=.22;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,470,26,0,0,7);X.fill();X.restore();
 path(()=>{X.moveTo(-300,-250);X.lineTo(-210,-460);X.quadraticCurveTo(-200,-480,-170,-480);X.lineTo(150,-480);X.quadraticCurveTo(180,-480,200,-455);X.lineTo(330,-260);X.closePath()},col,8);
 rr(-450,-270,900,190,60,col,8);rr(-430,-160,860,40,18,col2,0);
 path(()=>{X.moveTo(-270,-265);X.lineTo(-195,-440);X.lineTo(-20,-440);X.lineTo(-20,-265);X.closePath()},'#bfe1f2',6);
 path(()=>{X.moveTo(10,-265);X.lineTo(10,-440);X.lineTo(150,-440);X.lineTo(285,-265);X.closePath()},'#bfe1f2',6);
 X.save();X.globalAlpha=.45;line([[-150,-420],[-210,-290]],14,'#fff');line([[90,-420],[40,-300]],14,'#fff');X.restore();
 if(o.driver){const d=o.driver;X.save();path(()=>{X.moveTo(10,-265);X.lineTo(10,-440);X.lineTo(150,-440);X.lineTo(285,-265);X.closePath()},null,0);X.clip();
  X.scale(o.flip?-1:1,1);const hx=(o.flip?-1:1)*120;circ(hx,-330,78,'#fff',7);ell(hx+18,-345,15,20,'#151515',0);ell(hx+52,-345,13,18,'#151515',0);circ(hx+22,-352,5,'#fff',0);circ(hx+55,-352,5,'#fff',0);
  path(()=>{X.arc(hx+34,-305,20,0.15,Math.PI-.15)},null,6);path(()=>{X.moveTo(hx-20,-405);X.quadraticCurveTo(hx+10,-450,hx+30,-400)},null,8);X.restore()}
 line([[-60,-230],[-20,-230]],10,'#333');line([[150,-230],[190,-230]],10,'#333');
 rr(400,-230,52,44,14,'#ffe9a0',5);rr(-452,-235,36,50,10,'#ff5a4a',5);
 for(const wx of[-270,270]){circ(wx,-80,98,'#222',8);circ(wx,-80,52,'#c8ccd2',6);const a=t*(o.spin||0);for(let k=0;k<5;k++){const b=a+k*Math.PI*2/5;line([[wx,-80],[wx+Math.cos(b)*44,-80+Math.sin(b)*44]],7,'#8a9099')}circ(wx,-80,12,'#555',0)}
 X.restore();
 if(o.steam>0){for(let k=0;k<7;k++){const ph=(t*.5+k/7)%1;X.save();X.globalAlpha=o.steam*.55*Math.sin(ph*Math.PI);X.fillStyle='#eef1f5';X.beginPath();X.arc(x+(o.flip?-1:1)*(320*s)+Math.sin(k*2+t)*30,y-300*s-ph*420,(40+ph*70)*s,0,7);X.fill();X.restore()}}}
// towtruck(x,groundY,s,o): yellow tow truck, front = +x; o.flip, o.t, o.spin, o.beacon (blink)
function towtruck(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 X.save();X.globalAlpha=.22;X.fillStyle='#000';X.beginPath();X.ellipse(-80,8,560,26,0,0,7);X.fill();X.restore();
 rr(-620,-250,700,90,20,'#5b6270',8);line([[-600,-250],[-450,-420],[-380,-420]],18,'#3b4250');circ(-380,-410,16,'#3b4250',0);line([[-380,-410],[-380,-300]],6,'#222');
 rr(60,-480,330,400,46,'#f2b632',8);path(()=>{X.moveTo(110,-450);X.lineTo(300,-450);X.lineTo(360,-320);X.lineTo(110,-320);X.closePath()},'#bfe1f2',6);
 rr(380,-200,40,60,12,'#ffe9a0',5);rr(-640,-190,640,80,20,'#f2b632',8);txt('TOW',-300,-148,52,'#3b4250',0);
 const on=Math.sin(t*14)>0;rr(170,-530,90,50,18,on?'#ff8a00':'#a85a10',6);if(on)glow(215,-505,160,'255,150,30',.6);
 for(const wx of[-470,-200,250]){circ(wx,-80,90,'#222',8);circ(wx,-80,44,'#c8ccd2',6);const a=t*(o.spin||0);line([[wx,-80],[wx+Math.cos(a)*36,-80+Math.sin(a)*36]],7,'#8a9099')}
 X.restore()}

// ---- craft ladder 2026-11-17 22:00: Secret Santa kit ----
// fresh(x,y,s,o): little pine-tree car air freshener on a string (top of string at x,y). o: t (swing), price ('€2.49' sticker), string (len px, default 70)
function fresh(x,y,s=1,o={}){const t=o.t||0,L=o.string==null?70:o.string;X.save();X.translate(x,y);X.rotate(Math.sin(t*2.2)*.12*(o.swing==null?1:o.swing));X.scale(s,s);
 X.strokeStyle='#d8c08a';X.lineWidth=4;X.beginPath();X.moveTo(0,0);X.lineTo(0,L);X.stroke();X.translate(0,L);
 X.fillStyle='#2fa34a';X.strokeStyle='#151515';X.lineWidth=6;X.lineJoin='round';X.beginPath();X.moveTo(0,0);X.lineTo(34,40);X.lineTo(18,40);X.lineTo(48,82);X.lineTo(26,82);X.lineTo(60,128);X.lineTo(10,128);X.lineTo(10,150);X.lineTo(-10,150);X.lineTo(-10,128);X.lineTo(-60,128);X.lineTo(-26,82);X.lineTo(-48,82);X.lineTo(-18,40);X.lineTo(-34,40);X.closePath();X.fill();X.stroke();
 X.fillStyle='rgba(255,255,255,.25)';X.beginPath();X.moveTo(0,8);X.lineTo(-24,40);X.lineTo(-8,40);X.closePath();X.fill();
 if(o.price){X.save();X.translate(30,96);X.rotate(-.22);rr(-34,-17,68,34,8,'#ffd23f',4);txt(o.price,0,2,20,'#111',0,'800 ');X.restore()}
 X.restore()}
// teabox(x,y,s,o): a fancy tea gift box with a bow (bottom-centre at x,y). o: col
function teabox(x,y,s=1,o={}){const c=o.col||'#2f6d5a';X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,4,120,16,'#000',0);X.globalAlpha=1;
 rr(-110,-150,220,150,16,c,6);rr(-118,-170,236,40,12,'#3f8a72',6);rr(-14,-170,28,170,4,'#ffd23f',0);X.strokeStyle='#151515';X.lineWidth=5;X.strokeRect(-14,-170,28,170);
 X.fillStyle='#ffd23f';X.strokeStyle='#151515';X.lineWidth=5;for(const d of[-1,1]){X.beginPath();X.ellipse(d*32,-186,34,18,d*.4,0,7);X.fill();X.stroke()}circ(0,-182,14,'#ffd23f',5);
 rr(-80,-110,160,64,12,'#f6efe1',4);txt('TEA 🍵',0,-76,30,'#2f4a3f',0,"800 ");X.restore()}
// santabowl(x,y,s): Santa hat turned upside down as the name-draw bowl, paper slips sticking out
function santabowl(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);for(let k=0;k<4;k++){X.save();X.rotate(-.5+k*.32);rr(-14,-120,28,70,4,'#fff',4);X.restore()}
 X.fillStyle='#e2353a';X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.moveTo(-90,-60);X.quadraticCurveTo(-80,40,0,46);X.quadraticCurveTo(80,40,90,-60);X.closePath();X.fill();X.stroke();rr(-100,-78,200,36,18,'#fff',6);X.restore()}

// ---------- craft ladder 2026-11-18: bathroom / shower kit ----------
// bathroom(t,{water,steam,dim}): tiled wall, chrome shower head at top-left, glass screen edge, optional falling water + steam
function bathroom(t,o={}){const g=X.createLinearGradient(0,-200,0,1500);g.addColorStop(0,'#cfe6ee');g.addColorStop(1,'#a9cbd8');X.fillStyle=g;X.fillRect(-3000,-3000,8000,6000);
 X.strokeStyle='rgba(255,255,255,.55)';X.lineWidth=5;for(let y=-200;y<1500;y+=130){X.beginPath();X.moveTo(-3000,y);X.lineTo(5000,y);X.stroke()}for(let x=-1000;x<2200;x+=130)for(let y=-200;y<1500;y+=260){X.beginPath();X.moveTo(x,y);X.lineTo(x,y+130);X.stroke();X.beginPath();X.moveTo(x+65,y+130);X.lineTo(x+65,y+260);X.stroke()}
 X.fillStyle='#e9eef2';X.fillRect(-3000,1500,8000,1500);X.fillStyle='rgba(0,0,0,.08)';X.fillRect(-3000,1500,8000,24);
 if(o.shower!==0){const sx=o.sx||300;X.save();X.translate(0,o.sy||0);X.lineCap='round';X.strokeStyle='#9aa7b4';X.lineWidth=18;X.beginPath();X.moveTo(-40,330);X.lineTo(sx-40,330);X.lineTo(sx,390);X.stroke();X.fillStyle='#c8d2dc';X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.ellipse(sx+20,410,110,34,.12,0,7);X.fill();X.stroke();
  if(o.water){X.globalAlpha=.55*o.water;for(let k=0;k<26;k++){const xx=sx-70+k*7.5+Math.sin(k)*6,q=(t*2.6+rnd(k))%1;X.strokeStyle=k%2?'#4aa3d8':'#7fc4e8';X.lineWidth=5;X.beginPath();X.moveTo(xx+q*(k-13)*14,450+q*900);X.lineTo(xx+(q+.06)*(k-13)*14,450+(q+.06)*900);X.stroke()}X.globalAlpha=1}X.restore()}
 if(o.glass){X.save();X.globalAlpha=.18;X.fillStyle='#e8f6ff';X.fillRect(o.glass,200,1200,1300);X.globalAlpha=.6;X.strokeStyle='#d4dde6';X.lineWidth=14;X.beginPath();X.moveTo(o.glass,200);X.lineTo(o.glass,1500);X.stroke();X.restore()}
 if(o.steam){X.save();for(let k=0;k<9;k++){const q=(t*.15+rnd(k+4))%1;X.globalAlpha=.22*o.steam*Math.sin(q*Math.PI);X.fillStyle='#ffffff';X.beginPath();X.ellipse(rnd(k)*1100,1300-q*1200,220,120,0,0,7);X.fill()}X.restore()}
 if(o.dim){X.save();X.globalCompositeOperation='multiply';X.fillStyle=`rgba(120,130,170,${.4*o.dim})`;X.fillRect(-3000,-3000,8000,8000);X.restore()}}
// sink(x,y,s): small wall basin with a tap and a mirror edge (a perch for memo())
function sink(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-170,-10,340,70,30,'#ffffff',7);X.fillStyle='#dfe7ee';X.beginPath();X.ellipse(0,10,130,26,0,0,7);X.fill();rr(-28,60,56,260,10,'#f4f6f8',6);rr(-16,-70,32,64,8,'#b8c4cf',5);rr(-16,-70,70,22,8,'#b8c4cf',5);X.restore()}
// drops(x,y,t,a): water drips falling off a wet character (x,y = top of the area)
function drops(x,y,t,a=1,w=240){X.save();X.globalAlpha=.8*a;for(let k=0;k<8;k++){const q=(t*1.4+rnd(k+9))%1;const xx=x-w/2+rnd(k)*w,yy=y+q*520;X.fillStyle='#7fc4e8';X.beginPath();X.moveTo(xx,yy-16);X.quadraticCurveTo(xx+9,yy,xx,yy+6);X.quadraticCurveTo(xx-9,yy,xx,yy-16);X.fill()}X.restore()}
// ffplate(x,y,s,n): plate of fish fingers (n left) with a dollop of ketchup
function ffplate(x,y,s=1,n=5){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='rgba(0,0,0,.18)';X.beginPath();X.ellipse(0,18,170,34,0,0,7);X.fill();X.fillStyle='#ffffff';X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.ellipse(0,0,165,42,0,0,7);X.fill();X.stroke();X.strokeStyle='#d6dde4';X.lineWidth=4;X.beginPath();X.ellipse(0,0,120,28,0,0,7);X.stroke();
 for(let k=0;k<n;k++){X.save();X.translate(-80+k*38,-14+(k%2)*8);X.rotate(-.25+k*.12);rr(-46,-13,92,26,10,'#e8a33a',5);X.fillStyle='rgba(255,255,255,.25)';X.fillRect(-36,-8,60,5);X.restore()}X.fillStyle='#d8322c';X.beginPath();X.arc(110,-6,22,0,7);X.fill();X.restore()}
// ffinger(x,y,s,rot): one fish finger (for holdR/holdL)
function ffinger(x,y,s=1,rot=-.4){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-55,-15,110,30,11,'#e8a33a',6);X.fillStyle='rgba(255,255,255,.3)';X.fillRect(-42,-9,70,6);X.restore()}
