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
 if(o.pj&&!o.crawl){const pc=o.pj===1?'#9fc0ec':o.pj;const a=P(neck[0]-70,neck[1]+20),b=P(neck[0]+70,neck[1]+20),c=P(hip[0]+95,hip[1]+70),d=P(hip[0]-95,hip[1]+70);X.save();X.fillStyle=pc;X.strokeStyle=OUT;X.lineWidth=8*s;X.beginPath();X.moveTo(...a);X.lineTo(...b);X.lineTo(...c);X.lineTo(...d);X.closePath();X.fill();X.save();X.clip();X.strokeStyle='rgba(255,255,255,.8)';X.lineWidth=12*s;for(let k=-4;k<=4;k++){X.beginPath();X.moveTo(...P(neck[0]+k*30,neck[1]));X.lineTo(...P(hip[0]+k*40,hip[1]+90));X.stroke()}X.restore();X.beginPath();X.moveTo(...a);X.lineTo(...b);X.lineTo(...c);X.lineTo(...d);X.closePath();X.stroke();
  X.fillStyle='#ffffff';X.beginPath();X.moveTo(...P(neck[0]-46,neck[1]+16));X.lineTo(...P(neck[0],neck[1]+70));X.lineTo(...P(neck[0]+46,neck[1]+16));X.closePath();X.fill();X.stroke();
  for(let k=0;k<3;k++){const[bx,by]=P(neck[0]+(hip[0]-neck[0])*(.3+k*.25),neck[1]+(hip[1]-neck[1])*(.3+k*.25)+40);X.beginPath();X.arc(bx,by,7*s,0,7);X.fillStyle='#fff';X.fill();X.stroke()}X.restore()}
// craft ladder 2026-11-19 22:00: o.num with o.tee = football shirt (big shirt number instead of star + TOUR)
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
  const[cx,cy]=P((neck[0]+hip[0])/2,(neck[1]+hip[1])/2+20);
  if(o.num!=null){X.font=`900 ${92*s}px Inter`;X.textAlign='center';X.textBaseline='middle';X.lineWidth=10*s;X.strokeStyle=OUT;X.strokeText(String(o.num),cx,cy+10*s);X.fillStyle='#fff';X.fillText(String(o.num),cx,cy+10*s);X.restore()}
  else{X.fillStyle='#ffd23f';X.beginPath();for(let k=0;k<10;k++){const ang=-Math.PI/2+k*Math.PI/5,rad=(k%2?20:46)*s;X.lineTo(cx+Math.cos(ang)*rad,cy+Math.sin(ang)*rad)}X.closePath();X.fill();X.lineWidth=5*s;X.stroke();
  X.font=`900 ${26*s}px Inter`;X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText('TOUR',cx,cy+66*s);X.restore()}}
// craft ladder 2026-11-18: o.towel (colour) = bath towel wrapped round the waist (with stripe + tucked corner)
 if(o.towel&&!o.crawl){const tc=o.towel===1?'#5aa9e6':o.towel;const a=P(hip[0]-78,hip[1]-70),b=P(hip[0]+78,hip[1]-70),c=P(hip[0]+92,hip[1]+120),d=P(hip[0]-92,hip[1]+120);X.fillStyle=tc;X.strokeStyle=OUT;X.lineWidth=8*s;X.beginPath();X.moveTo(...a);X.lineTo(...b);X.lineTo(...c);X.lineTo(...d);X.closePath();X.fill();X.stroke();X.strokeStyle='rgba(255,255,255,.75)';X.lineWidth=10*s;X.beginPath();X.moveTo(...P(hip[0]-86,hip[1]+88));X.lineTo(...P(hip[0]+86,hip[1]+88));X.stroke();X.strokeStyle=OUT;X.lineWidth=6*s;X.beginPath();X.moveTo(...P(hip[0]+40,hip[1]-70));X.lineTo(...P(hip[0]+55,hip[1]+40));X.stroke()}
 if(o.bow&&!o.crawl){const[bx,by]=P(neck[0],neck[1]+18);X.save();X.translate(bx,by);X.scale(s,s);X.fillStyle=o.bow;X.strokeStyle=OUT;X.lineWidth=6;for(const d of[-1,1]){X.beginPath();X.moveTo(0,0);X.lineTo(d*46,-24);X.lineTo(d*46,24);X.closePath();X.fill();X.stroke()}X.beginPath();X.arc(0,0,11,0,7);X.fill();X.stroke();X.restore()}
// craft ladder 2026-11-23: o.jumper (colour) = school jumper (V-neck with white shirt collar, ribbed hem + cuffs, thick sleeves over the arms)
 if(o.jumper&&!o.crawl){const jc=o.jumper===1?'#2f4f8a':o.jumper;X.save();X.fillStyle=jc;X.strokeStyle=OUT;X.lineWidth=8*s;const a=P(neck[0]-84,neck[1]+22),b=P(neck[0]+84,neck[1]+22),c=P(hip[0]+92,hip[1]+60),d=P(hip[0]-92,hip[1]+60);
  X.beginPath();X.moveTo(...a);X.lineTo(...b);X.lineTo(...c);X.lineTo(...d);X.closePath();X.fill();X.stroke();
  X.fillStyle='rgba(0,0,0,.18)';X.beginPath();X.moveTo(...P(hip[0]-92,hip[1]+22));X.lineTo(...P(hip[0]+92,hip[1]+22));X.lineTo(...c);X.lineTo(...d);X.closePath();X.fill();
  X.strokeStyle='rgba(0,0,0,.25)';X.lineWidth=4*s;for(let k=-4;k<=4;k++){X.beginPath();X.moveTo(...P(hip[0]+k*20,hip[1]+24));X.lineTo(...P(hip[0]+k*20,hip[1]+58));X.stroke()}
  X.strokeStyle=OUT;X.lineWidth=7*s;X.fillStyle='#ffffff';X.beginPath();X.moveTo(...P(neck[0]-50,neck[1]+20));X.lineTo(...P(neck[0],neck[1]+110));X.lineTo(...P(neck[0]+50,neck[1]+20));X.closePath();X.fill();X.stroke();
  X.fillStyle=o.tie||'#c8323c';X.beginPath();X.moveTo(...P(neck[0]-10,neck[1]+40));X.lineTo(...P(neck[0]+10,neck[1]+40));X.lineTo(...P(neck[0]+6,neck[1]+100));X.lineTo(...P(neck[0]-6,neck[1]+100));X.closePath();X.fill();X.restore()}
 // arms
 const arm=(d,a,bend)=>{const sh=[neck[0]+d*6,neck[1]+40];const A=(a!=null?a:14+(w!=null?(d>0?-ph:ph)*28:0))*Math.PI/180;const ex=sh[0]+Math.sin(A)*d*150,ey=sh[1]+Math.cos(A)*150;const B=(((a!=null?a:14)+(bend||0)))*Math.PI/180;const hx=ex+Math.sin(B)*d*140,hy=ey+Math.cos(B)*140;
  limbStroke([sh,[ex,ey],[hx,hy]]);if(o.jumper&&!o.crawl){const jc=o.jumper===1?'#2f4f8a':o.jumper,cx=ex+(hx-ex)*.82,cy=ey+(hy-ey)*.82;X.save();X.lineCap='round';X.lineJoin='round';X.strokeStyle=OUT;X.lineWidth=46*s;poly([sh,[ex,ey],[cx,cy]]);X.strokeStyle=jc;X.lineWidth=34*s;poly([sh,[ex,ey],[cx,cy]]);X.restore()}const[wx,wy]=P(hx,hy);X.save();X.translate(wx,wy);X.fillStyle=o.col?OUT:OUT;X.beginPath();X.ellipse(0,0,31*s,27*s,0,0,7);X.fill();X.beginPath();X.ellipse(-fl*d*-20*s,-16*s,12*s,16*s,-.5,0,7);X.fill();
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
 // craft ladder 2026-11-23 20:00: o.hardhat (colour or 1) = yellow construction hard hat with a full brim + centre ridge ('brain under construction')
 if(o.hardhat){const hc=o.hardhat===1?'#ffc928':o.hardhat;X.save();X.fillStyle=hc;X.strokeStyle=OUT;X.lineWidth=8;
  X.beginPath();X.moveTo(-R*.9,-R*.42);X.bezierCurveTo(-R*.95,-R*1.38,R*.95,-R*1.38,R*.9,-R*.42);X.closePath();X.fill();X.stroke();
  X.beginPath();X.ellipse(0,-R*.42,R*1.22,R*.17,0,0,7);X.fill();X.stroke();
  X.fillStyle='rgba(255,255,255,.45)';X.beginPath();X.ellipse(-R*.38,-R*.95,R*.13,R*.26,-.5,0,7);X.fill();
  X.strokeStyle='rgba(0,0,0,.28)';X.lineWidth=12;X.beginPath();X.moveTo(0,-R*1.12);X.lineTo(0,-R*.55);X.stroke();
  X.fillStyle='#ff7a1a';X.strokeStyle=OUT;X.lineWidth=5;rr(-R*.3,-R*.78,R*.6,R*.2,8,'#ff7a1a',5);X.restore()}
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
 else if(M=='flat'){X.moveTo(-26,62);X.lineTo(26,62);X.stroke()}
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

// craft ladder 2026-11-19 22:00 (football night): dog(x,y,s,{t,wag,eyes,look,scratch}) sitting dog (from vet example), ball3(x,y,s,rot) football,
// flood(x,y,t) floodlight pole + beam, goal3(x,y,s) goal with net, bench3(x,y,s) wooden sideline bench, pitch(t,{rain,goal:0,bench:[x,y,s],cx,cy,z}) floodlit five-a-side pitch at night (sets cam)
function dog(x,y,s,o={}){const t=o.t||0,fl=o.flip?-1:1,col=o.col||'#e9b873',ear=o.ear||'#9a6234',OUT='#151515';
 X.save();X.translate(x,y);X.scale(s*fl,s);X.lineCap='round';X.lineJoin='round';
 X.save();X.globalAlpha=.22;X.fillStyle='#1a1020';X.beginPath();X.ellipse(-10,6,190,24,0,0,7);X.fill();X.restore();
 // tail
 const wa=o.wag?Math.sin(t*16)*.55:Math.sin(t*2)*.12;X.save();X.translate(-150,-70);X.rotate(-.6+wa);X.strokeStyle=OUT;X.lineWidth=40;X.beginPath();X.moveTo(0,0);X.quadraticCurveTo(-60,-60,-40,-150);X.stroke();X.strokeStyle=col;X.lineWidth=26;X.stroke();X.restore();
 // haunch + hind paw
 ell(-70,-95,115,98,col,9);
 const sc=o.scratch?Math.sin(t*34):0;
 if(!o.scratch)ell(-10,-12,52,22,col,8);
 // chest/body
 ell(25,-175,88,140,col,9,-.22);ell(55,-200,42,70,'#fff3dc',0,-.22);
 // front legs (stick, like the cast) + paws
 for(const lx of[35,85]){line([[lx,-130],[lx+8,-10]],18,OUT);X.fillStyle=OUT;X.beginPath();X.ellipse(lx+22,-8,34,16,0,0,7);X.fill()}
 // scratching hind leg (in front of the body, kicking at the ear)
 if(o.scratch){const kx=-10+sc*10,ky=-150,px=40+sc*28,py=-300+sc*16;X.strokeStyle=OUT;X.lineWidth=46;X.beginPath();X.moveTo(-60,-80);X.quadraticCurveTo(kx,ky,px,py);X.stroke();X.strokeStyle=col;X.lineWidth=32;X.stroke();X.fillStyle=OUT;X.beginPath();X.ellipse(px+8,py-6,28,22,0,0,7);X.fill()}
 // head
 const hx=70,hy=-345,R=100;X.save();X.translate(hx,hy);X.rotate((o.tilt||0)*Math.PI/180+(o.scratch?sc*.06:0));
 const eA=o.scratch?Math.sin(t*34)*.15:0;
 for(const d of[-1,1]){X.save();X.translate(d*86,-46);X.rotate(d*(.35+eA));path(()=>{X.moveTo(-26,-10);X.quadraticCurveTo(d*30,-30,d*36,30);X.quadraticCurveTo(d*40,120,d*4,128);X.quadraticCurveTo(-d*34,118,-d*30,40);X.closePath()},ear,8);X.restore()}
 X.fillStyle=col;X.strokeStyle=OUT;X.lineWidth=10;X.beginPath();X.arc(0,0,R,0,7);X.fill();
 const g=X.createRadialGradient(-R*.35,-R*.45,R*.1,0,0,R*1.05);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(.7,'rgba(255,255,255,0)');g.addColorStop(1,'rgba(0,0,0,.18)');X.fillStyle=g;X.fill();X.stroke();
 ell(0,46,62,44,'#fff3dc',7);
 // eyes
 const E=o.eyes||'wide',lk=o.look||[0,0],blink=((t*1.1+.7)%3.3)<.1;
 for(const d of[-1,1]){const ex=d*40,ey=-18;
  if(E=='happy'||E=='closed'||blink){X.lineWidth=8;X.strokeStyle=OUT;X.beginPath();if(E=='happy'){X.moveTo(ex-22,ey+4);X.quadraticCurveTo(ex,ey-22,ex+22,ey+4)}else{X.moveTo(ex-22,ey);X.quadraticCurveTo(ex,ey+12,ex+22,ey)}X.stroke();continue}
  const big=E=='puppy'?1.18:1;const rx=29*big,ry=35*big;X.fillStyle='#fff';X.lineWidth=7;X.strokeStyle=OUT;X.beginPath();X.ellipse(ex,ey,rx,ry,0,0,7);X.fill();X.stroke();
  const pr=E=='puppy'?.62:.46;const px=ex+lk[0]*rx*.35,py=ey+lk[1]*ry*.35;X.fillStyle='#2a1a10';X.beginPath();X.ellipse(px,py,rx*pr,ry*pr,0,0,7);X.fill();
  X.fillStyle='#fff';X.beginPath();X.arc(px-rx*.2,py-ry*.22,rx*.2,0,7);X.fill();if(E=='puppy'){X.beginPath();X.arc(px+rx*.18,py+ry*.18,rx*.09,0,7);X.fill();X.lineWidth=7;X.beginPath();X.moveTo(ex-d*4,ey-ry-10);X.lineTo(ex+d*26,ey-ry-2);X.stroke()}}
 // nose + mouth
 ell(0,28,20,14,OUT,0);
 const M=o.mouth||'smile';X.lineWidth=6;X.strokeStyle=OUT;
 if(M=='open'||o.tongue||o.lick){X.fillStyle='#6a1818';X.beginPath();X.moveTo(-26,52);X.quadraticCurveTo(0,58,26,52);X.quadraticCurveTo(18,86,0,86);X.quadraticCurveTo(-18,86,-26,52);X.fill();X.stroke();
  const L=C(o.lick||0);if(o.tongue||L>0){X.fillStyle='#ff8fa3';X.beginPath();X.ellipse(4+L*30,84+lerp(18,-10,L)-L*40,17,26+L*30,-.2-L*.9,0,7);X.fill();X.stroke()}}
 else if(M=='o'){X.fillStyle='#5a1414';X.beginPath();X.ellipse(0,64,10,13,0,0,7);X.fill();X.stroke()}
 else{X.beginPath();X.moveTo(0,40);X.lineTo(0,52);X.moveTo(-22,52);X.quadraticCurveTo(-10,62,0,52);X.quadraticCurveTo(10,62,22,52);X.stroke()}
 X.restore();
 // itch marks
 if(o.scratch){X.strokeStyle='rgba(30,30,30,.8)';X.lineWidth=6;for(let k=0;k<3;k++){const a=-1.2+k*.5+Math.sin(t*20+k)*.1;X.beginPath();X.moveTo(hx+Math.cos(a)*140,hy+Math.sin(a)*140);X.lineTo(hx+Math.cos(a)*175,hy+Math.sin(a)*175);X.stroke()}}
 X.restore()}
function treat(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);rr(-34,-12,68,24,12,'#c98a4b',5);for(const d of[-1,1])for(const e of[-1,1])circ(d*36,e*11,13,'#c98a4b',5);circ(6,0,7,'#fff',3);X.restore()}

function ball3(x,y,s=1,rot=0){X.save();X.translate(x,y);X.scale(s,s);X.rotate(rot);circ(0,0,34,'#fff',6);
 X.fillStyle='#151515';X.beginPath();for(let k=0;k<5;k++){const a=k*1.2566-1.57;X.lineTo(Math.cos(a)*12,Math.sin(a)*12)}X.closePath();X.fill();
 for(let k=0;k<5;k++){const a=k*1.2566-1.57;line([[Math.cos(a)*12,Math.sin(a)*12],[Math.cos(a)*30,Math.sin(a)*30]],4,'#151515')}X.restore()}
function flood(x,y,t,on=1){line([[x,y],[x,y+900]],14,'#3a4150');rr(x-60,y-40,120,50,10,'#2a303c',5);for(let k=0;k<3;k++)circ(x-36+k*36,y-15,13,on?'#fffbe0':'#888',3);if(on){glow(x,y-15,260,'255,250,215',.55);X.save();X.globalAlpha=.07;X.fillStyle='#fffbe0';X.beginPath();X.moveTo(x-40,y);X.lineTo(x+(x<540?700:-700),1900);X.lineTo(x+(x<540?200:-200),1900);X.closePath();X.fill();X.restore()}}
function goal3(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.save();X.globalAlpha=.35;X.strokeStyle='#fff';X.lineWidth=2;for(let i=-250;i<=250;i+=28){X.beginPath();X.moveTo(i,-300);X.lineTo(i*.86,-20);X.stroke()}for(let j=-300;j<=-20;j+=28){X.beginPath();X.moveTo(-250,j);X.lineTo(250,j);X.stroke()}X.restore();
 line([[-260,0],[-260,-320],[260,-320],[260,0]],22,'#151515');line([[-260,0],[-260,-320],[260,-320],[260,0]],12,'#ffffff');X.restore()}
function bench3(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);for(const lx of[-300,300]){rr(lx-14,-10,28,110,6,'#5a3c25',5)}rr(-360,-40,720,44,10,'#b07a4a',6);rr(-360,-150,720,40,10,'#9c6a3e',6);for(const lx of[-300,300])rr(lx-10,-150,20,120,5,'#5a3c25',4);X.restore()}
function pitch(t,o={}){X.setTransform(1,0,0,1,0,0);
 const g=X.createLinearGradient(0,0,0,1100);g.addColorStop(0,'#0b1430');g.addColorStop(1,o.rain?'#26304a':'#2b3a66');X.fillStyle=g;X.fillRect(0,0,1080,1100);
 bokeh(t,'255,220,160',10,700,960);
 pblur(4,()=>{X.fillStyle='#1a2140';for(let i=0;i<9;i++){const bw=90+rnd(i)*90,bh=120+rnd(i+3)*200;X.fillRect(i*130-20,960-bh,bw,bh);X.fillStyle='rgba(255,220,140,.5)';for(let k=0;k<4;k++)X.fillRect(i*130+10+(k%2)*30,980-bh+20+Math.floor(k/2)*40,14,18);X.fillStyle='#1a2140'}});
 cam(o.cx||540,o.cy||1000,o.z||1,t,o.amp||.12);
 const tg=X.createLinearGradient(0,940,0,2100);tg.addColorStop(0,'#2f8a4a');tg.addColorStop(1,'#46b45c');X.fillStyle=tg;X.fillRect(-300,940,1700,1300);
 for(let i=0;i<7;i++){const y0=940+Math.pow(i/7,1.6)*1200,y1=940+Math.pow((i+.5)/7,1.6)*1200;X.fillStyle='rgba(255,255,255,.05)';X.fillRect(-300,y0,1700,y1-y0)}
 X.save();X.strokeStyle='rgba(255,255,255,.75)';X.lineWidth=8;X.beginPath();X.moveTo(-300,1010);X.lineTo(1400,1010);X.stroke();X.beginPath();X.moveTo(150,1010);X.lineTo(60,1240);X.lineTo(1020,1240);X.lineTo(930,1010);X.stroke();X.restore();
 // fence
 X.save();X.strokeStyle='rgba(200,215,235,.35)';X.lineWidth=3;for(let i=-20;i<40;i++){X.beginPath();X.moveTo(i*40,620);X.lineTo(i*40+300,1000);X.stroke();X.beginPath();X.moveTo(i*40+300,620);X.lineTo(i*40,1000);X.stroke()}X.restore();line([[-300,620],[1400,620]],8,'#6a7488');
 flood(110,330,t);flood(970,330,t);
 if(o.goal!==0)goal3(540,1010,1.0);
 if(o.bench)bench3(o.bench[0],o.bench[1],o.bench[2]||.6);
}
// ---- craft ladder 2026-11-20: parcel3(x,floorY,s,{items,t,ring,squash}) cardboard parcel with tape, shipping label, barcode and 'this side up' arrows;
// items:1 turns it into 'furniture' (mug, TV remote, little plant on top); mugDrop:0..1 animates the mug landing. ctable(x,floorY,s) small round coffee table.
function pmug(x,y,s=1,col='#ffd23f'){X.save();X.translate(x,y);X.scale(s,s);rr(-30,-70,60,70,10,col,5);X.lineWidth=7;X.strokeStyle='#151515';X.beginPath();X.arc(34,-36,17,-1.3,1.3);X.stroke();X.globalAlpha=.5;for(let k=0;k<2;k++){X.beginPath();X.moveTo(-10+k*18,-84);X.quadraticCurveTo(-22+k*18,-110,-6+k*18,-132);X.strokeStyle='#ffffff';X.lineWidth=5;X.stroke()}X.restore()}
function parcel3(x,y,s=1,o={}){const t=o.t||0,W=380,H=250,sq=o.squash||0;X.save();X.translate(x,y);X.scale(s*(1+sq*.04),s*(1-sq*.04));
 X.globalAlpha=.22;ell(0,6,W*.62,22,'#000',0);X.globalAlpha=1;
 path(()=>{X.moveTo(-W/2,-H);X.lineTo(-W/2+60,-H-60);X.lineTo(W/2+60,-H-60);X.lineTo(W/2,-H);X.closePath()},'#d9a86a',6);
 path(()=>{X.moveTo(W/2,-H);X.lineTo(W/2+60,-H-60);X.lineTo(W/2+60,-60);X.lineTo(W/2,0);X.closePath()},'#b98450',6);
 rr(-W/2,-H,W,H,4,'#c9945a',6);
 X.fillStyle='rgba(230,200,140,.85)';X.fillRect(-28,-H,56,H);X.beginPath();X.moveTo(-28+30,-H-60);X.lineTo(28+30,-H-60);X.lineTo(28,-H);X.lineTo(-28,-H);X.fill();
 rr(-W/2+30,-H+60,130,90,6,'#ffffff',3);for(let k=0;k<9;k++)X.fillRect(-W/2+44+k*11,-H+110,k%3?4:7,28);X.fillStyle='#333';X.fillRect(-W/2+44,-H+76,90,6);X.fillRect(-W/2+44,-H+90,60,6);
 X.strokeStyle='#5a3a1a';X.lineWidth=5;for(const ax of[90,140]){X.beginPath();X.moveTo(ax,-60);X.lineTo(ax,-110);X.moveTo(ax-14,-94);X.lineTo(ax,-110);X.lineTo(ax+14,-94);X.stroke()}
 if(o.ring){X.globalAlpha=.35;X.strokeStyle='#7a4a20';X.lineWidth=5;X.beginPath();X.ellipse(-90,-H-26,40,12,0,0,7);X.stroke();X.beginPath();X.ellipse(130,-H-34,36,11,0,0,7);X.stroke();X.globalAlpha=1}
 if(o.items){rr(70,-H-46,110,30,10,'#2a2d34',4);for(let k=0;k<3;k++)circ(95+k*28,-H-31,6,k?'#8a8f99':'#e0533d',0);
  const px=-30,py=-H-30;rr(px-34,py-50,68,52,8,'#d8774a',4);for(let k=0;k<5;k++){X.save();X.translate(px,py-50);X.rotate(-.9+k*.45+Math.sin(t*1.5+k)*.04);X.fillStyle=k%2?'#4f9a50':'#62b062';X.beginPath();X.ellipse(0,-40,14,42,0,0,7);X.fill();X.restore()}}
 if(o.items||o.mugDrop!=null){const md=o.mugDrop==null?1:C(o.mugDrop);if(md>0){const my=lerp(-H-520,-H-26,eo(md));pmug(-120,my,1)}}
 X.restore()}
