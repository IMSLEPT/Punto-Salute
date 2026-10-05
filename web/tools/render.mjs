// uso: node tools/render.mjs <in.svg|html> <out.png> <w> <h> [bg]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [inp, out, w, h, bg = 'transparent'] = process.argv.slice(2);
const exe = fs.readdirSync('/opt/pw-browsers').find((d) => d.startsWith('chromium-'));
const b = await chromium.launch({ executablePath: `/opt/pw-browsers/${exe}/chrome-linux/chrome`, args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: +w, height: +h } });
const svg = fs.readFileSync(inp, 'utf8');
await p.setContent(`<body style="margin:0;background:${bg}"><div style="width:${w}px;height:${h}px">${svg.replace('<svg ', `<svg width="${w}" height="${h}" `)}</div></body>`);
await p.screenshot({ path: out, omitBackground: bg === 'transparent' });
await b.close();
