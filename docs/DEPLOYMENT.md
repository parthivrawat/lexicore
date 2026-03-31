# Deployment Guide

## 🚀 Deployment Documentation

This guide covers building, testing, and deploying the multilingual word roots and vocabulary platform.

## 📋 Table of Contents

- [Overview](#overview)
- [Build Process](#build-process)
- [Static Export](#static-export)
- [Deployment Options](#deployment-options)
- [Environment Configuration](#environment-configuration)
- [Performance Optimization](#performance-optimization)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

The application is designed as a **static site** that can be deployed to any static hosting service. This approach provides:

- **Fast Loading**: No server-side processing required
- **High Availability**: CDN-friendly static assets
- **Low Cost**: Minimal hosting expenses
- **Security**: No server vulnerabilities
- **Scalability**: Handles high traffic with CDN

## 🔨 Build Process

### Prerequisites

```bash
# Verify Node.js version
node --version  # Should be 18.0+

# Verify npm version
npm --version   # Should be 8.0+

# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Commands

```bash
# Development build (with debugging)
npm run build

# Production build (optimized)
npm run build

# Static export (for deployment)
npm run export
```

### Build Configuration

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
```

### Build Output

```
out/
├── _next/
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── chunks/
├── roots/
├── vocabulary/
├── search/
├── index.html
├── 404.html
└── manifest.json
```

## 📦 Static Export

### Export Process

```bash
# 1. Clean previous build
rm -rf out .next

# 2. Run static export
npm run export

# 3. Verify output
ls -la out/
```

### Export Features

- **Static HTML**: All pages pre-rendered as HTML
- **Optimized Assets**: CSS and JS minified and optimized
- **Image Optimization**: Images processed for web
- **Font Optimization**: Fonts optimized for loading
- **Manifest Generation**: PWA manifest included

### Export Verification

```bash
# Check file sizes
du -sh out/

# Verify critical files
ls out/index.html
ls out/_next/static/css/
ls out/_next/static/js/

# Test locally
npx serve out -p 3000
```

## 🌐 Deployment Options

### 1. Vercel (Recommended)

#### Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "installCommand": "npm install",
  "framework": "nextjs",
  "functions": {},
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

#### Features

- **Automatic HTTPS**: SSL certificates included
- **Global CDN**: Fast content delivery
- **Automatic Deployments**: Git-based deployments
- **Analytics**: Built-in performance analytics
- **Preview Deployments**: Test changes before production

### 2. Netlify

#### Setup

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

#### Configuration

```toml
# netlify.toml
[build]
  publish = "out"
  command = "npm run export"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

#### Features

- **Continuous Deployment**: Automatic from Git
- **Form Handling**: Built-in form processing
- **Functions**: Serverless functions available
- **Split Testing**: A/B testing capabilities
- **Analytics**: Visitor analytics included

### 3. GitHub Pages

#### Setup

```bash
# Build for GitHub Pages
npm run export

# Deploy to gh-pages branch
npm run deploy:gh-pages
```

#### Configuration

```json
// package.json scripts
{
  "scripts": {
    "export": "next export",
    "deploy:gh-pages": "gh-pages -d out"
  }
}
```

#### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build and export
      run: npm run export
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

### 4. AWS S3 + CloudFront

#### Setup

```bash
# Install AWS CLI
npm i -g aws-cli

# Configure AWS credentials
aws configure

# Deploy to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

#### Configuration

```json
// package.json scripts
{
  "scripts": {
    "deploy:s3": "aws s3 sync out/ s3://your-bucket-name --delete",
    "deploy:cloudfront": "aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths '/*'",
    "deploy:aws": "npm run deploy:s3 && npm run deploy:cloudfront"
  }
}
```

### 5. Firebase Hosting

#### Setup

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Initialize Firebase
firebase init hosting

# Deploy
firebase deploy
```

#### Configuration

```json
// firebase.json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## ⚙️ Environment Configuration

### Environment Variables

```bash
# .env.local (development)
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Word Roots & Vocabulary"
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# .env.production (production)
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME="Word Roots & Vocabulary"
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Build Configuration

```javascript
// next.config.mjs
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  
  // Production optimizations
  ...(isProduction && {
    compress: true,
    poweredByHeader: false,
  }),
};

export default nextConfig;
```

### Domain Configuration

#### Custom Domain (Vercel)

```bash
# Add custom domain
vercel domains add yourdomain.com

# Verify DNS
vercel domains inspect
```

#### Custom Domain (Netlify)

```bash
# Add custom domain via Netlify dashboard
# or via CLI
netlify domains add yourdomain.com
```

## ⚡ Performance Optimization

### Build Optimization

```javascript
// next.config.mjs
const nextConfig = {
  // ... existing config
  
  // Optimization settings
  swcMinify: true,
  compress: true,
  
  // Bundle analyzer (development)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin());
      return config;
    },
  }),
};
```

### Asset Optimization

```typescript
// Image optimization (future)
import Image from 'next/image';

export function OptimizedImage({ src, alt, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      placeholder="blur"
      {...props}
    />
  );
}
```

### Critical CSS

```css
/* Critical CSS inlined in layout */
.critical-header {
  /* Above-the-fold styles */
}

/* Non-critical CSS loaded asynchronously */
.non-critical-content {
  /* Below-the-fold styles */
}
```

### Performance Budgets

```json
// .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
  },
};
```

## 📊 Monitoring

### Performance Monitoring

#### Google Analytics

```typescript
// src/components/analytics/GoogleAnalytics.tsx
import Script from 'next/script';

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  );
}
```

#### Core Web Vitals

```typescript
// src/components/analytics/WebVitals.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  gtag('event', metric.name, {
    value: metric.value,
    metric_id: metric.id,
  });
}

