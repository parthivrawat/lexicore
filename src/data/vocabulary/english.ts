import { VocabWord } from '@/types';
import { greetings } from './english/greetings';
import { numbers } from './english/numbers';
import { verbs } from './english/verbs';
import { dailyUseNouns } from './english/daily-use-nouns';
import { adjectives } from './english/adjectives';
import { adverbs } from './english/adverbs';
import { prepositions } from './english/prepositions';

export const vocabularyEn: VocabWord[] = [
  ...greetings,
  ...numbers,
  ...verbs,
  ...dailyUseNouns,
  ...adjectives,
  ...adverbs,
  ...prepositions
];
