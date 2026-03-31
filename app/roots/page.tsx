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
  const { language, t } = useLanguage();
  
  const rootsData = getRootsData(language);
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
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t('roots.title')}</h1>
          <p className="mt-2 text-lg text-gray-600">
            {interpolate(t('roots.description'), { count: rootsData.length })}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedRoots.map((root) => (
            <RootCard key={root.id} root={root} />
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
