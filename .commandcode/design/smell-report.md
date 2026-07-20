# Smell Report — portfolio-cloudflare

**Mode:** `/design smell`
**Register:** Brand (personal portfolio / terminal-identity surface)
**Date:** 2026-09-11
**Scope:** all 8 pages, 12 components, `src/styles/global.css`, `src/data/projects.ts`, inline styles

---

## Verdict

**Score:** 4 / 10 — **STRONG**
**Verdict:** **Block** — one or more HIGH findings are standing.

The page is competent and consistent. It is also a third-party theme wearing a personal name. The CSS header states it is "Adapted from trading-dashboard.html", `package.json` pulls `@eliancodes/brutal-ui`, and the footer credits "Brutal theme for Astro". Everything below follows from that root: the palette, the type, the drop-shadow card, the centered stack, and the tile grid all arrived together, then got filled with the default portfolio sections.

The one thing that did not come from the template is the best thing on the site: the 404 terminal, the `.secret` classified page, and the backtick-summoned overlay. That conceit is specific to this person. The rest could belong to any developer portfolio.

---

## TL;DR

The template is the problem, not the pixels. Pastel-brutalist cards, Poppins, a centered one-column stack, and equal-weight project tiles form a generic "AI-made developer portfolio" silhouette, while the terminal interactivity proves the author can do better. Separately, six accessibility failures are HIGH on sight and must be fixed before any cosmetic pass: placeholder-only labels, a `<span>` close control, a stripped focus outline, self-starting full-screen motion with no `prefers-reduced-motion`, sub-4.5:1 text, and a modal with no dialog semantics.

**Primary recommendation:** `/design redesign`, keeping the terminal conceit and the pastel-brutalist material, dropping the template composition. Run `/design a11y` first — the HIGH findings are independent of the visual direction.

---

## Heuristic Scores

| # | Odor | Score | Key finding |
|---|---|---|---|
| 1 | Tech gradient | 1 | None found. No gradient fills on hero, CTAs, text, or cards. |
| 2 | Generic tech hue | 1 | Palette is pastel pink/green/purple/blue/yellow, not the blue-violet reflex. |
| 3 | Feature tile grid | 0 | `.project-grid`, `.dev-toolkit`, `.tech-grid`, `.contact-grid` — four uniform, equal-weight tile sets. |
| 4 | Accent rail | 1 | None found. |
| 5 | Unearned blur | 1 | None found. No frosted glass, no backdrop-filter. |
| 6 | Stat monument | 0 | Real GitHub contribution data, not a decorative number cluster. Counts as absent. |
| 7 | Icon topper | 0 | SVG above every project/contact card heading; emoji above every subpage heading. |
| 8 | Bounce everywhere | 0 | Compile overlay autoplays, typewriter autoplays, commit blocks pop with overshoot, idle timer mutates color. |
| 9 | Default type | 0 | Poppins 400–800 + system Courier, no type scale, sizes hardcoded 10–32px. |
| 10 | Center stack | 0 | Hero, tagline, curl box, toolkit, portrait, tech stack, ASCII art, footer all centered in one column. |

**Tells detected: 5 of 10 → 4/10 — STRONG.**

---

## Findings

Ordered by severity, then by reach and leverage. Escalation triggers first.

