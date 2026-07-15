"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Zero-backend contact form: composes a pre-filled email and hands it to the
 * visitor's mail client. To use a form service instead, swap the onSubmit body
 * for a POST to e.g. a Formspree endpoint.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-y`}
          placeholder="What would you like to talk about?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
      >
        Compose email
      </button>
    </form>
  );
}
