'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t } = useLanguage();

  const themes = [
    { value: 'light' as const, label: t('theme.light', 'Light'), icon: '☀️' },
    { value: 'dark' as const, label: t('theme.dark', 'Dark'), icon: '🌙' },
    { value: 'system' as const, label: t('theme.system', 'System'), icon: '💻' },
  ];

  return (
    <div className="relative group">
      <div className="flex items-center space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {themes.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`
              relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${theme === value 
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }
            `}
            title={label}
          >
            <span className="text-lg">{icon}</span>
            <span className="sr-only">{label}</span>
          </button>
        ))}
      </div>
      
      {/* Current theme indicator */}
      <div className="absolute -bottom-6 left-0 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {themes.find(t => t.value === theme)?.label}
      </div>
    </div>
  );
}

export function SimpleThemeToggle() {
  const { theme, setTheme, isDark } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    return isDark ? '🌙' : '☀️';
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      title={`Current theme: ${theme}`}
    >
      <span className="text-xl">{getIcon()}</span>
    </button>
  );
}
