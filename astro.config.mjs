import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'dist', // Asegura la carpeta de salida para Netlify
    build: {
        assets: './', // Asegura rutas relativas
    },
//   site: 'https://dulceriatemplate.netlify.app', // Opcional para SEO
  base: '/', // Importante para rutas en Netlify
});
