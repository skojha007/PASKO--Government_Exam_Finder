import { cn } from '@/lib/utils';

interface PaskoSealProps {
  className?: string;
  /** size in px */
  size?: number;
}

/**
 * Original circular seal / wordmark for PASKO. Not based on any official
 * government emblem — an original design: a double-rim stamp with the
 * organisation name around the rim, a dashed inner ring, a serif "PASKO"
 * wordmark, and a small five-point spark at the top.
 */
export function PaskoSeal({ className, size = 96 }: PaskoSealProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={cn('text-ink', className)}
      role="img"
      aria-label="PASKO seal"
    >
      <defs>
        <path
          id="pasko-rim"
          d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
          fill="none"
        />
      </defs>
      {/* outer rim */}
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="51" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* rim text */}
      <text
        fontSize="6.2"
        letterSpacing="2.2"
        fill="currentColor"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight="600"
      >
        <textPath href="#pasko-rim" startOffset="2%">
          GOVERNMENT EXAM FINDER • REPUBLIC OF INDIA •
        </textPath>
      </text>
      {/* dashed inner ring */}
      <circle
        cx="60"
        cy="60"
        r="41"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.7"
      />
      {/* spark at top */}
      <path
        d="M 60 33 l 2.2 5.6 l 5.8 0.4 l -4.5 3.7 l 1.6 5.6 l -5.1 -3.1 l -5.1 3.1 l 1.6 -5.6 l -4.5 -3.7 l 5.8 -0.4 z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* wordmark */}
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        letterSpacing="1"
        fill="currentColor"
        fontFamily="var(--font-display), Georgia, serif"
      >
        PASKO
      </text>
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fontSize="4.6"
        letterSpacing="1.4"
        fill="currentColor"
        opacity="0.75"
        fontFamily="var(--font-mono), monospace"
      >
        EST. 2026
      </text>
      {/* small bottom flourish */}
      <path
        d="M 48 84 L 72 84"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}
