export const APP_CONFIG = {
  name: 'Word Roots & Core Vocabulary',
  description: 'Multilingual platform for word roots and core vocabulary',
  version: '1.0.0',
  supportedLanguages: ['en', 'fr'],
} as const;

export const PAGINATION = {
  itemsPerPage: 20,
} as const;

export const CATEGORY_ORDER = ['greetings', 'numbers', 'verbs', 'daily-use-nouns'] as const;

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

export const ACCENT_NAMES = {
  american: { en: 'American', fr: 'Américain' },
  british: { en: 'British', fr: 'Britannique' },
  australian: { en: 'Australian', fr: 'Australien' },
  canadian: { en: 'Canadian', fr: 'Canadien' },
  irish: { en: 'Irish', fr: 'Irlandais' },
  scottish: { en: 'Scottish', fr: 'Écossais' },
  parisian: { en: 'Parisian', fr: 'Parisien' },
  quebecois: { en: 'Québécois', fr: 'Québécois' },
  belgian: { en: 'Belgian', fr: 'Belge' },
  swiss: { en: 'Swiss', fr: 'Suisse' },
} as const;

export const ACCENT_FLAGS = {
  american: '🇺🇸',
  british: '🇬🇧',
  australian: '🇦🇺',
  canadian: '🇨🇦',
  irish: '🇮🇪',
  scottish: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  parisian: '🇫🇷',
  quebecois: '🇨🇦',
  belgian: '🇧🇪',
  swiss: '🇨🇭',
} as const;

export const ACCENT_LANGUAGE_CODES = {
  american: 'en-US',
  british: 'en-GB',
  australian: 'en-AU',
  canadian: 'en-CA',
  irish: 'en-IE',
  scottish: 'en-GB',
  parisian: 'fr-FR',
  quebecois: 'fr-CA',
  belgian: 'fr-BE',
  swiss: 'fr-CH',
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

export * from './learningTips';
