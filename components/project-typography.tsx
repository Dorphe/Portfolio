import type { ReactNode } from "react";

export function ProjectH2({ children }: { children: ReactNode }) {
  return <h2 className="project-h2">{children}</h2>;
}

export function ProjectH3({ children }: { children: ReactNode }) {
  return <h3 className="project-h3">{children}</h3>;
}

export function ProjectBody({ children }: { children: ReactNode }) {
  return <p className="project-body">{children}</p>;
}

export function ProjectLabel({ children }: { children: ReactNode }) {
  return <p className="project-label">{children}</p>;
}
