import { describe, it, expect } from 'vitest';
import { groupWordsByCategory, sortWordsByCategory, findRelatedRoots, paginateItems } from './data';
import { VocabWord, WordRoot } from '@/types';

describe('data utilities', () => {
  const words: VocabWord[] = [
    {
      id: '1',
      word: 'hello',
      meaning: 'a greeting',
      category: 'greetings',
      examples: [],
    },
    {
      id: '2',
      word: 'one',
      meaning: 'the number 1',
      category: 'numbers',
      examples: [],
    },
    {
      id: '3',
      word: 'hi',
      meaning: 'informal greeting',
      category: 'greetings',
      examples: [],
    },
  ];

  describe('groupWordsByCategory', () => {
    it('groups words by their category', () => {
      const grouped = groupWordsByCategory(words);

      expect(grouped.greetings).toHaveLength(2);
      expect(grouped.numbers).toHaveLength(1);
      expect(grouped.greetings.map(w => w.word)).toContain('hello');
      expect(grouped.greetings.map(w => w.word)).toContain('hi');
    });

    it('returns an empty object for an empty array', () => {
      expect(groupWordsByCategory([])).toEqual({});
    });
  });

  describe('sortWordsByCategory', () => {
    it('sorts by predefined category order then alphabetically', () => {
      const sorted = sortWordsByCategory(words);

      expect(sorted[0].category).toBe('greetings');
      expect(sorted[0].word).toBe('hello');
      expect(sorted[1].word).toBe('hi');
      expect(sorted[2].category).toBe('numbers');
    });
  });

  describe('findRelatedRoots', () => {
    it('finds related roots by id', () => {
      const roots: WordRoot[] = [
        {
          id: 'a',
          root: 'a-',
          type: 'prefix',
          languageOrigin: 'Greek',
          meaning: 'not, without',
          examples: [],
          relatedRootIds: ['b'],
        },
        {
          id: 'b',
          root: 'b-',
          type: 'prefix',
          languageOrigin: 'Greek',
          meaning: 'not, without',
          examples: [],
          relatedRootIds: [],
        },
      ];

      const related = findRelatedRoots(roots[0], roots);

      expect(related).toHaveLength(1);
      expect(related[0].id).toBe('b');
    });

    it('filters out missing related ids', () => {
      const root: WordRoot = {
        id: 'a',
        root: 'a-',
        type: 'prefix',
        languageOrigin: 'Greek',
        meaning: 'not, without',
        examples: [],
        relatedRootIds: ['missing'],
      };

      expect(findRelatedRoots(root, [root])).toEqual([]);
    });
  });

  describe('paginateItems', () => {
    const items = [1, 2, 3, 4, 5];

    it('returns the correct slice for the first page', () => {
      expect(paginateItems(items, 1, 2)).toEqual([1, 2]);
    });

    it('returns the correct slice for a middle page', () => {
      expect(paginateItems(items, 2, 2)).toEqual([3, 4]);
    });

    it('returns the remaining items for the last page', () => {
      expect(paginateItems(items, 3, 2)).toEqual([5]);
    });

    it('returns an empty array for pages beyond the data', () => {
      expect(paginateItems(items, 10, 2)).toEqual([]);
    });
  });
});
