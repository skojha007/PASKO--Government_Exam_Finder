import Link from 'next/link';
import { ArrowLeft, Database, ShieldCheck, CalendarClock } from 'lucide-react';
import { PaskoSeal } from '@/components/pasko-seal';

export const metadata = {
  title: 'About — PASKO Government Exam Finder',
  description:
    'PASKO aggregates publicly available Indian government exam notifications. Data is refreshed periodically, not scraped live in the browser.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen paper-grain">
      <header className="border-b border-line bg-paper/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-4xl items-center gap-3 px-4 py-3 sm:px-6">
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
          <Link
            href="/"
            className="focus-ring ml-auto inline-flex items-center gap-1.5 rounded-md border border-line bg-paper px-2.5 py-1.5 text-xs font-medium text-ink hover:border-ink/40"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to exams
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col items-center text-center">
          <PaskoSeal size={84} />
          <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            About PASKO Government Exam Finder
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2 sm:text-base">
            A calm, notice-board style index of Indian government exam
            notifications — sorted by what is open now, opening soon, or
            recently closed.
          </p>
        </div>

        <article className="prose-pasko mt-10 space-y-6">
          <Section
            icon={<Database className="h-4 w-4" />}
            title="What PASKO does"
          >
            PASKO aggregates publicly available recruitment notifications from
            official sources — UPSC, State Public Service Commissions, SSC,
            state police recruitment boards, teacher eligibility boards,
            Railway Recruitment Boards, and banking recruiters like IBPS and
            SBI. It groups them into three simple buckets so you can quickly
            see what to act on this week.
          </Section>

          <Section
            icon={<CalendarClock className="h-4 w-4" />}
            title="Periodically updated, not live-scraped"
          >
            Data is refreshed periodically through an editorial pipeline — it
            is <strong>not</strong> scraped live in your browser. Every card
            links to its official source so you can verify the final dates and
            eligibility before applying. The dates shown on this site are
            sample placeholders intended to be replaced by a real feed.
          </Section>

          <Section
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Independent and not affiliated"
          >
            PASKO is an independent tool for aspirants. It is not affiliated
            with, endorsed by, or an official channel of any government body.
            It does not reproduce any official government emblem — the PASKO
            seal is an original wordmark designed for this site.
          </Section>
        </article>

        <div className="mt-10 rounded-md border border-line bg-paper-2/40 p-4 text-sm text-ink-2">
          <p className="font-semibold text-ink">A note on accuracy</p>
          <p className="mt-1">
            Always cross-check the official notification before applying.
            Recruitment timelines change, and some notifications are released
            earlier or later than the previous year’s cycle.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md bg-saffron px-4 py-2 text-sm font-semibold text-paper hover:bg-saffron-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the notice board
          </Link>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-3xl px-4 pb-10 text-center text-xs text-ink-3 sm:px-6">
        <p>PASKO Government Exam Finder · An independent notice board for Indian government exam aspirants.</p>
      </footer>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-line bg-paper p-5 sm:p-6">
      <div className="mb-2 flex items-center gap-2 text-saffron">
        {icon}
        <h2 className="font-display text-lg font-semibold text-ink">
          {title}
        </h2>
      </div>
      <div className="text-sm leading-relaxed text-ink-2 sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}
