
// ===== LOOK 6 "PAPER CUT-OUT" kit (2026-11-27 18:00 FUN FACT 2, craft ladder). Auto-loaded by build.sh.
// Stop-motion paper world: flat coloured card stock with grain, every layer a cut-out with a hard drop shadow,
// characters/props animate on 12 fps steps (pq), camera stays smooth. Example: pipeline/examples/fleming_paper/
// pq(r[,fps]) quantise time to stop-motion steps; pjit(r,k) tiny per-step wobble (rad) for 'hand-moved' feel.
// cutout(fn,{d,a,blur}) draws fn() with a paper drop shadow. paperBg(col1,col2) card backdrop. paperGrain() screen-space grain (call last).
// paperStrip(y,col,{seed,amp,step}) torn-edge ground/hill strip. paperBlob(x,y,r,col,seed) irregular cut circle. paperCloud(x,y,s).
// paperTag(text,x,y,p,{rot,col,bg,size}) masking-taped note label. paperDots(t) floating paper confetti.
// petri(x,y,s,{mould,halo,t}) petri dish with growing mould + clear ring killing bacteria dots.
// labBench(t) 1928 lab set (window with London chimneys + smoke, shelves of flasks, bench, microscope).
// suitcase(x,y,s,col). fridgeP(x,y,s,{open,bad,clean,t,milk}) paper fridge, milk carton bulges/fuzzes with o.bad 0..1.
// medalP(x,y,s,p) Nobel-style gold medal on ribbon (generic, no logo). kitchenP(t,{night}) modern kitchen paper set.
function pq(r,fps=12){return Math.floor(r*fps)/fps}
function pjit(r,k=1){const s=Math.floor(r*12);return (rnd(s*7.31+k)-.5)*.035}
function cutout(fn,o={}){X.save();X.shadowColor=`rgba(45,28,12,${o.a||.34})`;X.shadowOffsetX=(o.d||9)*.6;X.shadowOffsetY=o.d||9;X.shadowBlur=o.blur==null?3:o.blur;fn();X.restore()}
let _PGR=null;function paperGrain(a=.16){if(!_PGR){_PGR=document.createElement('canvas');_PGR.width=360;_PGR.height=640;const g=_PGR.getContext('2d');const im=g.createImageData(360,640);
 for(let i=0;i<im.data.length;i+=4){const v=200+Math.random()*55;im.data[i]=v;im.data[i+1]=v*.97;im.data[i+2]=v*.9;im.data[i+3]=255}g.putImageData(im,0,0);
 g.globalAlpha=.18;g.strokeStyle='#8a7a60';for(let k=0;k<160;k++){g.beginPath();const x=Math.random()*360,y=Math.random()*640;g.moveTo(x,y);g.lineTo(x+Math.random()*14-7,y+Math.random()*14-7);g.stroke()}}
 X.save();X.setTransform(1,0,0,1,0,0);X.globalCompositeOperation='multiply';X.globalAlpha=a;X.drawImage(_PGR,0,0,1080,1920);X.restore();
 X.save();X.setTransform(1,0,0,1,0,0);const v=X.createRadialGradient(540,900,500,540,960,1250);v.addColorStop(0,'rgba(60,35,10,0)');v.addColorStop(1,'rgba(60,35,10,.32)');X.fillStyle=v;X.fillRect(0,0,1080,1920);X.restore()}
function paperBg(c1,c2){X.save();X.setTransform(1,0,0,1,0,0);const g=X.createLinearGradient(0,0,0,1920);g.addColorStop(0,c1);g.addColorStop(1,c2||c1);X.fillStyle=g;X.fillRect(0,0,1080,1920);X.restore()}
function paperStrip(y,col,o={}){const amp=o.amp||40,step=o.step||70,seed=o.seed||1;cutout(()=>{X.fillStyle=col;X.beginPath();X.moveTo(-1600,4000);X.lineTo(-1600,y);
 for(let x=-1600;x<=2800;x+=step){X.lineTo(x,y+Math.sin(x*.004+seed)*amp+(rnd(x*.13+seed)-.5)*amp*.35)}X.lineTo(2800,4000);X.closePath();X.fill()},{d:o.d||8})}
