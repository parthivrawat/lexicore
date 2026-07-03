'use client';

import { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getVocabularyData } from '@/utils/data';
import { useSettings } from '@/contexts/SettingsContext';

export function useVocabularySearch() {
  const [query, setQuery] = useState('');
  const { learningLanguage } = useLanguage();
  const { settings } = useSettings();

  const results = useMemo(() => {
    if (query.trim().length < settings.minSearchQueryLength) return [];
    
    const vocabularyData = getVocabularyData(learningLanguage);
    const searchTerm = query.toLowerCase().trim();
    
    return vocabularyData.filter(word => {
      // Basic word fields
      const matchesBasic = 
        word.word.toLowerCase().includes(searchTerm) ||
        word.meaning.toLowerCase().includes(searchTerm) ||
        word.category.toLowerCase().includes(searchTerm) ||
        word.examples.some((example: string) => 
          example.toLowerCase().includes(searchTerm)
        );

      // Etymology fields
      const matchesEtymology = word.etymology && (
        word.etymology.languageOrigin.toLowerCase().includes(searchTerm) ||
        (word.etymology.yearOfOrigin && word.etymology.yearOfOrigin.toLowerCase().includes(searchTerm)) ||
        (word.etymology.notes && word.etymology.notes.toLowerCase().includes(searchTerm)) ||
        word.etymology.timeline.some(stage => 
          stage.language.toLowerCase().includes(searchTerm) ||
          stage.form.toLowerCase().includes(searchTerm) ||
          (stage.meaning && stage.meaning.toLowerCase().includes(searchTerm)) ||
          (stage.period && stage.period.toLowerCase().includes(searchTerm))
        ) ||
        (word.etymology.cognates && word.etymology.cognates.some(cognate =>
          cognate.language.toLowerCase().includes(searchTerm) ||
          cognate.word.toLowerCase().includes(searchTerm) ||
          cognate.meaning.toLowerCase().includes(searchTerm)
        ))
      );

      return matchesBasic || matchesEtymology;
    });
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
