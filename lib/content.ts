/**
 * Editable profile content — the words that fill the home and about pages.
 * All PLACEHOLDER values; swap in your real details.
 */

/** Short proof statement shown near the hero CTAs. */
export const proofStatement =
  "4 end-to-end data science projects — from raw data to deployed model.";

/** Small factual stats for the proof strip. */
export const proofPoints: { value: string; label: string }[] = [
  { value: "2026", label: "B.S. Computer Science" },
  { value: "4", label: "End-to-end projects" },
  { value: "Data Science", label: "Specialization" },
];

export const education = {
  degree: "BS Computer Science — Major in Data Science",
  school: "Your University", // TODO: add your university
  year: "2026",
  honors: "", // TODO: add honors (e.g. "Cum Laude") if applicable, else leave blank
};

export const coursework: string[] = [
  "Machine Learning",
  "Statistical Inference",
  "Data Structures & Algorithms",
  "Database Systems",
  "Deep Learning",
  "Data Mining",
];

/** Skills grouped by category — scan role-fit in one pass (§04). */
export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: "Languages",
    items: ["Python", "SQL", "R", "TypeScript"],
  },
  {
    name: "ML & Statistics",
    items: ["scikit-learn", "XGBoost", "PyTorch", "statsmodels", "A/B testing"],
  },
  {
    name: "Data Engineering",
    items: ["pandas", "Airflow", "dbt", "PostgreSQL", "Spark"],
  },
  {
    name: "Tools & MLOps",
    items: ["Git", "Docker", "FastAPI", "Streamlit", "AWS"],
  },
];
