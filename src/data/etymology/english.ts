import { Etymology } from '@/types';
import { greetingsEtymology } from './english/greetings';
import { numbersEtymology } from './english/numbers';
import { verbsEtymology } from './english/verbs';
import { dailyUseNounsEtymology } from './english/daily-use-nouns';
import { adjectivesEtymology } from './english/adjectives';
import { adverbsEtymology } from './english/adverbs';
import { prepositionsEtymology } from './english/prepositions';

// Combined etymology data for English vocabulary words
// Organized by category to match vocabulary structure
export const etymologyData: Record<string, Etymology> = {
  ...greetingsEtymology,
  ...numbersEtymology,
  ...verbsEtymology,
  ...dailyUseNounsEtymology,
  ...adjectivesEtymology,
  ...adverbsEtymology,
  ...prepositionsEtymology
};
