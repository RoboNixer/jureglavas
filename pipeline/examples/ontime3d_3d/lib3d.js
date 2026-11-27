// ===== Memopai LOW-POLY 3D KIT v1 (2026-11-27 16:00 POLICEMAN): world drawn into the 2D canvas so all 2D overlays + postFX still work =====
const GLc=document.createElement('canvas');GLc.width=1080;GLc.height=1920;
const REN=new THREE.WebGLRenderer({canvas:GLc,antialias:true,preserveDrawingBuffer:true});REN.setPixelRatio(1);REN.setSize(1080,1920,false);REN.shadowMap.enabled=true;REN.shadowMap.type=THREE.PCFSoftShadowMap;
const SC=new THREE.Scene();const CAM=new THREE.PerspectiveCamera(40,9/16,.1,300);
const HEMI=new THREE.HemisphereLight(0xffffff,0x9aa6b5,.85);const SUN=new THREE.DirectionalLight(0xfff4e0,.75);SUN.castShadow=true;SUN.shadow.mapSize.set(2048,2048);
Object.assign(SUN.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:70});SUN.shadow.bias=-.0015;SC.add(HEMI,SUN,SUN.target);
const ML=c=>new THREE.MeshLambertMaterial({color:c});const MB=c=>new THREE.MeshBasicMaterial({color:c});
function box(w,h,d,c,x=0,y=0,z=0,par=null,sh=true){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),typeof c=='number'?ML(c):c);m.position.set(x,y,z);m.castShadow=sh;m.receiveShadow=true;if(par)par.add(m);return m}
function cyl(r,h,c,x,y,z,par,seg=7){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,seg),typeof c=='number'?ML(c):c);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;par.add(m);return m}
function ctex(w,h,fn,rep){const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);if(rep){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rep[0],rep[1])}t.anisotropy=4;return t}
function label(text,w,h,bg,fg,size,basic){const o={map:ctex(w,h,(g)=>{g.fillStyle=bg;g.fillRect(0,0,w,h);g.fillStyle=fg;g.font='900 '+size+"px Inter,'Noto Color Emoji'";g.textAlign='center';g.textBaseline='middle';g.fillText(text,w/2,h/2+2)})};return basic?new THREE.MeshBasicMaterial(o):new THREE.MeshLambertMaterial(o)}
// wall clock prop (face texture shows a time string)
function clock3(par,x,y,z,time,ry=0,s=1){const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=ry;g.scale.set(s,s,s);par.add(g);cyl(.42,.08,0x222222,0,0,0,g,20).rotation.x=Math.PI/2;
 const f=new THREE.Mesh(new THREE.CircleGeometry(.37,24),new THREE.MeshBasicMaterial({map:ctex(256,256,(c)=>{c.fillStyle='#fffdf4';c.fillRect(0,0,256,256);c.fillStyle='#222';for(let i=0;i<12;i++){const a=i/12*Math.PI*2;c.fillRect(128+Math.sin(a)*100-4,128-Math.cos(a)*100-4,8,8)}
  const [hh,mm]=time.split(':').map(Number);const ha=((hh%12)+mm/60)/12*Math.PI*2,ma=mm/60*Math.PI*2;c.lineCap='round';c.strokeStyle='#222';c.lineWidth=12;c.beginPath();c.moveTo(128,128);c.lineTo(128+Math.sin(ha)*55,128-Math.cos(ha)*55);c.stroke();c.lineWidth=7;c.beginPath();c.moveTo(128,128);c.lineTo(128+Math.sin(ma)*85,128-Math.cos(ma)*85);c.stroke();c.fillStyle='#d33';c.beginPath();c.arc(128,128,9,0,7);c.fill()})}));f.position.z=.05;g.add(f);return g}
function plant3(par,x,z,s=1){const g=new THREE.Group();g.position.set(x,0,z);g.scale.set(s,s,s);par.add(g);box(.4,.4,.4,0xc8643c,0,.2,0,g);for(let i=0;i<6;i++){const l=box(.16,.7,.05,0x2f8a4a,Math.sin(i)*.08,.7,Math.cos(i)*.08,g);l.rotation.set(Math.cos(i*2)*.5,i,Math.sin(i*2)*.5)}g.leaves=g.children.slice(1);return g}
function frame3(par,x,y,z,col,ry=0,w=.7,h=.55){const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=ry;par.add(g);box(w,h,.05,0x5a3d24,0,0,0,g,false);box(w-.12,h-.12,.02,col,0,0,.03,g,false);return g}
function skyTex(night){return ctex(512,512,(c)=>{const gr=c.createLinearGradient(0,0,0,512);gr.addColorStop(0,night?'#0d1838':'#7fc0f2');gr.addColorStop(1,night?'#2a3566':'#dff0ff');c.fillStyle=gr;c.fillRect(0,0,512,512);
 for(let i=0;i<14;i++){const w=30+rnd(i)*40,h=120+rnd(i+3)*260,x=i*38-10;c.fillStyle=night?'#1a2142':'#9fb0c8';c.fillRect(x,512-h,w,h);c.fillStyle=night?'#ffd76a':'#dfe8f4';for(let yy=512-h+12;yy<500;yy+=22)for(let xx=x+6;xx<x+w-8;xx+=12)if(rnd(xx*7+yy)>(night?.55:.3))c.fillRect(xx,yy,6,10)}})}
