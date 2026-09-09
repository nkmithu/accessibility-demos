// Generates index.html - the course home page and curriculum map.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, ACTIVE, ALL, LEVEL_COUNTS } from './load-criteria.mjs';
import { page } from './layout.mjs';

const manualOnly = ACTIVE.filter((c) => c.automatable === 'no').length;
const partly = ACTIVE.filter((c) => c.automatable === 'partial').length;
const newIn22 = ACTIVE.filter((c) => c.version === '2.2').length;

const main = `      <h1>Web accessibility, demonstrated</h1>
      <p class="sc-header__summary">A complete teaching suite for WCAG 2.2. Every one of the
         ${ACTIVE.length} success criteria — Level A, AA and AAA — has a page you can break,
         a page you can test, and a procedure for telling the difference.</p>

      <ul class="stat-row">
        <li class="stat"><span class="stat__value">${ACTIVE.length}</span><span class="stat__label">Success criteria covered</span></li>
        <li class="stat"><span class="stat__value">${LEVEL_COUNTS.A} / ${LEVEL_COUNTS.AA} / ${LEVEL_COUNTS.AAA}</span><span class="stat__label">Level A / AA / AAA</span></li>
        <li class="stat"><span class="stat__value">${newIn22}</span><span class="stat__label">New in WCAG 2.2</span></li>
        <li class="stat"><span class="stat__value">${manualOnly}</span><span class="stat__label">No automated test exists</span></li>
      </ul>

      <section aria-labelledby="how-h">
        <h2 id="how-h">How this suite is built</h2>
        <p class="prose">Reading a guideline rarely teaches you to spot a violation. So every criterion
           here comes as a matched pair: a <strong>failing page</strong> and a <strong>passing page</strong>
           that differ only in the thing the criterion is about. You open both, test both, and feel the
           difference with a keyboard and a screen reader before you read a word of explanation.</p>

        <div class="callout callout--note">
          <p class="callout__title"><span class="glyph" aria-hidden="true">&#9432;</span> The test suite is part of the lesson</p>
          <p>Running <code>npm run test:a11y</code> asserts that each <code>pass.html</code> is clean
             <em>and</em> that each <code>fail.html</code> actually breaks the rule it claims to break.
             Where no scanner can detect the criterion at all, the run says so out loud. Of the
             ${ACTIVE.length} criteria, ${partly} are partly detectable by automation and
             <strong>${manualOnly} cannot be detected by any tool</strong>. That output is the most
             honest lesson in the whole suite: automation is a smoke alarm, not a fire inspection.</p>
        </div>
      </section>

      <section aria-labelledby="start-h">
        <h2 id="start-h">Where to start</h2>
        <ul class="card-grid">
          <li class="card">
            <h3>1. Browse the criteria</h3>
            <p>All ${ACTIVE.length} criteria, filterable by level, by WCAG version, and by whether a
               machine can test them.</p>
            <p><a class="button" href="demos/index.html">Open the criteria catalogue</a></p>
          </li>
          <li class="card">
            <h3>2. Learn to test</h3>
            <p>Keyboard scripts, screen reader cheat sheets, contrast and reflow procedures, and what
               automated tools genuinely catch.</p>
            <p><a class="button" href="testing/index.html">Open the testing guides</a></p>
          </li>
          <li class="card">
            <h3>3. Run a real evaluation</h3>
            <p>The five steps of WCAG-EM, applied to a deliberately broken sample site, ending in a
               report you write yourself.</p>
            <p><a class="button" href="evaluation/index.html">Start the WCAG-EM walkthrough</a></p>
          </li>
          <li class="card">
            <h3>4. Fix broken pages</h3>
            <p>Graded exercises from a single mislabelled image up to auditing and reporting on a
               whole site section.</p>
            <p><a class="button" href="exercises/index.html">Open the exercises</a></p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="levels-h">
        <h2 id="levels-h">What the conformance levels mean</h2>
        <div class="table-scroll" tabindex="0" role="region" aria-labelledby="levels-caption">
          <table>
            <caption id="levels-caption">WCAG 2.2 conformance levels and what claiming them requires</caption>
            <thead>
              <tr>
                <th scope="col">Level</th>
                <th scope="col">Criteria in this level</th>
                <th scope="col">Total needed to claim it</th>
                <th scope="col">What it means in practice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><span class="level level--A">Level A</span></th>
                <td>${LEVEL_COUNTS.A}</td>
                <td>${LEVEL_COUNTS.A}</td>
                <td>The floor. Failing any of these blocks some group of users from the content entirely.</td>
              </tr>
              <tr>
                <th scope="row"><span class="level level--AA">Level AA</span></th>
                <td>${LEVEL_COUNTS.AA}</td>
                <td>${LEVEL_COUNTS.A + LEVEL_COUNTS.AA}</td>
                <td>The working standard. This is what most legislation, procurement rules and
                    accessibility statements actually require.</td>
              </tr>
              <tr>
                <th scope="row"><span class="level level--AAA">Level AAA</span></th>
                <td>${LEVEL_COUNTS.AAA}</td>
                <td>${ACTIVE.length}</td>
                <td>The ceiling. W3C explicitly does not recommend AAA as a blanket policy for a whole
                    site, because some content cannot satisfy it. Apply it selectively.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="prose">Conformance is cumulative and unforgiving: a single failed Level&nbsp;A criterion
           on one page means that page does not conform at any level. There is no partial credit and no
           percentage score, which is why <a href="evaluation/index.html">how you choose the pages you
           audit</a> matters so much.</p>
      </section>

      <section aria-labelledby="warn-h">
        <h2 id="warn-h">A warning about the broken pages</h2>
        <div class="callout callout--fail">
          <p class="callout__title"><span class="glyph" aria-hidden="true">&#10007;</span> Do not copy from fail.html</p>
          <p>Every file named <code>fail.html</code>, and the whole
             <a href="evaluation/sample-site/index.html">sample site</a> used in the evaluation
             walkthrough, contains <strong>deliberate accessibility failures</strong>. They exist to be
             found and fixed. The code you should copy lives in <code>pass.html</code>.</p>
        </div>
      </section>

      <section aria-labelledby="about-h">
        <h2 id="about-h">About this build</h2>
        <p class="prose">Plain HTML, CSS and vanilla JavaScript. No framework, no bundler, no build
           output to install — every page opens directly from the filesystem, so you can read the real
           markup with View Source and copy it straight into your own work. Node is used only for the
           development tooling: the scanners, the link checker and the page generators.</p>
        <p class="prose">The site holds itself to the standard it teaches. Its own pages target
           Level&nbsp;AA throughout, and Level&nbsp;AAA wherever that does not conflict with a
           demonstration. If you find a failure in the chrome, that is a bug — and a good exercise.</p>
      </section>
`;

writeFileSync(join(ROOT, 'index.html'), page({
  title: 'WCAG 2.2 Demo Suite — web accessibility, demonstrated',
  description: `A complete teaching suite for WCAG 2.2: a failing and a passing example for all ${ACTIVE.length} success criteria at levels A, AA and AAA, plus a full WCAG-EM evaluation walkthrough.`,
  depth: 0,
  navKey: 'home',
  breadcrumb: [],
  main,
}));

console.log(`  Home: index.html`);
