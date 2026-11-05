---
name: VENKAT(1)
description: A printed manual for a Rust and Solana systems engineer.
colors:
  paper: "#f2ecdd"
  paper-sunk: "#e9e0cb"
  ink: "#17140f"
  ink-secondary: "#4b4539"
  ink-muted: "#6b6353"
  signal: "#b03a22"
  hairline: "#c9bfa8"
  print-paper: "#fff"
  print-ink: "#000"
  print-muted: "#444"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, sans-serif"
    fontSize: "clamp(3.25rem, 10.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  section:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.12em"
  tagline:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.2rem, 2.3vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  display-compact:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.35rem, 2.6vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  proof-title:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  micro:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.12em"
  print-display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, sans-serif"
    fontSize: "4rem"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
rounded:
  none: "0"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.75rem"
  xl: "2.5rem"
components:
  action-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.9rem"
    height: "2.75rem"
  action-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.9rem"
    height: "2.75rem"
  index-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.35rem"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.6rem"
    height: "2.75rem"
  command-trigger:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0.7rem"
    height: "2.75rem"
---

# Design System: VENKAT(1)

## Overview

**Creative North Star: "The Field Manual"**

The site is one printed manual for a working system, not a portfolio wearing a terminal skin. Manila stock, dense mono text, numbered sections, ruled margins, and a single vermilion signal carry the whole surface. Every section is an addressable entry; every claim about work carries a real repository, a program ID, or a test count.

The world is flat, legible, and deliberate. It refuses the hero-plus-cards scaffold, the dark editor cliché, and decorative terminal chrome. Personality comes from the manual's own conventions: running heads, margin numerals, a real command palette, and copy written like a service manual with the limits stated.

**Key Characteristics:**
- Warm manila paper ground with near-black ink and one signal red.
- A 6rem display masthead against a 16px mono body.
- Hairline rules, zero radius, and no shadows; depth is only paper tone and ink weight.
- A persistent right margin index with a red numeral and an ink active state.
- A keyboard-first command palette that behaves like the manual's index.

## Colors

A restrained print palette: warm paper, ink ramp, one signal.

