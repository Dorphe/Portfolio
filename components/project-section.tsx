import type { ReactNode } from "react";

export function ProjectSection({ children }: { children: ReactNode }) {
  return <section className="project-section">{children}</section>;
}
