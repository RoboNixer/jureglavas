
// ===== LOOK 4 "DOCUMENTARY" flat-vector kit (FUN FACT series, RUNBOOK 0h.2). Started 2026-11-27 (nutcracker reel). Grow it every FUN FACT run.
// Cinematic gradient worlds + ONE flat-vector hero animal + context chip + ALL-CAPS kinetic words (orange keyword) + data widgets.
// docBg(top,mid,bot)            screen-space gradient sky (call BEFORE cam)
// docSun(x,y,r,col)             soft sun disc + glow (world coords)
// docRidge(y,col,o)             jagged mountain/hill silhouette across the world; o={amp,seed,step,snow,pines,pc,par,t}
// docPine(x,y,h,col,snow)       flat pine tree (snow:0..1 adds snow on the tiers)
// docSnow(t,n,o)                screen-space snowfall; o={size,speed,wind,a,seed}
// docLeaves(t,n,o)              screen-space falling autumn leaves (orange/yellow)
// docChip(text,p,o)             small top-left context chip ("Clark's nutcracker · Rocky Mountains"), inside the safe box
// docPill(text,x,y,size,p,o)    rounded data pill ("UP TO 9 MONTHS LATER"), o={bg,col,icon}
// (docWord, docPill, docCounter, docChip draw in SCREEN space, safe to call after cam())
// docWord(s,x,y,size,r,o)       ALL-CAPS kinetic word; o.key=true paints it orange; uses kinWord springs
// docCounter(x,y,val,r,o)       big counting number in a glass panel with a label; o={label,dur,col}
// docBars(x,y,rows,r)           stat bars [{label,v(0..1),txt,col}]
// docPin(x,y,p,col)             map pin that springs up; docSeed(x,y,s,rot); docMound(x,y,s,snow)
// nutcracker(x,y,s,o)           Clark's nutcracker hero bird, feet at (x,y). o={t,flip,fly(0/1),peck(0..1),pouch(0..1),seed,wink,dig(0..1),look}
const DOC_OR='#ff8a1f';
function docBg(top,mid,bot){X.save();X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,top);g.addColorStop(.55,mid);g.addColorStop(1,bot);X.fillStyle=g;X.fillRect(0,0,1080,1920);X.restore()}
function docSun(x,y,r,col='255,214,140'){const g=X.createRadialGradient(x,y,0,x,y,r*5);g.addColorStop(0,`rgba(${col},.75)`);g.addColorStop(.25,`rgba(${col},.25)`);g.addColorStop(1,`rgba(${col},0)`);X.fillStyle=g;X.fillRect(x-r*5,y-r*5,r*10,r*10);X.fillStyle=`rgba(${col},1)`;X.beginPath();X.arc(x,y,r,0,7);X.fill();X.fillStyle='rgba(255,255,255,.55)';X.beginPath();X.arc(x,y,r*.7,0,7);X.fill()}
function docRidge(y,col,o={}){const amp=o.amp||120,seed=o.seed||0,step=o.step||140,x0=-1600,x1=2700;const pts=[];
 for(let x=x0,i=0;x<=x1;x+=step,i++){const h=Math.sin(i*.9+seed)*.5+Math.sin(i*.37+seed*2)*.35+rnd(i+seed*31)*.5;pts.push([x,y-h*amp])}
 X.fillStyle=col;X.beginPath();X.moveTo(x0,4000);pts.forEach(p=>X.lineTo(p[0],p[1]));X.lineTo(x1,4000);X.closePath();X.fill();
 if(o.snow){X.fillStyle='rgba(255,255,255,'+(o.snowA||.85)+')';for(let i=1;i<pts.length-1;i++){const p=pts[i];if(p[1]<pts[i-1][1]&&p[1]<pts[i+1][1]){X.beginPath();X.moveTo(p[0],p[1]);X.lineTo(p[0]-step*.32,p[1]+amp*.28);X.lineTo(p[0]-step*.12,p[1]+amp*.22);X.lineTo(p[0],p[1]+amp*.3);X.lineTo(p[0]+step*.1,p[1]+amp*.2);X.lineTo(p[0]+step*.3,p[1]+amp*.26);X.closePath();X.fill()}}}
 if(o.pines){for(let i=0;i<pts.length-1;i++){const n=o.pines;for(let k=0;k<n;k++){const f=(k+rnd(i*7+k+seed))/n,px=lerp(pts[i][0],pts[i+1][0],f),py=lerp(pts[i][1],pts[i+1][1],f);docPine(px,py+6,(o.ph||70)*(.7+rnd(i*3+k)*.6),o.pc||col,o.psnow||0)}}}}
