// Generates every demo overview page from data/criteria/*.json, and scaffolds
// fail.html / pass.html / notes.md the first time a criterion is seen.
//
// index.html is ALWAYS regenerated - it is pure derivation, so it can never
// drift from the data or from the example files it quotes.
// fail.html, pass.html, notes.md and explain.html are NEVER overwritten once
// they exist: that is where the hand-authored teaching content lives.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { ALL, ACTIVE, ROOT, esc, LEVEL_COUNTS } from './load-criteria.mjs';
import { page, demoPage } from './layout.mjs';

const AUTOMATION_LABEL = {
  yes: 'Detectable automatically',
  partial: 'Partly detectable automatically',
  no: 'Not detectable automatically',
};

/** Pull <!-- excerpt:start --> ... <!-- excerpt:end --> regions out of an example
 *  file and render them as a code block. Quoting the file rather than retyping
 *  the markup means the lesson cannot drift from the running example. */
function excerpt(file, caption) {
  if (!existsSync(file)) return '';
  const src = readFileSync(file, 'utf8');
  const regions = [...src.matchAll(/<!--\s*excerpt:start\s*-->([\s\S]*?)<!--\s*excerpt:end\s*-->/g)]
    .map((m) => dedent(m[1]));
  if (!regions.length) return '';
  return `        <div class="code-block">
          <p class="code-block__caption">${esc(caption)}</p>
          <pre tabindex="0"><code>${esc(regions.join('\n\n'))}</code></pre>
        </div>`;
}

function dedent(block) {
  const lines = block.replace(/^\n+|\s+$/g, '').split('\n');
  const indent = Math.min(
    ...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length)
  );
  return lines.map((l) => l.slice(indent)).join('\n');
}

function axeList(c) {
  // When a criterion declares demoAxeRules: [], the specific failure this demo
  // shows cannot be caught by a scanner even though the criterion has mapped
  // rules for other cases. Saying so on the page is the whole point.
  const blindSpot = c.demoAxeNote
    ? `<p><strong>This demo's failure is not machine-detectable.</strong> ${esc(c.demoAxeNote)}</p>`
    : '';
  if (!c.axeRules.length) {
    return `${blindSpot}<p>No axe rule maps to this criterion. It has to be checked by a person.</p>`;
  }
  return `${blindSpot}<p>Relevant axe rules:</p>
            <ul>${c.axeRules.map((r) => `\n              <li><code>${esc(r)}</code></li>`).join('')}
            </ul>`;
}

