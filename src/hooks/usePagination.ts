'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export function usePagination(totalItems: number, itemsPerPage: number) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = useMemo(() => {
    const pageParam = searchParams.get('page');
    return pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;
  }, [searchParams]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage);
  }, [totalItems, itemsPerPage]);

  const startIndex = useMemo(() => {
    return (currentPage - 1) * itemsPerPage;
  }, [currentPage, itemsPerPage]);

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page <= 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    
    const newUrl = params.toString() 
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    
    router.push(newUrl);
  };

  const paginationInfo = useMemo(() => ({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    startIndex,
    endIndex: Math.min(startIndex + itemsPerPage, totalItems),
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  }), [currentPage, totalPages, totalItems, itemsPerPage, startIndex]);

  return {
    ...paginationInfo,
    setPage,
  };
}
