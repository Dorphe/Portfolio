import type { ReactNode } from "react";

interface DesignChoice {
  title: ReactNode;
  body: ReactNode;
}

export function ProjectDesignChoices({ choices }: { choices: DesignChoice[] }) {
  return (
    <div className="project-design-choices">
      {choices.map((choice, i) => (
        <div key={i} className="project-design-choice">
          <div className="project-design-choice__image" aria-hidden="true" />
          <div className="project-design-choice__content">
            <span className="project-design-choice__title">
              {choice.title}
            </span>
            <p className="project-design-choice__body">{choice.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
