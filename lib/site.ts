/**
 * Central site configuration.
 * Edit these values once and they propagate across the whole site.
 */
export const site = {
  name: "Yman Rey M. Fernandez",
  shortName: "Yman Fernandez", // used for the compact nav/footer logo
  role: "Data Scientist",
  // One-line positioning shown in the hero and metadata.
  tagline:
    "Computer Science graduate specializing in Data Science — turning messy data into models and decisions.",
  email: "yrmfernandez.business@gmail.com",
  phones: ["0927 296 9520", "0947 601 0627"],
  location: "Philippines",
  url: "https://example.com", // set to your real domain before launch
  socials: {
    github: "https://github.com/yrmfernandez",
    linkedin: "https://www.linkedin.com/in/yrmfernandez/",
    kaggle: "https://www.kaggle.com/", // TODO: add your Kaggle URL
  },
} as const;

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
