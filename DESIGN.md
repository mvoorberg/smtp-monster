---
name: SMTPMonster
description: Hosted SMTP for dev and staging that loops every message back to you, documented like infrastructure.
colors:
  paper: "#f6f6f2"
  paper-2: "#eeeee8"
  card: "#ffffff"
  ink: "#15171c"
  ink-2: "#2a2d35"
  slate: "#555b67"
  rule: "#d9dad3"
  rule-strong: "#b9bbb2"
  teal: "#0c766f"
  teal-tint: "#e3f0ed"
  strike: "#b23a30"
  on-ink: "#ecece6"
  on-ink-2: "#a9adb6"
  signal-on-ink: "#8fd3c4"
  ink-rule: "#2c3038"
  ink-rule-strong: "#3a3e47"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(40px, 5.2vw, 68px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 44px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
    fontFeature: "liga 0, calt 0"
  label:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  full: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  section: "clamp(72px, 11vw, 144px)"
  column-gap: "clamp(40px, 6vw, 96px)"
  row: "40px"
  inset: "20px"
  container: "1296px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.teal}"
  button-on-ink:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "50px"
  button-on-ink-hover:
    backgroundColor: "{colors.signal-on-ink}"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.none}"
    padding: "9px 16px"
  input-signup:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "17px 18px"
  panel-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "18px 20px"
  data-table:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  notice-held:
    backgroundColor: "{colors.teal-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
---

# Design System: SMTPMonster

## Overview

**Creative North Star: "The Transcript"**

SMTPMonster looks like the documentation of a piece of infrastructure, not the homepage of a side project. The ground is off-white paper, the text is near-black ink, and the proof is the protocol itself: SMTP sessions, credential tables, `.env` blocks and inbox rows set in monospace, presented as facts rather than illustrations. Prose sits beside them in a precise grotesk, tightly tracked at display sizes, plain at reading sizes.

The world is flat, square and ruled. Structure comes from one-pixel rules, alternating paper tones and full-bleed ink bands, never from cards with rounded corners or soft drop shadows. Colour carries meaning, not decoration: one teal signal for "held, looped back, yours", one muted red strike for recipients who never get the mail. The horned teal monster is the mark (nav, favicon, close, the sender avatar on a looped message) and stays small and confident; it is never blown up into a hero illustration.

Motion is spare and grammatical: protocol lines reveal once, line by line, on an expo-out ease, and colour changes on hover in 0.2s. Nothing bounces, nothing loops.

**Key Characteristics:**
- Paper ground, ink text, slate secondary text; colour reserved for meaning.
- Every protocol fact (host, port, command, header, env var) is monospace; everything else is the grotesk.
- Square corners everywhere; the only circle is the mascot avatar.
- One-pixel rules divide content; an ink rule closes each section head.
- Full-bleed ink bands for terminal output and the LogMonster section.
- A recurring 5:6 two-column split, collapsing to one column at 960px.

## Colors

A documentation palette: warm off-white paper and near-black ink, with a single teal signal and a single red strike that each mean one thing.

### Primary
- **Loopback Teal** (`teal`): the one signal colour. Means "held / looped back / yours": the focus ring, text selection, the input caret, step numbers, inline action links, notice key labels, and the hover state of every ink button. Its pale partner **Held Tint** (`teal-tint`) is the ground for the looped-back notice and the sign-up confirmation, always edged in teal or a teal-grey line.

### Secondary
- **Strike Red** (`strike`): reserved for real recipients that never receive mail and for errors. On paper it colours error text and its square bullet; inside the ink transcript it becomes a translucent row wash with a struck-through address and an outlined HELD flag.

