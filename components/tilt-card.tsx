"use client";

import { useRef, type ReactNode } from "react";

/**
 * Adds a subtle mouse-driven 3D tilt to its child. No-ops for users who
 * prefer reduced motion, and on devices without a fine pointer the effect
 * simply never triggers (no hover), leaving the CSS lift in place.
 */
export function TiltCard({ children }: { children: ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);

  function prefersReducedMotion() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = innerRef.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const max = 6; // degrees
    el.style.transform = `rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
  }

  function reset() {
    const el = innerRef.current;
    if (el) el.style.transform = "";
  }

  return (
    <div
      className="h-full [perspective:900px]"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div ref={innerRef} className="h-full [transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  );
}
