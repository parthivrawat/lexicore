'use client';

import { useSettings } from '@/contexts/SettingsContext';
import { ACCENT_NAMES } from '@/constants';

export function UISettings() {
  const { settings, updateSetting } = useSettings();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        User Interface Settings
      </h3>

      {/* TTS Rate */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Text-to-Speech Rate
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={settings.ttsRate}
            onChange={(e) => updateSetting('ttsRate', Number(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-12">
            {settings.ttsRate.toFixed(1)}x
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Speed of text-to-speech pronunciation. 1.0 = normal speed.
        </p>
      </div>

      {/* Fallback Accent */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Default Pronunciation Accent
        </label>
        <select
          value={settings.fallbackAccent}
          onChange={(e) => updateSetting('fallbackAccent', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-accent-500 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
        >
          {Object.entries(ACCENT_NAMES).map(([key, value]) => (
            <option key={key} value={key}>
              {value.en} ({value.fr})
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Default accent for pronunciation when no specific accent is available.
        </p>
      </div>

      {/* Reset Button */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => {
            updateSetting('ttsRate', 0.8);
            updateSetting('fallbackAccent', 'american');
          }}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}
