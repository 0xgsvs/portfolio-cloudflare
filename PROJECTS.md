# Projects

Four deep projects, chosen 2026-11-16. Three are new Solana security tools; one finishes an existing Rust backend. The goal is depth and verifiable proof, not ten shallow repositories.

## Selected

| # | Repo | Type | Status | Why |
|---|---|---|---|---|
| 1 | [`pgjobq`](https://github.com/0xgsvs/pgjobq) | Rust backend | MVP | Finish the existing `jobq`; proves production Rust, Postgres, and operability. |
| 2 | [`solana-guard`](https://github.com/0xgsvs/solana-guard) | Security tool | MVP | Static analysis for Solana programs; flagship for the Rektoff direction. |
| 3 | [`svm-fuzz`](https://github.com/0xgsvs/svm-fuzz) | Security tool | MVP | LiteSVM invariant fuzzer; deep testing and reproducible bug finding. |
| 4 | [`svm-range`](https://github.com/0xgsvs/svm-range) | Security content | MVP | Vulnerable Solana programs with exploits, patches, and write-ups. |

All four repositories are public and contain MVPs. They are in progress, not production-ready; the site labels them accordingly.

The order above is the build order. Ship `pgjobq` first for a quick public win, then the security suite.

## 1. pgjobq

Rename `jobq` to `pgjobq`, make it public, and finish the spec.

**Scope**

- Keep the Postgres-backed queue: `SKIP LOCKED`, retries with exponential backoff, dead-letter queue, cron jobs, graceful shutdown.
- Add the missing milestones from the existing spec: scheduling, metrics, and operational docs.
- Provide a Docker Compose stack and a runnable example worker.

**Milestones**

- M1: public repo, README, MIT/Apache license, CI (fmt, clippy, test), Docker Compose.
- M2: complete the remaining queue features and integration tests against a real Postgres.
- M3: benchmark enqueue/dequeue throughput; publish the crate.
- M4: operational guide: failure modes, metrics, upgrade path.

**Acceptance**

- `cargo test` passes against Postgres in CI.
- `docker compose up` runs a worker and a producer with visible retries and DLQ.
- A crates.io release exists, or a documented reason it is not published.
- README has architecture, quickstart, and benchmark numbers.

## 2. solana-guard

A static analyzer for Anchor and native Solana programs. Narrow rules, good fixtures, usable output.

**Scope**

- CLI: `solana-guard scan <path> --format text|json|sarif`.
- Rule framework with source spans and severity.
- First rules: missing signer check, missing owner check, unchecked account, PDA seed collision risk, `init_if_needed` reinitialization, unsafe close without zeroing, arbitrary CPI target.
- CI integration through SARIF.

**Milestones**

- M1: CLI, rule trait, three rules, vulnerable/fixed fixtures, tests.
- M2: six rules, JSON and SARIF output, false-positive tests.
- M3: scan Trana Protocol, publish the report and fix any findings.
- M4: README, GitHub Action, release binary.

**Acceptance**

- Every rule has a vulnerable fixture that fails and a fixed fixture that passes.
- The Trana scan produces a report with no unexplained false positives.
- CI can upload SARIF to GitHub code scanning.
- A new rule can be added without touching the CLI.

Prior art exists; differentiate through Anchor account validation, SARIF, and a real audit artifact.

## 3. svm-fuzz

A property-based instruction-sequence fuzzer for Solana programs running on LiteSVM.

**Scope**

- Invariant trait: lamport conservation, authority, supply, no double spend, custom program invariants.
- Random account states and instruction sequences, bounded by a seed and a step count.
- Corpus persistence and deterministic replay.
- Shrinking to the smallest failing sequence.

**Milestones**

- M1: LiteSVM harness, invariant trait, random sequence generator, deterministic seed.
- M2: corpus, shrinking, and a deliberately buggy fixture program.
- M3: CLI report with the failing sequence and account diff.
- M4: CI example and docs.

**Acceptance**

- Finds a seeded bug, shrinks it, and replays it from the printed seed.
- No flaky failures across repeated runs with the same seed.
- Runs against at least one real program in addition to fixtures.
- README explains invariants and limits.

## 4. svm-range

A small vulnerable-program range for Solana security practice. The Rektoff capstone artifact.

**Scope**

- Six to eight challenges, each with a vulnerable program, an exploit test, a patched program, and a write-up.
- Challenge themes: missing signer, account confusion, PDA collision, unsafe close, arbitrary CPI, arithmetic, reinitialization, Token-2022 extension risk.
- One command to run the vulnerable suite and one to run the patched suite.

**Milestones**

- M1: challenge template, runner, three challenges.
- M2: six challenges with exploit and patch tests.
- M3: write-ups and a public index page.
- M4: Docker image and CI.

**Acceptance**

- Every challenge fails on the vulnerable build and passes on the patched build.
- Every exploit test is deterministic.
- Every challenge has a short write-up naming the root cause and the fix.
- A new challenge can be added from the template in under an hour.

## Deferred idea bank

Keep these until the four above ship:

| Repo | Idea |
|---|---|
| `solana-replay` | Replay a transaction in LiteSVM, diff account state, print the CPI trace. |
| `t22-scan` | Token-2022 extension risk scanner. |
| `pda-collider` | PDA seed collision and canonicalisation finder. |
| `upgrade-watch` | Indexer for program upgrades and authority changes. |
| `anchor-invariants` | Generate property tests from an Anchor IDL. |
| `solana-attest` | Reproducible-build GitHub Action with on-chain hash verification. |
| `trana-audit` | Public security review of Freight Delay with findings and fixes. |

## Existing repositories

| Repo | Action |
|---|---|
| `jobq` | Becomes `pgjobq`; finish it. |
| `logsift` | Keep as a future Rust systems project; do not feature until it has code and tests. |
| `mcp-kb` | Same; build the SQLite FTS5 and MCP MVP before featuring. |
| `oxide` | Learning project; keep off the portfolio until complete. |
| `helix`, `horizon` | Forks. Do not present as original work; link upstream contributions if merged. |
| `trading`, `resignation`, `template`, `learning` | Private or personal; keep out. |
| `oh-my-openagent` | Not this account's project; keep out. |

## Repo conventions

Every selected repo ships with:

- README: problem, demo, quickstart, architecture, limits.
- License: MIT or Apache-2.0.
- CI: format, clippy, tests.
- Tests that can fail; no placeholder assertions.
- A pinned toolchain and reproducible local setup.
- No secrets, no private keys, no committed `.env`.

## Portfolio integration

Add a project to the site only when it is public, has a README, has passing tests, and has one verifiable artifact: a demo, a report, a benchmark, or a published package. Do not add planned repos as shipped work.

The selected projects are linked from the home page; keep them labelled MVP until production-ready.
