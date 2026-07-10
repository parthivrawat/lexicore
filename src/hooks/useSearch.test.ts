import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { useSearch } from './useSearch';

type Item = { id: string; word: string };

const data: Item[] = [
  { id: '1', word: 'hello' },
  { id: '2', word: 'world' },
  { id: '3', word: 'help' },
];

const normalize = (item: Item) => ({
  original: item,
  word: item.word.toLowerCase(),
});

const relevanceCalculator = (item: { original: Item; word: string }, term: string) => {
  const termLower = term.toLowerCase();
  return item.word.startsWith(termLower)
    ? { score: 10, matchFields: ['word'] }
    : { score: 0, matchFields: [] };
};

function wrapper({ children }: { children: React.ReactNode }) {
  return React.createElement(SettingsProvider, null, children);
}

describe('useSearch', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initializes with an empty query and no results', () => {
    const { result } = renderHook(() => useSearch({ data, normalize, relevanceCalculator }), {
      wrapper,
    });

    expect(result.current.query).toBe('');
    expect(result.current.results).toEqual([]);
    expect(result.current.hasQuery).toBe(false);
  });

  it('filters results after the debounce delay', () => {
    const { result } = renderHook(() => useSearch({ data, normalize, relevanceCalculator }), {
      wrapper,
    });

    act(() => {
      result.current.handleQueryChange('hel');
    });

    expect(result.current.query).toBe('hel');
    expect(result.current.results).toEqual([]);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.results).toHaveLength(2);
    expect(result.current.resultCount).toBe(2);
  });

  it('does not search when the query is below the configured minimum length', () => {
    localStorage.setItem('app-settings', JSON.stringify({ minSearchQueryLength: 2 }));

    const { result } = renderHook(() => useSearch({ data, normalize, relevanceCalculator }), {
      wrapper,
    });

    act(() => {
      result.current.handleQueryChange('h');
    });
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.results).toEqual([]);

    act(() => {
      result.current.handleQueryChange('he');
    });
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.results.length).toBeGreaterThan(0);
  });

  it('clears the query and results immediately', () => {
    const { result } = renderHook(() => useSearch({ data, normalize, relevanceCalculator }), {
      wrapper,
    });

    act(() => {
      result.current.handleQueryChange('hel');
    });
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.results.length).toBeGreaterThan(0);

    act(() => {
      result.current.clearSearch();
    });

    expect(result.current.query).toBe('');
    expect(result.current.results).toEqual([]);
    expect(result.current.hasQuery).toBe(false);
  });
});
