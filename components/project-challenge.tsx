import type { ReactNode } from "react";

export function ProjectChallenge({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="project-challenge">
      <h3 className="project-h3">{title}</h3>
      {children}
    </div>
  );
}
