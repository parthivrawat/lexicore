import React from 'react'
import { AppShell } from '@/components/shared/AppShell'
import { SettingsTabs } from '@/components/features/SettingsTabs'

const SettingsPage: React.FC = () => {
  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 dark:bg-accent-900/30 px-4 py-2 text-sm font-semibold text-accent-800 dark:text-accent-200 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            Application Settings
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="block">Configure Your</span>
            <span className="block text-transparent bg-clip-text gradient-accent bg-gradient-to-r from-accent-600 to-primary-600">
              Learning Experience
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300">
            Customize pagination, search behavior, and UI preferences to match your learning style.
          </p>
        </div>

        <SettingsTabs />
      </div>
    </AppShell>
  )
}

export default SettingsPage
