import { VocabWord, Etymology } from '@/types';
import type { LearningLanguage } from '@/types/settings';
import { getVocabularyData } from '@/utils/data';

const STORAGE_KEY = 'word_of_the_day';
const DATE_KEY = 'word_of_the_day_date';

/**
 * Get a consistent hash for a given date string
 */
function getDateHash(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Get today's date string in YYYY-MM-DD format
 */
function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Select a word based on date hash
 */
function selectWordByDate(vocabulary: VocabWord[], dateStr: string): VocabWord | null {
  if (vocabulary.length === 0) return null;

  const hash = getDateHash(dateStr);
  const index = hash % vocabulary.length;
  return vocabulary[index];
}

/**
 * Get the Word of the Day for a specific learning language
 * Uses localStorage to persist the selection for the current day
 */
export async function getWordOfTheDay(
  language: LearningLanguage = 'english'
): Promise<(VocabWord & { etymology?: Etymology }) | null> {
  const today = getTodayDateString();
  const vocabulary = await getVocabularyData(language);

  // Check if we have a stored word for today
  const storedDate = localStorage.getItem(DATE_KEY);
  const storedWordId = localStorage.getItem(STORAGE_KEY);

  if (storedDate === today && storedWordId) {
    const word = vocabulary.find(v => v.id === storedWordId);
    if (word) {
      return word;
    }
  }

  // Select a new word for today
  const selectedWord = selectWordByDate(vocabulary, today);

  if (selectedWord) {
    // Store the selection
    localStorage.setItem(DATE_KEY, today);
    localStorage.setItem(STORAGE_KEY, selectedWord.id);

    return selectedWord;
  }

  return null;
}

/**
 * Clear the stored Word of the Day (useful for testing)
 */
export function clearWordOfTheDayStorage(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(DATE_KEY);
}
