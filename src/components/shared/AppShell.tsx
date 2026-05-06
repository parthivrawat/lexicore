import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { ROUTES, APP_CONFIG } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { SimpleThemeToggle } from '@/components/ui';

export function AppShell({ children }: PropsWithChildren) {
  const { t, learningLanguage, uiLanguage, setLearningLanguage, setUILanguage } = useLanguage();
  
  const navigationItems = [
    { to: ROUTES.home, label: 'Home', icon: '🏠' },
    { to: ROUTES.roots, label: 'Roots', icon: '🌱' },
    { to: ROUTES.vocabulary, label: 'Vocabulary', icon: '📚' },
    { to: ROUTES.settings, label: 'Settings', icon: '⚙️' },
  ];

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 theme-transition">
      <header className="sticky top-0 z-50 glass-morphism border-b border-gray-200 dark:border-gray-700 shadow-soft">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-soft">
                <span className="text-lg font-bold text-white">📖</span>
              </div>
              <div>
                <div className="truncate text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                  {t('app.title')}
                </div>
                <div className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {t('app.description')}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:shadow-soft"
              >
                <span className="text-base transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-3">
            <SimpleThemeToggle />
            
            {/* Mobile menu button */}
            <button className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white md:hidden">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-900/50 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            {/* Mobile Language Controls */}
            <div className="mt-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <span>🔍</span>
                  <span>Language settings available in Settings</span>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
        {children}
      </main>

      <footer className="mt-auto border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary shadow-soft">
              <span className="text-xl font-bold text-white">📖</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {t('app.description')}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Version {APP_CONFIG.version} • Built with ❤️ for language learners
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
              <span>© 2024 Word Roots Platform</span>
              <span>•</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
