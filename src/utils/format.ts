import { CATEGORIES, ROOT_TYPES, ACCENT_NAMES, ACCENT_FLAGS } from '@/constants';
import { SearchItem, AccentType } from '@/types';

export function formatCategory(category: string, language: 'en' | 'fr' = 'en'): string {
  const categoryData = CATEGORIES[category as keyof typeof CATEGORIES];
  if (typeof categoryData === 'string') {
    return categoryData;
  }
  return categoryData?.[language] || category;
}

export function formatRootType(type: string, language: 'en' | 'fr' = 'en'): string {
  const typeData = ROOT_TYPES[type as keyof typeof ROOT_TYPES];
  if (typeof typeData === 'string') {
    return typeData;
  }
  return typeData?.[language] || type;
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

export function formatAccentName(accent: AccentType, language: 'en' | 'fr' = 'en'): string {
  return ACCENT_NAMES[accent][language];
}

export function getAccentFlag(accent: AccentType): string {
  return ACCENT_FLAGS[accent];
}
