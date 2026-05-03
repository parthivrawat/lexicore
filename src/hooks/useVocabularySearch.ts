'use client';

import { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getVocabularyData } from '@/utils/data';
import { useSettings } from '@/contexts/SettingsContext';

export function useVocabularySearch() {
  const [query, setQuery] = useState('');
  const { learningLanguage } = useLanguage();
  const { settings } = useSettings();

  const results = useMemo(() => {
    if (query.trim().length < settings.minSearchQueryLength) return [];
    
    const vocabularyData = getVocabularyData(learningLanguage);
    const searchTerm = query.toLowerCase().trim();
    
    return vocabularyData.filter(word => 
      word.word.toLowerCase().includes(searchTerm) ||
      word.meaning.toLowerCase().includes(searchTerm) ||
      word.category.toLowerCase().includes(searchTerm) ||
      word.examples.some((example: string) => 
        example.toLowerCase().includes(searchTerm)
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
