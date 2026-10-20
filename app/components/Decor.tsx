type DecorProps = { className?: string };

/** Outlined asterisk, used as a soft background accent. */
export function SparkleOutline({ className }: DecorProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 3c2 7 3 10 6 12 3-2 6-3 13-3-3 5-4 8-3 11 3 1 6 3 8 8-7 0-10-1-12 1 0 3 1 6 5 12-6-1-9-3-11-5-2 1-4 4-6 10-2-6-4-9-6-10-2 2-5 4-11 5 4-6 5-9 5-12-2-2-5-1-12-1 2-5 5-7 8-8 1-3 0-6-3-11 7 0 10 1 13 3 3-2 4-5 6-12z" />
    </svg>
  );
}

/** Solid eight-point burst. */
export function Burst({ className }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
      <path d="M24 0l4.5 14.2L40.9 7l-7.2 12.5L48 24l-14.3 4.5L40.9 41l-12.4-7.2L24 48l-4.5-14.2L7.1 41l7.2-12.5L0 24l14.3-4.5L7.1 7l12.4 7.2L24 0z" />
    </svg>
  );
}

/** Hand-drawn arrow that points toward the call to action. */
export function ScribbleArrow({ className }: DecorProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 24C14 6 22 4 28 14c5 9 8 24 14 24s7-18 15-20c9-2 18 3 28 8" />
      <path d="M86 20l18 6-14 11" />
    </svg>
  );
}

/** Looping line used beside the "Our Work" heading. */
export function Loop({ className }: DecorProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 170 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="4" cy="64" r="3.5" fill="currentColor" />
      <path d="M6 62C40 30 78 20 100 28c24 9 14 36-8 46-18 8-34 2-30-12 4-14 28-10 48 2 22 14 30 32 30 52" />
    </svg>
  );
}

/** Looping ring drawn around the end of the hero headline. */
export function Swirl({ className }: DecorProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 12c30-14 90-10 104 8 10 14-18 26-52 26S4 40 14 26c10-12 48-14 80-6" />
      <path d="M12 20c26-10 74-8 90 6" />
    </svg>
  );
}

export function PlusMark({ className }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      <path d="M15 2h10v13h13v10H25v13H15V25H2V15h13z" opacity="0.85" />
    </svg>
  );
}
