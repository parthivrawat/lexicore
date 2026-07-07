'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getRootsData } from '@/utils/data';
import { useSearch } from './useSearch';
import { calculateRootRelevance } from '@/utils/search';
import { WordRoot } from '@/types';

export function useRootSearch() {
  const { learningLanguage } = useLanguage();
  const [rootsData, setRootsData] = useState<WordRoot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    
    getRootsData(learningLanguage).then(data => {
      if (mounted) {
        setRootsData(data);
        setIsLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [learningLanguage]);

  const searchResult = useSearch({
    data: rootsData,
    relevanceCalculator: calculateRootRelevance,
  });

  return {
    ...searchResult,
    isLoading,
  };
}