// ---------- STREET (x=100): office tower with a big 09:00 clock, trees, lamps, passing traffic ----------
const STREET=new THREE.Group();STREET.position.x=100;SC.add(STREET);const TRAFFIC=[],TREES=[];
(function(){const G=STREET;const g=new THREE.Mesh(new THREE.PlaneGeometry(120,80),ML(0x3d424d));g.rotation.x=-Math.PI/2;g.receiveShadow=true;G.add(g);
 for(let i=-10;i<10;i++)box(1.6,.02,.18,0xf3f3f3,i*3.4,.012,6.5,G,false);
 const tiles=ctex(256,256,(c)=>{c.fillStyle='#c9c4b8';c.fillRect(0,0,256,256);c.strokeStyle='#aaa597';c.lineWidth=4;c.strokeRect(0,0,128,128);c.strokeRect(128,128,128,128);c.strokeRect(128,0,128,128);c.strokeRect(0,128,128,128)},[30,3]);
 const sw=new THREE.Mesh(new THREE.BoxGeometry(120,.16,5),new THREE.MeshLambertMaterial({map:tiles}));sw.position.set(0,.08,2);sw.receiveShadow=true;G.add(sw);
 const win=ctex(256,256,(c)=>{c.fillStyle='#5e7aa0';c.fillRect(0,0,256,256);c.fillStyle='#9cc3e6';c.fillRect(14,14,228,228);c.fillStyle='rgba(255,255,255,.35)';c.beginPath();c.moveTo(14,200);c.lineTo(180,14);c.lineTo(240,14);c.lineTo(60,242);c.fill();c.strokeStyle='#33465f';c.lineWidth=14;c.strokeRect(0,0,256,256)},[8,10]);
 const tw=new THREE.Mesh(new THREE.BoxGeometry(12,26,8),[ML(0x6d7f99),ML(0x6d7f99),ML(0x55657c),ML(0x6d7f99),new THREE.MeshLambertMaterial({map:win}),ML(0x6d7f99)]);tw.position.set(0,13,-4.5);tw.castShadow=tw.receiveShadow=true;G.add(tw);
 box(5,3.2,.5,0x2f3b4d,0,1.6,-.4,G);box(3,2.6,.12,0x9fd0ee,0,1.3,-.12,G);box(.06,2.6,.14,0x2f3b4d,0,1.3,-.1,G);
 box(4.4,.7,.12,label('OFFICE',512,90,'#1b2433','#ffffff',70),0,3.7,-.1,G,false);
 clock3(G,0,5.4,-.4,'9:00',0,2.1);
 [[-14,-4,0xc9a27a,14],[14,-4,0xb5654a,11],[-26,-4,0x8f9fb0,18],[26,-4,0xd8cba6,16]].forEach(([x,z,c,h])=>{const b=new THREE.Mesh(new THREE.BoxGeometry(11,h,7),[ML(c),ML(c),ML(c),ML(c),new THREE.MeshLambertMaterial({map:ctex(256,256,(q)=>{q.fillStyle='#'+c.toString(16).padStart(6,'0');q.fillRect(0,0,256,256);q.fillStyle='#2a3342';q.fillRect(60,50,136,150);q.fillStyle='#ffe9a8';q.fillRect(70,60,56,60);q.strokeStyle='#fff';q.lineWidth=8;q.strokeRect(60,50,136,150)},[4,Math.round(h/3)])}),ML(c)]);b.position.set(x,h/2,z);b.castShadow=b.receiveShadow=true;G.add(b);box(11.4,.5,7.4,0x555a63,x,h+.25,z,G)});
 for(let k=-3;k<=3;k++){if(k==0)continue;const x=k*5.2;const t=new THREE.Group();t.position.set(x,0,3.6);G.add(t);box(.25,1.6,.25,0x6b4a2e,0,.8,0,t);const c1=box(1.5,1.3,1.5,0x3f9a52,0,2.1,0,t);const c2=box(1.0,.9,1.0,0x4fb463,.15,2.95,.1,t);t.cr=[c1,c2];TREES.push(t);
  const l=new THREE.Group();l.position.set(x+2.6,0,4.2);G.add(l);box(.12,4,.12,0x2c2f36,0,2,0,l);box(.9,.1,.12,0x2c2f36,.4,4,0,l);box(.35,.15,.3,MB(0xfff2c0),.8,3.9,0,l,false)}
 const car=(c)=>{const g=new THREE.Group();box(4.2,.6,2,c,0,.6,0,g);box(2.2,.6,1.8,c,-.2,1.2,0,g);box(2.24,.45,1.84,0x9fc6e0,-.2,1.18,0,g,false);[[1.3,1],[1.3,-1],[-1.3,1],[-1.3,-1]].forEach(([a,z])=>cyl(.33,.25,0x151515,a,.33,z,g,10).rotation.x=Math.PI/2);G.add(g);return g};
 TRAFFIC.push(car(0xe74c3c),car(0xf1c40f),car(0x3498db));})();
