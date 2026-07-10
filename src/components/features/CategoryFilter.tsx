import { CATEGORY_ORDER, CATEGORIES } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { VocabCategory } from '@/types';

interface CategoryFilterProps {
  selectedCategory: VocabCategory | 'all';
  onCategoryChange: (category: VocabCategory | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { uiLanguage } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selectedCategory === 'all'
            ? 'bg-success-500 text-white shadow-md'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        All Categories
      </button>
      {CATEGORY_ORDER.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-success-500 text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {CATEGORIES[category as keyof typeof CATEGORIES]?.[uiLanguage] || category}
        </button>
      ))}
    </div>
  );
}
