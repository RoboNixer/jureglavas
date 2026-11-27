// ---------- STAGE (x=400): awards-show stage. Velvet curtains (open/close), gold proscenium, marquee sign with blinking bulbs,
// podium + mic, two spotlights with visible beams, star backdrop, three rows of audience seats with silhouette crowd. (2026-11-27 22:00)
const STAGE=new THREE.Group();STAGE.position.x=400;SC.add(STAGE);SETS.stage=[STAGE,400];
let STCURT=[],STBULBS=[],STSPOTS=[],STBEAMS=[],STCROWD=[];
(function(){const G=STAGE;
 const carpet=ctex(128,128,(c)=>{c.fillStyle='#4a1020';c.fillRect(0,0,128,128);c.fillStyle='#5a1628';for(let i=0;i<128;i+=16)c.fillRect(0,i,128,6)},[10,10]);
 const fl=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.MeshLambertMaterial({map:carpet}));fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;G.add(fl);
 const wood=ctex(256,64,(c)=>{c.fillStyle='#6b4423';c.fillRect(0,0,256,64);c.strokeStyle='#553418';c.lineWidth=3;for(let i=0;i<256;i+=32){c.beginPath();c.moveTo(i,0);c.lineTo(i,64);c.stroke()}},[8,2]);
 box(13,.6,5,new THREE.MeshLambertMaterial({map:wood}),0,.3,-1.5,G);box(13,.08,.1,0xd4af37,0,.6,1.0,G,false);
 for(let i=0;i<3;i++)box(4-i*.0,.18,.5,0x3a2414,0,.09+i*0,1.3+i*.0,G);
 const stars=ctex(512,512,(c)=>{const g=c.createRadialGradient(256,200,20,256,256,380);g.addColorStop(0,'#3a2a8a');g.addColorStop(1,'#120c30');c.fillStyle=g;c.fillRect(0,0,512,512);
  for(let i=0;i<140;i++){c.fillStyle=`rgba(255,240,200,${.3+rnd(i)*.7})`;const x=rnd(i+7)*512,y=rnd(i+91)*512,r=1+rnd(i+3)*3;c.beginPath();c.arc(x,y,r,0,7);c.fill()}});
 box(13,8,.3,new THREE.MeshBasicMaterial({map:stars}),0,4,-4.2,G,false);
 // giant sign
 box(6.4,1.3,.12,label('THE FORGETTING AWARDS',1024,200,'#1a0f2e','#ffd54a',60,1),0,5.0,-4.0,G,false);
 for(let i=0;i<26;i++){const a=i/26;let x,y;if(a<.35){x=-3.35+a/.35*6.7;y=5.75}else if(a<.5){x=3.35;y=5.75-(a-.35)/.15*1.5}else if(a<.85){x=3.35-(a-.5)/.35*6.7;y=4.25}else{x=-3.35;y=4.25+(a-.85)/.15*1.5}
  STBULBS.push(box(.12,.12,.12,MB(0xffe680),x,y,-3.9,G,false))}
 // big trophy statue behind (gold)
 const gold=new THREE.MeshLambertMaterial({color:0xe8b923,emissive:0x3a2a00});
 [-4.7,4.7].forEach(x=>{const t=new THREE.Group();t.position.set(x,.6,-3.5);G.add(t);cyl(.45,.4,gold,0,.2,0,t,8);cyl(.12,1.2,gold,0,1,0,t,8);const cup=new THREE.Mesh(new THREE.CylinderGeometry(.6,.2,.9,10),gold);cup.position.y=2;t.add(cup)});
 // proscenium + curtains
 box(.6,8,.6,0xc9a227,-6.2,4,.9,G);box(.6,8,.6,0xc9a227,6.2,4,.9,G);box(13,.8,.6,0xc9a227,0,7.4,.9,G);
 const red=[0x9b111e,0x7d0d18];for(let i=0;i<10;i++){box(.32,7,.3,red[i%2],-5.9+i*.3,3.5,.4+(i%2)*.12,G);box(.32,7,.3,red[i%2],5.9-i*.3,3.5,.4+(i%2)*.12,G)}
 for(let i=0;i<40;i++)box(.34,.9,.3,red[i%2],-6+i*.31,6.6,.55,G);
 // centre curtains that slide open (two groups)
 [-1,1].forEach(d=>{const g=new THREE.Group();G.add(g);for(let i=0;i<10;i++)box(.32,6.2,.28,red[i%2],d*(.16+i*.3),3.4,.25+(i%2)*.1,g);g.d=d;STCURT.push(g)});
 // podium + mic
 const pod=new THREE.Group();pod.position.set(1.9,.6,-.7);G.add(pod);box(1.1,1.25,.7,0x2a1a40,0,.62,0,pod);box(1.14,.08,.74,0xd4af37,0,1.27,0,pod,false);
 box(.7,.5,.02,label('🏆',128,96,'#2a1a40','#ffd54a',72,1),0,.75,.36,pod,false);cyl(.025,.6,0x222222,-.25,1.55,.15,pod,6).rotation.x=-.4;box(.09,.14,.09,0x111111,-.25,1.85,.28,pod,false);
 // spotlights rig + visible beams
 for(let i=0;i<2;i++){const sl=new THREE.SpotLight(0xfff1c8,0,28,.32,.55,1);sl.position.set(i?4:-4,8,3);G.add(sl);G.add(sl.target);STSPOTS.push(sl);
  const bm=new THREE.Mesh(new THREE.ConeGeometry(1,1,24,1,true),new THREE.MeshBasicMaterial({color:0xfff1c8,transparent:true,opacity:.11,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));G.add(bm);STBEAMS.push(bm);
  box(.5,.4,.6,0x222222,i?4:-4,8,3,G,false)}
 // audience seats + silhouette crowd
 for(let r=0;r<3;r++)for(let k=-5;k<=5;k++){const x=k*1.05,z=2.6+r*1.2,y=r*.25;box(.9,.12,.8,0x8e1b2b,x,.45+y,z,G);box(.9,.9,.12,0x8e1b2b,x,.85+y,z+.42,G);box(.9,.45,.1,0x5c0f1a,x,.22+y,z-.3,G);
  if(y>0)box(.95,y,1.2,0x3a0c16,x,y/2,z,G,false);
  if(!(r==0&&(k==-1||k==0||k==1))&&rnd(r*20+k+5)>.25){const h=new THREE.Group();h.position.set(x,.5+y,z+.1);G.add(h);const col=[0x241a33,0x2d2140,0x1e1a2a][(r+k+9)%3];box(.6,.7,.35,col,0,.4,0,h,false);box(.42,.48,.4,col,0,1.0,0,h,false);h.ph=rnd(k*3+r);STCROWD.push(h)}}
})();
// spotlight aim: i, target [x,y,z] in stage-local coords, on/off
function spot(i,tx,ty,tz,on=1){const sl=STSPOTS[i],bm=STBEAMS[i];sl.intensity=on?2.2:0;sl.target.position.set(tx,ty,tz);sl.target.updateMatrixWorld();bm.visible=!!on;
 const a=sl.position.clone(),b=new THREE.Vector3(tx,ty,tz),L=a.distanceTo(b);bm.scale.set(Math.tan(.3)*L,L,Math.tan(.3)*L);bm.position.copy(a.clone().add(b).multiplyScalar(.5));bm.lookAt(b);bm.rotateX(-Math.PI/2)}