// ---------- FLAT (x=300): bedroom-living room, window with skyline, nightstand + phone, bed, sofa, rug, frames, plant ----------
const FLAT=new THREE.Group();FLAT.position.x=300;SC.add(FLAT);let FLATDOOR,FLATPLANT,FLATCURT;
(function(){const G=FLAT;const wood=ctex(256,256,(c)=>{c.fillStyle='#b98a5e';c.fillRect(0,0,256,256);c.strokeStyle='#9c7048';c.lineWidth=5;for(let i=0;i<8;i++){c.beginPath();c.moveTo(0,i*32);c.lineTo(256,i*32);c.stroke();c.beginPath();c.moveTo((i*97)%256,i*32);c.lineTo((i*97)%256,i*32+32);c.stroke()}},[6,6]);
 const f=new THREE.Mesh(new THREE.PlaneGeometry(16,16),new THREE.MeshLambertMaterial({map:wood}));f.rotation.x=-Math.PI/2;f.receiveShadow=true;G.add(f);
 const wp=ctex(256,256,(c)=>{c.fillStyle='#f1e3cf';c.fillRect(0,0,256,256);c.fillStyle='#e6d2b6';for(let i=0;i<8;i++)c.fillRect(i*32,0,12,256)},[10,4]);const WM=new THREE.MeshLambertMaterial({map:wp});
 box(16,6,.3,WM,0,3,-4,G);box(.3,6,16,WM,-6,3,0,G);box(.3,6,16,WM,6,3,0,G);box(16,.5,.06,0xffffff,0,.25,-3.83,G,false);
 const sky=new THREE.Mesh(new THREE.PlaneGeometry(3.2,2.4),new THREE.MeshBasicMaterial({map:skyTex(0)}));sky.position.set(2.6,3.2,-3.86);G.add(sky);
 box(3.5,.14,.2,0xffffff,2.6,1.95,-3.75,G);box(3.5,.14,.2,0xffffff,2.6,4.45,-3.75,G);box(.14,2.6,.2,0xffffff,.85,3.2,-3.75,G);box(.14,2.6,.2,0xffffff,4.35,3.2,-3.75,G);box(.08,2.5,.15,0xffffff,2.6,3.2,-3.75,G);
 FLATCURT=[box(.7,3,.1,0x3d7fbf,.5,3.1,-3.6,G),box(.7,3,.1,0x3d7fbf,4.7,3.1,-3.6,G)];
 // bed
 box(2.4,.45,3.2,0x6b4a2e,-3.4,.35,-2.2,G);box(2.3,.25,3.0,0xf5f5f5,-3.4,.7,-2.2,G);box(2.35,.18,1.9,0x4f9bd9,-3.4,.86,-1.7,G);box(.9,.2,.5,0xffffff,-3.9,.9,-3.4,G);box(.9,.2,.5,0xffffff,-2.9,.9,-3.4,G);box(2.4,1.3,.15,0x6b4a2e,-3.4,.9,-3.85,G);
 // nightstand + phone spot
 box(.8,.7,.6,0x8a5a30,-1.7,.35,-3.3,G);box(.25,.4,.25,0xf2d16b,-1.85,.9,-3.35,G);box(.4,.25,.4,MB(0xfff6d8),-1.85,1.2,-3.35,G,false);
 // sofa + rug + table
 box(4.2,.02,2.6,0xc0392b,1.8,.012,.2,G,false);box(3.2,.5,1.1,0x2e8b8b,2.4,.45,-2.6,G);box(3.2,.8,.3,0x2e8b8b,2.4,1.0,-3.1,G);box(.3,.7,1.1,0x267575,.85,.6,-2.6,G);box(.3,.7,1.1,0x267575,3.95,.6,-2.6,G);
 box(1.4,.08,.8,0x6b4a2e,1.8,.55,-.6,G);[[-.6,-.3],[.6,-.3],[-.6,.3],[.6,.3]].forEach(([a,b])=>box(.07,.5,.07,0x6b4a2e,1.8+a,.27,-.6+b,G));box(.2,.25,.2,0xffffff,2.1,.7,-.6,G);
 frame3(G,-3.4,3.0,-3.83,0xe9a23b);frame3(G,-1.2,3.4,-3.83,0x6fb3ee,0,.5,.7);frame3(G,-5.83,2.8,-1,0x7dc383,Math.PI/2,.9,.6);
 clock3(G,-1.2,2.35,-3.83,'9:20',0,.6);
 FLATPLANT=plant3(G,4.9,-3.2,1.2);plant3(G,-5.2,1.5,.9);
 // shelf with books
 box(2,.08,.4,0x6b4a2e,-4.6,2.0,1.2,G).rotation.y=Math.PI/2;for(let i=0;i<7;i++)box(.12,.4+rnd(i)*.2,.3,[0xc0392b,0x2980b9,0xf1c40f,0x27ae60][i%4],-4.6,2.25,.5+i*.2,G);
 // door (right wall) swings open
 FLATDOOR=new THREE.Group();FLATDOOR.position.set(5.85,0,1.8);G.add(FLATDOOR);box(.1,2.6,1.3,0x8a5a30,0,1.3,-.65,FLATDOOR);box(.1,.12,.12,0xd4af37,-.1,1.25,-1.15,FLATDOOR,false);
})();
// ---------- POLICE STATION (x=200): desks, monitors, MOST WANTED poster, blinds, clock, door ----------
const STATION=new THREE.Group();STATION.position.x=200;SC.add(STATION);let STDOOR,STPHONE;
(function(){const G=STATION;const f=new THREE.Mesh(new THREE.PlaneGeometry(18,18),new THREE.MeshLambertMaterial({map:ctex(128,128,(c)=>{c.fillStyle='#8e9bab';c.fillRect(0,0,128,128);c.fillStyle='#7d8a9a';c.fillRect(0,0,64,64);c.fillRect(64,64,64,64)},[14,14])}));f.rotation.x=-Math.PI/2;f.receiveShadow=true;G.add(f);
 box(18,6,.3,0xdfe6ee,0,3,-4,G);box(.3,6,18,0xdfe6ee,-6,3,0,G);box(.3,6,18,0xdfe6ee,6,3,0,G);box(18,1.2,.05,0x2b4a8a,0,.6,-3.83,G,false);box(.05,1.2,18,0x2b4a8a,-5.83,.6,0,G,false);
 box(3.2,.5,.1,label('POLICE',512,80,'#2b4a8a','#ffffff',64),0,4.6,-3.82,G,false);
 const blinds=ctex(128,128,(c)=>{c.fillStyle='#bfe0f5';c.fillRect(0,0,128,128);c.fillStyle='#f4f4f4';for(let y=0;y<128;y+=16)c.fillRect(0,y,128,10)},[1,6]);box(2.6,2,.05,new THREE.MeshBasicMaterial({map:blinds}),3.4,3.1,-3.83,G,false);box(2.8,.12,.15,0xffffff,3.4,2.05,-3.8,G);
 // MOST WANTED poster: an alarm clock
 box(1.2,1.5,.03,new THREE.MeshLambertMaterial({map:ctex(256,320,(c)=>{c.fillStyle='#f3e6c4';c.fillRect(0,0,256,320);c.fillStyle='#8b1a1a';c.font='900 34px Inter';c.textAlign='center';c.fillText('MOST',128,46);c.fillText('WANTED',128,84);c.fillStyle='#222';c.beginPath();c.arc(128,190,62,0,7);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(128,190,50,0,7);c.fill();c.fillStyle='#222';c.beginPath();c.arc(88,130,20,0,7);c.arc(168,130,20,0,7);c.fill();c.lineWidth=7;c.strokeStyle='#222';c.beginPath();c.moveTo(128,190);c.lineTo(128,155);c.moveTo(128,190);c.lineTo(152,200);c.stroke();c.font='800 22px Inter';c.fillText('THE ALARM CLOCK',128,292)})}),-3.2,3.1,-3.82,G,false);
 box(1.0,1.3,.03,label('🍩',200,260,'#fff6e0','#000',120),-1.6,3.0,-3.82,G,false);
 clock3(G,1.0,3.3,-3.82,'8:59',0,.75);
 // desks with monitors + papers
 [[-3,-1.2],[2.6,-1.2]].forEach(([x,z],i)=>{box(2.2,.1,1.1,0x7a5230,x,1.0,z,G);box(2.1,.95,.08,0x5c3d23,x,.5,z+.5,G);box(.08,.95,1,0x5c3d23,x-1.05,.5,z,G);box(.08,.95,1,0x5c3d23,x+1.05,.5,z,G);
  box(.8,.55,.06,0x1e2430,x-.3,1.4,z-.3,G);box(.72,.46,.02,MB(0x4a90d9),x-.3,1.4,z-.26,G,false);box(.1,.25,.1,0x1e2430,x-.3,1.13,z-.3,G);box(.5,.03,.35,0xffffff,x+.55,1.07,z,G,false);box(.18,.2,.18,0xffffff,x+.7,1.15,z-.3,G)});
 box(.9,1.6,.7,0x7d8794,5.2,.8,-2.6,G);box(.9,1.6,.7,0x7d8794,5.2,.8,-1.8,G);
 STPHONE=box(.35,.12,.25,0xc0392b,2.1,1.11,-1.0,G);
 STDOOR=new THREE.Group();STDOOR.position.set(-5.85,0,0.2);G.add(STDOOR);box(.1,2.6,1.3,0x5c6f8a,0,1.3,.65,STDOOR);box(.12,2.8,.15,0x34495e,0,1.4,1.38,G);
 plant3(G,-5.2,-3.2,1.1);
})();
// ---------- CELL BLOCK (x=0) ----------
const BLOCK=new THREE.Group();SC.add(BLOCK);
(function(){const tile=ctex(256,256,(g)=>{g.fillStyle='#c3c9d1';g.fillRect(0,0,256,256);g.strokeStyle='#a4acb8';g.lineWidth=5;g.strokeRect(0,0,256,256)},[22,16]);
 const fl=new THREE.Mesh(new THREE.PlaneGeometry(44,32),new THREE.MeshLambertMaterial({map:tile}));fl.rotation.x=-Math.PI/2;fl.position.set(0,0,2);fl.receiveShadow=true;BLOCK.add(fl);
 box(44,.02,.16,0xe0b33a,0,.012,-2.2,BLOCK,false);const WALL=0xe9e2c8,BAND=0x3f7f78,STEEL=0x7c8898;
 box(44,9,.3,WALL,0,4.5,-7.15,BLOCK);box(.3,9,32,WALL,-11,4.5,2,BLOCK);box(.3,9,32,WALL,11,4.5,2,BLOCK);box(44,9,.3,WALL,0,4.5,12,BLOCK);
 box(.05,1.3,32,BAND,-10.83,.65,2,BLOCK,false);box(.05,1.3,32,BAND,10.83,.65,2,BLOCK,false);box(44,1.3,.05,BAND,0,.65,11.83,BLOCK,false);
 box(44,.3,24,0xf3f0e6,0,9,2,BLOCK,false);for(let i=-2;i<=2;i++)box(2.2,.08,.5,MB(0xffffff),i*4,8.8,1,BLOCK,false);
 for(let tier=0;tier<2;tier++){const y0=tier*3.3;for(let k=0;k<=5;k++)box(.18,3.1,4.2,0xcfc8ae,-10+k*4,y0+1.55,-5.05,BLOCK);box(20.2,.25,5.4,0x8d97a5,0,y0+3.18,-4.45,BLOCK);
  const n=5*15;const im=new THREE.InstancedMesh(new THREE.BoxGeometry(.07,3.05,.07),ML(STEEL),n);const mt=new THREE.Matrix4();let q=0;for(let c=0;c<5;c++)for(let b=0;b<15;b++){mt.setPosition(-10+c*4+.25+b*.25,y0+1.53,-3);im.setMatrixAt(q++,mt)}im.castShadow=true;BLOCK.add(im);
  [.12,1.55,2.95].forEach(yy=>box(20,.09,.1,STEEL,0,y0+yy,-3,BLOCK));
  for(let c=0;c<5;c++){box(.9,.34,.06,label((tier?'B-2':'B-1')+'0'+(c+1),256,96,'#f4f4f0','#333',60),-8+c*4,y0+2.72,-2.93,BLOCK,false);box(1.9,.22,.85,0x3d5fa8,-9.0+c*4,y0+.55,-6.4,BLOCK);box(1.9,.5,.08,0x8d97a5,-9.0+c*4,y0+.25,-6.0,BLOCK);box(.5,.14,.6,0xf2f2f2,-9.6+c*4,y0+.72,-6.4,BLOCK)}
  if(tier){box(20.2,.08,.08,STEEL,0,y0+1.05,-1.85,BLOCK);for(let k=0;k<=40;k++)box(.05,1.05,.05,STEEL,-10+k*.5,y0+.52,-1.85,BLOCK,false)}}
 box(.7,.6,.7,0x8d97a5,0,.3,-4.2,BLOCK);box(.12,2.5,1.5,0x3a4658,-10.8,1.25,2.5,BLOCK);box(1.4,.75,.8,0x8d97a5,7.5,.37,5,BLOCK);})();
