# Documentation

Welcome to the documentation for LexiCore - Word Roots & Core Vocabulary Platform.

## 📚 Documentation Structure

- [Architecture Overview](./ARCHITECTURE.md) - Complete system architecture
- [Component Library](./COMPONENTS.md) - UI components and usage
- [Data Models](./DATA.md) - Data structures and schemas
- [Development Guide](./DEVELOPMENT.md) - Development setup and guidelines
- [Deployment Guide](./DEPLOYMENT.md) - Build and deployment instructions
- [API Reference](./API.md) - Available APIs and utilities
- [Contributing](./CONTRIBUTING.md) - Contribution guidelines

## 🚀 Quick Start

1. **Setup Development Environment**
   ```bash
   npm install
   npm run dev
   ```

2. **Key Architecture Concepts**
   - Frontend-only MVP with static data
   - Component-based architecture
   - Custom hooks for state management
   - TypeScript for type safety

3. **Main Features**
   - Root Explorer (200+ English word roots)
   - Core Vocabulary (200+ essential words)
   - Smart Search with filters
   - Etymology support with historical data
   - Multi-language context for future i18n
   - Theme support (light/dark mode)
   - Settings management
   - Responsive design

## 🏗️ Architecture Highlights

### Modern Structure
- **Vite + React**: Fast development with Vite 6 and React 19
- **React Router**: Client-side routing with React Router v6
- **Component Organization**: ui/shared/features separation
- **Custom Hooks**: Reusable stateful logic
- **Context API**: Language, Settings, and Theme contexts
- **Type Safety**: Comprehensive TypeScript coverage

### Key Directories
```
src/
├── constants/     # App configuration
├── types/        # TypeScript definitions
├── hooks/        # Custom React hooks
├── utils/        # Utility functions
├── contexts/     # React context providers
├── data/         # Static datasets
├── pages/        # Route-based page components
└── components/   # React components
```

## 📖 Detailed Documentation

Each documentation file covers specific aspects:

- **[Architecture](./ARCHITECTURE.md)**: System design and patterns
- **[Components](./COMPONENTS.md)**: Component library and usage
- **[Data](./DATA.md)**: Data models and structures
- **[Development](./DEVELOPMENT.md)**: Development workflow
- **[Deployment](./DEPLOYMENT.md)**: Build and deployment
- **[API](./API.md)**: Available utilities and hooks
- **[Contributing](./CONTRIBUTING.md)**: How to contribute

## 🎯 Development Philosophy

1. **Frontend-First**: MVP approach with static data
2. **Component-Based**: Reusable, composable components
3. **Type-Safe**: Comprehensive TypeScript usage
4. **Performance**: Optimized for static generation
5. **Accessibility**: Semantic HTML and ARIA support
6. **Responsive**: Mobile-first design approach

## 🔮 Future Expansion

The architecture is designed for:
- Multi-language support
- Backend integration
- Advanced features (quizzes, progress tracking)
- Microservices architecture
- Real-time collaboration

## 📞 Support

For questions or issues:
1. Check the relevant documentation
2. Review the component examples
3. Examine the data structures
4. Follow the development guidelines
