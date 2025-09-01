// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0', // Permite conexiones desde cualquier IP
      port: 4321,
      strictPort: true, // Falla si el puerto no está disponible
      allowedHosts: [
        'localhost',
        '127.0.0.1',
      ],
      hmr: {
        host: 'localhost',
        port: 24678
      }
    }
  },
  i18n: {
    defaultLocale: 'es', 
    locales: ['es', 'en', 'dt', 'ar'], 
    routing: {
      prefixDefaultLocale: false, // El español no tendrá prefijo (/es)
    }
  }
});

