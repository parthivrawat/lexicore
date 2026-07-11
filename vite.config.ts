import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'LexiCore - Word Roots & Core Vocabulary',
        short_name: 'LexiCore',
        description: 'A multilingual platform for word roots and core vocabulary learning',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone'],
        background_color: '#ffffff',
        theme_color: '#0f172a',
        orientation: 'portrait',
        lang: 'en',
        icons: [
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
        ],
        screenshots: [
          {
            src: '/screenshots/desktop.png',
            sizes: '1281x801',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Desktop View',
          },
          {
            src: '/screenshots/mobile.png',
            sizes: '385x845',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Mobile View',
          },
        ],
        protocol_handlers: [
          {
            protocol: 'web+lexicore',
            url: '/lookup?word=%s',
          },
        ],
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,json,ico,png,svg,woff,woff2,ttf}'],
        globIgnores: ['**/stats.html'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true,
    target: 'es2022',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
          const dataMatch = /\/data\/(roots|vocabulary|etymology)\/([^/]+)/.exec(id);
          if (dataMatch) {
            const [, type, filename] = dataMatch;
            const language = filename.replace(/\.[^.]+$/, '');
            return `data-${type}-${language}`;
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
