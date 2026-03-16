import {
  ScrollReveal,
  ProjectH2,
  ProjectBody,
  ProjectList,
  ProjectFeature,
  ProjectImage,
} from "@/components";

export const metadata = {
  title: "Assets Sharing Platform",
  kicker: "Ubisoft",
  description:
    "Database to share and reuse game development assets between different teams at Ubisoft, adopted by hundreds of users across multiple productions.",
  heroImage: "/images/ubi-portfolio.jpg",
  intro: (
    <>
      Game development teams at Ubisoft work in silos. Portfolio was built to
      help artists <strong>share and reuse assets across productions</strong>,
      growing from a handful of users to hundreds.
    </>
  ),
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectH2>The problem</ProjectH2>
        <ProjectBody>
          Artists on one production would create characters, props, textures, and
          animations that another team was building from scratch in parallel.
          There was no system to discover or reuse existing work.
        </ProjectBody>
        <ProjectBody>
          The result: duplicated effort, inconsistent quality across titles, and
          wasted creative labor.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Responsibilities</ProjectH2>
        <ProjectList
          items={[
            "Led design of the internal assets sharing platform (Portfolio)",
            "First product within the department to be designed with a design system in mind",
            "Assisted UX with research and user testing",
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The solution</ProjectH2>
        <ProjectBody>
          Portfolio is a searchable library of game assets, organized by type
          (3D, 2D, animations, sounds) and production, accessible to any artist
          or director across Ubisoft.
        </ProjectBody>
        <ProjectFeature
          title="Collections"
          body="Artists and directors started sharing curated asset collections for reviews. Teams could surface their best work for others to discover and reuse."
        />
        <ProjectFeature
          title="Design system foundation"
          body="Portfolio was the first product in the internal tools department designed with a shared design system. It laid the groundwork for the initiative that later scaled across desktop and web tools at Ubisoft."
        />
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Key results</ProjectH2>
        <ProjectList
          items={[
            "Collections became a core part of the review workflow across teams",
            <>
              Adoption grew from a few users per production to{" "}
              <strong>hundreds across multiple productions</strong>
            </>,
            "Established the design system foundation later adopted department-wide",
          ]}
        />
        <ProjectImage />
      </ScrollReveal>
    </>
  );
}
