import type { ReactNode } from "react";

interface ProjectHeroProps {
  kicker: string;
  title: string;
  intro: ReactNode;
}

export function ProjectHero({ kicker, title, intro }: ProjectHeroProps) {
  return (
    <header className="project-hero project-hero--split">
      <div className="project-hero-inner">
        <div className="project-hero-text">
          <p className="project-kicker">{kicker}</p>
          <h1 className="project-h1">{title}</h1>
          <p className="project-intro">{intro}</p>
        </div>
        <div className="project-hero-image" aria-hidden="true" />
      </div>
    </header>
  );
}
