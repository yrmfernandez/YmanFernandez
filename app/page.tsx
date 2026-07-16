import Link from "next/link";
import { site } from "@/lib/site";
import {
  summary,
  proofStatement,
  education,
  thesis,
  coursework,
  skillGroups,
} from "@/lib/content";
import { getFeaturedProjects } from "@/lib/projects";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { Portrait } from "@/components/portrait";
import { HeroPlot } from "@/components/hero-plot";

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

function projectYear(iso: string): string {
  return iso ? new Date(iso).getFullYear().toString() : "";
}

export default function Home() {
  const featured = getFeaturedProjects(3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* ---- Hero: portrait-led ------------------------------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="ambient" aria-hidden="true" />
        {/* Animated data plot, sitting as a faint backdrop behind the intro. */}
        <HeroPlot className="pointer-events-none absolute left-[-4rem] top-1/2 hidden h-80 w-[42rem] -translate-y-1/2 opacity-30 md:block lg:opacity-40" />
        <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          {/* Intro */}
          <div className="order-2 lg:order-1">
            <Reveal delay={0}>
              <p className="eyebrow flex items-center gap-2.5">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                Available for data science &amp; analytics roles
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
                Hi, I&apos;m {site.name.split(" ")[0]}.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-[42ch] font-serif text-xl text-ink/90 sm:text-2xl">
                I turn messy data into models, decisions, and clear stories.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-muted">
                {summary}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/projects">View projects</ButtonLink>
                <ButtonLink href="/resume" variant="ghost">
                  Resume
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
                <span>{site.location}</span>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:text-ink"
                >
                  GitHub
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:text-ink"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={0.2} className="order-1 lg:order-2">
            <Portrait />
          </Reveal>
        </div>
      </section>

      {/* ---- Selected work: editorial list -------------------------- */}
      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">
                Things I&apos;ve built
              </h2>
            </div>
            <Link
              href="/projects"
              className="shrink-0 font-mono text-sm text-accent-strong no-underline hover:underline"
            >
              All projects →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[1fr_auto] items-start gap-4 border-t border-line py-7 no-underline transition-colors last:border-b sm:grid-cols-[auto_1fr_auto] sm:gap-8"
              >
                <span className="hidden pt-1 font-mono text-xs text-muted tabular-nums sm:block">
                  {projectYear(project.date)}
                </span>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink transition-colors group-hover:text-accent-strong sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[15px] text-muted">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-accent-strong"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="pt-1 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent-strong"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- About + education teaser ------------------------------- */}
      <section className="border-y border-line bg-paper-raised">
        <div className="container-page grid gap-12 py-16 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow">A little about me</p>
              <p className="mt-4 max-w-[46ch] font-serif text-xl leading-snug text-ink">
                I care less about any single technique and more about whether a
                result holds up outside the notebook.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-block font-mono text-sm text-accent-strong no-underline hover:underline"
              >
                More about me →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow">Education</p>
              <p className="mt-3 text-[15px] text-ink">
                <span className="font-medium">{education.degree}</span>
                <br />
                {education.school} · {education.year}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Thesis — </span>
                {thesis.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
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
          </Reveal>
        </div>
      </section>

      {/* ---- Skills ------------------------------------------------- */}
      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <p className="eyebrow">Toolkit</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.05}>
              <div>
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Contact: quiet, personal ------------------------------- */}
      <section className="container-page pb-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-t border-line pt-14 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-3 max-w-[16ch] font-serif text-3xl font-semibold sm:text-4xl">
                Let&apos;s build something with data.
              </h2>
              <p className="mt-3 max-w-[42ch] text-muted">{proofStatement}</p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-lg text-accent-strong no-underline hover:underline"
              >
                {site.email}
              </a>
              <div className="flex gap-3">
                <ButtonLink href={`mailto:${site.email}`} external>
                  Email me
                </ButtonLink>
                <ButtonLink href="/resume" variant="ghost">
                  Resume
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
