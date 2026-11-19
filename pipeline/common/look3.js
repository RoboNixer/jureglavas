// ================= LOOK v3 "ILLUSTRATED" (owner 2026-11-13: clean storybook-cartoon look like the top stickman-allegory channels) =================
// Loaded after toonlib.js + look2.js. Big round-head stickmen with huge expressive eyes, thin long limbs, mitten hands,
// soft painted backgrounds with depth blur, and a white top LABEL card that names what the scene is about.
// NEVER copy another channel's characters: our cast = YOU (white head, one hair curl), HER (white head, bun + lashes), MEMO (the Memopai mascot), plus props.

// ---------- character ----------
// craft ladder 2026-11-19 18:00: kneeL/kneeR (deg) bend the knees; side-view SIT = {legL:82,kneeL:82,legR:-82,kneeR:-82} (hip at y-340*s, put y = seat top + 340*s; flip mirrors)
// sm(x,y,s,o): feet at (x,y). Height ~1000*s px. o: col (head/body fill, default white head + black limbs), limb (limb colour), out (outline),
//  armL/armR (deg from straight down; 90 = sideways, 160 = up), bendL/bendR (elbow deg), legL/legR (deg), walk (time -> walk cycle), crawl:1 (on all fours),
//  look:[lx,ly] (-1..1 pupils), lid (0..1 upper eyelid, .45 = smug/tired), brow:'worried'|'angry'|'up'|'smug'|'flat'|'sad', mouth:'smile'|'smirk'|'frown'|'o'|'open'|'tongue'|'grin'|'wavy'|'flat',
//  eyes:'wide'|'closed'|'happy'|'wink'|'dizzy', sweat, blush, tear, hair:'curl'|'bun'|'spike', hairc, lashes, flip, tilt (deg head tilt), lean (deg body), holdR/holdL(fn(hx,hy) in WORLD coords, drawn on top), talk (time -> mouth flaps)
function sm(x,y,s,o={}){const t=o.t||0,OUT=o.out||'#151515',col=o.col||'#ffffff',limb=o.limb||(o.col?o.col:(o.pj?(o.pj===1?'#9fc0ec':o.pj):OUT)),fl=o.flip?-1:1;
 const w=o.walk;const ph=w!=null?Math.sin(w*9):0;const bob=w!=null?Math.abs(Math.cos(w*9))*14:0;const br=Math.sin(t*2.2)*4;
 const P=(lx,ly)=>[x+lx*s*fl,y+ly*s];const hands={};
 X.save();X.lineCap='round';X.lineJoin='round';
 // shadow
 if(!o.noshadow){X.save();X.globalAlpha=.22;X.fillStyle='#1a1020';X.beginPath();X.ellipse(x,y+6*s,170*s,26*s,0,0,7);X.fill();X.restore();}
 const LW=(o.pj?24:17)*s,limbStroke=(pts)=>{if(o.col||o.pj){X.strokeStyle=OUT;X.lineWidth=LW+9*s;poly(pts);}X.strokeStyle=limb;X.lineWidth=LW;poly(pts)};
 const poly=(pts)=>{X.beginPath();X.moveTo(...P(...pts[0]));for(let i=1;i<pts.length;i++)X.lineTo(...P(...pts[i]));X.stroke()};
 const lean=(o.lean||0)*Math.PI/180;
 let hipY=-340-bob*.3,neckY=-650-bob+br*.3;const nx=Math.sin(lean)*310;
 if(o.crawl){hipY=-280;neckY=-390;}
 const hip=o.crawl?[-140,hipY]:[0,hipY],neck=o.crawl?[170,neckY]:[nx,neckY];
 // legs
 const leg=(d,a,bend)=>{const A=(a)*Math.PI/180;const kx=hip[0]+d*14+Math.sin(A)*d*170,ky=hip[1]+Math.cos(A)*170;const B=(a-(bend||0))*Math.PI/180;const fx=kx+Math.sin(B)*d*170,fy=Math.min(-4,ky+Math.cos(B)*170);
  limbStroke([[hip[0]+d*12,hip[1]],[kx,ky],[fx,fy]]);const[sx,sy]=P(fx+d*20,fy+6);X.save();X.translate(sx,sy);X.rotate(fl*d*.08);X.fillStyle=o.col?OUT:OUT;X.beginPath();X.ellipse(0,0,46*s,21*s,0,0,7);X.fill();if(o.col){X.fillStyle=limb;X.beginPath();X.ellipse(0,-2*s,38*s,14*s,0,0,7);X.fill()}X.restore()};
 if(o.crawl){const cw=Math.sin(t*6)*14;limbStroke([[-140,-280],[-30+cw,-30],[-330+cw,-24]]);limbStroke([[-140,-280],[-90-cw,-30],[-400-cw,-24]]);X.fillStyle=OUT;for(const fx of[-350+cw,-420-cw]){const[a,b]=P(fx,-20);X.beginPath();X.ellipse(a,b,40*s,18*s,0,0,7);X.fill()}}
 else{leg(-1,(o.legL!=null?o.legL:6)+ph*26,o.kneeL!=null?o.kneeL:(w!=null?Math.max(0,ph)*30:0));leg(1,(o.legR!=null?o.legR:6)-ph*26,o.kneeR!=null?o.kneeR:(w!=null?Math.max(0,-ph)*30:0))}
 // body
 limbStroke([hip,o.crawl?[10,-350]:[nx*.5,(hipY+neckY)/2],neck]);
 // craft ladder 2026-11-17: o.dress (colour) = A-line dress over the body; o.bow (colour) = bow tie at the neck
 if(o.dress&&!o.crawl){const d1=P(neck[0]-46,neck[1]+40),d2=P(neck[0]+46,neck[1]+40),d3=P(hip[0]+150,hip[1]+190),d4=P(hip[0]-150,hip[1]+190);X.fillStyle=o.dress;X.strokeStyle=OUT;X.lineWidth=8*s;X.beginPath();X.moveTo(...d1);X.lineTo(...d2);X.quadraticCurveTo(...P(hip[0]+70,hip[1]-40),...d3);X.quadraticCurveTo(...P(hip[0],hip[1]+215),...d4);X.quadraticCurveTo(...P(hip[0]-70,hip[1]-40),...d1);X.fill();X.stroke();X.fillStyle='rgba(0,0,0,.06)';X.beginPath();X.moveTo(...P(hip[0]+20,hip[1]-60));X.lineTo(...d3);X.quadraticCurveTo(...P(hip[0]+60,hip[1]+205),...P(hip[0]+40,hip[1]+200));X.fill()}
// craft ladder 2026-11-19: o.pj (true or colour) = striped pyjama top (neck to below the hip, pocket, collar) + thick pale sleeves/legs
 if(o.pj&&!o.crawl){const pc=o.pj===1?'#9fc0ec':o.pj;const a=P(neck[0]-70,neck[1]+20),b=P(neck[0]+70,neck[1]+20),c=P(hip[0]+95,hip[1]+70),d=P(hip[0]-95,hip[1]+70);X.save();X.fillStyle=pc;X.strokeStyle=OUT;X.lineWidth=8*s;X.beginPath();X.moveTo(...a);X.lineTo(...b);X.lineTo(...c);X.lineTo(...d);X.closePath();X.fill();X.save();X.clip();X.strokeStyle='rgba(255,255,255,.8)';X.lineWidth=12*s;for(let k=-4;k<=4;k++){X.beginPath();X.moveTo(...P(neck[0]+k*30,neck[1]));X.lineTo(...P(hip[0]+k*40,hip[1]+90));X.stroke()}X.restore();X.stroke();
  X.fillStyle='#ffffff';X.beginPath();X.moveTo(...P(neck[0]-46,neck[1]+16));X.lineTo(...P(neck[0],neck[1]+70));X.lineTo(...P(neck[0]+46,neck[1]+16));X.closePath();X.fill();X.stroke();
  for(let k=0;k<3;k++){const[bx,by]=P(neck[0]+(hip[0]-neck[0])*(.3+k*.25),neck[1]+(hip[1]-neck[1])*(.3+k*.25)+40);X.beginPath();X.arc(bx,by,7*s,0,7);X.fillStyle='#fff';X.fill();X.stroke()}X.restore()}
// craft ladder 2026-11-19 16:00: o.tee (colour) = band/tour T-shirt (crew neck, short sleeves, big star print, 'TOUR' text)
 // craft ladder 2026-11-19 18:00: o.overalls (colour) = work overalls (bib + straps + pocket), e.g. the school janitor
 if(o.overalls&&!o.crawl){const oc=o.overalls===1?'#3f6fb0':o.overalls;X.save();X.fillStyle=oc;X.strokeStyle=OUT;X.lineWidth=8*s;const q=(a,b)=>P(a,b);
  X.beginPath();X.moveTo(...q(neck[0]-62,neck[1]+120));X.lineTo(...q(neck[0]+62,neck[1]+120));X.lineTo(...q(hip[0]+86,hip[1]+60));X.lineTo(...q(hip[0]-86,hip[1]+60));X.closePath();X.fill();X.stroke();
  X.lineWidth=14*s;X.beginPath();X.moveTo(...q(neck[0]-52,neck[1]+125));X.lineTo(...q(neck[0]-70,neck[1]+20));X.moveTo(...q(neck[0]+52,neck[1]+125));X.lineTo(...q(neck[0]+70,neck[1]+20));X.strokeStyle=oc;X.stroke();
  X.lineWidth=6*s;X.strokeStyle=OUT;const[px,py]=q((neck[0]+hip[0])/2,(neck[1]+hip[1])/2+40);X.beginPath();X.rect(px-34*s,py-26*s,68*s,52*s);X.stroke();
  X.fillStyle='#ffd23f';for(const d of[-1,1]){const[bx,by]=q(neck[0]+d*52,neck[1]+128);X.beginPath();X.arc(bx,by,10*s,0,7);X.fill();X.stroke()}X.restore()}
 if(o.tee&&!o.crawl){const tc=o.tee===1?'#7a3fd0':o.tee;const a=P(neck[0]-78,neck[1]+18),b=P(neck[0]+78,neck[1]+18),c=P(hip[0]+88,hip[1]+40),d=P(hip[0]-88,hip[1]+40);X.save();X.fillStyle=tc;X.strokeStyle=OUT;X.lineWidth=8*s;
  X.beginPath();X.moveTo(...a);X.lineTo(...P(neck[0]-128,neck[1]+70));X.lineTo(...P(neck[0]-100,neck[1]+110));X.lineTo(...P(neck[0]-74,neck[1]+92));X.lineTo(...d);X.lineTo(...c);X.lineTo(...P(neck[0]+74,neck[1]+92));X.lineTo(...P(neck[0]+100,neck[1]+110));X.lineTo(...P(neck[0]+128,neck[1]+70));X.lineTo(...b);X.closePath();X.fill();X.stroke();
  X.beginPath();X.arc(...P(neck[0],neck[1]+14),30*s,0.1*Math.PI,0.9*Math.PI);X.stroke();
  const[cx,cy]=P((neck[0]+hip[0])/2,(neck[1]+hip[1])/2+20);X.fillStyle='#ffd23f';X.beginPath();for(let k=0;k<10;k++){const ang=-Math.PI/2+k*Math.PI/5,rad=(k%2?20:46)*s;X.lineTo(cx+Math.cos(ang)*rad,cy+Math.sin(ang)*rad)}X.closePath();X.fill();X.lineWidth=5*s;X.stroke();
  X.font=`900 ${26*s}px Inter`;X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('TOUR',cx,cy+66*s);X.restore()}
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
 // craft ladder 2026-11-19 18:00: o.cap (colour) = baseball/work cap with a peak towards the facing side
 if(o.cap){const cc=o.cap===1?'#2f5d8a':o.cap;X.save();X.fillStyle=cc;X.strokeStyle=OUT;X.lineWidth=8;X.beginPath();X.moveTo(-R*.98,-R*.25);X.quadraticCurveTo(-R*.95,-R*1.12,0,-R*1.08);X.quadraticCurveTo(R*.95,-R*1.12,R*.98,-R*.25);X.quadraticCurveTo(0,-R*.5,-R*.98,-R*.25);X.closePath();X.fill();X.stroke();
  X.beginPath();X.moveTo(R*.3*fl,-R*.42);X.quadraticCurveTo(R*1.25*fl,-R*.5,R*1.45*fl,-R*.22);X.quadraticCurveTo(R*.9*fl,-R*.18,R*.3*fl,-R*.28);X.closePath();X.fill();X.stroke();X.beginPath();X.arc(0,-R*1.07,10,0,7);X.fill();X.stroke();X.restore()}
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
// SAFE ZONE 2026-11-19 (owner: "nothing near the screen edges"): the card is at most 780 px wide (x 150..930), its top never above y 300,
// and the font shrinks to fit instead of the card growing. Drawn in SCREEN space.
function label3(text,p=1,y=372){if(p<=0)return;y=Math.max(y,372);X.save();X.setTransform(1,0,0,1,0,0);X.translate(540,y);const k=eo(C(p));X.scale(lerp(.6,1,k),lerp(.6,1,k));X.globalAlpha=C(p*2);
 let fs=86;X.font=`900 ${fs}px 'Inter Display',Inter,'Noto Color Emoji'`;while(X.measureText(text).width>700&&fs>46){fs-=2;X.font=`900 ${fs}px 'Inter Display',Inter,'Noto Color Emoji'`}
 const w=X.measureText(text).width+80,h=fs*1.62;X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=24;X.shadowOffsetY=8;X.fillStyle='#fff';X.beginPath();X.roundRect(-w/2,-h/2,w,h,28);X.fill();X.shadowColor='transparent';
 X.fillStyle='#111';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,fs*.05);X.restore()}

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

