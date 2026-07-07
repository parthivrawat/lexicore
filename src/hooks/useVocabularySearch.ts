'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getVocabularyData } from '@/utils/data';
import { useSearch } from './useSearch';
import { calculateVocabularyRelevance } from '@/utils/search';

export function useVocabularySearch() {
  const { learningLanguage } = useLanguage();
  const vocabularyData = getVocabularyData(learningLanguage);

  return useSearch({
    data: vocabularyData,
    relevanceCalculator: calculateVocabularyRelevance,
  });
}
