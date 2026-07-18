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
- `itemsPerPage` is read from `SettingsContext`

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

Generic search hook for managing debounced search state and relevance-ranked filtering.

```typescript
import { useSearch } from '@/hooks/useSearch';
import { Searchable, RelevanceResult } from '@/utils/search';

interface UseSearchOptions<T, S extends Searchable<T>> {
  data: T[];
  normalize: (item: T) => S;
  relevanceCalculator: (item: S, term: string) => RelevanceResult;
}

interface UseSearchReturn<T> {
  query: string;
  results: T[];
  resultCount: number;
  isPending: boolean;
  handleQueryChange: (query: string) => void;
  clearSearch: () => void;
  hasQuery: boolean;
}
```

### useRootSearch

Search hook specifically for word roots. Loads roots for the current learning language and exposes generic search state.

```typescript
import { useRootSearch } from '@/hooks/useRootSearch';

interface UseRootSearchReturn {
  query: string;
  results: WordRoot[];
  resultCount: number;
  isPending: boolean;
  isLoading: boolean;
  handleQueryChange: (query: string) => void;
  clearSearch: () => void;
  hasQuery: boolean;
}
```

### useVocabularySearch

Search hook specifically for vocabulary words. Loads vocabulary and etymology for the current learning language and exposes generic search state.

```typescript
import { useVocabularySearch } from '@/hooks/useVocabularySearch';

interface UseVocabularySearchReturn {
  query: string;
  results: VocabWord[];
  resultCount: number;
  isPending: boolean;
  isLoading: boolean;
  handleQueryChange: (query: string) => void;
  clearSearch: () => void;
  hasQuery: boolean;
}
```

#### Usage

```typescript
function MyList({ items }: { items: Item[] }) {
  const search = useSearch({
    data: items,
    normalize: (item) => ({ original: item, ... }),
    relevanceCalculator: (item, term) => ({ score: ..., matchFields: [...] }),
  });

  return (
    <div>
      <SearchInput
        value={search.query}
        onChange={search.handleQueryChange}
      />
      <SearchResults results={search.results} />
    </div>
  );
}
```

#### Returns

- `query`: Current search query
- `results`: Array of filtered results (original item type)
- `resultCount`: Number of results
- `isPending`: Whether a debounced search transition is in progress
- `handleQueryChange`: Function to update query
- `clearSearch`: Function to clear search
- `hasQuery`: Whether query is not empty

## 🛠️ Utility Functions

### Format Utilities

#### formatCategory

Formats category names for display.

```typescript
import { formatCategory } from '@/utils/format';

function formatCategory(category: string, language: 'en' | 'fr' = 'en'): string;
```

**Example:**

```typescript
formatCategory('greetings'); // Returns: 'Greetings'
formatCategory('greetings', 'fr'); // Returns: 'Salutations'
formatCategory('daily-use-nouns'); // Returns: 'Daily Use Nouns'
```

#### formatRootType

Formats root type names for display.

```typescript
import { formatRootType } from '@/utils/format';

function formatRootType(type: string, language: 'en' | 'fr' = 'en'): string;
```

**Example:**

```typescript
formatRootType('prefix'); // Returns: 'Prefix'
formatRootType('prefix', 'fr'); // Returns: 'Préfixe'
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

#### formatAccentName

Returns the localized display name for an accent.

```typescript
import { formatAccentName } from '@/utils/format';

function formatAccentName(accent: AccentType, language: 'en' | 'fr' = 'en'): string;
```

**Example:**

```typescript
formatAccentName('american'); // Returns: 'American'
formatAccentName('parisian', 'fr'); // Returns: 'Parisien'
```

#### getAccentFlag

Returns the flag emoji for an accent.

```typescript
import { getAccentFlag } from '@/utils/format';

function getAccentFlag(accent: AccentType): string;
```

**Example:**

```typescript
getAccentFlag('american'); // Returns: '🇺🇸'
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

#### getRootsData

Loads roots for the given learning language (cached, async).

```typescript
import { getRootsData } from '@/utils/data';

function getRootsData(language: LearningLanguage): Promise<WordRoot[]>;
```

