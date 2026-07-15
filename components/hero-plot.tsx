/**
 * Decorative ambient plot for the hero. Abstract, not real data — kept
 * faint and marked aria-hidden so it reads as texture, not a claim.
 */
export function HeroPlot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* faint grid */}
      <g stroke="var(--line)" strokeWidth="1">
        <line x1="0" y1="50" x2="320" y2="50" />
        <line x1="0" y1="100" x2="320" y2="100" />
        <line x1="0" y1="150" x2="320" y2="150" />
      </g>

      {/* area fill under the trend line */}
      <path
        d="M0 160 L53 138 L107 150 L160 96 L213 108 L267 54 L320 40 L320 200 L0 200 Z"
        fill="var(--accent)"
        opacity="0.08"
      />

      {/* trend line */}
      <path
        d="M0 160 L53 138 L107 150 L160 96 L213 108 L267 54 L320 40"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* data points, with the endpoint emphasized */}
      <g fill="var(--paper)" stroke="var(--accent)" strokeWidth="2">
        <circle cx="53" cy="138" r="3.5" />
        <circle cx="107" cy="150" r="3.5" />
        <circle cx="160" cy="96" r="3.5" />
        <circle cx="213" cy="108" r="3.5" />
        <circle cx="267" cy="54" r="3.5" />
      </g>
      <circle cx="320" cy="40" r="5" fill="var(--accent)" />
    </svg>
  );
}
