/*
 * Verifies the suite's own pages survive a 320 CSS pixel viewport (1.4.10 Reflow)
 * and the WCAG text-spacing overrides (1.4.12 Text Spacing).
 *
 * This only checks the teaching pages. The deliberately broken fail.html files,
 * the sample site and the exercise starters are excluded - several of them fail
 * these criteria on purpose.
 *
 * Note what this can and cannot do: it detects horizontal overflow, which is the
 * mechanical part. It cannot tell you whether content became unreadable or a
 * control became unreachable. Run the manual procedure in testing/visual.html too.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import os from 'node:os';
import { ROOT } from './load-criteria.mjs';

const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.vtt': 'text/vtt',
  '.mp4': 'video/mp4', '.mp3': 'audio/mpeg' };

const SKIP_DIRS = new Set(['node_modules', '.git', 'tools', 'content', 'data', 'assets']);

function pages() {
  const out = [];
  (function walk(dir) {
    for (const name of readdirSync(dir)) {
      if (SKIP_DIRS.has(name)) continue;
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        if (full.includes('sample-site') || full.includes('exercises/ex-')) continue;
        walk(full);
      } else if (name.endsWith('.html') && !/^(fail|explain)\.html$/.test(name)) {
        out.push('/' + relative(ROOT, full).split('\\').join('/'));
      }
    }
  })(ROOT);
  return out.sort();
}

let puppeteer;
try { puppeteer = (await import('puppeteer')).default; }
catch { console.error('\n  Run npm install first.\n'); process.exit(1); }

function findChrome() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const cache = join(os.homedir(), '.cache', 'puppeteer', 'chrome');
  if (existsSync(cache)) {
    for (const b of readdirSync(cache).sort().reverse()) {
      const bin = join(cache, b, 'chrome-linux64', 'chrome');
      if (existsSync(bin)) return bin;
    }
  }
  for (const bin of ['/usr/bin/google-chrome', '/usr/bin/chromium']) if (existsSync(bin)) return bin;
}

const server = createServer(async (req, res) => {
  try {
    const p = decodeURIComponent(req.url.split('?')[0]);
    const f = join(ROOT, p.endsWith('/') ? p + 'index.html' : p);
    const body = await readFile(f);
    res.writeHead(200, { 'Content-Type': MIME[extname(f)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404).end(); }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({
  executablePath: findChrome(), args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

// The exact overrides WCAG 1.4.12 requires a page to survive.
const TEXT_SPACING = `
  * { line-height: 1.5 !important; letter-spacing: 0.12em !important;
      word-spacing: 0.16em !important; }
  p, li, dd, blockquote, h1, h2, h3 { margin-bottom: 2em !important; }`;

async function overflow(url, { spacing } = {}) {
  const p = await browser.newPage();
  await p.setViewport({ width: 320, height: 256 });
  await p.goto(base + url, { waitUntil: 'load', timeout: 15000 });
  if (spacing) await p.addStyleTag({ content: TEXT_SPACING });
  await new Promise((r) => setTimeout(r, 80));
  const result = await p.evaluate(() => {
    const de = document.documentElement;
    const over = de.scrollWidth - de.clientWidth;
    const offenders = [];
    if (over > 1) {
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (r.right <= de.clientWidth + 0.5 || r.width === 0) continue;
        // Skip anything already contained by a scrolling ancestor - it scrolls
        // inside its own box and does not make the PAGE scroll.
        let anc = el.parentElement, contained = false;
        while (anc && anc !== document.body) {
          const cs = getComputedStyle(anc);
          if (cs.overflowX === 'auto' || cs.overflowX === 'scroll' || cs.overflowX === 'hidden') {
            contained = true; break;
          }
          anc = anc.parentElement;
        }
        if (contained) continue;
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: typeof el.className === 'string' ? el.className.trim() : '',
          // 1.4.10 exempts content requiring two dimensions: data tables, maps,
          // diagrams, code blocks and video. A page whose only horizontal scroll
          // comes from one of those still conforms.
          exempt: !!el.closest('table, pre, svg, video, iframe, .table-scroll'),
        });
      }
    }
    const real = offenders.filter((o) => !o.exempt);
    const widest = (real[0] || offenders[0]);
    return {
      over,
      exemptOnly: offenders.length > 0 && real.length === 0,
      widest: widest ? widest.tag + (widest.cls ? '.' + widest.cls.split(/\s+/).join('.') : '') : null,
    };
  });
  await p.close();
  return result;
}

const c = { red: (s) => `\x1b[31m${s}\x1b[0m`, green: (s) => `\x1b[32m${s}\x1b[0m`, dim: (s) => `\x1b[2m${s}\x1b[0m` };
const urls = pages();
let bad = 0;
let exempt = 0;

console.log(`\n  Checking ${urls.length} pages at 320x256 (1.4.10) and with text-spacing overrides (1.4.12)\n`);
for (const url of urls) {
  const plain = await overflow(url);
  const spaced = await overflow(url, { spacing: true });
  const report = (r, note) => {
    if (r.over <= 1) return false;
    if (r.exemptOnly) {
      exempt++;
      console.log(`   ${c.dim('exempt')}   ${url}  +${r.over}px${note} from ${r.widest} — 1.4.10 exempts content needing two dimensions`);
      return false;
    }
    console.log(`   ${c.red('OVERFLOW')} ${url}  +${r.over}px${note}  ${c.dim(r.widest || '')}`);
    return true;
  };
  if (report(plain, '')) bad++;
  else if (report(spaced, ' with text spacing applied')) bad++;
}

await browser.close();
server.close();

if (bad) {
  console.error(c.red(`\n  ${bad} page(s) scroll horizontally at 320px.\n`));
  process.exit(1);
}
console.log(c.green(`  All ${urls.length} pages reflow to 320px, with and without the text-spacing overrides.`));
if (exempt) {
  console.log(c.dim(`  ${exempt} page(s) scroll only because of exempt content (data tables, code blocks, media).\n`));
} else { console.log(''); }
console.log(c.dim('  This checks overflow only. Whether content stayed readable and usable\n  still needs the manual procedure in testing/visual.html.\n'));
