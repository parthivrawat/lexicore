import { useLanguage } from '@/contexts/LanguageContext';
import { SearchFilter } from '@/types';

interface SearchFiltersProps {
  activeFilter: SearchFilter;
  onFilterChange: (filter: SearchFilter) => void;
}

const FILTERS: SearchFilter[] = ['all', 'root', 'word'];

function getFilterLabelKey(filter: SearchFilter): string {
  switch (filter) {
    case 'all':
      return 'search.filters.all';
    case 'root':
      return 'search.filters.roots';
    case 'word':
      return 'search.filters.words';
    default:
      return 'search.filters.all';
  }
}

export function SearchFilters({ activeFilter, onFilterChange }: SearchFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Search filters">
      {FILTERS.map(filter => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-primary-500 text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {t(getFilterLabelKey(filter))}
        </button>
      ))}
    </div>
  );
}
