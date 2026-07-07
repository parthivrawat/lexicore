import { VocabWord, WordRoot } from '@/types';

type DataCache = {
  rootsEn?: WordRoot[];
  rootsFr?: WordRoot[];
  vocabularyEn?: VocabWord[];
  vocabularyFr?: VocabWord[];
  etymologyData?: Record<string, any>;
};

const cache: DataCache = {};

export async function loadRootsData(language: 'english' | 'french'): Promise<WordRoot[]> {
  const cacheKey = language === 'french' ? 'rootsFr' : 'rootsEn';
  
  if (cache[cacheKey]) {
    return cache[cacheKey]!;
  }

  if (language === 'french') {
    const module = await import('@/data/roots/french');
    cache.rootsFr = module.rootsFr;
    return cache.rootsFr;
  } else {
    const module = await import('@/data/roots/english');
    cache.rootsEn = module.rootsEn;
    return cache.rootsEn;
  }
}

export async function loadVocabularyData(language: 'english' | 'french'): Promise<VocabWord[]> {
  const cacheKey = language === 'french' ? 'vocabularyFr' : 'vocabularyEn';
  
  if (cache[cacheKey]) {
    return cache[cacheKey]!;
  }

  if (language === 'french') {
    const module = await import('@/data/vocabulary/french');
    cache.vocabularyFr = module.vocabularyFr;
    return cache.vocabularyFr;
  } else {
    const module = await import('@/data/vocabulary/english');
    cache.vocabularyEn = module.vocabularyEn;
    return cache.vocabularyEn;
  }
}

export async function loadEtymologyData(): Promise<Record<string, any>> {
  if (cache.etymologyData) {
    return cache.etymologyData;
  }

  const module = await import('@/data/etymology/english');
  cache.etymologyData = module.etymologyData;
  return cache.etymologyData;
}

export function clearDataCache() {
  Object.keys(cache).forEach(key => {
    delete cache[key as keyof DataCache];
  });
}
