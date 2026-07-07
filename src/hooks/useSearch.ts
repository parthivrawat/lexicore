'use client';

import { useState, useMemo, useCallback } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { searchWithRelevance } from '@/utils/search';

interface UseSearchOptions<T> {
  data: T[];
  relevanceCalculator: (item: T, term: string) => number;
}

export function useSearch<T>({ data, relevanceCalculator }: UseSearchOptions<T>) {
  const [query, setQuery] = useState('');
  const { settings } = useSettings();

  const results = useMemo(() => {
    if (query.trim().length < settings.minSearchQueryLength) return [];
    
    const searchTerm = query.trim();
    
    const searchResults = searchWithRelevance(
      data,
      searchTerm,
      relevanceCalculator
    );
    
    return searchResults.map(result => result.item);
  }, [query, data, relevanceCalculator, settings.minSearchQueryLength]);

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
