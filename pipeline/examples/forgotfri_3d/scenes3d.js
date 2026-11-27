const PI=Math.PI,UI=()=>X.setTransform(1,0,0,1,0,0);
function traffic(t,ox){TRAFFIC.forEach((c,i)=>{const sp_=[6,-8,5][i],z=[7.6,10.2,7.6][i];const x=((t*sp_+i*23)%70+70)%70-35;c.position.set(ox+x,0,z);c.rotation.y=sp_>0?0:PI})}
function sway(t){TREES.forEach((tr,i)=>tr.cr.forEach((c,k)=>c.rotation.z=Math.sin(t*1.3+i+k)*.04));if(FLATPLANT)FLATPLANT.leaves&&FLATPLANT.leaves.forEach((l,i)=>l.rotation.z=Math.sin(t*2+i)*.08)}
const SO=400; // stage x offset
function stink(x,y,t,a=1){X.save();X.globalAlpha=a;X.strokeStyle='#7fbf3f';X.lineWidth=12;X.lineCap='round';for(let i=0;i<3;i++){const ox=x+(i-1)*70,ph=t*3+i;X.beginPath();for(let k=0;k<=12;k++){const yy=y-k*16-((t*90)%40);const xx=ox+Math.sin(ph+k*.6)*14;k?X.lineTo(xx,yy):X.moveTo(xx,yy)}X.stroke()}X.restore()}
// A: HOOK. Curtains slide open on the Forgetting Awards; crane down from the marquee sign to the host at the podium
sh(0,(t,r)=>{const ox=begin3d('stage',{bg:0x0b0818,dim:.75,night:1});stageLife(t,C(eo((r-.15)/1.4)));
 spot(0,SO+1.9,1.6,-1.2,1);spot(1,SO+lerp(-3,1.6,eio(r/3)),0,lerp(-1,-1.3,r/3),1);
 P(HOST,{t,x:ox+1.9,y:.6,z:-1.3,ry:-.15,face:'happy:grin',talk:r>1.2,aR:r>1.2?-1.3+Math.sin(t*3)*.2:-.1,zR:.2});
 const k=eio(r/3.4);cam3(t,mix3([ox+.2,6.0,14.5],[ox+1.4,2.4,5.2],k),mix3([ox,4.9,-4],[ox+1.8,1.8,-1.2],k),mix3([50],[36],k)[0],.6);
 UI();tag(540,330,'🏆 FORGOT IT FRIDAY','#ffd54a',C(sp(r-1.0,14,.5)))});
// B: Nominee 1 — the washing machine (YOU walks in, opens the door, recoils from Tuesday's laundry)
sh(T('n1'),(t,r)=>{const ox=begin3d('flat');sway(t);const op=C(eo((r-1.15)/.35));WASHDOOR.rotation.y=-op*1.7;
 const wx=lerp(ox+2.6,ox+.55,eo(r/1.1));P(YOU,{t,x:wx,z:-2.45,ry:r<1.1?-PI/2:-PI*.35,walk:r<1.1?t:null,face:op>.5?'wide:o':'sleepy:flat',lean:op>.5?-.18:0,aR:r>1&&r<1.5?-1.4:op>.5?-2.6:null,zR:op>.5?-.4:null,aL:op>.5?-.7:null,zL:op>.5?1.0:null,hx:op>.5?-.2:0});
 const k=eio(r/3.3);cam3(t,mix3([ox-2.4,2.5,4.4],[ox-1.7,2.1,3.0],k),mix3([ox+.5,1.3,-2.8],[ox+.15,1.15,-3.0],k),40);
 UI();if(op>.3){stink(470,980,t,C((r-1.3)/.3));tag(540,330,'🧺 SINCE TUESDAY','#b8f27a',C(sp(r-1.5,14,.5)))}else tag(540,330,'NOMINEE 1','#ffd54a',C(sp(r-.1,14,.5)))});
