'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AppShell } from '@/components/shared/AppShell';
import { Pagination } from '@/components/shared/Pagination';
import { RootCard } from '@/components/features/RootCard';
import { PAGINATION } from '@/constants';
import { getRootsData } from '@/utils/data';
import { useLanguage, interpolate } from '@/contexts/LanguageContext';

function RootsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { learningLanguage, t } = useLanguage();
  
  const rootsData = getRootsData(learningLanguage);
  const page = Number(searchParams.get('page')) || 1;
  const startIndex = (page - 1) * PAGINATION.itemsPerPage;
  const totalPages = Math.ceil(rootsData.length / PAGINATION.itemsPerPage);
  const paginatedRoots = rootsData.slice(startIndex, startIndex + PAGINATION.itemsPerPage);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    if (newPage <= 1) {
      params.delete('page');
    } else {
      params.set('page', newPage.toString());
    }
    router.push(`/roots?${params.toString()}`);
  };

  return (
    <AppShell>
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-800 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            {interpolate(t('words.count'), { count: rootsData.length })} roots available
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">{t('roots.title')}</span>
            <span className="block text-transparent bg-clip-text gradient-primary bg-gradient-to-r from-primary-600 to-accent-600">
              Explore Language Foundations
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-gray-600">
            {interpolate(t('roots.description'), { count: rootsData.length })}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedRoots.map((root, index) => (
            <div key={root.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <RootCard root={root} />
            </div>
          ))}
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

export default function RootsPage() {
  const { t } = useLanguage();
  
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <RootsPageContent />
    </Suspense>
  );
}
