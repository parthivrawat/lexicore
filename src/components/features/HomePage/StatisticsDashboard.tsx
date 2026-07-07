import { useMemo } from 'react';
import { rootsEn } from '@/data/roots';
import { vocabularyEn } from '@/data/vocabulary';

export function StatisticsDashboard() {
  const stats = useMemo(() => {
    const prefixCount = rootsEn.filter(r => r.type === 'prefix').length;
    const suffixCount = rootsEn.filter(r => r.type === 'suffix').length;
    const baseCount = rootsEn.filter(r => r.type === 'base').length;
    const categories = [...new Set(vocabularyEn.map(v => v.category))];
    
    return {
      totalRoots: rootsEn.length,
      totalVocabulary: vocabularyEn.length,
      prefixCount,
      suffixCount,
      baseCount,
      categoryCount: categories.length
    };
  }, []);

  const StatCard = ({ icon, label, value, color }: { icon: string, label: string, value: number | string, color: string }) => (
    <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white`}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <StatCard 
        icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        label="Total Roots"
        value={`${stats.totalRoots}+`}
        color="from-blue-500 to-blue-600"
      />
      <StatCard 
        icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        label="Vocabulary"
        value={`${stats.totalVocabulary}+`}
        color="from-success-500 to-success-600"
      />
      <StatCard 
        icon="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        label="Categories"
        value={stats.categoryCount}
        color="from-purple-500 to-purple-600"
      />
      <StatCard 
        icon="M13 10V3L4 14h7v7l9-11h-7z"
        label="Prefixes"
        value={stats.prefixCount}
        color="from-amber-500 to-amber-600"
      />
      <StatCard 
        icon="M13 10V3L4 14h7v7l9-11h-7z"
        label="Suffixes"
        value={stats.suffixCount}
        color="from-rose-500 to-rose-600"
      />
      <StatCard 
        icon="M13 10V3L4 14h7v7l9-11h-7z"
        label="Base Roots"
        value={stats.baseCount}
        color="from-cyan-500 to-cyan-600"
      />
    </div>
  );
}
