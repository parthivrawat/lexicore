'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AppShell } from '@/components/shared/AppShell';
import { Pagination } from '@/components/shared/Pagination';
import { VocabCard } from '@/components/features/VocabCard';
import { PAGINATION } from '@/constants';
import { formatCategory } from '@/utils/format';
import { groupWordsByCategory, getVocabularyData } from '@/utils/data';
import { useLanguage, interpolate } from '@/contexts/LanguageContext';

const categoryOrder = ['greetings', 'numbers', 'verbs', 'daily-use-nouns'] as const;

function VocabularyPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { learningLanguage, uiLanguage, t } = useLanguage();
  
  const vocabularyData = getVocabularyData(learningLanguage);
  const page = Number(searchParams.get('page')) || 1;
  const startIndex = (page - 1) * PAGINATION.itemsPerPage;
  const totalPages = Math.ceil(vocabularyData.length / PAGINATION.itemsPerPage);
  const paginatedWords = vocabularyData.slice(startIndex, startIndex + PAGINATION.itemsPerPage);
  const groupedWords = groupWordsByCategory(paginatedWords);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    if (newPage <= 1) {
      params.delete('page');
    } else {
      params.set('page', newPage.toString());
    }
    router.push(`/vocabulary?${params.toString()}`);
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-success-100 dark:bg-success-900/30 px-4 py-2 text-sm font-semibold text-success-800 dark:text-success-200 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
            </span>
            {interpolate(t('words.count'), { count: vocabularyData.length })} words mastered
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            <span className="block">{t('vocabulary.title')}</span>
            <span className="block text-transparent bg-clip-text gradient-accent bg-gradient-to-r from-success-600 to-accent-600">
              Build Your Word Power
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600 dark:text-gray-300">
            {interpolate(t('vocabulary.description'), { count: vocabularyData.length })}
          </p>
        </div>

        <div className="space-y-12">
          {categoryOrder.map((cat, catIndex) => {
            const items = groupedWords[cat] ?? [];
            if (items.length === 0) return null;

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
                  {items.map((word: any, wordIndex: number) => (
                    <div key={word.id} className="animate-slide-up" style={{ animationDelay: `${(catIndex * 0.2) + (wordIndex * 0.1)}s` }}>
                      <VocabCard word={word} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="pt-6"
        />
      </div>
    </AppShell>
  );
}

export default function VocabularyPage() {
  const { t } = useLanguage();
  
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <VocabularyPageContent />
    </Suspense>
  );
}
