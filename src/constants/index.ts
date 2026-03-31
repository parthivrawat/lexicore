export const APP_CONFIG = {
  name: 'Word Roots & Core Vocabulary',
  description: 'Multilingual platform for word roots and core vocabulary',
  version: '1.0.0',
  supportedLanguages: ['en', 'fr'],
} as const;

export const PAGINATION = {
  itemsPerPage: 20,
} as const;

export const SEARCH = {
  minQueryLength: 1,
  debounceMs: 300,
} as const;

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
    fr: 'Noms d\'usage quotidien',
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

export const ROUTES = {
  home: '/',
  roots: '/roots',
  vocabulary: '/vocabulary',
  search: '/search',
} as const;
