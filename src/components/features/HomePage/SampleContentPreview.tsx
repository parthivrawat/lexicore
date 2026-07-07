import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { rootsEn } from '@/data/roots';
import { vocabularyEn } from '@/data/vocabulary';

export function SampleContentPreview() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sample Roots</h3>
          <Link to={ROUTES.roots} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {rootsEn.slice(0, 3).map((root) => (
            <Link
              key={root.id}
              to={`/roots/${root.id}`}
              className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">{root.root}</span>
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                    {root.type}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{root.meaning}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{root.languageOrigin}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sample Vocabulary</h3>
          <Link to={ROUTES.vocabulary} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {vocabularyEn.slice(0, 3).map((word) => (
            <Link
              key={word.id}
              to={`/vocabulary/${word.id}`}
              className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">{word.word}</span>
                  {word.etymology && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200">
                      Etymology
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{word.category}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{word.meaning}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
