import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: netlify(),
  image: {
    remotePatterns: [
      {
        protocol: 'https'
      },
      {
        protocol: 'http'
      }
    ]
  },
  site: 'https://sotterraneiedragoni.com',
  integrations: [preact(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});