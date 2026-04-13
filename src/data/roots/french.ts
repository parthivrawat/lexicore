import { WordRoot } from '@/types';

export const rootsFr: WordRoot[] = [
  // Latin Prefixes (French roots from Latin)
  {
    id: 'root_a_fr',
    root: 'a-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'à, vers (to, towards)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'a' },
      { accent: 'quebecois', ipa: 'a' },
      { accent: 'belgian', ipa: 'a' }
    ],
    examples: [
      { word: 'arriver', meaning: 'to arrive', sentence: 'Il arrive à midi.' },
      { word: 'aller', meaning: 'to go', sentence: 'Je vais au marché.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ab_fr',
    root: 'ab-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'éloignement de (away from)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ab' },
      { accent: 'quebecois', ipa: 'ab' },
      { accent: 'belgian', ipa: 'ab' }
    ],
    examples: [
      { word: 'absent', meaning: 'away, not present', sentence: 'Il est absent aujourd\'hui.' },
      { word: 'abandonner', meaning: 'to abandon', sentence: 'Elle a abandonné ses études.' },
    ],
    relatedRootIds: ['root_a_fr'],
  },
  {
    id: 'root_anti_fr',
    root: 'anti-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'contre (against)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɑ̃ti' },
      { accent: 'quebecois', ipa: 'ɑ̃ti' },
      { accent: 'belgian', ipa: 'ɑ̃ti' }
    ],
    examples: [
      { word: 'antipathie', meaning: 'dislike', sentence: 'J\'ai une antipathie pour le froid.' },
      { word: 'antique', meaning: 'ancient', sentence: 'C\'est un vase antique.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_auto_fr',
    root: 'auto-',
    type: 'prefix',
    languageOrigin: 'Greek',
    meaning: 'soi-même (self)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'oto' },
      { accent: 'quebecois', ipa: 'oto' },
      { accent: 'belgian', ipa: 'oto' }
    ],
    examples: [
      { word: 'automobile', meaning: 'car', sentence: 'Il conduit une automobile rouge.' },
      { word: 'autonomie', meaning: 'autonomy', sentence: 'Ce pays a gagné son autonomie.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_bien_fr',
    root: 'bien-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'bon (good)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'bjɛ̃' },
      { accent: 'quebecois', ipa: 'bjɛ̃' },
      { accent: 'belgian', ipa: 'bjɛ̃' }
    ],
    examples: [
      { word: 'bienvenue', meaning: 'welcome', sentence: 'Bienvenue chez nous!' },
      { word: 'bienfait', meaning: 'good deed', sentence: 'C\'est un bienfait pour la communauté.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_com_fr',
    root: 'com-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'avec, ensemble (with, together)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kɔm' },
      { accent: 'quebecois', ipa: 'kɔm' },
      { accent: 'belgian', ipa: 'kɔm' }
    ],
    examples: [
      { word: 'commencer', meaning: 'to begin', sentence: 'On commence le travail.' },
      { word: 'comprendre', meaning: 'to understand', sentence: 'Je comprends la leçon.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_de_fr',
    root: 'dé-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'descendant, négation (down, negation)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'de' },
      { accent: 'quebecois', ipa: 'de' },
      { accent: 'belgian', ipa: 'de' }
    ],
    examples: [
      { word: 'descendre', meaning: 'to go down', sentence: 'Il descend l\'escalier.' },
      { word: 'défaire', meaning: 'to undo', sentence: 'Elle défait son paquet.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_in_fr',
    root: 'in-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'négation ou dedans (negation or in)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɛ̃' },
      { accent: 'quebecois', ipa: 'ɛ̃' },
      { accent: 'belgian', ipa: 'ɛ̃' }
    ],
    examples: [
      { word: 'incapable', meaning: 'incapable', sentence: 'Il est incapable de mentir.' },
      { word: 'intérieur', meaning: 'inside', sentence: 'La maison a un beau jardin intérieur.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_mal_fr',
    root: 'mal-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'mauvais (bad)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'mal' },
      { accent: 'quebecois', ipa: 'mal' },
      { accent: 'belgian', ipa: 'mal' }
    ],
    examples: [
      { word: 'malheureux', meaning: 'unhappy', sentence: 'Il semble malheureux aujourd\'hui.' },
      { word: 'maladie', meaning: 'illness', sentence: 'La grippe est une maladie courante.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_re_fr',
    root: 're-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'répétition, retour (repetition, return)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁə' },
      { accent: 'quebecois', ipa: 'ʁə' },
      { accent: 'belgian', ipa: 'ʁə' }
    ],
    examples: [
      { word: 'revenir', meaning: 'to come back', sentence: 'Elle revient demain.' },
      { word: 'refaire', meaning: 'to redo', sentence: 'Je dois refaire mes devoirs.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_sous_fr',
    root: 'sous-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'en dessous (under)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'su' },
      { accent: 'quebecois', ipa: 'su' },
      { accent: 'belgian', ipa: 'su' }
    ],
    examples: [
      { word: 'sous-marin', meaning: 'submarine', sentence: 'Le sous-marin plonge dans l\'océan.' },
      { word: 'sous-sol', meaning: 'basement', sentence: 'Le vin est stocké dans le sous-sol.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_sur_fr',
    root: 'sur-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'au-dessus, excessif (over, excessive)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'syʁ' },
      { accent: 'quebecois', ipa: 'syʁ' },
      { accent: 'belgian', ipa: 'syʁ' }
    ],
    examples: [
      { word: 'surprendre', meaning: 'to surprise', sentence: 'Ce cadeau me surprend.' },
      { word: 'surtout', meaning: 'especially', sentence: 'J\'aime les fruits, surtout les pommes.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_trans_fr',
    root: 'trans-',
    type: 'prefix',
    languageOrigin: 'Latin',
    meaning: 'au-delà, à travers (beyond, across)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'tʁɑ̃s' },
      { accent: 'quebecois', ipa: 'tʁɑ̃s' },
      { accent: 'belgian', ipa: 'tʁɑ̃s' }
    ],
    examples: [
      { word: 'transporter', meaning: 'to transport', sentence: 'Le camion transporte des marchandises.' },
      { word: 'transparent', meaning: 'transparent', sentence: 'Le verre est transparent.' },
    ],
    relatedRootIds: [],
  },

  // Latin Suffixes
  {
    id: 'root_able_fr',
    root: '-able',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'capacité de (ability to)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'abl' },
      { accent: 'quebecois', ipa: 'abl' },
      { accent: 'belgian', ipa: 'abl' }
    ],
    examples: [
      { word: 'lisible', meaning: 'readable', sentence: 'Ce texte est très lisible.' },
      { word: 'visible', meaning: 'visible', sentence: 'La tour est visible de loin.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_age_fr',
    root: '-age',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'action, collection (action, collection)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'aʒ' },
      { accent: 'quebecois', ipa: 'aʒ' },
      { accent: 'belgian', ipa: 'aʒ' }
    ],
    examples: [
      { word: 'voyage', meaning: 'journey', sentence: 'Nous faisons un voyage en Italie.' },
      { word: 'message', meaning: 'message', sentence: 'J\'ai reçu un message important.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ain_fr',
    root: '-ain',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'origine, appartenance (origin, belonging)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɛ̃' },
      { accent: 'quebecois', ipa: 'ɛ̃' },
      { accent: 'belgian', ipa: 'ɛ̃' }
    ],
    examples: [
      { word: 'américain', meaning: 'American', sentence: 'Il est américain.' },
      { word: 'champignon', meaning: 'mushroom', sentence: 'Ce champignon est comestible.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ation_fr',
    root: '-ation',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'action, état (action, state)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'asjɔ̃' },
      { accent: 'quebecois', ipa: 'asjɔ̃' },
      { accent: 'belgian', ipa: 'asjɔ̃' }
    ],
    examples: [
      { word: 'création', meaning: 'creation', sentence: 'La création artistique est importante.' },
      { word: 'information', meaning: 'information', sentence: 'J\'ai besoin de plus d\'information.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_eur_fr',
    root: '-eur',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'celui qui fait (one who does)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'œʁ' },
      { accent: 'quebecois', ipa: 'œʁ' },
      { accent: 'belgian', ipa: 'œʁ' }
    ],
    examples: [
      { word: 'professeur', meaning: 'teacher', sentence: 'Le professeur explique la leçon.' },
      { word: 'acteur', meaning: 'actor', sentence: 'L\'acteur joue dans un film.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_ment_fr',
    root: '-ment',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'manière d\'agir (manner of acting)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'mɑ̃' },
      { accent: 'quebecois', ipa: 'mɑ̃' },
      { accent: 'belgian', ipa: 'mɑ̃' }
    ],
    examples: [
      { word: 'rapidement', meaning: 'quickly', sentence: 'Il court rapidement.' },
      { word: 'lentement', meaning: 'slowly', sentence: 'Elle parle lentement.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_tion_fr',
    root: '-tion',
    type: 'suffix',
    languageOrigin: 'Latin',
    meaning: 'action, résultat (action, result)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'sjɔ̃' },
      { accent: 'quebecois', ipa: 'sjɔ̃' },
      { accent: 'belgian', ipa: 'sjɔ̃' }
    ],
    examples: [
      { word: 'nation', meaning: 'nation', sentence: 'La France est une nation.' },
      { word: 'question', meaning: 'question', sentence: 'J\'ai une question importante.' },
    ],
    relatedRootIds: [],
  },

  // Base Roots
  {
    id: 'root_port_fr',
    root: 'port',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'porter (to carry)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'pɔʁ' },
      { accent: 'quebecois', ipa: 'pɔʁ' },
      { accent: 'belgian', ipa: 'pɔʁ' }
    ],
    examples: [
      { word: 'porter', meaning: 'to carry', sentence: 'Je porte un sac lourd.' },
      { word: 'transport', meaning: 'transport', sentence: 'Le transport en commun est efficace.' },
      { word: 'portable', meaning: 'portable', sentence: 'Mon téléphone est portable.' },
    ],
    relatedRootIds: ['root_trans_fr'],
  },
  {
    id: 'root_voir_fr',
    root: 'voir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'voir (to see)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'vwaʁ' },
      { accent: 'quebecois', ipa: 'vwaʁ' },
      { accent: 'belgian', ipa: 'vwaʁ' }
    ],
    examples: [
      { word: 'voir', meaning: 'to see', sentence: 'Je vois les montagnes.' },
      { word: 'revue', meaning: 'review', sentence: 'J\'ai lu la revue.' },
      { word: 'visible', meaning: 'visible', sentence: 'La lumière est visible.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_able_fr'],
  },
  {
    id: 'root_dire_fr',
    root: 'dire',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'dire (to say)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'diʁ' },
      { accent: 'quebecois', ipa: 'diʁ' },
      { accent: 'belgian', ipa: 'diʁ' }
    ],
    examples: [
      { word: 'dire', meaning: 'to say', sentence: 'Je dis la vérité.' },
      { word: 'interdire', meaning: 'to forbid', sentence: 'La loi interdit de fumer ici.' },
      { word: 'prédire', meaning: 'to predict', sentence: 'Il prédit l\'avenir.' },
    ],
    relatedRootIds: ['root_in_fr'],
  },
  {
    id: 'root_faire_fr',
    root: 'faire',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'faire (to do/make)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'fɛʁ' },
      { accent: 'quebecois', ipa: 'fɛʁ' },
      { accent: 'belgian', ipa: 'fɛʁ' }
    ],
    examples: [
      { word: 'faire', meaning: 'to do/make', sentence: 'Je fais mes devoirs.' },
      { word: 'refaire', meaning: 'to redo', sentence: 'Il faut refaire le travail.' },
      { word: 'bienfait', meaning: 'good deed', sentence: 'C\'est un bienfait.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_bien_fr'],
  },
  {
    id: 'root_venir_fr',
    root: 'venir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'venir (to come)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'vəniʁ' },
      { accent: 'quebecois', ipa: 'vəniʁ' },
      { accent: 'belgian', ipa: 'vəniʁ' }
    ],
    examples: [
      { word: 'venir', meaning: 'to come', sentence: 'Je viens demain.' },
      { word: 'revenir', meaning: 'to come back', sentence: 'Elle revient à la maison.' },
      { word: 'avenir', meaning: 'future', sentence: 'L\'avenir est incertain.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_tenir_fr',
    root: 'tenir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'tenir (to hold)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'təniʁ' },
      { accent: 'quebecois', ipa: 'təniʁ' },
      { accent: 'belgian', ipa: 'təniʁ' }
    ],
    examples: [
      { word: 'tenir', meaning: 'to hold', sentence: 'Je tiens le livre.' },
      { word: 'maintenir', meaning: 'to maintain', sentence: 'Il maintient sa position.' },
      { word: 'obtenir', meaning: 'to obtain', sentence: 'Elle obtient son diplôme.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_mettre_fr',
    root: 'mettre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'mettre (to put)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'mɛtʁ' },
      { accent: 'quebecois', ipa: 'mɛtʁ' },
      { accent: 'belgian', ipa: 'mɛtʁ' }
    ],
    examples: [
      { word: 'mettre', meaning: 'to put', sentence: 'Je mets la table.' },
      { word: 'promettre', meaning: 'to promise', sentence: 'Je promets d\'arriver à l\'heure.' },
      { word: 'permettre', meaning: 'to permit', sentence: 'Le professeur permet de sortir.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_prendre_fr',
    root: 'prendre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'prendre (to take)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'pʁɑ̃dʁ' },
      { accent: 'quebecois', ipa: 'pʁɑ̃dʁ' },
      { accent: 'belgian', ipa: 'pʁɑ̃dʁ' }
    ],
    examples: [
      { word: 'prendre', meaning: 'to take', sentence: 'Je prends le bus.' },
      { word: 'comprendre', meaning: 'to understand', sentence: 'Je comprends la question.' },
      { word: 'apprendre', meaning: 'to learn', sentence: 'J\'apprends le français.' },
    ],
    relatedRootIds: ['root_com_fr'],
  },
];
