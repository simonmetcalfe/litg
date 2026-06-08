import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://simonmetcalfe.github.io',
  base: '/litg',
  // Serve the existing assets/ folder as the static public directory.
  // Files under assets/ are available at /litg/<path> with no 'assets/' prefix.
  publicDir: './assets',
  vite: {
    plugins: [tailwindcss()],
  },
});
