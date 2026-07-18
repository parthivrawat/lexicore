# LexiCore - Word Roots & Core Vocabulary Platform

## 🎯 Multilingual Frontend MVP

A comprehensive word roots and core vocabulary learning platform built with **Vite + React**, designed as a frontend-only MVP with multilingual learning data and plans for full-stack expansion.

## 📚 Documentation

For comprehensive documentation, visit our **[docs/](./docs/README.md)** directory:

- 📖 **[Getting Started](./docs/README.md)** - Quick start and overview
- 🏗️ **[Architecture](./docs/ARCHITECTURE.md)** - Complete system architecture
- 🧩 **[Components](./docs/COMPONENTS.md)** - UI components and usage
- 📊 **[Data Models](./docs/DATA.md)** - Data structures and schemas
- 🛠️ **[Development Guide](./docs/DEVELOPMENT.md)** - Development setup and guidelines
- 🚀 **[Deployment Guide](./docs/DEPLOYMENT.md)** - Build and deployment instructions
- 🔌 **[API Reference](./docs/API.md)** - Available utilities and hooks
- 🤝 **[Contributing](./docs/CONTRIBUTING.md)** - Contribution guidelines

## 🏗️ Architecture

This project follows modern React + Vite best practices with a clear separation of concerns:

- **`src/`**: All React components, data, and utilities
- **`src/pages/`**: Route-based page components
- **`src/components/`**: Reusable UI and feature components
- **`src/contexts/`**: React context providers (Language, Settings, Theme)
- **`src/hooks/`**: Custom React hooks (`usePagination`, `useSearch`, `useRootSearch`, `useVocabularySearch`, `useLanguageData`)
- **`src/utils/`**: Utility functions and helpers (`format`, `data`, `search`, `dataLoader`, `wordOfTheDay`, `audio`, `interpolate`)
- **`src/data/`**: Static data files (roots, vocabulary, etymology)
- **`index.html`**: Vite entry point

### Key Features

- **250+ Word Roots**: Prefixes, suffixes, and base roots with examples and relationships across multiple languages
- **2,500+ Core Vocabulary Words**: Greetings, numbers, verbs, nouns, adjectives, adverbs, prepositions, and function words with IPA pronunciation and multi-accent support
- **Etymology Support**: Historical origin, evolution timeline, cognates, and root composition for vocabulary words
- **Pagination**: Efficient handling of large datasets with configurable items per page
- **Advanced Search**: Relevance-ranked search across roots, words, examples, and etymology
- **Frontend-Only**: All data served from static JSON files loaded on demand
- **Multilingual Learning Data**: 20+ learning languages with dedicated roots, vocabulary, and etymology datasets
- **UI Language Support**: English and French interface translations
- **Theme Support**: Light, dark, and system theme modes
- **Settings Management**: User preferences for pagination, search, TTS rate, accent, and language
- **PWA Support**: Installable web app with service worker and web app manifest

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd lexicore

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── src/                         # All source code
│   ├── components/             # React components
│   │   ├── ui/                 # UI components
│   │   ├── shared/             # Layout components
│   │   ├── features/           # Feature components
│   │   └── Layout.tsx          # Main layout component
│   ├── pages/                  # Route-based page components
│   │   ├── HomePage.tsx
│   │   ├── RootsPage.tsx
│   │   ├── RootDetailPage.tsx
│   │   ├── VocabularyPage.tsx
│   │   ├── VocabularyDetailPage.tsx
│   │   ├── SearchPage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/                   # Static data
│   │   ├── roots/              # Word roots datasets
│   │   ├── vocabulary/         # Vocabulary datasets
│   │   └── etymology/          # Etymology data
│   ├── hooks/                  # Custom React hooks
│   │   ├── usePagination.ts
│   │   ├── useSearch.ts
│   │   ├── useRootSearch.ts
│   │   ├── useVocabularySearch.ts
│   │   └── useLanguageData.ts
│   ├── utils/                  # Utility functions
│   │   ├── format.ts
│   │   ├── data.ts
│   │   ├── search.ts
│   │   ├── dataLoader.ts
│   │   ├── audio.ts
│   │   ├── interpolate.ts
│   │   └── wordOfTheDay.ts
│   ├── contexts/               # React contexts
│   │   ├── LanguageContext.tsx
│   │   ├── SettingsContext.tsx
│   │   └── ThemeContext.tsx
│   ├── constants/              # App configuration (languages, accents, categories, learning tips)
│   ├── types/                  # TypeScript definitions
│   │   ├── index.ts            # Core data types
│   │   └── settings.ts         # Settings and language types
│   ├── test/                   # Test setup
│   ├── lib/                    # Shared library utilities
│   ├── index.ts                # Source barrel exports
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Application entry point
├── docs/                       # Comprehensive documentation
├── public/                     # Static assets
├── index.html                  # Vite entry point
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 🧭 Navigation

