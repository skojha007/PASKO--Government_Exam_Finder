'use client';

import * as React from 'react';
import { ExternalLink, ChevronRight, GraduationCap, CalendarClock, MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Exam } from '@/lib/exams-data';
import { formatDate, daysUntil, daysSince, type ExamStatus } from '@/lib/exam-utils';

interface ExamCardProps {
  exam: Exam;
  status: ExamStatus;
  today: Date;
}

const CATEGORY_BADGE: Record<string, string> = {
  UPSC: 'border-ink/30 bg-ink/5 text-ink',
  'State PCS': 'border-ink/30 bg-ink/5 text-ink',
  SSC: 'border-seal/30 bg-seal/5 text-seal',
  Police: 'border-rust/30 bg-rust/5 text-rust',
  Teacher: 'border-amber/40 bg-amber/10 text-amber',
  Railways: 'border-ink/30 bg-ink/5 text-ink',
  Banking: 'border-seal/30 bg-seal/5 text-seal',
  Other: 'border-ink/20 bg-ink/5 text-ink',
};

function DateChip({
  exam,
  status,
  today,
}: {
  exam: Exam;
  status: ExamStatus;
  today: Date;
}) {
  if (status === 'open') {
    const left = daysUntil(exam.closeDate, today);
    return (
      <div className="font-mono text-[11px] leading-tight text-seal">
        <div className="font-semibold uppercase tracking-wide">Open now</div>
        <div className="text-ink-3">
          Closes {formatDate(exam.closeDate)} · {left}d left
        </div>
      </div>
    );
  }
  if (status === 'opening') {
    const inDays = daysUntil(exam.openDate, today);
    return (
      <div className="font-mono text-[11px] leading-tight text-amber">
        <div className="font-semibold uppercase tracking-wide">
          Opens {formatDate(exam.openDate)}
          {exam.possible ? ' (possible)' : ''}
        </div>
        <div className="text-ink-3">in {inDays} days</div>
      </div>
    );
  }
  // closed
  const ago = daysSince(exam.closeDate, today);
  return (
    <div className="font-mono text-[11px] leading-tight text-rust">
      <div className="font-semibold uppercase tracking-wide">Closed</div>
      <div className="text-ink-3">
        {formatDate(exam.closeDate)} · {ago}d ago
      </div>
    </div>
  );
}

export function ExamCard({ exam, status, today }: ExamCardProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <article
      className={cn(
        'notice-card relative flex flex-col gap-3 rounded-lg p-4 sm:p-5',
        'animate-fade-up'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <Badge
          variant="outline"
          className={cn(
            'shrink-0 rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
            CATEGORY_BADGE[exam.category] ?? CATEGORY_BADGE.Other
          )}
        >
          {exam.category}
        </Badge>
        <DateChip exam={exam} status={status} today={today} />
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          {exam.name}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-ink-2">{exam.body}</p>
      </div>

      <p className="text-sm leading-relaxed text-ink-2">{exam.description}</p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="focus-ring h-8 rounded-sm border-ink/25 bg-paper text-ink hover:bg-ink hover:text-paper"
            >
              <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
              Eligibility
            </Button>
          </DialogTrigger>
          <DialogContent className="notice-card border-line sm:rounded-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-xl text-ink">
                {exam.name}
              </DialogTitle>
              <DialogDescription className="text-ink-2">
                Minimum eligibility for this examination. Always confirm the
                latest version on the official notification.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 py-1">
              <EligibilityRow
                icon={<GraduationCap className="h-4 w-4" />}
                label="Education"
                value={exam.eligibility.education}
              />
              <EligibilityRow
                icon={<CalendarClock className="h-4 w-4" />}
                label="Age limits"
                value={exam.eligibility.age}
              />
              {exam.eligibility.domicile && (
                <EligibilityRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Domicile"
                  value={exam.eligibility.domicile}
                />
              )}
            </div>
            <div className="mt-1 flex items-center justify-between gap-2 border-t border-dashed border-line pt-3">
              <a
                href={exam.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-saffron hover:underline focus-ring rounded-sm"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Open official source
              </a>
              <span className="font-mono text-[10px] text-ink-3">
                {exam.scope === 'central' ? 'Central · All India' : 'State'}
              </span>
            </div>
          </DialogContent>
        </Dialog>

        <a
          href={exam.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-saffron hover:underline focus-ring rounded-sm"
        >
          Official
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function EligibilityRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 rounded-md border border-line bg-paper-2/40 p-3">
      <div className="mt-0.5 text-saffron">{icon}</div>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-3">
          {label}
        </div>
        <div className="text-sm leading-relaxed text-ink">{value}</div>
      </div>
    </div>
  );
}
