// The single source of truth for page chrome. Every generated page in the site
// gets its shell from here, so navigation is identical everywhere by construction
// (3.2.3 Consistent Navigation, 3.2.4 Consistent Identification).
import { esc } from './load-criteria.mjs';

/** Site navigation. Order is fixed and must never vary between pages (3.2.3). */
export const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'demos/index.html', label: 'Criteria', key: 'demos' },
  { href: 'evaluation/index.html', label: 'Evaluation (WCAG-EM)', key: 'evaluation' },
  { href: 'testing/index.html', label: 'Testing', key: 'testing' },
  { href: 'exercises/index.html', label: 'Exercises', key: 'exercises' },
];

/** Relative prefix from a page at `depth` directories deep back to the site root. */
export const rootPrefix = (depth) => (depth === 0 ? '' : '../'.repeat(depth));

/**
 * Wrap page content in the site shell.
 * @param {object} o
 * @param {string} o.title      - <title>, most specific part first (2.4.2)
 * @param {string} o.description - meta description
 * @param {number} o.depth      - directory depth below the site root
 * @param {string} o.navKey     - which nav item is the current page (2.4.8)
 * @param {Array}  o.breadcrumb - [{label, href}] ; last entry is the current page
 * @param {string} o.main       - inner HTML of <main>
 * @param {string} [o.lang]     - page language (3.1.1); defaults to English
 * @param {string} [o.headExtra]- extra <head> markup
 * @param {string} [o.bodyEnd]  - markup placed just before </body>
 */
export function page(o) {
  const r = rootPrefix(o.depth);
  const lang = o.lang || 'en';

  const nav = NAV.map((item) => {
    const current = item.key === o.navKey;
    // aria-current marks location programmatically, not by colour alone (1.4.1, 2.4.8)
    return `        <li><a href="${r}${item.href}"${current ? ' aria-current="page"' : ''}>${esc(item.label)}</a></li>`;
  }).join('\n');

  const crumbs = (o.breadcrumb || []).map((c, i, arr) => {
    const last = i === arr.length - 1;
    return last
      ? `        <li><span aria-current="page">${esc(c.label)}</span></li>`
      : `        <li><a href="${r}${c.href}">${esc(c.label)}</a></li>`;
  }).join('\n');

  const breadcrumb = crumbs
    ? `    <nav class="breadcrumb" aria-label="Breadcrumb">\n      <ol>\n${crumbs}\n      </ol>\n    </nav>\n`
    : '';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(o.title)}</title>
  <meta name="description" content="${esc(o.description || '')}">
  <link rel="stylesheet" href="${r}assets/css/base.css">
  <link rel="stylesheet" href="${r}assets/css/demo.css">
  <link rel="stylesheet" href="${r}assets/css/print.css">
${o.headExtra || ''}</head>
<body>
  <!-- 2.4.1 Bypass Blocks: first focusable element, visible on focus -->
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="site-header">
    <div class="site-header__inner">
      <p class="site-header__title"><a href="${r}index.html">WCAG 2.2 Demo Suite</a></p>
      <nav class="site-nav" aria-label="Main">
        <ul>
${nav}
        </ul>
      </nav>
    </div>
  </header>

  <div class="page">
${breadcrumb}    <!-- tabindex="-1" lets the skip link move focus here, not just scroll -->
    <main id="main" tabindex="-1">
${o.main}
    </main>
  </div>

  <footer class="site-footer">
    <div class="site-footer__inner">
      <p>A teaching resource covering all 86 WCAG 2.2 success criteria at levels A, AA and AAA,
         with a full <a href="${r}evaluation/index.html">WCAG-EM</a> evaluation walkthrough.</p>
      <p>Reference: <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2 Recommendation</a> and
         <a href="https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/">WCAG-EM 1.0</a>.
         Pages named <code>fail.html</code> contain deliberate accessibility failures for teaching.</p>
    </div>
  </footer>
${o.bodyEnd || ''}</body>
</html>
`;
}

/** Standalone shell for isolated fail/pass demo pages: no site chrome, so the
 *  example is exactly the code under discussion and nothing else. */
export function demoPage(o) {
  return `<!DOCTYPE html>
<html lang="${o.lang || 'en'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(o.title)}</title>
  <link rel="stylesheet" href="../../assets/css/base.css">
  <link rel="stylesheet" href="../../assets/css/example.css">
${o.headExtra || ''}</head>
<body class="example example--${o.variant}">
${o.body}
${o.bodyEnd || ''}</body>
</html>
`;
}
