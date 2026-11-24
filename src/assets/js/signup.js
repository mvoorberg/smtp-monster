/*
 * Self-serve sign-up. The form asks the LogMonster API to create a credential and email it to the
 * address; receiving that email is the verification.
 *
 * The API lives at https://api.logmonster.net. For local testing, add ?api=http://localhost:8090
 * to the page URL.
 */
(function () {
  "use strict";

  var DEFAULT_API = "https://api.logmonster.net";

  function apiBase() {
    var override = new URLSearchParams(window.location.search).get("api");
    var base = override || document.documentElement.getAttribute("data-api") || DEFAULT_API;
    return base.replace(/\/+$/, "") + "/api/v1";
  }

  /** POST JSON; resolves to the body, rejects with a message fit to show. */
  function post(path, body) {
    return fetch(apiBase() + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(
      function (res) {
        return res
          .json()
          .catch(function () {
            return {};
          })
          .then(function (data) {
            if (res.ok) return data;
            throw new Error(data.error || "Something went wrong. Please try again later.");
          });
      },
      function () {
        throw new Error("We couldn't reach SMTPMonster. Check your connection and try again.");
      }
    );
  }

  var form = document.getElementById("signup-form");
  if (form) {
    var input = document.getElementById("signup-email");
    var button = form.querySelector("button");
    var status = document.getElementById("signup-status");
    var note = document.querySelector(".signup-note");
    var label = button.textContent;

    /** The status takes the note's place, so the hero doesn't grow into the wave below it. */
    function setStatus(text, isError) {
      status.textContent = text;
      status.classList.toggle("is-error", !!isError);
      status.hidden = !text;
      if (note) note.hidden = !!text;
    }
    setStatus("");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
      button.disabled = true;
      button.textContent = "Sending…";

      post("/fx/smtpmonster/signup", { email: input.value.trim() })
        .then(function (data) {
          setStatus(data.message);
          form.reset();
        })
        .catch(function (err) {
          setStatus(err.message, true);
        })
        .then(function () {
          button.disabled = false;
          button.textContent = label;
        });
    });
  }
})();