// ---------- PHONE3 prop: a phone that can be handcuffed and jailed ----------
function mkPhone3(){const g=new THREE.Group();SC.add(g);box(.36,.7,.06,0x1b1b1f,0,0,0,g);g.scr=box(.31,.6,.01,MB(0x25d366),0,0,.035,g,false);
 g.av=new THREE.Mesh(new THREE.CircleGeometry(.09,16),new THREE.MeshBasicMaterial({map:ctex(128,128,(c)=>{c.fillStyle='#fff7e8';c.fillRect(0,0,128,128);if(window.MAS&&MAS.complete&&MAS.naturalWidth)c.drawImage(MAS,14,14,100,100)})}));g.av.position.set(0,.12,.042);g.add(g.av);
 g.cuff=new THREE.Group();g.add(g.cuff);[-.16,.16].forEach(x=>{const r=new THREE.Mesh(new THREE.TorusGeometry(.1,.025,6,14),ML(0xc9ced6));r.position.set(x,-.25,.05);g.cuff.add(r)});box(.2,.03,.03,0xc9ced6,0,-.25,.06,g.cuff,false);g.visible=false;return g}
// ---------- characters ----------
function faceTex(skin,eyes,mouth,o){return ctex(256,256,(g)=>{g.fillStyle=skin;g.fillRect(0,0,256,256);const K='#1c1a1a';g.lineCap='round';
 const eye=(x,lid)=>{g.fillStyle='#fff';g.beginPath();g.ellipse(x,108,27,eyes=='wide'?31:25,0,0,7);g.fill();g.strokeStyle=K;g.lineWidth=6;g.stroke();g.fillStyle=K;g.beginPath();g.arc(x,eyes=='wide'?108:114,eyes=='wide'?8:11,0,7);g.fill();
  if(lid){g.fillStyle=skin;g.fillRect(x-34,70,68,38*lid+8);g.strokeStyle=K;g.lineWidth=7;g.beginPath();g.moveTo(x-28,78+38*lid);g.lineTo(x+28,78+38*lid);g.stroke()}};
 if(eyes=='happy'){g.strokeStyle=K;g.lineWidth=8;[84,172].forEach(x=>{g.beginPath();g.arc(x,116,20,Math.PI*1.1,Math.PI*1.9);g.stroke()})}
 else{eye(84,eyes=='sleepy'?.62:eyes=='angry'?.4:eyes=='sad'?.5:0);eye(172,eyes=='sleepy'?.7:eyes=='angry'?.4:eyes=='sad'?.5:0)}
 g.strokeStyle=o.brow||K;g.lineWidth=11;const br=(x,a,b)=>{g.beginPath();g.moveTo(x-28,a);g.lineTo(x+28,b);g.stroke()};
 if(eyes=='angry'){br(84,56,78);br(172,78,56)}else if(eyes=='sad'){br(84,70,54);br(172,54,70)}else if(eyes=='wide'){br(84,48,44);br(172,44,48)}else{br(84,62,60);br(172,60,62)}
 if(o.glasses){g.strokeStyle='#222';g.lineWidth=9;[84,172].forEach(x=>{g.beginPath();g.arc(x,108,40,0,7);g.stroke()});g.beginPath();g.moveTo(124,104);g.lineTo(132,104);g.stroke()}
 g.strokeStyle='rgba(0,0,0,.28)';g.lineWidth=7;g.beginPath();g.moveTo(128,128);g.lineTo(120,158);g.lineTo(134,160);g.stroke();
 g.strokeStyle=K;g.lineWidth=8;g.fillStyle='#5a1818';const my=204;
 if(mouth=='smile'){g.beginPath();g.arc(128,my-22,34,.15*Math.PI,.85*Math.PI);g.stroke()}
 else if(mouth=='sad'){g.beginPath();g.arc(128,my+26,30,1.2*Math.PI,1.8*Math.PI);g.stroke()}
 else if(mouth=='open'){g.beginPath();g.ellipse(128,my,20,16,0,0,7);g.fill();g.stroke()}
 else if(mouth=='o'){g.beginPath();g.ellipse(128,my,15,20,0,0,7);g.fill();g.stroke()}
 else if(mouth=='shout'){g.beginPath();g.ellipse(128,my-4,36,34,0,0,7);g.fill();g.stroke();g.fillStyle='#fff';g.fillRect(104,my-34,48,12);g.fillStyle='#ff7f8a';g.beginPath();g.ellipse(128,my+16,18,9,0,0,7);g.fill()}
 else if(mouth=='grin'){g.fillStyle='#fff';g.beginPath();g.roundRect(92,my-16,72,28,10);g.fill();g.stroke();g.lineWidth=4;[116,140].forEach(x=>{g.beginPath();g.moveTo(x,my-16);g.lineTo(x,my+12);g.stroke()})}
 else{g.beginPath();g.moveTo(106,my);g.lineTo(150,my);g.stroke()}
 if(o.mus){g.fillStyle=o.mus;g.beginPath();g.moveTo(78,182);g.quadraticCurveTo(128,150,178,182);g.quadraticCurveTo(150,176,128,172);g.quadraticCurveTo(106,176,78,182);g.fill()}
 if(o.stubble){g.fillStyle='rgba(60,40,30,.35)';for(let i=0;i<220;i++)g.fillRect(40+rnd(i)*176,170+rnd(i+50)*80,3,3)}
 if(o.freck){g.fillStyle='rgba(150,80,40,.45)';for(let i=0;i<14;i++)g.fillRect(50+rnd(i)*40+(i%2)*116,140+rnd(i+9)*20,5,5)}
 if(o.blush){g.fillStyle='rgba(255,120,120,.35)';[52,204].forEach(x=>{g.beginPath();g.ellipse(x,160,20,12,0,0,7);g.fill()})}})}
