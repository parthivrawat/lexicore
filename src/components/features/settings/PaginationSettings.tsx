'use client';

import { useSettings } from '@/contexts/SettingsContext';

export function PaginationSettings() {
  const { settings, updateSetting } = useSettings();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Pagination Configuration
      </h3>

      {/* Items Per Page */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Items Per Page
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={settings.itemsPerPage}
            onChange={(e) => updateSetting('itemsPerPage', Number(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-12">
            {settings.itemsPerPage}
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Number of items to display on each page. Higher values may impact performance.
        </p>
      </div>

      {/* Reset Button */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => updateSetting('itemsPerPage', 20)}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}
