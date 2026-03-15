import type { ReactNode } from "react";

interface ProjectTableProps {
  headers: string[];
  rows: ReactNode[][];
}

export function ProjectTable({ headers, rows }: ProjectTableProps) {
  return (
    <table className="project-table">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, i) => (
          <tr key={i}>
            {cells.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
