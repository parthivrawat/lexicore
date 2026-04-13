'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`${baseUrl}?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 py-8">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
      >
        Previous
      </button>
      <span className="text-sm text-gray-600 font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
      >
        Next
      </button>
    </div>
  );
}
