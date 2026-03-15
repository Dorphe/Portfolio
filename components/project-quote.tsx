import type { ReactNode } from "react";

export function ProjectQuote({ children }: { children: ReactNode }) {
  return <blockquote className="project-quote">{children}</blockquote>;
}
