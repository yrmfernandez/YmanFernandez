import type { Metadata } from "next";
import { getAllProjects, getAllTags } from "@/lib/projects";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data science projects — end-to-end machine learning, forecasting, analysis, and applied NLP, each written up as a case study.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllTags();

  return (
    <section className="container-page py-16 sm:py-20">
      <p className="eyebrow">Case studies</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 max-w-[58ch] text-lg text-muted">
        Each project is written up the same way — context, approach, result, and
        an honest reflection — so you can follow the reasoning, not just the
        output. Filter by focus area below.
      </p>

      <div className="mt-10">
        <ProjectsExplorer projects={projects} tags={tags} />
      </div>
    </section>
  );
}
