"use client";

import { useState } from "react";

/**
 * Hero portrait — a frameless, background-removed cutout that stands directly
 * on the hero background (like a portfolio hero image), with a soft accent
 * glow behind it. Looks for /public/portrait.(png|jpg|jpeg|webp); until one
 * exists, shows a monogram placeholder so the layout never looks broken.
 */
const CANDIDATES = [
  "/portrait.png",
  "/portrait.jpg",
  "/portrait.jpeg",
  "/portrait.webp",
];

export function Portrait() {
  const [idx, setIdx] = useState(0);
  const exhausted = idx >= CANDIDATES.length;

  if (exhausted) {
    return (
      <div className="mx-auto flex aspect-[3/4] w-full max-w-xs items-center justify-center rounded-[2rem] border border-line bg-paper-raised">
        <span className="font-serif text-7xl font-semibold text-accent-strong">
          YF
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex w-full items-end justify-center lg:justify-end">
      {/* Soft accent glow behind the subject for depth / edge separation. */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -z-10 h-[70%] w-[85%] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={CANDIDATES[idx]}
        alt="Yman Rey M. Fernandez"
        onError={() => setIdx((i) => i + 1)}
        className="relative h-[24rem] w-auto max-w-none object-contain object-bottom sm:h-[28rem] lg:h-[36rem]"
        style={{
          filter: "drop-shadow(0 22px 26px rgba(20, 30, 25, 0.22))",
        }}
      />
    </div>
  );
}
