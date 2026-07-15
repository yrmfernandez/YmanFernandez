/**
 * Project content model.
 *
 * These entries are PLACEHOLDERS shaped to the case-study "frontmatter
 * contract" (title, summary, tags, stack, featured, date, links, metrics).
 * In Step 3 the same `Project` type and helpers stay, but the data source
 * is swapped to MDX files under content/projects/ — so nothing that reads
 * from here needs to change. Replace these with your real projects.
 */
export type ProjectLinks = {
  repo?: string;
  demo?: string;
  writeup?: string;
};

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
  metrics?: Record<string, string | number>;
};

export const projects: Project[] = [
  {
    slug: "churn-prediction-xgboost",
    title: "Predicting Customer Churn with XGBoost",
    summary:
      "Cut churn false-negatives by 32% with a calibrated gradient-boosted model on 40k telecom records.",
    tags: ["ml", "classification"],
    stack: ["python", "xgboost", "scikit-learn", "pandas"],
    featured: true,
    date: "2026-03-01",
    links: { repo: "#", writeup: "#" },
    metrics: { AUC: 0.91, Recall: 0.86 },
  },
  {
    slug: "nyc-taxi-demand-forecast",
    title: "Forecasting Hourly Ride Demand",
    summary:
      "Forecast citywide demand within 8% MAPE to guide fleet positioning, from a reproducible ingestion pipeline.",
    tags: ["forecasting", "data-eng"],
    stack: ["python", "airflow", "postgresql", "statsmodels"],
    featured: true,
    date: "2026-01-15",
    links: { repo: "#", demo: "#" },
    metrics: { MAPE: "8.1%", Horizon: "24h" },
  },
  {
    slug: "retail-sales-story",
    title: "Where Did the Revenue Go?",
    summary:
      "An exec-ready analysis that traced a 14% revenue dip to two underperforming SKUs and a pricing change.",
    tags: ["analysis", "viz"],
    stack: ["python", "sql", "plotly"],
    featured: true,
    date: "2025-11-20",
    links: { writeup: "#" },
    metrics: { Dataset: "2.3M rows" },
  },
  {
    slug: "resume-rag-assistant",
    title: "A RAG Assistant over a Document Corpus",
    summary:
      "Answers natural-language questions over documents with cited sources, using embeddings search and an LLM.",
    tags: ["nlp", "genai"],
    stack: ["python", "pytorch", "fastapi", "faiss"],
    featured: false,
    date: "2025-10-05",
    links: { repo: "#", demo: "#" },
    metrics: { "Top-k recall": "0.93" },
  },
];

function byDateDesc(a: Project, b: Project) {
  return b.date.localeCompare(a.date);
}

export function getAllProjects(): Project[] {
  return [...projects].sort(byDateDesc);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
