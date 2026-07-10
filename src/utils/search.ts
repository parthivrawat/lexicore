/**
 * Relevance-based search utility with scoring, normalization, and fuzzy matching
 */

import { WordRoot, VocabWord, Etymology } from '@/types';

export type MatchType = 'exact' | 'prefix' | 'substring' | 'word-boundary' | 'fuzzy' | 'none';

export interface SearchResult<T> {
  item: T;
  score: number;
  matchFields: string[];
}

export interface RelevanceResult {
  score: number;
  matchFields: string[];
}

export interface Searchable<T> {
  readonly original: T;
}

export interface SearchableRoot extends Searchable<WordRoot> {
  root: string;
  meaning: string;
  languageOrigin: string;
  examples: Array<{
    word: string;
    meaning: string;
    sentence: string;
  }>;
}

export interface SearchableVocabWord extends Searchable<VocabWord> {
  word: string;
  meaning: string;
  category: string;
  examples: string[];
  etymology?: SearchableEtymology;
}

export interface SearchableEtymology {
  languageOrigin: string;
  yearOfOrigin?: string;
  notes?: string;
  timeline: SearchableEtymologyStage[];
  cognates?: SearchableCognate[];
}

export interface SearchableEtymologyStage {
  language: string;
  form: string;
  meaning?: string;
  period?: string;
}

export interface SearchableCognate {
  language: string;
  word: string;
  meaning: string;
}

interface MatchScore {
  type: MatchType;
  score: number;
}

/**
 * Helper to accumulate a score and the corresponding field name when it matches.
 */