function paperBlob(x,y,r,col,seed=1,n=14){X.fillStyle=col;X.beginPath();for(let i=0;i<=n;i++){const a=i/n*Math.PI*2,rr=r*(.86+rnd(i*3.7+seed)*.24);X.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr)}X.closePath();X.fill()}
function paperCloud(x,y,s=1){cutout(()=>{X.fillStyle='#fffaf0';[[-60,10,50],[0,-14,66],[64,8,52],[20,24,50],[-28,26,44]].forEach(c=>paperBlob(x+c[0]*s,y+c[1]*s,c[2]*s,'#fffaf0',c[0]))},{d:6})}
function paperTag(text,x,y,p=1,o={}){if(p<=0)return;X.save();X.setTransform(1,0,0,1,0,0);const k=sp(C(p)*1.4,12,.45);X.translate(x,y);X.rotate(o.rot==null?-.03:o.rot);X.scale(Math.max(0,k),Math.max(0,k));
 const size=o.size||64;X.font=`900 ${size}px Inter,'Noto Color Emoji'`;let w=X.measureText(text).width;const maxW=o.maxW||700;if(w>maxW){X.font=`900 ${size*maxW/w}px Inter,'Noto Color Emoji'`;w=maxW}
 const h=size*1.55;cutout(()=>{X.fillStyle=o.bg||'#fff6e2';X.beginPath();for(let i=0;i<=10;i++)X.lineTo(-w/2-34+i*(w+68)/10,-h/2+(rnd(i+3)-.5)*8);for(let i=10;i>=0;i--)X.lineTo(-w/2-34+i*(w+68)/10,h/2+(rnd(i+9)-.5)*8);X.closePath();X.fill()},{d:7});
 X.fillStyle='rgba(235,215,150,.85)';X.save();X.translate(-w/2-14,-h/2+4);X.rotate(-.5);X.fillRect(-36,-14,72,28);X.restore();X.save();X.translate(w/2+14,-h/2+4);X.rotate(.5);X.fillRect(-36,-14,72,28);X.restore();
 X.fillStyle=o.col||'#2a1d14';X.textAlign='center';X.textBaseline='middle';X.fillText(text,0,4);X.restore()}
function paperDots(t,n=18,cols=['#f2b134','#e85d3f','#3f9e8f','#fff6e2']){X.save();X.setTransform(1,0,0,1,0,0);const tq=pq(t);for(let k=0;k<n;k++){const x=((rnd(k*3+1)*1200+tq*40*(1+rnd(k)))%1200)-60,y=((rnd(k*5+2)*2000+tq*90*(.5+rnd(k+4)))%2000)-40;
 X.fillStyle=cols[k%cols.length];X.save();X.translate(x,y);X.rotate(tq*2+k);X.fillRect(-9,-5,18,10);X.restore()}X.restore()}
function petri(x,y,s=1,o={}){const m=C(o.mould||0),h=C(o.halo||0),t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 cutout(()=>{X.fillStyle='#e9f1f2';X.beginPath();X.ellipse(0,0,230,150,0,0,7);X.fill()},{d:10});
 X.fillStyle='#f0d27a';X.beginPath();X.ellipse(0,0,205,130,0,0,7);X.fill();X.strokeStyle='rgba(255,255,255,.8)';X.lineWidth=6;X.beginPath();X.ellipse(-30,-40,150,70,-.2,3.4,4.6);X.stroke();
 for(let i=0;i<46;i++){const a=rnd(i*2.1)*7,rr=40+rnd(i*1.7)*150;const bx=Math.cos(a)*rr,by=Math.sin(a)*rr*.62;const d=Math.hypot(bx-50,(by+10)/.62);const dead=h>0&&d<60+h*120;
  X.globalAlpha=dead?Math.max(0,1-h*1.6):1;X.fillStyle='#e8a33a';X.beginPath();X.arc(bx,by,9+rnd(i)*5,0,7);X.fill();X.fillStyle='#c97f22';X.beginPath();X.arc(bx-2,by-2,4,0,7);X.fill()}
 X.globalAlpha=1;if(h>0){X.strokeStyle=`rgba(255,255,255,${.55*h})`;X.lineWidth=5;X.setLineDash([10,10]);X.beginPath();X.ellipse(50,-10,(60+h*120),(60+h*120)*.62,0,0,7);X.stroke();X.setLineDash([])}
 if(m>0){const r=12+m*62;for(let k=0;k<3;k++){paperBlob(50,-10,r*(1-k*.25),['#5f8f4e','#86b56a','#e9f2d6'][k],k+Math.floor(t*6)%3,16)}
  X.fillStyle='#3e6a33';for(let k=0;k<10;k++){const a=k/10*7;X.beginPath();X.arc(50+Math.cos(a)*r*.9,-10+Math.sin(a)*r*.9,4,0,7);X.fill()}}
 X.restore()}
