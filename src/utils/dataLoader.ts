import { VocabWord, WordRoot, Etymology } from '@/types';
import type { LearningLanguage } from '@/types/settings';

type RootsModule = {
  rootsEn: WordRoot[];
  rootsFr: WordRoot[];
  rootsEs: WordRoot[];
  rootsLa: WordRoot[];
  rootsEl: WordRoot[];
};
type VocabularyModule = {
  vocabularyEn: VocabWord[];
  vocabularyFr: VocabWord[];
  vocabularyEs: VocabWord[];
  vocabularyLa: VocabWord[];
  vocabularyEl: VocabWord[];
};

const resultCache: {
  roots?: Partial<Record<LearningLanguage, WordRoot[]>>;
  vocabulary?: Partial<Record<LearningLanguage, VocabWord[]>>;
  etymology?: Partial<Record<LearningLanguage, Record<string, Etymology>>>;
} = {};

const promiseCache: {
  roots?: Partial<Record<LearningLanguage, Promise<WordRoot[]>>>;
  vocabulary?: Partial<Record<LearningLanguage, Promise<VocabWord[]>>>;
  etymology?: Partial<Record<LearningLanguage, Promise<Record<string, Etymology>>>>;
} = {};

const rootsModuleMap: Record<LearningLanguage, keyof RootsModule> = {
  english: 'rootsEn',
  french: 'rootsFr',
  spanish: 'rootsEs',
  latin: 'rootsLa',
  greek: 'rootsEl',
};

const rootsImportMap: Record<LearningLanguage, () => Promise<unknown>> = {
  english: () => import('@/data/roots/english'),
  french: () => import('@/data/roots/french'),
  spanish: () => import('@/data/roots/spanish'),
  latin: () => import('@/data/roots/latin'),
  greek: () => import('@/data/roots/greek'),
};

const vocabularyModuleMap: Record<LearningLanguage, keyof VocabularyModule> = {
  english: 'vocabularyEn',
  french: 'vocabularyFr',
  spanish: 'vocabularyEs',
  latin: 'vocabularyLa',
  greek: 'vocabularyEl',
};

const vocabularyImportMap: Record<LearningLanguage, () => Promise<unknown>> = {
  english: () => import('@/data/vocabulary/english'),
  french: () => import('@/data/vocabulary/french'),
  spanish: () => import('@/data/vocabulary/spanish'),
  latin: () => import('@/data/vocabulary/latin'),
  greek: () => import('@/data/vocabulary/greek'),
};

type EtymologyModule = {
  etymologyData: Record<string, Etymology>;
};

const etymologyImportMap: Record<LearningLanguage, () => Promise<unknown>> = {
  english: () => import('@/data/etymology/english'),
  french: () => import('@/data/etymology/french'),
  spanish: () => import('@/data/etymology/spanish'),
  latin: () => import('@/data/etymology/latin'),
  greek: () => import('@/data/etymology/greek'),
};

export async function loadRootsData(language: LearningLanguage): Promise<WordRoot[]> {
  if (resultCache.roots?.[language]) {
    return resultCache.roots[language]!;
  }

  if (!promiseCache.roots?.[language]) {
    promiseCache.roots = {
      ...promiseCache.roots,
      [language]: rootsImportMap[language]().then(
        module => (module as RootsModule)[rootsModuleMap[language]]
      ),
    };
  }

  const result = await promiseCache.roots[language]!;
  resultCache.roots = { ...resultCache.roots, [language]: result };
  return result;
}

export async function loadVocabularyData(language: LearningLanguage): Promise<VocabWord[]> {
  if (resultCache.vocabulary?.[language]) {
    return resultCache.vocabulary[language]!;
  }

  if (!promiseCache.vocabulary?.[language]) {
    promiseCache.vocabulary = {
      ...promiseCache.vocabulary,
      [language]: vocabularyImportMap[language]().then(
        module => (module as VocabularyModule)[vocabularyModuleMap[language]]
      ),
    };
  }

  const result = await promiseCache.vocabulary[language]!;
  resultCache.vocabulary = { ...resultCache.vocabulary, [language]: result };
  return result;
}

export async function loadEtymologyData(
  language: LearningLanguage
): Promise<Record<string, Etymology>> {
  if (resultCache.etymology?.[language]) {
    return resultCache.etymology[language]!;
  }

  const load = etymologyImportMap[language];

  if (!promiseCache.etymology?.[language]) {
    promiseCache.etymology = {
      ...promiseCache.etymology,
      [language]: load().then(module => (module as EtymologyModule).etymologyData),
    };
  }

  const result = await promiseCache.etymology[language]!;
  resultCache.etymology = { ...resultCache.etymology, [language]: result };
  return result;
}

export function clearDataCache() {
  resultCache.roots = {};
  resultCache.vocabulary = {};
  resultCache.etymology = {};
  promiseCache.roots = {};
  promiseCache.vocabulary = {};
  promiseCache.etymology = {};
}
