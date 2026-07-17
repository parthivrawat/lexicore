import { Etymology } from '@/types';
import greetingsJson from './greetings.json';
import numbersJson from './numbers.json';
import verbsJson from './verbs.json';
import dailyUseNounsJson from './daily-use-nouns.json';
import adjectivesJson from './adjectives.json';
import adverbsJson from './adverbs.json';
import prepositionsJson from './prepositions.json';

const greetings = greetingsJson as Record<string, Etymology>;
const numbers = numbersJson as Record<string, Etymology>;
const verbs = verbsJson as Record<string, Etymology>;
const dailyUseNouns = dailyUseNounsJson as Record<string, Etymology>;
const adjectives = adjectivesJson as Record<string, Etymology>;
const adverbs = adverbsJson as Record<string, Etymology>;
const prepositions = prepositionsJson as Record<string, Etymology>;

export const etymologyData: Record<string, Etymology> = {
  ...greetings,
  ...numbers,
  ...verbs,
  ...dailyUseNouns,
  ...adjectives,
  ...adverbs,
  ...prepositions,
};
