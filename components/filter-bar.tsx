'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { CATEGORIES, type ExamCategory } from '@/lib/exams-data';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  activeCategories: Set<ExamCategory>;
  onToggleCategory: (c: ExamCategory) => void;
  onClearAll: () => void;
  resultCount: number;
}

export function FilterBar({
  query,
  onQueryChange,
  activeCategories,
  onToggleCategory,
  onClearAll,
  resultCount,
}: FilterBarProps) {
  const hasFilters = query.trim().length > 0 || activeCategories.size > 0;

  return (
    <div className="rounded-lg border border-line bg-paper-2/40 p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by exam name, body or keyword…"
            aria-label="Search exams"
            className="focus-ring h-11 w-full rounded-md border border-line bg-paper pl-9 pr-9 text-sm text-ink placeholder:text-ink-3"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              aria-label="Clear search"
              className="focus-ring absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-ink-3 hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs text-ink-3">
          <span className="font-mono">
            {resultCount} {resultCount === 1 ? 'exam' : 'exams'}
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={onClearAll}
              className="focus-ring rounded-sm font-semibold text-saffron hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div
        role="group"
        aria-label="Filter by category"
        className="mt-4 flex flex-wrap gap-x-4 gap-y-2"
      >
        {CATEGORIES.map((c) => {
          const checked = activeCategories.has(c);
          return (
            <label
              key={c}
              className={cn(
                'focus-ring flex cursor-pointer items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors',
                checked
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line bg-paper text-ink hover:border-ink/40'
              )}
            >
              <Checkbox
                checked={checked}
                onCheckedChange={() => onToggleCategory(c)}
                className={cn(
                  'h-3.5 w-3.5 rounded-sm border',
                  checked
                    ? 'border-paper bg-paper text-ink'
                    : 'border-ink/40 text-ink'
                )}
              />
              <span>{c}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
