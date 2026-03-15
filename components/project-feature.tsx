import type { ReactNode } from "react";

interface ProjectFeatureProps {
  title: ReactNode;
  body: ReactNode;
}

export function ProjectFeature({ title, body }: ProjectFeatureProps) {
  return (
    <div className="project-feature">
      <strong className="project-feature__title">{title}</strong>
      <span className="project-feature__body">{body}</span>
    </div>
  );
}