function ctable(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.22;ell(0,6,230,22,'#000',0);X.globalAlpha=1;for(const lx of[-150,150])line([[lx,-130],[lx*1.1,0]],16,'#6a4428');ell(0,-140,230,46,'#a8724a',7);ell(0,-150,215,38,'#c48a5a',0);X.restore()}

// craft ladder 2026-11-20 14:00 (trip_look3): hotelbed(x,floorY,s,{front:1 = duvet front panel drawn OVER legs, hb,hb2 headboard cols}), nightstand3(x,y,s,{warm,lamp:0}), suitcase3(x,y,s,{open,col}), headLoop(cx,cy,t,[emoji],alpha,radius) worry icons orbiting a head
function hotelbed(x,y,s=1,o={}){// y = floor line under the bed front
 X.save();X.translate(x,y);X.scale(s,s);
 if(!o.front){gshadow(0,6,560,.3);
  // headboard
  const hg=X.createLinearGradient(0,-900,0,-420);hg.addColorStop(0,o.hb||'#7d8fb0');hg.addColorStop(1,o.hb2||'#62739a');X.fillStyle=hg;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.roundRect(-560,-900,1120,520,40);X.fill();X.stroke();
  X.strokeStyle='rgba(0,0,0,.18)';X.lineWidth=4;for(let k=-3;k<=3;k++){X.beginPath();X.moveTo(k*150,-880);X.lineTo(k*150,-400);X.stroke()}
  for(let k=-3;k<=3;k++)circ(k*150-75,-650,6,'rgba(0,0,0,.25)',0);
  // pillows
  for(const px of[-260,260]){X.save();X.translate(px,-470);X.rotate(px<0?-.04:.04);rr(-200,-90,400,170,70,'#fbfbff',7);X.strokeStyle='rgba(120,130,170,.25)';X.lineWidth=4;X.beginPath();X.moveTo(-150,0);X.quadraticCurveTo(0,30,150,0);X.stroke();X.restore()}
  // mattress top / duvet back part
  const dg=X.createLinearGradient(0,-430,0,-250);dg.addColorStop(0,'#ffffff');dg.addColorStop(1,'#e3e8f3');X.fillStyle=dg;X.lineWidth=7;X.strokeStyle='#151515';X.beginPath();X.roundRect(-600,-420,1200,200,40);X.fill();X.stroke();
 }else{
  // front of the bed: duvet front panel + runner, drawn OVER the sitter's legs
  const fg=X.createLinearGradient(0,-260,0,0);fg.addColorStop(0,'#f4f6fb');fg.addColorStop(1,'#d8deeb');X.fillStyle=fg;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.roundRect(-620,-260,1240,210,36);X.fill();X.stroke();
  X.fillStyle=o.run||'#c0504d';X.fillRect(-620,-205,1240,58);X.strokeStyle='rgba(0,0,0,.25)';X.lineWidth=4;X.strokeRect(-620,-205,1240,58);
  rr(-600,-55,1200,55,10,'#5b4636',6);
 }
 X.restore()}
function nightstand3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,150,.3);rr(-120,-260,240,260,14,'#a7724a',6);rr(-100,-200,200,70,10,'#946240',4);circ(0,-165,9,'#e8c15a',3);
 if(o.lamp!==0){glow(0,-470,o.warm?320:180,'255,214,150',o.warm?.55:.25);line([[0,-262],[0,-380]],10,'#4a3a32');path(()=>{X.moveTo(-70,-380);X.lineTo(70,-380);X.lineTo(50,-480);X.lineTo(-50,-480);X.closePath()},'#ffe6b0',6)}
 X.restore()}
function suitcase3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,170,.3);const c=o.col||'#e0533d';
 if(o.open){rr(-170,-120,340,120,18,c,7);rr(-150,-108,300,96,12,'#f6e7d6',0);rr(-120,-100,110,50,10,'#7fb2e0',4);rr(10,-96,120,40,10,'#ffd23f',4);rr(-170,-330,340,210,18,c,7);rr(-150,-312,300,170,12,'rgba(0,0,0,.12)',0)}
 else{line([[-50,-470],[-50,-360]],12,'#333');line([[50,-470],[50,-360]],12,'#333');line([[-56,-470],[56,-470]],14,'#333');rr(-150,-360,300,350,30,c,7);for(const k of[-75,0,75])line([[k,-340],[k,-30]],5,'rgba(0,0,0,.18)');circ(-110,0,16,'#222',0);circ(110,0,16,'#222',0)}
 X.restore()}
// worry icons circling the head
function headLoop(cx,cy,t,icons,a=1,rad=300){for(let i=0;i<icons.length;i++){const ang=t*1.3+i/icons.length*Math.PI*2;(typeof emo=='function'?emo:function(x,y,e,s,a){if(a<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);circ(0,0,62,'#fff',6);X.font="64px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(e,0,4);X.restore()})(cx+Math.cos(ang)*rad,cy+Math.sin(ang)*rad*.42-40,icons[i],.85,a)}}

// ---- craft ladder 2026-11-21 (toothbrush video) ----
// toothbrush(x,y,s,rot,o): (x,y) = grip point (where a hand holds it); the head points up (local -y), bristles face +x.
// o.wear 0..1 splays the tufts into a 'palm tree' fan; o.col handle colour; o.fresh>0 adds a sparkle glint.
function toothbrush(x,y,s=1,rot=0,o={}){const w=o.wear||0,col=o.col||'#3fa9f5';X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.lineCap='round';
 for(let i=0;i<7;i++){const yy=-322+i*14,c=(i-3)/3,a=c*w*1.05+(rnd(i+3)-.5)*w*.35,L=46+w*(26+rnd(i+11)*16);X.save();X.translate(14,yy);X.rotate(a);
  rr(-4,-6,L+4,12,6,i%2?'#ffffff':'#bfe6ff',3);if(o.paste&&!w)rr(L-14,-12,26,24,10,'#f3f8ff',0);X.restore()}
 rr(-16,-336,32,108,15,col,5);rr(-9,-236,18,206,9,col,5);rr(-15,-40,30,176,15,col,5);rr(-6,-10,12,110,6,'rgba(255,255,255,.35)',0);
 if(o.fresh){X.save();X.globalAlpha=C(o.fresh)*(.6+.4*Math.sin((o.t||0)*6));txt('✨',70,-360,54,'#fff',0,'400 ');X.restore()}
 X.restore()}
// mirror3(x,y,w,h): wall mirror with a soft frame and diagonal reflection streaks; (x,y) = top-left.
function mirror3(x,y,w,h){X.save();X.shadowColor='rgba(0,0,0,.18)';X.shadowBlur=18;rr(x-18,y-18,w+36,h+36,30,'#f7f4ee',6);X.shadowColor='transparent';
 const g=X.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#e6f3f8');g.addColorStop(1,'#bcd6e2');X.fillStyle=g;X.beginPath();X.roundRect(x,y,w,h,20);X.fill();
 X.save();X.beginPath();X.roundRect(x,y,w,h,20);X.clip();X.globalAlpha=.5;X.fillStyle='#ffffff';for(const [a,b] of[[.15,.08],[.38,.04]]){X.beginPath();X.moveTo(x+w*a,y+h);X.lineTo(x+w*(a+.25),y);X.lineTo(x+w*(a+.25+b),y);X.lineTo(x+w*(a+b),y+h);X.closePath();X.fill()}X.restore();X.restore()}
// tcup(x,y,s,brushes): toothbrush cup on a sink edge; (x,y)=cup bottom centre; brushes=[{col,wear}]
function tcup(x,y,s=1,brushes=[]){X.save();X.translate(x,y);X.scale(s,s);brushes.forEach((b,i)=>toothbrush(-14+i*30,-80,.62,(i-(brushes.length-1)/2)*.28,b));
 rr(-60,-150,120,150,22,'#7fd1c3',6);rr(-44,-136,18,110,9,'rgba(255,255,255,.35)',0);X.restore()}

// ---------- craft ladder 2026-11-21 12:00 (grey tick): WhatsApp delivery ticks, a WhatsApp chat with ticks + a contact avatar, phone-on-charger prop, wall key hook ----------
// watick(x,y,s,kind): kind 1 = single grey tick (sent, NOT delivered), 2 = double grey (delivered), 3 = double blue (read). (x,y) = right end.
function watick(x,y,s=1,kind=1){X.save();X.translate(x,y);X.scale(s,s);X.lineCap='round';X.lineJoin='round';X.lineWidth=4.5;X.strokeStyle=kind==3?'#34b7f1':'#8696a0';
 const one=(dx)=>{X.beginPath();X.moveTo(dx-20,-2);X.lineTo(dx-12,7);X.lineTo(dx+2,-11);X.stroke()};if(kind==1)one(0);else{one(-9);X.beginPath();X.moveTo(-6,5);X.lineTo(-4,7);X.lineTo(10,-11);X.stroke()}X.restore()}
// waBubble: one chat bubble with time + ticks (me) ; returns height
function waBubble(edge,y,maxW,str,me,p,time,kind=1,o={}){if(p<=0)return 0;const F="500 36px Inter,'Noto Color Emoji'";const lines=wrapT(str,maxW-64,F);X.font=F;const lw=Math.max(...lines.map(l=>X.measureText(l).width))+64+(time?110:0);const w=Math.min(maxW,lw);const h=lines.length*48+42+(time?26:0);const bx=me?edge-w:edge;
 X.save();X.globalAlpha=C(p*1.6);const sc=lerp(.7,1,eo(p));X.translate(edge,y);X.scale(sc,sc);X.translate(-edge,-y);
 rr(bx,y,w,h,26,o.bg||(me?'#d9fdd3':'#ffffff'),4);X.font=F;X.fillStyle='#111';X.textAlign='left';X.textBaseline='top';lines.forEach((l,i)=>X.fillText(l,bx+30,y+22+i*48));
 if(time){X.font="500 24px Inter";X.fillStyle='#667781';X.textAlign='right';X.fillText(time,bx+w-(me?62:22),y+h-36);if(me)watick(bx+w-22,y+h-26,1.1,kind)}
 if(o.ring){X.save();X.globalAlpha=C(o.ring);X.strokeStyle='#ff3b30';X.lineWidth=7;X.beginPath();X.arc(bx+w-36,y+h-26,34+Math.sin(o.t*8)*4,0,7);X.stroke();X.restore()}
 X.restore();return h}
// waDots(edge,y,me,t,p): WhatsApp 'typing…' bubble with three bouncing dots (craft ladder 2026-11-24 16:00). In waChat pass o.typing (0..1 fade) and o.typingMe for your side; header shows 'typing…' for the contact.
function waDots(edge,y,me,t,p=1){if(p<=0)return;const w=150,h=78,bx=me?edge-w:edge;X.save();X.globalAlpha=C(p*1.5);rr(bx,y,w,h,26,me?'#d9fdd3':'#ffffff',4);for(let k=0;k<3;k++){const b=Math.max(0,Math.sin(t*9-k*.9))*10;circ(bx+45+k*30,y+h/2-b,9,'#8696a0',0)}X.restore()}
// waChat(x,y,s,r,o): WhatsApp chat screen with any contact. o.name, o.sub (e.g. 'last seen yesterday at 16:02'), o.av(x,y,r) avatar painter, o.clock, o.list=[{a,me,text,time,kind,ring}|{a,date}]
function waChat(x,y,s,r,o){X.save();X.translate(x,y);X.scale(s,s);
 rr(-320,-660,640,1320,92,'#1b1b1f',10);rr(-298,-638,596,1276,74,'#efe7dc',0);X.save();X.beginPath();X.roundRect(-298,-638,596,1276,74);X.clip();
 for(let i=0;i<40;i++){X.globalAlpha=.5;circ(-280+rnd(i)*560,-600+rnd(i+7)*1220,6+rnd(i+3)*10,'#e0d3c2',0)}X.globalAlpha=1;
 X.fillStyle='#008069';X.fillRect(-300,-640,600,210);rr(-70,-618,140,40,20,'#000',0);
 X.font="600 26px Inter";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText(o.clock||'9:41',-240,-598);
 X.font="400 40px Inter";X.fillText('‹',-270,-488);if(o.av)o.av(-180,-488,44);else avatar(-180,-488,44,0);
 X.font="800 40px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='left';X.fillText(o.name||'Mom',-118,-506);X.font="400 25px Inter";X.fillText(o.typing&&!o.typingMe?'typing…':(o.sub||'online'),-118,-466);
 let yy=-380;(o.list||[]).forEach(m=>{if(r<m.a)return;const p=C((r-m.a)/.22);if(m.date){X.save();X.globalAlpha=C(p*2);X.font="700 26px Inter,'Noto Color Emoji'";const dw=X.measureText(m.date).width+44;rr(-dw/2,yy,dw,46,14,'#e1f2fb',0);X.fillStyle='#54656f';X.textAlign='center';X.textBaseline='middle';X.fillText(m.date,0,yy+24);X.restore();yy+=66;return}
  yy+=waBubble(m.me?270:-270,yy,470,m.text,m.me,p,m.time,m.kind||1,{ring:m.ring,t:r,bg:m.bg})+22});
 if(o.typing)waDots(o.typingMe?270:-270,yy,!!o.typingMe,r,o.typing);
 X.fillStyle='#f0f0f0';X.fillRect(-300,520,600,140);rr(-270,545,450,74,37,'#fff',0);X.font="400 30px Inter";X.fillStyle='#8696a0';X.textAlign='left';X.fillText('Message',-230,582);circ(235,582,38,'#00a884',0);
 X.restore();X.restore()}
// keyhook(x,y,s,hasKeys): small wooden key rack on the wall, keys hanging (or empty)
function keyhook(x,y,s=1,has=1){X.save();X.translate(x,y);X.scale(s,s);rr(-80,-24,160,48,12,'#a7724a',5);for(const dx of[-44,0,44]){circ(dx,14,7,'#d9d9d9',4)}if(has)keys3(0,10,.8);X.restore()}
// chargeStand(x,y,s,o): phone lying on a little side table, cable to a wall socket; o.on (screen lit), o.plug (0..1 cable plugged), o.buzz (time -> shake), o.lvl (0..1 battery shown on screen)
function chargeStand(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,4,200,.3);
 rr(-150,-250,300,36,14,'#a7724a',6);line([[-115,-214],[-125,0]],13,'#7a5030');line([[115,-214],[125,0]],13,'#7a5030');
 rr(150,-470,70,96,12,'#f4efe6',5);circ(172,-430,6,'#333',0);circ(198,-430,6,'#333',0);
 const pl=C(o.plug||0);X.strokeStyle='#f4f4f4';X.lineWidth=9;X.lineCap='round';X.beginPath();X.moveTo(40,-262);X.bezierCurveTo(120,-262,lerp(260,150,pl),lerp(-300,-380,pl),lerp(230,185,pl),lerp(-330,-430,pl));X.stroke();X.strokeStyle='#151515';X.lineWidth=3;X.stroke();
 const j=o.buzz!=null?Math.sin(o.buzz*60)*4:0;X.save();X.translate(j,0);if(o.on)glow(-10,-270,150,'130,240,160',.5);rr(-80,-282,150,30,10,'#1b1b1f',5);rr(-72,-278,134,20,6,o.on?'#25d366':'#3a4a66',0);X.restore();
 X.restore()}

// ---- craft ladder 2026-11-21 14:00: toilet-roll kit ----
// troll(x,y,s,{empty,kitchen,rot,tail}) a roll seen from the front, (x,y)=centre. empty = bare cardboard tube; kitchen = tall kitchen roll with a blue print
function troll(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.lineJoin='round';
 const K=o.kitchen,E=o.empty,w=E?50:(K?100:80),h=E?110:(K?250:120);
 const g=X.createLinearGradient(-w,0,w,0);if(E){g.addColorStop(0,'#a8743f');g.addColorStop(.5,'#d9a46a');g.addColorStop(1,'#9a6838')}else{g.addColorStop(0,'#dfe4ea');g.addColorStop(.45,'#ffffff');g.addColorStop(1,'#cfd6de')}
 X.fillStyle=g;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-w,-h/2);X.lineTo(-w,h/2);X.ellipse(0,h/2,w,w*.32,0,Math.PI,0,true);X.lineTo(w,-h/2);X.closePath();X.fill();X.stroke();
 if(K){X.save();X.beginPath();X.rect(-w,-h/2,2*w,h);X.clip();X.fillStyle='#6fa8e8';for(let r=0;r<5;r++)for(let c=-2;c<=2;c++){const xx=c*40+(r%2)*20,yy=-h/2+40+r*48;X.beginPath();X.moveTo(xx,yy-12);X.quadraticCurveTo(xx+12,yy,xx,yy+12);X.quadraticCurveTo(xx-12,yy,xx,yy-12);X.fill()}X.restore()}
 X.fillStyle=E?'#c58f55':'#f4f6f8';X.beginPath();X.ellipse(0,-h/2,w,w*.32,0,0,7);X.fill();X.stroke();
 const cw=E?w*.78:w*.34;X.fillStyle='#b9824a';X.beginPath();X.ellipse(0,-h/2,cw,cw*.32,0,0,7);X.fill();X.stroke();X.fillStyle='#5a3a1e';X.beginPath();X.ellipse(0,-h/2,cw*.7,cw*.22,0,0,7);X.fill();
 if(o.tail){X.fillStyle='#fff';X.beginPath();X.moveTo(w-4,-h/2+10);X.lineTo(w+6,h/2+o.tail);X.lineTo(w-60,h/2+o.tail+8);X.lineTo(w-62,h/2);X.closePath();X.fill();X.stroke()}
 X.restore()}
// rolltower(x,floorY,s,{rows,t,wob}) a pyramid of toilet rolls standing on the floor
function rolltower(x,y,s=1,o={}){const rows=o.rows||5,t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;X.fillStyle='#000';X.beginPath();X.ellipse(0,8,rows*85,24,0,0,7);X.fill();X.globalAlpha=1;
 for(let r=0;r<rows;r++){const n=rows-r;for(let k=0;k<n;k++){const xx=(k-(n-1)/2)*164+Math.sin(t*3+r)*(o.wob||0)*r*2;troll(xx,-60-r*122,1,{})}}X.restore()}
// rollpack(x,y,s,{txt}) a plastic-wrapped jumbo pack (2x3 rolls) with a label, (x,y)=centre
function rollpack(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);for(let r=0;r<2;r++)for(let c=-1;c<=1;c++)troll(c*120,-62+r*124,.74,{});
 X.fillStyle='rgba(200,230,255,.28)';X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.roundRect(-190,-160,380,330,40);X.fill();X.stroke();
 X.fillStyle='rgba(255,255,255,.5)';X.beginPath();X.roundRect(-170,-145,40,280,20);X.fill();
 rr(-110,-20,220,74,16,'#3d8fe0',6);X.font="900 44px Inter";X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.fillText(o.txt||'XXL 24',0,18);X.restore()}
// bathdoor(t,{open,dx,warm,inside}) hallway wall with a bathroom door hinged on the left, pushed open (0..1) into a bright tiled bathroom; inside() draws behind the door slab
function bathdoor(t,o={}){proom(t,{win:null,frame:null,plant:o.plant||0,lamp:o.lamp||0,night:o.night?1:0,wall:'#efd9bf',wall2:'#dcc0a0',floor:'#b98a5e',floor2:'#94673f'});
 const dx=o.dx||600,dw=360,y0=380,y1=1300,op=o.open||0;
 rr(dx-dw/2-30,y0-30,dw+60,y1-y0+40,10,'#fff8ef',8);
 X.save();X.beginPath();X.rect(dx-dw/2,y0,dw,y1-y0);X.clip();X.fillStyle='#cfe6ee';X.fillRect(dx-dw/2,y0,dw,y1-y0);X.strokeStyle='rgba(255,255,255,.7)';X.lineWidth=4;for(let y=y0;y<y1;y+=90){X.beginPath();X.moveTo(dx-dw/2,y);X.lineTo(dx+dw/2,y);X.stroke()}
 X.fillStyle='#e9eef2';X.fillRect(dx-dw/2,y1-120,dw,120);glow(dx,y0+200,420,'255,248,220',.6);if(o.inside)o.inside();X.restore();
 const sw=dw*(1-op*.82);path(()=>{X.moveTo(dx-dw/2,y0);X.lineTo(dx-dw/2+sw,y0+40*op);X.lineTo(dx-dw/2+sw,y1-30*op);X.lineTo(dx-dw/2,y1)},'#f6efe4',8);
 path(()=>{X.moveTo(dx-dw/2+sw*.15,y0+120);X.lineTo(dx-dw/2+sw*.85,y0+120+28*op);X.lineTo(dx-dw/2+sw*.85,y0+420);X.lineTo(dx-dw/2+sw*.15,y0+420)},null,5,'rgba(0,0,0,.18)');
 circ(dx-dw/2+sw*.86,(y0+y1)/2+30,13,'#c9b06a',5);
 if(op<.15){X.save();X.globalCompositeOperation='screen';const g=X.createLinearGradient(0,y1-10,0,y1+70);g.addColorStop(0,'rgba(255,240,190,.8)');g.addColorStop(1,'rgba(255,240,190,0)');X.fillStyle=g;X.fillRect(dx-dw/2,y1-6,dw,80);X.restore()}}
// reachArm(x0,y0,x1,y1,s) a thin arm with a mitten hand poking out of a gap (x0,y0 = where it leaves the gap)
function reachArm(x0,y0,x1,y1,s=1){X.save();X.lineCap='round';X.strokeStyle='#151515';X.lineWidth=17*s;X.beginPath();X.moveTo(x0,y0);X.quadraticCurveTo((x0+x1)/2,y0-30*s,x1,y1);X.stroke();X.fillStyle='#151515';X.beginPath();X.ellipse(x1,y1,26*s,22*s,0,0,7);X.fill();X.beginPath();X.ellipse(x1+6*s,y1-24*s,9*s,16*s,-.3,0,7);X.fill();X.restore()}

// ---------- craft ladder 2026-11-21 16:00: restaurant kit + stopwatch ----------
// bistro(t,{night,day,win}) cosy restaurant: dark green wainscot, warm wall, big window with blurred city lights, string lights, wall lamps
function bistro(t,o={}){const night=o.night!==0;const g=X.createLinearGradient(0,-200,0,1300);g.addColorStop(0,night?'#5a3b34':'#d9a77f');g.addColorStop(1,night?'#7a5040':'#e8c39c');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4400);
 const wx=o.win==null?540:o.win;X.save();X.beginPath();X.roundRect(wx-300,330,600,640,30);X.clip();const wg=X.createLinearGradient(0,330,0,970);wg.addColorStop(0,night?'#1b2546':'#9fd0f0');wg.addColorStop(1,night?'#3b3a66':'#e6f2ff');X.fillStyle=wg;X.fillRect(wx-300,330,600,640);
 if(night)pblur(6,()=>{for(let k=0;k<16;k++){const bx=wx-280+rnd(k+3)*560,by=420+rnd(k+9)*520;X.fillStyle=['rgba(255,210,120,.8)','rgba(255,150,120,.7)','rgba(180,210,255,.7)'][k%3];X.beginPath();X.arc(bx,by,18+rnd(k)*26,0,7);X.fill()}});
 X.restore();rr(wx-300,330,600,640,30,null,14);line([[wx,330],[wx,970]],12,'#3a241c');line([[wx-300,650],[wx+300,650]],12,'#3a241c');
 X.fillStyle=night?'#23443a':'#3f7a64';X.fillRect(-3000,1000,8000,500);X.strokeStyle='rgba(0,0,0,.18)';X.lineWidth=6;for(let x=-1000;x<2200;x+=140){X.beginPath();X.moveTo(x,1010);X.lineTo(x,1490);X.stroke()}
 X.fillStyle='#e8d2a8';X.fillRect(-3000,990,8000,22);
 for(const lx of[150,930]){rr(lx-14,560,28,90,8,'#3a241c',5);ell(lx,540,46,34,'#ffd98a',6);glow(lx,560,240,'255,200,120',night?.55:.25)}
 const fg=X.createLinearGradient(0,1500,0,2000);fg.addColorStop(0,'#6b3f2a');fg.addColorStop(1,'#4a2a1c');X.fillStyle=fg;X.fillRect(-3000,1500,8000,1500);
 strlights(t,240,4,70);if(night)X.save(),X.globalCompositeOperation='multiply',X.fillStyle='rgba(120,90,150,.18)',X.fillRect(-3000,-3000,8000,8000),X.restore()}
