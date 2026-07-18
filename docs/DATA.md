# Data Models Documentation

## 📊 Data Architecture

This document describes the data structures, models, and management patterns used in the application.

## 📋 Table of Contents

- [Overview](#overview)
- [Data Models](#data-models)
- [Type Definitions](#type-definitions)
- [Data Organization](#data-organization)
- [Data Access Patterns](#data-access-patterns)
- [Search Implementation](#search-implementation)
- [Data Validation](#data-validation)
- [Future Data Architecture](#future-data-architecture)

## 🎯 Overview

The application uses a **frontend-only data architecture** with static JSON files and TypeScript barrel exports as the data source. Data is loaded on demand via dynamic imports and cached in memory. This approach provides:

- **On-Demand Loading**: Data fetched only when needed
- **Type Safety**: Compile-time type checking with imported JSON typed as datasets
- **Version Control**: Data changes tracked in git
- **Static Generation**: Optimized for Vite static export
- **Easy Migration**: Ready for backend integration

## 📋 Data Models

### WordRoot Model

Represents a word root with examples and relationships.

```typescript
interface WordRoot {
  id: string; // Unique identifier
  root: string; // The root word (e.g., "bio")
  type: RootType; // Type: 'prefix' | 'suffix' | 'base'
  languageOrigin: string; // Language of origin (e.g., "Greek")
  meaning: string; // Meaning of the root
  examples: RootExample[]; // Usage examples
  relatedRootIds: string[]; // Related root IDs
  pronunciationIpa?: string; // Basic IPA pronunciation
  pronunciationVariants?: PronunciationVariant[]; // Multi-accent pronunciation variants
}
```

#### RootExample

```typescript
interface RootExample {
  word: string; // Example word using the root
  meaning: string; // Meaning of the example word
  sentence: string; // Sentence using the example word
}
```

#### RootType

```typescript
type RootType = 'prefix' | 'suffix' | 'base';
```

### VocabWord Model

Represents a vocabulary word with pronunciation, examples, and optional etymology.

```typescript
interface VocabWord {
  id: string; // Unique identifier
  word: string; // The vocabulary word
  meaning: string; // Meaning of the word
  pronunciationIpa?: string; // IPA pronunciation (legacy)
  pronunciationVariants?: PronunciationVariant[]; // Multi-accent support
  category: VocabCategory; // Word category
  examples: string[]; // Usage examples
  etymology?: Etymology; // Etymological information (optional)
}
```

#### VocabCategory

```typescript
type VocabCategory =
  | 'greetings'
  | 'numbers'
  | 'verbs'
  | 'daily-use-nouns'
  | 'adjectives'
  | 'adverbs'
  | 'prepositions'
  | 'function-words';
```

### Etymology Model

Represents the etymological history of a vocabulary word.

```typescript
interface Etymology {
  languageOrigin: string; // Primary origin language (e.g., "Latin", "Greek")
  yearOfOrigin?: string; // Approximate origin (e.g., "c. 12th century")
  rootComposition?: WordRootComposition[]; // Constituent roots
  timeline: EtymologyStage[]; // Evolution path (required)
  cognates?: CognateWord[]; // Related words in other languages
  notes?: string; // Additional etymological notes
}
```

#### EtymologyStage

Represents a stage in the word's evolution.

```typescript
interface EtymologyStage {
  language: string; // Language at this stage (e.g., "Latin", "Old French")
  form: string; // The word form at this stage
  period?: string; // Time period (e.g., "12th century", "c. 1150")
  meaning?: string; // Meaning at this stage
}
```

#### WordRootComposition

Links a vocabulary word to its constituent word roots.

```typescript
interface WordRootComposition {
  rootId: string; // Reference to WordRoot.id
  position: 'prefix' | 'suffix' | 'base';
  contribution: string; // How this root contributes to meaning
}
```

#### CognateWord

Represents a related word in another language with shared origin.

```typescript
interface CognateWord {
  language: string; // Language of cognate (e.g., "Spanish", "German")
  word: string; // The cognate word
  meaning: string; // Meaning in that language
}
```

### SearchItem Model

Represents a search result item.

```typescript
interface SearchItem {
  kind: 'root' | 'word'; // Type of search result
  id: string; // Unique identifier
  title: string; // Display title
  subtitle: string; // Display subtitle
  href: string; // Navigation link
}
```

## 🔷 Type Definitions

### Complete Type System

```typescript
// src/types/index.ts

export type RootType = 'prefix' | 'suffix' | 'base';

export type RootExample = {
  word: string;
  meaning: string;
  sentence: string;
};

export type WordRoot = {
  id: string;
  root: string;
  type: RootType;
  languageOrigin: string;
  meaning: string;
  examples: RootExample[];
  relatedRootIds: string[];
};

export type VocabCategory =
  | 'greetings'
  | 'numbers'
  | 'verbs'
  | 'daily-use-nouns'
  | 'adjectives'
  | 'adverbs'
  | 'prepositions'
  | 'function-words';

export type VocabWord = {
  id: string;
  word: string;
  meaning: string;
  pronunciationIpa?: string;
  pronunciationVariants?: PronunciationVariant[];
  category: VocabCategory;
  examples: string[];
  etymology?: Etymology;
};

export type SearchItem =
  | { kind: 'root'; id: string; title: string; subtitle: string; href: string }
  | { kind: 'word'; id: string; title: string; subtitle: string; href: string };

export type SearchFilter = 'all' | 'root' | 'word';

export type PaginationParams = {
  page: number;
  limit: number;
};

export type PaginatedResult<T> = {
  items: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
};
```

### Type Safety Features

1. **Discriminated Unions**: SearchItem with kind discriminator
2. **Optional Properties**: pronunciationIpa marked optional
3. **Literal Types**: RootType and VocabCategory as literals
4. **Generic Types**: PaginatedResult for any data type

## 📁 Data Organization

### Directory Structure

```
src/data/
├── roots/
│   ├── english/
│   │   ├── index.ts        # Barrel export: rootsEn
│   │   ├── prefixes.json
│   │   ├── suffixes.json
│   │   └── bases.json
│   ├── french/
│   │   └── ...
│   └── index.ts            # Per-language barrel exports
├── vocabulary/
│   ├── english/
│   │   ├── index.ts        # Barrel export: vocabularyEn
│   │   ├── greetings.json
│   │   ├── numbers.json
│   │   ├── verbs.json
│   │   ├── daily-use-nouns.json
│   │   ├── adjectives.json
│   │   ├── adverbs.json
│   │   ├── prepositions.json
│   │   └── function-words.json
│   └── index.ts            # Per-language barrel exports
├── etymology/
│   ├── english/
│   │   ├── index.ts        # Barrel export: etymologyDataEn
│   │   └── [category].json
│   └── index.ts            # Per-language barrel exports
└── index.ts                # Re-exports all modules
```

### Data Files

#### English Roots (`src/data/roots/english/index.ts`)

```typescript
import { WordRoot } from '@/types';
import prefixesJson from './prefixes.json';
import suffixesJson from './suffixes.json';
import basesJson from './bases.json';

const prefixes = prefixesJson as WordRoot[];
const suffixes = suffixesJson as WordRoot[];
const bases = basesJson as WordRoot[];

export const rootsEn: WordRoot[] = [...prefixes, ...suffixes, ...bases];
```

#### English Vocabulary (`src/data/vocabulary/english/index.ts`)

```typescript
import { VocabWord } from '@/types';
import greetingsJson from './greetings.json';
import numbersJson from './numbers.json';
// ... other category JSON imports

export const vocabularyEn: VocabWord[] = [
  ...(greetingsJson as VocabWord[]),
  ...(numbersJson as VocabWord[]),
  // ... other categories
];
```

#### English Etymology (`src/data/etymology/english.ts`)

```typescript
import { Etymology } from '@/types';

export const etymologyData: Record<string, Etymology> = {
  word_hello: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Old High German',
        form: 'halā',
        period: 'Before 12th century',
        meaning: 'fetch, used as a greeting',
      },
      {
        language: 'Middle English',
        form: 'hyllo, hallo',
        period: '14th century',
        meaning: 'greeting',
      },
      { language: 'Modern English', form: 'hello', period: '19th century', meaning: 'greeting' },
    ],
    cognates: [
      { language: 'German', word: 'hallo', meaning: 'hello' },
      { language: 'French', word: 'allo', meaning: 'hello (on phone)' },
      { language: 'Spanish', word: 'hola', meaning: 'hello' },
    ],
    notes: 'Popularized by Thomas Edison when he used it to answer the telephone.',
  },
  // ... more etymology entries
};
```

### Barrel Exports

```typescript
// src/data/roots/index.ts
export { rootsEn } from './english';
export { rootsFr } from './french';
// ... other languages

// src/data/vocabulary/index.ts
export { vocabularyEn } from './english';
export { vocabularyFr } from './french';
// ... other languages

// src/data/etymology/index.ts
export { etymologyData as etymologyDataEn } from './english';
export { etymologyData as etymologyDataFr } from './french';
// ... other languages

// src/data/index.ts
export * from './roots';
export * from './vocabulary';
export * from './etymology';
```

## 🔍 Data Access Patterns

### Import Patterns

```typescript
// Async data utilities
import { getRootsData, getVocabularyData } from '@/utils/data';
import { useLanguage } from '@/contexts/LanguageContext';

// In a component or hook
const { learningLanguage } = useLanguage();
const roots = await getRootsData(learningLanguage);
const vocabulary = await getVocabularyData(learningLanguage);
```

### Usage in Components

```typescript
import { useLanguageData } from '@/hooks/useLanguageData';

function RootsPage() {
  const { roots, vocabulary, isLoading, error } = useLanguageData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {roots.map(root => (
        <RootCard key={root.id} root={root} />
      ))}
    </div>
  );
}
```

### Data Transformation

```typescript
// src/utils/data.ts

export function groupWordsByCategory(words: VocabWord[]): Record<string, VocabWord[]> {
  return words.reduce(
    (acc, word) => {
      const category = word.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(word);
      return acc;
    },
    {} as Record<string, VocabWord[]>
  );
}

export function findRelatedRoots(root: WordRoot, allRoots: WordRoot[]): WordRoot[] {
  return root.relatedRootIds
    .map(id => allRoots.find(r => r.id === id))
    .filter(Boolean) as WordRoot[];
}

// Async loaders used by getRootsData / getVocabularyData
export async function loadRootsData(language: LearningLanguage): Promise<WordRoot[]> {
  /* dynamic import + cache */
}
export async function loadVocabularyData(language: LearningLanguage): Promise<VocabWord[]> {
  /* dynamic import + cache */
}
export async function loadEtymologyData(
  language: LearningLanguage
): Promise<Record<string, Etymology>> {
  /* dynamic import + cache */
}

// Etymology integration for vocabulary
export async function getVocabularyData(language: LearningLanguage): Promise<VocabWord[]> {
  const vocabulary = await loadVocabularyData(language);
  const etymologyData = await loadEtymologyData(language);

  const withAudioUrl = vocabulary.map(word => ({
    ...word,
    pronunciationVariants: word.pronunciationVariants?.map(variant => ({
      ...variant,
      audioUrl: variant.audioUrl ?? getTtsAudioUrl(word.word, variant.accent),
    })),
  }));

  return withAudioUrl.map(word => ({
    ...word,
    etymology: etymologyData[word.id],
  }));
}
```

## 🔎 Search Implementation

### Search Algorithm

```typescript
// src/utils/search.ts

export function createSearchableRoot(root: WordRoot): SearchableRoot {
  return {
    original: root,
    normalizedRoot: normalizeSearchText(root.root),
    normalizedMeaning: normalizeSearchText(root.meaning),
    normalizedLanguageOrigin: normalizeSearchText(root.languageOrigin),
    normalizedExampleWords: root.examples.map(e => normalizeSearchText(e.word)).join(' '),
    normalizedExampleMeanings: root.examples.map(e => normalizeSearchText(e.meaning)).join(' '),
  };
}

export function calculateRootRelevance(
  searchable: SearchableRoot,
  searchTerm: string
): RelevanceResult {
  /* ... */
}

export function searchWithRelevance<S extends Searchable<unknown>>(
  items: S[],
  searchTerm: string,
  relevanceCalculator: (item: S, term: string) => RelevanceResult
): SearchResult<SearchableOriginal<S>>[] {
  return items
    .map(item => relevanceCalculator(item, searchTerm))
    .filter(result => result.score > 1)
    .sort((a, b) => b.score - a.score)
    .map(result => ({
      item: (result.searchable as S).original as SearchableOriginal<S>,
      score: result.score,
      matchFields: result.matchFields,
    }));
}
```

### Search Features

1. **Multi-field Search**: Searches across word, meaning, metadata, examples, and etymology
2. **Case-insensitive**: Normalized search queries
3. **Fuzzy Matching**: Uses Levenshtein distance for approximate matches
4. **Relevance Scoring**: Ranked by field weights (word match > meaning match > example match)
5. **Type Filtering**: Filter by root or word type via `SearchFilters`
6. **Etymology Search**: Searches etymology fields including language origin, timeline stages, and cognates

### Search Hook

```typescript
// src/hooks/useSearch.ts

export function useSearch<T, S extends Searchable<T>>({
  data,
  normalize,
  relevanceCalculator,
}: UseSearchOptions<T, S>) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [isPending, startTransition] = useTransition();

  const results = useMemo(() => {
    if (!debouncedQuery.trim() || debouncedQuery.length < minQueryLength) return [];

    const searchableItems = data.map(normalize);
    return searchWithRelevance(searchableItems, debouncedQuery, relevanceCalculator);
  }, [debouncedQuery, data, normalize, relevanceCalculator]);

  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => setDebouncedQuery(query));
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  return {
    query,
    results: results.map(r => r.item),
    resultCount: results.length,
    isPending,
    handleQueryChange: setQuery,
    clearSearch: () => setQuery(''),
    hasQuery: query.trim().length > 0,
  };
}
```

## ✅ Data Validation

### Type Guards

```typescript
// Data types are validated at compile time via TypeScript and JSON imports.

export function isWordRoot(obj: unknown): obj is WordRoot {
  const root = obj as Partial<WordRoot>;
  return (
    typeof root === 'object' &&
    root !== null &&
    typeof root.id === 'string' &&
    typeof root.root === 'string' &&
    ['prefix', 'suffix', 'base'].includes(root.type ?? '') &&
    typeof root.languageOrigin === 'string' &&
    typeof root.meaning === 'string' &&
    Array.isArray(root.examples) &&
    Array.isArray(root.relatedRootIds)
  );
}

export function isVocabWord(obj: unknown): obj is VocabWord {
  const word = obj as Partial<VocabWord>;
  const validCategories = [
    'greetings',
    'numbers',
    'verbs',
    'daily-use-nouns',
    'adjectives',
    'adverbs',
    'prepositions',
    'function-words',
  ];
  return (
    typeof word === 'object' &&
    word !== null &&
    typeof word.id === 'string' &&
    typeof word.word === 'string' &&
    typeof word.meaning === 'string' &&
    validCategories.includes(word.category ?? '') &&
    Array.isArray(word.examples)
  );
}
```

### Runtime Validation

```typescript
// src/utils/validation.ts

export function validateRoots(roots: any[]): WordRoot[] {
  return roots.filter(isWordRoot);
}

export function validateVocabulary(words: any[]): VocabWord[] {
  return words.filter(isVocabWord);
}
```

## 📈 Data Statistics

### Current Dataset Size

English is currently the most complete dataset. Example sizes:

```typescript
export const DATA_STATS = {
  roots: {
    english: {
      total: 273,
      prefixes: ~80,
      suffixes: ~60,
      bases: ~130,
    },
  },
  vocabulary: {
    english: {
      total: 2000,
      greetings: ~100,
      numbers: ~100,
      verbs: ~1000,
      'daily-use-nouns': ~700,
      adjectives: ~300,
      adverbs: ~150,
      prepositions: ~90,
      'function-words': ~110,
    },
  },
} as const;
```

Note: Statistics are approximate; run `npm run count-data` (or equivalent tooling) to get current values.

### Data Quality Metrics

1. **Completeness**: All required fields populated
2. **Consistency**: Uniform formatting and structure
3. **Accuracy**: Verified meanings and examples
4. **Coverage**: Balanced distribution across categories

## 🚀 Future Data Architecture

### Phase 2: API Integration

```typescript
// Future API client
export class DataAPI {
  static async getRoots(language: string): Promise<WordRoot[]> {
    const response = await fetch(`/api/roots/${language}`);
    return response.json();
  }

  static async getVocabulary(language: string): Promise<VocabWord[]> {
    const response = await fetch(`/api/vocabulary/${language}`);
    return response.json();
  }

  static async getEtymology(language: string): Promise<Record<string, Etymology>> {
    const response = await fetch(`/api/etymology/${language}`);
    return response.json();
  }
}

// Updated hooks
export function useRoots(language: string) {
  const [roots, setRoots] = useState<WordRoot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DataAPI.getRoots(language)
      .then(setRoots)
      .finally(() => setLoading(false));
  }, [language]);

  return { roots, loading };
}
```

### Phase 3: Database Integration

```typescript
// Database models (future)
export interface DatabaseRoot extends WordRoot {
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  version: number;
}

export interface DatabaseVocab extends VocabWord {
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
```

### Phase 4: Real-time Data

```typescript
// Real-time updates (future)
export function useRealtimeRoots() {
  const [roots, setRoots] = useState<WordRoot[]>([]);

  useEffect(() => {
    const subscription = subscribeToRoots(newRoots => {
      setRoots(newRoots);
    });

    return () => subscription.unsubscribe();
  }, []);

  return roots;
}
```

## 📝 Data Management Guidelines

### Adding New Data

1. **Type Safety**: Ensure data matches TypeScript interfaces
2. **Validation**: Use type guards for runtime validation
3. **Consistency**: Follow established formatting patterns
4. **Documentation**: Document new fields and meanings
5. **Testing**: Add tests for new data structures
6. **Etymology**: Add etymology data for vocabulary words following the etymology model structure

### Data Migration

```typescript
// Migration utilities
export function migrateRoots(oldRoots: any[]): WordRoot[] {
  return oldRoots.map(oldRoot => ({
    ...oldRoot,
    // Apply migration transformations
    id: oldRoot.id || generateId(),
    type: normalizeRootType(oldRoot.type),
  }));
}
```

### Performance Optimization

1. **Memoization**: Cache computed results
2. **Lazy Loading**: Load data on demand
3. **Pagination**: Implement server-side pagination
4. **Indexing**: Optimize search with indices
5. **Caching**: Implement appropriate caching strategies

This data architecture provides a solid foundation for the current MVP while being ready for future expansion to a full-stack application with dynamic data sources.
