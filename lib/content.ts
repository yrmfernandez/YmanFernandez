/**
 * Editable profile content — the words that fill the home, about, and resume
 * pages. Skills reflect the stacks used across the projects; edit freely.
 */

/** Short proof statement shown near the hero CTAs. */
export const proofStatement =
  "4 projects spanning computer vision, ML classification, and applied GenAI.";

/** Small factual stats for the proof strip. */
export const proofPoints: { value: string; label: string }[] = [
  { value: "2026", label: "BS Computer Science" },
  { value: "4", label: "Projects shipped" },
  { value: "Data Science", label: "Specialization" },
];

/** One-paragraph professional summary (used on the resume and about pages). */
export const summary =
  "Computer Science graduate specializing in Data Science, with hands-on experience taking projects end to end — from data collection and modeling to deployed, offline-capable tools. Comfortable across classical ML, deep learning for computer vision, and multi-agent LLM applications.";

export const education = {
  degree: "BS Computer Science — Major in Data Science",
  school: "University of Southeastern Philippines",
  year: "2026",
  honors: "", // TODO: add honors (e.g. "Cum Laude") if applicable, else leave blank
};

/** Thesis, shown on about + resume. */
export const thesis = {
  title:
    "PIGSaD: An AI-Powered Mobile Device System for Early Detection and Classification of Dehydration in Pigs Utilizing a Thermal Camera",
  note: "Thermal-imaging + deep learning; ResNet18 exported to ONNX for offline Android inference.",
};

export const coursework: string[] = [
  "Machine Learning",
  "Deep Learning",
  "Data Mining",
  "Statistical Inference",
  "Database Systems",
  "Data Structures & Algorithms",
];

/** Skills grouped by category — scan role-fit in one pass (§04). */
export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    name: "ML & Deep Learning",
    items: ["PyTorch", "scikit-learn", "XGBoost", "Random Forest", "ResNet", "AutoML"],
  },
  {
    name: "GenAI & NLP",
    items: ["LLMs (Groq)", "Multi-agent pipelines", "RAG", "Prompt engineering"],
  },
  {
    name: "Tools & Deployment",
    items: ["Docker", "ONNX", "Next.js", "Node / Express", "Vercel", "Git"],
  },
];
