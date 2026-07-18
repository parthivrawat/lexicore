export const APP_CONFIG = {
  name: 'LexiCore',
  description: 'A multilingual platform for word roots and core vocabulary learning',
  version: '1.0.0',
  supportedLanguages: ['en', 'fr'],
} as const;

export const PAGINATION = {
  itemsPerPage: 20,
} as const;

export const CATEGORY_ORDER = [
  'greetings',
  'numbers',
  'verbs',
  'daily-use-nouns',
  'adjectives',
  'adverbs',
  'prepositions',
  'function-words',
] as const;

export const CATEGORIES = {
  greetings: {
    en: 'Greetings',
    fr: 'Salutations',
  },
  numbers: {
    en: 'Numbers',
    fr: 'Nombres',
  },
  verbs: {
    en: 'Verbs',
    fr: 'Verbes',
  },
  'daily-use-nouns': {
    en: 'Daily Use Nouns',
    fr: "Noms d'usage quotidien",
  },
  adjectives: {
    en: 'Adjectives',
    fr: 'Adjectifs',
  },
  adverbs: {
    en: 'Adverbs',
    fr: 'Adverbes',
  },
  prepositions: {
    en: 'Prepositions',
    fr: 'Prépositions',
  },
  'function-words': {
    en: 'Function Words',
    fr: 'Mots fonctionnels',
  },
} as const;

export const ROOT_TYPES = {
  prefix: {
    en: 'Prefix',
    fr: 'Préfixe',
  },
  suffix: {
    en: 'Suffix',
    fr: 'Suffixe',
  },
  base: {
    en: 'Base',
    fr: 'Base',
  },
} as const;

export const TTS_CONFIG = {
  rate: 0.8,
  fallbackAccent: 'american' as const,
} as const;

export const PAGINATION_CONFIG = {
  showPages: 5,
  pageButtonSize: 'h-9 w-9',
} as const;

export const CARD_CONFIG = {
  iconSize: 'h-10 w-10',
  avatarCharLimit: 1,
} as const;

export const ROUTES = {
  home: '/',
  roots: '/roots',
  vocabulary: '/vocabulary',
  settings: '/settings',
} as const;

export * from './accents';
export * from './languages';
export * from './learningTips';
