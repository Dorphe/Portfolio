import type { ReactNode } from "react";

interface FeedbackCard {
  num: string;
  body: ReactNode;
}

export function ProjectFeedbackCards({ cards }: { cards: FeedbackCard[] }) {
  return (
    <div className="project-feedback-cards">
      {cards.map((card, i) => (
        <div key={i} className="project-feedback-card">
          <span className="project-feedback-card__num">{card.num}</span>
          <p className="project-feedback-card__body">{card.body}</p>
        </div>
      ))}
    </div>
  );
}