// ---------- craft ladder 2026-11-18 12:00: arrivals hall + cardboard sign ----------
// arrivals(t,{night,warm}) airport arrivals hall: big window (night sky + plane lights), ARRIVALS board, sliding doors, glossy floor
function arrivals(t,o={}){const n=o.night;const g=X.createLinearGradient(0,-200,0,1250);g.addColorStop(0,n?'#aeb6c6':'#e6ebf1');g.addColorStop(1,n?'#8f99ab':'#cdd5df');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 X.save();X.beginPath();X.rect(-200,380,1480,560);X.clip();const sk=X.createLinearGradient(0,380,0,940);if(n){sk.addColorStop(0,'#141c3a');sk.addColorStop(1,'#3a4772')}else{sk.addColorStop(0,'#ff9e6b');sk.addColorStop(1,'#ffd9a0')}X.fillStyle=sk;X.fillRect(-200,380,1480,560);
 if(n){for(let i=0;i<30;i++){X.globalAlpha=.4+.6*Math.abs(Math.sin(t*2+i));circ(-150+rnd(i)*1400,400+rnd(i+5)*300,2+rnd(i+2)*2,'#fff',0)}X.globalAlpha=1;const px=(t*90)%1700-300;circ(px,520,7,(t%1<.5)?'#ff4a4a':'#fff',0);glow(px,520,40,'255,120,120',.5)}else psun(820,700,90,t);
 X.fillStyle=n?'#232b45':'#a38b8a';X.fillRect(-200,860,1480,80);X.restore();
 X.fillStyle=n?'#d7dce4':'#f1f3f6';for(let k=0;k<6;k++)X.fillRect(-200+k*300,380,18,560);X.fillRect(-200,370,1480,20);X.fillRect(-200,930,1480,24);
 // board
 rr(640,130,330,90,14,'#1b1f2a',5);txt('ARRIVALS',770,176,46,'#ffd23f',0);txt('✈',915,176,46,'#ffd23f',0,'400 ');
 // sliding doors
 rr(330,960,420,300,8,n?'#6f7c93':'#b9c6d6',6);rr(340,970,195,290,4,'rgba(200,230,255,.45)',0);rr(545,970,195,290,4,'rgba(200,230,255,.45)',0);
 const fg=X.createLinearGradient(0,1240,0,2000);fg.addColorStop(0,n?'#b9c0cb':'#e2e5ea');fg.addColorStop(1,n?'#98a1ae':'#c4cad3');X.fillStyle=fg;X.fillRect(-3000,1240,8000,3000);X.strokeStyle='rgba(0,0,0,.07)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*50,1240);X.lineTo(540+k*300,2000);X.stroke()}
 X.save();X.globalAlpha=.12;rr(330,1250,420,120,10,'#fff',0);X.restore();
 if(o.warm)glow(540,700,800,'255,220,160',.35)}
