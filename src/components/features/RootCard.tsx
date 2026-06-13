import { Link } from 'react-router-dom';
import { WordRoot } from '@/types';
import { formatRootType } from '@/utils/format';
import { useLanguage } from '@/contexts/LanguageContext';
import { PronunciationPlayer } from '@/components/ui';
import { useSettings } from '@/contexts/SettingsContext';
import { AccentType } from '@/types';

interface RootCardProps {
  root: WordRoot;
}

export function RootCard({ root }: RootCardProps) {
  const { uiLanguage } = useLanguage();
  const { settings } = useSettings();

  return (
    <Link
      to={`/roots/${encodeURIComponent(root.id)}`}
      className="group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 shadow-soft card-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-soft group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-base font-bold sm:text-lg">{root.root.charAt(0).toUpperCase()}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors sm:text-xl">
                {root.root}
              </h3>
              {(root.pronunciationVariants?.length || root.pronunciationIpa) && (
                <div className="mt-1">
                  <PronunciationPlayer
                    variants={root.pronunciationVariants || (root.pronunciationIpa ? [{ accent: settings.fallbackAccent as AccentType, ipa: root.pronunciationIpa }] : [])}
                    className="text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 sm:text-base">{root.meaning}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-xs font-semibold text-primary-800 dark:text-primary-200">
                {formatRootType(root.type, uiLanguage)}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{root.languageOrigin}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{root.examples.length} examples</span>
            </div>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
