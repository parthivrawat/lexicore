import { Button } from '@/components/ui/Button';
import { PAGINATION_CONFIG } from '@/constants';
import { usePagination } from '@/hooks/usePagination';

interface PaginationProps {
  totalItems: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ totalItems, onPageChange, className = '' }: PaginationProps) {
  const { currentPage, totalPages, setPage } = usePagination(totalItems);
  
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: number[] = [];
    const showPages = 5; // Fixed value for optimal UX
    
    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + showPages - 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrevious}
        disabled={currentPage <= 1}
        className="flex items-center gap-2 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Previous</span>
      </Button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${PAGINATION_CONFIG.pageButtonSize} min-w-[32px] rounded-lg text-xs font-medium transition-all duration-200 sm:min-w-[40px] sm:text-sm ${
              currentPage === page
                ? 'gradient-primary text-white shadow-soft'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        className="flex items-center gap-2 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm"
      >
        <span className="hidden sm:inline">Next</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
}
