import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dakrivo.com',
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: ['akriserv', 'akriserv.local'],
    },
    preview: {
      allowedHosts: ['akriserv', 'akriserv.local'],
    },
  },
});
