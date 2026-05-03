'use client';

import { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getRootsData } from '@/utils/data';
import { useSettings } from '@/contexts/SettingsContext';

export function useRootSearch() {
  const [query, setQuery] = useState('');
  const { learningLanguage } = useLanguage();
  const { settings } = useSettings();

  const results = useMemo(() => {
    if (query.trim().length < settings.minSearchQueryLength) return [];
    
    const rootsData = getRootsData(learningLanguage);
    const searchTerm = query.toLowerCase().trim();
    
    return rootsData.filter(root => 
      root.root.toLowerCase().includes(searchTerm) ||
      root.meaning.toLowerCase().includes(searchTerm) ||
      root.languageOrigin.toLowerCase().includes(searchTerm) ||
      root.examples.some((example) => 
        example.word.toLowerCase().includes(searchTerm) ||
        example.meaning.toLowerCase().includes(searchTerm) ||
        example.sentence.toLowerCase().includes(searchTerm)
      )
    );
  }, [query, learningLanguage, settings.minSearchQueryLength]);

  const handleQueryChange = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    results,
    resultCount: results.length,
    handleQueryChange,
    clearSearch,
    hasQuery: query.trim().length > 0,
  };
}
