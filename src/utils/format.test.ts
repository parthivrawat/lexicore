import { describe, it, expect } from 'vitest';
import {
  formatCategory,
  formatRootType,
  formatCategorySlug,
  truncateText,
  formatPronunciation,
  formatAccentName,
  getAccentFlag,
} from './format';

describe('format utilities', () => {
  describe('formatCategory', () => {
    it('returns translated category for known keys', () => {
      expect(formatCategory('greetings', 'en')).toBe('Greetings');
      expect(formatCategory('greetings', 'fr')).toBe('Salutations');
    });

    it('falls back to the raw key for unknown categories', () => {
      expect(formatCategory('unknown', 'en')).toBe('unknown');
    });
  });

  describe('formatRootType', () => {
    it('returns translated root type for known keys', () => {
      expect(formatRootType('prefix', 'en')).toBe('Prefix');
      expect(formatRootType('suffix', 'fr')).toBe('Suffixe');
    });

    it('falls back to the raw key for unknown root types', () => {
      expect(formatRootType('unknown', 'en')).toBe('unknown');
    });
  });

  describe('formatCategorySlug', () => {
    it('capitalizes hyphenated slugs', () => {
      expect(formatCategorySlug('daily-use-nouns')).toBe('Daily Use Nouns');
    });
  });

  describe('truncateText', () => {
    it('does not truncate short text', () => {
      expect(truncateText('hello', 10)).toBe('hello');
    });

    it('truncates long text with ellipsis', () => {
      expect(truncateText('hello world', 10)).toBe('hello w...');
    });
  });

  describe('formatPronunciation', () => {
    it('wraps IPA in slashes', () => {
      expect(formatPronunciation('həˈloʊ')).toBe('/həˈloʊ/');
    });

    it('returns an empty string for undefined', () => {
      expect(formatPronunciation(undefined)).toBe('');
    });
  });

  describe('formatAccentName', () => {
    it('returns the localized accent name', () => {
      expect(formatAccentName('american', 'en')).toBe('American');
      expect(formatAccentName('british', 'fr')).toBe('Britannique');
    });
  });

  describe('getAccentFlag', () => {
    it('returns the flag for an accent', () => {
      expect(getAccentFlag('american')).toBe('🇺🇸');
    });
  });
});
