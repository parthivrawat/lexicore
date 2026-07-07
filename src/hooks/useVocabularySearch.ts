'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getVocabularyData } from '@/utils/data';
import { useSearch } from './useSearch';
import { calculateVocabularyRelevance } from '@/utils/search';
import { VocabWord } from '@/types';

export function useVocabularySearch() {
  const { learningLanguage } = useLanguage();
  const [vocabularyData, setVocabularyData] = useState<VocabWord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    
    getVocabularyData(learningLanguage).then(data => {
      if (mounted) {
        setVocabularyData(data);
        setIsLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [learningLanguage]);

  const searchResult = useSearch({
    data: vocabularyData,
    relevanceCalculator: calculateVocabularyRelevance,
  });

  return {
    ...searchResult,
    isLoading,
  };
}
