// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';
import expressiveCode from 'astro-expressive-code';
import { expressiveCodeOptions } from './src/site.config';
import icon from 'astro-icon';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://fetz.dev',
  vite: {
    resolve: {
      alias: {
        $lib: fileURLToPath(new URL('./src/lib', import.meta.url)),
      },
    },
  },
  integrations: [
    expressiveCode(expressiveCodeOptions),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
    react(),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['nofollow','noopener','noreferrer'] }]],
    remarkRehype: { footnoteLabelProperties: { className: [''] } },
  },
  prefetch: true,
  output: 'static',
});
