import { Etymology } from '@/types';

export const adjectivesEtymology: Record<string, Etymology> = {
  word_good: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*gʰedh-', period: 'Prehistoric', meaning: 'to unite, to join' },
      { language: 'Proto-Germanic', form: '*gōdaz', period: 'c. 500 BC', meaning: 'good' },
      { language: 'Old English', form: 'gōd', period: 'Before 12th century', meaning: 'good' },
      { language: 'Middle English', form: 'good, gode', period: '12th-15th century', meaning: 'good' },
      { language: 'Modern English', form: 'good', period: '15th century', meaning: 'good' }
    ],
    cognates: [
      { language: 'German', word: 'gut', meaning: 'good' },
      { language: 'Dutch', word: 'goed', meaning: 'good' },
      { language: 'Swedish', word: 'god', meaning: 'good' }
    ]
  },

  word_bad: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Old English', form: 'bæddel', period: 'Before 12th century', meaning: 'effeminate man' },
      { language: 'Middle English', form: 'badde', period: '14th century', meaning: 'bad' },
      { language: 'Modern English', form: 'bad', period: '15th century', meaning: 'bad' }
    ],
    cognates: [
      { language: 'German', word: 'schlecht', meaning: 'bad' },
      { language: 'French', word: 'mauvais', meaning: 'bad' },
      { language: 'Spanish', word: 'malo', meaning: 'bad' }
    ],
    notes: 'Origin uncertain, possibly from "bæddel" meaning effeminate, or from unknown source.'
  },

  word_big: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Old Norse', form: 'biggr', period: 'Viking age', meaning: 'big, important' },
      { language: 'Middle English', form: 'bigge', period: '14th century', meaning: 'big, strong' },
      { language: 'Modern English', form: 'big', period: '15th century', meaning: 'big' }
    ],
    cognates: [
      { language: 'Norwegian', word: 'big', meaning: 'big' },
      { language: 'German', word: 'groß', meaning: 'big' },
      { language: 'Dutch', word: 'groot', meaning: 'big' }
    ],
    notes: 'Probably from Old Norse, related to "bigger" meaning "important".'
  },

  word_small: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Germanic', form: '*smalaz', period: 'c. 500 BC', meaning: 'small, fine' },
      { language: 'Old English', form: 'smæl', period: 'Before 12th century', meaning: 'small, thin' },
      { language: 'Middle English', form: 'smal, small', period: '12th-15th century', meaning: 'small' },
      { language: 'Modern English', form: 'small', period: '15th century', meaning: 'small' }
    ],
    cognates: [
      { language: 'German', word: 'schmal', meaning: 'narrow, small' },
      { language: 'Dutch', word: 'smal', meaning: 'narrow' },
      { language: 'Swedish', word: 'smal', meaning: 'narrow' }
    ]
  },

  word_happy: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Old Norse', form: 'happ', period: 'Viking age', meaning: 'good luck, chance' },
      { language: 'Middle English', form: 'happy, hap', period: '14th century', meaning: 'lucky, fortunate' },
      { language: 'Modern English', form: 'happy', period: '16th century', meaning: 'joyful' }
    ],
    cognates: [
      { language: 'Icelandic', word: 'happ', meaning: 'luck, chance' },
      { language: 'Norwegian', word: 'hell', meaning: 'luck' },
      { language: 'German', word: 'glücklich', meaning: 'happy' }
    ],
    notes: 'Originally meant "lucky" or "fortunate", evolved to mean "joyful".'
  },

  word_sad: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Proto-Germanic', form: '*sathaz', period: 'c. 500 BC', meaning: 'satisfied, full' },
      { language: 'Old English', form: 'sæd', period: 'Before 12th century', meaning: 'sated, weary' },
      { language: 'Middle English', form: 'sad, sade', period: '12th-15th century', meaning: 'sorrowful' },
      { language: 'Modern English', form: 'sad', period: '15th century', meaning: 'unhappy' }
    ],
    cognates: [
      { language: 'German', word: 'satt', meaning: 'satisfied, full' },
      { language: 'Dutch', word: 'zat', meaning: 'satisfied' },
      { language: 'Swedish', word: 'mätt', meaning: 'satisfied' }
    ],
    notes: 'Originally meant "satisfied" or "full", meaning shifted to "sorrowful" over time.'
  },

  word_fast: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Proto-Germanic', form: '*fastuz', period: 'c. 500 BC', meaning: 'firm, fixed' },
      { language: 'Old English', form: 'fæst', period: 'Before 12th century', meaning: 'firm, fixed, secure' },
      { language: 'Middle English', form: 'fast, fest', period: '12th-15th century', meaning: 'firm, quick' },
      { language: 'Modern English', form: 'fast', period: '15th century', meaning: 'quick' }
    ],
    cognates: [
      { language: 'German', word: 'fest', meaning: 'firm, fixed' },
      { language: 'Dutch', word: 'vast', meaning: 'firm' },
      { language: 'Swedish', word: 'fast', meaning: 'firm, fast' }
    ],
    notes: 'Originally meant "firm" or "secure", evolved to mean "quick" from "running firmly".'
  },

  word_slow: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Proto-Germanic', form: '*slēwaz', period: 'c. 500 BC', meaning: 'sluggish, slow' },
      { language: 'Old English', form: 'slāw', period: 'Before 12th century', meaning: 'slow, sluggish' },
      { language: 'Middle English', form: 'slaw, slow', period: '12th-15th century', meaning: 'slow' },
      { language: 'Modern English', form: 'slow', period: '15th century', meaning: 'not fast' }
    ],
    cognates: [
      { language: 'German', word: 'schleppend', meaning: 'sluggish' },
      { language: 'Dutch', word: 'traag', meaning: 'slow' },
      { language: 'Swedish', word: 'långsam', meaning: 'slow' }
    ]
  },

  word_hot: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Proto-Germanic', form: '*haitaz', period: 'c. 500 BC', meaning: 'hot, warm' },
      { language: 'Old English', form: 'hāt', period: 'Before 12th century', meaning: 'hot, warm' },
      { language: 'Middle English', form: 'hot, hat', period: '12th-15th century', meaning: 'hot' },
      { language: 'Modern English', form: 'hot', period: '15th century', meaning: 'high temperature' }
    ],
    cognates: [
      { language: 'German', word: 'heiß', meaning: 'hot' },
      { language: 'Dutch', word: 'heet', meaning: 'hot' },
      { language: 'Swedish', word: 'het', meaning: 'hot' }
    ]
  },

  word_cold: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Proto-Germanic', form: '*kaldaz', period: 'c. 500 BC', meaning: 'cold' },
      { language: 'Old English', form: 'ceald', period: 'Before 12th century', meaning: 'cold' },
      { language: 'Middle English', form: 'cold, colde', period: '12th-15th century', meaning: 'cold' },
      { language: 'Modern English', form: 'cold', period: '15th century', meaning: 'low temperature' }
    ],
    cognates: [
      { language: 'German', word: 'kalt', meaning: 'cold' },
      { language: 'Dutch', word: 'koud', meaning: 'cold' },
      { language: 'Swedish', word: 'kall', meaning: 'cold' }
    ]
  },

  word_new: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*newo-', period: 'Prehistoric', meaning: 'new' },
      { language: 'Proto-Germanic', form: '*neuwaz', period: 'c. 500 BC', meaning: 'new' },
      { language: 'Old English', form: 'nēowe, nīwe', period: 'Before 12th century', meaning: 'new' },
      { language: 'Middle English', form: 'newe, new', period: '12th-15th century', meaning: 'new' },
      { language: 'Modern English', form: 'new', period: '15th century', meaning: 'recently made' }
    ],
    cognates: [
      { language: 'German', word: 'neu', meaning: 'new' },
      { language: 'Dutch', word: 'nieuw', meaning: 'new' },
      { language: 'Latin', word: 'novus', meaning: 'new' },
      { language: 'Greek', word: 'neos', meaning: 'new' }
    ]
  },

  word_old: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*h₂el-', period: 'Prehistoric', meaning: 'to grow, to nourish' },
      { language: 'Proto-Germanic', form: '*aldaz', period: 'c. 500 BC', meaning: 'old' },
      { language: 'Old English', form: 'eald', period: 'Before 12th century', meaning: 'old' },
      { language: 'Middle English', form: 'old, olde', period: '12th-15th century', meaning: 'old' },
      { language: 'Modern English', form: 'old', period: '15th century', meaning: 'aged' }
    ],
    cognates: [
      { language: 'German', word: 'alt', meaning: 'old' },
      { language: 'Dutch', word: 'oud', meaning: 'old' },
      { language: 'Swedish', word: 'gammal', meaning: 'old' },
      { language: 'Latin', word: 'alere', meaning: 'to nourish' }
    ]
  },

  word_young: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*yu-', period: 'Prehistoric', meaning: 'youth' },
      { language: 'Proto-Germanic', form: '*jungaz', period: 'c. 500 BC', meaning: 'young' },
      { language: 'Old English', form: 'geong', period: 'Before 12th century', meaning: 'young' },
      { language: 'Middle English', form: 'yong, yonge', period: '12th-15th century', meaning: 'young' },
      { language: 'Modern English', form: 'young', period: '15th century', meaning: 'not old' }
    ],
    cognates: [
      { language: 'German', word: 'jung', meaning: 'young' },
      { language: 'Dutch', word: 'jong', meaning: 'young' },
      { language: 'Swedish', word: 'ung', meaning: 'young' }
    ]
  },

  word_beautiful: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 15th century',
    timeline: [
      { language: 'Latin', form: 'bellus', period: 'Roman era', meaning: 'beautiful, pretty' },
      { language: 'Old French', form: 'beaute', period: '12th-14th century', meaning: 'beauty' },
      { language: 'Middle English', form: 'beaute, beautiful', period: '15th century', meaning: 'beautiful' },
      { language: 'Modern English', form: 'beautiful', period: '16th century', meaning: 'attractive' }
    ],
    cognates: [
      { language: 'French', word: 'beau/belle', meaning: 'beautiful' },
      { language: 'Spanish', word: 'bello', meaning: 'beautiful' },
      { language: 'Italian', word: 'bello', meaning: 'beautiful' },
      { language: 'Portuguese', word: 'belo', meaning: 'beautiful' }
    ],
    notes: 'From Latin "bellus" meaning beautiful, related to "bonus" meaning good.'
  },

  word_ugly: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'uggligr', period: 'Viking age', meaning: 'fearsome, dreadful' },
      { language: 'Middle English', form: 'ugly, uggly', period: '13th century', meaning: 'fearsome, repulsive' },
      { language: 'Modern English', form: 'ugly', period: '15th century', meaning: 'unattractive' }
    ],
    cognates: [
      { language: 'Norwegian', word: 'uggelig', meaning: 'fearsome' },
      { language: 'German', word: 'hässlich', meaning: 'ugly' },
      { language: 'Dutch', word: 'lelijk', meaning: 'ugly' }
    ],
    notes: 'Originally meant "fearsome" or "dreadful", evolved to mean "unattractive".'
  },

  word_easy: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Latin', form: 'adjacens', period: 'Roman era', meaning: 'nearby, neighboring' },
      { language: 'Old French', form: 'aisie', period: '12th-13th century', meaning: 'comfort, ease' },
      { language: 'Middle English', form: 'esy, easy', period: '13th century', meaning: 'not difficult' },
      { language: 'Modern English', form: 'easy', period: '15th century', meaning: 'not difficult' }
    ],
    cognates: [
      { language: 'French', word: 'aise', meaning: 'ease, comfort' },
      { language: 'Spanish', word: 'fácil', meaning: 'easy' },
      { language: 'Italian', word: 'facile', meaning: 'easy' }
    ],
    notes: 'From Latin "adjacens" meaning nearby, evolved through "at ease" to "not difficult".'
  },

  word_hard: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*kar-', period: 'Prehistoric', meaning: 'hard, strong' },
      { language: 'Proto-Germanic', form: '*harduz', period: 'c. 500 BC', meaning: 'hard, brave' },
      { language: 'Old English', form: 'heard', period: 'Before 12th century', meaning: 'hard, firm' },
      { language: 'Middle English', form: 'hard, herd', period: '12th-15th century', meaning: 'hard, difficult' },
      { language: 'Modern English', form: 'hard', period: '15th century', meaning: 'difficult' }
    ],
    cognates: [
      { language: 'German', word: 'hart', meaning: 'hard' },
      { language: 'Dutch', word: 'hard', meaning: 'hard' },
      { language: 'Swedish', word: 'hård', meaning: 'hard' },
      { language: 'Greek', word: 'kratos', meaning: 'strength, power' }
    ]
  },

  word_long: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*dlonghos', period: 'Prehistoric', meaning: 'long' },
      { language: 'Proto-Germanic', form: '*langaz', period: 'c. 500 BC', meaning: 'long' },
      { language: 'Old English', form: 'lang, long', period: 'Before 12th century', meaning: 'long' },
      { language: 'Middle English', form: 'long, lange', period: '12th-15th century', meaning: 'long' },
      { language: 'Modern English', form: 'long', period: '15th century', meaning: 'extended' }
    ],
    cognates: [
      { language: 'German', word: 'lang', meaning: 'long' },
      { language: 'Dutch', word: 'lang', meaning: 'long' },
      { language: 'Swedish', word: 'lång', meaning: 'long' }
    ]
  },

  word_short: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*sker-', period: 'Prehistoric', meaning: 'to cut' },
      { language: 'Proto-Germanic', form: '*skurtaz', period: 'c. 500 BC', meaning: 'short' },
      { language: 'Old English', form: 'sceort', period: 'Before 12th century', meaning: 'short' },
      { language: 'Middle English', form: 'short, schort', period: '12th-15th century', meaning: 'short' },
      { language: 'Modern English', form: 'short', period: '15th century', meaning: 'brief' }
    ],
    cognates: [
      { language: 'German', word: 'kurz', meaning: 'short' },
      { language: 'Dutch', word: 'kort', meaning: 'short' },
      { language: 'Swedish', word: 'kort', meaning: 'short' }
    ],
    notes: 'From PIE root meaning "to cut", literally "cut short".'
  },

  word_tall: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Old English', form: 'getæl', period: 'Before 12th century', meaning: 'quick, swift' },
      { language: 'Middle English', form: 'tal, tall', period: '14th century', meaning: 'tall, handsome' },
      { language: 'Modern English', form: 'tall', period: '15th century', meaning: 'high height' }
    ],
    cognates: [
      { language: 'German', word: 'groß', meaning: 'big, tall' },
      { language: 'Dutch', word: 'lang', meaning: 'tall' },
      { language: 'Swedish', word: 'lång', meaning: 'tall' }
    ],
    notes: 'Possibly from Old English "getæl" meaning quick, evolved to mean "tall" or "handsome".'
  },

  word_short_height: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*sker-', period: 'Prehistoric', meaning: 'to cut' },
      { language: 'Proto-Germanic', form: '*skurtaz', period: 'c. 500 BC', meaning: 'short' },
      { language: 'Old English', form: 'sceort', period: 'Before 12th century', meaning: 'short, low' },
      { language: 'Middle English', form: 'short, schort', period: '12th-15th century', meaning: 'short, low' },
      { language: 'Modern English', form: 'short', period: '15th century', meaning: 'low height' }
    ],
    cognates: [
      { language: 'German', word: 'kurz', meaning: 'short' },
      { language: 'Dutch', word: 'kort', meaning: 'short' },
      { language: 'Swedish', word: 'kort', meaning: 'short' }
    ]
  },

  word_clean: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*klainaz', period: 'c. 500 BC', meaning: 'clean, pure' },
      { language: 'Old English', form: 'clæne', period: 'Before 12th century', meaning: 'clean, pure' },
      { language: 'Middle English', form: 'clene, clean', period: '12th-15th century', meaning: 'clean' },
      { language: 'Modern English', form: 'clean', period: '15th century', meaning: 'tidy' }
    ],
    cognates: [
      { language: 'German', word: 'rein', meaning: 'clean, pure' },
      { language: 'Dutch', word: 'schoon', meaning: 'clean, beautiful' },
      { language: 'Swedish', word: 'ren', meaning: 'clean' }
    ]
  },

  word_dirty: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Old Norse', form: 'drit', period: 'Viking age', meaning: 'excrement' },
      { language: 'Middle English', form: 'dritty, dirty', period: '14th century', meaning: 'soiled, unclean' },
      { language: 'Modern English', form: 'dirty', period: '15th century', meaning: 'unclean' }
    ],
    cognates: [
      { language: 'Norwegian', word: 'drit', meaning: 'dirt' },
      { language: 'German', word: 'schmutzig', meaning: 'dirty' },
      { language: 'Dutch', word: 'vies', meaning: 'dirty' }
    ],
    notes: 'From Old Norse "drit" meaning excrement, evolved to mean "soiled".'
  },

  word_rich: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*rīkaz', period: 'c. 500 BC', meaning: 'powerful, ruler' },
      { language: 'Old English', form: 'rīce', period: 'Before 12th century', meaning: 'powerful, wealthy' },
      { language: 'Middle English', form: 'riche, rich', period: '12th-15th century', meaning: 'wealthy' },
      { language: 'Modern English', form: 'rich', period: '15th century', meaning: 'wealthy' }
    ],
    cognates: [
      { language: 'German', word: 'reich', meaning: 'rich, powerful' },
      { language: 'Dutch', word: 'rijk', meaning: 'rich' },
      { language: 'Swedish', word: 'rik', meaning: 'rich' }
    ],
    notes: 'Originally meant "powerful" or "ruler", evolved to mean "wealthy".'
  },

  word_poor: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Latin', form: 'pauper', period: 'Roman era', meaning: 'poor, needy' },
      { language: 'Old French', form: 'povre, pauvre', period: '12th-13th century', meaning: 'poor' },
      { language: 'Middle English', form: 'pore, poor', period: '13th century', meaning: 'poor' },
      { language: 'Modern English', form: 'poor', period: '15th century', meaning: 'not wealthy' }
    ],
    cognates: [
      { language: 'French', word: 'pauvre', meaning: 'poor' },
      { language: 'Spanish', word: 'pobre', meaning: 'poor' },
      { language: 'Italian', word: 'povero', meaning: 'poor' },
      { language: 'Portuguese', word: 'pobre', meaning: 'poor' }
    ]
  },

  word_important: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 16th century',
    timeline: [
      { language: 'Latin', form: 'importare', period: 'Roman era', meaning: 'to bring in, to signify' },
      { language: 'Old French', form: 'important', period: '14th century', meaning: 'significant' },
      { language: 'Middle English', form: 'importaunt', period: '15th century', meaning: 'significant' },
      { language: 'Modern English', form: 'important', period: '16th century', meaning: 'significant' }
    ],
    cognates: [
      { language: 'French', word: 'important', meaning: 'important' },
      { language: 'Spanish', word: 'importante', meaning: 'important' },
      { language: 'Italian', word: 'importante', meaning: 'important' }
    ],
    notes: 'From Latin "importare" meaning "to bring in" or "to signify".'
  },

  word_different: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'differre', period: 'Roman era', meaning: 'to differ, to be different' },
      { language: 'Old French', form: 'different', period: '14th century', meaning: 'different' },
      { language: 'Middle English', form: 'different', period: '14th century', meaning: 'not same' },
      { language: 'Modern English', form: 'different', period: '15th century', meaning: 'not same' }
    ],
    cognates: [
      { language: 'French', word: 'différent', meaning: 'different' },
      { language: 'Spanish', word: 'diferente', meaning: 'different' },
      { language: 'Italian', word: 'diverso', meaning: 'different' }
    ]
  },

  word_same: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*sem-', period: 'Prehistoric', meaning: 'one, together' },
      { language: 'Proto-Germanic', form: '*samaz', period: 'c. 500 BC', meaning: 'same, together' },
      { language: 'Old English', form: 'same', period: 'Before 12th century', meaning: 'same' },
      { language: 'Middle English', form: 'same, samen', period: '12th-15th century', meaning: 'same' },
      { language: 'Modern English', form: 'same', period: '15th century', meaning: 'identical' }
    ],
    cognates: [
      { language: 'German', word: 'gleich', meaning: 'same, equal' },
      { language: 'Dutch', word: 'zelfde', meaning: 'same' },
      { language: 'Swedish', word: 'samma', meaning: 'same' },
      { language: 'Latin', word: 'similis', meaning: 'similar' }
    ]
  },

  word_right: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      { language: 'Proto-Indo-European', form: '*reg-', period: 'Prehistoric', meaning: 'to move in a straight line, to rule' },
      { language: 'Proto-Germanic', form: '*rehtaz', period: 'c. 500 BC', meaning: 'right, straight' },
      { language: 'Old English', form: 'riht', period: 'Before 12th century', meaning: 'right, correct' },
      { language: 'Middle English', form: 'right, riht', period: '12th-15th century', meaning: 'right, correct' },
      { language: 'Modern English', form: 'right', period: '15th century', meaning: 'correct' }
    ],
    cognates: [
      { language: 'German', word: 'recht', meaning: 'right, correct' },
      { language: 'Dutch', word: 'recht', meaning: 'right' },
      { language: 'Swedish', word: 'rätt', meaning: 'right, correct' },
      { language: 'Latin', word: 'rectus', meaning: 'straight, right' }
    ]
  },

  word_wrong: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Proto-Germanic', form: '*wrang-', period: 'c. 500 BC', meaning: 'crooked, twisted' },
      { language: 'Old English', form: 'wrang', period: 'Before 12th century', meaning: 'crooked, wrong' },
      { language: 'Middle English', form: 'wrong, wrang', period: '12th-15th century', meaning: 'incorrect' },
      { language: 'Modern English', form: 'wrong', period: '15th century', meaning: 'incorrect' }
    ],
    cognates: [
      { language: 'German', word: 'wringen', meaning: 'to twist' },
      { language: 'Dutch', word: 'wrong', meaning: 'wrong' },
      { language: 'Swedish', word: 'fel', meaning: 'wrong' }
    ],
    notes: 'Originally meant "crooked" or "twisted", evolved to mean "incorrect".'
  },

  word_strong: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*strangaz', period: 'c. 500 BC', meaning: 'strong, tight' },
      { language: 'Old English', form: 'strang', period: 'Before 12th century', meaning: 'strong, firm' },
      { language: 'Middle English', form: 'strong, strang', period: '12th-15th century', meaning: 'strong' },
      { language: 'Modern English', form: 'strong', period: '15th century', meaning: 'powerful' }
    ],
    cognates: [
      { language: 'German', word: 'stark', meaning: 'strong' },
      { language: 'Dutch', word: 'sterk', meaning: 'strong' },
      { language: 'Swedish', word: 'stark', meaning: 'strong' }
    ]
  },

  word_weak: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*waikaz', period: 'c. 500 BC', meaning: 'weak, pliable' },
      { language: 'Old English', form: 'wāc', period: 'Before 12th century', meaning: 'weak, pliable' },
      { language: 'Middle English', form: 'weke, weak', period: '12th-15th century', meaning: 'weak' },
      { language: 'Modern English', form: 'weak', period: '15th century', meaning: 'not strong' }
    ],
    cognates: [
      { language: 'German', word: 'weich', meaning: 'soft, weak' },
      { language: 'Dutch', word: 'zwak', meaning: 'weak' },
      { language: 'Swedish', word: 'svag', meaning: 'weak' }
    ]
  },

  word_loud: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old English', form: 'hlūd', period: 'Before 12th century', meaning: 'loud, noisy' },
      { language: 'Middle English', form: 'loud, lude', period: '13th century', meaning: 'loud' },
      { language: 'Modern English', form: 'loud', period: '15th century', meaning: 'noisy' }
    ],
    cognates: [
      { language: 'German', word: 'laut', meaning: 'loud' },
      { language: 'Dutch', word: 'luid', meaning: 'loud' },
      { language: 'Swedish', word: 'högljudd', meaning: 'loud' }
    ]
  },

  word_quiet: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'quietus', period: 'Roman era', meaning: 'at rest, quiet' },
      { language: 'Old French', form: 'quiet, coiet', period: '14th century', meaning: 'quiet, calm' },
      { language: 'Middle English', form: 'quiet, quiete', period: '14th century', meaning: 'silent' },
      { language: 'Modern English', form: 'quiet', period: '15th century', meaning: 'silent' }
    ],
    cognates: [
      { language: 'French', word: 'calme', meaning: 'calm, quiet' },
      { language: 'Spanish', word: 'tranquilo', meaning: 'quiet' },
      { language: 'Italian', word: 'tranquillo', meaning: 'quiet' }
    ]
  },

  word_bright: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*berhtaz', period: 'c. 500 BC', meaning: 'bright, shining' },
      { language: 'Old English', form: 'beorht', period: 'Before 12th century', meaning: 'bright, shining' },
      { language: 'Middle English', form: 'bright, briht', period: '12th-15th century', meaning: 'bright, intelligent' },
      { language: 'Modern English', form: 'bright', period: '15th century', meaning: 'light/intelligent' }
    ],
    cognates: [
      { language: 'German', word: 'hell', meaning: 'bright' },
      { language: 'Dutch', word: 'helder', meaning: 'bright, clear' },
      { language: 'Swedish', word: 'ljus', meaning: 'bright' }
    ]
  },

  word_dark: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*derkaz', period: 'c. 500 BC', meaning: 'dark' },
      { language: 'Old English', form: 'deorc', period: 'Before 12th century', meaning: 'dark' },
      { language: 'Middle English', form: 'dark, derk', period: '12th-15th century', meaning: 'dark' },
      { language: 'Modern English', form: 'dark', period: '15th century', meaning: 'not light' }
    ],
    cognates: [
      { language: 'German', word: 'dunkel', meaning: 'dark' },
      { language: 'Dutch', word: 'donker', meaning: 'dark' },
      { language: 'Swedish', word: 'mörk', meaning: 'dark' }
    ]
  },

  word_early: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*ar-', period: 'c. 500 BC', meaning: 'before, in front' },
      { language: 'Old English', form: 'ǣrlice', period: 'Before 12th century', meaning: 'early, soon' },
      { language: 'Middle English', form: 'erly, early', period: '12th-15th century', meaning: 'before expected' },
      { language: 'Modern English', form: 'early', period: '15th century', meaning: 'before expected' }
    ],
    cognates: [
      { language: 'German', word: 'früh', meaning: 'early' },
      { language: 'Dutch', word: 'vroeg', meaning: 'early' },
      { language: 'Swedish', word: 'tidig', meaning: 'early' }
    ]
  },

  word_late: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*lat-', period: 'c. 500 BC', meaning: 'slow, late' },
      { language: 'Old English', form: 'læt', period: 'Before 12th century', meaning: 'slow, late' },
      { language: 'Middle English', form: 'late, lat', period: '12th-15th century', meaning: 'after expected' },
      { language: 'Modern English', form: 'late', period: '15th century', meaning: 'after expected' }
    ],
    cognates: [
      { language: 'German', word: 'spät', meaning: 'late' },
      { language: 'Dutch', word: 'laat', meaning: 'late' },
      { language: 'Swedish', word: 'sen', meaning: 'late' }
    ]
  },

  word_cheap: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Old English', form: 'ceap', period: 'Before 12th century', meaning: 'market, trade, bargain' },
      { language: 'Middle English', form: 'cheep, cheap', period: '12th-15th century', meaning: 'bargain, low price' },
      { language: 'Modern English', form: 'cheap', period: '15th century', meaning: 'low cost' }
    ],
    cognates: [
      { language: 'German', word: 'kaufen', meaning: 'to buy' },
      { language: 'Dutch', word: 'kopen', meaning: 'to buy' },
      { language: 'Swedish', word: 'köpa', meaning: 'to buy' }
    ],
    notes: 'From Old English "ceap" meaning market or trade, evolved to mean "low price" from "good bargain".'
  },

  word_expensive: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 16th century',
    timeline: [
      { language: 'Latin', form: 'expendere', period: 'Roman era', meaning: 'to weigh out, to spend' },
      { language: 'Old French', form: 'expensif', period: '14th century', meaning: 'costly' },
      { language: 'Middle English', form: 'expensive', period: '16th century', meaning: 'high cost' },
      { language: 'Modern English', form: 'expensive', period: '16th century', meaning: 'high cost' }
    ],
    cognates: [
      { language: 'French', word: 'cher', meaning: 'expensive, dear' },
      { language: 'Spanish', word: 'caro', meaning: 'expensive' },
      { language: 'Italian', word: 'caro', meaning: 'expensive' }
    ]
  },

  word_kind: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*kunjaz', period: 'c. 500 BC', meaning: 'kin, family, race' },
      { language: 'Old English', form: 'cynd', period: 'Before 12th century', meaning: 'kin, nature, kind' },
      { language: 'Middle English', form: 'kinde, kind', period: '12th-15th century', meaning: 'kind, generous' },
      { language: 'Modern English', form: 'kind', period: '15th century', meaning: 'generous' }
    ],
    cognates: [
      { language: 'German', word: 'freundlich', meaning: 'kind, friendly' },
      { language: 'Dutch', word: 'aardig', meaning: 'kind' },
      { language: 'Swedish', word: 'snäll', meaning: 'kind' }
    ],
    notes: 'Originally meant "kin" or "family", evolved to mean "generous" or "benevolent".'
  },

  word_mean: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*mainaz', period: 'c. 500 BC', meaning: 'common, shared' },
      { language: 'Old English', form: 'mǣne', period: 'Before 12th century', meaning: 'common, base' },
      { language: 'Middle English', form: 'mene, mean', period: '12th-15th century', meaning: 'common, unkind' },
      { language: 'Modern English', form: 'mean', period: '15th century', meaning: 'unkind' }
    ],
    cognates: [
      { language: 'German', word: 'gemein', meaning: 'common, mean' },
      { language: 'Dutch', word: 'gemene', meaning: 'common, mean' },
      { language: 'Swedish', word: 'elak', meaning: 'mean' }
    ],
    notes: 'Originally meant "common" or "shared", evolved to mean "base" or "unkind".'
  },

  word_smart: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old English', form: 'smeartan', period: 'Before 12th century', meaning: 'to cause pain, to sting' },
      { language: 'Middle English', form: 'smart, smert', period: '13th century', meaning: 'painful, sharp' },
      { language: 'Modern English', form: 'smart', period: '16th century', meaning: 'intelligent' }
    ],
    cognates: [
      { language: 'German', word: 'klug', meaning: 'clever, smart' },
      { language: 'Dutch', word: 'slim', meaning: 'clever, smart' },
      { language: 'Swedish', word: 'smart', meaning: 'painful' }
    ],
    notes: 'Originally meant "painful" or "stinging", evolved to mean "sharp" then "intelligent".'
  },

  word_stupid: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 16th century',
    timeline: [
      { language: 'Latin', form: 'stupidus', period: 'Roman era', meaning: 'stunned, foolish' },
      { language: 'Old French', form: 'stupide', period: '14th century', meaning: 'foolish' },
      { language: 'Middle English', form: 'stupid, stupide', period: '16th century', meaning: 'not intelligent' },
      { language: 'Modern English', form: 'stupid', period: '16th century', meaning: 'not intelligent' }
    ],
    cognates: [
      { language: 'French', word: 'stupide', meaning: 'stupid' },
      { language: 'Spanish', word: 'estúpido', meaning: 'stupid' },
      { language: 'Italian', word: 'stupido', meaning: 'stupid' }
    ]
  },

  word_brave: {
    languageOrigin: 'Italian',
    yearOfOrigin: 'c. 16th century',
    timeline: [
      { language: 'Latin', form: 'barbarus', period: 'Roman era', meaning: 'foreign, barbarian' },
      { language: 'Italian', form: 'bravo', period: '15th century', meaning: 'brave, wild' },
      { language: 'Middle English', form: 'brave', period: '16th century', meaning: 'courageous' },
      { language: 'Modern English', form: 'brave', period: '16th century', meaning: 'courageous' }
    ],
    cognates: [
      { language: 'French', word: 'brave', meaning: 'brave' },
      { language: 'Spanish', word: 'bravo', meaning: 'brave, fierce' },
      { language: 'Italian', word: 'bravo', meaning: 'brave' }
    ],
    notes: 'From Italian "bravo", possibly from Latin "barbarus" meaning foreign or wild.'
  },

  word_afraid: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Old French', form: 'afrayer', period: '14th century', meaning: 'to frighten' },
      { language: 'Middle English', form: 'afrayed, afraid', period: '14th century', meaning: 'frightened' },
      { language: 'Modern English', form: 'afraid', period: '15th century', meaning: 'scared' }
    ],
    cognates: [
      { language: 'French', word: 'effrayer', meaning: 'to frighten' },
      { language: 'Spanish', word: 'asustar', meaning: 'to frighten' },
      { language: 'Italian', word: 'spaventare', meaning: 'to frighten' }
    ]
  },

  word_busy: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Old English', form: 'bisig', period: 'Before 12th century', meaning: 'anxious, careful' },
      { language: 'Middle English', form: 'busy, busi', period: '14th century', meaning: 'occupied, attentive' },
      { language: 'Modern English', form: 'busy', period: '15th century', meaning: 'occupied' }
    ],
    cognates: [
      { language: 'German', word: 'beschäftigt', meaning: 'busy' },
      { language: 'Dutch', word: 'bezig', meaning: 'busy' },
      { language: 'Swedish', word: 'upptagen', meaning: 'busy' }
    ],
    notes: 'Originally meant "anxious" or "careful", evolved to mean "occupied".'
  },

  word_free: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*frijaz', period: 'c. 500 BC', meaning: 'free, beloved' },
      { language: 'Old English', form: 'frēo', period: 'Before 12th century', meaning: 'free, noble' },
      { language: 'Middle English', form: 'free, fre', period: '12th-15th century', meaning: 'free, available' },
      { language: 'Modern English', form: 'free', period: '15th century', meaning: 'available/no cost' }
    ],
    cognates: [
      { language: 'German', word: 'frei', meaning: 'free' },
      { language: 'Dutch', word: 'vrij', meaning: 'free' },
      { language: 'Swedish', word: 'fri', meaning: 'free' }
    ]
  },

  word_full: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*fullaz', period: 'c. 500 BC', meaning: 'full' },
      { language: 'Old English', form: 'full', period: 'Before 12th century', meaning: 'full' },
      { language: 'Middle English', form: 'full, ful', period: '12th-15th century', meaning: 'full' },
      { language: 'Modern English', form: 'full', period: '15th century', meaning: 'completely filled' }
    ],
    cognates: [
      { language: 'German', word: 'voll', meaning: 'full' },
      { language: 'Dutch', word: 'vol', meaning: 'full' },
      { language: 'Swedish', word: 'full', meaning: 'full' }
    ]
  },

  word_empty: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Old English', form: 'ǣmetig', period: 'Before 12th century', meaning: 'empty, at leisure' },
      { language: 'Middle English', form: 'empty, empti', period: '12th-15th century', meaning: 'empty' },
      { language: 'Modern English', form: 'empty', period: '15th century', meaning: 'containing nothing' }
    ],
    cognates: [
      { language: 'German', word: 'leer', meaning: 'empty' },
      { language: 'Dutch', word: 'leeg', meaning: 'empty' },
      { language: 'Swedish', word: 'tom', meaning: 'empty' }
    ],
    notes: 'From Old English "ǣmetig" meaning "at leisure" or "unoccupied".'
  },

  word_heavy: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*hebiz', period: 'c. 500 BC', meaning: 'heavy' },
      { language: 'Old English', form: 'hefi', period: 'Before 12th century', meaning: 'heavy, weight' },
      { language: 'Middle English', form: 'hevy, heavy', period: '12th-15th century', meaning: 'weighty' },
      { language: 'Modern English', form: 'heavy', period: '15th century', meaning: 'weighty' }
    ],
    cognates: [
      { language: 'German', word: 'schwer', meaning: 'heavy' },
      { language: 'Dutch', word: 'zwaar', meaning: 'heavy' },
      { language: 'Swedish', word: 'tung', meaning: 'heavy' }
    ]
  },

  word_light_weight: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*lehtaz', period: 'c. 500 BC', meaning: 'light, not heavy' },
      { language: 'Old English', form: 'leoht', period: 'Before 12th century', meaning: 'light, not heavy' },
      { language: 'Middle English', form: 'light, liht', period: '12th-15th century', meaning: 'not heavy' },
      { language: 'Modern English', form: 'light', period: '15th century', meaning: 'not heavy' }
    ],
    cognates: [
      { language: 'German', word: 'leicht', meaning: 'light, easy' },
      { language: 'Dutch', word: 'licht', meaning: 'light' },
      { language: 'Swedish', word: 'lätt', meaning: 'light' }
    ]
  },

  word_sweet: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*swētaz', period: 'c. 500 BC', meaning: 'sweet, pleasant' },
      { language: 'Old English', form: 'swēte', period: 'Before 12th century', meaning: 'sweet, pleasant' },
      { language: 'Middle English', form: 'sweet, swete', period: '12th-15th century', meaning: 'sugary, kind' },
      { language: 'Modern English', form: 'sweet', period: '15th century', meaning: 'sugary/kind' }
    ],
    cognates: [
      { language: 'German', word: 'süß', meaning: 'sweet' },
      { language: 'Dutch', word: 'zoet', meaning: 'sweet' },
      { language: 'Swedish', word: 'söt', meaning: 'sweet' }
    ]
  },

  word_sour: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*sūraz', period: 'c. 500 BC', meaning: 'sour' },
      { language: 'Old English', form: 'sūr', period: 'Before 12th century', meaning: 'sour' },
      { language: 'Middle English', form: 'sour, sur', period: '12th-15th century', meaning: 'acidic' },
      { language: 'Modern English', form: 'sour', period: '15th century', meaning: 'acidic' }
    ],
    cognates: [
      { language: 'German', word: 'sauer', meaning: 'sour' },
      { language: 'Dutch', word: 'zuur', meaning: 'sour' },
      { language: 'Swedish', word: 'sur', meaning: 'sour' }
    ]
  },

  word_salty: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Old English', form: 'sealt', period: 'Before 12th century', meaning: 'salty' },
      { language: 'Middle English', form: 'salty, salti', period: '12th-15th century', meaning: 'containing salt' },
      { language: 'Modern English', form: 'salty', period: '15th century', meaning: 'containing salt' }
    ],
    cognates: [
      { language: 'German', word: 'salzig', meaning: 'salty' },
      { language: 'Dutch', word: 'zout', meaning: 'salt' },
      { language: 'Swedish', word: 'salt', meaning: 'salt' }
    ]
  },

  word_bitter: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*bitraz', period: 'c. 500 BC', meaning: 'biting, sharp' },
      { language: 'Old English', form: 'biter', period: 'Before 12th century', meaning: 'biting, sharp' },
      { language: 'Middle English', form: 'bitter, bitre', period: '12th-15th century', meaning: 'sharp taste' },
      { language: 'Modern English', form: 'bitter', period: '15th century', meaning: 'sharp taste' }
    ],
    cognates: [
      { language: 'German', word: 'bitter', meaning: 'bitter' },
      { language: 'Dutch', word: 'bitter', meaning: 'bitter' },
      { language: 'Swedish', word: 'bitter', meaning: 'bitter' }
    ]
  },

  word_red: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*raudaz', period: 'c. 500 BC', meaning: 'red' },
      { language: 'Old English', form: 'rēad', period: 'Before 12th century', meaning: 'red' },
      { language: 'Middle English', form: 'red, reed', period: '12th-15th century', meaning: 'red' },
      { language: 'Modern English', form: 'red', period: '15th century', meaning: 'color' }
    ],
    cognates: [
      { language: 'German', word: 'rot', meaning: 'red' },
      { language: 'Dutch', word: 'rood', meaning: 'red' },
      { language: 'Swedish', word: 'röd', meaning: 'red' },
      { language: 'Latin', word: 'ruber', meaning: 'red' }
    ]
  },

  word_blue: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old French', form: 'bleu, blo', period: '13th century', meaning: 'blue' },
      { language: 'Middle English', form: 'bleu, blue', period: '13th century', meaning: 'blue' },
      { language: 'Modern English', form: 'blue', period: '15th century', meaning: 'color' }
    ],
    cognates: [
      { language: 'French', word: 'bleu', meaning: 'blue' },
      { language: 'Spanish', word: 'azul', meaning: 'blue' },
      { language: 'Italian', word: 'blu', meaning: 'blue' }
    ],
    notes: 'From Old French, possibly from Germanic root meaning "shining".'
  },

  word_green: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*grōniz', period: 'c. 500 BC', meaning: 'green' },
      { language: 'Old English', form: 'grēne', period: 'Before 12th century', meaning: 'green' },
      { language: 'Middle English', form: 'green, grene', period: '12th-15th century', meaning: 'green' },
      { language: 'Modern English', form: 'green', period: '15th century', meaning: 'color' }
    ],
    cognates: [
      { language: 'German', word: 'grün', meaning: 'green' },
      { language: 'Dutch', word: 'groen', meaning: 'green' },
      { language: 'Swedish', word: 'grön', meaning: 'green' }
    ]
  },

  word_yellow: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*gelwaz', period: 'c. 500 BC', meaning: 'yellow' },
      { language: 'Old English', form: 'geolu', period: 'Before 12th century', meaning: 'yellow' },
      { language: 'Middle English', form: 'yelwe, yellow', period: '12th-15th century', meaning: 'yellow' },
      { language: 'Modern English', form: 'yellow', period: '15th century', meaning: 'color' }
    ],
    cognates: [
      { language: 'German', word: 'gelb', meaning: 'yellow' },
      { language: 'Dutch', word: 'geel', meaning: 'yellow' },
      { language: 'Swedish', word: 'gul', meaning: 'yellow' }
    ]
  },

  word_white: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*hwītaz', period: 'c. 500 BC', meaning: 'white, bright' },
      { language: 'Old English', form: 'hwīt', period: 'Before 12th century', meaning: 'white' },
      { language: 'Middle English', form: 'white, whit', period: '12th-15th century', meaning: 'white' },
      { language: 'Modern English', form: 'white', period: '15th century', meaning: 'color' }
    ],
    cognates: [
      { language: 'German', word: 'weiß', meaning: 'white' },
      { language: 'Dutch', word: 'wit', meaning: 'white' },
      { language: 'Swedish', word: 'vit', meaning: 'white' }
    ]
  },

  word_black: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*swartaz', period: 'c. 500 BC', meaning: 'black, dark' },
      { language: 'Old English', form: 'blæc', period: 'Before 12th century', meaning: 'black, dark' },
      { language: 'Middle English', form: 'black, blak', period: '12th-15th century', meaning: 'black' },
      { language: 'Modern English', form: 'black', period: '15th century', meaning: 'color' }
    ],
    cognates: [
      { language: 'German', word: 'schwarz', meaning: 'black' },
      { language: 'Dutch', word: 'zwart', meaning: 'black' },
      { language: 'Swedish', word: 'svart', meaning: 'black' }
    ],
    notes: 'Originally meant "burnt" or "charred", from PIE root meaning "to burn".'
  }
};