#### getVocabularyData

Loads vocabulary for the given learning language and merges etymology data (cached, async).

```typescript
import { getVocabularyData } from '@/utils/data';

function getVocabularyData(language: LearningLanguage): Promise<VocabWord[]>;
```

#### getRootById

Finds a root by ID for the given learning language (cached, async).

```typescript
import { getRootById } from '@/utils/data';

function getRootById(language: LearningLanguage, id: string): Promise<WordRoot | undefined>;
```

#### getVocabularyById

Finds a vocabulary word by ID for the given learning language (cached, async).

```typescript
import { getVocabularyById } from '@/utils/data';

function getVocabularyById(language: LearningLanguage, id: string): Promise<VocabWord | undefined>;
```

#### paginateItems

Paginates an array of items.

```typescript
import { paginateItems } from '@/utils/data';

function paginateItems<T>(items: T[], page: number, itemsPerPage: number): T[];
```

### Search Utilities

#### createSearchableRoot / createSearchableVocabWord

Normalizes a `WordRoot` or `VocabWord` for relevance scoring.

```typescript
import { createSearchableRoot, createSearchableVocabWord } from '@/utils/search';

function createSearchableRoot(root: WordRoot): SearchableRoot;
function createSearchableVocabWord(word: VocabWord): SearchableVocabWord;
```

#### calculateRootRelevance / calculateVocabularyRelevance

Calculates a relevance score and matched fields for a searchable item.

```typescript
import { calculateRootRelevance, calculateVocabularyRelevance } from '@/utils/search';

function calculateRootRelevance(searchable: SearchableRoot, searchTerm: string): RelevanceResult;
function calculateVocabularyRelevance(
  searchable: SearchableVocabWord,
  searchTerm: string
): RelevanceResult;
```

#### searchWithRelevance

Searches and ranks items by relevance, returning the original item type.

```typescript
import { searchWithRelevance } from '@/utils/search';

function searchWithRelevance<S extends Searchable<unknown>>(
  items: S[],
  searchTerm: string,
  relevanceCalculator: (item: S, term: string) => RelevanceResult
): SearchResult<SearchableOriginal<S>>[];
```

**Example:**

```typescript
const searchableRoots = roots.map(createSearchableRoot);
const results = searchWithRelevance(searchableRoots, 'bio', calculateRootRelevance);
// Returns: Array of SearchResult<WordRoot> objects
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

#### interpolate

Interpolates values into templates.

```typescript
import { interpolate } from '@/utils/interpolate';

function interpolate(template: string, values: Record<string, string>): string;
```

#### getWordOfTheDay

Gets the word of the day for a learning language (cached in `localStorage` per day).

```typescript
import { getWordOfTheDay } from '@/utils/wordOfTheDay';

function getWordOfTheDay(
  language: LearningLanguage = 'english'
): Promise<(VocabWord & { etymology?: Etymology }) | null>;
```

#### getTtsAudioUrl

Builds a third-party TTS audio URL fallback for a word and accent.

```typescript
import { getTtsAudioUrl } from '@/utils/audio';