| # | Severity | Discipline | Location | Before | After | Why |
|---|---|---|---|---|---|---|
| 1 | HIGH | Accessibility | `src/pages/404.astro:49`, `src/components/generic/TerminalOverlay.astro:18` | `<input type="text" id="term-input" placeholder="Type a command..." autocomplete="off" />` | Add a real `<label for="term-input">Command</label>` (visually hidden is fine), keep the placeholder as an example only | Placeholder is doing the label's job. A screen reader announces an unnamed text field, and the name vanishes on focus. |
| 2 | HIGH | Accessibility | `src/components/generic/TerminalOverlay.astro:6` | `<span class="dot red" id="term-close-btn" style="cursor:pointer;"></span>` | `<button type="button" aria-label="Close terminal" class="dot red">`, moved out of the decorative dot row | Nothing here is focusable, nothing announces what it does, and the mouse has a close target the keyboard does not. |
| 3 | HIGH | Accessibility | `src/styles/global.css:580–589` | `.terminal-input-form input { border: none; outline: none; ... }` | Restore `:focus-visible { outline: 3px solid var(--black); outline-offset: 2px; }` or an inset ring on the yellow bar | Outline removed with no replacement. Tab lands in the field with nothing visible to show it landed. |
| 4 | HIGH | Motion | `src/components/generic/CompileScreen.astro:1–13,35+`, `src/pages/index.astro:176–199`, `src/layouts/Layout.astro:45–64`, `src/components/generic/PixelCommitGraph.astro` (`commitPopIn`) | Full-screen fake `cargo build` overlay auto-runs once per session and locks `body` scroll; typewriter types at 40ms/char; commit blocks scale to 1.3; idle timer repaints shadows at 60s and appends a toast at 120s | Wrap all of it in `@media (prefers-reduced-motion: no-preference)`; give the overlay a skip control and never lock scroll for reduced-motion users | Decorative and vestibular motion runs regardless of user preference. The compile screen is a self-starting, full-viewport, scroll-blocking animation. |
| 5 | HIGH | Accessibility | `src/styles/global.css:456,465,590`, `src/pages/index.astro:67`, `src/components/generic/PixelCommitGraph.astro` (`opacity: 0.35` headers) | 10–12px text at `opacity: 0.3–0.4` on white, plus `.footer`/`.contact-detail` at `0.6` and `.project-card p` at `0.75` | Replace opacity with a solid neutral token at 4.5:1 or better (`#52525b`, `#3f3f46`); keep decorative opacity off text | Text sitting on a background it does not have enough contrast against. The smallest type carries the worst ratios. |
| 6 | HIGH | Accessibility | `src/components/generic/TerminalOverlay.astro:2–18` | `<div id="term-overlay" style="display:none;">` as a plain div with a clickable backdrop; focus moves into the input but is neither trapped nor restored | `role="dialog" aria-modal="true"`, `inert` the page behind it, restore focus to the trigger on close | An overlay that behaves like a modal without a modal's contract. Background stays reachable by Tab. |
| 7 | MEDIUM | Layout | `src/styles/global.css:147,311,335`, `src/pages/index.astro:21–28,65–68` | `.hero { text-align: center }`, `.tech-grid { justify-content: center }`, `.curl-box { margin: 0 auto }`, portrait wrapped in `text-align:center` | Pick an asymmetric spine: a left-aligned identity column with a right rail for the terminal and commit graph | Nothing directs the gaze. The lead element is whichever block happens to be tallest. |
| 8 | MEDIUM | Layout | `src/pages/index.astro:42–61,73–99,108–114,152–172` | Four uniform grids where every tile has the same weight: projects, dev toolkit, tech stack, contact | Rank the projects (one lead project at full width, others smaller) and drop the tile grid where comparison, not decoration, is the job | Every tile equal means nothing is prioritized. A portfolio has one strongest project. |
| 9 | MEDIUM | Layout | `src/pages/index.astro:79–82,163–167`; emoji headings in `contact.astro:9,20,32`, `gpg.astro:30,40,51`, `guestbook.astro:8,43,69`, `now.astro:44`; `src/styles/global.css:228` (`.section-title::before` bar) | A rounded-square pixel icon above every card heading, an emoji before every subpage `<h3>`, and a 32×4px black bar before every section heading | Remove the ornamental icons or give the mark one consistent functional slot; delete the heading bar | Icon topper, repeated in three formats. Decoration filling a template slot. |
| 10 | MEDIUM | Type | `src/layouts/Layout.astro:19`, `src/styles/global.css:44–60`, inline sizes throughout | Poppins 400–800 from Google Fonts; `h1 32px`, `h2 20px`, `h3 16px`, body `15px` — steps of 12/4/1px — with per-component inline sizes from 10px to 24px | Build one token scale with a real ratio (1.25–1.33 minimum) and commit to a display face with a reason | The family came with the template. The 16/15px step is flat and per-component inline sizing has no system. |
| 11 | MEDIUM | Color | `src/styles/global.css:4–14`, `src/pages/secret.astro:10`, `src/layouts/Layout.astro:24–29` (inline checkerboard scrollbar), `src/data/projects.ts` (`color` field) | The palette is declared in `global.css`, re-declared in `secret.astro`, hardcoded in the inline scrollbar block, and assigned arbitrarily per project (`purple`, `green`, `orange`) | One token source; assign surface color by meaning or stop coloring cards by index | Three sources of truth, and the hue carries no information a user can act on. |
| 12 | MEDIUM | Writing | `src/pages/writing.astro:176–179` | `if (line.startsWith('```')) { const lang = line.slice(3).trim(); return lang ? null : null; }` — always returns `null` | Render fenced blocks as `<pre><code>`; both published posts ship bash and Rust snippets that currently disappear | Content present in the source is invisible to the reader. The Solana post's entire "Step 1" is missing. |
| 13 | LOW | Interaction | `src/pages/index.astro:36` | A 400-character inline `onclick` copying to the clipboard, then swapping `textContent` to `COPIED!` | Move to a script; announce the state change with `aria-live="polite"`, and reset on blur | The inline handler is unmaintainable and the success state is silent to assistive tech. |

