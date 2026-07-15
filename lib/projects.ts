/**
 * Project content model — backed by MDX files in content/projects/.
 *
 * Each project is one .mdx file: YAML frontmatter (the fields below) plus a
 * markdown body holding the case-study sections. Adding a project = adding a
 * file; nothing in the app needs to change. The `Project` type and the helper
 * functions are the stable contract every page reads through.
 *
 * Server-only: these functions touch the filesystem, so import them from
 * Server Components (or pass their serializable results down to Client ones).
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectLinks = {
  repo?: string;
  demo?: string;
  writeup?: string;
};

/** Metadata parsed from a project's frontmatter (safe to send to the client). */
export type Project = {
  slug: string;
  title: string;
  /** One-line RESULT for the card — an outcome, not a tool list. */
  summary: string;
  tags: string[];
  stack: string[];
  featured: boolean;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  links: ProjectLinks;
  metrics: Record<string, string>;
};

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function toStringRecord(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([k, v]) => [
      k,
      String(v),
    ]),
  );
}

function parseProject(slug: string, frontmatter: Record<string, unknown>): Project {
  return {
    slug,
    title: String(frontmatter.title ?? slug),
    summary: String(frontmatter.summary ?? ""),
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.map(String) : [],
    stack: Array.isArray(frontmatter.stack) ? frontmatter.stack.map(String) : [],
    featured: Boolean(frontmatter.featured),
    date: String(frontmatter.date ?? ""),
    links: (frontmatter.links as ProjectLinks) ?? {},
    metrics: toStringRecord(frontmatter.metrics),
  };
}

function slugsFromDisk(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function byDateDesc(a: Project, b: Project) {
  return b.date.localeCompare(a.date);
}

/** All projects (metadata only), newest first. */
export function getAllProjects(): Project[] {
  return slugsFromDisk()
    .map((slug) => {
      const file = fs.readFileSync(
        path.join(PROJECTS_DIR, `${slug}.mdx`),
        "utf8",
      );
      return parseProject(slug, matter(file).data);
    })
    .sort(byDateDesc);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects()
    .filter((p) => p.featured)
    .slice(0, limit);
}

/** A single project's metadata plus its raw MDX body (for the detail page). */
export function getProject(
  slug: string,
): { meta: Project; content: string } | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { meta: parseProject(slug, data), content };
}

/** All tags across projects, for the index filter. */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const p of getAllProjects()) p.tags.forEach((t) => tags.add(t));
  return [...tags].sort();
}
