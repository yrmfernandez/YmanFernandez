/**
 * Central site configuration.
 * Edit these values once and they propagate across the whole site.
 * (Name/handles below are placeholders — swap in your real details.)
 */
export const site = {
  name: "Yman Fernandez",
  role: "Data Scientist",
  // One-line positioning shown in the hero and metadata.
  tagline:
    "Computer Science graduate specializing in Data Science — turning messy data into models and decisions.",
  email: "fernandezymanrey@gmail.com",
  location: "Philippines",
  url: "https://example.com", // set to your real domain before launch
  socials: {
    github: "https://github.com/yrmfernandez",
    linkedin: "https://www.linkedin.com/in/",
    kaggle: "https://www.kaggle.com/",
  },
} as const;

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
] as const;
