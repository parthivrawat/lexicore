'use client';

import { useSettings } from '@/contexts/SettingsContext';

export function SearchSettings() {
  const { settings, updateSetting } = useSettings();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Search Configuration
      </h3>

      {/* Min Query Length */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Minimum Search Length
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={settings.minSearchQueryLength}
            onChange={(e) => updateSetting('minSearchQueryLength', Number(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-8">
            {settings.minSearchQueryLength}
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Minimum characters required before search executes.
        </p>
      </div>

      {/* Reset Button */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => updateSetting('minSearchQueryLength', 1)}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}