function stageLife(t,curtOpen=1){STBULBS.forEach((b,i)=>b.material.color.setHex(((Math.floor(t*6)+i)%3)?0xffe680:0x7a5a10));
 STCURT.forEach(g=>g.position.x=g.d*curtOpen*4.2);STCROWD.forEach((h,i)=>{h.rotation.z=Math.sin(t*2+h.ph*6)*.05})}
function stageOff(){STSPOTS.forEach(s=>s.intensity=0);STBEAMS.forEach(b=>b.visible=false)}
// TROPHY prop (gold cup) + POPCORN prop, both world objects you can pin to a hand
function mkTrophy(){const g=new THREE.Group();SC.add(g);const gold=new THREE.MeshLambertMaterial({color:0xf2c230,emissive:0x4a3300});box(.26,.08,.26,0x3a2414,0,-.2,0,g);cyl(.04,.22,gold,0,-.06,0,g,8);const cup=new THREE.Mesh(new THREE.CylinderGeometry(.17,.06,.26,10),gold);cup.position.y=.16;g.add(cup);
 [-1,1].forEach(d=>{const h=new THREE.Mesh(new THREE.TorusGeometry(.07,.02,6,10,Math.PI),gold);h.position.set(d*.18,.18,0);h.rotation.z=d*Math.PI/2;g.add(h)});g.visible=false;return g}
function mkPopcorn(){const g=new THREE.Group();SC.add(g);const st=ctex(64,64,(c)=>{for(let i=0;i<8;i++){c.fillStyle=i%2?'#ffffff':'#e53935';c.fillRect(i*8,0,8,64)}});
 box(.24,.3,.2,new THREE.MeshLambertMaterial({map:st}),0,0,0,g);for(let i=0;i<9;i++)box(.07,.07,.07,0xfff1a8,(rnd(i)-.5)*.2,.17+rnd(i+4)*.06,(rnd(i+8)-.5)*.14,g,false);g.visible=false;return g}
