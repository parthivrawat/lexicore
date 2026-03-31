import Link from 'next/link';
import { notFound } from 'next/navigation';
import { rootsEn } from '@/data/roots/english';
import { AppShell } from '@/components/shared/AppShell';
import { Button } from '@/components/ui/Button';
import { formatRootType } from '@/utils/format';
import { findRelatedRoots } from '@/utils/data';
import { ROUTES } from '@/constants';
import { RootExample } from '@/types';

export default async function RootDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const root = rootsEn.find((r) => r.id === id);
  if (!root) notFound();

  const relatedRoots = findRelatedRoots(root, rootsEn);

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={ROUTES.roots} className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              ← Back to Roots
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              {formatRootType(root.type)}
            </span>
            <span className="text-sm text-gray-500">
              Origin: {root.languageOrigin}
            </span>
          </div>
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">{root.root}</h1>
          <p className="mt-2 text-lg text-gray-700">{root.meaning}</p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Examples</h2>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
              {root.examples.length} examples
            </span>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {root.examples.map((example: RootExample) => (
              <div key={example.word} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{example.word}</h3>
                <p className="mt-2 text-sm text-gray-700">{example.meaning}</p>
                <blockquote className="mt-4 border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  &quot;{example.sentence}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Related Roots</h2>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
              {relatedRoots.length} related
            </span>
          </div>
          
          {relatedRoots.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <p className="text-gray-600">No related roots found.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoots.map((relatedRoot) => (
                <Link
                  key={relatedRoot.id}
                  href={`/roots/${encodeURIComponent(relatedRoot.id)}`}
                  className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:border-gray-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                      {formatRootType(relatedRoot.type)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{relatedRoot.root}</h3>
                  <p className="mt-2 text-sm text-gray-700">{relatedRoot.meaning}</p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </AppShell>
  );
}

export function generateStaticParams() {
  return rootsEn.map((r) => ({ id: r.id }));
}
