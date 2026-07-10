# Deployment Guide

## 🚀 Overview

This guide covers deploying the Vite + React version of LexiCore to various hosting platforms.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Build Process](#build-process)
- [Deployment Platforms](#deployment-platforms)
- [Environment Variables](#environment-variables)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

## 🎯 Prerequisites

### Required Software

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher
- **Git**: Latest stable version

### Build Verification

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview locally
npm run preview
```

## 🔨 Build Process

### Build Configuration

The project uses Vite for building with the following configuration:

```javascript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
});
```

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── index.html
└── vite.svg
```

### Build Commands

```bash
# 1. Clean previous build
rm -rf dist

# 2. Run production build
npm run build

# 3. Verify build output
ls -la dist/
```

## 🌐 Deployment Platforms

### 1. Vercel (Recommended)

#### Automatic Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### vercel.json Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "functions": {},
  "routes": [
    {
      "src": "/assets/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 2. Netlify

#### Build Configuration

```toml
# netlify.toml
[build]
  base = "/"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

#### Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages

#### Build Configuration

```json
// package.json
{
  "scripts": {
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy:gh-pages": "npm run build && gh-pages -d dist"
  }
}
```

#### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. AWS S3 + CloudFront

#### Build and Upload

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### 5. Firebase Hosting

#### firebase.json Configuration

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Deploy
firebase deploy --only hosting
```

## 🔧 Environment Variables

### Development vs Production

```bash
# Development
npm run dev

# Production
npm run build
npm run preview
```

### Environment Configuration

```javascript
// src/config/environment.ts
export const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'default-api-url',
  environment: import.meta.env.MODE,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};
```

### Platform-Specific Variables

#### Vercel

```bash
# vercel.json
{
  "env": {
    "VITE_API_URL": "@api_url"
  }
}
```

#### Netlify

```bash
# netlify.toml
[build.environment]
  VITE_API_URL = "https://api.example.com"
```

## ⚡ Performance Optimization

### Build Optimization

```javascript
// vite.config.ts
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
```

### Caching Strategy

```javascript
// vite.config.ts
export default defineConfig({
  server: {
    headers: {
      '/assets/*': {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  },
});
```

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ],
});

# Analyze bundle
npm run build
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Build Fails

```bash
# Clear cache
rm -rf node_modules dist .vite
npm install
npm run build
```

#### 2. Routing Issues

Ensure your hosting platform supports SPA routing:

- All routes should serve `index.html`
- Configure fallback routing in hosting settings

#### 3. Asset Loading Issues

```bash
# Verify asset paths
ls -la dist/assets/

# Check build logs
npm run build -- --mode production
```

#### 4. Environment Variables Not Working

```bash
# Verify variable names start with VITE_
echo $VITE_API_URL

# Check build output
grep -r "VITE_" dist/
```

### Debug Commands

```bash
# Verify build configuration
cat vite.config.ts

# Check package.json scripts
cat package.json | jq '.scripts'

# Test production build locally
npm run preview

# Check for TypeScript errors
npx tsc --noEmit

# Verify Vite configuration
npx vite build --mode production --debug
```

### Performance Monitoring

```bash
# Check bundle size
npx vite-bundle-analyzer dist/

# Lighthouse audit
npx lighthouse http://your-domain.com

# Core Web Vitals
npx web-vitals https://your-domain.com
```

## 📊 Deployment Checklist

### Pre-Deployment

- [ ] All tests pass
- [ ] Build succeeds locally
- [ ] Environment variables configured
- [ ] Asset optimization enabled
- [ ] Error handling implemented
- [ ] Performance testing completed

### Post-Deployment

- [ ] Application loads correctly
- [ ] All routes work
- [ ] Assets load properly
- [ ] No console errors
- [ ] Performance metrics acceptable
- [ ] Mobile responsiveness verified

## 📚 Additional Resources

### Documentation

- [Vite Deployment Guide](https://vitejs.dev/guide/build)
- [React Router Deployment](https://reactrouter.com/en/main/route/route#concepts)
- [Netlify SPA Guide](https://docs.netlify.com/site-deployment/single-page-apps/)
- [Vercel Static Sites](https://vercel.com/docs/concepts/projects/static-sites)

### Tools

- [Bundle Analyzer](https://www.npmjs.com/package/rollup-plugin-visualizer)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Best Practices

- [Vite Performance](https://vitejs.dev/guide/build#build-optimizations)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Web Performance](https://web.dev/performance/)

---

This deployment guide provides comprehensive instructions for deploying the Vite + React version of LexiCore to various hosting platforms with optimization and troubleshooting guidance.