### Neutral
- **Paper** (`paper`): page ground, and the translucent ground of the sticky nav.
- **Paper Shade** (`paper-2`): the alternating band (What arrives) and the mascot avatar disc.
- **Card White** (`card`): raised documents and data: the sign-up field, the mail mock, credential table, inbox list.
- **Ink** (`ink`): text, primary buttons, the closing rule of each section head, and full-bleed ink bands.
- **Ink Soft** (`ink-2`): body copy inside documents (mail body, confirmation text).
- **Slate** (`slate`): secondary prose, ledes, nav links, table headers, footer.
- **Rule** (`rule`) and **Rule Strong** (`rule-strong`): one-pixel dividers between rows; the stronger one outlines card-white objects.
- **On Ink** (`on-ink`) and **On Ink Muted** (`on-ink-2`): primary and secondary text on ink bands.
- **Signal on Ink** (`signal-on-ink`): teal translated for dark grounds: server responses in the transcript, keys in code blocks, the hover of the light button.
- **Ink Rule** (`ink-rule`) and **Ink Rule Strong** (`ink-rule-strong`): dividers on ink, inside the transcript and in the LogMonster list respectively.

### Named Rules
**The One Signal Rule.** Teal means held, looped back, or "act here". It is never a decorative fill, a section background, or a gradient.

**The Strike Is Not an Accent Rule.** Red appears only for undelivered recipients and errors. If nothing failed or was held, there is no red on the screen.

## Typography

**Display Font:** Schibsted Grotesk (with Segoe UI, system-ui)
**Body Font:** Schibsted Grotesk
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Cascadia Mono, Consolas)

**Character:** A precise, slightly newsy grotesk set tight at display sizes, paired with a clean engineering mono for anything a developer would copy. The pairing reads as a well-made spec sheet.

### Hierarchy
- **Display** (700, clamp 40 to 68px, 1.02, -0.038em): the single hero headline; balanced wrapping. 36px on phones.
- **Headline** (700, clamp 30 to 44px, 1.08, -0.03em): section headings; balanced wrapping.
- **Title** (650, 22px, 1.3, -0.02em): step titles, reason terms, mail subject (600). 17px/600 for list titles on ink.
- **Body** (400, 17px, 1.6): prose, 16px on phones. Measure capped at 32 to 36em. Ledes and section-head intros step up to 18 to 19px in slate.
- **Body Small** (400, 15px): nav, document body, LogMonster detail copy; 14px for notes, meta and footer.
- **Mono** (400, 14px, 1.8, ligatures off): transcripts, code, credential values, notice field lists; 12.5px on phones. Step numbers use mono 500 in teal.
- **Label** (600, 11px, 0.08em, uppercase): the status flag only (HELD), outlined in currentColor.

### Named Rules
**The Protocol Is Mono Rule.** Hosts, ports, commands, headers, addresses in a session and env vars are set in the mono with ligatures off. Prose about them stays in the grotesk.

## Layout

A 1296px container with a fluid gutter (`spacing.gutter`). Sections breathe on a fluid vertical rhythm (`spacing.section`). The recurring composition is a 5:6 two-column split (copy left, evidence right) with a fluid column gap (`spacing.column-gap`): hero, What arrives, section heads, LogMonster, and the rows inside it. Steps use a three-track grid: a 56px number gutter, 5fr copy, 6fr evidence, with 40px row padding between ruled rows. The Why section is a ruled two-column definition grid with a one-pixel vertical rule between columns.

Responsive: at 960px every split collapses to one column, the step grid becomes a 32px number track plus content, and nav links hide behind the persistent CTA. At 640px the transcript bleeds to the screen edge, reasons stack, mono drops to 12.5px, and tables tighten. Below 360px the sign-up field stacks above its button.

## Elevation & Depth

Flat by default. Depth comes from tone (paper, paper shade, card white, ink) and one-pixel rules, not shadows. Exactly one object floats: the looped-back mail mock, because it represents a message lifted out of an inbox. The sticky nav uses a translucent paper ground with backdrop blur rather than a shadow.

### Shadow Vocabulary
- **Lifted Document** (`box-shadow: 0 24px 48px -24px rgba(21, 23, 28, 0.25)`): only for a document shown as an artefact (the mail mock).
- **Focus Halo** (`box-shadow: 0 0 0 3px var(--teal-tint), 0 0 0 4px var(--teal)`): focus-within on the composite sign-up field. Other focus uses a 2px teal outline offset 3px.

### Named Rules
**The Ruled, Not Raised Rule.** Separate content with a one-pixel rule or a tone change. A shadow is reserved for an object that is itself a document.

