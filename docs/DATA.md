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

The application uses a **frontend-only data architecture** with static TypeScript files serving as the data source. This approach provides:

- **Instant Loading**: No network requests for data
- **Type Safety**: Compile-time type checking
- **Version Control**: Data changes tracked in git
- **Static Generation**: Optimized for Next.js export
- **Easy Migration**: Ready for backend integration

## 📋 Data Models

### WordRoot Model

Represents a word root with examples and relationships.

```typescript
interface WordRoot {
  id: string;                    // Unique identifier
  root: string;                  // The root word (e.g., "bio")
  type: RootType;               // Type: 'prefix' | 'suffix' | 'base'
  languageOrigin: string;        // Language of origin (e.g., "Greek")
  meaning: string;               // Meaning of the root
  examples: RootExample[];      // Usage examples
  relatedRootIds: string[];      // Related root IDs
}
```

#### RootExample

```typescript
interface RootExample {
  word: string;      // Example word using the root
  meaning: string;   // Meaning of the example word
  sentence: string;  // Sentence using the example word
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
  id: string;                    // Unique identifier
  word: string;                  // The vocabulary word
  meaning: string;               // Meaning of the word
  pronunciationIpa?: string;     // IPA pronunciation (legacy)
  pronunciationVariants?: PronunciationVariant[];  // Multi-accent support
  category: VocabCategory;      // Word category
  examples: string[];            // Usage examples
  etymology?: Etymology;        // Etymological information (optional)
}
```

#### VocabCategory

```typescript
type VocabCategory = 'greetings' | 'numbers' | 'verbs' | 'daily-use-nouns' | 'adjectives' | 'adverbs' | 'prepositions';
```

### Etymology Model

Represents the etymological history of a vocabulary word.

```typescript
interface Etymology {
  languageOrigin: string;              // Primary origin language (e.g., "Latin", "Greek")
  yearOfOrigin?: string;              // Approximate origin (e.g., "c. 12th century")
  rootComposition?: WordRootComposition[];  // Constituent roots
  timeline: EtymologyStage[];          // Evolution path (required)
  cognates?: CognateWord[];           // Related words in other languages
  notes?: string;                     // Additional etymological notes
}
```

#### EtymologyStage

Represents a stage in the word's evolution.

```typescript
interface EtymologyStage {
  language: string;                   // Language at this stage (e.g., "Latin", "Old French")
  form: string;                       // The word form at this stage
  period?: string;                    // Time period (e.g., "12th century", "c. 1150")
  meaning?: string;                   // Meaning at this stage
}
```

#### WordRootComposition

Links a vocabulary word to its constituent word roots.

```typescript
interface WordRootComposition {
  rootId: string;                     // Reference to WordRoot.id
  position: 'prefix' | 'suffix' | 'base';
  contribution: string;               // How this root contributes to meaning
}
```

#### CognateWord

Represents a related word in another language with shared origin.

```typescript
interface CognateWord {
  language: string;                   // Language of cognate (e.g., "Spanish", "German")
  word: string;                       // The cognate word
  meaning: string;                    // Meaning in that language
}
```

### SearchItem Model

Represents a search result item.

```typescript
interface SearchItem {
  kind: 'root' | 'word';        // Type of search result
  id: string;                    // Unique identifier
  title: string;                 // Display title
  subtitle: string;              // Display subtitle
  href: string;                  // Navigation link
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

export type VocabCategory = 'greetings' | 'numbers' | 'verbs' | 'daily-use-nouns';

export type VocabWord = {
  id: string;
  word: string;
  meaning: string;
  pronunciationIpa?: string;
  category: VocabCategory;
  examples: string[];
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
│   ├── english.ts     # English word roots
│   └── index.ts       # Roots barrel export
├── vocabulary/
│   ├── english.ts     # English vocabulary
│   └── index.ts       # Vocabulary barrel export
├── etymology/
│   ├── english.ts     # English etymology data
│   └── index.ts       # Etymology barrel export
└── index.ts           # Data barrel export
```

### Data Files

#### English Roots (`src/data/roots/english.ts`)

```typescript
import { WordRoot } from '@/types';

export const rootsEn: WordRoot[] = [
  {
    id: 'bio-life',
    root: 'bio',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'life',
    examples: [
      {
        word: 'biology',
        meaning: 'study of living organisms',
        sentence: 'Biology is the study of life and living organisms.'
      },
      // ... more examples
    ],
    relatedRootIds: ['logos-study', 'zoon-animal']
  },
  // ... more roots
];
```

#### English Vocabulary (`src/data/vocabulary/english.ts`)

```typescript
import { VocabWord } from '@/types';

export const vocabularyEn: VocabWord[] = [
  {
    id: 'hello-greeting',
    word: 'hello',
    meaning: 'A greeting used when meeting someone',
    pronunciationIpa: 'həˈloʊ',
    category: 'greetings',
    examples: [
      'Hello, how are you today?',
      'She said hello to her neighbors.',
      'Hello! Welcome to our store.'
    ]
  },
  // ... more words
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
      { language: 'Old High German', form: 'halā', period: 'Before 12th century', meaning: 'fetch, used as a greeting' },
      { language: 'Middle English', form: 'hyllo, hallo', period: '14th century', meaning: 'greeting' },
      { language: 'Modern English', form: 'hello', period: '19th century', meaning: 'greeting' }
    ],
    cognates: [
      { language: 'German', word: 'hallo', meaning: 'hello' },
      { language: 'French', word: 'allo', meaning: 'hello (on phone)' },
      { language: 'Spanish', word: 'hola', meaning: 'hello' }
    ],
    notes: 'Popularized by Thomas Edison when he used it to answer the telephone.'
  },
  // ... more etymology entries
};
```