function addMatchScore(match: MatchScore, field: string, fields: Set<string>): number {
  if (match.score > 0) {
    fields.add(field);
  }
  return match.score;
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Calculate match type and base score for a pre-normalized, lowercased value.
 * `termLower` and `wordBoundaryRegex` are computed once per query and reused.
 */
function getMatchScore(
  termLower: string,
  wordBoundaryRegex: RegExp,
  valueLower: string
): MatchScore {
  if (valueLower === termLower) {
    return { type: 'exact', score: 100 };
  }

  if (valueLower.startsWith(termLower)) {
    return { type: 'prefix', score: 80 };
  }

  if (wordBoundaryRegex.test(valueLower)) {
    return { type: 'word-boundary', score: 60 };
  }

  if (valueLower.includes(termLower)) {
    return { type: 'substring', score: 40 };
  }

  // Fuzzy fallback for short, single-word-like values (handles typos)
  if (
    termLower.length > 1 &&
    valueLower.length > 0 &&
    valueLower.length <= termLower.length * 2 + 3
  ) {
    const similarity = similarityScore(termLower, valueLower);
    if (similarity >= 0.7) {
      return { type: 'fuzzy', score: Math.round(25 * similarity) };
    }
  }

  return { type: 'none', score: 0 };
}

/**
 * Normalize a WordRoot for search: lowercase all searchable text once.
 */
export function createSearchableRoot(root: WordRoot): SearchableRoot {
  return {
    original: root,
    root: root.root.toLowerCase(),
    meaning: root.meaning.toLowerCase(),
    languageOrigin: root.languageOrigin.toLowerCase(),
    examples: root.examples.map(example => ({
      word: example.word.toLowerCase(),
      meaning: example.meaning.toLowerCase(),
      sentence: example.sentence.toLowerCase(),
    })),
  };
}

function createSearchableEtymology(etymology: Etymology): SearchableEtymology {
  return {
    languageOrigin: etymology.languageOrigin.toLowerCase(),
    yearOfOrigin: etymology.yearOfOrigin?.toLowerCase(),
    notes: etymology.notes?.toLowerCase(),
    timeline: etymology.timeline.map(stage => ({
      language: stage.language.toLowerCase(),
      form: stage.form.toLowerCase(),
      meaning: stage.meaning?.toLowerCase(),
      period: stage.period?.toLowerCase(),
    })),
    cognates: etymology.cognates?.map(cognate => ({
      language: cognate.language.toLowerCase(),
      word: cognate.word.toLowerCase(),
      meaning: cognate.meaning.toLowerCase(),
    })),
  };
}

/**
 * Normalize a VocabWord for search: lowercase all searchable text once.
 */
export function createSearchableVocabWord(word: VocabWord): SearchableVocabWord {
  return {
    original: word,
    word: word.word.toLowerCase(),
    meaning: word.meaning.toLowerCase(),
    category: word.category.toLowerCase(),
    examples: word.examples.map(example => example.toLowerCase()),
    etymology: word.etymology ? createSearchableEtymology(word.etymology) : undefined,
  };
}

/**
 * Calculate relevance score for a normalized root based on search term.
 */
export function calculateRootRelevance(
  searchable: SearchableRoot,
  searchTerm: string
): RelevanceResult {
  if (!searchTerm.trim()) return { score: 0, matchFields: [] };

  const termLower = searchTerm.toLowerCase();
  const wordBoundaryRegex = new RegExp(`\\b${escapeRegex(termLower)}\\b`, 'i');

  let totalScore = 0;
  const matchFields = new Set<string>();
  const weights = {
    root: 3.0,
    meaning: 2.0,
    languageOrigin: 1.5,
    exampleWord: 1.2,
    exampleMeaning: 1.0,
    exampleSentence: 0.8,
  };

  totalScore +=
    addMatchScore(
      getMatchScore(termLower, wordBoundaryRegex, searchable.root),
      'root',
      matchFields
    ) * weights.root;
  totalScore +=
    addMatchScore(
      getMatchScore(termLower, wordBoundaryRegex, searchable.meaning),
      'meaning',
      matchFields
    ) * weights.meaning;
  totalScore +=
    addMatchScore(
      getMatchScore(termLower, wordBoundaryRegex, searchable.languageOrigin),
      'languageOrigin',
      matchFields
    ) * weights.languageOrigin;

  searchable.examples.forEach(example => {
    totalScore +=
      addMatchScore(
        getMatchScore(termLower, wordBoundaryRegex, example.word),
        'examples',
        matchFields
      ) * weights.exampleWord;
    totalScore +=
      addMatchScore(
        getMatchScore(termLower, wordBoundaryRegex, example.meaning),
        'examples',
        matchFields
      ) * weights.exampleMeaning;
    totalScore +=
      addMatchScore(
        getMatchScore(termLower, wordBoundaryRegex, example.sentence),
        'examples',
        matchFields
      ) * weights.exampleSentence;
  });

  return { score: totalScore, matchFields: [...matchFields] };
}

/**
 * Calculate relevance score for a normalized vocabulary word based on search term.
 */
export function calculateVocabularyRelevance(
  searchable: SearchableVocabWord,
  searchTerm: string
): RelevanceResult {
  if (!searchTerm.trim()) return { score: 0, matchFields: [] };

  const termLower = searchTerm.toLowerCase();
  const wordBoundaryRegex = new RegExp(`\\b${escapeRegex(termLower)}\\b`, 'i');

  let totalScore = 0;
  const matchFields = new Set<string>();
  const weights = {
    word: 3.0,
    meaning: 2.0,
    category: 1.5,
    example: 1.2,
    etymologyOrigin: 1.3,
    etymologyNotes: 1.0,
    timelineLanguage: 0.9,
    timelineForm: 1.1,
    timelineMeaning: 0.8,
    cognateWord: 1.0,
    cognateMeaning: 0.8,
  };

  totalScore +=
    addMatchScore(
      getMatchScore(termLower, wordBoundaryRegex, searchable.word),
      'word',
      matchFields
    ) * weights.word;
  totalScore +=
    addMatchScore(
      getMatchScore(termLower, wordBoundaryRegex, searchable.meaning),
      'meaning',
      matchFields
    ) * weights.meaning;
  totalScore +=
    addMatchScore(
      getMatchScore(termLower, wordBoundaryRegex, searchable.category),
      'category',
      matchFields
    ) * weights.category;

  searchable.examples.forEach(example => {
    totalScore +=
      addMatchScore(getMatchScore(termLower, wordBoundaryRegex, example), 'examples', matchFields) *
      weights.example;
  });

  if (searchable.etymology) {
    const etymology = searchable.etymology;
    const etymologyFields = new Set<string>();

    totalScore +=
      addMatchScore(
        getMatchScore(termLower, wordBoundaryRegex, etymology.languageOrigin),
        'etymology',
        etymologyFields
      ) * weights.etymologyOrigin;

    if (etymology.yearOfOrigin) {
      totalScore +=
        addMatchScore(
          getMatchScore(termLower, wordBoundaryRegex, etymology.yearOfOrigin),
          'etymology',
          etymologyFields
        ) * weights.etymologyOrigin;
    }

    if (etymology.notes) {
      totalScore +=
        addMatchScore(
          getMatchScore(termLower, wordBoundaryRegex, etymology.notes),
          'etymology',
          etymologyFields
        ) * weights.etymologyNotes;
    }

    etymology.timeline.forEach(stage => {
      totalScore +=
        addMatchScore(
          getMatchScore(termLower, wordBoundaryRegex, stage.language),
          'etymology',
          etymologyFields
        ) * weights.timelineLanguage;
      totalScore +=
        addMatchScore(
          getMatchScore(termLower, wordBoundaryRegex, stage.form),
          'etymology',
          etymologyFields
        ) * weights.timelineForm;

      if (stage.meaning) {
        totalScore +=
          addMatchScore(
            getMatchScore(termLower, wordBoundaryRegex, stage.meaning),
            'etymology',
            etymologyFields
          ) * weights.timelineMeaning;
      }

      if (stage.period) {
        totalScore +=
          addMatchScore(
            getMatchScore(termLower, wordBoundaryRegex, stage.period),
            'etymology',
            etymologyFields
          ) * weights.timelineLanguage;
      }
    });

    etymology.cognates?.forEach(cognate => {
      totalScore +=
        addMatchScore(
          getMatchScore(termLower, wordBoundaryRegex, cognate.language),
          'etymology',
          etymologyFields
        ) * weights.timelineLanguage;
      totalScore +=
        addMatchScore(
          getMatchScore(termLower, wordBoundaryRegex, cognate.word),
          'etymology',
          etymologyFields
        ) * weights.cognateWord;
      totalScore +=
        addMatchScore(
          getMatchScore(termLower, wordBoundaryRegex, cognate.meaning),
          'etymology',
          etymologyFields
        ) * weights.cognateMeaning;
    });

    if (etymologyFields.size > 0) {
      matchFields.add('etymology');
    }
  }

  return { score: totalScore, matchFields: [...matchFields] };
}

type SearchableOriginal<S extends Searchable<unknown>> = S extends Searchable<infer T> ? T : never;

/**
 * Search and rank items by relevance, returning the original item type.
 */
export function searchWithRelevance<S extends Searchable<unknown>>(
  items: S[],
  searchTerm: string,
  relevanceCalculator: (item: S, term: string) => RelevanceResult
): SearchResult<SearchableOriginal<S>>[] {
  if (!searchTerm.trim()) {
    return items.map(item => ({
      item: item.original as SearchableOriginal<S>,
      score: 0,
      matchFields: [],
    }));
  }

  const results: SearchResult<SearchableOriginal<S>>[] = items
    .map(item => {
      const { score, matchFields } = relevanceCalculator(item, searchTerm);
      return { item: item.original as SearchableOriginal<S>, score, matchFields };
    })
    .filter(result => result.score > 0);

  results.sort((a, b) => b.score - a.score);

  return results;
}

/**
 * Fuzzy match using Levenshtein distance (for handling typos)
 */
export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Calculate similarity score based on Levenshtein distance
 */
export function similarityScore(a: string, b: string): number {
  const distance = levenshteinDistance(a.toLowerCase(), b.toLowerCase());
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - distance / maxLen;
}
