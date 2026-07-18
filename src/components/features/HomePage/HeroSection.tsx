import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { LEARNING_LANGUAGES } from '@/constants/languages';
import type { LearningLanguage } from '@/types/settings';

export function HeroSection() {
  const { t, learningLanguage, setLearningLanguage } = useLanguage();

  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-sm font-semibold text-primary-800 dark:text-primary-200 shadow-soft">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
        </span>
        Discover the power of language
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
        <span className="block">{t('app.title')}</span>
        <span className="block text-transparent bg-clip-text gradient-primary bg-gradient-to-r from-primary-600 to-accent-600">
          Master Language Roots
        </span>
      </h1>

      <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl">
        {t('app.description')}
      </p>

      <div className="mx-auto w-full max-w-xs animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <label
          htmlFor="home-learning-language"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left"
        >
          {t('learning.language')}
        </label>
        <div className="relative">
          <select
            id="home-learning-language"
            value={learningLanguage}
            onChange={e => setLearningLanguage(e.target.value as LearningLanguage)}
            className="appearance-none w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 pr-8 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-soft transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-medium focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer text-left"
          >
            {LEARNING_LANGUAGES.map(lang => (
              <option key={lang.id} value={lang.id}>
                {lang.flag} {t(`languages.${lang.id}`)}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="h-3 w-3 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <Link to={ROUTES.roots}>
          <Button size="lg" className="button-glow">
            Start Exploring
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </Link>
        <Link to={ROUTES.vocabulary}>
          <Button variant="outline" size="lg">
            Browse Vocabulary
          </Button>
        </Link>
      </div>
    </div>
  );
}
