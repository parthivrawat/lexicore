import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/shared/AppShell'
import { formatCategory, formatPronunciation } from '@/utils/format'
import { ROUTES } from '@/constants'
import { getVocabularyData } from '@/utils/data'
import { useLanguage } from '@/contexts/LanguageContext'
import { VocabWord } from '@/types'

const VocabularyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { learningLanguage, uiLanguage } = useLanguage()
  const [word, setWord] = useState<VocabWord | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadWord = () => {
      if (!id) return
      
      const vocabularyData = getVocabularyData(learningLanguage)
      const foundWord = vocabularyData.find((w) => w.id === id)
      
      if (!foundWord) {
        navigate('/404')
        return
      }

      setWord(foundWord)
      setLoading(false)
    }

    loadWord()
  }, [id, learningLanguage, navigate])

  if (loading) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-64">
          <div>Loading...</div>
        </div>
      </AppShell>
    )
  }

  if (!word) return null

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={ROUTES.vocabulary} className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              ← Back to Vocabulary
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-medium text-green-800 dark:text-green-200">
              {formatCategory(word.category, uiLanguage)}
            </span>
          </div>
          
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{word.word}</h1>
          
          {word.pronunciationIpa && (
            <div className="mt-2 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              {formatPronunciation(word.pronunciationIpa)}
            </div>
          )}
          
          <p className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:text-lg">{word.meaning}</p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Examples</h2>
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200">
              {word.examples.length} examples
            </span>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {word.examples.map((example: string, index: number) => (
              <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm">
                <p className="text-gray-700 dark:text-gray-300">{example}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-blue-50 dark:bg-gray-800 p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200">Learning Tip</h3>
          <p className="mt-2 text-blue-700 dark:text-blue-300">
            Try using this word in different contexts to better understand its meaning and usage. 
            Practice with the examples above and create your own sentences.
          </p>
        </div>
      </div>
    </AppShell>
  )
}

export default VocabularyDetailPage
