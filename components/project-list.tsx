import type { ReactNode } from "react";

export function ProjectList({
  items,
  ordered,
}: {
  items: ReactNode[];
  ordered?: boolean;
}) {
  return (
    <ul className={`project-list${ordered ? " project-list--ordered" : ""}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
