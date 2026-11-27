import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

// Plugin to generate static index.html stubs for all routes upon build
// This completely eliminates "404 Page Not Found" on any static web host, VSCode Live Server, Apache, Nginx, or GitHub Pages.
function generateSpaRouteFallbacks(): Plugin {
  return {
    name: 'spa-route-fallbacks',
    closeBundle() {
      const routes = [
        'about',
        'services',
        'services/electro-mechanical',
        'services/construction',
        'services/it',
        'projects',
        'contact',
      ];
      const distDir = fileURLToPath(new URL('./dist', import.meta.url));
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;
      const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

      // 1. Copy index.html to 404.html in dist
      fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);

      // 2. Create subdirectories with index.html for each route
      for (const route of routes) {
        const routeDir = path.join(distDir, route);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  appType: 'spa',
  plugins: [react(), generateSpaRouteFallbacks()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@/data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@/routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
      '@/animations': fileURLToPath(new URL('./src/animations', import.meta.url)),
      '@/hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@/lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
      '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@/styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
    },
  },
});
