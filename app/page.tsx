import Image from "next/image";
import { ProjectCard } from "@/components";

const projects = [
  {
    href: "/projects/rec-actions",
    company: "MAINTAINX",
    title: "COPILOT TROUBLESHOOTING",
    ariaLabel: "MaintainX — Copilot Troubleshooting",
  },
  {
    href: "/projects/zd-messenger",
    company: "SMOOCH / ZENDESK",
    title: "WEB MESSENGER 5",
    image: "/images/zd-messenger.png",
    ariaLabel: "Smooch / Zendesk — Web Messenger 5",
  },
  {
    href: "/projects/legacy-freeze",
    company: "LEGACY",
    title: "FREEZE YOUR SPERM",
    image: "/images/legacy-freeze.png",
    ariaLabel: "Legacy — Freeze Your Sperm",
  },
  {
    href: "/projects/legacy-quiz",
    company: "LEGACY",
    title: "PERSONALIZED RECOMMENDATIONS",
    image: "/images/legacy-quiz.png",
    ariaLabel: "Legacy — Personalized Recommendations",
  },
  {
    href: "/projects/legacy-sti",
    company: "LEGACY",
    title: "STI TEST RESULTS",
    image: "/images/legacy-sti.png",
    ariaLabel: "Legacy — STI Test Results",
  },
  {
    href: "/projects/ubi-oasis",
    company: "UBISOFT",
    title: "OASIS",
    image: "/images/ubi-oasis.png",
    ariaLabel: "Ubisoft — Oasis",
  },
  {
    href: "/projects/ubi-portfolio",
    company: "UBISOFT",
    title: "ASSETS SHARING PLATFORM",
    image: "/images/ubi-portfolio.jpg",
    ariaLabel: "Ubisoft — Assets Sharing Platform",
  },
];

export default function HomePage() {
  return (
    <div className="page">
      <aside className="col-info">
        <header className="name-row">
          <a href="/" className="name-link">
            <span className="name-bold">Mathieu Preston</span>
            <span className="name-role">Senior product designer</span>
          </a>
        </header>

        <div className="bio-stack">
          <div className="avatar-wrap">
            <Image
              src="/images/avatar.jpg"
              alt="Mathieu Preston"
              className="avatar"
              width={80}
              height={80}
            />
          </div>

          <h1 className="greeting">
            Allô!
            <br />
            I&rsquo;m Mathieu.
          </h1>

          <div className="bio">
            <p className="bio-label">I like...</p>
            <p className="bio-list">
              Making complicated things simple.
              <br />
              Finding better ways to work.
              <br />
              Design systems.
              <br />
              Interpreting data.
              <br />
              Mentoring designers.
            </p>
          </div>
          <p className="bio-contact">
            And I&rsquo;m sure I&rsquo;m forgetting a bunch. Might be easier to
            remember over a conversation! Send me a shout at{" "}
            <a href="mailto:allo@mathieu.cc" className="text-link">
              allo@mathieu.cc
            </a>{" "}
            :)
          </p>
          <p className="bio-current">
            Currently working on everything AI at{" "}
            <a
              href="https://www.maintainx.com"
              className="text-link"
              target="_blank"
              rel="noopener"
            >
              MaintainX
            </a>
            .
          </p>
        </div>
      </aside>

      <main className="col-projects">
        {projects.map((p) => (
          <ProjectCard key={p.href} {...p} />
        ))}
      </main>
    </div>
  );
}
