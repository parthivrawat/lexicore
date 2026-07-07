import React, { Suspense } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppShell } from '@/components/shared/AppShell'
import { Pagination } from '@/components/shared/Pagination'
import { VocabCard } from '@/components/features/VocabCard'
import { CategoryFilter } from '@/components/features/CategoryFilter'
import { formatCategory } from '@/utils/format'
import { groupWordsByCategory, getVocabularyData } from '@/utils/data'
import { useLanguage } from '@/contexts/LanguageContext'
import { interpolate } from '@/utils/interpolate'
import { useVocabularySearch } from '@/hooks/useVocabularySearch'
import { usePagination } from '@/hooks/usePagination'
import { CATEGORY_ORDER } from '@/constants'
import { VocabWord, VocabCategory } from '@/types'

function VocabularyPageContent() {
  const { learningLanguage, uiLanguage, t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const {
    query,
    results: searchResults,
    resultCount,
    handleQueryChange,
    hasQuery,
  } = useVocabularySearch()
  
  const categoryParam = searchParams.get('category') as VocabCategory | null
  const selectedCategory: VocabCategory | 'all' = categoryParam || 'all'
  
  const handleCategoryChange = (category: VocabCategory | 'all') => {
    if (category === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams)
  }
  
  const allVocabularyData = hasQuery ? searchResults : getVocabularyData(learningLanguage)
  const filteredVocabularyData = selectedCategory === 'all' 
    ? allVocabularyData 
    : allVocabularyData.filter(word => word.category === selectedCategory)
  
  const { startIndex, endIndex, setPage } = usePagination(filteredVocabularyData.length)
  const paginatedWords = filteredVocabularyData.slice(startIndex, endIndex + 1)
  const groupedWords = groupWordsByCategory(paginatedWords)

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-success-100 dark:bg-success-900/30 px-4 py-2 text-sm font-semibold text-success-800 dark:text-success-200 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
            </span>
            {hasQuery 
              ? `${resultCount} result${resultCount !== 1 ? 's' : ''} found`
              : `${interpolate(t('words.count'), { count: allVocabularyData.length })} words mastered`
            }
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="block">{t('vocabulary.title')}</span>
            <span className="block text-transparent bg-clip-text gradient-accent bg-gradient-to-r from-success-600 to-accent-600">
              {hasQuery ? 'Search Results' : 'Build Your Word Power'}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300">
            {hasQuery 
              ? `Showing search results for "${query}"`
              : interpolate(t('vocabulary.description'), { count: allVocabularyData.length })
            }
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <label htmlFor="vocab-search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search Vocabulary
            </label>
            <input
              id="vocab-search"
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Try: hello, goodbye, one, two, eat, drink..."
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-success-500 focus:ring-2 focus:ring-success-500 focus:ring-offset-2 transition-colors bg-white dark:bg-gray-800"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div className="space-y-12">
          {CATEGORY_ORDER.map((cat, catIndex) => {
            const items = groupedWords[cat] ?? []
            if (items.length === 0) return null

            return (
              <section key={cat} className="space-y-6 animate-slide-up" style={{ animationDelay: `${catIndex * 0.2}s` }}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-success-500 to-success-600 text-white shadow-soft">
                    <span className="text-lg font-bold">{formatCategory(cat, uiLanguage).charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatCategory(cat, uiLanguage)}
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-success-100 dark:bg-success-900/30 px-3 py-1 text-sm font-semibold text-success-800 dark:text-success-200 mt-1">
                      {interpolate(t('words.count'), { count: items.length })}
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((word: VocabWord, wordIndex: number) => (
                    <div key={word.id} className="animate-slide-up" style={{ animationDelay: `${(catIndex * 0.2) + (wordIndex * 0.1)}s` }}>
                      <VocabCard word={word} />
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <Pagination
          totalItems={filteredVocabularyData.length}
          onPageChange={setPage}
          className="pt-6"
        />
      </div>
    </AppShell>
  )
}

const VocabularyPage: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <VocabularyPageContent />
    </Suspense>
  )
}

export default VocabularyPage