// chair3(x,y,s,{col}) bentwood bistro chair seen from the front (back + top rail), y = floor
function chair3(x,y,s=1,o={}){const c=o.col||'#5a3424';X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,6,130,18,'#000',0);X.globalAlpha=1;
 for(const lx of[-95,95])line([[lx,-560],[lx*1.05,0]],20,'#151515'),line([[lx,-560],[lx*1.05,0]],12,c);
 rr(-120,-640,240,90,40,c,8);rr(-95,-470,190,30,14,c,7);rr(-130,-300,260,46,18,c,8);X.restore()}
// bread3(x,y,s,full) wicker bread basket on a table (full=1 rolls, 0 = crumbs only)
function bread3(x,y,s=1,full=1){X.save();X.translate(x,y);X.scale(s,s);
 if(full)for(let k=0;k<3;k++){ell(-50+k*50,-60-(k%2)*16,48,34,'#e0a45a',6,(k-1)*.3);line([[-70+k*50,-70-(k%2)*16],[-34+k*50,-58-(k%2)*16]],5,'#b5733a')}
 else{for(let k=0;k<6;k++)circ(-60+k*24,-34+(k%2)*6,5,'#e0a45a',0)}
 X.fillStyle='#c48a4a';X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-110,-50);X.lineTo(110,-50);X.lineTo(80,10);X.lineTo(-80,10);X.closePath();X.fill();X.stroke();
 X.strokeStyle='rgba(90,50,20,.5)';X.lineWidth=4;for(let k=-3;k<=3;k++){X.beginPath();X.moveTo(k*30,-48);X.lineTo(k*24,8);X.stroke()}X.restore()}
// stopwatch3(x,y,s,{sec,label,t}) big chrome stopwatch: sweep hand at `sec` (0..90), digital readout; turns red past 60
function stopwatch3(x,y,s=1,o={}){const sec=o.sec||0,over=sec>60;X.save();X.translate(x,y);X.scale(s,s);rr(-40,-250,80,50,14,'#b8c4cf',7);circ(0,-260,26,'#e0533d',7);
 circ(0,0,210,'#dfe6ec',10);circ(0,0,180,'#ffffff',6);for(let k=0;k<60;k++){const a=k/60*Math.PI*2,r0=k%5?165:150;line([[Math.sin(a)*r0,-Math.cos(a)*r0],[Math.sin(a)*172,-Math.cos(a)*172]],k%5?3:6,'#333')}
 if(over){X.fillStyle='rgba(224,83,61,.22)';X.beginPath();X.moveTo(0,0);X.arc(0,0,172,-Math.PI/2,-Math.PI/2+(sec-60)/60*Math.PI*2);X.closePath();X.fill()}
 const a=sec/60*Math.PI*2;line([[0,0],[Math.sin(a)*150,-Math.cos(a)*150]],9,over?'#e0533d':'#151515');circ(0,0,14,over?'#e0533d':'#151515',0);
 rr(-80,40,160,74,16,'#151515',0);txt(Math.floor(sec)+' s',0,79,52,over?'#ff8a70':'#7cf0a0',0);X.restore()}

// ---------- craft ladder 2026-11-21 18:00: teen bedroom door + retainer kit ----------
// teenDoor(t,{dx,open,night,warm,inside}) hallway with a teen's bedroom door: lightning sticker, purple LED glow leaking under/through the gap
function teenDoor(t,o={}){proom(t,{win:null,frame:null,plant:o.plant||0,lamp:o.lamp||0,night:o.night?1:0,wall:o.night?'#d9c6b4':'#efd9bf',wall2:o.night?'#b9a08c':'#dcc0a0',floor:'#b98a5e',floor2:'#94673f'});
 const dx=o.dx||640,dw=360,y0=380,y1=1300,op=o.open||0,led=o.led==null?1:o.led,pl=.75+.25*Math.sin(t*3);
 rr(dx-dw/2-30,y0-30,dw+60,y1-y0+40,10,'#fff8ef',8);
 X.save();X.beginPath();X.rect(dx-dw/2,y0,dw,y1-y0);X.clip();const g=X.createLinearGradient(dx-dw/2,0,dx+dw/2,0);g.addColorStop(0,'#3a2a6e');g.addColorStop(1,'#1d2a5a');X.fillStyle=g;X.fillRect(dx-dw/2,y0,dw,y1-y0);
 glow(dx+60,y0+300,420,'170,90,255',.55*led*pl);if(o.inside)o.inside();X.restore();
 const sw=dw*(1-op*.82);path(()=>{X.moveTo(dx-dw/2,y0);X.lineTo(dx-dw/2+sw,y0+40*op);X.lineTo(dx-dw/2+sw,y1-30*op);X.lineTo(dx-dw/2,y1)},'#e9e2d6',8);
 path(()=>{X.moveTo(dx-dw/2+sw*.15,y0+120);X.lineTo(dx-dw/2+sw*.85,y0+120+28*op);X.lineTo(dx-dw/2+sw*.85,y0+420);X.lineTo(dx-dw/2+sw*.15,y0+420)},null,5,'rgba(0,0,0,.16)');
 if(op<.5){X.save();X.translate(dx-dw/2+sw*.5,y0+250);X.scale(1-op*.8,1);path(()=>{X.moveTo(10,-70);X.lineTo(-30,8);X.lineTo(2,8);X.lineTo(-12,70);X.lineTo(34,-14);X.lineTo(2,-14);X.closePath()},'#ffd23f',6);X.restore()}
 circ(dx-dw/2+sw*.86,(y0+y1)/2+30,13,'#c9b06a',5);
 X.save();X.globalCompositeOperation='screen';const g2=X.createLinearGradient(0,y1-10,0,y1+90);g2.addColorStop(0,`rgba(180,110,255,${.85*led*pl})`);g2.addColorStop(1,'rgba(180,110,255,0)');X.fillStyle=g2;X.fillRect(dx-dw/2-20,y1-6,dw+40,100);X.restore()}
// retainer3(x,y,s,{rot}) clear plastic retainer seen from above: U-shaped tray with white teeth
function retainer3(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 X.lineCap='round';X.strokeStyle='rgba(200,235,255,.75)';X.lineWidth=64;X.beginPath();X.arc(0,0,110,Math.PI*.05,Math.PI*.95,true);X.stroke();
 X.strokeStyle='rgba(60,120,160,.55)';X.lineWidth=5;X.beginPath();X.arc(0,0,142,Math.PI*.05,Math.PI*.95,true);X.stroke();X.beginPath();X.arc(0,0,78,Math.PI*.05,Math.PI*.95,true);X.stroke();
 for(let k=0;k<12;k++){const a=Math.PI*(.1+k*.8/11),r=110;X.save();X.translate(Math.cos(a)*r,-Math.sin(a)*r);X.rotate(-a+Math.PI/2);rr(-13,-22,26,44,10,'#ffffff',3);X.restore()}
 X.restore()}
// retCase(x,y,s,{open,col}) the plastic retainer case (lid hinged at the back)
function retCase(x,y,s=1,o={}){const c=o.col||'#3fa7e0',op=o.open==null?1:o.open;X.save();X.translate(x,y);X.scale(s,s);gshadow(0,40,190,.3);
 if(op>0){X.save();X.scale(1,op);rr(-170,-230,340,190,70,c,7);rr(-140,-205,280,140,50,'rgba(255,255,255,.18)',0);X.restore()}
 rr(-170,-60,340,120,60,c,7);rr(-150,-46,300,80,40,'#e9f6ff',4);rr(-30,-70,60,22,8,'#2b7fb4',4);X.restore()}
// junkDrawer(x,y,s,t,{dust}) an open desk drawer from above: cables, a sock, crumpled paper, an old charger, cobweb + dust motes
function junkDrawer(x,y,s=1,t=0,o={}){X.save();X.translate(x,y);X.scale(s,s);
 rr(-430,-330,860,660,20,'#8a5a36',8);rr(-395,-295,790,590,12,'#5e3b22',0);
 X.save();X.beginPath();X.rect(-395,-295,790,590);X.clip();
 line([[-380,-200],[-200,-260],[-60,-140],[120,-250],[380,-170]],12,'#151515');line([[-380,40],[-260,-60],[-120,60],[0,-20]],10,'#f0f0f0');
 rr(250,-260,110,70,10,'#f0f0f0',5);line([[300,-190],[300,-120],[200,-60]],8,'#f0f0f0');
 path(()=>{X.moveTo(-360,160);X.quadraticCurveTo(-300,90,-230,130);X.lineTo(-150,250);X.quadraticCurveTo(-170,300,-230,290);X.lineTo(-300,210);X.quadraticCurveTo(-360,220,-360,160)},'#e86a5a',6);for(let k=0;k<3;k++)line([[-330+k*14,150+k*20],[-260+k*14,120+k*20]],6,'#ffffff');
 X.save();X.translate(250,170);X.rotate(.3);circ(0,0,70,'#fdfbf5',6);line([[-40,-20],[10,10],[40,-30]],4,'#c9c2b0');line([[-30,30],[20,20]],4,'#c9c2b0');X.restore();
 if(o.inner)o.inner();
 if(o.dust){X.save();X.globalAlpha=.25*o.dust;X.fillStyle='#d8d0c0';X.fillRect(-395,-295,790,590);X.restore();X.save();X.globalAlpha=.6*o.dust;X.strokeStyle='#ffffff';X.lineWidth=3;for(let k=0;k<5;k++){X.beginPath();X.moveTo(395,-295+k*30);X.quadraticCurveTo(395-k*30-20,-295+k*18,395-k*32,-295);X.stroke()}line([[395,-295],[260,-160]],3,'#ffffff');X.restore()}
 X.restore();
 if(o.dust)for(let k=0;k<14;k++){const px=-380+rnd(k)*760,py=-280+((rnd(k+9)*560+t*30*(.5+rnd(k+3)))%560);X.save();X.globalAlpha=.55;circ(px,py,3+rnd(k+5)*4,'#fff5dc',0);X.restore()}
 X.restore()}

// craft ladder 2026-11-21 20:00 (catsit_look3): pbeach(t,{hz,gold}) sea + sand + palm, lounger3(x,floorY,s,{col}) striped sun lounger (seat top at floorY-150*s),
// beachTowel(x,y,s), headCloud(x,y,s,t,a) tiny rain cloud over one head (mood = trouble in paradise), catcam(x,y,s,t,o) phone with a live pet-cam screen
// o: {fill:0..1 bowl food, eat:0|1, glare:0|1, day:'Day 3'}
function pbeach(t,o={}){const hz=o.hz||1000,gold=o.gold;
 psky(gold?'#ffb27a':'#6fc3f0',gold?'#ffd59a':'#a8dcf5',gold?'#ffe6b8':'#dff3fb',hz);
 psun(gold?760:820,gold?760:330,gold?110:80,t);
 pclouds(t,gold?420:300,gold?'#fff1e0':'#ffffff',gold?'#ffc9a0':'#d6ecf8',4,3);
 const g=X.createLinearGradient(0,hz,0,hz+260);g.addColorStop(0,gold?'#e78a6a':'#2a9fd6');g.addColorStop(1,gold?'#f4b07a':'#5cc8e8');X.fillStyle=g;X.fillRect(-3000,hz,8000,300);
 X.save();X.globalAlpha=.55;X.strokeStyle='#fff';X.lineWidth=5;X.lineCap='round';for(let k=0;k<16;k++){const y=hz+30+(k%5)*45,x=((k*260+t*30*(1+(k%3)*.3))%1700)-300;X.beginPath();X.moveTo(x,y);X.quadraticCurveTo(x+40,y-10,x+90,y);X.stroke()}X.restore();
 const sy=hz+250;X.fillStyle='rgba(255,255,255,.75)';X.beginPath();X.moveTo(-3000,sy);for(let x=-200;x<=1300;x+=40)X.lineTo(x,sy+Math.sin(x*.02+t*1.6)*10);X.lineTo(3000,sy);X.lineTo(3000,sy+30);X.lineTo(-3000,sy+30);X.fill();
 const s2=X.createLinearGradient(0,sy,0,2000);s2.addColorStop(0,gold?'#f7d39a':'#f6e2b3');s2.addColorStop(1,gold?'#e9b77a':'#e8c88e');X.fillStyle=s2;X.fillRect(-3000,sy+18,8000,3000);
 X.save();X.globalAlpha=.18;for(let k=0;k<60;k++)circ(rnd(k)*1100-10,sy+60+rnd(k+4)*900,3+rnd(k+2)*4,'#a07a4a',0);X.restore();
 if(o.palm!==0)pblur(1.5,()=>{X.save();X.translate(o.px||110,sy+40);const sw=Math.sin(t*.9)*.04;line([[0,0],[20,-260],[50,-520],[90,-720]],34,'#8a6038');
  for(let k=0;k<6;k++){X.save();X.translate(90,-720);X.rotate(-2.6+k*.95+sw);path(()=>{X.moveTo(0,0);X.quadraticCurveTo(120,-60,260,20);X.quadraticCurveTo(130,-10,0,0)},'#3f9b52',0);X.restore()}X.restore()})}
function lounger3(x,y,s=1,o={}){const c=o.col||'#ff7a5a',c2=o.col2||'#ffffff';X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,6,330,26,'#000',0);X.globalAlpha=1;
 for(const lx of[-260,260])line([[lx,0],[lx,-110]],14,'#7a5a3a');
 rr(-310,-160,620,56,20,'#c9a06a',7);
 X.save();X.beginPath();X.roundRect(-300,-196,600,50,22);X.clip();for(let k=0;k<12;k++){X.fillStyle=k%2?c:c2;X.fillRect(-300+k*50,-200,50,60)}X.restore();rr(-300,-196,600,50,22,null,6);
 X.save();X.translate(-290,-170);X.rotate(-1.15);X.beginPath();X.roundRect(0,-25,300,50,22);X.save();X.clip();for(let k=0;k<7;k++){X.fillStyle=k%2?c:c2;X.fillRect(k*50,-30,50,60)}X.restore();X.lineWidth=6;X.strokeStyle='#151515';X.stroke();X.restore();
 X.restore()}
function beachTowel(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);path(()=>{X.moveTo(-200,-20);X.lineTo(190,-30);X.lineTo(210,30);X.lineTo(-210,40);X.closePath()},'#4ab0e8',6);for(let k=0;k<3;k++)line([[-150+k*120,-22],[-160+k*120,36]],14,'#ffd23f');X.restore()}
function headCloud(x,y,s,t,a=1){if(a<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y+Math.sin(t*2)*6);X.scale(s,s);
 X.strokeStyle='rgba(120,170,230,.9)';X.lineWidth=6;X.lineCap='round';for(let k=0;k<9;k++){const xx=-130+k*32,yy=40+((t*600+k*53)%160);X.beginPath();X.moveTo(xx,yy);X.lineTo(xx-6,yy+30);X.stroke()}
 pcloud(0,0,.62,'#9aa3b5','#5f6a80');X.restore()}
function catcam(x,y,s,t,o={}){const fill=o.fill||0;X.save();X.translate(x,y);X.scale(s,s);
 X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=30;rr(-250,-470,500,940,70,'#1b1b1f',8);X.shadowColor='transparent';
 X.save();X.beginPath();X.roundRect(-228,-420,456,840,50);X.clip();
 const g=X.createLinearGradient(0,-420,0,420);g.addColorStop(0,'#cfd8c8');g.addColorStop(1,'#b4bfae');X.fillStyle=g;X.fillRect(-240,-430,480,860);
 X.fillStyle='#a8916e';X.fillRect(-240,120,480,320);X.fillStyle='rgba(0,0,0,.08)';for(let k=0;k<6;k++)X.fillRect(-240+k*90,120,6,320);
 rr(-200,-300,170,190,8,'#e9eef2',6);line([[-115,-300],[-115,-110]],5,'#9aa');line([[-200,-205],[-30,-205]],5,'#9aa');
 catbowl(-70,330,.95,fill);
 cat3(120,330,1.05,{t,eyes:o.eat?'happy':'open',lid:o.glare?.5:0,brow:o.glare?'angry':null,mouth:o.eat?'smile':'flat',look:o.eat?[-.6,.4]:[0,0],purr:o.eat});
 X.fillStyle='rgba(0,0,0,.45)';X.fillRect(-240,-430,480,95);circ(-170,-375,12,(Math.sin(t*5)>0)?'#ff3b30':'#7a1a16',0);
 txt('LIVE · Cat cam',-30,-375,30,'#fff',0,'800 ');txt(o.day||'Day 3',160,-375,26,'#ffd23f',0,'800 ');
 X.globalAlpha=.08;for(let k=0;k<30;k++){X.fillStyle='#fff';X.fillRect(-240,-420+k*28+((t*80)%28),480,2)}X.globalAlpha=1;
 X.restore();rr(-60,-452,120,16,8,'#333',0);X.restore()}

// ---- craft ladder 2026-11-21 22:00 (lunch_look3) ----
// lunchbox3(x,y,s,o): kid's lunchbox, (x,y) = bottom centre. o.open 0..1 lifts + tilts the lid back;
// o.mould = fuzzy green sandwich inside, o.faces = tiny bacteria faces in the fuzz (o.hats = party hats), o.clean = empty + shine, o.col body colour, o.t time
function lunchbox3(x,y,s=1,o={}){const t=o.t||0,w=260,h=120,col=o.col||'#4fc3c8',op=C(o.open||0);X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 X.globalAlpha=.18;ell(0,6,w*.62,16,'#000',0);X.globalAlpha=1;
 if(op>0){rr(-w/2+8,-h-26,w-16,40,12,'#2e3b40',5);
  if(o.mould){X.save();X.beginPath();X.rect(-w/2,-h-260,w,260);X.clip();sandwich(-10,-h+6,1.15,{rot:-.08});
   for(let k=0;k<26;k++){const a=rnd(k+3)*6.28,rr2=rnd(k+11)*95,bx=-10+Math.cos(a)*rr2,by=-h-30+Math.sin(a)*rr2*.45-rnd(k+5)*30,br=14+rnd(k+7)*18+Math.sin(t*3+k)*2;circ(bx,by,br,k%3?'#8bc34a':'#c5e1a5',0)}
   if(o.faces){for(let k=0;k<5;k++){const bx=-90+k*45,by=-h-40-((k%2)*34)+Math.sin(t*6+k)*6;circ(bx,by,20,'#9ccc65',4);circ(bx-6,by-3,4,'#151515',0);circ(bx+6,by-3,4,'#151515',0);
     X.beginPath();X.arc(bx,by+4,7,0,Math.PI);X.strokeStyle='#151515';X.lineWidth=3;X.stroke();
     if(o.hats)path(()=>{X.moveTo(bx-13,by-14);X.lineTo(bx+13,by-14);X.lineTo(bx+2,by-48)},['#ff5a7a','#ffd23f','#5ab0ff','#b06aff','#4cd27a'][k],3)}}
   X.restore()}
  if(o.clean){X.save();X.globalAlpha=.7;line([[-w/2+30,-h-14],[-w/2+70,-h-2]],6,'#ffffff');X.restore()}}
 rr(-w/2,-h,w,h,26,col,7);rr(-w/2+18,-h+18,w-36,26,12,'rgba(255,255,255,.35)',0);rr(-40,-h-12,80,22,10,'#ff8a65',5);
 X.save();X.translate(-w/2+4,-h-4);X.rotate(-op*1.15);X.translate(0,-op*8);rr(-4,-34,w,36,16,col,7);rr(w/2-44,-50,80,20,10,'#2e3b40',5);X.restore();
 if(o.clean){X.save();X.globalAlpha=.8;line([[-w/2+28,-h+70],[-w/2+60,-h+30]],7,'#fff');X.restore()}
 X.restore()}
