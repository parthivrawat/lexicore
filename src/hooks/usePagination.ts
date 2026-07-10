import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

export function usePagination(totalItems: number) {
  const { settings } = useSettings();
  const itemsPerPage = settings.itemsPerPage;
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const currentPage = useMemo(() => {
    const pageParam = searchParams.get('page');
    const page = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;
    return Math.min(page, totalPages);
  }, [searchParams, totalPages]);

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

    setSearchParams(params, { replace: true });
  };

  const paginationInfo = useMemo(
    () => ({
      currentPage,
      totalPages,
      totalItems,
      itemsPerPage,
      startIndex,
      endIndex: Math.min(startIndex + itemsPerPage, totalItems),
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    }),
    [currentPage, totalPages, totalItems, itemsPerPage, startIndex]
  );

  return {
    ...paginationInfo,
    setPage,
  };
}