function docPine(x,y,h,col,snow=0){X.fillStyle=col;X.fillRect(x-h*.04,y-h*.2,h*.08,h*.22);for(let k=0;k<3;k++){const w=h*(.42-k*.1),ty=y-h*.15-k*h*.26;X.beginPath();X.moveTo(x-w,ty);X.lineTo(x,ty-h*.42);X.lineTo(x+w,ty);X.closePath();X.fill();
 if(snow>0){X.fillStyle=`rgba(255,255,255,${.9*snow})`;X.beginPath();X.moveTo(x-w*.55,ty-h*.16);X.lineTo(x,ty-h*.42);X.lineTo(x+w*.55,ty-h*.16);X.quadraticCurveTo(x,ty-h*.08,x-w*.55,ty-h*.16);X.fill();X.fillStyle=col}}}
function docSnow(t,n=80,o={}){X.save();X.setTransform(1,0,0,1,0,0);const sz=o.size||6,sp=o.speed||140,wd=o.wind||40;X.fillStyle=`rgba(255,255,255,${o.a||.85})`;
 for(let k=0;k<n;k++){const d=.5+rnd(k+(o.seed||0))*.9,x=((rnd(k*3+1)*1300+t*wd*d+Math.sin(t*1.3+k)*25)%1300+1300)%1300-110,y=((rnd(k*5+2)*2100+t*sp*d)%2100)-90;X.beginPath();X.arc(x,y,sz*d,0,7);X.fill()}X.restore()}
function docLeaves(t,n=14,o={}){X.save();X.setTransform(1,0,0,1,0,0);const cols=['#ff8a1f','#ffb43a','#d95a1b','#f4c64a'];for(let k=0;k<n;k++){const d=.6+rnd(k+40)*.8,x=((rnd(k*3+7)*1300+t*60*d+Math.sin(t*1.7+k)*60)%1300+1300)%1300-110,y=((rnd(k*5+9)*2100+t*120*d)%2100)-90;
 X.save();X.translate(x,y);X.rotate(t*2*d+k);X.scale(1,Math.abs(Math.sin(t*3*d+k))*.8+.2);X.fillStyle=cols[k%4];X.globalAlpha=o.a||.9;X.beginPath();X.ellipse(0,0,16*d,8*d,0,0,7);X.fill();X.restore()}X.restore()}
function docChip(text,p=1,o={}){if(p<=0)return;X.save();X.setTransform(1,0,0,1,0,0);const k=C(p);X.globalAlpha=k;X.font="800 34px Inter,'Noto Color Emoji'";const w=Math.min(X.measureText(text).width,620),x=o.x||160,y=o.y||318;
 X.translate(lerp(-40,0,eo(k)),0);X.fillStyle='rgba(8,12,20,.62)';X.beginPath();X.roundRect(x,y,w+86,62,31);X.fill();X.strokeStyle='rgba(255,255,255,.22)';X.lineWidth=2;X.stroke();
 X.fillStyle=DOC_OR;X.beginPath();X.arc(x+34,y+31,9,0,7);X.fill();X.fillStyle='rgba(255,138,31,.35)';X.beginPath();X.arc(x+34,y+31,9+6*(.5+.5*Math.sin(performance.now?0:0)),0,7);X.fill();
 X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText(text,x+58,y+33,620);X.restore()}
function docPill(text,x,y,size,p=1,o={}){if(p<=0)return;const k=sp(p*1.6,12,.45);X.save();X.setTransform(1,0,0,1,0,0);X.translate(x,y);X.scale(Math.max(0,k),Math.max(0,k));X.font=`900 ${size}px Inter,'Noto Color Emoji'`;const w=X.measureText(text).width;
 X.fillStyle='rgba(0,0,0,.3)';X.beginPath();X.roundRect(-w/2-34+8,-size*.75+10,w+68,size*1.5,size*.75);X.fill();X.fillStyle=o.bg||'#ffffff';X.beginPath();X.roundRect(-w/2-34,-size*.75,w+68,size*1.5,size*.75);X.fill();
 X.fillStyle=o.col||'#141821';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,size*.05);X.restore()}
