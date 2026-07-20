export type ProjectKind = "protocol" | "tooling" | "infrastructure";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  kind: ProjectKind;
  codeUrl?: string;
  demoUrl?: string;
}

/*
 * Ordered by importance. The first entry is rendered as the lead project.
 * `kind` carries the visual hue so color always means the same thing:
 * protocol = violet, tooling = orange, infrastructure = blue.
 */
export const projects: Project[] = [
  {
    title: "Solana DEX Aggregator",
    description:
      "High-performance DEX aggregator on Solana using Rust. Implements Jupiter routing with custom optimization for minimal slippage and MEV protection.",
    tags: ["Rust", "Solana", "Anchor", "Web3"],
    kind: "protocol",
    codeUrl: "https://github.com/0xgsvs/solana-dex-aggregator",
  },
  {
    title: "Rust TUI File Manager",
    description:
      "Terminal-based file manager built with Rust and ratatui. Features vim-like keybindings, preview panes, and Arch/Nix integration.",
    tags: ["Rust", "TUI", "CLI", "ratatui"],
    kind: "tooling",
    codeUrl: "https://github.com/0xgsvs/rust-tui-fm",
  },
  {
    title: "Solana Indexer",
    description:
      "High-throughput blockchain indexer for Solana. Real-time account tracking, event streaming, and PostgreSQL storage with custom filtering.",
    tags: ["Rust", "Solana", "PostgreSQL", "Redis"],
    kind: "infrastructure",
    codeUrl: "https://github.com/0xgsvs/solana-indexer",
  },
];

export const kindLabels: Record<ProjectKind, string> = {
  protocol: "Protocol",
  tooling: "Tooling",
  infrastructure: "Infrastructure",
};

export const stackGroups = [
  { term: "Languages", variant: "lang", items: ["Rust", "Zig"] },
  { term: "Chain", variant: "chain", items: ["Solana", "Anchor"] },
  { term: "Environment", variant: "env", items: ["Arch Linux", "NixOS", "CLI tools"] },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/0xgsvs",
    icon: "github",
    color: "purple",
    detail: "github.com/0xgsvs",
  },
  {
    name: "Email",
    url: "mailto:venkat.subrahmanyam.34@gmail.com",
    icon: "email",
    color: "blue",
    detail: "venkat.subrahmanyam.34@gmail.com",
  },
];
