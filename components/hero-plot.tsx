"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Decorative ambient plot for the hero. Abstract, not real data. The trend
 * line draws itself in, points pop, the endpoint pulses, and the whole plot
 * gently floats — a "living" data motif. Static for reduced-motion users.
 */
const LINE = "M0 160 L53 138 L107 150 L160 96 L213 108 L267 54 L320 40";
const POINTS: [number, number][] = [
  [53, 138],
  [107, 150],
  [160, 96],
  [213, 108],
  [267, 54],
];

export function HeroPlot({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

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

      <motion.g
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={
          reduce
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* area fill under the trend line */}
        <motion.path
          d="M0 160 L53 138 L107 150 L160 96 L213 108 L267 54 L320 40 L320 200 L0 200 Z"
          fill="var(--accent)"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 1.1 }}
        />

        {/* trend line — draws in */}
        <motion.path
          d={LINE}
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {/* data points, staggered */}
        {POINTS.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="var(--paper)"
            stroke="var(--accent)"
            strokeWidth="2"
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + i * 0.12 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}

        {/* emphasized, pulsing endpoint */}
        <motion.circle
          cx="320"
          cy="40"
          fill="var(--accent)"
          initial={reduce ? false : { scale: 0 }}
          animate={
            reduce
              ? { scale: 1, r: 5 }
              : { scale: 1, r: [5, 6.5, 5], opacity: [1, 0.75, 1] }
          }
          transition={
            reduce
              ? { duration: 0.3 }
              : {
                  scale: { duration: 0.3, delay: 1.9 },
                  r: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2 },
                  opacity: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2 },
                }
          }
          style={{ transformOrigin: "320px 40px" }}
        />
      </motion.g>
    </svg>
  );
}
