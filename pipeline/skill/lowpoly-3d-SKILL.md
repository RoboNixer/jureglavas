---
name: "lowpoly-3d-story-video"
description: "Make 9:16 low-poly 3D story videos (blocky box-head characters in a 3D prison/office/street/police-station world, moving camera, small white captions) for the Memopai POLICEMAN series: deadpan absurd-authority satire about forgetting, Memopai as the twist, end card + CTA."
---

# Low-poly 3D story video (Jure's 3D style)

> **2026-11-26 owner update (overrides below where they disagree):** this is the default look of the **16:00 POLICEMAN series** in the Memopai content system v4 (repo `RoboNixer/jureglavas`, branch `memopai-media`, `pipeline/RUNBOOK.md` section 0h; alternate with the Officer Gary toon when the previous POLICEMAN reel was 3D). Length 30-45 s + ~3 s end card. Satire mechanic the owner likes: the police start from ONE wrong assumption about memory, punctuality or habits and bend every fact to keep it (normal person notices something "terrifying" → 911, officer yells the obvious → chief freezes and declares an absurd emergency → squad storms in and does something doubly pointless → rookie objects, chief shouts a dumber order → a stamped file proves the opposite, chief blames the wrong party → the wrong one gets promoted). The plot must hinge on forgetting/reminding so Memopai is the turn (fit test: it falls apart without Memopai). Real Memopai features only, paid (never "free"). Never jokes about race, ethnicity, religion, nationality, gender or disability. Every shot gets a camera move (tracking, crane, drone, OTS, push-in) and characters move; build new sets (police station, courtroom, street, office, flat) as new groups at new x offsets and reuse them. Safe zones: text x 150-900, y 300-1610. Every reel ends with the Memopai end card + spoken CTA.

Output: 1080x1920, 30 fps MP4, 45-60 s. A low-poly 3D world (three.js) with blocky characters that have flat drawn faces, a moving handheld camera, close-ups through bars, small white captions in the middle of the screen, 2D pop-ups on top (tags, stamps, Memopai notifications, WhatsApp chat). Voices, music and SFX come from the `stickman-story-video` skill.

**This skill builds on `stickman-story-video`.** Load that skill too and use its section 2 (voice model setup), section 5 (engine.html, frames.js, render.js, score_core.py), section 7.3 (comedy vo.py) and section 7.7 (extra sounds). This skill replaces only the picture: the 2D toon scenes become 3D scenes.

## 1. Rules
- **Never copy another creator's video.** A reference video gives the format only (deadpan narrator, absurd authority logic, twist ending). Write a new script; do not reuse its lines. Do not copy a creator's signature character design (e.g. triangle heads): characters here are original box-head figures.
- **No jokes built on race or other protected traits.** Swap the premise for something harmless (e.g. everyone is in prison for forgetting things).
- **Memopai placement (always):** story first, then the Memopai end card + spoken CTA (owner 2026-11-11/2026-11-26: every reel ends with `endcard()` and a last narrator line tagged `cta`, e.g. "Stop forgetting. Just text Memo Pie on WhatsApp."; this replaces the old 'never an ad, no CTA ending' rule). Show Memopai as a WhatsApp contact that (a) reminds the character themself and (b) is used to remind someone else. Spell it "Memopai"; write "Memo Pie" in TTS text. Good spots: notification banners over a close-up, a full-screen chat, a last-frame notification.
- **Story recipe:** hook shout + a short full-voice question (0-4 s; no whispers, owner rule) -> setup -> the absurd discovery -> call to authority -> authority's insane logic escalates twice -> confession/twist -> wrong person rewarded -> last dumb line. 22-26 lines, something new every 1-2 s.
- mascot.png must exist (ask Jure for the real one; otherwise draw a purple-blue triangle stand-in and say so).