**Consolidation note:** finding 4 covers every tracked motion odor. The auto compile overlay, typewriter, commit pop-in, idle color mutation, and toast share one root cause — decorative motion with no reduced-motion path — so they are one row, not five.

---

## Considered but Rejected

| Location | Candidate | Rejected because |
|---|---|---|
| `src/styles/global.css:79–81,252–254` | The drop-shadow "press" on card hover | Consistent, tactile, and cheap. It is a hover state with a real job, not bounce. |
| `src/pages/secret.astro` | The whole classified-document composition | A single-object page where symmetry is the right lane. Center is correct here. |
| `src/components/generic/PixelCommitGraph.astro` | Flag as a stat monument | It renders real contribution data with a real error state. Not decoration. |
| `src/pages/index.astro:117–147` | The ASCII-art / `screen-too-small` mobile swap | A deliberate joke that preserves the information elsewhere. Not a responsive amputation. |
| `src/styles/global.css:34–41` | White brutalist base instead of the dark-terminal developer cliché | The base material escapes the domain's first reflex. The problem is how it is composed, not that it is pastel. |

---

## Verification

**Checks run (static, on disk):**

- Read all 8 pages, 12 components, `global.css`, `Layout.astro`, `projects.ts`, `astro.config.mjs`, and public assets.
- `grep -rn "prefers-reduced-motion" src/` → no matches. Confirms finding 4.
- `grep -rn "focus-visible" src/` → no matches; `grep -rn "outline" src/` → a single `outline: none` at `global.css:583`. Confirms finding 3.
- `grep -n "opacity" src/` on the cited lines → confirmed the ratios quoted in finding 5.
- Line numbers re-checked against the working tree at report time, not from memory.

**Not verified (verification gaps, not findings):**

- Contrast ratios were computed from declared opacity and inherited color, not measured from a rendered page. No dev server was started for this report.
- The keyboard-only and screen-reader walkthroughs were reasoned from source, not executed. Findings 1, 2, 3, and 6 still stand on the markup alone.
- The `github-contributions-api.deno.dev` fetch and its failure state were not exercised at runtime.
- No mobile viewport was rendered; the responsive findings are source-derived.

---

## What's Working

- **The terminal conceit.** The 404 shell, `cat .secret` → `/secret`, and the backtick overlay form one coherent, discoverable-if-you-look identity. It is the only part of the site that could not belong to a different developer. Keep it and make it the spine.
- **The material is not the domain reflex.** A pastel-brutalist white surface sidesteps the dark-terminal developer template at the base layer.
- **Real data over decoration.** The commit graph fetches live GitHub contributions and ships an explicit failure state instead of a fake number.
- **Sound markup in most places.** Semantic `<header>`, `<nav>`, `<footer>`, real `<button>`/`<a>` in the nav and cards; the deep-linking problem is limited to the overlay.

---

## Next Modes

- `/design a11y` — **first.** Six HIGH findings are independent of the visual direction.
- `/design redesign` — primary. Change the lane, keep the terminal.
- `/design relayout` — if the lane stays: break the center stack and rank the projects.
- `/design typeset` — build a real scale and choose a face with a reason.
- `/design recolor` — consolidate the duplicated palette and stop coloring cards by index.
- `/design deslop` — remove the icon toppers, the heading bar, and the tile grids.

---

*Generated with CommandCode — 2026-09-11. This report contains findings only; no design files were changed.*
