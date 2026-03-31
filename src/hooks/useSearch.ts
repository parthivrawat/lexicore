'use client';

import { useState, useMemo, useCallback } from 'react';
import { SearchItem, SearchFilter } from '@/types';
import { searchAll } from '@/lib/search';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<SearchFilter>('all');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const allResults = searchAll(query);
    
    if (filter === 'all') return allResults;
    return allResults.filter(item => item.kind === filter);
  }, [query, filter]);

  const handleQueryChange = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  const handleFilterChange = useCallback((newFilter: SearchFilter) => {
    setFilter(newFilter);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setFilter('all');
  }, []);

  return {
    query,
    filter,
    results,
    resultCount: results.length,
    handleQueryChange,
    handleFilterChange,
    clearSearch,
    hasQuery: query.trim().length > 0,
  };
}
