# Checkup Report — portfolio-cloudflare

**Mode:** `/design checkup`
**Register:** Brand (personal portfolio)
**Date:** 2026-09-11
**Score:** 25 / 60 — **Critical vitals present, unsafe to ship as-is**

---

## Verdict

**Block.** Two vitals are Critical on escalation triggers alone — Readability and Accessibility. The remaining four hold the surface together, but a portfolio that cannot be operated from a keyboard and whose smallest text sits below 4.5:1 is not finished regardless of how the pastel-brutalist shell reads.

---

## Vital Signs

| # | Vital | Status | Score | Evidence |
|---|---|---|---|---|
| 1 | Intentionality | Watch | 5 / 10 | Presentation is a third-party theme (footer credits "Brutal theme for Astro", `global.css:2` says "Adapted from trading-dashboard.html", dep `@eliancodes/brutal-ui`) filled with stock portfolio sections. The terminal conceit is the only authored layer. |
| 2 | Readability | **Critical** | 0 / 10 | Text at 10–12px rendered at `opacity: 0.3–0.4` on white (`global.css:465`, `:456`, `:590`; `index.astro:67`; commit-graph headers at 0.35). Escalation trigger: text without enough contrast. |
| 3 | Usability | Watch | 5 / 10 | Core browsing works. The terminal overlay's only close targets are a non-focusable `<span>` and a mouse-only backdrop (`TerminalOverlay.astro:6`); keyboard users must know the undocumented backtick/Esc path. |
| 4 | Responsiveness | Watch | 5 / 10 | Layout reflows and the ASCII-art swap to `screen-too-small` is a deliberate joke, not an amputation. But terminal inputs are 14px (`global.css:586`), which triggers iOS Safari auto-zoom on focus, and there is no 320px check. |
| 5 | Speed | Healthy | 10 / 10 | Static Astro output, no framework runtime, one Google Fonts stylesheet with `preconnect`. The commit graph degrades to an inline error line on fetch failure instead of hanging. |
| 6 | Accessibility | **Critical** | 0 / 10 | Six HIGH escalation triggers: placeholder-only labels on both terminal inputs, `<span>` close control, `outline: none` with no replacement (`global.css:583`), no `prefers-reduced-motion` anywhere (`grep` returns nothing), sub-4.5:1 small text, and a modal overlay with no dialog role, no focus trap, and no `inert`. |

**Total: 5 + 0 + 5 + 5 + 10 + 0 = 25 / 60**

---

## Prescriptions

| # | Severity | Vital | Location | Problem | Fix | Mode |
|---|---|---|---|---|---|---|
| 1 | HIGH | Accessibility | `src/pages/404.astro:49`, `src/components/generic/TerminalOverlay.astro:18` | `<input>` carries only `placeholder="Type a command..."` | Add an associated `<label>`; keep placeholder as example text | `/design a11y` |
| 2 | HIGH | Accessibility | `TerminalOverlay.astro:6` | Close control is `<span class="dot red">` with `cursor:pointer` | Convert to `<button type="button" aria-label="Close terminal">` | `/design a11y` |
| 3 | HIGH | Accessibility | `src/styles/global.css:583` | `outline: none` with no `:focus-visible` replacement anywhere in the project | Restore a 3px offset ring on `:focus-visible` | `/design a11y` |
| 4 | HIGH | Accessibility | `CompileScreen.astro`, `index.astro:176`, `Layout.astro:45–64`, `PixelCommitGraph.astro` | Decorative motion runs unconditionally; no `prefers-reduced-motion` branch exists | Gate all decorative motion behind `no-preference`; add skip to the overlay | `/design motion` |
| 5 | HIGH | Readability | `global.css:456,465,590`; `index.astro:67`; `PixelCommitGraph.astro` | Small text at 0.3–0.4 opacity | Replace opacity with solid neutrals at 4.5:1 | `/design recolor` |
| 6 | HIGH | Accessibility | `TerminalOverlay.astro:2–18` | Modal-shaped overlay with no modal contract | `role="dialog" aria-modal="true"`, `inert` background, trap and restore focus | `/design a11y` |
| 7 | MEDIUM | Intentionality | `src/pages/index.astro` (whole page), `global.css:147,311,335` | Template composition with no authored point of view | Replace the center stack and tile grids with a ranked, asymmetric composition | `/design deslop`, `/design relayout` |
| 8 | MEDIUM | Responsiveness | `global.css:586`, `:587` | 14px form inputs trigger iOS auto-zoom | Raise to `1rem` below 640px | `/design responsive` |

---

## Verification

**Checked:**
- Read all 8 pages, 12 components, `global.css`, `Layout.astro`, `projects.ts`, and public assets.
- `grep -rn "prefers-reduced-motion" src/` → no matches.
- `grep -rn "outline" src/` → one `outline: none` at `global.css:583`; no `:focus-visible` rule exists.
- Confirmed opacity values and font sizes on the cited lines against the working tree.

**Not verified:**
- Contrast ratios derived from declared opacity, not measured from a render.
- No dev server started; keyboard and screen-reader walks reasoned from markup.
- 320px and 200% zoom not exercised.
- The GitHub contributions fetch not run.

---

*Generated with CommandCode — 2026-09-11. Findings only; no design files changed.*
