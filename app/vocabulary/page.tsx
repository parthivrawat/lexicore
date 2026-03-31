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
  const { language, t } = useLanguage();
  
  const vocabularyData = getVocabularyData(language);
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
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t('vocabulary.title')}</h1>
          <p className="mt-2 text-lg text-gray-600">
            {interpolate(t('vocabulary.description'), { count: vocabularyData.length })}
          </p>
        </div>

        <div className="space-y-8">
          {categoryOrder.map((cat) => {
            const items = groupedWords[cat] ?? [];
            if (items.length === 0) return null;

            return (
              <section key={cat} className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {formatCategory(cat, language)}
                  </h2>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    {interpolate(t('words.count'), { count: items.length })}
                  </span>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((word: any) => (
                    <VocabCard key={word.id} word={word} />
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
