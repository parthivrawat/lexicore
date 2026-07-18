import { createContext, useContext, ReactNode } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { interpolate } from '@/utils/interpolate';
import { LEARNING_LANGUAGES } from '@/constants/languages';
import type { LearningLanguage, UILanguage } from '@/types/settings';

export type { LearningLanguage, UILanguage };

export type TranslationVariables = Record<string, string | number>;

interface LanguageContextType {
  uiLanguage: UILanguage;
  setUILanguage: (lang: UILanguage) => void;
  learningLanguage: LearningLanguage;
  setLearningLanguage: (lang: LearningLanguage) => void;
  t: (key: string, params?: string | TranslationVariables, fallback?: string) => string;
  getLearningLanguageName: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const baseTranslationsEn: Record<string, string> = {
  'app.title': 'LexiCore',
  'app.description': 'A multilingual platform for word roots and core vocabulary learning',
  'vocabulary.title': 'Core Vocabulary',
  'vocabulary.description':
    'Master {{count}} essential words organized by categories with IPA pronunciation.',
  'roots.title': 'Root Explorer',
  'roots.description': 'Browse {{count}} word roots including prefixes, suffixes, and base forms.',
  'search.title': 'Search',
  'search.placeholder': 'Search for words or roots...',
  'search.noResults': 'No results found',
  'search.filters.all': 'All',
  'search.filters.roots': 'Roots',
  'search.filters.words': 'Words',
  'pagination.previous': 'Previous',
  'pagination.next': 'Next',
  'pagination.page': 'Page {{current}} of {{total}}',
  'categories.greetings': 'Greetings',
  'categories.numbers': 'Numbers',
  'categories.verbs': 'Verbs',
  'categories.daily-use-nouns': 'Daily Use Nouns',
  'categories.function-words': 'Function Words',
  'rootTypes.prefix': 'Prefix',
  'rootTypes.suffix': 'Suffix',
  'rootTypes.base': 'Base',
  'words.count': '{{count}} words',
  loading: 'Loading...',
  'ui.language': 'Interface Language',
  'learning.language': 'Learning Language',
  'theme.light': 'Light',
  'theme.dark': 'Dark',
  'theme.system': 'System',
};

const baseTranslationsFr: Record<string, string> = {
  'app.title': 'LexiCore',
  'app.description':
    'Une plateforme multilingue pour les racines de mots et le vocabulaire essentiel',
  'vocabulary.title': 'Vocabulaire Essentiel',
  'vocabulary.description':
    'Maîtrisez {{count}} mots essentiels organisés par catégories avec prononciation API.',
  'roots.title': 'Explorateur de Racines',
  'roots.description':
    'Parcourez {{count}} racines de mots including préfixes, suffixes et formes de base.',
  'search.title': 'Recherche',
  'search.placeholder': 'Rechercher des mots ou racines...',
  'search.noResults': 'Aucun résultat trouvé',
  'search.filters.all': 'Tout',
  'search.filters.roots': 'Racines',
  'search.filters.words': 'Mots',
  'pagination.previous': 'Précédent',
  'pagination.next': 'Suivant',
  'pagination.page': 'Page {{current}} de {{total}}',
  'categories.greetings': 'Salutations',
  'categories.numbers': 'Nombres',
  'categories.verbs': 'Verbes',
  'categories.daily-use-nouns': "Noms d'usage quotidien",
  'categories.function-words': 'Mots fonctionnels',
  'rootTypes.prefix': 'Préfixe',
  'rootTypes.suffix': 'Suffixe',
  'rootTypes.base': 'Base',
  'words.count': '{{count}} mots',
  loading: 'Chargement...',
  'ui.language': "Langue de l'interface",
  'learning.language': "Langue d'apprentissage",
  'theme.light': 'Clair',
  'theme.dark': 'Sombre',
  'theme.system': 'Système',
};

const translations: Record<UILanguage, Record<string, string>> = {
  en: {
    ...baseTranslationsEn,
    ...Object.fromEntries(LEARNING_LANGUAGES.map(lang => [`languages.${lang.id}`, lang.nameEn])),
  },
  fr: {
    ...baseTranslationsFr,
    ...Object.fromEntries(LEARNING_LANGUAGES.map(lang => [`languages.${lang.id}`, lang.nameFr])),
  },
};

const learningLanguageNames: Record<LearningLanguage, { en: string; fr: string }> =
  Object.fromEntries(
    LEARNING_LANGUAGES.map(lang => [lang.id, { en: lang.nameEn, fr: lang.nameFr }])
  ) as Record<LearningLanguage, { en: string; fr: string }>;

function createTranslationFunction(uiLanguage: UILanguage) {
  return (key: string, params?: string | TranslationVariables, fallback?: string): string => {
    const value = translations[uiLanguage]?.[key];

    if (typeof params === 'string') {
      return value || params || key;
    }

    if (value) {
      return params ? interpolate(value, params) : value;
    }

    return fallback || key;
  };
}

function createLearningLanguageNameGetter(
  learningLanguage: LearningLanguage,
  uiLanguage: UILanguage
) {
  return (): string => {
    return learningLanguageNames[learningLanguage]?.[uiLanguage] || learningLanguage;
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { settings, updateSetting } = useSettings();

  const setUILanguage = (lang: UILanguage) => {
    updateSetting('uiLanguage', lang);
  };

  const setLearningLanguage = (lang: LearningLanguage) => {
    updateSetting('learningLanguage', lang);
  };

  const t = createTranslationFunction(settings.uiLanguage);
  const getLearningLanguageName = createLearningLanguageNameGetter(
    settings.learningLanguage,
    settings.uiLanguage
  );

  return (
    <LanguageContext.Provider
      value={{
        uiLanguage: settings.uiLanguage,
        setUILanguage,
        learningLanguage: settings.learningLanguage,
        setLearningLanguage,
        t,
        getLearningLanguageName,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
