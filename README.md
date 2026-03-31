# Multilingual Word Roots & Core Vocabulary Platform

## 🎯 English-Only MVP (Frontend Only)

A comprehensive English word roots and vocabulary learning platform built with Next.js 15, designed as a frontend-only MVP with plans for full-stack expansion.

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

This project follows Next.js 15 App Router best practices with a clear separation of concerns:

- **`app/`**: Next.js App Router (pages, layouts, routing)
- **`src/`**: Reusable components, data, and utilities

### Key Features
- **200+ English Word Roots**: Prefixes, suffixes, and base roots with examples and relationships
- **200+ Core Vocabulary Words**: Greetings, numbers, verbs, and daily-use nouns with IPA pronunciation
- **Pagination**: Efficient handling of large datasets (20 items per page)
- **Advanced Search**: Filter by roots/words with real-time results
- **Frontend-Only**: All data served from static TypeScript files
- **Static Export Ready**: `output: 'export'` configured for deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd multilingual-word-roots_and_core-vocabulary-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── roots/                   # Root explorer pages
│   ├── vocabulary/              # Vocabulary pages
│   └── search/                  # Search functionality
├── src/                         # Reusable code
│   ├── components/             # React components
│   │   ├── ui/                 # UI components
│   │   ├── shared/             # Layout components
│   │   └── features/           # Feature components
│   ├── data/                    # Static data
│   │   ├── roots/english.ts    # English roots dataset
│   │   └── vocabulary/english.ts # English vocabulary dataset
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Utility functions
│   ├── constants/               # App configuration
│   └── types/                   # TypeScript definitions
├── docs/                        # Comprehensive documentation
└── public/                      # Static assets
```

## 🧭 Navigation

- **Home**: Overview and navigation to all features
- **Root Explorer**: Browse 200+ English word roots with examples
- **Core Vocabulary**: Explore 200+ essential English words by category
- **Search**: Real-time search across roots and vocabulary with filters

## 📊 Data Coverage

### Word Roots (200+ entries)
- **Prefixes**: Greek and Latin prefixes (a-, anti-, auto-, bene-, etc.)
- **Suffixes**: Common English suffixes (-able, -tion, -ment, etc.)
- **Base Roots**: Fundamental roots (act, bio, graph, etc.)
- **Examples**: Multiple usage examples for each root
- **Relationships**: Connected roots for deeper understanding

### Core Vocabulary (200+ words)
- **Greetings**: Common greetings and farewells
- **Numbers**: Cardinal and ordinal numbers
- **Verbs**: Essential action words
- **Daily-use Nouns**: Common objects and concepts
- **IPA Pronunciation**: Phonetic transcription for each word
- **Example Sentences**: Contextual usage examples

## 🎯 MVP Scope

### Current Features (English Only)
- ✅ Comprehensive English roots database
- ✅ Core vocabulary with categories
- ✅ Pagination for performance
- ✅ Advanced search with filters
- ✅ Responsive design
- ✅ Static export capability
- ✅ Professional component architecture
- ✅ Comprehensive documentation

### Future Expansion
- 🔄 Multi-language support (Hindi, Spanish, French, German)
- 🔄 Audio pronunciation
- 🔄 Interactive quizzes and flashcards
- 🔄 Progress tracking
- 🔄 Full-stack backend integration

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Next.js with static export
- **Data**: Frontend-only static TypeScript files
- **Architecture**: Component-based with custom hooks

## 🔧 Development

### Adding New Languages

1. Create new data files:
   ```typescript
   // src/data/roots/[language].ts
   // src/data/vocabulary/[language].ts
   ```

2. Update barrel exports:
   ```typescript
   // src/data/roots/index.ts
   export { roots[Lang] } from './[language]';
   ```

3. Add language-specific pages and routing

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

Search is implemented in `src/lib/search.ts` with type-safe filtering:

```typescript
import { searchAll } from '@/lib/search';
import { useSearch } from '@/hooks/useSearch';
```

## 📦 Build & Deployment

### Static Export
```bash
npm run export
```
Generates static files in `out/` directory for deployment to any static hosting service.

### Deployment Options

- **Vercel** (Recommended): Automatic deployments with global CDN
- **Netlify**: Continuous deployment with form handling
- **GitHub Pages**: Free static hosting
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Firebase Hosting**: Google's hosting solution

See **[Deployment Guide](./docs/DEPLOYMENT.md)** for detailed instructions.

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build
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
- [x] Comprehensive English datasets
- [x] Pagination and search
- [x] Responsive design
- [x] Static export
- [x] Professional architecture
- [x] Comprehensive documentation

### Phase 2: Multi-language Support
- [ ] Hindi vocabulary and roots
- [ ] Language switching
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

**Note**: This is currently an English-only MVP designed to demonstrate the core functionality and architecture. The full multi-language platform will be built upon this foundation. See our **[documentation](./docs/README.md)** for comprehensive guides and API references.