- **Home**: Overview, statistics, word of the day, and navigation to all features
- **Root Explorer**: Browse word roots with examples (filtered by type)
- **Core Vocabulary**: Explore vocabulary words by category with etymology details
- **Search**: Relevance-ranked search across roots, vocabulary, and etymology with type filters

## 📊 Data Coverage

### Word Roots (250+ entries)

- **Prefixes**: Greek and Latin prefixes (a-, anti-, auto-, bene-, etc.)
- **Suffixes**: Common English suffixes (-able, -tion, -ment, etc.)
- **Base Roots**: Fundamental roots (act, bio, graph, etc.)
- **Examples**: Multiple usage examples for each root
- **Relationships**: Connected roots for deeper understanding
- **Multilingual**: Root datasets for 20+ learning languages

### Core Vocabulary (2,500+ words)

- **Greetings**: Common greetings and farewells
- **Numbers**: Cardinal and ordinal numbers
- **Verbs**: Essential action words
- **Daily-use Nouns**: Common objects and concepts
- **Adjectives**, **Adverbs**, **Prepositions**, **Function Words**: Expanded grammatical coverage
- **IPA Pronunciation**: Phonetic transcription and multi-accent variants
- **Example Sentences**: Contextual usage examples
- **Etymology**: Historical origin and evolution timeline where available

## 🎯 MVP Scope

### Current Features

- ✅ Comprehensive roots and vocabulary databases
- ✅ Multilingual learning data (20+ languages)
- ✅ English and French UI translations
- ✅ Core vocabulary with categories and etymology
- ✅ Configurable pagination and search
- ✅ Responsive design with light/dark/system themes
- ✅ Static export capability
- ✅ Professional component architecture
- ✅ PWA support with service worker and web app manifest
- ✅ Comprehensive documentation

### Future Expansion

- 🔄 Multi-language support (Hindi, Spanish, French, German)
- 🔄 Audio pronunciation
- 🔄 Interactive quizzes and flashcards
- 🔄 Progress tracking
- 🔄 Full-stack backend integration

## 🛠️ Technology Stack

- **Framework**: React 19 with Vite 6
- **Routing**: React Router v6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Data**: Frontend-only static TypeScript files
- **Architecture**: Component-based with custom hooks
- **State Management**: React Context API (Language, Settings, Theme)
- **PWA**: vite-plugin-pwa with Workbox
- **Compression**: gzip and brotli via vite-plugin-compression
- **Testing**: Vitest with React Testing Library

## 🔧 Development

### Adding New Languages

1. Create a new language directory under each data module:

   ```typescript
   // src/data/roots/[language]/index.ts
   // src/data/roots/[language]/prefixes.json
   // src/data/roots/[language]/suffixes.json
   // src/data/roots/[language]/bases.json
   // src/data/vocabulary/[language]/index.ts
   // src/data/vocabulary/[language]/[category].json
   // src/data/etymology/[language]/index.ts
   // src/data/etymology/[language]/[category].json
   ```

