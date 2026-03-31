import { SearchFilter } from '@/types';
import { Button } from '@/components/ui/Button';

interface SearchFiltersProps {
  activeFilter: SearchFilter;
  onFilterChange: (filter: SearchFilter) => void;
}

const filters: { value: SearchFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'root', label: 'Roots' },
  { value: 'word', label: 'Words' },
];

export function SearchFilters({ activeFilter, onFilterChange }: SearchFiltersProps) {
  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className="capitalize"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
