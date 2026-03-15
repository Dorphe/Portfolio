import {
  ScrollReveal,
  ProjectH2,
  ProjectH3,
  ProjectBody,
  ProjectList,
  ProjectTable,
  ProjectFeature,
  ProjectChallenge,
  ProjectQuote,
  ProjectImage,
} from "@/components";

export const metadata = {
  title: "Personalized Recommendations",
  kicker: "Legacy",
  description:
    "Design of a personalized recommendation quiz that led to a 5x conversion rate, double the AOV, and over 10% of total revenue within two weeks of launch.",
  intro: (
    <>
      Sperm freezing is a high-consideration, low-awareness product. Legacy
      needed a new way to educate and convert. A{" "}
      <strong>guided recommendation quiz</strong> converted at nearly 5x the rest
      of the website.
    </>
  ),
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectH2>The short version</ProjectH2>
        <ProjectH3>Challenges</ProjectH3>
        <ProjectList
          items={[
            "How to test for a quiz experience with a niche audience",
            "Designing a scoring logic for the right recommendation",
            "Balancing education with information overload",
          ]}
        />
        <ProjectH3>Key learnings</ProjectH3>
        <ProjectList
          items={[
            "Value-perception matters more than information density for drop-off",
            "Curating test participants carefully yields quality data faster",
            "Right information, right time, right context drives conversion",
          ]}
        />
        <ProjectH3>Results</ProjectH3>
        <ProjectTable
          headers={["Metric", "Result"]}
          rows={[
            ["Conversion rate vs. website", <strong key="v">5×</strong>],
            [
              "Average Order Value vs. historical",
              <strong key="v">2×</strong>,
            ],
            [
              "Share of total revenue (first 2 weeks)",
              <strong key="v">10.4%</strong>,
            ],
            [
              "Users who completed experience and converted",
              <strong key="v">89%</strong>,
            ],
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Context</ProjectH2>
        <ProjectBody>
          Legacy sold through its Shop All page and various landing pages.
          Conversion sat at 1.5%, well below industry average. Sperm freezing is
          both high-consideration and unfamiliar. Standard e-commerce tactics
          don&rsquo;t apply.
        </ProjectBody>
        <ProjectH3>Goals</ProjectH3>
        <ProjectFeature
          title="Users want to understand"
          body="What is sperm freezing? Why should I do it? Can it help me have a family in the future? How does my lifestyle or medical condition affect my ability to procreate?"
        />
        <ProjectFeature
          title="Product wants to"
          body="Teach users what sperm freezing is and why they should freeze, while making sure users trust Legacy to care for their sperm storage."
        />
        <ProjectFeature
          title="Business wants to"
          body="Improve overall average order value and improve conversion rate over 1%."
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The hypothesis</ProjectH2>
        <ProjectQuote>
          Educating users through a guided experience will lead them to finding
          the right solution in their sperm freezing journey.
        </ProjectQuote>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The process</ProjectH2>
        <ProjectBody>
          We started with a lo-fi prototype in Typeform. It yielded useful data,
          but testing with a niche audience proved difficult.
        </ProjectBody>
        <ProjectBody>
          Legacy&rsquo;s customers are undergoing life-changing events:
          vasectomies, chemotherapy, gender transition. Our pool on UserTesting
          was small, and widening the net led to poor-quality data from
          low-intent participants.
        </ProjectBody>
        <ProjectBody>
          We ran focused tests with a curated group of past and prospective
          customers, then moved to ship and collect field data.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Key design views</ProjectH2>
        <ProjectChallenge title="Splash screen">
          <ProjectBody>
            The splash screen introduces the quiz and sets expectations: less
            than 2 minutes, personalized results.
          </ProjectBody>
        </ProjectChallenge>
        <ProjectChallenge title="Question view">
          <ProjectBody>
            Each question includes an educational drawer explaining why we ask
            sensitive health questions. This builds trust and reduces drop-off at
            the most personal moments in the flow.
          </ProjectBody>
        </ProjectChallenge>
        <ProjectChallenge title="Recommendation view">
          <ProjectBody>
            The recommendation links each bundle item back to the user&rsquo;s
            answers, reinforcing that this is their personalized result. Below
            the recommendation, &ldquo;What to Expect&rdquo; and &ldquo;Ways to
            Pay&rdquo; sections remove any remaining friction before checkout.
          </ProjectBody>
        </ProjectChallenge>
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The logic</ProjectH2>
        <ProjectBody>
          The quiz has fewer than a dozen questions, but the scoring logic
          underneath is substantial.
        </ProjectBody>
        <ProjectBody>
          Legacy&rsquo;s bundles are prescriptive, so I reverse-engineered the
          individual items into a scoring system with multiple triggers
          throughout the flow to ensure accurate recommendations.
        </ProjectBody>
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Conclusion</ProjectH2>
        <ProjectBody>The results validated the hypothesis:</ProjectBody>
        <ProjectQuote>
          Educating users through a guided experience will lead them to finding
          the right solution in their sperm freezing journey.
        </ProjectQuote>
        <ProjectList
          items={[
            <><strong>5×</strong> conversion rate compared to the website</>,
            <><strong>2×</strong> average order value compared to historical</>,
            <><strong>10.4%</strong> of total revenue within two weeks of its soft launch</>,
            <><strong>89%</strong> of users who got to the end of the experience converted</>,
          ]}
        />
      </ScrollReveal>
    </>
  );
}
