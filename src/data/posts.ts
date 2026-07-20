export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "why-i-dual-boot-arch-and-nix",
    title: "Why I Dual Boot Arch Linux and NixOS (And You Shouldn't)",
    date: "2026-05-15",
    excerpt:
      "One machine, two package managers, and a therapist on speed dial. The case for — and against — running both Arch and NixOS.",
    tags: ["linux", "arch", "nixos", "opinion"],
    content: `
## The Setup

I run Arch Linux on one partition and NixOS on another. Same machine. Same keyboard.
Different philosophies. Different package managers. Different everything.

Why? Because I couldn't decide.

## Arch: The Sports Car

Arch is fast. Pacman is fast. The AUR has everything. When I need to spin up a
Rust project with the latest nightly compiler and some obscure Solana CLI tools
that only three people use, Arch has my back.

But Arch is also... fragile. One bad \`pacman -Syu\` and you're chrooting from a
USB stick at 2 AM, wondering where your evening went.

## NixOS: The Tank

NixOS is the opposite. Everything is declarative. My entire system config is a
single \`configuration.nix\`. If my laptop explodes, I can rebuild my exact
environment on new hardware in 20 minutes.

But NixOS is also... stubborn. Want to run a binary that wasn't packaged for
Nix? Good luck. The learning curve is a cliff face.

## The Verdict

I use Arch when I'm experimenting. NixOS when I'm shipping. Both have taught me
more about Linux than any single distro ever could.

Would I recommend this setup? Absolutely not. One OS is enough for any sane
person. But I'm a developer — sanity was never in the job description.
    `.trim(),
  },
  {
    slug: "solana-dev-getting-started",
    title: "Getting Started with Solana Development in Rust — No BS Guide",
    date: "2026-04-20",
    excerpt:
      "You've heard about Solana. You know Rust. Here's how to actually ship something on Solana without reading 47 Medium articles.",
    tags: ["solana", "rust", "anchor", "web3"],
    content: `
## Why Solana?

Speed. 400ms block times. Sub-cent transactions. If Ethereum is a crowded highway,
Solana is the autobahn. And Rust is the first-class language.

## The Stack

- **Rust:** systems language, no garbage collector, perfect for blockchain
- **Anchor:** framework that makes Solana development feel like writing normal Rust
- **Solana CLI:** your gateway to the network

## Step 1: Hello World on Devnet

\`\`\`bash
solana config set --url devnet
solana airdrop 2
anchor init my-first-dapp
cd my-first-dapp
anchor build
anchor deploy
\`\`\`

You just deployed a Solana program. It does nothing. But it's yours.

## Step 2: The Counter Program

The "Hello World" of Solana is a counter. You create an account that stores a
number, and a program that increments it. Sounds simple. The concepts — PDAs,
CPIs, account serialization — are deep.

## The Mental Model

Solana programs are stateless. All state lives in "accounts" — files on the
blockchain that your program owns. Your program reads accounts, does logic,
writes back. That's it. Everything else is optimization.

## Where to Go Next

- Anchor documentation (actually good)
- Solana Cookbook (community goldmine)
- Build a DEX aggregator (ambitious but you'll learn everything)
    `.trim(),
  },
  {
    slug: "terminal-tools-2026",
    title: "My Terminal Toolchain in 2026 — Minimal, Fast, and Mostly Rust",
    date: "2026-03-01",
    excerpt:
      "A tour of the CLI tools I actually use every day. Spoiler: most of them are written in Rust now.",
    tags: ["cli", "tools", "rust", "terminal"],
    content: `
## The Philosophy

If it takes more than 200ms to start, I'm not using it. If it's written in
Electron, I'm definitely not using it. This rules out... a lot.

## The Stack

- **Terminal:** WezTerm (GPU-accelerated, Lua config, works everywhere)
- **Shell:** zsh + starship prompt (because I'm basic)
- **Editor:** Neovim (btw) with lazy.nvim. 37ms startup. 84 plugins. Zero regrets.
- **File manager:** yazi (Rust, blazing fast, vim keys)
- **Git TUI:** lazygit (the only git interface that makes sense)
- **System monitor:** bottom (btm) — like htop but written in Rust and prettier
- **JSON processor:** jq (still the king, though I'm writing a Rust replacement)
- **HTTP client:** xh (Rust httpie clone — faster, prettier output)
- **Container runtime:** podman (because Docker's daemon model bugs me)

## The Trend

Notice a pattern? Almost everything is written in Rust. The ecosystem has
exploded. Tools that used to be Python scripts with 2-second startup times are
now compiled binaries that finish before you release the Enter key.

## What I'm Building

I'm writing my own TUI file manager in Rust with ratatui. It has vim keybindings,
preview panes, and Arch/Nix integration. Because none of the existing ones do
exactly what I want. And that's the terminal ethos: if it doesn't exist, build it.
    `.trim(),
  },
];
