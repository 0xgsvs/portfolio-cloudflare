export const site = {
  name: "Venkat Sundaraneedi",
  handle: "0xgsvs",
  email: "venkat.subrahmanyam.34@gmail.com",
  domain: "https://0xgsvs.dev",
  github: "https://github.com/0xgsvs",
  tagline: "Rust and Solana systems engineer. I build programs that are provable, not just deployable.",
  description:
    "Rust and Solana systems engineer. Freight Delay, a parametric indemnity protocol on Solana devnet. Notes on Rust, Solana, and Linux.",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Writing", href: "/writing" },
    { label: "Tools", href: "/tools" },
    { label: "Contact", href: "/contact" },
  ],
};

export const trana = {
  title: "Freight Delay",
  parent: "Trana Protocol",
  kicker: "Current build · ChaosCore Labs",
  description:
    "A parametric freight-delay indemnity protocol on Solana. Liquidity providers deposit USDC into a per-mint pool; shippers buy policies that settle permissionlessly when an attested arrival lands past the quoted delivery time plus a grace period. Fully collateralised at all times.",
  facts: [
    { key: "Cluster", value: "Solana devnet" },
    { key: "Program", value: "4BtUosFfNUySEGAGspfjvStCzLzqSRdfoc4Z3Z1uqGJs" },
    { key: "Tests", value: "38 LiteSVM · devnet e2e" },
    { key: "Deployed", value: "2026-10-12" },
  ],
  repo: "https://github.com/ChaosCore-labs/Trana_Protocol",
  explorer:
    "https://explorer.solana.com/address/4BtUosFfNUySEGAGspfjvStCzLzqSRdfoc4Z3Z1uqGJs?cluster=devnet",
};

export const repos = [
  {
    name: "solana-nix",
    url: "https://github.com/0xgsvs/solana-nix",
    description: "Public repository in Nix.",
    lang: "Nix",
  },
  {
    name: "NixManager",
    url: "https://github.com/0xgsvs/NixManager",
    description: "Nix as a second package manager alongside an existing Linux install.",
    lang: "Nix",
  },
  {
    name: "treesitter-zig",
    url: "https://github.com/0xgsvs/treesitter-zig",
    description: "A custom tree-sitter grammar for Zig 0.17.0.",
    lang: "Tree-sitter",
  },
  {
    name: "dotfiles",
    url: "https://github.com/0xgsvs/dotfiles",
    description: "My config files, kept in public.",
    lang: "Shell",
  },
];

export const planned = [
  {
    title: "Solana DEX aggregator",
    note: "Jupiter routing, custom optimisation for slippage and MEV exposure.",
  },
  {
    title: "Rust TUI file manager",
    note: "ratatui, vim-like keybindings, preview panes.",
  },
  {
    title: "Solana indexer",
    note: "Real-time account tracking, event streaming, PostgreSQL storage.",
  },
];

export const tools = [
  { role: "Terminal", items: ["Ghostty"] },
  { role: "Editors", items: ["Neovim", "Helix"] },
  { role: "Multiplexer", items: ["Zellij"] },
  { role: "Navigation", items: ["Zoxide"] },
  { role: "Version control", items: ["Jujutsu (jj)", "jjui"] },
];

export const homeSections = [
  { id: "name", label: "Name", n: "01" },
  { id: "description", label: "Description", n: "02" },
  { id: "work", label: "Work", n: "03" },
  { id: "writing", label: "Writing", n: "04" },
  { id: "examples", label: "Examples", n: "05" },
  { id: "files", label: "Files", n: "06" },
  { id: "see-also", label: "See also", n: "07" },
  { id: "bugs", label: "Bugs", n: "08" },
];
