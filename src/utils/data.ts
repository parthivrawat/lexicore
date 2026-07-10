import { VocabWord, WordRoot, VocabCategory } from '@/types';
import type { LearningLanguage } from '@/types/settings';
import { loadRootsData, loadVocabularyData, loadEtymologyData } from './dataLoader';
import { getTtsAudioUrl } from './audio';

const vocabularyDataCache: Partial<Record<LearningLanguage, VocabWord[]>> = {};
const rootsByIdCache: Partial<Record<LearningLanguage, Record<string, WordRoot>>> = {};
const vocabularyByIdCache: Partial<Record<LearningLanguage, Record<string, VocabWord>>> = {};

export async function getRootsData(language: LearningLanguage): Promise<WordRoot[]> {
  const roots = await loadRootsData(language);
  return roots.map(root => {
    if (!root.pronunciationVariants) return root;
    return {
      ...root,
      pronunciationVariants: root.pronunciationVariants.map(variant => ({
        ...variant,
        audioUrl: variant.audioUrl ?? getTtsAudioUrl(root.root, variant.accent),
      })),
    };
  });
}

export async function getVocabularyData(language: LearningLanguage): Promise<VocabWord[]> {
  if (vocabularyDataCache[language]) {
    return vocabularyDataCache[language]!;
  }

  const vocabulary = await loadVocabularyData(language);

  const withAudioUrl = vocabulary.map(word => {
    if (!word.pronunciationVariants) return word;
    return {
      ...word,
      pronunciationVariants: word.pronunciationVariants.map(variant => ({
        ...variant,
        audioUrl: variant.audioUrl ?? getTtsAudioUrl(word.word, variant.accent),
      })),
    };
  });

  const etymologyData = await loadEtymologyData(language);
  const withEtymology = withAudioUrl.map(word => ({
    ...word,
    etymology: etymologyData[word.id],
  }));
  vocabularyDataCache[language] = withEtymology;
  return withEtymology;
}

export async function getRootById(
  language: LearningLanguage,
  id: string
): Promise<WordRoot | undefined> {
  if (rootsByIdCache[language]) {
    return rootsByIdCache[language]![id];
  }

  const roots = await getRootsData(language);
  const byId = roots.reduce(
    (acc, root) => {
      acc[root.id] = root;
      return acc;
    },
    {} as Record<string, WordRoot>
  );

  rootsByIdCache[language] = byId;
  return byId[id];
}

export async function getVocabularyById(
  language: LearningLanguage,
  id: string
): Promise<VocabWord | undefined> {
  if (vocabularyByIdCache[language]) {
    return vocabularyByIdCache[language]![id];
  }

  const words = await getVocabularyData(language);
  const byId = words.reduce(
    (acc, word) => {
      acc[word.id] = word;
      return acc;
    },
    {} as Record<string, VocabWord>
  );

  vocabularyByIdCache[language] = byId;
  return byId[id];
}

export function groupWordsByCategory(words: VocabWord[]): Record<string, VocabWord[]> {
  return words.reduce(
    (acc, word) => {
      const category = word.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(word);
      return acc;
    },
    {} as Record<string, VocabWord[]>
  );
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
