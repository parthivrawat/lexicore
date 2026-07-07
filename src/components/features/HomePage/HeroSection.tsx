import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

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
      
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <Link to={ROUTES.roots}>
          <Button size="lg" className="button-glow">
            Start Exploring
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