// C: Nominee 2 — on the sofa, "I'll call you back, Mum" (3 missed calls), slow orbit over her shoulder
sh(T('n2'),(t,r)=>{const ox=begin3d('flat',{dim:.8});sway(t);WASHDOOR.rotation.y=0;
 P(YOU,{t,x:ox+2.3,y:-.12,z:-2.45,ry:0,face:r>1.4?'sad:sad':'sleepy:flat',hold:'phone',aR:-1.9,zR:-.25,aL:r>1.6?-2.8:-.2,zL:r>1.6?.5:-.06,hx:.15});sitPose(YOU);
 YOU.phone.children[1].material.color.setHex(r>1.4?0xe74c3c:0x25d366);
 const a=lerp(-.6,.35,eio(r/3.2));cam3(t,[ox+2.3+Math.sin(a)*4.6,2.1,-2.45+Math.cos(a)*4.6],[ox+2.3,1.35,-2.6],38);
 UI();if(r>1.4)tag(540,330,'📞 MUM · 3 MISSED CALLS','#ff9f9f',C(sp(r-1.4,14,.5)));else tag(540,330,'NOMINEE 2','#ffd54a',C(sp(r-.1,14,.5)))});
// D: Nominee 3 — the street: YOU runs to the parked car (tracking), meter EXPIRED, €40 ticket flapping
sh(T('n3'),(t,r)=>{const ox=begin3d('street');traffic(t,ox);sway(t);TICKET.rotation.x=Math.sin(t*9)*.15;METER.scr.visible=Math.sin(t*10)>-.3;
 const run=C(r/1.9),x=lerp(ox-5,ox+1.6,eo(run));
 P(YOU,{t,x,y:.16,z:2.5,ry:r<1.9?PI/2:PI*.82,walk:r<1.9?t:null,wsp:15,lean:r<1.9?.15:0,face:r<1.9?'wide:open':'wide:shout',aR:r>1.9?-2.9:null,aL:r>1.9?-2.9:null,zR:r>1.9?-.5:null,zL:r>1.9?.5:null,shake:r>1.9?.01:0});
 const k=eio((r-1.6)/1.2);cam3(t,mix3([x+5.5,2.0,.7],[ox+5.6,2.7,-.1],k),mix3([x,1.3,2.5],[ox+.7,1.3,3.7],k),mix3([40],[40],k)[0]);
 UI();if(r>1.9)tag(540,330,'🅿️ €40 TICKET','#ff9f9f',C(sp(r-1.9,14,.5)));else tag(540,330,'NOMINEE 3','#ffd54a',C(sp(r-.1,14,.5)))});
// E: "And the award for Most Forgetful goes to... YOU!" envelope, spotlight swings across the crowd, whip to YOU standing up
sh(T('win'),(t,r)=>{const ox=begin3d('stage',{bg:0x0b0818,dim:.7,night:1});stageLife(t,1);const sw=r>1.7;
 if(!sw){spot(0,SO+1.9,1.6,-1.2,1);spot(1,SO+lerp(4,-3,C(r/1.7)),.5,3.5,1);
  P(HOST,{t,x:ox+1.9,y:.6,z:-1.3,ry:-.1,face:r<1.1?'wide:o':'happy:grin',talk:1,aR:-1.5,zR:-.3,aL:-1.5,zL:.3,hx:.15});
  const k=eio(r/1.7);cam3(t,mix3([ox+2.4,2.3,4.6],[ox+2.1,2.2,3.0],k),[ox+1.9,1.9,-1.2],36);UI();tag(540,330,'✉️ MOST FORGETFUL...','#ffd54a',C(sp(r-.2,14,.5)))}
 else{const q=r-1.7,up=C(eo(q/.45));spot(0,SO-1.05,1.3,2.6,1);STSPOTS[1].intensity=0;STBEAMS[1].visible=false;
  P(YOU,{t,x:ox-1.05,y:.45*0+lerp(-.2,0,up)+.0,z:2.45,ry:PI,face:'wide:o',aR:up>.5?-2.3:-.3,aL:up>.5?-2.3:-.3,zR:up>.5?-1.0:-.1,zL:up>.5?1.0:.1,hop:up>.9?Math.abs(Math.sin(q*9))*.06:0});if(up<.5)sitPose(YOU);
  [COWK,BOSS].forEach((c,i)=>{P(c,{t,x:ox+(i?0:-2.1),y:-.2,z:2.45,ry:PI,face:'happy:grin',aR:-2.6+Math.sin(t*14+i)*.3,aL:-2.6+Math.cos(t*14+i)*.3,zR:-.3,zL:.3});sitPose(c)});
  const k=e5(C(q/.25));cam3(t,mix3([ox+3,2.6,-1.2],[ox-1.05,2.1,-1.9],k),mix3([ox+1.5,1.4,2.5],[ox-1.05,1.5,2.45],k),38);
  UI();confetti(q,70);stampBig('WINNER: YOU','#e8b923',-.1,C((q-.25)/.25),1180)}});