## Shapes

Square corners throughout (`rounded.none`): buttons, fields, panels, tables, notices, flags. The single exception is the mascot avatar disc (`rounded.full`). Borders are always one pixel: `rule` between rows, `rule-strong` around card-white objects, `ink` under section heads and around the sign-up field, teal around held/confirmed states. Status shapes are square too: the error bullet is an 8px square, not a dot.

## Components

### Buttons
Blunt and square; ink buttons turn teal on hover.
- **Shape:** square (0 radius), no border.
- **Primary:** ink ground, white text, grotesk 600 16px, 54px tall with 28px side padding (the sign-up submit fills the field's height with 24px padding).
- **Hover / Focus:** background shifts to teal over 0.2s; focus is the global 2px teal outline. Disabled submit turns slate with a progress cursor.
- **On Ink:** white ground, ink text, 50px tall; hover to signal-on-ink.
- **Nav CTA:** the primary treatment at 15px with 9px 16px padding.
- **Text action:** teal 600 with an underline offset 0.22em (inline links, "Use a different address").

### Inputs / Fields
- **Style:** one composite bar: card-white field and ink submit joined inside a 1px ink border, square. 17px text, teal caret, placeholder a mid grey.
- **Focus:** the Focus Halo ring on the whole bar; the input itself drops its outline.
- **Error:** status line below turns strike red with an 8px square bullet. **Success:** the form is replaced by a teal-tint confirmation panel with a 1px teal border and a line-drawn envelope icon in teal.

### Cards / Containers (documents)
- **Corner Style:** square.
- **Background:** card white on paper.
- **Shadow Strategy:** none, except the Lifted Document mail mock.
- **Border:** 1px rule-strong outline; internal rows divided by 1px rule.
- **Internal Padding:** 10 to 16px for data rows, 22 to 28px for the mail document.

### Navigation
Sticky, 68px, translucent paper with blur and a bottom rule. Mark (36px monster) and wordmark (700, 19px, -0.02em) left; slate 15px links that darken to ink on hover; ink CTA at the far right. Below 960px only the mark and CTA remain. The mark tilts (-8deg, 1.06 scale) on hover on the expo-out ease.

### The Transcript (signature)
A full-ink panel of numbered-by-direction protocol lines: client lines prefixed `>`, server lines `<` in signal-on-ink. A bar on top names the host:port and the example status; a grotesk footer states the outcome with the key word in white. Held recipients get a translucent strike-red row wash, a struck-through address and an outlined uppercase HELD flag; the loop-back line gets a translucent teal wash. Lines reveal once on load (0.5s expo-out, 120ms stagger, fade plus 4px rise plus 2px blur clearing); reduced motion and no-JS show it complete. The visitor's typed address writes into every example "you" live.

### Data blocks
Credential tables and inbox lists: card white, 1px rule-strong outline, rows ruled in `rule`, mono values with grotesk headers in slate. Code blocks: ink ground, on-ink mono, keys in signal-on-ink, placeholders in on-ink-muted.

### Ruled lists
Steps and reasons are open lists separated by 1px rules, never boxed. Steps carry a teal mono counter in their own column.

## Do's and Don'ts

### Do:
- **Do** put every protocol fact in the mono with ligatures off, on ink for live output and on card white for reference data.
- **Do** separate content with 1px rules and tone shifts (paper, paper shade, card, ink).
- **Do** keep teal for held, looped-back and actionable states, and strike red for undelivered recipients and errors.
- **Do** close each section head with a 1px ink rule under a 5:6 headline/intro split.
- **Do** keep the monster small: 28 to 40px in chrome, 72 to 96px at most as a closing mark.
- **Do** reveal protocol output once, line by line on the expo-out ease, and show it complete under reduced motion.

### Don't:
- **Don't** round corners on buttons, fields, panels or tables; the avatar disc is the only circle.
- **Don't** add drop shadows to cards or buttons; only a document shown as an artefact is lifted.
- **Don't** use teal or red as decorative fills, gradients or section backgrounds.
- **Don't** turn the monster into a large cartoon hero illustration.
- **Don't** add bounces, loops or attention-seeking motion.