// schoolbag3(x,y,s,o): kid's school backpack, (x,y) = bottom centre; o.open 0..1 folds the top flap back;
// o.inner(fn) draws content inside the opening (local coords, opening top at y=-300); o.col
function schoolbag3(x,y,s=1,o={}){const col=o.col||'#7e57c2',op=C(o.open||0);X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.2;ell(0,8,170,20,'#000',0);X.globalAlpha=1;
 rr(-170,-320,340,320,60,col,8);rr(-120,-150,240,120,30,'rgba(0,0,0,.14)',6);rr(-60,-120,120,16,8,'#ffd23f',0);
 const flap=()=>{X.save();X.translate(0,-320);X.scale(1,1-op*1.6);rr(-176,-10,352,150,60,col,8);circ(0,110,14,'#151515',0);X.restore()};
 if(op>0){flap();rr(-140,-330,280,56,24,'#3a2a5a',6);
  const bk=['#ef5350','#42a5f5','#66bb6a'];for(let k=0;k<3;k++)rr(-120+k*70,-372+k*6,58,70,6,bk[k],5);
  if(o.inner){X.save();X.beginPath();X.rect(-200,-900,400,600);X.clip();o.inner();X.restore()}}
 if(op<=0)flap();
 X.restore()}
// craft ladder 2026-11-22 09:00: volcano3(x,y,s,o) school-project volcano, (x,y) = bottom centre on a table.
// o.sad=1: the 21:30 emergency build (cereal box, ketchup bottle taped upside down in it, toilet-roll crater, tape strips, one red drip; o.t animates the drip)
// default: the proper painted papier-mache cone on a green board with red lava streaks; o.erupt 0..1 bubbles foam out of the crater; o.t animates.
// tape3(x,y,s,rot): a roll of sticky tape (prop for hands). glueStick(x,y,s,rot).
function tape3(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);circ(0,0,46,'#cfd8e3',7);circ(0,0,24,'#f4e6cc',6);X.globalAlpha=.6;rr(30,-10,70,20,4,'#e8eef5',0);X.globalAlpha=1;X.restore()}
function glueStick(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);rr(-22,-110,44,110,10,'#7e57c2',6);rr(-22,-150,44,46,10,'#ffd23f',6);rr(-14,-40,28,12,4,'#fff',0);X.restore()}
function volcano3(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);X.lineJoin='round';
 X.globalAlpha=.22;ell(0,6,o.sad?170:260,24,'#000',0);X.globalAlpha=1;
 if(o.sad){
  // ketchup bottle, upside down, sticking out of the box top
  X.save();X.rotate(.18);rr(-34,-430,68,170,22,'#e23b2e',7);rr(-20,-262,40,40,8,'#f4f4f4',6);rr(-26,-380,52,60,8,'#fff',0);X.fillStyle='#e23b2e';X.font="900 30px Inter";X.textAlign='center';X.fillText('K',0,-338);X.restore();
  // cereal box
  rr(-120,-300,240,300,10,'#f4c430',7);rr(-120,-210,240,64,0,'#e2503b',0);line([[-120,-210],[120,-210]],5,'#151515');line([[-120,-146],[120,-146]],5,'#151515');
  for(const [cx,cy] of [[-60,-80],[0,-60],[55,-95],[-25,-110],[40,-40]])circ(cx,cy,16,'#ffb347',5);
  // toilet roll crater on top
  X.save();X.translate(-60,-300);X.rotate(-.12);rr(-34,-90,68,90,6,'#d9a46a',6);ell(0,-90,34,11,'#8a5a2e',5);X.restore();
  // tape strips
  X.globalAlpha=.7;X.save();X.rotate(-.5);rr(-150,-200,150,26,4,'#e8eef5',4);X.restore();X.save();X.rotate(.45);rr(-20,-330,140,26,4,'#e8eef5',4);X.restore();X.globalAlpha=1;
  // one red drip down the box
  const d=(t*.35)%1;line([[30,-300],[30,-300+60*Math.min(1,d*1.6)]],12,'#e23b2e');if(d>.6)circ(30,-300+60+ (d-.6)*300,10,'#e23b2e',0);
 }else{
  rr(-250,-24,500,30,10,'#5fae4a',6);
  X.fillStyle='#8a5a3a';X.strokeStyle='#151515';X.lineWidth=8;X.beginPath();X.moveTo(-220,-20);X.quadraticCurveTo(-120,-140,-60,-330);X.lineTo(60,-330);X.quadraticCurveTo(120,-140,220,-20);X.closePath();X.fill();X.stroke();
  X.fillStyle='#a8754e';X.beginPath();X.moveTo(-150,-30);X.quadraticCurveTo(-80,-150,-40,-320);X.lineTo(-10,-320);X.quadraticCurveTo(-40,-150,-60,-30);X.closePath();X.fill();
  // lava streaks
  for(const [lx,len,w] of [[-30,180,26],[20,240,22],[45,120,18]]){X.fillStyle='#ff4a2e';X.beginPath();X.moveTo(lx-w/2,-330);X.quadraticCurveTo(lx-w/2+lx*.4,-330+len*.6,lx+lx*.5,-330+len);X.quadraticCurveTo(lx+w/2+lx*.5,-330+len*.5,lx+w/2,-330);X.closePath();X.fill();X.lineWidth=4;X.stroke()}
  ell(0,-332,62,16,'#3a2416',6);
  const e=C(o.erupt||0);if(e>0){for(let k=0;k<9;k++){const a=k/9*Math.PI*2+t*2,rr2=26+12*Math.sin(t*5+k);circ(Math.cos(a)*40*e,-350-30*e-Math.abs(Math.sin(a))*40*e+4*Math.sin(t*6+k),rr2*e,k%3?'#ffffff':'#ff7a5a',4)}}
  // little flag
  line([[150,-24],[150,-150]],6,'#151515');X.fillStyle='#ffd23f';X.beginPath();X.moveTo(150,-150);X.lineTo(220,-128);X.lineTo(150,-106);X.closePath();X.fill();X.lineWidth=5;X.stroke();
 }
 X.restore()}
// ---- craft ladder 2026-11-22 12:00 (hamster): pet-hamster kit ----
// hamster3(x,floorY,s,{t,cheeks 0..1,munch,eyes:'open'|'closed'|'wide',lid,look:[x,y],fat,seed}) chubby sitting hamster
function hamster3(x,y,s=1,o={}){const t=o.t||0,OUT='#151515',col=o.col||'#e9a557',fat=1+(o.fat||0)*.18,ch=C(o.cheeks||0),mu=o.munch?Math.abs(Math.sin(t*9))*.12:0;
 X.save();X.translate(x,y);X.scale(s,s);X.lineJoin='round';X.lineCap='round';
 X.globalAlpha=.22;ell(0,4,120*fat,16,'#000',0);X.globalAlpha=1;
 // feet
 ell(-48,-6,26,13,'#ffc2b8',5);ell(48,-6,26,13,'#ffc2b8',5);
 // body (pear) + belly
 ell(0,-95,105*fat,100,col,7);ell(0,-72,66*fat,68,'#fff4e2',0);
 const hg=X.createRadialGradient(-40,-150,10,0,-95,150);hg.addColorStop(0,'rgba(255,255,255,.28)');hg.addColorStop(1,'rgba(0,0,0,.10)');X.fillStyle=hg;X.beginPath();X.ellipse(0,-95,101*fat,96,0,0,7);X.fill();
 // head
 const hy=-205;
 for(const d of[-1,1]){ell(d*62,hy-70,30,30,col,6);ell(d*62,hy-68,17,17,'#ffb3c0',0)}
 ell(0,hy,98,82,col,7);
 // cheeks pouches (puff)
 const cr=26+ch*44+mu*40;for(const d of[-1,1]){ell(d*(70+ch*26),hy+30,cr,cr*.86,col,7);ell(d*(70+ch*26),hy+36,cr*.7,cr*.55,'#fff4e2',0)}
 ell(0,hy+30,50,36,'#fff4e2',0);
 // eyes
 const E=o.eyes||'open',lk=o.look||[0,0];
 for(const d of[-1,1]){const ex=d*38,ey=hy-12;
  if(E==='closed'){X.strokeStyle=OUT;X.lineWidth=7;X.beginPath();X.moveTo(ex-15,ey);X.quadraticCurveTo(ex,ey+11,ex+15,ey);X.stroke();continue}
  const R=E==='wide'?24:19;circ(ex,ey,R,OUT,0);circ(ex-6+lk[0]*5,ey-7+lk[1]*5,R*.36,'#fff',0);circ(ex+6,ey+6,R*.15,'#fff',0);
  if(o.lid){X.fillStyle=col;X.fillRect(ex-R-3,ey-R-3,2*R+6,(2*R+6)*o.lid);X.strokeStyle=OUT;X.lineWidth=5;X.beginPath();X.moveTo(ex-R,ey-R-3+(2*R+6)*o.lid);X.lineTo(ex+R,ey-R-3+(2*R+6)*o.lid);X.stroke()}}
 // nose + mouth + whiskers
 ell(0,hy+16,10,7,'#ff8fa3',3);X.strokeStyle=OUT;X.lineWidth=4;X.beginPath();X.moveTo(0,hy+23);X.lineTo(0,hy+31);X.moveTo(-12,hy+34);X.quadraticCurveTo(-6,hy+40,0,hy+31);X.quadraticCurveTo(6,hy+40,12,hy+34);X.stroke();
 X.strokeStyle='rgba(20,20,20,.55)';X.lineWidth=3;for(const d of[-1,1])for(let k=0;k<2;k++){X.beginPath();X.moveTo(d*40,hy+22+k*10);X.lineTo(d*(118+ch*30),hy+10+k*20);X.stroke()}
 // paws (holding a seed when munching)
 const py=hy+78-mu*30;ell(-22,py,16,13,'#ffc2b8',4);ell(22,py,16,13,'#ffc2b8',4);
 if(o.seed){X.save();X.translate(0,py-14);X.rotate(.3);ell(0,0,10,18,'#6b4a2a',4);X.strokeStyle='#f3e6c8';X.lineWidth=3;X.beginPath();X.moveTo(0,-12);X.lineTo(0,12);X.stroke();X.restore()}
 if(E==='closed'&&o.zz){X.save();for(let k=0;k<3;k++){const q=(t*.5+k/3)%1;X.globalAlpha=(1-q)*.9;txt('z',100+q*60+k*14,hy-80-q*140,52-q*14,'#6a7aa8',0)}X.restore()}
 X.restore()}
// cage3(x,floorY,s,{t,inner:fn,fill 0..1 bowl,wheel spin}) wire hamster cage with tray, bedding, wheel, bottle, bowl
function cage3(x,y,s=1,o={}){const t=o.t||0,W=300,H=330;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.22;ell(0,8,W+30,24,'#000',0);X.globalAlpha=1;
 // back bars
 X.strokeStyle='rgba(120,130,150,.55)';X.lineWidth=5;for(let k=-W+20;k<W;k+=34){X.beginPath();X.moveTo(k,-70);X.lineTo(k,-H-60);X.stroke()}
 // wheel
 X.save();X.translate(170,-200);circ(0,0,92,null,0);X.strokeStyle='#5aa0e0';X.lineWidth=12;X.beginPath();X.arc(0,0,92,0,7);X.stroke();X.rotate((o.spin||0)*t*4);X.lineWidth=5;for(let k=0;k<8;k++){X.rotate(Math.PI/4);X.beginPath();X.moveTo(0,0);X.lineTo(92,0);X.stroke()}circ(0,0,14,'#3d7fc0',4);X.restore();X.strokeStyle='#3d7fc0';X.lineWidth=10;X.beginPath();X.moveTo(170,-200);X.lineTo(170,-80);X.stroke();
 // water bottle
 rr(-W+30,-H-20,46,150,18,'rgba(190,230,255,.75)',5);rr(-W+30,-H+50,46,80,18,'rgba(110,190,250,.8)',0);X.strokeStyle='#888';X.lineWidth=6;X.beginPath();X.moveTo(-W+53,-H+130);X.lineTo(-W+53,-H+170);X.stroke();
 // tray + bedding
 path(()=>{X.moveTo(-W,-90);X.lineTo(W,-90);X.lineTo(W-14,0);X.lineTo(-W+14,0);X.closePath()},'#4fc3c8',7);
 X.fillStyle='#f3dca0';X.beginPath();X.moveTo(-W+10,-88);for(let k=0;k<=24;k++)X.lineTo(-W+10+k*(2*W-20)/24,-96-((k*37)%11));X.lineTo(W-10,-88);X.fill();
 // bowl
 X.save();X.translate(-130,-92);path(()=>{X.moveTo(-60,-34);X.lineTo(60,-34);X.lineTo(46,0);X.lineTo(-46,0);X.closePath()},'#ffb02e',6);ell(0,-34,60,12,o.fill>0?'#a0703a':'#d98a12',5);
 if(o.fill>0)for(let k=0;k<10;k++)ell(-44+k*10,-38-((k*7)%3)*5*o.fill,8,6,k%2?'#6b4a2a':'#e0b060',2);X.restore();
 if(o.inner&&!o.front)o.inner();
 // front bars + roof
 X.strokeStyle='#8a94a8';X.lineWidth=6;for(let k=-W+4;k<=W;k+=42){X.beginPath();X.moveTo(k,-90);X.lineTo(k,-H-40);X.stroke()}
 X.beginPath();X.moveTo(-W,-H-40);X.quadraticCurveTo(0,-H-130,W,-H-40);X.lineWidth=10;X.stroke();X.lineWidth=6;X.beginPath();X.moveTo(-W,-180);X.lineTo(W,-180);X.stroke();
 X.beginPath();X.moveTo(-40,-H-115);X.quadraticCurveTo(0,-H-170,40,-H-115);X.lineWidth=8;X.stroke();
 if(o.inner&&o.front)o.inner();
 X.restore()}
// hfood(x,y,s,rot,{pour}) bag of hamster food
function hfood(x,y,s=1,rot=0,o={}){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);
 path(()=>{X.moveTo(-58,-90);X.lineTo(58,-90);X.lineTo(68,90);X.lineTo(-68,90);X.closePath()},'#ffd23f',6);rr(-62,-106,124,22,4,'#f0b41a',5);
 circ(0,-10,42,'#fff',0);txt('🐹',0,2,48,'#fff',0,'400 ');txt('FOOD',0,62,24,'#6b4a2a',0);X.restore()}

// craft ladder 2026-11-22 14:00 (mugs_look3)
// mug3(x,y,s,o): one mug standing on a surface at y (bottom centre); o.col body colour, o.stain tea ring, o.fuzz 0..1 green mould poking out, o.face (mould gets eyes), o.t
function mug3(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);const c=o.col||'#ffffff';
 X.globalAlpha=.2;ell(0,4,52,10,'#000',0);X.globalAlpha=1;
 X.lineWidth=8;X.strokeStyle='#151515';X.beginPath();X.arc(46,-52,22,-1.25,1.25);X.stroke();X.lineWidth=4;X.strokeStyle=c;X.beginPath();X.arc(46,-52,22,-1.25,1.25);X.stroke();
 rr(-44,-100,88,100,14,c,6);ell(0,-100,44,11,'#3a2a1c',5);
 if(o.stain){X.globalAlpha=.45;line([[-36,-74],[36,-74]],6,'#8a5a2a');X.globalAlpha=1}
 if(o.stripe)rr(-44,-64,88,16,0,o.stripe,0);
 const f=C(o.fuzz||0);if(f>0){for(let k=0;k<9;k++){const a=k/8*Math.PI,rx=Math.cos(a)*38,bob=Math.sin(t*3+k)*4;circ(rx*.9,-104-Math.sin(a)*28*f-bob,(16+8*(k%3))*f,k%2?'#8fcf5a':'#6db03f',4)}
  circ(0,-130*f-6,26*f,'#9bd86a',4);
  if(o.face&&f>.6){circ(-12,-136,7,'#fff',3);circ(12,-136,7,'#fff',3);circ(-11,-135,3,'#151515',0);circ(13,-135,3,'#151515',0);X.lineWidth=4;X.strokeStyle='#151515';X.beginPath();X.arc(0,-124,8,.2,Math.PI-.2);X.stroke()}}
 X.restore()}
// mugpile3(x,y,s,o): a wobbling tower/pile of dirty mugs on a desk at y; o.t, o.mould (index of the mouldy mug, -1 none), o.wob wobble amount
function mugpile3(x,y,s=1,o={}){const t=o.t||0,wb=(o.wob==null?1:o.wob)*Math.sin(t*3.2)*.025;X.save();X.translate(x,y);X.scale(s,s);
 const cols=['#ffffff','#ffd23f','#5a8fe8','#ff7a6a','#7bc86c','#c77ddb','#f2a24c','#ffffff','#4fc3c9'];
 const pos=[[-150,0],[-50,0],[50,0],[150,0],[-100,-104],[0,-104],[100,-104],[-50,-208],[50,-208]];
 pos.forEach(([px,py],k)=>{X.save();X.rotate(wb*(1-py/300));mug3(px,py,1,{col:cols[k],stain:1,stripe:k%3==1?'rgba(0,0,0,.12)':null,fuzz:k===o.mould?1:0,face:k===o.mould&&o.face,t,rot:(k%2?-.04:.05)});X.restore()});
 X.restore()}
// cupboard3(x,y,s,o): wall cupboard, top at y; o.open 0..1 door swing, o.full mugs on the shelves
function cupboard3(x,y,s=1,o={}){const op=C(o.open==null?1:o.open);X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.18;rr(-210,14,440,440,14,'#000',0);X.globalAlpha=1;
 rr(-220,0,440,440,14,'#f3ecdf',7);rr(-196,24,392,392,8,'#d9c7a8',4);line([[-196,220],[196,220]],8,'#b89a72');
 if(o.full){const cl=['#ffd23f','#5a8fe8','#ff7a6a','#7bc86c','#c77ddb','#4fc3c9','#f2a24c','#ffffff'];for(let r=0;r<2;r++)for(let k=0;k<4;k++)mug3(-138+k*92,212+r*196,.62,{col:cl[r*4+k]})}
 else{X.globalAlpha=.35;for(let k=0;k<3;k++){ell(-120+k*120,214,30,6,'#8a7050',0);ell(-120+k*120,410,30,6,'#8a7050',0)}X.globalAlpha=1}
 // door: hinged on the right edge, swings open toward the viewer
 const dw=440*(1-op*.86);path(()=>{X.moveTo(220,0);X.lineTo(220-dw,-op*30);X.lineTo(220-dw,440+op*30);X.lineTo(220,440)},'#efe3cc',7);
 if(op<.95)circ(220-dw*.88,230,10,'#b89a72',4);
 X.restore()}

// ---- craft ladder 2026-11-22 16:00: gym kit ----
// sock3(x,y,s,{t,stand,clean,rot}) tube sock, (x,y)=floor point under the heel. stand = stiff and upright, wobbling on its own (+ flies)
function sock3(x,y,s=1,o={}){const t=o.t||0,cl=o.clean;X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(10,4,90,12,'#000',0);X.globalAlpha=1;
 X.rotate((o.rot||0)+(o.stand?Math.sin(t*3.1)*.06:0));X.lineJoin='round';
 const body=cl?'#ffffff':'#e6dcc2',str=cl?'#4a8fe0':'#a99a74';
 path(()=>{X.moveTo(-40,-260);X.lineTo(40,-260);X.lineTo(44,-60);X.quadraticCurveTo(50,-30,90,-28);X.quadraticCurveTo(140,-24,140,0);X.lineTo(-30,0);X.quadraticCurveTo(-46,0,-46,-30);X.closePath()},body,7);
 rr(-48,-275,96,36,12,body,7);line([[-42,-225],[42,-225]],9,str);line([[-42,-200],[42,-200]],9,str);
 if(!cl){X.globalAlpha=.35;ell(70,-12,40,12,'#7a6a3a',0);ell(-10,-120,20,30,'#9a8a5a',0);X.globalAlpha=1;
  if(o.stand)for(let k=0;k<3;k++){const a=t*4+k*2.1;const fx=Math.cos(a)*90,fy=-300+Math.sin(a*1.3)*40;circ(fx,fy,7,'#151515',0);X.globalAlpha=.6;ell(fx-6,fy-8,7,4,'#cfe6ff',0);ell(fx+6,fy-8,7,4,'#cfe6ff',0);X.globalAlpha=1}}
 X.restore()}
// gymbag3(x,y,s,{open,stink,clean,t}) duffel gym bag, (x,y)=floor point under its centre
function gymbag3(x,y,s=1,o={}){const t=o.t||0,op=C(o.open||0),cl=o.clean;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.22;ell(0,6,250,24,'#000',0);X.globalAlpha=1;X.lineJoin='round';
 const c=cl?'#2fa8a0':'#2b7f78',c2=cl?'#23877f':'#1f625c';
 // handles
 X.strokeStyle='#151515';X.lineWidth=20;X.lineCap='round';X.beginPath();X.moveTo(-90,-200);X.quadraticCurveTo(0,-330,90,-200);X.stroke();X.strokeStyle='#333c48';X.lineWidth=12;X.stroke();
 rr(-230,-215,460,215,100,c,8);
 X.fillStyle=c2;X.beginPath();X.roundRect(-230,-80,460,80,[0,0,100,100]);X.fill();
 ell(-205,-108,40,90,c2,7);ell(205,-108,40,90,c2,7);
 // white stripe + logo dot
 line([[-150,-60],[150,-60]],10,'rgba(255,255,255,.75)');circ(0,-130,22,'#fff',5);
 if(op>0){X.fillStyle='#1a1a1a';X.beginPath();X.ellipse(0,-212,160*op,34*op+4,0,0,7);X.fill();X.lineWidth=7;X.strokeStyle='#151515';X.stroke();
  // a sock + a shirt poking out
  X.save();X.translate(-50,-215);X.rotate(-.5-op*.3+Math.sin(t*3)*.05);rr(-20,-110*op,40,110*op,14,'#e6dcc2',6);X.restore();
  X.save();X.translate(60,-218);X.rotate(.4);rr(-40,-70*op,80,70*op,18,'#e86a5a',6);X.restore()}
 else{X.setLineDash([10,8]);line([[-160,-212],[160,-212]],5,'#e8c15a');X.setLineDash([])}
 if(cl){X.globalAlpha=.6;ell(-120,-160,40,14,'#ffffff',0);X.globalAlpha=1}
 X.restore()}
// craft ladder 2026-11-22 (Black Friday): headphones3(x,y,s,o) over-ear headphones, centred on a head (cups at ±160*s: worn = pass head centre + 0.95*char scale) or as a product; o.col/col2, o.rot
function headphones3(x,y,s=1,o={}){const col=o.col||'#ff5a7a',c2=o.col2||'#c23a5a';X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.lineCap='round';
 X.strokeStyle='#151515';X.lineWidth=40;X.beginPath();X.arc(0,0,150,Math.PI*1.08,Math.PI*1.92);X.stroke();X.strokeStyle='#2b2f3a';X.lineWidth=26;X.stroke();
 X.strokeStyle=col;X.lineWidth=12;X.beginPath();X.arc(0,0,150,Math.PI*1.28,Math.PI*1.72);X.stroke();
 for(const d of[-1,1]){rr(d*146-26,-46,52,80,20,'#2b2f3a',7);ell(d*162,22,50,76,col,8);ell(d*154,22,26,48,c2,0);X.globalAlpha=.5;ell(d*172,0,10,26,'#fff',0);X.globalAlpha=1}
 X.restore()}
