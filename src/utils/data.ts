import { VocabWord, WordRoot, VocabCategory } from '@/types';
import { loadRootsData, loadVocabularyData, loadEtymologyData } from './dataLoader';

export async function getRootsData(learningLanguage: 'english' | 'french' | 'spanish' | 'latin' | 'greek'): Promise<WordRoot[]> {
  const language = learningLanguage === 'french' ? 'french' : 'english';
  return await loadRootsData(language);
}

export async function getVocabularyData(learningLanguage: 'english' | 'french' | 'spanish' | 'latin' | 'greek'): Promise<VocabWord[]> {
  const language = learningLanguage === 'french' ? 'french' : 'english';
  const vocabulary = await loadVocabularyData(language);

  if (learningLanguage === 'english') {
    const etymologyData = await loadEtymologyData();
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