// csign(x,y,s,text,{rev:0..1 marker reveal, rot, heart}) cardboard sign (taped box flap) with marker writing
function csign(x,y,s=1,text='WELCOME HOME',o={}){const rev=o.rev==null?1:o.rev;X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;
 path(()=>{X.moveTo(-210,-120);X.lineTo(205,-128);X.lineTo(214,118);X.lineTo(-206,124);X.closePath()},'#d6a76a',6);X.shadowColor='transparent';
 X.strokeStyle='rgba(120,80,30,.35)';X.lineWidth=4;X.beginPath();X.moveTo(-200,-60);X.lineTo(205,-64);X.stroke();
 rr(-60,-140,120,34,4,'rgba(240,235,200,.85)',0);
 X.save();X.beginPath();X.rect(-200,-120,400*rev,250);X.clip();const ws=text.split(' ');
 X.font="900 66px 'Comic Sans MS','Inter Display',Inter";X.fillStyle='#1a1a1a';X.textAlign='center';X.textBaseline='middle';X.save();X.rotate(-.04);X.fillText(ws[0]||'',-10,-30);X.fillText(ws.slice(1).join(' '),-30,40);X.restore();
 if(o.heart!==0){X.save();X.translate(150,50);X.rotate(.2);X.fillStyle='#e8463c';X.beginPath();X.moveTo(0,22);X.bezierCurveTo(-40,-6,-26,-38,0,-18);X.bezierCurveTo(30,-42,40,-4,0,22);X.fill();X.restore()}
 X.restore();X.restore()}

// ---------- craft ladder 2026-11-18 14:00 (Dad's 60th): dad (glasses + moustache), cake(), muffin(), bunting(), bakery(), cakebox() ----------
function specs(hx,hy,s){X.save();X.translate(hx,hy);X.scale(s,s);X.strokeStyle='#3a2a20';X.lineWidth=7;X.fillStyle='rgba(190,225,255,.16)';
 for(const d of[-1,1]){X.beginPath();X.roundRect(d*50-50,-56,100,78,22);X.fill();X.stroke()}X.beginPath();X.moveTo(-8,-22);X.quadraticCurveTo(0,-30,8,-22);X.stroke();X.restore()}
function stache(hx,hy,s,c='#9aa0aa'){X.save();X.translate(hx,hy);X.scale(s,s);X.fillStyle=c;X.strokeStyle='#151515';X.lineWidth=4;X.beginPath();
 X.moveTo(0,-6);X.bezierCurveTo(-30,-22,-62,-12,-70,10);X.bezierCurveTo(-48,4,-22,8,0,4);X.bezierCurveTo(22,8,48,4,70,10);X.bezierCurveTo(62,-12,30,-22,0,-6);X.closePath();X.fill();X.stroke();X.restore()}
// dad(x,y,s,o) = sm() with grey spiky hair + glasses + moustache (pass any sm options)
function dad(x,y,s,o={}){sm(x,y,s,Object.assign({hair:'spike',hairc:'#b8bdc6'},o));const fl=o.flip?-1:1,lk=o.look||[0,0];const hx=x+(lk[0]||0)*14*s*fl,hy=y-845*s;
 specs(hx+(lk[0]||0)*6*s*fl,hy+82*s+(lk[1]||0)*10*s,s*1.0);stache(hx,hy+(o.mouth==='open'||o.mouth==='o'||o.mouth==='grin'?100:112)*s,s*.85)}
// cake(x,y,s,{tiers,num,lit,t}) two-tier birthday cake on a stand, number candles
function cake(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.2;ell(0,10,230,26,'#000',0);X.globalAlpha=1;rr(-40,-40,80,40,8,'#e9eef5',5);ell(0,-40,230,30,'#ffffff',6);
 rr(-200,-230,400,190,26,'#ffd9e6',7);for(let k=-4;k<=4;k++)ell(k*46,-226,26,22,'#fff',5);
 line([[-196,-140],[-150,-120],[-100,-145],[-50,-118],[0,-142],[50,-118],[100,-145],[150,-120],[196,-140]],8,'#ff7aa8');
 rr(-130,-380,260,160,24,'#fff3d6',7);for(let k=-2;k<=2;k++)ell(k*50,-376,24,20,'#fff',5);
 for(let k=0;k<7;k++)circ(-110+k*37,-300+(k%2)*24,9,['#ff5a7a','#4a8fe0','#7cc47c','#ffd23f'][k%4],0);
 if(o.num){X.font="900 120px 'Inter Display',Inter";X.textAlign='center';X.textBaseline='alphabetic';const ds=String(o.num).split('');ds.forEach((d,i)=>{const dx=(i-(ds.length-1)/2)*80;X.lineWidth=10;X.strokeStyle='#151515';X.strokeText(d,dx,-390);X.fillStyle=['#4a8fe0','#ff5a7a'][i%2];X.fillText(d,dx,-390);
  if(o.lit!==0){const fy=-500+Math.sin(t*14+i)*3;glow(dx,fy,70,'255,200,90',.6);path(()=>{X.moveTo(dx,fy-30);X.quadraticCurveTo(dx+16,fy,dx,fy+12);X.quadraticCurveTo(dx-16,fy,dx,fy-30)},'#ffb02e',3)}})}
 X.restore()}
// muffin(x,y,s,{t,candle,lit}) a sad little supermarket muffin with one candle
function muffin(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 path(()=>{X.moveTo(-46,0);X.lineTo(46,0);X.lineTo(58,-62);X.lineTo(-58,-62);X.closePath()},'#7fb7e8',5);for(let k=-2;k<=2;k++)line([[k*20,-4],[k*24,-60]],3,'rgba(0,0,0,.2)');
 X.fillStyle='#8a5a34';X.strokeStyle='#151515';X.lineWidth=5;X.beginPath();X.moveTo(-66,-58);X.bezierCurveTo(-70,-120,70,-120,66,-58);X.closePath();X.fill();X.stroke();
 for(let k=0;k<5;k++)circ(-36+k*18,-82-(k%2)*10,5,'#3a2010',0);
 if(o.candle!==0){rr(-6,-160,12,64,4,'#ffffff',4);for(let k=0;k<3;k++)line([[-6,-150+k*18],[6,-142+k*18]],3,'#ff5a7a');if(o.lit!==0){const fy=-176+Math.sin(t*12)*2;glow(0,fy,50,'255,200,90',.5);path(()=>{X.moveTo(0,fy-24);X.quadraticCurveTo(12,fy,0,fy+8);X.quadraticCurveTo(-12,fy,0,fy-24)},'#ffb02e',3)}}
 X.restore()}
function plate(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);ell(0,0,110,24,'#ffffff',5);ell(0,-3,76,14,'#eef1f6',0);X.restore()}
// bunting(t,y,n) colourful party flags across the top of a room
function bunting(t,y=420,sag=60){const cs=['#ff5a7a','#ffd23f','#4a8fe0','#7cc47c','#b07ae0'];for(let r=0;r<2;r++){const x0=-120+r*600,x1=x0+720;X.strokeStyle='rgba(60,40,30,.6)';X.lineWidth=4;X.beginPath();X.moveTo(x0,y);X.quadraticCurveTo((x0+x1)/2,y+sag*2,x1,y);X.stroke();
 for(let k=1;k<10;k++){const q=k/10,bx=lerp(x0,x1,q),by=y+sag*4*q*(1-q)+Math.sin(t*2+k)*3;path(()=>{X.moveTo(bx-26,by);X.lineTo(bx+26,by);X.lineTo(bx,by+60)},cs[(k+r)%5],3)}}}
