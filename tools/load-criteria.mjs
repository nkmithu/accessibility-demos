// Shared data loader. Dev-time only: the browser never fetches these JSON files,
// because fetch() is blocked under file:// — every page ships its data baked into HTML.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const FILES = ['1-perceivable', '2-operable', '3-understandable', '4-robust'];

export const PRINCIPLES = FILES.map((f) =>
  JSON.parse(readFileSync(join(ROOT, 'data', 'criteria', `${f}.json`), 'utf8'))
);

/** Every entry, including the obsolete 4.1.1, sorted by criterion number. */
export const ALL = PRINCIPLES.flatMap((p) =>
  p.criteria.map((c) => ({
    ...c,
    principle: p.principle,
    principleTitle: p.principleTitle,
    guidelineTitle: p.guidelines[c.guideline],
    dir: `${c.id}-${c.slug}`,
    understandingUrl: `https://www.w3.org/WAI/WCAG22/Understanding/${c.slug}.html`,
  }))
).sort(bySc);

/** The 86 criteria that count toward WCAG 2.2 conformance. */
export const ACTIVE = ALL.filter((c) => !c.obsolete);

export const GUIDELINE_TITLES = Object.assign({}, ...PRINCIPLES.map((p) => p.guidelines));

export function bySc(a, b) {
  const pa = a.id.split('.').map(Number);
  const pb = b.id.split('.').map(Number);
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2];
}

export function byId(id) {
  return ALL.find((c) => c.id === id);
}

/** Escape a string for use in HTML text or a double-quoted attribute. */
export function esc(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const LEVEL_COUNTS = ['A', 'AA', 'AAA'].reduce((acc, l) => {
  acc[l] = ACTIVE.filter((c) => c.level === l).length;
  return acc;
}, {});
