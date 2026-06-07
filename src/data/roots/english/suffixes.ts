import { WordRoot } from '@/types';

export const suffixes: WordRoot[] = [
  // Latin Suffixes
  {
    id: 'root_able',
    root: '-able',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'able to be',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əbl' },
      { accent: 'british', ipa: 'əbl' },
      { accent: 'australian', ipa: 'əbl' }
    ],
    examples: [
      { word: 'readable', meaning: 'able to be read', sentence: 'The text is readable.' },
      { word: 'comfortable', meaning: 'able to comfort', sentence: 'The chair is comfortable.' },
    ],
    relatedRootIds: ['root_ible'],
  },
  {
    id: 'root_ible',
    root: '-ible',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'able to be',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əbl' },
      { accent: 'british', ipa: 'əbl' },
      { accent: 'australian', ipa: 'əbl' }
    ],
    examples: [
      { word: 'visible', meaning: 'able to be seen', sentence: 'The star is visible tonight.' },
      { word: 'flexible', meaning: 'able to bend', sentence: 'The schedule is flexible.' },
    ],
    relatedRootIds: ['root_able'],
  },
  {
    id: 'root_age',
    root: '-age',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'act of, state of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪdʒ' },
      { accent: 'british', ipa: 'ɪdʒ' },
      { accent: 'australian', ipa: 'ɪdʒ' }
    ],
    examples: [
      { word: 'marriage', meaning: 'act of marrying', sentence: 'Their marriage lasted 50 years.' },
      { word: 'breakage', meaning: 'state of being broken', sentence: 'The insurance covers breakage.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_al',
    root: '-al',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'relating to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'l' },
      { accent: 'british', ipa: 'l' },
      { accent: 'australian', ipa: 'l' }
    ],
    examples: [
      { word: 'cultural', meaning: 'relating to culture', sentence: 'The event was cultural.' },
      { word: 'national', meaning: 'relating to nation', sentence: 'It\'s a national holiday.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ance',
    root: '-ance',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state of, quality of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əns' },
      { accent: 'british', ipa: 'əns' },
      { accent: 'australian', ipa: 'əns' }
    ],
    examples: [
      { word: 'importance', meaning: 'state of being important', sentence: 'The issue has great importance.' },
      { word: 'tolerance', meaning: 'quality of being tolerant', sentence: 'She showed great tolerance.' },
    ],
    relatedRootIds: ['root_ence'],
  },
  {
    id: 'root_ence',
    root: '-ence',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state of, quality of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əns' },
      { accent: 'british', ipa: 'əns' },
      { accent: 'australian', ipa: 'əns' }
    ],
    examples: [
      { word: 'difference', meaning: 'state of being different', sentence: 'There\'s a big difference.' },
      { word: 'excellence', meaning: 'quality of being excellent', sentence: 'The team strives for excellence.' },
    ],
    relatedRootIds: ['root_ance'],
  },
  {
    id: 'root_ation',
    root: '-ation',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'act of, process of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ʃən' },
      { accent: 'british', ipa: 'ʃən' },
      { accent: 'australian', ipa: 'ʃən' }
    ],
    examples: [
      { word: 'creation', meaning: 'act of creating', sentence: 'The artist\'s creation was beautiful.' },
      { word: 'education', meaning: 'process of educating', sentence: 'Education is important.' },
    ],
    relatedRootIds: ['root_ion'],
  },
  {
    id: 'root_ion',
    root: '-ion',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'act of, state of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪdʒ' },
      { accent: 'british', ipa: 'ɪdʒ' },
      { accent: 'australian', ipa: 'ɪdʒ' }
    ],
    examples: [
      { word: 'action', meaning: 'act of acting', sentence: 'Take immediate action.' },
      { word: 'emotion', meaning: 'state of feeling', sentence: 'She showed strong emotion.' },
    ],
    relatedRootIds: ['root_ation'],
  },
  {
    id: 'root_cy',
    root: '-cy',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'state of, condition of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'i' },
      { accent: 'british', ipa: 'i' },
      { accent: 'australian', ipa: 'i' }
    ],
    examples: [
      { word: 'accuracy', meaning: 'state of being accurate', sentence: 'Check the accuracy of the data.' },
      { word: 'privacy', meaning: 'state of being private', sentence: 'Respect their privacy.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_dom',
    root: '-dom',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'state of, domain of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'dəm' },
      { accent: 'british', ipa: 'dəm' },
      { accent: 'australian', ipa: 'dəm' }
    ],
    examples: [
      { word: 'freedom', meaning: 'state of being free', sentence: 'They value freedom.' },
      { word: 'kingdom', meaning: 'domain of king', sentence: 'The kingdom prospered.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ee',
    root: '-ee',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'one who receives action',
    pronunciationVariants: [
      { accent: 'american', ipa: 'iː' },
      { accent: 'british', ipa: 'iː' },
      { accent: 'australian', ipa: 'iː' }
    ],
    examples: [
      { word: 'employee', meaning: 'one who is employed', sentence: 'The employee works hard.' },
      { word: 'refugee', meaning: 'one who seeks refuge', sentence: 'The refugee needs help.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_er',
    root: '-er',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'one who does, more',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɜːr' },
      { accent: 'british', ipa: 'ɜːr' },
      { accent: 'australian', ipa: 'ɜːr' }
    ],
    examples: [
      { word: 'teacher', meaning: 'one who teaches', sentence: 'The teacher is patient.' },
      { word: 'bigger', meaning: 'more big', sentence: 'The house is bigger.' },
    ],
    relatedRootIds: ['root_or'],
  },
  {
    id: 'root_or',
    root: '-or',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'one who does',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɔːr' },
      { accent: 'british', ipa: 'ɔːr' },
      { accent: 'australian', ipa: 'ɔːr' }
    ],
    examples: [
      { word: 'actor', meaning: 'one who acts', sentence: 'The actor performed well.' },
      { word: 'director', meaning: 'one who directs', sentence: 'The director guided the film.' },
    ],
    relatedRootIds: ['root_er'],
  },
  {
    id: 'root_est',
    root: '-est',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'most',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪst' },
      { accent: 'british', ipa: 'ɪst' },
      { accent: 'australian', ipa: 'ɪst' }
    ],
    examples: [
      { word: 'biggest', meaning: 'most big', sentence: 'It\'s the biggest building.' },
      { word: 'happiest', meaning: 'most happy', sentence: 'She was the happiest person.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ful',
    root: '-ful',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'full of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fʊl' },
      { accent: 'british', ipa: 'fʊl' },
      { accent: 'australian', ipa: 'fʊl' }
    ],
    examples: [
      { word: 'beautiful', meaning: 'full of beauty', sentence: 'The sunset was beautiful.' },
      { word: 'helpful', meaning: 'full of help', sentence: 'He gave helpful advice.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_hood',
    root: '-hood',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'state of, condition of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'i' },
      { accent: 'british', ipa: 'i' },
      { accent: 'australian', ipa: 'i' }
    ],
    examples: [
      { word: 'childhood', meaning: 'state of being child', sentence: 'She had a happy childhood.' },
      { word: 'neighborhood', meaning: 'condition of being neighbors', sentence: 'The neighborhood is quiet.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ic',
    root: '-ic',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'relating to, characterized by',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪk' },
      { accent: 'british', ipa: 'ɪk' },
      { accent: 'australian', ipa: 'ɪk' }
    ],
    examples: [
      { word: 'historic', meaning: 'relating to history', sentence: 'It\'s a historic event.' },
      { word: 'poetic', meaning: 'characterized by poetry', sentence: 'Her writing is poetic.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ify',
    root: '-ify',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'to make, to cause',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪfaɪ' },
      { accent: 'british', ipa: 'ɪfaɪ' },
      { accent: 'australian', ipa: 'ɪfaɪ' }
    ],
    examples: [
      { word: 'clarify', meaning: 'to make clear', sentence: 'Please clarify your point.' },
      { word: 'simplify', meaning: 'to make simple', sentence: 'We need to simplify the process.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ize',
    root: '-ize',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'to make, to cause',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪfaɪ' },
      { accent: 'british', ipa: 'ɪfaɪ' },
      { accent: 'australian', ipa: 'ɪfaɪ' }
    ],
    examples: [
      { word: 'modernize', meaning: 'to make modern', sentence: 'They plan to modernize the office.' },
      { word: 'organize', meaning: 'to make organized', sentence: 'Organize your files.' },
    ],
    relatedRootIds: ['root_ise'],
  },
  {
    id: 'root_ise',
    root: '-ise',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'to make, to cause',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪfaɪ' },
      { accent: 'british', ipa: 'ɪfaɪ' },
      { accent: 'australian', ipa: 'ɪfaɪ' }
    ],
    examples: [
      { word: 'realise', meaning: 'to make real', sentence: 'She began to realise the truth.' },
      { word: 'apologise', meaning: 'to make apology', sentence: 'You should apologise.' },
    ],
    relatedRootIds: ['root_ize'],
  },
  {
    id: 'root_ist',
    root: '-ist',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'one who practices, believer in',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪst' },
      { accent: 'british', ipa: 'ɪst' },
      { accent: 'australian', ipa: 'ɪst' }
    ],
    examples: [
      { word: 'artist', meaning: 'one who practices art', sentence: 'The artist displayed her work.' },
      { word: 'scientist', meaning: 'one who practices science', sentence: 'The scientist made a discovery.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ity',
    root: '-ity',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state of, quality of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əns' },
      { accent: 'british', ipa: 'əns' },
      { accent: 'australian', ipa: 'əns' }
    ],
    examples: [
      { word: 'reality', meaning: 'state of being real', sentence: 'Reality can be harsh.' },
      { word: 'creativity', meaning: 'quality of being creative', sentence: 'Creativity is valued here.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ive',
    root: '-ive',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'tending to, having the quality of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪv' },
      { accent: 'british', ipa: 'ɪv' },
      { accent: 'australian', ipa: 'ɪv' }
    ],
    examples: [
      { word: 'creative', meaning: 'tending to create', sentence: 'She has a creative mind.' },
      { word: 'active', meaning: 'having the quality of acting', sentence: 'He leads an active lifestyle.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_less',
    root: '-less',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'without',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ləs' },
      { accent: 'british', ipa: 'ləs' },
      { accent: 'australian', ipa: 'ləs' }
    ],
    examples: [
      { word: 'hopeless', meaning: 'without hope', sentence: 'The situation seemed hopeless.' },
      { word: 'careless', meaning: 'without care', sentence: 'His careless mistake caused problems.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ly',
    root: '-ly',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'in a manner of, like',
    pronunciationVariants: [
      { accent: 'american', ipa: 'li' },
      { accent: 'british', ipa: 'li' },
      { accent: 'australian', ipa: 'li' }
    ],
    examples: [
      { word: 'quickly', meaning: 'in a quick manner', sentence: 'She finished quickly.' },
      { word: 'friendly', meaning: 'like a friend', sentence: 'He has a friendly personality.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ment',
    root: '-ment',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'act of, result of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mənt' },
      { accent: 'british', ipa: 'mənt' },
      { accent: 'australian', ipa: 'mənt' }
    ],
    examples: [
      { word: 'enjoyment', meaning: 'act of enjoying', sentence: 'She gets great enjoyment from reading.' },
      { word: 'achievement', meaning: 'result of achieving', sentence: 'Winning was a great achievement.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ness',
    root: '-ness',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'state of, quality of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əns' },
      { accent: 'british', ipa: 'əns' },
      { accent: 'australian', ipa: 'əns' }
    ],
    examples: [
      { word: 'happiness', meaning: 'state of being happy', sentence: 'Happiness is important.' },
      { word: 'kindness', meaning: 'quality of being kind', sentence: 'Thank you for your kindness.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ship',
    root: '-ship',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'state of, skill of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ʃɪp' },
      { accent: 'british', ipa: 'ʃɪp' },
      { accent: 'australian', ipa: 'ʃɪp' }
    ],
    examples: [
      { word: 'friendship', meaning: 'state of being friends', sentence: 'Their friendship lasted years.' },
      { word: 'leadership', meaning: 'skill of leading', sentence: 'She showed strong leadership.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_y',
    root: '-y',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'characterized by, full of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'i' },
      { accent: 'british', ipa: 'i' },
      { accent: 'australian', ipa: 'i' }
    ],
    examples: [
      { word: 'rainy', meaning: 'characterized by rain', sentence: 'It was a rainy day.' },
      { word: 'hairy', meaning: 'full of hair', sentence: 'The dog is very hairy.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ward',
    root: '-ward',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'direction',
    pronunciationVariants: [
      { accent: 'american', ipa: 'wərd' },
      { accent: 'british', ipa: 'wɔːd' },
      { accent: 'australian', ipa: 'wɔːd' }
    ],
    examples: [
      { word: 'forward', meaning: 'front direction', sentence: 'Move forward.' },
      { word: 'backward', meaning: 'back direction', sentence: 'Look backward.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_wise',
    root: '-wise',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'in the manner of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'waɪz' },
      { accent: 'british', ipa: 'waɪz' },
      { accent: 'australian', ipa: 'waɪz' }
    ],
    examples: [
      { word: 'clockwise', meaning: 'in manner of clock', sentence: 'Turn clockwise.' },
      { word: 'likewise', meaning: 'in like manner', sentence: 'Do likewise.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_yst',
    root: '-yst',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'one who practices',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪst' },
      { accent: 'british', ipa: 'ɪst' },
      { accent: 'australian', ipa: 'ɪst' }
    ],
    examples: [
      { word: 'analyst', meaning: 'one who analyzes', sentence: 'The analyst reports.' },
      { word: 'therapist', meaning: 'one who treats', sentence: 'The therapist helps.' },
    ],
    relatedRootIds: [],
  },
  // Additional Suffixes
  {
    id: 'root_ac',
    root: '-ac',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'pertaining to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'æk' },
      { accent: 'british', ipa: 'æk' },
      { accent: 'australian', ipa: 'æk' }
    ],
    examples: [
      { word: 'cardiac', meaning: 'pertaining to heart', sentence: 'He has a cardiac condition.' },
      { word: 'maniac', meaning: 'pertaining to madness', sentence: 'The villain was a maniac.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_acy',
    root: '-acy',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əsi' },
      { accent: 'british', ipa: 'əsi' },
      { accent: 'australian', ipa: 'əsi' }
    ],
    examples: [
      { word: 'accuracy', meaning: 'state of being accurate', sentence: 'Check the accuracy.' },
      { word: 'literacy', meaning: 'quality of being literate', sentence: 'Literacy is important.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ade',
    root: '-ade',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'action or product',
    pronunciationVariants: [
      { accent: 'american', ipa: 'eɪd' },
      { accent: 'british', ipa: 'eɪd' },
      { accent: 'australian', ipa: 'eɪd' }
    ],
    examples: [
      { word: 'lemonade', meaning: 'lemon product', sentence: 'Drink lemonade.' },
      { word: 'blockade', meaning: 'blocking action', sentence: 'The blockade ended.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_age',
    root: '-age',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'action or collection',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪdʒ' },
      { accent: 'british', ipa: 'ɪdʒ' },
      { accent: 'australian', ipa: 'ɪdʒ' }
    ],
    examples: [
      { word: 'garbage', meaning: 'collection of waste', sentence: 'Take out the garbage.' },
      { word: 'voyage', meaning: 'action of traveling', sentence: 'The voyage was long.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_an',
    root: '-an',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'relating to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ən' },
      { accent: 'british', ipa: 'ən' },
      { accent: 'australian', ipa: 'ən' }
    ],
    examples: [
      { word: 'urban', meaning: 'relating to city', sentence: 'Urban areas are crowded.' },
      { word: 'human', meaning: 'relating to people', sentence: 'Human rights matter.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ance',
    root: '-ance',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'state or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əns' },
      { accent: 'british', ipa: 'əns' },
      { accent: 'australian', ipa: 'əns' }
    ],
    examples: [
      { word: 'tolerance', meaning: 'state of tolerating', sentence: 'Show tolerance.' },
      { word: 'guidance', meaning: 'quality of guiding', sentence: 'Seek guidance.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ancy',
    root: '-ancy',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ənsi' },
      { accent: 'british', ipa: 'ənsi' },
      { accent: 'australian', ipa: 'ənsi' }
    ],
    examples: [
      { word: 'pregnancy', meaning: 'state of being pregnant', sentence: 'Pregnancy lasts nine months.' },
      { word: 'vacancy', meaning: 'state of being empty', sentence: 'There is a vacancy.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ard',
    root: '-ard',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'one who does',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ərd' },
      { accent: 'british', ipa: 'ɑːd' },
      { accent: 'australian', ipa: 'ɑːd' }
    ],
    examples: [
      { word: 'drunkard', meaning: 'one who drinks', sentence: 'He is a drunkard.' },
      { word: 'coward', meaning: 'one who fears', sentence: 'Don\'t be a coward.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_arian',
    root: '-arian',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'one who',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈɛriən' },
      { accent: 'british', ipa: 'ˈeəriən' },
      { accent: 'australian', ipa: 'ˈeəriən' }
    ],
    examples: [
      { word: 'vegetarian', meaning: 'one who eats vegetables', sentence: 'She is a vegetarian.' },
      { word: 'librarian', meaning: 'one who manages library', sentence: 'The librarian helped me.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ate',
    root: '-ate',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'to make or act',
    pronunciationVariants: [
      { accent: 'american', ipa: 'eɪt' },
      { accent: 'british', ipa: 'eɪt' },
      { accent: 'australian', ipa: 'eɪt' }
    ],
    examples: [
      { word: 'activate', meaning: 'to make active', sentence: 'Activate the system.' },
      { word: 'celebrate', meaning: 'to act in celebration', sentence: 'Celebrate the victory.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_cian',
    root: '-cian',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'one who practices',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ʃən' },
      { accent: 'british', ipa: 'ʃən' },
      { accent: 'australian', ipa: 'ʃən' }
    ],
    examples: [
      { word: 'musician', meaning: 'one who practices music', sentence: 'He is a musician.' },
      { word: 'technician', meaning: 'one who practices technique', sentence: 'Call the technician.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_cide',
    root: '-cide',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'killing',
    pronunciationVariants: [
      { accent: 'american', ipa: 'saɪd' },
      { accent: 'british', ipa: 'saɪd' },
      { accent: 'australian', ipa: 'saɪd' }
    ],
    examples: [
      { word: 'homicide', meaning: 'killing of human', sentence: 'Homicide is a crime.' },
      { word: 'suicide', meaning: 'killing of self', sentence: 'Suicide is preventable.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_cracy',
    root: '-cracy',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'rule or government',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kreɪsi' },
      { accent: 'british', ipa: 'krɑːsi' },
      { accent: 'australian', ipa: 'krɑːsi' }
    ],
    examples: [
      { word: 'democracy', meaning: 'rule by people', sentence: 'Democracy is important.' },
      { word: 'autocracy', meaning: 'rule by self', sentence: 'Autocracy is oppressive.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_crat',
    root: '-crat',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'ruler or participant',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kræt' },
      { accent: 'british', ipa: 'kræt' },
      { accent: 'australian', ipa: 'kræt' }
    ],
    examples: [
      { word: 'democrat', meaning: 'participant in democracy', sentence: 'He is a democrat.' },
      { word: 'autocrat', meaning: 'ruler by self', sentence: 'The autocrat ruled alone.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_cule',
    root: '-cule',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'small',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kjuːl' },
      { accent: 'british', ipa: 'kjuːl' },
      { accent: 'australian', ipa: 'kjuːl' }
    ],
    examples: [
      { word: 'molecule', meaning: 'small mass', sentence: 'A molecule is tiny.' },
      { word: 'particle', meaning: 'small part', sentence: 'A particle is small.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_cycle',
    root: '-cycle',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'circle or wheel',
    pronunciationVariants: [
      { accent: 'american', ipa: 'saɪkəl' },
      { accent: 'british', ipa: 'saɪkəl' },
      { accent: 'australian', ipa: 'saɪkəl' }
    ],
    examples: [
      { word: 'bicycle', meaning: 'two wheels', sentence: 'Ride a bicycle.' },
      { word: 'motorcycle', meaning: 'motor wheels', sentence: 'He drives a motorcycle.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_dom',
    root: '-dom',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'state or domain',
    pronunciationVariants: [
      { accent: 'american', ipa: 'dəm' },
      { accent: 'british', ipa: 'dəm' },
      { accent: 'australian', ipa: 'dəm' }
    ],
    examples: [
      { word: 'kingdom', meaning: 'domain of king', sentence: 'The kingdom is large.' },
      { word: 'freedom', meaning: 'state of being free', sentence: 'Freedom is precious.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ee',
    root: '-ee',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'one who receives',
    pronunciationVariants: [
      { accent: 'american', ipa: 'i' },
      { accent: 'british', ipa: 'iː' },
      { accent: 'australian', ipa: 'iː' }
    ],
    examples: [
      { word: 'employee', meaning: 'one who is employed', sentence: 'The employee works hard.' },
      { word: 'payee', meaning: 'one who is paid', sentence: 'The payee received money.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_eer',
    root: '-eer',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'one who does',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪr' },
      { accent: 'british', ipa: 'ɪə' },
      { accent: 'australian', ipa: 'ɪə' }
    ],
    examples: [
      { word: 'engineer', meaning: 'one who engineers', sentence: 'The engineer designed it.' },
      { word: 'volunteer', meaning: 'one who volunteers', sentence: 'Be a volunteer.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_el',
    root: '-el',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'small or one who',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əl' },
      { accent: 'british', ipa: 'əl' },
      { accent: 'australian', ipa: 'əl' }
    ],
    examples: [
      { word: 'panel', meaning: 'small piece', sentence: 'The panel met.' },
      { word: 'novel', meaning: 'new', sentence: 'Read the novel.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_en',
    root: '-en',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'made of or to make',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ən' },
      { accent: 'british', ipa: 'ən' },
      { accent: 'australian', ipa: 'ən' }
    ],
    examples: [
      { word: 'golden', meaning: 'made of gold', sentence: 'The ring is golden.' },
      { word: 'strengthen', meaning: 'to make strong', sentence: 'Strengthen the team.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ence',
    root: '-ence',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əns' },
      { accent: 'british', ipa: 'əns' },
      { accent: 'australian', ipa: 'əns' }
    ],
    examples: [
      { word: 'excellence', meaning: 'state of being excellent', sentence: 'Strive for excellence.' },
      { word: 'independence', meaning: 'state of being independent', sentence: 'Independence is valued.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ency',
    root: '-ency',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ənsi' },
      { accent: 'british', ipa: 'ənsi' },
      { accent: 'australian', ipa: 'ənsi' }
    ],
    examples: [
      { word: 'urgency', meaning: 'state of being urgent', sentence: 'Handle with urgency.' },
      { word: 'fluency', meaning: 'quality of flowing', sentence: 'Practice fluency.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_escence',
    root: '-escence',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'process or state',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈɛsəns' },
      { accent: 'british', ipa: 'ˈɛsəns' },
      { accent: 'australian', ipa: 'ˈɛsəns' }
    ],
    examples: [
      { word: 'luminescence', meaning: 'process of emitting light', sentence: 'Observe the luminescence.' },
      { word: 'coalescence', meaning: 'process of coming together', sentence: 'The coalescence was gradual.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_esque',
    root: '-esque',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'in the style of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɛsk' },
      { accent: 'british', ipa: 'ɛsk' },
      { accent: 'australian', ipa: 'ɛsk' }
    ],
    examples: [
      { word: 'picturesque', meaning: 'in the style of picture', sentence: 'The view is picturesque.' },
      { word: 'statuesque', meaning: 'in the style of statue', sentence: 'She is statuesque.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_et',
    root: '-et',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'small',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪt' },
      { accent: 'british', ipa: 'ɪt' },
      { accent: 'australian', ipa: 'ɪt' }
    ],
    examples: [
      { word: 'puppet', meaning: 'small doll', sentence: 'The puppet danced.' },
      { word: 'pocket', meaning: 'small bag', sentence: 'Check your pocket.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_fic',
    root: '-fic',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'making or doing',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fɪk' },
      { accent: 'british', ipa: 'fɪk' },
      { accent: 'australian', ipa: 'fɪk' }
    ],
    examples: [
      { word: 'terrific', meaning: 'making terror', sentence: 'The movie was terrific.' },
      { word: 'scientific', meaning: 'making science', sentence: 'The method is scientific.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_fication',
    root: '-fication',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'process of making',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fɪˈkeɪʃən' },
      { accent: 'british', ipa: 'fɪˈkeɪʃən' },
      { accent: 'australian', ipa: 'fɪˈkeɪʃən' }
    ],
    examples: [
      { word: 'clarification', meaning: 'process of making clear', sentence: 'Request clarification.' },
      { word: 'simplification', meaning: 'process of making simple', sentence: 'The simplification helped.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_fier',
    root: '-fier',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'one who makes',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈfaɪər' },
      { accent: 'british', ipa: 'ˈfaɪə' },
      { accent: 'australian', ipa: 'ˈfaɪə' }
    ],
    examples: [
      { word: 'beautifier', meaning: 'one who makes beautiful', sentence: 'Use the beautifier.' },
      { word: 'amplifier', meaning: 'one who makes larger', sentence: 'The amplifier is loud.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_form',
    root: '-form',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'having the form of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fɔrm' },
      { accent: 'british', ipa: 'fɔːm' },
      { accent: 'australian', ipa: 'fɔːm' }
    ],
    examples: [
      { word: 'cruciform', meaning: 'having form of cross', sentence: 'The design is cruciform.' },
      { word: 'uniform', meaning: 'having one form', sentence: 'Wear the uniform.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_fy',
    root: '-fy',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'to make',
    pronunciationVariants: [
      { accent: 'american', ipa: 'faɪ' },
      { accent: 'british', ipa: 'faɪ' },
      { accent: 'australian', ipa: 'faɪ' }
    ],
    examples: [
      { word: 'clarify', meaning: 'to make clear', sentence: 'Clarify the point.' },
      { word: 'simplify', meaning: 'to make simple', sentence: 'Simplify the process.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_gon',
    root: '-gon',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'angled',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɡɑn' },
      { accent: 'british', ipa: 'ɡɒn' },
      { accent: 'australian', ipa: 'ɡɒn' }
    ],
    examples: [
      { word: 'polygon', meaning: 'many angled', sentence: 'Draw a polygon.' },
      { word: 'hexagon', meaning: 'six angled', sentence: 'A hexagon has six sides.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_graph',
    root: '-graph',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'writing or drawing',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɡræf' },
      { accent: 'british', ipa: 'ɡrɑːf' },
      { accent: 'australian', ipa: 'ɡrɑːf' }
    ],
    examples: [
      { word: 'photograph', meaning: 'light drawing', sentence: 'Take a photograph.' },
      { word: 'autograph', meaning: 'self writing', sentence: 'Get an autograph.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ia',
    root: '-ia',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'condition or place',
    pronunciationVariants: [
      { accent: 'american', ipa: 'iə' },
      { accent: 'british', ipa: 'ɪə' },
      { accent: 'australian', ipa: 'ɪə' }
    ],
    examples: [
      { word: 'pneumonia', meaning: 'lung condition', sentence: 'Pneumonia is serious.' },
      { word: 'California', meaning: 'place name', sentence: 'Visit California.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ian',
    root: '-ian',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'relating to or one who',
    pronunciationVariants: [
      { accent: 'american', ipa: 'iən' },
      { accent: 'british', ipa: 'ɪən' },
      { accent: 'australian', ipa: 'ɪən' }
    ],
    examples: [
      { word: 'musician', meaning: 'one who does music', sentence: 'He is a musician.' },
      { word: 'Christian', meaning: 'relating to Christ', sentence: 'She is Christian.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_iasis',
    root: '-iasis',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'condition or disease',
    pronunciationVariants: [
      { accent: 'american', ipa: 'aɪəsɪs' },
      { accent: 'british', ipa: 'aɪəsɪs' },
      { accent: 'australian', ipa: 'aɪəsɪs' }
    ],
    examples: [
      { word: 'amphibiasis', meaning: 'condition of amphibians', sentence: 'Study amphibiasis.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ible',
    root: '-ible',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'able to be',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əbl' },
      { accent: 'british', ipa: 'əbl' },
      { accent: 'australian', ipa: 'əbl' }
    ],
    examples: [
      { word: 'visible', meaning: 'able to be seen', sentence: 'It is visible.' },
      { word: 'flexible', meaning: 'able to bend', sentence: 'The material is flexible.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ic',
    root: '-ic',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'relating to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪk' },
      { accent: 'british', ipa: 'ɪk' },
      { accent: 'australian', ipa: 'ɪk' }
    ],
    examples: [
      { word: 'poetic', meaning: 'relating to poetry', sentence: 'The style is poetic.' },
      { word: 'heroic', meaning: 'relating to hero', sentence: 'The act was heroic.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_id',
    root: '-id',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'having certain quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪd' },
      { accent: 'british', ipa: 'ɪd' },
      { accent: 'australian', ipa: 'ɪd' }
    ],
    examples: [
      { word: 'acid', meaning: 'having sour quality', sentence: 'The acid is strong.' },
      { word: 'placid', meaning: 'having calm quality', sentence: 'The lake is placid.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ile',
    root: '-ile',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'having quality of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'aɪl' },
      { accent: 'british', ipa: 'aɪl' },
      { accent: 'australian', ipa: 'aɪl' }
    ],
    examples: [
      { word: 'fertile', meaning: 'having quality of bearing', sentence: 'The soil is fertile.' },
      { word: 'fragile', meaning: 'having quality of breaking', sentence: 'The glass is fragile.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ine',
    root: '-ine',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'relating to or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'aɪn' },
      { accent: 'british', ipa: 'aɪn' },
      { accent: 'australian', ipa: 'aɪn' }
    ],
    examples: [
      { word: 'feminine', meaning: 'relating to female', sentence: 'The style is feminine.' },
      { word: 'crystalline', meaning: 'quality of crystal', sentence: 'The structure is crystalline.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ing',
    root: '-ing',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'action or process',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪŋ' },
      { accent: 'british', ipa: 'ɪŋ' },
      { accent: 'australian', ipa: 'ɪŋ' }
    ],
    examples: [
      { word: 'running', meaning: 'action of run', sentence: 'He is running.' },
      { word: 'painting', meaning: 'process of paint', sentence: 'The painting is beautiful.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ion',
    root: '-ion',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'action or condition',
    pronunciationVariants: [
      { accent: 'american', ipa: 'iən' },
      { accent: 'british', ipa: 'ɪən' },
      { accent: 'australian', ipa: 'ɪən' }
    ],
    examples: [
      { word: 'action', meaning: 'act condition', sentence: 'Take action.' },
      { word: 'opinion', meaning: 'opining condition', sentence: 'Share your opinion.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ious',
    root: '-ious',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'full of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'iəs' },
      { accent: 'british', ipa: 'ɪəs' },
      { accent: 'australian', ipa: 'ɪəs' }
    ],
    examples: [
      { word: 'curious', meaning: 'full of curiosity', sentence: 'Be curious.' },
      { word: 'delicious', meaning: 'full of delight', sentence: 'The food is delicious.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ise',
    root: '-ise',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'to make',
    pronunciationVariants: [
      { accent: 'american', ipa: 'aɪz' },
      { accent: 'british', ipa: 'aɪz' },
      { accent: 'australian', ipa: 'aɪz' }
    ],
    examples: [
      { word: 'realize', meaning: 'to make real', sentence: 'Realize your dream.' },
      { word: 'organize', meaning: 'to make organized', sentence: 'Organize the room.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ism',
    root: '-ism',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'belief or practice',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪzəm' },
      { accent: 'british', ipa: 'ɪzəm' },
      { accent: 'australian', ipa: 'ɪzəm' }
    ],
    examples: [
      { word: 'capitalism', meaning: 'belief in capital', sentence: 'Capitalism is an economic system.' },
      { word: 'buddhism', meaning: 'practice of Buddha', sentence: 'Buddhism is a religion.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ist',
    root: '-ist',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'one who practices',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪst' },
      { accent: 'british', ipa: 'ɪst' },
      { accent: 'australian', ipa: 'ɪst' }
    ],
    examples: [
      { word: 'artist', meaning: 'one who practices art', sentence: 'She is an artist.' },
      { word: 'scientist', meaning: 'one who practices science', sentence: 'He is a scientist.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ite',
    root: '-ite',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'one who or related to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'aɪt' },
      { accent: 'british', ipa: 'aɪt' },
      { accent: 'australian', ipa: 'aɪt' }
    ],
    examples: [
      { word: 'favorite', meaning: 'one who favors', sentence: 'It\'s my favorite.' },
      { word: 'graphite', meaning: 'related to writing', sentence: 'Use graphite.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ition',
    root: '-ition',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'action or process',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈɪʃən' },
      { accent: 'british', ipa: 'ˈɪʃən' },
      { accent: 'australian', ipa: 'ˈɪʃən' }
    ],
    examples: [
      { word: 'competition', meaning: 'action of competing', sentence: 'The competition is fierce.' },
      { word: 'partition', meaning: 'process of dividing', sentence: 'Create a partition.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_itive',
    root: '-itive',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'tending to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪtɪv' },
      { accent: 'british', ipa: 'ɪtɪv' },
      { accent: 'australian', ipa: 'ɪtɪv' }
    ],
    examples: [
      { word: 'competitive', meaning: 'tending to compete', sentence: 'Be competitive.' },
      { word: 'sensitive', meaning: 'tending to sense', sentence: 'She is sensitive.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_itor',
    root: '-itor',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'one who',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪtər' },
      { accent: 'british', ipa: 'ɪtə' },
      { accent: 'australian', ipa: 'ɪtə' }
    ],
    examples: [
      { word: 'auditor', meaning: 'one who hears', sentence: 'The auditor checked.' },
      { word: 'competitor', meaning: 'one who competes', sentence: 'The competitor is strong.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_itude',
    root: '-itude',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or condition',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪtuːd' },
      { accent: 'british', ipa: 'ɪtjuːd' },
      { accent: 'australian', ipa: 'ɪtjuːd' }
    ],
    examples: [
      { word: 'altitude', meaning: 'height condition', sentence: 'The altitude is high.' },
      { word: 'gratitude', meaning: 'state of being grateful', sentence: 'Show gratitude.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ity',
    root: '-ity',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪti' },
      { accent: 'british', ipa: 'ɪti' },
      { accent: 'australian', ipa: 'ɪti' }
    ],
    examples: [
      { word: 'ability', meaning: 'state of being able', sentence: 'Show your ability.' },
      { word: 'reality', meaning: 'state of being real', sentence: 'Face reality.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ization',
    root: '-ization',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'process of making',
    pronunciationVariants: [
      { accent: 'american', ipa: 'aɪˈzeɪʃən' },
      { accent: 'british', ipa: 'aɪˈzeɪʃən' },
      { accent: 'australian', ipa: 'aɪˈzeɪʃən' }
    ],
    examples: [
      { word: 'organization', meaning: 'process of organizing', sentence: 'The organization is large.' },
      { word: 'modernization', meaning: 'process of making modern', sentence: 'Modernization is needed.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ize',
    root: '-ize',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'to make',
    pronunciationVariants: [
      { accent: 'american', ipa: 'aɪz' },
      { accent: 'british', ipa: 'aɪz' },
      { accent: 'australian', ipa: 'aɪz' }
    ],
    examples: [
      { word: 'organize', meaning: 'to make organized', sentence: 'Organize the files.' },
      { word: 'modernize', meaning: 'to make modern', sentence: 'Modernize the system.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_kin',
    root: '-kin',
    type: 'suffix',
    languageOrigin: 'Dutch',
    meaning: 'little',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kɪn' },
      { accent: 'british', ipa: 'kɪn' },
      { accent: 'australian', ipa: 'kɪn' }
    ],
    examples: [
      { word: 'napkin', meaning: 'little cloth', sentence: 'Use a napkin.' },
      { word: 'lambkin', meaning: 'little lamb', sentence: 'The lambkin is cute.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_le',
    root: '-le',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'small or one who',
    pronunciationVariants: [
      { accent: 'american', ipa: 'əl' },
      { accent: 'british', ipa: 'əl' },
      { accent: 'australian', ipa: 'əl' }
    ],
    examples: [
      { word: 'beetle', meaning: 'small insect', sentence: 'The beetle flew.' },
      { word: 'sparkle', meaning: 'one who sparks', sentence: 'The diamond sparkles.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_let',
    root: '-let',
    type: 'suffix',
    languageOrigin: 'French',
    meaning: 'small',
    pronunciationVariants: [
      { accent: 'american', ipa: 'lɪt' },
      { accent: 'british', ipa: 'lɪt' },
      { accent: 'australian', ipa: 'lɪt' }
    ],
    examples: [
      { word: 'booklet', meaning: 'small book', sentence: 'Read the booklet.' },
      { word: 'piglet', meaning: 'small pig', sentence: 'The piglet is pink.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_like',
    root: '-like',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'resembling',
    pronunciationVariants: [
      { accent: 'american', ipa: 'laɪk' },
      { accent: 'british', ipa: 'laɪk' },
      { accent: 'australian', ipa: 'laɪk' }
    ],
    examples: [
      { word: 'childlike', meaning: 'resembling child', sentence: 'She is childlike.' },
      { word: 'lifelike', meaning: 'resembling life', sentence: 'The statue is lifelike.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ling',
    root: '-ling',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'small or one who',
    pronunciationVariants: [
      { accent: 'american', ipa: 'lɪŋ' },
      { accent: 'british', ipa: 'lɪŋ' },
      { accent: 'australian', ipa: 'lɪŋ' }
    ],
    examples: [
      { word: 'duckling', meaning: 'small duck', sentence: 'The duckling swims.' },
      { word: 'hireling', meaning: 'one who is hired', sentence: 'The hireling worked.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_logist',
    root: '-logist',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'one who studies',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈlɑdʒɪst' },
      { accent: 'british', ipa: 'ˈlɒdʒɪst' },
      { accent: 'australian', ipa: 'ˈlɒdʒɪst' }
    ],
    examples: [
      { word: 'psychologist', meaning: 'one who studies mind', sentence: 'See a psychologist.' },
      { word: 'biologist', meaning: 'one who studies life', sentence: 'The biologist researches.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_logue',
    root: '-logue',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'speech or study',
    pronunciationVariants: [
      { accent: 'american', ipa: 'lɔɡ' },
      { accent: 'british', ipa: 'lɒɡ' },
      { accent: 'australian', ipa: 'lɒɡ' }
    ],
    examples: [
      { word: 'dialogue', meaning: 'speech between', sentence: 'The dialogue was good.' },
      { word: 'prologue', meaning: 'speech before', sentence: 'Read the prologue.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_mony',
    root: '-mony',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or condition',
    pronunciationVariants: [
      { accent: 'american', ipa: 'moʊni' },
      { accent: 'british', ipa: 'məni' },
      { accent: 'australian', ipa: 'məni' }
    ],
    examples: [
      { word: 'testimony', meaning: 'state of testifying', sentence: 'Give testimony.' },
      { word: 'matrimony', meaning: 'state of marriage', sentence: 'Matrimony is sacred.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ness',
    root: '-ness',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'state or quality',
    pronunciationVariants: [
      { accent: 'american', ipa: 'nəs' },
      { accent: 'british', ipa: 'nəs' },
      { accent: 'australian', ipa: 'nəs' }
    ],
    examples: [
      { word: 'happiness', meaning: 'state of being happy', sentence: 'Seek happiness.' },
      { word: 'kindness', meaning: 'quality of being kind', sentence: 'Show kindness.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_oid',
    root: '-oid',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'resembling',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɔɪd' },
      { accent: 'british', ipa: 'ɔɪd' },
      { accent: 'australian', ipa: 'ɔɪd' }
    ],
    examples: [
      { word: 'spheroid', meaning: 'resembling sphere', sentence: 'The shape is spheroid.' },
      { word: 'asteroid', meaning: 'resembling star', sentence: 'The asteroid orbits.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ology',
    root: '-ology',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'study of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈɑlədʒi' },
      { accent: 'british', ipa: 'ˈɒlədʒi' },
      { accent: 'australian', ipa: 'ˈɒlədʒi' }
    ],
    examples: [
      { word: 'biology', meaning: 'study of life', sentence: 'Study biology.' },
      { word: 'psychology', meaning: 'study of mind', sentence: 'Psychology is interesting.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_oma',
    root: '-oma',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'tumor or swelling',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈoʊmə' },
      { accent: 'british', ipa: 'ˈəʊmə' },
      { accent: 'australian', ipa: 'ˈəʊmə' }
    ],
    examples: [
      { word: 'carcinoma', meaning: 'cancer tumor', sentence: 'Carcinoma is serious.' },
      { word: 'lymphoma', meaning: 'lymph tumor', sentence: 'Lymphoma is treatable.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_on',
    root: '-on',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'unit or particle',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɑn' },
      { accent: 'british', ipa: 'ɒn' },
      { accent: 'australian', ipa: 'ɒn' }
    ],
    examples: [
      { word: 'electron', meaning: 'electric particle', sentence: 'The electron moves.' },
      { word: 'neutron', meaning: 'neutral particle', sentence: 'The neutron is neutral.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ory',
    root: '-ory',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'place for or relating to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɔri' },
      { accent: 'british', ipa: 'əri' },
      { accent: 'australian', ipa: 'əri' }
    ],
    examples: [
      { word: 'dormitory', meaning: 'place for sleeping', sentence: 'The dormitory is quiet.' },
      { word: 'territory', meaning: 'relating to land', sentence: 'The territory is large.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ose',
    root: '-ose',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'full of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'oʊs' },
      { accent: 'british', ipa: 'əʊs' },
      { accent: 'australian', ipa: 'əʊs' }
    ],
    examples: [
      { word: 'verbose', meaning: 'full of words', sentence: 'Don\'t be verbose.' },
      { word: 'gorgeous', meaning: 'full of beauty', sentence: 'She is gorgeous.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_osis',
    root: '-osis',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'condition or disease',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈoʊsɪs' },
      { accent: 'british', ipa: 'ˈəʊsɪs' },
      { accent: 'australian', ipa: 'ˈəʊsɪs' }
    ],
    examples: [
      { word: 'diagnosis', meaning: 'condition of knowing', sentence: 'The diagnosis is clear.' },
      { word: 'hypnosis', meaning: 'condition of sleep', sentence: 'Hypnosis can help.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ost',
    root: '-ost',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'relating to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɑst' },
      { accent: 'british', ipa: 'ɒst' },
      { accent: 'australian', ipa: 'ɒst' }
    ],
    examples: [
      { word: 'cost', meaning: 'relating to cost', sentence: 'The cost is high.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_path',
    root: '-path',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'disease or feeling',
    pronunciationVariants: [
      { accent: 'american', ipa: 'pæθ' },
      { accent: 'british', ipa: 'pɑːθ' },
      { accent: 'australian', ipa: 'pɑːθ' }
    ],
    examples: [
      { word: 'psychopath', meaning: 'mind disease', sentence: 'The psychopath is dangerous.' },
      { word: 'sympathy', meaning: 'feeling with', sentence: 'Show sympathy.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_phile',
    root: '-phile',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'lover of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'faɪl' },
      { accent: 'british', ipa: 'faɪl' },
      { accent: 'australian', ipa: 'faɪl' }
    ],
    examples: [
      { word: 'bibliophile', meaning: 'lover of books', sentence: 'He is a bibliophile.' },
      { word: 'aerophile', meaning: 'lover of air', sentence: 'The aerophile loves flying.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_phobia',
    root: '-phobia',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'fear of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈfoʊbiə' },
      { accent: 'british', ipa: 'ˈfəʊbiə' },
      { accent: 'australian', ipa: 'ˈfəʊbiə' }
    ],
    examples: [
      { word: 'arachnophobia', meaning: 'fear of spiders', sentence: 'She has arachnophobia.' },
      { word: 'claustrophobia', meaning: 'fear of enclosed', sentence: 'He has claustrophobia.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_phone',
    root: '-phone',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'sound',
    pronunciationVariants: [
      { accent: 'american', ipa: 'foʊn' },
      { accent: 'british', ipa: 'fəʊn' },
      { accent: 'australian', ipa: 'fəʊn' }
    ],
    examples: [
      { word: 'telephone', meaning: 'far sound', sentence: 'Answer the telephone.' },
      { word: 'microphone', meaning: 'small sound', sentence: 'Use the microphone.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_scope',
    root: '-scope',
    type: 'suffix',
    languageOrigin: 'Greek',
    meaning: 'viewing instrument',
    pronunciationVariants: [
      { accent: 'american', ipa: 'skoʊp' },
      { accent: 'british', ipa: 'skəʊp' },
      { accent: 'australian', ipa: 'skəʊp' }
    ],
    examples: [
      { word: 'microscope', meaning: 'small viewing', sentence: 'Use the microscope.' },
      { word: 'telescope', meaning: 'far viewing', sentence: 'Look through the telescope.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_some',
    root: '-some',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'tending to or like',
    pronunciationVariants: [
      { accent: 'american', ipa: 'səm' },
      { accent: 'british', ipa: 'səm' },
      { accent: 'australian', ipa: 'səm' }
    ],
    examples: [
      { word: 'troublesome', meaning: 'tending to trouble', sentence: 'The task is troublesome.' },
      { word: 'handsome', meaning: 'like hand', sentence: 'He is handsome.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ster',
    root: '-ster',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'one who',
    pronunciationVariants: [
      { accent: 'american', ipa: 'stər' },
      { accent: 'british', ipa: 'stə' },
      { accent: 'australian', ipa: 'stə' }
    ],
    examples: [
      { word: 'teamster', meaning: 'one who teams', sentence: 'The teamster drives.' },
      { word: 'trickster', meaning: 'one who tricks', sentence: 'The trickster is clever.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_th',
    root: '-th',
    type: 'suffix',
    languageOrigin: 'Old English',
    meaning: 'state or condition',
    pronunciationVariants: [
      { accent: 'american', ipa: 'θ' },
      { accent: 'british', ipa: 'θ' },
      { accent: 'australian', ipa: 'θ' }
    ],
    examples: [
      { word: 'growth', meaning: 'state of growing', sentence: 'The growth is steady.' },
      { word: 'strength', meaning: 'condition of being strong', sentence: 'Show your strength.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_tude',
    root: '-tude',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'state or condition',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tuːd' },
      { accent: 'british', ipa: 'tjuːd' },
      { accent: 'australian', ipa: 'tjuːd' }
    ],
    examples: [
      { word: 'altitude', meaning: 'height condition', sentence: 'The altitude is high.' },
      { word: 'solitude', meaning: 'state of being alone', sentence: 'Enjoy solitude.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ular',
    root: '-ular',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'relating to',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ələr' },
      { accent: 'british', ipa: 'ələ' },
      { accent: 'australian', ipa: 'ələ' }
    ],
    examples: [
      { word: 'particular', meaning: 'relating to part', sentence: 'Be particular.' },
      { word: 'muscular', meaning: 'relating to muscle', sentence: 'He is muscular.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ule',
    root: '-ule',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'small',
    pronunciationVariants: [
      { accent: 'american', ipa: 'juːl' },
      { accent: 'british', ipa: 'juːl' },
      { accent: 'australian', ipa: 'juːl' }
    ],
    examples: [
      { word: 'capsule', meaning: 'small box', sentence: 'Take the capsule.' },
      { word: 'globule', meaning: 'small sphere', sentence: 'The globule is tiny.' },
    ],
    relatedRootIds: [],
  }
];
