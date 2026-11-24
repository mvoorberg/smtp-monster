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

    var sent = document.getElementById("signup-sent");
    var sentEmail = document.getElementById("signup-sent-email");

    /** Swap the form for the "check your inbox" panel, or back again. */
    function showSent(email) {
      var done = !!email;
      form.hidden = done;
      if (note) note.hidden = done;
      sent.hidden = !done;
      if (done) {
        sentEmail.textContent = email;
        sent.focus();
      } else {
        input.focus();
      }
    }

    document.getElementById("signup-again").addEventListener("click", function () {
      showSent("");
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
      button.disabled = true;
      button.textContent = "Sending…";

      var email = input.value.trim();
      post("/fx/smtpmonster/signup", { email: email })
        .then(function () {
          setStatus("");
          form.reset();
          showSent(email);
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
