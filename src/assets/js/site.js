/* Page behaviour: the SMTP session plays once, the typed address flows into the examples, CTAs focus the form. */
(function () {
  "use strict";

  var reduce =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches || /[?&]still\b/.test(window.location.search);

  // Play the session once. Content is visible without JS; the class only opts into the animation.
  var session = document.querySelector(".session");
  if (session && !reduce) {
    document.documentElement.classList.add("js-anim");
    var items = session.querySelectorAll(".session-lines li, .session-foot");
    for (var i = 0; i < items.length; i++) items[i].style.setProperty("--i", i);
    requestAnimationFrame(function () {
      session.classList.add("is-playing");
    });
  }

  // Whatever address the visitor types becomes "you" across the page.
  var input = document.getElementById("signup-email");
  var targets = document.querySelectorAll("[data-you]");
  var fallback = targets.length ? targets[0].textContent : "you@company.com";
  if (input) {
    input.addEventListener("input", function () {
      var v = input.value.trim();
      var shown = v && v.length <= 64 ? v : fallback;
      for (var j = 0; j < targets.length; j++) targets[j].textContent = shown;
    });
  }

  // Secondary CTAs take you to the form and put the caret in it.
  var ctas = document.querySelectorAll("[data-focus-signup]");
  for (var k = 0; k < ctas.length; k++) {
    ctas[k].addEventListener("click", function (e) {
      if (!input || input.closest("[hidden]")) return;
      e.preventDefault();
      document.getElementById("get-started").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      setTimeout(function () {
        input.focus({ preventScroll: true });
      }, reduce ? 0 : 450);
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
