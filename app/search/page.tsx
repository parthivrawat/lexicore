'use client';

import { AppShell } from '@/components/shared/AppShell';
import { SearchResultItem } from '@/components/features/SearchResultItem';
import { SearchFilters } from '@/components/features/SearchFilters';
import { Button } from '@/components/ui/Button';
import { useSearch } from '@/hooks/useSearch';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SearchPage() {
  const { t } = useLanguage();
  const {
    query,
    filter,
    results,
    resultCount,
    handleQueryChange,
    handleFilterChange,
    hasQuery,
  } = useSearch();

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="block">{t('search.title') || 'Search'}</span>
            <span className="block text-transparent bg-clip-text gradient-primary bg-gradient-to-r from-primary-600 to-accent-600">
              Find What You Need
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300">
            Search across {200}+ word roots and {200}+ vocabulary words with smart filters.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Query
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Try: bio, earth, hello, prefix..."
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors bg-white dark:bg-gray-800"
            />
          </div>

          <div className="flex justify-center">
            <SearchFilters
              activeFilter={filter}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="space-y-6">
          {!hasQuery ? (
            <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-16 text-center">
              <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Start searching</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                Enter a search term to explore word roots and vocabulary.
              </p>
            </div>
          ) : resultCount === 0 ? (
            <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-16 text-center">
              <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.5a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                Try adjusting your search terms or filters.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  {resultCount} result{resultCount !== 1 ? 's' : ''}
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing {filter === 'all' ? 'all types' : filter + 's only'}
                </div>
              </div>
              
              <div className="grid gap-4">
                {results.map((item) => (
                  <SearchResultItem key={`${item.kind}:${item.id}`} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </AppShell>
  );
}
