import { rootsEn } from '@/data/roots/english';
import { vocabularyEn } from '@/data/vocabulary/english';
import { SearchItem } from '@/types';

export function searchAll(queryRaw: string): SearchItem[] {
  const query = queryRaw.trim().toLowerCase();
  if (!query) return [];

  const rootMatches: SearchItem[] = rootsEn
    .filter((r) => {
      const haystack = `${r.root} ${r.meaning} ${r.languageOrigin}`.toLowerCase();
      return haystack.includes(query);
    })
    .map((r) => ({
      kind: 'root',
      id: r.id,
      title: r.root,
      subtitle: `${r.type} · ${r.meaning}`,
      href: `/roots/${encodeURIComponent(r.id)}`,
    }));

  const wordMatches: SearchItem[] = vocabularyEn
    .filter((w) => {
      const haystack = `${w.word} ${w.meaning} ${w.category}`.toLowerCase();
      return haystack.includes(query);
    })
    .map((w) => ({
      kind: 'word',
      id: w.id,
      title: w.word,
      subtitle: `${w.category} · ${w.meaning}`,
      href: `/vocabulary/${encodeURIComponent(w.id)}`,
    }));

  return [...rootMatches, ...wordMatches];
}
