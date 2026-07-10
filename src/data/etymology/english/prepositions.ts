import { Etymology } from '@/types';

export const prepositionsEtymology: Record<string, Etymology> = {
  word_in: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*en', period: 'Prehistoric', meaning: 'in' },
      { language: 'Proto-Germanic', form: '*in', period: 'c. 500 BC', meaning: 'in' },
      { language: 'Old English', form: 'in', period: 'Before 12th century', meaning: 'in' },
      { language: 'Middle English', form: 'in', period: '12th-15th century', meaning: 'in' },
      { language: 'Modern English', form: 'in', period: '15th century', meaning: 'in' },
    ],
    cognates: [
      { language: 'German', word: 'in', meaning: 'in' },
      { language: 'Dutch', word: 'in', meaning: 'in' },
      { language: 'Swedish', word: 'i', meaning: 'in' },
      { language: 'Latin', word: 'in', meaning: 'in' },
      { language: 'Greek', word: 'en', meaning: 'in' },
    ],
  },

  word_on: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*Heno-', period: 'Prehistoric', meaning: 'on' },
      { language: 'Proto-Germanic', form: '*ana', period: 'c. 500 BC', meaning: 'on, at' },
      { language: 'Old English', form: 'on', period: 'Before 12th century', meaning: 'on' },
      { language: 'Middle English', form: 'on', period: '12th-15th century', meaning: 'on' },
      { language: 'Modern English', form: 'on', period: '15th century', meaning: 'on' },
    ],
    cognates: [
      { language: 'German', word: 'an', meaning: 'on, at' },
      { language: 'Dutch', word: 'aan', meaning: 'on, at' },
      { language: 'Swedish', word: 'på', meaning: 'on' },
    ],
  },

  word_with: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      {
        language: 'Proto-Indo-European',
        form: '*wi-',
        period: 'Prehistoric',
        meaning: 'apart, away',
      },
      { language: 'Proto-Germanic', form: '*with', period: 'c. 500 BC', meaning: 'with, against' },
      {
        language: 'Old English',
        form: 'wiþ',
        period: 'Before 12th century',
        meaning: 'against, with',
      },
      {
        language: 'Middle English',
        form: 'with, with',
        period: '12th-15th century',
        meaning: 'with',
      },
      { language: 'Modern English', form: 'with', period: '15th century', meaning: 'with' },
    ],
    cognates: [
      { language: 'German', word: 'mit', meaning: 'with' },
      { language: 'Dutch', word: 'met', meaning: 'with' },
      { language: 'Swedish', word: 'med', meaning: 'with' },
    ],
    notes: 'Originally meant "against", evolved to mean "together with".',
  },

  word_at: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*at', period: 'c. 500 BC', meaning: 'at, near' },
      { language: 'Old English', form: 'æt', period: 'Before 12th century', meaning: 'at, near' },
      { language: 'Middle English', form: 'at, at', period: '12th-15th century', meaning: 'at' },
      { language: 'Modern English', form: 'at', period: '15th century', meaning: 'at' },
    ],
    cognates: [
      { language: 'German', word: 'bei', meaning: 'at, near' },
      { language: 'Dutch', word: 'bij', meaning: 'at, near' },
      { language: 'Swedish', word: 'vid', meaning: 'at, near' },
    ],
    notes: 'From a root meaning "near" or "at", used to indicate location or time.',
  },

  word_to: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*tō', period: 'c. 500 BC', meaning: 'to, toward' },
      { language: 'Old English', form: 'tō', period: 'Before 12th century', meaning: 'to, toward' },
      { language: 'Middle English', form: 'to, to', period: '12th-15th century', meaning: 'to' },
      { language: 'Modern English', form: 'to', period: '15th century', meaning: 'to' },
    ],
    cognates: [
      { language: 'German', word: 'zu', meaning: 'to' },
      { language: 'Dutch', word: 'toe', meaning: 'to' },
      { language: 'Swedish', word: 'till', meaning: 'to' },
      { language: 'Latin', word: 'ad', meaning: 'to' },
    ],
    notes: 'From a root meaning "toward" or "in the direction of".',
  },

  word_from: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*fram', period: 'c. 500 BC', meaning: 'from, forward' },
      {
        language: 'Old English',
        form: 'fram',
        period: 'Before 12th century',
        meaning: 'from, forward',
      },
      {
        language: 'Middle English',
        form: 'from, fro',
        period: '12th-15th century',
        meaning: 'from',
      },
      { language: 'Modern English', form: 'from', period: '15th century', meaning: 'from' },
    ],
    cognates: [
      { language: 'German', word: 'von', meaning: 'from' },
      { language: 'Dutch', word: 'van', meaning: 'from' },
      { language: 'Swedish', word: 'från', meaning: 'from' },
    ],
    notes: 'Originally meant "forward" or "away from", specialized to indicate origin.',
  },

  word_without: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'wiþūtan',
        period: 'Before 12th century',
        meaning: 'without, outside',
      },
      {
        language: 'Middle English',
        form: 'without, withuten',
        period: '12th-15th century',
        meaning: 'without',
      },
      { language: 'Modern English', form: 'without', period: '15th century', meaning: 'without' },
    ],
    cognates: [
      { language: 'German', word: 'ohne', meaning: 'without' },
      { language: 'Dutch', word: 'zonder', meaning: 'without' },
      { language: 'Swedish', word: 'utan', meaning: 'without' },
    ],
    notes: 'Compound of "with" + "out" (outside), literally meaning "outside of".',
  },

  word_by: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*bi', period: 'c. 500 BC', meaning: 'by, near' },
      { language: 'Old English', form: 'bī', period: 'Before 12th century', meaning: 'by, near' },
      { language: 'Middle English', form: 'by, by', period: '12th-15th century', meaning: 'by' },
      { language: 'Modern English', form: 'by', period: '15th century', meaning: 'by' },
    ],
    cognates: [
      { language: 'German', word: 'bei', meaning: 'by, near' },
      { language: 'Dutch', word: 'bij', meaning: 'by, near' },
      { language: 'Swedish', word: 'vid', meaning: 'by, near' },
    ],
    notes: 'From a root meaning "near" or "beside", used to indicate proximity or agency.',
  },

  word_for: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*furi', period: 'c. 500 BC', meaning: 'for, before' },
      {
        language: 'Old English',
        form: 'for',
        period: 'Before 12th century',
        meaning: 'for, before',
      },
      { language: 'Middle English', form: 'for, for', period: '12th-15th century', meaning: 'for' },
      { language: 'Modern English', form: 'for', period: '15th century', meaning: 'for' },
    ],
    cognates: [
      { language: 'German', word: 'für', meaning: 'for' },
      { language: 'Dutch', word: 'voor', meaning: 'for' },
      { language: 'Swedish', word: 'för', meaning: 'for' },
    ],
    notes: 'Originally meant "before" or "in front of", evolved to indicate purpose or duration.',
  },

  word_of: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*abi', period: 'c. 500 BC', meaning: 'of, from' },
      { language: 'Old English', form: 'of', period: 'Before 12th century', meaning: 'of, from' },
      { language: 'Middle English', form: 'of, of', period: '12th-15th century', meaning: 'of' },
      { language: 'Modern English', form: 'of', period: '15th century', meaning: 'of' },
    ],
    cognates: [
      { language: 'German', word: 'von', meaning: 'of, from' },
      { language: 'Dutch', word: 'van', meaning: 'of, from' },
      { language: 'Swedish', word: 'av', meaning: 'of' },
    ],
    notes: 'From a root meaning "off" or "away from", used to indicate possession or origin.',
  },

  word_about: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'abūtan',
        period: 'Before 12th century',
        meaning: 'around, about',
      },
      {
        language: 'Middle English',
        form: 'about, abute',
        period: '12th-15th century',
        meaning: 'about',
      },
      { language: 'Modern English', form: 'about', period: '15th century', meaning: 'about' },
    ],
    cognates: [
      { language: 'German', word: 'um', meaning: 'around, about' },
      { language: 'Dutch', word: 'om', meaning: 'around, about' },
      { language: 'Swedish', word: 'om', meaning: 'around, about' },
    ],
    notes: 'Compound of "on" + "by" (outside), originally meant "on the outside" or "around".',
  },

  word_into: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Old English', form: 'in', period: 'Before 12th century', meaning: 'in' },
      {
        language: 'Middle English',
        form: 'into, intō',
        period: '12th-15th century',
        meaning: 'into',
      },
      { language: 'Modern English', form: 'into', period: '15th century', meaning: 'into' },
    ],
    cognates: [
      { language: 'German', word: 'in', meaning: 'into' },
      { language: 'Dutch', word: 'in', meaning: 'into' },
      { language: 'Swedish', word: 'i', meaning: 'into' },
    ],
    notes: 'Compound of "in" + "to", indicating movement toward the inside.',
  },

  word_out_of: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Old English', form: 'ūt of', period: 'Before 12th century', meaning: 'out of' },
      {
        language: 'Middle English',
        form: 'out of, out of',
        period: '12th-15th century',
        meaning: 'out of',
      },
      { language: 'Modern English', form: 'out of', period: '15th century', meaning: 'out of' },
    ],
    cognates: [
      { language: 'German', word: 'aus', meaning: 'out of' },
      { language: 'Dutch', word: 'uit', meaning: 'out of' },
      { language: 'Swedish', word: 'ur', meaning: 'out of' },
    ],
    notes: 'Compound of "out" + "of", indicating movement from the inside.',
  },

  word_over: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*uber', period: 'c. 500 BC', meaning: 'over, above' },
      {
        language: 'Old English',
        form: 'ofer',
        period: 'Before 12th century',
        meaning: 'over, above',
      },
      {
        language: 'Middle English',
        form: 'over, over',
        period: '12th-15th century',
        meaning: 'over',
      },
      { language: 'Modern English', form: 'over', period: '15th century', meaning: 'over' },
    ],
    cognates: [
      { language: 'German', word: 'über', meaning: 'over, above' },
      { language: 'Dutch', word: 'over', meaning: 'over' },
      { language: 'Swedish', word: 'över', meaning: 'over' },
      { language: 'Latin', word: 'super', meaning: 'over, above' },
    ],
    notes: 'From a root meaning "upper" or "above", used to indicate position or completion.',
  },

  word_under: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*under', period: 'c. 500 BC', meaning: 'under, below' },
      {
        language: 'Old English',
        form: 'under',
        period: 'Before 12th century',
        meaning: 'under, below',
      },
      {
        language: 'Middle English',
        form: 'under, under',
        period: '12th-15th century',
        meaning: 'under',
      },
      { language: 'Modern English', form: 'under', period: '15th century', meaning: 'under' },
    ],
    cognates: [
      { language: 'German', word: 'unter', meaning: 'under' },
      { language: 'Dutch', word: 'onder', meaning: 'under' },
      { language: 'Swedish', word: 'under', meaning: 'under' },
      { language: 'Latin', word: 'sub', meaning: 'under' },
    ],
    notes: 'From a root meaning "below" or "beneath", indicating position or subordination.',
  },

  word_above: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'abufan',
        period: 'Before 12th century',
        meaning: 'above, on top',
      },
      {
        language: 'Middle English',
        form: 'above, aboven',
        period: '12th-15th century',
        meaning: 'above',
      },
      { language: 'Modern English', form: 'above', period: '15th century', meaning: 'above' },
    ],
    cognates: [
      { language: 'German', word: 'oberhalb', meaning: 'above' },
      { language: 'Dutch', word: 'boven', meaning: 'above' },
      { language: 'Swedish', word: 'ovanför', meaning: 'above' },
    ],
    notes: 'Compound of "on" + "by" (outside), originally meant "on the outside" or "above".',
  },

  word_below: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'behlūfan',
        period: 'Before 12th century',
        meaning: 'below, beneath',
      },
      {
        language: 'Middle English',
        form: 'below, bilowen',
        period: '12th-15th century',
        meaning: 'below',
      },
      { language: 'Modern English', form: 'below', period: '15th century', meaning: 'below' },
    ],
    cognates: [
      { language: 'German', word: 'unterhalb', meaning: 'below' },
      { language: 'Dutch', word: 'onder', meaning: 'below' },
      { language: 'Swedish', word: 'under', meaning: 'below' },
    ],
    notes: 'Compound of "by" + "low" (beneath), literally meaning "beneath".',
  },

  word_between: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'betwēonan',
        period: 'Before 12th century',
        meaning: 'between, among',
      },
      {
        language: 'Middle English',
        form: 'betwene, bitwix',
        period: '12th-15th century',
        meaning: 'between',
      },
      { language: 'Modern English', form: 'between', period: '15th century', meaning: 'between' },
    ],
    cognates: [
      { language: 'German', word: 'zwischen', meaning: 'between' },
      { language: 'Dutch', word: 'tussen', meaning: 'between' },
      { language: 'Swedish', word: 'mellan', meaning: 'between' },
    ],
    notes:
      'Compound of "by" + "two" (twain), literally meaning "by two" or "in the middle of two".',
  },

  word_among: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'ongemang',
        period: 'Before 12th century',
        meaning: 'among, in company',
      },
      {
        language: 'Middle English',
        form: 'among, ongemang',
        period: '12th-15th century',
        meaning: 'among',
      },
      { language: 'Modern English', form: 'among', period: '15th century', meaning: 'among' },
    ],
    cognates: [
      { language: 'German', word: 'unter', meaning: 'among, under' },
      { language: 'Dutch', word: 'onder', meaning: 'among, under' },
      { language: 'Swedish', word: 'bland', meaning: 'among' },
    ],
    notes: 'From a root meaning "in company" or "mixed with", indicating being surrounded by.',
  },

  word_through: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*þurh', period: 'c. 500 BC', meaning: 'through' },
      { language: 'Old English', form: 'þurh', period: 'Before 12th century', meaning: 'through' },
      {
        language: 'Middle English',
        form: 'through, thorugh',
        period: '12th-15th century',
        meaning: 'through',
      },
      { language: 'Modern English', form: 'through', period: '15th century', meaning: 'through' },
    ],
    cognates: [
      { language: 'German', word: 'durch', meaning: 'through' },
      { language: 'Dutch', word: 'door', meaning: 'through' },
      { language: 'Swedish', word: 'genom', meaning: 'through' },
    ],
    notes: 'From a root meaning "through" or "from end to end", indicating passage or completion.',
  },

  word_across: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'on gegean',
        period: 'Before 12th century',
        meaning: 'across, over',
      },
      {
        language: 'Middle English',
        form: 'across, a-cros',
        period: '12th-15th century',
        meaning: 'across',
      },
      { language: 'Modern English', form: 'across', period: '15th century', meaning: 'across' },
    ],
    cognates: [
      { language: 'German', word: 'quer', meaning: 'across' },
      { language: 'Dutch', word: 'over', meaning: 'across' },
      { language: 'Swedish', word: 'över', meaning: 'across' },
    ],
    notes:
      'Compound of "on" + "cross", originally meant "in the form of a cross" or "from side to side".',
  },

  word_around: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'und',
        period: 'Before 12th century',
        meaning: 'around, about',
      },
      {
        language: 'Middle English',
        form: 'around, aronde',
        period: '12th-15th century',
        meaning: 'around',
      },
      { language: 'Modern English', form: 'around', period: '15th century', meaning: 'around' },
    ],
    cognates: [
      { language: 'German', word: 'herum', meaning: 'around' },
      { language: 'Dutch', word: 'rond', meaning: 'around' },
      { language: 'Swedish', word: 'runt', meaning: 'around' },
    ],
    notes: 'From a root meaning "round" or "circular", indicating surrounding position.',
  },

  word_behind: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'behindan',
        period: 'Before 12th century',
        meaning: 'behind, after',
      },
      {
        language: 'Middle English',
        form: 'behind, bihind',
        period: '12th-15th century',
        meaning: 'behind',
      },
      { language: 'Modern English', form: 'behind', period: '15th century', meaning: 'behind' },
    ],
    cognates: [
      { language: 'German', word: 'hinter', meaning: 'behind' },
      { language: 'Dutch', word: 'achter', meaning: 'behind' },
      { language: 'Swedish', word: 'bakom', meaning: 'behind' },
    ],
    notes: 'Compound of "by" + "hind" (back), literally meaning "at the back".',
  },

  word_in_front_of: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'beforan',
        period: 'Before 12th century',
        meaning: 'before, in front',
      },
      {
        language: 'Middle English',
        form: 'in front of, biforen',
        period: '12th-15th century',
        meaning: 'in front of',
      },
      {
        language: 'Modern English',
        form: 'in front of',
        period: '15th century',
        meaning: 'in front of',
      },
    ],
    cognates: [
      { language: 'German', word: 'vor', meaning: 'in front of' },
      { language: 'Dutch', word: 'voor', meaning: 'in front of' },
      { language: 'Swedish', word: 'framför', meaning: 'in front of' },
    ],
    notes: 'Compound of "in" + "front" + "of", indicating position ahead of something.',
  },

  word_next_to: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'nēah',
        period: 'Before 12th century',
        meaning: 'near, next',
      },
      {
        language: 'Middle English',
        form: 'next to, neihst to',
        period: '12th-15th century',
        meaning: 'next to',
      },
      { language: 'Modern English', form: 'next to', period: '15th century', meaning: 'next to' },
    ],
    cognates: [
      { language: 'German', word: 'neben', meaning: 'next to' },
      { language: 'Dutch', word: 'naast', meaning: 'next to' },
      { language: 'Swedish', word: 'bredvid', meaning: 'next to' },
    ],
    notes: 'Compound of "next" (nearest) + "to", indicating immediate proximity.',
  },

  word_near: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*nēhwaz', period: 'c. 500 BC', meaning: 'near' },
      { language: 'Old English', form: 'nēah', period: 'Before 12th century', meaning: 'near' },
      {
        language: 'Middle English',
        form: 'near, ner',
        period: '12th-15th century',
        meaning: 'near',
      },
      { language: 'Modern English', form: 'near', period: '15th century', meaning: 'near' },
    ],
    cognates: [
      { language: 'German', word: 'nah', meaning: 'near' },
      { language: 'Dutch', word: 'nabij', meaning: 'near' },
      { language: 'Swedish', word: 'nära', meaning: 'near' },
    ],
    notes: 'From a root meaning "near" or "close", indicating proximity.',
  },

  word_far: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*fer-', period: 'c. 500 BC', meaning: 'far' },
      { language: 'Old English', form: 'feorr', period: 'Before 12th century', meaning: 'far' },
      { language: 'Middle English', form: 'far, fer', period: '12th-15th century', meaning: 'far' },
      { language: 'Modern English', form: 'far', period: '15th century', meaning: 'far' },
    ],
    cognates: [
      { language: 'German', word: 'fern', meaning: 'far' },
      { language: 'Dutch', word: 'ver', meaning: 'far' },
      { language: 'Swedish', word: 'långt', meaning: 'far' },
      { language: 'Latin', word: 'longe', meaning: 'far' },
    ],
    notes: 'From a root meaning "far" or "distant", indicating distance.',
  },

  word_before: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*fur',
        period: 'c. 500 BC',
        meaning: 'before, in front',
      },
      {
        language: 'Old English',
        form: 'beforan',
        period: 'Before 12th century',
        meaning: 'before',
      },
      {
        language: 'Middle English',
        form: 'before, biforen',
        period: '12th-15th century',
        meaning: 'before',
      },
      { language: 'Modern English', form: 'before', period: '15th century', meaning: 'before' },
    ],
    cognates: [
      { language: 'German', word: 'vor', meaning: 'before' },
      { language: 'Dutch', word: 'voor', meaning: 'before' },
      { language: 'Swedish', word: 'före', meaning: 'before' },
    ],
    notes: 'From a root meaning "before" or "in front of", indicating time or position.',
  },

  word_after: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'æfter',
        period: 'Before 12th century',
        meaning: 'after, behind',
      },
      {
        language: 'Middle English',
        form: 'after, after',
        period: '12th-15th century',
        meaning: 'after',
      },
      { language: 'Modern English', form: 'after', period: '15th century', meaning: 'after' },
    ],
    cognates: [
      { language: 'German', word: 'nach', meaning: 'after' },
      { language: 'Dutch', word: 'na', meaning: 'after' },
      { language: 'Swedish', word: 'efter', meaning: 'after' },
    ],
    notes: 'From a root meaning "after" or "behind", indicating time or position.',
  },

  word_during: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'durare', period: 'Roman era', meaning: 'to last, endure' },
      {
        language: 'Middle English',
        form: 'during, durenge',
        period: '14th-15th century',
        meaning: 'during',
      },
      { language: 'Modern English', form: 'during', period: '15th century', meaning: 'during' },
    ],
    cognates: [
      { language: 'German', word: 'während', meaning: 'during' },
      { language: 'French', word: 'pendant', meaning: 'during' },
      { language: 'Spanish', word: 'durante', meaning: 'during' },
    ],
    notes: 'From Latin "durare" meaning "to last" or "to endure", indicating duration.',
  },

  word_since: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Middle English',
        form: 'sithen, sith',
        period: '14th-15th century',
        meaning: 'since',
      },
      { language: 'Modern English', form: 'since', period: '15th century', meaning: 'since' },
    ],
    cognates: [
      { language: 'German', word: 'seit', meaning: 'since' },
      { language: 'Dutch', word: 'sinds', meaning: 'since' },
      { language: 'Swedish', word: 'sedan', meaning: 'since' },
    ],
    notes: 'From Old English "siþþan" meaning "after that", indicating a point in time.',
  },

  word_until: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'und', period: 'Viking age', meaning: 'until, up to' },
      {
        language: 'Middle English',
        form: 'until, til',
        period: '13th-15th century',
        meaning: 'until',
      },
      { language: 'Modern English', form: 'until', period: '15th century', meaning: 'until' },
    ],
    cognates: [
      { language: 'German', word: 'bis', meaning: 'until' },
      { language: 'Dutch', word: 'tot', meaning: 'until' },
      { language: 'Swedish', word: 'tills', meaning: 'until' },
    ],
    notes: 'From Old Norse "und" meaning "up to", indicating a limit in time.',
  },

  word_beyond: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'begeondan',
        period: 'Before 12th century',
        meaning: 'beyond, on the other side',
      },
      {
        language: 'Middle English',
        form: 'beyond, biyonde',
        period: '12th-15th century',
        meaning: 'beyond',
      },
      { language: 'Modern English', form: 'beyond', period: '15th century', meaning: 'beyond' },
    ],
    cognates: [
      { language: 'German', word: 'jenseits', meaning: 'beyond' },
      { language: 'Dutch', word: 'voorbij', meaning: 'beyond' },
      { language: 'Swedish', word: 'bortom', meaning: 'beyond' },
    ],
    notes: 'Compound of "by" + "yond" (yonder), literally meaning "on the farther side".',
  },

  word_within: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'wiþinnan',
        period: 'Before 12th century',
        meaning: 'within, inside',
      },
      {
        language: 'Middle English',
        form: 'within, withinnen',
        period: '12th-15th century',
        meaning: 'within',
      },
      { language: 'Modern English', form: 'within', period: '15th century', meaning: 'within' },
    ],
    cognates: [
      { language: 'German', word: 'innerhalb', meaning: 'within' },
      { language: 'Dutch', word: 'binnen', meaning: 'within' },
      { language: 'Swedish', word: 'inom', meaning: 'within' },
    ],
    notes: 'Compound of "with" + "in", literally meaning "inside the limits of".',
  },

  word_toward: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'toweard',
        period: 'Before 12th century',
        meaning: 'toward, facing',
      },
      {
        language: 'Middle English',
        form: 'toward, towarde',
        period: '12th-15th century',
        meaning: 'toward',
      },
      { language: 'Modern English', form: 'toward', period: '15th century', meaning: 'toward' },
    ],
    cognates: [
      { language: 'German', word: 'gegen', meaning: 'toward, against' },
      { language: 'Dutch', word: 'naar', meaning: 'toward' },
      { language: 'Swedish', word: 'mot', meaning: 'toward' },
    ],
    notes: 'Compound of "to" + "ward" (direction), literally meaning "in the direction of".',
  },

  word_against: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Middle English',
        form: 'ageynes, ayens',
        period: '14th-15th century',
        meaning: 'against',
      },
      { language: 'Modern English', form: 'against', period: '15th century', meaning: 'against' },
    ],
    cognates: [
      { language: 'German', word: 'gegen', meaning: 'against' },
      { language: 'Dutch', word: 'tegen', meaning: 'against' },
      { language: 'Swedish', word: 'mot', meaning: 'against' },
    ],
    notes: 'From "again" + "est" (suffix), originally meaning "in opposition to".',
  },

  word_along: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Middle English',
        form: 'along, alonge',
        period: '14th-15th century',
        meaning: 'along',
      },
      { language: 'Modern English', form: 'along', period: '15th century', meaning: 'along' },
    ],
    cognates: [
      { language: 'German', word: 'entlang', meaning: 'along' },
      { language: 'Dutch', word: 'langs', meaning: 'along' },
      { language: 'Swedish', word: 'längs', meaning: 'along' },
    ],
    notes: 'Compound of "a" (on) + "long" (length), literally meaning "by the length of".',
  },

  word_onto: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 15th century',
    timeline: [
      { language: 'Middle English', form: 'onto, on to', period: '15th century', meaning: 'onto' },
      { language: 'Modern English', form: 'onto', period: '16th century', meaning: 'onto' },
    ],
    cognates: [
      { language: 'German', word: 'auf', meaning: 'onto, on' },
      { language: 'Dutch', word: 'op', meaning: 'onto, on' },
      { language: 'Swedish', word: 'på', meaning: 'onto, on' },
    ],
    notes: 'Compound of "on" + "to", indicating movement to a position on something.',
  },

  word_off: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*af', period: 'c. 500 BC', meaning: 'off, away' },
      { language: 'Old English', form: 'of', period: 'Before 12th century', meaning: 'off, away' },
      { language: 'Middle English', form: 'off, of', period: '12th-15th century', meaning: 'off' },
      { language: 'Modern English', form: 'off', period: '15th century', meaning: 'off' },
    ],
    cognates: [
      { language: 'German', word: 'ab', meaning: 'off, away' },
      { language: 'Dutch', word: 'af', meaning: 'off, away' },
      { language: 'Swedish', word: 'av', meaning: 'off, away' },
    ],
    notes: 'From a root meaning "off" or "away", indicating separation or removal.',
  },

  word_up: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*up', period: 'c. 500 BC', meaning: 'up, upward' },
      { language: 'Old English', form: 'up', period: 'Before 12th century', meaning: 'up' },
      { language: 'Middle English', form: 'up, up', period: '12th-15th century', meaning: 'up' },
      { language: 'Modern English', form: 'up', period: '15th century', meaning: 'up' },
    ],
    cognates: [
      { language: 'German', word: 'auf', meaning: 'up' },
      { language: 'Dutch', word: 'op', meaning: 'up' },
      { language: 'Swedish', word: 'upp', meaning: 'up' },
    ],
    notes: 'From a root meaning "up" or "upward", indicating upward movement or position.',
  },

  word_down: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*dūn', period: 'c. 500 BC', meaning: 'down, hill' },
      {
        language: 'Old English',
        form: 'dūn',
        period: 'Before 12th century',
        meaning: 'down, hill',
      },
      {
        language: 'Middle English',
        form: 'down, doun',
        period: '12th-15th century',
        meaning: 'down',
      },
      { language: 'Modern English', form: 'down', period: '15th century', meaning: 'down' },
    ],
    cognates: [
      { language: 'German', word: 'hinunter', meaning: 'down' },
      { language: 'Dutch', word: 'naar beneden', meaning: 'down' },
      { language: 'Swedish', word: 'ner', meaning: 'down' },
    ],
    notes: 'From a root meaning "hill" or "downward", indicating downward movement or position.',
  },

  word_inside: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Middle English',
        form: 'inside, insyde',
        period: '14th-15th century',
        meaning: 'inside',
      },
      { language: 'Modern English', form: 'inside', period: '15th century', meaning: 'inside' },
    ],
    cognates: [
      { language: 'German', word: 'innen', meaning: 'inside' },
      { language: 'Dutch', word: 'binnen', meaning: 'inside' },
      { language: 'Swedish', word: 'inuti', meaning: 'inside' },
    ],
    notes: 'Compound of "in" + "side", literally meaning "on the inner side".',
  },

  word_outside: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Middle English',
        form: 'outside, outsyde',
        period: '14th-15th century',
        meaning: 'outside',
      },
      { language: 'Modern English', form: 'outside', period: '15th century', meaning: 'outside' },
    ],
    cognates: [
      { language: 'German', word: 'außen', meaning: 'outside' },
      { language: 'Dutch', word: 'buiten', meaning: 'outside' },
      { language: 'Swedish', word: 'utanför', meaning: 'outside' },
    ],
    notes: 'Compound of "out" + "side", literally meaning "on the outer side".',
  },
};