function numBalloon(x,y,s,t,txt60='60',col='#ffd23f'){const bx=x+Math.sin(t*1.4)*10*s,by=y+Math.sin(t*1.9)*8*s;X.save();X.strokeStyle='#666';X.lineWidth=3;X.beginPath();X.moveTo(bx,by+80*s);X.quadraticCurveTo(bx+20*s,by+250*s,x,y+420*s);X.stroke();
 X.font=`900 ${230*s}px 'Inter Display',Inter`;X.textAlign='center';X.textBaseline='middle';X.lineWidth=14*s;X.strokeStyle='#151515';X.strokeText(txt60,bx,by);X.fillStyle=col;X.fillText(txt60,bx,by);X.globalAlpha=.4;X.fillStyle='#fff';X.fillText(txt60,bx-8*s,by-10*s);X.restore()}
function partyRoom(t,o={}){proom(t,{win:o.win==null?820:o.win,night:0,frame:[260,560],plant:o.plant==null?0:o.plant,lamp:0,wall:o.sun?'#ffe9d2':'#efd7c2',wall2:o.sun?'#f7d3b0':'#d8b89c',curtain:'#7cc47c',curtain2:'#5aa45a'});
 bunting(t,330,55);if(o.sun)glow(820,560,700,'255,236,180',.5)}
// bakery(t,{case}) shop interior: tiled wall, chalkboard, shelves of bread, glass counter display
function bakery(t,o={}){const g=X.createLinearGradient(0,-200,0,1250);g.addColorStop(0,'#fdf0dc');g.addColorStop(1,'#f2d9b4');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 X.strokeStyle='rgba(160,110,60,.14)';X.lineWidth=3;for(let yy=560;yy<1240;yy+=70){X.beginPath();X.moveTo(-3000,yy);X.lineTo(5000,yy);X.stroke()}
 rr(80,150,400,250,16,'#2f3a33',10);txt('CAKES',280,230,62,'#fff',0);txt('to order 🎂',280,320,46,'#ffd23f',0,'700 ');
 for(const sy of[480,700]){rr(600,sy,460,22,6,'#a8723e',4);for(let k=0;k<4;k++){ell(650+k*110,sy-30,48,30,'#d99a50',5);line([[630+k*110,sy-40],[670+k*110,sy-22]],4,'rgba(255,255,255,.5)')}}
 X.fillStyle='#b88a5c';X.fillRect(-3000,1240,8000,3000)}
function counter(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-600,-330,1200,330,16,'#e8c79c',7);rr(-560,-300,1120,200,12,'rgba(210,235,255,.55)',5);line([[-560,-200],[560,-200]],5,'rgba(255,255,255,.7)');rr(-620,-360,1240,40,10,'#c0905e',6);X.restore()}
// cakebox(x,y,s) white bakery box with a ribbon and a little window
function cakebox(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,6,150,18,'#000',0);X.globalAlpha=1;rr(-140,-200,280,200,14,'#ffffff',6);rr(-150,-226,300,40,10,'#f6f6f6',6);rr(-60,-150,120,80,10,'rgba(255,200,220,.9)',4);rr(-12,-226,24,226,4,'#ff5a7a',0);
 X.save();X.translate(0,-232);path(()=>{X.moveTo(0,0);X.bezierCurveTo(-60,-40,-60,20,0,0);X.bezierCurveTo(60,-40,60,20,0,0)},'#ff5a7a',4);X.restore();X.restore()}


// craft ladder 2026-11-18 18:00 (leave_look3)
// printer(x,y,s,t): office printer sitting on a surface at y (bottom centre), blinking light, paper tray
function printer(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);rr(-150,-170,300,170,22,'#e9ecef',7);rr(-150,-170,300,46,18,'#cfd5db',6);rr(-110,-60,220,30,8,'#9aa3ad',5);
 rr(-90,-230,180,70,6,'#fff',5);circ(110,-100,12,Math.sin(t*5)>0?'#25d366':'#1b6b3a',3);rr(60,-112,30,24,5,'#3b4250',0);X.restore()}
// oooCard(x,y,s): little folded desk card '🌴 Out of office' standing on a surface at y
function oooCard(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-110,0);X.lineTo(-90,-120);X.lineTo(90,-120);X.lineTo(110,0);X.closePath()},'#fff',6);
 txt('🌴',0,-84,40,'#111',0,'400 ');txt('Out of office',0,-34,22,'#151515',0,'800 ');X.restore()}

// ---------- craft ladder 2026-11-19 09:00: cat kit ----------
// cat3(x,floorY,s,{t,look:[x,y],lid:0..1 (judging),eyes:'open'|'happy'|'closed'|'wide',mouth:'w'|'meow'|'smile'|'flat',brow:'angry'|null,col,stripe,curl:1 (loaf pose, side view),purr:1,flip})
function cat3(x,y,s=1,o={}){const t=o.t||0,col=o.col||'#f2a24e',st=o.stripe||'#d9782a',OUT='#151515',fl=o.flip?-1:1;X.save();X.translate(x,y);X.scale(s*fl,s);X.lineJoin='round';X.lineCap='round';
 X.globalAlpha=.2;ell(0,6,o.curl?230:150,22,'#000',0);X.globalAlpha=1;
 const sw=Math.sin(t*(o.purr?1.4:3.2))*(o.purr?.15:.35);
 if(o.curl){// loaf: body oval, head on the right, tail wrapped around front
  X.save();X.translate(-150,-60);X.rotate(sw*.3);X.strokeStyle=OUT;X.lineWidth=46;X.beginPath();X.moveTo(0,0);X.quadraticCurveTo(-60,40,40,70);X.quadraticCurveTo(150,90,230,60);X.stroke();X.strokeStyle=col;X.lineWidth=32;X.stroke();X.restore();
  ell(0,-90,210,95,col,7);for(let k=0;k<4;k++){X.strokeStyle=st;X.lineWidth=12;X.beginPath();X.moveTo(-120+k*60,-175);X.quadraticCurveTo(-110+k*60,-130,-125+k*60,-100);X.stroke()}
  X.save();X.translate(170,-140);catHead(t,o,col,st,OUT,.85);X.restore();
  if(o.purr){X.save();X.globalAlpha=.8;for(let k=0;k<3;k++){const q=(t*.6+k/3)%1;X.globalAlpha=(1-q)*.9;txt(k%2?'♥':'z',260+q*60+k*20,-330-q*160,46-q*10,k%2?'#ff5a7a':'#6a7aa8',0)}X.restore()}
  X.restore();return}
 // tail
 X.save();X.translate(90,-40);X.rotate(sw);X.strokeStyle=OUT;X.lineWidth=40;X.beginPath();X.moveTo(0,0);X.bezierCurveTo(110,-10,150,-120,90,-210);X.stroke();X.strokeStyle=col;X.lineWidth=26;X.stroke();X.restore();
 // body (sitting pear)
 path(()=>{X.moveTo(-120,0);X.bezierCurveTo(-150,-120,-100,-260,0,-270);X.bezierCurveTo(100,-260,150,-120,120,0);X.closePath()},col,7);
 path(()=>{X.moveTo(-55,-10);X.bezierCurveTo(-70,-120,-40,-210,0,-215);X.bezierCurveTo(40,-210,70,-120,55,-10);X.closePath()},'#fff3e2',0);
 for(let k=0;k<3;k++){X.strokeStyle=st;X.lineWidth=12;X.beginPath();X.moveTo(-128+k*6,-60-k*55);X.lineTo(-90+k*6,-70-k*55);X.stroke();X.beginPath();X.moveTo(128-k*6,-60-k*55);X.lineTo(90-k*6,-70-k*55);X.stroke()}
 // paws
 ell(-45,-8,40,24,col,6);ell(45,-8,40,24,col,6);
 X.save();X.translate(0,-300);catHead(t,o,col,st,OUT,1);X.restore();X.restore()}
