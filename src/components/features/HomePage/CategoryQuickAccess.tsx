import { Link } from 'react-router-dom';
import { vocabularyEn } from '@/data/vocabulary';

export function CategoryQuickAccess() {
  const categories = [
    { id: 'greetings', name: 'Greetings', icon: '👋', color: 'from-pink-500 to-rose-500' },
    { id: 'numbers', name: 'Numbers', icon: '🔢', color: 'from-blue-500 to-cyan-500' },
    { id: 'verbs', name: 'Verbs', icon: '⚡', color: 'from-amber-500 to-orange-500' },
    { id: 'daily-use-nouns', name: 'Daily Nouns', icon: '🏠', color: 'from-green-500 to-emerald-500' },
    { id: 'adjectives', name: 'Adjectives', icon: '🎨', color: 'from-purple-500 to-violet-500' },
    { id: 'adverbs', name: 'Adverbs', icon: '🚀', color: 'from-indigo-500 to-blue-500' },
    { id: 'prepositions', name: 'Prepositions', icon: '🔗', color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <div className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Browse by Category</h2>
      <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => {
          const count = vocabularyEn.filter(v => v.category === category.id).length;
          return (
            <Link
              key={category.id}
              to={`/vocabulary?category=${category.id}`}
              className="group card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-5 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{count} words</p>
                </div>
                <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
