import React, { Suspense } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/shared/AppShell'
import { Pagination } from '@/components/shared/Pagination'
import { RootCard } from '@/components/features/RootCard'
import { getRootsData } from '@/utils/data'
import { useLanguage, interpolate } from '@/contexts/LanguageContext'
import { useRootSearch } from '@/hooks/useRootSearch'
import { usePagination } from '@/hooks/usePagination'

function RootsPageContent() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { learningLanguage, t } = useLanguage()
  
  const {
    query,
    results: searchResults,
    resultCount,
    handleQueryChange,
    hasQuery,
  } = useRootSearch()
  
  const rootsData = hasQuery ? searchResults : getRootsData(learningLanguage)
  const { currentPage, totalPages, startIndex, endIndex, setPage } = usePagination(rootsData.length)
  const paginatedRoots = rootsData.slice(startIndex, endIndex + 1)

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    if (newPage <= 1) {
      params.delete('page')
    } else {
      params.set('page', newPage.toString())
    }
    navigate(`/roots?${params.toString()}`)
  }

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-sm font-semibold text-primary-800 dark:text-primary-200 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            {hasQuery 
              ? `${resultCount} result${resultCount !== 1 ? 's' : ''} found`
              : `${interpolate(t('words.count'), { count: getRootsData(learningLanguage).length })} roots available`
            }
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="block">{t('roots.title')}</span>
            <span className="block text-transparent bg-clip-text gradient-primary bg-gradient-to-r from-primary-600 to-accent-600">
              {hasQuery ? 'Search Results' : 'Explore Language Foundations'}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300">
            {hasQuery 
              ? `Showing search results for "${query}"`
              : interpolate(t('roots.description'), { count: getRootsData(learningLanguage).length })
            }
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <label htmlFor="root-search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Roots
            </label>
            <input
              id="root-search"
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Try: bio, geo, pre, un, script..."
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors bg-white dark:bg-gray-800"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedRoots.map((root, index) => (
            <div key={root.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <RootCard root={root} />
            </div>
          ))}
        </div>

        <Pagination
          totalItems={rootsData.length}
          onPageChange={setPage}
          className="pt-6"
        />
      </div>
    </AppShell>
  )
}

const RootsPage: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <RootsPageContent />
    </Suspense>
  )
}

export default RootsPage
