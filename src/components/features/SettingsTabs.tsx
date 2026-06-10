'use client';

import { useState } from 'react';
import { PaginationSettings } from './settings/PaginationSettings';
import { SearchSettings } from './settings/SearchSettings';
import { UISettings } from './settings/UISettings';
import { LanguageSettings } from './settings/LanguageSettings';

type TabId = 'pagination' | 'search' | 'ui' | 'language';

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('pagination');

  const tabs = [
    {
      id: 'pagination' as TabId,
      title: 'Pagination',
      description: 'Configure how items are displayed across pages',
      icon: '📄',
      component: PaginationSettings,
    },
    {
      id: 'search' as TabId,
      title: 'Search',
      description: 'Customize search behavior and performance',
      icon: '🔍',
      component: SearchSettings,
    },
    {
      id: 'ui' as TabId,
      title: 'User Interface',
      description: 'Adjust visual elements and interactions',
      icon: '🎨',
      component: UISettings,
    },
    {
      id: 'language' as TabId,
      title: 'Language',
      description: 'Configure interface and learning language preferences',
      icon: '🌍',
      component: LanguageSettings,
    },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || PaginationSettings;

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8" aria-label="Settings tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-accent-500 text-accent-600 dark:text-accent-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.title}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Description */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tabs.find(tab => tab.id === activeTab)?.description}
        </p>
      </div>

      {/* Active Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-soft">
        <ActiveComponent />
      </div>
    </div>
  );
}
