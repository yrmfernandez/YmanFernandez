import type { Metadata } from "next";
import { site } from "@/lib/site";
import {
  summary,
  education,
  thesis,
  coursework,
  skillGroups,
} from "@/lib/content";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "About",
  description: summary,
};

export default function AboutPage() {
  return (
    <section className="container-page py-16 sm:py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-2 max-w-[20ch] font-serif text-4xl font-semibold sm:text-5xl">
        I like taking a problem from raw data to something people can use.
      </h1>

      {/* Narrative — personalize freely */}
      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="max-w-[60ch] text-[16.5px] leading-[1.75] text-ink/90">
          <p>
            I&apos;m a Computer Science graduate from the University of
            Southeastern Philippines, majoring in Data Science. What pulls me to
            the field is the whole arc of a problem — going from raw, messy data
            to something that actually works outside a notebook.
          </p>
          <p className="mt-4">
            That thread runs through my work. For my thesis,{" "}
            <span className="font-medium text-ink">PIGSaD</span>, our team
            collected nearly 2,000 thermal images on a backyard farm and trained
            a model that runs <em>offline</em> on an Android phone, so a farmer
            with no internet can screen a pig for dehydration before visible
            symptoms appear. Elsewhere I&apos;ve built an ML triage tool for
            groundwater safety and a couple of multi-agent LLM applications.
          </p>
          <p className="mt-4">
            I care less about any single technique and more about whether a
            result holds up — whether the pipeline runs unattended, whether the
            model generalizes, whether a non-technical person can act on what it
            says. I&apos;m currently looking for entry-level or internship roles
            in data science and analytics.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">See my work</ButtonLink>
            <ButtonLink href="/resume" variant="ghost">
              Resume
            </ButtonLink>
          </div>
        </div>

        {/* Education aside */}
        <aside className="lg:pt-1">
          <div className="rounded-lg border border-line bg-paper-raised p-6">
            <p className="eyebrow">Education</p>
            <p className="mt-3 font-serif text-lg font-semibold text-ink">
              {education.degree}
            </p>
            <p className="mt-1 text-sm text-muted">
              {education.school} · {education.year}
              {education.honors ? ` · ${education.honors}` : ""}
            </p>

            <div className="mt-5 border-t border-line pt-5">
              <p className="eyebrow">Thesis</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/90">
                {thesis.title}
              </p>
              <p className="mt-2 text-xs text-muted">{thesis.note}</p>
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="eyebrow mb-2.5">Relevant coursework</p>
              <div className="flex flex-wrap gap-1.5">
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
        </aside>
      </div>

      {/* Skills matrix */}
      <div className="mt-16 border-t border-line pt-12">
        <p className="eyebrow">Toolkit</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold">
          Skills &amp; tools
        </h2>
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
      </div>
    </section>
  );
}
