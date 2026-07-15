import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium no-underline transition-colors";

const variants: Record<Variant, string> = {
  // `text-paper` flips with the theme, so it stays readable on the accent
  // in both light (light text on pine) and dark (dark text on mint).
  primary: "bg-accent text-paper hover:bg-accent-strong",
  ghost: "border border-line text-ink hover:border-accent hover:text-accent-strong",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const className = `${base} ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