### Barrel Exports

```typescript
// src/data/roots/index.ts
export { rootsEn } from './english';

// src/data/vocabulary/index.ts
export { vocabularyEn } from './english';

// src/data/etymology/index.ts
export { etymologyData } from './english';

// src/data/index.ts
export * from './roots';
export * from './vocabulary';
export * from './etymology';
```

## 🔍 Data Access Patterns

### Import Patterns

```typescript
// Direct import
import { rootsEn } from '@/data/roots/english';
import { vocabularyEn } from '@/data/vocabulary/english';

// Barrel import
import { rootsEn, vocabularyEn } from '@/data';
```

### Usage in Components

```typescript
function RootsPage() {
  // Direct data access
  const roots = rootsEn;
  
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
  return words.reduce((acc, word) => {
    const category = word.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(word);
    return acc;
  }, {} as Record<string, VocabWord[]>);
}

export function findRelatedRoots(root: WordRoot, allRoots: WordRoot[]): WordRoot[] {
  return root.relatedRootIds
    .map(id => allRoots.find(r => r.id === id))
    .filter(Boolean) as WordRoot[];
}

// Etymology integration for vocabulary
export function getVocabularyData(learningLanguage: 'english' | 'french' | 'spanish' | 'latin' | 'greek'): VocabWord[] {
  let vocabulary: VocabWord[];
  switch (learningLanguage) {
    case 'french':
      vocabulary = vocabularyFr;
      break;
    case 'english':
    case 'spanish':
    case 'latin':
    case 'greek':
    default:
      vocabulary = vocabularyEn;
  }

  // Merge etymology data for English vocabulary
  if (learningLanguage === 'english') {
    return vocabulary.map(word => ({
      ...word,
      etymology: etymologyData[word.id]
    }));
  }

  return vocabulary;
}
```

## 🔎 Search Implementation

### Search Algorithm

```typescript
// src/lib/search.ts

export function searchAll(queryRaw: string): SearchItem[] {
  const query = queryRaw.trim().toLowerCase();
  if (!query) return [];

  // Search roots
  const rootMatches: SearchItem[] = rootsEn
    .filter((r) => {
      const haystack = `${r.root} ${r.meaning} ${r.languageOrigin}`.toLowerCase();
      return haystack.includes(query);
    })
    .map((r) => ({
      kind: 'root',
      id: r.id,
      title: r.root,
      subtitle: `${r.type} · ${r.meaning}`,
      href: `/roots/${encodeURIComponent(r.id)}`,
    }));

  // Search vocabulary
  const wordMatches: SearchItem[] = vocabularyEn
    .filter((w) => {
      const haystack = `${w.word} ${w.meaning} ${w.category}`.toLowerCase();
      return haystack.includes(query);
    })
    .map((w) => ({
      kind: 'word',
      id: w.id,
      title: w.word,
      subtitle: `${w.category} · ${w.meaning}`,
      href: `/vocabulary/${encodeURIComponent(w.id)}`,
    }));

  return [...rootMatches, ...wordMatches];
}
```

### Search Features

1. **Multi-field Search**: Searches across word, meaning, and metadata
2. **Case-insensitive**: Normalized search queries
3. **Type Filtering**: Filter by root or word type
4. **Relevance**: Simple relevance based on field matching
5. **Performance**: Optimized for frontend search
6. **Etymology Search**: Searches etymology fields including language origin, timeline stages, and cognates

### Search Hook

```typescript
// src/hooks/useSearch.ts

export function useSearch() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<SearchFilter>('all');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const allResults = searchAll(query);
    
    if (filter === 'all') return allResults;
    return allResults.filter(item => item.kind === filter);
  }, [query, filter]);

  return {
    query,
    filter,
    results,
    resultCount: results.length,
    handleQueryChange: setQuery,
    handleFilterChange: setFilter,
    clearSearch: () => { setQuery(''); setFilter('all'); },
    hasQuery: query.trim().length > 0,
  };
}
```

## ✅ Data Validation

### Type Guards

```typescript
// src/utils/validation.ts

export function isWordRoot(obj: any): obj is WordRoot {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.root === 'string' &&
    ['prefix', 'suffix', 'base'].includes(obj.type) &&
    typeof obj.languageOrigin === 'string' &&
    typeof obj.meaning === 'string' &&
    Array.isArray(obj.examples) &&
    Array.isArray(obj.relatedRootIds)
  );
}

export function isVocabWord(obj: any): obj is VocabWord {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.word === 'string' &&
    typeof obj.meaning === 'string' &&
    ['greetings', 'numbers', 'verbs', 'daily-use-nouns'].includes(obj.category) &&
    Array.isArray(obj.examples)
  );
}
```

### Runtime Validation

```typescript
// src/data/validation.ts

export function validateRoots(roots: any[]): WordRoot[] {
  return roots.filter(isWordRoot);
}

export function validateVocabulary(words: any[]): VocabWord[] {
  return words.filter(isVocabWord);
}
```

## 📈 Data Statistics

### Current Dataset Size

```typescript
// src/data/stats.ts

export const DATA_STATS = {
  roots: {
    english: {
      total: 200,
      prefixes: 80,
      suffixes: 60,
      bases: 60,
    }
  },
  vocabulary: {
    english: {
      total: 200,
      greetings: 30,
      numbers: 40,
      verbs: 70,
      'daily-use-nouns': 60,
    }
  }
} as const;
```

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
}

// Updated hooks
export function useRoots(language: string) {
  const [roots, setRoots] = useState<WordRoot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DataAPI.getRoots(language).then(setRoots).finally(() => setLoading(false));
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
    const subscription = subscribeToRoots((newRoots) => {
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
