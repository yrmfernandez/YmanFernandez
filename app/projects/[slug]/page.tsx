import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/lib/projects";
import { Mdx } from "@/components/mdx";
import { ButtonLink } from "@/components/button-link";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.meta.title,
    description: project.meta.summary,
  };
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const artifactLabels: Record<string, string> = {
  repo: "View code",
  demo: "Live demo",
  writeup: "Full write-up",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { meta, content } = project;
  const artifacts = Object.entries(meta.links).filter(([, href]) => href);
  const metrics = Object.entries(meta.metrics);

  return (
    <article className="container-page max-w-3xl py-14 sm:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted no-underline hover:text-ink"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
        All projects
      </Link>

      {/* Header */}
      <header className="mt-6 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-accent-strong"
            >
              {tag}
            </span>
          ))}
          {meta.date && (
            <span className="font-mono text-[11px] text-muted">
              {formatDate(meta.date)}
            </span>
          )}
        </div>

        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{meta.summary}</p>
      </header>

      {/* Meta panel: metrics + stack + artifacts */}
      <div className="mt-8 grid gap-8 border-b border-line pb-8 sm:grid-cols-[1fr_auto] sm:gap-12">
        <div className="flex flex-col gap-6">
          {metrics.length > 0 && (
            <div>
              <p className="eyebrow mb-2.5">Key results</p>
              <div className="flex flex-wrap gap-6">
                {metrics.map(([label, value]) => (
                  <div key={label}>
                    <div className="font-serif text-2xl font-semibold text-ink tabular-nums">
                      {value}
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="eyebrow mb-2.5">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {meta.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {artifacts.length > 0 && (
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="eyebrow mb-1 sm:hidden">Artifacts</p>
            {artifacts.map(([key, href]) => (
              <ButtonLink key={key} href={href} variant="ghost" external>
                {artifactLabels[key] ?? key}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>

      {/* Case-study body */}
      <div className="mt-4">
        <Mdx source={content} />
      </div>

      {/* Footer nav */}
      <div className="mt-14 border-t border-line pt-8">
        <Link
          href="/projects"
          className="font-mono text-sm text-accent-strong no-underline hover:underline"
        >
          ← Back to all projects
        </Link>
      </div>
    </article>
  );
}
