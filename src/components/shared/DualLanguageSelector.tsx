'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { LEARNING_LANGUAGES, UI_LANGUAGES } from '@/constants/languages';
import type { LearningLanguage, UILanguage } from '@/types/settings';

export function DualLanguageSelector() {
  const { uiLanguage, setUILanguage, learningLanguage, setLearningLanguage, t } = useLanguage();

  const learningLanguages = LEARNING_LANGUAGES.map(lang => ({
    value: lang.id,
    flag: lang.flag,
    label: t(`languages.${lang.id}`),
  }));

  const uiLanguages = UI_LANGUAGES.map(lang => ({
    value: lang.id,
    flag: lang.flag,
    label: lang.label,
  }));

  return (
    <div className="flex items-center gap-3">
      {/* UI Language Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {t('ui.language')}
        </label>
        <div className="relative">
          <select
            value={uiLanguage}
            onChange={e => setUILanguage(e.target.value as UILanguage)}
            className="appearance-none rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 pr-8 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-soft transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-medium focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
          >
            {uiLanguages.map(lang => (
              <option key={lang.value} value={lang.value}>
                {lang.flag} {lang.label}
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

      {/* Learning Language Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {t('learning.language')}
        </label>
        <div className="relative">
          <select
            value={learningLanguage}
            onChange={e => setLearningLanguage(e.target.value as LearningLanguage)}
            className="appearance-none rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 pr-8 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-soft transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-medium focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
          >
            {learningLanguages.map(lang => (
              <option key={lang.value} value={lang.value}>
                {lang.flag} {lang.label}
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
    </div>
  );
}
