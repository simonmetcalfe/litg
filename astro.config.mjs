import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lostinthegrass.org.uk',
  base: '/',
  // Serve the existing assets/ folder as the static public directory.
  // Files under assets/ are available at /<path> with no 'assets/' prefix.
  publicDir: './assets',
  vite: {
    plugins: [tailwindcss()],
  },
});