function demoIndex(c, prev, next) {
  const dir = join(ROOT, 'demos', c.dir);
  const explainFile = join(dir, 'explain.html');
  const explain = existsSync(explainFile) ? readFileSync(explainFile, 'utf8') : '';

  const related = c.related.length
    ? `      <section aria-labelledby="related-h">
        <h2 id="related-h">Related criteria</h2>
        <ul class="related-list">
${c.related.map((id) => {
    const r = ALL.find((x) => x.id === id);
    return `          <li><a href="../${r.dir}/index.html">${esc(r.id)} ${esc(r.title)} (Level ${esc(r.level)})</a></li>`;
  }).join('\n')}
        </ul>
      </section>\n`
    : '';

  const pager = `      <nav class="sc-pager" aria-label="Criterion">
${prev ? `        <a href="../${prev.dir}/index.html"><span class="sc-pager__dir">Previous criterion</span>${esc(prev.id)} ${esc(prev.title)}</a>` : '        <span></span>'}
${next ? `        <a href="../${next.dir}/index.html"><span class="sc-pager__dir">Next criterion</span>${esc(next.id)} ${esc(next.title)}</a>` : '        <span></span>'}
      </nav>`;

  const bilingualNote = c.bilingualNote
    ? `      <div class="callout callout--note">
        <p class="callout__title"><span class="glyph" aria-hidden="true">&#9432;</span> Note on language</p>
        <p>${esc(c.bilingualNote)}</p>
      </div>\n`
    : '';

  const obsoleteNote = c.obsolete
    ? `      <div class="callout callout--note">
        <p class="callout__title"><span class="glyph" aria-hidden="true">&#9888;</span> Removed from WCAG 2.2</p>
        <p>This criterion is <strong>obsolete</strong>. It does not count toward conformance and
           must not be evaluated in a WCAG 2.2 audit. It is documented here so you recognise it in
           older reports and older tooling output.</p>
      </div>\n`
    : '';

  // Obsolete 4.1.1 has no fail/pass pair - there is nothing to conform to.
  const comparison = c.obsolete ? '' : `      <section aria-labelledby="compare-h">
        <h2 id="compare-h">The failure and the fix</h2>
        <p>Each example below is a self-contained page, loaded in a frame so its markup cannot
           affect this page. Open either one on its own to test it with a keyboard or screen reader.</p>

        <div class="compare">
          <section class="panel panel--fail" aria-labelledby="fail-h">
            <h3 class="panel__header" id="fail-h">
              <span class="glyph" aria-hidden="true">&#10007;</span> Fails ${esc(c.id)}
            </h3>
            <div class="panel__body">
              <iframe class="demo-frame" src="fail.html"
                      title="Failing example for ${esc(c.id)} ${esc(c.title)}"></iframe>
              <p class="demo-frame__actions">
                <a href="fail.html" target="_blank" rel="noopener">Open the failing example in a new tab</a>
              </p>
${excerpt(join(dir, 'fail.html'), 'fail.html — the problem')}
            </div>
          </section>

          <section class="panel panel--pass" aria-labelledby="pass-h">
            <h3 class="panel__header" id="pass-h">
              <span class="glyph" aria-hidden="true">&#10003;</span> Meets ${esc(c.id)}
            </h3>
            <div class="panel__body">
              <iframe class="demo-frame" src="pass.html"
                      title="Passing example for ${esc(c.id)} ${esc(c.title)}"></iframe>
              <p class="demo-frame__actions">
                <a href="pass.html" target="_blank" rel="noopener">Open the passing example in a new tab</a>
              </p>
${excerpt(join(dir, 'pass.html'), 'pass.html — the fix')}
            </div>
          </section>
        </div>
      </section>\n`;

  const main = `      <div class="sc-header">
        <p class="sc-header__meta">
          <span class="sc-header__number">${esc(c.id)}</span>
          <span class="level level--${esc(c.level)}">Level ${esc(c.level)}</span>
          <span class="tag">Guideline ${esc(c.guideline)} ${esc(c.guidelineTitle)}</span>
          <span class="tag">${c.obsolete ? 'Removed in WCAG 2.2' : `Added in WCAG ${esc(c.version)}`}</span>
          <span class="tag">${esc(AUTOMATION_LABEL[c.automatable])}</span>
        </p>
        <h1>${esc(c.title)}</h1>
        <p class="sc-header__summary">${esc(c.summary)}</p>
      </div>

${obsoleteNote}${bilingualNote}      <section aria-labelledby="who-h">
        <h2 id="who-h">Who this affects</h2>
        <p>${esc(c.whoItAffects)}</p>
      </section>

${comparison}${explain}      <section aria-labelledby="test-h">
        <h2 id="test-h">How to test it</h2>
        <p>${esc(c.howToTest)}</p>
        <ul class="test-methods">
          <li>
            <h3>Automated</h3>
            <p>${esc(c.automationNote || '')}</p>
            ${axeList(c)}
          </li>
          <li>
            <h3>Keyboard</h3>
            <p>Unplug the mouse. Move through the page with <kbd>Tab</kbd>, <kbd>Shift</kbd>+<kbd>Tab</kbd>,
               <kbd>Enter</kbd>, <kbd>Space</kbd> and the arrow keys.
               See the <a href="../../testing/keyboard.html">keyboard testing script</a>.</p>
          </li>
          <li>
            <h3>Screen reader</h3>
            <p>Listen to both examples with NVDA, JAWS, VoiceOver or TalkBack and compare what is announced.
               See the <a href="../../testing/screen-readers.html">screen reader cheat sheets</a>.</p>
          </li>
          <li>
            <h3>Visual</h3>
            <p>Zoom to 200% and 400%, narrow the viewport to 320&nbsp;px, and apply the text-spacing overrides.
               See the <a href="../../testing/visual.html">visual testing procedures</a>.</p>
          </li>
        </ul>
      </section>

${related}      <section aria-labelledby="spec-h">
        <h2 id="spec-h">In the specification</h2>
        <ul>
          <li><a href="${esc(c.understandingUrl)}">Understanding ${esc(c.id)} ${esc(c.title)}</a> — the W3C explanation, intent and exceptions</li>
          <li><a href="https://www.w3.org/TR/WCAG22/#${esc(c.slug)}">${esc(c.id)} in the WCAG 2.2 Recommendation</a> — the normative wording</li>
        </ul>
      </section>

${pager}`;

  return page({
    title: `${c.id} ${c.title} (Level ${c.level}) — WCAG 2.2 Demo Suite`,
    description: c.summary,
    depth: 2,
    navKey: 'demos',
    breadcrumb: [
      { label: 'Home', href: 'index.html' },
      { label: 'Criteria', href: 'demos/index.html' },
      { label: `${c.id} ${c.title}` },
    ],
    main,
  });
}

/** First-run stubs. Written only when the file does not exist. */
function stubExample(c, variant) {
  const failing = variant === 'fail';
  return demoPage({
    title: `${failing ? 'Failing' : 'Passing'} example — ${c.id} ${c.title}`,
    variant,
    body: `  <p class="example-banner">${failing
      ? `This page deliberately FAILS WCAG ${c.id} ${c.title}.`
      : `This page MEETS WCAG ${c.id} ${c.title}.`}</p>

  <!-- excerpt:start -->
  <!-- TODO: author the ${failing ? 'failing' : 'conforming'} example for ${c.id} ${c.title}.
       Everything between the excerpt markers is quoted on the overview page. -->
  <!-- excerpt:end -->`,
  });
}

function stubNotes(c) {
  return `# Teaching notes — ${c.id} ${c.title} (Level ${c.level})

**Guideline ${c.guideline} ${c.guidelineTitle} · Added in WCAG ${c.version}**

## Talk track

_TODO: how to introduce this criterion in class._

## Common student misconceptions

_TODO._

## Discussion questions

1. _TODO._

## Real-world examples

_TODO._
`;
}

// --- run ---------------------------------------------------------------------
let created = 0;
let regenerated = 0;

ALL.forEach((c, i) => {
  const dir = join(ROOT, 'demos', c.dir);
  if (!existsSync(dir)) { mkdirSync(dir, { recursive: true }); }

  if (!c.obsolete) {
    for (const variant of ['fail', 'pass']) {
      const f = join(dir, `${variant}.html`);
      if (!existsSync(f)) { writeFileSync(f, stubExample(c, variant)); created++; }
    }
  }
  const notes = join(dir, 'notes.md');
  if (!existsSync(notes)) { writeFileSync(notes, stubNotes(c)); created++; }

  writeFileSync(join(dir, 'index.html'), demoIndex(c, ALL[i - 1], ALL[i + 1]));
  regenerated++;
});

console.log(`  Demo pages: ${regenerated} overview pages regenerated, ${created} new files scaffolded.`);
console.log(`  Covering ${ACTIVE.length} active criteria (A: ${LEVEL_COUNTS.A}, AA: ${LEVEL_COUNTS.AA}, AAA: ${LEVEL_COUNTS.AAA}).`);
