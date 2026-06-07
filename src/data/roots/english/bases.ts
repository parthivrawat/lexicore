import { WordRoot } from '@/types';

export const bases: WordRoot[] = [
  // Base Roots
  {
    id: 'root_act',
    root: 'act',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'do, drive',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ækt' },
      { accent: 'british', ipa: 'ækt' },
      { accent: 'australian', ipa: 'ækt' }
    ],
    examples: [
      { word: 'action', meaning: 'the act of doing', sentence: 'Take action now.' },
      { word: 'react', meaning: 'do in response', sentence: 'How did they react?' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_audi',
    root: 'audi',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'hear',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɔːdi' },
      { accent: 'british', ipa: 'ɔːdi' },
      { accent: 'australian', ipa: 'ɔːdi' }
    ],
    examples: [
      { word: 'audio', meaning: 'relating to sound', sentence: 'The audio quality is excellent.' },
      { word: 'audience', meaning: 'those who hear', sentence: 'The audience applauded.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_brev',
    root: 'brev',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'short',
    pronunciationVariants: [
      { accent: 'american', ipa: 'brɛv' },
      { accent: 'british', ipa: 'brɛv' },
      { accent: 'australian', ipa: 'brɛv' }
    ],
    examples: [
      { word: 'abbreviate', meaning: 'make short', sentence: 'Abbreviate the long word.' },
      { word: 'brevity', meaning: 'quality of being short', sentence: 'Brevity is the soul of wit.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ced',
    root: 'ced',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'go, yield',
    pronunciationVariants: [
      { accent: 'american', ipa: 'siːd' },
      { accent: 'british', ipa: 'siːd' },
      { accent: 'australian', ipa: 'siːd' }
    ],
    examples: [
      { word: 'proceed', meaning: 'go forward', sentence: 'Please proceed with caution.' },
      { word: 'concede', meaning: 'yield', sentence: 'He had to concede the point.' },
    ],
    relatedRootIds: ['root_ceed', 'root_cess'],
  },
  {
    id: 'root_ceed',
    root: 'ceed',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'go',
    pronunciationVariants: [
      { accent: 'american', ipa: 'siːd' },
      { accent: 'british', ipa: 'siːd' },
      { accent: 'australian', ipa: 'siːd' }
    ],
    examples: [
      { word: 'succeed', meaning: 'go after', sentence: 'She will succeed in life.' },
      { word: 'exceed', meaning: 'go beyond', sentence: 'Don\'t exceed the limit.' },
    ],
    relatedRootIds: ['root_ced', 'root_cess'],
  },
  {
    id: 'root_cess',
    root: 'cess',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'go',
    pronunciationVariants: [
      { accent: 'american', ipa: 'siːd' },
      { accent: 'british', ipa: 'siːd' },
      { accent: 'australian', ipa: 'siːd' }
    ],
    examples: [
      { word: 'process', meaning: 'go forward', sentence: 'The process takes time.' },
      { word: 'access', meaning: 'go to', sentence: 'You need access to the system.' },
    ],
    relatedRootIds: ['root_ced', 'root_ceed'],
  },
  {
    id: 'root_cred',
    root: 'cred',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'believe',
    pronunciationVariants: [
      { accent: 'american', ipa: 'krɛd' },
      { accent: 'british', ipa: 'krɛd' },
      { accent: 'australian', ipa: 'krɛd' }
    ],
    examples: [
      { word: 'credit', meaning: 'believe', sentence: 'She deserves credit.' },
      { word: 'incredible', meaning: 'not believable', sentence: 'The story was incredible.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_cur',
    root: 'cur',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'run, care',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kɜːr' },
      { accent: 'british', ipa: 'kɜːr' },
      { accent: 'australian', ipa: 'kɜːr' }
    ],
    examples: [
      { word: 'current', meaning: 'running', sentence: 'The current is strong.' },
      { word: 'curator', meaning: 'one who cares', sentence: 'The museum curator is knowledgeable.' },
    ],
    relatedRootIds: ['root_curs', 'root_cour'],
  },
  {
    id: 'root_curs',
    root: 'curs',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'run',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kɜːrs' },
      { accent: 'british', ipa: 'kɜːrs' },
      { accent: 'australian', ipa: 'kɜːrs' }
    ],
    examples: [
      { word: 'cursor', meaning: 'runner', sentence: 'Move the cursor here.' },
      { word: 'cursive', meaning: 'running', sentence: 'She writes in cursive.' },
    ],
    relatedRootIds: ['root_cur', 'root_cour'],
  },
  {
    id: 'root_cour',
    root: 'cour',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'run',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kɜːrs' },
      { accent: 'british', ipa: 'kɜːrs' },
      { accent: 'australian', ipa: 'kɜːrs' }
    ],
    examples: [
      { word: 'courier', meaning: 'runner', sentence: 'The courier delivered the package.' },
      { word: 'course', meaning: 'running', sentence: 'The course is difficult.' },
    ],
    relatedRootIds: ['root_cur', 'root_curs'],
  },
  {
    id: 'root_dict',
    root: 'dict',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'say, speak',
    pronunciationVariants: [
      { accent: 'american', ipa: 'dɪkˈteɪ' },
      { accent: 'british', ipa: 'dɪkˈteɪ' },
      { accent: 'australian', ipa: 'dɪkˈteɪ' }
    ],
    examples: [
      { word: 'dictionary', meaning: 'say words', sentence: 'Use the dictionary.' },
      { word: 'predict', meaning: 'say before', sentence: 'They predict rain tomorrow.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_duc',
    root: 'duc',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'lead',
    pronunciationVariants: [
      { accent: 'american', ipa: 'dɪk' },
      { accent: 'british', ipa: 'dɪk' },
      { accent: 'australian', ipa: 'dɪk' }
    ],
    examples: [
      { word: 'educate', meaning: 'lead out', sentence: 'Teachers educate students.' },
      { word: 'induce', meaning: 'lead in', sentence: 'The medicine will induce sleep.' },
    ],
    relatedRootIds: ['root_duct'],
  },
  {
    id: 'root_duct',
    root: 'duct',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'lead',
    pronunciationVariants: [
      { accent: 'american', ipa: 'dɪk' },
      { accent: 'british', ipa: 'dɪk' },
      { accent: 'australian', ipa: 'dɪk' }
    ],
    examples: [
      { word: 'conduct', meaning: 'lead together', sentence: 'He will conduct the orchestra.' },
      { word: 'product', meaning: 'lead forth', sentence: 'This is a quality product.' },
    ],
    relatedRootIds: ['root_duc'],
  },
  {
    id: 'root_fact',
    root: 'fact',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'make, do',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fækt' },
      { accent: 'british', ipa: 'fækt' },
      { accent: 'australian', ipa: 'fækt' }
    ],
    examples: [
      { word: 'factory', meaning: 'place of making', sentence: 'The factory employs 500 people.' },
      { word: 'manufacture', meaning: 'make by hand', sentence: 'They manufacture cars.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_fer',
    root: 'fer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'carry, bear',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fɜːr' },
      { accent: 'british', ipa: 'fɜːr' },
      { accent: 'australian', ipa: 'fɜːr' }
    ],
    examples: [
      { word: 'transfer', meaning: 'carry across', sentence: 'Transfer the funds.' },
      { word: 'prefer', meaning: 'carry before', sentence: 'I prefer tea over coffee.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_flect',
    root: 'flect',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'bend',
    pronunciationVariants: [
      { accent: 'american', ipa: 'flɛkt' },
      { accent: 'british', ipa: 'flɛkt' },
      { accent: 'australian', ipa: 'flɛkt' }
    ],
    examples: [
      { word: 'reflect', meaning: 'bend back', sentence: 'Reflect on your decisions.' },
      { word: 'flexible', meaning: 'able to bend', sentence: 'The schedule is flexible.' },
    ],
    relatedRootIds: ['root_flex'],
  },
  {
    id: 'root_flex',
    root: 'flex',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'bend',
    pronunciationVariants: [
      { accent: 'american', ipa: 'flɛkt' },
      { accent: 'british', ipa: 'flɛkt' },
      { accent: 'australian', ipa: 'flɛkt' }
    ],
    examples: [
      { word: 'flex', meaning: 'bend', sentence: 'Flex your muscles.' },
      { word: 'flexible', meaning: 'able to bend', sentence: 'The material is flexible.' },
    ],
    relatedRootIds: ['root_flect'],
  },
  {
    id: 'root_form',
    root: 'form',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'shape',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fɔːrm' },
      { accent: 'british', ipa: 'fɔːrm' },
      { accent: 'australian', ipa: 'fɔːrm' }
    ],
    examples: [
      { word: 'reform', meaning: 'shape again', sentence: 'They plan to reform the system.' },
      { word: 'formation', meaning: 'act of shaping', sentence: 'The team formation changed.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_graph',
    root: 'graph',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'write',
    pronunciationVariants: [
      { accent: 'american', ipa: 'rɑːf' },
      { accent: 'british', ipa: 'rɑːf' },
      { accent: 'australian', ipa: 'rɑːf' }
    ],
    examples: [
      { word: 'autograph', meaning: 'self writing', sentence: 'Get the celebrity\'s autograph.' },
      { word: 'photograph', meaning: 'light writing', sentence: 'Take a photograph.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_grat',
    root: 'grat',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'pleasing, thank',
    pronunciationVariants: [
      { accent: 'american', ipa: 'græt' },
      { accent: 'british', ipa: 'græt' },
      { accent: 'australian', ipa: 'græt' }
    ],
    examples: [
      { word: 'grateful', meaning: 'full of thanks', sentence: 'She was grateful for the help.' },
      { word: 'gratify', meaning: 'to please', sentence: 'The result will gratify you.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_gress',
    root: 'gress',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'step, go',
    pronunciationVariants: [
      { accent: 'american', ipa: 'grɛs' },
      { accent: 'british', ipa: 'grɛs' },
      { accent: 'australian', ipa: 'grɛs' }
    ],
    examples: [
      { word: 'progress', meaning: 'step forward', sentence: 'We made good progress.' },
      { word: 'digress', meaning: 'step away', sentence: 'Don\'t digress from the topic.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ject',
    root: 'ject',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'throw',
    pronunciationVariants: [
      { accent: 'american', ipa: 'dʒɛkt' },
      { accent: 'british', ipa: 'dʒɛkt' },
      { accent: 'australian', ipa: 'dʒɛkt' }
    ],
    examples: [
      { word: 'project', meaning: 'throw forward', sentence: 'The project is on schedule.' },
      { word: 'reject', meaning: 'throw back', sentence: 'They reject the proposal.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_log',
    root: 'log',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'word, study',
    pronunciationVariants: [
      { accent: 'american', ipa: 'lɔːɡ' },
      { accent: 'british', ipa: 'lɔːɡ' },
      { accent: 'australian', ipa: 'lɔːɡ' }
    ],
    examples: [
      { word: 'dialogue', meaning: 'words between', sentence: 'The dialogue was witty.' },
      { word: 'biology', meaning: 'study of life', sentence: 'Biology is fascinating.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_loqu',
    root: 'loqu',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'speak',
    pronunciationVariants: [
      { accent: 'american', ipa: 'lɔːkwɛs' },
      { accent: 'british', ipa: 'lɔːkwɛs' },
      { accent: 'australian', ipa: 'lɔːkwɛs' }
    ],
    examples: [
      { word: 'eloquent', meaning: 'speaking well', sentence: 'She gave an eloquent speech.' },
      { word: 'soliloquy', meaning: 'speaking alone', sentence: 'The actor performed a soliloquy.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_luc',
    root: 'luc',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'light',
    pronunciationVariants: [
      { accent: 'american', ipa: 'luːs' },
      { accent: 'british', ipa: 'luːs' },
      { accent: 'australian', ipa: 'luːs' }
    ],
    examples: [
      { word: 'lucid', meaning: 'clear light', sentence: 'His explanation was lucid.' },
      { word: 'translucent', meaning: 'light through', sentence: 'The material is translucent.' },
    ],
    relatedRootIds: ['root_lum', 'root_lust'],
  },
  {
    id: 'root_lum',
    root: 'lum',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'light',
    pronunciationVariants: [
      { accent: 'american', ipa: 'luːs' },
      { accent: 'british', ipa: 'luːs' },
      { accent: 'australian', ipa: 'luːs' }
    ],
    examples: [
      { word: 'illuminate', meaning: 'throw light on', sentence: 'The lamp illuminates the room.' },
      { word: 'luminous', meaning: 'giving light', sentence: 'The stars are luminous.' },
    ],
    relatedRootIds: ['root_luc', 'root_lust'],
  },
  {
    id: 'root_lust',
    root: 'lust',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'light',
    pronunciationVariants: [
      { accent: 'american', ipa: 'luːs' },
      { accent: 'british', ipa: 'luːs' },
      { accent: 'australian', ipa: 'luːs' }
    ],
    examples: [
      { word: 'luster', meaning: 'light shine', sentence: 'The pearl has a nice luster.' },
      { word: 'illustrate', meaning: 'light in', sentence: 'Please illustrate your point.' },
    ],
    relatedRootIds: ['root_luc', 'root_lum'],
  },
  {
    id: 'root_man',
    root: 'man',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'hand',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mæn' },
      { accent: 'british', ipa: 'mæn' },
      { accent: 'australian', ipa: 'mæn' }
    ],
    examples: [
      { word: 'manual', meaning: 'by hand', sentence: 'Read the manual.' },
      { word: 'manufacture', meaning: 'make by hand', sentence: 'They manufacture furniture.' },
    ],
    relatedRootIds: ['root_manu'],
  },
  {
    id: 'root_manu',
    root: 'manu',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'hand',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mæn' },
      { accent: 'british', ipa: 'mæn' },
      { accent: 'australian', ipa: 'mæn' }
    ],
    examples: [
      { word: 'manuscript', meaning: 'written by hand', sentence: 'The manuscript is ancient.' },
      { word: 'maneuver', meaning: 'work by hand', sentence: 'The pilot performed a maneuver.' },
    ],
    relatedRootIds: ['root_man'],
  },
  {
    id: 'root_mit',
    root: 'mit',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'send',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mɪt' },
      { accent: 'british', ipa: 'mɪt' },
      { accent: 'australian', ipa: 'mɪt' }
    ],
    examples: [
      { word: 'transmit', meaning: 'send across', sentence: 'The tower transmits signals.' },
      { word: 'permit', meaning: 'send through', sentence: 'The permit allows entry.' },
    ],
    relatedRootIds: ['root_miss'],
  },
  {
    id: 'root_miss',
    root: 'miss',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'send',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mɪt' },
      { accent: 'british', ipa: 'mɪt' },
      { accent: 'australian', ipa: 'mɪt' }
    ],
    examples: [
      { word: 'mission', meaning: 'act of sending', sentence: 'The mission was successful.' },
      { word: 'dismiss', meaning: 'send away', sentence: 'They will dismiss him.' },
    ],
    relatedRootIds: ['root_mit'],
  },
  {
    id: 'root_morph',
    root: 'morph',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'form, shape',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mɔːrf' },
      { accent: 'british', ipa: 'mɔːrf' },
      { accent: 'australian', ipa: 'mɔːrf' }
    ],
    examples: [
      { word: 'metamorphosis', meaning: 'change form', sentence: 'The butterfly undergoes metamorphosis.' },
      { word: 'morphology', meaning: 'study of form', sentence: 'Morphology studies word forms.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_mot',
    root: 'mot',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'move',
    pronunciationVariants: [
      { accent: 'american', ipa: 'moʊt' },
      { accent: 'british', ipa: 'moʊt' },
      { accent: 'australian', ipa: 'moʊt' }
    ],
    examples: [
      { word: 'motion', meaning: 'act of moving', sentence: 'The motion was smooth.' },
      { word: 'motivate', meaning: 'cause to move', sentence: 'Motivate the team to succeed.' },
    ],
    relatedRootIds: ['root_mov'],
  },
  {
    id: 'root_mov',
    root: 'mov',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'move',
    pronunciationVariants: [
      { accent: 'american', ipa: 'moʊt' },
      { accent: 'british', ipa: 'moʊt' },
      { accent: 'australian', ipa: 'moʊt' }
    ],
    examples: [
      { word: 'movie', meaning: 'moving pictures', sentence: 'Let\'s watch a movie.' },
      { word: 'remove', meaning: 'move again', sentence: 'Remove the obstacle.' },
    ],
    relatedRootIds: ['root_mot'],
  },
  {
    id: 'root_path',
    root: 'path',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'feeling, suffering',
    pronunciationVariants: [
      { accent: 'american', ipa: 'pɑː' },
      { accent: 'british', ipa: 'pɑː' },
      { accent: 'australian', ipa: 'pɑː' }
    ],
    examples: [
      { word: 'empathy', meaning: 'in feeling', sentence: 'She showed great empathy.' },
      { word: 'pathology', meaning: 'study of suffering', sentence: 'Pathology diagnoses diseases.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_phon',
    root: 'phon',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'sound',
    pronunciationVariants: [
      { accent: 'american', ipa: 'fɔːn' },
      { accent: 'british', ipa: 'fɔːn' },
      { accent: 'australian', ipa: 'fɔːn' }
    ],
    examples: [
      { word: 'telephone', meaning: 'far sound', sentence: 'Answer the telephone.' },
      { word: 'symphony', meaning: 'together sound', sentence: 'The symphony was beautiful.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_port',
    root: 'port',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'carry',
    pronunciationVariants: [
      { accent: 'american', ipa: 'pɔːrt' },
      { accent: 'british', ipa: 'pɔːrt' },
      { accent: 'australian', ipa: 'pɔːrt' }
    ],
    examples: [
      { word: 'transport', meaning: 'carry across', sentence: 'They transport goods.' },
      { word: 'portable', meaning: 'able to carry', sentence: 'The device is portable.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_pose',
    root: 'pose',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'put, place',
    pronunciationVariants: [
      { accent: 'american', ipa: 'pɔːz' },
      { accent: 'british', ipa: 'pɔːz' },
      { accent: 'australian', ipa: 'pɔːz' }
    ],
    examples: [
      { word: 'propose', meaning: 'put forward', sentence: 'I propose a solution.' },
      { word: 'expose', meaning: 'place out', sentence: 'Don\'t expose the film.' },
    ],
    relatedRootIds: ['root_posit'],
  },
  {
    id: 'root_posit',
    root: 'posit',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'put, place',
    pronunciationVariants: [
      { accent: 'american', ipa: 'pɔːz' },
      { accent: 'british', ipa: 'pɔːz' },
      { accent: 'australian', ipa: 'pɔːz' }
    ],
    examples: [
      { word: 'position', meaning: 'place of', sentence: 'Take your position.' },
      { word: 'positive', meaning: 'placed firmly', sentence: 'Stay positive.' },
    ],
    relatedRootIds: ['root_pose'],
  },
  {
    id: 'root_psi',
    root: 'psych',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'mind, soul',
    pronunciationVariants: [
      { accent: 'american', ipa: 'sɑː' },
      { accent: 'british', ipa: 'sɑː' },
      { accent: 'australian', ipa: 'sɑː' }
    ],
    examples: [
      { word: 'psychology', meaning: 'study of mind', sentence: 'Psychology studies behavior.' },
      { word: 'psychic', meaning: 'of the mind', sentence: 'She claims to be psychic.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_quest',
    root: 'quest',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'ask, seek',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kwɛst' },
      { accent: 'british', ipa: 'kwɛst' },
      { accent: 'australian', ipa: 'kwɛst' }
    ],
    examples: [
      { word: 'question', meaning: 'act of asking', sentence: 'Ask a question.' },
      { word: 'inquest', meaning: 'in asking', sentence: 'The inquest revealed new facts.' },
    ],
    relatedRootIds: ['root_quis', 'root_quer'],
  },
  {
    id: 'root_quis',
    root: 'quis',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'ask, seek',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kwɛst' },
      { accent: 'british', ipa: 'kwɛst' },
      { accent: 'australian', ipa: 'kwɛst' }
    ],
    examples: [
      { word: 'inquisition', meaning: 'act of asking', sentence: 'The inquisition was harsh.' },
      { word: 'acquisitive', meaning: 'seeking', sentence: 'He has an acquisitive nature.' },
    ],
    relatedRootIds: ['root_quest', 'root_quer'],
  },
  {
    id: 'root_quer',
    root: 'quer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'ask, seek',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kwɛst' },
      { accent: 'british', ipa: 'kwɛst' },
      { accent: 'australian', ipa: 'kwɛst' }
    ],
    examples: [
      { word: 'query', meaning: 'act of asking', sentence: 'Submit your query.' },
      { word: 'conquer', meaning: 'seek together', sentence: 'They plan to conquer new markets.' },
    ],
    relatedRootIds: ['root_quest', 'root_quis'],
  },
  {
    id: 'root_scrib',
    root: 'scrib',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'write',
    pronunciationVariants: [
      { accent: 'american', ipa: 'rɑːf' },
      { accent: 'british', ipa: 'rɑːf' },
      { accent: 'australian', ipa: 'rɑːf' }
    ],
    examples: [
      { word: 'scribble', meaning: 'write carelessly', sentence: 'The child began to scribble.' },
      { word: 'inscribe', meaning: 'write in', sentence: 'Inscribe the date here.' },
    ],
    relatedRootIds: ['root_script'],
  },
  {
    id: 'root_script',
    root: 'script',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'write',
    pronunciationVariants: [
      { accent: 'american', ipa: 'rɑːf' },
      { accent: 'british', ipa: 'rɑːf' },
      { accent: 'australian', ipa: 'rɑːf' }
    ],
    examples: [
      { word: 'manuscript', meaning: 'written by hand', sentence: 'The manuscript is old.' },
      { word: 'prescription', meaning: 'written before', sentence: 'The doctor wrote a prescription.' },
    ],
    relatedRootIds: ['root_scrib'],
  },
  {
    id: 'root_sec',
    root: 'sec',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'cut',
    pronunciationVariants: [
      { accent: 'american', ipa: 'sk' },
      { accent: 'british', ipa: 'sk' },
      { accent: 'australian', ipa: 'sk' }
    ],
    examples: [
      { word: 'section', meaning: 'cut part', sentence: 'Read this section.' },
      { word: 'intersect', meaning: 'cut between', sentence: 'The lines intersect here.' },
    ],
    relatedRootIds: ['root_sect'],
  },
  {
    id: 'root_sect',
    root: 'sect',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'cut',
    pronunciationVariants: [
      { accent: 'american', ipa: 'sk' },
      { accent: 'british', ipa: 'sk' },
      { accent: 'australian', ipa: 'sk' }
    ],
    examples: [
      { word: 'dissect', meaning: 'cut apart', sentence: 'They will dissect the frog.' },
      { word: 'sector', meaning: 'cut part', sentence: 'The technology sector is growing.' },
    ],
    relatedRootIds: ['root_sec'],
  },
  {
    id: 'root_sent',
    root: 'sent',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'feel, think',
    pronunciationVariants: [
      { accent: 'american', ipa: 'sɛnt' },
      { accent: 'british', ipa: 'sɛnt' },
      { accent: 'australian', ipa: 'sɛnt' }
    ],
    examples: [
      { word: 'sentiment', meaning: 'feeling', sentence: 'The sentiment was positive.' },
      { word: 'consent', meaning: 'feel together', sentence: 'She gave her consent.' },
    ],
    relatedRootIds: ['root_sens'],
  },
  {
    id: 'root_sens',
    root: 'sens',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'feel',
    pronunciationVariants: [
      { accent: 'american', ipa: 'sɛns' },
      { accent: 'british', ipa: 'sɛns' },
      { accent: 'australian', ipa: 'sɛns' }
    ],
    examples: [
      { word: 'sensation', meaning: 'feeling', sentence: 'The sensation was strange.' },
      { word: 'sensitive', meaning: 'able to feel', sentence: 'She is very sensitive.' },
    ],
    relatedRootIds: ['root_sent'],
  },
  {
    id: 'root_spec',
    root: 'spec',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'see, look',
    pronunciationVariants: [
      { accent: 'american', ipa: 'spɛk' },
      { accent: 'british', ipa: 'spɛk' },
      { accent: 'australian', ipa: 'spɛk' }
    ],
    examples: [
      { word: 'inspect', meaning: 'look into', sentence: 'Inspect the document.' },
      { word: 'spectator', meaning: 'one who looks', sentence: 'The spectator cheered.' },
    ],
    relatedRootIds: ['root_spect'],
  },
  {
    id: 'root_spect',
    root: 'spect',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'see, look',
    pronunciationVariants: [
      { accent: 'american', ipa: 'spɛk' },
      { accent: 'british', ipa: 'spɛk' },
      { accent: 'australian', ipa: 'spɛk' }
    ],
    examples: [
      { word: 'spectacles', meaning: 'looking glasses', sentence: 'He wears spectacles.' },
      { word: 'prospect', meaning: 'look forward', sentence: 'The prospect is good.' },
    ],
    relatedRootIds: ['root_spec'],
  },
  {
    id: 'root_struct',
    root: 'struct',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'build',
    pronunciationVariants: [
      { accent: 'american', ipa: 'strʌkt' },
      { accent: 'british', ipa: 'strʌkt' },
      { accent: 'australian', ipa: 'strʌkt' }
    ],
    examples: [
      { word: 'construct', meaning: 'build together', sentence: 'They will construct the bridge.' },
      { word: 'structure', meaning: 'built thing', sentence: 'The structure is solid.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_tac',
    root: 'tact',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'touch',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tækt' },
      { accent: 'british', ipa: 'tækt' },
      { accent: 'australian', ipa: 'tækt' }
    ],
    examples: [
      { word: 'tactile', meaning: 'relating to touch', sentence: 'The fabric is tactile.' },
      { word: 'contact', meaning: 'together touch', sentence: 'Contact us for information.' },
    ],
    relatedRootIds: ['root_tang'],
  },
  {
    id: 'root_tang',
    root: 'tang',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'touch',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tækt' },
      { accent: 'british', ipa: 'tækt' },
      { accent: 'australian', ipa: 'tækt' }
    ],
    examples: [
      { word: 'tangible', meaning: 'able to touch', sentence: 'The benefits are tangible.' },
      { word: 'tangent', meaning: 'touching', sentence: 'Draw a tangent line.' },
    ],
    relatedRootIds: ['root_tac'],
  },
  {
    id: 'root_tech',
    root: 'tech',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'art, skill',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tɛk' },
      { accent: 'british', ipa: 'tɛk' },
      { accent: 'australian', ipa: 'tɛk' }
    ],
    examples: [
      { word: 'technology', meaning: 'study of skills', sentence: 'Technology advances rapidly.' },
      { word: 'technical', meaning: 'relating to skill', sentence: 'She provides technical support.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_tele',
    root: 'tele',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'far',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tɛlə' },
      { accent: 'british', ipa: 'tɛlə' },
      { accent: 'australian', ipa: 'tɛlə' }
    ],
    examples: [
      { word: 'telephone', meaning: 'far sound', sentence: 'Answer the telephone.' },
      { word: 'telescope', meaning: 'far seeing', sentence: 'Use the telescope.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_temp',
    root: 'temp',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'time',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tɛmp' },
      { accent: 'british', ipa: 'tɛmp' },
      { accent: 'australian', ipa: 'tɛmp' }
    ],
    examples: [
      { word: 'temporary', meaning: 'relating to time', sentence: 'This is temporary.' },
      { word: 'contemporary', meaning: 'with time', sentence: 'She is a contemporary artist.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ten',
    root: 'ten',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'hold',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tɛn' },
      { accent: 'british', ipa: 'tɛn' },
      { accent: 'australian', ipa: 'tɛn' }
    ],
    examples: [
      { word: 'tenant', meaning: 'one who holds', sentence: 'The tenant pays rent.' },
      { word: 'maintain', meaning: 'hold in', sentence: 'Maintain your position.' },
    ],
    relatedRootIds: ['root_tain', 'root_tin'],
  },
  {
    id: 'root_tain',
    root: 'tain',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'hold',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tɛn' },
      { accent: 'british', ipa: 'tɛn' },
      { accent: 'australian', ipa: 'tɛn' }
    ],
    examples: [
      { word: 'contain', meaning: 'hold together', sentence: 'The box will contain it.' },
      { word: 'retain', meaning: 'hold back', sentence: 'Retain your receipt.' },
    ],
    relatedRootIds: ['root_ten', 'root_tin'],
  },
  {
    id: 'root_tin',
    root: 'tin',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'hold',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tɛn' },
      { accent: 'british', ipa: 'tɛn' },
      { accent: 'australian', ipa: 'tɛn' }
    ],
    examples: [
      { word: 'continuation', meaning: 'holding together', sentence: 'The continuation is planned.' },
      { word: 'content', meaning: 'held within', sentence: 'The content is interesting.' },
    ],
    relatedRootIds: ['root_ten', 'root_tain'],
  },
  {
    id: 'root_tract',
    root: 'tract',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'pull, draw',
    pronunciationVariants: [
      { accent: 'american', ipa: 'trækt' },
      { accent: 'british', ipa: 'trækt' },
      { accent: 'australian', ipa: 'trækt' }
    ],
    examples: [
      { word: 'attract', meaning: 'pull toward', sentence: 'The magnet attracts metal.' },
      { word: 'contract', meaning: 'pull together', sentence: 'Sign the contract.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ven',
    root: 'ven',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'come',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɛn' },
      { accent: 'british', ipa: 'vɛn' },
      { accent: 'australian', ipa: 'vɛn' }
    ],
    examples: [
      { word: 'venture', meaning: 'come to risk', sentence: 'The venture succeeded.' },
      { word: 'convene', meaning: 'come together', sentence: 'The meeting will convene.' },
    ],
    relatedRootIds: ['root_vent'],
  },
  {
    id: 'root_vent',
    root: 'vent',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'come',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɛn' },
      { accent: 'british', ipa: 'vɛn' },
      { accent: 'australian', ipa: 'vɛn' }
    ],
    examples: [
      { word: 'event', meaning: 'come out', sentence: 'The event was memorable.' },
      { word: 'invent', meaning: 'come upon', sentence: 'They will invent a new device.' },
    ],
    relatedRootIds: ['root_ven'],
  },
  {
    id: 'root_ver',
    root: 'ver',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'true',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɜːr' },
      { accent: 'british', ipa: 'vɜːr' },
      { accent: 'australian', ipa: 'vɜːr' }
    ],
    examples: [
      { word: 'verify', meaning: 'make true', sentence: 'Verify the information.' },
      { word: 'verdict', meaning: 'true saying', sentence: 'The verdict was guilty.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_vers',
    root: 'vers',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'turn',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɜːrs' },
      { accent: 'british', ipa: 'vɜːrs' },
      { accent: 'australian', ipa: 'vɜːrs' }
    ],
    examples: [
      { word: 'reverse', meaning: 'turn back', sentence: 'Put the car in reverse.' },
      { word: 'diverse', meaning: 'turn apart', sentence: 'The group is diverse.' },
    ],
    relatedRootIds: ['root_vert'],
  },
  {
    id: 'root_vert',
    root: 'vert',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'turn',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɜːrs' },
      { accent: 'british', ipa: 'vɜːrs' },
      { accent: 'australian', ipa: 'vɜːrs' }
    ],
    examples: [
      { word: 'convert', meaning: 'turn together', sentence: 'Convert the file to PDF.' },
      { word: 'advertise', meaning: 'turn toward', sentence: 'They will advertise the product.' },
    ],
    relatedRootIds: ['root_vers'],
  },
  {
    id: 'root_vid',
    root: 'vid',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'see',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɪdʒ' },
      { accent: 'british', ipa: 'vɪdʒ' },
      { accent: 'australian', ipa: 'vɪdʒ' }
    ],
    examples: [
      { word: 'video', meaning: 'I see', sentence: 'Watch the video.' },
      { word: 'evidence', meaning: 'out see', sentence: 'The evidence is clear.' },
    ],
    relatedRootIds: ['root_vis'],
  },
  {
    id: 'root_vis',
    root: 'vis',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'see',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɪdʒ' },
      { accent: 'british', ipa: 'vɪdʒ' },
      { accent: 'australian', ipa: 'vɪdʒ' }
    ],
    examples: [
      { word: 'vision', meaning: 'act of seeing', sentence: 'Her vision is excellent.' },
      { word: 'visit', meaning: 'go to see', sentence: 'Visit us soon.' },
    ],
    relatedRootIds: ['root_vid'],
  },
  {
    id: 'root_voc',
    root: 'voc',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'call, voice',
    pronunciationVariants: [
      { accent: 'american', ipa: 'voʊk' },
      { accent: 'british', ipa: 'voʊk' },
      { accent: 'australian', ipa: 'voʊk' }
    ],
    examples: [
      { word: 'vocal', meaning: 'relating to voice', sentence: 'She has a vocal talent.' },
      { word: 'advocate', meaning: 'call for', sentence: 'He advocates for change.' },
    ],
    relatedRootIds: ['root_voke'],
  },
  {
    id: 'root_voke',
    root: 'voke',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'call',
    pronunciationVariants: [
      { accent: 'american', ipa: 'voʊk' },
      { accent: 'british', ipa: 'voʊk' },
      { accent: 'australian', ipa: 'voʊk' }
    ],
    examples: [
      { word: 'provoke', meaning: 'call forth', sentence: 'Don\'t provoke the animal.' },
      { word: 'revoke', meaning: 'call back', sentence: 'They will revoke the license.' },
    ],
    relatedRootIds: ['root_voc'],
  },
  {
    id: 'root_volv',
    root: 'volv',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'roll, turn',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɔːlv' },
      { accent: 'british', ipa: 'vɔːlv' },
      { accent: 'australian', ipa: 'vɔːlv' }
    ],
    examples: [
      { word: 'revolve', meaning: 'roll again', sentence: 'The Earth revolves around the sun.' },
      { word: 'involve', meaning: 'roll in', sentence: 'The task will involve teamwork.' },
    ],
    relatedRootIds: ['root_volu'],
  },
  {
    id: 'root_volu',
    root: 'volu',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'roll, turn',
    pronunciationVariants: [
      { accent: 'american', ipa: 'vɔːlv' },
      { accent: 'british', ipa: 'vɔːlv' },
      { accent: 'australian', ipa: 'vɔːlv' }
    ],
    examples: [
      { word: 'revolution', meaning: 'roll back', sentence: 'The revolution changed history.' },
      { word: 'volume', meaning: 'roll', sentence: 'Adjust the volume.' },
    ],
    relatedRootIds: ['root_volv'],
  },
  {
    id: 'root_agri',
    root: 'agri',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'field',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈæɡri' },
      { accent: 'british', ipa: 'ˈæɡri' },
      { accent: 'australian', ipa: 'ˈæɡri' }
    ],
    examples: [
      { word: 'agriculture', meaning: 'field cultivation', sentence: 'Agriculture is important.' },
      { word: 'agrarian', meaning: 'relating to field', sentence: 'Agrarian reform is needed.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_alt',
    root: 'alt',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'high',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɔlt' },
      { accent: 'british', ipa: 'ɒlt' },
      { accent: 'australian', ipa: 'ɒlt' }
    ],
    examples: [
      { word: 'altitude', meaning: 'height high', sentence: 'The altitude is high.' },
      { word: 'altar', meaning: 'high place', sentence: 'The altar is sacred.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_am',
    root: 'am',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'love',
    pronunciationVariants: [
      { accent: 'american', ipa: 'æm' },
      { accent: 'british', ipa: 'æm' },
      { accent: 'australian', ipa: 'æm' }
    ],
    examples: [
      { word: 'amorous', meaning: 'loving', sentence: 'He is amorous.' },
      { word: 'amity', meaning: 'friendship love', sentence: 'Show amity.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_anim',
    root: 'anim',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'spirit, mind',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈænɪm' },
      { accent: 'british', ipa: 'ˈænɪm' },
      { accent: 'australian', ipa: 'ˈænɪm' }
    ],
    examples: [
      { word: 'animal', meaning: 'having spirit', sentence: 'The animal is wild.' },
      { word: 'animation', meaning: 'giving spirit', sentence: 'The animation is smooth.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ann',
    root: 'ann',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'year',
    pronunciationVariants: [
      { accent: 'american', ipa: 'æn' },
      { accent: 'british', ipa: 'æn' },
      { accent: 'australian', ipa: 'æn' }
    ],
    examples: [
      { word: 'annual', meaning: 'yearly', sentence: 'The annual report is due.' },
      { word: 'anniversary', meaning: 'year turning', sentence: 'Happy anniversary.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_apt',
    root: 'apt',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'fit',
    pronunciationVariants: [
      { accent: 'american', ipa: 'æpt' },
      { accent: 'british', ipa: 'æpt' },
      { accent: 'australian', ipa: 'æpt' }
    ],
    examples: [
      { word: 'aptitude', meaning: 'fitness', sentence: 'She has aptitude.' },
      { word: 'adapt', meaning: 'fit to', sentence: 'Adapt to changes.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_aqu',
    root: 'aqu',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'water',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈækwə' },
      { accent: 'british', ipa: 'ˈækwə' },
      { accent: 'australian', ipa: 'ˈækwə' }
    ],
    examples: [
      { word: 'aquarium', meaning: 'water place', sentence: 'The aquarium is beautiful.' },
      { word: 'aquatic', meaning: 'water', sentence: 'Aquatic life is diverse.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_arch',
    root: 'arch',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'chief, ruler',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɑrtʃ' },
      { accent: 'british', ipa: 'ɑːtʃ' },
      { accent: 'australian', ipa: 'ɑːtʃ' }
    ],
    examples: [
      { word: 'architect', meaning: 'chief builder', sentence: 'The architect designed it.' },
      { word: 'monarch', meaning: 'sole ruler', sentence: 'The monarch reigns.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_aster',
    root: 'aster',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'star',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈæstər' },
      { accent: 'british', ipa: 'ˈɑːstə' },
      { accent: 'australian', ipa: 'ˈɑːstə' }
    ],
    examples: [
      { word: 'asteroid', meaning: 'star like', sentence: 'The asteroid orbits.' },
      { word: 'astronomy', meaning: 'star study', sentence: 'Study astronomy.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_audi',
    root: 'audi',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'hear',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈɔdi' },
      { accent: 'british', ipa: 'ˈɔːdi' },
      { accent: 'australian', ipa: 'ˈɔːdi' }
    ],
    examples: [
      { word: 'audio', meaning: 'hearing', sentence: 'The audio is clear.' },
      { word: 'audience', meaning: 'hearers', sentence: 'The audience applauded.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_aut',
    root: 'aut',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'self',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɔt' },
      { accent: 'british', ipa: 'ɔːt' },
      { accent: 'australian', ipa: 'ɔːt' }
    ],
    examples: [
      { word: 'autograph', meaning: 'self writing', sentence: 'Get an autograph.' },
      { word: 'automatic', meaning: 'self acting', sentence: 'The door is automatic.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_bell',
    root: 'bell',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'war',
    pronunciationVariants: [
      { accent: 'american', ipa: 'bɛl' },
      { accent: 'british', ipa: 'bɛl' },
      { accent: 'australian', ipa: 'bɛl' }
    ],
    examples: [
      { word: 'rebel', meaning: 'war again', sentence: 'The rebel fought.' },
      { word: 'belligerent', meaning: 'waging war', sentence: 'The belligerent nation attacked.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ben',
    root: 'ben',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'good, well',
    pronunciationVariants: [
      { accent: 'american', ipa: 'bɛn' },
      { accent: 'british', ipa: 'bɛn' },
      { accent: 'australian', ipa: 'bɛn' }
    ],
    examples: [
      { word: 'benefit', meaning: 'good deed', sentence: 'The benefit is great.' },
      { word: 'benevolent', meaning: 'well wishing', sentence: 'He is benevolent.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_biblio',
    root: 'biblio',
    type: 'base',
    languageOrigin: 'Greek',
    meaning: 'book',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈbɪbliəʊ' },
      { accent: 'british', ipa: 'ˈbɪbliəʊ' },
      { accent: 'australian', ipa: 'ˈbɪbliəʊ' }
    ],
    examples: [
      { word: 'bibliography', meaning: 'book writing', sentence: 'Check the bibliography.' },
      { word: 'bibliophile', meaning: 'book lover', sentence: 'He is a bibliophile.' },
    ],
    relatedRootIds: [],
  }
];
