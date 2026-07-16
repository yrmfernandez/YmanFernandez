"use client";

import { useState } from "react";

/**
 * Hero portrait. Expects an image at /public/portrait.png (a transparent HD
 * cutout looks best, but a normal photo works too — the frame contains it).
 * Until that file exists, it shows an intentional monogram placeholder so the
 * layout never looks broken.
 */
export function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      {/* Accent glow behind the frame for depth. */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/25 blur-3xl"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-accent-soft to-paper-raised shadow-[var(--shadow-lg)]">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/portrait.png"
            alt="Yman Rey M. Fernandez"
            className="h-full w-full object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <span className="font-serif text-7xl font-semibold text-accent-strong">
              YF
            </span>
            <span className="rounded-full border border-line bg-paper/60 px-3 py-1 font-mono text-[11px] text-muted">
              add public/portrait.png
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
