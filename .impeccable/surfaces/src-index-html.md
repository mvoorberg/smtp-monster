---
version: 1
slug: "src-index-html"
primary_target: "src/index.html"
related_targets: []
---

# smtpmonster.com landing page

Mode: Persuade. Audience: developers configuring SMTP for dev/staging. Action: sign up with an email address (signup.js, working form in the first viewport). Proof: the SMTP session itself, and the looped-back message. Constraints: no invented claims; keep the teal horned monster as mascot; LogMonster link and tie-ins; plain static HTML/CSS.

User steer (2026-11-24): professional, not indie-dev; expand How and Why for developers; lean into LogMonster's added features.

## Direction contract

THESIS: Prove it the way engineers trust: the page's hero is a real SMTP session where every RCPT TO is held and the message lands in one inbox, yours. Refuses the category's split hero of headline + product screenshot + logo strip.

OWN-WORLD: Infrastructure documentation. Off-white paper ground (#f7f7f4), ink near-black, slate secondary text, one deep green signal colour for "held / looped back", a muted red strike for real recipients that never receive mail. One-pixel rules, square corners, monospace for every protocol fact, a precise grotesk for prose. The teal monster appears as a small, confident mark (nav, favicon, close), never as a cartoon hero.

STORY: Visitor understands "hosted SMTP that never delivers, sends everything back to me", believes it because the transcript and the looped message show it, sees how (4 steps, real host/port) and why (dev scenarios), learns LogMonster adds a trap viewer, tests and forwarding, then signs up.

FIRST VIEWPORT: Nav (mark + wordmark, links, Get credentials). Left 5/12: headline at ~64px, one paragraph, working email form, note. Right 7/12: the transcript panel, lines typing in once, two RCPT TO lines struck and tagged HELD, closing "Delivered to 1 inbox: yours." Form visible above the fold at 1440x900 and on mobile.

FORM: Grounded direction "The Transcript", chosen from the safer re-roll (position 1 of 3). seed:cbf1ba3089c826e8. Signature interaction: the transcript plays once on load (reduced motion shows it complete) and the hero email field writes the typed address into the transcript's loop-back line live. Motion grammar: line-by-line reveal, no bounces.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
