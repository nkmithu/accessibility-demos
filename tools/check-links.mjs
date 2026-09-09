// Verifies every internal link and asset reference across the whole site.
// With ~260 generated pages cross-linking each other, a broken relative path is
// easy to introduce and invisible until a student hits it. No dependencies.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { ROOT } from './load-criteria.mjs';

const SKIP_DIRS = new Set(['node_modules', '.git', 'tools', 'content', 'data']);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    if (SKIP_DIRS.has(name)) return [];
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : full.endsWith('.html') ? [full] : [];
  });
}

const pages = walk(ROOT);
const problems = [];
let checked = 0;

for (const file of pages) {
  const raw = readFileSync(file, 'utf8');
  const ids = new Set([...raw.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  // Code samples contain escaped markup with href/src attributes that are
  // illustrations, not references. Blank them out before scanning for links,
  // or every teaching example produces a false positive.
  const src = raw
    .replace(/<pre[\s\S]*?<\/pre>/gi, '')
    .replace(/<code[\s\S]*?<\/code>/gi, '');

  for (const [, attr, url] of src.matchAll(/\s(href|src)="([^"]*)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(url) || url === '') {
      // Same-page fragment: the target id must exist on this page.
      if (url.startsWith('#') && url.length > 1 && !ids.has(url.slice(1))) {
        problems.push(`${relative(ROOT, file)} -> ${url} (no element with that id)`);
      }
      continue;
    }
    const [path, frag] = url.split('#');
    const target = resolve(dirname(file), path);
    checked++;
    if (!existsSync(target)) {
      problems.push(`${relative(ROOT, file)} -> ${url} (${attr} target missing)`);
      continue;
    }
    if (frag) {
      const targetSrc = readFileSync(target, 'utf8');
      if (!new RegExp(`\\sid="${frag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(targetSrc)) {
        problems.push(`${relative(ROOT, file)} -> ${url} (fragment "#${frag}" not found in target)`);
      }
    }
  }
}

console.log(`  Checked ${checked} internal references across ${pages.length} pages.`);
if (problems.length) {
  console.error(`\n  ${problems.length} broken reference(s):\n`);
  problems.slice(0, 40).forEach((p) => console.error(`   x ${p}`));
  if (problems.length > 40) console.error(`   ... and ${problems.length - 40} more`);
  process.exit(1);
}
console.log('  All internal links resolve.');
