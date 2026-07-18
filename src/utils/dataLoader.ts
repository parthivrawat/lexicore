import { VocabWord, WordRoot, Etymology } from '@/types';
import type { LearningLanguage } from '@/types/settings';
import { LEARNING_LANGUAGES } from '@/constants/languages';

type RootsModule = Record<string, WordRoot[]>;
type VocabularyModule = Record<string, VocabWord[]>;
type EtymologyModule = {
  etymologyData: Record<string, Etymology>;
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

const rootsModuleMap: Record<LearningLanguage, string> = Object.fromEntries(
  LEARNING_LANGUAGES.map(lang => [lang.id, `roots${lang.exportSuffix}`])
) as Record<LearningLanguage, string>;

const rootsImportMap: Record<LearningLanguage, () => Promise<unknown>> = Object.fromEntries(
  LEARNING_LANGUAGES.map(lang => [lang.id, () => import(`@/data/roots/${lang.id}/index.ts`)])
) as Record<LearningLanguage, () => Promise<unknown>>;

const vocabularyModuleMap: Record<LearningLanguage, string> = Object.fromEntries(
  LEARNING_LANGUAGES.map(lang => [lang.id, `vocabulary${lang.exportSuffix}`])
) as Record<LearningLanguage, string>;

const vocabularyImportMap: Record<LearningLanguage, () => Promise<unknown>> = Object.fromEntries(
  LEARNING_LANGUAGES.map(lang => [lang.id, () => import(`@/data/vocabulary/${lang.id}/index.ts`)])
) as Record<LearningLanguage, () => Promise<unknown>>;

const etymologyImportMap: Record<LearningLanguage, () => Promise<unknown>> = Object.fromEntries(
  LEARNING_LANGUAGES.map(lang => [lang.id, () => import(`@/data/etymology/${lang.id}/index.ts`)])
) as Record<LearningLanguage, () => Promise<unknown>>;

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

  if (!promiseCache.etymology?.[language]) {
    promiseCache.etymology = {
      ...promiseCache.etymology,
      [language]: etymologyImportMap[language]().then(
        module => (module as EtymologyModule).etymologyData
      ),
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
