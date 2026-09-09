# WCAG 2.2 Demo Suite

A complete teaching resource for web accessibility. Every one of the **86 WCAG 2.2
success criteria** — Level A, AA and AAA — has a page you can break, a page you can test,
and a procedure for telling the difference. Plus a full **WCAG-EM** evaluation walkthrough
against a deliberately broken sample site.

Plain HTML, CSS and vanilla JavaScript. No framework, no bundler. Every page opens
directly from the filesystem, so students can read the real markup with View Source.

---

## Quick start

```bash
npm install          # dev tooling only — nothing is needed to READ the site
npm run dev          # serve at http://localhost:3000
```

Or just open `index.html` in a browser. The only things that need a server are the
WebVTT caption tracks, which browsers block under `file://`.

---

## What is here

| Section | What it is |
|---|---|
| [`index.html`](index.html) | Course home and curriculum map |
| [`demos/`](demos/index.html) | All 86 criteria, each with `fail.html`, `pass.html`, an explanation and teaching notes |
| [`testing/`](testing/index.html) | Automated, keyboard, screen reader, visual and cognitive testing guides |
| [`evaluation/`](evaluation/index.html) | The five steps of WCAG-EM, the sample site to audit, and report templates |
| [`exercises/`](exercises/index.html) | Ten graded exercises, from alt text to a full audit |

### Anatomy of a criterion

```
demos/1.1.1-non-text-content/
├── index.html     generated — explanation, live examples, code, how to test
├── fail.html      hand-written — a page that breaks this criterion
├── pass.html      hand-written — the same page, fixed
├── explain.html   optional — extra teaching content merged into index.html
└── notes.md       instructor talk track
```

`index.html` is regenerated from `data/criteria/*.json` and **quotes** `fail.html` and
`pass.html` directly, so the code shown can never drift from the code that runs.

---

## The test suite is part of the lesson

```bash
npm run test          # everything below, in order
npm run test:data     # dataset integrity: 31 A + 24 AA + 31 AAA = 86
npm run test:contrast # every design token pair, both themes, at its threshold
npm run test:links    # ~3,000 internal references across ~300 pages
npm run test:reflow   # renders every page at 320x256, with and without the
                      #   WCAG text-spacing overrides (1.4.10 and 1.4.12)
npm run test:a11y     # axe, with the assertions below
```

`test:reflow` earned its keep on the first run: it found that every demo page scrolled
horizontally at 320 px, because grid items default to `min-width: auto` and the code
blocks inside them refused to shrink. No accessibility scanner detects that. The fix and
the explanation are on the [1.4.10 Reflow](demos/1.4.10-reflow/index.html) page.

`npm run test:a11y` asserts three things for every criterion:

- `pass.html` produces **zero** violations.
- `fail.html` produces **at least one** violation matching a rule mapped to that
  criterion. *A demo that quietly stops failing is reported as loudly as a broken fix.*
- Where the failure is invisible to a scanner, the run says so — and the criterion's page
  explains why.

It ends with the coverage map:

```
Criteria in WCAG 2.2                         86
With at least one mapped axe rule            31  (36%)
No automated test exists at all              55  (64%)

Demos where axe found the failure            11
Demos axe flagged only as "needs review"      3
Demos whose failure axe cannot see at all    72
```

That output is the most honest lesson in the suite. Automated testing is a smoke alarm,
not a fire inspection.

---

## Teaching sequence

1. **Foundations** — [the criteria catalogue](demos/index.html), filtered to Level A.
   Start with 1.1.1, 1.3.1, 2.1.1, 2.4.3, 4.1.2, 3.3.1, 3.3.2 — they carry most real-world
   failures.
2. **Testing** — [keyboard](testing/keyboard.html) first (five minutes, no software), then
   [screen readers](testing/screen-readers.html), then
   [what automation can and cannot see](testing/automated.html).
3. **Practice** — [exercises 1–8](exercises/index.html). Exercise 7 is the important one:
   it asks students to solve the same problem with a native `<select>` and then with ARIA.
4. **Level AA** — the working standard, and what legislation actually requires.
5. **Evaluation** — [WCAG-EM](evaluation/index.html), then exercises 9 and 10: audit the
   sample site and write the report.
6. **Level AAA** — last, framed as judgement rather than a checklist. Some AAA criteria
   are cheap and worth adopting; others cannot be met for some content, and W3C says so.

---

## Instructor materials

Present in the repository, not linked from student navigation:

- `evaluation/sample-site/INSTRUCTOR-ANSWER-KEY.md` — all 56 seeded defects with
  criterion, severity and fix, plus marking guidance
- `exercises/SOLUTIONS.md` — worked solutions and discussion points
- `demos/*/notes.md` — per-criterion talk tracks

The sample site is rigged so that **sampling technique changes the result**. Its three most
severe defects are reachable only by working through an essential task, so a student who
audits "the main pages" reports a site in far better shape than it is. That is the lesson
of WCAG-EM Step 3, and it is worth letting them discover it before you explain it.

---

## Deliberately broken files

Do not copy from these. The code to copy lives in each criterion's `pass.html`.

- every `demos/*/fail.html`
- everything under `evaluation/sample-site/`
- every `exercises/ex-*/index.html`

---

## Regenerating

```bash
npm run build        # regenerate all derived pages
python3 tools/make-media.py   # regenerate the video, audio and caption assets
```

`build` never overwrites hand-authored content — `fail.html`, `pass.html`, `notes.md`,
`explain.html` and the `content/` fragments are safe. Everything else is derived from
`data/criteria/*.json` and regenerated in place.

The media assets are synthesised locally with Pillow and ffmpeg, so the repository ships
no third-party media and no licensing questions.

---

## A note on the site itself

This suite holds itself to the standard it teaches. Its own pages target Level AA
throughout and Level AAA wherever that does not conflict with a demonstration — including
7:1 contrast on every design token, in both light and dark themes, verified by
`npm run test:contrast`.

If you find an accessibility failure in the site's own chrome, that is a bug. It is also a
good exercise.

---

## Reference

- [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/)
- [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
- [WCAG-EM 1.0](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)

Licensed CC BY 4.0. WCAG itself is © W3C.
