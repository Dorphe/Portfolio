import {
  ScrollReveal,
  ProjectH2,
  ProjectBody,
  ProjectList,
  ProjectLabel,
  ProjectNumberedRows,
  ProjectTable,
  ProjectImage,
  ProjectImageStrip,
} from "@/components";

export const metadata = {
  title: "Personalized Recommendations",
  kicker: "Legacy",
  description:
    "Design of a personalized recommendation quiz that converted at 5× the rest of the website, doubled average order value, and accounted for over 10% of total revenue within two weeks of launch.",
  heroImage: "/images/legacy-quiz.png",
  intro: (
    <>
      Sperm freezing is high-consideration and low-awareness. Legacy&rsquo;s
      product page converted at 1.5%. I designed a guided recommendation quiz
      to <strong>educate users at every step of the funnel</strong> and{" "}
      <strong>match each person to the right bundle</strong>.
    </>
  ),
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectLabel>The context</ProjectLabel>
        <ProjectH2>
          Legacy sells a product most people don&rsquo;t know they need
        </ProjectH2>
        <ProjectBody>
          Legacy offers sperm testing and freezing to people undergoing
          gender-affirming care, vasectomy, cancer treatment, or those who want
          to preserve their healthiest sperm for the future.
        </ProjectBody>
        <ProjectBody>
          The category is novel and sometimes taboo. Most people are unaware of
          how their habits and environment affect sperm health. Legacy sold
          through a Shop All page and various landing pages. Conversion sat at
          1.5%, well below category average. Standard e-commerce tactics
          don&rsquo;t apply to a high-consideration, low-awareness product.
        </ProjectBody>
        <ProjectImage
          src="/images/GjxMKdGyxCchI5BeFCh7kTV2zw.png"
          alt="Legacy personalized recommendation quiz overview"
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The problem</ProjectLabel>
        <ProjectH2>
          Users arrived at the product page before they understood why they
          needed it
        </ProjectH2>
        <ProjectBody>
          Visitors arriving from awareness campaigns were nowhere near ready to
          buy. They had recurring questions that the product page didn&rsquo;t
          answer:
        </ProjectBody>
        <ProjectList
          items={[
            "What is sperm freezing and how does it work?",
            "Why should I do it?",
            "How does my lifestyle or medical condition affect my ability to have children?",
            "Can Legacy help me have a family in the future?",
          ]}
        />
        <ProjectBody>
          Without answers to those questions, visitors dropped off. Conversion
          stayed low and average order value stayed flat.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The hypothesis</ProjectLabel>
        <ProjectH2>A guided experience converts better than a product page</ProjectH2>
        <ProjectBody>
          Educating users through a guided experience will lead them to finding
          the right solution in their sperm freezing journey.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The objectives</ProjectLabel>
        <ProjectH2>Three goals for the quiz</ProjectH2>
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "Meet users where they are",
              body: "Teach users what sperm freezing is, why they should consider it, and why Legacy is trustworthy — before asking them to buy.",
            },
            {
              num: "2",
              title: "Match each person to the right bundle",
              body: "Design a scoring logic that maps user answers to the correct product recommendation, replacing the prescriptive bundle structure.",
            },
            {
              num: "3",
              title: "Improve conversion rate and average order value",
              body: "Move conversion above 1% and grow AOV by ensuring users arrive at checkout with confidence in their choice.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The process</ProjectLabel>
        <ProjectH2>Lo-fi prototype first, curated testing second</ProjectH2>
        <ProjectBody>
          We started by prototyping a lo-fi version of the quiz in Typeform. It
          yielded useful data and gave us an early read on the experience. We
          also used Figma&rsquo;s conditional workflows to test branching logic,
          though bugs in the tool at the time limited how far we could take it.
        </ProjectBody>
        <ProjectBody>
          Legacy&rsquo;s customers are undergoing significant life events:
          vasectomy, chemotherapy, gender transition. The pool of eligible
          participants on UserTesting was small. Widening the net produced
          low-quality data from participants who didn&rsquo;t match the persona.
        </ProjectBody>
        <ProjectBody>
          We ran focused sessions with a curated group of past and prospective
          customers to resolve the last issues, then moved to ship and collect
          real field data.
        </ProjectBody>
        <ProjectImage
          src="/images/24G6nlFZxXUP5vbT0xL9lurb3wg.webp"
          caption="One of our test plans."
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The solution</ProjectLabel>
        <ProjectH2>A three-screen quiz: welcome, question, recommendation</ProjectH2>
        <ProjectBody>
          When a user lands on the quiz, they move through three distinct views.
          The splash screen sets expectations. The question view collects answers
          while an educational drawer explains why each question is being asked.
          The recommendation view presents the matched bundle and links each item
          back to the user&rsquo;s specific answers.
        </ProjectBody>
        <ProjectImageStrip
          images={[
            {
              src: "/images/DZ3P8poKbauJdxQYJlG75dvRw6k.webp",
              caption: "Splash screen — sets expectations before the first question.",
            },
            {
              src: "/images/OyFGyiO6pGQkRvjrHtgRNJVquCk.webp",
              caption: "Question view — educational drawer explains sensitive questions.",
            },
            {
              src: "/images/ckcSfFfclVYvBdvU4U2GJcaT4.webp",
              caption: "Recommendation view — bundle items linked to user answers.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The logic</ProjectLabel>
        <ProjectH2>A scoring system beneath a simple surface</ProjectH2>
        <ProjectBody>
          The quiz has fewer than a dozen questions, but the scoring logic
          underneath is substantial. Legacy&rsquo;s bundles are prescriptive, so
          I reverse-engineered the individual bundle items into a scoring system
          with multiple triggers throughout the flow. Each answer adjusts scores
          across product variables until the quiz outputs the correct
          recommendation for that user&rsquo;s profile.
        </ProjectBody>
        <ProjectImageStrip
          variant="landscape"
          images={[
            {
              src: "/images/wOWCtvH83UDbkPGPfs77GfLB1zM.png",
              caption: "Scoring system overview.",
            },
            {
              src: "/images/56GdszQ4QCJ9fmhNp7SpF4zXpg.png",
              caption: "Trigger logic across the question flow.",
            },
            {
              src: "/images/TpWBpO4YrnOUNx3wA2I730dIpk.png",
              caption: "Bundle output mapping.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The outcome</ProjectLabel>
        <ProjectH2>5× conversion rate within two weeks of launch</ProjectH2>
        <ProjectBody>
          The quiz launched as a soft release. Within two weeks it had already
          demonstrated the hypothesis was correct.
        </ProjectBody>
        <ProjectTable
          headers={["Metric", "Result"]}
          rows={[
            ["Conversion rate vs. website", <strong key="cr">5×</strong>],
            ["Average order value vs. historical", <strong key="aov">2×</strong>],
            ["Share of total revenue (first 2 weeks)", <strong key="rev">10.4%</strong>],
            ["Users who completed and converted", <strong key="comp">89%</strong>],
          ]}
        />
        <ProjectBody>
          Educating users through a guided experience will lead them to finding
          the right solution in their sperm freezing journey.
        </ProjectBody>
      </ScrollReveal>
    </>
  );
}
