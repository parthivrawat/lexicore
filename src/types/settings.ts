import { LEARNING_LANGUAGES, UI_LANGUAGES } from '@/constants/languages';

export type LearningLanguage = (typeof LEARNING_LANGUAGES)[number]['id'];
export type UILanguage = (typeof UI_LANGUAGES)[number]['id'];

export interface AppSettings {
  // Essential Pagination Settings
  itemsPerPage: number;

  // Essential Search Settings
  minSearchQueryLength: number;

  // Essential UI Settings
  ttsRate: number;
  fallbackAccent: string;

  // Language Settings
  uiLanguage: UILanguage;
  learningLanguage: LearningLanguage;
}

export interface SettingsSection {
  id: keyof AppSettings;
  title: string;
  description: string;
  icon: string;
  component: React.ComponentType<Record<string, unknown>>;
}
