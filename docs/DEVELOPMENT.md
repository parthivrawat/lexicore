# Development Guide

## 🛠️ Development Setup

This guide covers setting up the development environment, coding standards, and best practices for contributing to the project.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Debugging](#debugging)
- [Performance](#performance)
- [Git Workflow](#git-workflow)

## 🎯 Prerequisites

### Required Software

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: Latest stable version
- **VS Code**: Recommended IDE with extensions

### VS Code Extensions (Recommended)

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-react",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## ⚙️ Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd lexicore
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file (optional for MVP):

```bash
# .env.local
VITE_APP_URL=http://localhost:3000
VITE_APP_NAME="LexiCore"
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Verify Build

```bash
npm run build
```

## 🔄 Development Workflow

### Daily Workflow

1. **Update Dependencies**
   ```bash
   git pull origin main
   npm install
   ```

2. **Start Development**
   ```bash
   npm run dev
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**
   - Follow coding standards
   - Write tests for new features
   - Update documentation

5. **Test Changes**
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

6. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

7. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint

# Testing (future)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 📝 Coding Standards

### TypeScript Standards

#### 1. Type Safety

```typescript
// ✅ Good: Explicit types
interface UserProps {
  name: string;
  age: number;
  isActive: boolean;
}

export function UserCard({ name, age, isActive }: UserProps) {
  // Component implementation
}

// ❌ Bad: Implicit any types
export function UserCard(props) {
  // Component implementation
}
```

#### 2. Interface Naming

```typescript
// ✅ Good: Descriptive interface names
interface RootCardProps {
  root: WordRoot;
  onFavorite?: (rootId: string) => void;
}

// ❌ Bad: Generic names
interface Props {
  root: WordRoot;
  onClick?: (rootId: string) => void;
}
```

#### 3. Generic Types

```typescript
// ✅ Good: Proper generic usage
export function PaginatedList<T>({
  items,
  itemsPerPage,
  renderItem,
}: PaginatedListProps<T>) {
  // Implementation
}

// ❌ Bad: Any type
export function PaginatedList({
  items,
  itemsPerPage,
  renderItem,
}: PaginatedListProps<any>) {
  // Implementation
}
```

### React Standards

#### 1. Component Structure

```typescript
// ✅ Good: Proper component structure
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchInput({ onSearch, placeholder = 'Search...' }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      <Button type="submit" variant="primary" size="sm">
        Search
      </Button>
    </form>
  );
}
```

#### 2. Custom Hooks

```typescript
// ✅ Good: Proper hook structure
import { useState, useCallback, useMemo } from 'react';

export function useSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return performSearch(query);
  }, [query]);

  const handleSearch = useCallback((newQuery: string) => {
    setQuery(newQuery);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return {
    query,
    results,
    isLoading,
    handleSearch,
  };
}
```

#### 3. Props Destructuring

```typescript
// ✅ Good: Destructure props at function signature
export function RootCard({ root, onFavorite }: RootCardProps) {
  return (
    <div>
      <h3>{root.root}</h3>
      <p>{root.meaning}</p>
      <Button onClick={() => onFavorite(root.id)}>Favorite</Button>
    </div>
  );
}

// ❌ Bad: Props object usage
export function RootCard(props) {
  return (
    <div>
      <h3>{props.root.root}</h3>
      <p>{props.root.meaning}</p>
      <Button onClick={() => props.onFavorite(props.root.id)}>Favorite</Button>
    </div>
  );
}
```

### CSS/Tailwind Standards

#### 1. Class Organization

```typescript
// ✅ Good: Logical class ordering
export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      rounded-xl border border-gray-200 bg-white p-6 shadow-sm
      transition-shadow hover:shadow-lg hover:border-gray-300
      ${className}
    `.trim()}>
      {children}
    </div>
  );
}

// ❌ Bad: Random class ordering
export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 rounded-xl bg-white border-gray-200 shadow-sm border hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
}
```

#### 2. Responsive Design

```typescript
// ✅ Good: Mobile-first responsive classes
export function Grid({ children }: GridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

// ❌ Bad: Desktop-first approach
export function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
      {children}
    </div>
  );
}
```

### File Organization Standards

#### 1. Import Order

```typescript
// 1. React imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 2. Third-party imports

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui/Button';
import { AppShell } from '@/components/shared/AppShell';
import { useSearch } from '@/hooks/useSearch';
import { formatCategory } from '@/utils/format';

// 4. Relative imports (only for local files)
import { LocalComponent } from './LocalComponent';

// 5. Types (if not imported from @/types)
import type { SearchItem } from '@/types';
```

#### 2. File Naming

```typescript
// ✅ Good: PascalCase for components
RootCard.tsx
AppShell.tsx
SearchFilters.tsx

// ✅ Good: camelCase for utilities
formatCategory.ts
usePagination.ts
search.ts

// ✅ Good: kebab-case for documentation
development-guide.md
component-library.md

