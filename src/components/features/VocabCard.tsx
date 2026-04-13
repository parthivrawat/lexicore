import Link from 'next/link';
import { VocabWord } from '@/types';
import { formatCategory } from '@/utils/format';
import { useLanguage } from '@/contexts/LanguageContext';
import { PronunciationPlayer } from '@/components/ui';

interface VocabCardProps {
  word: VocabWord;
}

export function VocabCard({ word }: VocabCardProps) {
  const { uiLanguage } = useLanguage();

  return (
    <Link
      href={`/vocabulary/${encodeURIComponent(word.id)}`}
      className="group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft card-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-success-500 to-success-600 text-white shadow-soft group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg font-bold">{word.word.charAt(0).toUpperCase()}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-success-600 dark:group-hover:text-success-400 transition-colors">
                {word.word}
              </h3>
              {(word.pronunciationVariants?.length || word.pronunciationIpa) && (
                <div className="mt-1">
                  <PronunciationPlayer
                    variants={word.pronunciationVariants || (word.pronunciationIpa ? [{ accent: 'american', ipa: word.pronunciationIpa }] : [])}
                    className="text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{word.meaning}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center rounded-full bg-success-100 dark:bg-success-900/30 px-3 py-1 text-xs font-semibold text-success-800 dark:text-success-200">
                {formatCategory(word.category, uiLanguage)}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{word.examples.length} examples</span>
            </div>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="h-5 w-5 text-success-600 dark:text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