function catHead(t,o,col,st,OUT,k){X.scale(k,k);
 for(const d of[-1,1]){path(()=>{X.moveTo(d*60,-110);X.lineTo(d*120,-215);X.lineTo(d*140,-70);X.closePath()},col,7);path(()=>{X.moveTo(d*80,-115);X.lineTo(d*118,-180);X.lineTo(d*126,-95);X.closePath()},'#ffb3c0',0)}
 ell(0,0,150,125,col,7);
 const hg=X.createRadialGradient(-50,-60,10,0,0,170);hg.addColorStop(0,'rgba(255,255,255,.25)');hg.addColorStop(1,'rgba(0,0,0,.10)');X.fillStyle=hg;X.beginPath();X.ellipse(0,0,146,121,0,0,7);X.fill();
 for(let k=-1;k<=1;k++){X.strokeStyle=st;X.lineWidth=11;X.beginPath();X.moveTo(k*34,-122);X.lineTo(k*28,-80);X.stroke()}
 ell(0,52,70,46,'#fff3e2',0);
 const lk=o.look||[0,0],E=o.eyes||'open',lid=o.lid||0;
 for(const d of[-1,1]){const ex=d*58,ey=-10;
  if(E==='happy'||E==='closed'){X.strokeStyle=OUT;X.lineWidth=8;X.beginPath();if(E==='happy')X.arc(ex,ey+12,26,Math.PI*1.15,Math.PI*1.85);else{X.moveTo(ex-26,ey);X.quadraticCurveTo(ex,ey+16,ex+26,ey)}X.stroke();continue}
  const R=E==='wide'?50:44;ell(ex,ey,R*.92,R,'#d8f07a',6);
  const px=ex+lk[0]*14,py=ey+lk[1]*14;X.fillStyle=OUT;X.beginPath();X.ellipse(px,py,E==='wide'?20:12,R*.78,0,0,7);X.fill();circ(px-8,py-16,7,'#fff',0);
  if(lid>0){X.fillStyle=col;X.beginPath();X.moveTo(ex-R-4,ey-R-6);X.lineTo(ex+R+4,ey-R-6);X.lineTo(ex+R+4,ey-R+lid*R*1.25+(o.brow==='angry'?-d*10:0));X.lineTo(ex-R-4,ey-R+lid*R*1.25+(o.brow==='angry'?d*10:0));X.closePath();X.fill();X.strokeStyle=OUT;X.lineWidth=7;X.beginPath();X.moveTo(ex-R+2,ey-R+lid*R*1.25+(o.brow==='angry'?d*10:0));X.lineTo(ex+R-2,ey-R+lid*R*1.25+(o.brow==='angry'?-d*10:0));X.stroke()}}
 path(()=>{X.moveTo(-14,30);X.lineTo(14,30);X.lineTo(0,46);X.closePath()},'#ff8fa3',4);
 const M=o.mouth||'w';X.strokeStyle=OUT;X.lineWidth=6;
 if(M==='meow'){const op=.6+.4*Math.abs(Math.sin(t*5));path(()=>{X.ellipse(0,74,26,30*op,0,0,7)},'#7a1f2e',6);ell(0,88,14,8*op,'#ff7a90',0)}
 else if(M==='flat'){X.beginPath();X.moveTo(-22,66);X.lineTo(22,66);X.stroke()}
 else{X.beginPath();X.moveTo(0,46);X.lineTo(0,56);X.moveTo(-30,56);X.quadraticCurveTo(-15,72,0,56);X.quadraticCurveTo(15,72,30,56);X.stroke()}
 X.strokeStyle='rgba(20,20,20,.7)';X.lineWidth=4;for(const d of[-1,1])for(let k=0;k<3;k++){X.beginPath();X.moveTo(d*60,40+k*14);X.lineTo(d*170,22+k*26);X.stroke()}}
// catbowl(x,floorY,s,fill 0..1)
function catbowl(x,y,s=1,fill=0){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,4,130,16,'#000',0);X.globalAlpha=1;
 if(fill>0){for(let k=0;k<14;k++){const a=-80+(k*29)%160,b=-62-((k*17)%3)*10*fill;ell(a,b,18,13,'#a0603a',3)}}
 path(()=>{X.moveTo(-120,-60);X.lineTo(120,-60);X.lineTo(95,0);X.lineTo(-95,0);X.closePath()},'#4a8fe0',7);ell(0,-60,120,20,fill>0?'#a0603a':'#2f63a8',6);
 if(fill>0)for(let k=0;k<9;k++)ell(-80+k*20,-64-(k%3)*6,14,10,'#b8744a',3);
 txt('🐟',0,-26,34,'#fff',0,'400 ');X.restore()}
// pouch(x,y,s,rot,{open,empty}) cat-food foil pouch
function pouch(x,y,s=1,rot=0,o={}){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);
 path(()=>{X.moveTo(-60,-90);X.lineTo(60,-90);X.lineTo(66,90);X.quadraticCurveTo(0,104,-66,90);X.closePath()},'#7b5cd6',6);
 if(!o.open){rr(-62,-104,124,22,4,'#9a80ea',5)}else{path(()=>{X.moveTo(-60,-90);X.lineTo(-40,-112);X.lineTo(-20,-90);X.lineTo(0,-108);X.lineTo(20,-90);X.lineTo(40,-112);X.lineTo(60,-90)},null,5)}
 circ(0,-10,40,'#fff',0);txt('🐟',0,2,46,'#fff',0,'400 ');txt('CAT',0,62,26,'#fff',0);X.restore()}
// catbag(x,y,s) big bag of cat food
function catbag(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-80,-140);X.lineTo(80,-140);X.lineTo(95,100);X.lineTo(-95,100);X.closePath()},'#2fb37a',6);rr(-85,-160,170,30,6,'#25935f',5);circ(0,-30,52,'#fff',0);txt('🐟',0,-16,56,'#fff',0,'400 ');txt('CAT FOOD',0,62,26,'#fff',0);X.restore()}
// ---- craft ladder 2026-11-19 14:00 (eggs): grocery kit ----
// eggbox(x,y,s,o) egg carton (o.open shows 6 eggs), pineapple(x,y,s,t), gbag(x,y,s,o) paper grocery bag with stuff poking out,
// mixbowl(x,y,s,t,o) mixing bowl + whisk (o.batter), shopfront(t,o) street shop with glass sliding door, shopIn(t,o) shop aisle with shelves + glass door behind
function eggbox(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,8,130,16,'#000',0);X.globalAlpha=1;
 if(o.open){rr(-130,-150,260,60,12,'#d8c3a0',6);for(let k=0;k<3;k++)for(let j=0;j<2;j++){ell(-80+k*80,-70-j*0,34,44,'#fff6e8',5);ell(-90+k*80,-82,8,12,'rgba(255,255,255,.9)',0)}}
 rr(-130,-90,260,90,14,'#e8d4b0',6);for(let k=0;k<3;k++){X.globalAlpha=.25;ell(-80+k*80,-20,30,30,'#8a6a40',0);X.globalAlpha=1}
 if(!o.open){rr(-136,-120,272,40,12,'#f2e2c4',6);txt('EGGS',0,-48,40,'#c0502a',0,'900 ');}X.restore()}
function pineapple(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);X.rotate(Math.sin(t*2)*.04);
 for(const[a,l]of[[-.6,110],[-.3,140],[0,160],[.3,140],[.6,110]]){X.save();X.translate(0,-150);X.rotate(a);path(()=>{X.moveTo(-14,0);X.quadraticCurveTo(0,-l*1.1,14,0);X.closePath()},'#3f9a45',5);X.restore()}
 ell(0,-75,62,85,'#f2b632',6);X.save();X.beginPath();X.ellipse(0,-75,58,81,0,0,7);X.clip();X.strokeStyle='rgba(150,90,20,.55)';X.lineWidth=4;
 for(let k=-6;k<7;k++){X.beginPath();X.moveTo(-80,-160+k*28);X.lineTo(80,-80+k*28);X.stroke();X.beginPath();X.moveTo(80,-160+k*28);X.lineTo(-80,-80+k*28);X.stroke()}X.restore();
 ell(-22,-100,10,22,'rgba(255,255,255,.35)',0);X.restore()}