export function reportWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}
```

### Error Monitoring

#### Sentry Integration (future)

```typescript
// src/lib/monitoring.ts
import * as Sentry from '@sentry/nextjs';

export function initMonitoring() {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
  });
}

export function captureError(error: Error, context?: any) {
  Sentry.captureException(error, { extra: context });
}
```

### Health Checks

```typescript
// src/pages/api/health.ts (future backend)
export default function handler(req, res) {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
  });
}
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Failures

```bash
# Clear cache
rm -rf .next out node_modules
npm install

# Check for TypeScript errors
npm run type-check

# Check for ESLint errors
npm run lint

# Rebuild
npm run build
```

#### 2. Static Export Issues

```bash
# Verify Next.js configuration
cat next.config.mjs

# Check for dynamic imports
grep -r "dynamic(" src/

# Verify no server-side code
grep -r "getServerSideProps\|getStaticProps" app/
```

#### 3. Deployment Issues

```bash
# Check build output
ls -la out/

# Test locally
npx serve out -p 3000

# Check routing
curl -I http://localhost:3000/roots
```

#### 4. Performance Issues

```bash
# Analyze bundle size
npm run analyze

# Check Lighthouse scores
npx lighthouse http://localhost:3000

# Monitor network requests
# Open DevTools > Network tab
```

### Debugging Checklist

- [ ] Dependencies installed correctly
- [ ] Environment variables set
- [ ] Build completes without errors
- [ ] Static export generates files
- [ ] Local testing works
- [ ] DNS configured correctly
- [ ] SSL certificates valid
- [ ] Performance metrics acceptable

### Support Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Deployment Guide](https://vercel.com/docs/concepts/deployments)
- [Netlify Deployment Guide](https://docs.netlify.com/site-deployment/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## 📋 Deployment Checklist

### Pre-Deployment

- [ ] Code reviewed and approved
- [ ] All tests passing
- [ ] Build successful
- [ ] Performance metrics acceptable
- [ ] Security scan completed
- [ ] Documentation updated

### Deployment

- [ ] Backup current version
- [ ] Deploy to staging first
- [ ] Test staging deployment
- [ ] Deploy to production
- [ ] Verify production deployment

### Post-Deployment

- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify user functionality
- [ ] Update documentation
- [ ] Notify team of deployment

This deployment guide provides comprehensive instructions for deploying the application to various hosting platforms with best practices for performance and reliability.
