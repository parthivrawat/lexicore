import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getWordOfTheDay, clearWordOfTheDayStorage } from './wordOfTheDay';
import { getVocabularyData } from '@/utils/data';
import { LearningLanguage } from '@/types/settings';
import { VocabWord } from '@/types';

vi.mock('@/utils/data', () => ({
  getVocabularyData: vi.fn(),
}));

const vocabularyByLanguage: Partial<Record<LearningLanguage, VocabWord[]>> = {
  english: [
    {
      id: 'word_hello',
      word: 'hello',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
      etymology: { languageOrigin: 'Test', timeline: [] },
    },
  ],
  french: [
    {
      id: 'word_bonjour',
      word: 'bonjour',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
    },
  ],
  spanish: [
    {
      id: 'word_hola',
      word: 'hola',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
    },
  ],
  latin: [
    {
      id: 'word_salve',
      word: 'salve',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
    },
  ],
  greek: [
    {
      id: 'word_geia',
      word: 'γειά',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
    },
  ],
};

const mockedGetVocabularyData = vi.mocked(getVocabularyData);

describe('wordOfTheDay', () => {
  beforeEach(() => {
    clearWordOfTheDayStorage();
    mockedGetVocabularyData.mockImplementation((language: LearningLanguage) =>
      Promise.resolve(vocabularyByLanguage[language] ?? [])
    );
  });

  it('returns a word for the current day', async () => {
    const word = await getWordOfTheDay('english');

    expect(word).not.toBeNull();
    expect(word?.word).toBe('hello');
  });

  it('attaches etymology when available', async () => {
    const word = await getWordOfTheDay('english');

    expect(word?.etymology).toEqual({
      languageOrigin: 'Test',
      timeline: [],
    });
  });

  it('returns the same word for repeated calls on the same day', async () => {
    const word1 = await getWordOfTheDay('english');
    const word2 = await getWordOfTheDay('english');

    expect(word1?.id).toBe(word2?.id);
  });

  it('selects a word for the requested learning language', async () => {
    const word = await getWordOfTheDay('french');

    expect(word?.word).toBe('bonjour');
  });
});
