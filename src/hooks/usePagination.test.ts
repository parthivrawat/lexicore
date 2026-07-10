import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { usePagination } from './usePagination';

function wrapper({ children }: { children: React.ReactNode }) {
  return React.createElement(
    SettingsProvider,
    null,
    React.createElement(MemoryRouter, null, children)
  );
}

describe('usePagination', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('defaults to page 1 with derived pagination info', () => {
    const { result } = renderHook(() => usePagination(50), { wrapper });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(3);
    expect(result.current.itemsPerPage).toBe(20);
    expect(result.current.startIndex).toBe(0);
    expect(result.current.endIndex).toBe(20);
    expect(result.current.hasPreviousPage).toBe(false);
    expect(result.current.hasNextPage).toBe(true);
  });

  it('reads the page from URL search params', () => {
    const { result } = renderHook(() => usePagination(50), {
      wrapper: ({ children }: { children: React.ReactNode }) =>
        React.createElement(
          SettingsProvider,
          null,
          React.createElement(MemoryRouter, { initialEntries: ['/?page=2'] }, children)
        ),
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.hasPreviousPage).toBe(true);
  });

  it('navigates to a new page when setPage is called', () => {
    const { result } = renderHook(() => usePagination(50), { wrapper });

    act(() => {
      result.current.setPage(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.hasPreviousPage).toBe(true);
  });

  it('removes page param when navigating to page 1', () => {
    const { result } = renderHook(() => usePagination(50), {
      wrapper: ({ children }: { children: React.ReactNode }) =>
        React.createElement(
          SettingsProvider,
          null,
          React.createElement(MemoryRouter, { initialEntries: ['/?page=2'] }, children)
        ),
    });

    act(() => {
      result.current.setPage(1);
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.hasPreviousPage).toBe(false);
  });

  it('returns no pagination info when totalPages is 1 or less', () => {
    const { result } = renderHook(() => usePagination(5), { wrapper });

    expect(result.current.totalPages).toBe(1);
    expect(result.current.hasNextPage).toBe(false);
  });
});
