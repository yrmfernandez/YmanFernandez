import Link from "next/link";
import { site } from "@/lib/site";
import {
  proofStatement,
  proofPoints,
  education,
  coursework,
  skillGroups,
} from "@/lib/content";
import { getFeaturedProjects } from "@/lib/projects";
import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { HeroPlot } from "@/components/hero-plot";
import { Reveal } from "@/components/reveal";
import { LiquidGlass } from "@/components/ui/liquid-glass";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  alumniOf: "University of Southeastern Philippines",
  sameAs: [site.socials.github, site.socials.linkedin],
};

export default function Home() {
  const featured = getFeaturedProjects(3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* ---- Hero ---------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="ambient" aria-hidden="true" />
        <HeroPlot className="pointer-events-none absolute -right-10 top-8 hidden h-64 w-[28rem] opacity-70 lg:block" />
        <div className="container-page relative py-20 sm:py-28">
          <Reveal delay={0}>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-accent" />
              {site.name} · {site.role}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-[18ch] font-serif text-4xl font-semibold leading-[1.06] sm:text-5xl md:text-6xl">
              Turning messy data into models, decisions, and clear stories.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[54ch] text-lg text-muted">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/resume" variant="ghost">
                Resume
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-8 flex items-center gap-2.5 font-mono text-sm text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {proofStatement}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- Featured projects -------------------------------------- */}
      <section className="container-page py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold">
              Featured projects
            </h2>
          </Reveal>
          <Link
            href="/projects"
            className="hidden shrink-0 font-mono text-sm text-accent-strong no-underline hover:underline sm:inline"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-6 inline-block font-mono text-sm text-accent-strong no-underline hover:underline sm:hidden"
        >
          All projects →
        </Link>
      </section>

      {/* ---- Proof strip -------------------------------------------- */}
      <section className="border-y border-line bg-paper-raised">
        <div className="container-page py-14">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
            {/* Stats */}
            <div className="flex gap-10">
              {proofPoints.map((p) => (
                <div key={p.label}>
                  <div className="font-serif text-3xl font-semibold text-ink">
                    {p.value}
                  </div>
                  <div className="mt-1 max-w-[12ch] text-sm text-muted">
                    {p.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education + coursework */}
            <div className="md:border-l md:border-line md:pl-16">
              <p className="eyebrow">Education</p>
              <p className="mt-2 text-[15px] text-ink">
                <span className="font-medium">{education.degree}</span>
                <br />
                {education.school} · {education.year}
                {education.honors ? ` · ${education.honors}` : ""}
              </p>

              <p className="eyebrow mt-6">Relevant coursework</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Skills -------------------------------------------------- */}
      <section className="container-page py-16 sm:py-20">
        <p className="eyebrow">Toolkit</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold">Skills</h2>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-strong">
                {group.name}
              </h3>
              <ul className="mt-3 flex flex-col gap-2 border-t border-line pt-3">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Closing CTA -------------------------------------------- */}
      <section className="container-page pb-20">
        <Reveal>
          <LiquidGlass className="rounded-3xl px-8 py-12 text-center">
            <h2 className="mx-auto max-w-[20ch] font-serif text-3xl font-semibold">
              Looking for a data scientist to grow with your team?
            </h2>
            <p className="mx-auto mt-3 max-w-[46ch] text-muted">
              I&apos;m open to entry-level and internship roles in data science
              and analytics.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink href={`mailto:${site.email}`} external>
                Get in touch
              </ButtonLink>
              <ButtonLink href="/resume" variant="ghost">
                View resume
              </ButtonLink>
            </div>
          </LiquidGlass>
        </Reveal>
      </section>
    </>
  );
}
