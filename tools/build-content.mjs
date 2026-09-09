// Wraps hand-authored HTML fragments in content/ with the shared site chrome.
//
// A fragment is the inner HTML of <main> plus a small front-matter block naming
// the page. This keeps narrative pages hand-written while guaranteeing that
// navigation, the skip link and the footer are identical everywhere (3.2.3).
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { ROOT } from './load-criteria.mjs';
import { page } from './layout.mjs';

const CONTENT = join(ROOT, 'content');
if (!existsSync(CONTENT)) { console.log('  Content: no content/ directory yet, skipping.'); process.exit(0); }

/** Walk content/ for .html fragments. */
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : full.endsWith('.html') ? [full] : [];
  });
}

/** Parse the leading <!--page ... --> front-matter block: key: value per line. */
function frontMatter(src) {
  const m = src.match(/^\s*<!--page([\s\S]*?)-->\s*/);
  if (!m) return [{}, src];
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^\s*([\w-]+)\s*:\s*(.*?)\s*$/);
    if (kv) meta[kv[1]] = kv[2];
  }
  return [meta, src.slice(m[0].length)];
}

const files = walk(CONTENT);
for (const file of files) {
  const rel = relative(CONTENT, file);
  const [meta, body] = frontMatter(readFileSync(file, 'utf8'));
  const depth = rel.split('/').length - 1;

  const crumbs = [{ label: 'Home', href: 'index.html' }];
  if (meta.section && meta.sectionHref) crumbs.push({ label: meta.section, href: meta.sectionHref });
  if (meta.crumb !== 'none') crumbs.push({ label: meta.crumb || meta.h1 || meta.title });

  const out = join(ROOT, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page({
    title: meta.title,
    description: meta.description,
    depth,
    navKey: meta.nav || 'home',
    lang: meta.lang,
    breadcrumb: rel === 'index.html' ? [] : crumbs,
    main: body.replace(/\s+$/, ''),
    bodyEnd: meta.script ? `  <script src="${'../'.repeat(depth)}assets/js/${meta.script}"></script>\n` : '',
  }));
}

console.log(`  Content: ${files.length} page(s) wrapped from content/.`);
