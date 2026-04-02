'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { APP_CONFIG } from '@/constants';

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
  },
};

const learningLanguageNames = {
  english: { en: 'English', fr: 'Anglais' },
  french: { en: 'French', fr: 'Français' },
  spanish: { en: 'Spanish', fr: 'Espagnol' },
  latin: { en: 'Latin', fr: 'Latin' },
  greek: { en: 'Greek', fr: 'Grec' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [uiLanguage, setUILanguage] = useState<UILanguage>('en');
  const [learningLanguage, setLearningLanguage] = useState<LearningLanguage>('english');

  const t = (key: string, fallback?: string): string => {
    const value = translations[uiLanguage]?.[key as keyof typeof translations[typeof uiLanguage]];
    if (!value && fallback) return fallback;
    return value || key;
  };

  const getLearningLanguageName = (): string => {
    return learningLanguageNames[learningLanguage]?.[uiLanguage] || learningLanguage;
  };

  return (
    <LanguageContext.Provider value={{ 
      uiLanguage, 
      setUILanguage, 
      learningLanguage, 
      setLearningLanguage, 
      t,
      getLearningLanguageName
    }}>
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

export function interpolate(text: string, variables: Record<string, string | number>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return variables[key]?.toString() || match;
  });
}
