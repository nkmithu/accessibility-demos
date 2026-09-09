/*
 * Catalogue filtering — progressive enhancement.
 *
 * The full criterion list is in the HTML already. This script only hides and
 * shows what is already there, so the page works with scripting disabled.
 * Accessibility points worth noting for students:
 *   - The filter form is hidden in the markup and revealed here, so it never
 *     appears as a dead control when scripting is off.
 *   - Hidden cards use the `hidden` attribute, which removes them from the
 *     accessibility tree as well as the display — not `visibility` or opacity.
 *   - The result count lives in a role="status" live region (4.1.3), so the
 *     outcome is announced without stealing focus from the control being used.
 *   - Announcements are debounced: typing in the search box must not fire an
 *     announcement on every keystroke, which would flood a screen reader.
 */
(function () {
  'use strict';

  var form = document.getElementById('filters');
  var status = document.getElementById('filter-status');
  if (!form || !status) return;

  form.hidden = false;

  var cards = Array.prototype.slice.call(document.querySelectorAll('.sc-card'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('.principle-section'));
  var search = document.getElementById('f-search');
  var total = cards.length;
  var announceTimer = null;

  function checkedValues(prefix) {
    return Array.prototype.slice
      .call(form.querySelectorAll('input[type="checkbox"][id^="' + prefix + '"]'))
      .filter(function (cb) { return cb.checked; })
      .map(function (cb) { return cb.value; });
  }

  function apply() {
    var levels = checkedValues('f-level-');
    var autos = checkedValues('f-auto-');
    var versions = checkedValues('f-ver-');
    var q = (search.value || '').trim().toLowerCase();
    var shown = 0;

    cards.forEach(function (card) {
      var match =
        levels.indexOf(card.dataset.level) !== -1 &&
        autos.indexOf(card.dataset.automatable) !== -1 &&
        versions.indexOf(card.dataset.version) !== -1 &&
        (q === '' || card.dataset.search.indexOf(q) !== -1);
      card.hidden = !match;
      if (match) shown++;
    });

    // Hide a principle heading entirely when nothing under it survives the filter,
    // so the outline a screen reader user navigates matches what is visible.
    sections.forEach(function (section) {
      var any = section.querySelector('.sc-card:not([hidden])');
      section.hidden = !any;
      Array.prototype.slice.call(section.querySelectorAll('.guideline-heading')).forEach(function (h) {
        var list = h.nextElementSibling;
        var visible = list && list.querySelector('.sc-card:not([hidden])');
        h.hidden = !visible;
        if (list) list.hidden = !visible;
      });
    });

    clearTimeout(announceTimer);
    announceTimer = setTimeout(function () {
      status.textContent = shown === total
        ? 'Showing all ' + total + ' criteria.'
        : 'Showing ' + shown + ' of ' + total + ' criteria.';
    }, 400);
  }

  form.addEventListener('change', apply);
  search.addEventListener('input', apply);
  // Enter in the search field must not reload the page.
  form.addEventListener('submit', function (e) { e.preventDefault(); });
})();