const CHARS=[];
function mkChar(o){const g=new THREE.Group();SC.add(g);const sk=o.skin||0xf2c9a0,skc='#'+sk.toString(16).padStart(6,'0');
 const body=new THREE.Group();g.add(body);box(o.belly?.74:.62,.74,o.belly?.46:.34,o.shirt,0,1.15,0,body);
 if(o.tie)box(.09,.42,.02,o.tie===1?0xc0392b:o.tie,0,1.24,o.belly?.24:.18,body,false);if(o.badge)box(.12,.14,.02,0xf2c94c,-.17,1.36,o.belly?.24:.18,body,false);
 if(o.hood){box(.5,.22,.1,o.shirt,0,1.5,-.2,body);box(.04,.3,.02,0xffffff,-.1,1.32,.18,body,false);box(.04,.3,.02,0xffffff,.1,1.32,.18,body,false)}
 if(o.belt)box(o.belly?.76:.64,.08,o.belly?.48:.36,0x222222,0,.82,0,body,false);
 const leg=d=>{const p=new THREE.Group();p.position.set(d*.16,.78,0);g.add(p);box(.25,.74,.27,o.pants,0,-.37,0,p);box(.27,.1,.38,o.shoes||0x222222,0,-.73,.05,p);return p};
 const arm=d=>{const p=new THREE.Group();p.position.set(d*(o.belly?.47:.41),1.46,0);body.add(p);box(.18,.62,.2,o.shirt,0,-.31,0,p);box(.16,.16,.18,sk,0,-.7,0,p);return p};
 const c={g,body,o,LL:leg(-1),LR:leg(1),AL:arm(-1),AR:arm(1),tex:{}};
 box(.14,.14,.14,sk,0,1.57,0,body,false);const hd=new THREE.Group();hd.position.y=1.62;body.add(hd);c.hd=hd;
 c.fm=new THREE.MeshLambertMaterial({color:0xffffff});const hm=new THREE.Mesh(new THREE.BoxGeometry(.52,.6,.46),[ML(sk),ML(sk),ML(sk),ML(sk),c.fm,ML(sk)]);hm.position.y=.3;hm.castShadow=true;hd.add(hm);
 box(.1,.16,.08,sk,-.3,.28,0,hd,false);box(.1,.16,.08,sk,.3,.28,0,hd,false);
 const hc=o.hair;if(hc!=null){if(o.style=='bun'){box(.56,.12,.5,hc,0,.65,0,hd);box(.24,.22,.24,hc,0,.82,-.05,hd);box(.56,.4,.08,hc,0,.42,-.25,hd)}
  else if(o.style=='spiky'){box(.56,.1,.5,hc,0,.64,0,hd);for(let k=-2;k<=2;k++){const s=box(.09,.24,.09,hc,k*.11,.76,(k%2)*.08,hd);s.rotation.z=-k*.2}}
  else if(o.style=='side'){box(.56,.11,.5,hc,0,.645,0,hd);box(.3,.14,.52,hc,-.14,.72,0,hd);box(.56,.3,.08,hc,0,.47,-.25,hd)}
  else if(o.style=='bald'){box(.08,.22,.4,hc,-.27,.4,-.05,hd);box(.08,.22,.4,hc,.27,.4,-.05,hd);box(.56,.18,.08,hc,0,.38,-.25,hd)}
  else{box(.56,.13,.5,hc,0,.655,0,hd);box(.56,.34,.08,hc,0,.46,-.25,hd)}}
 if(o.cap){const cc=o.capc||0x1d2b4f;box(.6,.2,.54,cc,0,.69,0,hd);box(.66,.07,.6,0x111a33,0,.6,0,hd);box(.5,.05,.26,0x0b1222,0,.59,.36,hd);box(.12,.12,.03,0xf2c94c,0,.7,.28,hd,false);if(o.chiefcap)box(.62,.05,.56,0xf2c94c,0,.64,0,hd,false)}
 c.phone=new THREE.Group();box(.13,.24,.035,0x1b1b1f,0,0,0,c.phone);box(.1,.2,.01,MB(o.phoneCol||0x25d366),0,0,.02,c.phone,false);c.phone.position.set(0,-.8,.12);c.AR.add(c.phone);
 c.mug=new THREE.Group();box(.16,.2,.16,0xffffff,0,0,0,c.mug);box(.05,.1,.05,0xffffff,.1,0,0,c.mug);c.mug.position.set(0,-.82,.12);c.AL.add(c.mug);
 c.bag=new THREE.Group();box(.5,.36,.14,0x5a3d24,0,0,0,c.bag);box(.3,.05,.05,0x3a2814,0,.2,0,c.bag);c.bag.position.set(0,-.95,0);c.AL.add(c.bag);
 c.fopt={glasses:o.glasses,stubble:o.stubble,blush:1,brow:o.browc,mus:o.mus,freck:o.freck};c.skc=skc;CHARS.push(c);return c}
