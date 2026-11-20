// Subtle reveal-on-scroll; content is fully visible if JS or IntersectionObserver is unavailable.
(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.timeline > li, .card, .skills > div, .edu, .stats, .about-body');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  targets.forEach(function (t) { t.classList.add('reveal'); io.observe(t); });
})();