// ❌ Bad: Inconsistent naming
rootCard.tsx
appshell.tsx
Search_Filters.tsx
```

## 🧪 Testing

### Unit Testing

```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant classes', () => {
    render(<Button variant="primary">Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-900', 'text-white');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
```

### Hook Testing

```typescript
// __tests__/hooks/useSearch.test.ts
import { renderHook, act } from '@testing-library/react';
import { useSearch } from '@/hooks/useSearch';

describe('useSearch', () => {
  it('initializes with empty query', () => {
    const { result } = renderHook(() => useSearch());
    expect(result.current.query).toBe('');
    expect(result.current.results).toEqual([]);
  });

  it('updates query when handleQueryChange is called', () => {
    const { result } = renderHook(() => useSearch());
    
    act(() => {
      result.current.handleQueryChange('test query');
    });
    
    expect(result.current.query).toBe('test query');
  });

  it('filters results by type', () => {
    const { result } = renderHook(() => useSearch());
    
    act(() => {
      result.current.handleQueryChange('bio');
      result.current.handleFilterChange('root');
    });
    
    expect(result.current.results.every(item => item.kind === 'root')).toBe(true);
  });
});
```

### Utility Testing

```typescript
// __tests__/utils/format.test.ts
import { formatCategory, formatPronunciation } from '@/utils/format';

describe('format utilities', () => {
  it('formats category correctly', () => {
    expect(formatCategory('greetings')).toBe('Greetings');
    expect(formatCategory('daily-use-nouns')).toBe('Daily Use Nouns');
  });

  it('formats pronunciation correctly', () => {
    expect(formatPronunciation('həˈloʊ')).toBe('/həˈloʊ/');
    expect(formatPronunciation(undefined)).toBe('');
  });
});
```

## 🐛 Debugging

### VS Code Debug Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Vite: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### Common Debugging Techniques

#### 1. Console Logging

```typescript
// ✅ Good: Structured logging
console.log('Search results:', { query, resultCount: results.length });
console.error('API error:', { error, url, method });

// ❌ Bad: Unstructured logging
console.log(results);
console.log(error);
```

#### 2. React DevTools

- Install React DevTools browser extension
- Use Profiler to measure component performance
- Inspect component props and state

#### 3. Network Tab

- Monitor API calls (future backend integration)
- Check bundle loading and performance
- Debug static asset loading

### Performance Debugging

```typescript
// Performance monitoring
export function PerformanceMonitor({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });
    
    observer.observe({ entryTypes: ['measure', 'navigation'] });
    
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
```

## ⚡ Performance

### Code Splitting

```typescript
// ✅ Good: Lazy load heavy components
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Usage
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### Memoization

```typescript
// ✅ Good: Memoize expensive components
export const RootCard = React.memo<RootCardProps>(({ root }) => {
  return (
    <div>
      <h3>{root.root}</h3>
      <p>{root.meaning}</p>
    </div>
  );
});

// ✅ Good: Memoize expensive calculations
const expensiveResults = useMemo(() => {
  return performExpensiveCalculation(data);
}, [data]);
```

### Bundle Optimization

```typescript
// ✅ Good: Tree-shakeable imports
import { formatCategory } from '@/utils/format'; // Only imports what's needed

// ❌ Bad: Import entire library
import * as utils from '@/utils/format'; // Imports everything
```

## 🌿 Git Workflow

### Branch Naming

```bash
# Feature branches
feature/add-search-filters
feature/improve-pagination
feature/add-vocabulary-categories

# Bugfix branches
fix/fix-pagination-bug
fix/resolve-search-issue

# Hotfix branches
hotfix/critical-security-fix
hotfix/production-bug-fix
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Features
feat: add search filters for roots and vocabulary
feat: implement pagination with URL state

# Bug fixes
fix: resolve pagination navigation bug
fix: fix search result highlighting

# Documentation
docs: update component library documentation
docs: add development setup guide

# Styles
style: improve button hover states
style: enhance card component design

# Refactoring
refactor: extract search logic into custom hook
refactor: simplify component prop interfaces

# Performance
perf: optimize search algorithm performance
perf: implement virtual scrolling for large lists

# Tests
test: add unit tests for utility functions
test: add integration tests for search functionality
```

### Pull Request Process

1. **Create PR** with descriptive title and description
2. **Fill PR Template** with testing instructions
3. **Request Reviews** from team members
4. **Address Feedback** promptly
5. **Merge** after approval

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Performance tested

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Build successful
```

## 📚 Resources

### Documentation

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Tools

- [ESLint Config](https://eslint.org/)
- [Prettier Config](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)

### Best Practices

- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [React Router Best Practices](https://reactrouter.com/en/main/route/route#concepts)
- [Vite Best Practices](https://vitejs.dev/guide/)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)

This development guide provides comprehensive standards and workflows for contributing to the project effectively.