## 2. Pipeline
1. Setup voice model and project folder as in stickman-story-video section 2. Also: `npm pack three@0.149.0 && tar xzf three-0.149.0.tgz && cp package/build/three.min.js .` (0.149 still ships a plain script build; newer versions are modules and fail on file://).
2. Script -> vo.py (comedy version) -> vo.wav + timeline.json. Post-edit caption texts for digits ("nine one one" -> "911").
3. Save engine.html from stickman-story-video (with the 7.4 caption class edits), then apply the three engine patches in section 3.
4. Write `lib3d.js` (section 4) and `scenes3d.js` (section 5). Build: `story.html = engine.html with /*TL*/ -> timeline.json and /*SCENES*/ -> lib3d.js + scenes3d.js`.
5. In frames.js and render.js launch Chromium with software WebGL: `chromium.launch({args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']})`.
6. Preview one frame per shot (`node frames.js ...`), tile into contact sheets, fix framing. Expect one round of camera fixes.
7. score.py as in stickman-story-video -> mix.wav.
8. Render. About 0.3 s per frame per worker on 2 cores, so a 59 s video takes about 10 minutes: make render.js take chunk names from argv and run `node render.js a b` then `node render.js c d` as two commands (each under the 10 minute limit). Concat with `-c copy`, add sound with `-c:v copy`.
9. QA sheet (`fps=2,scale=120:213,tile=12x10`), look at every tile, then SendUserFile. Say you cannot hear the audio.

## 3. Engine patches (engine.html)
- Add a WebGL canvas under the 2D canvas and load three: replace `<canvas id="cv" ...></canvas>` with `<canvas id="gl" width="1080" height="1920" style="position:absolute;left:0;top:0"></canvas><canvas id="cv" width="1080" height="1920"></canvas><script src="three.min.js"></script>`.
- In `render(t)`: replace the black `fillRect` with `X.clearRect(0,0,1080,1920);USE3D=false;` and, just before the flash line, add `if(USE3D)REN.render(SC,CAM);`.
- Caption style (add before `</style>`):
```css
#cap{top:1230px!important;font-size:66px!important;font-weight:800!important;letter-spacing:0!important;color:#fff!important;-webkit-text-stroke:10px #111!important;font-style:normal!important}
#cap.s,#cap.gs{font-size:78px!important;text-transform:uppercase}
#cap.w,#cap.fw{font-style:italic!important;color:#e6ebf2!important}
#vig{opacity:.55}#grain{opacity:.03}
```

## 4. lib3d.js (world + characters)
```js
const GLc=document.getElementById('gl');
const REN=new THREE.WebGLRenderer({canvas:GLc,antialias:true,preserveDrawingBuffer:true});REN.setPixelRatio(1);REN.setSize(1080,1920,false);REN.shadowMap.enabled=true;REN.shadowMap.type=THREE.PCFSoftShadowMap;
const SC=new THREE.Scene();const CAM=new THREE.PerspectiveCamera(40,9/16,.1,200);
const HEMI=new THREE.HemisphereLight(0xffffff,0x9aa6b5,.85);const SUN=new THREE.DirectionalLight(0xfff4e0,.75);SUN.castShadow=true;SUN.shadow.mapSize.set(2048,2048);
Object.assign(SUN.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:60});SUN.shadow.bias=-.0015;SC.add(HEMI,SUN,SUN.target);
const ML=c=>new THREE.MeshLambertMaterial({color:c});
function box(w,h,d,c,x=0,y=0,z=0,par=null,sh=true){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),typeof c=='number'?ML(c):c);m.position.set(x,y,z);m.castShadow=sh;m.receiveShadow=true;if(par)par.add(m);return m}
function ctex(w,h,fn,rep){const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);if(rep){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rep[0],rep[1])}t.anisotropy=4;return t}
function label(text,w,h,bg,fg,size){return new THREE.MeshLambertMaterial({map:ctex(w,h,(g)=>{g.fillStyle=bg;g.fillRect(0,0,w,h);g.fillStyle=fg;g.font='900 '+size+'px Inter';g.textAlign='center';g.textBaseline='middle';g.fillText(text,w/2,h/2+2)})})}
// ---------- cell block (cells along the back wall, bars at z=-3, hall in front) ----------
const BLOCK=new THREE.Group();SC.add(BLOCK);
(function(){const tile=ctex(256,256,(g)=>{g.fillStyle='#c3c9d1';g.fillRect(0,0,256,256);g.strokeStyle='#a4acb8';g.lineWidth=5;g.strokeRect(0,0,256,256)},[22,16]);
 const fl=new THREE.Mesh(new THREE.PlaneGeometry(44,32),new THREE.MeshLambertMaterial({map:tile}));fl.rotation.x=-Math.PI/2;fl.position.set(0,0,2);fl.receiveShadow=true;BLOCK.add(fl);
 box(44,.02,.16,0xe0b33a,0,.012,-2.2,BLOCK,false);
 const WALL=0xe9e2c8,BAND=0x3f7f78,STEEL=0x7c8898;
 box(44,9,.3,WALL,0,4.5,-7.15,BLOCK);box(.3,9,32,WALL,-11,4.5,2,BLOCK);box(.3,9,32,WALL,11,4.5,2,BLOCK);box(44,9,.3,WALL,0,4.5,12,BLOCK);
 box(.05,1.3,32,BAND,-10.83,.65,2,BLOCK,false);box(.05,1.3,32,BAND,10.83,.65,2,BLOCK,false);box(44,1.3,.05,BAND,0,.65,11.83,BLOCK,false);
 box(44,.3,24,0xf3f0e6,0,9,2,BLOCK,false);for(let i=-2;i<=2;i++)box(2.2,.08,.5,new THREE.MeshBasicMaterial({color:0xffffff}),i*4,8.8,1,BLOCK,false);
 for(let tier=0;tier<2;tier++){const y0=tier*3.3;
  for(let k=0;k<=5;k++)box(.18,3.1,4.2,0xcfc8ae,-10+k*4,y0+1.55,-5.05,BLOCK);
  box(20.2,.25,5.4,0x8d97a5,0,y0+3.18,-4.45,BLOCK);
  const n=5*15;const im=new THREE.InstancedMesh(new THREE.BoxGeometry(.07,3.05,.07),ML(STEEL),n);const mt=new THREE.Matrix4();let q=0;
  for(let c=0;c<5;c++)for(let b=0;b<15;b++){mt.setPosition(-10+c*4+.25+b*.25,y0+1.53,-3);im.setMatrixAt(q++,mt)}im.castShadow=true;BLOCK.add(im);
  [.12,1.55,2.95].forEach(yy=>box(20,.09,.1,STEEL,0,y0+yy,-3,BLOCK));
  for(let c=0;c<5;c++){box(.9,.34,.06,label((tier?'B-2':'B-1')+'0'+(c+1),256,96,'#f4f4f0','#333',60),-8+c*4,y0+2.72,-2.93,BLOCK,false);
   box(1.9,.22,.85,0x3d5fa8,-9.0+c*4,y0+.55,-6.4,BLOCK);box(1.9,.5,.08,0x8d97a5,-9.0+c*4,y0+.25,-6.0,BLOCK);box(.5,.14,.6,0xf2f2f2,-9.6+c*4,y0+.72,-6.4,BLOCK)}
  if(tier){box(20.2,.08,.08,STEEL,0,y0+1.05,-1.85,BLOCK);for(let k=0;k<=40;k++)box(.05,1.05,.05,STEEL,-10+k*.5,y0+.52,-1.85,BLOCK,false)}}
 box(.12,2.5,1.5,0x3a4658,-10.8,1.25,2.5,BLOCK);box(.1,.3,.9,label('EXIT',256,96,'#1f9d55','#fff',64),-10.78,2.85,2.5,BLOCK,false).rotation.y=Math.PI/2;
 box(1.4,.75,.8,0x8d97a5,7.5,.37,5,BLOCK);box(.5,.45,.5,0x8d97a5,8.6,.22,5,BLOCK);})();
// ---------- exterior (at x=100) ----------
const EXT=new THREE.Group();EXT.position.x=100;SC.add(EXT);const CAR=new THREE.Group();
(function(){const g=new THREE.Mesh(new THREE.PlaneGeometry(80,60),ML(0x3d424d));g.rotation.x=-Math.PI/2;g.receiveShadow=true;EXT.add(g);
 box(80,.02,.2,0xe0b33a,0,.012,5.5,EXT,false);box(80,.12,3,0xb9bcc2,0,.06,1.2,EXT);
 const win=ctex(256,256,(c)=>{c.fillStyle='#d8cba6';c.fillRect(0,0,256,256);c.fillStyle='#2a3342';c.fillRect(70,50,116,150);c.strokeStyle='#8c939e';c.lineWidth=8;for(let k=1;k<4;k++){c.beginPath();c.moveTo(70+k*29,50);c.lineTo(70+k*29,200);c.stroke()}c.strokeStyle='#a89a78';c.lineWidth=10;c.strokeRect(70,50,116,150)},[7,4]);
 const b=new THREE.Mesh(new THREE.BoxGeometry(18,10,6),[ML(0xd8cba6),ML(0xd8cba6),ML(0xb9ad8c),ML(0xd8cba6),new THREE.MeshLambertMaterial({map:win}),ML(0xd8cba6)]);b.position.set(0,5,-4);b.castShadow=b.receiveShadow=true;EXT.add(b);
 box(18.4,.5,6.4,0xa89a78,0,10.2,-4,EXT);box(3.2,2.9,.5,0xb9ad8c,0,1.45,-.9,EXT);box(1.5,2.3,.12,0x3a4658,0,1.15,-.62,EXT);
 box(3,.6,.1,label('PRISON',512,110,'#151515','#ffe14d',84),0,3.3,-.6,EXT,false);
 box(2,.55,4.2,0xf4f4f4,0,.6,0,CAR);box(1.8,.55,2.1,0xf4f4f4,0,1.12,-.2,CAR);box(2.04,.22,4.24,0x1d2b4f,0,.55,0,CAR);box(1.82,.4,1.9,0x9fc6e0,0,1.14,-.2,CAR,false);
 CAR.L1=box(.4,.16,.3,new THREE.MeshBasicMaterial({color:0xff3b3b}),-.35,1.47,-.2,CAR,false);CAR.L2=box(.4,.16,.3,new THREE.MeshBasicMaterial({color:0x3b6bff}),.35,1.47,-.2,CAR,false);
 [[-1,1.3],[1,1.3],[-1,-1.4],[1,-1.4]].forEach(([a,z])=>box(.25,.6,.6,0x151515,a*1.0,.3,z,CAR));EXT.add(CAR)})();
// ---------- office (at x=200) ----------
const OFF=new THREE.Group();OFF.position.x=200;SC.add(OFF);
(function(){const f=new THREE.Mesh(new THREE.PlaneGeometry(14,14),ML(0x40598c));f.rotation.x=-Math.PI/2;f.receiveShadow=true;OFF.add(f);
 box(14,6,.3,0xefe8d0,0,3,-4,OFF);box(.3,6,14,0xefe8d0,-5,3,0,OFF);box(.3,6,14,0xefe8d0,5,3,0,OFF);box(14,1,.05,0x3f7f78,0,.5,-3.83,OFF,false);
 box(3.2,.12,1.4,0x8a5a30,0,1.05,-1.2,OFF);box(3,1,.1,0x74491f,0,.52,-.55,OFF);box(.1,1,1.3,0x74491f,-1.5,.52,-1.2,OFF);box(.1,1,1.3,0x74491f,1.5,.52,-1.2,OFF);
 box(1.3,.3,.12,label('WARDEN',512,120,'#151515','#ffe14d',92),0,1.27,-.62,OFF,false);box(.6,.45,.05,0x222831,-.95,1.4,-1.3,OFF);box(.3,.34,.3,0x2e8b57,1.1,1.3,-1.3,OFF);
 box(.9,1.4,.14,0x2f3b57,0,1.2,-2.6,OFF);})();
// ---------- characters: box body, box head, face drawn on a canvas texture ----------
function faceTex(skin,eyes,mouth,o){return ctex(256,256,(g)=>{g.fillStyle=skin;g.fillRect(0,0,256,256);const K='#1c1a1a';g.lineCap='round';
 const eye=(x,lid)=>{g.fillStyle='#fff';g.beginPath();g.ellipse(x,108,27,eyes=='wide'?31:25,0,0,7);g.fill();g.strokeStyle=K;g.lineWidth=6;g.stroke();g.fillStyle=K;g.beginPath();g.arc(x,eyes=='wide'?108:114,eyes=='wide'?8:11,0,7);g.fill();
  if(lid){g.fillStyle=skin;g.fillRect(x-34,70,68,38*lid+8);g.strokeStyle=K;g.lineWidth=7;g.beginPath();g.moveTo(x-28,78+38*lid);g.lineTo(x+28,78+38*lid);g.stroke()}};
 if(eyes=='happy'){g.strokeStyle=K;g.lineWidth=8;[84,172].forEach(x=>{g.beginPath();g.arc(x,116,20,Math.PI*1.1,Math.PI*1.9);g.stroke()})}
 else{eye(84,eyes=='sleepy'?.62:eyes=='angry'?.4:eyes=='sad'?.5:0);eye(172,eyes=='sleepy'?.7:eyes=='angry'?.4:eyes=='sad'?.5:0)}
 g.strokeStyle=o.brow||K;g.lineWidth=11;const br=(x,a,b)=>{g.beginPath();g.moveTo(x-28,a);g.lineTo(x+28,b);g.stroke()};
 if(eyes=='angry'){br(84,56,78);br(172,78,56)}else if(eyes=='sad'){br(84,70,54);br(172,54,70)}else if(eyes=='wide'){br(84,48,44);br(172,44,48)}else{br(84,62,60);br(172,60,62)}
 if(o.uni){g.beginPath();g.moveTo(112,62);g.lineTo(144,62);g.stroke()}
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
 if(o.stubble){g.fillStyle='rgba(60,40,30,.35)';for(let i=0;i<220;i++)g.fillRect(40+rnd(i)*176,170+rnd(i+50)*80,3,3)}
 if(o.blush){g.fillStyle='rgba(255,120,120,.35)';[52,204].forEach(x=>{g.beginPath();g.ellipse(x,160,20,12,0,0,7);g.fill()})}})}
const CHARS=[];
function mkChar(o){const g=new THREE.Group();SC.add(g);const sk=o.skin||0xf2c9a0,skc='#'+sk.toString(16).padStart(6,'0');
 const body=new THREE.Group();g.add(body);box(.62,.74,.34,o.shirt,0,1.15,0,body);
 if(o.tie)box(.09,.42,.02,0xc0392b,0,1.24,.18,body,false);if(o.badge)box(.12,.14,.02,0xf2c94c,-.17,1.36,.18,body,false);if(o.patch)box(.2,.1,.02,0xf7f7f7,.14,1.36,.18,body,false);
 if(o.jacket){box(.2,.74,.02,0xf4f4f4,0,1.15,.171,body,false)}
 const leg=d=>{const p=new THREE.Group();p.position.set(d*.16,.78,0);g.add(p);box(.25,.74,.27,o.pants,0,-.37,0,p);box(.27,.1,.38,o.shoes||0x222222,0,-.73,.05,p);return p};
 const arm=d=>{const p=new THREE.Group();p.position.set(d*.41,1.46,0);body.add(p);box(.18,.62,.2,o.shirt,0,-.31,0,p);box(.16,.16,.18,sk,0,-.7,0,p);return p};
 const c={g,body,o,LL:leg(-1),LR:leg(1),AL:arm(-1),AR:arm(1),tex:{}};
 box(.14,.14,.14,sk,0,1.57,0,body,false);const hd=new THREE.Group();hd.position.y=1.62;body.add(hd);c.hd=hd;
 c.fm=new THREE.MeshLambertMaterial({color:0xffffff});const hm=new THREE.Mesh(new THREE.BoxGeometry(.52,.6,.46),[ML(sk),ML(sk),ML(sk),ML(sk),c.fm,ML(sk)]);hm.position.y=.3;hm.castShadow=true;hd.add(hm);
 box(.1,.16,.08,sk,-.3,.28,0,hd,false);box(.1,.16,.08,sk,.3,.28,0,hd,false);
 const hc=o.hair;if(hc!=null){if(o.style=='afro'){box(.74,.44,.66,hc,0,.66,-.03,hd)}else if(o.style=='bun'){box(.56,.12,.5,hc,0,.65,0,hd);box(.24,.22,.24,hc,0,.82,-.05,hd);box(.56,.4,.08,hc,0,.42,-.25,hd)}
  else if(o.style=='spiky'){box(.56,.1,.5,hc,0,.64,0,hd);for(let k=-2;k<=2;k++){const s=box(.09,.24,.09,hc,k*.11,.76,(k%2)*.08,hd);s.rotation.z=-k*.2}}
  else{box(.56,.13,.5,hc,0,.655,0,hd);box(.56,.34,.08,hc,0,.46,-.25,hd)}}
 if(o.cap){box(.6,.2,.54,0x1d2b4f,0,.69,0,hd);box(.66,.07,.6,0x111a33,0,.6,0,hd);box(.5,.05,.26,0x0b1222,0,.59,.36,hd);box(.12,.12,.03,0xf2c94c,0,.7,.28,hd,false)}
 c.phone=new THREE.Group();box(.13,.24,.035,0x1b1b1f,0,0,0,c.phone);box(.1,.2,.01,new THREE.MeshBasicMaterial({color:o.phoneCol||0x25d366}),0,0,.02,c.phone,false);c.phone.position.set(0,-.8,.12);c.AR.add(c.phone);
 c.cv=box(.34,.44,.015,label('CV',128,160,'#fffdf2','#333',64),0,-.86,.13,c.AR,false);
 c.cuff=box(.46,.09,.12,0xc9ced6,0,.99,.34,body,false);
 c.fopt={glasses:o.glasses,uni:o.uni,stubble:o.stubble,blush:1,brow:o.browc};c.skc=skc;CHARS.push(c);return c}
function setFace(c,e,m){const k=e+':'+m;if(!c.tex[k])c.tex[k]=faceTex(c.skc,e,m,c.fopt);if(c.fm.map!==c.tex[k]){c.fm.map=c.tex[k];c.fm.needsUpdate=true}}
// pose a character for this frame
function P(c,o){const t=o.t||0;c.g.visible=true;const s=o.s||1;c.g.scale.set(s,s,s);const w=o.walk;c.g.position.set(o.x||0,(w!=null?Math.abs(Math.sin(w*9))*.05:0),o.z||0);c.g.rotation.y=o.ry||0;
 const [e,m]=(o.face||'sleepy:flat').split(':');let mm=m;if(o.talk&&m!='shout')mm=Math.sin(t*22)>0?'open':m;setFace(c,e,mm);
 const sw=w!=null?Math.sin(w*9)*.65:0;c.LL.rotation.x=sw;c.LR.rotation.x=-sw;
 c.AL.rotation.set(o.aL!=null?o.aL:-sw*.8,0,o.zL!=null?o.zL:-.06);c.AR.rotation.set(o.aR!=null?o.aR:sw*.8,0,o.zR!=null?o.zR:.06);
 c.hd.rotation.set((o.hx||0)+(o.talk?Math.sin(t*22)*.035:0),o.hy||0,o.hz||0);c.body.rotation.set(o.lean||0,0,0);c.body.position.x=o.shake?Math.sin(t*70)*o.shake:0;
 c.phone.visible=o.hold=='phone';c.cv.visible=o.hold=='cv';c.cuff.visible=!!o.cuffs;if(o.cuffs){c.AL.rotation.set(-.55,0,.42);c.AR.rotation.set(-.55,0,-.42)}}
let USE3D=false;
function begin3d(set,o={}){USE3D=true;CHARS.forEach(c=>c.g.visible=false);BLOCK.visible=set=='block';EXT.visible=set=='ext';OFF.visible=set=='off';
 const ox=set=='ext'?100:set=='off'?200:0;SC.background=new THREE.Color(set=='ext'?0x6fb3ee:0xe9e2c8);const d=o.dim?(o.dim===1?.55:o.dim):1;HEMI.intensity=.85*d;SUN.intensity=.75*d;
 SUN.position.set(ox+6,13,9);SUN.target.position.set(ox,0,-1);SUN.target.updateMatrixWorld();return ox}
function cam3(t,p,l,fov=40,wob=1){CAM.fov=fov;CAM.updateProjectionMatrix();CAM.position.set(p[0]+Math.sin(t*1.7)*.02*wob+(SHK?Math.sin(t*71)*SHK*.004:0),p[1]+Math.cos(t*1.4)*.02*wob+(SHK?Math.cos(t*63)*SHK*.004:0),p[2]);CAM.lookAt(l[0],l[1],l[2]);CAM.rotation.z+=Math.sin(t*1.1)*.006*wob}
const mix3=(a,b,p)=>a.map((v,i)=>v+(b[i]-v)*p);
// example cast
const OR=0xf08a24;
const APPL=mkChar({shirt:0x5b6b7a,pants:0x2f3340,tie:1,jacket:1,hair:0xc9772e,style:'spiky',phoneCol:0x2b6cff});
const I1=mkChar({shirt:OR,pants:OR,shoes:0xf2f2f2,patch:1,hair:0x4a3020,style:'afro',skin:0xe8b98c});
const BRAD=mkChar({shirt:OR,pants:OR,shoes:0xf2f2f2,patch:1,hair:0x3a2f2a,glasses:1,skin:0xf6d7b4});
const GARY=mkChar({shirt:0x2b4a8a,pants:0x1d2b4f,badge:1,cap:1,hair:0x3a2a1a,uni:1,stubble:1,skin:0xf2c9a0});
```

## 5. Scene patterns (scenes3d.js)
One `sh(startTime,(t,r)=>{...})` per shot. A 3D shot calls `begin3d(set)`, poses characters with `P()`, sets the camera with `cam3()`, then draws 2D overlays after `X.setTransform(1,0,0,1,0,0)`. A 2D-only shot (WhatsApp chat) does not call begin3d and paints an opaque background with `burst()`.
```js
const PI=Math.PI,UI=()=>X.setTransform(1,0,0,1,0,0);
// hook outside: car slides in, man on the phone, camera pulls back
sh(0,(t,r)=>{const ox=begin3d('ext');CAR.position.set(lerp(12,3.4,eo(r/1.1)),0,4.2);CAR.rotation.y=PI/2;CAR.L1.visible=Math.sin(t*20)>0;CAR.L2.visible=!CAR.L1.visible;
 P(APPL,{t,x:ox-1.2,z:2.2,ry:.25,face:'wide:shout',talk:1,hold:'phone',aR:-2.75,zR:-.35,shake:.012});
 cam3(t,mix3([ox-1.0,1.8,6.0],[ox-.3,2.1,10],eo(r/1.3)),[ox-.7,1.75,0],40);if(r<.1)FL=.9;UI();tag(540,300,'CALLING 911','#ffe14d',C((r-.25)/.25))});
// walking in the hall, camera tracks
sh(T('s1'),(t,r)=>{begin3d('block');const x=lerp(6.5,2.2,r/2.15);P(APPL,{t,x,z:.3,ry:-PI/2,walk:t,face:'happy:smile',hold:'cv',aR:-.9});cam3(t,[x-2.6,1.6,6.6],[x-.4,1.2,0],40)});
// close-up through the bars with a label
sh(T('s3'),(t,r)=>{begin3d('block');P(I1,{t,x:-4.7,z:-3.9,face:'sad:sad',hz:.08});cam3(t,mix3([-4.2,1.8,1.2],[-4.3,1.85,.6],eo(r/.3)),[-4.7,1.8,-3.9],30);UI();tag(540,330,'ANNIVERSARY','#ffe14d',C(sp(r,16,.5)))});
// Memopai notifications over a close-up (keep the face below the banners: look target above the head)
sh(T('s5'),(t,r)=>{begin3d('block');P(BRAD,{t,x:0,z:-4.1,face:'sleepy:smile',hold:'phone',aR:-1.25,zR:-.25,hx:.3});cam3(t,[.8,1.72,.4],[0,2.1,-4.1],30);
 UI();notif(170,C((r-.3)/.3),'Memopai','Call mom');notif(430,C((r-1.0)/.3),'Memopai','Water the plant')});
// full-screen chat (2D only)
sh(T('s5')+1.75,(t,r)=>{cam(540,960,1,t,.4);burst('#0f5a4a','#127060',t*.3);phoneUI(540,900,1,r,{typing:r>.9&&r<1.5,list:[{a:.15,me:1,text:"Remind me: Mom's birthday is Friday",time:'09:12'},{a:1.5,me:0,text:'Done. I will remind you Thursday evening.',time:'09:12'}]})});
// shout close-up, arms up, shake
sh(T('g1'),(t,r)=>{begin3d('block');P(GARY,{t,x:2,z:1,face:'angry:shout',aR:-2.9,aL:-2.9,zR:.35,zL:-.35,shake:.012,lean:.08});cam3(t,mix3([2.2,1.5,5.0],[2.1,1.6,4.3],eo(r/.3)),[2,1.6,1],38);SHK=12});
// from inside the cell looking out, dim, then freeze
sh(T('s8'),(t,r)=>{const fz=r>2.45;begin3d('block',{dim:.7});P(GARY,{t,x:.2,z:-1.7,ry:PI,face:fz?'wide:o':'sleepy:flat',hy:fz?0:Math.sin(t*2)*.5});cam3(t,mix3([.5,1.65,-6.2],[.35,1.75,-4.6],eo(r/2.7)),[.2,1.8,-1.7],36,fz?0:1);if(fz&&r<2.53)FL=.5});
// wide pull-back of the whole block
sh(T('s10'),(t,r)=>{begin3d('block');cam3(t,mix3([-2,2.4,4],[-1,3.6,10.5],eo(r/.7)),[-1.5,2.6,-3],40,.5);UI();tag(540,300,'ALREADY IN PRISON','#ffe14d',C((r-.2)/.2))});
```

## 6. Layout and gotchas
- **Axes:** y is up, floor y=0, characters are about 2.25 tall and face +z by default. `ry:PI` faces the cells, `ry:-PI/2` walks left (-x).
- **Cell block:** five cells per tier along x from -10 to 10, bars at z=-3, inmates stand at z about -4.1, the hall is z -2 to 11. Cell centres x = -8,-4,0,4,8.
- **Arms:** `aR`/`aL` is rotation about x in radians: negative raises the arm forward (-1.5 points, -2.9 hands up, -2.75 with `zR:-.35` is phone at ear).
- **Portrait lens is narrow.** With fov 40 the frame is only about 2 units wide at 5 units distance. A single head close-up needs the camera 3-4.5 units away; a two-shot needs fov 46 at 5.5 units with the two characters 1.2 apart. First previews are almost always too tight.
- **Bars:** shoot inmates from the hall (camera z between 0.4 and 1.2, fov 26-30) so bars sit in front of the face. A camera closer than 1.5 units to the bars turns them into huge blurry pillars.
- **Over-the-shoulder shots:** keep the near character off the camera-to-subject line or his back fills the frame.
- **Captions** sit at about y 1230-1310. Put stamps at y 380 (above faces) or about 985 (chest), tags at y 300.
- **Faces** are cached canvas textures keyed `eyes:mouth` (eyes: sleepy, wide, angry, sad, happy; mouth: flat, smile, sad, open, o, shout, grin). `talk:1` flips the mouth open and closed.
- **Sets:** 'block', 'ext' (offset x=100), 'off' (offset x=200). `begin3d` returns the x offset. Add new places as another group at a new offset, built from `box()` and `label()`.
- `preserveDrawingBuffer:true` is required or screenshots come out blank.
- Emoji that fail in this Chromium come out blank: check any rare emoji in a preview.

## 7. Quality bar
- Every shot previewed; no head cut off, no face hidden behind a banner or stamp, no character's back filling the frame.
- Memopai name and avatar visible in the chat and notifications; both uses shown (reminding yourself, reminding someone else).
- Tell the user what differs from any reference they sent, that the mascot is a stand-in if it is, and that audio was not listened to.