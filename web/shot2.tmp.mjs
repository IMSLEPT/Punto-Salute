import { serve, launch } from './tests/lib.mjs';
process.env.PS_WWW='/tmp/apkx/assets/www';
const { srv, url } = await serve();
for (const [w,fs,tz] of [[412,1,1],[412,1.3,1],[360,1.15,1]]) {
const { browser, page } = await launch({w,h:915,scale:2.6});
await page.goto(url);
await page.evaluate(([fs,id]) => { localStorage.setItem('ps:recents', JSON.stringify([id])); localStorage.setItem('ps:seen', JSON.stringify({[id]:['a']})); localStorage.setItem('ps:settings', JSON.stringify({fs})); }, [fs, process.argv[2]]);
await page.reload(); await page.waitForTimeout(1500);
const el = await page.$('.cont'); await el.scrollIntoViewIfNeeded();
await el.screenshot({ path: `/tmp/c_${w}_${fs}.png` });
const r = await page.evaluate(() => { const c=document.querySelector('.cont .cr .grow'); const sb=c.querySelector('.sb').getBoundingClientRect(), bar=c.querySelector('.bar').getBoundingClientRect(); return {sbBottom:sb.bottom, barTop:bar.top, overlap: sb.bottom>bar.top+0.5}; });
console.log(w,fs,JSON.stringify(r));
await browser.close();
}
srv.close();
