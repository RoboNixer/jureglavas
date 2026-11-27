const PI=Math.PI,UI=()=>X.setTransform(1,0,0,1,0,0);
function traffic(t,ox){TREES.forEach(tr=>tr.visible=false);TRAFFIC.forEach((c,i)=>{const sp_=[6,-8,5][i],z=[7.6,10.2,7.6][i];const x=((t*sp_+i*23)%70+70)%70-35;c.position.set(ox+x,0,z);c.rotation.y=sp_>0?0:PI})}
function sway(t){TREES.forEach((tr,i)=>tr.cr.forEach((c,k)=>c.rotation.z=Math.sin(t*1.3+i+k)*.04));if(FLATPLANT)FLATPLANT.leaves.forEach((l,i)=>l.rotation.z=Math.sin(t*2+i)*.08)}
function pinPhone(ph,c){const v=new THREE.Vector3(0,-.82,.14);c.AR.updateMatrixWorld(true);c.AR.localToWorld(v);ph.position.copy(v)}
// A: hook, street, he walks to work ON TIME; crane up to the 09:00 clock
sh(0,(t,r)=>{const ox=begin3d('street');traffic(t,ox);sway(t);const x=lerp(ox-6.5,ox-.9,eo(r/3.4));
 P(SUS,{t,x,y:.16,z:1.4,ry:r<3.3?PI/2:PI*.15,walk:r<3.3?t:null,face:'happy:smile',holdL:'bag',s:1});
 P(COWK,{t,x:ox+1.3,y:.16,z:.6,ry:-PI*.3,face:r>2.2?'wide:o':'sleepy:flat',hold:'mug',holdL:'mug',aL:-.9,hy:r>2.2?-.3:0});
 const k=eio((r-2.2)/1.8);cam3(t,mix3([x+.5,2.0,8.6],[ox+.2,3.0,10.5],k),mix3([x+.2,1.5,0],[ox,3.6,-.5],k),40);
 UI();tag(540,330,'09:00 · ON TIME ✓','#7CFC9A',C(sp(r-3.2,14,.5)))});
// B: his boss panics and calls the police (push-in, he walks past behind)
sh(T('s1'),(t,r)=>{const ox=begin3d('street');traffic(t,ox);sway(t);
 P(BOSS,{t,x:ox+.4,y:.16,z:1.0,ry:-.25,face:'wide:shout',talk:1,hold:'phone',aR:-2.75,zR:-.35,shake:.012});
 P(SUS,{t,x:lerp(ox-2.2,ox-.4,r/1.6),y:.16,z:-.1,ry:PI*.85,walk:t,face:'happy:smile',holdL:'bag'});
 cam3(t,mix3([ox-.9,1.7,4.6],[ox-.6,1.85,3.5],eo(r/1.6)),[ox+.45,1.85,.6],38);UI();tag(540,330,'📞 CALLING 911','#ff6b6b',C(sp(r-.15,14,.5)))});
// C: police station, the chief slams the desk
sh(T('c1'),(t,r)=>{const ox=begin3d('station');SHK=r<.4?10:0;
 P(CHIEF,{t,x:ox+2.6,z:-2.0,face:'angry:shout',talk:1,aR:r<.35?-1.6:-2.9,aL:r<.35?-1.6:-2.9,zR:.3,zL:-.3,lean:.12,shake:.01});
 P(ROOK,{t,x:ox+1.2,z:-.3,ry:.5,face:'wide:o',aR:-2.4,zR:-.6,hz:.05});P(COP2,{t,x:ox+4.0,z:-.4,ry:-.5,face:'wide:flat',hold:'mug'});
 cam3(t,mix3([ox+2.4,1.0,4.4],[ox+2.5,1.25,2.6],eo(r/2.6)),[ox+2.6,1.9,-2],42)});
// D: raid. door bursts open, squad runs in; drone shot descends onto the nightstand phone
sh(T('s2'),(t,r)=>{const ox=begin3d('flat');sway(t);FLATDOOR.rotation.y=-lerp(0,1.9,e5(r/.35));
 EPH.visible=true;EPH.cuff.visible=false;EPH.position.set(ox-1.5,.86,-3.2);EPH.rotation.set(-.35,0,0);EPH.scr.material.color.setHSL(.39,.7,.42+.12*Math.sin(t*6));
 P(COP2,{t,x:lerp(ox+5.6,ox+.8,eo(r/1.3)),z:1.0,ry:-PI/2,walk:t,wsp:13,face:'angry:open',lean:.15});
 P(ROOK,{t,x:lerp(ox+6.6,ox+2.6,eo((r-.25)/1.3)),z:1.7,ry:-PI/2+.3,walk:t,wsp:13,face:'wide:o',lean:.12});
 P(CHIEF,{t,x:lerp(ox+7.5,ox+4.2,eo((r-.5)/1.3)),z:1.3,ry:-PI/2-.2,walk:t,face:'angry:flat'});
 const k=eio((r-.6)/2.2);cam3(t,mix3([ox+1,8.5,5.5],[ox-1.3,1.6,-1.3],k),mix3([ox+1,0,0],[ox-1.5,.9,-3.2],k),42,.6);
 UI();const lab=r<.95?'NO ALARM CLOCK ✗':r<1.75?'NO PLANNER ✗':'1 WHATSAPP CHAT 💬';const st=r<.95?.2:r<1.75?.95:1.75;tag(540,330,lab,r<1.75?'#ff9f9f':'#7CFC9A',C(sp(r-st,16,.5)))});
