export interface AppSettings {
  // Essential Pagination Settings
  itemsPerPage: number;
  
  // Essential Search Settings
  minSearchQueryLength: number;
  
  // Essential UI Settings
  ttsRate: number;
  fallbackAccent: string;
}

export interface SettingsSection {
  id: keyof AppSettings;
  title: string;
  description: string;
  icon: string;
  component: React.ComponentType<any>;
}
