'use client';

import { useSettings } from '@/contexts/SettingsContext';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSettings() {
  const { settings, updateSetting } = useSettings();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Language Configuration
      </h3>

      {/* UI Language */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Interface Language
        </label>
        <select
          value={settings.uiLanguage}
          onChange={(e) => updateSetting('uiLanguage', e.target.value as 'en' | 'fr')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
        >
          <option value="en">🇺🇸 English</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Choose the language for the user interface and navigation.
        </p>
      </div>

      {/* Learning Language */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Learning Language
        </label>
        <select
          value={settings.learningLanguage}
          onChange={(e) => updateSetting('learningLanguage', e.target.value as 'english' | 'french' | 'spanish' | 'latin' | 'greek')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
        >
          <option value="english">🇬🇧 English</option>
          <option value="french">🇫🇷 French</option>
          <option value="spanish">🇪🇸 Spanish</option>
          <option value="latin">🏛️ Latin</option>
          <option value="greek">🇬🇷 Greek</option>
        </select>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Select the language you want to learn. This affects the vocabulary and roots content.
        </p>
      </div>

      {/* Reset Button */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => {
            updateSetting('uiLanguage', 'en');
            updateSetting('learningLanguage', 'english');
          }}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}
