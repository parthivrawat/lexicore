'use client';

import { AppShell } from '@/components/shared/AppShell';
import { SearchResultItem } from '@/components/features/SearchResultItem';
import { SearchFilters } from '@/components/features/SearchFilters';
import { Button } from '@/components/ui/Button';
import { useSearch } from '@/hooks/useSearch';

export default function SearchPage() {
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
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Search</h1>
          <p className="mt-2 text-lg text-gray-600">
            Search across {200}+ word roots and {200}+ vocabulary words with smart filters.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              Search Query
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Try: bio, earth, hello, prefix..."
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            />
          </div>

          <SearchFilters
            activeFilter={filter}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="space-y-4">
          {!hasQuery ? (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Start searching</h3>
              <p className="mt-2 text-sm text-gray-600">
                Enter a search term to explore word roots and vocabulary.
              </p>
            </div>
          ) : resultCount === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.5a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-2 text-sm text-gray-600">
                Try adjusting your search terms or filters.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  {resultCount} result{resultCount !== 1 ? 's' : ''}
                </h2>
                <div className="text-sm text-gray-500">
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
