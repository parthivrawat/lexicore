import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export function FeatureCards() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
      <div className="group card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 shadow-soft animate-slide-up">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-soft group-hover:scale-110 transition-transform duration-300 sm:h-14 sm:w-14">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{t('roots.title')}</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
          Explore word roots including prefixes, suffixes, and base forms with detailed examples and
          etymology. Search for specific roots or meanings.
        </p>
        <Link
          to={ROUTES.roots}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Explore Roots
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div
        className="group card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 shadow-soft animate-slide-up"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-success-500 to-success-600 text-white shadow-soft group-hover:scale-110 transition-transform duration-300 sm:h-14 sm:w-14">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
          {t('vocabulary.title')}
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
          Master essential words organized by categories with IPA pronunciation and contextual
          examples. Search for specific words or meanings.
        </p>
        <Link
          to={ROUTES.vocabulary}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Browse Vocabulary
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
