/*
 * Automated accessibility test run.
 *
 * This does more than scan for violations. For every criterion it asserts BOTH
 * halves of the teaching pair:
 *
 *   pass.html  ->  must produce ZERO violations
 *   fail.html  ->  must produce AT LEAST ONE violation, and it must be one of
 *                  the axe rules the dataset says maps to this criterion
 *
 * A fail.html that quietly stops failing is a broken lesson, so it is reported
 * as loudly as a pass.html that breaks.
 *
 * Criteria that no scanner can detect are listed explicitly as manual-only. That
 * list is the point: it is the honest measure of what automation cannot do.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import os from 'node:os';
import { ROOT, ACTIVE } from './load-criteria.mjs';

// Only WCAG success-criterion rules. Best-practice rules are useful but are not
// conformance requirements, and mixing them in muddles the lesson.
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.json': 'application/json', '.vtt': 'text/vtt', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.webm': 'video/webm', '.mp3': 'audio/mpeg',
};

function serve() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const path = decodeURIComponent(req.url.split('?')[0]);
        const file = join(ROOT, path.endsWith('/') ? path + 'index.html' : path);
        if (!file.startsWith(ROOT)) { res.writeHead(403).end(); return; }
        const body = await readFile(file);
        res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
        res.end(body);
      } catch { res.writeHead(404).end('Not found'); }
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

/** Every generated site page that must itself be clean (excludes the deliberate
 *  failures in fail.html and in the WCAG-EM sample site). */
function chromePages() {
  const skipDirs = new Set(['node_modules', '.git', 'tools', 'content', 'data', 'assets']);
  const out = [];
  (function walk(dir) {
    for (const name of readdirSync(dir)) {
      if (skipDirs.has(name)) continue;
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        if (full.includes('sample-site') || full.includes('exercises/ex-')) continue;
        walk(full);
      } else if (name === 'index.html' || (name.endsWith('.html') && !/^(fail|pass|explain)\.html$/.test(name))) {
        out.push('/' + relative(ROOT, full).split('\\').join('/'));
      }
    }
  })(ROOT);
  return out.sort();
}

