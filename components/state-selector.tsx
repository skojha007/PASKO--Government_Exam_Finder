'use client';

import * as React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { STATES } from '@/lib/states';
import { PaskoSeal } from '@/components/pasko-seal';
import { cn } from '@/lib/utils';

interface StateSelectorProps {
  onSelect: (code: string) => void;
}

export function StateSelector({ onSelect }: StateSelectorProps) {
  const [query, setQuery] = React.useState('');

  const filtered = STATES.filter((s) =>
    s.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const allIndia = filtered.find((s) => s.code === 'AI');
  const states = filtered.filter((s) => s.code !== 'AI' && !s.ut);
  const uts = filtered.filter((s) => s.ut);

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:py-16">
      <div className="flex flex-col items-center text-center">
        <div className="animate-seal-in">
          <PaskoSeal size={104} />
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          PASKO <span className="text-ink-2">Government Exam Finder</span>
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2 sm:text-base">
          A notice board for Indian government exam notifications. Pick your
          state to see forms that are open now, opening soon, or recently closed
          — for UPSC, State PCS, SSC, Police, Teacher, Railways and Banking
          recruitments.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-line bg-paper-2/40 p-4 sm:p-6">
        <label htmlFor="state-search" className="sr-only">
          Search states
        </label>
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
          <input
            id="state-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search states or union territories…"
            className="focus-ring h-11 w-full rounded-md border border-line bg-paper pl-9 pr-3 text-sm text-ink placeholder:text-ink-3"
          />
        </div>

        <div className="mt-5 space-y-5">
          {allIndia && (
            <StateGroup title="All India">
              <StateButton
                code={allIndia.code}
                name={allIndia.name}
                onSelect={onSelect}
              />
            </StateGroup>
          )}

          {states.length > 0 && (
            <StateGroup title="States">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {states.map((s) => (
                  <StateButton
                    key={s.code}
                    code={s.code}
                    name={s.name}
                    onSelect={onSelect}
                  />
                ))}
              </div>
            </StateGroup>
          )}

          {uts.length > 0 && (
            <StateGroup title="Union Territories">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {uts.map((s) => (
                  <StateButton
                    key={s.code}
                    code={s.code}
                    name={s.name}
                    onSelect={onSelect}
                  />
                ))}
              </div>
            </StateGroup>
          )}

          {filtered.length === 0 && (
            <p className="py-6 text-center text-sm text-ink-3">
              No states match “{query}”.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function StateGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">
          {title}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>
      {children}
    </div>
  );
}

function StateButton({
  code,
  name,
  onSelect,
}: {
  code: string;
  name: string;
  onSelect: (code: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(code)}
      className={cn(
        'focus-ring group flex items-center justify-between gap-2 rounded-md border border-line bg-paper px-3 py-2.5 text-left text-sm font-medium text-ink transition-colors',
        'hover:border-saffron hover:bg-saffron/5'
      )}
    >
      <span className="min-w-0">
        <span className="block truncate">{name}</span>
        <span className="font-mono text-[10px] uppercase text-ink-3">{code}</span>
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:text-saffron" />
    </button>
  );
}
