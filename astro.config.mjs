import { defineConfig } from 'astro/config';

export default defineConfig({
    outDir: 'dist',
    build: {
        assets: '',
    },
    base: '/',
    vite: {
        build: {
        rollupOptions: {
            output: {
            assetFileNames: "assets/[name].[hash][extname]",     
            entryFileNames: "assets/[name].[hash].js",           
            chunkFileNames: "assets/[name].[hash].js",           
            }
        }
        }
    }
});
