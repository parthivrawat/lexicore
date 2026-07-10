'use client';

import { useState, useMemo, useCallback, useEffect, useTransition } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { searchWithRelevance, RelevanceResult, Searchable } from '@/utils/search';

interface UseSearchOptions<T, S extends Searchable<T>> {
  data: T[];
  normalize: (item: T) => S;
  relevanceCalculator: (item: S, term: string) => RelevanceResult;
}

const SEARCH_DEBOUNCE_MS = 200;

export function useSearch<T, S extends Searchable<T>>({
  data,
  normalize,
  relevanceCalculator,
}: UseSearchOptions<T, S>) {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { settings } = useSettings();

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length === 0) {
      startTransition(() => setDebouncedQuery(''));
      return undefined;
    }

    const timeout = setTimeout(() => {
      startTransition(() => setDebouncedQuery(trimmed));
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timeout);
  }, [query, startTransition]);

  const normalizedData = useMemo(() => data.map(normalize), [data, normalize]);

  const results = useMemo(() => {
    if (debouncedQuery.length < settings.minSearchQueryLength) return [];

    const searchResults = searchWithRelevance<S>(
      normalizedData,
      debouncedQuery,
      relevanceCalculator
    );

    return searchResults.map(result => result.item);
  }, [debouncedQuery, normalizedData, relevanceCalculator, settings.minSearchQueryLength]);

  const handleQueryChange = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    startTransition(() => setDebouncedQuery(''));
  }, [startTransition]);

  return {
    query,
    results,
    resultCount: results.length,
    isPending,
    handleQueryChange,
    clearSearch,
    hasQuery: query.trim().length > 0,
  };
}
