import { site } from "@/lib/site";

export default function Home() {
  return (
    <section className="container-page py-20 sm:py-28">
      <p className="eyebrow flex items-center gap-3">
        <span className="inline-block h-px w-6 bg-accent" />
        {site.role} · Fresh graduate
      </p>

      <h1 className="mt-5 max-w-[16ch] font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl">
        Hi, I&apos;m {site.name.split(" ")[0]}.
      </h1>

      <p className="mt-5 max-w-[52ch] text-lg text-muted">{site.tagline}</p>

      {/* Scaffold notice — replaced by the real home page in the next step. */}
      <div className="mt-12 max-w-xl border-l-2 border-accent bg-paper-raised px-5 py-4">
        <div className="eyebrow mb-1.5">Step 1 · Foundation</div>
        <p className="text-[15px] text-ink">
          Design system, theme toggle, and shared layout are in place. Try the
          light/dark toggle in the header. The full home page, projects, and
          case studies come in the next steps.
        </p>
      </div>

      {/* Small palette check strip so the token system is visible at a glance. */}
      <div className="mt-10 flex flex-wrap gap-2">
        {[
          ["Paper", "bg-paper border border-line"],
          ["Raised", "bg-paper-raised"],
          ["Ink", "bg-ink"],
          ["Accent", "bg-accent"],
          ["Accent soft", "bg-accent-soft"],
        ].map(([label, cls]) => (
          <div key={label} className="text-center">
            <div className={`h-12 w-20 rounded-sm ${cls}`} />
            <div className="mt-1.5 font-mono text-[10px] text-muted">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
