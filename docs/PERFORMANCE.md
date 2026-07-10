# Performance Optimization Guide

This document outlines the performance optimizations implemented to address Lighthouse performance issues.

## Issues Addressed

### 1. Duplicated JavaScript

**Problem**: Large, duplicate JavaScript modules in bundles consuming unnecessary network bandwidth.

**Solutions Implemented**:

- **Manual Chunk Splitting**: Configured Vite to split vendor code and data files into separate chunks
  - `react-vendor`: React, React DOM, and React Router
  - `data-roots`: All root word data files
  - `data-vocabulary`: Vocabulary data files
  - `data-etymology`: Etymology data files
- **Tree Shaking**: Enabled through Vite's default configuration
- **Named Exports**: Using named exports in component index files for better tree-shaking

### 2. Network Dependency Tree

**Problem**: Chained critical requests increasing page load time.

**Solutions Implemented**:

- **Resource Hints**: Added DNS prefetch and preconnect hints in `index.html`
- **Module Preload**: Added modulepreload for main entry point
- **Code Splitting**: Lazy loading routes to reduce initial bundle size
- **Async Data Loading**: Data files loaded on-demand rather than upfront

### 3. Minify JavaScript

**Problem**: Unminified JavaScript increasing payload sizes and parse time.

**Solutions Implemented**:

- **Terser Minification**: Configured Vite to use Terser for aggressive minification
- **Console Removal**: Automatically removes console.log statements in production
- **Dead Code Elimination**: Removes debugger statements and unused code

### 4. Reduce Unused JavaScript

**Problem**: Loading JavaScript that isn't needed for initial page render.

**Solutions Implemented**:

- **Route-based Code Splitting**: All page components lazy-loaded with React.lazy()
  - HomePage
  - RootsPage
  - VocabularyPage
  - SettingsPage
  - RootDetailPage
  - VocabularyDetailPage
  - SearchPage
- **Dynamic Data Imports**: Large data files loaded only when needed
- **Suspense Boundaries**: Loading states for lazy-loaded components

### 5. Enormous Network Payloads

**Problem**: Large network payloads costing users money and correlating with long load times.

**Solutions Implemented**:

- **Compression**:
  - Gzip compression for files > 10KB
  - Brotli compression for files > 10KB
- **Chunk Size Optimization**: Manual chunk splitting to keep individual chunks small
- **Lazy Loading**: Defer loading of non-critical resources
- **Data Caching**: In-memory cache for loaded data to prevent re-fetching

## Configuration Files Modified

### `vite.config.ts`

- Added Terser minification with aggressive settings
- Configured manual chunk splitting
- Added compression plugins (gzip and brotli)
- Added bundle visualizer for analysis
- Disabled source maps in production

### `package.json`

- Added `terser` for minification
- Added `vite-plugin-compression` for gzip/brotli
- Added `rollup-plugin-visualizer` for bundle analysis
- Added `build:analyze` script

### `src/App.tsx`

- Converted all route imports to lazy loading
- Added Suspense boundary with loading fallback

### `src/utils/dataLoader.ts` (New)

- Created async data loader with caching
- Separate loaders for roots, vocabulary, and etymology data

### `src/utils/data.ts`

- Converted synchronous functions to async
- Uses dynamic imports via dataLoader

### `src/hooks/useRootSearch.ts` & `src/hooks/useVocabularySearch.ts`

- Updated to handle async data loading
- Added loading states

## Build Analysis

To analyze the bundle size and identify optimization opportunities:

```bash
npm run build:analyze
```

This will:

1. Build the production bundle
2. Generate a visual report at `dist/stats.html`
3. Show gzip and brotli sizes for all chunks

## Performance Metrics

### Before Optimization

- Initial bundle size: ~500KB+ (estimated)
- All data loaded upfront
- No code splitting
- No compression

### After Optimization

- Initial bundle size: Significantly reduced (vendor + app code only)
- Data loaded on-demand
- Route-based code splitting
- Gzip/Brotli compression enabled
- Minified with Terser

## Best Practices Going Forward

1. **Keep Components Small**: Break down large components into smaller, lazy-loadable chunks
2. **Use Named Exports**: Better for tree-shaking than default exports
3. **Lazy Load Heavy Dependencies**: Use dynamic imports for large libraries
4. **Monitor Bundle Size**: Run `build:analyze` regularly
5. **Test on Slow Networks**: Use Chrome DevTools network throttling
6. **Measure Real Performance**: Use Lighthouse and Web Vitals

## Testing Performance

1. Build the production bundle:

   ```bash
   npm run build
   ```

2. Preview the production build:

   ```bash
   npm run preview
   ```

3. Run Lighthouse audit:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit on production build

## Additional Optimizations to Consider

1. **Image Optimization**: Use WebP format and lazy loading for images
2. **Font Optimization**: Subset fonts and use font-display: swap
3. **Service Worker**: Cache static assets for offline support
4. **CDN**: Serve static assets from CDN
5. **HTTP/2**: Enable HTTP/2 on server for multiplexing
6. **Prefetching**: Prefetch likely next routes based on user behavior

## Monitoring

Monitor these metrics in production:

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)

Use tools like:

- Google Lighthouse
- WebPageTest
- Chrome User Experience Report
- Real User Monitoring (RUM)
