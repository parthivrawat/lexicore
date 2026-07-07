'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getRootsData } from '@/utils/data';
import { useSearch } from './useSearch';
import { calculateRootRelevance } from '@/utils/search';

export function useRootSearch() {
  const { learningLanguage } = useLanguage();
  const rootsData = getRootsData(learningLanguage);

  return useSearch({
    data: rootsData,
    relevanceCalculator: calculateRootRelevance,
  });
}
