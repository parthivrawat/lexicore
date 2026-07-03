import { VocabWord, WordRoot, VocabCategory } from '@/types';
import { rootsEn, rootsFr } from '@/data/roots';
import { vocabularyEn, vocabularyFr } from '@/data/vocabulary';
import { etymologyData } from '@/data/etymology';

export function getRootsData(learningLanguage: 'english' | 'french' | 'spanish' | 'latin' | 'greek'): WordRoot[] {
  switch (learningLanguage) {
    case 'french':
      return rootsFr;
    case 'english':
    case 'spanish':
    case 'latin':
    case 'greek':
    default:
      return rootsEn; // For now, use English data for other languages
  }
}

export function getVocabularyData(learningLanguage: 'english' | 'french' | 'spanish' | 'latin' | 'greek'): VocabWord[] {
  let vocabulary: VocabWord[];
  switch (learningLanguage) {
    case 'french':
      vocabulary = vocabularyFr;
      break;
    case 'english':
    case 'spanish':
    case 'latin':
    case 'greek':
    default:
      vocabulary = vocabularyEn; // For now, use English data for other languages
  }

  // Merge etymology data for English vocabulary
  if (learningLanguage === 'english') {
    return vocabulary.map(word => ({
      ...word,
      etymology: etymologyData[word.id]
    }));
  }

  return vocabulary;
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