function docWord(s,x,y,size,r,o={}){X.save();X.setTransform(1,0,0,1,0,0);kinWord(s,x,y,size,r,Object.assign({col:o.key?DOC_OR:'#ffffff'},o));X.restore()}
function docCounter(x,y,val,r,o={}){if(r<=0)return;const k=sp(r,12,.45),dur=o.dur||1.4,v=Math.round(val*eo(C(r/dur)));X.save();X.setTransform(1,0,0,1,0,0);X.translate(x,y);X.scale(Math.max(0,k),Math.max(0,k));
 X.fillStyle='rgba(8,12,20,.55)';X.beginPath();X.roundRect(-330,-150,660,290,44);X.fill();X.strokeStyle='rgba(255,255,255,.25)';X.lineWidth=3;X.stroke();
 txt(v.toLocaleString('en-US'),0,-30,170,o.col||DOC_OR,0);X.font="800 38px Inter";X.fillStyle='#e9eef7';X.textAlign='center';X.textBaseline='middle';X.fillText(o.label||'',0,85);X.restore()}
function docBars(x,y,rows,r){rows.forEach((b,i)=>{const p=C((r-i*.25)/.8);if(p<=0)return;X.save();X.globalAlpha=C(p*3);X.font="800 34px Inter,'Noto Color Emoji'";X.fillStyle='#fff';X.textAlign='left';X.textBaseline='middle';X.fillText(b.label,x-300,y+i*120-34);
 X.fillStyle='rgba(255,255,255,.18)';X.beginPath();X.roundRect(x-300,y+i*120,600,40,20);X.fill();X.fillStyle=b.col||DOC_OR;X.beginPath();X.roundRect(x-300,y+i*120,Math.max(40,600*b.v*eo(p)),40,20);X.fill();
 if(b.txt){X.textAlign='right';X.fillStyle='#fff';X.fillText(b.txt,x+300,y+i*120-34)}X.restore()})}
function docPin(x,y,p,col=DOC_OR){if(p<=0)return;const k=sp(p,14,.4);X.save();X.translate(x,y);X.scale(Math.max(0,k),Math.max(0,k));X.fillStyle='rgba(0,0,0,.25)';X.beginPath();X.ellipse(0,4,14,5,0,0,7);X.fill();
 X.fillStyle=col;X.beginPath();X.moveTo(0,0);X.bezierCurveTo(-26,-30,-24,-62,0,-62);X.bezierCurveTo(24,-62,26,-30,0,0);X.fill();X.fillStyle='#fff';X.beginPath();X.arc(0,-40,9,0,7);X.fill();X.restore()}
