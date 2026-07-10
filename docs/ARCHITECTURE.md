# Architecture Documentation

## 🏗️ System Architecture

This document outlines the complete architecture of LexiCore - Word Roots & Core Vocabulary Platform.

## 📋 Table of Contents

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Type System](#type-system)
- [Performance Considerations](#performance-considerations)
- [Scalability](#scalability)

## 🎯 Overview

The platform is built as a **frontend-only MVP** using Vite 6 and React 19 with React Router v6, designed to be easily scalable to a full-stack application.

### Core Principles

- **Frontend-First**: Static data, no backend dependencies
- **Component-Based**: Reusable, composable components
- **Type-Safe**: Comprehensive TypeScript coverage
- **Performance**: Optimized for static generation
- **Accessibility**: Semantic HTML and ARIA support
- **Responsive**: Mobile-first design

## 📁 Directory Structure

```
├── src/                         # All source code
│   ├── components/              # React components
│   │   ├── ui/                 # Basic UI components
│   │   ├── shared/             # Layout components
│   │   ├── features/           # Feature-specific components
│   │   └── Layout.tsx          # Main layout
│   ├── pages/                   # Route-based page components
│   │   ├── HomePage.tsx
│   │   ├── RootsPage.tsx
│   │   ├── RootDetailPage.tsx
│   │   ├── VocabularyPage.tsx
│   │   ├── VocabularyDetailPage.tsx
│   │   ├── SearchPage.tsx
│   │   └── SettingsPage.tsx
│   ├── contexts/                # React context providers
│   │   ├── LanguageContext.tsx
│   │   ├── SettingsContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/                   # Custom React hooks
│   │   ├── usePagination.ts
│   │   ├── useSearch.ts
│   │   ├── useRootSearch.ts
│   │   └── useVocabularySearch.ts
│   ├── utils/                   # Utility functions
│   │   ├── format.ts
│   │   ├── data.ts
│   │   ├── search.ts
│   │   ├── interpolate.ts
│   │   └── wordOfTheDay.ts
│   ├── constants/               # App configuration
│   ├── types/                   # TypeScript definitions
│   ├── data/                    # Static datasets
│   │   ├── roots/              # Word roots datasets
│   │   ├── vocabulary/         # Vocabulary datasets
│   │   └── etymology/          # Etymology data
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Application entry point
├── index.html                   # Vite entry point
└── vite.config.ts               # Vite configuration
```

## 🧩 Component Architecture

### Component Categories

#### 1. UI Components (`src/components/ui/`)

Basic, reusable components with no business logic.

```typescript
// Example: Button component
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

#### 2. Shared Components (`src/components/shared/`)

Layout and structural components used across the application.

```typescript
// Example: AppShell component
export function AppShell({ children }: PropsWithChildren) {
  // Navigation, header, footer logic
}
```

#### 3. Feature Components (`src/components/features/`)

Domain-specific components that encapsulate business logic.

```typescript
// Example: RootCard component
export function RootCard({ root }: RootCardProps) {
  // Root-specific display logic
}
```

### Component Patterns

1. **Composition over Inheritance**: Components are composed together
2. **Props Interface**: Clear TypeScript interfaces for all props
3. **Default Props**: Sensible defaults for optional properties
4. **Error Boundaries**: Graceful error handling
5. **Accessibility**: ARIA attributes and semantic HTML

## 🔄 State Management

### Custom Hooks Pattern

State management is handled through custom hooks that encapsulate business logic:

```typescript
// usePagination Hook
export function usePagination(totalItems: number, itemsPerPage: number) {
  // Pagination state and logic
  return { currentPage, totalPages, setPage, ... };
}

// useSearch Hook
export function useSearch() {
  // Search state and filtering logic
  return { query, filter, results, handleQueryChange, ... };
}
```

### State Categories

1. **URL State**: Pagination, search parameters (managed by React Router)
2. **Component State**: Form inputs, UI interactions
3. **Hook State**: Shared business logic (pagination, search)
4. **Context State**: Language, settings, theme (managed by React Context)
5. **Static Data**: Word roots and vocabulary (immutable)

## 🌊 Data Flow

### Data Sources

```
Static Data Files (src/data/)
    ↓ imports
Pages (src/pages/)
    ↓ props
Components (src/components/)
    ↓ utilities
Hooks (src/hooks/)
```

### Data Layers

1. **Static Layer**: TypeScript files with datasets
2. **Utility Layer**: Data transformation and formatting
3. **Hook Layer**: State management and business logic
4. **Context Layer**: Global state (language, settings, theme)
5. **Component Layer**: UI rendering and interactions
6. **Page Layer**: Route-specific logic and data fetching

### Example Data Flow

```typescript
// Static data
import { rootsEn } from '@/data/roots/english';

// Hook management
const pagination = usePagination(rootsEn.length, 20);

// Component rendering
<Pagination {...pagination} />
```

## 🔷 Type System

### Type Organization

```typescript
// src/types/index.ts - Centralized type definitions
export type WordRoot = {/* ... */};
export type VocabWord = {/* ... */};
export type SearchItem = {/* ... */};
```

### Type Safety Features

1. **Strict TypeScript**: All code strictly typed
2. **Interface Segregation**: Small, focused interfaces
3. **Union Types**: For variant behaviors
4. **Generic Types**: For reusable components
5. **Type Guards**: Runtime type checking

### Type Examples

```typescript
// Discriminated unions
export type SearchItem =
  { kind: 'root'; id: string /* ... */ } | { kind: 'word'; id: string /* ... */ };

// Generic components
export function Card<T extends { id: string }>({ item }: CardProps<T>) {
  // Type-safe card component
}
```

## ⚡ Performance Considerations

### Static Generation

- **Vite Build**: Optimized production build with code splitting
- **Client-Side Routing**: React Router for SPA navigation
- **Tree Shaking**: Automatic dead code elimination
- **Code Splitting**: Dynamic imports for optimal loading

### Optimization Strategies

1. **Code Splitting**: Automatic with Vite
2. **Tree Shaking**: Unused code elimination
3. **Bundle Analysis**: Regular bundle size monitoring
4. **Memoization**: React.memo for expensive components
5. **Virtualization**: For large lists (future enhancement)

### Performance Metrics

- **Lighthouse Score**: Target 90+ across all categories
- **Bundle Size**: Keep under 500KB gzipped
- **Load Time**: Under 2 seconds on 3G
- **TTI**: Under 3 seconds

## 📈 Scalability

### Horizontal Scalability

1. **Multi-Language**: Easy addition of new language datasets
2. **Feature Expansion**: Clear patterns for new features
3. **Component Library**: Reusable across projects
4. **Micro-Frontends**: Potential for team-based development

### Vertical Scalability

1. **Backend Integration**: Ready for API migration
2. **Database Integration**: Prepared for dynamic data
3. **Authentication**: Patterns for user accounts
4. **Real-time Features**: WebSocket integration ready

### Migration Paths

#### Frontend to Full-Stack

```typescript
// Current: Static import
import { rootsEn } from '@/data/roots/english';

// Future: API call
const { data: rootsEn } = await fetch('/api/roots');
```

#### Component Evolution

```typescript
// Current: Static component
export function RootCard({ root }: RootCardProps) {
  // Static rendering
}

// Future: Enhanced with interactions
export function RootCard({ root, onFavorite, onShare }: RootCardProps) {
  // Interactive features
}
```

## 🔧 Development Patterns

### File Naming Conventions

- **Components**: PascalCase (`RootCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`usePagination.ts`)
- **Utilities**: camelCase (`formatCategory.ts`)
- **Types**: camelCase (`index.ts` in types directory)
- **Constants**: UPPER_SNAKE_CASE (`APP_CONFIG`)

### Import Patterns

```typescript
// Barrel exports for clean imports
import { Button, AppShell, RootCard } from '@/components';
import { usePagination, useSearch } from '@/hooks';
import { formatCategory, groupWordsByCategory } from '@/utils';
```

### Code Organization

1. **Single Responsibility**: Each file/module has one purpose
2. **Dependency Injection**: Props and hooks for dependencies
3. **Error Boundaries**: Graceful error handling
4. **Testing Ready**: Isolated, testable functions

## 🚀 Future Architecture

### Phase 2: Backend Integration

```typescript
// API Layer
export class WordRootsAPI {
  static async getRoots(language: string): Promise<WordRoot[]> {
    // API implementation
  }
}

// Hook updates
export function useRoots(language: string) {
  const [roots, setRoots] = useState<WordRoot[]>([]);
  // API integration logic
}
```

### Phase 3: Microservices

```
├── roots-service/     # Word roots microservice
├── vocabulary-service/ # Vocabulary microservice
├── user-service/      # User management
└── search-service/    # Search functionality
```

### Phase 4: Advanced Features

- **Real-time Collaboration**: WebSocket integration
- **AI-Powered Features**: Machine learning integration
- **Progressive Web App**: PWA capabilities
- **Mobile Apps**: React Native integration

## 📊 Architecture Metrics

### Code Quality

- **TypeScript Coverage**: 100%
- **Test Coverage**: Target 90%+
- **Bundle Size**: < 500KB gzipped
- **Performance**: Lighthouse 90+

### Maintainability

- **Cyclomatic Complexity**: < 10 per function
- **File Length**: < 200 lines
- **Component Props**: < 10 properties
- **Hook Dependencies**: Minimal and explicit

This architecture provides a solid foundation for both the current MVP and future full-stack expansion, following modern React and Next.js best practices.