function getTtsAudioUrl(word: string, accent: AccentType): string | undefined;
```

## 📊 Constants

### Application Configuration

```typescript
import {
  APP_CONFIG,
  PAGINATION,
  CATEGORIES,
  ROOT_TYPES,
  ROUTES,
  TTS_CONFIG,
  PAGINATION_CONFIG,
  CARD_CONFIG,
} from '@/constants';
```

#### APP_CONFIG

```typescript
const APP_CONFIG = {
  name: 'LexiCore',
  description: 'A multilingual platform for word roots and core vocabulary learning',
  version: '1.0.0',
  supportedLanguages: ['en', 'fr'],
} as const;
```

#### PAGINATION

```typescript
const PAGINATION = {
  itemsPerPage: 20,
} as const;
```

#### TTS_CONFIG

```typescript
const TTS_CONFIG = {
  rate: 0.8,
  fallbackAccent: 'american',
} as const;
```

#### PAGINATION_CONFIG

```typescript
const PAGINATION_CONFIG = {
  showPages: 5,
  pageButtonSize: 'h-9 w-9',
} as const;
```

#### CARD_CONFIG

```typescript
const CARD_CONFIG = {
  iconSize: 'h-10 w-10',
  avatarCharLimit: 1,
} as const;
```

#### CATEGORIES

Localized category labels (English/French):

```typescript
const CATEGORIES = {
  greetings: { en: 'Greetings', fr: 'Salutations' },
  numbers: { en: 'Numbers', fr: 'Nombres' },
  verbs: { en: 'Verbs', fr: 'Verbes' },
  'daily-use-nouns': { en: 'Daily Use Nouns', fr: "Noms d'usage quotidien" },
  adjectives: { en: 'Adjectives', fr: 'Adjectifs' },
  adverbs: { en: 'Adverbs', fr: 'Adverbes' },
  prepositions: { en: 'Prepositions', fr: 'Prépositions' },
  'function-words': { en: 'Function Words', fr: 'Mots fonctionnels' },
} as const;
```

#### ROOT_TYPES

Localized root type labels (English/French):

```typescript
const ROOT_TYPES = {
  prefix: { en: 'Prefix', fr: 'Préfixe' },
  suffix: { en: 'Suffix', fr: 'Suffixe' },
  base: { en: 'Base', fr: 'Base' },
} as const;
```

#### ROUTES

```typescript
const ROUTES = {
  home: '/',
  roots: '/roots',
  vocabulary: '/vocabulary',
  settings: '/settings',
} as const;
```

Note: `/search`, `/roots/:id`, `/vocabulary/:id`, `/404`, and `*` are also configured in `App.tsx` via React Router.

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
  PaginatedResult,
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
  pronunciationIpa?: string;
  pronunciationVariants?: PronunciationVariant[];
}
```

#### VocabWord

```typescript
interface VocabWord {
  id: string;
  word: string;
  meaning: string;
  pronunciationIpa?: string;
  pronunciationVariants?: PronunciationVariant[];
  category: VocabCategory;
  examples: string[];
  etymology?: Etymology;
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
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
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

Note: `SearchResultItem` is not a standalone component in the current codebase. Search results are rendered directly in `SearchPage` using `RootCard` and `VocabCard`.

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
import { getRootsData, getRootById } from '@/utils/data';
import { useLanguage } from '@/contexts/LanguageContext';

const { learningLanguage } = useLanguage();

// All roots for the current learning language
const allRoots = await getRootsData(learningLanguage);

// Find a specific root by ID
const root = await getRootById(learningLanguage, 'bio-life');

// Filter by type
const prefixes = allRoots.filter(root => root.type === 'prefix');
```

### Vocabulary Data

```typescript
import { getVocabularyData, getVocabularyById, groupWordsByCategory } from '@/utils/data';
import { useLanguage } from '@/contexts/LanguageContext';

const { learningLanguage } = useLanguage();

// All vocabulary for the current learning language
const allWords = await getVocabularyData(learningLanguage);

// Find a specific word by ID
const word = await getVocabularyById(learningLanguage, 'hello-greeting');

// Group by category
const grouped = groupWordsByCategory(allWords);
const greetings = grouped.greetings;
```

### Combined Data Access

```typescript
import { useLanguageData } from '@/hooks/useLanguageData';

// Combined statistics
const { roots, vocabulary, isLoading, error } = useLanguageData();
const totalRoots = roots.length;
const totalWords = vocabulary.length;
const totalItems = totalRoots + totalWords;
```

## 🔧 Advanced Usage

### Custom Hook Composition

```typescript
// Combine generic search with pagination
function useSearchWithPagination<T, S extends Searchable<T>>(
  data: T[],
  normalize: (item: T) => S,
  relevanceCalculator: (item: S, term: string) => RelevanceResult
) {
  const search = useSearch({ data, normalize, relevanceCalculator });
  const pagination = usePagination(search.resultCount);

  const paginatedResults = useMemo(() => {
    return paginateItems(search.results, pagination.currentPage, pagination.itemsPerPage);
  }, [search.results, pagination.currentPage, pagination.itemsPerPage]);

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
