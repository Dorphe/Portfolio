import Link from "next/link";

interface ProjectCardProps {
  href: string;
  company: string;
  title: string;
  image?: string;
  ariaLabel: string;
}

export function ProjectCard({
  href,
  company,
  title,
  image,
  ariaLabel,
}: ProjectCardProps) {
  return (
    <Link href={href} className="card" aria-label={ariaLabel}>
      <div
        className="card-image"
        style={image ? { backgroundImage: `url('${image}')` } : undefined}
        aria-hidden="true"
      />
      <div className="card-label">
        <span className="card-company">{company}</span>
        <span className="card-title">{title}</span>
      </div>
    </Link>
  );
}