// cobweb in a corner: cx,cy corner, r size, a0..a1 angle range
function cobweb(cx,cy,r,a0,a1,a=1){X.save();X.globalAlpha=.75*a;X.strokeStyle='#f4f6fa';X.lineWidth=3.5;X.lineCap='round';const n=6;
 for(let i=0;i<=n;i++){const an=a0+(a1-a0)*i/n;X.beginPath();X.moveTo(cx,cy);X.lineTo(cx+Math.cos(an)*r,cy+Math.sin(an)*r);X.stroke()}
 for(let k=1;k<=4;k++){const rk=r*k/4.4;X.beginPath();for(let i=0;i<=n;i++){const an=a0+(a1-a0)*i/n,pr=rk*(i%2?.86:1);const px=cx+Math.cos(an)*pr,py=cy+Math.sin(an)*pr;i?X.quadraticCurveTo(cx+Math.cos(an-(a1-a0)/n/2)*pr*.8,cy+Math.sin(an-(a1-a0)/n/2)*pr*.8,px,py):X.moveTo(px,py)}X.stroke()}X.restore()}
// cart3(x,y,s,o): wire shopping cart as a concept character. o.face ('smug'|'happy'), o.look [x,y], o.web (0..1 cobwebs + dangling spider), o.item() draws contents (local coords, basket interior y -460..-130), o.tag {p:0..1 flip progress, from, to, sub1, sub2}
function cart3(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);X.lineJoin='round';X.lineCap='round';
 X.globalAlpha=.22;ell(0,8,300,26,'#000',0);X.globalAlpha=1;
 line([[-240,-90],[230,-90]],18,'#151515');line([[-236,-90],[-200,-40]],14,'#151515');line([[226,-90],[190,-40]],14,'#151515');
 for(const wx of[-200,190]){circ(wx,-34,36,'#2b2f3a',8);circ(wx,-34,12,'#9aa3ad',0)}
 const bk=()=>{X.moveTo(-300,-470);X.lineTo(300,-470);X.lineTo(240,-120);X.lineTo(-240,-120);X.closePath()};
 X.save();X.beginPath();bk();X.clip();X.fillStyle='rgba(60,70,90,.25)';X.fillRect(-320,-480,640,380);X.restore();
 if(o.item)o.item();
 X.save();X.beginPath();bk();X.clip();X.strokeStyle='#9aa6b4';X.lineWidth=7;for(let i=-6;i<=6;i++){X.beginPath();X.moveTo(i*50,-480);X.lineTo(i*40,-110);X.stroke()}for(let j=0;j<6;j++){const yy=-415+j*58;X.beginPath();X.moveTo(-320,yy);X.lineTo(320,yy);X.stroke()}X.restore();
 path(bk,null,12);rr(-316,-494,632,32,14,'#c8d0da',8);
 line([[296,-478],[372,-566]],18,'#151515');rr(344,-610,46,96,18,'#e8503a',7);
 if(o.face){const lk=o.look||[0,0],sm_=o.face=='smug';for(const d of[-1,1]){const ex=d*95,ey=-268;ell(ex,ey,62,70,'#fff',7);circ(ex+lk[0]*18,ey+lk[1]*16+8,26,'#151515',0);circ(ex+lk[0]*18-8,ey+lk[1]*16,8,'#fff',0);
   if(sm_){X.save();X.beginPath();X.ellipse(ex,ey,62,70,0,0,7);X.clip();X.fillStyle='#c8d0da';X.fillRect(ex-70,ey-80,140,62);X.restore();path(()=>X.ellipse(ex,ey,62,70,0,0,7),null,7);line([[ex-50,ey-20],[ex+50,ey-20]],8,'#151515')}
   {const by=ey-100-(sm_&&d>0?26:0);line([[ex-48,by+(sm_&&d>0?10:0)],[ex+48,by-(sm_&&d>0?0:0)]],16,'#151515')}}
  X.lineWidth=12;X.strokeStyle='#151515';X.beginPath();if(sm_){X.moveTo(-60,-170);X.quadraticCurveTo(20,-148,80,-188)}else{X.moveTo(-70,-182);X.quadraticCurveTo(0,-132,70,-182)}X.stroke()}
 if(o.web>0){const a=C(o.web);cobweb(-300,-470,170,0,Math.PI/2*.95,a);cobweb(300,-470,140,Math.PI/2*1.05,Math.PI,a);cobweb(240,-120,110,Math.PI,Math.PI*1.45,a);
  const sw=Math.sin(t*1.6)*.12,L=200+Math.sin(t*1.1)*20;X.save();X.translate(228,-490);X.rotate(sw);X.globalAlpha=a;line([[0,0],[0,L]],3,'#f4f6fa');circ(0,L+16,16,'#151515',0);for(const d of[-1,1])for(let k=0;k<3;k++)line([[0,L+14],[d*24,L+4+k*12],[d*30,L+14+k*14]],3.5,'#151515');circ(-5,L+12,3.5,'#fff',0);circ(5,L+12,3.5,'#fff',0);X.restore()}
 if(o.tag){const g=o.tag,p=C(g.p||0),sx=Math.abs(Math.cos(p*Math.PI)),back=p>.5,sw=Math.sin(t*2.2)*.06;X.save();X.translate(-250,-470);line([[0,0],[-30,110]],4,'#151515');X.translate(-30,110);X.rotate(-.12+sw);X.scale(Math.max(.02,sx),1);
  path(()=>{X.moveTo(-90,0);X.lineTo(90,0);X.lineTo(90,170);X.lineTo(-90,170);X.closePath()},back?'#ff3b4e':'#ffd23f',7);circ(0,24,9,'#fff',4);
  txt(back?g.to:g.from,0,90,58,back?'#fff':'#151515',0,'900 ');txt(back?(g.sub2||''):(g.sub1||''),0,140,22,back?'#ffe2e5':'#151515',0,'800 ');X.restore()}
 X.restore()}
// craft ladder 2026-11-22 20:00: checkin(t,{dawn}) airport check-in hall (big windows with dawn/morning sky + a plane, DEPARTURES board, queue posts);
// checkdesk(x,y,s,{n}) check-in counter (draw AFTER the agent, BEFORE the passenger); passport3(x,y,s,{open,rot,ring}) burgundy passport, open = data page with expiry line (ring = red circle on the date);
// bpass(x,y,s,{rot}) boarding pass
function checkin(t,o={}){const d=o.dawn;const g=X.createLinearGradient(0,-200,0,1250);g.addColorStop(0,d?'#c3c9d6':'#eef1f5');g.addColorStop(1,d?'#a5aec0':'#d6dce4');X.fillStyle=g;X.fillRect(-3000,-3000,8000,4300);
 X.save();X.beginPath();X.rect(-200,330,1480,640);X.clip();const sk=X.createLinearGradient(0,330,0,970);if(d){sk.addColorStop(0,'#1d2448');sk.addColorStop(.7,'#5b4f7a');sk.addColorStop(1,'#f0956b')}else{sk.addColorStop(0,'#7cc3f0');sk.addColorStop(1,'#d8f0ff')}X.fillStyle=sk;X.fillRect(-200,330,1480,640);
 if(d){for(let i=0;i<24;i++){X.globalAlpha=.3+.5*Math.abs(Math.sin(t*1.5+i));circ(-150+rnd(i)*1400,350+rnd(i+7)*250,2+rnd(i+3)*2,'#fff',0)}X.globalAlpha=1}else{psun(860,520,80,t);pclouds(t,560,'#ffffff','#e3eef8',3,2)}
 // parked plane silhouette
 X.save();X.translate(lerp(380,420,(t*.02)%1),860);X.fillStyle=d?'#2c3350':'#f7f9fc';X.strokeStyle=d?'#1a1f36':'#9aa7b8';X.lineWidth=5;X.beginPath();X.ellipse(0,0,330,46,0,0,7);X.fill();X.stroke();
 X.beginPath();X.moveTo(-60,10);X.lineTo(-170,110);X.lineTo(-110,110);X.lineTo(40,10);X.closePath();X.fill();X.stroke();X.beginPath();X.moveTo(-270,-20);X.lineTo(-330,-130);X.lineTo(-280,-130);X.lineTo(-210,-30);X.closePath();X.fill();X.stroke();
 for(let k=-4;k<=5;k++)circ(k*44,-8,8,d?'#ffd27a':'#7ea6d8',0);X.restore();
 X.fillStyle=d?'#232a44':'#9aa3ae';X.fillRect(-200,905,1480,70);X.restore();
 X.fillStyle=d?'#cfd5df':'#f4f6f9';for(let k=0;k<6;k++)X.fillRect(-200+k*300,330,18,640);X.fillRect(-200,320,1480,20);X.fillRect(-200,962,1480,24);
 const fg=X.createLinearGradient(0,980,0,2000);fg.addColorStop(0,d?'#aab2bf':'#e4e7ec');fg.addColorStop(1,d?'#8c95a3':'#c6ccd5');X.fillStyle=fg;X.fillRect(-3000,980,8000,3000);X.strokeStyle='rgba(0,0,0,.06)';X.lineWidth=3;for(let k=-8;k<=8;k++){X.beginPath();X.moveTo(540+k*50,980);X.lineTo(540+k*300,2000);X.stroke()}
 if(o.warm)glow(540,640,800,'255,220,160',.35);if(d)glow(540,900,700,'255,160,120',.18)}
function checkdesk(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,6,360,.3);
 rr(-340,-400,680,400,18,'#f2f4f7',7);rr(-340,-400,680,70,18,'#1f6fe5',0);rr(-340,-400,680,400,18,'transparent',7);
 txt('✈ CHECK-IN '+(o.n||'12'),0,-364,40,'#fff',0,'900 ');rr(-300,-300,600,250,12,'rgba(31,111,229,.08)',0);
 rr(-370,-430,740,40,12,'#c9d1dc',6);// lip
 if(o.screen!==0){X.save();X.translate(150,-430);X.rotate(-.08);rr(-70,-110,140,100,10,'#2e3440',5);rr(-60,-100,120,80,6,o.ok?'#25d366':o.no?'#ff5a64':'#7ea6d8',0);X.restore()}
 X.restore()}
function passport3(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.shadowColor='rgba(0,0,0,.28)';X.shadowBlur=18;X.shadowOffsetY=8;
 if(!o.open){rr(-120,-170,240,340,18,'#7a1f2b',7);X.shadowColor='transparent';circ(0,-30,52,'transparent',0);X.strokeStyle='#e8c66a';X.lineWidth=6;X.beginPath();X.arc(0,-30,50,0,7);X.stroke();txt('★',0,-30,54,'#e8c66a',0,'400 ');txt('PASSPORT',0,90,34,'#e8c66a',0,'900 ');rr(-40,120,80,24,6,'#e8c66a',0)}
 else{rr(-330,-230,660,460,22,'#7a1f2b',7);X.shadowColor='transparent';rr(-312,-212,300,424,12,'#f3e6ef',0);rr(12,-212,300,424,12,'#eef2ff',0);
  rr(-282,-170,130,160,10,'#d9dde6',4);circ(-217,-110,34,'#fff',5);path(()=>{X.moveTo(-262,-14);X.quadraticCurveTo(-217,-80,-172,-14)},'#fff',5);
  for(let k=0;k<4;k++)rr(-130,-170+k*44,100,16,6,'rgba(60,60,90,.25)',0);
  txt('PASSPORT',162,-170,30,'#7a1f2b',0,'900 ');txt('EXPIRES',162,-60,30,'#5b6070',0,'800 ');txt(o.date||'14 MAR 2027',162,-8,40,o.ring?'#d62d3a':'#1b1f2a',0,'900 ');
  for(let k=0;k<3;k++)rr(40,70+k*36,240,14,6,'rgba(60,60,90,.18)',0);
  if(o.ring){const p=C(o.ring);X.strokeStyle='#ff3b4a';X.lineWidth=9;X.beginPath();X.ellipse(162,-12,150,52,-.05,-1.6,-1.6+p*6.5);X.stroke()}}
 X.restore()}
function bpass(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;rr(-150,-70,300,140,14,'#ffffff',5);X.shadowColor='transparent';rr(-150,-70,300,40,14,'#1f6fe5',0);txt('BOARDING ✈',0,-50,24,'#fff',0,'900 ');
 for(let k=0;k<12;k++)X.fillRect(40+k*8,-8,k%3?3:6,60);X.fillStyle='#333';rr(-130,-10,140,16,6,'rgba(0,0,0,.25)',0);rr(-130,20,100,16,6,'rgba(0,0,0,.18)',0);X.restore()}

// ---- craft ladder 2026-11-22 22:00 (week_look3): monday3() = 'Monday' as a concept character ----
// monday3(x,floorY,s,o): grey-violet sm() wearing a tear-off calendar page on its head (red band 'MON', big date).
// o passes through to sm (eyes, brow, mouth, arms...); o.day text (default 'MON'), o.num (default '23'), o.tiny:1 softens it (rounder smile, pastel).
function monday3(x,y,s=1,o={}){const tiny=o.tiny;const base=Object.assign({col:tiny?'#c9c3e6':'#8f8aa8',limb:'#3a3550',out:'#2a2540',lid:tiny?0:.35,brow:tiny?'up':'smug',mouth:tiny?'smile':'smirk'},o);
 sm(x,y,s,base);const hy=y-767*s;X.save();X.translate(x,hy-150*s);X.rotate(Math.sin((o.t||0)*2)*.05);X.scale(s,s);
 X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=12;rr(-78,-120,156,140,16,'#fffdf8',6);X.shadowColor='transparent';
 X.save();X.beginPath();X.roundRect(-78,-120,156,140,16);X.clip();X.fillStyle='#e0453a';X.fillRect(-80,-122,160,44);X.restore();
 X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.roundRect(-78,-120,156,140,16);X.stroke();
 for(const k of[-40,0,40])circ(k,-122,7,'#555',0);
 txt(o.day||'MON',0,-98,30,'#fff',0,'900 ');txt(o.num||'23',0,-28,62,'#222',0,'900 ');X.restore()}
// craft ladder 2026-11-23 09:00: libbook3(x,y,s,o) a library book seen from the front, (x,y) = centre; o.rot, o.chew=1 bites out of the top-right corner
// (scalloped edge + tooth dents + paper showing), o.col cover colour, o.drool=1 two drool drops, o.t. Library sticker with barcode + spine label.
// dogbed3(x,y,s,o) round plush dog bed, (x,y) = floor contact centre; o.col rim colour, o.front=1 draws only the front rim (call after the dog to tuck it in).
function libbook3(x,y,s=1,o={}){const col=o.col||'#e0533d',OUT='#151515',W=200,H=260,ch=o.chew?1:0;X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.lineJoin='round';
 // pages block (behind, offset)
 rr(-W/2+14,-H/2+10,W,H,10,'#fbf6ea',7);for(let k=1;k<4;k++)line([[W/2+14-2,-H/2+18+k*6],[W/2+10,H/2+4-k*6]],2,'#d8cdb4');
 // cover with optional bitten corner
 X.beginPath();X.moveTo(-W/2,-H/2+12);X.quadraticCurveTo(-W/2,-H/2,-W/2+12,-H/2);
 if(ch){X.lineTo(W/2-78,-H/2);X.arc(W/2-58,-H/2,20,Math.PI,0,true);X.arc(W/2-22,-H/2+8,18,Math.PI*1.1,Math.PI*.45,true);X.arc(W/2,-H/2+46,20,Math.PI*1.3,Math.PI*.5,true);X.lineTo(W/2,H/2-12)}
 else{X.lineTo(W/2-12,-H/2);X.quadraticCurveTo(W/2,-H/2,W/2,-H/2+12);X.lineTo(W/2,H/2-12)}
 X.quadraticCurveTo(W/2,H/2,W/2-12,H/2);X.lineTo(-W/2+12,H/2);X.quadraticCurveTo(-W/2,H/2,-W/2,H/2-12);X.closePath();
 X.fillStyle=col;X.fill();X.strokeStyle=OUT;X.lineWidth=7;X.stroke();
 X.save();X.clip();X.fillStyle='rgba(0,0,0,.16)';X.fillRect(-W/2,-H/2,26,H);const g=X.createLinearGradient(-W/2,-H/2,W/2,H/2);g.addColorStop(0,'rgba(255,255,255,.28)');g.addColorStop(.6,'rgba(255,255,255,0)');X.fillStyle=g;X.fillRect(-W/2,-H/2,W,H);X.restore();
 // title lines + a little star
 rr(-60,-86,130,16,8,'#fff3c4',0);rr(-50,-58,110,12,6,'rgba(255,243,196,.75)',0);
 X.save();X.translate(6,-6);X.fillStyle='#ffd23f';X.strokeStyle=OUT;X.lineWidth=4;X.beginPath();for(let k=0;k<10;k++){const a=k/10*Math.PI*2-Math.PI/2,rad=k%2?14:32;X.lineTo(Math.cos(a)*rad,Math.sin(a)*rad)}X.closePath();X.fill();X.stroke();X.restore();
 // library sticker with barcode
 rr(-62,52,124,64,8,'#fff',5);X.fillStyle='#151515';for(let k=0;k<16;k++)X.fillRect(-50+k*6.3,62,k%3?3:5,34);
 rr(-W/2+2,H/2-58,24,40,4,'#ffffff',3);
 if(ch){for(const [dx,dy] of[[W/2-62,-H/2+22],[W/2-30,-H/2+30],[W/2-14,-H/2+60]])ell(dx,dy,5,7,'rgba(0,0,0,.35)',0)}
 if(o.drool){const t=o.t||0;for(let k=0;k<2;k++){const ph=(t*.9+k*.5)%1;X.globalAlpha=1-ph;ell(W/2-40+k*26,-H/2+8+ph*70,7,11,'#9fdcff',3);X.globalAlpha=1}}
 X.restore()}
function dogbed3(x,y,s=1,o={}){const col=o.col||'#7e57c2',OUT='#151515';X.save();X.translate(x,y);X.scale(s,s);
 if(!o.front){X.save();X.globalAlpha=.22;ell(0,10,300,40,'#000',0);X.restore();
  ell(0,-60,290,95,col,8);ell(0,-70,230,62,'#efe3cf',6);for(let k=-2;k<=2;k++)line([[k*70-20,-92],[k*70+20,-92]],4,'rgba(0,0,0,.08)')}
 else{X.beginPath();X.ellipse(0,-60,290,95,0,0.08,Math.PI-.08);X.lineTo(-230,-50);X.ellipse(0,-50,232,40,0,Math.PI,0,true);X.closePath();X.fillStyle=col;X.fill();X.strokeStyle=OUT;X.lineWidth=8;X.stroke();
  X.globalAlpha=.25;X.fillStyle='#fff';X.beginPath();X.ellipse(-120,-30,60,12,-.15,0,7);X.fill();X.globalAlpha=1}
 X.restore()}

// craft ladder 2026-11-23: jumper3(x,y,s,o) = a loose school jumper prop (x,y = neckline centre), o.col, o.rot, o.tag (white name tag), o.drape (sleeves hang down 0..1)
function jumper3(x,y,s=1,o={}){const c=o.col||'#2f4f8a',d=o.drape==null?.4:o.drape;X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);X.lineJoin='round';X.lineCap='round';
 const sl=(f)=>{X.save();X.scale(f,1);X.strokeStyle='#151515';X.lineWidth=58;X.beginPath();X.moveTo(70,30);X.quadraticCurveTo(170,40+d*40,180+(-d*40),110+d*150);X.stroke();X.strokeStyle=c;X.lineWidth=46;X.stroke();X.fillStyle='rgba(0,0,0,.25)';X.beginPath();X.arc(180-d*40,110+d*150,23,0,7);X.fill();X.restore()};sl(1);sl(-1);
 path(()=>{X.moveTo(-95,0);X.lineTo(95,0);X.lineTo(105,230);X.lineTo(-105,230);X.closePath()},c,7);
 rr(-105,200,210,32,6,'rgba(0,0,0,.2)',0);for(let k=-4;k<=4;k++)line([[k*22,204],[k*22,228]],3,'rgba(0,0,0,.25)');
 path(()=>{X.moveTo(-48,-2);X.lineTo(0,80);X.lineTo(48,-2)},'#ffffff',6);
 if(o.tag){rr(-36,20,72,36,6,'#ffffff',4);line([[-22,34],[22,34]],4,'#e2508a');line([[-22,44],[10,44]],3,'#9aa0aa')}
 X.restore()}
// lostbox3(x,y,s,o) = school lost-property crate overflowing with navy jumpers; (x,y) = bottom centre; o.n = jumpers on the pile (grows the heap), o.t
function lostbox3(x,y,s=1,o={}){const n=o.n==null?8:o.n,t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.22;ell(0,8,330,30,'#000',0);X.globalAlpha=1;
 rr(-300,-300,600,300,26,'#3f8fd9',8);
 const cols=['#2f4f8a','#26406f','#34558f','#2b4a80','#3a5d99','#2f4f8a','#22396a','#33528c'];
 X.save();X.beginPath();X.rect(-420,-900,840,620);X.clip();
 // the heap: older jumpers lower, newer on top
 const spots=[[-180,-300,.7,-.3],[150,-300,.7,.35],[0,-320,.75,.05],[-120,-380,.7,.5],[120,-390,.72,-.45],[-30,-440,.74,.2],[90,-500,.68,-.15],[-110,-520,.7,.35],[20,-580,.72,-.05],[-60,-640,.66,.4]];
 for(let i=0;i<Math.min(n,spots.length);i++){const[sx,sy,ss,rot]=spots[i];jumper3(sx,sy-120,ss,{col:cols[i%cols.length],rot,tag:i%3===0,drape:.7})}
 // odd ones out: a trainer + a water bottle
 X.restore();
 X.save();X.translate(230,-330);X.rotate(.4);rr(-26,-110,52,120,14,'#ff7a5a',5);rr(-18,-130,36,26,8,'#2e3b40',4);X.restore();
 X.save();X.translate(-250,-310);X.rotate(-.2);ell(0,0,70,30,'#f5f5f5',6);rr(-70,-8,140,20,8,'#e86a5a',0);X.restore();
 rr(-300,-300,600,300,26,'#3f8fd9',8);rr(-300,-300,600,46,18,'#5aa6ea',6);
 for(const hx of[-170,170])rr(hx-60,-200,120,40,20,'#2b6fb0',5);
 X.restore()}

