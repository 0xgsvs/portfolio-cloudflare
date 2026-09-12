import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '0xgsvs',
  description: 'Documentation for 0xgsvs.dev',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  // VitePress dev binds loopback only by default, which is unreachable from
  // off-box. `--host` is not a documented VitePress flag, so bind through the
  // documented Vite passthrough instead. host: true covers IPv4 and IPv6.
  vite: {
    server: { host: true },
    preview: { host: true },
  },

  themeConfig: {
    siteTitle: '0xgsvs docs',

    // Intentionally empty until content exists.
    nav: [],
    sidebar: [],

    socialLinks: [{ icon: 'github', link: 'https://github.com/0xgsvs' }],
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    footer: {
      copyright: 'Copyright © 2026 Venkat Sundaraneedi',
    },
  },
})
