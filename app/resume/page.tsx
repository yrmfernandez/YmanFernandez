import type { Metadata } from "next";
import { site } from "@/lib/site";
import { summary, education, thesis, skillGroups } from "@/lib/content";
import { getAllProjects } from "@/lib/projects";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — ${site.role}.`,
};

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function ResumePage() {
  const projects = getAllProjects();

  return (
    <section className="container-page max-w-3xl py-14 sm:py-16">
      {/* Header */}
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
        <div>
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-1 text-lg text-muted">{site.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.phones.join(" · ")}</span>
            <span>{site.location}</span>
            <a href={site.socials.github} target="_blank" rel="noreferrer">
              github.com/yrmfernandez
            </a>
          </div>
        </div>
        <PrintButton />
      </header>

      {/* Summary */}
      <div className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-wider text-accent-strong">
          Summary
        </h2>
        <p className="mt-3 leading-relaxed text-ink/90">{summary}</p>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-wider text-accent-strong">
          Skills
        </h2>
        <dl className="mt-3 flex flex-col gap-2">
          {skillGroups.map((group) => (
            <div key={group.name} className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="w-44 shrink-0 text-sm font-medium text-ink">
                {group.name}
              </dt>
              <dd className="text-sm text-muted">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Projects */}
      <div className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-wider text-accent-strong">
          Selected projects
        </h2>
        <div className="mt-3 flex flex-col gap-5">
          {projects.map((p) => (
            <div key={p.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <span className="font-mono text-xs text-muted tabular-nums">
                  {formatDate(p.date)}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink/90">
                {p.summary}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                <span>{p.stack.join(" · ")}</span>
                {p.links.demo && (
                  <a href={p.links.demo} target="_blank" rel="noreferrer">
                    ↗ demo
                  </a>
                )}
                {p.links.repo && (
                  <a href={p.links.repo} target="_blank" rel="noreferrer">
                    ↗ code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-wider text-accent-strong">
          Education
        </h2>
        <div className="mt-3">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="font-serif text-lg font-semibold text-ink">
              {education.degree}
            </h3>
            <span className="font-mono text-xs text-muted">
              {education.year}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {education.school}
            {education.honors ? ` · ${education.honors}` : ""}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/90">
            <span className="font-medium text-ink">Thesis: </span>
            {thesis.title}
          </p>
        </div>
      </div>
    </section>
  );
}
