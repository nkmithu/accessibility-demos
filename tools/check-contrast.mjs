// Verifies the design tokens in assets/css/base.css meet WCAG contrast thresholds.
// Body text targets 7:1 (1.4.6 AAA); UI borders and large text target 3:1 (1.4.11).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './load-criteria.mjs';

const css = readFileSync(join(ROOT, 'assets/css/base.css'), 'utf8');

/** Pull the token block for a theme: the first :root{} is light, the one inside
 *  the prefers-color-scheme:dark media query is dark. */
function tokens(theme) {
  const block = theme === 'dark'
    ? css.split('@media (prefers-color-scheme: dark)')[1].split('}')[0] + '}'
    : css.split(':root {')[1].split('}')[0];
  const out = {};
  for (const [, name, value] of block.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
    out[name] = value;
  }
  return out;
}

const srgb = (hex) => {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
};
const lum = (hex) =>
  srgb(hex)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((a, c, i) => a + c * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

// [foreground, background, minimum, what it is]
const PAIRS = [
  ['text', 'bg', 7, 'body text on page background (1.4.6 AAA)'],
  ['text', 'surface', 7, 'body text on surface (1.4.6 AAA)'],
  ['text-muted', 'bg', 4.5, 'muted text on page background (1.4.3 AA)'],
  ['text-muted', 'surface', 4.5, 'muted text on surface (1.4.3 AA)'],
  ['accent', 'bg', 4.5, 'link text on page background (1.4.3 AA)'],
  ['accent', 'surface', 4.5, 'link text on surface (1.4.3 AA)'],
  ['on-accent', 'accent', 4.5, 'button label on button fill (1.4.3 AA)'],
  ['fail', 'fail-bg', 7, 'failure callout text on its own background (1.4.6 AAA)'],
  ['pass', 'pass-bg', 7, 'pass callout text on its own background (1.4.6 AAA)'],
  ['note', 'note-bg', 7, 'note callout text on its own background (1.4.6 AAA)'],
  ['note', 'surface', 7, 'note callout text on surface (1.4.6 AAA)'],
  ['note', 'bg', 7, 'note callout text on page background (1.4.6 AAA)'],
  ['fail', 'surface', 7, 'failure callout text on surface (1.4.6 AAA)'],
  ['pass', 'surface', 7, 'pass callout text on surface (1.4.6 AAA)'],
  // Badges appear on all three surfaces, so each pair must be checked. Testing
  // only against --bg is how the dark-theme Level AA badge slipped to 6.93:1.
  ['level-a', 'bg', 7, 'Level A badge on page background (1.4.6 AAA)'],
  ['level-a', 'surface', 7, 'Level A badge on surface (1.4.6 AAA)'],
  ['level-a', 'surface-raised', 7, 'Level A badge on raised surface (1.4.6 AAA)'],
  ['level-aa', 'bg', 7, 'Level AA badge on page background (1.4.6 AAA)'],
  ['level-aa', 'surface', 7, 'Level AA badge on surface (1.4.6 AAA)'],
  ['level-aa', 'surface-raised', 7, 'Level AA badge on raised surface (1.4.6 AAA)'],
  ['level-aaa', 'bg', 7, 'Level AAA badge on page background (1.4.6 AAA)'],
  ['level-aaa', 'surface', 7, 'Level AAA badge on surface (1.4.6 AAA)'],
  ['level-aaa', 'surface-raised', 7, 'Level AAA badge on raised surface (1.4.6 AAA)'],
  ['text', 'surface-raised', 7, 'body text on raised surface (1.4.6 AAA)'],
  ['text-muted', 'surface-raised', 4.5, 'muted text on raised surface (1.4.3 AA)'],
  ['border-strong', 'bg', 3, 'input border on page background (1.4.11 AA)'],
  ['focus', 'bg', 3, 'focus indicator on page background (1.4.11 / 2.4.13)'],
  ['focus', 'surface', 3, 'focus indicator on surface (1.4.11 / 2.4.13)'],
  ['accent', 'surface', 3, 'button fill edge on surface (1.4.11 AA)'],
];

let failed = 0;
for (const theme of ['light', 'dark']) {
  const t = tokens(theme);
  console.log(`\n  ${theme.toUpperCase()} THEME`);
  for (const [fg, bg, min, label] of PAIRS) {
    if (!t[fg] || !t[bg]) { console.log(`   ?  --${fg} / --${bg} not found`); continue; }
    const r = ratio(t[fg], t[bg]);
    const ok = r >= min;
    if (!ok) failed++;
    console.log(`   ${ok ? 'ok' : 'FAIL'}  ${r.toFixed(2)}:1 (needs ${min}:1)  ${label}`);
  }
}

console.log('');
if (failed) {
  console.error(`  ${failed} token pair(s) below threshold. Adjust base.css.\n`);
  process.exit(1);
}
console.log('  All token pairs meet their thresholds.\n');
