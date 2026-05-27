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
      // Wildcard already allows everything, but several AI / LLM crawlers honor
      // an explicit named rule before falling back to *. Listing them by name
      // makes our intent crystal clear: scrape away.
      policy: [
        { userAgent: '*', allow: '/' },
        // Search engines
        { userAgent: 'Googlebot', allow: '/' },
        { userAgent: 'Google-Extended', allow: '/' }, // Google AI training opt-in
        { userAgent: 'Bingbot', allow: '/' },
        { userAgent: 'DuckDuckBot', allow: '/' },
        { userAgent: 'Applebot', allow: '/' },
        { userAgent: 'Applebot-Extended', allow: '/' }, // Apple AI opt-in
        // OpenAI
        { userAgent: 'GPTBot', allow: '/' },
        { userAgent: 'ChatGPT-User', allow: '/' },
        { userAgent: 'OAI-SearchBot', allow: '/' },
        // Anthropic
        { userAgent: 'ClaudeBot', allow: '/' },
        { userAgent: 'Claude-Web', allow: '/' },
        { userAgent: 'anthropic-ai', allow: '/' },
        // Perplexity
        { userAgent: 'PerplexityBot', allow: '/' },
        { userAgent: 'Perplexity-User', allow: '/' },
        // Other AI / LLM crawlers
        { userAgent: 'CCBot', allow: '/' }, // Common Crawl (powers most LLM training)
        { userAgent: 'cohere-ai', allow: '/' },
        { userAgent: 'Meta-ExternalAgent', allow: '/' },
        { userAgent: 'FacebookBot', allow: '/' },
        { userAgent: 'YouBot', allow: '/' },
        { userAgent: 'Amazonbot', allow: '/' },
        { userAgent: 'Diffbot', allow: '/' },
        { userAgent: 'Bytespider', allow: '/' }, // ByteDance / Doubao
        { userAgent: 'MistralAI-User', allow: '/' },
      ],
    }),
    compress({
      CSS: false,
      HTML: { 'html-minifier-terser': { removeAttributeQuotes: false, removeRedundantAttributes: false } },
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  vite: { build: { cssMinify: 'esbuild' } },
});
