import Link from "next/link";

export function ProjectNav({ label = "Mathieu Preston" }: { label?: string }) {
  return (
    <div className="project-nav">
      <Link href="/" className="project-nav-link">
        <span className="project-nav-arrow" aria-hidden="true">
          ←
        </span>
        <span className="project-nav-name">{label}</span>
      </Link>
    </div>
  );
}
