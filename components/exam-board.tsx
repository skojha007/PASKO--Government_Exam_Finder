'use client';

import * as React from 'react';
import { Inbox } from 'lucide-react';
import type { Exam } from '@/lib/exams-data';
import {
  getExamStatus,
  isRelevantToState,
  type ExamStatus,
} from '@/lib/exam-utils';
import { ExamCard } from '@/components/exam-card';
import { cn } from '@/lib/utils';

interface ExamBoardProps {
  exams: Exam[];
  stateCode: string;
  today: Date;
}

interface Column {
  key: ExamStatus;
  title: string;
  subtitle: string;
  accent: string;
  dot: string;
  empty: string;
}

const COLUMNS: Column[] = [
  {
    key: 'open',
    title: 'Open Now',
    subtitle: 'Forms accepting submissions today',
    accent: 'text-seal',
    dot: 'bg-seal',
    empty: 'No forms are open right now.',
  },
  {
    key: 'opening',
    title: 'Opening in 30 Days',
    subtitle: 'Expected to open in the next 30 days',
    accent: 'text-amber',
    dot: 'bg-amber',
    empty: 'Nothing expected in the next 30 days.',
  },
  {
    key: 'closed',
    title: 'Closed Recently',
    subtitle: 'Forms that closed in the last 30 days',
    accent: 'text-rust',
    dot: 'bg-rust',
    empty: 'No forms closed in the last 30 days.',
  },
];

export function ExamBoard({ exams, stateCode, today }: ExamBoardProps) {
  const buckets: Record<ExamStatus, Exam[]> = {
    open: [],
    opening: [],
    closed: [],
    upcoming: [],
    archived: [],
  };

  for (const exam of exams) {
    if (!isRelevantToState(exam, stateCode)) continue;
    const status = getExamStatus(exam, today);
    buckets[status].push(exam);
  }

  const counts: Record<ExamStatus, number> = {
    open: buckets.open.length,
    opening: buckets.opening.length,
    closed: buckets.closed.length,
    upcoming: buckets.upcoming.length,
    archived: buckets.archived.length,
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr] lg:gap-0">
      {COLUMNS.map((col, i) => (
        <div
          key={col.key}
          className={cn(
            'flex flex-col',
            i > 0 && 'lg:pl-6',
            i < COLUMNS.length - 1 && 'lg:pr-6'
          )}
        >
          {/* Column header */}
          <div className="mb-4 flex items-center gap-2">
            <span className={cn('h-2 w-2 rounded-full', col.dot)} aria-hidden />
            <h2 className={cn('font-display text-xl font-semibold', col.accent)}>
              {col.title}
            </h2>
            <span className="ml-auto font-mono text-xs text-ink-3">
              {counts[col.key]}
            </span>
          </div>
          <p className="mb-4 text-xs text-ink-3">{col.subtitle}</p>

          {/* Perforated divider before column (desktop) */}
          {i > 0 && (
            <div
              aria-hidden
              className="perforation-v absolute -ml-3 hidden h-[calc(100%-6rem)] lg:block"
            />
          )}

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {buckets[col.key].length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-paper-2/30 px-4 py-10 text-center">
                <Inbox className="h-5 w-5 text-ink-3" />
                <p className="text-xs text-ink-3">{col.empty}</p>
              </div>
            ) : (
              buckets[col.key].map((exam) => (
                <ExamCard
                  key={exam.id}
                  exam={exam}
                  status={col.key}
                  today={today}
                />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
