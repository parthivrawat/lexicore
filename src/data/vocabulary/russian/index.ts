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

export const vocabularyRu: VocabWord[] = [
  ...greetings,
  ...numbers,
  ...verbs,
  ...dailyUseNouns,
  ...adjectives,
  ...adverbs,
  ...prepositions,
  ...functionWords,
];
