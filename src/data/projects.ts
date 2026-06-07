export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  icon: string; // 'chain' | 'file' | 'chart'
  codeUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Solana DEX Aggregator",
    description:
      "High-performance DEX aggregator on Solana using Rust. Implements Jupiter routing with custom optimization for minimal slippage and MEV protection.",
    tags: ["Rust", "Solana", "Anchor", "Web3"],
    color: "purple",
    icon: "chain",
    codeUrl: "https://github.com/0xgsvs/solana-dex-aggregator",
  },
  {
    title: "Rust TUI File Manager",
    description:
      "Terminal-based file manager built with Rust and ratatui. Features vim-like keybindings, preview panes, and Arch/Nix integration.",
    tags: ["Rust", "TUI", "CLI", "ratatui"],
    color: "green",
    icon: "file",
    codeUrl: "https://github.com/0xgsvs/rust-tui-fm",
  },
  {
    title: "Solana Indexer",
    description:
      "High-throughput blockchain indexer for Solana. Real-time account tracking, event streaming, and PostgreSQL storage with custom filtering.",
    tags: ["Rust", "Solana", "PostgreSQL", "Redis"],
    color: "orange",
    icon: "chart",
    codeUrl: "https://github.com/0xgsvs/solana-indexer",
  },
];

export const techStack = [
  { name: "Rust", color: "orange" },
  { name: "Solana", color: "purple" },
  { name: "Anchor", color: "blue" },
  { name: "CLI Tools", color: "green" },
  { name: "Arch Linux", color: "blue" },
  { name: "NixOS", color: "yellow" },
  { name: "Zig", color: "red" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/0xgsvs",
    icon: "github",
    color: "purple",
    detail: "0xgsvs",
  },
  {
    name: "Email",
    url: "mailto:venkat.subrahmanyam.34@gmail.com",
    icon: "email",
    color: "blue",
    detail: "venkat.subrahmanyam.34@gmail.com",
  },
];