// E: the chat itself (full-screen 2D phone)
sh(T('s3'),(t,r)=>{NOFX=0;UI();burst('#0f5a4a','#127060',t*.3);
 phoneUI(540,lerp(990,950,eo(r/3)),lerp(1.0,1.08,eo(r/3)),r,{list:[{a:0,date:'SUNDAY'},{a:.1,me:1,text:'Every weekday at 8:30 remind me: leave for work 🏃',time:'21:04'},{a:1.1,me:0,text:'✅ Got it! Mon–Fri · 08:30 · 🏃 Leave for work',time:'21:04'}]})});
// F: "Arrest the reminder!" chief holds up the phone, cuffs snap on
sh(T('c2'),(t,r)=>{const ox=begin3d('flat');sway(t);FLATDOOR.rotation.y=-1.9;
 P(CHIEF,{t,x:ox-.6,z:-1.0,ry:.15,face:'angry:shout',talk:1,aR:-2.5,zR:-.15,aL:-1.4,zL:.5});
 P(ROOK,{t,x:ox+.6,z:-.4,ry:-.5,face:r>1.6?'wide:o':'sad:flat',hz:-.08});P(COP2,{t,x:ox-1.8,z:-.2,ry:.6,face:'angry:flat',aR:-1.4,aL:-1.4});
 EPH.visible=true;EPH.cuff.visible=r>1.55;pinPhone(EPH,CHIEF);EPH.position.y+=.25;EPH.rotation.set(0,.15,0);EPH.scr.material.color.set(0x25d366);
 cam3(t,mix3([ox-.2,.9,3.6],[ox-.45,1.35,2.3],eo(r/2.8)),[ox-.5,2.2,-1],42);UI();if(r>1.55)stampBig('ARRESTED','#e53935',-.12,C((r-1.55)/.25),400)});
// G: the phone in cell B-103; "25 years... of reminding him"
sh(T('s4'),(t,r)=>{begin3d('block');EPH.visible=true;EPH.cuff.visible=true;EPH.position.set(0,.95,-4.2);EPH.rotation.set(0,0,0);EPH.scr.material.color.setHSL(.39,.7,.42+.1*Math.sin(t*4));
 P(ROOK,{t,x:1.1,z:-1.7,ry:r<2.4?PI*.85:-PI*.6,face:r<2.4?'sad:flat':'sad:sad',talk:r<2.4,aR:r<2.4?-1.0:null});
 P(CHIEF,{t,x:-1.2,z:-1.4,ry:r<2.4?PI*.9:PI*.6,face:r<2.4?'angry:flat':'angry:open',talk:r>2.4&&r<4,aL:r>2.4?-1.4:-.1,aR:r>2.4?-1.4:-.1,zL:r>2.4?.6:-.06,zR:r>2.4?-.6:.06});
 const k=eio(r/5.4);cam3(t,mix3([3.5,2.2,4.5],[.25,1.35,-.3],k),mix3([0,1.4,-2.5],[0,1.05,-4.2],k),mix3([40],[30],k)[0],.6);
 UI();if(r>2.7&&r<4.3)stampBig('25 YEARS','#e53935',-.1,C((r-2.7)/.25),400);if(r>=4.3)tag(540,330,'...OF REMINDING HIM ⏰','#ffe14d',C(sp(r-4.3,14,.5)))});
// H: that night, the rookie sets one up for the chief (remind someone else)
sh(T('s5'),(t,r)=>{UI();burst('#14204a','#1b2a5e',t*.3);
 phoneUI(540,lerp(980,950,eo(r/2)),1.04,r,{list:[{a:0,date:'TONIGHT · 23:10'},{a:.05,me:1,text:'Every weekday at 8:30, remind the Chief: leave for work 👮',time:'23:10'},{a:.75,me:0,text:'✅ Invite sent to the Chief',time:'23:10'},{a:1.35,me:0,text:'👮 The Chief tapped Accept ✓',time:'23:11'}]})});
// I: next morning, the chief strolls in ON TIME; the station calls the police
sh(T('p1'),(t,r)=>{const ox=begin3d('station');STDOOR.rotation.y=-lerp(0,1.5,eo(r/.4))*(r<2?1:lerp(1,0,C((r-2)/.5)));
 const cx=lerp(ox-6.2,ox-1.6,eo(r/2.0));P(CHIEF,{t,x:cx,z:.9,ry:r<2?PI/2:PI*.15,walk:r<2?t:null,face:'happy:smile',hold:'phone',holdL:'mug',aL:-.9,aR:-1.1,zR:-.2});
 const call=r>2.2;P(COP2,{t,x:ox+2.1,z:-.4,ry:-PI*.2,face:call?'wide:shout':'wide:o',hold:call?'phone':null,aR:call?-2.75:null,zR:call?-.35:null,talk:call,shake:call?.01:0});
 P(ROOK,{t,x:ox-3.0,z:-.3,ry:.4,face:'wide:o',hy:.3});
 const k=eio((r-1.9)/.6);cam3(t,mix3([cx+.7,2.0,7.4],[ox+1.0,1.9,4.2],k),mix3([cx+.4,1.4,.6],[ox+1.6,1.7,-.5],k),40);
 UI();if(r<2.2)tag(540,330,'08:59 · ON TIME ✓','#7CFC9A',C(sp(r-.6,14,.5)));else tag(540,330,'📞 CALLING 911','#ff6b6b',C(sp(r-2.25,14,.5)))});
// J: end card + CTA
sh(T('cta'),(t,r)=>endcard(t,r));