2. Add the language to `src/constants/languages.ts`:

   ```typescript
   export const LEARNING_LANGUAGES = [
     // ... existing languages
     {
       id: 'newlanguage',
       code: 'nl',
       exportSuffix: 'Nl',
       flag: '🇳🇱',
       nameEn: 'New Language',
       nameFr: 'Nouvelle Langue',
       accent: 'newlanguage',
       bcp47: 'nl-NL',
     },
   ] as const;
   ```

3. Update barrel exports:

   ```typescript
   // src/data/roots/index.ts
   export { rootsNl } from './newlanguage';
   // src/data/vocabulary/index.ts
   export { vocabularyNl } from './newlanguage';
   // src/data/etymology/index.ts
   export { etymologyData as etymologyDataNl } from './newlanguage';
   ```

4. Add an accent entry to `src/constants/accents.ts` if the language requires a new accent.

### Component Development

Components are organized in `src/components/` with clear separation:

```typescript
// Import multiple components
import { Button, AppShell, RootCard } from '@/components';

// Import specific categories
import { Button } from '@/components/ui';
import { AppShell, Pagination } from '@/components/shared';
import { RootCard, VocabCard } from '@/components/features';
```

### Search Functionality

Search is implemented in `src/utils/search.ts` with relevance scoring, fuzzy matching, and etymology support:

```typescript
import { useSearch } from '@/hooks/useSearch';
import { createSearchableRoot, calculateRootRelevance } from '@/utils/search';
```

For domain-specific search, use `useRootSearch` or `useVocabularySearch`.

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

Generates optimized static files in `dist/` directory.

### Preview Build

```bash
npm run preview
```

Preview the production build locally.

### Deployment Options

- **Vercel** (Recommended): Automatic deployments with global CDN
- **Netlify**: Continuous deployment with form handling
- **GitHub Pages**: Free static hosting
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Firebase Hosting**: Google's hosting solution

See **[Deployment Guide](./docs/DEPLOYMENT.md)** for detailed instructions.

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Linting
npm run lint

# Formatting
npm run format

# Build verification
npm run build

# Preview production build
npm run preview

# Analyze bundle
npm run build:analyze
```

## 🤝 Contributing

We welcome contributions! Please see our **[Contributing Guide](./docs/CONTRIBUTING.md)** for details.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Types of Contributions

- 🐛 **Bug fixes** and improvements
- ✨ **New features** and components
- 📚 **Documentation** and examples
- 🌐 **Language data** and translations
- 🎨 **Design** and accessibility improvements
- ⚡ **Performance** optimizations

## 📄 License

This project is licensed under the MIT License.

## 🔮 Roadmap

### Phase 1: MVP Enhancement (Current)

- [x] Comprehensive multilingual datasets
- [x] Configurable pagination and search
- [x] Responsive design with themes
- [x] Static export
- [x] Professional architecture
- [x] Comprehensive documentation

### Phase 2: Multi-language Support

- [x] Language switching (learning and UI)
- [ ] Hindi vocabulary and roots data completeness
- [ ] RTL language support

### Phase 3: Interactive Features

- [ ] Audio pronunciation
- [ ] Quiz system
- [ ] Progress tracking
- [ ] Spaced repetition

### Phase 4: Full-stack Integration

- [ ] Backend API
- [ ] User accounts
- [ ] Progress persistence
- [ ] Collaborative features

## 📞 Support

For questions, issues, or contributions:

1. **Check the documentation** in the `/docs` directory
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Join discussions** for questions and ideas

---

**Note**: This is a multilingual frontend MVP with 20+ learning languages and English/French UI translations. The full AI-powered and backend-integrated platform will be built upon this foundation. See our **[documentation](./docs/README.md)** for comprehensive guides and API references.
