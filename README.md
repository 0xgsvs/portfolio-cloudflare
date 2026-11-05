# 0xgsvs.dev

Personal portfolio for Venkat Sundaraneedi, a Rust and Solana systems engineer. The site is a static Astro build set as a printed manual: manila paper, one vermilion signal, margin numerals, and a command palette.

## Stack

- Astro 7, static output
- TypeScript
- Self-hosted Bricolage Grotesque and Spline Sans Mono
- No client framework, database, analytics, or runtime server

## Development

Requires Bun 1.4.4 or newer.

```bash
bun install
bun run dev
```

The dev server binds to `0.0.0.0` on Astro's default port.

```bash
bun run build
bun run preview
```

`bun run build` writes the static site to `dist/`.

## Content

- `src/data/site.ts`: identity, contact, Freight Delay facts, public repositories, planned work, tools, and homepage section index.
- `src/data/posts.ts`: article content and frontmatter.
- `src/pages/`: home, writing, contact, tools, guestbook, secret, and 404.
- `src/styles/manual.css`: the full design system.
- `public/contact.txt`: the vCard served at `/contact.txt`.
- `public/og.png`: 1200x630 social card used by every page.

## Design

- `PRODUCT.md`: product intent, users, constraints, and evidence.
- `DESIGN.md`: the design system, color tokens, type, rules, and components.
- `.impeccable/`: Impeccable direction context and the home surface brief.

## Deployment

The site is a static Cloudflare Pages deployment: build with `bun run build`, publish `dist/`. The canonical domain is set in `astro.config.mjs`.

## Known placeholders

- `public/cv-placeholder.pdf` is a labelled placeholder, not the real CV.
- The guestbook opens a GitHub issue in a repository that must be public with Issues enabled.
- No GPG key is published.
- The three "on the bench" projects have no repositories yet.