function setFace(c,e,m){const k=e+':'+m;if(!c.tex[k])c.tex[k]=faceTex(c.skc,e,m,c.fopt);if(c.fm.map!==c.tex[k]){c.fm.map=c.tex[k];c.fm.needsUpdate=true}}
function P(c,o){const t=o.t||0;c.g.visible=true;const s=o.s||1;c.g.scale.set(s,s,s);const w=o.walk;const wsp=o.wsp||9;c.g.position.set(o.x||0,(o.y||0)+(w!=null?Math.abs(Math.sin(w*wsp))*.05:0)+(o.hop||0),o.z||0);c.g.rotation.y=o.ry||0;
 const [e,m]=(o.face||'sleepy:flat').split(':');let mm=m;if(o.talk&&m!='shout')mm=Math.sin(t*22)>0?'open':m;setFace(c,e,mm);
 const sw=w!=null?Math.sin(w*wsp)*.65:0;c.LL.rotation.x=sw;c.LR.rotation.x=-sw;
 c.AL.rotation.set(o.aL!=null?o.aL:-sw*.8,0,o.zL!=null?o.zL:-.06);c.AR.rotation.set(o.aR!=null?o.aR:sw*.8,0,o.zR!=null?o.zR:.06);
 c.hd.rotation.set((o.hx||0)+(o.talk?Math.sin(t*22)*.035:0),o.hy||0,o.hz||0);c.body.rotation.set(o.lean||0,0,o.tilt||0);c.body.position.x=o.shake?Math.sin(t*70)*o.shake:0;
 c.phone.visible=o.hold=='phone';c.mug.visible=o.hold=='mug'||o.holdL=='mug';c.bag.visible=o.holdL=='bag'}
