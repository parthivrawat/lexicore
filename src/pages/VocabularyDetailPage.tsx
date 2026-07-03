import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/shared/AppShell'
import { LearningTips } from '@/components/features'
import { formatCategory, formatPronunciation } from '@/utils/format'
import { ROUTES, VOCABULARY_DETAIL_LEARNING_TIPS } from '@/constants'
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

        {word.etymology && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Etymology</h2>
              <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-200">
                Word History
              </span>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm space-y-6">
              {/* Origin Information */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Language Origin</h3>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">{word.etymology.languageOrigin}</p>
                </div>
                {word.etymology.yearOfOrigin && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Year of Origin</h3>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">{word.etymology.yearOfOrigin}</p>
                  </div>
                )}
              </div>

              {/* Root Composition */}
              {word.etymology.rootComposition && word.etymology.rootComposition.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Root Composition</h3>
                  <div className="flex flex-wrap gap-2">
                    {word.etymology.rootComposition.map((root, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200"
                      >
                        {root.position}: {root.contribution}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline */}
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Evolution Timeline</h3>
                <div className="space-y-3">
                  {word.etymology.timeline.map((stage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-purple-500 dark:bg-purple-400" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-gray-900 dark:text-white">{stage.language}</span>
                          {stage.period && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">({stage.period})</span>
                          )}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{stage.form}</p>
                        {stage.meaning && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 italic">{stage.meaning}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cognates */}
              {word.etymology.cognates && word.etymology.cognates.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Cognates (Related Words)</h3>
                  <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {word.etymology.cognates.map((cognate, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 p-3"
                      >
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{cognate.language}</div>
                        <div className="font-medium text-gray-900 dark:text-white">{cognate.word}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{cognate.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {word.etymology.notes && (
                <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4">
                  <h3 className="text-sm font-medium text-amber-900 dark:text-amber-200 mb-2">Historical Note</h3>
                  <p className="text-sm text-amber-800 dark:text-amber-300">{word.etymology.notes}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Rotating Learning Tips */}
        <LearningTips tips={VOCABULARY_DETAIL_LEARNING_TIPS} theme="blue" />
      </div>
    </AppShell>
  )
}

export default VocabularyDetailPage
