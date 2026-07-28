'use client';

import * as React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { EXAMS, type ExamCategory } from '@/lib/exams-data';
import { STATE_NAME } from '@/lib/states';
import { PaskoHeader } from '@/components/pasko-header';
import { StateSelector } from '@/components/state-selector';
import { FilterBar } from '@/components/filter-bar';
import { ExamBoard } from '@/components/exam-board';

const STATE_KEY = 'pasko:selectedState';

export default function Home() {
  const [stateCode, setStateCode] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState('');
  const [activeCategories, setActiveCategories] = React.useState<
    Set<ExamCategory>
  >(new Set());
  const [today] = React.useState(() => new Date());

  // Restore selection from localStorage
  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STATE_KEY);
      if (saved && STATE_NAME[saved]) setStateCode(saved);
    } catch {
      // ignore
    }
  }, []);

  const handleSelectState = React.useCallback((code: string) => {
    setStateCode(code);
    try {
      window.localStorage.setItem(STATE_KEY, code);
    } catch {
      // ignore
    }
    // reset filters when changing state
    setQuery('');
    setActiveCategories(new Set());
  }, []);

  const handleClearAll = React.useCallback(() => {
    setQuery('');
    setActiveCategories(new Set());
  }, []);

  const toggleCategory = React.useCallback((c: ExamCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  }, []);

  // Filter by search + categories
  const filteredExams = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return EXAMS.filter((e) => {
      if (activeCategories.size > 0 && !activeCategories.has(e.category))
        return false;
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        e.body.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategories]);

  if (!stateCode) {
    return (
      <div className="min-h-screen paper-grain">
        <PaskoHeader onChangeState={() => {}} />
        <StateSelector onSelect={handleSelectState} />
        <footer className="mx-auto w-full max-w-4xl px-4 pb-10 text-center text-xs text-ink-3">
          <p>
            PASKO aggregates publicly available notifications. Data is
            refreshed periodically — always verify on the official source.
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen paper-grain">
      <PaskoHeader stateCode={stateCode} onChangeState={() => setStateCode(null)} />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {/* State heading */}
        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
              Showing exams for
            </p>
            <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {STATE_NAME[stateCode]}
            </h1>
          </div>
          <p className="text-xs text-ink-3">
            Central exams are shown alongside state-specific notifications.
          </p>
        </div>

        {/* Sample-data banner */}
        <div
          role="note"
          className="mb-5 flex items-start gap-3 rounded-md border border-amber/40 bg-amber/5 px-4 py-3 text-sm text-ink-2"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
          <p>
            <span className="font-semibold text-ink">Sample data.</span>{' '}
            Dates shown are periodically-updated placeholders and may not
            reflect live notifications. Please verify final dates on the{' '}
            <span className="font-semibold">official source</span> linked on
            each card before applying.
          </p>
        </div>

        {/* Filter bar */}
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          activeCategories={activeCategories}
          onToggleCategory={toggleCategory}
          onClearAll={handleClearAll}
          resultCount={filteredExams.length}
        />

        {/* Board */}
        <div className="relative mt-6">
          <ExamBoard
            exams={filteredExams}
            stateCode={stateCode}
            today={today}
          />
        </div>

        {/* Last-updated line */}
        <div className="mt-10 flex items-center justify-center gap-2 border-t border-dashed border-line pt-4 text-center text-[11px] text-ink-3">
          <RefreshCw className="h-3 w-3" />
          <span className="font-mono">
            Last refreshed {today.toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
            . Data is not scraped live in the browser.
          </span>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-2 text-center text-xs text-ink-3 sm:px-6">
        <p>
          PASKO Government Exam Finder · An independent notice board for Indian government exam
          aspirants. Not affiliated with any government body.
        </p>
      </footer>
    </div>
  );
}
