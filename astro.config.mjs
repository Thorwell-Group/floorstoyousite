import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://floorstoyouokc.com',
  trailingSlash: 'ignore',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }),
    robotsTxt({
      sitemap: ['https://floorstoyouokc.com/sitemap-index.xml'],
      policy: [{ userAgent: '*', allow: '/' }],
    }),
    compress({
      CSS: true,
      HTML: { 'html-minifier-terser': { removeAttributeQuotes: false } },
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  vite: { build: { cssMinify: 'lightningcss' } },
});
