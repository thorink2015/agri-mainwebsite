import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hectar.ro',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});