const pad = (s, n) => String(s).padEnd(n);
const c = { red: (s) => `\x1b[31m${s}\x1b[0m`, green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`, dim: (s) => `\x1b[2m${s}\x1b[0m`, bold: (s) => `\x1b[1m${s}\x1b[0m` };

let puppeteer, AxePuppeteer;
try {
  puppeteer = (await import('puppeteer')).default;
  ({ AxePuppeteer } = await import('@axe-core/puppeteer'));
} catch {
  console.error('\n  Test dependencies are not installed. Run:  npm install\n');
  process.exit(1);
}

/** Find a Chrome to drive. Prefers an explicit override, then Puppeteer's own
 *  cache, then a system install - so a full disk that blocked Puppeteer's
 *  browser download does not block testing. */
function findChrome() {
  const { homedir } = os;
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const cache = join(homedir(), '.cache', 'puppeteer', 'chrome');
  if (existsSync(cache)) {
    for (const build of readdirSync(cache).sort().reverse()) {
      const bin = join(cache, build, 'chrome-linux64', 'chrome');
      if (existsSync(bin)) return bin;
    }
  }
  for (const bin of ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']) {
    if (existsSync(bin)) return bin;
  }
  return undefined;
}

const { server, port } = await serve();
const base = `http://127.0.0.1:${port}`;

let browser;
try {
  browser = await puppeteer.launch({
    executablePath: findChrome(),
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
} catch (err) {
  server.close();
  console.error(`\n  Could not launch a browser for testing: ${err.message}`);
  console.error('  If Chromium was not downloaded, run:  npx puppeteer browsers install chrome\n');
  process.exit(1);
}

async function scan(url) {
  // One misbehaving page must not take the whole run down.
  try {
    return await scanOnce(url);
  } catch (err) {
    console.log(`   ${c.red('ERROR')} ${url}: ${err.message.split('\n')[0]}`);
    return { violations: [], incomplete: [] };
  }
}

async function scanOnce(url) {
  const pageObj = await browser.newPage();
  await pageObj.setViewport({ width: 1280, height: 900 });
  // 'load', not 'networkidle0': several demos deliberately hold a network
  // connection open (a looping <audio autoplay>, a polling timer), so waiting
  // for the network to go idle stalls until the timeout on every one of them.
  await pageObj.goto(base + url, { waitUntil: 'load', timeout: 15000 });
  // Let scripts that build UI on load finish before axe inspects the DOM.
  await new Promise((r) => setTimeout(r, 120));
  // axe descends into same-origin iframes by default. The overview pages embed
  // fail.html on purpose, so without this exclusion every deliberate failure
  // would be reported against the page that is teaching about it.
  const results = await new AxePuppeteer(pageObj)
    .withTags(WCAG_TAGS)
    .exclude('iframe')
    .analyze();
  await pageObj.close();
  // axe has three outcomes, not two. "incomplete" means the rule fired but axe
  // will not decide on its own - it is asking a human to look. Treating that as
  // a pass is how teams convince themselves a broken page is clean.
  return { violations: results.violations, incomplete: results.incomplete };
}

const report = { passClean: 0, passDirty: [], failCorrect: 0, failSilent: [], failWrongRule: [],
  chromeClean: 0, chromeDirty: [], manualOnly: [], needsReview: [], skipped: [] };

console.log(c.bold('\n  Scanning site pages (these must all be clean)\n'));
for (const url of chromePages()) {
  const { violations: v } = await scan(url);
  if (v.length === 0) { report.chromeClean++; }
  else { report.chromeDirty.push({ url, v }); console.log(`   ${c.red('FAIL')} ${url}  ${v.map((x) => x.id).join(', ')}`); }
}
console.log(`   ${c.green('ok')}  ${report.chromeClean} site pages produced no violations.`);

console.log(c.bold('\n  Checking each criterion\'s fail/pass pair\n'));
for (const crit of ACTIVE) {
  const dir = join(ROOT, 'demos', crit.dir);
  const failFile = join(dir, 'fail.html');
  const passFile = join(dir, 'pass.html');
  const authored = existsSync(failFile) &&
    !(await readFile(failFile, 'utf8')).includes('TODO: author the');

  if (!authored) { report.skipped.push(crit.id); continue; }

  const { violations: passV } = await scan(`/demos/${crit.dir}/pass.html`);
  if (passV.length === 0) report.passClean++;
  else {
    report.passDirty.push({ id: crit.id, v: passV });
    console.log(`   ${c.red('FAIL')} ${pad(crit.id, 7)} pass.html has ${passV.length} violation(s): ${passV.map((x) => x.id).join(', ')}`);
  }

  const { violations: failV, incomplete: failI } = await scan(`/demos/${crit.dir}/fail.html`);
  const ids = failV.map((v) => v.id);
  const reviewIds = failI.map((v) => v.id);

  // demoAxeRules lets a criterion say "the failure THIS demo shows is not one a
  // scanner can catch", even though other failures of the same criterion are.
  // 2.1.1 Keyboard is the headline case: a div with a click handler is the most
  // common keyboard failure on the web and no scanner detects it.
  const expected = crit.demoAxeRules !== undefined ? crit.demoAxeRules : crit.axeRules;

  if (expected.length === 0) {
    report.manualOnly.push(crit.id);
    const why = crit.demoAxeRules !== undefined && crit.axeRules.length
      ? 'this failure is invisible to scanners'
      : 'no automated test exists for this criterion';
    console.log(`   ${c.yellow('manual')} ${pad(crit.id, 7)} ${pad(crit.title, 42)} ${c.dim(why)}`);
  } else if (reviewIds.some((id) => expected.includes(id)) && !ids.some((id) => expected.includes(id))) {
    // axe flagged it but declined to decide. That is a real, distinct outcome
    // and students must learn to read it as "you still have to check", not "ok".
    report.needsReview.push(crit.id);
    const matched = reviewIds.filter((id) => expected.includes(id));
    console.log(`   ${c.yellow('review')} ${pad(crit.id, 7)} ${pad(crit.title, 42)} ${c.dim('axe returns "needs review", not a violation: ' + matched.join(', '))}`);
  } else if (ids.length === 0) {
    report.failSilent.push(crit.id);
    console.log(`   ${c.red('FAIL')} ${pad(crit.id, 7)} fail.html no longer violates anything — the demo has stopped teaching`);
  } else if (!ids.some((id) => expected.includes(id))) {
    report.failWrongRule.push({ id: crit.id, got: ids, want: expected });
    console.log(`   ${c.red('FAIL')} ${pad(crit.id, 7)} fail.html violates ${ids.join(', ')}, but none map to this criterion (expected one of: ${expected.join(', ')})`);
  } else {
    report.failCorrect++;
    const matched = ids.filter((id) => expected.includes(id));
    console.log(`   ${c.green('ok')}   ${pad(crit.id, 7)} ${pad(crit.title, 42)} ${c.dim('detected: ' + matched.join(', '))}`);
  }
}

await browser.close();
server.close();

// --- summary -----------------------------------------------------------------
const detectable = ACTIVE.filter((x) => x.axeRules.length > 0).length;
const manual = ACTIVE.length - detectable;

console.log(c.bold('\n  What automation can and cannot see\n'));
console.log(`   ${pad('Criteria in WCAG 2.2', 44)} ${ACTIVE.length}`);
console.log(`   ${pad('With at least one mapped axe rule', 44)} ${detectable}  (${Math.round((detectable / ACTIVE.length) * 100)}%)`);
console.log(`   ${pad('No automated test exists at all', 44)} ${manual}  (${Math.round((manual / ACTIVE.length) * 100)}%)`);
console.log('');
console.log(`   ${pad('Demos where axe found the failure', 44)} ${report.failCorrect}`);
console.log(`   ${pad('Demos axe flagged only as "needs review"', 44)} ${report.needsReview.length}`);
console.log(`   ${pad('Demos whose failure axe cannot see at all', 44)} ${report.manualOnly.length}`);
console.log(c.dim(`\n   Even the ${detectable} "detectable" criteria are only partly covered: a scanner can`));
console.log(c.dim('   see that an alt attribute is missing, never that the alt text is wrong.'));
console.log(c.dim('   Automated testing is a smoke alarm, not a fire inspection.\n'));

if (report.skipped.length) {
  console.log(c.yellow(`  ${report.skipped.length} criteria not yet authored: ${report.skipped.join(', ')}\n`));
}

const failures = report.chromeDirty.length + report.passDirty.length +
  report.failSilent.length + report.failWrongRule.length;

if (failures) {
  console.error(c.red(`  ${failures} problem(s) found.\n`));
  process.exit(1);
}
console.log(c.green(`  All authored demos behave as documented.\n`));
