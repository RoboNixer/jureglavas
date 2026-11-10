const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('file://'+__dirname+'/story.html'); await p.evaluate(() => document.fonts.ready);
  await p.waitForFunction(() => window.MAS && window.MAS.complete && window.MAS.naturalWidth>0);
  for (const t of process.argv.slice(2).map(Number)) { await p.evaluate(t => render(t), t); await p.screenshot({ path: `${__dirname}/prev_${t}.jpg`, type: 'jpeg', quality: 80 }); }
  if (errs.length) console.log('ERR', errs.slice(0,5).join('\n')); await b.close();
})();
