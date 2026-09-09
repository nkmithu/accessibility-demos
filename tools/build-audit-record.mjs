// Generates the audit record template: every criterion in scope, as a checklist.
// Generated rather than hand-written so it can never drift from the dataset.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { ROOT, ACTIVE, esc, LEVEL_COUNTS, PRINCIPLES } from './load-criteria.mjs';
import { page } from './layout.mjs';

const AUTO = { yes: 'auto', partial: 'partly auto', no: 'manual only' };

const rows = PRINCIPLES.map((p) => {
  const inP = ACTIVE.filter((c) => c.principle === p.principle);
  return `        <tr class="principle-row">
          <th colspan="6" scope="colgroup">Principle ${esc(p.principle)}: ${esc(p.principleTitle)}</th>
        </tr>
${inP.map((c) => `        <tr>
          <th scope="row"><a href="../../demos/${esc(c.dir)}/index.html">${esc(c.id)}</a></th>
          <td>${esc(c.title)}</td>
          <td><span class="level level--${esc(c.level)}">${esc(c.level)}</span></td>
          <td>${esc(AUTO[c.automatable])}</td>
          <td>
            <span class="rb"><input type="radio" name="r-${esc(c.id)}" id="p-${esc(c.id)}"><label for="p-${esc(c.id)}">Pass</label></span>
            <span class="rb"><input type="radio" name="r-${esc(c.id)}" id="f-${esc(c.id)}"><label for="f-${esc(c.id)}">Fail</label></span>
            <span class="rb"><input type="radio" name="r-${esc(c.id)}" id="n-${esc(c.id)}"><label for="n-${esc(c.id)}">N/A</label></span>
          </td>
          <td><input type="text" size="24" aria-label="Evidence or reason for ${esc(c.id)} ${esc(c.title)}"></td>
        </tr>`).join('\n')}`;
}).join('\n');

const main = `      <h1>Audit record</h1>
      <p class="sc-header__summary">WCAG-EM Step 4. One of these per page in your sample. Record an
         outcome for every criterion in scope — and when you record "not applicable", write down
         <em>why</em>, because an unexplained N/A is indistinguishable from a criterion you forgot.</p>

      <div class="callout callout--note no-print">
        <p class="callout__title"><span class="glyph" aria-hidden="true">&#9432;</span> Reading the "auto" column</p>
        <p>It tells you which criteria a scanner might help with. Of the ${ACTIVE.length} criteria,
           <strong>${ACTIVE.filter((c) => c.automatable === 'no').length} are marked "manual only"</strong> —
           no automated rule exists for them at all. Those rows are the ones a rushed audit skips,
           and they are where the barriers usually are.</p>
      </div>

      <form>
        <h2>Page under evaluation</h2>
        <div class="field"><label for="a-page">Page name</label><input type="text" id="a-page" size="35"></div>
        <div class="field"><label for="a-url">URL</label><input type="text" id="a-url" size="50"></div>
        <div class="field"><label for="a-date">Date evaluated</label><input type="text" id="a-date" size="20"></div>
        <div class="field"><label for="a-by">Evaluated by</label><input type="text" id="a-by" size="30"></div>
        <div class="field"><label for="a-env">Browser, assistive technology and tools used</label>
          <textarea id="a-env" rows="2" cols="60"></textarea></div>

        <h2>Results by criterion</h2>
        <p class="prose">Target: WCAG 2.2 Level AA means the ${LEVEL_COUNTS.A} Level&nbsp;A criteria
           <em>plus</em> the ${LEVEL_COUNTS.AA} Level&nbsp;AA criteria —
           ${LEVEL_COUNTS.A + LEVEL_COUNTS.AA} rows. AAA rows are included for completeness; skip
           them unless they are in your scope.</p>

        <div class="table-scroll" tabindex="0" role="region" aria-labelledby="rec-cap">
          <table class="audit-table">
            <caption id="rec-cap">Conformance record for this page — all ${ACTIVE.length} WCAG 2.2 success criteria</caption>
            <thead>
              <tr>
                <th scope="col">SC</th><th scope="col">Title</th><th scope="col">Level</th>
                <th scope="col">Testable by</th><th scope="col">Result</th><th scope="col">Evidence / reason</th>
              </tr>
            </thead>
            <tbody>
${rows}
            </tbody>
          </table>
        </div>
      </form>

      <p class="no-print"><button type="button" class="button" onclick="window.print()">Print this record</button></p>`;

const html = page({
  title: 'Audit record — WCAG 2.2 Demo Suite',
  description: `A per-page conformance record covering all ${ACTIVE.length} WCAG 2.2 success criteria, for WCAG-EM Step 4.`,
  depth: 2,
  navKey: 'evaluation',
  breadcrumb: [
    { label: 'Home', href: 'index.html' },
    { label: 'Evaluation (WCAG-EM)', href: 'evaluation/index.html' },
    { label: 'Audit record' },
  ],
  main,
  headExtra: `  <style>
    .audit-table th, .audit-table td { padding: .35rem .5rem; font-size: .9375rem; }
    .audit-table .principle-row th { background: var(--surface); font-size: 1rem; }
    .rb { display: inline-flex; align-items: center; gap: .2rem; margin-right: .5rem; white-space: nowrap; }
    .rb input { width: 20px; height: 20px; min-height: 20px; }
    .rb label { font-weight: 400; margin: 0; font-size: .875rem; }
    .audit-table input[type="text"] { min-height: 32px; padding: .2rem .35rem; }
  </style>
`,
});

mkdirSync(dirname(join(ROOT, 'evaluation/templates/audit-record.html')), { recursive: true });
writeFileSync(join(ROOT, 'evaluation/templates/audit-record.html'), html);
console.log(`  Audit record: evaluation/templates/audit-record.html (${ACTIVE.length} criteria)`);
