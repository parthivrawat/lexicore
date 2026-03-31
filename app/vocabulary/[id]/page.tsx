import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vocabularyEn } from '@/data/vocabulary/english';
import { AppShell } from '@/components/shared/AppShell';
import { formatCategory, formatPronunciation } from '@/utils/format';
import { ROUTES } from '@/constants';

export default async function WordDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const word = vocabularyEn.find((w) => w.id === id);
  if (!word) notFound();

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={ROUTES.vocabulary} className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              ← Back to Vocabulary
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              {formatCategory(word.category)}
            </span>
          </div>
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">{word.word}</h1>
          
          {word.pronunciationIpa && (
            <div className="mt-2 text-lg text-gray-600">
              {formatPronunciation(word.pronunciationIpa)}
            </div>
          )}
          
          <p className="mt-3 text-lg text-gray-700">{word.meaning}</p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Examples</h2>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
              {word.examples.length} examples
            </span>
          </div>
          
          <div className="grid gap-4">
            {word.examples.map((example: string, index: number) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-gray-700">{example}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-gray-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-900">Learning Tip</h3>
          <p className="mt-2 text-blue-700">
            Try using this word in different contexts to better understand its meaning and usage. 
            Practice with the examples above and create your own sentences.
          </p>
        </div>
      </div>
    </AppShell>
  );
}

export function generateStaticParams() {
  return vocabularyEn.map((w) => ({ id: w.id }));
}