let USE3D=false;const SETS={block:[BLOCK,0],street:[STREET,100],station:[STATION,200],flat:[FLAT,300]};
function begin3d(set,o={}){USE3D=true;CHARS.forEach(c=>c.g.visible=false);PHONES.forEach(p=>p.visible=false);Object.entries(SETS).forEach(([k,v])=>v[0].visible=k==set);const ox=SETS[set][1];
 SC.background=new THREE.Color(o.bg!=null?o.bg:set=='street'?0x86c5f0:0xe9e2c8);const d=o.dim||1;HEMI.intensity=.85*d;SUN.intensity=.75*d;HEMI.color.set(o.night?0x8fa6ff:0xffffff);
 SUN.position.set(ox+6,13,9);SUN.target.position.set(ox,0,-1);SUN.target.updateMatrixWorld();return ox}
// camera: sets CAM and RENDERS the 3D world into the 2D canvas, so draw overlays after cam3()
function cam3(t,p,l,fov=40,wob=1){CAM.fov=fov;CAM.updateProjectionMatrix();CAM.position.set(p[0]+Math.sin(t*1.7)*.02*wob+(SHK?Math.sin(t*71)*SHK*.004:0),p[1]+Math.cos(t*1.4)*.02*wob+(SHK?Math.cos(t*63)*SHK*.004:0),p[2]);CAM.lookAt(l[0],l[1],l[2]);CAM.rotation.z+=Math.sin(t*1.1)*.006*wob;
 REN.render(SC,CAM);X.save();X.setTransform(1,0,0,1,0,0);X.drawImage(GLc,0,0);X.restore()}