// ---------- craft ladder 2026-11-23 14:00: city bus stop kit ----------
// street3(t,{dusk}) side-view city street: painted sky, blurred skyline, road band, kerb, pavement. busstop3(x,y,s,{eta,dusk}) glass shelter with a roof, LED board and bench.
// bus3(x,y,s,{door,t}) side-view city bus (y = road line), doors open with door 0..1. drybag3(x,y,s) dry-cleaning bag on a hanger.
function street3(t,o={}){const d=o.dusk?1:0;
 if(d){psky('#3b3f7a','#d9779a','#ffc58a',1000);psun(800,880,120,t)}else{psky('#8fd0ff','#cfeaff','#fff3dc',1000);psun(880,260,85,t)}
 pclouds(t,300,d?'#ffd6c8':'#fbfbff',d?'#e6a3b5':'#d9e2f0');
 pblur(3,()=>{const cols=d?['#6d5f8f','#7d6a96','#5d5480','#8a6f92']:['#c9d6e6','#b5c5da','#d9cdbd','#c3b8cf'];
  for(let k=0;k<8;k++){const x=-120+k*170,h=380+rnd(k+3)*360;rr(x,1000-h,150,h+20,6,cols[k%4],0);
   for(let r=0;r<h/90-1;r++)for(let c=0;c<2;c++)rr(x+28+c*60,1000-h+40+r*90,36,46,4,d?(rnd(k*9+r*3+c)>.45?'#ffd98a':'#4a4470'):'rgba(255,255,255,.55)',0)}});
 X.fillStyle=d?'#4f4a63':'#7d858d';X.fillRect(-3000,1000,8000,330);
 X.fillStyle='rgba(255,255,255,.75)';for(let k=0;k<7;k++)X.fillRect(-60+k*190,1150,110,14);
 X.fillStyle=d?'#8a8296':'#c9c4ba';X.fillRect(-3000,1330,8000,40);
 const g=X.createLinearGradient(0,1370,0,1920);g.addColorStop(0,d?'#a89aa6':'#ddd6ca');g.addColorStop(1,d?'#7d7186':'#bdb3a4');X.fillStyle=g;X.fillRect(-3000,1370,8000,700);
 X.strokeStyle='rgba(0,0,0,.08)';X.lineWidth=3;for(let k=0;k<9;k++){X.beginPath();X.moveTo(-100+k*160,1370);X.lineTo(-260+k*200,1920);X.stroke()}
 if(d)glow(800,900,900,'255,170,120',.35);else glow(880,300,700,'255,240,200',.3)}
function busstop3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 rr(-20,-900,26,900,6,'#3d4650',5);rr(400,-900,26,900,6,'#3d4650',5);
 X.globalAlpha=.32;rr(10,-860,390,640,8,'#bfe3f5',4);X.globalAlpha=1;line([[60,-820],[150,-640]],8,'rgba(255,255,255,.7)');
 rr(-60,-960,540,70,18,'#2e8b57',7);circ(-60+40,-925,22,'#fff',0);txt('🚌',-20,-922,30,'#000',0);
 rr(-4,-470,30,470,0,'rgba(0,0,0,0)',0);
 if(o.eta){rr(60,-830,300,110,16,'#151515',6);txt(o.eta,210,-772,56,'#ffb02e',0,'800 ')}
 rr(40,-330,350,36,10,'#b07a4a',6);rr(70,-294,18,120,4,'#5a3c25',4);rr(340,-294,18,120,4,'#5a3c25',4);
 X.restore()}
function bus3(x,y,s=1,o={}){const op=o.door||0;X.save();X.translate(x,y);X.scale(s,s);
 X.fillStyle='rgba(0,0,0,.22)';X.beginPath();X.ellipse(0,10,900,40,0,0,7);X.fill();
 rr(-880,-720,1760,640,70,'#e0533d',9);rr(-880,-260,1760,90,0,'#c2412e',0);rr(-880,-720,1760,80,60,'#f47a5d',0);
 for(let k=0;k<6;k++){const wx=-780+k*250;if(k==2)continue;rr(wx,-620,200,230,22,'#bfe3f5',6);line([[wx+30,-590],[wx+80,-440]],10,'rgba(255,255,255,.75)')}
 const dx=-280,dw=220;rr(dx-8,-628,dw+16,560,14,'#3a3a44',6);X.fillStyle='#2b2b33';X.fillRect(dx,-620,dw,545);
 for(const sd of[0,1]){const w=dw/2*(1-op*.82),px=sd?dx+dw-w:dx;X.save();X.globalAlpha=.85;rr(px,-620,w,545,8,'#bfe3f5',5);X.restore()}
 rr(780,-620,90,250,30,'#bfe3f5',6);circ(840,-170,30,'#ffd23f',5);
 rr(-200,-345,560,60,14,'#fff',0);txt('12 · CITY CENTRE',80,-312,36,'#e0533d',0,'800 ');
 for(const wx of[-560,560]){circ(wx,-70,95,'#1b1b1f',0);circ(wx,-70,45,'#9aa0aa',6)}
 X.restore()}
function drybag3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);X.rotate(o.rot||0);
 line([[0,-30],[0,-70]],7,'#555');X.strokeStyle='#555';X.lineWidth=7;X.beginPath();X.arc(0,-85,16,Math.PI*.1,Math.PI*1.2,true);X.stroke();
 line([[-110,0],[0,-30],[110,0]],9,'#666');
 X.globalAlpha=.9;path(()=>{X.moveTo(-120,0);X.lineTo(120,0);X.lineTo(135,380);X.lineTo(-135,380);X.closePath()},'#2c3e66',6);
 X.globalAlpha=.45;path(()=>{X.moveTo(-125,-6);X.lineTo(125,-6);X.lineTo(140,390);X.lineTo(-140,390);X.closePath()},'#e8f4ff',4);X.globalAlpha=1;
 line([[-40,20],[-20,300]],6,'rgba(255,255,255,.6)');rr(-60,120,120,40,10,'#fff',3);txt('CLEAN',0,141,22,'#2c3e66',0,'800 ');X.restore()}
// craft ladder 2026-11-23 16:00: piano3(x,y,s,o) upright piano, feet at (x,y), ~520*s wide, ~600*s tall; keyboard top at y-330*s.
//  o.web (0..1 cobweb across the keys + dangling spider), o.t, o.lid (0..1 open fallboard? default open), o.press (key index pressed -1 none), o.music (sheet on the stand)
function piano3(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 X.fillStyle='rgba(0,0,0,.18)';X.beginPath();X.ellipse(0,6,300,26,0,0,7);X.fill();
 rr(-250,-600,500,280,22,'#5b3524',7);rr(-232,-582,464,244,16,'#6e4130',0);
 rr(-200,-560,400,180,12,'#7c4a37',4);
 if(o.music){X.save();X.translate(0,-470);X.rotate(-.04);rr(-80,-60,160,110,6,'#fbf7ee',4);for(let i=0;i<4;i++){line([[-64,-36+i*24],[64,-36+i*24]],2,'#9a9a9a');circ(-40+i*28,-40+i*24+((i*7)%10),6,'#222',0)}X.restore()}
 rr(-270,-345,540,40,10,'#4a2a1c',6);
 rr(-250,-330,500,70,6,'#fbfbf7',5);
 for(let i=1;i<20;i++){const kx=-250+i*25;line([[kx,-330],[kx,-262]],2,'#9a9a9a')}
 if(o.press!=null&&o.press>=0){const kx=-250+o.press*25;X.fillStyle='rgba(255,200,60,.55)';X.fillRect(kx+1,-328,23,66)}
 for(let i=0;i<20;i++){if([0,1,3,4,5].includes(i%7)){const kx=-250+(i+1)*25-8;rr(kx,-330,16,40,3,'#151515',0)}}
 rr(-250,-262,500,250,10,'#5b3524',7);rr(-220,-240,440,200,12,'#6a3e2d',4);
 rr(-262,-20,30,20,4,'#3a2014',4);rr(232,-20,30,20,4,'#3a2014',4);
 circ(-40,-30,9,'#d4af37',3);circ(0,-30,9,'#d4af37',3);circ(40,-30,9,'#d4af37',3);
 const w=o.web||0;if(w>0){cobweb(-190,-345,150,0,Math.PI/2,w);cobweb(200,-345,140,Math.PI/2,Math.PI,w);
  X.save();X.globalAlpha=w;const sy=-250+Math.sin(t*1.6)*16;X.strokeStyle='#f4f6fa';X.lineWidth=2;X.beginPath();X.moveTo(-30,-345);X.lineTo(-30,sy);X.stroke();
  circ(-30,sy+14,15,'#151515',0);for(let k=0;k<4;k++){line([[-30,sy+14],[-52,sy+4+k*8]],3,'#151515');line([[-30,sy+14],[-8,sy+4+k*8]],3,'#151515')}
  circ(-35,sy+10,4,'#fff',0);circ(-25,sy+10,4,'#fff',0);X.restore()}
 X.restore()}
// note3(x,y,s,o): a flying music note. o.bad (red, wobbly, with a little ✗ face) or golden; o.a alpha, o.rot
function note3(x,y,s=1,o={}){if((o.a==null?1:o.a)<=0)return;X.save();X.globalAlpha=C(o.a==null?1:o.a);X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 const c=o.bad?'#e2483d':'#ffc531';if(!o.bad)glow(0,0,90,'255,210,80',.35);
 X.lineCap='round';line([[22,-10],[22,-110]],12,'#151515');X.beginPath();X.moveTo(22,-110);X.quadraticCurveTo(60,-90,52,-50);X.lineWidth=12;X.strokeStyle='#151515';X.stroke();
 X.save();X.rotate(-.35);X.beginPath();X.ellipse(0,0,32,23,0,0,7);X.fillStyle=c;X.fill();X.lineWidth=6;X.strokeStyle='#151515';X.stroke();X.restore();
 if(o.bad){line([[-12,-8],[-4,0]],4,'#151515');line([[-4,-8],[-12,0]],4,'#151515');line([[4,-8],[12,0]],4,'#151515');line([[12,-8],[4,0]],4,'#151515')}
 X.restore()}

// ---------- craft ladder 2026-11-23 18:00: desert-dry gag + running tap + toothpaste foam ----------
// tumbleweed3(x,y,s,t): a rolling tumbleweed (scribbly brown ball) with dust puffs behind it; (x,y)=ground contact
function tumbleweed3(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.25;X.fillStyle='#000';X.beginPath();X.ellipse(0,4,70,12,0,0,7);X.fill();X.globalAlpha=1;
 for(let k=0;k<5;k++){const q=(t*1.6+k/5)%1;X.save();X.globalAlpha=.45*(1-q);X.fillStyle='#d8c39a';X.beginPath();X.arc(-60-q*140,-10-q*30,10+q*22,0,7);X.fill();X.restore()}
 X.translate(0,-72);X.rotate(t*5);X.lineCap='round';X.strokeStyle='#8a6a3a';X.lineWidth=6;
 for(let k=0;k<14;k++){const a=rnd(k+1)*7,r1=20+rnd(k+3)*50;X.beginPath();X.arc(Math.cos(a)*10,Math.sin(a)*10,r1,a,a+2.2+rnd(k+5)*1.6);X.stroke()}
 X.strokeStyle='#5e4422';X.lineWidth=4;for(let k=0;k<8;k++){const a=rnd(k+20)*7;X.beginPath();X.arc(0,0,40+rnd(k+30)*28,a,a+1.4);X.stroke()}X.restore()}
// tapwater(x,y,len,t,a): a running stream from a tap spout at (x,y) down len px, with splash drops at the bottom
function tapwater(x,y,len=120,t=0,a=1){if(a<=0)return;X.save();X.globalAlpha=.85*a;const g=X.createLinearGradient(x-10,0,x+10,0);g.addColorStop(0,'#8fd3f5');g.addColorStop(.5,'#e8f8ff');g.addColorStop(1,'#7cc3e8');X.fillStyle=g;
 X.beginPath();X.moveTo(x-13,y);X.lineTo(x+13,y);X.lineTo(x+10+Math.sin(t*30)*2,y+len);X.lineTo(x-10+Math.sin(t*30)*2,y+len);X.closePath();X.fill();
 X.strokeStyle='rgba(255,255,255,.9)';X.lineWidth=3;X.beginPath();X.moveTo(x-2,y+6);X.lineTo(x-1,y+len-8);X.stroke();
 for(let k=0;k<7;k++){const q=(t*2.4+rnd(k+4))%1,d=k%2?1:-1;X.fillStyle='#9fdcf7';X.beginPath();X.arc(x+d*(10+q*60*rnd(k+8)),y+len-Math.sin(q*Math.PI)*40,5*(1-q)+2,0,7);X.fill()}X.restore()}
// foam3(x,y,s,t): toothpaste foam around a mouth (x,y = mouth centre), little bubbles drifting off
function foam3(x,y,s=1,t=0){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#ffffff';X.strokeStyle='#cfe3ee';X.lineWidth=3;
 for(let k=0;k<9;k++){const a=k/9*Math.PI*2,r=26+rnd(k)*8;X.beginPath();X.arc(Math.cos(a)*34,Math.sin(a)*14+4,r*.6+Math.sin(t*6+k)*2,0,7);X.fill();X.stroke()}
 for(let k=0;k<5;k++){const q=(t*.8+k/5)%1;X.globalAlpha=1-q;X.beginPath();X.arc(-50+k*25+Math.sin(t*3+k)*10,-20-q*120,6+rnd(k+2)*8,0,7);X.fill();X.stroke()}X.restore()}
// ---- 2026-11-23 22:00 craft ladder: dishwasher3() kitchen dishwasher (closed with a glowing CLEAN light, or open with a rack of clean plates), dishtower3() leaning tower of dirty dishes in a kitchen sink ----
// dishwasher3(x,y,s,{clean:0..1 light, open:0..1, t}) x = centre, y = top of the front panel
function dishwasher3(x,y,s=1,o={}){const t=o.t||0,op=C(o.open||0);X.save();X.translate(x,y);X.scale(s,s);
 rr(-190,0,380,430,14,'#cfd6de',7);rr(-190,0,380,62,12,'#2b2f36',6);
 // control strip: clean light
 const cl=C(o.clean||0);circ(-130,31,9,cl>0?'#56f08a':'#3d4450',0);
 if(cl>0){glow(-20,31,150,'90,240,140',.5*cl);X.save();X.globalAlpha=cl;txt('CLEAN ✓',30,33,34,'#7dffa8',0);X.restore()}
 circ(150,31,12,'#555b66',4);
 if(op<=0){rr(-150,96,300,20,10,'#9aa3ad',5);line([[-170,200],[170,200]],4,'rgba(255,255,255,.5)')}
 else{// open: dark cavity + pulled-out rack of clean plates
  rr(-170,80,340,330,10,'#3a4049',5);
  for(let k=0;k<7;k++){const px=-130+k*43,py=300-Math.sin(k*1.3)*6;ell(px,py,14,78,'#ffffff',4);ell(px,py,7,52,'#eef4fb',0)}
  rr(-175,370,350,26,8,'#9aa3ad',5);for(let k=0;k<8;k++)line([[-160+k*45,300],[-160+k*45,380]],4,'#8a939d');
  sparkles(0,250,.6+.4*Math.sin(t*3),7,170,'#ffffff');
  // door folded down toward the viewer
  path(()=>{X.moveTo(-190,430);X.lineTo(190,430);X.lineTo(205,430+90*op);X.lineTo(-205,430+90*op)},'#bfc7d0',6)}
 X.restore()}
// dishtower3(x,y,s,{t,n,wob,stink}) x,y = base of the pile at the sink rim; plates lean, food smears, a mug and a pan on top
function dishtower3(x,y,s=1,o={}){const t=o.t||0,n=o.n||13,wb=(o.wob==null?1:o.wob);X.save();X.translate(x,y);X.scale(s,s);
 // sink basin + tap
 rr(-200,-24,400,40,12,'#b7c0ca',6);rr(-170,-14,340,22,8,'#6f7a86',0);
 line([[170,-24],[170,-170],[110,-170],[110,-140]],16,'#9aa3ad');line([[170,-24],[170,-170],[110,-170],[110,-140]],6,'#d9e0e6');
 if(o.bare){X.restore();return}
 X.rotate(Math.sin(t*2.6)*.03*wb);
 const smear=['#d9822b','#8a5a2b','#c94a3a','#e3b23c','#6e8b3d'];
 let yy=-20,dx=0;for(let k=0;k<n;k++){dx=Math.sin(k*.9)*14+k*2.2;const w=k%4==3?78:100,col=k%3==0?'#ffffff':(k%3==1?'#e9f1fb':'#fff6e6');
  ell(dx,yy,w,20,col,5);ell(dx,yy-3,w*.66,11,'#f4f7fb',0);
  X.save();X.globalAlpha=.85;ell(dx+(k%2?-30:26),yy-4,16+k%3*5,6,smear[k%5],0);X.restore();
  yy-=k%4==3?34:26}
 // bowl, mug, pan handle, fork on top
 path(()=>{X.moveTo(dx-80,yy+4);X.quadraticCurveTo(dx,yy+80,dx+80,yy+4)},'#ffd23f',6);ell(dx,yy+4,80,14,'#ffe680',5);
 mug3(dx+10,yy-6,.8,{col:'#5a8fe8',stain:1});
 line([[dx-70,yy+20],[dx-150,yy-110]],10,'#2b2b2b');line([[dx+60,yy-10],[dx+120,yy-120]],7,'#b7c0ca');
 X.restore();
 if(o.stink)stink(x+20*s,y-(n*28+120)*s,t,o.stink,.8*s)}

// ---- 2026-11-24 09:00 craft ladder: stairs3() staircase with banister, clothespile3() teen 'floordrobe' mountain, lbasket3() wicker laundry basket ----
// stairs3(x,y,{n,w,h,col,warm}) staircase rising to the RIGHT: (x,y) = floor point at the foot of the first step; returns {tx,ty} = top landing point
function stairs3(x,y,o={}){const n=o.n||7,w=o.w||62,h=o.h||70,tr=o.col||'#b9814f',ri=o.riser||'#fff8ef';X.save();X.lineJoin='round';
 // side stringer (the wall-side mass under the steps)
 path(()=>{X.moveTo(x,y);for(let k=0;k<n;k++){X.lineTo(x+k*w,y-(k+1)*h);X.lineTo(x+(k+1)*w,y-(k+1)*h)}X.lineTo(x+n*w+400,y-n*h);X.lineTo(x+n*w+400,y);X.closePath()},o.side||'#e9d3b4',7);
 for(let k=0;k<n;k++){const sx=x+k*w,sy=y-(k+1)*h;rr(sx-6,sy,w+12,h,4,ri,5);rr(sx-10,sy-14,w+20,20,6,tr,5)}
 const lx=x+n*w,ly=y-n*h;rr(lx-10,ly-14,420,22,6,tr,5);
 // banister: posts + rail
 const rail=(k)=>[x+k*w+w*.5,y-(k+1)*h-190];
 for(let k=0;k<n;k++){const[px,py]=rail(k);line([[px,py],[px,y-(k+1)*h-14]],7,'#3a2a20')}
 rr(x-24,y-h-250,30,250,8,tr,6);circ(x-9,y-h-262,20,tr,6);
 line([[x-9,y-h-235],[x+n*w,ly-205]],18,'#151515');line([[x-9,y-h-235],[x+n*w,ly-205]],10,tr);
 X.restore();return{tx:lx+120,ty:ly-14}}
// clothespile3(x,y,s,{t,stink,n}) a heaped mountain of clothes, (x,y) = floor point under its centre; jumpers, jeans, tees, socks, one sock on top waving
function clothespile3(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);X.lineJoin='round';X.globalAlpha=.22;ell(0,8,330,34,'#000',0);X.globalAlpha=1;
 const cols=['#2f4f8a','#e86a5a','#4caf7a','#ffb02e','#7a5ac8','#3a3a48','#5fb4ff','#d9577a','#8a6a4a','#f1f1f1'];
 // body of the mound
 path(()=>{X.moveTo(-320,0);X.quadraticCurveTo(-300,-170,-170,-260);X.quadraticCurveTo(-60,-390,40,-380);X.quadraticCurveTo(170,-360,240,-230);X.quadraticCurveTo(330,-120,320,0);X.closePath()},'#4a5a8a',8);
 // garments: jumpers, tees and hoodies tumbling over the mound
 jumper3(-190,-150,.62,{col:'#e86a5a',rot:-.5,drape:.7});jumper3(150,-170,.6,{col:'#ffb02e',rot:.45,drape:.6});
 hoodie(-30,-330,.62,'#4caf7a');jumper3(-60,-120,.66,{col:'#2f4f8a',rot:.1,drape:.5});
 jumper3(230,-80,.5,{col:'#7a5ac8',rot:.9,drape:.8});jumper3(-260,-60,.46,{col:'#f1f1f1',rot:-1.0,drape:.8});
 jumper3(60,-260,.5,{col:'#d9577a',rot:-.25,drape:.6});
 // sleeves / trouser legs flopping out
 const leg=(x0,y0,x1,y1,c,wd)=>{X.lineCap='round';X.strokeStyle='#151515';X.lineWidth=wd+12;X.beginPath();X.moveTo(x0,y0);X.quadraticCurveTo((x0+x1)/2,y0-30,x1,y1);X.stroke();X.strokeStyle=c;X.lineWidth=wd;X.stroke()};
 leg(-280,-60,-380,-6,'#2f4f8a',46);leg(250,-60,370,-10,'#3a3a48',52);leg(120,-250,250,-300,'#e86a5a',36);leg(-160,-250,-260,-310,'#4caf7a',34);
 // socks scattered + one on the summit
 sock3(-120,-6,.32,{rot:1.4});sock3(300,-4,.28,{rot:-1.3});
 X.save();X.translate(10,-370);X.rotate(Math.sin(t*2.4)*.12);sock3(0,0,.42,{t});X.restore();
 if(o.stink)stink(0,-300,t,o.stink,1.1);
 X.restore()}
// lbasket3(x,y,s,{full,web,t}) wicker laundry basket, (x,y) = floor point under its centre; full = clothes poking out, web = cobweb inside (empty basket gag)
function lbasket3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);X.lineJoin='round';X.globalAlpha=.22;ell(0,6,130,16,'#000',0);X.globalAlpha=1;
 const f=C(o.full||0);
 if(f>0){X.save();X.translate(0,(1-f)*120);ell(-40,-250,70,40,'#e86a5a',6,.3);ell(40,-260,80,44,'#2f4f8a',6,-.2);ell(0,-290,60,34,'#4caf7a',6);sock3(70,-290,.3,{rot:-.6,clean:0});X.restore()}
 path(()=>{X.moveTo(-120,-250);X.lineTo(120,-250);X.lineTo(100,0);X.lineTo(-100,0);X.closePath()},'#d8b27a',7);
 X.save();X.beginPath();X.moveTo(-120,-250);X.lineTo(120,-250);X.lineTo(100,0);X.lineTo(-100,0);X.closePath();X.clip();
 X.strokeStyle='rgba(120,80,30,.45)';X.lineWidth=5;for(let k=-6;k<=6;k++){X.beginPath();X.moveTo(k*22,-250);X.lineTo(k*18,0);X.stroke()}
 for(let j=1;j<6;j++){X.beginPath();X.moveTo(-130,-250+j*42);X.lineTo(130,-250+j*42);X.stroke()}X.restore();
 rr(-132,-266,264,28,12,'#c79a5e',7);rr(-60,-215,120,34,16,'rgba(0,0,0,.25)',0);
 if(o.web)cobweb(-112,-240,110,0,Math.PI/2,o.web);
 X.restore()}
