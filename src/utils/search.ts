/**
 * Relevance-based search utility with scoring and ranking
 */

import { WordRoot, VocabWord, RootExample, EtymologyStage, CognateWord } from '@/types'

export type MatchType = 'exact' | 'prefix' | 'substring' | 'word-boundary';

export interface SearchResult<T> {
  item: T;
  score: number;
  matchFields: string[];
}

/**
 * Calculate match type and base score for a search term
 */
function getMatchScore(term: string, value: string): { type: MatchType; score: number } {
  const termLower = term.toLowerCase();
  const valueLower = value.toLowerCase();

  // Exact match
  if (valueLower === termLower) {
    return { type: 'exact', score: 100 };
  }

  // Prefix match (term at start of value)
  if (valueLower.startsWith(termLower)) {
    return { type: 'prefix', score: 80 };
  }

  // Word boundary match (term as a whole word in value)
  const wordBoundaryRegex = new RegExp(`\\b${escapeRegex(termLower)}\\b`, 'i');
  if (wordBoundaryRegex.test(valueLower)) {
    return { type: 'word-boundary', score: 60 };
  }

  // Substring match
  if (valueLower.includes(termLower)) {
    return { type: 'substring', score: 40 };
  }

  return { type: 'substring', score: 0 };
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Calculate relevance score for a root based on search term
 */
export function calculateRootRelevance(root: WordRoot, searchTerm: string): number {
  if (!searchTerm.trim()) return 0;

  let totalScore = 0;
  const weights = {
    root: 3.0,           // Highest weight for the root itself
    meaning: 2.0,        // High weight for meaning
    languageOrigin: 1.5, // Medium weight for origin
    exampleWord: 1.2,    // Medium-low weight for example words
    exampleMeaning: 1.0, // Low weight for example meanings
    exampleSentence: 0.8 // Lowest weight for example sentences
  };

  // Check root field
  const rootMatch = getMatchScore(searchTerm, root.root);
  totalScore += rootMatch.score * weights.root;

  // Check meaning field
  const meaningMatch = getMatchScore(searchTerm, root.meaning);
  totalScore += meaningMatch.score * weights.meaning;

  // Check language origin
  const originMatch = getMatchScore(searchTerm, root.languageOrigin);
  totalScore += originMatch.score * weights.languageOrigin;

  // Check examples
  if (root.examples && Array.isArray(root.examples)) {
    root.examples.forEach((example: RootExample) => {
      const wordMatch = getMatchScore(searchTerm, example.word);
      totalScore += wordMatch.score * weights.exampleWord;

      const meaningMatch = getMatchScore(searchTerm, example.meaning);
      totalScore += meaningMatch.score * weights.exampleMeaning;

      const sentenceMatch = getMatchScore(searchTerm, example.sentence);
      totalScore += sentenceMatch.score * weights.exampleSentence;
    });
  }

  return totalScore;
}

/**
 * Calculate relevance score for a vocabulary word based on search term
 */
export function calculateVocabularyRelevance(word: VocabWord, searchTerm: string): number {
  if (!searchTerm.trim()) return 0;

  let totalScore = 0;
  const weights = {
    word: 3.0,           // Highest weight for the word itself
    meaning: 2.0,        // High weight for meaning
    category: 1.5,      // Medium weight for category
    example: 1.2,        // Medium-low weight for examples
    etymologyOrigin: 1.3, // Medium-high weight for etymology origin
    etymologyNotes: 1.0,  // Low weight for etymology notes
    timelineLanguage: 0.9, // Low weight for timeline language
    timelineForm: 1.1,    // Medium-low weight for timeline form
    timelineMeaning: 0.8, // Very low weight for timeline meaning
    cognateWord: 1.0,     // Low weight for cognate words
    cognateMeaning: 0.8   // Very low weight for cognate meanings
  };

  // Check word field
  const wordMatch = getMatchScore(searchTerm, word.word);
  totalScore += wordMatch.score * weights.word;

  // Check meaning field
  const meaningMatch = getMatchScore(searchTerm, word.meaning);
  totalScore += meaningMatch.score * weights.meaning;

  // Check category field
  const categoryMatch = getMatchScore(searchTerm, word.category);
  totalScore += categoryMatch.score * weights.category;

  // Check examples
  if (word.examples && Array.isArray(word.examples)) {
    word.examples.forEach((example: string) => {
      const exampleMatch = getMatchScore(searchTerm, example);
      totalScore += exampleMatch.score * weights.example;
    });
  }

  // Check etymology fields
  if (word.etymology) {
    const etymology = word.etymology;

    // Language origin
    const originMatch = getMatchScore(searchTerm, etymology.languageOrigin);
    totalScore += originMatch.score * weights.etymologyOrigin;

    // Year of origin
    if (etymology.yearOfOrigin) {
      const yearMatch = getMatchScore(searchTerm, etymology.yearOfOrigin);
      totalScore += yearMatch.score * weights.etymologyOrigin;
    }

    // Notes
    if (etymology.notes) {
      const notesMatch = getMatchScore(searchTerm, etymology.notes);
      totalScore += notesMatch.score * weights.etymologyNotes;
    }

    // Timeline
    if (etymology.timeline && Array.isArray(etymology.timeline)) {
      etymology.timeline.forEach((stage: EtymologyStage) => {
        const languageMatch = getMatchScore(searchTerm, stage.language);
        totalScore += languageMatch.score * weights.timelineLanguage;

        const formMatch = getMatchScore(searchTerm, stage.form);
        totalScore += formMatch.score * weights.timelineForm;

        if (stage.meaning) {
          const meaningMatch = getMatchScore(searchTerm, stage.meaning);
          totalScore += meaningMatch.score * weights.timelineMeaning;
        }

        if (stage.period) {
          const periodMatch = getMatchScore(searchTerm, stage.period);
          totalScore += periodMatch.score * weights.timelineLanguage;
        }
      });
    }

    // Cognates
    if (etymology.cognates && Array.isArray(etymology.cognates)) {
      etymology.cognates.forEach((cognate: CognateWord) => {
        const languageMatch = getMatchScore(searchTerm, cognate.language);
        totalScore += languageMatch.score * weights.timelineLanguage;

        const wordMatch = getMatchScore(searchTerm, cognate.word);
        totalScore += wordMatch.score * weights.cognateWord;

        const meaningMatch = getMatchScore(searchTerm, cognate.meaning);
        totalScore += meaningMatch.score * weights.cognateMeaning;
      });
    }
  }

  return totalScore;
}

/**
 * Search and rank items by relevance
 */
export function searchWithRelevance<T>(
  items: T[],
  searchTerm: string,
  relevanceCalculator: (item: T, term: string) => number
): SearchResult<T>[] {
  if (!searchTerm.trim()) {
    return items.map(item => ({ item, score: 0, matchFields: [] }));
  }

  const results: SearchResult<T>[] = items
    .map(item => ({
      item,
      score: relevanceCalculator(item, searchTerm),
      matchFields: []
    }))
    .filter(result => result.score > 0);

  // Sort by score (descending)
  results.sort((a, b) => b.score - a.score);

  return results;
}

/**
 * Fuzzy match using Levenshtein distance (for handling typos)
 */
export function levenshteinDistance(a: string, b: string): number {
  const matrix = [];

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
