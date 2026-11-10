const { chromium } = require('playwright');
(async () => {
  const dir=process.argv[2], t=Number(process.argv[3]);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://'+dir+'/story.html'); await p.evaluate(() => document.fonts.ready);
  await p.waitForFunction(() => window.MAS && window.MAS.complete && window.MAS.naturalWidth>0);
  await p.evaluate(t => {render(t);document.getElementById('cap').style.display='none';document.getElementById('flash').style.opacity=0}, t);
  await p.screenshot({ path: dir+'/cover_raw.png' }); await b.close();
})();
