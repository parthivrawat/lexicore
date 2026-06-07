import { WordRoot } from '@/types';

export const bases: WordRoot[] = [
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
  {
    id: 'root_ecrire_fr',
    root: 'écrire',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'écrire (to write)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ekʁiʁ' },
      { accent: 'quebecois', ipa: 'ekʁiʁ' },
      { accent: 'belgian', ipa: 'ekʁiʁ' }
    ],
    examples: [
      { word: 'écrire', meaning: 'to write', sentence: 'J\'écris une lettre.' },
      { word: 'réécrire', meaning: 'to rewrite', sentence: 'Je réécris le texte.' },
      { word: 'écrivain', meaning: 'writer', sentence: 'L\'écrivain est célèbre.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_lire_fr',
    root: 'lire',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'lire (to read)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'liʁ' },
      { accent: 'quebecois', ipa: 'liʁ' },
      { accent: 'belgian', ipa: 'liʁ' }
    ],
    examples: [
      { word: 'lire', meaning: 'to read', sentence: 'Je lis un livre.' },
      { word: 'relire', meaning: 'to reread', sentence: 'Je relis le chapitre.' },
      { word: 'lecture', meaning: 'reading', sentence: 'La lecture est agréable.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_sentir_fr',
    root: 'sentir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'sentir (to feel, smell)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'sɑ̃tiʁ' },
      { accent: 'quebecois', ipa: 'sɑ̃tiʁ' },
      { accent: 'belgian', ipa: 'sɑ̃tiʁ' }
    ],
    examples: [
      { word: 'sentir', meaning: 'to feel', sentence: 'Je sens le froid.' },
      { word: 'ressentir', meaning: 'to feel again', sentence: 'Je ressens de la joie.' },
      { word: 'sentiment', meaning: 'feeling', sentence: 'Le sentiment est fort.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_vivre_fr',
    root: 'vivre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'vivre (to live)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'viʁ' },
      { accent: 'quebecois', ipa: 'viʁ' },
      { accent: 'belgian', ipa: 'viʁ' }
    ],
    examples: [
      { word: 'vivre', meaning: 'to live', sentence: 'Je vis à Paris.' },
      { word: 'survivre', meaning: 'to survive', sentence: 'Il survit difficilement.' },
      { word: 'vie', meaning: 'life', sentence: 'La vie est belle.' },
    ],
    relatedRootIds: ['root_sur_fr'],
  },
  {
    id: 'root_mourir_fr',
    root: 'mourir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'mourir (to die)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'muʁiʁ' },
      { accent: 'quebecois', ipa: 'muʁiʁ' },
      { accent: 'belgian', ipa: 'muʁiʁ' }
    ],
    examples: [
      { word: 'mourir', meaning: 'to die', sentence: 'Il meurt de vieillesse.' },
      { word: 'mort', meaning: 'death', sentence: 'La mort est inévitable.' },
      { word: 'mourant', meaning: 'dying', sentence: 'Le malade est mourant.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_dormir_fr',
    root: 'dormir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'dormir (to sleep)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'dɔʁmiʁ' },
      { accent: 'quebecois', ipa: 'dɔʁmiʁ' },
      { accent: 'belgian', ipa: 'dɔʁmiʁ' }
    ],
    examples: [
      { word: 'dormir', meaning: 'to sleep', sentence: 'Je dors huit heures.' },
      { word: 'endormir', meaning: 'to put to sleep', sentence: 'J\'endors l\'enfant.' },
      { word: 'sommeil', meaning: 'sleep', sentence: 'Le sommeil est réparateur.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_sortir_fr',
    root: 'sortir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'sortir (to go out)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'sɔʁtiʁ' },
      { accent: 'quebecois', ipa: 'sɔʁtiʁ' },
      { accent: 'belgian', ipa: 'sɔʁtiʁ' }
    ],
    examples: [
      { word: 'sortir', meaning: 'to go out', sentence: 'Je sors ce soir.' },
      { word: 'ressortir', meaning: 'to come out again', sentence: 'Cela ressort clairement.' },
      { word: 'sortie', meaning: 'exit', sentence: 'La sortie est là.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_partir_fr',
    root: 'partir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'partir (to leave)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'paʁtiʁ' },
      { accent: 'quebecois', ipa: 'paʁtiʁ' },
      { accent: 'belgian', ipa: 'paʁtiʁ' }
    ],
    examples: [
      { word: 'partir', meaning: 'to leave', sentence: 'Je pars demain.' },
      { word: 'départ', meaning: 'departure', sentence: 'Le départ est à 8h.' },
      { word: 'partage', meaning: 'sharing', sentence: 'Le partage est important.' },
    ],
    relatedRootIds: ['root_de_fr'],
  },
  {
    id: 'root_entrer_fr',
    root: 'entrer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'entrer (to enter)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɑ̃tʁe' },
      { accent: 'quebecois', ipa: 'ɑ̃tʁe' },
      { accent: 'belgian', ipa: 'ɑ̃tʁe' }
    ],
    examples: [
      { word: 'entrer', meaning: 'to enter', sentence: 'J\'entre dans la salle.' },
      { word: 'entrée', meaning: 'entrance', sentence: 'L\'entrée est libre.' },
      { word: 'rentrer', meaning: 'to return', sentence: 'Je rentre à la maison.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_manger_fr',
    root: 'manger',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'manger (to eat)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'mɑ̃ʒe' },
      { accent: 'quebecois', ipa: 'mɑ̃ʒe' },
      { accent: 'belgian', ipa: 'mɑ̃ʒe' }
    ],
    examples: [
      { word: 'manger', meaning: 'to eat', sentence: 'Je mange du pain.' },
      { word: 'remanger', meaning: 'to eat again', sentence: 'Je remange ce soir.' },
      { word: 'nourriture', meaning: 'food', sentence: 'La nourriture est bonne.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_boire_fr',
    root: 'boire',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'boire (to drink)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'bwaʁ' },
      { accent: 'quebecois', ipa: 'bwaʁ' },
      { accent: 'belgian', ipa: 'bwaʁ' }
    ],
    examples: [
      { word: 'boire', meaning: 'to drink', sentence: 'Je bois de l\'eau.' },
      { word: 'reboire', meaning: 'to drink again', sentence: 'Je rebois un café.' },
      { word: 'boisson', meaning: 'drink', sentence: 'La boisson est fraîche.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_parler_fr',
    root: 'parler',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'parler (to speak)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'paʁle' },
      { accent: 'quebecois', ipa: 'paʁle' },
      { accent: 'belgian', ipa: 'paʁle' }
    ],
    examples: [
      { word: 'parler', meaning: 'to speak', sentence: 'Je parle français.' },
      { word: 'reparler', meaning: 'to speak again', sentence: 'Je reparle de ce sujet.' },
      { word: 'parole', meaning: 'speech', sentence: 'La parole est d\'argent.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_chanter_fr',
    root: 'chanter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'chanter (to sing)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʃɑ̃te' },
      { accent: 'quebecois', ipa: 'ʃɑ̃te' },
      { accent: 'belgian', ipa: 'ʃɑ̃te' }
    ],
    examples: [
      { word: 'chanter', meaning: 'to sing', sentence: 'Je chante une chanson.' },
      { word: 'rechanter', meaning: 'to sing again', sentence: 'Je rechanter ce morceau.' },
      { word: 'chanson', meaning: 'song', sentence: 'La chanson est belle.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_danser_fr',
    root: 'danser',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'danser (to dance)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'dɑ̃se' },
      { accent: 'quebecois', ipa: 'dɑ̃se' },
      { accent: 'belgian', ipa: 'dɑ̃se' }
    ],
    examples: [
      { word: 'danser', meaning: 'to dance', sentence: 'Je danse ce soir.' },
      { word: 'redanser', meaning: 'to dance again', sentence: 'Je redanse avec toi.' },
      { word: 'danse', meaning: 'dance', sentence: 'La danse est élégante.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_marcher_fr',
    root: 'marcher',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'marcher (to walk)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'maʁʃe' },
      { accent: 'quebecois', ipa: 'maʁʃe' },
      { accent: 'belgian', ipa: 'maʁʃe' }
    ],
    examples: [
      { word: 'marcher', meaning: 'to walk', sentence: 'Je marche dans le parc.' },
      { word: 'remarcher', meaning: 'to walk again', sentence: 'Je remarche sur ce chemin.' },
      { word: 'marche', meaning: 'walk', sentence: 'La marche est saine.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_courir_fr',
    root: 'courir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'courir (to run)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kuʁiʁ' },
      { accent: 'quebecois', ipa: 'kuʁiʁ' },
      { accent: 'belgian', ipa: 'kuʁiʁ' }
    ],
    examples: [
      { word: 'courir', meaning: 'to run', sentence: 'Je cours vite.' },
      { word: 'recourir', meaning: 'to run again', sentence: 'Je recours à cette option.' },
      { word: 'course', meaning: 'race', sentence: 'La course est terminée.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_sauter_fr',
    root: 'sauter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'sauter (to jump)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'sote' },
      { accent: 'quebecois', ipa: 'sote' },
      { accent: 'belgian', ipa: 'sote' }
    ],
    examples: [
      { word: 'sauter', meaning: 'to jump', sentence: 'Je saute par-dessus.' },
      { word: 'resauter', meaning: 'to jump again', sentence: 'Je resaute encore.' },
      { word: 'saut', meaning: 'jump', sentence: 'Le saut est haut.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_rire_fr',
    root: 'rire',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'rire (to laugh)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁiʁ' },
      { accent: 'quebecois', ipa: 'ʁiʁ' },
      { accent: 'belgian', ipa: 'ʁiʁ' }
    ],
    examples: [
      { word: 'rire', meaning: 'to laugh', sentence: 'Je ris de cette blague.' },
      { word: 'rire', meaning: 'laugh', sentence: 'Le rire est contagieux.' },
      { word: 'rire', meaning: 'laughing', sentence: 'Il y a du rire.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_pleurer_fr',
    root: 'pleurer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'pleurer (to cry)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'pløe' },
      { accent: 'quebecois', ipa: 'pløe' },
      { accent: 'belgian', ipa: 'pløe' }
    ],
    examples: [
      { word: 'pleurer', meaning: 'to cry', sentence: 'Je pleure de tristesse.' },
      { word: 'pleur', meaning: 'tear', sentence: 'La pleur coule.' },
      { word: 'pleureur', meaning: 'crybaby', sentence: 'C\'est un pleureur.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_aimer_fr',
    root: 'aimer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'aimer (to love/like)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'eme' },
      { accent: 'quebecois', ipa: 'eme' },
      { accent: 'belgian', ipa: 'eme' }
    ],
    examples: [
      { word: 'aimer', meaning: 'to love', sentence: 'J\'aime ma famille.' },
      { word: 'réaimer', meaning: 'to love again', sentence: 'Je réaime cette personne.' },
      { word: 'amour', meaning: 'love', sentence: 'L\'amour est éternel.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_haïr_fr',
    root: 'haïr',
    type: 'base',
    languageOrigin: 'Germanic',
    meaning: 'haïr (to hate)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'aiʁ' },
      { accent: 'quebecois', ipa: 'aiʁ' },
      { accent: 'belgian', ipa: 'aiʁ' }
    ],
    examples: [
      { word: 'haïr', meaning: 'to hate', sentence: 'Je hais le mensonge.' },
      { word: 'haine', meaning: 'hate', sentence: 'La haine est destructrice.' },
      { word: 'haïssable', meaning: 'hateful', sentence: 'C\'est haïssable.' },
    ],
    relatedRootIds: [],
  },
  {
    id: 'root_penser_fr',
    root: 'penser',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'penser (to think)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'pɑ̃se' },
      { accent: 'quebecois', ipa: 'pɑ̃se' },
      { accent: 'belgian', ipa: 'pɑ̃se' }
    ],
    examples: [
      { word: 'penser', meaning: 'to think', sentence: 'Je pense à toi.' },
      { word: 'repenser', meaning: 'to rethink', sentence: 'Je repense à cette idée.' },
      { word: 'pensée', meaning: 'thought', sentence: 'La pensée est libre.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_savoir_fr',
    root: 'savoir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'savoir (to know)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'savwaʁ' },
      { accent: 'quebecois', ipa: 'savwaʁ' },
      { accent: 'belgian', ipa: 'savwaʁ' }
    ],
    examples: [
      { word: 'savoir', meaning: 'to know', sentence: 'Je sais la réponse.' },
      { word: 'resavoir', meaning: 'to know again', sentence: 'Je resais cette information.' },
      { word: 'savoir', meaning: 'knowledge', sentence: 'Le savoir est précieux.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_connaître_fr',
    root: 'connaître',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'connaître (to know)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kɔnɛtʁ' },
      { accent: 'quebecois', ipa: 'kɔnɛtʁ' },
      { accent: 'belgian', ipa: 'kɔnɛtʁ' }
    ],
    examples: [
      { word: 'connaître', meaning: 'to know', sentence: 'Je connais cette personne.' },
      { word: 'reconnaître', meaning: 'to recognize', sentence: 'Je reconnais ce visage.' },
      { word: 'connaissance', meaning: 'knowledge', sentence: 'La connaissance est utile.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_com_fr'],
  },
  {
    id: 'root_comprendre_fr',
    root: 'comprendre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'comprendre (to understand)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kɔ̃pʁɑ̃dʁ' },
      { accent: 'quebecois', ipa: 'kɔ̃pʁɑ̃dʁ' },
      { accent: 'belgian', ipa: 'kɔ̃pʁɑ̃dʁ' }
    ],
    examples: [
      { word: 'comprendre', meaning: 'to understand', sentence: 'Je comprends le texte.' },
      { word: 'recomprendre', meaning: 'to understand again', sentence: 'Je recomprends cette leçon.' },
      { word: 'compréhension', meaning: 'understanding', sentence: 'La compréhension est facile.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_com_fr'],
  },
  {
    id: 'root_ouvrir_fr',
    root: 'ouvrir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'ouvrir (to open)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'uvʁiʁ' },
      { accent: 'quebecois', ipa: 'uvʁiʁ' },
      { accent: 'belgian', ipa: 'uvʁiʁ' }
    ],
    examples: [
      { word: 'ouvrir', meaning: 'to open', sentence: 'J\'ouvre la porte.' },
      { word: 'rouvrir', meaning: 'to reopen', sentence: 'Je rouvre le magasin.' },
      { word: 'ouverture', meaning: 'opening', sentence: 'L\'ouverture est à 9h.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_fermer_fr',
    root: 'fermer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'fermer (to close)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'fɛʁme' },
      { accent: 'quebecois', ipa: 'fɛʁme' },
      { accent: 'belgian', ipa: 'fɛʁme' }
    ],
    examples: [
      { word: 'fermer', meaning: 'to close', sentence: 'Je ferme la fenêtre.' },
      { word: 'refermer', meaning: 'to close again', sentence: 'Je referme la porte.' },
      { word: 'fermeture', meaning: 'closure', sentence: 'La fermeture est à 18h.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_acheter_fr',
    root: 'acheter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'acheter (to buy)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'aʃte' },
      { accent: 'quebecois', ipa: 'aʃte' },
      { accent: 'belgian', ipa: 'aʃte' }
    ],
    examples: [
      { word: 'acheter', meaning: 'to buy', sentence: 'J\'achète du pain.' },
      { word: 'racheter', meaning: 'to buy again', sentence: 'Je rachète ce livre.' },
      { word: 'achat', meaning: 'purchase', sentence: 'L\'achat est important.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_vendre_fr',
    root: 'vendre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'vendre (to sell)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'vɑ̃dʁ' },
      { accent: 'quebecois', ipa: 'vɑ̃dʁ' },
      { accent: 'belgian', ipa: 'vɑ̃dʁ' }
    ],
    examples: [
      { word: 'vendre', meaning: 'to sell', sentence: 'Je vends ma voiture.' },
      { word: 'revendre', meaning: 'to resell', sentence: 'Je revends ce produit.' },
      { word: 'vente', meaning: 'sale', sentence: 'La vente est terminée.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_travailler_fr',
    root: 'travailler',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'travailler (to work)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'tʁavaje' },
      { accent: 'quebecois', ipa: 'tʁavaje' },
      { accent: 'belgian', ipa: 'tʁavaje' }
    ],
    examples: [
      { word: 'travailler', meaning: 'to work', sentence: 'Je travaille dur.' },
      { word: 'retravailler', meaning: 'to work again', sentence: 'Je retravaille ce projet.' },
      { word: 'travail', meaning: 'work', sentence: 'Le travail est important.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_étudier_fr',
    root: 'étudier',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'étudier (to study)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'etudje' },
      { accent: 'quebecois', ipa: 'etudje' },
      { accent: 'belgian', ipa: 'etudje' }
    ],
    examples: [
      { word: 'étudier', meaning: 'to study', sentence: 'J\'étudie l\'histoire.' },
      { word: 'réétudier', meaning: 'to study again', sentence: 'Je réétudie ce chapitre.' },
      { word: 'étude', meaning: 'study', sentence: 'L\'étude est intéressante.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_apprendre_fr',
    root: 'apprendre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'apprendre (to learn)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'apʁɑ̃dʁ' },
      { accent: 'quebecois', ipa: 'apʁɑ̃dʁ' },
      { accent: 'belgian', ipa: 'apʁɑ̃dʁ' }
    ],
    examples: [
      { word: 'apprendre', meaning: 'to learn', sentence: 'J\'apprends le français.' },
      { word: 'réapprendre', meaning: 'to relearn', sentence: 'Je réapprends cette leçon.' },
      { word: 'apprentissage', meaning: 'learning', sentence: 'L\'apprentissage est continu.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_enseigner_fr',
    root: 'enseigner',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'enseigner (to teach)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɑ̃seɲe' },
      { accent: 'quebecois', ipa: 'ɑ̃seɲe' },
      { accent: 'belgian', ipa: 'ɑ̃seɲe' }
    ],
    examples: [
      { word: 'enseigner', meaning: 'to teach', sentence: 'J\'enseigne les mathématiques.' },
      { word: 'réenseigner', meaning: 'to reteach', sentence: 'Je réenseigne cette règle.' },
      { word: 'enseignement', meaning: 'teaching', sentence: 'L\'enseignement est noble.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_jouer_fr',
    root: 'jouer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'jouer (to play)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʒwe' },
      { accent: 'quebecois', ipa: 'ʒwe' },
      { accent: 'belgian', ipa: 'ʒwe' }
    ],
    examples: [
      { word: 'jouer', meaning: 'to play', sentence: 'Je joue au football.' },
      { word: 'rejouer', meaning: 'to play again', sentence: 'Je rejoue ce match.' },
      { word: 'jeu', meaning: 'game', sentence: 'Le jeu est amusant.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_gagner_fr',
    root: 'gagner',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'gagner (to win)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɡaɲe' },
      { accent: 'quebecois', ipa: 'ɡaɲe' },
      { accent: 'belgian', ipa: 'ɡaɲe' }
    ],
    examples: [
      { word: 'gagner', meaning: 'to win', sentence: 'Je gagne le match.' },
      { word: 'regagner', meaning: 'to win again', sentence: 'Je regagne ce prix.' },
      { word: 'gain', meaning: 'win', sentence: 'Le gain est important.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_perdre_fr',
    root: 'perdre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'perdre (to lose)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'pɛʁdʁ' },
      { accent: 'quebecois', ipa: 'pɛʁdʁ' },
      { accent: 'belgian', ipa: 'pɛʁdʁ' }
    ],
    examples: [
      { word: 'perdre', meaning: 'to lose', sentence: 'Je perds mes clés.' },
      { word: 'reperdre', meaning: 'to lose again', sentence: 'Je reperds ce match.' },
      { word: 'perte', meaning: 'loss', sentence: 'La perte est regrettable.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_recevoir_fr',
    root: 'recevoir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'recevoir (to receive)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁəsəvwaʁ' },
      { accent: 'quebecois', ipa: 'ʁəsəvwaʁ' },
      { accent: 'belgian', ipa: 'ʁəsəvwaʁ' }
    ],
    examples: [
      { word: 'recevoir', meaning: 'to receive', sentence: 'Je reçois un cadeau.' },
      { word: 'rerecevoir', meaning: 'to receive again', sentence: 'Je rereçois cette lettre.' },
      { word: 'réception', meaning: 'reception', sentence: 'La réception est bonne.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_donner_fr',
    root: 'donner',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'donner (to give)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'dɔne' },
      { accent: 'quebecois', ipa: 'dɔne' },
      { accent: 'belgian', ipa: 'dɔne' }
    ],
    examples: [
      { word: 'donner', meaning: 'to give', sentence: 'Je donne un cadeau.' },
      { word: 'redonner', meaning: 'to give again', sentence: 'Je redonne cette somme.' },
      { word: 'don', meaning: 'gift', sentence: 'Le don est généreux.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_offrir_fr',
    root: 'offrir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'offrir (to offer)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɔfʁiʁ' },
      { accent: 'quebecois', ipa: 'ɔfʁiʁ' },
      { accent: 'belgian', ipa: 'ɔfʁiʁ' }
    ],
    examples: [
      { word: 'offrir', meaning: 'to offer', sentence: 'J\'offre mon aide.' },
      { word: 'roffrir', meaning: 'to offer again', sentence: 'Je roffre ce service.' },
      { word: 'offre', meaning: 'offer', sentence: 'L\'offre est intéressante.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_demander_fr',
    root: 'demander',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'demander (to ask)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'dəmɑ̃de' },
      { accent: 'quebecois', ipa: 'dəmɑ̃de' },
      { accent: 'belgian', ipa: 'dəmɑ̃de' }
    ],
    examples: [
      { word: 'demander', meaning: 'to ask', sentence: 'Je demande une faveur.' },
      { word: 'redemander', meaning: 'to ask again', sentence: 'Je redemande cette information.' },
      { word: 'demande', meaning: 'request', sentence: 'La demande est acceptée.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_répondre_fr',
    root: 'répondre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'répondre (to answer)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁepɔ̃dʁ' },
      { accent: 'quebecois', ipa: 'ʁepɔ̃dʁ' },
      { accent: 'belgian', ipa: 'ʁepɔ̃dʁ' }
    ],
    examples: [
      { word: 'répondre', meaning: 'to answer', sentence: 'Je réponds à la question.' },
      { word: 'rerépondre', meaning: 'to answer again', sentence: 'Je reréponds à cet appel.' },
      { word: 'réponse', meaning: 'answer', sentence: 'La réponse est correcte.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_chercher_fr',
    root: 'chercher',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'chercher (to look for)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʃɛʁʃe' },
      { accent: 'quebecois', ipa: 'ʃɛʁʃe' },
      { accent: 'belgian', ipa: 'ʃɛʁʃe' }
    ],
    examples: [
      { word: 'chercher', meaning: 'to look for', sentence: 'Je cherche mes clés.' },
      { word: 'rechercher', meaning: 'to search again', sentence: 'Je recherche ce document.' },
      { word: 'recherche', meaning: 'search', sentence: 'La recherche est fructueuse.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_trouver_fr',
    root: 'trouver',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'trouver (to find)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'tʁuve' },
      { accent: 'quebecois', ipa: 'tʁuve' },
      { accent: 'belgian', ipa: 'tʁuve' }
    ],
    examples: [
      { word: 'trouver', meaning: 'to find', sentence: 'Je trouve la solution.' },
      { word: 'retrouver', meaning: 'to find again', sentence: 'Je retrouve mon chemin.' },
      { word: 'trouvaille', meaning: 'find', sentence: 'C\'est une trouvaille.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_attendre_fr',
    root: 'attendre',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'attendre (to wait)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'atɑ̃dʁ' },
      { accent: 'quebecois', ipa: 'atɑ̃dʁ' },
      { accent: 'belgian', ipa: 'atɑ̃dʁ' }
    ],
    examples: [
      { word: 'attendre', meaning: 'to wait', sentence: 'J\'attends le bus.' },
      { word: 'réattendre', meaning: 'to wait again', sentence: 'Je réattends ce moment.' },
      { word: 'attente', meaning: 'waiting', sentence: 'L\'attente est longue.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_essayer_fr',
    root: 'essayer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'essayer (to try)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'esaje' },
      { accent: 'quebecois', ipa: 'esaje' },
      { accent: 'belgian', ipa: 'esaje' }
    ],
    examples: [
      { word: 'essayer', meaning: 'to try', sentence: 'J\'essaie ce vêtement.' },
      { word: 'réessayer', meaning: 'to try again', sentence: 'Je réessaie encore.' },
      { word: 'essai', meaning: 'attempt', sentence: 'L\'essai est réussi.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_réussir_fr',
    root: 'réussir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'réussir (to succeed)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁeysiʁ' },
      { accent: 'quebecois', ipa: 'ʁeysiʁ' },
      { accent: 'belgian', ipa: 'ʁeysiʁ' }
    ],
    examples: [
      { word: 'réussir', meaning: 'to succeed', sentence: 'Je réussis mon examen.' },
      { word: 'reréussir', meaning: 'to succeed again', sentence: 'Je reréussis ce projet.' },
      { word: 'succès', meaning: 'success', sentence: 'Le succès est mérité.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_échouer_fr',
    root: 'échouer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'échouer (to fail)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'eʃwe' },
      { accent: 'quebecois', ipa: 'eʃwe' },
      { accent: 'belgian', ipa: 'eʃwe' }
    ],
    examples: [
      { word: 'échouer', meaning: 'to fail', sentence: 'J\'échoue à cet examen.' },
      { word: 'rééchouer', meaning: 'to fail again', sentence: 'Je rééchoue encore.' },
      { word: 'échec', meaning: 'failure', sentence: 'L\'échec est instructif.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_compter_fr',
    root: 'compter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'compter (to count)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kɔ̃te' },
      { accent: 'quebecois', ipa: 'kɔ̃te' },
      { accent: 'belgian', ipa: 'kɔ̃te' }
    ],
    examples: [
      { word: 'compter', meaning: 'to count', sentence: 'Je compte les objets.' },
      { word: 'recompter', meaning: 'to count again', sentence: 'Je recompte ce total.' },
      { word: 'compte', meaning: 'count', sentence: 'Le compte est bon.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_com_fr'],
  },
  {
    id: 'root_mesurer_fr',
    root: 'mesurer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'mesurer (to measure)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'məzye' },
      { accent: 'quebecois', ipa: 'məzye' },
      { accent: 'belgian', ipa: 'məzye' }
    ],
    examples: [
      { word: 'mesurer', meaning: 'to measure', sentence: 'Je mesure la distance.' },
      { word: 'remesurer', meaning: 'to measure again', sentence: 'Je remesure cette pièce.' },
      { word: 'mesure', meaning: 'measurement', sentence: 'La mesure est précise.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_peser_fr',
    root: 'peser',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'peser (to weigh)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'pəze' },
      { accent: 'quebecois', ipa: 'pəze' },
      { accent: 'belgian', ipa: 'pəze' }
    ],
    examples: [
      { word: 'peser', meaning: 'to weigh', sentence: 'Je pèse ce fruit.' },
      { word: 'repeser', meaning: 'to weigh again', sentence: 'Je repèse ce paquet.' },
      { word: 'poids', meaning: 'weight', sentence: 'Le poids est important.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_cuisiner_fr',
    root: 'cuisiner',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'cuisiner (to cook)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kɥizine' },
      { accent: 'quebecois', ipa: 'kɥizine' },
      { accent: 'belgian', ipa: 'kɥizine' }
    ],
    examples: [
      { word: 'cuisiner', meaning: 'to cook', sentence: 'Je cuisine le dîner.' },
      { word: 'recuisiner', meaning: 'to cook again', sentence: 'Je recuisine ce plat.' },
      { word: 'cuisine', meaning: 'cooking', sentence: 'La cuisine est délicieuse.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_laver_fr',
    root: 'laver',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'laver (to wash)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'lave' },
      { accent: 'quebecois', ipa: 'lave' },
      { accent: 'belgian', ipa: 'lave' }
    ],
    examples: [
      { word: 'laver', meaning: 'to wash', sentence: 'Je lave mes vêtements.' },
      { word: 'relaver', meaning: 'to wash again', sentence: 'Je relave cette assiette.' },
      { word: 'lessive', meaning: 'laundry', sentence: 'La lessive est prête.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_nettoyer_fr',
    root: 'nettoyer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'nettoyer (to clean)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'netwaje' },
      { accent: 'quebecois', ipa: 'netwaje' },
      { accent: 'belgian', ipa: 'netwaje' }
    ],
    examples: [
      { word: 'nettoyer', meaning: 'to clean', sentence: 'Je nettoie la maison.' },
      { word: 'renettoyer', meaning: 'to clean again', sentence: 'Je renettoie cette pièce.' },
      { word: 'nettoyage', meaning: 'cleaning', sentence: 'Le nettoyage est terminé.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_ranger_fr',
    root: 'ranger',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'ranger (to tidy)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'rɑ̃ʒe' },
      { accent: 'quebecois', ipa: 'rɑ̃ʒe' },
      { accent: 'belgian', ipa: 'rɑ̃ʒe' }
    ],
    examples: [
      { word: 'ranger', meaning: 'to tidy', sentence: 'Je range ma chambre.' },
      { word: 'reranger', meaning: 'to tidy again', sentence: 'Je rerange ces livres.' },
      { word: 'rangement', meaning: 'tidying', sentence: 'Le rangement est fait.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_arranger_fr',
    root: 'arranger',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'arranger (to arrange)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'aʁɑ̃ʒe' },
      { accent: 'quebecois', ipa: 'aʁɑ̃ʒe' },
      { accent: 'belgian', ipa: 'aʁɑ̃ʒe' }
    ],
    examples: [
      { word: 'arranger', meaning: 'to arrange', sentence: 'J\'arrange la table.' },
      { word: 'réarranger', meaning: 'to rearrange', sentence: 'Je réarrange ces chaises.' },
      { word: 'arrangement', meaning: 'arrangement', sentence: 'L\'arrangement est parfait.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_préparer_fr',
    root: 'préparer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'préparer (to prepare)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'pʁepaʁe' },
      { accent: 'quebecois', ipa: 'pʁepaʁe' },
      { accent: 'belgian', ipa: 'pʁepaʁe' }
    ],
    examples: [
      { word: 'préparer', meaning: 'to prepare', sentence: 'Je prépare le repas.' },
      { word: 'repréparer', meaning: 'to prepare again', sentence: 'Je reprépare ce plat.' },
      { word: 'préparation', meaning: 'preparation', sentence: 'La préparation est longue.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_pre_fr'],
  },
  {
    id: 'root_organiser_fr',
    root: 'organiser',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'organiser (to organize)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɔʁɡanize' },
      { accent: 'quebecois', ipa: 'ɔʁɡanize' },
      { accent: 'belgian', ipa: 'ɔʁɡanize' }
    ],
    examples: [
      { word: 'organiser', meaning: 'to organize', sentence: 'J\'organise une fête.' },
      { word: 'réorganiser', meaning: 'to reorganize', sentence: 'Je réorganise mon bureau.' },
      { word: 'organisation', meaning: 'organization', sentence: 'L\'organisation est efficace.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_gérer_fr',
    root: 'gérer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'gérer (to manage)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʒeʁe' },
      { accent: 'quebecois', ipa: 'ʒeʁe' },
      { accent: 'belgian', ipa: 'ʒeʁe' }
    ],
    examples: [
      { word: 'gérer', meaning: 'to manage', sentence: 'Je gère ce projet.' },
      { word: 'régérer', meaning: 'to manage again', sentence: 'Je régère cette entreprise.' },
      { word: 'gestion', meaning: 'management', sentence: 'La gestion est bonne.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_diriger_fr',
    root: 'diriger',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'diriger (to direct)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'diʁiʒe' },
      { accent: 'quebecois', ipa: 'diʁiʒe' },
      { accent: 'belgian', ipa: 'diʁiʒe' }
    ],
    examples: [
      { word: 'diriger', meaning: 'to direct', sentence: 'Je dirige l\'équipe.' },
      { word: 'rediriger', meaning: 'to redirect', sentence: 'Je redirige ce projet.' },
      { word: 'direction', meaning: 'direction', sentence: 'La direction est claire.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_conduire_fr',
    root: 'conduire',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'conduire (to drive)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kɔndɥiʁ' },
      { accent: 'quebecois', ipa: 'kɔndɥiʁ' },
      { accent: 'belgian', ipa: 'kɔndɥiʁ' }
    ],
    examples: [
      { word: 'conduire', meaning: 'to drive', sentence: 'Je conduis une voiture.' },
      { word: 'reconduire', meaning: 'to drive again', sentence: 'Je reconduis ce passager.' },
      { word: 'conduite', meaning: 'driving', sentence: 'La conduite est prudente.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_com_fr'],
  },
  {
    id: 'root_voyager_fr',
    root: 'voyager',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'voyager (to travel)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'vwajaʒe' },
      { accent: 'quebecois', ipa: 'vwajaʒe' },
      { accent: 'belgian', ipa: 'vwajaʒe' }
    ],
    examples: [
      { word: 'voyager', meaning: 'to travel', sentence: 'Je voyage en Europe.' },
      { word: 'revoyager', meaning: 'to travel again', sentence: 'Je revoyage ce pays.' },
      { word: 'voyage', meaning: 'travel', sentence: 'Le voyage est magnifique.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_visiter_fr',
    root: 'visiter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'visiter (to visit)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'vizite' },
      { accent: 'quebecois', ipa: 'vizite' },
      { accent: 'belgian', ipa: 'vizite' }
    ],
    examples: [
      { word: 'visiter', meaning: 'to visit', sentence: 'Je visite le musée.' },
      { word: 'revisiter', meaning: 'to visit again', sentence: 'Je revisite cette ville.' },
      { word: 'visite', meaning: 'visit', sentence: 'La visite est intéressante.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_rester_fr',
    root: 'rester',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'rester (to stay)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁɛste' },
      { accent: 'quebecois', ipa: 'ʁɛste' },
      { accent: 'belgian', ipa: 'ʁɛste' }
    ],
    examples: [
      { word: 'rester', meaning: 'to stay', sentence: 'Je reste à la maison.' },
      { word: 'rerester', meaning: 'to stay again', sentence: 'Je rereste ici.' },
      { word: 'repos', meaning: 'rest', sentence: 'Le repos est nécessaire.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_quitter_fr',
    root: 'quitter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'quitter (to leave)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'kite' },
      { accent: 'quebecois', ipa: 'kite' },
      { accent: 'belgian', ipa: 'kite' }
    ],
    examples: [
      { word: 'quitter', meaning: 'to leave', sentence: 'Je quitte mon travail.' },
      { word: 'requitter', meaning: 'to leave again', sentence: 'Je requitte cette place.' },
      { word: 'départ', meaning: 'departure', sentence: 'Le départ est imminent.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_de_fr'],
  },
  {
    id: 'root_arriver_fr',
    root: 'arriver',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'arriver (to arrive)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'aʁive' },
      { accent: 'quebecois', ipa: 'aʁive' },
      { accent: 'belgian', ipa: 'aʁive' }
    ],
    examples: [
      { word: 'arriver', meaning: 'to arrive', sentence: 'J\'arrive à destination.' },
      { word: 'réarriver', meaning: 'to arrive again', sentence: 'Je réarrive bientôt.' },
      { word: 'arrivée', meaning: 'arrival', sentence: 'L\'arrivée est prévue.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_a_fr'],
  },
  {
    id: 'root_retourner_fr',
    root: 'retourner',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'retourner (to return)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁətuʁne' },
      { accent: 'quebecois', ipa: 'ʁətuʁne' },
      { accent: 'belgian', ipa: 'ʁətuʁne' }
    ],
    examples: [
      { word: 'retourner', meaning: 'to return', sentence: 'Je retourne chez moi.' },
      { word: 'reretourner', meaning: 'to return again', sentence: 'Je reretourne ce livre.' },
      { word: 'retour', meaning: 'return', sentence: 'Le retour est prévu.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_changer_fr',
    root: 'changer',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'changer (to change)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʃɑ̃ʒe' },
      { accent: 'quebecois', ipa: 'ʃɑ̃ʒe' },
      { accent: 'belgian', ipa: 'ʃɑ̃ʒe' }
    ],
    examples: [
      { word: 'changer', meaning: 'to change', sentence: 'Je change d\'avis.' },
      { word: 'rechanger', meaning: 'to change again', sentence: 'Je rechange cette décision.' },
      { word: 'changement', meaning: 'change', sentence: 'Le changement est nécessaire.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_choisir_fr',
    root: 'choisir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'choisir (to choose)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʃwaziʁ' },
      { accent: 'quebecois', ipa: 'ʃwaziʁ' },
      { accent: 'belgian', ipa: 'ʃwaziʁ' }
    ],
    examples: [
      { word: 'choisir', meaning: 'to choose', sentence: 'Je choisis cette option.' },
      { word: 'rechoisir', meaning: 'to choose again', sentence: 'Je rechoisis ce chemin.' },
      { word: 'choix', meaning: 'choice', sentence: 'Le choix est difficile.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_décider_fr',
    root: 'décider',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'décider (to decide)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'deside' },
      { accent: 'quebecois', ipa: 'deside' },
      { accent: 'belgian', ipa: 'deside' }
    ],
    examples: [
      { word: 'décider', meaning: 'to decide', sentence: 'Je décide de partir.' },
      { word: 'redécider', meaning: 'to decide again', sentence: 'Je redécide cette affaire.' },
      { word: 'décision', meaning: 'decision', sentence: 'La décision est prise.' },
    ],
    relatedRootIds: ['root_re_fr', 'root_de_fr'],
  },
  {
    id: 'root_accepter_fr',
    root: 'accepter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'accepter (to accept)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'aksepte' },
      { accent: 'quebecois', ipa: 'aksepte' },
      { accent: 'belgian', ipa: 'aksepte' }
    ],
    examples: [
      { word: 'accepter', meaning: 'to accept', sentence: 'J\'accepte cette offre.' },
      { word: 'réaccepter', meaning: 'to accept again', sentence: 'Je réaccepte ce cadeau.' },
      { word: 'acceptation', meaning: 'acceptance', sentence: 'L\'acceptation est totale.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_refuser_fr',
    root: 'refuser',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'refuser (to refuse)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁəfyze' },
      { accent: 'quebecois', ipa: 'ʁəfyze' },
      { accent: 'belgian', ipa: 'ʁəfyze' }
    ],
    examples: [
      { word: 'refuser', meaning: 'to refuse', sentence: 'Je refuse cette proposition.' },
      { word: 'rerefuser', meaning: 'to refuse again', sentence: 'Je rerefuse cette demande.' },
      { word: 'refus', meaning: 'refusal', sentence: 'Le refus est clair.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_inviter_fr',
    root: 'inviter',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'inviter (to invite)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ɛ̃vite' },
      { accent: 'quebecois', ipa: 'ɛ̃vite' },
      { accent: 'belgian', ipa: 'ɛ̃vite' }
    ],
    examples: [
      { word: 'inviter', meaning: 'to invite', sentence: 'J\'invite mes amis.' },
      { word: 'réinviter', meaning: 'to invite again', sentence: 'Je réinvite cette personne.' },
      { word: 'invitation', meaning: 'invitation', sentence: 'L\'invitation est envoyée.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_accueillir_fr',
    root: 'accueillir',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'accueillir (to welcome)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'akœjiʁ' },
      { accent: 'quebecois', ipa: 'akœjiʁ' },
      { accent: 'belgian', ipa: 'akœjiʁ' }
    ],
    examples: [
      { word: 'accueillir', meaning: 'to welcome', sentence: 'J\'accueille les invités.' },
      { word: 'réaccueillir', meaning: 'to welcome again', sentence: 'Je réaccueille ce visiteur.' },
      { word: 'accueil', meaning: 'welcome', sentence: 'L\'accueil est chaleureux.' },
    ],
    relatedRootIds: ['root_re_fr'],
  },
  {
    id: 'root_remercier_fr',
    root: 'remercier',
    type: 'base',
    languageOrigin: 'Latin',
    meaning: 'remercier (to thank)',
    pronunciationVariants: [
      { accent: 'parisian', ipa: 'ʁəmɛʁsje' },
      { accent: 'quebecois', ipa: 'ʁəmɛʁsje' },
      { accent: 'belgian', ipa: 'ʁəmɛʁsje' }
    ],
    examples: [
      { word: 'remercier', meaning: 'to thank', sentence: 'Je remercie mon ami.' },
      { word: 'reremercier', meaning: 'to thank again', sentence: 'Je reremercie cette personne.' },
      { word: 'remerciement', meaning: 'thanks', sentence: 'Le remerciement est sincère.' },
    ],
    relatedRootIds: ['root_re_fr'],
  }
];
