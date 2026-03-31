import Link from 'next/link';
import { AppShell } from '@/components/shared/AppShell';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants';

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Word Roots & Core Vocabulary
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            English-only MVP with comprehensive datasets for word roots and vocabulary learning
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Root Explorer</h3>
            <p className="mt-2 text-sm text-gray-600">
              Explore 200+ English word roots including prefixes, suffixes, and base forms with detailed examples.
            </p>
            <Link href={ROUTES.roots} className="mt-4 inline-block">
              <Button variant="primary" size="sm">
                Explore Roots
              </Button>
            </Link>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Core Vocabulary</h3>
            <p className="mt-2 text-sm text-gray-600">
              Master 200+ essential English words organized by categories with IPA pronunciation and examples.
            </p>
            <Link href={ROUTES.vocabulary} className="mt-4 inline-block">
              <Button variant="primary" size="sm">
                Browse Vocabulary
              </Button>
            </Link>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Smart Search</h3>
            <p className="mt-2 text-sm text-gray-600">
              Search across roots and vocabulary with filters for quick and precise results.
            </p>
            <Link href={ROUTES.search} className="mt-4 inline-block">
              <Button variant="primary" size="sm">
                Start Searching
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900">About This MVP</h3>
          <p className="mt-2 text-sm text-gray-600">
            This is a frontend-only demonstration of the multilingual word roots and vocabulary platform. 
            All data is served locally from static files, making it fast and reliable. The full platform will 
            support multiple languages, interactive features, and progress tracking.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