function labBench(t){paperBg('#d9c7a3','#c7ae86');
 cutout(()=>{X.fillStyle='#8a5a3b';X.fillRect(110,330,560,600);X.fillStyle='#9fc3d9';X.fillRect(140,360,500,540);},{d:10});
 X.fillStyle='#b9d6e6';X.fillRect(140,700,500,200);X.fillStyle='#7a6a82';[[150,640,90,260],[250,600,70,300],[330,660,110,240],[450,610,80,290],[540,650,100,250]].forEach(b=>X.fillRect(b[0],b[1],b[2],b[3]));
 X.fillStyle='#5e5068';[[180,590],[275,555],[470,565]].forEach(c=>X.fillRect(c[0],c[1],22,50));
 const tq=pq(t,8);X.fillStyle='rgba(240,236,228,.75)';[[191,560],[286,525],[481,535]].forEach((c,i)=>{for(let k=0;k<4;k++){const yy=c[1]-((tq*40+k*45+i*20)%180);paperBlob(c[0]+Math.sin(yy*.05+i)*12,yy,14+k*4,'rgba(240,236,228,.6)',k+i)}});
 X.fillStyle='#8a5a3b';X.fillRect(380,360,14,540);X.fillRect(140,620,500,14);
 cutout(()=>{X.fillStyle='#6d4a33';X.fillRect(720,420,320,22);X.fillRect(720,600,320,22)},{d:6});
 const fl=[['#e85d3f',760],['#3f9e8f',840],['#f2b134',920],['#7b5ea7',990]];fl.forEach((f,i)=>cutout(()=>{X.fillStyle='rgba(235,245,248,.95)';X.beginPath();X.moveTo(f[1]-14,330);X.lineTo(f[1]+14,330);X.lineTo(f[1]+14,360);X.lineTo(f[1]+34,420);X.lineTo(f[1]-34,420);X.lineTo(f[1]-14,360);X.fill();X.fillStyle=f[0];X.beginPath();X.moveTo(f[1]-24,390);X.lineTo(f[1]+24,390);X.lineTo(f[1]+34,420);X.lineTo(f[1]-34,420);X.fill()},{d:5}));
 [['#3f9e8f',770],['#e85d3f',860],['#f2b134',960]].forEach(f=>cutout(()=>{X.fillStyle='rgba(235,245,248,.95)';X.fillRect(f[1]-22,520,44,80);X.fillStyle=f[0];X.fillRect(f[1]-22,560,44,40)},{d:5}));
 cutout(()=>{X.fillStyle='#6d4a33';X.fillRect(-200,1180,1500,60);X.fillStyle='#7d563c';X.fillRect(-200,1240,1500,700);X.fillStyle='#5f3f2b';for(let i=0;i<6;i++)X.fillRect(-100+i*260,1260,18,700)},{d:10});
 cutout(()=>{X.fillStyle='#2f3b46';X.fillRect(150,1150,120,30);X.fillRect(195,960,30,200);X.save();X.translate(230,980);X.rotate(-.5);X.fillRect(-20,-110,40,150);X.restore();X.fillStyle='#4a5a68';X.beginPath();X.arc(205,1090,40,0,7);X.fill()},{d:7});
 cutout(()=>{X.fillStyle='#fff6e2';X.save();X.translate(880,1000);X.rotate(.05);X.fillRect(-90,-120,180,230);X.fillStyle='#e85d3f';X.fillRect(-90,-120,180,50);X.fillStyle='#2a1d14';X.font="900 40px Inter";X.textAlign='center';X.fillText('AUG',0,-82);X.font="900 100px Inter";X.fillText('1928'.slice(2),0,40);X.font="700 30px Inter";X.fillText('1928',0,90);X.restore()},{d:6})}
