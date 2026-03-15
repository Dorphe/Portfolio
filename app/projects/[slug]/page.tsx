import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, slugs } from "@/content";
import { ProjectNav, ProjectHero } from "@/components";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: `${project.metadata.title} — Mathieu Preston`,
    description: project.metadata.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  const { metadata, Content } = project;

  return (
    <>
      <ProjectNav label={metadata.navLabel} />
      <ProjectHero
        kicker={metadata.kicker}
        title={metadata.title}
        intro={metadata.intro}
      />
      <article className="project-page">
        <Content />
      </article>
    </>
  );
}
