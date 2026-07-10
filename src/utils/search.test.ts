import { describe, it, expect } from 'vitest';
import {
  searchWithRelevance,
  calculateRootRelevance,
  calculateVocabularyRelevance,
  createSearchableRoot,
  createSearchableVocabWord,
  levenshteinDistance,
  similarityScore,
} from './search';
import { VocabWord, WordRoot } from '@/types';

describe('search utilities', () => {
  const root: WordRoot = {
    id: 'root_a',
    root: 'a-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'not, without',
    examples: [
      {
        word: 'amoral',
        meaning: 'without morals',
        sentence: 'He has an amoral attitude.',
      },
    ],
    relatedRootIds: [],
  };

  const searchableRoot = createSearchableRoot(root);

  const word: VocabWord = {
    id: 'word_hello',
    word: 'hello',
    meaning: 'a greeting',
    category: 'greetings',
    examples: ['Hello, how are you?'],
    etymology: {
      languageOrigin: 'Middle English',
      timeline: [{ language: 'Old High German', form: 'halā' }],
      cognates: [{ language: 'German', word: 'hallo', meaning: 'hello' }],
    },
  };

  const searchableWord = createSearchableVocabWord(word);

  describe('calculateRootRelevance', () => {
    it('scores an exact root match higher than a substring match', () => {
      const exact = calculateRootRelevance(searchableRoot, 'a-');
      const partial = calculateRootRelevance(searchableRoot, 'mor');

      expect(exact.score).toBeGreaterThan(partial.score);
      expect(exact.matchFields).toContain('root');
    });

    it('returns 0 for an empty or whitespace-only query', () => {
      expect(calculateRootRelevance(searchableRoot, '').score).toBe(0);
      expect(calculateRootRelevance(searchableRoot, '   ').score).toBe(0);
    });

    it('returns 0 when no field matches', () => {
      expect(calculateRootRelevance(searchableRoot, 'xyz').score).toBe(0);
    });
  });

  describe('calculateVocabularyRelevance', () => {
    it('scores an exact word match higher than a meaning match', () => {
      const wordScore = calculateVocabularyRelevance(searchableWord, 'hello');
      const meaningScore = calculateVocabularyRelevance(searchableWord, 'greeting');

      expect(wordScore.score).toBeGreaterThan(meaningScore.score);
      expect(wordScore.matchFields).toContain('word');
    });

    it('returns 0 for an empty query', () => {
      expect(calculateVocabularyRelevance(searchableWord, '').score).toBe(0);
    });

    it('matches inside etymology cognates', () => {
      const result = calculateVocabularyRelevance(searchableWord, 'hallo');

      expect(result.score).toBeGreaterThan(0);
      expect(result.matchFields).toContain('etymology');
    });
  });

  describe('searchWithRelevance', () => {
    it('returns all items with a score of 0 for an empty query', () => {
      const results = searchWithRelevance([searchableRoot], '', calculateRootRelevance);

      expect(results).toHaveLength(1);
      expect(results[0].score).toBe(0);
    });

    it('filters and sorts results by descending score', () => {
      const root2: WordRoot = { ...root, id: 'root_bio', root: 'bio', meaning: 'life' };
      const results = searchWithRelevance(
        [searchableRoot, createSearchableRoot(root2)],
        'bio',
        calculateRootRelevance
      );

      expect(results).toHaveLength(1);
      expect(results[0].item.root).toBe('bio');
    });

    it('returns an empty array when nothing matches', () => {
      const results = searchWithRelevance([searchableRoot], 'xyz', calculateRootRelevance);

      expect(results).toEqual([]);
    });
  });

  describe('levenshteinDistance', () => {
    it('returns 0 for identical strings', () => {
      expect(levenshteinDistance('hello', 'hello')).toBe(0);
    });

    it('calculates the correct distance for known examples', () => {
      expect(levenshteinDistance('kitten', 'sitting')).toBe(3);
      expect(levenshteinDistance('sunday', 'saturday')).toBe(3);
    });
  });

  describe('similarityScore', () => {
    it('returns 1 for identical strings', () => {
      expect(similarityScore('hello', 'hello')).toBe(1);
    });

    it('returns a positive number less than 1 for different strings', () => {
      const score = similarityScore('hello', 'world');

      expect(score).toBeGreaterThan(0);
      expect(score).toBeLessThan(1);
    });
  });
});