const mix3=(a,b,p)=>a.map((v,i)=>v+(b[i]-v)*p);
// ---------- cast (original box-head characters) ----------
const SUS=mkChar({shirt:0x3aa66b,pants:0x34495e,hood:1,hair:0x6b3e1f,style:'spiky',skin:0xf0c49a,shoes:0xf2f2f2});
const BOSS=mkChar({shirt:0x6d7480,pants:0x3b3f48,tie:0x2b4a8a,hair:0x8a8a8a,style:'bald',glasses:1,skin:0xf6d7b4});
const CHIEF=mkChar({shirt:0x1f3566,pants:0x14213f,badge:1,cap:1,chiefcap:1,belly:1,belt:1,hair:0x4a3020,mus:'#4a3020',skin:0xe8b48a});
const ROOK=mkChar({shirt:0x5d8fd6,pants:0x1d2b4f,badge:1,cap:1,capc:0x2b4f8f,hair:0xd2691e,freck:1,skin:0xf8dcc0});
const COP2=mkChar({shirt:0x1f3566,pants:0x14213f,badge:1,cap:1,belt:1,hair:0x1a1a1a,stubble:1,skin:0x8d5a3b});
const COWK=mkChar({shirt:0xc0392b,pants:0x2c3e50,hair:0x2a1a10,style:'bun',skin:0xd9a47a});
const PHONES=[mkPhone3()];const EPH=PHONES[0];