// ---- craft ladder 2026-11-24 12:00: Christmas-elf kit ----
// elf3(x,y,s,{t,web,sit,look,wink,tilt}) a generic felt toy Christmas elf (original design, no brand): red pointy hat with white bobble + fur band, peach face, rosy cheeks, green felt suit with red/white collar points.
// (x,y) = the seat point (bottom of the body). sit:1 legs dangle forward over a shelf edge; web 0..1 = cobweb from the hat tip (hasn't moved); look [-1..1,-1..1] pupils; wink:1.
function elf3(x,y,s=1,o={}){const t=o.t||0,OUT='#151515';X.save();X.translate(x,y);X.scale(s,s);X.rotate((o.tilt||0)*Math.PI/180);X.lineJoin='round';X.lineCap='round';
 // legs: striped red/white, dangling (sit) or straight down
 const sw=Math.sin(t*2.2)*(o.swing?6:0);
 for(const sx of[-22,22]){X.save();X.translate(sx,-6);X.rotate((sx<0?1:-1)*.06+sw*.01);
  if(o.sit){line([[0,0],[sx*.2,60]],22,OUT);line([[0,0],[sx*.2,60]],14,'#ffffff');for(let k=0;k<3;k++){line([[sx*.2*(k*20+8)/60,k*20+6],[sx*.2*(k*20+14)/60,k*20+14]],14,'#e2353a')}
   ell(sx*.2+(sx<0?-8:8),70,20,12,'#2f8a4e',5)}
  else{line([[0,0],[0,40]],22,OUT);line([[0,0],[0,40]],14,'#e2353a');ell(0,48,20,11,'#2f8a4e',5)}
  X.restore()}
 // body: green felt bell
 path(()=>{X.moveTo(-46,0);X.quadraticCurveTo(-50,-60,-28,-96);X.lineTo(28,-96);X.quadraticCurveTo(50,-60,46,0);X.closePath()},'#2f9a55',6);
 rr(-48,-14,96,16,8,'#1f6e3c',5);circ(0,-50,7,'#ffd23f',4);
 // arms: little felt arms resting on knees, mitten hands
 for(const sx of[-1,1]){line([[sx*30,-82],[sx*52,-34]],18,OUT);line([[sx*30,-82],[sx*52,-34]],11,'#2f9a55');circ(sx*54,-28,11,'#f3c9a8',4)}
 // collar points red/white
 for(let k=-3;k<=3;k++){const cx=k*15;path(()=>{X.moveTo(cx-9,-100);X.lineTo(cx+9,-100);X.lineTo(cx,-78);X.closePath()},k%2?'#ffffff':'#e2353a',4)}
 // head
 const hy=-142;circ(0,hy,46,'#f6d2b4',6);
 X.globalAlpha=.55;circ(-26,hy+12,10,'#ff8a8a',0);circ(26,hy+12,10,'#ff8a8a',0);X.globalAlpha=1;
 const lk=o.look||[0,0];
 if(o.wink){line([[-22,hy-4],[-10,hy-4]],5,OUT)}else{circ(-16,hy-4,8,'#fff',3);circ(-16+lk[0]*3,hy-4+lk[1]*3,4.5,OUT,0)}
 circ(16,hy-4,8,'#fff',3);circ(16+lk[0]*3,hy-4+lk[1]*3,4.5,OUT,0);
 path(()=>{X.arc(0,hy+14,12,.15*Math.PI,.85*Math.PI)},null,4);
 // pointy ears
 for(const sx of[-1,1])path(()=>{X.moveTo(sx*42,hy-6);X.lineTo(sx*66,hy-22);X.lineTo(sx*44,hy+10);X.closePath()},'#f6d2b4',5);
 // hat: fur band + floppy red cone + bobble
 const fl=Math.sin(t*1.8)*.05;
 X.save();X.translate(0,hy-34);
 path(()=>{X.moveTo(-44,0);X.quadraticCurveTo(-30,-90,22+fl*200,-120);X.quadraticCurveTo(10,-60,44,0);X.closePath()},'#e2353a',6);
 X.fillStyle='rgba(255,255,255,.14)';X.beginPath();X.moveTo(-30,-6);X.quadraticCurveTo(-20,-70,16,-108);X.quadraticCurveTo(-8,-60,-14,-6);X.fill();
 rr(-52,-14,104,28,14,'#ffffff',5);circ(22+fl*200,-122,15,'#ffffff',5);
 if(o.web)cobweb(22+fl*200,-122,120,-Math.PI*.95,-Math.PI*.35,o.web);
 X.restore();
 X.restore()}
// wshelf3(x,y,w,{t}) floating wooden wall shelf, (x,y) = centre of the TOP surface; w = width; two black brackets underneath, a little candle + book at the ends
function wshelf3(x,y,w=320,o={}){X.save();X.translate(x,y);X.lineJoin='round';
 X.globalAlpha=.18;rr(-w/2+10,14,w,30,10,'#000',0);X.globalAlpha=1;
 for(const sx of[-w*.32,w*.32]){path(()=>{X.moveTo(sx-8,20);X.lineTo(sx-8,80);X.lineTo(sx+8,80);X.lineTo(sx+8,34);X.lineTo(sx+44,34);X.lineTo(sx+44,20);X.closePath()},'#2a2a30',4)}
 rr(-w/2,0,w,26,6,'#b07a4c',6);rr(-w/2+6,3,w-12,7,4,'rgba(255,255,255,.22)',0);
 if(o.deco!==0){rr(w/2-62,-56,26,56,5,'#e9e4d8',4);X.save();X.globalAlpha=.8+.2*Math.sin((o.t||0)*9);ell(w/2-49,-70,7,12,'#ffb02e',0);X.restore();
  rr(-w/2+18,-70,22,70,4,'#5a8fe8',4);rr(-w/2+42,-62,20,62,4,'#e86a5a',4)}
 X.restore()}
// fbowl3(x,y,s,{elf,t}) wide ceramic fruit bowl on a surface, (x,y) = bottom centre; apples, orange, banana; elf:1 = the toy elf sits IN the bowl, grinning (morning surprise gag)
function fbowl3(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);X.lineJoin='round';X.globalAlpha=.22;ell(0,4,170,18,'#000',0);X.globalAlpha=1;
 // fruit behind
 circ(-90,-118,42,'#e2353a',6);circ(80,-120,44,'#ff9a2e',6);
 if(o.elf){X.save();elf3(-6,-70,.78,{t,look:[.2,.3],wink:o.wink,tilt:-6});X.restore()}
 else{circ(0,-140,46,'#4caf7a',6)}
 // banana arcing over the rim
 X.save();X.translate(60,-96);X.rotate(-.3);path(()=>{X.moveTo(-70,0);X.quadraticCurveTo(0,-60,80,-6);X.quadraticCurveTo(0,-30,-70,0);X.closePath()},'#ffd23f',6);X.restore();
 circ(-120,-80,34,'#c4383d',6);
 // bowl
 path(()=>{X.moveTo(-170,-100);X.quadraticCurveTo(-160,0,-60,0);X.lineTo(60,0);X.quadraticCurveTo(160,0,170,-100);X.closePath()},'#5fb4ff',7);
 X.fillStyle='rgba(255,255,255,.25)';X.beginPath();X.moveTo(-150,-90);X.quadraticCurveTo(-140,-30,-90,-18);X.quadraticCurveTo(-130,-50,-130,-90);X.fill();
 rr(-178,-110,356,20,10,'#7cc3ff',6);
 X.restore()}
// wallcal3(x,y,s,o): hanging wall calendar (nail + string at x,y top). o.month ('OCTOBER'), o.pic (emoji for the picture page, e.g. '🎃'), o.cob (0..1 cobweb in the top corner),
//   o.ring (0..1 red circle on day o.day), o.day (1..31), o.first (0=Mon..6 weekday of the 1st), o.sway (time -> gentle swing), o.col (month bar colour). 2026-11-24 craft ladder (Remind Mom).
function wallcal3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);if(o.sway!=null)X.rotate(Math.sin(o.sway*2.2)*.025);
 circ(0,0,9,'#7a5a3a',4);line([[0,0],[-70,70]],4,'#5a4a3a');line([[0,0],[70,70]],4,'#5a4a3a');
 X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=18;X.shadowOffsetY=8;rr(-160,64,320,440,14,'#fffdf7',6);X.shadowColor='transparent';X.shadowOffsetY=0;
 for(let k=-5;k<=5;k++)circ(k*28,72,5,'#9aa0a8',0);
 rr(-140,92,280,170,10,o.bg||'#f6b04a',0);X.save();X.globalAlpha=.25;circ(-80,130,60,'#fff',0);X.restore();
 txt(o.pic||'🎃',0,182,110,'#111',0,'400 ');
 rr(-140,272,280,56,8,o.col||'#e0533d',0);txt(o.month||'OCTOBER',0,301,40,'#fff',0,'900 ');
 const f=o.first||0;for(let d=1;d<=30;d++){const i=d-1+f,cx=-120+(i%7)*40,cy=354+Math.floor(i/7)*30;X.fillStyle='#4a4f57';X.font="700 19px Inter";X.textAlign='center';X.textBaseline='middle';X.fillText(d,cx,cy);
  if(o.ring&&d===o.day){X.save();X.globalAlpha=C(o.ring);X.strokeStyle='#ff3b30';X.lineWidth=5;X.beginPath();X.ellipse(cx,cy,24,18,0,0,7*C(o.ring));X.stroke();X.restore()}}
 if(o.cob){cobweb(160,70,120,-Math.PI/2,0,o.cob);cobweb(-160,70,90,Math.PI,Math.PI*1.5,o.cob)}
 X.restore()}
// pad3(x,y,s,rot): game controller (promoted from examples/leash_look3 on 2026-11-24 so every scene can use it)
function pad3(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);path(()=>{X.moveTo(-70,-26);X.quadraticCurveTo(0,-40,70,-26);X.quadraticCurveTo(100,30,70,40);X.quadraticCurveTo(40,46,24,18);X.lineTo(-24,18);X.quadraticCurveTo(-40,46,-70,40);X.quadraticCurveTo(-100,30,-70,-26);X.closePath()},'#2a2f3a',6);
 circ(40,-6,8,'#e0533d',0);circ(56,6,8,'#7bb36a',0);rr(-56,-10,30,10,3,'#c9ced6',0);rr(-46,-20,10,30,3,'#c9ced6',0);X.restore()}

// craft ladder 2026-11-24 18:00 (homework_look3): worksheet3(x,y,s,{rot,crumple:0..1,stamp:'DUE TOMORROW',written:0..1}) school worksheet centred on (x,y);
// banana3(x,y,s,{t,fossil:1}) forgotten banana lying on a surface (x,y = bottom centre), fossil = brown with spots + a buzzing fly
function worksheet3(x,y,s=1,o={}){const cr=C(o.crumple||0),w=300,h=400;X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 X.globalAlpha=.18;rr(-w/2+10,-h/2+14,w,h,10,'#000',0);X.globalAlpha=1;
 path(()=>{const j=cr*14;X.moveTo(-w/2,-h/2+j);X.lineTo(-w/6,-h/2-j);X.lineTo(w/6,-h/2+j*.6);X.lineTo(w/2,-h/2-j*.4);X.lineTo(w/2+j*.5,0);X.lineTo(w/2,h/2-j);X.lineTo(w/6,h/2+j*.7);X.lineTo(-w/6,h/2-j*.5);X.lineTo(-w/2,h/2+j);X.lineTo(-w/2-j*.6,0);X.closePath()},'#fffdf4',6);
 rr(-w/2+24,-h/2+26,150,18,6,'#3a3a46',0);
 for(let k=0;k<7;k++){const yy=-h/2+80+k*42;line([[-w/2+24,yy],[w/2-24,yy]],3,'#b9c6dc');if(o.written&&k<Math.ceil(C(o.written)*7))line([[-w/2+30,yy-10],[-w/2+30+(160+((k*53)%80))*C(o.written*7-k),yy-12]],4,'#2a4fa0')}
 if(cr>0){X.globalAlpha=.55*cr;line([[-w/2+20,-60],[0,-20],[w/2-30,-80]],3,'#c8c2ae');line([[-w/2+40,90],[20,50],[w/2-20,120]],3,'#c8c2ae');line([[-30,-h/2+10],[10,0],[-20,h/2-10]],3,'#c8c2ae');X.globalAlpha=1}
 if(o.stamp){X.save();X.translate(0,40);X.rotate(-.2);rr(-150,-36,300,72,10,'rgba(255,255,255,.8)',0);X.strokeStyle='#e0332d';X.lineWidth=7;X.strokeRect(-150,-36,300,72);txt(o.stamp,0,2,33,'#e0332d',0);X.restore()}
 X.restore()}
function banana3(x,y,s=1,o={}){const t=o.t||0,f=o.fossil;X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.2;ell(0,4,120,12,'#000',0);X.globalAlpha=1;
 path(()=>{X.moveTo(-120,-40);X.quadraticCurveTo(0,44,120,-50);X.quadraticCurveTo(0,-14,-120,-40);X.closePath()},f?'#c9922e':'#ffd84a',6);
 path(()=>{X.moveTo(-110,-30);X.quadraticCurveTo(0,20,110,-46)},null,3,f?'#4a3018':'#d9a820');
 if(f){for(const [a,b,r] of [[-60,-14,8],[-10,-8,10],[40,-14,7],[80,-28,6]])circ(a,b,r,'#3a2414',0)}
 rr(112,-60,22,16,5,'#3a2a14',4);
 if(f){const fx=Math.sin(t*3.1)*70,fy=-110+Math.cos(t*4.3)*30;circ(fx,fy,9,'#151515',0);X.globalAlpha=.6;ell(fx-8,fy-10,9,5,'#dfe8ff',2,-.5);ell(fx+8,fy-10,9,5,'#dfe8ff',2,.5);X.globalAlpha=1;
  X.globalAlpha=.5;for(let k=0;k<3;k++){const p=((t*.8+k/3)%1);path(()=>{X.moveTo(-30+k*30,-30-p*90);X.quadraticCurveTo(-10+k*30,-50-p*90,-30+k*30,-70-p*90)},null,4,'#7fb34a')}X.globalAlpha=1}
 X.restore()}

// ---- 2026-11-24 20:00 craft ladder (cake-sale reel): stove3() cooker with pot + rising steam, crackers3() plain cracker packet, cupcakes3() tray of frosted cupcakes
function stove3(x,y,s=1,t=0,o={}){X.save();X.translate(x,y);X.scale(s,s);X.globalAlpha=.22;ell(0,6,300,26,'#000',0);X.globalAlpha=1;
 rr(-280,-420,560,420,18,'#f2f4f7',7);rr(-240,-330,480,250,14,'#2b2f38',6);rr(-220,-310,440,210,10,o.oven?'#ffb45a':'#3c424e',0);if(o.oven)glow(0,-205,260,'255,170,80',.55);
 line([[-170,-360],[170,-360]],10,'#9aa0aa');for(let k=-1;k<=1;k++)circ(k*120,-385,14,'#cfd3da',4);
 rr(-300,-460,600,46,12,'#3a3f4a',6);
 if(o.pot!==0){const px=-40;path(()=>{X.moveTo(px-150,-460);X.lineTo(px-135,-600);X.lineTo(px+135,-600);X.lineTo(px+150,-460);X.closePath()},'#c9ced6',6);ell(px,-600,138,24,'#e8ebef',6);ell(px,-600,118,16,o.food||'#f2b84b',0);
  line([[px+138,-580],[px+250,-600]],12,'#3a3f4a');
  for(let k=0;k<4;k++){const ph=(t*.6+k/4)%1,sx=px-80+k*55+Math.sin(t*2+k)*18,sy=-620-ph*360;X.globalAlpha=.55*(1-ph)*(o.steam??1);circ(sx,sy,30+ph*40,'#ffffff',0);X.globalAlpha=1}}
 X.restore()}
function crackers3(x,y,s=1,o={}){X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 rr(-90,-150,180,300,20,'#e9d9b0',6);rr(-90,-150,180,70,20,'#c9a76a',0);rr(-90,-150,180,300,20,null,6);
 X.font="900 34px Inter";X.fillStyle='#6a4a20';X.textAlign='center';X.textBaseline='middle';X.fillText('PLAIN',0,-115);X.font="800 26px Inter";X.fillText('CRACKERS',0,-20);
 for(let i=0;i<2;i++)for(let j=0;j<2;j++){const cx=-38+i*76,cy=50+j*60;rr(cx-32,cy-24,64,48,6,'#f6e2a8',4);for(let k=0;k<3;k++)circ(cx-16+k*16,cy,3,'#c9a76a',0)}
 X.restore()}
function cupcakes3(x,y,s=1,o={}){const t=o.t||0,n=o.n??12;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.22;ell(0,10,330,26,'#000',0);X.globalAlpha=1;rr(-320,-30,640,40,12,'#b9c2cc',6);
 const cols=['#ff8fb1','#ffd23f','#9be0b0','#c8a2ff'];
 for(let row=0;row<2;row++)for(let k=0;k<6;k++){const i=row*6+k;if(i>=n)continue;const cx=-250+k*100+(row?50:0)-25,cy=row?-40:-20,sc=row?.82:.9;
  X.save();X.translate(cx,cy);X.scale(sc,sc);path(()=>{X.moveTo(-40,0);X.lineTo(40,0);X.lineTo(50,-56);X.lineTo(-50,-56);X.closePath()},'#7fb7e8',5);
  const c=cols[i%4];X.fillStyle=c;X.strokeStyle='#151515';X.lineWidth=5;X.beginPath();X.moveTo(-56,-54);X.bezierCurveTo(-70,-120,-10,-130,0,-150);X.bezierCurveTo(10,-130,70,-120,56,-54);X.closePath();X.fill();X.stroke();
  for(let q=0;q<5;q++)rr(-30+q*14,-100+((q*37)%3)*14,10,4,2,['#ff5a7a','#4a8fe0','#fff','#ffb02e'][q%4],0);X.restore()}
 if(o.shine)sparkles(0,-120,(t*.7)%1,10,260,'#fff7b0');X.restore()}

// ---- craft ladder 2026-11-24 22:00 (hidden present video) ----
// thought3(x,y,r,a,tx,ty,fn): white cartoon thought cloud centred (x,y), radius ~r, with 3 trailing bubbles toward the
// thinker's head at (tx,ty); fn(x,y) draws the content clipped inside the cloud. a = 0..1 pop-in (scale + alpha).
function thought3(x,y,r,a,tx,ty,fn){if(a<=0)return;const s=.6+.4*eo(C(a));X.save();X.globalAlpha=C(a*1.4);
 for(let k=0;k<3;k++){const f=.25+k*.22,bx=lerp(tx,x,f),by=lerp(ty,y+r*.7,f),br=(14+k*10)*s;circ(bx,by,br,'#fff',5)}
 X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.22)';X.shadowBlur=24;
 const bl=[[0,0,r*.78],[-r*.62,r*.12,r*.5],[r*.62,r*.1,r*.52],[-r*.32,-r*.42,r*.5],[r*.34,-r*.44,r*.5],[0,r*.42,r*.52]];
 X.fillStyle='#fff';X.beginPath();for(const b of bl){X.moveTo(b[0]+b[2],b[1]);X.arc(b[0],b[1],b[2],0,7)}X.fill();X.shadowColor='transparent';
 X.strokeStyle='#151515';X.lineWidth=6;for(const b of bl){X.beginPath();X.arc(b[0],b[1],b[2],0,7);X.stroke()}
 X.fillStyle='#fff';X.beginPath();for(const b of bl){X.moveTo(b[0]+b[2]-5,b[1]);X.arc(b[0],b[1],b[2]-5,0,7)}X.fill();
 if(fn){X.save();X.beginPath();X.arc(0,0,r*.95,0,7);X.clip();fn(0,0);X.restore()}X.restore()}
// redcase3(x,y,s,o): small hard-shell red suitcase lying flat on a shelf, (x,y)=bottom centre; o.open 0..1 lid up, o.gift shows a wrapped present inside
function redcase3(x,y,s=1,o={}){const op=C(o.open||0);X.save();X.translate(x,y);X.scale(s,s);gshadow(0,2,150,.25);
 rr(-150,-90,300,90,16,'#e0533d',6);for(const k of[-60,0,60])line([[k,-80],[k,-10]],4,'rgba(0,0,0,.18)');
 if(o.gift&&op>.2){X.save();X.beginPath();X.rect(-140,-260,280,180);X.clip();gift(0,-70,.55,{col:'#4a8fe0',rib:'#ffd23f'});X.restore()}
 X.save();X.translate(150,-90);X.rotate(op*1.05);rr(-300,-36,300,36,14,'#c9432f',6);rr(-180,-52,60,18,8,'#333',0);X.restore();
 if(op<.2){rr(-30,-142,60,18,8,'#333',0)}X.restore()}

// ---- 2026-11-25 09:00 craft ladder: tooth3()/toothBadge() cartoon molar (🦷 emoji is missing from the render font), brainGuy3() pink talking brain character, foamHat3() shampoo foam on a head, towel3() towel dropped over a head. Example: pipeline/examples/shower_look3
// tooth3: a cartoon molar (x,y centre); toothBadge: white round badge with the tooth (emoji 🦷 is missing from the render font)
function tooth3(x,y,s=1){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#ffffff';X.strokeStyle='#151515';X.lineWidth=6;X.lineJoin='round';
 X.beginPath();X.moveTo(-38,-30);X.bezierCurveTo(-46,-62,-14,-66,0,-50);X.bezierCurveTo(14,-66,46,-62,38,-30);X.bezierCurveTo(34,0,30,20,24,52);X.bezierCurveTo(20,66,8,62,6,46);X.lineTo(0,18);X.lineTo(-6,46);X.bezierCurveTo(-8,62,-20,66,-24,52);X.bezierCurveTo(-30,20,-34,0,-38,-30);X.closePath();X.fill();X.stroke();
 X.strokeStyle='rgba(120,170,220,.7)';X.lineWidth=5;X.beginPath();X.arc(-14,-30,10,3.6,5.2);X.stroke();X.restore()}
function toothBadge(x,y,s=1,a=1){if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.scale(s,s);X.shadowColor='rgba(0,0,0,.25)';X.shadowBlur=14;circ(0,0,62,'#fff',6);X.shadowColor='transparent';tooth3(0,4,.82);X.restore()}
// pink brain character: sm() with a pink head + brain folds; x,y = feet
function brainGuy3(x,y,s,o={}){sm(x,y,s,Object.assign({col:'#f7a8c8',limb:'#151515'},o));
 const hy=y-767*s;X.save();X.strokeStyle='rgba(190,60,110,.55)';X.lineWidth=9*s;X.lineCap='round';
 for(const [dx,dy,r,a0,a1] of [[-70,-120,55,3.4,5.6],[40,-140,60,3.6,6.0],[-10,-60,45,3.3,5.9],[100,-60,40,4.2,6.4],[-110,-40,38,3.2,5.0]]){X.beginPath();X.arc(x+dx*s,hy+dy*s,r*s,a0,a1);X.stroke()}
 X.beginPath();X.moveTo(x,hy-190*s);X.quadraticCurveTo(x+18*s,hy-120*s,x,hy-70*s);X.stroke();X.restore()}
