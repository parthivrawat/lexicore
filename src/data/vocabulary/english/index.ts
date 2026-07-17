import { VocabWord } from '@/types';
import greetingsJson from './greetings.json';
import numbersJson from './numbers.json';
import verbsJson from './verbs.json';
import dailyUseNounsJson from './daily-use-nouns.json';
import adjectivesJson from './adjectives.json';
import adverbsJson from './adverbs.json';
import prepositionsJson from './prepositions.json';
import functionWordsJson from './function-words.json';

const greetings = greetingsJson as VocabWord[];
const numbers = numbersJson as VocabWord[];
const verbs = verbsJson as VocabWord[];
const dailyUseNouns = dailyUseNounsJson as VocabWord[];
const adjectives = adjectivesJson as VocabWord[];
const adverbs = adverbsJson as VocabWord[];
const prepositions = prepositionsJson as VocabWord[];
const functionWords = functionWordsJson as VocabWord[];

function deduplicateVocabulary(words: VocabWord[]): VocabWord[] {
  const seen = new Set<string>();
  return words.filter(word => {
    const key = word.word.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const vocabularyEn: VocabWord[] = deduplicateVocabulary([
  ...greetings,
  ...numbers,
  ...verbs,
  ...dailyUseNouns,
  ...adjectives,
  ...adverbs,
  ...prepositions,
  ...functionWords,
]);
