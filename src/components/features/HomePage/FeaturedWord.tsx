import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getWordOfTheDay } from '@/utils/wordOfTheDay';
import { VocabWord, Etymology } from '@/types';

export function FeaturedWord() {
  const { learningLanguage } = useLanguage();
  const [featuredWord, setFeaturedWord] = useState<(VocabWord & { etymology?: Etymology }) | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    getWordOfTheDay(learningLanguage).then(word => {
      if (mounted) {
        setFeaturedWord(word);
        setIsLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [learningLanguage]);

  if (isLoading || !featuredWord) return null;

  return (
    <div
      className="rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-700 p-8 shadow-soft animate-slide-up"
      style={{ animationDelay: '0.2s' }}
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-semibold text-purple-800 dark:text-purple-200">
          <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          Word of the Day
        </span>
        {featuredWord.etymology && (
          <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 text-sm font-semibold text-indigo-800 dark:text-indigo-200">
            With Etymology
          </span>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {featuredWord.word}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{featuredWord.meaning}</p>
          {featuredWord.pronunciationVariants && featuredWord.pronunciationVariants[0] && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-medium">Pronunciation:</span> /
              {featuredWord.pronunciationVariants[0].ipa}/
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {featuredWord.examples.slice(0, 2).map((example, idx) => (
              <span
                key={idx}
                className="inline-block px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
              >
                "{example}"
              </span>
            ))}
          </div>
        </div>

        {featuredWord.etymology && (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                Origin
              </h4>
              <p className="text-base font-medium text-gray-900 dark:text-white">
                {featuredWord.etymology.languageOrigin}{' '}
                {featuredWord.etymology.yearOfOrigin && `(${featuredWord.etymology.yearOfOrigin})`}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Evolution
              </h4>
              <div className="space-y-2">
                {featuredWord.etymology.timeline.slice(0, 3).map((stage, idx: number) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-purple-500" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {stage.form}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                        ({stage.language})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {featuredWord.etymology.notes && (
              <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3">
                <p className="text-sm text-amber-800 dark:text-amber-300 italic">
                  {featuredWord.etymology.notes}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-purple-200 dark:border-purple-700">
        <Link
          to={`/vocabulary/${featuredWord.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          {featuredWord.etymology ? 'View full etymology' : 'View details'}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
