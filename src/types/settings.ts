export interface AppSettings {
  // Essential Pagination Settings
  itemsPerPage: number;
  
  // Essential Search Settings
  minSearchQueryLength: number;
  
  // Essential UI Settings
  ttsRate: number;
  fallbackAccent: string;
  
  // Language Settings
  uiLanguage: 'en' | 'fr';
  learningLanguage: 'english' | 'french' | 'spanish' | 'latin' | 'greek';
}

export interface SettingsSection {
  id: keyof AppSettings;
  title: string;
  description: string;
  icon: string;
  component: React.ComponentType<Record<string, unknown>>;
}
