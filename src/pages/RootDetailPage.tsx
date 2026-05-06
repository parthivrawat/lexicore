import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/shared/AppShell'
import { Button } from '@/components/ui/Button'
import { formatRootType } from '@/utils/format'
import { findRelatedRoots, getRootsData } from '@/utils/data'
import { ROUTES } from '@/constants'
import { RootExample } from '@/types'
import { useLanguage } from '@/contexts/LanguageContext'

const RootDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { learningLanguage, uiLanguage } = useLanguage()
  const [root, setRoot] = useState<any>(null)
  const [relatedRoots, setRelatedRoots] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRoot = () => {
      if (!id) return
      
      const rootsData = getRootsData(learningLanguage)
      const foundRoot = rootsData.find((r) => r.id === id)
      
      if (!foundRoot) {
        navigate('/404')
        return
      }

      setRoot(foundRoot)
      setRelatedRoots(findRelatedRoots(foundRoot, rootsData))
      setLoading(false)
    }

    loadRoot()
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

  if (!root) return null

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={ROUTES.roots} className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              ← Back to Roots
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200">
              {formatRootType(root.type, uiLanguage)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Origin: {root.languageOrigin}
            </span>
          </div>
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{root.root}</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">{root.meaning}</p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Examples</h2>
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200">
              {root.examples.length} examples
            </span>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {root.examples.map((example: RootExample) => (
              <div key={example.word} className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{example.word}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{example.meaning}</p>
                <blockquote className="mt-4 border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400">
                  &quot;{example.sentence}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Related Roots</h2>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
              {relatedRoots.length} related
            </span>
          </div>
          
          {relatedRoots.length === 0 ? (
            <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">No related roots found.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoots.map((relatedRoot) => (
                <Link
                  key={relatedRoot.id}
                  to={`/roots/${encodeURIComponent(relatedRoot.id)}`}
                  className="block rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 shadow-sm transition-shadow hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-500"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-800 dark:text-gray-200">
                      {formatRootType(relatedRoot.type, uiLanguage)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{relatedRoot.root}</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{relatedRoot.meaning}</p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </AppShell>
  )
}

export default RootDetailPage