const TROPHY=mkTrophy(),POPCORN=mkPopcorn();PHONES.push(TROPHY,POPCORN);
function pinTo(o,c,side='R',dy=-.86,dz=.16){const arm=side=='R'?c.AR:c.AL;const v=new THREE.Vector3(0,dy,dz);arm.updateMatrixWorld(true);arm.localToWorld(v);o.position.copy(v);o.visible=true}
// ORBIT LABELS: to-dos circling a head (3D sprites, reusable "full head" metaphor)
const ORB={};function orbitLabels(t,cx,cy,cz,items,rad=1.0,spd=1.2,show=1){items.forEach((it,i)=>{if(!ORB[it]){const m=new THREE.SpriteMaterial({map:label(it,512,120,'#ffffff','#1b1b1f',62,1).map,transparent:true,depthTest:false});ORB[it]=new THREE.Sprite(m);ORB[it].scale.set(.82,.19,1);SC.add(ORB[it])}
  const s=ORB[it],a=t*spd+i*Math.PI*2/items.length;s.visible=show>0;s.material.opacity=show;s.position.set(cx+Math.cos(a)*rad,cy+Math.sin(a*2)*.08+.24*(i-1),cz+Math.sin(a)*rad*.6)});
 Object.keys(ORB).forEach(k=>{if(!items.includes(k))ORB[k].visible=false})}
function orbOff(){Object.values(ORB).forEach(s=>s.visible=false)}
// WASHING MACHINE in the flat (door swings on WASHDOOR.rotation.y) + PARKING METER + parked car ticket on the street
let WASHDOOR,WASHER,METER,PARKED,TICKET;
(function(){const G=FLAT;WASHER=new THREE.Group();WASHER.position.set(-.35,0,-3.35);G.add(WASHER);box(.95,1.05,.8,0xf4f4f4,0,.525,0,WASHER);box(.95,.18,.04,0xdfe4ea,0,.93,.41,WASHER,false);
 box(.18,.08,.03,MB(0x2ecc71),.25,.93,.43,WASHER,false);cyl(.05,.04,0x9aa3ad,-.3,.93,.43,WASHER,10).rotation.x=Math.PI/2;
 box(.75,.75,.02,0x3c4652,0,.45,.405,WASHER,false);for(let i=0;i<5;i++)box(.18,.14,.1,[0x7f8c6e,0x8e7c5a,0x6f7d8c,0x7d6b80,0x8a9a6a][i],(rnd(i)-.5)*.35,.3+rnd(i+3)*.25,.32,WASHER,false);
 WASHDOOR=new THREE.Group();WASHDOOR.position.set(-.33,.45,.42);WASHER.add(WASHDOOR);const ring=new THREE.Mesh(new THREE.TorusGeometry(.3,.06,8,20),ML(0xc8ced6));ring.position.x=.33;WASHDOOR.add(ring);
 const gl=new THREE.Mesh(new THREE.CircleGeometry(.29,20),new THREE.MeshLambertMaterial({color:0x9fbfd6,transparent:true,opacity:.45}));gl.position.set(.33,0,.01);WASHDOOR.add(gl);
 const S=STREET;METER=new THREE.Group();METER.position.set(2.5,.16,4.1);S.add(METER);box(.1,1.2,.1,0x555b66,0,.6,0,METER);box(.32,.45,.25,0x2b3440,0,1.38,0,METER);
 const scr=box(.22,.12,.02,label('EXPIRED',256,128,'#e53935','#ffffff',58,1),0,1.45,.13,METER,false);METER.scr=scr;
 PARKED=new THREE.Group();S.add(PARKED);box(4.2,.6,2,0x8e44ad,0,.6,0,PARKED);box(2.2,.6,1.8,0x8e44ad,-.2,1.2,0,PARKED);box(2.24,.45,1.84,0x9fc6e0,-.2,1.18,0,PARKED,false);
 [[1.3,1],[1.3,-1],[-1.3,1],[-1.3,-1]].forEach(([a,z])=>cyl(.33,.25,0x151515,a,.33,z,PARKED,10).rotation.x=Math.PI/2);PARKED.position.set(.6,0,5.4);
 TICKET=box(.6,.42,.03,label('€40 FINE',256,180,'#fff8d6','#c0392b',58,1),-.3,1.2,-.94,PARKED,false);TICKET.rotation.y=Math.PI;
})();
// cast for this reel: awards HOST (tux, bow tie, slick hair) + YOU (ponytail, mustard jumper)
const HOST=mkChar({shirt:0x1b1b22,pants:0x1b1b22,tux:1,hair:0x1a1a1a,style:'slick',skin:0xc68a5e,shoes:0x111111});
const YOU=mkChar({shirt:0xf0a030,pants:0x34548a,hair:0x7a3418,style:'pony',tiec:0x2ecc71,skin:0xf3cfae,shoes:0xffffff});
function sitPose(c,y=0){c.LL.rotation.x=c.LR.rotation.x=-1.45}
const _b3d=begin3d;begin3d=function(s,o){orbOff();return _b3d(s,o)};
