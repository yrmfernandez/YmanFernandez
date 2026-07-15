import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "github.com/yrmfernandez", href: site.socials.github },
  { label: "LinkedIn", value: "LinkedIn profile", href: site.socials.linkedin },
];

export default function ContactPage() {
  return (
    <section className="container-page py-16 sm:py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-2 max-w-[18ch] font-serif text-4xl font-semibold sm:text-5xl">
        Let&apos;s talk.
      </h1>
      <p className="mt-4 max-w-[52ch] text-lg text-muted">
        I&apos;m open to entry-level and internship roles in data science and
        analytics — and happy to chat about any of the projects here.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        {/* Direct channels */}
        <div>
          <p className="eyebrow mb-4">Reach me directly</p>
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {channels.map((c) => (
              <li
                key={c.label}
                className="flex items-center justify-between gap-4 py-3.5"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-muted">
                  {c.label}
                </span>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-[15px] text-ink no-underline hover:text-accent-strong"
                >
                  {c.value}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-4 py-3.5">
              <span className="font-mono text-xs uppercase tracking-wide text-muted">
                Phone
              </span>
              <span className="text-[15px] text-ink">
                {site.phones.join(" · ")}
              </span>
            </li>
            <li className="flex items-center justify-between gap-4 py-3.5">
              <span className="font-mono text-xs uppercase tracking-wide text-muted">
                Location
              </span>
              <span className="text-[15px] text-ink">{site.location}</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div>
          <p className="eyebrow mb-4">Or send a message</p>
          <div className="glass rounded-2xl p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