function suitcase(x,y,s=1,col='#b5562f'){cutout(()=>{X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#3a2a1e';X.fillRect(-30,-150,60,16);X.fillRect(-30,-150,12,40);X.fillRect(18,-150,12,40);X.fillStyle=col;X.beginPath();X.roundRect(-110,-115,220,150,14);X.fill();
 X.fillStyle='rgba(0,0,0,.18)';X.fillRect(-60,-115,14,150);X.fillRect(46,-115,14,150);X.fillStyle='#f2b134';X.fillRect(-92,-95,40,28);X.fillStyle='#fff6e2';X.beginPath();X.arc(60,-10,20,0,7);X.fill();X.restore()},{d:6})}
function medalP(x,y,s=1,p=1){if(p<=0)return;X.save();X.translate(x,y);X.scale(s*sp(C(p),12,.4),s*sp(C(p),12,.4));cutout(()=>{X.fillStyle='#2f5fa7';X.beginPath();X.moveTo(-50,-160);X.lineTo(-10,-10);X.lineTo(10,-10);X.lineTo(50,-160);X.lineTo(20,-160);X.lineTo(0,-60);X.lineTo(-20,-160);X.fill();
 X.fillStyle='#d9a521';X.beginPath();X.arc(0,40,62,0,7);X.fill();X.fillStyle='#f4c94a';X.beginPath();X.arc(0,40,48,0,7);X.fill();X.fillStyle='#b8861a';X.font="900 44px Inter";X.textAlign='center';X.textBaseline='middle';X.fillText('★',0,42)},{d:6});X.restore()}
function kitchenP(t,o={}){const n=o.night;paperBg(n?'#2c3557':'#f2d9b3',n?'#1f2742':'#e9c48f');
 cutout(()=>{X.fillStyle=n?'#3b4670':'#7fb7d6';X.fillRect(620,380,320,380);X.fillStyle=n?'#1a2040':'#bfe0f0';X.fillRect(640,400,280,340);if(n){X.fillStyle='#f6e7a8';X.beginPath();X.arc(840,480,34,0,7);X.fill()}else{paperCloud(740,500,.6)}X.fillStyle=n?'#3b4670':'#7fb7d6';X.fillRect(772,400,16,340)},{d:8});
 cutout(()=>{X.fillStyle=n?'#4a557f':'#d96b4a';X.fillRect(140,420,380,160);X.fillStyle=n?'#3a4468':'#b9553a';X.fillRect(140,560,380,20);[[190,470,'#3f9e8f'],[280,460,'#f2b134'],[370,475,'#fff6e2'],[450,465,'#7b5ea7']].forEach(j=>{X.fillStyle=j[2];X.beginPath();X.roundRect(j[0]-26,j[1]-40,52,80,10);X.fill()})},{d:7});
 cutout(()=>{X.fillStyle=n?'#55608c':'#3f9e8f';X.fillRect(-100,1080,1300,40);X.fillStyle=n?'#3d4770':'#2f7d70';X.fillRect(-100,1120,1300,320);X.fillStyle=n?'#2c3557':'#25665c';for(let i=0;i<5;i++)X.fillRect(40+i*250,1160,200,240)},{d:9});
 X.fillStyle=n?'#252c4a':'#d9b07a';X.fillRect(-200,1440,1500,700);X.fillStyle=n?'#2d355a':'#cfa16a';for(let i=0;i<8;i++)X.fillRect(-200+i*200,1440,8,700);
 cutout(()=>{X.fillStyle='#fff6e2';X.beginPath();X.ellipse(330,1060,40,20,0,0,7);X.fill();X.fillStyle=n?'#e85d3f':'#e85d3f';X.beginPath();X.roundRect(300,980,60,80,8);X.fill();X.fillStyle='#fff';X.font='700 26px Inter';X.textAlign='center';X.fillText('☕',330,1030)},{d:5});
 if(o.plant!==0)cutout(()=>{X.fillStyle='#b5562f';X.fillRect(560,990,80,90);X.fillStyle='#4f8a45';for(let k=0;k<5;k++){X.save();X.translate(600,990);X.rotate(-1+k*.5+Math.sin(pq(t)*2+k)*.05);X.beginPath();X.ellipse(0,-60,18,60,0,0,7);X.fill();X.restore()}},{d:5})}
