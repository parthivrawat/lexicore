import React, { Suspense } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppShell } from '@/components/shared/AppShell'
import { RootCard } from '@/components/features/RootCard'
import { VocabCard } from '@/components/features/VocabCard'
import { getRootsData, getVocabularyData } from '@/utils/data'
import { useLanguage } from '@/contexts/LanguageContext'
import { useRootSearch } from '@/hooks/useRootSearch'
import { useVocabularySearch } from '@/hooks/useVocabularySearch'
import { VocabWord } from '@/types'

function SearchPageContent() {
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const { t } = useLanguage()
  
  const {
    query: rootQuery,
    results: rootResults,
    resultCount: rootCount,
    handleQueryChange: handleRootQueryChange,
  } = useRootSearch()
  
  const {
    query: vocabQuery,
    results: vocabResults,
    resultCount: vocabCount,
    handleQueryChange: handleVocabQueryChange,
  } = useVocabularySearch()

  // Initialize with URL query parameter
  React.useEffect(() => {
    if (queryParam && !rootQuery && !vocabQuery) {
      handleRootQueryChange(queryParam)
      handleVocabQueryChange(queryParam)
    }
  }, [queryParam, rootQuery, vocabQuery, handleRootQueryChange, handleVocabQueryChange])

  const displayQuery = rootQuery || vocabQuery || queryParam
  const totalResults = rootCount + vocabCount
  const hasResults = totalResults > 0
  const hasQuery = displayQuery.trim().length > 0

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
              ? `${totalResults} result${totalResults !== 1 ? 's' : ''} found`
              : 'Search across all content'
            }
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="block">Global Search</span>
            <span className="block text-transparent bg-clip-text gradient-primary bg-gradient-to-r from-primary-600 to-accent-600">
              {hasQuery ? 'Search Results' : 'Find Everything'}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300">
            {hasQuery 
              ? `Showing search results for "${displayQuery}"`
              : 'Search across roots, vocabulary, and etymology'
            }
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <label htmlFor="global-search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Everything
            </label>
            <input
              id="global-search"
              type="text"
              value={displayQuery}
              onChange={(e) => {
                handleRootQueryChange(e.target.value)
                handleVocabQueryChange(e.target.value)
              }}
              placeholder="Search for roots, vocabulary, or etymology..."
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors bg-white dark:bg-gray-800"
            />
          </div>
        </div>

        {!hasQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Enter a search term to find roots, vocabulary words, and etymology information.</p>
          </div>
        )}

        {hasQuery && !hasResults && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No results found for "{displayQuery}". Try a different search term.</p>
          </div>
        )}

        {hasResults && (
          <div className="space-y-12">
            {/* Roots Results */}
            {rootCount > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-soft">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Roots
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-200 mt-1">
                      {rootCount} result{rootCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rootResults.map((root, index) => (
                    <div key={root.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <RootCard root={root} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Vocabulary Results */}
            {vocabCount > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-success-500 to-success-600 text-white shadow-soft">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Vocabulary
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-success-100 dark:bg-success-900/30 px-3 py-1 text-sm font-semibold text-success-800 dark:text-success-200 mt-1">
                      {vocabCount} result{vocabCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {vocabResults.map((word: VocabWord, index: number) => (
                    <div key={word.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <VocabCard word={word} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </AppShell>
  )
}

const SearchPage: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <SearchPageContent />
    </Suspense>
  )
}

export default SearchPage