// shampoo foam on top of a head (hx,hy = head centre)
function foamHat3(hx,hy,s,t){X.save();X.fillStyle='#ffffff';X.strokeStyle='#bcd6e6';X.lineWidth=4*s;
 for(let k=0;k<11;k++){const a=Math.PI*(1.05+k/10*.9),rr0=170*s,bx=hx+Math.cos(a)*rr0*.95,by=hy+Math.sin(a)*rr0*.85-30*s,r=(46+rnd(k)*26)*s+Math.sin(t*5+k)*2*s;X.beginPath();X.arc(bx,by,r,0,7);X.fill();X.stroke()}
 for(let k=0;k<6;k++){const q=(t*.7+k/6)%1;X.globalAlpha=1-q;X.beginPath();X.arc(hx-120*s+k*48*s+Math.sin(t*3+k)*12*s,hy-200*s-q*220*s,(8+rnd(k+3)*10)*s,0,7);X.fill();X.stroke()}X.restore()}
// towel dropped over a head; p 0..1 = falling in
function towel3(hx,hy,s,p,col='#5fb3a8'){if(p<=0)return;const y=lerp(hy-900*s,hy-120*s,eo(C(p)));X.save();X.translate(hx,y);X.scale(s,s);
 X.fillStyle=col;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-200,40);X.quadraticCurveTo(-210,-140,0,-150);X.quadraticCurveTo(210,-140,200,40);X.lineTo(230,260);X.lineTo(150,250);X.lineTo(140,60);X.quadraticCurveTo(0,0,-140,60);X.lineTo(-150,250);X.lineTo(-230,260);X.closePath();X.fill();X.stroke();
 X.strokeStyle='rgba(255,255,255,.55)';X.lineWidth=10;X.beginPath();X.moveTo(-215,200);X.lineTo(-160,205);X.moveTo(160,205);X.lineTo(215,200);X.stroke();X.restore()}

// 2026-11-25 craft ladder: sticky notes + bouquet
// sticky3(x,y,s,o): square sticky note with an emoji icon; o.icon, o.col (paper), o.rot, o.a (alpha). Curled bottom-right corner + soft drop shadow.
function sticky3(x,y,s=1,o={}){const a=o.a==null?1:o.a;if(a<=0||s<=0)return;X.save();X.globalAlpha=C(a);X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 X.shadowColor='rgba(0,0,0,.28)';X.shadowBlur=14;X.shadowOffsetY=6;
 path(()=>{X.moveTo(-58,-58);X.lineTo(58,-58);X.lineTo(58,34);X.quadraticCurveTo(50,52,30,58);X.lineTo(-58,58);X.closePath()},o.col||'#ffe066',5);
 X.shadowColor='transparent';X.fillStyle='rgba(0,0,0,.08)';X.fillRect(-58,-58,116,18);
 path(()=>{X.moveTo(58,34);X.quadraticCurveTo(40,38,30,58);X.quadraticCurveTo(46,48,58,34);X.closePath()},'rgba(0,0,0,.18)',3);
 if(o.icon){X.fillStyle='#000';X.font="60px 'Noto Color Emoji'";X.textAlign='center';X.textBaseline='middle';X.fillText(o.icon,0,6)}
 X.restore()}
// stickyCoat3(x,y,s,notes,t,flap): a cloud of sticky notes stuck on a character standing at feet (x,y) scale s; notes=[[dx,dy,icon,col,rot],...] (dx,dy in character units); flap=1 makes them flutter
function stickyCoat3(x,y,s,notes,t=0,flap=0){notes.forEach((n,k)=>{const w=flap?Math.sin(t*7+k*1.7)*.06:0;sticky3(x+n[0]*s,y+n[1]*s,.9*s,{icon:n[2],col:n[3],rot:n[4]+w})})}
// bouquet3(x,y,s,o): flower bouquet held at (x,y) (the wrap's bottom tip); o.t sways the heads
function bouquet3(x,y,s=1,o={}){const t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);X.rotate(Math.sin(t*2)*.04);
 for(let k=-3;k<=3;k++){line([[0,0],[k*22,-150]],6,'#3f8f3a')}
 const fl=[[-60,-170,'#ff5a7a'],[0,-200,'#ffd23f'],[60,-172,'#ff8fb1'],[-30,-230,'#ffffff'],[34,-232,'#ff5a7a'],[-80,-215,'#ffd23f'],[82,-214,'#ffffff']];
 for(const[fx,fy,c]of fl){for(let p=0;p<5;p++){const a=p/5*Math.PI*2+t*.3;circ(fx+Math.cos(a)*20,fy+Math.sin(a)*20,16,c,4)}circ(fx,fy,12,'#f2a33a',4)}
 for(const[lx,ly,r]of[[-95,-150,-.6],[95,-150,.6]]){X.save();X.translate(lx,ly);X.rotate(r);ell(0,0,16,34,'#4fae4a',4);X.restore()}
 path(()=>{X.moveTo(-110,-150);X.lineTo(110,-150);X.lineTo(14,20);X.lineTo(-14,20);X.closePath()},'#f4e7d0',6);
 path(()=>{X.moveTo(-40,-60);X.lineTo(40,-60);X.lineTo(26,-30);X.lineTo(-26,-30);X.closePath()},'#e2483d',4);
 X.restore()}
// splitPanel3(i,draw,t,o): split-screen before/after. i=0 top half, i=1 bottom half. draw(t) paints in WORLD coords (1080x1920);
// o.cx,o.cy = world point shown at the panel centre, o.k = zoom. Adds a soft vignette and a white divider. Use with NOFX=1.
function splitPanel3(i,draw,t,o={}){const k=o.k||.78,h=960,y0=i*h;X.save();X.setTransform(1,0,0,1,0,0);X.beginPath();X.rect(0,y0,1080,h);X.clip();
 const dx=Math.sin(t*1.2+i)*4,dy=Math.cos(t*1.0+i)*3;X.setTransform(k,0,0,k,540-(o.cx||540)*k+dx,y0+h/2-(o.cy||1300)*k+dy);draw(t);
 X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,y0,0,y0+h);g.addColorStop(0,'rgba(0,0,0,.18)');g.addColorStop(.25,'rgba(0,0,0,0)');g.addColorStop(.75,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.18)');X.fillStyle=g;X.fillRect(0,y0,1080,h);X.restore();
 if(i==1){X.save();X.setTransform(1,0,0,1,0,0);X.shadowColor='rgba(0,0,0,.35)';X.shadowBlur=18;X.fillStyle='#fff';X.fillRect(0,y0-6,1080,12);X.restore()}}

// ---- craft ladder 2026-11-25 18:00: kitchen fridge + lunchbox character + office desk ----
// lunch3(x,y,s,o): lunchbox (lasagna inside) with a little face. o.mood 'sad'|'happy'|'calm', o.lid 0..1 (1 = lid on), o.t
function lunch3(x,y,s=1,o={}){const m=o.mood||'calm',t=o.t||0;X.save();X.translate(x,y);X.rotate(o.rot||0);X.scale(s,s);
 const w=190,h=96;
 path(()=>{X.moveTo(-w/2,-h);X.lineTo(w/2,-h);X.lineTo(w/2-12,0);X.lineTo(-w/2+12,0);X.closePath()},'rgba(236,246,252,.95)',6);
 // lasagna layers
 const ly=[['#e0603a',-h+18],['#f6e0a0',-h+36],['#d9502e',-h+52],['#f6e0a0',-h+68],['#c9472a',-h+82]];
 for(const [c,yy] of ly){X.fillStyle=c;X.fillRect(-w/2+14,yy,w-28,16)}
 X.fillStyle='rgba(255,255,255,.5)';X.fillRect(-w/2+14,-h+8,10,h-18);
 const lid=o.lid==null?1:o.lid;if(lid>0){X.save();X.globalAlpha=lid;rr(-w/2-10,-h-22,w+20,26,10,'#4a8fe0',6);X.restore()}
 // face on the front
 const ey=-h*.45,bl=(Math.sin(t*1.7)>.97)?.15:1;
 for(const dx of[-34,34]){X.fillStyle='#fff';X.beginPath();X.ellipse(dx,ey,17,19*bl,0,0,7);X.fill();X.strokeStyle='#151515';X.lineWidth=4;X.stroke();
  if(bl>.5){circ(dx+(m==='sad'?-3:3),ey+(m==='sad'?5:0),8,'#151515',0);circ(dx+(m==='sad'?-6:0),ey-4,3,'#fff',0)}}
 X.strokeStyle='#151515';X.lineWidth=5;X.lineCap='round';X.beginPath();
 if(m==='sad'){X.arc(0,ey+46,18,3.6,5.8)}else{X.arc(0,ey+22,18,.3,2.84)}X.stroke();
 if(m==='sad'){X.strokeStyle='#151515';X.lineWidth=4;X.beginPath();X.moveTo(-50,ey-30);X.lineTo(-22,ey-24);X.moveTo(50,ey-30);X.lineTo(22,ey-24);X.stroke();
  const q=(t*.6)%1;X.globalAlpha=1-q;X.fillStyle='#7cc4ff';X.beginPath();X.ellipse(-40,ey+24+q*30,5,8,0,0,7);X.fill();X.globalAlpha=1}
 if(m==='happy'){X.globalAlpha=.5;circ(-56,ey+20,10,'#ff8aa0',0);circ(56,ey+20,10,'#ff8aa0',0);X.globalAlpha=1}
 X.restore()}
// fridge3(x,y,s,o): tall fridge, (x,y) = bottom centre on the floor. o.open 0..1 main door swing (hinge on the right), o.inside(fx,fy) draws items on the middle shelf, o.dark (interior lit at night)
function fridge3(x,y,s=1,o={}){const op=C(o.open||0),W=320,H=700;X.save();X.translate(x,y);X.scale(s,s);
 X.globalAlpha=.22;ell(0,6,200,22,'#000',0);X.globalAlpha=1;
 rr(-W/2,-H,W,H,30,'#eef2f5',7);
 const g=X.createLinearGradient(-W/2,0,W/2,0);g.addColorStop(0,'rgba(255,255,255,.6)');g.addColorStop(.5,'rgba(255,255,255,0)');g.addColorStop(1,'rgba(120,140,160,.18)');X.fillStyle=g;X.beginPath();X.roundRect(-W/2+6,-H+6,W-12,H-12,26);X.fill();
 line([[-W/2+4,-H+210],[W/2-4,-H+210]],6,'#151515');
 line([[-W/2+40,-H+60],[-W/2+40,-H+160]],12,'#9aa7b2');
 // interior (visible when open)
 if(op>0){X.save();rr(-W/2+14,-H+224,W-28,H-238,18,o.dark?'#fff6d6':'#f4fbff',5);glow(0,-H+430,260,'255,245,200',.55*op);
  for(const sy of[-H+330,-H+500])line([[-W/2+20,sy],[W/2-20,sy]],5,'rgba(140,170,190,.8)');
  pmugLike(-80,-H+500);X.fillStyle='#ffd23f';X.beginPath();X.ellipse(70,-H+485,34,14,0,0,7);X.fill();X.strokeStyle='#151515';X.lineWidth=4;X.stroke();
  if(o.inside)o.inside(0,-H+330);X.restore()}
 // main door: closed = full front; opening = panel shrinking towards the right hinge + swinging edge
 const dw=(W-8)*Math.cos(op*Math.PI*.5);
 if(op<1){X.save();rr(W/2-4-dw,-H+214,dw,H-218,22,'#e8edf1',7);if(dw>60)line([[W/2-4-dw+34,-H+260],[W/2-4-dw+34,-H+420]],12,'#9aa7b2');X.restore()}
 if(op>0){const ow=(W*.9)*Math.sin(op*Math.PI*.5);path(()=>{X.moveTo(W/2-4,-H+214);X.lineTo(W/2-4+ow,-H+190);X.lineTo(W/2-4+ow,-30);X.lineTo(W/2-4,-8);X.closePath()},'#dfe5ea',7);
  for(const k of[0,1,2])line([[W/2+ow*.15,-H+330+k*130],[W/2-4+ow*.9,-H+322+k*130]],6,'rgba(120,150,170,.8)')}
 X.restore()}
function pmugLike(x,y){rr(x-40,y-80,80,80,10,'#ffffff',5);rr(x-40,y-80,80,22,8,'#7bb36a',5)}
// desk3(x,y,s,o): office desk with a monitor; (x,y) = desk top centre. o.lit monitor glow
function desk3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);
 line([[-380,20],[-400,420]],18,'#5a4030');line([[380,20],[400,420]],18,'#5a4030');
 rr(-440,-10,880,46,12,'#c99a6a',7);
 const mx=o.mx==null?-250:o.mx;rr(mx-150,-330,300,200,16,'#2a2f3a',7);rr(mx-132,-312,264,164,8,o.lit?'#7fb8e8':'#3c4a62',0);
 if(o.lit){X.fillStyle='rgba(255,255,255,.75)';for(let k=0;k<4;k++)X.fillRect(mx-110,-290+k*34,170-k*30,14)}
 line([[mx,-130],[mx,-14]],14,'#2a2f3a');rr(mx-70,-22,140,18,8,'#2a2f3a',0);
 X.restore()}

// 2026-11-25 20:00 craft ladder: pizza3() whole pizza on a board (o.gone = slices eaten 0..8, o.steam), slice3() a hand-held slice, frame3() a framed photo of two friends (o.web = cobweb, o.fade)
function pizza3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);const gone=o.gone||0,t=o.t||0;
 X.globalAlpha=.22;ell(0,18,200,30,'#000',0);X.globalAlpha=1;ell(0,6,196,58,'#b07a45',5);ell(0,0,188,54,'#c98d52',0);
 for(let k=0;k<8;k++){if(k<gone)continue;const a0=k/8*Math.PI*2,a1=(k+1)/8*Math.PI*2;
  X.beginPath();X.moveTo(0,-6);X.ellipse(0,-6,170,48,0,a0,a1);X.closePath();X.fillStyle='#e8a54e';X.fill();X.lineWidth=5;X.strokeStyle='#151515';X.stroke();
  X.beginPath();X.moveTo(0,-6);X.ellipse(0,-6,148,40,0,a0+.04,a1-.04);X.closePath();X.fillStyle='#d9452f';X.fill();
  X.beginPath();X.moveTo(0,-6);X.ellipse(0,-6,140,37,0,a0+.08,a1-.08);X.closePath();X.fillStyle='#ffd77a';X.fill();
  const am=(a0+a1)/2;for(const rr2 of[.45,.78]){const px=Math.cos(am+(rr2>.6?.12:-.1))*140*rr2,py=-6+Math.sin(am+(rr2>.6?.12:-.1))*37*rr2;ell(px,py,16,6.5,'#b8262a',3)}
  ell(Math.cos(am)*95,-6+Math.sin(am)*26,6,3,'#3d8a3a',0)}
 if(o.steam)for(let k=0;k<3;k++){const z=((t*.5+k/3)%1);X.save();X.globalAlpha=(1-z)*.55;line([[-60+k*60,-30-z*200],[-50+k*60+Math.sin(z*8+k)*14,-70-z*200]],8,'#ffffff');X.restore()}
 X.restore()}
function slice3(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);
 X.beginPath();X.moveTo(0,40);X.lineTo(-44,-60);X.quadraticCurveTo(0,-82,44,-60);X.closePath();X.fillStyle='#ffd77a';X.fill();X.lineWidth=5;X.strokeStyle='#151515';X.stroke();
 X.beginPath();X.moveTo(-46,-58);X.quadraticCurveTo(0,-84,46,-58);X.lineWidth=16;X.strokeStyle='#d9964e';X.stroke();X.lineWidth=4;X.strokeStyle='#151515';X.stroke();
 ell(-10,-30,10,8,'#b8262a',3);ell(14,-10,9,7,'#b8262a',3);ell(-2,12,7,6,'#b8262a',3);X.restore()}
function frame3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);rr(-110,-85,220,170,10,'#7a5236',6);rr(-92,-68,184,136,6,o.fade?'#c9cdd6':'#bfe4f7',0);
 X.save();X.globalAlpha=o.fade?.55:1;rr(-92,10,184,58,0,o.fade?'#b9bcc4':'#8fd18a',0);
 for(const [hx,c] of [[-40,'#fff'],[40,'#fff']]){line([[hx,10],[hx,50]],6,'#151515');circ(hx,-14,26,c,5)}
 X.fillStyle='#e2508a';circ(40,-40,12,'#e2508a',4);arc0(-40,-12);arc0(40,-12);X.restore();
 if(o.web)cobweb(-92,-68,90,0,Math.PI/2,.9);X.restore()
 function arc0(cx,cy){X.beginPath();X.arc(cx,cy,12,.2,Math.PI-.2);X.lineWidth=4;X.strokeStyle='#151515';X.stroke()}}

// ---- 2026-11-25 22:00 craft ladder: teenBed3() single bed, wetTowel3() soggy towel heap with a wet patch + drips, dripTowel3() towel held by a corner (dripping), towelHook3() wall hook with a hanging towel. Example: pipeline/examples/towel_look3
function teenBed3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);gshadow(0,6,440,.28);
 rr(-430,-560,70,560,16,o.wood||'#8a5a3a',7);rr(370,-330,50,330,14,o.wood||'#8a5a3a',7);
 rr(-370,-330,760,150,18,o.wood2||'#a8734a',7);rr(-350,-180,40,180,6,'#6e4528',5);rr(320,-180,40,180,6,'#6e4528',5);
 const dg=X.createLinearGradient(0,-430,0,-300);dg.addColorStop(0,o.duvet||'#6f8fd6');dg.addColorStop(1,o.duvet2||'#5674bd');X.fillStyle=dg;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-360,-330);X.lineTo(-360,-400);X.quadraticCurveTo(-200,-440,40,-430);X.quadraticCurveTo(300,-425,400,-400);X.lineTo(410,-300);X.quadraticCurveTo(0,-280,-360,-330);X.closePath();X.fill();X.stroke();
 X.strokeStyle='rgba(255,255,255,.35)';X.lineWidth=6;for(let k=0;k<4;k++){X.beginPath();X.moveTo(-200+k*150,-420);X.lineTo(-180+k*150,-310);X.stroke()}
 X.save();X.translate(-250,-450);X.rotate(-.06);rr(-110,-55,220,100,40,'#fbfbff',7);X.restore();
 if(o.neat){X.fillStyle='rgba(255,255,255,.9)';X.strokeStyle='#151515';X.lineWidth=6;X.beginPath();X.roundRect(-120,-445,200,40,14);X.fill();X.stroke()}
 X.restore()}
function wetTowel3(x,y,s=1,o={}){const t=o.t||0,col=o.col||'#e8a33d';X.save();X.translate(x,y);X.scale(s,s);
 if(o.wet!==0){X.fillStyle='rgba(40,60,110,.38)';X.beginPath();X.ellipse(10,18,250,46,0,0,7);X.fill()}
 X.fillStyle=col;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-210,10);
 const pts=[[-200,-60],[-140,-110],[-60,-90],[0,-140],[80,-100],[150,-120],[210,-50],[220,10]];
 let px=-210,py=10;for(const [qx,qy] of pts){X.quadraticCurveTo((px+qx)/2,Math.min(py,qy)-30,qx,qy);px=qx;py=qy}X.quadraticCurveTo(0,30,-210,10);X.closePath();X.fill();X.stroke();
 X.fillStyle='rgba(0,0,0,.16)';X.beginPath();X.ellipse(-20,-30,150,40,0,0,7);X.fill();
 X.strokeStyle='rgba(0,0,0,.35)';X.lineWidth=5;for(const [a,b,c,d] of[[-150,-70,-90,-20],[-20,-100,20,-30],[100,-90,150,-20]]){X.beginPath();X.moveTo(a,b);X.quadraticCurveTo((a+c)/2+20,(b+d)/2,c,d);X.stroke()}
 X.strokeStyle='rgba(255,255,255,.75)';X.lineWidth=11;X.beginPath();X.moveTo(-190,-20);X.quadraticCurveTo(-120,-50,-60,-40);X.stroke();
 if(o.drip!==0)for(let k=0;k<3;k++){const q=(t*1.3+k/3)%1;X.globalAlpha=1-q*.7;X.fillStyle='#7ec8ff';X.strokeStyle='#1d4a7a';X.lineWidth=3;X.beginPath();const dx=-140+k*130,dy=20+q*140;X.moveTo(dx,dy-16);X.quadraticCurveTo(dx+11,dy,dx,dy+9);X.quadraticCurveTo(dx-11,dy,dx,dy-16);X.fill();X.stroke()}
 X.restore()}
function dripTowel3(hx,hy,s=1,t=0,col='#e8a33d'){X.save();X.translate(hx,hy);X.scale(s,s);const sw=Math.sin(t*3)*8;
 X.fillStyle=col;X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-20,-10);X.lineTo(30,-10);X.quadraticCurveTo(90+sw,160,110+sw,330);
 for(let k=0;k<5;k++){X.quadraticCurveTo(80+sw-k*45,360-(k%2)*30,60+sw-k*45,335)}X.quadraticCurveTo(-120+sw,180,-20,-10);X.closePath();X.fill();X.stroke();
 X.fillStyle='rgba(40,60,110,.25)';X.beginPath();X.ellipse(0+sw,260,90,50,0,0,7);X.fill();
 X.strokeStyle='rgba(255,255,255,.7)';X.lineWidth=10;X.beginPath();X.moveTo(-80+sw,270);X.lineTo(90+sw,280);X.stroke();
 X.strokeStyle='rgba(0,0,0,.3)';X.lineWidth=5;X.beginPath();X.moveTo(0,20);X.quadraticCurveTo(10+sw,150,-10+sw,300);X.stroke();
 for(let k=0;k<3;k++){const q=(t*1.6+k/3)%1;X.globalAlpha=1-q*.6;X.fillStyle='#7ec8ff';X.strokeStyle='#1d4a7a';X.lineWidth=3;const dx=-60+k*60+sw,dy=360+q*240;X.beginPath();X.moveTo(dx,dy-18);X.quadraticCurveTo(dx+12,dy,dx,dy+10);X.quadraticCurveTo(dx-12,dy,dx,dy-18);X.fill();X.stroke()}
 X.restore()}
function towelHook3(x,y,s=1,o={}){X.save();X.translate(x,y);X.scale(s,s);rr(-40,-60,80,40,10,'#c9ced8',5);line([[0,-30],[0,10],[22,24]],9,'#7a808c');
 if(o.towel){const p=o.p===undefined?1:C(o.p);X.globalAlpha=p;X.fillStyle=o.col||'#e8a33d';X.strokeStyle='#151515';X.lineWidth=7;X.beginPath();X.moveTo(-70,10);X.quadraticCurveTo(0,-10,70,10);X.lineTo(95,330);X.quadraticCurveTo(0,350,-95,330);X.closePath();X.fill();X.stroke();
  X.strokeStyle='rgba(255,255,255,.75)';X.lineWidth=11;X.beginPath();X.moveTo(-88,270);X.quadraticCurveTo(0,288,88,270);X.stroke();X.strokeStyle='rgba(0,0,0,.25)';X.lineWidth=5;X.beginPath();X.moveTo(-20,30);X.lineTo(-30,320);X.moveTo(30,30);X.lineTo(36,320);X.stroke()}
 X.restore()}
