# Component Library Documentation

## 🧩 Component Architecture

This document describes all available components in the component library, their usage patterns, and implementation details.

## 📋 Table of Contents

- [Overview](#overview)
- [UI Components](#ui-components)
- [Shared Components](#shared-components)
- [Feature Components](#feature-components)
- [Usage Patterns](#usage-patterns)
- [Component Guidelines](#component-guidelines)

## 🎯 Overview

The component library is organized into three main categories:

1. **UI Components** (`src/components/ui/`) - Basic, reusable components
2. **Shared Components** (`src/components/shared/`) - Layout and structural components
3. **Feature Components** (`src/components/features/`) - Domain-specific components

## 🎨 UI Components

### Button

A versatile button component with multiple variants and sizes.

```typescript
import { Button } from '@/components/ui/Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
}
```

### PronunciationPlayer

A component for playing audio pronunciations of words.

```typescript
import { PronunciationPlayer } from '@/components/ui/PronunciationPlayer';

interface PronunciationPlayerProps {
  variants: PronunciationVariant[];
  word?: string;
  className?: string;
}
```

### ThemeToggle

A toggle component for switching between light and dark themes.

```typescript
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface ThemeToggleProps {
  // ThemeToggle uses ThemeContext; no props required
}

export function ThemeToggle(): JSX.Element;
export function SimpleThemeToggle(): JSX.Element;
```

#### Usage Examples

```typescript
// Primary button
<Button variant="primary" size="md" onClick={handleClick}>
  Submit
</Button>

// Outline button
<Button variant="outline" size="sm" disabled>
  Cancel
</Button>

// Ghost button
<Button variant="ghost" onClick={handleBack}>
  ← Back
</Button>
```

#### Variants

- **Primary**: Main action buttons (gradient primary background)
- **Secondary**: Secondary actions (gray background)
- **Outline**: Bordered buttons (white/dark background with border)
- **Ghost**: Minimal buttons (no background, hover state)
- **Accent**: Accent action buttons (gradient accent background)

#### Sizes

- **sm**: Small buttons (compact)
- **md**: Medium buttons (default)
- **lg**: Large buttons (prominent)
- **xl**: Extra-large buttons (hero CTA)

## 🏗️ Shared Components

### AppShell

The main layout component that provides consistent structure across the application.

```typescript
import { AppShell } from '@/components/shared/AppShell';

interface AppShellProps {
  children: React.ReactNode;
}
```

### DualLanguageSelector

A component for selecting between two languages.

```typescript
import { DualLanguageSelector } from '@/components/shared/DualLanguageSelector';

interface DualLanguageSelectorProps {
  // DualLanguageSelector uses LanguageContext; no props required
}
```

#### Usage

```typescript
export default function MyPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page content */}
      </div>
    </AppShell>
  );
}
```

#### Features

- **Responsive Navigation**: Mobile-friendly header with navigation
- **Sticky Header**: Navigation stays visible while scrolling
- **Footer**: Consistent footer across all pages
- **Accessibility**: Semantic HTML and ARIA support
- **Theme Support**: Ready for dark/light themes

#### Structure

```
┌─────────────────────────────────┐
│           Header                │
├─────────────────────────────────┤
│                                 │
│           Main Content          │
│                                 │
├─────────────────────────────────┤
│           Footer                │
└─────────────────────────────────┘
```

### Pagination

A reusable pagination component with customizable styling.

```typescript
import { Pagination } from '@/components/shared/Pagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}
```

#### Usage

```typescript
function MyListPage() {
  const pagination = usePagination(totalItems);

  return (
    <div>
      {/* List content */}
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.setPage}
      />
    </div>
  );
}
```

#### Features

- **Keyboard Navigation**: Arrow keys and Enter key support
- **Accessibility**: ARIA labels and screen reader support
- **Disabled States**: Proper disabled button styling
- **Responsive**: Works on all screen sizes

## 🎯 Feature Components

### BaseCard

A base card component used as a foundation for other card components.

```typescript
import { BaseCard } from '@/components/features/BaseCard';

interface BaseCardProps {
  title: string;
  meaning: string;
  badge: string;
  badgeColor: 'primary' | 'success';
  examplesCount: number;
  pronunciationVariants?: PronunciationVariant[];
  pronunciationIpa?: string;
  subtitle?: string;
  to: string;
}
```

### RootCard

A card component for displaying word root information.

```typescript
import { RootCard } from '@/components/features/RootCard';

interface RootCardProps {
  root: WordRoot;
}
```

#### Usage

```typescript
function RootsPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {roots.map((root) => (
        <RootCard key={root.id} root={root} />
      ))}
    </div>
  );
}
```

#### Features

- **Responsive Grid**: Adapts to screen size
- **Hover Effects**: Visual feedback on interaction
- **Type Badges**: Visual root type indicators
- **Metadata Display**: Origin and example count
- **Link Navigation**: Click to view details

#### Structure

```
┌─────────────────────────────────┐
│  [ROOT] [TYPE BADGE]            │
│                                 │
│  Root Meaning                   │
│                                 │
│  Origin: Latin • 5 examples     │
└─────────────────────────────────┘
```

### VocabCard

A card component for displaying vocabulary word information.

```typescript
import { VocabCard } from '@/components/features/VocabCard';

interface VocabCardProps {
  word: VocabWord;
}
```

#### Usage

```typescript
function VocabularyPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {words.map((word) => (
        <VocabCard key={word.id} word={word} />
      ))}
    </div>
  );
}
```

#### Features

- **IPA Pronunciation**: Phonetic transcription display
- **Category Badges**: Visual category indicators
- **Example Count**: Shows number of examples
- **Responsive Design**: Mobile-friendly layout

#### Structure

```
┌─────────────────────────────────┐
│  [WORD] /pronunciation/        │
│                                 │
│  Word Meaning                   │
│                                 │
│  [CATEGORY] • 3 examples        │
└─────────────────────────────────┘
```

### SearchFilters

Filter component for search scope (All, Roots, Words).

```typescript
import { SearchFilters } from '@/components/features/SearchFilters';

interface SearchFiltersProps {
  activeFilter: SearchFilter;
  onFilterChange: (filter: SearchFilter) => void;
}
```

#### Usage

```typescript
function SearchPage() {
  const [filter, setFilter] = useState<SearchFilter>('all');

  return (
    <SearchFilters
      activeFilter={filter}
      onFilterChange={setFilter}
    />
  );
}
```

#### Features

- **Multiple Options**: All, Roots, Words filters
- **Visual Feedback**: Active filter highlighting
- **Keyboard Navigation**: Tab and Enter support
- **Responsive**: Works on mobile devices

### CategoryFilter

Filter component for vocabulary categories.

```typescript
import { CategoryFilter } from '@/components/features/CategoryFilter';

interface CategoryFilterProps {
  selectedCategory: VocabCategory | 'all';
  onCategoryChange: (category: VocabCategory | 'all') => void;
}
```

### RootTypeFilter

Filter component for root types (prefix, suffix, base).

```typescript
import { RootTypeFilter } from '@/components/features/RootTypeFilter';

interface RootTypeFilterProps {
  selectedType: RootType | 'all';
  onTypeChange: (type: RootType | 'all') => void;
}
```

### LearningTips

Component for displaying learning tips and educational content.

```typescript
import { LearningTips } from '@/components/features/LearningTips';

interface LearningTip {
  title: string;
  content: string;
  icon: string;
}

interface LearningTipsProps {
  tips: LearningTip[];
  theme?: 'amber' | 'blue';
  className?: string;
}
```

### SettingsTabs

Tab component for settings page navigation.

```typescript
import { SettingsTabs } from '@/components/features/SettingsTabs';

interface SettingsTabsProps {
  // SettingsTabs manages its own tab state internally
}
```

#### Usage

```typescript
function SettingsPage() {
  return (
    <SettingsTabs />
  );
}
```

#### Features

- **Built-in Tabs**: Language, Pagination, Search, UI
- **Description Text**: Contextual help for each tab
- **Accessibility**: ARIA tab navigation
- **Responsive**: Horizontal scroll on small screens

## 🔄 Usage Patterns

### Barrel Exports

All components are available through barrel exports:

```typescript
// Import multiple components
import { Button, AppShell, RootCard } from '@/components';

// Import specific categories
import { Button } from '@/components/ui';
import { AppShell, Pagination } from '@/components/shared';
import { RootCard, VocabCard } from '@/components/features';
```

### Composition Patterns

#### Layout Composition

```typescript
export default function Page() {
  return (
    <AppShell>
      <div className="space-y-6">
        <Header />
        <MainContent />
        <Pagination />
      </div>
    </AppShell>
  );
}
```

#### Grid Composition

```typescript
export default function ListPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
```

### State Management Integration

#### Hook Integration

```typescript
export default function SearchPage() {
  const search = useSearch();

  return (
    <AppShell>
      <SearchInput query={search.query} onChange={search.handleQueryChange} />
      <SearchFilters filter={search.filter} onChange={search.handleFilterChange} />
      <SearchResults results={search.results} />
    </AppShell>
  );
}
```

## 📋 Component Guidelines

### Naming Conventions

- **PascalCase**: Component names (`RootCard`, `AppShell`)
- **Interface Names**: Props interfaces (`RootCardProps`)
- **File Names**: Match component names (`RootCard.tsx`)

### Structure Guidelines

1. **Props Interface**: Always define props interface
2. **Default Props**: Use default parameters or defaultProps
3. **Forward Ref**: Use forwardRef for DOM components
4. **Memoization**: Use React.memo for expensive components
5. **Error Boundaries**: Add error boundaries where appropriate

### Example Template

```typescript
import { forwardRef } from 'react';
import { PropsWithChildren } from 'react';

interface ComponentProps {
  // Define props here
  className?: string;
  children?: React.ReactNode;
}

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`component-base ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Component.displayName = 'Component';
```

### Accessibility Guidelines

1. **Semantic HTML**: Use appropriate HTML elements
2. **ARIA Labels**: Add ARIA labels where needed
3. **Keyboard Navigation**: Ensure keyboard accessibility
4. **Screen Readers**: Test with screen readers
5. **Color Contrast**: Maintain WCAG compliance

### Performance Guidelines

1. **React.memo**: Use for expensive components
2. **useCallback**: Memoize event handlers
3. **useMemo**: Memoize expensive calculations
4. **Code Splitting**: Lazy load when appropriate
5. **Bundle Size**: Monitor component impact

## 🧪 Testing Components

### Unit Testing

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    render(<Button variant="primary">Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-900');
  });
});
```

### Integration Testing

```typescript
import { render, screen } from '@testing-library/react';
import { RootCard } from '@/components/features/RootCard';

describe('RootCard', () => {
  it('navigates to detail page on click', () => {
    const mockRoot = { /* root data */ };
    render(<RootCard root={mockRoot} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/roots/${mockRoot.id}`);
  });
});
```

## 🚀 Future Components

### Planned Components

1. **Modal**: Dialog and modal functionality
2. **Dropdown**: Menu and dropdown components
3. **Toast**: Notification system
4. **Loading**: Skeleton and spinner components
5. **Form**: Form components with validation

### Component Evolution

```typescript
// Current: Static component
export function RootCard({ root }: RootCardProps) {
  // Static display
}

// Future: Interactive component
export function RootCard({ root, onFavorite, onShare }: RootCardProps) {
  // Interactive features
}
```

This component library provides a solid foundation for the application with consistent patterns, accessibility support, and future scalability.
