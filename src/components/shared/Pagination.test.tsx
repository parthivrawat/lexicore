import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { Pagination } from './Pagination';

function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </SettingsProvider>
  );
}

describe('Pagination', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders page number buttons for total pages', () => {
    render(<Pagination totalItems={50} />, { wrapper });

    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
  });

  it('updates the current page when a page number is clicked', () => {
    render(<Pagination totalItems={50} />, { wrapper });

    const pageTwoButton = screen.getByRole('button', { name: '2' });
    fireEvent.click(pageTwoButton);

    expect(pageTwoButton.className).toContain('gradient-primary');
  });

  it('disables the previous button on the first page', () => {
    render(<Pagination totalItems={50} />, { wrapper });

    const previousButton = screen.getByText('Previous').closest('button');
    expect(previousButton).toBeDisabled();
  });

  it('disables the next button on the last page', () => {
    render(
      <MemoryRouter initialEntries={['/?page=3']}>
        <SettingsProvider>
          <Pagination totalItems={50} />
        </SettingsProvider>
      </MemoryRouter>
    );

    const nextButton = screen.getByText('Next').closest('button');
    expect(nextButton).toBeDisabled();
  });
});
