"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function ProjectsExplorer({
  projects,
  tags,
}: {
  projects: Project[];
  tags: string[];
}) {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.tags.includes(active)),
    [active, projects],
  );

  const chips = ["all", ...tags];

  return (
    <div>
      {/* Filter chips */}
      <div
        role="group"
        aria-label="Filter projects by tag"
        className="flex flex-wrap gap-2"
      >
        {chips.map((tag) => {
          const isActive = tag === active;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(tag)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                isActive
                  ? "border-accent bg-accent text-paper"
                  : "border-line text-muted hover:border-accent hover:text-ink"
              }`}
            >
              {tag === "all" ? "All" : tag}
            </button>
          );
        })}
      </div>

      <p className="mt-4 font-mono text-xs text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      {/* Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
