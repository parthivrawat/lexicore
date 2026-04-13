import Link from 'next/link';
import { SearchItem } from '@/types';
import { getSearchResultId } from '@/utils/format';

interface SearchResultItemProps {
  item: SearchItem;
}

export function SearchResultItem({ item }: SearchResultItemProps) {
  return (
    <Link
      href={item.href}
      className="block rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-6 transition-all duration-200 hover:shadow-medium hover:border-gray-300 dark:hover:border-gray-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{item.title}</h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200 capitalize whitespace-nowrap">
              {item.kind}
            </span>
          </div>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
