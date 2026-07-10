import { describe, it, expect, vi, beforeEach } from 'vitest';
import { loadRootsData, loadVocabularyData, loadEtymologyData, clearDataCache } from './dataLoader';

vi.mock('@/data/roots/english', () => ({
  rootsEn: [
    {
      id: 'root_a',
      root: 'a-',
      type: 'prefix',
      languageOrigin: 'Greek',
      meaning: 'not, without',
      examples: [],
      relatedRootIds: [],
    },
  ],
}));

vi.mock('@/data/roots/french', () => ({
  rootsFr: [
    {
      id: 'root_fr_a',
      root: 'a-',
      type: 'prefix',
      languageOrigin: 'Greek',
      meaning: 'not, without',
      examples: [],
      relatedRootIds: [],
    },
  ],
}));

vi.mock('@/data/vocabulary/english', () => ({
  vocabularyEn: [
    {
      id: 'word_hello',
      word: 'hello',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
    },
  ],
}));

vi.mock('@/data/vocabulary/french', () => ({
  vocabularyFr: [
    {
      id: 'word_bonjour',
      word: 'bonjour',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
    },
  ],
}));

vi.mock('@/data/etymology/english', () => ({
  etymologyData: {
    word_hello: { languageOrigin: 'Test', timeline: [] },
  },
}));

describe('dataLoader', () => {
  beforeEach(() => {
    clearDataCache();
  });

  it('loads and caches English roots', async () => {
    const data1 = await loadRootsData('english');
    const data2 = await loadRootsData('english');

    expect(data1).toHaveLength(1);
    expect(data1[0].id).toBe('root_a');
    expect(data1).toBe(data2);
  });

  it('loads French roots', async () => {
    const data = await loadRootsData('french');

    expect(data[0].id).toBe('root_fr_a');
  });

  it('loads and caches English vocabulary', async () => {
    const data1 = await loadVocabularyData('english');
    const data2 = await loadVocabularyData('english');

    expect(data1).toHaveLength(1);
    expect(data1[0].id).toBe('word_hello');
    expect(data1).toBe(data2);
  });

  it('loads French vocabulary', async () => {
    const data = await loadVocabularyData('french');

    expect(data[0].id).toBe('word_bonjour');
  });

  it('loads etymology data', async () => {
    const data = await loadEtymologyData('english');

    expect(data.word_hello).toEqual({
      languageOrigin: 'Test',
      timeline: [],
    });
  });

  it('returns empty etymology for languages without data', async () => {
    const data = await loadEtymologyData('french');

    expect(data).toEqual({});
  });

  it('clears the cache so the next load fetches fresh data', async () => {
    const first = await loadRootsData('english');
    clearDataCache();
    const second = await loadRootsData('english');

    expect(first).toEqual(second);
    expect(second).toHaveLength(1);
  });
});
