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
    <div className="flex items-center justify-center gap-2 py-6">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
