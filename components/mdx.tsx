import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Element styling for MDX case-study bodies. Keeps prose on the site's tokens
 * and type scale instead of relying on a generic prose plugin.
 */
const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-12 mb-3 flex items-center gap-3 font-serif text-2xl font-semibold text-ink"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-2 font-serif text-lg font-semibold text-ink"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 leading-[1.75] text-ink/90" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-4 flex list-disc flex-col gap-2 pl-5 marker:text-accent"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-4 flex list-decimal flex-col gap-2 pl-5 marker:text-accent"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-[1.7] text-ink/90" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="text-accent-strong underline underline-offset-2" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded border border-line bg-paper-raised px-1.5 py-0.5 font-mono text-[0.85em] text-accent-strong"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-5 border-l-2 border-accent pl-4 italic text-muted"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-line" />,
};

export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose-justify text-[15.5px]">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
