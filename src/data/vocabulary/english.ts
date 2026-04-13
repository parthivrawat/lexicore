import { VocabWord } from '@/types';

export const vocabularyEn: VocabWord[] = [
  // Greetings
  { id: 'word_hello', word: 'hello', meaning: 'a greeting', pronunciationVariants: [
    { accent: 'american', ipa: 'həˈloʊ' },
    { accent: 'british', ipa: 'həˈləʊ' },
    { accent: 'australian', ipa: 'həˈloʊ' }
  ], category: 'greetings', examples: ['Hello, how are you?', 'She said hello to her neighbor.'] },
  { id: 'word_hi', word: 'hi', meaning: 'informal greeting', pronunciationVariants: [
    { accent: 'american', ipa: 'haɪ' },
    { accent: 'british', ipa: 'haɪ' },
    { accent: 'australian', ipa: 'haɪ' }
  ], category: 'greetings', examples: ['Hi there!', 'Hi, it\'s nice to meet you.'] },
  { id: 'word_good_morning', word: 'good morning', meaning: 'morning greeting', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡʊd ˈmɔːrnɪŋ' },
    { accent: 'british', ipa: 'ɡʊd ˈmɔːnɪŋ' },
    { accent: 'australian', ipa: 'ɡʊd ˈmɔːnɪŋ' }
  ], category: 'greetings', examples: ['Good morning, everyone.', 'He wished her good morning.'] },
  { id: 'word_good_evening', word: 'good evening', meaning: 'evening greeting', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡʊd ˈiːvnɪŋ' },
    { accent: 'british', ipa: 'ɡʊd ˈiːvnɪŋ' },
    { accent: 'australian', ipa: 'ɡʊd ˈiːvnɪŋ' }
  ], category: 'greetings', examples: ['Good evening, ladies and gentlemen.', 'Good evening, welcome to our show.'] },
  { id: 'word_goodbye', word: 'goodbye', meaning: 'farewell', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡʊdˈbaɪ' },
    { accent: 'british', ipa: 'ɡʊdˈbaɪ' },
    { accent: 'australian', ipa: 'ɡʊdˈbaɪ' }
  ], category: 'greetings', examples: ['Goodbye, see you tomorrow.', 'She waved goodbye.'] },
  { id: 'word_bye', word: 'bye', meaning: 'informal farewell', pronunciationVariants: [
    { accent: 'american', ipa: 'baɪ' },
    { accent: 'british', ipa: 'baɪ' },
    { accent: 'australian', ipa: 'baɪ' }
  ], category: 'greetings', examples: ['Bye now!', 'Just wanted to say bye.'] },
  { id: 'word_thank_you', word: 'thank you', meaning: 'expression of gratitude', pronunciationVariants: [
    { accent: 'american', ipa: 'θæŋk juː' },
    { accent: 'british', ipa: 'θæŋk juː' },
    { accent: 'australian', ipa: 'θæŋk jə' }
  ], category: 'greetings', examples: ['Thank you for your help.', 'Thank you very much.'] },
  { id: 'word_thanks', word: 'thanks', meaning: 'informal thanks', pronunciationVariants: [
    { accent: 'american', ipa: 'θæŋks' },
    { accent: 'british', ipa: 'θæŋks' },
    { accent: 'australian', ipa: 'θæŋks' }
  ], category: 'greetings', examples: ['Thanks for coming.', 'Thanks a lot!'] },
  { id: 'word_please', word: 'please', meaning: 'polite request', pronunciationVariants: [
    { accent: 'american', ipa: 'pliːz' },
    { accent: 'british', ipa: 'pliːz' },
    { accent: 'australian', ipa: 'pliːz' }
  ], category: 'greetings', examples: ['Please help me.', 'Could you please pass the salt?'] },
  { id: 'word_sorry', word: 'sorry', meaning: 'apology', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈsɔːri' },
    { accent: 'british', ipa: 'ˈsɒri' },
    { accent: 'australian', ipa: 'ˈsɔːri' }
  ], category: 'greetings', examples: ['Sorry, I\'m late.', 'I\'m sorry about that.'] },
  { id: 'word_excuse_me', word: 'excuse me', meaning: 'polite interruption', pronunciationVariants: [
    { accent: 'american', ipa: 'ɪkˈskjuːz miː' },
    { accent: 'british', ipa: 'ɪkˈskjuːz miː' },
    { accent: 'australian', ipa: 'ɪkˈskjuːz miː' }
  ], category: 'greetings', examples: ['Excuse me, could you help?', 'Excuse me, I need to get by.'] },
  { id: 'word_pardon', word: 'pardon', meaning: 'forgiveness/request to repeat', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈpɑːrdn' },
    { accent: 'british', ipa: 'ˈpɑːdn' },
    { accent: 'australian', ipa: 'ˈpɑːdn' }
  ], category: 'greetings', examples: ['Pardon me for interrupting.', 'Pardon? I didn\'t hear you.'] },

  // Numbers
  { id: 'word_one', word: 'one', meaning: 'the number 1', pronunciationVariants: [
    { accent: 'american', ipa: 'wʌn' },
    { accent: 'british', ipa: 'wʌn' },
    { accent: 'australian', ipa: 'wʌn' }
  ], category: 'numbers', examples: ['I have one question.', 'One plus one equals two.'] },
  { id: 'word_two', word: 'two', meaning: 'the number 2', pronunciationVariants: [
    { accent: 'american', ipa: 'tuː' },
    { accent: 'british', ipa: 'tuː' },
    { accent: 'australian', ipa: 'tuː' }
  ], category: 'numbers', examples: ['Two cats are playing.', 'Can I have two tickets?'] },
  { id: 'word_three', word: 'three', meaning: 'the number 3', pronunciationVariants: [
    { accent: 'american', ipa: 'θriː' },
    { accent: 'british', ipa: 'θriː' },
    { accent: 'australian', ipa: 'θriː' }
  ], category: 'numbers', examples: ['Three people arrived.', 'I need three copies.'] },
  { id: 'word_four', word: 'four', meaning: 'the number 4', pronunciationVariants: [
    { accent: 'american', ipa: 'fɔːr' },
    { accent: 'british', ipa: 'fɔː' },
    { accent: 'australian', ipa: 'fɔː' }
  ], category: 'numbers', examples: ['Four seasons in a year.', 'She has four children.'] },
  { id: 'word_five', word: 'five', meaning: 'the number 5', pronunciationVariants: [
    { accent: 'american', ipa: 'faɪv' },
    { accent: 'british', ipa: 'faɪv' },
    { accent: 'australian', ipa: 'faɪv' }
  ], category: 'numbers', examples: ['Five fingers on a hand.', 'Give me five minutes.'] },
  { id: 'word_six', word: 'six', meaning: 'the number 6', pronunciationVariants: [
    { accent: 'american', ipa: 'sɪks' },
    { accent: 'british', ipa: 'sɪks' },
    { accent: 'australian', ipa: 'sɪks' }
  ], category: 'numbers', examples: ['Six eggs in the carton.', 'The show starts at six.'] },
  { id: 'word_seven', word: 'seven', meaning: 'the number 7', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈsɛvn' },
    { accent: 'british', ipa: 'ˈsɛvn' },
    { accent: 'australian', ipa: 'ˈsɛvn' }
  ], category: 'numbers', examples: ['Seven days in a week.', 'She is seven years old.'] },
  { id: 'word_eight', word: 'eight', meaning: 'the number 8', pronunciationVariants: [
    { accent: 'american', ipa: 'eɪt' },
    { accent: 'british', ipa: 'eɪt' },
    { accent: 'australian', ipa: 'eɪt' }
  ], category: 'numbers', examples: ['Eight people attended.', 'The meeting is at eight.'] },
  { id: 'word_nine', word: 'nine', meaning: 'the number 9', pronunciationVariants: [
    { accent: 'american', ipa: 'naɪn' },
    { accent: 'british', ipa: 'naɪn' },
    { accent: 'australian', ipa: 'naɪn' }
  ], category: 'numbers', examples: ['Nine lives of a cat.', 'I have nine books.'] },
  { id: 'word_ten', word: 'ten', meaning: 'the number 10', pronunciationVariants: [
    { accent: 'american', ipa: 'tɛn' },
    { accent: 'british', ipa: 'tɛn' },
    { accent: 'australian', ipa: 'tɛn' }
  ], category: 'numbers', examples: ['Ten fingers on both hands.', 'Perfect ten score.'] },
  { id: 'word_eleven', word: 'eleven', meaning: 'the number 11', pronunciationVariants: [
    { accent: 'american', ipa: 'ɪˈlɛvn' },
    { accent: 'british', ipa: 'ɪˈlɛvn' },
    { accent: 'australian', ipa: 'ɪˈlɛvn' }
  ], category: 'numbers', examples: ['Eleven players on a team.', 'She arrived at eleven.'] },
  { id: 'word_twelve', word: 'twelve', meaning: 'the number 12', pronunciationVariants: [
    { accent: 'american', ipa: 'twɛlv' },
    { accent: 'british', ipa: 'twɛlv' },
    { accent: 'australian', ipa: 'twɛlv' }
  ], category: 'numbers', examples: ['Twelve months in a year.', 'A dozen means twelve.'] },
  { id: 'word_twenty', word: 'twenty', meaning: 'the number 20', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈtwɛnti' },
    { accent: 'british', ipa: 'ˈtwɛnti' },
    { accent: 'australian', ipa: 'ˈtwɛnti' }
  ], category: 'numbers', examples: ['Twenty dollars.', 'She is twenty years old.'] },
  { id: 'word_thirty', word: 'thirty', meaning: 'the number 30', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈθɜːrti' },
    { accent: 'british', ipa: 'ˈθɜːti' },
    { accent: 'australian', ipa: 'ˈθɜːti' }
  ], category: 'numbers', examples: ['Thirty students in class.', 'It\'s thirty degrees.'] },
  { id: 'word_hundred', word: 'hundred', meaning: 'the number 100', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈhʌndrəd' },
    { accent: 'british', ipa: 'ˈhʌndrəd' },
    { accent: 'australian', ipa: 'ˈhʌndrəd' }
  ], category: 'numbers', examples: ['A hundred people came.', 'The book has a hundred pages.'] },
  { id: 'word_thousand', word: 'thousand', meaning: 'the number 1000', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈθaʊzənd' },
    { accent: 'british', ipa: 'ˈθaʊzənd' },
    { accent: 'australian', ipa: 'ˈθaʊzənd' }
  ], category: 'numbers', examples: ['A thousand dollars.', 'A thousand miles away.'] },
  { id: 'word_million', word: 'million', meaning: 'the number 1,000,000', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈmɪljən' },
    { accent: 'british', ipa: 'ˈmɪljən' },
    { accent: 'australian', ipa: 'ˈmɪljən' }
  ], category: 'numbers', examples: ['A million people watched.', 'It cost a million dollars.'] },
  { id: 'word_first', word: 'first', meaning: 'position 1', pronunciationVariants: [
    { accent: 'american', ipa: 'fɜːrst' },
    { accent: 'british', ipa: 'fɜːst' },
    { accent: 'australian', ipa: 'fɜːst' }
  ], category: 'numbers', examples: ['First place winner.', 'This is my first time.'] },
  { id: 'word_second', word: 'second', meaning: 'position 2', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈsɛkənd' },
    { accent: 'british', ipa: 'ˈsɛkənd' },
    { accent: 'australian', ipa: 'ˈsɛkənd' }
  ], category: 'numbers', examples: ['Second place.', 'Wait a second.'] },
  { id: 'word_third', word: 'third', meaning: 'position 3', pronunciationVariants: [
    { accent: 'american', ipa: 'θɜːrd' },
    { accent: 'british', ipa: 'θɜːd' },
    { accent: 'australian', ipa: 'θɜːd' }
  ], category: 'numbers', examples: ['Third floor.', 'She came in third.'] },

  // Verbs
  { id: 'word_be', word: 'be', meaning: 'exist', pronunciationVariants: [
    { accent: 'american', ipa: 'biː' },
    { accent: 'british', ipa: 'biː' },
    { accent: 'australian', ipa: 'biː' }
  ], category: 'verbs', examples: ['I want to be happy.', 'To be or not to be.'] },
  { id: 'word_have', word: 'have', meaning: 'possess', pronunciationVariants: [
    { accent: 'american', ipa: 'hæv' },
    { accent: 'british', ipa: 'hæv' },
    { accent: 'australian', ipa: 'hæv' }
  ], category: 'verbs', examples: ['I have a car.', 'They have two children.'] },
  { id: 'word_do', word: 'do', meaning: 'perform', pronunciationVariants: [
    { accent: 'american', ipa: 'duː' },
    { accent: 'british', ipa: 'duː' },
    { accent: 'australian', ipa: 'duː' }
  ], category: 'verbs', examples: ['What should I do?', 'Do your homework.'] },
  { id: 'word_say', word: 'say', meaning: 'speak', pronunciationVariants: [
    { accent: 'american', ipa: 'seɪ' },
    { accent: 'british', ipa: 'seɪ' },
    { accent: 'australian', ipa: 'seɪ' }
  ], category: 'verbs', examples: ['Say hello to her.', 'What did you say?'] },
  { id: 'word_go', word: 'go', meaning: 'move/travel', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡoʊ' },
    { accent: 'british', ipa: 'ɡəʊ' },
    { accent: 'australian', ipa: 'ɡoʊ' }
  ], category: 'verbs', examples: ['Let\'s go home.', 'The train goes to the city.'] },
  { id: 'word_get', word: 'get', meaning: 'obtain/receive', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡɛt' },
    { accent: 'british', ipa: 'ɡɛt' },
    { accent: 'australian', ipa: 'ɡɛt' }
  ], category: 'verbs', examples: ['Get me some water.', 'I got a new job.'] },
  { id: 'word_make', word: 'make', meaning: 'create', pronunciationVariants: [
    { accent: 'american', ipa: 'meɪk' },
    { accent: 'british', ipa: 'meɪk' },
    { accent: 'australian', ipa: 'meɪk' }
  ], category: 'verbs', examples: ['Make dinner tonight.', 'She made a cake.'] },
  { id: 'word_know', word: 'know', meaning: 'understand', pronunciationVariants: [
    { accent: 'american', ipa: 'noʊ' },
    { accent: 'british', ipa: 'nəʊ' },
    { accent: 'australian', ipa: 'noʊ' }
  ], category: 'verbs', examples: ['I know the answer.', 'Do you know her name?'] },
  { id: 'word_take', word: 'take', meaning: 'grab/accept', pronunciationVariants: [
    { accent: 'american', ipa: 'teɪk' },
    { accent: 'british', ipa: 'teɪk' },
    { accent: 'australian', ipa: 'teɪk' }
  ], category: 'verbs', examples: ['Take my hand.', 'I take the bus to work.'] },
  { id: 'word_see', word: 'see', meaning: 'look at', pronunciationVariants: [
    { accent: 'american', ipa: 'siː' },
    { accent: 'british', ipa: 'siː' },
    { accent: 'australian', ipa: 'siː' }
  ], category: 'verbs', examples: ['I see the mountains.', 'Can you see me?'] },
  { id: 'word_come', word: 'come', meaning: 'approach', pronunciationVariants: [
    { accent: 'american', ipa: 'kʌm' },
    { accent: 'british', ipa: 'kʌm' },
    { accent: 'australian', ipa: 'kʌm' }
  ], category: 'verbs', examples: ['Come here please.', 'They come every Sunday.'] },
  { id: 'word_think', word: 'think', meaning: 'consider', pronunciationVariants: [
    { accent: 'american', ipa: 'θɪŋk' },
    { accent: 'british', ipa: 'θɪŋk' },
    { accent: 'australian', ipa: 'θɪŋk' }
  ], category: 'verbs', examples: ['Think before you speak.', 'I think it\'s going to rain.'] },
  { id: 'word_look', word: 'look', meaning: 'watch/appear', pronunciationVariants: [
    { accent: 'american', ipa: 'lʊk' },
    { accent: 'british', ipa: 'lʊk' },
    { accent: 'australian', ipa: 'lʊk' }
  ], category: 'verbs', examples: ['Look at the sky.', 'You look tired.'] },
  { id: 'word_want', word: 'want', meaning: 'desire', pronunciationVariants: [
    { accent: 'american', ipa: 'wɑːnt' },
    { accent: 'british', ipa: 'wɒnt' },
    { accent: 'australian', ipa: 'wɒnt' }
  ], category: 'verbs', examples: ['I want some coffee.', 'What do you want for dinner?'] },
  { id: 'word_give', word: 'give', meaning: 'hand over', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡɪv' },
    { accent: 'british', ipa: 'ɡɪv' },
    { accent: 'australian', ipa: 'ɡɪv' }
  ], category: 'verbs', examples: ['Give me the book.', 'She gave a great speech.'] },
  { id: 'word_use', word: 'use', meaning: 'utilize', pronunciationVariants: [
    { accent: 'american', ipa: 'juːz' },
    { accent: 'british', ipa: 'juːz' },
    { accent: 'australian', ipa: 'juːz' }
  ], category: 'verbs', examples: ['Use your imagination.', 'How do you use this tool?'] },
  { id: 'word_find', word: 'find', meaning: 'discover', pronunciationVariants: [
    { accent: 'american', ipa: 'faɪnd' },
    { accent: 'british', ipa: 'faɪnd' },
    { accent: 'australian', ipa: 'faɪnd' }
  ], category: 'verbs', examples: ['Find your keys.', 'I found a wallet.'] },
  { id: 'word_tell', word: 'tell', meaning: 'inform', pronunciationVariants: [
    { accent: 'american', ipa: 'tɛl' },
    { accent: 'british', ipa: 'tɛl' },
    { accent: 'australian', ipa: 'tɛl' }
  ], category: 'verbs', examples: ['Tell me a story.', 'She told the truth.'] },
  { id: 'word_ask', word: 'ask', meaning: 'question', pronunciationVariants: [
    { accent: 'american', ipa: 'æsk' },
    { accent: 'british', ipa: 'ɑːsk' },
    { accent: 'australian', ipa: 'ɑːsk' }
  ], category: 'verbs', examples: ['Ask your teacher.', 'I asked for directions.'] },
  { id: 'word_work', word: 'work', meaning: 'labor/operate', pronunciationVariants: [
    { accent: 'american', ipa: 'wɜːrk' },
    { accent: 'british', ipa: 'wɜːk' },
    { accent: 'australian', ipa: 'wɜːk' }
  ], category: 'verbs', examples: ['I work from home.', 'The machine works well.'] },
  { id: 'word_seem', word: 'seem', meaning: 'appear', pronunciationVariants: [
    { accent: 'american', ipa: 'siːm' },
    { accent: 'british', ipa: 'siːm' },
    { accent: 'australian', ipa: 'siːm' }
  ], category: 'verbs', examples: ['You seem happy.', 'It seems like rain.'] },
  { id: 'word_feel', word: 'feel', meaning: 'sense emotions', pronunciationVariants: [
    { accent: 'american', ipa: 'fiːl' },
    { accent: 'british', ipa: 'fiːl' },
    { accent: 'australian', ipa: 'fiːl' }
  ], category: 'verbs', examples: ['I feel tired today.', 'How do you feel?'] },
  { id: 'word_try', word: 'try', meaning: 'attempt', pronunciationVariants: [
    { accent: 'american', ipa: 'traɪ' },
    { accent: 'british', ipa: 'traɪ' },
    { accent: 'australian', ipa: 'traɪ' }
  ], category: 'verbs', examples: ['Try to solve it.', 'I tried my best.'] },
  { id: 'word_leave', word: 'leave', meaning: 'depart', pronunciationVariants: [
    { accent: 'american', ipa: 'liːv' },
    { accent: 'british', ipa: 'liːv' },
    { accent: 'australian', ipa: 'liːv' }
  ], category: 'verbs', examples: ['Leave now.', 'She left early.'] },
  { id: 'word_call', word: 'call', meaning: 'telephone/shout', pronunciationVariants: [
    { accent: 'american', ipa: 'kɔːl' },
    { accent: 'british', ipa: 'kɔːl' },
    { accent: 'australian', ipa: 'kɔːl' }
  ], category: 'verbs', examples: ['Call me tomorrow.', 'He called for help.'] },
  { id: 'word_help', word: 'help', meaning: 'assist', pronunciationVariants: [
    { accent: 'american', ipa: 'hɛlp' },
    { accent: 'british', ipa: 'hɛlp' },
    { accent: 'australian', ipa: 'hɛlp' }
  ], category: 'verbs', examples: ['Can you help me?', 'She helped her friend.'] },
  { id: 'word_turn', word: 'turn', meaning: 'rotate/change direction', pronunciationVariants: [
    { accent: 'american', ipa: 'tɜːrn' },
    { accent: 'british', ipa: 'tɜːn' },
    { accent: 'australian', ipa: 'tɜːn' }
  ], category: 'verbs', examples: ['Turn left here.', 'The pages turn easily.'] },
  { id: 'word_start', word: 'start', meaning: 'begin', pronunciationVariants: [
    { accent: 'american', ipa: 'stɑːrt' },
    { accent: 'british', ipa: 'stɑːt' },
    { accent: 'australian', ipa: 'stɑːt' }
  ], category: 'verbs', examples: ['Start the engine.', 'We start at nine.'] },
  { id: 'word_show', word: 'show', meaning: 'display', pronunciationVariants: [
    { accent: 'american', ipa: 'ʃoʊ' },
    { accent: 'british', ipa: 'ʃəʊ' },
    { accent: 'australian', ipa: 'ʃoʊ' }
  ], category: 'verbs', examples: ['Show me your work.', 'He showed great courage.'] },
  { id: 'word_hear', word: 'hear', meaning: 'listen', pronunciationVariants: [
    { accent: 'american', ipa: 'hɪr' },
    { accent: 'british', ipa: 'hɪə' },
    { accent: 'australian', ipa: 'hɪə' }
  ], category: 'verbs', examples: ['I hear music.', 'Can you hear me?'] },
  { id: 'word_play', word: 'play', meaning: 'engage in activity', pronunciationVariants: [
    { accent: 'american', ipa: 'pleɪ' },
    { accent: 'british', ipa: 'pleɪ' },
    { accent: 'australian', ipa: 'pleɪ' }
  ], category: 'verbs', examples: ['Children play outside.', 'Let\'s play a game.'] },
  { id: 'word_run', word: 'run', meaning: 'move quickly', pronunciationVariants: [
    { accent: 'american', ipa: 'rʌn' },
    { accent: 'british', ipa: 'rʌn' },
    { accent: 'australian', ipa: 'rʌn' }
  ], category: 'verbs', examples: ['Run to the store.', 'She runs every morning.'] },
  { id: 'word_move', word: 'move', meaning: 'change position', pronunciationVariants: [
    { accent: 'american', ipa: 'muːv' },
    { accent: 'british', ipa: 'muːv' },
    { accent: 'australian', ipa: 'muːv' }
  ], category: 'verbs', examples: ['Move the chair.', 'The clouds move slowly.'] },
  { id: 'word_live', word: 'live', meaning: 'exist/reside', pronunciationVariants: [
    { accent: 'american', ipa: 'lɪv' },
    { accent: 'british', ipa: 'lɪv' },
    { accent: 'australian', ipa: 'lɪv' }
  ], category: 'verbs', examples: ['I live in the city.', 'Where do you live?'] },
  { id: 'word_believe', word: 'believe', meaning: 'accept as true', pronunciationVariants: [
    { accent: 'american', ipa: 'bɪˈliːv' },
    { accent: 'british', ipa: 'bɪˈliːv' },
    { accent: 'australian', ipa: 'bɪˈliːv' }
  ], category: 'verbs', examples: ['I believe you.', 'Believe in yourself.'] },
  { id: 'word_hold', word: 'hold', meaning: 'grasp', pronunciationVariants: [
    { accent: 'american', ipa: 'hoʊld' },
    { accent: 'british', ipa: 'həʊld' },
    { accent: 'australian', ipa: 'həʊld' }
  ], category: 'verbs', examples: ['Hold my hand.', 'She holds a baby.'] },
  { id: 'word_bring', word: 'bring', meaning: 'carry here', pronunciationVariants: [
    { accent: 'american', ipa: 'brɪŋ' },
    { accent: 'british', ipa: 'brɪŋ' },
    { accent: 'australian', ipa: 'brɪŋ' }
  ], category: 'verbs', examples: ['Bring me coffee.', 'He brought good news.'] },
  { id: 'word_happen', word: 'happen', meaning: 'occur', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈhæpən' },
    { accent: 'british', ipa: 'ˈhæpən' },
    { accent: 'australian', ipa: 'ˈhæpən' }
  ], category: 'verbs', examples: ['What happened?', 'Accidents happen.'] },
  { id: 'word_write', word: 'write', meaning: 'put in writing', pronunciationVariants: [
    { accent: 'american', ipa: 'raɪt' },
    { accent: 'british', ipa: 'raɪt' },
    { accent: 'australian', ipa: 'raɪt' }
  ], category: 'verbs', examples: ['Write your name.', 'She writes novels.'] },
  { id: 'word_provide', word: 'provide', meaning: 'supply', pronunciationVariants: [
    { accent: 'american', ipa: 'prəˈvaɪd' },
    { accent: 'british', ipa: 'prəˈvaɪd' },
    { accent: 'australian', ipa: 'prəˈvaɪd' }
  ], category: 'verbs', examples: ['They provide food.', 'The school provides education.'] },
  { id: 'word_sit', word: 'sit', meaning: 'be seated', pronunciationVariants: [
    { accent: 'american', ipa: 'sɪt' },
    { accent: 'british', ipa: 'sɪt' },
    { accent: 'australian', ipa: 'sɪt' }
  ], category: 'verbs', examples: ['Sit down please.', 'The cat sits on the mat.'] },
  { id: 'word_stand', word: 'stand', meaning: 'be upright', pronunciationVariants: [
    { accent: 'american', ipa: 'stænd' },
    { accent: 'british', ipa: 'stænd' },
    { accent: 'australian', ipa: 'stænd' }
  ], category: 'verbs', examples: ['Stand up straight.', 'She stands tall.'] },
  { id: 'word_lose', word: 'lose', meaning: 'no longer have', pronunciationVariants: [
    { accent: 'american', ipa: 'luːz' },
    { accent: 'british', ipa: 'luːz' },
    { accent: 'australian', ipa: 'luːz' }
  ], category: 'verbs', examples: ['Don\'t lose your keys.', 'They lost the game.'] },
  { id: 'word_pay', word: 'pay', meaning: 'give money', pronunciationVariants: [
    { accent: 'american', ipa: 'peɪ' },
    { accent: 'british', ipa: 'peɪ' },
    { accent: 'australian', ipa: 'peɪ' }
  ], category: 'verbs', examples: ['Pay the bill.', 'I paid ten dollars.'] },
  { id: 'word_meet', word: 'meet', meaning: 'encounter', pronunciationVariants: [
    { accent: 'american', ipa: 'miːt' },
    { accent: 'british', ipa: 'miːt' },
    { accent: 'australian', ipa: 'miːt' }
  ], category: 'verbs', examples: ['Meet me at noon.', 'They met last year.'] },
  { id: 'word_include', word: 'include', meaning: 'contain', pronunciationVariants: [
    { accent: 'american', ipa: 'ɪnˈkluːd' },
    { accent: 'british', ipa: 'ɪnˈkluːd' },
    { accent: 'australian', ipa: 'ɪnˈkluːd' }
  ], category: 'verbs', examples: ['Include your name.', 'The price includes tax.'] },
  { id: 'word_continue', word: 'continue', meaning: 'keep going', pronunciationVariants: [
    { accent: 'american', ipa: 'kənˈtɪnjuː' },
    { accent: 'british', ipa: 'kənˈtɪnjuː' },
    { accent: 'australian', ipa: 'kənˈtɪnjuː' }
  ], category: 'verbs', examples: ['Continue reading.', 'The rain continues.'] },
  { id: 'word_set', word: 'set', meaning: 'put/place', pronunciationVariants: [
    { accent: 'american', ipa: 'sɛt' },
    { accent: 'british', ipa: 'sɛt' },
    { accent: 'australian', ipa: 'sɛt' }
  ], category: 'verbs', examples: ['Set the table.', 'She set a record.'] },
  { id: 'word_learn', word: 'learn', meaning: 'study', pronunciationVariants: [
    { accent: 'american', ipa: 'lɜːrn' },
    { accent: 'british', ipa: 'lɜːn' },
    { accent: 'australian', ipa: 'lɜːn' }
  ], category: 'verbs', examples: ['Learn a new language.', 'I learned a lot.'] },
  { id: 'word_change', word: 'change', meaning: 'make different', pronunciationVariants: [
    { accent: 'american', ipa: 'tʃeɪndʒ' },
    { accent: 'british', ipa: 'tʃeɪndʒ' },
    { accent: 'australian', ipa: 'tʃeɪndʒ' }
  ], category: 'verbs', examples: ['Change your clothes.', 'Times change.'] },
  { id: 'word_lead', word: 'lead', meaning: 'guide', pronunciationVariants: [
    { accent: 'american', ipa: 'liːd' },
    { accent: 'british', ipa: 'liːd' },
    { accent: 'australian', ipa: 'liːd' }
  ], category: 'verbs', examples: ['Lead the team.', 'She leads by example.'] },
  { id: 'word_understand', word: 'understand', meaning: 'comprehend', pronunciationVariants: [
    { accent: 'american', ipa: 'ˌʌndərˈstænd' },
    { accent: 'british', ipa: 'ˌʌndəˈstænd' },
    { accent: 'australian', ipa: 'ˌʌndəˈstænd' }
  ], category: 'verbs', examples: ['I understand now.', 'Do you understand the problem?'] },
  { id: 'word_watch', word: 'watch', meaning: 'observe', pronunciationVariants: [
    { accent: 'american', ipa: 'wɑːtʃ' },
    { accent: 'british', ipa: 'wɒtʃ' },
    { accent: 'australian', ipa: 'wɒtʃ' }
  ], category: 'verbs', examples: ['Watch the movie.', 'I watch birds.'] },
  { id: 'word_follow', word: 'follow', meaning: 'go after', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈfɑːloʊ' },
    { accent: 'british', ipa: 'ˈfɒləʊ' },
    { accent: 'australian', ipa: 'ˈfɒləʊ' }
  ], category: 'verbs', examples: ['Follow the instructions.', 'She followed him home.'] },
  { id: 'word_stop', word: 'stop', meaning: 'cease', pronunciationVariants: [
    { accent: 'american', ipa: 'stɑːp' },
    { accent: 'british', ipa: 'stɒp' },
    { accent: 'australian', ipa: 'stɒp' }
  ], category: 'verbs', examples: ['Stop the car.', 'The rain stopped.'] },
  { id: 'word_create', word: 'create', meaning: 'make new', pronunciationVariants: [
    { accent: 'american', ipa: 'kriˈeɪt' },
    { accent: 'british', ipa: 'kriˈeɪt' },
    { accent: 'australian', ipa: 'kriˈeɪt' }
  ], category: 'verbs', examples: ['Create art.', 'God created the world.'] },
  { id: 'word_speak', word: 'speak', meaning: 'talk', pronunciationVariants: [
    { accent: 'american', ipa: 'spiːk' },
    { accent: 'british', ipa: 'spiːk' },
    { accent: 'australian', ipa: 'spiːk' }
  ], category: 'verbs', examples: ['Speak clearly.', 'She speaks three languages.'] },
  { id: 'word_read', word: 'read', meaning: 'look at text', pronunciationVariants: [
    { accent: 'american', ipa: 'riːd' },
    { accent: 'british', ipa: 'riːd' },
    { accent: 'australian', ipa: 'riːd' }
  ], category: 'verbs', examples: ['Read the book.', 'I read every day.'] },
  { id: 'word_spend', word: 'spend', meaning: 'use time/money', pronunciationVariants: [
    { accent: 'american', ipa: 'spɛnd' },
    { accent: 'british', ipa: 'spɛnd' },
    { accent: 'australian', ipa: 'spɛnd' }
  ], category: 'verbs', examples: ['Spend wisely.', 'She spent the weekend reading.'] },
  { id: 'word_grow', word: 'grow', meaning: 'increase size', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡroʊ' },
    { accent: 'british', ipa: 'ɡrəʊ' },
    { accent: 'australian', ipa: 'ɡrəʊ' }
  ], category: 'verbs', examples: ['Plants grow.', 'The company grows fast.'] },
  { id: 'word_open', word: 'open', meaning: 'uncover', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈoʊpən' },
    { accent: 'british', ipa: 'ˈəʊpən' },
    { accent: 'australian', ipa: 'ˈəʊpən' }
  ], category: 'verbs', examples: ['Open the door.', 'The store opens at nine.'] },
  { id: 'word_walk', word: 'walk', meaning: 'move on foot', pronunciationVariants: [
    { accent: 'american', ipa: 'wɔːk' },
    { accent: 'british', ipa: 'wɔːk' },
    { accent: 'australian', ipa: 'wɔːk' }
  ], category: 'verbs', examples: ['Walk to school.', 'We walk in the park.'] },
  { id: 'word_win', word: 'win', meaning: 'be victorious', pronunciationVariants: [
    { accent: 'american', ipa: 'wɪn' },
    { accent: 'british', ipa: 'wɪn' },
    { accent: 'australian', ipa: 'wɪn' }
  ], category: 'verbs', examples: ['Win the game.', 'She won first prize.'] },
  { id: 'word_teach', word: 'teach', meaning: 'instruct', pronunciationVariants: [
    { accent: 'american', ipa: 'tiːtʃ' },
    { accent: 'british', ipa: 'tiːtʃ' },
    { accent: 'australian', ipa: 'tiːtʃ' }
  ], category: 'verbs', examples: ['Teach me piano.', 'He teaches math.'] },
  { id: 'word_offer', word: 'offer', meaning: 'propose', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈɔːfər' },
    { accent: 'british', ipa: 'ˈɒfə' },
    { accent: 'australian', ipa: 'ˈɒfə' }
  ], category: 'verbs', examples: ['Offer help.', 'They offered me a job.'] },
  { id: 'word_remember', word: 'remember', meaning: 'recall', pronunciationVariants: [
    { accent: 'american', ipa: 'rɪˈmɛmbər' },
    { accent: 'british', ipa: 'rɪˈmɛmbə' },
    { accent: 'australian', ipa: 'rɪˈmɛmbə' }
  ], category: 'verbs', examples: ['Remember the password.', 'I remember that day.'] },
  { id: 'word_love', word: 'love', meaning: 'care deeply', pronunciationVariants: [
    { accent: 'american', ipa: 'lʌv' },
    { accent: 'british', ipa: 'lʌv' },
    { accent: 'australian', ipa: 'lʌv' }
  ], category: 'verbs', examples: ['I love you.', 'She loves chocolate.'] },
  { id: 'word_consider', word: 'consider', meaning: 'think about', pronunciationVariants: [
    { accent: 'american', ipa: 'kənˈsɪdər' },
    { accent: 'british', ipa: 'kənˈsɪdə' },
    { accent: 'australian', ipa: 'kənˈsɪdə' }
  ], category: 'verbs', examples: ['Consider the options.', 'He considered quitting.'] },
  { id: 'word_appear', word: 'appear', meaning: 'become visible', pronunciationVariants: [
    { accent: 'american', ipa: 'əˈpɪr' },
    { accent: 'british', ipa: 'əˈpɪə' },
    { accent: 'australian', ipa: 'əˈpɪə' }
  ], category: 'verbs', examples: ['Appear on stage.', 'She appeared suddenly.'] },
  { id: 'word_buy', word: 'buy', meaning: 'purchase', pronunciationVariants: [
    { accent: 'american', ipa: 'baɪ' },
    { accent: 'british', ipa: 'baɪ' },
    { accent: 'australian', ipa: 'baɪ' }
  ], category: 'verbs', examples: ['Buy groceries.', 'He bought a new car.'] },
  { id: 'word_wait', word: 'wait', meaning: 'stay until', pronunciationVariants: [
    { accent: 'american', ipa: 'weɪt' },
    { accent: 'british', ipa: 'weɪt' },
    { accent: 'australian', ipa: 'weɪt' }
  ], category: 'verbs', examples: ['Wait here.', 'I waited for hours.'] },
  { id: 'word_serve', word: 'serve', meaning: 'provide service', pronunciationVariants: [
    { accent: 'american', ipa: 'sɜːrv' },
    { accent: 'british', ipa: 'sɜːv' },
    { accent: 'australian', ipa: 'sɜːv' }
  ], category: 'verbs', examples: ['Serve the food.', 'She serves customers.'] },
  { id: 'word_die', word: 'die', meaning: 'stop living', pronunciationVariants: [
    { accent: 'american', ipa: 'daɪ' },
    { accent: 'british', ipa: 'daɪ' },
    { accent: 'australian', ipa: 'daɪ' }
  ], category: 'verbs', examples: ['Plants die without water.', 'He died last year.'] },
  { id: 'word_send', word: 'send', meaning: 'dispatch', pronunciationVariants: [
    { accent: 'american', ipa: 'sɛnd' },
    { accent: 'british', ipa: 'sɛnd' },
    { accent: 'australian', ipa: 'sɛnd' }
  ], category: 'verbs', examples: ['Send a letter.', 'She sent an email.'] },
  { id: 'word_expect', word: 'expect', meaning: 'anticipate', pronunciationVariants: [
    { accent: 'american', ipa: 'ɪkˈspɛkt' },
    { accent: 'british', ipa: 'ɪkˈspɛkt' },
    { accent: 'australian', ipa: 'ɪkˈspɛkt' }
  ], category: 'verbs', examples: ['Expect the best.', 'I expect rain tomorrow.'] },
  { id: 'word_build', word: 'build', meaning: 'construct', pronunciationVariants: [
    { accent: 'american', ipa: 'bɪld' },
    { accent: 'british', ipa: 'bɪld' },
    { accent: 'australian', ipa: 'bɪld' }
  ], category: 'verbs', examples: ['Build a house.', 'They build bridges.'] },
  { id: 'word_stay', word: 'stay', meaning: 'remain', pronunciationVariants: [
    { accent: 'american', ipa: 'steɪ' },
    { accent: 'british', ipa: 'steɪ' },
    { accent: 'australian', ipa: 'steɪ' }
  ], category: 'verbs', examples: ['Stay here.', 'They stayed overnight.'] },
  { id: 'word_fall', word: 'fall', meaning: 'drop down', pronunciationVariants: [
    { accent: 'american', ipa: 'fɔːl' },
    { accent: 'british', ipa: 'fɔːl' },
    { accent: 'australian', ipa: 'fɔːl' }
  ], category: 'verbs', examples: ['Don\'t fall!', 'Leaves fall in autumn.'] },
  { id: 'word_cut', word: 'cut', meaning: 'divide with blade', pronunciationVariants: [
    { accent: 'american', ipa: 'kʌt' },
    { accent: 'british', ipa: 'kʌt' },
    { accent: 'australian', ipa: 'kʌt' }
  ], category: 'verbs', examples: ['Cut the paper.', 'He cut his finger.'] },
  { id: 'word_reach', word: 'reach', meaning: 'arrive at', pronunciationVariants: [
    { accent: 'american', ipa: 'riːtʃ' },
    { accent: 'british', ipa: 'riːtʃ' },
    { accent: 'australian', ipa: 'riːtʃ' }
  ], category: 'verbs', examples: ['Reach the top.', 'I can\'t reach it.'] },
  { id: 'word_kill', word: 'kill', meaning: 'cause death', pronunciationVariants: [
    { accent: 'american', ipa: 'kɪl' },
    { accent: 'british', ipa: 'kɪl' },
    { accent: 'australian', ipa: 'kɪl' }
  ], category: 'verbs', examples: ['Kill the weeds.', 'Time kills all pain.'] },
  { id: 'word_remain', word: 'remain', meaning: 'stay', pronunciationVariants: [
    { accent: 'american', ipa: 'rɪˈmeɪn' },
    { accent: 'british', ipa: 'rɪˈmeɪn' },
    { accent: 'australian', ipa: 'rɪˈmeɪn' }
  ], category: 'verbs', examples: ['Remain calm.', 'Only ten remain.'] },
  { id: 'word_suggest', word: 'suggest', meaning: 'propose', pronunciationVariants: [
    { accent: 'american', ipa: 'səɡˈdʒɛst' },
    { accent: 'british', ipa: 'səˈdʒɛst' },
    { accent: 'australian', ipa: 'səˈdʒɛst' }
  ], category: 'verbs', examples: ['Suggest a solution.', 'He suggested a restaurant.'] },
  { id: 'word_raise', word: 'raise', meaning: 'lift up', pronunciationVariants: [
    { accent: 'american', ipa: 'reɪz' },
    { accent: 'british', ipa: 'reɪz' },
    { accent: 'australian', ipa: 'reɪz' }
  ], category: 'verbs', examples: ['Raise your hand.', 'They raised prices.'] },
  { id: 'word_pass', word: 'pass', meaning: 'go by', pronunciationVariants: [
    { accent: 'american', ipa: 'pæs' },
    { accent: 'british', ipa: 'pɑːs' },
    { accent: 'australian', ipa: 'pɑːs' }
  ], category: 'verbs', examples: ['Pass the salt.', 'Years pass quickly.'] },
  { id: 'word_sell', word: 'sell', meaning: 'exchange for money', pronunciationVariants: [
    { accent: 'american', ipa: 'sɛl' },
    { accent: 'british', ipa: 'sɛl' },
    { accent: 'australian', ipa: 'sɛl' }
  ], category: 'verbs', examples: ['Sell your car.', 'They sell flowers.'] },
  { id: 'word_require', word: 'require', meaning: 'need', pronunciationVariants: [
    { accent: 'american', ipa: 'rɪˈkwaɪər' },
    { accent: 'british', ipa: 'rɪˈkwaɪə' },
    { accent: 'australian', ipa: 'rɪˈkwaɪə' }
  ], category: 'verbs', examples: ['This requires patience.', 'The job requires experience.'] },
  { id: 'word_report', word: 'report', meaning: 'tell about', pronunciationVariants: [
    { accent: 'american', ipa: 'rɪˈpɔːrt' },
    { accent: 'british', ipa: 'rɪˈpɔːt' },
    { accent: 'australian', ipa: 'rɪˈpɔːt' }
  ], category: 'verbs', examples: ['Report the crime.', 'She reported the news.'] },
  { id: 'word_decide', word: 'decide', meaning: 'choose', pronunciationVariants: [
    { accent: 'american', ipa: 'dɪˈsaɪd' },
    { accent: 'british', ipa: 'dɪˈsaɪd' },
    { accent: 'australian', ipa: 'dɪˈsaɪd' }
  ], category: 'verbs', examples: ['Decide now.', 'They decided to marry.'] },
  { id: 'word_pull', word: 'pull', meaning: 'draw toward', pronunciationVariants: [
    { accent: 'american', ipa: 'pʊl' },
    { accent: 'british', ipa: 'pʊl' },
    { accent: 'australian', ipa: 'pʊl' }
  ], category: 'verbs', examples: ['Pull the rope.', 'She pulled the door open.'] },

  // Daily-use Nouns
  { id: 'word_time', word: 'time', meaning: 'duration/moment', pronunciationVariants: [
    { accent: 'american', ipa: 'taɪm' },
    { accent: 'british', ipa: 'taɪm' },
    { accent: 'australian', ipa: 'taɪm' }
  ], category: 'daily-use-nouns', examples: ['Time flies.', 'What time is it?'] },
  { id: 'word_person', word: 'person', meaning: 'human being', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈpɜːrsn' },
    { accent: 'british', ipa: 'ˈpɜːsn' },
    { accent: 'australian', ipa: 'ˈpɜːsn' }
  ], category: 'daily-use-nouns', examples: ['One person can make a difference.', 'She is a kind person.'] },
  { id: 'word_year', word: 'year', meaning: '12 months', pronunciationVariants: [
    { accent: 'american', ipa: 'jɪr' },
    { accent: 'british', ipa: 'jɪə' },
    { accent: 'australian', ipa: 'jɪə' }
  ], category: 'daily-use-nouns', examples: ['This year is special.', 'New Year celebrations.'] },
  { id: 'word_way', word: 'way', meaning: 'method/path', pronunciationVariants: [
    { accent: 'american', ipa: 'weɪ' },
    { accent: 'british', ipa: 'weɪ' },
    { accent: 'australian', ipa: 'weɪ' }
  ], category: 'daily-use-nouns', examples: ['Find your way.', 'This way works better.'] },
  { id: 'word_day', word: 'day', meaning: '24 hours', pronunciationVariants: [
    { accent: 'american', ipa: 'deɪ' },
    { accent: 'british', ipa: 'deɪ' },
    { accent: 'australian', ipa: 'deɪ' }
  ], category: 'daily-use-nouns', examples: ['Have a good day.', 'Day and night.'] },
  { id: 'word_thing', word: 'thing', meaning: 'object/matter', pronunciationVariants: [
    { accent: 'american', ipa: 'θɪŋ' },
    { accent: 'british', ipa: 'θɪŋ' },
    { accent: 'australian', ipa: 'θɪŋ' }
  ], category: 'daily-use-nouns', examples: ['What\'s that thing?', 'The thing is complicated.'] },
  { id: 'word_man', word: 'man', meaning: 'adult male', pronunciationVariants: [
    { accent: 'american', ipa: 'mæn' },
    { accent: 'british', ipa: 'mæn' },
    { accent: 'australian', ipa: 'mæn' }
  ], category: 'daily-use-nouns', examples: ['The man is tall.', 'Man versus nature.'] },
  { id: 'word_world', word: 'world', meaning: 'Earth', pronunciationVariants: [
    { accent: 'american', ipa: 'wɜːrld' },
    { accent: 'british', ipa: 'wɜːld' },
    { accent: 'australian', ipa: 'wɜːld' }
  ], category: 'daily-use-nouns', examples: ['The world is beautiful.', 'Travel the world.'] },
  { id: 'word_life', word: 'life', meaning: 'existence', pronunciationVariants: [
    { accent: 'american', ipa: 'laɪf' },
    { accent: 'british', ipa: 'laɪf' },
    { accent: 'australian', ipa: 'laɪf' }
  ], category: 'daily-use-nouns', examples: ['Life is precious.', 'She loves life.'] },
  { id: 'word_hand', word: 'hand', meaning: 'body part', pronunciationVariants: [
    { accent: 'american', ipa: 'hænd' },
    { accent: 'british', ipa: 'hænd' },
    { accent: 'australian', ipa: 'hænd' }
  ], category: 'daily-use-nouns', examples: ['Wash your hands.', 'Raise your hand.'] },
  { id: 'word_part', word: 'part', meaning: 'piece/portion', pronunciationVariants: [
    { accent: 'american', ipa: 'pɑːrt' },
    { accent: 'british', ipa: 'pɑːt' },
    { accent: 'australian', ipa: 'pɑːt' }
  ], category: 'daily-use-nouns', examples: ['Take your part.', 'This is part of the plan.'] },
  { id: 'word_child', word: 'child', meaning: 'young person', pronunciationVariants: [
    { accent: 'american', ipa: 'tʃaɪld' },
    { accent: 'british', ipa: 'tʃaɪld' },
    { accent: 'australian', ipa: 'tʃaɪld' }
  ], category: 'daily-use-nouns', examples: ['The child plays.', 'Every child matters.'] },
  { id: 'word_eye', word: 'eye', meaning: 'organ of sight', pronunciationVariants: [
    { accent: 'american', ipa: 'aɪ' },
    { accent: 'british', ipa: 'aɪ' },
    { accent: 'australian', ipa: 'aɪ' }
  ], category: 'daily-use-nouns', examples: ['Blue eyes.', 'Keep an eye on it.'] },
  { id: 'word_woman', word: 'woman', meaning: 'adult female', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈwʊmən' },
    { accent: 'british', ipa: 'ˈwʊmən' },
    { accent: 'australian', ipa: 'ˈwʊmən' }
  ], category: 'daily-use-nouns', examples: ['The woman smiled.', 'A strong woman.'] },
  { id: 'word_place', word: 'place', meaning: 'location', pronunciationVariants: [
    { accent: 'american', ipa: 'pleɪs' },
    { accent: 'british', ipa: 'pleɪs' },
    { accent: 'australian', ipa: 'pleɪs' }
  ], category: 'daily-use-nouns', examples: ['This place is nice.', 'Find a place to sit.'] },
  { id: 'word_work', word: 'work', meaning: 'job/labor', pronunciationVariants: [
    { accent: 'american', ipa: 'wɜːrk' },
    { accent: 'british', ipa: 'wɜːk' },
    { accent: 'australian', ipa: 'wɜːk' }
  ], category: 'daily-use-nouns', examples: ['Hard work pays.', 'She goes to work.'] },
  { id: 'word_week', word: 'week', meaning: '7 days', pronunciationVariants: [
    { accent: 'american', ipa: 'wiːk' },
    { accent: 'british', ipa: 'wiːk' },
    { accent: 'australian', ipa: 'wiːk' }
  ], category: 'daily-use-nouns', examples: ['Next week is busy.', 'A week of vacation.'] },
  { id: 'word_case', word: 'case', meaning: 'instance/container', pronunciationVariants: [
    { accent: 'american', ipa: 'keɪs' },
    { accent: 'british', ipa: 'keɪs' },
    { accent: 'australian', ipa: 'keɪs' }
  ], category: 'daily-use-nouns', examples: ['In any case.', 'A case of books.'] },
  { id: 'word_point', word: 'point', meaning: 'idea/location', pronunciationVariants: [
    { accent: 'american', ipa: 'pɔɪnt' },
    { accent: 'british', ipa: 'pɔɪnt' },
    { accent: 'australian', ipa: 'pɔɪnt' }
  ], category: 'daily-use-nouns', examples: ['What\'s your point?', 'The meeting point.'] },
  { id: 'word_government', word: 'government', meaning: 'ruling body', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈɡʌvərnmənt' },
    { accent: 'british', ipa: 'ˈɡʌvənmənt' },
    { accent: 'australian', ipa: 'ˈɡʌvənmənt' }
  ], category: 'daily-use-nouns', examples: ['The government helps.', 'Government policies.'] },
  { id: 'word_company', word: 'company', meaning: 'business', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈkʌmpəni' },
    { accent: 'british', ipa: 'ˈkʌmpəni' },
    { accent: 'australian', ipa: 'ˈkʌmpəni' }
  ], category: 'daily-use-nouns', examples: ['The company grows.', 'Work for a good company.'] },
  { id: 'word_number', word: 'number', meaning: 'mathematical value', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈnʌmbər' },
    { accent: 'british', ipa: 'ˈnʌmbə' },
    { accent: 'australian', ipa: 'ˈnʌmbə' }
  ], category: 'daily-use-nouns', examples: ['What\'s your number?', 'A large number of people.'] },
  { id: 'word_group', word: 'group', meaning: 'collection', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡruːp' },
    { accent: 'british', ipa: 'ɡruːp' },
    { accent: 'australian', ipa: 'ɡruːp' }
  ], category: 'daily-use-nouns', examples: ['A group of friends.', 'Work in groups.'] },
  { id: 'word_problem', word: 'problem', meaning: 'difficulty', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈprɑːbləm' },
    { accent: 'british', ipa: 'ˈprɒbləm' },
    { accent: 'australian', ipa: 'ˈprɒbləm' }
  ], category: 'daily-use-nouns', examples: ['Solve the problem.', 'No problem.'] },
  { id: 'word_fact', word: 'fact', meaning: 'reality', pronunciationVariants: [
    { accent: 'american', ipa: 'fækt' },
    { accent: 'british', ipa: 'fækt' },
    { accent: 'australian', ipa: 'fækt' }
  ], category: 'daily-use-nouns', examples: ['It\'s a fact.', 'The facts are clear.'] },
  { id: 'word_water', word: 'water', meaning: 'liquid we drink', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈwɔːtər' },
    { accent: 'british', ipa: 'ˈwɔːtə' },
    { accent: 'australian', ipa: 'ˈwɔːtə' }
  ], category: 'daily-use-nouns', examples: ['Drink water.', 'The water is cold.'] },
  { id: 'word_money', word: 'money', meaning: 'currency', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈmʌni' },
    { accent: 'british', ipa: 'ˈmʌni' },
    { accent: 'australian', ipa: 'ˈmʌni' }
  ], category: 'daily-use-nouns', examples: ['Save money.', 'Time is money.'] },
  { id: 'word_story', word: 'story', meaning: 'narrative', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈstɔːri' },
    { accent: 'british', ipa: 'ˈstɔːri' },
    { accent: 'australian', ipa: 'ˈstɔːri' }
  ], category: 'daily-use-nouns', examples: ['Tell me a story.', 'The story is interesting.'] },
  { id: 'word_area', word: 'area', meaning: 'region', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈeriə' },
    { accent: 'british', ipa: 'ˈeəriə' },
    { accent: 'australian', ipa: 'ˈeəriə' }
  ], category: 'daily-use-nouns', examples: ['This area is safe.', 'The parking area.'] },
  { id: 'word_book', word: 'book', meaning: 'written work', pronunciationVariants: [
    { accent: 'american', ipa: 'bʊk' },
    { accent: 'british', ipa: 'bʊk' },
    { accent: 'australian', ipa: 'bʊk' }
  ], category: 'daily-use-nouns', examples: ['Read a book.', 'The book is on the table.'] },
  { id: 'word_family', word: 'family', meaning: 'relatives', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈfæməli' },
    { accent: 'british', ipa: 'ˈfæməli' },
    { accent: 'australian', ipa: 'ˈfæməli' }
  ], category: 'daily-use-nouns', examples: ['My family is large.', 'Family comes first.'] },
  { id: 'word_student', word: 'student', meaning: 'learner', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈstuːdənt' },
    { accent: 'british', ipa: 'ˈstjuːdənt' },
    { accent: 'australian', ipa: 'ˈstjuːdənt' }
  ], category: 'daily-use-nouns', examples: ['The student studies.', 'A good student.'] },
  { id: 'word_country', word: 'country', meaning: 'nation', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈkʌntri' },
    { accent: 'british', ipa: 'ˈkʌntri' },
    { accent: 'australian', ipa: 'ˈkʌntri' }
  ], category: 'daily-use-nouns', examples: ['Visit another country.', 'My country is beautiful.'] },
  { id: 'word_school', word: 'school', meaning: 'educational place', pronunciationVariants: [
    { accent: 'american', ipa: 'skuːl' },
    { accent: 'british', ipa: 'skuːl' },
    { accent: 'australian', ipa: 'skuːl' }
  ], category: 'daily-use-nouns', examples: ['Go to school.', 'The school is big.'] },
  { id: 'word_state', word: 'state', meaning: 'condition/region', pronunciationVariants: [
    { accent: 'american', ipa: 'steɪt' },
    { accent: 'british', ipa: 'steɪt' },
    { accent: 'australian', ipa: 'steɪt' }
  ], category: 'daily-use-nouns', examples: ['The state of affairs.', 'California state.'] },
  { id: 'word_food', word: 'food', meaning: 'things we eat', pronunciationVariants: [
    { accent: 'american', ipa: 'fuːd' },
    { accent: 'british', ipa: 'fuːd' },
    { accent: 'australian', ipa: 'fuːd' }
  ], category: 'daily-use-nouns', examples: ['The food is delicious.', 'Healthy food.'] },
  { id: 'word_house', word: 'house', meaning: 'building to live', pronunciationVariants: [
    { accent: 'american', ipa: 'haʊs' },
    { accent: 'british', ipa: 'haʊs' },
    { accent: 'australian', ipa: 'haʊs' }
  ], category: 'daily-use-nouns', examples: ['Our house is cozy.', 'Buy a house.'] },
  { id: 'word_home', word: 'home', meaning: 'living place', pronunciationVariants: [
    { accent: 'american', ipa: 'hoʊm' },
    { accent: 'british', ipa: 'həʊm' },
    { accent: 'australian', ipa: 'həʊm' }
  ], category: 'daily-use-nouns', examples: ['Home sweet home.', 'Go home.'] },
  { id: 'word_mother', word: 'mother', meaning: 'female parent', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈmʌðər' },
    { accent: 'british', ipa: 'ˈmʌðə' },
    { accent: 'australian', ipa: 'ˈmʌðə' }
  ], category: 'daily-use-nouns', examples: ['My mother is kind.', 'Mother and child.'] },
  { id: 'word_father', word: 'father', meaning: 'male parent', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈfɑːðər' },
    { accent: 'british', ipa: 'ˈfɑːðə' },
    { accent: 'australian', ipa: 'ˈfɑːðə' }
  ], category: 'daily-use-nouns', examples: ['His father works hard.', 'Father and son.'] },
  { id: 'word_language', word: 'language', meaning: 'system of communication', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈlæŋɡwɪdʒ' },
    { accent: 'british', ipa: 'ˈlæŋɡwɪdʒ' },
    { accent: 'australian', ipa: 'ˈlæŋɡwɪdʒ' }
  ], category: 'daily-use-nouns', examples: ['Learn a new language.', 'Language barriers.'] },
  { id: 'word_music', word: 'music', meaning: 'organized sound', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈmjuːzɪk' },
    { accent: 'british', ipa: 'ˈmjuːzɪk' },
    { accent: 'australian', ipa: 'ˈmjuːzɪk' }
  ], category: 'daily-use-nouns', examples: ['Listen to music.', 'She loves music.'] },
  { id: 'word_car', word: 'car', meaning: 'vehicle', pronunciationVariants: [
    { accent: 'american', ipa: 'kɑːr' },
    { accent: 'british', ipa: 'kɑː' },
    { accent: 'australian', ipa: 'kɑː' }
  ], category: 'daily-use-nouns', examples: ['Drive the car.', 'Buy a new car.'] },
  { id: 'word_city', word: 'city', meaning: 'large town', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈsɪti' },
    { accent: 'british', ipa: 'ˈsɪti' },
    { accent: 'australian', ipa: 'ˈsɪti' }
  ], category: 'daily-use-nouns', examples: ['The city never sleeps.', 'Live in the city.'] },
  { id: 'word_community', word: 'community', meaning: 'group of people', pronunciationVariants: [
    { accent: 'american', ipa: 'kəˈmjuːnəti' },
    { accent: 'british', ipa: 'kəˈmjuːnəti' },
    { accent: 'australian', ipa: 'kəˈmjuːnəti' }
  ], category: 'daily-use-nouns', examples: ['Help the community.', 'A strong community.'] },
  { id: 'word_power', word: 'power', meaning: 'strength/control', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈpaʊər' },
    { accent: 'british', ipa: 'ˈpaʊə' },
    { accent: 'australian', ipa: 'ˈpaʊə' }
  ], category: 'daily-use-nouns', examples: ['Knowledge is power.', 'The power of nature.'] },
  { id: 'word_name', word: 'name', meaning: 'word identifying someone', pronunciationVariants: [
    { accent: 'american', ipa: 'neɪm' },
    { accent: 'british', ipa: 'neɪm' },
    { accent: 'australian', ipa: 'neɪm' }
  ], category: 'daily-use-nouns', examples: ['What\'s your name?', 'A famous name.'] },
  { id: 'word_team', word: 'team', meaning: 'group working together', pronunciationVariants: [
    { accent: 'american', ipa: 'tiːm' },
    { accent: 'british', ipa: 'tiːm' },
    { accent: 'australian', ipa: 'tiːm' }
  ], category: 'daily-use-nouns', examples: ['Our team won.', 'Team spirit.'] },
  { id: 'word_minute', word: 'minute', meaning: '60 seconds', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈmɪnɪt' },
    { accent: 'british', ipa: 'ˈmɪnɪt' },
    { accent: 'australian', ipa: 'ˈmɪnɪt' }
  ], category: 'daily-use-nouns', examples: ['Wait a minute.', 'Sixty minutes in an hour.'] },
  { id: 'word_idea', word: 'idea', meaning: 'thought/concept', pronunciationVariants: [
    { accent: 'american', ipa: 'aɪˈdiːə' },
    { accent: 'british', ipa: 'aɪˈdɪə' },
    { accent: 'australian', ipa: 'aɪˈdɪə' }
  ], category: 'daily-use-nouns', examples: ['Great idea!', 'The idea changed everything.'] },
  { id: 'word_kid', word: 'kid', meaning: 'child', pronunciationVariants: [
    { accent: 'american', ipa: 'kɪd' },
    { accent: 'british', ipa: 'kɪd' },
    { accent: 'australian', ipa: 'kɪd' }
  ], category: 'daily-use-nouns', examples: ['The kid plays outside.', 'Kids love candy.'] },
  { id: 'word_parent', word: 'parent', meaning: 'mother or father', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈperənt' },
    { accent: 'british', ipa: 'ˈpeərənt' },
    { accent: 'australian', ipa: 'ˈpeərənt' }
  ], category: 'daily-use-nouns', examples: ['Be a good parent.', 'Parents care.'] },
  { id: 'word_face', word: 'face', meaning: 'front of head', pronunciationVariants: [
    { accent: 'american', ipa: 'feɪs' },
    { accent: 'british', ipa: 'feɪs' },
    { accent: 'australian', ipa: 'feɪs' }
  ], category: 'daily-use-nouns', examples: ['Wash your face.', 'A happy face.'] },
  { id: 'word_door', word: 'door', meaning: 'entrance', pronunciationVariants: [
    { accent: 'american', ipa: 'dɔːr' },
    { accent: 'british', ipa: 'dɔː' },
    { accent: 'australian', ipa: 'dɔː' }
  ], category: 'daily-use-nouns', examples: ['Open the door.', 'Behind closed doors.'] },
  { id: 'word_health', word: 'health', meaning: 'well-being', pronunciationVariants: [
    { accent: 'american', ipa: 'helθ' },
    { accent: 'british', ipa: 'helθ' },
    { accent: 'australian', ipa: 'helθ' }
  ], category: 'daily-use-nouns', examples: ['Health is wealth.', 'Mental health matters.'] },
  { id: 'word_history', word: 'history', meaning: 'past events', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈhɪstəri' },
    { accent: 'british', ipa: 'ˈhɪstəri' },
    { accent: 'australian', ipa: 'ˈhɪstəri' }
  ], category: 'daily-use-nouns', examples: ['Study history.', 'History repeats itself.'] },
  { id: 'word_party', word: 'party', meaning: 'social gathering', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈpɑːrti' },
    { accent: 'british', ipa: 'ˈpɑːti' },
    { accent: 'australian', ipa: 'ˈpɑːti' }
  ], category: 'daily-use-nouns', examples: ['Come to the party.', 'Birthday party.'] },
  { id: 'word_result', word: 'result', meaning: 'outcome', pronunciationVariants: [
    { accent: 'american', ipa: 'rɪˈzʌlt' },
    { accent: 'british', ipa: 'rɪˈzʌlt' },
    { accent: 'australian', ipa: 'rɪˈzʌlt' }
  ], category: 'daily-use-nouns', examples: ['The result was good.', 'Wait for the results.'] },
  { id: 'word_morning', word: 'morning', meaning: 'start of day', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈmɔːrnɪŋ' },
    { accent: 'british', ipa: 'ˈmɔːnɪŋ' },
    { accent: 'australian', ipa: 'ˈmɔːnɪŋ' }
  ], category: 'daily-use-nouns', examples: ['Good morning.', 'Morning coffee.'] },
  { id: 'word_reason', word: 'reason', meaning: 'cause/logic', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈriːzn' },
    { accent: 'british', ipa: 'ˈriːzn' },
    { accent: 'australian', ipa: 'ˈriːzn' }
  ], category: 'daily-use-nouns', examples: ['What\'s the reason?', 'For a good reason.'] },
  { id: 'word_research', word: 'research', meaning: 'investigation', pronunciationVariants: [
    { accent: 'american', ipa: 'rɪˈsɜːrtʃ' },
    { accent: 'british', ipa: 'rɪˈsɜːtʃ' },
    { accent: 'australian', ipa: 'rɪˈsɜːtʃ' }
  ], category: 'daily-use-nouns', examples: ['Do research.', 'Scientific research.'] },
  { id: 'word_girl', word: 'girl', meaning: 'female child', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡɜːrl' },
    { accent: 'british', ipa: 'ɡɜːl' },
    { accent: 'australian', ipa: 'ɡɜːl' }
  ], category: 'daily-use-nouns', examples: ['The girl sings.', 'A smart girl.'] },
  { id: 'word_guy', word: 'guy', meaning: 'man/person', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡaɪ' },
    { accent: 'british', ipa: 'ɡaɪ' },
    { accent: 'australian', ipa: 'ɡaɪ' }
  ], category: 'daily-use-nouns', examples: ['That guy is funny.', 'Hey guys!'] },
  { id: 'word_job', word: 'job', meaning: 'work/occupation', pronunciationVariants: [
    { accent: 'american', ipa: 'dʒɑːb' },
    { accent: 'british', ipa: 'dʒɒb' },
    { accent: 'australian', ipa: 'dʒɒb' }
  ], category: 'daily-use-nouns', examples: ['Find a job.', 'She loves her job.'] },
  { id: 'word_phone', word: 'phone', meaning: 'telephone', pronunciationVariants: [
    { accent: 'american', ipa: 'foʊn' },
    { accent: 'british', ipa: 'fəʊn' },
    { accent: 'australian', ipa: 'fəʊn' }
  ], category: 'daily-use-nouns', examples: ['Answer the phone.', 'My phone is broken.'] },
  { id: 'word_friend', word: 'friend', meaning: 'close companion', pronunciationVariants: [
    { accent: 'american', ipa: 'frɛnd' },
    { accent: 'british', ipa: 'frɛnd' },
    { accent: 'australian', ipa: 'frɛnd' }
  ], category: 'daily-use-nouns', examples: ['A true friend.', 'Friends help each other.'] },
  { id: 'word_room', word: 'room', meaning: 'space', pronunciationVariants: [
    { accent: 'american', ipa: 'ruːm' },
    { accent: 'british', ipa: 'ruːm' },
    { accent: 'australian', ipa: 'ruːm' }
  ], category: 'daily-use-nouns', examples: ['Clean your room.', 'A big room.'] },
  { id: 'word_teacher', word: 'teacher', meaning: 'educator', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈtiːtʃər' },
    { accent: 'british', ipa: 'ˈtiːtʃə' },
    { accent: 'australian', ipa: 'ˈtiːtʃə' }
  ], category: 'daily-use-nouns', examples: ['The teacher is kind.', 'Thank you, teacher.'] },
  { id: 'word_office', word: 'office', meaning: 'workplace', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈɔːfɪs' },
    { accent: 'british', ipa: 'ˈɒfɪs' },
    { accent: 'australian', ipa: 'ˈɒfɪs' }
  ], category: 'daily-use-nouns', examples: ['Go to the office.', 'Office hours.'] },
  { id: 'word_hour', word: 'hour', meaning: '60 minutes', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈaʊər' },
    { accent: 'british', ipa: 'ˈaʊə' },
    { accent: 'australian', ipa: 'ˈaʊə' }
  ], category: 'daily-use-nouns', examples: ['One hour left.', 'Happy hour.'] },
  { id: 'word_game', word: 'game', meaning: 'structured play', pronunciationVariants: [
    { accent: 'american', ipa: 'ɡeɪm' },
    { accent: 'british', ipa: 'ɡeɪm' },
    { accent: 'australian', ipa: 'ɡeɪm' }
  ], category: 'daily-use-nouns', examples: ['Play a game.', 'The game is fun.'] },
  { id: 'word_line', word: 'line', meaning: 'straight mark', pronunciationVariants: [
    { accent: 'american', ipa: 'laɪn' },
    { accent: 'british', ipa: 'laɪn' },
    { accent: 'australian', ipa: 'laɪn' }
  ], category: 'daily-use-nouns', examples: ['Draw a line.', 'Wait in line.'] },
  { id: 'word_end', word: 'end', meaning: 'final part', pronunciationVariants: [
    { accent: 'american', ipa: 'ɛnd' },
    { accent: 'british', ipa: 'ɛnd' },
    { accent: 'australian', ipa: 'ɛnd' }
  ], category: 'daily-use-nouns', examples: ['The end of the story.', 'Light at the end.'] },
  { id: 'word_member', word: 'member', meaning: 'part of group', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈmɛmbər' },
    { accent: 'british', ipa: 'ˈmɛmbə' },
    { accent: 'australian', ipa: 'ˈmɛmbə' }
  ], category: 'daily-use-nouns', examples: ['Club member.', 'Family member.'] },
  { id: 'word_law', word: 'law', meaning: 'rule', pronunciationVariants: [
    { accent: 'american', ipa: 'lɔː' },
    { accent: 'british', ipa: 'lɔː' },
    { accent: 'australian', ipa: 'lɔː' }
  ], category: 'daily-use-nouns', examples: ['Obey the law.', 'Law and order.'] },
  { id: 'word_president', word: 'president', meaning: 'leader of country', pronunciationVariants: [
    { accent: 'american', ipa: 'ˈprɛzɪdənt' },
    { accent: 'british', ipa: 'ˈprɛzɪdənt' },
    { accent: 'australian', ipa: 'ˈprɛzɪdənt' }
  ], category: 'daily-use-nouns', examples: ['The president spoke.', 'President of the company.'] },
];