### Primary
- **Manila Stock** (#f2ecdd): The page ground, selection inverse text, and the command palette field. Nothing is pure white.
- **Press Ink** (#17140f): Body text, rules, the active index row, and the solid primary action.
- **Vermilion Signal** (#b03a22): Section numerals, small status labels, active hover states, focus rings, and the live activity bars. Never a field fill.

### Neutral
- **Sunk Paper** (#e9e0cb): Code and command blocks only. It reads as a second sheet under the main one.
- **Graphite Ink** (#4b4539): Secondary prose and metadata that must stay at body contrast.
- **Muted Graphite** (#6b6353): Running heads, dates, field labels, and axis labels.
- **Hairline** (#c9bfa8): Dividers inside a section. Section boundaries always use Press Ink instead.

### Named Rules

**The One Signal Rule.** Vermilion is a mark, never a surface. It may color a numeral, a status, an underline, a focus ring, or a live bar. It never fills a region larger than a line of type.

**The Rule Weight Rule.** Section boundaries are 1px Press Ink. Internal rows are 1px Hairline. No border is thicker than 1px, and no border is rounded.

## Typography

**Display Font:** Bricolage Grotesque (with Helvetica Neue, sans-serif)
**Body and Label Font:** Spline Sans Mono (with ui-monospace, monospace)

**Character:** A high-contrast pairing between a contemporary grotesque with slightly awkward terminals and a legible, wide mono. The grotesque does the shouting once per page; the mono does the reading.

### Hierarchy
- **Display** (800, clamp(3.25rem, 10.5vw, 6rem), 0.82): The page title only, set uppercase with a superscript section number.
- **Display compact** (700, clamp(2.1rem, 5vw, 3.6rem), 0.98): Long article titles that must still read as a masthead.
- **Tagline** (500, clamp(1.2rem, 2.3vw, 1.75rem), 1.2): The one-line proposition under the masthead.
- **Lede** (500, clamp(1.35rem, 2.6vw, 2rem), 1.22): The NAME paragraph.
- **Proof title** (700, clamp(1.5rem, 3vw, 2.1rem), 1.05): The current build name in the hero rail.
- **Section** (700, clamp(1.4rem, 2.6vw, 1.9rem), 1.0): Uppercase man-page section headings, left-aligned after a 3.25rem numeral gutter.
- **Title** (600–700, 1.25–2.5rem, 1.05–1.2): Project names, article titles, and the current build in the masthead.
- **Body** (400, 1rem, 1.65): All prose, capped at 68ch. Secondary body switches to Graphite Ink, never to opacity.
- **Label** (600, 0.6875rem, 0.12em, uppercase): Running heads, index numerals, field names, and command labels.
- **Micro** (600, 0.625rem, 0.12em, uppercase): Axis labels and command-block labels only.
- **Print display** (800, 4rem, 0.9): The masthead in the print stylesheet; the screen clamp is not printed.
- **Tag** (500, 0.6875rem, uppercase): Article tags and metadata, 1px Hairline border, no fill.

### Named Rules

**The 6rem Ceiling.** Display type never exceeds 6rem, however wide the viewport. The masthead earns attention through scale relative to a 16px body, not through unbounded growth.

**The Margin Numeral Rule.** Section numbers live in the left gutter as vermilion labels, never inside the heading text and never as an indented kicker above it.

**The Readable Mono Rule.** Mono is the body because this is a manual, not because mono looks technical. It never drops below 13px for content, and every long hash wraps rather than forcing a horizontal scroll.

## Layout

A 1360px sheet centered on the paper ground with a fluid gutter (16–40px). The running head opens the sheet, then the masthead, then a two-column page grid: a content column (68ch measure) and a 15rem right rail. The rail is sticky on desktop and becomes a horizontally scrollable index strip below 860px. Sections are numbered 01–08 and separated by full-width 1px rules. Within sections, a 3.25rem numeral column keeps the reading edge steady.

The masthead is the one asymmetric composition: title, tagline, and actions at left; current build and activity trace at right, separated by a 1px rule. Actions sit on the bottom edge of the left column. Below 860px the halves stack, the rail moves above the content, and the index becomes one scrollable row.

Spacing follows an 8px-ish rhythm expressed in rem: 0.5, 0.75, 1, 1.75, and 2.5. Section top padding is smaller than bottom padding, so each rule reads as the start of the next entry rather than the end of the last.

## Elevation & Depth

There are no shadows. The system is flat print. Depth is carried by three devices only: the 1px Press Ink rule at section boundaries, the 1px Hairline inside rows, and the Sunk Paper fill on command blocks. Document-level depth does not exist, and hover never lifts an element.

## Shapes

Every control and surface is a rectangle with 0 radius. Borders are 1px. There are no pills, no cards, no clipped polygons, and no decorative frames. The only asymmetry allowed is the masthead's two-column split and the hanging section numerals.

## Components

### Buttons and Actions
- **Shape:** Rectangle, 0 radius, 1px Press Ink border, min-height 2.75rem.
- **Primary:** Press Ink fill with Manila text, uppercase 11px mono, 0.08em tracking, padding 0.5rem 0.9rem. Used once or twice per page (Download CV, Email).
- **Secondary:** Transparent with Press Ink text and border. Same dimensions.
- **Hover / Focus:** Hover fills Vermilion with Manila text; focus is a 2px Vermilion outline at 3px offset. No transform, no shadow.

### Command Line Trigger
- **Shape:** 1px Press Ink rectangle, 2.75rem tall, mono 11px uppercase.
- **State:** Ink fill on hover; a `kbd` glyph in a 1px current-color box for the `/` shortcut.

### Margin Index
- **Shape:** Full-width rows separated by Hairline; the active row is Press Ink with Manila text.
- **Numerals:** Vermilion, right-aligned, 11px. On mobile the rows become a single scrollable strip with 2.75rem targets.

### Command Palette
- **Shape:** Native modal dialog, 44rem maximum width, 1px Press Ink border, Manila ground, Graphite backdrop at 55%.
- **Input:** Full-width mono field with a 1px Press Ink rule beneath, no fill.
- **Rows:** 2.75rem minimum height, Hairline dividers; the selected row is Press Ink with Manila text. Label matches rank above hint matches.
- **Footer:** Keyboard legend and a polite live region for copy feedback.

### Command Block
- **Shape:** 1px Press Ink border, Sunk Paper fill, 0 radius.
- **Bar:** Command label in 10px uppercase muted mono at left, a 2.75rem Copy action at right.
- **Feedback:** The button reads "Copied" for two seconds and a polite status line announces the result.

### Activity Trace
- **Shape:** A 4.5rem flex row of daily bars above a 1px Press Ink baseline.
- **Color:** Hairline for zero days, Graphite for low, Ink for moderate, Vermilion for busy and intense. Bars carry native titles; a visually hidden table carries the same 30 rows for assistive technology.

### Writing Entries
- **Shape:** Full-width rows, Hairline dividers, date in an 7.5rem first column, title in the display face, arrow at the end, excerpt beneath the title. Hover fills Sunk Paper, never lifts.

### Facts Table
- **Shape:** A 1px Press Ink top rule and Hairline row dividers; labels in uppercase muted mono at left, values right-aligned in 600 mono. Long hashes break anywhere; rows align to the top.

## Do's and Don'ts

### Do:
- **Do** keep the paper ground, the ink ramp, and the one vermilion signal as the entire palette.
- **Do** set section headings uppercase in Bricolage with a vermilion numeral in the 3.25rem gutter.
- **Do** keep body copy at 16px mono within 68ch; switch secondary text to Graphite Ink instead of opacity.
- **Do** use 1px rules for structure and Sunk Paper only for code and command blocks.
- **Do** give every action a 2.75rem minimum height and a 2px Vermilion focus outline.
- **Do** label planned work as planned and placeholders as placeholders.

### Don't:
- **Don't** use a kicker or eyebrow line above a heading; status metadata goes below the heading it describes.
- **Don't** use cards, rounded corners, pills, shadows, gradient text, or glass.
- **Don't** use a second accent color or a dark ground.
- **Don't** let mono type carry decoration; it is the reading face of a manual.
- **Don't** hide a state change in a closed dialog; announce it where the user can still see it.
- **Don't** present a repository link, test count, or program ID that has not been verified.
