import { CATEGORIES, ROOT_TYPES } from '@/constants';
import { SearchItem } from '@/types';

export function formatCategory(category: string): string {
  return CATEGORIES[category as keyof typeof CATEGORIES] || category;
}

export function formatRootType(type: string): string {
  return ROOT_TYPES[type as keyof typeof ROOT_TYPES] || type;
}

export function formatCategorySlug(category: string): string {
  return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

export function formatPronunciation(ipa?: string): string {
  if (!ipa) return '';
  return `/${ipa}/`;
}

export function getSearchResultId(item: SearchItem): string {
  return `${item.kind}:${item.id}`;
}
