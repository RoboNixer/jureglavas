const YOU={hair:'curl'},HER={hair:'bun',hairc:'#e2508a',lashes:1};
sh(0,(t,r)=>{cam(540,1000,1,t,.2);psky('#6f7f92','#9aabbb','#c3cfd8');pclouds(t,260,'#8a97a6','#5f6c7c',6,2);proad(t,{wet:1,hz:1120});
 sm(300,1760,1.2,Object.assign({t,eyes:'wide',brow:'worried',mouth:'frown',look:[.6,-.2],armR:150,sweat:1},YOU));
 memo(790,1760,1.6,{t,wave:1});prain(t,.55);label3('Your memory 🙃',1)});
sh(5,(t,r)=>{cam(540,1000,1,t,.2);psky('#ffe9a8','#ffd77a','#f4c27a',1060);psun(330,420,110,t);proad(t,{dry:1,road:0,hz:1060,hazec:'255,230,170'});
 sm(380,1760,1.05,Object.assign({t,crawl:1,eyes:'wide',brow:'worried',mouth:'tongue',sweat:1,look:[.6,-.3]},YOU));
 sm(820,1760,1.15,{t,col:'#8cc06a',limb:'#8cc06a',out:'#2f4a22',lid:.45,brow:'smug',mouth:'smirk',look:[-.7,.3],armR:30,armL:-10});label3('Deadline 😏',1)});
sh(10,(t,r)=>{cam(540,1000,1,t,.2);proom(t,{win:780,frame:[230,520],lamp:980,plant:120,night:0});psofa(420,1560,.9);
 sm(300,1760,1.15,Object.assign({t,eyes:'wide',brow:'up',mouth:'grin',armR:70,armL:20,holdR:(x,y)=>phoneH(x,y+30,-.1,1,t)},YOU));
 sm(790,1760,1.15,Object.assign({t,eyes:'happy',brow:'flat',mouth:'smile',armL:150,armR:150,blush:1},HER));label3('You, organised 😎',1)});
sh(15,(t,r)=>{cam(540,1000,1,t,.2);proom(t,{win:300,night:1,lamp:900,frame:[800,500],curtain:'#6a7fd0',curtain2:'#4f62b0'});
 sm(540,1800,1.35,Object.assign({t,eyes:'wink',brow:'smug',mouth:'smirk',tilt:-8,armR:60,bendR:-90},HER));label3('Her 😉',1)});
function phoneH(hx,hy,rot=-.15,on=0,t=0){X.save();X.translate(hx,hy-30);X.rotate(rot);if(on)glow(0,0,120,'130,240,160',.35);rr(-34,-60,68,120,12,'#1b1b1f',5);rr(-26,-50,52,100,7,on?'#25d366':'#3a4a66',0);X.restore()}
