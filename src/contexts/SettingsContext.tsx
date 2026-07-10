'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { AppSettings, LearningLanguage } from '@/types/settings';
import { PAGINATION, TTS_CONFIG } from '@/constants';

interface SettingsContextType {
  settings: AppSettings;
  updateSetting: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void;
  resetSettings: () => void;
}

const defaultSettings: AppSettings = {
  itemsPerPage: PAGINATION.itemsPerPage,
  minSearchQueryLength: 1,
  ttsRate: TTS_CONFIG.rate,
  fallbackAccent: TTS_CONFIG.fallbackAccent,
  uiLanguage: 'en',
  learningLanguage: 'english',
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

const isValidLearningLanguage = (value: unknown): value is LearningLanguage =>
  ['english', 'french', 'spanish', 'latin', 'greek'].includes(value as string);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app-settings');
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as Partial<AppSettings>;
          const learningLanguage = isValidLearningLanguage(parsed.learningLanguage)
            ? parsed.learningLanguage
            : defaultSettings.learningLanguage;
          return { ...defaultSettings, ...parsed, learningLanguage };
        } catch {
          return defaultSettings;
        }
      }
    }
    return defaultSettings;
  });

  const updateSetting = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      if (typeof window !== 'undefined') {
        localStorage.setItem('app-settings', JSON.stringify(newSettings));
      }
      return newSettings;
    });
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('app-settings');
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