function gbag(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,6,120,14,'#000',0);X.globalAlpha=1;
 if(o.baguette){X.save();X.rotate(-.25);rr(-30,-300,46,220,23,'#d99a50',5);X.restore()}
 if(o.leaf){for(const a of[-.4,0,.4]){X.save();X.translate(40,-200);X.rotate(a);path(()=>{X.moveTo(-10,0);X.quadraticCurveTo(0,-90,10,0);X.closePath()},'#4fae55',4);X.restore()}}
 if(o.bottle){rr(-70,-270,40,110,10,'#5fa8d8',5);rr(-62,-300,24,36,6,'#e0533d',4)}
 path(()=>{X.moveTo(-105,-200);X.lineTo(105,-200);X.lineTo(115,0);X.lineTo(-115,0);X.closePath()},o.col||'#c9925a',6);
 path(()=>{X.moveTo(-105,-200);X.lineTo(-90,-225);X.lineTo(90,-225);X.lineTo(105,-200);X.closePath()},'#b07d48',5);
 X.globalAlpha=.18;rr(-60,-150,120,90,10,'#fff',0);X.globalAlpha=1;X.restore()}
function mixbowl(x,y,s=1,t=0,o={}){X.save();X.translate(x,y);X.scale(s,s);
 X.save();X.translate(30,-90);X.rotate(.5+Math.sin(t*(o.whisk?14:0))*.12);line([[0,0],[0,-170]],12,'#7a7f88');for(let k=-1;k<=1;k++)ell(k*8,30,16+Math.abs(k)*6,46,null,4);X.restore();
 path(()=>{X.moveTo(-130,-80);X.quadraticCurveTo(-120,40,0,40);X.quadraticCurveTo(120,40,130,-80);X.closePath()},o.col||'#7fc1e6',6);
 ell(0,-80,130,26,o.batter?'#f6dc8a':'#e9f4fb',6);if(o.batter){ell(-30,-84,30,8,'rgba(255,255,255,.6)',0)}else{X.globalAlpha=.5;ell(0,-80,60,10,'#f3efe6',0);X.globalAlpha=1}
 ell(-80,-30,10,26,'rgba(255,255,255,.4)',0);X.restore()}
function shopfront(t,o={}){psky('#8fc9ff','#cfe8ff','#fff1d8',1150);pclouds(t,260);
 pblur(3,()=>{rr(-200,500,500,700,0,'#d9b8a0',0);rr(820,450,500,750,0,'#bfc9d8',0)});
 const g=X.createLinearGradient(0,1150,0,1920);g.addColorStop(0,'#c9c3b8');g.addColorStop(1,'#a8a196');X.fillStyle=g;X.fillRect(-3000,1150,8000,1200);
 rr(120,360,840,800,10,'#f4efe6',8);rr(100,330,880,140,14,'#2e8b57',8);txt('MINI MARKET',540,402,70,'#fff',0,'900 ');
 for(let k=0;k<8;k++){path(()=>{X.moveTo(100+k*110,470);X.lineTo(210+k*110,470);X.lineTo(155+k*110,540);X.closePath()},k%2?'#fff':'#e0533d',4)}
 const op=o.open||0,dx=360,dw=360;rr(dx-10,600,dw+20,560,8,'#5d6670',8);
 X.save();X.beginPath();X.rect(dx,610,dw,550);X.clip();X.fillStyle='#fdf6e2';X.fillRect(dx,610,dw,550);for(let k=0;k<4;k++){rr(dx+20,650+k*120,dw-40,16,4,'#c49a6a',0);for(let j=0;j<6;j++)rr(dx+30+j*52,610+k*120,38,40,6,['#e0533d','#ffd23f','#5fa8d8','#4fae55'][(j+k)%4],0)}X.restore();
 for(const sd of[-1,1]){const px=dx+dw/2+sd*(dw/4+op*dw/2)-dw/4;X.save();X.globalAlpha=.55;rr(px,610,dw/2,550,4,'#bfe3f5',4);X.globalAlpha=1;line([[px+30,640],[px+90,760]],6,'rgba(255,255,255,.8)');X.restore()}
 rr(180,640,140,200,10,'#bfe3f5',6);rr(760,640,140,200,10,'#bfe3f5',6);glow(540,700,500,'255,245,210',.25)}
function shopIn(t,o={}){const g=X.createLinearGradient(0,-200,0,1250);g.addColorStop(0,'#f3f6f2');g.addColorStop(1,'#dfe7df');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 for(let k=0;k<3;k++){rr(-100+k*420,180,300,30,10,'#ffffff',0);glow(50+k*420,195,200,'255,255,240',.35)}
 rr(30,330,330,880,10,'#5d6670',8);X.save();X.beginPath();X.rect(40,340,310,860);X.clip();const sg=X.createLinearGradient(0,340,0,1200);sg.addColorStop(0,'#ffb877');sg.addColorStop(1,'#ffe1b0');X.fillStyle=sg;X.fillRect(40,340,310,860);X.globalAlpha=.5;rr(40,340,155,860,0,'#d7f0ff',0);X.globalAlpha=1;X.restore();txt('IN ➜',195,300,40,'#2e8b57',0,'900 ');
 for(let r=0;r<4;r++){const sy=430+r*200;rr(470,sy+120,640,24,6,'#b9c3cc',5);
  for(let j=0;j<5;j++){const ix=500+j*120;if(r==2){eggbox(ix+50,sy+120,.42,{})}else{rr(ix,sy+20,90,100,10,['#e0533d','#ffd23f','#5fa8d8','#4fae55','#b07ae0'][(j+r)%5],5);rr(ix+15,sy+45,60,26,6,'rgba(255,255,255,.7)',0)}}}
 const fg=X.createLinearGradient(0,1240,0,1920);fg.addColorStop(0,'#cfd6d0');fg.addColorStop(1,'#aab3ac');X.fillStyle=fg;X.fillRect(-3000,1240,8000,1000);
 X.globalAlpha=.25;for(let k=-4;k<12;k++)line([[k*140,1240],[k*220-400,1920]],3,'#fff');X.globalAlpha=1}

// ---------- craft ladder 2026-11-19 16:00: ticket-drop kit ----------
// laptop3(x,y,s,{mode:'queue'|'sold'|'ok', n:'48,213', p:0..1 reveal, t}) front-facing laptop on a table, ticket-site screen with queue number / SOLD OUT / 2 tickets ✓
function laptop3(x,y,s=1,o={}){const m=o.mode||'queue',p=o.p==null?1:o.p,t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);gshadow(0,24,300,.3);
 path(()=>{X.moveTo(-300,0);X.lineTo(300,0);X.lineTo(340,30);X.lineTo(-340,30);X.closePath()},'#aab3bd',7);rr(-280,-380,560,372,22,'#2e3440',8);
 const bg=m=='sold'?'#2a1420':m=='ok'?'#0f2a1d':'#14182a';rr(-256,-356,512,324,10,bg,0);rr(-256,-356,512,52,10,'#1f6fe5',0);txt('🎟️ tickets',-150,-330,28,'#fff',0,'800 ');circ(200,-330,8,'#ff5f57',0);circ(225,-330,8,'#ffbd2e',0);
 X.save();X.globalAlpha=C(p*2);
 if(m=='queue'){txt('You are number',0,-262,30,'#b9c3e0',0,'700 ');txt('#'+(o.n||'48,213'),0,-188,92,'#ffd23f',0,'900 ');txt('in line',0,-122,30,'#b9c3e0',0,'700 ');rr(-200,-88,400,22,11,'#2a3150',0);rr(-200,-88,400*(.03+.02*Math.sin(t*2)),22,11,'#ffd23f',0)}
 else if(m=='sold'){X.save();X.translate(0,-190);X.rotate(-.12);X.scale(lerp(1.8,1,eo(C(p))),lerp(1.8,1,eo(C(p))));X.strokeStyle='#ff3b4e';X.lineWidth=12;X.strokeRect(-200,-62,400,124);txt('SOLD OUT',0,4,78,'#ff3b4e',0,'900 ');X.restore()}
 else{circ(0,-226,54,'#25d366',0);txt('✓',0,-222,66,'#fff',0,'900 ');txt('2 tickets',0,-138,56,'#fff',0,'900 ');txt('Row 12 🎉',0,-82,34,'#9be8b6',0,'800 ')}
 X.restore();X.restore()}
