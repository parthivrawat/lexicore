'use client';

import { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getRootsData } from '@/utils/data';
import { useSettings } from '@/contexts/SettingsContext';
import { searchWithRelevance, calculateRootRelevance } from '@/utils/search';

export function useRootSearch() {
  const [query, setQuery] = useState('');
  const { learningLanguage } = useLanguage();
  const { settings } = useSettings();

  const results = useMemo(() => {
    if (query.trim().length < settings.minSearchQueryLength) return [];
    
    const rootsData = getRootsData(learningLanguage);
    const searchTerm = query.trim();
    
    // Use relevance-based search with ranking
    const searchResults = searchWithRelevance(
      rootsData,
      searchTerm,
      calculateRootRelevance
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
