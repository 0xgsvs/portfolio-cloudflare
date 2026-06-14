# Ponytail Ultra — Delete Review

Items identified as candidates for removal. Review each and mark `[KEEP]` or `[DELETE]`.

---

## 1. CompileScreen.astro (91 lines)

**File:** `src/components/generic/CompileScreen.astro`
**What:** Fake Rust compiler loading screen with cargo build animation, progress bar, humor lines. sessionStorage guard prevents replay.
**Why remove:** Nobody revisits a portfolio site to wait for a fake compiler.
**Keep if:** The loading screen is a signature personality element.

- [ ] KEEP
- [ ] DELETE

---

## 2. TerminalOverlay.astro (228 lines)

**File:** `src/components/generic/TerminalOverlay.astro`
**What:** Floating terminal overlay toggled by backtick key. Has COMMANDS, NAV mappings, addLine/addPrompt helpers, keydown listener.
**Why remove:** 404 page already has a terminal (now simplified). Two terminals = DRY violation. 228 lines, 90% duplicated logic.
**Keep if:** You want a terminal accessible from every page, not just 404.

- [ ] KEEP
- [ ] DELETE

---

## 3. Header diamond rage-click easter egg (38 lines)

**File:** `src/components/layout/Header.astro` L39-77
**What:** Click ◆ 5 times → shake → shatter animation → toast "You broke it. Happy now?" → respawn after 2s. CSS keyframes for diamondShake and diamondShatter.
**Why remove:** 38 lines of JS+CSS for a hidden game on one character.
**Keep if:** It amuses you.

- [ ] KEEP
- [ ] DELETE

---

## 4. Layout idle timer (31 lines)

**File:** `src/layouts/Layout.astro` L46-77
**What:** setInterval counting idle seconds. At 60s: rainbow drop-shadows on cards. At 120s: "you can leave now. or don't." toast. Resets on mousemove/keydown/scroll/click.
**Why remove:** Forever-running setInterval + 4 event listeners for an easter egg most users never trigger.
**Keep if:** You want personality and idle-reward for visitors.

- [ ] KEEP
- [ ] DELETE

---

## 5. Index typewriter effect (22 lines)

**File:** `src/pages/index.astro` L182-204
**What:** Types tagline character-by-character at 40ms intervals. Re-triggers on ClientRouter nav.
**Why remove:** Same text is already static in the element. 22 lines of JS just to animate text.
**Keep if:** The typewriter is a signature brand effect.

- [ ] KEEP
- [ ] DELETE

---

## 6. Copy curl button (14 lines)

**File:** `src/pages/index.astro` L207-220
**What:** Button copies `curl -L https://0xgsvs.dev/contact.txt` to clipboard. Shows COPIED! for 2s.
**Why remove:** The command is already visible in the curl-box. Users can select+copy.
**Keep if:** You value one-click copy UX for terminal users.

- [ ] KEEP
- [ ] DELETE

---

## 7. ASCII art rage-click (52 lines)

**File:** `src/pages/index.astro` L222-273
**What:** Click ASCII art rapidly → counter (1/10, 2/10...) → at 10 clicks: jitter, red shadow, toast with 5 escalating messages.
**Why remove:** 52 lines for a second rage-click game. Counter element creation/removal, jitter keyframe, timeout management.
**Keep if:** You enjoy the interactive ASCII art joke.

- [ ] KEEP
- [ ] DELETE

---

## 8. ASCII art block + screen-too-small (30 lines)

**File:** `src/pages/index.astro` L124-153
**What:** Large ASCII art banner (12 lines) + "SCREEN TOO SMALL" box-drawing block (14 lines). CSS media query toggles — ASCII on desktop, joke on mobile.
**Why remove:** Purely decorative, no information content. ASCII banner duplicates console.log art in Layout.astro.
**Keep if:** The ASCII art is part of the brutalist terminal aesthetic.

- [ ] KEEP
- [ ] DELETE

---

## 9. MobileSocials inline SVGs (54 lines)

**File:** `src/components/home/MobileSocials.astro`
**What:** Mobile-only social links with raw SVG icons built inline. Reimplements PixelGithub and PixelEmail as raw SVGs.
**Why remove:** Code duplication — dedicated components already exist.
**Keep if:** The simplified SVG style is intentionally different from pixel icons, or you want mobile-specific styling.

- [ ] KEEP
- [ ] DELETE

---

## Summary

| # | Item | Lines | Type |
|---|------|-------|------|
| 1 | CompileScreen | 91 | Loading screen easter egg |
| 2 | TerminalOverlay | 228 | Duplicate terminal (404 has one) |
| 3 | Header diamond click | 38 | Rage-click easter egg |
| 4 | Layout idle timer | 31 | Idle-detection easter egg |
| 5 | Typewriter effect | 22 | JS text animation |
| 6 | Copy curl button | 14 | Clipboard button |
| 7 | ASCII rage-click | 52 | Rage-click easter egg |
| 8 | ASCII art + screen-too-small | 30 | Decorative blocks |
| 9 | MobileSocials inline SVGs | 54 | Duplicate icon implementations |
| **Total** | | **560** | |

Mark each with `[KEEP]` or `[DELETE]` — after your decision I'll run ponytail again on the KEEP items to suggest simplifications instead.
