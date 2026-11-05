# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers, developer peers, and clients or collaborators, treated as equally important. A visitor should first browse the work and follow it through to GitHub.

## Product Purpose

A personal portfolio for Venkat Sundaraneedi, a Rust and blockchain developer working in the Solana ecosystem. The visit succeeds when a visitor reviews the work and continues to GitHub to inspect it.

## Positioning

Undecided: no positioning statement has been confirmed. The site currently leads with a terminal-native framing and a ranked project list.

## Operating Context

- Built with Astro as a static site and published at https://0xgsvs.dev.
- Content lives in the repository: projects and stack in `src/data/projects.ts`, posts in `src/data/posts.ts`.
- Public identity: GitHub `0xgsvs`, email `venkat.subrahmanyam.34@gmail.com`.
- Additional public work: https://github.com/ChaosCore-labs/Trana_Protocol.
- The site is also usable from a terminal: `curl -L https://0xgsvs.dev/contact.txt` returns a vCard.

## Capabilities and Constraints

- Static pages: home, contact, tools, writing index and article pages, guestbook, secret, and a 404 with a command-line index.
- No backend or database. The guestbook opens a prefilled GitHub issue; there is no on-site submission or storage.
- Contribution activity is fetched client-side from a third-party GitHub contributions API; private contributions are not included.
- No RSS feed exists.
- A CV download is present as a labelled placeholder PDF until the real document is supplied.
- Decorative motion respects `prefers-reduced-motion`; the command palette is a native modal dialog with keyboard navigation and restored focus.
- Open: the three projects on the homepage are labelled as planned, not shipped. They have no repositories yet.
- Open: no GPG key is published. The previous placeholder page and file were removed rather than shipped as a real key.
- Open: the user wants to create new projects; which ones, and what proof each will ship with, is undecided.

## Brand Commitments

- Name: Venkat Sundaraneedi. Handle: `0xgsvs`. Domain: `0xgsvs.dev`.
- Existing voice is terminal-flavored, direct, and informal, with hidden routes and easter eggs.
- These identity choices come from the incumbent site; the user has not stated whether they are fixed for future work.

## Evidence on Hand

- GitHub profile `0xgsvs` with real contribution data (314 contributions in the last year at the time of writing), and the Trana Protocol repository (Freight Delay) at `ChaosCore-labs/Trana_Protocol`, deployed on Solana devnet with 38 passing LiteSVM tests and a devnet end-to-end run.
- Three on-site articles under `/writing`.
- `public/contact.txt` vCard and `public/cv-placeholder.pdf`.
- Absent: the real CV, a real GPG key, repositories for the planned projects, and any testimonials, case studies, or benchmarks. Do not fabricate them.

## Product Principles

1. Lead with work and GitHub; every project entry must resolve to real, reachable proof.
2. Never present planned or aspirational projects as shipped work.
3. Keep the terminal-native experience as personality without letting it block clarity, navigation, or accessibility.
4. Serve recruiters, peers, and clients in one surface; do not optimize for one at another's expense.
5. Stay static and dependency-light: no database, no server-side state, and keep third-party runtime calls resilient to failure.
