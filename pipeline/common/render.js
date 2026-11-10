const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const DUR = JSON.parse(fs.readFileSync(__dirname+'/timeline.json')).total;
let SC = ['a','b','c','d'].map((n,i)=>[n,DUR*i/4,DUR*(i+1)/4]);
if (process.argv[2]) SC = SC.filter(s=>process.argv.slice(2).includes(s[0]));
const FPS = 30;
(async () => {
  const b = await chromium.launch();
  await Promise.all(SC.map(async ([name, a, z]) => {
    const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
    await p.goto('file://'+__dirname+'/story.html');
    await p.evaluate(() => document.fonts.ready);
    await p.waitForFunction(() => window.MAS && window.MAS.complete && window.MAS.naturalWidth>0);
    const tmp = `${__dirname}/s_${name}.tmp.mp4`;
    const ff = spawn('ffmpeg', ['-y','-loglevel','error','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-',
      '-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-r',String(FPS),tmp]);
    const n0 = Math.round(a*FPS), n1 = Math.round(z*FPS);
    for (let f = n0; f < n1; f++) {
      await p.evaluate(t => render(t), f / FPS);
      const buf = await p.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    ff.stdin.end();
    const code = await new Promise(r => ff.on('close', r));
    if (code === 0) fs.renameSync(tmp, `${__dirname}/s_${name}.mp4`); else throw new Error(name + ' ffmpeg ' + code);
    await p.close();
  }));
  await b.close();
})();
