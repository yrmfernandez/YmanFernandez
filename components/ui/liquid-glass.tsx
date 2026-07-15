"use client";

import React from "react";

/**
 * Apple-style "liquid glass" surface, adapted from the reference component to
 * this site's tokens. The refraction comes from the shared SVG filter below
 * (mount <GlassFilter/> once, in the root layout). Content sits on an
 * unfiltered top layer so text stays crisp.
 */
interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        boxShadow:
          "var(--shadow-lg), inset 0 1px 0 var(--glass-highlight)",
        ...style,
      }}
    >
      {/* Refraction layer — blurs and distorts whatever is behind the panel. */}
      <div
        className="absolute inset-0 z-0 rounded-[inherit]"
        style={{
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
        aria-hidden="true"
      />
      {/* Tint layer — theme-aware translucent fill. */}
      <div
        className="absolute inset-0 z-10 rounded-[inherit]"
        style={{ background: "var(--glass-bg)" }}
        aria-hidden="true"
      />
      {/* Sheen layer — the liquid edge highlight. */}
      <div
        className="absolute inset-0 z-20 rounded-[inherit]"
        style={{
          boxShadow:
            "inset 2px 2px 1px -1px var(--glass-highlight), inset -1px -1px 1px 0 var(--glass-highlight)",
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );
};

/**
 * The distortion filter. Render exactly once near the root so every
 * LiquidGlass on the page can reference `url(#glass-distortion)`.
 */
export const GlassFilter: React.FC = () => (
  <svg
    aria-hidden="true"
    style={{ position: "absolute", width: 0, height: 0 }}
  >
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="120"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);
