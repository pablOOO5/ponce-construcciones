// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://TUUSUARIO.github.io',
  base: '/ponce-construcciones',
  output: 'static',
  build: {
    assets: 'assets'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
