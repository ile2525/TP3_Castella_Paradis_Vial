import { defineConfig } from 'vite';
 
export default defineConfig({
    base: '/TP3_Castella_Paradis_Vial/',
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
                page1: 'pompei.html',
                //...mettre toutes les autres pages
            },
        },
    },
});
 