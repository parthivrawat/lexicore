import { ROOT_TYPES } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { RootType } from '@/types';

interface RootTypeFilterProps {
  selectedType: RootType | 'all';
  onTypeChange: (type: RootType | 'all') => void;
}

export function RootTypeFilter({ selectedType, onTypeChange }: RootTypeFilterProps) {
  const { uiLanguage } = useLanguage();

  const types: (RootType | 'all')[] = ['all', 'prefix', 'suffix', 'base'];

  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedType === type
              ? 'bg-primary-500 text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {type === 'all' 
            ? 'All Types' 
            : ROOT_TYPES[type as keyof typeof ROOT_TYPES]?.[uiLanguage] || type
          }
        </button>
      ))}
    </div>
  );
}
