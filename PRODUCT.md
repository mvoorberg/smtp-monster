# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS, hand-written, no CSS framework (user decision, 2026-11-24). The existing `src/assets/js/signup.js` sign-up script stays and must keep working against its element ids.

## Users

Solo and indie developers setting up SMTP for an application's development or staging environment. They have real email addresses in their dev data (often a refreshed copy of production) and need to be certain nothing reaches a real recipient, while still seeing what the app sends.

## Product Purpose

SMTPMonster is a hosted SMTP server for non-production environments. An app sends mail through it using SMTPMonster credentials; instead of delivering, SMTPMonster prepends the original From, To, CC and BCC to the message body and sends the whole message back to the address that owns the credentials. Success: a developer signs up with an email address, receives credentials by email within a minute, pastes them into their app config, and never worries about leaked dev email again.

## Positioning

Unlike local catch-all tools (a fake SMTP server plus a web UI you have to run), SMTPMonster needs nothing installed: real SMTP credentials, and the caught mail lands in the inbox you already use, so you see it rendered by a real mail client.

## Operating Context

- Sign-up: email address only. `POST https://api.logmonster.net/api/v1/fx/smtpmonster/signup` emails the credentials; receiving that email is the verification. `?api=` overrides the API base for local testing.
- SMTP server: `smtp01.smtpmonster.com`, port 587; the credentials email describes security as SSL/TLS from the start (not STARTTLS).
- Usage: standard SMTP AUTH (PLAIN/LOGIN) with STARTTLS from any app or library (e.g. Nodemailer).
- Looped-back messages arrive from `loopback@smtpmonster.com` with a header block: "This message was originally intended for the recipient(s) below, but we've looped it back to you instead!"

## Capabilities and Constraints

- Free tier; no credit card.
- Attachments and higher rate limits are available on request via support@smtpmonster.com.
- Host and port are published on the site (from `TRAP_SERVER`/`TRAP_PORT` in log-monster `api-v2/src/services/smtp.ts`). The encryption mode is unresolved (the credentials email says SSL/TLS from the start, but 587 is conventionally STARTTLS), so the site defers to the credentials email. Rate limits and pricing are undecided: do not invent.
- Privacy policy, terms and refund policy pages do not exist yet (footer links were placeholders).

## Brand Commitments

- Name: SMTPMonster (one word, "SMTP" capitalised).
- Sister product: LogMonster (https://logmonster.net); the link must be kept.
- Voice: developer-to-developer and plain; a little playful in copy, but the site must read as professional infrastructure, not an indie side project (user, 2026-11-24: crafty/retro directions were "too indie-dev").
- Mascot: the teal, fuzzy, red-horned monster from the original favicon (`src/assets/img/favicon.ico`). Keep a variation of it for the favicon and in messaging; it explains the name.
- The old wordmark PNGs, illustrations and template look are not binding.

## LogMonster Tie-in

SMTPMonster runs on LogMonster (logmonster.net). A sign-up gets SMTPMonster credentials with no LogMonster account. Signing in to LogMonster with a Google account and choosing "Claim SMTPMonster credentials" under an App's Settings > Email Trap moves the credential into that App, where you can see the email it catches in the trap viewer, run end-to-end tests against it, change the password, and forward to a verified address. LogMonster itself is a hosted log collector: apps send log lines to its API, and FATAL lines trigger batched notification emails. The site may promote these; it must not invent LogMonster features or pricing beyond this.

## Evidence on Hand

- `src/assets/img/hero/hero-img.png`: a real Gmail screenshot of a looped-back message (not binding, usable as reference for the mechanism).
- No testimonials, customer counts, logos, or benchmarks exist. Do not fabricate any.

## Product Principles

1. Zero setup is the product: every surface should make "sign up, paste credentials, done" feel this short.
2. Show the mechanism plainly; developers trust what they can see working.
3. Never imply delivery, scale, or customers we can't back up.
4. Your inbox is the UI: no dashboards to learn.
