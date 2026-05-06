import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/roots', label: 'Roots' },
  { to: '/vocabulary', label: 'Vocabulary' },
  { to: '/search', label: 'Search' },
];

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">English MVP</div>
            <div className="truncate text-xs text-gray-500">Frontend-only data</div>
          </div>
          <nav className="flex flex-wrap items-center justify-end gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-gray-500">
          Static MVP. No accounts, no backend.
        </div>
      </footer>
    </div>
  );
}
