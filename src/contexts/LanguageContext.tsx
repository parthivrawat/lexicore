'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { APP_CONFIG } from '@/constants';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'app.title': 'Word Roots & Core Vocabulary',
    'app.description': 'Multilingual platform for word roots and core vocabulary',
    'vocabulary.title': 'Core Vocabulary',
    'vocabulary.description': 'Master {{count}} essential English words organized by categories with IPA pronunciation.',
    'roots.title': 'Root Explorer',
    'roots.description': 'Browse {{count}} English word roots including prefixes, suffixes, and base forms.',
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
  },
  fr: {
    'app.title': 'Racines de Mots & Vocabulaire Essentiel',
    'app.description': 'Plateforme multilingue pour les racines de mots et le vocabulaire essentiel',
    'vocabulary.title': 'Vocabulaire Essentiel',
    'vocabulary.description': 'Maîtrisez {{count}} mots français essentiels organisés par catégories avec prononciation API.',
    'roots.title': 'Explorateur de Racines',
    'roots.description': 'Parcourez {{count}} racines de mots français including préfixes, suffixes et formes de base.',
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
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, fallback?: string): string => {
    const value = translations[language]?.[key as keyof typeof translations[typeof language]];
    if (!value && fallback) return fallback;
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
