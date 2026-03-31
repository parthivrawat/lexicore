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