// F: "Your head isn't broken. It's just full." on stage with the trophy, her week's to-dos orbit her head, camera circles
sh(T('s1'),(t,r)=>{const ox=begin3d('stage',{bg:0x0b0818,dim:.72,night:1});stageLife(t,1);spot(0,SO,1.3,-1.2,1);spot(1,SO,1.3,-1.2,1);
 P(YOU,{t,x:ox,y:.6,z:-1.2,ry:0,face:r<1.1?'sad:sad':'happy:smile',aR:-1.3,zR:-.1,hx:.05});pinTo(TROPHY,YOU,'R',-.84,.2);
 orbitLabels(t,ox,2.85,-1.2,['🧺 Laundry','📞 Call Mum','🅿️ Parking'],.62,1.6,1);
 const a=lerp(.5,-.5,eio(r/2.5));cam3(t,[ox+Math.sin(a)*5.6,2.7,-1.2+Math.cos(a)*5.6],[ox,2.35,-1.2],38);
 UI();if(r>1.1)tag(540,330,'NOT BROKEN. JUST FULL.','#ffffff',C(sp(r-1.1,14,.5)))});
// G: the WhatsApp chat — two messages to Memopai; the labels fly out of her head into the phone
sh(T('s2'),(t,r)=>{NOFX=0;UI();orbOff();burst('#1a1240','#221a55',t*.25);
 phoneUI(540,lerp(990,950,eo(r/4)),lerp(1.0,1.08,eo(r/4)),r,{list:[{a:0,date:'FRIDAY · 21:40'},
  {a:.15,me:1,text:'Tomorrow at 10 remind me to call Mum back 📞',time:'21:40'},{a:1.0,me:0,text:'✅ Got it! Saturday 10:00 · Call Mum',time:'21:40'},
  {a:1.9,me:1,text:'Every Tuesday at 19:00: laundry out of the machine 🧺',time:'21:41'},{a:2.8,me:0,text:'✅ Every Tuesday · 19:00 · until you say stop',time:'21:41'}]})});
// H: NEXT FRIDAY. Spotlight sweeps the front row; YOU is relaxed with popcorn, phone face down, not nominated
sh(T('p1'),(t,r)=>{const ox=begin3d('stage',{bg:0x0b0818,dim:.75,night:1});stageLife(t,1);
 const sx=lerp(3,-3.5,eio(r/2.6));spot(0,SO+sx,1.0,2.6,1);spot(1,SO+1.9,1.6,-1.2,1);
 P(HOST,{t,x:ox+1.9,y:.6,z:-1.3,ry:-.1,face:'happy:grin',talk:1,aR:-1.3,zR:-.2});
 P(YOU,{t,x:ox-1.05,y:-.2,z:2.45,ry:PI+.15,face:'happy:smile',aL:-1.25,zL:.15,aR:-.9+Math.max(0,Math.sin(t*4))*-.6,zR:-.1,hx:-.05});sitPose(YOU);pinTo(POPCORN,YOU,'L',-.82,.2);
 [COWK,BOSS].forEach((c,i)=>{P(c,{t,x:ox+(i?1.05:-2.1),y:-.2,z:2.45,ry:PI,face:'sleepy:flat'});sitPose(c)});
 const k=eio(r/2.7);cam3(t,mix3([ox-.85,1.85,.3],[ox+.2,2.3,-1.7],k),mix3([ox-1.05,1.45,2.5],[ox-.6,1.15,2.5],k),40);
 UI();tag(540,330,'NEXT FRIDAY · NOT NOMINATED 😌','#7CFC9A',C(sp(r-.3,14,.5)))});
// I: end card + CTA
sh(T('cta'),(t,r)=>{orbOff();endcard(t,r)});
