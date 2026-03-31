import { VocabWord, WordRoot, VocabCategory } from '@/types';
import { rootsEn, rootsFr } from '@/data/roots';
import { vocabularyEn, vocabularyFr } from '@/data/vocabulary';

export function getRootsData(language: 'en' | 'fr'): WordRoot[] {
  switch (language) {
    case 'fr':
      return rootsFr;
    case 'en':
    default:
      return rootsEn;
  }
}

export function getVocabularyData(language: 'en' | 'fr'): VocabWord[] {
  switch (language) {
    case 'fr':
      return vocabularyFr;
    case 'en':
    default:
      return vocabularyEn;
  }
}

export function groupWordsByCategory(words: VocabWord[]): Record<string, VocabWord[]> {
  return words.reduce((acc, word) => {
    const category = word.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(word);
    return acc;
  }, {} as Record<string, VocabWord[]>);
}

export function sortWordsByCategory(words: VocabWord[]): VocabWord[] {
  const categoryOrder: VocabCategory[] = ['greetings', 'numbers', 'verbs', 'daily-use-nouns'];
  
  return words.sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.category);
    const bIndex = categoryOrder.indexOf(b.category);
    
    if (aIndex !== bIndex) {
      return aIndex - bIndex;
    }
    
    return a.word.localeCompare(b.word);
  });
}

export function findRelatedRoots(root: WordRoot, allRoots: WordRoot[]): WordRoot[] {
  return root.relatedRootIds
    .map(id => allRoots.find(r => r.id === id))
    .filter(Boolean) as WordRoot[];
}

export function paginateItems<T>(items: T[], page: number, itemsPerPage: number): T[] {
  const startIndex = (page - 1) * itemsPerPage;
  return items.slice(startIndex, startIndex + itemsPerPage);
}
