import { useState, useEffect } from 'react';
import { VocabWord, WordRoot } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { getRootsData, getVocabularyData } from '@/utils/data';

interface UseLanguageDataResult {
  roots: WordRoot[];
  vocabulary: VocabWord[];
  isLoading: boolean;
  error: Error | null;
}

export function useLanguageData(): UseLanguageDataResult {
  const { learningLanguage } = useLanguage();
  const [roots, setRoots] = useState<WordRoot[]>([]);
  const [vocabulary, setVocabulary] = useState<VocabWord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    Promise.all([getRootsData(learningLanguage), getVocabularyData(learningLanguage)])
      .then(([loadedRoots, loadedVocabulary]) => {
        if (isMounted) {
          setRoots(loadedRoots);
          setVocabulary(loadedVocabulary);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [learningLanguage]);

  return { roots, vocabulary, isLoading, error };
}
