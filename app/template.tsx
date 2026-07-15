import { PageTransition } from "@/components/page-transition";

// A template re-mounts on every navigation (unlike layout), which is what
// lets the page-transition animation replay on each route change.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
