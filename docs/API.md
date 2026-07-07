# API Reference Documentation

## 🔌 API Documentation

This document describes all available APIs, utilities, hooks, and functions in the application.

## 📋 Table of Contents

- [Overview](#overview)
- [Custom Hooks](#custom-hooks)
- [Utility Functions](#utility-functions)
- [Constants](#constants)
- [Types](#types)
- [Components](#components)
- [Data Access](#data-access)

## 🎯 Overview

The application provides a comprehensive set of reusable APIs organized by category:

- **Hooks**: Custom React hooks for state management
- **Utils**: Pure utility functions for data manipulation
- **Constants**: Application configuration and constants
- **Types**: TypeScript type definitions
- **Components**: Reusable React components

## 🪝 Custom Hooks

### usePagination

Pagination hook for managing paginated data.

```typescript
import { usePagination } from '@/hooks/usePagination';

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  endIndex: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  setPage: (page: number) => void;
}
```

#### Usage

```typescript
function MyListPage() {
  const pagination = usePagination(totalItems, 20);
  
  const paginatedItems = items.slice(
    pagination.startIndex,
    pagination.endIndex
  );
  
  return (
    <div>
      {/* Render paginated items */}
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={pagination.setPage}
      />
    </div>
  );
}
```

#### Parameters

- `totalItems` (number): Total number of items
- `itemsPerPage` (number): Number of items per page

#### Returns

- `currentPage`: Current page number (1-based)
- `totalPages`: Total number of pages
- `totalItems`: Total number of items
- `itemsPerPage`: Items per page
- `startIndex`: Start index for current page
- `endIndex`: End index for current page
- `hasNextPage`: Whether next page exists
- `hasPreviousPage`: Whether previous page exists
- `setPage`: Function to change page

### useSearch

Search hook for managing search state and filtering.

```typescript
import { useSearch } from '@/hooks/useSearch';

interface UseSearchReturn {
  query: string;
  filter: SearchFilter;
  results: SearchItem[];
  resultCount: number;
  handleQueryChange: (query: string) => void;
  handleFilterChange: (filter: SearchFilter) => void;
  clearSearch: () => void;
  hasQuery: boolean;
}
```

#### Usage

```typescript
function SearchPage() {
  const search = useSearch();
  
  return (
    <div>
      <SearchInput
        value={search.query}
        onChange={search.handleQueryChange}
      />
      <SearchFilters
        activeFilter={search.filter}
        onChange={search.handleFilterChange}
      />
      <SearchResults results={search.results} />
    </div>
  );
}
```

#### Returns

- `query`: Current search query
- `filter`: Current search filter ('all' | 'root' | 'word')
- `results`: Array of search results
- `resultCount`: Number of results
- `handleQueryChange`: Function to update query
- `handleFilterChange`: Function to update filter
- `clearSearch`: Function to clear search
- `hasQuery`: Whether query is not empty

## 🛠️ Utility Functions

### Format Utilities

#### formatCategory

Formats category names for display.

```typescript
import { formatCategory } from '@/utils/format';

function formatCategory(category: string): string;
```

**Example:**
```typescript
formatCategory('greetings'); // Returns: 'Greetings'
formatCategory('daily-use-nouns'); // Returns: 'Daily Use Nouns'
```

#### formatRootType

Formats root type names for display.

```typescript
import { formatRootType } from '@/utils/format';

function formatRootType(type: string): string;
```

**Example:**
```typescript
formatRootType('prefix'); // Returns: 'Prefix'
formatRootType('base'); // Returns: 'Base'
```

#### formatPronunciation

Formats IPA pronunciation with slashes.

```typescript
import { formatPronunciation } from '@/utils/format';

function formatPronunciation(ipa?: string): string;
```

**Example:**
```typescript
formatPronunciation('həˈloʊ'); // Returns: '/həˈloʊ/'
formatPronunciation(undefined); // Returns: ''
```

#### formatCategorySlug

Formats category slugs for display.

```typescript
import { formatCategorySlug } from '@/utils/format';

function formatCategorySlug(category: string): string;
```

**Example:**
```typescript
formatCategorySlug('daily-use-nouns'); // Returns: 'Daily Use Nouns'
```

#### truncateText

Truncates text to specified length.

```typescript
import { truncateText } from '@/utils/format';

function truncateText(text: string, maxLength: number): string;
```

**Example:**
```typescript
truncateText('Very long text', 10); // Returns: 'Very long...'
```

### Data Utilities

#### groupWordsByCategory

Groups vocabulary words by category.

```typescript
import { groupWordsByCategory } from '@/utils/data';

function groupWordsByCategory(words: VocabWord[]): Record<string, VocabWord[]>;
```

**Example:**
```typescript
const grouped = groupWordsByCategory(vocabularyEn);
// Returns: { greetings: [...], numbers: [...], verbs: [...] }
```

#### sortWordsByCategory

Sorts words by category and alphabetically.

```typescript
import { sortWordsByCategory } from '@/utils/data';

function sortWordsByCategory(words: VocabWord[]): VocabWord[];
```

#### findRelatedRoots

Finds related roots for a given root.

```typescript
import { findRelatedRoots } from '@/utils/data';

function findRelatedRoots(root: WordRoot, allRoots: WordRoot[]): WordRoot[];
```

#### paginateItems

Paginates an array of items.

```typescript
import { paginateItems } from '@/utils/data';

function paginateItems<T>(items: T[], page: number, itemsPerPage: number): T[];
```

### Search Utilities

#### searchAll

Searches across roots and vocabulary.

```typescript
import { searchAll } from '@/lib/search';

function searchAll(query: string): SearchItem[];
```

**Example:**
```typescript
const results = searchAll('bio');
// Returns: Array of SearchItem objects
```

#### getSearchResultId

Generates unique ID for search results.

```typescript
import { getSearchResultId } from '@/utils/format';

function getSearchResultId(item: SearchItem): string;
```

**Example:**
```typescript
getSearchResultId({ kind: 'root', id: 'bio-life' }); // Returns: 'root:bio-life'
```

## 📊 Constants

### Application Configuration

```typescript
import { APP_CONFIG, PAGINATION, SEARCH, CATEGORIES, ROOT_TYPES, ROUTES } from '@/constants';
```

#### APP_CONFIG

```typescript
const APP_CONFIG = {
  name: 'LexiCore',
  description: 'A multilingual platform for word roots and core vocabulary learning',
  version: '1.0.0',
} as const;
```

#### PAGINATION

```typescript
const PAGINATION = {
  itemsPerPage: 20,
} as const;
```

#### SEARCH

```typescript
const SEARCH = {
  minQueryLength: 1,
  debounceMs: 300,
} as const;
```

#### CATEGORIES

```typescript
const CATEGORIES = {
  greetings: 'Greetings',
  numbers: 'Numbers',
  verbs: 'Verbs',
  'daily-use-nouns': 'Daily Use Nouns',
} as const;
```

#### ROOT_TYPES

```typescript
const ROOT_TYPES = {
  prefix: 'Prefix',
  suffix: 'Suffix',
  base: 'Base',
} as const;
```

#### ROUTES

```typescript
const ROUTES = {
  home: '/',
  roots: '/roots',
  vocabulary: '/vocabulary',
  search: '/search',
} as const;
```

## 🔷 Types

### Core Types

```typescript
import type { 
  WordRoot, 
  VocabWord, 
  SearchItem, 
  SearchFilter,
  RootType,
  VocabCategory,
  RootExample,
  PaginationParams,
  PaginatedResult
} from '@/types';
```

#### WordRoot

```typescript
interface WordRoot {
  id: string;
  root: string;
  type: RootType;
  languageOrigin: string;
  meaning: string;
  examples: RootExample[];
  relatedRootIds: string[];
}
```

#### VocabWord

```typescript
interface VocabWord {
  id: string;
  word: string;
  meaning: string;
  pronunciationIpa?: string;
  category: VocabCategory;
  examples: string[];
}
```

#### SearchItem

```typescript
interface SearchItem = 
  | { kind: 'root'; id: string; title: string; subtitle: string; href: string }
  | { kind: 'word'; id: string; title: string; subtitle: string; href: string };
```

### Component Props Types

#### ButtonProps

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

#### PaginationProps

```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}
```

#### RootCardProps

```typescript
interface RootCardProps {
  root: WordRoot;
}
```

#### VocabCardProps

```typescript
interface VocabCardProps {
  word: VocabWord;
}
```

## 🧩 Components

### UI Components

#### Button

```typescript
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

### Shared Components

#### AppShell

```typescript
import { AppShell } from '@/components/shared/AppShell';

<AppShell>
  <div>Page content</div>
</AppShell>
```

#### Pagination

```typescript
import { Pagination } from '@/components/shared/Pagination';

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setPage}
/>
```

### Feature Components

#### RootCard

```typescript
import { RootCard } from '@/components/features/RootCard';

<RootCard root={rootData} />
```

#### VocabCard

```typescript
import { VocabCard } from '@/components/features/VocabCard';

<VocabCard word={wordData} />
```

#### SearchResultItem

```typescript
import { SearchResultItem } from '@/components/features/SearchResultItem';

<SearchResultItem item={searchResult} />
```

#### SearchFilters

```typescript
import { SearchFilters } from '@/components/features/SearchFilters';

<SearchFilters
  activeFilter={filter}
  onFilterChange={setFilter}
/>
```

## 📚 Data Access

### Root Data

```typescript
import { rootsEn } from '@/data/roots/english';

// All English roots
const allRoots = rootsEn;

// Filter by type
const prefixes = rootsEn.filter(root => root.type === 'prefix');
const suffixes = rootsEn.filter(root => root.type === 'suffix');
const bases = rootsEn.filter(root => root.type === 'base');
```

### Vocabulary Data

```typescript
import { vocabularyEn } from '@/data/vocabulary/english';

// All English vocabulary
const allWords = vocabularyEn;

// Group by category
const grouped = groupWordsByCategory(vocabularyEn);
const greetings = grouped.greetings;
const numbers = grouped.numbers;
```

### Combined Data Access

```typescript
import { rootsEn, vocabularyEn } from '@/data';

// Combined statistics
const totalRoots = rootsEn.length;
const totalWords = vocabularyEn.length;
const totalItems = totalRoots + totalWords;
```

## 🔧 Advanced Usage

### Custom Hook Composition

```typescript
// Combine multiple hooks
function useSearchWithPagination() {
  const search = useSearch();
  const pagination = usePagination(search.resultCount, 10);
  
  const paginatedResults = useMemo(() => {
    return paginateItems(search.results, pagination.currentPage, 10);
  }, [search.results, pagination.currentPage]);
  
  return {
    ...search,
    ...pagination,
    paginatedResults,
  };
}
```

### Utility Composition

```typescript
// Combine utilities for data processing
function processVocabularyData(words: VocabWord[]) {
  const sorted = sortWordsByCategory(words);
  const grouped = groupWordsByCategory(sorted);
  
  return Object.entries(grouped).map(([category, items]) => ({
    category,
    count: items.length,
    items: items.map(word => ({
      ...word,
      displayName: word.word,
      categoryDisplay: formatCategory(word.category),
    })),
  }));
}
```

### Type Guards

```typescript
// Runtime type checking
function isSearchItem(item: any): item is SearchItem {
  return (
    typeof item === 'object' &&
    ['root', 'word'].includes(item.kind) &&
    typeof item.id === 'string' &&
    typeof item.title === 'string' &&
    typeof item.subtitle === 'string' &&
    typeof item.href === 'string'
  );
}

// Usage
const searchResults = data.filter(isSearchItem);
```

## 🚀 Future APIs

### Backend Integration (Future)

```typescript
// Future API client
class DataAPI {
  static async getRoots(language: string): Promise<WordRoot[]> {
    const response = await fetch(`/api/roots/${language}`);
    return response.json();
  }
  
  static async getVocabulary(language: string): Promise<VocabWord[]> {
    const response = await fetch(`/api/vocabulary/${language}`);
    return response.json();
  }
  
  static async search(query: string, filters?: SearchFilters): Promise<SearchItem[]> {
    const params = new URLSearchParams({ query, ...filters });
    const response = await fetch(`/api/search?${params}`);
    return response.json();
  }
}
```

### Enhanced Hooks (Future)

```typescript
// Future hooks with backend integration
function useRoots(language: string) {
  const [roots, setRoots] = useState<WordRoot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    DataAPI.getRoots(language)
      .then(setRoots)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [language]);
  
  return { roots, loading, error };
}

function useRealtimeSearch() {
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  
  const search = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const searchResults = await DataAPI.search(query);
      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  }, []);
  
  return { results, loading, search };
}
```

This API reference provides comprehensive documentation for all available functions, hooks, and components in the application, making it easy for developers to understand and use the codebase effectively.
