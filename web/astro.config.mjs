// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import bundleBudget from '@shiftescape/astro-bundle-budget'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://trev7or23.github.io',
  base: '/cup-divisa',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact(), bundleBudget()],

  // Self-hosted fonts via Astro's Fonts API (no runtime CDN).
  // Each family is downloaded at build time and served from your own domain.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Hanken Grotesk',
      cssVariable: '--font-hanken-grotesk',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
})
