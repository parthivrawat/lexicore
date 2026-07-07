import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { rootsEn } from '@/data/roots';
import { vocabularyEn } from '@/data/vocabulary';

export function QuickSearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.05s' }}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for roots, vocabulary, or etymology..."
            className="w-full px-6 py-4 pr-14 text-base rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
          Search across {rootsEn.length}+ roots and {vocabularyEn.length}+ vocabulary words
        </p>
      </form>
    </div>
  );
}
