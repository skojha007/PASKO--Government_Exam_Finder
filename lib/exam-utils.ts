import type { Exam } from './exams-data';

export type ExamStatus =
  | 'open'
  | 'opening'
  | 'closed'
  | 'upcoming'
  | 'archived';

const MS_PER_DAY = 86400000;

function parseDate(iso: string): Date {
  return new Date(`${iso}T00:00:00`);
}

export function getExamStatus(exam: Exam, today: Date): ExamStatus {
  const open = parseDate(exam.openDate).getTime();
  const close = parseDate(exam.closeDate).getTime() + 86399999; // end of close day
  const t = today.getTime();

  if (t < open) {
    const diffDays = (open - t) / MS_PER_DAY;
    return diffDays <= 30 ? 'opening' : 'upcoming';
  }
  if (t >= open && t <= close) return 'open';
  const sinceDays = (t - close) / MS_PER_DAY;
  return sinceDays <= 30 ? 'closed' : 'archived';
}

export function formatDate(iso: string): string {
  const d = parseDate(iso);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function daysUntil(iso: string, today: Date): number {
  return Math.ceil((parseDate(iso).getTime() - today.getTime()) / MS_PER_DAY);
}

export function daysSince(iso: string, today: Date): number {
  return Math.floor((today.getTime() - parseDate(iso).getTime()) / MS_PER_DAY);
}

export function isRelevantToState(exam: Exam, stateCode: string): boolean {
  if (stateCode === 'AI') return exam.scope === 'central';
  return exam.scope === 'central' || exam.states.includes(stateCode);
}