function fridgeP(x,y,s=1,o={}){const op=C(o.open||0),bad=C(o.bad||0),t=o.t||0;X.save();X.translate(x,y);X.scale(s,s);
 cutout(()=>{X.fillStyle='#e9eef2';X.beginPath();X.roundRect(-190,-760,380,760,26);X.fill();X.fillStyle='#d3dbe1';X.fillRect(-190,-500,380,10)},{d:10});
 if(op>0){X.fillStyle=o.clean?'#f7fbff':(bad>0?'#cfe3b8':'#eef6ff');X.fillRect(-170,-740,340,720);
  if(bad>0){X.fillStyle=`rgba(120,190,70,${.35*bad})`;X.fillRect(-170,-740,340,720)}else{X.fillStyle='rgba(255,250,210,.6)';X.fillRect(-170,-740,340,60)}
  X.fillStyle='#c9d6df';[-520,-330,-150].forEach(yy=>X.fillRect(-170,yy,340,10));
  if(o.milk!==0){const bulge=bad*.35+Math.sin(t*6)*.02*bad;X.save();X.translate(-60,-150);X.scale(1+bulge,1+bulge*.5);cutout(()=>{X.fillStyle='#ffffff';X.beginPath();X.moveTo(-45,0);X.lineTo(-45,-150);X.lineTo(0,-190);X.lineTo(45,-150);X.lineTo(45,0);X.closePath();X.fill();
    X.fillStyle='#3f7fd9';X.fillRect(-45,-110,90,46);X.fillStyle='#fff';X.font='900 26px Inter';X.textAlign='center';X.textBaseline='middle';X.fillText('MILK',0,-87)},{d:5});
   if(bad>0){for(let k=0;k<7;k++){paperBlob(-30+rnd(k)*60,-30-rnd(k+3)*120,8+bad*14*rnd(k+5),'#7fae5a',k)}}X.restore()}
  if(!o.clean){cutout(()=>{X.fillStyle='#f2b134';X.beginPath();X.roundRect(30,-420,110,80,10);X.fill();X.fillStyle='#e85d3f';X.beginPath();X.arc(80,-250,46,0,7);X.fill();X.fillStyle='#4f8a45';X.fillRect(74,-306,12,22)},{d:4});
   if(bad>0){X.fillStyle='#86b56a';paperBlob(80,-430,30*bad,'#86b56a',2);paperBlob(70,-262,26*bad,'#9cc47e',5)}}
  else{cutout(()=>{X.fillStyle='#3f9e8f';X.beginPath();X.roundRect(-120,-430,90,80,10);X.fill();X.fillStyle='#f2b134';X.beginPath();X.roundRect(20,-260,110,90,12);X.fill()},{d:4})}
  if(bad>0){X.strokeStyle=`rgba(110,170,60,${bad})`;X.lineWidth=10;X.lineCap='round';for(let k=0;k<3;k++){X.beginPath();for(let j=0;j<12;j++){const yy=-300-j*30-(pq(t)*80%60);X.lineTo(-60+k*60+Math.sin(j*.8+pq(t)*4+k)*20,yy)}X.stroke()}}
  X.save();X.translate(190,0);X.scale(1-op*.85,1);cutout(()=>{X.fillStyle='#e1e7ec';X.beginPath();X.roundRect(-380,-760,380,760,26);X.fill();X.fillStyle='#9aa7b1';X.fillRect(-350,-560,18,140)},{d:8});X.restore();
  X.save();X.translate(190,0);cutout(()=>{X.fillStyle='#dfe6ec';X.beginPath();X.roundRect(0,-760,90*op,760,14);X.fill()},{d:6});X.restore()}
 else{X.fillStyle='#9aa7b1';X.fillRect(140,-460,18,140);X.fillRect(140,-700,18,120);
  cutout(()=>{X.fillStyle='#f2b134';X.save();X.translate(-60,-620);X.rotate(-.08);X.fillRect(-50,-40,100,80);X.restore();X.fillStyle='#e85d3f';X.beginPath();X.arc(60,-640,20,0,7);X.fill()},{d:4})}
 X.restore()}
