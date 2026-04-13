export type RootType = 'prefix' | 'suffix' | 'base';

export type RootExample = {
  word: string;
  meaning: string;
  sentence: string;
};

export type AccentType = 'american' | 'british' | 'australian' | 'canadian' | 'irish' | 'scottish' | 'parisian' | 'quebecois' | 'belgian' | 'swiss';

export type PronunciationVariant = {
  accent: AccentType;
  ipa: string;
  audioUrl?: string;
};

export type WordRoot = {
  id: string;
  root: string;
  type: RootType;
  languageOrigin: string;
  meaning: string;
  examples: RootExample[];
  relatedRootIds: string[];
  pronunciationIpa?: string; // For basic pronunciation
  pronunciationVariants?: PronunciationVariant[]; // For different accents
};

export type VocabCategory = 'greetings' | 'numbers' | 'verbs' | 'daily-use-nouns';

export type VocabWord = {
  id: string;
  word: string;
  meaning: string;
  pronunciationIpa?: string; // Legacy support
  pronunciationVariants?: PronunciationVariant[]; // Enhanced multi-accent support
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
