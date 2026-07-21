import { Etymology } from '@/types';
import greetingsData from './greetings.json';
import numbersData from './numbers.json';
import verbsData from './verbs.json';
import dailyUseNounsData from './daily-use-nouns.json';
import adjectivesData from './adjectives.json';
import adverbsData from './adverbs.json';
import prepositionsData from './prepositions.json';
import functionWordsData from './function-words.json';

export const etymologyData: Record<string, Etymology> = {
  ...greetingsData,
  ...numbersData,
  ...verbsData,
  ...dailyUseNounsData,
  ...adjectivesData,
  ...adverbsData,
  ...prepositionsData,
  ...functionWordsData,
};