function docSeed(x,y,s=1,rot=0){X.save();X.translate(x,y);X.rotate(rot);X.scale(s,s);X.fillStyle='#7a4a24';X.beginPath();X.ellipse(0,0,10,15,0,0,7);X.fill();X.fillStyle='#a8703f';X.beginPath();X.ellipse(-3,-4,4,7,0,0,7);X.fill();X.restore()}
function docMound(x,y,s=1,snow=0){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=snow?'#e8eef7':'#6b4a2e';X.beginPath();X.ellipse(0,0,46,14,0,Math.PI,0);X.fill();X.fillStyle=snow?'#ffffff':'#83603e';X.beginPath();X.ellipse(-8,-4,26,7,0,Math.PI,0);X.fill();X.restore()}
function nutcracker(x,y,s,o={}){const t=o.t||0,fly=o.fly?1:0,pk=o.peck||0,dig=o.dig||0;X.save();X.translate(x,y);X.scale(s*(o.flip?-1:1),s);
 if(!fly&&!o.noshadow){X.fillStyle='rgba(0,0,0,.2)';X.beginPath();X.ellipse(0,4,95,15,0,0,7);X.fill()}
 X.translate(0,-60);X.rotate(pk*.55+(dig?Math.sin(t*28)*.08*dig:0));X.translate(0,60);
 const flap=fly?Math.sin(t*22):0;
 if(!fly){X.strokeStyle='#26262b';X.lineWidth=8;X.lineCap='round';X.beginPath();X.moveTo(-14,-62);X.lineTo(-22,-2);X.lineTo(-40,0);X.moveTo(-22,-2);X.lineTo(-6,2);X.moveTo(16,-62);X.lineTo(12,-2);X.lineTo(-4,1);X.moveTo(12,-2);X.lineTo(30,2);X.stroke()}
 else{X.strokeStyle='#26262b';X.lineWidth=7;X.lineCap='round';X.beginPath();X.moveTo(-10,-70);X.lineTo(-40,-50);X.moveTo(8,-70);X.lineTo(-22,-48);X.stroke()}
 // tail: black centre, white outer feathers
 X.save();X.translate(-70,-100);X.rotate(fly?.15:.55);X.fillStyle='#f6f6f3';X.beginPath();X.moveTo(0,-24);X.lineTo(-120,-30);X.lineTo(-128,0);X.lineTo(-120,30);X.lineTo(0,24);X.closePath();X.fill();
 X.fillStyle='#17181c';X.beginPath();X.moveTo(0,-14);X.lineTo(-124,-12);X.lineTo(-128,0);X.lineTo(-124,12);X.lineTo(0,14);X.closePath();X.fill();X.restore();
 // body
 let g=X.createLinearGradient(0,-190,0,-50);g.addColorStop(0,'#d3d6da');g.addColorStop(1,'#8d939b');X.fillStyle=g;X.beginPath();X.ellipse(0,-118,86,64,-.22,0,7);X.fill();
 X.fillStyle='rgba(255,255,255,.18)';X.beginPath();X.ellipse(18,-140,52,26,-.3,0,7);X.fill();
 // wing (black with white secondary patch)
 X.save();X.translate(-6,-130);X.rotate(fly?-.2-flap*.9:.12);X.fillStyle='#17181c';X.beginPath();X.moveTo(40,-10);X.quadraticCurveTo(-30,-40,-110,-8);X.quadraticCurveTo(-60,30,40,22);X.closePath();X.fill();
 X.fillStyle='#f4f4f1';X.beginPath();X.moveTo(-40,4);X.quadraticCurveTo(-70,2,-98,-4);X.quadraticCurveTo(-70,16,-40,18);X.closePath();X.fill();X.fillStyle='rgba(255,255,255,.12)';X.beginPath();X.ellipse(0,-6,30,8,-.2,0,7);X.fill();X.restore();
 // head
 const hx=62,hy=-188;X.save();X.translate(hx,hy);if(o.look)X.rotate(o.look*.25);
 // pouch (sublingual seed pouch bulge under the bill)
 if(o.pouch){X.fillStyle='#c5c9ce';X.beginPath();X.ellipse(30,30,30*o.pouch+6,22*o.pouch+4,.3,0,7);X.fill()}
 g=X.createLinearGradient(0,-50,0,40);g.addColorStop(0,'#e3e5e8');g.addColorStop(1,'#a9aeb5');X.fillStyle=g;X.beginPath();X.arc(0,0,50,0,7);X.fill();
 X.fillStyle='#f7f7f5';X.beginPath();X.ellipse(30,8,22,18,.3,0,7);X.fill();
 // bill
 X.fillStyle='#141418';X.beginPath();X.moveTo(36,-12);X.lineTo(128,6);X.lineTo(36,14);X.closePath();X.fill();X.fillStyle='rgba(255,255,255,.18)';X.beginPath();X.moveTo(40,-8);X.lineTo(110,3);X.lineTo(40,-2);X.closePath();X.fill();
 if(o.seed)docSeed(128,10,.9,1.2);
 // eye
 if(o.wink){X.strokeStyle='#141418';X.lineWidth=6;X.lineCap='round';X.beginPath();X.moveTo(6,-12);X.quadraticCurveTo(16,-20,26,-12);X.stroke()}
 else{X.fillStyle='#141418';X.beginPath();X.arc(16,-12,11,0,7);X.fill();X.fillStyle='#fff';X.beginPath();X.arc(20,-16,4,0,7);X.fill()}
 X.restore();X.restore()}
