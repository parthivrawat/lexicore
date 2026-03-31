import Link from 'next/link';
import { VocabWord } from '@/types';
import { formatCategory, formatPronunciation } from '@/utils/format';

interface VocabCardProps {
  word: VocabWord;
}

export function VocabCard({ word }: VocabCardProps) {
  return (
    <Link
      href={`/vocabulary/${encodeURIComponent(word.id)}`}
      className="block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg hover:border-gray-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-900">{word.word}</h3>
            {word.pronunciationIpa && (
              <span className="text-sm text-gray-500 italic">
                {formatPronunciation(word.pronunciationIpa)}
              </span>
            )}
          </div>
          
          <p className="mt-2 text-sm text-gray-700">{word.meaning}</p>
          
          <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 font-medium text-gray-800">
              {formatCategory(word.category)}
            </span>
            <span>{word.examples.length} examples</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
