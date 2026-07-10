import { VocabWord } from '@/types';
import { greetings } from './french/greetings';
import { numbers } from './french/numbers';
import { verbs } from './french/verbs';
import { dailyUseNouns } from './french/daily-use-nouns';
import { adjectives } from './french/adjectives';
import { adverbs } from './french/adverbs';
import { prepositions } from './french/prepositions';

export const vocabularyFr: VocabWord[] = [
  ...greetings,
  ...numbers,
  ...verbs,
  ...dailyUseNouns,
  ...adjectives,
  ...adverbs,
  ...prepositions,
];
