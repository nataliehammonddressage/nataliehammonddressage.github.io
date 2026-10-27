// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { copyFile } from 'node:fs/promises';

export default defineConfig({
  site: 'https://www.nataliehammond.com',
  // "preserve" keeps the URLs the Jekyll site used: blog posts live at
  // /blog/slug (no trailing slash) and pages at /about/, /training/, etc.
  trailingSlash: 'ignore',
  // Astro's compressor drops the space in "text\n<a>" in this version, gluing words to links
  compressHTML: false,
  build: {
    format: 'preserve',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/contact/thanks'),
      // Only blog posts are served without a trailing slash; every other page
      // is a directory index, so list those with the slash to skip a redirect.
      serialize(item) {
        const { pathname } = new URL(item.url);
        if (!/^\/blog\/[^/]+$/.test(pathname) && !pathname.endsWith('/')) item.url += '/';
        return item;
      },
    }),
    // The old Jekyll site served /sitemap.xml and that's the URL search engines
    // know, so publish the full URL list there too. Runs after the sitemap
    // integration has written its files.
    {
      name: 'sitemap-xml',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await copyFile(new URL('sitemap-0.xml', dir), new URL('sitemap.xml', dir));
        },
      },
    },
  ],
});
