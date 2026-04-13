import { WordRoot } from '@/types';
export const rootsEn: WordRoot[] = [
  // Greek Prefixes
  {
    id: 'root_a',
    root: 'a-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'not, without',
    pronunciationVariants: [
      { accent: 'american', ipa: 'eɪ' },
      { accent: 'british', ipa: 'eɪ' },
      { accent: 'australian', ipa: 'eɪ' }
    ],
    examples: [
      { word: 'amoral', meaning: 'without morals', sentence: 'He has an amoral attitude.' },
      { word: 'apolitical', meaning: 'not interested in politics', sentence: 'She remains apolitical.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_an',
    root: 'an-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'not, without',
    pronunciationVariants: [
      { accent: 'american', ipa: 'æn' },
      { accent: 'british', ipa: 'æn' },
      { accent: 'australian', ipa: 'æn' }
    ],
    examples: [
      { word: 'anarchy', meaning: 'without rule', sentence: 'The situation descended into anarchy.' },
      { word: 'anaesthesia', meaning: 'without sensation', sentence: 'The patient was under anaesthesia.' },
    ],
    relatedRootIds: ['root_a'],
  },
  {
    id: 'root_anti',
    root: 'anti-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'against, opposite',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈænti' },
      { accent: 'british', ipa: 'ˈænti' },
      { accent: 'australian', ipa: 'ˈænti' }
    ],
    examples: [
      { word: 'antibody', meaning: 'against body', sentence: 'Antibodies fight infections.' },
      { word: 'antisocial', meaning: 'against society', sentence: 'His antisocial behavior concerned friends.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_auto',
    root: 'auto-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'self',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈɔtoʊ' },
      { accent: 'british', ipa: 'ˈɔːtəʊ' },
      { accent: 'australian', ipa: 'ˈɔːtəʊ' }
    ],
    examples: [
      { word: 'autobiography', meaning: 'self life story', sentence: 'She wrote her autobiography.' },
      { word: 'automatic', meaning: 'self acting', sentence: 'The doors are automatic.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_bene',
    root: 'bene-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'good, well',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈbɛni' },
      { accent: 'british', ipa: 'ˈbɛni' },
      { accent: 'australian', ipa: 'ˈbɛni' }
    ],
    examples: [
      { word: 'benefactor', meaning: 'good doer', sentence: 'The benefactor donated millions.' },
      { word: 'benevolent', meaning: 'well wishing', sentence: 'She has a benevolent nature.' },
    ],
    relatedRootIds: ['root_bon'],
  },
  {
    id: 'root_bon',
    root: 'bon-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'good',
    pronunciationVariants: [
      { accent: 'american', ipa: 'bɒn' },
      { accent: 'british', ipa: 'bɒn' },
      { accent: 'australian', ipa: 'bɒn' }
    ],
    examples: [
      { word: 'bonus', meaning: 'good thing', sentence: 'He received a year-end bonus.' },
      { word: 'bona fide', meaning: 'in good faith', sentence: 'This is a bona fide offer.' },
    ],
    relatedRootIds: ['root_bene'],
  },
  {
    id: 'root_bio',
    root: 'bio-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'life',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈbaɪoʊ' },
      { accent: 'british', ipa: 'ˈbaɪəʊ' },
      { accent: 'australian', ipa: 'ˈbaɪəʊ' }
    ],
    examples: [
      { word: 'biology', meaning: 'study of life', sentence: 'Biology explores living organisms.' },
      { word: 'biography', meaning: 'life story', sentence: 'She read a biography of Marie Curie.' },
    ],
    relatedRootIds: ['root_geo'],
  },
  {
    id: 'root_circum',
    root: 'circum-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'around',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈsɜrkəm' },
      { accent: 'british', ipa: 'ˈsɜːkəm' },
      { accent: 'australian', ipa: 'ˈsɜːkəm' }
    ],
    examples: [
      { word: 'circumference', meaning: 'around carrying', sentence: 'Measure the circumference.' },
      { word: 'circumnavigate', meaning: 'around sailing', sentence: 'They planned to circumnavigate the globe.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_con',
    root: 'con-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'with, together',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kɒn' },
      { accent: 'british', ipa: 'kɒn' },
      { accent: 'australian', ipa: 'kɒn' }
    ],
    examples: [
      { word: 'connect', meaning: 'together join', sentence: 'Connect the cables.' },
      { word: 'congregate', meaning: 'together gather', sentence: 'People congregate in the square.' },
    ],
    relatedRootIds: ['root_com'],
  },
  {
    id: 'root_com',
    root: 'com-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'with, together',
    pronunciationVariants: [
      { accent: 'american', ipa: 'kɒm' },
      { accent: 'british', ipa: 'kɒm' },
      { accent: 'australian', ipa: 'kɒm' }
    ],
    examples: [
      { word: 'combine', meaning: 'together join', sentence: 'Combine the ingredients.' },
      { word: 'community', meaning: 'together', sentence: 'She loves her community.' },
    ],
    relatedRootIds: ['root_con'],
  },
  {
    id: 'root_de',
    root: 'de-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'down, away from',
    pronunciationVariants: [
      { accent: 'american', ipa: 'di' },
      { accent: 'british', ipa: 'diː' },
      { accent: 'australian', ipa: 'diː' }
    ],
    examples: [
      { word: 'decrease', meaning: 'down grow', sentence: 'The numbers began to decrease.' },
      { word: 'depart', meaning: 'away from part', sentence: 'The train will depart soon.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_dia',
    root: 'dia-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'through, across',
    pronunciationVariants: [
      { accent: 'american', ipa:'ˈdaɪə' },
      { accent: 'british', ipa:'ˈdaɪə' },
      { accent: 'australian', ipa:'ˈdaɪə' }
    ],
    examples: [
      { word: 'diagonal', meaning: 'across angle', sentence: 'Draw a diagonal line.' },
      { word: 'dialogue', meaning: 'through speech', sentence: 'The dialogue was engaging.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_dys',
    root: 'dys-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'bad, difficult',
    pronunciationVariants: [
      { accent: 'american', ipa: 'dɪs' },
      { accent: 'british', ipa: 'dɪs' },
      { accent: 'australian', ipa: 'dɪs' }
    ],
    examples: [
      { word: 'dysfunction', meaning: 'bad function', sentence: 'The system has a dysfunction.' },
      { word: 'dyslexia', meaning: 'bad reading', sentence: 'Dyslexia affects reading ability.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_eu',
    root: 'eu-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'good, well',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ju' },
      { accent: 'british', ipa: 'ju' },
      { accent: 'australian', ipa: 'ju' }
    ],
    examples: [
      { word: 'euphoria', meaning: 'well feeling', sentence: 'She felt euphoria after winning.' },
      { word: 'eulogy', meaning: 'good words', sentence: 'He delivered a eulogy.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ex',
    root: 'ex-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'out of, from',
    pronunciationVariants: [
      { accent: 'american', ipa: 'eks' },
      { accent: 'british', ipa: 'eks' },
      { accent: 'australian', ipa: 'eks' }
    ],
    examples: [
      { word: 'exit', meaning: 'out go', sentence: 'Use the emergency exit.' },
      { word: 'export', meaning: 'out carry', sentence: 'They export goods worldwide.' },
    ],
    relatedRootIds: ['root_e'],
  },
  {
    id: 'root_e',
    root: 'e-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'out of',
    pronunciationVariants: [
      { accent: 'american', ipa: 'i' },
      { accent: 'british', ipa: 'i' },
      { accent: 'australian', ipa: 'i' }
    ],
    examples: [
      { word: 'evaporate', meaning: 'out vapor', sentence: 'Water will evaporate.' },
      { word: 'erupt', meaning: 'out break', sentence: 'The volcano may erupt.' },
    ],
    relatedRootIds: ['root_ex'],
  },
  {
    id: 'root_extra',
    root: 'extra-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'beyond, outside',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈɛkstrə' },
      { accent: 'british', ipa: 'ˈɛkstrə' },
      { accent: 'australian', ipa: 'ˈɛkstrə' }
    ],
    examples: [
      { word: 'extraordinary', meaning: 'beyond ordinary', sentence: 'It was an extraordinary event.' },
      { word: 'extracurricular', meaning: 'outside curriculum', sentence: 'She joined extracurricular activities.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_geo',
    root: 'geo-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'earth',
    pronunciationVariants: [
      { accent: 'american', ipa: 'd\'i' },
      { accent: 'british', ipa: 'd\'i' },
      { accent: 'australian', ipa: 'd\'i' }
    ],
    examples: [
      { word: 'geography', meaning: 'earth writing', sentence: 'Geography helps us understand maps.' },
      { word: 'geology', meaning: 'earth study', sentence: 'Geology explains rock formations.' },
    ],
    relatedRootIds: ['root_bio'],
  },
  {
    id: 'root_hyper',
    root: 'hyper-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'over, above',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ha\'p\'r' },
      { accent: 'british', ipa: 'ha\'p\'r' },
      { accent: 'australian', ipa: 'ha\'p\'r' }
    ],
    examples: [
      { word: 'hyperactive', meaning: 'over active', sentence: 'The child is hyperactive.' },
      { word: 'hypertension', meaning: 'over pressure', sentence: 'Hypertension requires medication.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_hypo',
    root: 'hypo-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'under, below',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈhaɪpə' },
      { accent: 'british', ipa: 'ˈhaɪpə' },
      { accent: 'australian', ipa: 'ˈhaɪpə' }
    ],
    examples: [
      { word: 'hypothermia', meaning: 'under heat', sentence: 'Hypothermia is dangerous in cold.' },
      { word: 'hypodermic', meaning: 'under skin', sentence: 'The medicine is applied hypodermically.' },
      { word: 'hypoglycemia', meaning: 'low sugar', sentence: 'Hypoglycemia requires dietary changes.' },
      { word: 'hypotension', meaning: 'low blood pressure', sentence: 'The patient has hypotension.' },
      { word: 'hypothesis', meaning: 'assumption', sentence: 'My hypothesis was correct.' },
      { word: 'hypocrisy', meaning: 'pretending', sentence: 'His hypocrisy was obvious.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_in',
    root: 'in-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'in, into, not',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪn' },
      { accent: 'british', ipa: 'ɪn' },
      { accent: 'australian', ipa: 'ɪn' }
    ],
    examples: [
      { word: 'induce', meaning: 'lead in', sentence: 'The medicine will induce sleep.' },
      { word: 'infect', meaning: 'cause disease', sentence: 'The wound can become infected.' },
      { word: 'inspire', meaning: 'breathe in', sentence: 'The view will inspire creativity.' },
      { word: 'invade', meaning: 'enter forcefully', sentence: 'They will invade the territory.' },
      { word: 'investigate', meaning: 'examine', sentence: 'Detectives will investigate the crime.' },
      { word: 'inherit', meaning: 'receive after death', sentence: 'She will inherit the fortune.' },
    ],
    relatedRootIds: ['root_im', 'root_il', 'root_ir'],
  },
  {
    id: 'root_il',
    root: 'il-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'not',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪˈluː' },
      { accent: 'british', ipa: 'ɪˈluː' },
      { accent: 'australian', ipa: 'ɪˈluː' }
    ],
    examples: [
      { word: 'illegal', meaning: 'not legal', sentence: 'The action was illegal.' },
      { word: 'illogical', meaning: 'not logical', sentence: 'His argument was illogical.' },
      { word: 'illiterate', meaning: 'unable to read', sentence: 'Many people are illiterate.' },
      { word: 'illegible', meaning: 'unable to read', sentence: 'The handwriting was illegible.' },
      { word: 'illimitable', meaning: 'impossible to imitate', sentence: 'The sound was illimitable.' },
      { word: 'illegitimate', meaning: 'not lawful', sentence: 'The claim was illegitimate.' },
    ],
    relatedRootIds: ['root_in', 'root_ir'],
  },
  {
    id: 'root_ir',
    root: 'ir-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'not',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɪˈrɛɡələr' },
      { accent: 'british', ipa: 'ɪˈrɛɡələ' },
      { accent: 'australian', ipa: 'ɪˈrɛɡələ' }
    ],
    examples: [
      { word: 'irregular', meaning: 'not regular', sentence: 'The pattern is irregular.' },
      { word: 'irresponsible', meaning: 'not responsible', sentence: 'He acted irresponsibly.' },
      { word: 'irrational', meaning: 'not rational', sentence: 'Her decision was irrational.' },
      { word: 'irreconcilable', meaning: 'cannot be reconciled', sentence: 'The differences are irreconcilable.' },
    ],
    relatedRootIds: ['root_il'],
  },
  {
    id: 'root_inter',
    root: 'inter-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'between, among',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˌɪntərˈækt' },
      { accent: 'british', ipa: 'ˌɪntərˈækt' },
      { accent: 'australian', ipa: 'ˌɪntərˈækt' }
    ],
    examples: [
      { word: 'international', meaning: 'between nations', sentence: 'It\'s an international issue.' },
      { word: 'interrupt', meaning: 'between break', sentence: 'Don\'t interrupt the speaker.' },
      { word: 'interview', meaning: 'view between', sentence: 'The interview is scheduled between 2 and 4.' },
      { word: 'interfere', meaning: 'interfere with', sentence: 'They will interfere with the process.' },
      { word: 'interject', meaning: 'throw between', sentence: 'Interject the ball between players.' },
      { word: 'intermission', meaning: 'between send', sentence: 'The satellite will intermission data.' },
      { word: 'interstate', meaning: 'between states', sentence: 'Interstate commerce is regulated.' },
      { word: 'interact', meaning: 'act between', sentence: 'The chemicals will interact.' },
      { word: 'interchange', meaning: 'exchange between', sentence: 'They will interchange goods.' },
      { word: 'interconnect', meaning: 'connect between', sentence: 'The bridge will interconnect the islands.' },
    ],
    relatedRootIds: ['root_inter'],
  },
  {
    id: 'root_intra',
    root: 'intra-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'within',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˌɪntrə' },
      { accent: 'british', ipa: 'ˌɪntrə' },
      { accent: 'australian', ipa: 'ˌɪntrə' }
    ],
    examples: [
      { word: 'intrastate', meaning: 'within state', sentence: 'It\'s an intrastate highway.' },
      { word: 'intravenous', meaning: 'within vein', sentence: 'The medication is intravenous.' },
      { word: 'intramural', meaning: 'within wall', sentence: 'The painting is intramural.' },
      { word: 'intramuscular', meaning: 'within muscle', sentence: 'The injection is intramuscular.' },
      { word: 'intracellular', meaning: 'within cell', sentence: 'The disease affects intracellular structures.' },
    ],
    relatedRootIds: ['root_in'],
  },
  {
    id: 'root_macro',
    root: 'macro-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'large',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈmækroʊ' },
      { accent: 'british', ipa: 'ˈmækroʊ' },
      { accent: 'australian', ipa: 'ˈmækroʊ' }
    ],
    examples: [
      { word: 'macroeconomics', meaning: 'large economics', sentence: 'Macroeconomics studies whole economies.' },
      { word: 'macroscopic', meaning: 'large visible', sentence: 'It\'s visible on a macroscopic level.' },
    ],
    relatedRootIds: ['root_micro'],
  },
  {
    id: 'root_micro',
    root: 'micro-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'small',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈmaɪkroʊ' },
      { accent: 'british', ipa: 'ˈmaɪkroʊ' },
      { accent: 'australian', ipa: 'ˈmaɪkroʊ' }
    ],
    examples: [
      { word: 'microscope', meaning: 'small scale', sentence: 'We viewed the sample under a microscope.' },
      { word: 'microphone', meaning: 'small telephone', sentence: 'She spoke on the microphone.' },
      { word: 'microwave', meaning: 'small wave', sentence: 'The microwave heats food quickly.' },
      { word: 'microsurgery', meaning: 'small surgery', sentence: 'The surgeon performed microsurgery.' },
    ],
    relatedRootIds: ['root_micro'],
  },
  {
    id: 'root_mal',
    root: 'mal-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'bad',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mæl' },
      { accent: 'british', ipa: 'mæl' },
      { accent: 'australian', ipa: 'mæl' }
    ],
    examples: [
      { word: 'malfunction', meaning: 'bad function', sentence: 'The machine began to malfunction.' },
      { word: 'malnutrition', meaning: 'bad nutrition', sentence: 'Malnutrition affects development.' },
    ],
    relatedRootIds: ['root_mal'],
  },
  {
    id: 'root_meta',
    root: 'meta-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'beyond, change',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈmɛtə' },
      { accent: 'british', ipa: 'ˈmɛtə' },
      { accent: 'australian', ipa: 'ˈmɛtə' }
    ],
    examples: [
      { word: 'metamorphosis', meaning: 'change form', sentence: 'The butterfly undergoes metamorphosis.' },
      { word: 'metadata', meaning: 'beyond data', sentence: 'The file contains metadata.' },
    ],
    relatedRootIds: ['root_meta'],
  },
  {
    id: 'root_mis',
    root: 'mis-',
    type: 'prefix',
    languageOrigin: 'Old English',
    meaning: 'wrong, bad',
    pronunciationVariants: [
      { accent: 'american', ipa: 'mɪs' },
      { accent: 'british', ipa: 'mɪs' },
      { accent: 'australian', ipa: 'mɪs' }
    ],
    examples: [
      { word: 'misunderstand', meaning: 'wrong understand', sentence: 'Don\'t misunderstand me.' },
      { word: 'misfortune', meaning: 'bad fortune', sentence: 'She suffered misfortune.' },
    ],
    relatedRootIds: ['root_mis'],
  },
  {
    id: 'root_mono',
    root: 'mono-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'one, single',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈmɒnə' },
      { accent: 'british', ipa: 'ˈmɒnə' },
      { accent: 'australian', ipa: 'ˈmɒnə' }
    ],
    examples: [
      { word: 'monologue', meaning: 'one speech', sentence: 'The actor delivered a monologue.' },
      { word: 'monochrome', meaning: 'one color', sentence: 'The photo is monochrome.' },
    ],
    relatedRootIds: ['root_poly'],
  },
  {
    id: 'root_multi',
    root: 'multi-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'many',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈmʌlti' },
      { accent: 'british', ipa: 'ˈmʌlti' },
      { accent: 'australian', ipa: 'ˈmʌlti' }
    ],
    examples: [
      { word: 'multilingual', meaning: 'many languages', sentence: 'She is multilingual.' },
      { word: 'multimedia', meaning: 'many media', sentence: 'The company uses multimedia.' },
      { word: 'multitasking', meaning: 'many tasks', sentence: 'He is multitasking.' },
      { word: 'multicultural', meaning: 'many cultures', sentence: 'The city is multicultural.' },
    ],
    relatedRootIds: ['root_multi'],
  },
  {
    id: 'root_non',
    root: 'non-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'not',
    pronunciationVariants: [
      { accent: 'american', ipa: 'nɒn' },
      { accent: 'british', ipa: 'nɒn' },
      { accent: 'australian', ipa: 'nɒn' }
    ],
    examples: [
      { word: 'nonfiction', meaning: 'not fiction', sentence: 'I prefer nonfiction books.' },
      { word: 'nonstop', meaning: 'not stop', sentence: 'The flight was nonstop.' },
    ],
    relatedRootIds: ['root_non'],
  },
  {
    id: 'root_omni',
    root: 'omni-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'all',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ɑmˈnɪ' },
      { accent: 'british', ipa: 'ɑmˈnɪ' },
      { accent: 'australian', ipa: 'ɑmˈnɪ' }
    ],
    examples: [
      { word: 'omnipotent', meaning: 'all powerful', sentence: 'The deity is omnipotent.' },
      { word: 'omniscient', meaning: 'all knowing', sentence: 'The narrator seems omniscient.' },
    ],
    relatedRootIds: ['root_omni'],
  },
  {
    id: 'root_over',
    root: 'over-',
    type: 'prefix',
    languageOrigin: 'Old English',
    meaning: 'above, excessive',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˌʊvər' },
      { accent: 'british', ipa: 'ˌʊvə' },
      { accent: 'australian', ipa: 'ˌʊvə' }
    ],
    examples: [
      { word: 'overlook', meaning: 'above look', sentence: 'Don\'t overlook the details.' },
      { word: 'overestimate', meaning: 'excessive estimate', sentence: 'Don\'t overestimate your abilities.' },
    ],
    relatedRootIds: ['root_over'],
  },
  {
    id: 'root_para',
    root: 'para-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'beside, beyond',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈpærə' },
      { accent: 'british', ipa: 'ˈpærə' },
      { accent: 'australian', ipa: 'ˈpærə' }
    ],
    examples: [
      { word: 'parachute', meaning: 'against fall', sentence: 'The parachute opened safely.' },
      { word: 'paranormal', meaning: 'beyond normal', sentence: 'They investigated paranormal activity.' },
      { word: 'paradox', meaning: 'contrary to expectation', sentence: 'His paradox was confusing.' },
    ],
    relatedRootIds: ['root_para'],
  },
  {
    id: 'root_per',
    root: 'per-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'through',
    pronunciationVariants: [
      { accent: 'american', ipa: 'pər' },
      { accent: 'british', ipa: 'pər' },
      { accent: 'australian', ipa: 'pər' }
    ],
    examples: [
      { word: 'persevere', meaning: 'through severe', sentence: 'You must persevere.' },
      { word: 'permanent', meaning: 'through remain', sentence: 'The change is permanent.' },
    ],
    relatedRootIds: ['root_per'],
  },
  {
    id: 'root_post',
    root: 'post-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'after',
    pronunciationVariants: [
      { accent: 'american', ipa: 'poʊst' },
      { accent: 'british', ipa: 'poʊst' },
      { accent: 'australian', ipa: 'poʊst' }
    ],
    examples: [
      { word: 'postwar', meaning: 'after war', sentence: 'The postwar period brought changes.' },
      { word: 'postpone', meaning: 'after place', sentence: 'They postponed the meeting.' },
    ],
    relatedRootIds: ['root_post'],
  },
  {
    id: 'root_pre',
    root: 'pre-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'before',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈpriː' },
      { accent: 'british', ipa: 'priː' },
      { accent: 'australian', ipa: 'priː' }
    ],
    examples: [
      { word: 'preview', meaning: 'before view', sentence: 'Watch the movie preview.' },
      { word: 'prepare', meaning: 'before get ready', sentence: 'Prepare for exam.' },
    ],
    relatedRootIds: ['root_pre'],
  },
  {
    id: 'root_pro',
    root: 'pro-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'forward, for',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ˈproʊ' },
      { accent: 'british', ipa: 'proʊ' },
      { accent: 'australian', ipa: 'proʊ' }
    ],
    examples: [
      { word: 'progress', meaning: 'forward step', sentence: 'We made good progress.' },
      { word: 'propel', meaning: 'forward drive', sentence: 'The engine will propel the car.' },
    ],
    relatedRootIds: ['root_pro'],
  },
  {
    id: 'root_pseudo',
    root: 'pseudo-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'false',
    pronunciationVariants: [
      { accent: 'american', ipa: 'su\'d' },
      { accent: 'british', ipa: 'su\'d' },
      { accent: 'australian', ipa: 'su\'d' }
    ],
    examples: [
      { word: 'pseudonym', meaning: 'false name', sentence: 'The author used a pseudonym.' },
      { word: 'pseudoscience', meaning: 'false science', sentence: 'That theory is pseudoscience.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_re',
    root: 're-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'back, again',
    pronunciationVariants: [
      { accent: 'american', ipa: 'ri' },
      { accent: 'british', ipa: 'ri' },
      { accent: 'australian', ipa: 'ri' }
    ],
    examples: [
      { word: 'revisit', meaning: 'again visit', sentence: 'Let\'s revisit the topic.' },
      { word: 'return', meaning: 'back turn', sentence: 'Please return the book.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_semi',
    root: 'semi-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'half',
    pronunciationVariants: [
      { accent: 'american', ipa: 's\'emi' },
      { accent: 'british', ipa: 's\'emi' },
      { accent: 'australian', ipa: 's\'emi' }
    ],
    examples: [
      { word: 'semicircle', meaning: 'half circle', sentence: 'Draw a semicircle.' },
      { word: 'semifinal', meaning: 'half final', sentence: 'They reached the semifinal.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_sub',
    root: 'sub-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'under, below',
    pronunciationVariants: [
      { accent: 'american', ipa: 's\'b' },
      { accent: 'british', ipa: 's\'b' },
      { accent: 'australian', ipa: 's\'b' }
    ],
    examples: [
      { word: 'submarine', meaning: 'under sea', sentence: 'The submarine dove deep.' },
      { word: 'subway', meaning: 'under way', sentence: 'Take the subway to work.' },
    ],
    relatedRootIds: ['root_sup'],
  },
  {
    id: 'root_sup',
    root: 'sup-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'above, over',
    pronunciationVariants: [
      { accent: 'american', ipa: 's\'p' },
      { accent: 'british', ipa: 's\'p' },
      { accent: 'australian', ipa: 's\'p' }
    ],
    examples: [
      { word: 'superior', meaning: 'above', sentence: 'She has superior skills.' },
      { word: 'supernatural', meaning: 'above natural', sentence: 'The event seemed supernatural.' },
    ],
    relatedRootIds: ['root_sub'],
  },
  {
    id: 'root_super',
    root: 'super-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'above, over',
    pronunciationVariants: [
      { accent: 'american', ipa: 's\'p' },
      { accent: 'british', ipa: 's\'p' },
      { accent: 'australian', ipa: 's\'p' }
    ],
    examples: [
      { word: 'superhero', meaning: 'above hero', sentence: 'The movie features a superhero.' },
      { word: 'supervisor', meaning: 'over seer', sentence: 'Report to your supervisor.' },
    ],
    relatedRootIds: ['root_sub'],
  },
  {
    id: 'root_syn',
    root: 'syn-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'with, together',
    pronunciationVariants: [
      { accent: 'american', ipa: 's\'n' },
      { accent: 'british', ipa: 's\'n' },
      { accent: 'australian', ipa: 's\'n' }
    ],
    examples: [
      { word: 'synthesis', meaning: 'together placing', sentence: 'The synthesis created new compounds.' },
      { word: 'synchronize', meaning: 'together time', sentence: 'Synchronize your watches.' },
    ],
    relatedRootIds: ['root_sym'],
  },
  {
    id: 'root_sym',
    root: 'sym-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'with, together',
    pronunciationVariants: [
      { accent: 'american', ipa: 's\'n' },
      { accent: 'british', ipa: 's\'n' },
      { accent: 'australian', ipa: 's\'n' }
    ],
    examples: [
      { word: 'symphony', meaning: 'together sound', sentence: 'The symphony was beautiful.' },
      { word: 'sympathy', meaning: 'together feeling', sentence: 'She showed great sympathy.' },
    ],
    relatedRootIds: ['root_syn'],
  },
  {
    id: 'root_tele',
    root: 'tele-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'far, distant',
    pronunciationVariants: [
      { accent: 'american', ipa: 't\'eli' },
      { accent: 'british', ipa: 't\'eli' },
      { accent: 'australian', ipa: 't\'eli' }
    ],
    examples: [
      { word: 'telephone', meaning: 'far sound', sentence: 'Answer the telephone.' },
      { word: 'television', meaning: 'far vision', sentence: 'Watch television tonight.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_trans',
    root: 'trans-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'across, beyond',
    pronunciationVariants: [
      { accent: 'american', ipa: 'tr\'ns' },
      { accent: 'british', ipa: 'tr\'ns' },
      { accent: 'australian', ipa: 'tr\'ns' }
    ],
    examples: [
      { word: 'transport', meaning: 'across carry', sentence: 'They transport goods by truck.' },
      { word: 'translate', meaning: 'across carry', sentence: 'Can you translate this text?' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_un',
    root: 'un-',
    type: 'prefix',
    languageOrigin: 'Old English',
    meaning: 'not',
    pronunciationVariants: [
      { accent: 'american', ipa: '\'n' },
      { accent: 'british', ipa: '\'n' },
      { accent: 'australian', ipa: '\'n' }
    ],
    examples: [
      { word: 'unhappy', meaning: 'not happy', sentence: 'She felt unhappy.' },
      { word: 'unusual', meaning: 'not usual', sentence: 'That\'s an unusual idea.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_under',
    root: 'under-',
    type: 'prefix',
    languageOrigin: 'Old English',
    meaning: 'below, insufficient',
    pronunciationVariants: [
      { accent: 'american', ipa: '\'nd\'r' },
      { accent: 'british', ipa: '\'nd\'r' },
      { accent: 'australian', ipa: '\'nd\'r' }
    ],
    examples: [
      { word: 'underestimate', meaning: 'below estimate', sentence: 'Don\'t underestimate your opponent.' },
      { word: 'underground', meaning: 'below ground', sentence: 'The train runs underground.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_up',
    root: 'up-',
    type: 'prefix',
    languageOrigin: 'Old English',
    meaning: 'up, upward',
    pronunciationVariants: [
      { accent: 'american', ipa: '\'p' },
      { accent: 'british', ipa: '\'p' },
      { accent: 'australian', ipa: '\'p' }
    ],
    examples: [
      { word: 'upgrade', meaning: 'up grade', sentence: 'We need to upgrade the system.' },
      { word: 'uplift', meaning: 'up lift', sentence: 'The speech will uplift spirits.' },
    ],
    relatedRootIds: [],
  },
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
];
