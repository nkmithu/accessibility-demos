// Generates demos/index.html - the filterable catalogue of all 86 criteria.
//
// The criterion data is baked into the HTML rather than fetched: fetch() is
// blocked under file://, and a student must be able to open this page straight
// from disk. Filtering is progressive enhancement - with JavaScript off, every
// criterion is still listed, grouped and linked.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ALL, ACTIVE, ROOT, esc, LEVEL_COUNTS, PRINCIPLES } from './load-criteria.mjs';
import { page } from './layout.mjs';

const AUTOMATION_LABEL = {
  yes: 'automatable',
  partial: 'partly automatable',
  no: 'manual only',
};

function card(c) {
  return `          <li class="sc-card"
              data-level="${esc(c.level)}"
              data-principle="${esc(c.principle)}"
              data-automatable="${esc(c.automatable)}"
              data-version="${esc(c.version)}"
              data-search="${esc(`${c.id} ${c.title} ${c.tags.join(' ')} ${c.summary}`.toLowerCase())}">
            <h4 class="sc-card__title">
              <a href="${esc(c.dir)}/index.html"><span class="sc-card__num">${esc(c.id)}</span> ${esc(c.title)}</a>
            </h4>
            <p>${esc(c.summary)}</p>
            <p class="sc-card__meta">
              <span class="level level--${esc(c.level)}">Level ${esc(c.level)}</span>
              <span>${c.obsolete ? 'Removed in 2.2' : `WCAG ${esc(c.version)}`}</span>
              <span>${esc(AUTOMATION_LABEL[c.automatable])}</span>
            </p>
          </li>`;
}

const sections = PRINCIPLES.map((p) => {
  const inPrinciple = ALL.filter((c) => c.principle === p.principle);
  const guidelines = Object.entries(p.guidelines).map(([gid, gtitle]) => {
    const items = inPrinciple.filter((c) => c.guideline === gid);
    if (!items.length) return '';
    return `        <h3 class="guideline-heading" id="g-${esc(gid)}">${esc(gid)} ${esc(gtitle)}</h3>
        <ul class="sc-list">
${items.map(card).join('\n')}
        </ul>`;
  }).join('\n');

  return `      <section class="principle-section" aria-labelledby="p-${esc(p.principle)}" data-principle="${esc(p.principle)}">
        <h2 id="p-${esc(p.principle)}">Principle ${esc(p.principle)}: ${esc(p.principleTitle)}</h2>
        <p class="prose">${esc(p.principleIntent)}</p>
${guidelines}
      </section>`;
}).join('\n\n');

const main = `      <h1>All WCAG 2.2 success criteria</h1>
      <p class="prose">Every one of the ${ACTIVE.length} success criteria in WCAG 2.2, each with a
         failing example, a passing example, and a testing procedure. Filter the list below, or browse
         by principle and guideline.</p>

      <ul class="stat-row">
        <li class="stat"><span class="stat__value">${LEVEL_COUNTS.A}</span><span class="stat__label">Level A criteria</span></li>
        <li class="stat"><span class="stat__value">${LEVEL_COUNTS.AA}</span><span class="stat__label">Level AA criteria</span></li>
        <li class="stat"><span class="stat__value">${LEVEL_COUNTS.AAA}</span><span class="stat__label">Level AAA criteria</span></li>
        <li class="stat"><span class="stat__value">${ACTIVE.length}</span><span class="stat__label">Total in WCAG 2.2</span></li>
      </ul>

      <div class="callout callout--note">
        <p class="callout__title"><span class="glyph" aria-hidden="true">&#9432;</span> Conformance is cumulative</p>
        <p>A Level AA claim requires all ${LEVEL_COUNTS.A} Level&nbsp;A criteria <em>and</em> all
           ${LEVEL_COUNTS.AA} Level&nbsp;AA criteria — ${LEVEL_COUNTS.A + LEVEL_COUNTS.AA} in total.
           A Level AAA claim adds the remaining ${LEVEL_COUNTS.AAA}. Most legislation and procurement
           policy targets AA; W3C does not recommend AAA as a general policy for entire sites.</p>
      </div>

      <!-- Filtering is an enhancement. With scripting off this whole form is hidden
           and the full list below stays available. -->
      <form class="filters" id="filters" hidden>
        <h2 class="visually-hidden">Filter criteria</h2>
        <fieldset>
          <legend>Conformance level</legend>
          <div class="filters__options">
            <span class="filters__option"><input type="checkbox" id="f-level-A" value="A" checked><label for="f-level-A">Level A (${LEVEL_COUNTS.A})</label></span>
            <span class="filters__option"><input type="checkbox" id="f-level-AA" value="AA" checked><label for="f-level-AA">Level AA (${LEVEL_COUNTS.AA})</label></span>
            <span class="filters__option"><input type="checkbox" id="f-level-AAA" value="AAA" checked><label for="f-level-AAA">Level AAA (${LEVEL_COUNTS.AAA})</label></span>
          </div>
        </fieldset>
        <fieldset>
          <legend>Testable by automation</legend>
          <div class="filters__options">
            <span class="filters__option"><input type="checkbox" id="f-auto-partial" value="partial" checked><label for="f-auto-partial">Partly automatable</label></span>
            <span class="filters__option"><input type="checkbox" id="f-auto-no" value="no" checked><label for="f-auto-no">Manual only</label></span>
          </div>
        </fieldset>
        <fieldset>
          <legend>WCAG version that introduced it</legend>
          <div class="filters__options">
            <span class="filters__option"><input type="checkbox" id="f-ver-2.0" value="2.0" checked><label for="f-ver-2.0">2.0</label></span>
            <span class="filters__option"><input type="checkbox" id="f-ver-2.1" value="2.1" checked><label for="f-ver-2.1">2.1</label></span>
            <span class="filters__option"><input type="checkbox" id="f-ver-2.2" value="2.2" checked><label for="f-ver-2.2">2.2 (new)</label></span>
          </div>
        </fieldset>
        <div>
          <label for="f-search">Search by number, title or keyword</label><br>
          <input type="search" id="f-search" autocomplete="off" placeholder="e.g. contrast, focus, 1.4.3">
        </div>
      </form>

      <!-- 4.1.3 Status Messages: the count updates in a live region, so screen
           reader users hear the result of filtering without moving focus. -->
      <p class="filter-status" id="filter-status" role="status" aria-live="polite">
        Showing all ${ALL.length} criteria.
      </p>

${sections}
`;

const html = page({
  title: 'All success criteria — WCAG 2.2 Demo Suite',
  description: `Browse and filter all ${ACTIVE.length} WCAG 2.2 success criteria, each with a failing example, a passing example and a testing procedure.`,
  depth: 1,
  navKey: 'demos',
  breadcrumb: [{ label: 'Home', href: 'index.html' }, { label: 'Criteria' }],
  main,
  bodyEnd: '  <script src="../assets/js/catalogue-filter.js"></script>\n',
});

writeFileSync(join(ROOT, 'demos', 'index.html'), html);
console.log(`  Catalogue: demos/index.html (${ALL.length} entries listed).`);
