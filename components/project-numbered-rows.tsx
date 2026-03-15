import type { ReactNode } from "react";

interface NumberedRow {
  num: string;
  title: ReactNode;
  body: ReactNode;
}

export function ProjectNumberedRows({ rows }: { rows: NumberedRow[] }) {
  return (
    <div className="project-numbered-rows">
      {rows.map((row, i) => (
        <div key={i} className="project-numbered-row">
          <span className="project-numbered-row__num">{row.num}</span>
          <div className="project-numbered-row__content">
            <span className="project-numbered-row__title">{row.title}</span>
            <span className="project-numbered-row__body">{row.body}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
