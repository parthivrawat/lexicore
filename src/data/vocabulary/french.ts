import { VocabWord } from '@/types';

export const vocabularyFr: VocabWord[] = [
  // Salutations (Greetings)
  { id: 'word_bonjour', word: 'bonjour', meaning: 'hello/good day', pronunciationVariants: [
    { accent: 'parisian', ipa: 'bɔ̃ʒuʁ' },
    { accent: 'quebecois', ipa: 'bɔ̃ʒuʁ' },
    { accent: 'belgian', ipa: 'bɔ̃ʒuːʁ' }
  ], category: 'greetings', examples: ['Bonjour, comment allez-vous?', 'Bonjour monsieur.'] },
  { id: 'word_salut', word: 'salut', meaning: 'hi/bye (informal)', pronunciationVariants: [
    { accent: 'parisian', ipa: 'saly' },
    { accent: 'quebecois', ipa: 'saly' },
    { accent: 'belgian', ipa: 'saly' }
  ], category: 'greetings', examples: ['Salut, ça va?', 'Salut tout le monde!'] },
  { id: 'word_bonsoir', word: 'bonsoir', meaning: 'good evening', pronunciationVariants: [
    { accent: 'parisian', ipa: 'bɔ̃swaʁ' },
    { accent: 'quebecois', ipa: 'bɔ̃swaʁ' },
    { accent: 'belgian', ipa: 'bɔ̃swaːʁ' }
  ], category: 'greetings', examples: ['Bonsoir, madame.', 'Bonsoir à tous.'] },
  { id: 'word_au_revoir', word: 'au revoir', meaning: 'goodbye', pronunciationVariants: [
    { accent: 'parisian', ipa: 'o ʁəvwaʁ' },
    { accent: 'quebecois', ipa: 'o ʁəvwaʁ' },
    { accent: 'belgian', ipa: 'oː ʁəvwaːʁ' }
  ], category: 'greetings', examples: ['Au revoir, à demain!', 'Au revoir et merci.'] },
  { id: 'word_bonne_nuit', word: 'bonne nuit', meaning: 'good night', pronunciationVariants: [
    { accent: 'parisian', ipa: 'bɔn nɥi' },
    { accent: 'quebecois', ipa: 'bɔn nɥi' },
    { accent: 'belgian', ipa: 'bɔn nɥi' }
  ], category: 'greetings', examples: ['Bonne nuit les enfants.', 'Fais de beaux rêves, bonne nuit.'] },
  { id: 'word_merci', word: 'merci', meaning: 'thank you', pronunciationVariants: [
    { accent: 'parisian', ipa: 'mɛʁsi' },
    { accent: 'quebecois', ipa: 'mɛʁsi' },
    { accent: 'belgian', ipa: 'mɛʁsi' }
  ], category: 'greetings', examples: ['Merci beaucoup!', 'Merci de votre aide.'] },
  { id: 'word_s_il_vous_plait', word: 's\'il vous plaît', meaning: 'please', pronunciationVariants: [
    { accent: 'parisian', ipa: 'sil vu plɛ' },
    { accent: 'quebecois', ipa: 'sil vu plɛ' },
    { accent: 'belgian', ipa: 'sil vu plɛ' }
  ], category: 'greetings', examples: ['Un café, s\'il vous plaît.', 'Pouvez-vous m\'aider, s\'il vous plaît?'] },
  { id: 'word_excusez_moi', word: 'excusez-moi', meaning: 'excuse me', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ekskyze mwa' },
    { accent: 'quebecois', ipa: 'ekskyze mwa' },
    { accent: 'belgian', ipa: 'ekskyze mwa' }
  ], category: 'greetings', examples: ['Excusez-moi, quelle heure est-il?', 'Excusez-moi de vous déranger.'] },
  { id: 'word_pardon', word: 'pardon', meaning: 'sorry/pardon', pronunciationVariants: [
    { accent: 'parisian', ipa: 'paʁdɔ̃' },
    { accent: 'quebecois', ipa: 'paʁdɔ̃' },
    { accent: 'belgian', ipa: 'paʁdɔ̃' }
  ], category: 'greetings', examples: ['Pardon, je suis en retard.', 'Pardon, je n\'ai pas compris.'] },
  { id: 'word_de_rien', word: 'de rien', meaning: 'you\'re welcome', pronunciationVariants: [
    { accent: 'parisian', ipa: 'də ʁjɛ̃' },
    { accent: 'quebecois', ipa: 'də ʁjɛ̃' },
    { accent: 'belgian', ipa: 'də ʁjɛ̃' }
  ], category: 'greetings', examples: ['Merci! - De rien.', 'C\'est gentil, merci. - De rien.'] },
  { id: 'word_je_vous_en_prie', word: 'je vous en prie', meaning: 'you\'re welcome (formal)', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ʒə vu zɑ̃ pʁi' },
    { accent: 'quebecois', ipa: 'ʒə vu zɑ̃ pʁi' },
    { accent: 'belgian', ipa: 'ʒə vu zɑ̃ pʁi' }
  ], category: 'greetings', examples: ['Merci beaucoup. - Je vous en prie.'] },
  { id: 'word_comment_allez_vous', word: 'comment allez-vous', meaning: 'how are you (formal)', pronunciationVariants: [
    { accent: 'parisian', ipa: 'kɔmɑ̃ tale vu' },
    { accent: 'quebecois', ipa: 'kɔmɑ̃ tale vu' },
    { accent: 'belgian', ipa: 'kɔmɑ̃ tale vu' }
  ], category: 'greetings', examples: ['Bonjour, comment allez-vous?', 'Comment allez-vous aujourd\'hui?'] },
  { id: 'word_ca_va', word: 'ça va', meaning: 'how are you (informal)', pronunciationVariants: [
    { accent: 'parisian', ipa: 'sa va' },
    { accent: 'quebecois', ipa: 'sa va' },
    { accent: 'belgian', ipa: 'sa va' }
  ], category: 'greetings', examples: ['Salut! Ça va?', 'Oui, ça va bien.'] },

  // Nombres (Numbers)
  { id: 'word_un', word: 'un', meaning: 'the number 1', pronunciationVariants: [
    { accent: 'parisian', ipa: 'œ̃' },
    { accent: 'quebecois', ipa: 'œ̃' },
    { accent: 'belgian', ipa: 'œ̃' }
  ], category: 'numbers', examples: ['J\'ai un chat.', 'Un plus un égale deux.'] },
  { id: 'word_deux', word: 'deux', meaning: 'the number 2', pronunciationVariants: [
    { accent: 'parisian', ipa: 'dø' },
    { accent: 'quebecois', ipa: 'dø' },
    { accent: 'belgian', ipa: 'dø' }
  ], category: 'numbers', examples: ['Il y a deux livres.', 'Je veux deux cafés.'] },
  { id: 'word_trois', word: 'trois', meaning: 'the number 3', pronunciationVariants: [
    { accent: 'parisian', ipa: 'tʁwa' },
    { accent: 'quebecois', ipa: 'tʁwa' },
    { accent: 'belgian', ipa: 'tʁwa' }
  ], category: 'numbers', examples: ['Trois personnes sont venues.', 'Le numéro trois porte bonheur.'] },
  { id: 'word_quatre', word: 'quatre', meaning: 'the number 4', pronunciationVariants: [
    { accent: 'parisian', ipa: 'katʁ' },
    { accent: 'quebecois', ipa: 'katʁ' },
    { accent: 'belgian', ipa: 'katʁ' }
  ], category: 'numbers', examples: ['Quatre saisons dans l\'année.', 'J\'ai quatre frères.'] },
  { id: 'word_cinq', word: 'cinq', meaning: 'the number 5', pronunciationVariants: [
    { accent: 'parisian', ipa: 'sɛ̃k' },
    { accent: 'quebecois', ipa: 'sɛ̃k' },
    { accent: 'belgian', ipa: 'sɛ̃k' }
  ], category: 'numbers', examples: ['Cinq doigts sur la main.', 'Donnez-moi cinq minutes.'] },
  { id: 'word_six', word: 'six', meaning: 'the number 6', pronunciationVariants: [
    { accent: 'parisian', ipa: 'sis' },
    { accent: 'quebecois', ipa: 'sis' },
    { accent: 'belgian', ipa: 'sis' }
  ], category: 'numbers', examples: ['Six œufs dans la boîte.', 'Le film commence à six heures.'] },
  { id: 'word_sept', word: 'sept', meaning: 'the number 7', pronunciationVariants: [
    { accent: 'parisian', ipa: 'sɛt' },
    { accent: 'quebecois', ipa: 'sɛt' },
    { accent: 'belgian', ipa: 'sɛt' }
  ], category: 'numbers', examples: ['Sept jours dans la semaine.', 'Elle a sept ans.'] },
  { id: 'word_huit', word: 'huit', meaning: 'the number 8', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ɥit' },
    { accent: 'quebecois', ipa: 'ɥit' },
    { accent: 'belgian', ipa: 'ɥit' }
  ], category: 'numbers', examples: ['Huit personnes ont assisté.', 'Le bus arrive à huit heures.'] },
  { id: 'word_neuf', word: 'neuf', meaning: 'the number 9', pronunciationVariants: [
    { accent: 'parisian', ipa: 'nœf' },
    { accent: 'quebecois', ipa: 'nœf' },
    { accent: 'belgian', ipa: 'nœf' }
  ], category: 'numbers', examples: ['Neuf vies d\'un chat.', 'J\'ai neuf livres.'] },
  { id: 'word_dix', word: 'dix', meaning: 'the number 10', pronunciationVariants: [
    { accent: 'parisian', ipa: 'dis' },
    { accent: 'quebecois', ipa: 'dis' },
    { accent: 'belgian', ipa: 'dis' }
  ], category: 'numbers', examples: ['Dix doigts sur les deux mains.', 'Note parfaite: dix sur dix.'] },
  { id: 'word_onze', word: 'onze', meaning: 'the number 11', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ɔ̃z' },
    { accent: 'quebecois', ipa: 'ɔ̃z' },
    { accent: 'belgian', ipa: 'ɔ̃z' }
  ], category: 'numbers', examples: ['Onze joueurs dans une équipe.', 'Il arrive à onze heures.'] },
  { id: 'word_douze', word: 'douze', meaning: 'the number 12', pronunciationVariants: [
    { accent: 'parisian', ipa: 'duz' },
    { accent: 'quebecois', ipa: 'duz' },
    { accent: 'belgian', ipa: 'duz' }
  ], category: 'numbers', examples: ['Douze mois dans l\'année.', 'Une douzaine signifie douze.'] },
  { id: 'word_vingt', word: 'vingt', meaning: 'the number 20', pronunciationVariants: [
    { accent: 'parisian', ipa: 'vɛ̃' },
    { accent: 'quebecois', ipa: 'vɛ̃' },
    { accent: 'belgian', ipa: 'vɛ̃' }
  ], category: 'numbers', examples: ['Vingt euros.', 'Elle a vingt ans.'] },
  { id: 'word_trente', word: 'trente', meaning: 'the number 30', pronunciationVariants: [
    { accent: 'parisian', ipa: 'tʁɑ̃t' },
    { accent: 'quebecois', ipa: 'tʁɑ̃t' },
    { accent: 'belgian', ipa: 'tʁɑ̃t' }
  ], category: 'numbers', examples: ['Trente étudiants dans la classe.', 'Il fait trente degrés.'] },
  { id: 'word_cent', word: 'cent', meaning: 'the number 100', pronunciationVariants: [
    { accent: 'parisian', ipa: 'sɑ̃' },
    { accent: 'quebecois', ipa: 'sɑ̃' },
    { accent: 'belgian', ipa: 'sɑ̃' }
  ], category: 'numbers', examples: ['Cent personnes sont venues.', 'Le livre a cent pages.'] },
  { id: 'word_mille', word: 'mille', meaning: 'the number 1000', pronunciationVariants: [
    { accent: 'parisian', ipa: 'mil' },
    { accent: 'quebecois', ipa: 'mil' },
    { accent: 'belgian', ipa: 'mil' }
  ], category: 'numbers', examples: ['Mille euros.', 'Mille kilomètres.'] },
  { id: 'word_million', word: 'million', meaning: 'the number 1,000,000', pronunciationVariants: [
    { accent: 'parisian', ipa: 'miljɔ̃' },
    { accent: 'quebecois', ipa: 'miljɔ̃' },
    { accent: 'belgian', ipa: 'miljɔ̃' }
  ], category: 'numbers', examples: ['Un million de personnes ont regardé.', 'Ça coûte un million d\'euros.'] },
  { id: 'word_premier', word: 'premier', meaning: 'first', pronunciationVariants: [
    { accent: 'parisian', ipa: 'pʁəmje' },
    { accent: 'quebecois', ipa: 'pʁəmje' },
    { accent: 'belgian', ipa: 'pʁəmje' }
  ], category: 'numbers', examples: ['Premier prix.', 'C\'est ma première fois.'] },
  { id: 'word_deuxieme', word: 'deuxième', meaning: 'second', pronunciationVariants: [
    { accent: 'parisian', ipa: 'døzjɛm' },
    { accent: 'quebecois', ipa: 'døzjɛm' },
    { accent: 'belgian', ipa: 'døzjɛm' }
  ], category: 'numbers', examples: ['Deuxième place.', 'Attendez une seconde.'] },
  { id: 'word_troisieme', word: 'troisième', meaning: 'third', pronunciationVariants: [
    { accent: 'parisian', ipa: 'tʁwazjɛm' },
    { accent: 'quebecois', ipa: 'tʁwazjɛm' },
    { accent: 'belgian', ipa: 'tʁwazjɛm' }
  ], category: 'numbers', examples: ['Troisième étage.', 'Elle est arrivée troisième.'] },

  // Verbes (Verbs)
  { id: 'word_etre', word: 'être', meaning: 'to be', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ɛtʁ' },
    { accent: 'quebecois', ipa: 'ɛtʁ' },
    { accent: 'belgian', ipa: 'ɛtʁ' }
  ], category: 'verbs', examples: ['Je veux être heureux.', 'Être ou ne pas être.'] },
  { id: 'word_avoir', word: 'avoir', meaning: 'to have', pronunciationVariants: [
    { accent: 'parisian', ipa: 'avwaʁ' },
    { accent: 'quebecois', ipa: 'avwaʁ' },
    { accent: 'belgian', ipa: 'avwaʁ' }
  ], category: 'verbs', examples: ['J\'ai une voiture.', 'Ils ont deux enfants.'] },
  { id: 'word_faire', word: 'faire', meaning: 'to do/make', pronunciationVariants: [
    { accent: 'parisian', ipa: 'fɛʁ' },
    { accent: 'quebecois', ipa: 'fɛʁ' },
    { accent: 'belgian', ipa: 'fɛʁ' }
  ], category: 'verbs', examples: ['Que dois-je faire?', 'Fais tes devoirs.'] },
  { id: 'word_dire', word: 'dire', meaning: 'to say', pronunciationVariants: [
    { accent: 'parisian', ipa: 'diʁ' },
    { accent: 'quebecois', ipa: 'diʁ' },
    { accent: 'belgian', ipa: 'diʁ' }
  ], category: 'verbs', examples: ['Dis bonjour à elle.', 'Qu\'as-tu dit?'] },
  { id: 'word_aller', word: 'aller', meaning: 'to go', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ale' },
    { accent: 'quebecois', ipa: 'ale' },
    { accent: 'belgian', ipa: 'ale' }
  ], category: 'verbs', examples: ['Allons à la maison.', 'Le train va à la ville.'] },
  { id: 'word_voir', word: 'voir', meaning: 'to see', pronunciationVariants: [
    { accent: 'parisian', ipa: 'vwaʁ' },
    { accent: 'quebecois', ipa: 'vwaʁ' },
    { accent: 'belgian', ipa: 'vwaʁ' }
  ], category: 'verbs', examples: ['Je vois les montagnes.', 'Peux-tu me voir?'] },
  { id: 'word_savoir', word: 'savoir', meaning: 'to know', pronunciationVariants: [
    { accent: 'parisian', ipa: 'savwaʁ' },
    { accent: 'quebecois', ipa: 'savwaʁ' },
    { accent: 'belgian', ipa: 'savwaʁ' }
  ], category: 'verbs', examples: ['Je sais la réponse.', 'Sais-tu son nom?'] },
  { id: 'word_pouvoir', word: 'pouvoir', meaning: 'to be able to', pronunciationVariants: [
    { accent: 'parisian', ipa: 'puvwaʁ' },
    { accent: 'quebecois', ipa: 'puvwaʁ' },
    { accent: 'belgian', ipa: 'puvwaʁ' }
  ], category: 'verbs', examples: ['Je peux venir demain.', 'Peux-tu m\'aider?'] },
  { id: 'word_vouloir', word: 'vouloir', meaning: 'to want', pronunciationVariants: [
    { accent: 'parisian', ipa: 'vulwaʁ' },
    { accent: 'quebecois', ipa: 'vulwaʁ' },
    { accent: 'belgian', ipa: 'vulwaʁ' }
  ], category: 'verbs', examples: ['Je veux un café.', 'Que veux-tu manger?'] },
  { id: 'word_venir', word: 'venir', meaning: 'to come', pronunciationVariants: [
    { accent: 'parisian', ipa: 'vəniʁ' },
    { accent: 'quebecois', ipa: 'vəniʁ' },
    { accent: 'belgian', ipa: 'vəniʁ' }
  ], category: 'verbs', examples: ['Viens demain.', 'Elle vient de Paris.'] },
  { id: 'word_falloir', word: 'falloir', meaning: 'to need/must', pronunciationVariants: [
    { accent: 'parisian', ipa: 'falwaʁ' },
    { accent: 'quebecois', ipa: 'falwaʁ' },
    { accent: 'belgian', ipa: 'falwaʁ' }
  ], category: 'verbs', examples: ['Il faut travailler.', 'Il faut être patient.'] },
  { id: 'word_parler', word: 'parler', meaning: 'to speak', pronunciationVariants: [
    { accent: 'parisian', ipa: 'paʁle' },
    { accent: 'quebecois', ipa: 'paʁle' },
    { accent: 'belgian', ipa: 'paʁle' }
  ], category: 'verbs', examples: ['Je parle français.', 'Parlez plus lentement.'] },
  { id: 'word_prendre', word: 'prendre', meaning: 'to take', pronunciationVariants: [
    { accent: 'parisian', ipa: 'pʁɑ̃dʁ' },
    { accent: 'quebecois', ipa: 'pʁɑ̃dʁ' },
    { accent: 'belgian', ipa: 'pʁɑ̃dʁ' }
  ], category: 'verbs', examples: ['Prends ma main.', 'Je prends le bus.'] },
  { id: 'word_donner', word: 'donner', meaning: 'to give', pronunciationVariants: [
    { accent: 'parisian', ipa: 'dɔne' },
    { accent: 'quebecois', ipa: 'dɔne' },
    { accent: 'belgian', ipa: 'dɔne' }
  ], category: 'verbs', examples: ['Donne-moi un livre.', 'Elle donne des cours.'] },
  { id: 'word_comprendre', word: 'comprendre', meaning: 'to understand', pronunciationVariants: [
    { accent: 'parisian', ipa: 'kɔ̃pʁɑ̃dʁ' },
    { accent: 'quebecois', ipa: 'kɔ̃pʁɑ̃dʁ' },
    { accent: 'belgian', ipa: 'kɔ̃pʁɑ̃dʁ' }
  ], category: 'verbs', examples: ['Je comprends la leçon.', 'Tu comprends?'] },
  { id: 'word_manger', word: 'manger', meaning: 'to eat', pronunciationVariants: [
    { accent: 'parisian', ipa: 'mɑ̃ʒe' },
    { accent: 'quebecois', ipa: 'mɑ̃ʒe' },
    { accent: 'belgian', ipa: 'mɑ̃ʒe' }
  ], category: 'verbs', examples: ['Je mange une pomme.', 'Mangeons ensemble.'] },
  { id: 'word_boire', word: 'boire', meaning: 'to drink', pronunciationVariants: [
    { accent: 'parisian', ipa: 'bwaʁ' },
    { accent: 'quebecois', ipa: 'bwaʁ' },
    { accent: 'belgian', ipa: 'bwaʁ' }
  ], category: 'verbs', examples: ['Je bois de l\'eau.', 'Veux-tu boire quelque chose?'] },
  { id: 'word_écrire', word: 'écrire', meaning: 'to write', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ekʁiʁ' },
    { accent: 'quebecois', ipa: 'ekʁiʁ' },
    { accent: 'belgian', ipa: 'ekʁiʁ' }
  ], category: 'verbs', examples: ['J\'écris une lettre.', 'Écris ton nom.'] },
  { id: 'word_lire', word: 'lire', meaning: 'to read', pronunciationVariants: [
    { accent: 'parisian', ipa: 'liʁ' },
    { accent: 'quebecois', ipa: 'liʁ' },
    { accent: 'belgian', ipa: 'liʁ' }
  ], category: 'verbs', examples: ['Je lis un livre.', 'Elle lit le journal.'] },
  { id: 'word_travailler', word: 'travailler', meaning: 'to work', pronunciationVariants: [
    { accent: 'parisian', ipa: 'tʁavaje' },
    { accent: 'quebecois', ipa: 'tʁavaje' },
    { accent: 'belgian', ipa: 'tʁavaje' }
  ], category: 'verbs', examples: ['Je travaille à Paris.', 'Travaillez dur!'] },

  // Noms d'usage quotidien (Daily use nouns)
  { id: 'word_maison', word: 'maison', meaning: 'house', pronunciationVariants: [
    { accent: 'parisian', ipa: 'mɛzɔ̃' },
    { accent: 'quebecois', ipa: 'mɛzɔ̃' },
    { accent: 'belgian', ipa: 'mɛzɔ̃' }
  ], category: 'daily-use-nouns', examples: ['Je vis dans une grande maison.', 'La maison est belle.'] },
  { id: 'word_famille', word: 'famille', meaning: 'family', pronunciationVariants: [
    { accent: 'parisian', ipa: 'famij' },
    { accent: 'quebecois', ipa: 'famij' },
    { accent: 'belgian', ipa: 'famij' }
  ], category: 'daily-use-nouns', examples: ['J\'aime ma famille.', 'La famille est importante.'] },
  { id: 'word_ami', word: 'ami', meaning: 'friend (male)', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ami' },
    { accent: 'quebecois', ipa: 'ami' },
    { accent: 'belgian', ipa: 'ami' }
  ], category: 'daily-use-nouns', examples: ['C\'est mon meilleur ami.', 'J\'ai beaucoup d\'amis.'] },
  { id: 'word_amie', word: 'amie', meaning: 'friend (female)', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ami' },
    { accent: 'quebecois', ipa: 'ami' },
    { accent: 'belgian', ipa: 'ami' }
  ], category: 'daily-use-nouns', examples: ['C\'est ma meilleure amie.', 'Elle est une bonne amie.'] },
  { id: 'word_temps', word: 'temps', meaning: 'time/weather', pronunciationVariants: [
    { accent: 'parisian', ipa: 'tɑ̃' },
    { accent: 'quebecois', ipa: 'tɑ̃' },
    { accent: 'belgian', ipa: 'tɑ̃' }
  ], category: 'daily-use-nouns', examples: ['Je n\'ai pas le temps.', 'Quel temps fait-il?'] },
  { id: 'word_jour', word: 'jour', meaning: 'day', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ʒuʁ' },
    { accent: 'quebecois', ipa: 'ʒuʁ' },
    { accent: 'belgian', ipa: 'ʒuʁ' }
  ], category: 'daily-use-nouns', examples: ['Bonne journée!', 'Je travaille tous les jours.'] },
  { id: 'word_nuit', word: 'nuit', meaning: 'night', pronunciationVariants: [
    { accent: 'parisian', ipa: 'nɥi' },
    { accent: 'quebecois', ipa: 'nɥi' },
    { accent: 'belgian', ipa: 'nɥi' }
  ], category: 'daily-use-nouns', examples: ['La nuit est étoilée.', 'Je dors la nuit.'] },
  { id: 'word_eau', word: 'eau', meaning: 'water', pronunciationVariants: [
    { accent: 'parisian', ipa: 'o' },
    { accent: 'quebecois', ipa: 'o' },
    { accent: 'belgian', ipa: 'o' }
  ], category: 'daily-use-nouns', examples: ['Je bois de l\'eau.', 'L\'eau est froide.'] },
  { id: 'word_pain', word: 'pain', meaning: 'bread', pronunciationVariants: [
    { accent: 'parisian', ipa: 'pɛ̃' },
    { accent: 'quebecois', ipa: 'pɛ̃' },
    { accent: 'belgian', ipa: 'pɛ̃' }
  ], category: 'daily-use-nouns', examples: ['Je mange du pain.', 'Le pain est frais.'] },
  { id: 'word_livre', word: 'livre', meaning: 'book', pronunciationVariants: [
    { accent: 'parisian', ipa: 'livʁ' },
    { accent: 'quebecois', ipa: 'livʁ' },
    { accent: 'belgian', ipa: 'livʁ' }
  ], category: 'daily-use-nouns', examples: ['Je lis un livre.', 'Ce livre est intéressant.'] },
  { id: 'word_table', word: 'table', meaning: 'table', pronunciationVariants: [
    { accent: 'parisian', ipa: 'tabl' },
    { accent: 'quebecois', ipa: 'tabl' },
    { accent: 'belgian', ipa: 'tabl' }
  ], category: 'daily-use-nouns', examples: ['Mets le livre sur la table.', 'La table est mise.'] },
  { id: 'word_chaise', word: 'chaise', meaning: 'chair', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ʃɛz' },
    { accent: 'quebecois', ipa: 'ʃɛz' },
    { accent: 'belgian', ipa: 'ʃɛz' }
  ], category: 'daily-use-nouns', examples: ['Assieds-toi sur cette chaise.', 'La chaise est confortable.'] },
  { id: 'word_porte', word: 'porte', meaning: 'door', pronunciationVariants: [
    { accent: 'parisian', ipa: 'pɔʁt' },
    { accent: 'quebecois', ipa: 'pɔʁt' },
    { accent: 'belgian', ipa: 'pɔʁt' }
  ], category: 'daily-use-nouns', examples: ['Ouvre la porte.', 'La porte est fermée.'] },
  { id: 'word_fenêtre', word: 'fenêtre', meaning: 'window', pronunciationVariants: [
    { accent: 'parisian', ipa: 'fənɛtʁ' },
    { accent: 'quebecois', ipa: 'fənɛtʁ' },
    { accent: 'belgian', ipa: 'fənɛtʁ' }
  ], category: 'daily-use-nouns', examples: ['Regarde par la fenêtre.', 'La fenêtre est ouverte.'] },
  { id: 'word_voiture', word: 'voiture', meaning: 'car', pronunciationVariants: [
    { accent: 'parisian', ipa: 'vwatyʁ' },
    { accent: 'quebecois', ipa: 'vwatyʁ' },
    { accent: 'belgian', ipa: 'vwatyʁ' }
  ], category: 'daily-use-nouns', examples: ['Je conduis ma voiture.', 'La voiture est rapide.'] },
  { id: 'word_école', word: 'école', meaning: 'school', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ekɔl' },
    { accent: 'quebecois', ipa: 'ekɔl' },
    { accent: 'belgian', ipa: 'ekɔl' }
  ], category: 'daily-use-nouns', examples: ['Les enfants vont à l\'école.', 'L\'école est grande.'] },
  { id: 'word_travail', word: 'travail', meaning: 'work', pronunciationVariants: [
    { accent: 'parisian', ipa: 'tʁavaj' },
    { accent: 'quebecois', ipa: 'tʁavaj' },
    { accent: 'belgian', ipa: 'tʁavaj' }
  ], category: 'daily-use-nouns', examples: ['Le travail est important.', 'Je vais au travail.'] },
  { id: 'word_argent', word: 'argent', meaning: 'money', pronunciationVariants: [
    { accent: 'parisian', ipa: 'aʁʒɑ̃' },
    { accent: 'quebecois', ipa: 'aʁʒɑ̃' },
    { accent: 'belgian', ipa: 'aʁʒɑ̃' }
  ], category: 'daily-use-nouns', examples: ['Je n\'ai pas d\'argent.', 'L\'argent ne fait pas le bonheur.'] },
  { id: 'word_nourriture', word: 'nourriture', meaning: 'food', pronunciationVariants: [
    { accent: 'parisian', ipa: 'nuʁityʁ' },
    { accent: 'quebecois', ipa: 'nuʁityʁ' },
    { accent: 'belgian', ipa: 'nuʁityʁ' }
  ], category: 'daily-use-nouns', examples: ['La nourriture est bonne.', 'J\'aime la nourriture française.'] },
  { id: 'word_ville', word: 'ville', meaning: 'city', pronunciationVariants: [
    { accent: 'parisian', ipa: 'vil' },
    { accent: 'quebecois', ipa: 'vil' },
    { accent: 'belgian', ipa: 'vil' }
  ], category: 'daily-use-nouns', examples: ['J\'habite dans une grande ville.', 'La ville est belle.'] },
  { id: 'word_pays', word: 'pays', meaning: 'country', pronunciationVariants: [
    { accent: 'parisian', ipa: 'pɛi' },
    { accent: 'quebecois', ipa: 'pɛi' },
    { accent: 'belgian', ipa: 'pɛi' }
  ], category: 'daily-use-nouns', examples: ['La France est un beau pays.', 'J\'aime mon pays.'] },
  { id: 'word_langue', word: 'langue', meaning: 'language/tongue', pronunciationVariants: [
    { accent: 'parisian', ipa: 'lɑ̃ɡ' },
    { accent: 'quebecois', ipa: 'lɑ̃ɡ' },
    { accent: 'belgian', ipa: 'lɑ̃ɡ' }
  ], category: 'daily-use-nouns', examples: ['J\'apprends une nouvelle langue.', 'La langue française est belle.'] },
  { id: 'word_mot', word: 'mot', meaning: 'word', pronunciationVariants: [
    { accent: 'parisian', ipa: 'mo' },
    { accent: 'quebecois', ipa: 'mo' },
    { accent: 'belgian', ipa: 'mo' }
  ], category: 'daily-use-nouns', examples: ['Quel est ce mot?', 'J\'apprends un nouveau mot.'] },
  { id: 'word_nom', word: 'nom', meaning: 'name', pronunciationVariants: [
    { accent: 'parisian', ipa: 'nɔ̃' },
    { accent: 'quebecois', ipa: 'nɔ̃' },
    { accent: 'belgian', ipa: 'nɔ̃' }
  ], category: 'daily-use-nouns', examples: ['Quel est ton nom?', 'Mon nom est Pierre.'] },
  { id: 'word_année', word: 'année', meaning: 'year', pronunciationVariants: [
    { accent: 'parisian', ipa: 'ane' },
    { accent: 'quebecois', ipa: 'ane' },
    { accent: 'belgian', ipa: 'ane' }
  ], category: 'daily-use-nouns', examples: ['Bonne année!', 'Cette année est importante.'] },
  { id: 'word_mois', word: 'mois', meaning: 'month', pronunciationVariants: [
    { accent: 'parisian', ipa: 'mwa' },
    { accent: 'quebecois', ipa: 'mwa' },
    { accent: 'belgian', ipa: 'mwa' }
  ], category: 'daily-use-nouns', examples: ['Il y a douze mois dans l\'année.', 'Quel mois sommes-nous?'] },
  { id: 'word_semaine', word: 'semaine', meaning: 'week', pronunciationVariants: [
    { accent: 'parisian', ipa: 's(ə)men' },
    { accent: 'quebecois', ipa: 's(ə)men' },
    { accent: 'belgian', ipa: 's(ə)men' }
  ], category: 'daily-use-nouns', examples: ['Je travaille cinq jours par semaine.', 'Bonne semaine!'] },
];
