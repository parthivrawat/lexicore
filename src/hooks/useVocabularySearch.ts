'use client';

import { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getVocabularyData } from '@/utils/data';
import { useSettings } from '@/contexts/SettingsContext';
import { searchWithRelevance, calculateVocabularyRelevance } from '@/utils/search';

export function useVocabularySearch() {
  const [query, setQuery] = useState('');
  const { learningLanguage } = useLanguage();
  const { settings } = useSettings();

  const results = useMemo(() => {
    if (query.trim().length < settings.minSearchQueryLength) return [];
    
    const vocabularyData = getVocabularyData(learningLanguage);
    const searchTerm = query.trim();
    
    // Use relevance-based search with ranking
    const searchResults = searchWithRelevance(
      vocabularyData,
      searchTerm,
      calculateVocabularyRelevance
    );
    
    // Return just the items, sorted by relevance
    return searchResults.map(result => result.item);
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
