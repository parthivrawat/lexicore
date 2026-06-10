'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export type UILanguage = 'en' | 'fr';
export type LearningLanguage = 'english' | 'french' | 'spanish' | 'latin' | 'greek';

interface LanguageContextType {
  uiLanguage: UILanguage;
  setUILanguage: (lang: UILanguage) => void;
  learningLanguage: LearningLanguage;
  setLearningLanguage: (lang: LearningLanguage) => void;
  t: (key: string, fallback?: string) => string;
  getLearningLanguageName: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'app.title': 'Word Roots & Core Vocabulary',
    'app.description': 'Multilingual platform for word roots and core vocabulary',
    'vocabulary.title': 'Core Vocabulary',
    'vocabulary.description': 'Master {{count}} essential words organized by categories with IPA pronunciation.',
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
    'rootTypes.prefix': 'Prefix',
    'rootTypes.suffix': 'Suffix',
    'rootTypes.base': 'Base',
    'words.count': '{{count}} words',
    'loading': 'Loading...',
    'ui.language': 'Interface Language',
    'learning.language': 'Learning Language',
    'languages.english': 'English',
    'languages.french': 'French',
    'languages.spanish': 'Spanish',
    'languages.latin': 'Latin',
    'languages.greek': 'Greek',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
  },
  fr: {
    'app.title': 'Racines de Mots & Vocabulaire Essentiel',
    'app.description': 'Plateforme multilingue pour les racines de mots et le vocabulaire essentiel',
    'vocabulary.title': 'Vocabulaire Essentiel',
    'vocabulary.description': 'Maîtrisez {{count}} mots essentiels organisés par catégories avec prononciation API.',
    'roots.title': 'Explorateur de Racines',
    'roots.description': 'Parcourez {{count}} racines de mots including préfixes, suffixes et formes de base.',
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
    'categories.daily-use-nouns': 'Noms d\'usage quotidien',
    'rootTypes.prefix': 'Préfixe',
    'rootTypes.suffix': 'Suffixe',
    'rootTypes.base': 'Base',
    'words.count': '{{count}} mots',
    'loading': 'Chargement...',
    'ui.language': 'Langue de l\'interface',
    'learning.language': 'Langue d\'apprentissage',
    'languages.english': 'Anglais',
    'languages.french': 'Français',
    'languages.spanish': 'Espagnol',
    'languages.latin': 'Latin',
    'languages.greek': 'Grec',
    'theme.light': 'Clair',
    'theme.dark': 'Sombre',
    'theme.system': 'Système',
  },
};

const learningLanguageNames = {
  english: { en: 'English', fr: 'Anglais' },
  french: { en: 'French', fr: 'Français' },
  spanish: { en: 'Spanish', fr: 'Espagnol' },
  latin: { en: 'Latin', fr: 'Latin' },
  greek: { en: 'Greek', fr: 'Grec' },
};

function LanguageProviderContent({ children }: { children: ReactNode }) {
  const { settings, updateSetting } = useSettings();
  
  const setUILanguage = (lang: UILanguage) => {
    updateSetting('uiLanguage', lang);
  };

  const setLearningLanguage = (lang: LearningLanguage) => {
    updateSetting('learningLanguage', lang);
  };

  const t = (key: string, fallback?: string): string => {
    const value = translations[settings.uiLanguage]?.[key as keyof typeof translations[typeof settings.uiLanguage]];
    if (!value && fallback) return fallback;
    return value || key;
  };

  const getLearningLanguageName = (): string => {
    return learningLanguageNames[settings.learningLanguage]?.[settings.uiLanguage] || settings.learningLanguage;
  };

  return (
    <LanguageContext.Provider value={{ 
      uiLanguage: settings.uiLanguage, 
      setUILanguage, 
      learningLanguage: settings.learningLanguage, 
      setLearningLanguage, 
      t,
      getLearningLanguageName
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // During SSR, we can't access localStorage or settings, so use fallback values
  if (typeof window === 'undefined') {
    const fallbackUILanguage: UILanguage = 'en';
    const fallbackLearningLanguage: LearningLanguage = 'english';
    
    const setUILanguage = () => {
      // No-op during SSR
    };

    const setLearningLanguage = () => {
      // No-op during SSR
    };

    const t = (key: string, fallback?: string): string => {
      const value = translations[fallbackUILanguage]?.[key as keyof typeof translations[typeof fallbackUILanguage]];
      if (!value && fallback) return fallback;
      return value || key;
    };

    const getLearningLanguageName = (): string => {
      return learningLanguageNames[fallbackLearningLanguage]?.[fallbackUILanguage] || fallbackLearningLanguage;
    };

    return (
      <LanguageContext.Provider value={{ 
        uiLanguage: fallbackUILanguage, 
        setUILanguage, 
        learningLanguage: fallbackLearningLanguage, 
        setLearningLanguage, 
        t,
        getLearningLanguageName
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  // Client-side: use settings
  return <LanguageProviderContent>{children}</LanguageProviderContent>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