// lightstick(x,y,s,t,col) glowing concert light stick (held: pass world coords from holdR/holdL)
function lightstick(x,y,s=1,t=0,col='255,120,230'){X.save();X.translate(x,y);X.rotate(-.35+Math.sin(t*6)*.25);X.scale(s,s);glow(0,-150,120,col,.55);rr(-14,-60,28,90,10,'#2b2b33',5);rr(-30,-210,60,160,30,`rgb(${col})`,6);X.globalAlpha=.6;rr(-14,-196,14,120,7,'#fff',0);X.restore()}
// concert(t,o) arena: dark stage with moving coloured beams, screen glow, crowd silhouettes with raised arms + phone lights, haze
function concert(t,o={}){const g=X.createLinearGradient(0,-300,0,1500);g.addColorStop(0,'#0c0820');g.addColorStop(1,'#2a1550');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4600);
 rr(140,330,800,420,16,'#1a1238',6);const sg=X.createLinearGradient(0,330,0,750);sg.addColorStop(0,'#ff5ab4');sg.addColorStop(1,'#6a4cff');X.save();X.globalAlpha=.55+.15*Math.sin(t*3);rr(160,350,760,380,10,sg,0);X.restore();txt('★',540,540,180,'#ffd23f',0,'900 ');
 X.save();X.globalCompositeOperation='lighter';const cols=['255,80,200','90,140,255','255,220,90','120,255,200'];for(let k=0;k<4;k++){const sx=120+k*280,ang=Math.sin(t*1.3+k*1.7)*.5;X.save();X.translate(sx,240);X.rotate(ang);const bg=X.createLinearGradient(0,0,0,1400);bg.addColorStop(0,`rgba(${cols[k]},.45)`);bg.addColorStop(1,`rgba(${cols[k]},0)`);X.fillStyle=bg;X.beginPath();X.moveTo(-18,0);X.lineTo(18,0);X.lineTo(200,1400);X.lineTo(-200,1400);X.closePath();X.fill();X.restore()}X.restore();
 rr(-200,800,1480,60,0,'#120c26',0);
 pblur(2,()=>{for(let r=0;r<2;r++)for(let k=0;k<11;k++){const x=-40+k*110+(r?55:0),y=1010+r*90+Math.sin(t*5+k*1.3)*8;X.fillStyle=r?'#1c1235':'#150d2a';circ(x,y-70,34,X.fillStyle,0);rr(x-40,y-40,80,200,30,X.fillStyle,0);if((k+r)%3==0){line([[x+30,y-30],[x+60,y-130]],12,X.fillStyle);circ(x+62,y-140,7,'#fff8d0',0);glow(x+62,y-140,30,'255,248,200',.6)}}});
 X.fillStyle='rgba(30,18,60,.9)';X.fillRect(-3000,1250,8000,3000);bokeh(t,'255,140,220',10,250,900)}

// ---- craft ladder 2026-11-19 18:00: school-pickup kit ----
// school(t,o): sunny school front: painted sky, brick facade, windows with kids' drawings, big double door, 'SCHOOL' sign, wall clock, 3 wide steps (top step y≈1560), pavement. o.h,o.m clock time; o.warm = late-afternoon light
function school(t,o={}){psky(o.warm?'#8fb8e8':'#7fc0f0',o.warm?'#f6d2a8':'#cfe9ff',o.warm?'#ffe2b8':'#eaf6ff',900);pclouds(t,260,'#fbfbff','#d9e2f0',4,3);
 const g=X.createLinearGradient(0,380,0,1480);g.addColorStop(0,'#d77b5a');g.addColorStop(1,'#b9603f');X.fillStyle=g;X.fillRect(-200,380,1480,1100);
 X.save();X.globalAlpha=.18;X.strokeStyle='#5a2a1a';X.lineWidth=3;for(let y=400;y<1480;y+=46){X.beginPath();X.moveTo(-200,y);X.lineTo(1280,y);X.stroke();for(let x=-200+((y/46)%2)*55;x<1280;x+=110){X.beginPath();X.moveTo(x,y);X.lineTo(x,y+46);X.stroke()}}X.restore();
 rr(-220,350,1520,60,8,'#8a4630',7);
 for(const wx of[-60,820]){rr(wx,560,260,300,12,'#f5efe2',8);rr(wx+16,576,228,268,6,'#9fd0f0',0);X.save();X.globalAlpha=.9;txt(wx<0?'🌈':'🌻',wx+80,660,70,'#111',0,'400 ');txt(wx<0?'☀️':'🐟',wx+180,770,60,'#111',0,'400 ');X.restore();line([[wx+130,576],[wx+130,844]],8,'#f5efe2');line([[wx+16,710],[wx+244,710]],8,'#f5efe2')}
 rr(300,470,480,96,20,'#2f5d8a',8);txt('SCHOOL',540,520,62,'#ffffff',0,'900 ');
 rr(330,600,420,620,24,'#6b4a35',9);rr(350,620,182,580,14,'#2e8b6e',6);rr(548,620,182,580,14,'#2e8b6e',6);circ(512,930,12,'#ffd23f',5);circ(568,930,12,'#ffd23f',5);
 rr(370,650,140,180,10,'#bfe3f5',5);rr(570,650,140,180,10,'#bfe3f5',5);
 if(o.h!=null)wclock(950,470,.62,o.h,o.m||0);
 X.fillStyle='#cfc8bd';X.fillRect(-200,1470,1480,600);
 for(let k=0;k<3;k++){const y=1220+k*84,w=560+k*180;rr(540-w/2,y,w,90,10,k%2?'#d9d2c6':'#e6dfd3',7)}
 X.save();X.globalAlpha=.25;X.fillStyle='#000';X.fillRect(-200,1470,1480,14);X.restore();
 if(o.warm)glow(900,300,900,'255,200,140',.3);else glow(880,260,800,'255,245,210',.3)}
// sandwich(x,y,s,o): half sandwich (triangle), o.bite = bite mark, o.rot
function sandwich(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 path(()=>{X.moveTo(-70,40);X.lineTo(70,40);X.lineTo(0,-70);X.closePath()},'#f3d9a4',7);
 path(()=>{X.moveTo(-58,30);X.lineTo(58,30);X.lineTo(0,-56);X.closePath()},'#fff3d6',0);
 line([[-62,36],[62,36]],10,'#7fc35a');line([[-56,24],[56,24]],7,'#e85a4a');
 if(o.bite){X.save();X.globalCompositeOperation='destination-out';circ(0,-62,24,'#000',0);circ(22,-48,18,'#000',0);X.restore()}X.restore()}
// broom(x,y,s,rot): long-handled broom, (x,y) = where the hand holds it
function broom(x,y,s=1,rot=.15){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);line([[0,-320],[0,330]],14,'#9a6a3a');rr(-70,320,140,40,10,'#c0392b',6);
 path(()=>{X.moveTo(-80,358);X.lineTo(80,358);X.lineTo(100,470);X.lineTo(-100,470);X.closePath()},'#e8c25a',6);for(let k=-3;k<=3;k++)line([[k*24,372],[k*30,462]],4,'#b8902a');X.restore()}
// kidbag(x,y,s,col): kid's backpack seen from the side/back, drawn BEFORE the kid so it sits behind the body; (x,y) = kid's feet
function kidbag(x,y,s=1,col='#ffb02e',fl=1){X.save();X.translate(x-fl*70*s,y-560*s);X.scale(s,s);rr(-80,-110,160,220,40,col,8);rr(-60,0,120,80,20,'rgba(0,0,0,.12)',5);circ(0,-60,12,'#151515',0);X.restore()}

