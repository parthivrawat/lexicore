import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { ROUTES, APP_CONFIG } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export function AppShell({ children }: PropsWithChildren) {
  const { t, learningLanguage, uiLanguage, setLearningLanguage, setUILanguage } = useLanguage();
  
  const navigationItems = [
    { href: ROUTES.home, label: 'Home', icon: '🏠' },
    { href: ROUTES.roots, label: 'Roots', icon: '🌱' },
    { href: ROUTES.vocabulary, label: 'Vocabulary', icon: '📚' },
    { href: ROUTES.search, label: 'Search', icon: '🔍' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 glass-morphism border-b border-gray-200 shadow-soft">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-soft">
                <span className="text-lg font-bold text-white">📖</span>
              </div>
              <div>
                <div className="truncate text-xl font-bold text-gray-900 sm:text-2xl">
                  {t('app.title')}
                </div>
                <div className="truncate text-sm text-gray-500">
                  {t('app.description')}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-soft"
              >
                <span className="text-base transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Language Controls */}
          <div className="flex items-center gap-3">
            {/* Learning Language - Primary Position */}
            <div className="hidden md:block">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500">
                  {t('learning.language')}
                </label>
                <div className="relative">
                  <select
                    value={learningLanguage}
                    onChange={(e) => setLearningLanguage(e.target.value as any)}
                    className="appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-8 text-sm font-semibold text-gray-700 shadow-soft transition-all duration-200 hover:border-gray-300 hover:shadow-medium focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
                  >
                    <option value="english">🇬🇧 {t('languages.english')}</option>
                    <option value="french">🇫🇷 {t('languages.french')}</option>
                    <option value="spanish">🇪🇸 {t('languages.spanish')}</option>
                    <option value="latin">🏛️ {t('languages.latin')}</option>
                    <option value="greek">🇬🇷 {t('languages.greek')}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Interface Language - Secondary Position */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                {t('ui.language')}
              </label>
              <div className="relative">
                <select
                  value={uiLanguage}
                  onChange={(e) => setUILanguage(e.target.value as 'en' | 'fr')}
                  className="appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-8 text-sm font-semibold text-gray-700 shadow-soft transition-all duration-200 hover:border-gray-300 hover:shadow-medium focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
                >
                  <option value="en">🇺🇸 English</option>
                  <option value="fr">🇫🇷 Français</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="border-t border-gray-200/50 bg-gray-50/50 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            {/* Mobile Language Controls */}
            <div className="mt-3 space-y-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500">
                  {t('learning.language')}
                </label>
                <select
                  value={learningLanguage}
                  onChange={(e) => setLearningLanguage(e.target.value as any)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-soft focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="english">🇬🇧 {t('languages.english')}</option>
                  <option value="french">🇫🇷 {t('languages.french')}</option>
                  <option value="spanish">🇪🇸 {t('languages.spanish')}</option>
                  <option value="latin">🏛️ {t('languages.latin')}</option>
                  <option value="greek">🇬🇷 {t('languages.greek')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500">
                  {t('ui.language')}
                </label>
                <select
                  value={uiLanguage}
                  onChange={(e) => setUILanguage(e.target.value as 'en' | 'fr')}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-soft focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="en">🇺🇸 English</option>
                  <option value="fr">🇫🇷 Français</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
        {children}
      </main>

      <footer className="mt-auto border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary shadow-soft">
              <span className="text-xl font-bold text-white">📖</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                {t('app.description')}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Version {APP_CONFIG.version} • Built with ❤️ for language learners
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
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
