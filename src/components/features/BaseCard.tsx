import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { AccentType, PronunciationVariant } from '@/types';
import { getTtsAudioUrl } from '@/utils/audio';
import { PronunciationPlayer } from '@/components/ui';

interface BaseCardProps {
  title: string;
  meaning: string;
  badge: string;
  badgeColor: 'primary' | 'success';
  examplesCount: number;
  pronunciationVariants?: PronunciationVariant[];
  pronunciationIpa?: string;
  subtitle?: string;
  to: string;
}

const colorClasses = {
  primary: {
    gradient: 'from-primary-500 to-primary-600',
    badge: 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200',
    hover: 'group-hover:text-primary-600 dark:group-hover:text-primary-400',
    arrow: 'text-primary-600 dark:text-primary-400',
  },
  success: {
    gradient: 'from-success-500 to-success-600',
    badge: 'bg-success-100 dark:bg-success-900/30 text-success-800 dark:text-success-200',
    hover: 'group-hover:text-success-600 dark:group-hover:text-success-400',
    arrow: 'text-success-600 dark:text-success-400',
  },
};

export const BaseCard = memo(function BaseCard({
  title,
  meaning,
  badge,
  badgeColor,
  examplesCount,
  pronunciationVariants,
  pronunciationIpa,
  subtitle,
  to,
}: BaseCardProps) {
  const { settings } = useSettings();
  const colors = colorClasses[badgeColor];

  return (
    <Link
      to={to}
      className="group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 shadow-soft card-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div
              className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} text-white shadow-soft group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="text-base font-bold sm:text-lg">
                {title.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <h3
                className={`text-lg font-bold text-gray-900 dark:text-white ${colors.hover} transition-colors sm:text-xl`}
              >
                {title}
              </h3>
              {(pronunciationVariants?.length || pronunciationIpa) && (
                <div className="mt-1">
                  <PronunciationPlayer
                    variants={
                      pronunciationVariants ||
                      (pronunciationIpa
                        ? [
                            {
                              accent: settings.fallbackAccent as AccentType,
                              ipa: pronunciationIpa,
                              audioUrl: getTtsAudioUrl(
                                title,
                                settings.fallbackAccent as AccentType
                              ),
                            },
                          ]
                        : [])
                    }
                    word={title}
                    className="text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 sm:text-base">
            {meaning}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <span
                className={`inline-flex items-center rounded-full ${colors.badge} px-3 py-1 text-xs font-semibold`}
              >
                {badge}
              </span>
              {subtitle && (
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{subtitle}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{examplesCount} examples</span>
            </div>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className={`h-5 w-5 ${colors.arrow}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
});