// ---- craft ladder 2026-11-19 20:00: front-door exterior + keys + umbrella + loading bar ----
// keys3(x,y,s,o): key ring with two keys + a tag (o.rot, o.glow); hangs from (x,y)
function keys3(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);if(o.glow)glow(0,60,140,'255,220,90',.55*o.glow);
 X.lineWidth=7;X.strokeStyle='#151515';X.beginPath();X.arc(0,24,22,0,7);X.stroke();X.strokeStyle='#c9ced6';X.lineWidth=4;X.beginPath();X.arc(0,24,22,0,7);X.stroke();
 const key=(a,c)=>{X.save();X.translate(0,40);X.rotate(a);circ(0,16,17,c,6);circ(0,16,6,'#151515',0);rr(-6,28,12,60,3,c,5);rr(6,62,12,8,2,c,4);rr(6,76,10,8,2,c,4);X.restore()};
 key(.35,'#f2c14e');key(-.3,'#c9ced6');X.save();X.translate(0,40);X.rotate(.05);rr(-18,22,36,46,8,'#e0533d',5);X.restore();X.restore()}
// umbrella3(hx,hy,s,o): open umbrella held at the handle (hx,hy) in WORLD coords; o.col, o.rot
function umbrella3(hx,hy,s=1,o={}){X.save();X.translate(hx,hy);X.rotate(o.rot||0);X.scale(s,s);const c=o.col||'#4a8fe0';
 line([[0,0],[0,-330]],9,'#151515');path(()=>{X.arc(-22,0,22,0,Math.PI)},null,8,'#151515');
 path(()=>{X.moveTo(-260,-300);X.quadraticCurveTo(0,-560,260,-300);for(let k=3;k>=-3;k--){X.quadraticCurveTo(k*86+43,-330,k*86-43+0.001,-300)}X.closePath()},c,8);
 X.save();X.globalAlpha=.25;path(()=>{X.moveTo(-90,-300);X.quadraticCurveTo(0,-520,90,-300);X.closePath()},'#fff',0);X.restore();circ(0,-440,10,'#151515',0);X.restore()}
// loadbar(x,y,s,p,t): a "brain still loading" progress bar with stripes + percent, blinking
function loadbar(x,y,s=1,p=.72,t=0){X.save();X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=16;rr(-230,-50,460,100,50,'#fff',7);X.shadowColor='transparent';
 X.save();X.beginPath();X.roundRect(-210,-30,420*p,60,30);X.clip();X.fillStyle='#ffb02e';X.fillRect(-210,-30,420,60);X.fillStyle='rgba(255,255,255,.35)';const off=(t*60)%60;for(let k=-2;k<10;k++){X.beginPath();X.moveTo(-210+k*60+off,30);X.lineTo(-180+k*60+off,-30);X.lineTo(-150+k*60+off,-30);X.lineTo(-180+k*60+off,30);X.fill()}X.restore();
 rr(-210,-30,420,60,30,null,5);if(Math.sin(t*5)>-.3)txt(Math.round(p*100)+'%',0,2,40,'#151515',0,'900 ');X.restore()}
// housefront(t,o): street view of a front door with steps + a window showing the hallway hook (o.keys: keys hang inside, o.rain, o.sun, o.door 0..1 open, o.glowKeys)
// door spans x 500..800, door bottom/top-step surface y=1300, lower step surface y=1390, pavement from 1480
function housefront(t,o={}){if(o.rain){psky('#5d6b80','#8592a6','#a7b1c0',900)}else{psky('#7fc0f0','#cfe9ff','#fff1d6',900);psun(900,240,80,t)}
 pclouds(t,220,o.rain?'#9aa5b5':'#fbfbff',o.rain?'#7c879a':'#d9e2f0',4,3);
 const g=X.createLinearGradient(0,330,0,1480);g.addColorStop(0,o.rain?'#cfc3ae':'#f3e3c4');g.addColorStop(1,o.rain?'#a99c86':'#ddc79f');X.fillStyle=g;X.fillRect(-200,330,1480,1150);
 X.save();X.globalAlpha=.16;X.strokeStyle='#5a4630';X.lineWidth=3;for(let y=360;y<1480;y+=52){X.beginPath();X.moveTo(-200,y);X.lineTo(1280,y);X.stroke()}X.restore();
 path(()=>{X.moveTo(-220,360);X.lineTo(540,120);X.lineTo(1300,360);X.closePath()},o.rain?'#6e4a3e':'#9a5a44',8);
 // window (left) with the hallway behind it
 const wx=250,wy=700;rr(wx-170,wy-190,340,380,14,'#fffaf2',8);X.save();X.beginPath();X.rect(wx-150,wy-170,300,340);X.clip();
 const ig=X.createLinearGradient(0,wy-170,0,wy+170);ig.addColorStop(0,'#f4e3c9');ig.addColorStop(1,'#e2c49c');X.fillStyle=ig;X.fillRect(wx-150,wy-170,300,340);glow(wx,wy-40,220,'255,226,170',.5);
 line([[wx-110,wy-60],[wx+110,wy-60]],10,'#7a5a3a');for(const hx of[wx-60,wx+60])line([[hx,wy-60],[hx,wy-38]],7,'#555');
 rr(wx-110,wy+70,220,100,8,'#b98a5e',5);
 if(o.keys)keys3(wx+30,wy-50,1.3,{rot:Math.sin(t*2)*.08,glow:o.glowKeys||0});
 X.restore();if(o.rain){X.save();X.globalAlpha=.25;X.fillStyle='#b8c8da';X.fillRect(wx-150,wy-170,300,340);X.restore()}
 line([[wx,wy-170],[wx,wy+170]],12,'#fffaf2');line([[wx-150,wy],[wx+150,wy]],12,'#fffaf2');rr(wx-190,wy+180,380,30,8,'#fffaf2',7);
 // door
 rr(480,520,340,800,14,'#fff8ef',8);const op=C(o.door||0);rr(500,540,300,760,8,'#1d1d24',0);
 X.save();X.translate(500,0);X.scale(1-op*.75,1);rr(0,540,300,760,8,o.doorc||'#2f6d5e',8);rr(40,600,220,260,10,'rgba(0,0,0,.12)',5);rr(40,920,220,300,10,'rgba(0,0,0,.12)',5);circ(255,930,16,'#e8c15a',6);X.restore();
 rr(590,470,120,40,10,'#fff8ef',6);txt('12',650,491,30,'#333',0,'900 ');
 // steps
 rr(400,1300,500,90,8,'#b9b2a6',7);rr(360,1390,580,90,8,'#a49d91',7);
 // pavement + plants
 const pg=X.createLinearGradient(0,1480,0,1920);pg.addColorStop(0,o.rain?'#8a8f98':'#c9c3b6');pg.addColorStop(1,o.rain?'#5f646d':'#a7a094');X.fillStyle=pg;X.fillRect(-200,1480,1480,500);
 X.save();X.globalAlpha=.25;X.strokeStyle='#333';X.lineWidth=3;for(let x=-100;x<1200;x+=240){X.beginPath();X.moveTo(x,1480);X.lineTo(x-120,1920);X.stroke()}X.restore();
 for(const bx of[60,1010]){X.fillStyle='#d8774a';X.beginPath();X.moveTo(bx-60,1480);X.lineTo(bx+60,1480);X.lineTo(bx+48,1390);X.lineTo(bx-48,1390);X.fill();for(let k=0;k<6;k++){X.save();X.translate(bx,1390);X.rotate(-1.1+k*.44);X.fillStyle=k%2?'#4f9a50':'#62b062';X.beginPath();X.ellipse(0,-70,26,80,0,0,7);X.fill();X.restore()}}
 if(o.rain){X.save();X.globalAlpha=.35;for(const[px,pw]of[[300,160],[800,120]]){X.fillStyle='#c7d3e0';X.beginPath();X.ellipse(px,1700,pw,22,0,0,7);X.fill();X.strokeStyle='#fff';X.lineWidth=3;const rr2=(t*60)%40;X.beginPath();X.ellipse(px,1700,rr2*2,rr2*.4,0,0,7);X.stroke()}X.restore()}}
