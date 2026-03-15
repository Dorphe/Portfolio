import {
  ProjectSection,
  ProjectH2,
  ProjectH3,
  ProjectBody,
  ProjectList,
  ProjectQuote,
} from "@/components";

export const metadata = {
  title: "STI Test Results",
  kicker: "Legacy",
  description:
    "Designing STI test results for Legacy — navigating the challenge of binary medical results where standard semantic visual patterns create confusion.",
  intro: (
    <>
      STI testing is required by law in many US states before freezing sperm. The
      challenge: designing a result interface that is both{" "}
      <strong>accurate and emotionally appropriate</strong>.
    </>
  ),
};

export function Content() {
  return (
    <>
      <ProjectSection>
        <ProjectH2>The problem</ProjectH2>
        <ProjectBody>
          In early 2022, Legacy expanded its offerings to include STI testing,
          both as a standalone product and as a legal prerequisite for sperm
          freezing in many US states.
        </ProjectBody>
        <ProjectBody>
          STI results are binary. My first instinct was to use familiar semantic
          cues: green/red, checkmarks/crosses. That created an immediate problem.
        </ProjectBody>
        <ProjectBody>
          Testing positive for an STI is, technically,{" "}
          <em>positive</em>&hellip; but it&rsquo;s not good news. In any other
          context, ✅ = 😀. However, in this case, it&rsquo;s very much ☹️.
        </ProjectBody>
      </ProjectSection>

      <ProjectSection>
        <ProjectH2>The hypothesis</ProjectH2>
        <ProjectQuote>
          Associating positive semantic visuals with a negative emotion creates
          confusion.
        </ProjectQuote>
      </ProjectSection>

      <ProjectSection>
        <ProjectH2>The process</ProjectH2>
        <ProjectBody>
          I tested iterations with green/red and icon systems. Reception was
          poor. Users were confused about whether a &ldquo;positive&rdquo; result
          was good or bad news.
        </ProjectBody>
        <ProjectBody>
          I consulted with healthcare experts and studied how traditional lab
          results handle this. Clinical test results are deliberately plain: text
          only, no color-coding. The semantic weight of colors is culturally
          conditioned, not medically appropriate.
        </ProjectBody>
      </ProjectSection>

      <ProjectSection>
        <ProjectH2>The result</ProjectH2>
        <ProjectBody>
          The final design follows the format of a traditional lab result sheet.
          It may look less polished at first glance, but it&rsquo;s familiar to
          both clinicians and patients, and avoids the semantic confusion
          entirely.
        </ProjectBody>
        <ProjectH3>Key design decisions</ProjectH3>
        <ProjectList
          items={[
            <><strong>No color-coded status indicators.</strong> Results are communicated through plain text, not color</>,
            <><strong>Clinical table format.</strong> Familiar to anyone who&rsquo;s received lab work from a doctor</>,
            <><strong>Clear &ldquo;your next steps&rdquo; section.</strong> The result alone is not enough. Patients need guidance on what to do next</>,
            <><strong>Contextual recommendations.</strong> Different guidance shown depending on whether a result is negative, positive, or inconclusive</>,
          ]}
        />
      </ProjectSection>
    </>
  );
}
