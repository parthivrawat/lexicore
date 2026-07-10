import { Etymology } from '@/types';

export const verbsEtymology: Record<string, Etymology> = {
  word_go: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      {
        language: 'Proto-Indo-European',
        form: '*ghā-',
        period: 'Prehistoric',
        meaning: 'to go, to leave',
      },
      { language: 'Proto-Germanic', form: '*gāną', period: 'c. 500 BC', meaning: 'to go' },
      { language: 'Old English', form: 'gān', period: 'Before 12th century', meaning: 'to go' },
      {
        language: 'Middle English',
        form: 'gon, go',
        period: '12th-15th century',
        meaning: 'to go',
      },
      { language: 'Modern English', form: 'go', period: '15th century', meaning: 'to go' },
    ],
    cognates: [
      { language: 'German', word: 'gehen', meaning: 'to go' },
      { language: 'Dutch', word: 'gaan', meaning: 'to go' },
      { language: 'Swedish', word: 'gå', meaning: 'to go' },
    ],
  },

  word_see: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      {
        language: 'Proto-Indo-European',
        form: '*sekw-',
        period: 'Prehistoric',
        meaning: 'to see, to follow',
      },
      { language: 'Proto-Germanic', form: '*sehwaną', period: 'c. 500 BC', meaning: 'to see' },
      { language: 'Old English', form: 'sēon', period: 'Before 12th century', meaning: 'to see' },
      { language: 'Middle English', form: 'seen', period: '12th-15th century', meaning: 'to see' },
      { language: 'Modern English', form: 'see', period: '15th century', meaning: 'to see' },
    ],
    cognates: [
      { language: 'German', word: 'sehen', meaning: 'to see' },
      { language: 'Dutch', word: 'zien', meaning: 'to see' },
      { language: 'Swedish', word: 'se', meaning: 'to see' },
      { language: 'Latin', word: 'sequor', meaning: 'to follow' },
    ],
  },

  word_make: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      {
        language: 'Proto-Indo-European',
        form: '*mag-',
        period: 'Prehistoric',
        meaning: 'to knead, to fashion',
      },
      { language: 'Proto-Germanic', form: '*makōną', period: 'c. 500 BC', meaning: 'to make' },
      {
        language: 'Old English',
        form: 'macian',
        period: 'Before 12th century',
        meaning: 'to make',
      },
      {
        language: 'Middle English',
        form: 'maken',
        period: '12th-15th century',
        meaning: 'to make',
      },
      { language: 'Modern English', form: 'make', period: '15th century', meaning: 'to make' },
    ],
    cognates: [
      { language: 'German', word: 'machen', meaning: 'to make' },
      { language: 'Dutch', word: 'maken', meaning: 'to make' },
      { language: 'Swedish', word: 'maka', meaning: 'to make' },
    ],
  },

  word_be: {
    languageOrigin: 'Proto-Indo-European',
    yearOfOrigin: 'Prehistoric',
    timeline: [
      {
        language: 'Proto-Indo-European',
        form: '*bheu-',
        period: 'Prehistoric',
        meaning: 'to become, to grow',
      },
      { language: 'Proto-Germanic', form: '*beuną', period: 'c. 500 BC', meaning: 'to be' },
      { language: 'Old English', form: 'bēon', period: 'Before 12th century', meaning: 'to be' },
      {
        language: 'Middle English',
        form: 'been, be',
        period: '12th-15th century',
        meaning: 'to be',
      },
      { language: 'Modern English', form: 'be', period: '15th century', meaning: 'to be' },
    ],
    cognates: [
      { language: 'German', word: 'sein', meaning: 'to be' },
      { language: 'Dutch', word: 'zijn', meaning: 'to be' },
      { language: 'Swedish', word: 'vara', meaning: 'to be' },
      { language: 'Latin', word: 'fui', meaning: 'I was' },
    ],
    notes:
      'Irregular verb with forms am, is, are, was, were, been. From a root meaning "to grow" or "to become".',
  },

  word_have: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*habjaną',
        period: 'c. 500 BC',
        meaning: 'to have, to hold',
      },
      {
        language: 'Old English',
        form: 'habban',
        period: 'Before 12th century',
        meaning: 'to have',
      },
      {
        language: 'Middle English',
        form: 'haven, have',
        period: '12th-15th century',
        meaning: 'to have',
      },
      { language: 'Modern English', form: 'have', period: '15th century', meaning: 'to have' },
    ],
    cognates: [
      { language: 'German', word: 'haben', meaning: 'to have' },
      { language: 'Dutch', word: 'hebben', meaning: 'to have' },
      { language: 'Swedish', word: 'ha', meaning: 'to have' },
    ],
    notes: 'From a root meaning "to hold" or "to possess".',
  },

  word_do: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*dōną',
        period: 'c. 500 BC',
        meaning: 'to do, to place',
      },
      { language: 'Old English', form: 'dōn', period: 'Before 12th century', meaning: 'to do' },
      {
        language: 'Middle English',
        form: 'don, do',
        period: '12th-15th century',
        meaning: 'to do',
      },
      { language: 'Modern English', form: 'do', period: '15th century', meaning: 'to do' },
    ],
    cognates: [
      { language: 'German', word: 'tun', meaning: 'to do' },
      { language: 'Dutch', word: 'doen', meaning: 'to do' },
      { language: 'Swedish', word: 'göra', meaning: 'to do' },
    ],
    notes:
      'Irregular verb with forms do, does, did, done. From a root meaning "to place" or "to put".',
  },

  word_say: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*sagjaną', period: 'c. 500 BC', meaning: 'to say' },
      { language: 'Old English', form: 'secgan', period: 'Before 12th century', meaning: 'to say' },
      {
        language: 'Middle English',
        form: 'sayen, say',
        period: '12th-15th century',
        meaning: 'to say',
      },
      { language: 'Modern English', form: 'say', period: '15th century', meaning: 'to say' },
    ],
    cognates: [
      { language: 'German', word: 'sagen', meaning: 'to say' },
      { language: 'Dutch', word: 'zeggen', meaning: 'to say' },
      { language: 'Swedish', word: 'säga', meaning: 'to say' },
    ],
    notes: 'From a root meaning "to utter" or "to tell".',
  },

  word_get: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'geta', period: 'Viking age', meaning: 'to obtain, to beget' },
      {
        language: 'Middle English',
        form: 'geten, get',
        period: '13th-15th century',
        meaning: 'to get',
      },
      { language: 'Modern English', form: 'get', period: '15th century', meaning: 'to get' },
    ],
    cognates: [
      { language: 'German', word: 'bekommen', meaning: 'to get' },
      { language: 'Dutch', word: 'krijgen', meaning: 'to get' },
      { language: 'Swedish', word: 'få', meaning: 'to get' },
    ],
    notes: 'From Old Norse "geta" meaning "to obtain" or "to beget".',
  },

  word_know: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*knew-', period: 'c. 500 BC', meaning: 'to know' },
      {
        language: 'Old English',
        form: 'cnāwan',
        period: 'Before 12th century',
        meaning: 'to know',
      },
      {
        language: 'Middle English',
        form: 'knowen, know',
        period: '12th-15th century',
        meaning: 'to know',
      },
      { language: 'Modern English', form: 'know', period: '15th century', meaning: 'to know' },
    ],
    cognates: [
      { language: 'German', word: 'kennen', meaning: 'to know' },
      { language: 'Dutch', word: 'kennen', meaning: 'to know' },
      { language: 'Swedish', word: 'känna', meaning: 'to know' },
    ],
    notes:
      'Irregular verb with forms know, knows, knew, known. From a root meaning "to recognize" or "to perceive".',
  },

  word_take: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*tēkaną',
        period: 'c. 500 BC',
        meaning: 'to touch, to take',
      },
      {
        language: 'Old English',
        form: 'tācian',
        period: 'Before 12th century',
        meaning: 'to take',
      },
      {
        language: 'Middle English',
        form: 'taken, take',
        period: '12th-15th century',
        meaning: 'to take',
      },
      { language: 'Modern English', form: 'take', period: '15th century', meaning: 'to take' },
    ],
    cognates: [
      { language: 'German', word: 'nehmen', meaning: 'to take' },
      { language: 'Dutch', word: 'nemen', meaning: 'to take' },
      { language: 'Swedish', word: 'ta', meaning: 'to take' },
    ],
    notes: 'From a root meaning "to touch" or "to grasp".',
  },

  word_come: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*kwemaną', period: 'c. 500 BC', meaning: 'to come' },
      { language: 'Old English', form: 'cuman', period: 'Before 12th century', meaning: 'to come' },
      {
        language: 'Middle English',
        form: 'comen, come',
        period: '12th-15th century',
        meaning: 'to come',
      },
      { language: 'Modern English', form: 'come', period: '15th century', meaning: 'to come' },
    ],
    cognates: [
      { language: 'German', word: 'kommen', meaning: 'to come' },
      { language: 'Dutch', word: 'komen', meaning: 'to come' },
      { language: 'Swedish', word: 'komma', meaning: 'to come' },
    ],
    notes:
      'Irregular verb with forms come, comes, came, come. From a root meaning "to move toward".',
  },

  word_think: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*þankijaną', period: 'c. 500 BC', meaning: 'to think' },
      {
        language: 'Old English',
        form: 'þencan',
        period: 'Before 12th century',
        meaning: 'to think',
      },
      {
        language: 'Middle English',
        form: 'thinken, think',
        period: '12th-15th century',
        meaning: 'to think',
      },
      { language: 'Modern English', form: 'think', period: '15th century', meaning: 'to think' },
    ],
    cognates: [
      { language: 'German', word: 'denken', meaning: 'to think' },
      { language: 'Dutch', word: 'denken', meaning: 'to think' },
      { language: 'Swedish', word: 'tänka', meaning: 'to think' },
    ],
    notes: 'From a root meaning "to appear" or "to seem", later specialized to mental activity.',
  },

  word_look: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*lōkōną',
        period: 'c. 500 BC',
        meaning: 'to look, to see',
      },
      {
        language: 'Old English',
        form: 'lōcian',
        period: 'Before 12th century',
        meaning: 'to look',
      },
      {
        language: 'Middle English',
        form: 'looken, look',
        period: '12th-15th century',
        meaning: 'to look',
      },
      { language: 'Modern English', form: 'look', period: '15th century', meaning: 'to look' },
    ],
    cognates: [
      { language: 'German', word: 'schauen', meaning: 'to look' },
      { language: 'Dutch', word: 'kijken', meaning: 'to look' },
      { language: 'Swedish', word: 'titta', meaning: 'to look' },
    ],
    notes: 'From a root meaning "to see" or "to watch".',
  },

  word_want: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'vanta', period: 'Viking age', meaning: 'to lack, to want' },
      {
        language: 'Middle English',
        form: 'wanten, want',
        period: '13th-15th century',
        meaning: 'to want',
      },
      { language: 'Modern English', form: 'want', period: '15th century', meaning: 'to want' },
    ],
    cognates: [
      { language: 'German', word: 'wollen', meaning: 'to want' },
      { language: 'Dutch', word: 'willen', meaning: 'to want' },
      { language: 'Swedish', word: 'vilja', meaning: 'to want' },
    ],
    notes: 'From Old Norse "vanta" meaning "to lack", later specialized to desire.',
  },

  word_give: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*gebaną', period: 'c. 500 BC', meaning: 'to give' },
      {
        language: 'Old English',
        form: 'giefan',
        period: 'Before 12th century',
        meaning: 'to give',
      },
      {
        language: 'Middle English',
        form: 'given, give',
        period: '12th-15th century',
        meaning: 'to give',
      },
      { language: 'Modern English', form: 'give', period: '15th century', meaning: 'to give' },
    ],
    cognates: [
      { language: 'German', word: 'geben', meaning: 'to give' },
      { language: 'Dutch', word: 'geven', meaning: 'to give' },
      { language: 'Swedish', word: 'ge', meaning: 'to give' },
    ],
    notes:
      'Irregular verb with forms give, gives, gave, given. From a root meaning "to grant" or "to bestow".',
  },

  word_use: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'usus', period: 'Roman era', meaning: 'use, custom' },
      {
        language: 'Middle English',
        form: 'usen, use',
        period: '14th-15th century',
        meaning: 'to use',
      },
      { language: 'Modern English', form: 'use', period: '15th century', meaning: 'to use' },
    ],
    cognates: [
      { language: 'German', word: 'benutzen', meaning: 'to use' },
      { language: 'Dutch', word: 'gebruiken', meaning: 'to use' },
      { language: 'Swedish', word: 'använda', meaning: 'to use' },
      { language: 'French', word: 'user', meaning: 'to use' },
    ],
    notes: 'From Latin "usus" meaning "use" or "custom", via Old French.',
  },

  word_find: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*finþaną', period: 'c. 500 BC', meaning: 'to find' },
      {
        language: 'Old English',
        form: 'findan',
        period: 'Before 12th century',
        meaning: 'to find',
      },
      {
        language: 'Middle English',
        form: 'finden, find',
        period: '12th-15th century',
        meaning: 'to find',
      },
      { language: 'Modern English', form: 'find', period: '15th century', meaning: 'to find' },
    ],
    cognates: [
      { language: 'German', word: 'finden', meaning: 'to find' },
      { language: 'Dutch', word: 'vinden', meaning: 'to find' },
      { language: 'Swedish', word: 'hitta', meaning: 'to find' },
    ],
    notes:
      'Irregular verb with forms find, finds, found, found. From a root meaning "to encounter" or "to come upon".',
  },

  word_tell: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*taljaną',
        period: 'c. 500 BC',
        meaning: 'to count, to tell',
      },
      {
        language: 'Old English',
        form: 'tellan',
        period: 'Before 12th century',
        meaning: 'to count, to tell',
      },
      {
        language: 'Middle English',
        form: 'tellen, tell',
        period: '12th-15th century',
        meaning: 'to tell',
      },
      { language: 'Modern English', form: 'tell', period: '15th century', meaning: 'to tell' },
    ],
    cognates: [
      { language: 'German', word: 'erzählen', meaning: 'to tell' },
      { language: 'Dutch', word: 'vertellen', meaning: 'to tell' },
      { language: 'Swedish', word: 'berätta', meaning: 'to tell' },
    ],
    notes: 'Originally meant "to count", later specialized to "to narrate" or "to inform".',
  },

  word_ask: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*aiskōną',
        period: 'c. 500 BC',
        meaning: 'to ask, to request',
      },
      { language: 'Old English', form: 'āscian', period: 'Before 12th century', meaning: 'to ask' },
      {
        language: 'Middle English',
        form: 'asken, ask',
        period: '12th-15th century',
        meaning: 'to ask',
      },
      { language: 'Modern English', form: 'ask', period: '15th century', meaning: 'to ask' },
    ],
    cognates: [
      { language: 'German', word: 'fragen', meaning: 'to ask' },
      { language: 'Dutch', word: 'vragen', meaning: 'to ask' },
      { language: 'Swedish', word: 'fråga', meaning: 'to ask' },
    ],
    notes: 'From a root meaning "to request" or "to seek".',
  },

  word_work: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*werką', period: 'c. 500 BC', meaning: 'work, deed' },
      { language: 'Old English', form: 'weorc', period: 'Before 12th century', meaning: 'work' },
      {
        language: 'Middle English',
        form: 'worken, work',
        period: '12th-15th century',
        meaning: 'to work',
      },
      { language: 'Modern English', form: 'work', period: '15th century', meaning: 'to work' },
    ],
    cognates: [
      { language: 'German', word: 'arbeiten', meaning: 'to work' },
      { language: 'Dutch', word: 'werken', meaning: 'to work' },
      { language: 'Swedish', word: 'arbeta', meaning: 'to work' },
    ],
    notes: 'From a root meaning "to do" or "to act", specialized to labor.',
  },

  word_seem: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'sœma', period: 'Viking age', meaning: 'to conform, to seem' },
      {
        language: 'Middle English',
        form: 'semen, seem',
        period: '13th-15th century',
        meaning: 'to seem',
      },
      { language: 'Modern English', form: 'seem', period: '15th century', meaning: 'to seem' },
    ],
    cognates: [
      { language: 'German', word: 'scheinen', meaning: 'to seem' },
      { language: 'Dutch', word: 'lijken', meaning: 'to seem' },
      { language: 'Swedish', word: 'verka', meaning: 'to seem' },
    ],
    notes: 'From Old Norse meaning "to conform" or "to be fitting".',
  },

  word_feel: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*fōlijaną',
        period: 'c. 500 BC',
        meaning: 'to feel, to touch',
      },
      { language: 'Old English', form: 'fēlan', period: 'Before 12th century', meaning: 'to feel' },
      {
        language: 'Middle English',
        form: 'felen, feel',
        period: '12th-15th century',
        meaning: 'to feel',
      },
      { language: 'Modern English', form: 'feel', period: '15th century', meaning: 'to feel' },
    ],
    cognates: [
      { language: 'German', word: 'fühlen', meaning: 'to feel' },
      { language: 'Dutch', word: 'voelen', meaning: 'to feel' },
      { language: 'Swedish', word: 'känna', meaning: 'to feel' },
    ],
    notes: 'From a root meaning "to touch" or "to perceive by touch".',
  },

  word_try: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old French', form: 'trier', period: '13th century', meaning: 'to pick, to try' },
      {
        language: 'Middle English',
        form: 'trien, try',
        period: '13th-15th century',
        meaning: 'to try',
      },
      { language: 'Modern English', form: 'try', period: '15th century', meaning: 'to try' },
    ],
    cognates: [
      { language: 'German', word: 'versuchen', meaning: 'to try' },
      { language: 'Dutch', word: 'proberen', meaning: 'to try' },
      { language: 'Swedish', word: 'försöka', meaning: 'to try' },
    ],
    notes: 'From Old French "trier" meaning "to pick" or "to sort", specialized to "to attempt".',
  },

  word_leave: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*laibijaną',
        period: 'c. 500 BC',
        meaning: 'to leave, to remain',
      },
      {
        language: 'Old English',
        form: 'lǣfan',
        period: 'Before 12th century',
        meaning: 'to leave',
      },
      {
        language: 'Middle English',
        form: 'leven, leave',
        period: '12th-15th century',
        meaning: 'to leave',
      },
      { language: 'Modern English', form: 'leave', period: '15th century', meaning: 'to leave' },
    ],
    cognates: [
      { language: 'German', word: 'verlassen', meaning: 'to leave' },
      { language: 'Dutch', word: 'verlaten', meaning: 'to leave' },
      { language: 'Swedish', word: 'lämna', meaning: 'to leave' },
    ],
    notes: 'Originally meant "to remain" or "to bequeath", later specialized to "to depart".',
  },

  word_call: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'kalla', period: 'Viking age', meaning: 'to call, to name' },
      {
        language: 'Middle English',
        form: 'callen, call',
        period: '13th-15th century',
        meaning: 'to call',
      },
      { language: 'Modern English', form: 'call', period: '15th century', meaning: 'to call' },
    ],
    cognates: [
      { language: 'German', word: 'rufen', meaning: 'to call' },
      { language: 'Dutch', word: 'roepen', meaning: 'to call' },
      { language: 'Swedish', word: 'ropa', meaning: 'to call' },
    ],
    notes: 'From Old Norse "kalla" meaning "to call" or "to name".',
  },

  word_help: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*helpōną', period: 'c. 500 BC', meaning: 'to help' },
      {
        language: 'Old English',
        form: 'helpan',
        period: 'Before 12th century',
        meaning: 'to help',
      },
      {
        language: 'Middle English',
        form: 'helpen, help',
        period: '12th-15th century',
        meaning: 'to help',
      },
      { language: 'Modern English', form: 'help', period: '15th century', meaning: 'to help' },
    ],
    cognates: [
      { language: 'German', word: 'helfen', meaning: 'to help' },
      { language: 'Dutch', word: 'helpen', meaning: 'to help' },
      { language: 'Swedish', word: 'hjälpa', meaning: 'to help' },
    ],
    notes: 'From a root meaning "to aid" or "to assist".',
  },

  word_turn: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old French', form: 'tourner', period: '13th century', meaning: 'to turn' },
      {
        language: 'Middle English',
        form: 'turnen, turn',
        period: '13th-15th century',
        meaning: 'to turn',
      },
      { language: 'Modern English', form: 'turn', period: '15th century', meaning: 'to turn' },
    ],
    cognates: [
      { language: 'German', word: 'drehen', meaning: 'to turn' },
      { language: 'Dutch', word: 'draaien', meaning: 'to turn' },
      { language: 'Swedish', word: 'vända', meaning: 'to turn' },
    ],
    notes: 'From Old French "tourner" meaning "to rotate" or "to spin".',
  },

  word_start: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Old French',
        form: 'estartir',
        period: '14th century',
        meaning: 'to startle, to start',
      },
      {
        language: 'Middle English',
        form: 'starten, start',
        period: '14th-15th century',
        meaning: 'to start',
      },
      { language: 'Modern English', form: 'start', period: '15th century', meaning: 'to start' },
    ],
    cognates: [
      { language: 'German', word: 'starten', meaning: 'to start' },
      { language: 'Dutch', word: 'starten', meaning: 'to start' },
      { language: 'Swedish', word: 'starta', meaning: 'to start' },
    ],
    notes: 'From Old French meaning "to startle" or "to jump up", specialized to "to begin".',
  },

  word_show: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*skawijaną',
        period: 'c. 500 BC',
        meaning: 'to show, to see',
      },
      {
        language: 'Old English',
        form: 'scēawian',
        period: 'Before 12th century',
        meaning: 'to look at, to show',
      },
      {
        language: 'Middle English',
        form: 'showen, show',
        period: '12th-15th century',
        meaning: 'to show',
      },
      { language: 'Modern English', form: 'show', period: '15th century', meaning: 'to show' },
    ],
    cognates: [
      { language: 'German', word: 'zeigen', meaning: 'to show' },
      { language: 'Dutch', word: 'tonen', meaning: 'to show' },
      { language: 'Swedish', word: 'visa', meaning: 'to show' },
    ],
    notes: 'Originally meant "to look at" or "to behold", later specialized to "to display".',
  },

  word_hear: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*hauzijaną', period: 'c. 500 BC', meaning: 'to hear' },
      {
        language: 'Old English',
        form: 'hīeran',
        period: 'Before 12th century',
        meaning: 'to hear',
      },
      {
        language: 'Middle English',
        form: 'heren, hear',
        period: '12th-15th century',
        meaning: 'to hear',
      },
      { language: 'Modern English', form: 'hear', period: '15th century', meaning: 'to hear' },
    ],
    cognates: [
      { language: 'German', word: 'hören', meaning: 'to hear' },
      { language: 'Dutch', word: 'horen', meaning: 'to hear' },
      { language: 'Swedish', word: 'höra', meaning: 'to hear' },
    ],
    notes:
      'Irregular verb with forms hear, hears, heard, heard. From a root meaning "to perceive sound".',
  },

  word_play: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*pleganą',
        period: 'c. 500 BC',
        meaning: 'to play, to exercise',
      },
      {
        language: 'Old English',
        form: 'plegan',
        period: 'Before 12th century',
        meaning: 'to play',
      },
      {
        language: 'Middle English',
        form: 'playen, play',
        period: '12th-15th century',
        meaning: 'to play',
      },
      { language: 'Modern English', form: 'play', period: '15th century', meaning: 'to play' },
    ],
    cognates: [
      { language: 'German', word: 'spielen', meaning: 'to play' },
      { language: 'Dutch', word: 'spelen', meaning: 'to play' },
      { language: 'Swedish', word: 'spela', meaning: 'to play' },
    ],
    notes: 'From a root meaning "to move" or "to be active", specialized to recreation.',
  },

  word_run: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*rannijaną', period: 'c. 500 BC', meaning: 'to run' },
      { language: 'Old English', form: 'rinnan', period: 'Before 12th century', meaning: 'to run' },
      {
        language: 'Middle English',
        form: 'rinnen, run',
        period: '12th-15th century',
        meaning: 'to run',
      },
      { language: 'Modern English', form: 'run', period: '15th century', meaning: 'to run' },
    ],
    cognates: [
      { language: 'German', word: 'rennen', meaning: 'to run' },
      { language: 'Dutch', word: 'rennen', meaning: 'to run' },
      { language: 'Swedish', word: 'springa', meaning: 'to run' },
    ],
    notes:
      'Irregular verb with forms run, runs, ran, run. From a root meaning "to flow" or "to move quickly".',
  },

  word_move: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'movere', period: 'Roman era', meaning: 'to move' },
      {
        language: 'Middle English',
        form: 'moven, move',
        period: '14th-15th century',
        meaning: 'to move',
      },
      { language: 'Modern English', form: 'move', period: '15th century', meaning: 'to move' },
    ],
    cognates: [
      { language: 'German', word: 'bewegen', meaning: 'to move' },
      { language: 'Dutch', word: 'bewegen', meaning: 'to move' },
      { language: 'Swedish', word: 'röra', meaning: 'to move' },
      { language: 'French', word: 'mouvoir', meaning: 'to move' },
    ],
    notes: 'From Latin "movere" meaning "to move", via Old French.',
  },

  word_live: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*libaną',
        period: 'c. 500 BC',
        meaning: 'to live, to remain',
      },
      {
        language: 'Old English',
        form: 'līfian',
        period: 'Before 12th century',
        meaning: 'to live',
      },
      {
        language: 'Middle English',
        form: 'liven, live',
        period: '12th-15th century',
        meaning: 'to live',
      },
      { language: 'Modern English', form: 'live', period: '15th century', meaning: 'to live' },
    ],
    cognates: [
      { language: 'German', word: 'leben', meaning: 'to live' },
      { language: 'Dutch', word: 'leven', meaning: 'to live' },
      { language: 'Swedish', word: 'leva', meaning: 'to live' },
    ],
    notes: 'From a root meaning "to remain" or "to stay alive".',
  },

  word_believe: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*ga-laubjaną',
        period: 'c. 500 BC',
        meaning: 'to believe, to trust',
      },
      {
        language: 'Old English',
        form: 'gelyfan',
        period: 'Before 12th century',
        meaning: 'to believe',
      },
      {
        language: 'Middle English',
        form: 'beliven, believe',
        period: '12th-15th century',
        meaning: 'to believe',
      },
      {
        language: 'Modern English',
        form: 'believe',
        period: '15th century',
        meaning: 'to believe',
      },
    ],
    cognates: [
      { language: 'German', word: 'glauben', meaning: 'to believe' },
      { language: 'Dutch', word: 'geloven', meaning: 'to believe' },
      { language: 'Swedish', word: 'tro', meaning: 'to believe' },
    ],
    notes: 'From a compound meaning "to hold dear" or "to trust".',
  },

  word_hold: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*haldaną',
        period: 'c. 500 BC',
        meaning: 'to hold, to keep',
      },
      {
        language: 'Old English',
        form: 'healdan',
        period: 'Before 12th century',
        meaning: 'to hold',
      },
      {
        language: 'Middle English',
        form: 'holden, hold',
        period: '12th-15th century',
        meaning: 'to hold',
      },
      { language: 'Modern English', form: 'hold', period: '15th century', meaning: 'to hold' },
    ],
    cognates: [
      { language: 'German', word: 'halten', meaning: 'to hold' },
      { language: 'Dutch', word: 'houden', meaning: 'to hold' },
      { language: 'Swedish', word: 'hålla', meaning: 'to hold' },
    ],
    notes:
      'Irregular verb with forms hold, holds, held, held. From a root meaning "to guard" or "to keep".',
  },

  word_bring: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*brenganą', period: 'c. 500 BC', meaning: 'to bring' },
      {
        language: 'Old English',
        form: 'bringan',
        period: 'Before 12th century',
        meaning: 'to bring',
      },
      {
        language: 'Middle English',
        form: 'bringen, bring',
        period: '12th-15th century',
        meaning: 'to bring',
      },
      { language: 'Modern English', form: 'bring', period: '15th century', meaning: 'to bring' },
    ],
    cognates: [
      { language: 'German', word: 'bringen', meaning: 'to bring' },
      { language: 'Dutch', word: 'brengen', meaning: 'to bring' },
      { language: 'Swedish', word: 'bringa', meaning: 'to bring' },
    ],
    notes:
      'Irregular verb with forms bring, brings, brought, brought. From a root meaning "to carry" or "to transport".',
  },

  word_happen: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old Norse',
        form: 'happa',
        period: 'Viking age',
        meaning: 'to happen, to have good luck',
      },
      {
        language: 'Middle English',
        form: 'happen, hap',
        period: '13th-15th century',
        meaning: 'to happen',
      },
      { language: 'Modern English', form: 'happen', period: '15th century', meaning: 'to happen' },
    ],
    cognates: [
      { language: 'German', word: 'geschehen', meaning: 'to happen' },
      { language: 'Dutch', word: 'gebeuren', meaning: 'to happen' },
      { language: 'Swedish', word: 'hända', meaning: 'to happen' },
    ],
    notes: 'From Old Norse "happa" meaning "to have good luck", later generalized to "to occur".',
  },

  word_write: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*wrītaną',
        period: 'c. 500 BC',
        meaning: 'to write, to scratch',
      },
      {
        language: 'Old English',
        form: 'wrītan',
        period: 'Before 12th century',
        meaning: 'to write',
      },
      {
        language: 'Middle English',
        form: 'writen, write',
        period: '12th-15th century',
        meaning: 'to write',
      },
      { language: 'Modern English', form: 'write', period: '15th century', meaning: 'to write' },
    ],
    cognates: [
      { language: 'German', word: 'schreiben', meaning: 'to write' },
      { language: 'Dutch', word: 'schrijven', meaning: 'to write' },
      { language: 'Swedish', word: 'skriva', meaning: 'to write' },
    ],
    notes:
      'Irregular verb with forms write, writes, wrote, written. Originally meant "to scratch" or "to carve".',
  },

  word_provide: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 15th century',
    timeline: [
      {
        language: 'Latin',
        form: 'providere',
        period: 'Roman era',
        meaning: 'to foresee, to provide',
      },
      {
        language: 'Middle English',
        form: 'providen, provide',
        period: '15th century',
        meaning: 'to provide',
      },
      {
        language: 'Modern English',
        form: 'provide',
        period: '16th century',
        meaning: 'to provide',
      },
    ],
    cognates: [
      { language: 'German', word: 'versorgen', meaning: 'to provide' },
      { language: 'Dutch', word: 'voorzien', meaning: 'to provide' },
      { language: 'Swedish', word: 'tillhandahålla', meaning: 'to provide' },
    ],
    notes: 'From Latin "providere" meaning "to foresee" or "to prepare in advance".',
  },

  word_sit: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*sittjaną', period: 'c. 500 BC', meaning: 'to sit' },
      { language: 'Old English', form: 'sittan', period: 'Before 12th century', meaning: 'to sit' },
      {
        language: 'Middle English',
        form: 'sitten, sit',
        period: '12th-15th century',
        meaning: 'to sit',
      },
      { language: 'Modern English', form: 'sit', period: '15th century', meaning: 'to sit' },
    ],
    cognates: [
      { language: 'German', word: 'sitzen', meaning: 'to sit' },
      { language: 'Dutch', word: 'zitten', meaning: 'to sit' },
      { language: 'Swedish', word: 'sitta', meaning: 'to sit' },
    ],
    notes:
      'Irregular verb with forms sit, sits, sat, sat. From a root meaning "to settle" or "to occupy a place".',
  },

  word_stand: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*standaną', period: 'c. 500 BC', meaning: 'to stand' },
      {
        language: 'Old English',
        form: 'standan',
        period: 'Before 12th century',
        meaning: 'to stand',
      },
      {
        language: 'Middle English',
        form: 'standen, stand',
        period: '12th-15th century',
        meaning: 'to stand',
      },
      { language: 'Modern English', form: 'stand', period: '15th century', meaning: 'to stand' },
    ],
    cognates: [
      { language: 'German', word: 'stehen', meaning: 'to stand' },
      { language: 'Dutch', word: 'staan', meaning: 'to stand' },
      { language: 'Swedish', word: 'stå', meaning: 'to stand' },
    ],
    notes:
      'Irregular verb with forms stand, stands, stood, stood. From a root meaning "to be upright" or "to remain".',
  },

  word_lose: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*lausijaną',
        period: 'c. 500 BC',
        meaning: 'to lose, to perish',
      },
      {
        language: 'Old English',
        form: 'losian',
        period: 'Before 12th century',
        meaning: 'to lose',
      },
      {
        language: 'Middle English',
        form: 'losen, lose',
        period: '12th-15th century',
        meaning: 'to lose',
      },
      { language: 'Modern English', form: 'lose', period: '15th century', meaning: 'to lose' },
    ],
    cognates: [
      { language: 'German', word: 'verlieren', meaning: 'to lose' },
      { language: 'Dutch', word: 'verliezen', meaning: 'to lose' },
      { language: 'Swedish', word: 'förlora', meaning: 'to lose' },
    ],
    notes:
      'Irregular verb with forms lose, loses, lost, lost. From a root meaning "to perish" or "to destroy".',
  },

  word_pay: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old French',
        form: 'paier',
        period: '13th century',
        meaning: 'to pay, to satisfy',
      },
      {
        language: 'Middle English',
        form: 'payen, pay',
        period: '13th-15th century',
        meaning: 'to pay',
      },
      { language: 'Modern English', form: 'pay', period: '15th century', meaning: 'to pay' },
    ],
    cognates: [
      { language: 'German', word: 'bezahlen', meaning: 'to pay' },
      { language: 'Dutch', word: 'betalen', meaning: 'to pay' },
      { language: 'Swedish', word: 'betala', meaning: 'to pay' },
    ],
    notes:
      'From Old French "paier" meaning "to satisfy" or "to pacify", specialized to monetary payment.',
  },

  word_meet: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'mētan',
        period: 'Before 12th century',
        meaning: 'to meet, to find',
      },
      {
        language: 'Middle English',
        form: 'meten, meet',
        period: '12th-15th century',
        meaning: 'to meet',
      },
      { language: 'Modern English', form: 'meet', period: '15th century', meaning: 'to meet' },
    ],
    cognates: [
      { language: 'German', word: 'treffen', meaning: 'to meet' },
      { language: 'Dutch', word: 'ontmoeten', meaning: 'to meet' },
      { language: 'Swedish', word: 'träffa', meaning: 'to meet' },
    ],
    notes:
      'Irregular verb with forms meet, meets, met, met. From a root meaning "to come upon" or "to encounter".',
  },

  word_include: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 15th century',
    timeline: [
      {
        language: 'Latin',
        form: 'inclaudere',
        period: 'Roman era',
        meaning: 'to enclose, to include',
      },
      {
        language: 'Middle English',
        form: 'includen, include',
        period: '15th century',
        meaning: 'to include',
      },
      {
        language: 'Modern English',
        form: 'include',
        period: '16th century',
        meaning: 'to include',
      },
    ],
    cognates: [
      { language: 'German', word: 'einschließen', meaning: 'to include' },
      { language: 'Dutch', word: 'inclusief', meaning: 'including' },
      { language: 'Swedish', word: 'inkludera', meaning: 'to include' },
    ],
    notes: 'From Latin "inclaudere" meaning "to shut in" or "to enclose".',
  },

  word_continue: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'continuare', period: 'Roman era', meaning: 'to continue' },
      {
        language: 'Middle English',
        form: 'continuen, continue',
        period: '14th-15th century',
        meaning: 'to continue',
      },
      {
        language: 'Modern English',
        form: 'continue',
        period: '15th century',
        meaning: 'to continue',
      },
    ],
    cognates: [
      { language: 'German', word: 'fortsetzen', meaning: 'to continue' },
      { language: 'Dutch', word: 'voortzetten', meaning: 'to continue' },
      { language: 'Swedish', word: 'fortsätta', meaning: 'to continue' },
    ],
    notes: 'From Latin "continuare" meaning "to hold together" or "to prolong".',
  },

  word_set: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*satijaną',
        period: 'c. 500 BC',
        meaning: 'to set, to place',
      },
      { language: 'Old English', form: 'settan', period: 'Before 12th century', meaning: 'to set' },
      {
        language: 'Middle English',
        form: 'setten, set',
        period: '12th-15th century',
        meaning: 'to set',
      },
      { language: 'Modern English', form: 'set', period: '15th century', meaning: 'to set' },
    ],
    cognates: [
      { language: 'German', word: 'setzen', meaning: 'to set' },
      { language: 'Dutch', word: 'zetten', meaning: 'to set' },
      { language: 'Swedish', word: 'sätta', meaning: 'to set' },
    ],
    notes:
      'Irregular verb with forms set, sets, set, set. From a root meaning "to cause to sit" or "to place".',
  },

  word_learn: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*liznōną',
        period: 'c. 500 BC',
        meaning: 'to learn, to know',
      },
      {
        language: 'Old English',
        form: 'leornian',
        period: 'Before 12th century',
        meaning: 'to learn',
      },
      {
        language: 'Middle English',
        form: 'lernen, learn',
        period: '12th-15th century',
        meaning: 'to learn',
      },
      { language: 'Modern English', form: 'learn', period: '15th century', meaning: 'to learn' },
    ],
    cognates: [
      { language: 'German', word: 'lernen', meaning: 'to learn' },
      { language: 'Dutch', word: 'leren', meaning: 'to learn' },
      { language: 'Swedish', word: 'lära', meaning: 'to learn' },
    ],
    notes: 'From a root meaning "to know" or "to find out".',
  },

  word_change: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old French',
        form: 'changier',
        period: '13th century',
        meaning: 'to change, to exchange',
      },
      {
        language: 'Middle English',
        form: 'changen, change',
        period: '13th-15th century',
        meaning: 'to change',
      },
      { language: 'Modern English', form: 'change', period: '15th century', meaning: 'to change' },
    ],
    cognates: [
      { language: 'German', word: 'ändern', meaning: 'to change' },
      { language: 'Dutch', word: 'veranderen', meaning: 'to change' },
      { language: 'Swedish', word: 'ändra', meaning: 'to change' },
    ],
    notes: 'From Old French "changier" meaning "to exchange" or "to barter".',
  },

  word_lead: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*laidijaną',
        period: 'c. 500 BC',
        meaning: 'to lead, to guide',
      },
      { language: 'Old English', form: 'lǣdan', period: 'Before 12th century', meaning: 'to lead' },
      {
        language: 'Middle English',
        form: 'leden, lead',
        period: '12th-15th century',
        meaning: 'to lead',
      },
      { language: 'Modern English', form: 'lead', period: '15th century', meaning: 'to lead' },
    ],
    cognates: [
      { language: 'German', word: 'leiten', meaning: 'to lead' },
      { language: 'Dutch', word: 'leiden', meaning: 'to lead' },
      { language: 'Swedish', word: 'leda', meaning: 'to lead' },
    ],
    notes:
      'Irregular verb with forms lead, leads, led, led. From a root meaning "to go" or "to travel".',
  },

  word_understand: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'understandan',
        period: 'Before 12th century',
        meaning: 'to understand',
      },
      {
        language: 'Middle English',
        form: 'understanden, understand',
        period: '12th-15th century',
        meaning: 'to understand',
      },
      {
        language: 'Modern English',
        form: 'understand',
        period: '15th century',
        meaning: 'to understand',
      },
    ],
    cognates: [
      { language: 'German', word: 'verstehen', meaning: 'to understand' },
      { language: 'Dutch', word: 'begrijpen', meaning: 'to understand' },
      { language: 'Swedish', word: 'förstå', meaning: 'to understand' },
    ],
    notes: 'Compound of "under" + "stand", literally meaning "to stand among" or "to grasp".',
  },

  word_watch: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*wakōną',
        period: 'c. 500 BC',
        meaning: 'to watch, to be awake',
      },
      {
        language: 'Old English',
        form: 'wæccan',
        period: 'Before 12th century',
        meaning: 'to watch',
      },
      {
        language: 'Middle English',
        form: 'watchen, watch',
        period: '12th-15th century',
        meaning: 'to watch',
      },
      { language: 'Modern English', form: 'watch', period: '15th century', meaning: 'to watch' },
    ],
    cognates: [
      { language: 'German', word: 'beobachten', meaning: 'to watch' },
      { language: 'Dutch', word: 'kijken', meaning: 'to watch' },
      { language: 'Swedish', word: 'titta', meaning: 'to watch' },
    ],
    notes: 'From a root meaning "to be awake" or "to stay alert".',
  },

  word_follow: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'folgian',
        period: 'Before 12th century',
        meaning: 'to follow',
      },
      {
        language: 'Middle English',
        form: 'folwen, follow',
        period: '12th-15th century',
        meaning: 'to follow',
      },
      { language: 'Modern English', form: 'follow', period: '15th century', meaning: 'to follow' },
    ],
    cognates: [
      { language: 'German', word: 'folgen', meaning: 'to follow' },
      { language: 'Dutch', word: 'volgen', meaning: 'to follow' },
      { language: 'Swedish', word: 'följa', meaning: 'to follow' },
    ],
    notes: 'From a root meaning "to go after" or "to pursue".',
  },

  word_stop: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Old French',
        form: 'estopper',
        period: '14th century',
        meaning: 'to stop, to plug',
      },
      {
        language: 'Middle English',
        form: 'stoppen, stop',
        period: '14th-15th century',
        meaning: 'to stop',
      },
      { language: 'Modern English', form: 'stop', period: '15th century', meaning: 'to stop' },
    ],
    cognates: [
      { language: 'German', word: 'stoppen', meaning: 'to stop' },
      { language: 'Dutch', word: 'stoppen', meaning: 'to stop' },
      { language: 'Swedish', word: 'stoppa', meaning: 'to stop' },
    ],
    notes: 'From Old French "estopper" meaning "to plug" or "to block".',
  },

  word_create: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 15th century',
    timeline: [
      { language: 'Latin', form: 'creare', period: 'Roman era', meaning: 'to create, to produce' },
      {
        language: 'Middle English',
        form: 'createn, create',
        period: '15th century',
        meaning: 'to create',
      },
      { language: 'Modern English', form: 'create', period: '16th century', meaning: 'to create' },
    ],
    cognates: [
      { language: 'German', word: 'erschaffen', meaning: 'to create' },
      { language: 'Dutch', word: 'creëren', meaning: 'to create' },
      { language: 'Swedish', word: 'skapa', meaning: 'to create' },
    ],
    notes: 'From Latin "creare" meaning "to produce" or "to bring into being".',
  },

  word_speak: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*sprekaną', period: 'c. 500 BC', meaning: 'to speak' },
      {
        language: 'Old English',
        form: 'sprecan',
        period: 'Before 12th century',
        meaning: 'to speak',
      },
      {
        language: 'Middle English',
        form: 'speaken, speak',
        period: '12th-15th century',
        meaning: 'to speak',
      },
      { language: 'Modern English', form: 'speak', period: '15th century', meaning: 'to speak' },
    ],
    cognates: [
      { language: 'German', word: 'sprechen', meaning: 'to speak' },
      { language: 'Dutch', word: 'spreken', meaning: 'to speak' },
      { language: 'Swedish', word: 'tala', meaning: 'to speak' },
    ],
    notes:
      'Irregular verb with forms speak, speaks, spoke, spoken. From a root meaning "to utter" or "to make noise".',
  },

  word_read: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*rēdaną',
        period: 'c. 500 BC',
        meaning: 'to advise, to read',
      },
      {
        language: 'Old English',
        form: 'rǣdan',
        period: 'Before 12th century',
        meaning: 'to read, to advise',
      },
      {
        language: 'Middle English',
        form: 'reden, read',
        period: '12th-15th century',
        meaning: 'to read',
      },
      { language: 'Modern English', form: 'read', period: '15th century', meaning: 'to read' },
    ],
    cognates: [
      { language: 'German', word: 'lesen', meaning: 'to read' },
      { language: 'Dutch', word: 'lezen', meaning: 'to read' },
      { language: 'Swedish', word: 'läsa', meaning: 'to read' },
    ],
    notes:
      'Irregular verb with forms read, reads, read, read. Originally meant "to advise" or "to counsel".',
  },

  word_spend: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old French',
        form: 'despendre',
        period: '13th century',
        meaning: 'to spend, to weigh out',
      },
      {
        language: 'Middle English',
        form: 'spenden, spend',
        period: '13th-15th century',
        meaning: 'to spend',
      },
      { language: 'Modern English', form: 'spend', period: '15th century', meaning: 'to spend' },
    ],
    cognates: [
      { language: 'German', word: 'ausgeben', meaning: 'to spend' },
      { language: 'Dutch', word: 'uitgeven', meaning: 'to spend' },
      { language: 'Swedish', word: 'spendera', meaning: 'to spend' },
    ],
    notes: 'From Old French "despendre" meaning "to weigh out" or "to distribute".',
  },

  word_grow: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*grōaną', period: 'c. 500 BC', meaning: 'to grow' },
      {
        language: 'Old English',
        form: 'grōwan',
        period: 'Before 12th century',
        meaning: 'to grow',
      },
      {
        language: 'Middle English',
        form: 'growen, grow',
        period: '12th-15th century',
        meaning: 'to grow',
      },
      { language: 'Modern English', form: 'grow', period: '15th century', meaning: 'to grow' },
    ],
    cognates: [
      { language: 'German', word: 'wachsen', meaning: 'to grow' },
      { language: 'Dutch', word: 'groeien', meaning: 'to grow' },
      { language: 'Swedish', word: 'växa', meaning: 'to grow' },
    ],
    notes:
      'Irregular verb with forms grow, grows, grew, grown. From a root meaning "to become green" or "to flourish".',
  },

  word_open: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*upaną', period: 'c. 500 BC', meaning: 'to open' },
      {
        language: 'Old English',
        form: 'openian',
        period: 'Before 12th century',
        meaning: 'to open',
      },
      {
        language: 'Middle English',
        form: 'openen, open',
        period: '12th-15th century',
        meaning: 'to open',
      },
      { language: 'Modern English', form: 'open', period: '15th century', meaning: 'to open' },
    ],
    cognates: [
      { language: 'German', word: 'öffnen', meaning: 'to open' },
      { language: 'Dutch', word: 'openen', meaning: 'to open' },
      { language: 'Swedish', word: 'öppna', meaning: 'to open' },
    ],
    notes: 'From a root meaning "up" or "open", indicating removal of barriers.',
  },

  word_walk: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*walkaną',
        period: 'c. 500 BC',
        meaning: 'to walk, to roll',
      },
      {
        language: 'Old English',
        form: 'wealcan',
        period: 'Before 12th century',
        meaning: 'to walk, to roll',
      },
      {
        language: 'Middle English',
        form: 'walken, walk',
        period: '12th-15th century',
        meaning: 'to walk',
      },
      { language: 'Modern English', form: 'walk', period: '15th century', meaning: 'to walk' },
    ],
    cognates: [
      { language: 'German', word: 'wandern', meaning: 'to walk' },
      { language: 'Dutch', word: 'wandelen', meaning: 'to walk' },
      { language: 'Swedish', word: 'vandra', meaning: 'to walk' },
    ],
    notes: 'Originally meant "to roll" or "to toss", specialized to "to move on foot".',
  },

  word_win: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*winnaną',
        period: 'c. 500 BC',
        meaning: 'to win, to strive',
      },
      {
        language: 'Old English',
        form: 'winnan',
        period: 'Before 12th century',
        meaning: 'to win, to struggle',
      },
      {
        language: 'Middle English',
        form: 'winnen, win',
        period: '12th-15th century',
        meaning: 'to win',
      },
      { language: 'Modern English', form: 'win', period: '15th century', meaning: 'to win' },
    ],
    cognates: [
      { language: 'German', word: 'gewinnen', meaning: 'to win' },
      { language: 'Dutch', word: 'winnen', meaning: 'to win' },
      { language: 'Swedish', word: 'vinna', meaning: 'to win' },
    ],
    notes:
      'Irregular verb with forms win, wins, won, won. From a root meaning "to strive" or "to struggle".',
  },

  word_teach: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*taikijaną',
        period: 'c. 500 BC',
        meaning: 'to show, to teach',
      },
      {
        language: 'Old English',
        form: 'tǣcan',
        period: 'Before 12th century',
        meaning: 'to teach',
      },
      {
        language: 'Middle English',
        form: 'techen, teach',
        period: '12th-15th century',
        meaning: 'to teach',
      },
      { language: 'Modern English', form: 'teach', period: '15th century', meaning: 'to teach' },
    ],
    cognates: [
      { language: 'German', word: 'lehren', meaning: 'to teach' },
      { language: 'Dutch', word: 'leren', meaning: 'to teach' },
      { language: 'Swedish', word: 'lära ut', meaning: 'to teach' },
    ],
    notes: 'From a root meaning "to show" or "to point out".',
  },

  word_offer: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'offerre', period: 'Roman era', meaning: 'to offer, to present' },
      {
        language: 'Middle English',
        form: 'offren, offer',
        period: '14th-15th century',
        meaning: 'to offer',
      },
      { language: 'Modern English', form: 'offer', period: '15th century', meaning: 'to offer' },
    ],
    cognates: [
      { language: 'German', word: 'anbieten', meaning: 'to offer' },
      { language: 'Dutch', word: 'aanbieden', meaning: 'to offer' },
      { language: 'Swedish', word: 'erbjuda', meaning: 'to offer' },
    ],
    notes: 'From Latin "offerre" meaning "to present" or "to bring forward".',
  },

  word_remember: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Latin',
        form: 'rememorari',
        period: 'Roman era',
        meaning: 'to remember, to recall',
      },
      {
        language: 'Middle English',
        form: 'rememberen, remember',
        period: '14th-15th century',
        meaning: 'to remember',
      },
      {
        language: 'Modern English',
        form: 'remember',
        period: '15th century',
        meaning: 'to remember',
      },
    ],
    cognates: [
      { language: 'German', word: 'erinnern', meaning: 'to remember' },
      { language: 'Dutch', word: 'herinneren', meaning: 'to remember' },
      { language: 'Swedish', word: 'komma ihåg', meaning: 'to remember' },
    ],
    notes: 'From Latin "rememorari" meaning "to recall to mind".',
  },

  word_love: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*lubōną',
        period: 'c. 500 BC',
        meaning: 'to love, to desire',
      },
      {
        language: 'Old English',
        form: 'lufian',
        period: 'Before 12th century',
        meaning: 'to love',
      },
      {
        language: 'Middle English',
        form: 'loven, love',
        period: '12th-15th century',
        meaning: 'to love',
      },
      { language: 'Modern English', form: 'love', period: '15th century', meaning: 'to love' },
    ],
    cognates: [
      { language: 'German', word: 'lieben', meaning: 'to love' },
      { language: 'Dutch', word: 'liefhebben', meaning: 'to love' },
      { language: 'Swedish', word: 'älska', meaning: 'to love' },
    ],
    notes: 'From a root meaning "to desire" or "to hold dear".',
  },

  word_consider: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Latin',
        form: 'considerare',
        period: 'Roman era',
        meaning: 'to consider, to examine',
      },
      {
        language: 'Middle English',
        form: 'consideren, consider',
        period: '14th-15th century',
        meaning: 'to consider',
      },
      {
        language: 'Modern English',
        form: 'consider',
        period: '15th century',
        meaning: 'to consider',
      },
    ],
    cognates: [
      { language: 'German', word: 'erwägen', meaning: 'to consider' },
      { language: 'Dutch', word: 'overwegen', meaning: 'to consider' },
      { language: 'Swedish', word: 'överväga', meaning: 'to consider' },
    ],
    notes: 'From Latin "considerare" meaning "to examine closely" or "to observe with the stars".',
  },

  word_appear: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Latin',
        form: 'apparere',
        period: 'Roman era',
        meaning: 'to appear, to become visible',
      },
      {
        language: 'Middle English',
        form: 'apparen, appear',
        period: '14th-15th century',
        meaning: 'to appear',
      },
      { language: 'Modern English', form: 'appear', period: '15th century', meaning: 'to appear' },
    ],
    cognates: [
      { language: 'German', word: 'erscheinen', meaning: 'to appear' },
      { language: 'Dutch', word: 'verschijnen', meaning: 'to appear' },
      { language: 'Swedish', word: 'uppträda', meaning: 'to appear' },
    ],
    notes: 'From Latin "apparere" meaning "to come into view" or "to become visible".',
  },

  word_buy: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      { language: 'Old English', form: 'bycgan', period: 'Before 12th century', meaning: 'to buy' },
      {
        language: 'Middle English',
        form: 'buggen, buy',
        period: '12th-15th century',
        meaning: 'to buy',
      },
      { language: 'Modern English', form: 'buy', period: '15th century', meaning: 'to buy' },
    ],
    cognates: [
      { language: 'German', word: 'kaufen', meaning: 'to buy' },
      { language: 'Dutch', word: 'kopen', meaning: 'to buy' },
      { language: 'Swedish', word: 'köpa', meaning: 'to buy' },
    ],
    notes:
      'Irregular verb with forms buy, buys, bought, bought. From a root meaning "to purchase" or "to acquire".',
  },

  word_wait: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'veita', period: 'Viking age', meaning: 'to watch, to wait' },
      {
        language: 'Middle English',
        form: 'waiten, wait',
        period: '13th-15th century',
        meaning: 'to wait',
      },
      { language: 'Modern English', form: 'wait', period: '15th century', meaning: 'to wait' },
    ],
    cognates: [
      { language: 'German', word: 'warten', meaning: 'to wait' },
      { language: 'Dutch', word: 'wachten', meaning: 'to wait' },
      { language: 'Swedish', word: 'vänta', meaning: 'to wait' },
    ],
    notes: 'From Old Norse meaning "to watch" or "to stay in one place".',
  },

  word_serve: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Latin', form: 'servire', period: 'Roman era', meaning: 'to serve' },
      {
        language: 'Middle English',
        form: 'serven, serve',
        period: '13th-15th century',
        meaning: 'to serve',
      },
      { language: 'Modern English', form: 'serve', period: '15th century', meaning: 'to serve' },
    ],
    cognates: [
      { language: 'German', word: 'dienen', meaning: 'to serve' },
      { language: 'Dutch', word: 'dienen', meaning: 'to serve' },
      { language: 'Swedish', word: 'tjäna', meaning: 'to serve' },
    ],
    notes: 'From Latin "servire" meaning "to be a slave" or "to be in service".',
  },

  word_die: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*swertijaną', period: 'c. 500 BC', meaning: 'to die' },
      {
        language: 'Old English',
        form: 'steorfan',
        period: 'Before 12th century',
        meaning: 'to die',
      },
      {
        language: 'Middle English',
        form: 'dien, die',
        period: '12th-15th century',
        meaning: 'to die',
      },
      { language: 'Modern English', form: 'die', period: '15th century', meaning: 'to die' },
    ],
    cognates: [
      { language: 'German', word: 'sterben', meaning: 'to die' },
      { language: 'Dutch', word: 'sterven', meaning: 'to die' },
      { language: 'Swedish', word: 'dö', meaning: 'to die' },
    ],
    notes:
      'Irregular verb with forms die, dies, died, died. From a root meaning "to perish" or "to pass away".',
  },

  word_send: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*sandijaną',
        period: 'c. 500 BC',
        meaning: 'to send, to go',
      },
      {
        language: 'Old English',
        form: 'sendan',
        period: 'Before 12th century',
        meaning: 'to send',
      },
      {
        language: 'Middle English',
        form: 'senden, send',
        period: '12th-15th century',
        meaning: 'to send',
      },
      { language: 'Modern English', form: 'send', period: '15th century', meaning: 'to send' },
    ],
    cognates: [
      { language: 'German', word: 'senden', meaning: 'to send' },
      { language: 'Dutch', word: 'zenden', meaning: 'to send' },
      { language: 'Swedish', word: 'skicka', meaning: 'to send' },
    ],
    notes:
      'Irregular verb with forms send, sends, sent, sent. From a root meaning "to go" or "to journey".',
  },

  word_expect: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 16th century',
    timeline: [
      { language: 'Latin', form: 'expectare', period: 'Roman era', meaning: 'to expect, to await' },
      {
        language: 'Middle English',
        form: 'expecten, expect',
        period: '16th century',
        meaning: 'to expect',
      },
      { language: 'Modern English', form: 'expect', period: '16th century', meaning: 'to expect' },
    ],
    cognates: [
      { language: 'German', word: 'erwarten', meaning: 'to expect' },
      { language: 'Dutch', word: 'verwachten', meaning: 'to expect' },
      { language: 'Swedish', word: 'förvänta', meaning: 'to expect' },
    ],
    notes: 'From Latin "expectare" meaning "to look for" or "to await".',
  },

  word_build: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*būaną',
        period: 'c. 500 BC',
        meaning: 'to build, to dwell',
      },
      {
        language: 'Old English',
        form: 'būldan',
        period: 'Before 12th century',
        meaning: 'to build',
      },
      {
        language: 'Middle English',
        form: 'bilden, build',
        period: '12th-15th century',
        meaning: 'to build',
      },
      { language: 'Modern English', form: 'build', period: '15th century', meaning: 'to build' },
    ],
    cognates: [
      { language: 'German', word: 'bauen', meaning: 'to build' },
      { language: 'Dutch', word: 'bouwen', meaning: 'to build' },
      { language: 'Swedish', word: 'bygga', meaning: 'to build' },
    ],
    notes: 'From a root meaning "to dwell" or "to construct a dwelling".',
  },

  word_stay: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'stay', period: 'Viking age', meaning: 'to stay, to wait' },
      {
        language: 'Middle English',
        form: 'stayen, stay',
        period: '13th-15th century',
        meaning: 'to stay',
      },
      { language: 'Modern English', form: 'stay', period: '15th century', meaning: 'to stay' },
    ],
    cognates: [
      { language: 'German', word: 'bleiben', meaning: 'to stay' },
      { language: 'Dutch', word: 'blijven', meaning: 'to stay' },
      { language: 'Swedish', word: 'stanna', meaning: 'to stay' },
    ],
    notes: 'From Old Norse meaning "to wait" or "to remain in place".',
  },

  word_fall: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*fallaną', period: 'c. 500 BC', meaning: 'to fall' },
      {
        language: 'Old English',
        form: 'feallan',
        period: 'Before 12th century',
        meaning: 'to fall',
      },
      {
        language: 'Middle English',
        form: 'fallen, fall',
        period: '12th-15th century',
        meaning: 'to fall',
      },
      { language: 'Modern English', form: 'fall', period: '15th century', meaning: 'to fall' },
    ],
    cognates: [
      { language: 'German', word: 'fallen', meaning: 'to fall' },
      { language: 'Dutch', word: 'vallen', meaning: 'to fall' },
      { language: 'Swedish', word: 'falla', meaning: 'to fall' },
    ],
    notes:
      'Irregular verb with forms fall, falls, fell, fallen. From a root meaning "to drop" or "to descend".',
  },

  word_cut: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*kjutą', period: 'c. 500 BC', meaning: 'to cut' },
      { language: 'Old English', form: 'cyttan', period: 'Before 12th century', meaning: 'to cut' },
      {
        language: 'Middle English',
        form: 'cutten, cut',
        period: '12th-15th century',
        meaning: 'to cut',
      },
      { language: 'Modern English', form: 'cut', period: '15th century', meaning: 'to cut' },
    ],
    cognates: [
      { language: 'German', word: 'schneiden', meaning: 'to cut' },
      { language: 'Dutch', word: 'snijden', meaning: 'to cut' },
      { language: 'Swedish', word: 'skära', meaning: 'to cut' },
    ],
    notes: 'From a root meaning "to strike" or "to divide with a blade".',
  },

  word_reach: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old French',
        form: 'reacher',
        period: '13th century',
        meaning: 'to reach, to stretch',
      },
      {
        language: 'Middle English',
        form: 'rechen, reach',
        period: '13th-15th century',
        meaning: 'to reach',
      },
      { language: 'Modern English', form: 'reach', period: '15th century', meaning: 'to reach' },
    ],
    cognates: [
      { language: 'German', word: 'erreichen', meaning: 'to reach' },
      { language: 'Dutch', word: 'bereiken', meaning: 'to reach' },
      { language: 'Swedish', word: 'nå', meaning: 'to reach' },
    ],
    notes: 'From Old French "reacher" meaning "to stretch out" or "to extend".',
  },

  word_kill: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'cyllan',
        period: 'Before 12th century',
        meaning: 'to kill, to strike',
      },
      {
        language: 'Middle English',
        form: 'killen, kill',
        period: '12th-15th century',
        meaning: 'to kill',
      },
      { language: 'Modern English', form: 'kill', period: '15th century', meaning: 'to kill' },
    ],
    cognates: [
      { language: 'German', word: 'töten', meaning: 'to kill' },
      { language: 'Dutch', word: 'doden', meaning: 'to kill' },
      { language: 'Swedish', word: 'döda', meaning: 'to kill' },
    ],
    notes: 'From a root meaning "to strike" or "to cause death".',
  },

  word_remain: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'remanere', period: 'Roman era', meaning: 'to remain, to stay' },
      {
        language: 'Middle English',
        form: 'remainen, remain',
        period: '14th-15th century',
        meaning: 'to remain',
      },
      { language: 'Modern English', form: 'remain', period: '15th century', meaning: 'to remain' },
    ],
    cognates: [
      { language: 'German', word: 'bleiben', meaning: 'to remain' },
      { language: 'Dutch', word: 'blijven', meaning: 'to remain' },
      { language: 'Swedish', word: 'förbli', meaning: 'to remain' },
    ],
    notes: 'From Latin "remanere" meaning "to stay behind" or "to continue".',
  },

  word_suggest: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 16th century',
    timeline: [
      {
        language: 'Latin',
        form: 'suggerere',
        period: 'Roman era',
        meaning: 'to suggest, to propose',
      },
      {
        language: 'Middle English',
        form: 'suggesten, suggest',
        period: '16th century',
        meaning: 'to suggest',
      },
      {
        language: 'Modern English',
        form: 'suggest',
        period: '16th century',
        meaning: 'to suggest',
      },
    ],
    cognates: [
      { language: 'German', word: 'vorschlagen', meaning: 'to suggest' },
      { language: 'Dutch', word: 'voorstellen', meaning: 'to suggest' },
      { language: 'Swedish', word: 'föreslå', meaning: 'to suggest' },
    ],
    notes: 'From Latin "suggerere" meaning "to carry under" or "to propose".',
  },

  word_raise: {
    languageOrigin: 'Old Norse',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old Norse', form: 'reisa', period: 'Viking age', meaning: 'to raise, to lift' },
      {
        language: 'Middle English',
        form: 'raisen, raise',
        period: '13th-15th century',
        meaning: 'to raise',
      },
      { language: 'Modern English', form: 'raise', period: '15th century', meaning: 'to raise' },
    ],
    cognates: [
      { language: 'German', word: 'heben', meaning: 'to raise' },
      { language: 'Dutch', word: 'heffen', meaning: 'to raise' },
      { language: 'Swedish', word: 'höja', meaning: 'to raise' },
    ],
    notes: 'From Old Norse "reisa" meaning "to lift" or "to erect".',
  },

  word_pass: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old French',
        form: 'passer',
        period: '13th century',
        meaning: 'to pass, to step',
      },
      {
        language: 'Middle English',
        form: 'passen, pass',
        period: '13th-15th century',
        meaning: 'to pass',
      },
      { language: 'Modern English', form: 'pass', period: '15th century', meaning: 'to pass' },
    ],
    cognates: [
      { language: 'German', word: 'passieren', meaning: 'to pass' },
      { language: 'Dutch', word: 'passeren', meaning: 'to pass' },
      { language: 'Swedish', word: 'passera', meaning: 'to pass' },
    ],
    notes: 'From Old French "passer" meaning "to step" or "to go by".',
  },

  word_sell: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'sellan',
        period: 'Before 12th century',
        meaning: 'to sell, to give',
      },
      {
        language: 'Middle English',
        form: 'sellen, sell',
        period: '12th-15th century',
        meaning: 'to sell',
      },
      { language: 'Modern English', form: 'sell', period: '15th century', meaning: 'to sell' },
    ],
    cognates: [
      { language: 'German', word: 'verkaufen', meaning: 'to sell' },
      { language: 'Dutch', word: 'verkopen', meaning: 'to sell' },
      { language: 'Swedish', word: 'sälja', meaning: 'to sell' },
    ],
    notes:
      'Irregular verb with forms sell, sells, sold, sold. Originally meant "to give" or "to hand over".',
  },

  word_require: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'requirere', period: 'Roman era', meaning: 'to require, to seek' },
      {
        language: 'Middle English',
        form: 'requiren, require',
        period: '14th-15th century',
        meaning: 'to require',
      },
      {
        language: 'Modern English',
        form: 'require',
        period: '15th century',
        meaning: 'to require',
      },
    ],
    cognates: [
      { language: 'German', word: 'erfordern', meaning: 'to require' },
      { language: 'Dutch', word: 'vereisen', meaning: 'to require' },
      { language: 'Swedish', word: 'kräva', meaning: 'to require' },
    ],
    notes: 'From Latin "requirere" meaning "to seek" or "to ask for".',
  },

  word_report: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Latin',
        form: 'reportare',
        period: 'Roman era',
        meaning: 'to report, to carry back',
      },
      {
        language: 'Middle English',
        form: 'reporten, report',
        period: '14th-15th century',
        meaning: 'to report',
      },
      { language: 'Modern English', form: 'report', period: '15th century', meaning: 'to report' },
    ],
    cognates: [
      { language: 'German', word: 'berichten', meaning: 'to report' },
      { language: 'Dutch', word: 'rapporteren', meaning: 'to report' },
      { language: 'Swedish', word: 'rapportera', meaning: 'to report' },
    ],
    notes: 'From Latin "reportare" meaning "to carry back" or "to bring news".',
  },

  word_decide: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Latin',
        form: 'decidere',
        period: 'Roman era',
        meaning: 'to decide, to cut off',
      },
      {
        language: 'Middle English',
        form: 'deciden, decide',
        period: '14th-15th century',
        meaning: 'to decide',
      },
      { language: 'Modern English', form: 'decide', period: '15th century', meaning: 'to decide' },
    ],
    cognates: [
      { language: 'German', word: 'entscheiden', meaning: 'to decide' },
      { language: 'Dutch', word: 'beslissen', meaning: 'to decide' },
      { language: 'Swedish', word: 'besluta', meaning: 'to decide' },
    ],
    notes: 'From Latin "decidere" meaning "to cut off" or "to determine".',
  },

  word_pull: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*pullōną', period: 'c. 500 BC', meaning: 'to pull' },
      {
        language: 'Middle English',
        form: 'pullen, pull',
        period: '13th-15th century',
        meaning: 'to pull',
      },
      { language: 'Modern English', form: 'pull', period: '15th century', meaning: 'to pull' },
    ],
    cognates: [
      { language: 'German', word: 'ziehen', meaning: 'to pull' },
      { language: 'Dutch', word: 'trekken', meaning: 'to pull' },
      { language: 'Swedish', word: 'dra', meaning: 'to pull' },
    ],
    notes: 'From a root meaning "to draw" or "to drag".',
  },

  word_push: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old French',
        form: 'pousser',
        period: '13th century',
        meaning: 'to push, to thrust',
      },
      {
        language: 'Middle English',
        form: 'pushen, push',
        period: '13th-15th century',
        meaning: 'to push',
      },
      { language: 'Modern English', form: 'push', period: '15th century', meaning: 'to push' },
    ],
    cognates: [
      { language: 'German', word: 'drücken', meaning: 'to push' },
      { language: 'Dutch', word: 'duwen', meaning: 'to push' },
      { language: 'Swedish', word: 'trycka', meaning: 'to push' },
    ],
    notes: 'From Old French "pousser" meaning "to thrust" or "to press".',
  },

  word_jump: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 15th century',
    timeline: [
      { language: 'Old French', form: 'jumper', period: '15th century', meaning: 'to jump' },
      {
        language: 'Middle English',
        form: 'jumpen, jump',
        period: '15th century',
        meaning: 'to jump',
      },
      { language: 'Modern English', form: 'jump', period: '16th century', meaning: 'to jump' },
    ],
    cognates: [
      { language: 'German', word: 'springen', meaning: 'to jump' },
      { language: 'Dutch', word: 'springen', meaning: 'to jump' },
      { language: 'Swedish', word: 'hoppa', meaning: 'to jump' },
    ],
    notes: 'From Old French "jumper" meaning "to leap" or "to bound".',
  },

  word_dance: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      { language: 'Old French', form: 'dancier', period: '13th century', meaning: 'to dance' },
      {
        language: 'Middle English',
        form: 'dancen, dance',
        period: '13th-15th century',
        meaning: 'to dance',
      },
      { language: 'Modern English', form: 'dance', period: '15th century', meaning: 'to dance' },
    ],
    cognates: [
      { language: 'German', word: 'tanzen', meaning: 'to dance' },
      { language: 'Dutch', word: 'dansen', meaning: 'to dance' },
      { language: 'Swedish', word: 'dansa', meaning: 'to dance' },
    ],
    notes: 'From Old French "dancier" meaning "to move rhythmically".',
  },

  word_sing: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*singwaną', period: 'c. 500 BC', meaning: 'to sing' },
      {
        language: 'Old English',
        form: 'singan',
        period: 'Before 12th century',
        meaning: 'to sing',
      },
      {
        language: 'Middle English',
        form: 'singen, sing',
        period: '12th-15th century',
        meaning: 'to sing',
      },
      { language: 'Modern English', form: 'sing', period: '15th century', meaning: 'to sing' },
    ],
    cognates: [
      { language: 'German', word: 'singen', meaning: 'to sing' },
      { language: 'Dutch', word: 'zingen', meaning: 'to sing' },
      { language: 'Swedish', word: 'sjunga', meaning: 'to sing' },
    ],
    notes:
      'Irregular verb with forms sing, sings, sang, sung. From a root meaning "to make music with voice".',
  },

  word_eat: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*etaną', period: 'c. 500 BC', meaning: 'to eat' },
      { language: 'Old English', form: 'etan', period: 'Before 12th century', meaning: 'to eat' },
      {
        language: 'Middle English',
        form: 'eten, eat',
        period: '12th-15th century',
        meaning: 'to eat',
      },
      { language: 'Modern English', form: 'eat', period: '15th century', meaning: 'to eat' },
    ],
    cognates: [
      { language: 'German', word: 'essen', meaning: 'to eat' },
      { language: 'Dutch', word: 'eten', meaning: 'to eat' },
      { language: 'Swedish', word: 'äta', meaning: 'to eat' },
    ],
    notes:
      'Irregular verb with forms eat, eats, ate, eaten. From a root meaning "to consume food".',
  },

  word_drink: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*drinkaną', period: 'c. 500 BC', meaning: 'to drink' },
      {
        language: 'Old English',
        form: 'drincan',
        period: 'Before 12th century',
        meaning: 'to drink',
      },
      {
        language: 'Middle English',
        form: 'drinken, drink',
        period: '12th-15th century',
        meaning: 'to drink',
      },
      { language: 'Modern English', form: 'drink', period: '15th century', meaning: 'to drink' },
    ],
    cognates: [
      { language: 'German', word: 'trinken', meaning: 'to drink' },
      { language: 'Dutch', word: 'drinken', meaning: 'to drink' },
      { language: 'Swedish', word: 'dricka', meaning: 'to drink' },
    ],
    notes:
      'Irregular verb with forms drink, drinks, drank, drunk. From a root meaning "to swallow liquid".',
  },

  word_sleep: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*slēpaną', period: 'c. 500 BC', meaning: 'to sleep' },
      {
        language: 'Old English',
        form: 'slǣpan',
        period: 'Before 12th century',
        meaning: 'to sleep',
      },
      {
        language: 'Middle English',
        form: 'slepen, sleep',
        period: '12th-15th century',
        meaning: 'to sleep',
      },
      { language: 'Modern English', form: 'sleep', period: '15th century', meaning: 'to sleep' },
    ],
    cognates: [
      { language: 'German', word: 'schlafen', meaning: 'to sleep' },
      { language: 'Dutch', word: 'slapen', meaning: 'to sleep' },
      { language: 'Swedish', word: 'sova', meaning: 'to sleep' },
    ],
    notes:
      'Irregular verb with forms sleep, sleeps, slept, slept. From a root meaning "to be slack" or "to be inactive".',
  },

  word_dream: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*draugmaz',
        period: 'c. 500 BC',
        meaning: 'deception, dream',
      },
      {
        language: 'Old English',
        form: 'drēam',
        period: 'Before 12th century',
        meaning: 'joy, music, dream',
      },
      {
        language: 'Middle English',
        form: 'dremen, dream',
        period: '12th-15th century',
        meaning: 'to dream',
      },
      { language: 'Modern English', form: 'dream', period: '15th century', meaning: 'to dream' },
    ],
    cognates: [
      { language: 'German', word: 'träumen', meaning: 'to dream' },
      { language: 'Dutch', word: 'dromen', meaning: 'to dream' },
      { language: 'Swedish', word: 'drömma', meaning: 'to dream' },
    ],
    notes: 'Originally meant "joy" or "music", later specialized to "visions during sleep".',
  },

  word_wake: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*wakōną',
        period: 'c. 500 BC',
        meaning: 'to wake, to be awake',
      },
      {
        language: 'Old English',
        form: 'wæcnan',
        period: 'Before 12th century',
        meaning: 'to wake',
      },
      {
        language: 'Middle English',
        form: 'waken, wake',
        period: '12th-15th century',
        meaning: 'to wake',
      },
      { language: 'Modern English', form: 'wake', period: '15th century', meaning: 'to wake' },
    ],
    cognates: [
      { language: 'German', word: 'aufwachen', meaning: 'to wake' },
      { language: 'Dutch', word: 'wakker worden', meaning: 'to wake' },
      { language: 'Swedish', word: 'vakna', meaning: 'to wake' },
    ],
    notes: 'From a root meaning "to be awake" or "to watch".',
  },

  word_cook: {
    languageOrigin: 'Latin',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      { language: 'Latin', form: 'coquere', period: 'Roman era', meaning: 'to cook, to prepare' },
      {
        language: 'Middle English',
        form: 'cooken, cook',
        period: '14th-15th century',
        meaning: 'to cook',
      },
      { language: 'Modern English', form: 'cook', period: '15th century', meaning: 'to cook' },
    ],
    cognates: [
      { language: 'German', word: 'kochen', meaning: 'to cook' },
      { language: 'Dutch', word: 'koken', meaning: 'to cook' },
      { language: 'Swedish', word: 'laga mat', meaning: 'to cook' },
    ],
    notes: 'From Latin "coquere" meaning "to prepare" or "to ripen by heat".',
  },

  word_clean: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*klainijaną', period: 'c. 500 BC', meaning: 'to clean' },
      {
        language: 'Middle English',
        form: 'clenen, clean',
        period: '13th-15th century',
        meaning: 'to clean',
      },
      { language: 'Modern English', form: 'clean', period: '15th century', meaning: 'to clean' },
    ],
    cognates: [
      { language: 'German', word: 'reinigen', meaning: 'to clean' },
      { language: 'Dutch', word: 'schoonmaken', meaning: 'to clean' },
      { language: 'Swedish', word: 'städa', meaning: 'to clean' },
    ],
    notes: 'From a root meaning "to make clean" or "to purify".',
  },

  word_wash: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'wascan',
        period: 'Before 12th century',
        meaning: 'to wash',
      },
      {
        language: 'Middle English',
        form: 'washen, wash',
        period: '12th-15th century',
        meaning: 'to wash',
      },
      { language: 'Modern English', form: 'wash', period: '15th century', meaning: 'to wash' },
    ],
    cognates: [
      { language: 'German', word: 'waschen', meaning: 'to wash' },
      { language: 'Dutch', word: 'wassen', meaning: 'to wash' },
      { language: 'Swedish', word: 'tvätta', meaning: 'to wash' },
    ],
    notes: 'From a root meaning "to clean with water".',
  },

  word_dry: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'drȳgean',
        period: 'Before 12th century',
        meaning: 'to dry',
      },
      {
        language: 'Middle English',
        form: 'drien, dry',
        period: '12th-15th century',
        meaning: 'to dry',
      },
      { language: 'Modern English', form: 'dry', period: '15th century', meaning: 'to dry' },
    ],
    cognates: [
      { language: 'German', word: 'trocknen', meaning: 'to dry' },
      { language: 'Dutch', word: 'drogen', meaning: 'to dry' },
      { language: 'Swedish', word: 'torka', meaning: 'to dry' },
    ],
    notes: 'From a root meaning "to remove moisture" or "to become dry".',
  },

  word_drive: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'drīfan',
        period: 'Before 12th century',
        meaning: 'to drive, to rush',
      },
      {
        language: 'Middle English',
        form: 'driven, drive',
        period: '12th-15th century',
        meaning: 'to drive',
      },
      { language: 'Modern English', form: 'drive', period: '15th century', meaning: 'to drive' },
    ],
    cognates: [
      { language: 'German', word: 'fahren', meaning: 'to drive' },
      { language: 'Dutch', word: 'rijden', meaning: 'to drive' },
      { language: 'Swedish', word: 'köra', meaning: 'to drive' },
    ],
    notes:
      'Irregular verb with forms drive, drives, drove, driven. Originally meant "to rush" or "to force forward".',
  },

  word_ride: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*rīdą', period: 'c. 500 BC', meaning: 'to ride' },
      { language: 'Old English', form: 'rīdan', period: 'Before 12th century', meaning: 'to ride' },
      {
        language: 'Middle English',
        form: 'riden, ride',
        period: '12th-15th century',
        meaning: 'to ride',
      },
      { language: 'Modern English', form: 'ride', period: '15th century', meaning: 'to ride' },
    ],
    cognates: [
      { language: 'German', word: 'reiten', meaning: 'to ride' },
      { language: 'Dutch', word: 'rijden', meaning: 'to ride' },
      { language: 'Swedish', word: 'rida', meaning: 'to ride' },
    ],
    notes:
      'Irregular verb with forms ride, rides, rode, ridden. From a root meaning "to sit on" or "to travel".',
  },

  word_fly: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*fleuganą', period: 'c. 500 BC', meaning: 'to fly' },
      {
        language: 'Old English',
        form: 'flēogan',
        period: 'Before 12th century',
        meaning: 'to fly',
      },
      {
        language: 'Middle English',
        form: 'flyen, fly',
        period: '12th-15th century',
        meaning: 'to fly',
      },
      { language: 'Modern English', form: 'fly', period: '15th century', meaning: 'to fly' },
    ],
    cognates: [
      { language: 'German', word: 'fliegen', meaning: 'to fly' },
      { language: 'Dutch', word: 'vliegen', meaning: 'to fly' },
      { language: 'Swedish', word: 'flyga', meaning: 'to fly' },
    ],
    notes:
      'Irregular verb with forms fly, flies, flew, flown. From a root meaning "to flee" or "to move through air".',
  },

  word_swim: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*swimną', period: 'c. 500 BC', meaning: 'to swim' },
      {
        language: 'Old English',
        form: 'swimman',
        period: 'Before 12th century',
        meaning: 'to swim',
      },
      {
        language: 'Middle English',
        form: 'swimmen, swim',
        period: '12th-15th century',
        meaning: 'to swim',
      },
      { language: 'Modern English', form: 'swim', period: '15th century', meaning: 'to swim' },
    ],
    cognates: [
      { language: 'German', word: 'schwimmen', meaning: 'to swim' },
      { language: 'Dutch', word: 'zwemmen', meaning: 'to swim' },
      { language: 'Swedish', word: 'simma', meaning: 'to swim' },
    ],
    notes:
      'Irregular verb with forms swim, swims, swam, swum. From a root meaning "to move in water".',
  },

  word_climb: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'climban',
        period: 'Before 12th century',
        meaning: 'to climb',
      },
      {
        language: 'Middle English',
        form: 'climben, climb',
        period: '12th-15th century',
        meaning: 'to climb',
      },
      { language: 'Modern English', form: 'climb', period: '15th century', meaning: 'to climb' },
    ],
    cognates: [
      { language: 'German', word: 'klettern', meaning: 'to climb' },
      { language: 'Dutch', word: 'klimmen', meaning: 'to climb' },
      { language: 'Swedish', word: 'klättra', meaning: 'to climb' },
    ],
    notes: 'From a root meaning "to ascend" or "to go up".',
  },

  word_catch: {
    languageOrigin: 'Old French',
    yearOfOrigin: 'c. 13th century',
    timeline: [
      {
        language: 'Old French',
        form: 'chacier',
        period: '13th century',
        meaning: 'to chase, to catch',
      },
      {
        language: 'Middle English',
        form: 'cachen, catch',
        period: '13th-15th century',
        meaning: 'to catch',
      },
      { language: 'Modern English', form: 'catch', period: '15th century', meaning: 'to catch' },
    ],
    cognates: [
      { language: 'German', word: 'fangen', meaning: 'to catch' },
      { language: 'Dutch', word: 'vangen', meaning: 'to catch' },
      { language: 'Swedish', word: 'fånga', meaning: 'to catch' },
    ],
    notes: 'From Old French "chacier" meaning "to chase" or "to hunt".',
  },

  word_throw: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*þrawaną',
        period: 'c. 500 BC',
        meaning: 'to throw, to twist',
      },
      {
        language: 'Old English',
        form: 'þrāwan',
        period: 'Before 12th century',
        meaning: 'to throw',
      },
      {
        language: 'Middle English',
        form: 'throwen, throw',
        period: '12th-15th century',
        meaning: 'to throw',
      },
      { language: 'Modern English', form: 'throw', period: '15th century', meaning: 'to throw' },
    ],
    cognates: [
      { language: 'German', word: 'werfen', meaning: 'to throw' },
      { language: 'Dutch', word: 'werpen', meaning: 'to throw' },
      { language: 'Swedish', word: 'kasta', meaning: 'to throw' },
    ],
    notes:
      'Irregular verb with forms throw, throws, threw, thrown. From a root meaning "to twist" or "to turn".',
  },

  word_hit: {
    languageOrigin: 'Old English',
    yearOfOrigin: 'Before 12th century',
    timeline: [
      {
        language: 'Old English',
        form: 'hyttan',
        period: 'Before 12th century',
        meaning: 'to hit, to strike',
      },
      {
        language: 'Middle English',
        form: 'hitten, hit',
        period: '12th-15th century',
        meaning: 'to hit',
      },
      { language: 'Modern English', form: 'hit', period: '15th century', meaning: 'to hit' },
    ],
    cognates: [
      { language: 'German', word: 'schlagen', meaning: 'to hit' },
      { language: 'Dutch', word: 'slaan', meaning: 'to hit' },
      { language: 'Swedish', word: 'slå', meaning: 'to hit' },
    ],
    notes: 'From a root meaning "to strike" or "to come against".',
  },

  word_kick: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Middle English',
        form: 'kicken, kick',
        period: '14th-15th century',
        meaning: 'to kick',
      },
      { language: 'Modern English', form: 'kick', period: '15th century', meaning: 'to kick' },
    ],
    cognates: [
      { language: 'German', word: 'treten', meaning: 'to kick' },
      { language: 'Dutch', word: 'schoppen', meaning: 'to kick' },
      { language: 'Swedish', word: 'sparka', meaning: 'to kick' },
    ],
    notes: 'Origin uncertain, possibly from a root meaning "to strike with the foot".',
  },

  word_bite: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      { language: 'Proto-Germanic', form: '*bītaną', period: 'c. 500 BC', meaning: 'to bite' },
      { language: 'Old English', form: 'bītan', period: 'Before 12th century', meaning: 'to bite' },
      {
        language: 'Middle English',
        form: 'biten, bite',
        period: '12th-15th century',
        meaning: 'to bite',
      },
      { language: 'Modern English', form: 'bite', period: '15th century', meaning: 'to bite' },
    ],
    cognates: [
      { language: 'German', word: 'beißen', meaning: 'to bite' },
      { language: 'Dutch', word: 'bijten', meaning: 'to bite' },
      { language: 'Swedish', word: 'bita', meaning: 'to bite' },
    ],
    notes:
      'Irregular verb with forms bite, bites, bit, bitten. From a root meaning "to cut" or "to pierce with teeth".',
  },

  word_choose: {
    languageOrigin: 'Proto-Germanic',
    yearOfOrigin: 'c. 500 BC',
    timeline: [
      {
        language: 'Proto-Germanic',
        form: '*keusaną',
        period: 'c. 500 BC',
        meaning: 'to choose, to taste',
      },
      {
        language: 'Old English',
        form: 'cēosan',
        period: 'Before 12th century',
        meaning: 'to choose',
      },
      {
        language: 'Middle English',
        form: 'chēsen, choose',
        period: '12th-15th century',
        meaning: 'to choose',
      },
      { language: 'Modern English', form: 'choose', period: '15th century', meaning: 'to choose' },
    ],
    cognates: [
      { language: 'German', word: 'wählen', meaning: 'to choose' },
      { language: 'Dutch', word: 'kiezen', meaning: 'to choose' },
      { language: 'Swedish', word: 'välja', meaning: 'to choose' },
    ],
    notes:
      'Irregular verb with forms choose, chooses, chose, chosen. From a root meaning "to taste" or "to test".',
  },

  word_pick: {
    languageOrigin: 'Middle English',
    yearOfOrigin: 'c. 14th century',
    timeline: [
      {
        language: 'Middle English',
        form: 'picken, pick',
        period: '14th-15th century',
        meaning: 'to pick, to pierce',
      },
      { language: 'Modern English', form: 'pick', period: '15th century', meaning: 'to pick' },
    ],
    cognates: [
      { language: 'German', word: 'pflücken', meaning: 'to pick' },
      { language: 'Dutch', word: 'plukken', meaning: 'to pick' },
      { language: 'Swedish', word: 'plocka', meaning: 'to pick' },
    ],
    notes:
      'From a root meaning "to pierce" or "to pull out", specialized to selecting or harvesting.',
  },
};
