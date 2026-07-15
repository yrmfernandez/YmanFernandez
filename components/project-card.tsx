import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TiltCard } from "./tilt-card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard>
      <Link
        href={`/projects/${project.slug}`}
        className="glass card3d group flex h-full flex-col rounded-2xl p-6 no-underline hover:border-accent"
      >
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-accent-strong"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-serif text-xl font-semibold text-ink text-balance">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-[15px] text-muted">{project.summary}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted">
            {project.stack.slice(0, 3).join(" · ")}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-xs text-accent-strong transition-transform group-hover:translate-x-0.5">
            Case study
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
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
