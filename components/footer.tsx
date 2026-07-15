import Link from "next/link";
import { nav, site } from "@/lib/site";

const socialLinks = [
  { label: "GitHub", href: site.socials.github },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Kaggle", href: site.socials.kaggle },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <div className="font-serif text-lg font-semibold text-ink">
            {site.shortName}
            <span className="text-accent">.</span>
          </div>
          <p className="mt-2 text-sm text-muted">{site.role}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block font-mono text-sm text-accent-strong"
          >
            {site.email}
          </a>
        </div>

        <div className="flex gap-14">
          <nav aria-label="Footer">
            <div className="eyebrow mb-3 text-muted">Site</div>
            <ul className="flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted no-underline hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="eyebrow mb-3 text-muted">Elsewhere</div>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted no-underline hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-page border-t border-line py-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
