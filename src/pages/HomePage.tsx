import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/shared/AppShell'
import { Button } from '@/components/ui/Button'
import { LearningTips } from '@/components/features'
import { ROUTES, HOME_PAGE_LEARNING_TIPS } from '@/constants'
import { useLanguage } from '@/contexts/LanguageContext'
import { rootsEn } from '@/data/roots'
import { vocabularyEn } from '@/data/vocabulary'
import { etymologyData } from '@/data/etymology'

const HomePage: React.FC = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  // Calculate statistics
  const stats = useMemo(() => {
    const prefixCount = rootsEn.filter(r => r.type === 'prefix').length
    const suffixCount = rootsEn.filter(r => r.type === 'suffix').length
    const baseCount = rootsEn.filter(r => r.type === 'base').length
    const categories = [...new Set(vocabularyEn.map(v => v.category))]
    
    return {
      totalRoots: rootsEn.length,
      totalVocabulary: vocabularyEn.length,
      prefixCount,
      suffixCount,
      baseCount,
      categoryCount: categories.length
    }
  }, [])

  // Get featured word with etymology
  const featuredWord = useMemo(() => {
    const wordWithEtymology = vocabularyEn.find(v => v.id === 'word_hello')
    if (wordWithEtymology) {
      return {
        ...wordWithEtymology,
        etymology: etymologyData[wordWithEtymology.id]
      }
    }
    return null
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <AppShell>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-sm font-semibold text-primary-800 dark:text-primary-200 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Discover the power of language
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block">{t('app.title')}</span>
            <span className="block text-transparent bg-clip-text gradient-primary bg-gradient-to-r from-primary-600 to-accent-600">
              Master Language Roots
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl">
            {t('app.description')}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link to={ROUTES.roots}>
              <Button size="lg" className="button-glow">
                Start Exploring
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Link to={ROUTES.vocabulary}>
              <Button variant="outline" size="lg">
                Browse Vocabulary
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.05s' }}>
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for roots, vocabulary, or etymology..."
                className="w-full px-6 py-4 pr-14 text-base rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
              Search across {stats.totalRoots}+ roots and {stats.totalVocabulary}+ vocabulary words
            </p>
          </form>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Roots</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalRoots}+</p>
              </div>
            </div>
          </div>

          <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-success-500 to-success-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Vocabulary</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalVocabulary}+</p>
              </div>
            </div>
          </div>

          <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Categories</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.categoryCount}</p>
              </div>
            </div>
          </div>

          <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Prefixes</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.prefixCount}</p>
              </div>
            </div>
          </div>

          <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Suffixes</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.suffixCount}</p>
              </div>
            </div>
          </div>

          <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Base Roots</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.baseCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Word with Etymology */}
        {featuredWord && featuredWord.etymology && (
          <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-700 p-8 shadow-soft animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-semibold text-purple-800 dark:text-purple-200">
                <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Word of the Day
              </span>
              <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 text-sm font-semibold text-indigo-800 dark:text-indigo-200">
                With Etymology
              </span>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{featuredWord.word}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{featuredWord.meaning}</p>
                {featuredWord.pronunciationVariants && featuredWord.pronunciationVariants[0] && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="font-medium">Pronunciation:</span> /{featuredWord.pronunciationVariants[0].ipa}/
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {featuredWord.examples.slice(0, 2).map((example, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      "{example}"
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Origin</h4>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {featuredWord.etymology.languageOrigin} {featuredWord.etymology.yearOfOrigin && `(${featuredWord.etymology.yearOfOrigin})`}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Evolution</h4>
                  <div className="space-y-2">
                    {featuredWord.etymology.timeline.slice(0, 3).map((stage, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-purple-500" />
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">{stage.form}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({stage.language})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {featuredWord.etymology.notes && (
                  <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3">
                    <p className="text-sm text-amber-800 dark:text-amber-300 italic">{featuredWord.etymology.notes}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-purple-200 dark:border-purple-700">
              <Link to={`/vocabulary/${featuredWord.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                View full etymology
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          <div className="group card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 shadow-soft animate-slide-up">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-soft group-hover:scale-110 transition-transform duration-300 sm:h-14 sm:w-14">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{t('roots.title')}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              Explore word roots including prefixes, suffixes, and base forms with detailed examples and etymology. Search for specific roots or meanings.
            </p>
            <Link to={ROUTES.roots} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Explore Roots
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="group card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 shadow-soft animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-success-500 to-success-600 text-white shadow-soft group-hover:scale-110 transition-transform duration-300 sm:h-14 sm:w-14">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{t('vocabulary.title')}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              Master essential words organized by categories with IPA pronunciation and contextual examples. Search for specific words or meanings.
            </p>
            <Link to={ROUTES.vocabulary} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Browse Vocabulary
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Category Quick Access */}
        <div className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Browse by Category</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { id: 'greetings', name: 'Greetings', icon: '👋', color: 'from-pink-500 to-rose-500' },
              { id: 'numbers', name: 'Numbers', icon: '🔢', color: 'from-blue-500 to-cyan-500' },
              { id: 'verbs', name: 'Verbs', icon: '⚡', color: 'from-amber-500 to-orange-500' },
              { id: 'daily-use-nouns', name: 'Daily Nouns', icon: '🏠', color: 'from-green-500 to-emerald-500' },
              { id: 'adjectives', name: 'Adjectives', icon: '🎨', color: 'from-purple-500 to-violet-500' },
              { id: 'adverbs', name: 'Adverbs', icon: '🚀', color: 'from-indigo-500 to-blue-500' },
              { id: 'prepositions', name: 'Prepositions', icon: '🔗', color: 'from-teal-500 to-cyan-500' },
            ].map((category) => {
              const count = vocabularyEn.filter(v => v.category === category.id).length
              return (
                <Link
                  key={category.id}
                  to={`/vocabulary?category=${category.id}`}
                  className="group card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-5 shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{count} words</p>
                    </div>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Sample Content Preview */}
        <div className="grid gap-8 lg:grid-cols-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {/* Sample Roots */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sample Roots</h3>
              <Link to={ROUTES.roots} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {rootsEn.slice(0, 3).map((root) => (
                <Link
                  key={root.id}
                  to={`/roots/${root.id}`}
                  className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">{root.root}</span>
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                        {root.type}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{root.meaning}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{root.languageOrigin}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Sample Vocabulary */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sample Vocabulary</h3>
              <Link to={ROUTES.vocabulary} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {vocabularyEn.slice(0, 3).map((word) => (
                <Link
                  key={word.id}
                  to={`/vocabulary/${word.id}`}
                  className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">{word.word}</span>
                      {word.etymology && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200">
                          Etymology
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{word.category}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{word.meaning}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Rotating Learning Tips */}
        <div className="animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <LearningTips tips={HOME_PAGE_LEARNING_TIPS} theme="amber" />
        </div>

        {/* About Section */}
        <div className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 shadow-soft animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full gradient-primary shadow-soft">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">About This Platform</h3>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
              This is a comprehensive multilingual word roots and vocabulary platform designed for language enthusiasts and learners. 
              All data is served locally from static files, ensuring fast and reliable access. The platform supports 
              multiple languages, interactive features, and comprehensive learning resources to accelerate your language mastery journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fast & Reliable
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Multilingual Support
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Interactive Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

export default HomePage
