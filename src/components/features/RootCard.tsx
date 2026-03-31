import Link from 'next/link';
import { WordRoot } from '@/types';
import { formatRootType } from '@/utils/format';

interface RootCardProps {
  root: WordRoot;
}

export function RootCard({ root }: RootCardProps) {
  return (
    <Link
      href={`/roots/${encodeURIComponent(root.id)}`}
      className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg hover:border-gray-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-900">{root.root}</h3>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
              {formatRootType(root.type)}
            </span>
          </div>
          
          <p className="mt-2 text-sm text-gray-700">{root.meaning}</p>
          
          <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
            <span>Origin: {root.languageOrigin}</span>
            <span>{root.examples.length} examples</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
