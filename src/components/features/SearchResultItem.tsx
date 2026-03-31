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
      className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg hover:border-gray-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 capitalize">
              {item.kind}
            </span>
          </div>
          
          <p className="mt-2 text-sm text-gray-700">{item.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
