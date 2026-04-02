'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function DualLanguageSelector() {
  const { uiLanguage, setUILanguage, learningLanguage, setLearningLanguage, t } = useLanguage();

  const learningLanguages = [
    { value: 'english', flag: '🇬🇧', label: t('languages.english') },
    { value: 'french', flag: '🇫🇷', label: t('languages.french') },
    { value: 'spanish', flag: '🇪🇸', label: t('languages.spanish') },
    { value: 'latin', flag: '🏛️', label: t('languages.latin') },
    { value: 'greek', flag: '🇬🇷', label: t('languages.greek') },
  ] as const;

  const uiLanguages = [
    { value: 'en', flag: '🇺🇸', label: 'English' },
    { value: 'fr', flag: '🇫🇷', label: 'Français' },
  ] as const;

  return (
    <div className="flex items-center gap-3">
      {/* UI Language Selector */}
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
            {uiLanguages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.flag} {lang.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Learning Language Selector */}
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
            {learningLanguages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.flag} {lang.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
