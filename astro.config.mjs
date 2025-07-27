import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      formats: ['image/avif'],
      minimumCacheTTL: 60,
      remotePatterns: [
        {
          protocol: 'https'
        },
        {
          protocol: 'http'
        }
      ],
      sizes: [160, 320, 640, 1280]
    },
    webAnalytics: {
      enabled: true
    }
  }),
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
