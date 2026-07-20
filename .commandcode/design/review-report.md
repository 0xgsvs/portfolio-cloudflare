# Review Report — portfolio-cloudflare

**Mode:** `/design review`
**Register:** Brand (personal portfolio)
**Date:** 2026-09-11
**Score:** 23 / 50 — **focused intervention needed, not a rewrite of the material**

---

## First Impression

The page is white, pastel, and loud in a way that is trying to be friendly. The name lands first because it is wrapped in a yellow highlight, then the eye slides to the centered tagline, then to the curl box, then down a single centered column of cards.

What I remember after two seconds: the yellow highlight on the name, the drop-shadow offset on every card, and that everything is centered. What I do not remember: a single project, a single claim, or a reason to scroll rather than leave. The strongest idea on the site — that this person thinks and works in a terminal — is not visible in the first viewport. It is buried on the 404 page.

**Prompt fidelity:** the name is exact and the category (developer portfolio) is visible. The proof object, however, is generic: a project card grid that could be moved into any developer's portfolio without becoming wrong. That is the primary fidelity gap.

---

## The Primary Flow

A visitor arrives. The page promises a Rust and Solana developer. The visitor sees three equal project cards, a tech-stack tag cloud, and a contact grid. The visitor cannot tell which project matters most, cannot tell what this person has actually shipped that worked, and cannot find the terminal identity that the 404 page implies.

The flow does not break. It just does not build. Nothing escalates, nothing is withheld, and nothing rewards the scroll past the second section.

---

## Lens Scores

| Lens | Score | Reading |
|---|---|---|
| First impression | 5 / 10 | Confident material, generic composition. The memorable idea is not in the first viewport. |
| Hierarchy | 4 / 10 | Everything is centered and every card is equal weight. The squint test yields three same-sized blobs. Section headings differ from body only by size, and the 32×4px bar before each one adds decoration instead of rank. |
| Color voice | 5 / 10 | The pastel-brutalist palette successfully refuses the dark-terminal developer reflex, which is the best color decision on the site. It is then spent arbitrarily: project cards get `purple`, `green`, `orange` by index in `projects.ts`, so hue carries no information a visitor can use. |
| Type voice | 4 / 10 | Poppins 400–800 arrived with the theme. The scale is 32/20/16 over a 15px body — a 1.6 step then two flat 4px and 1px steps — with per-component inline sizes from 10px to 24px. No display face, no reason, no rhythm. |
| Interaction feel | 5 / 10 | The terminal interactions are genuinely good: the compile screen, the typewriter, the backtick overlay, and `cat .secret` to `/secret` form a coherent personality. The states underneath are incomplete — no visible focus, no modal trap, no reduced-motion path, and a copy button whose success state is silent to assistive tech. |

**Total: 23 / 50**

---

## Findings

Ordered by severity, then impact. Escalation triggers first.

| # | Severity | Discipline | Location | Before | After | Why |
|---|---|---|---|---|---|---|
| 1 | HIGH | Accessibility | `src/pages/404.astro:49`, `src/components/generic/TerminalOverlay.astro:18` | Placeholder-only inputs | Real `<label>` per input | A screen reader announces an unnamed field and the name vanishes on focus |
| 2 | HIGH | Accessibility | `TerminalOverlay.astro:6` | `<span class="dot red" id="term-close-btn">` | `<button aria-label="Close terminal">` | Mouse-only close path |
| 3 | HIGH | Accessibility | `src/styles/global.css:583` | `outline: none`, no replacement | `:focus-visible` ring | No visible keyboard focus anywhere |
| 4 | HIGH | Motion | `CompileScreen.astro`, `index.astro:176`, `Layout.astro:45–64`, `PixelCommitGraph.astro` | Unconditional decorative motion | Gate behind `prefers-reduced-motion: no-preference` | Vestibular risk; user preference ignored |
| 5 | HIGH | Accessibility | `TerminalOverlay.astro:2–18` | Modal-shaped `div` | Dialog role, `inert` background, focus trap and restore | Background stays reachable while the overlay is "open" |
| 6 | MEDIUM | Layout | `index.astro:21–28,65–68`, `global.css:147,311,335` | Everything centered | Asymmetric spine: left identity column, right live rail | Nothing directs the gaze; lead element is whichever block is tallest |
| 7 | MEDIUM | Layout | `index.astro:42–61,73–99,108–114,152–172` | Four equal-weight tile grids | Rank the projects; drop the grid where comparison is the job | Three projects of unequal importance rendered as equals |
| 8 | MEDIUM | Type | `Layout.astro:19`, `global.css:44–60` | Poppins, 32/20/16/15 | Token scale at ≥1.25 ratio, committed face | Flat scale, no voice, template family |
| 9 | MEDIUM | Color | `global.css:4–14`, `secret.astro:10`, `Layout.astro:24–29`, `projects.ts` | Palette in three places, hue by index | One token source; hue by meaning | Duplication drifts; color means nothing |
| 10 | MEDIUM | Writing | `writing.astro:176–179` | Code fences always return `null` | Render `<pre><code>` | Published posts lose their bash and Rust blocks |
| 11 | MEDIUM | Layout | `index.astro:79–82,163–167`; emoji headings on 4 pages; `global.css:228` | Icon above every heading, bar before every section title | Remove or give one mark a functional slot | Decoration standing in for hierarchy |
| 12 | LOW | Interaction | `index.astro:36` | 400-char inline `onclick`, silent success | Scripted handler with `aria-live` | Unmaintainable; state change never announced |

---

## Considered but Rejected

| Location | Candidate | Rejected because |
|---|---|---|
| `global.css:76,247,319` | The drop-shadow offset on cards and tags | It is the material of the whole site, consistently applied, and it earns its place as a press feedback. Removing it would strip the identity. |
| `secret.astro` | Centered classified-document layout | A single-object page where symmetry is correct. |
| `index.astro:117–147` | ASCII art and the `screen-too-small` mobile joke | Deliberate, information-preserving humor, not a responsive amputation. |
| `PixelCommitGraph.astro` | The whole module | Real GitHub data with a real failure state. It is proof, not a stat monument. |

---

## Top Improvements, In Order

1. **Fix the six escalation triggers.** `/design a11y` then `/design motion`. Nothing below matters until the surface is operable.
2. **Break the center stack and rank the work.** `/design relayout`. Give the projects a lead project and give the page an asymmetric spine so the eye has somewhere to land.
3. **Commit to a type system.** `/design typeset`. One scale with real contrast between steps and a face chosen for this site rather than inherited.
4. **Make color mean something.** `/design recolor`. One token source, and stop assigning hues by array index.

Then, and only then, polish. `/design deslop` is the mode that applies all of it.

---

## Verdict

**Block** — escalation triggers standing. The material is worth keeping. The composition, the type system, and the access layer are not.

---

## Verification

**Checked:** read all 8 pages, 12 components, `global.css`, `Layout.astro`, `projects.ts`, and public assets; confirmed `prefers-reduced-motion` and `:focus-visible` are absent project-wide; confirmed the code-fence branch in `writing.astro` returns `null` on every path.

**Not verified:** contrast measured from a render, keyboard and screen-reader walks, 320px and 200% zoom, the live GitHub fetch, and any animated behavior observed on screen. All runtime claims above are derived from source.

---

*Generated with CommandCode — 2026-09-11. Findings only; no design files changed.*
