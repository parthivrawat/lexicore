import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { ROUTES, APP_CONFIG } from '@/constants';

const navigationItems = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.roots, label: 'Roots' },
  { href: ROUTES.vocabulary, label: 'Vocabulary' },
  { href: ROUTES.search, label: 'Search' },
];

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1">
            <div className="truncate text-lg font-semibold text-gray-900 sm:text-xl">
              {APP_CONFIG.name}
            </div>
            <div className="truncate text-sm text-gray-500">
              English MVP • Frontend-only data
            </div>
          </div>
          
          <nav className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="mt-auto border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            {APP_CONFIG.description} • Version {APP_CONFIG.version}
          </div>
        </div>
      </footer>
    </div>
  );
}
