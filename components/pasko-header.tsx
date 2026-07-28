'use client';

import Link from 'next/link';
import { ArrowLeft, Info } from 'lucide-react';
import { PaskoSeal } from '@/components/pasko-seal';
import { STATE_NAME } from '@/lib/states';

interface PaskoHeaderProps {
  stateCode?: string;
  onChangeState: () => void;
}

export function PaskoHeader({ stateCode, onChangeState }: PaskoHeaderProps) {
  return (
    <header className="border-b border-line bg-paper/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2.5 rounded-md"
          aria-label="PASKO home"
        >
          <PaskoSeal size={40} />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-ink">
              PASKO <span className="text-ink-2">Government Exam Finder</span>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-3">
              Indian recruitment notifications
            </div>
          </div>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          {stateCode && (
            <button
              type="button"
              onClick={onChangeState}
              className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line bg-paper px-2.5 py-1.5 text-xs font-medium text-ink hover:border-ink/40"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Change state</span>
              <span className="sm:hidden">State</span>
              <span className="ml-1 max-w-[10rem] truncate font-mono text-[10px] uppercase text-ink-3">
                {STATE_NAME[stateCode] ?? stateCode}
              </span>
            </button>
          )}
          <Link
            href="/about"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line bg-paper px-2.5 py-1.5 text-xs font-medium text-ink hover:border-ink/40"
          >
            <Info className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">About</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
