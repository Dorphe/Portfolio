import {
  ScrollReveal,
  ProjectH2,
  ProjectH3,
  ProjectBody,
  ProjectList,
  ProjectNumberedRows,
  ProjectTable,
  ProjectFeature,
  ProjectImageStrip,
} from "@/components";

export const metadata = {
  title: "Freeze Your Sperm",
  kicker: "Legacy",
  description:
    "Discovering the reasons behind Legacy's sperm freezing page's low performance and why education is important when selling a high life-impact product.",
  heroImage: "/images/legacy-freeze.png",
  intro: (
    <>
      Legacy&rsquo;s sperm freezing page had low conversion and high bounce
      rates. The fix was <strong>education</strong>: selling the outcome, not the
      product.
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
            "Designing a single page that serves as both a landing page and a deep-dive, covering the entire conversion funnel",
            "Knowing when to break from best practices to solve a specific problem",
          ]}
        />
        <ProjectH3>Key learnings</ProjectH3>
        <ProjectList
          items={[
            "Healthcare purchases have longer cycles that change how you market",
            "Testing with real prospective customers yields valuable data, fast",
            "Simple, first-degree language is essential when customers are unaware of the category",
          ]}
        />
        <ProjectH3>Results</ProjectH3>
        <ProjectTable
          headers={["Metric", "Result"]}
          rows={[
            ["Revenue", <strong key="v">↑ 126%</strong>],
            ["Average Order Value", <strong key="v">↑ 54%</strong>],
            [
              "Conversion rate vs. Shop All page",
              <strong key="v">140%</strong>,
            ],
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Uncovering the problem</ProjectH2>
        <ProjectBody>
          The freezing page was the only place on the website that explained
          sperm freezing, and it was used in nearly every context: social media
          ads, organic search, email campaigns.
        </ProjectBody>
        <ProjectBody>
          Analytics showed a{" "}
          <strong>high bounce rate and low conversion rate</strong>. Content
          wasn&rsquo;t meeting expectations, and visitors were leaving before
          engaging.
        </ProjectBody>
        <ProjectH3>The data</ProjectH3>
        <ProjectBody>
          Legacy regularly captures user sentiment through interviews and
          surveys. Existing data surfaced three recurring concerns:
        </ProjectBody>
        <ProjectList
          items={[
            '"First I need to know more about the process, I want to understand how it works and be sure that this is safe."',
            '"How can I be sure you\'ll be able to get my sperm and freeze it safely?"',
            '"I need to feel like you are understanding my situation in order to provide the right solution."',
          ]}
        />
        <ProjectH3>Creating awareness</ProjectH3>
        <ProjectBody>
          Most people have no answer to &ldquo;Why should I freeze my
          sperm?&rdquo; Education around sperm health is surprisingly low, and
          freezing is a niche procedure. The marketing strategy was focused on
          creating awareness.
        </ProjectBody>
        <ProjectBody>
          Awareness is the first step. Once someone arrives on the page, it needs
          to answer two questions:{" "}
          <strong>why freeze, and how does it work.</strong>
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Understanding the problem</ProjectH2>
        <ProjectBody>
          High bounce rate, low conversion, an audience at the unaware stage, and
          a marketing strategy focused on awareness. The content wasn&rsquo;t
          meeting expectations.
        </ProjectBody>
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "Value proposition",
              body: <>&ldquo;Avoid the clinic&rdquo; answers the &ldquo;how.&rdquo; It does not answer the &ldquo;why.&rdquo; Knowing you can do it from home is useful, but not the main driver at this stage of awareness.</>,
            },
            {
              num: "2",
              title: "Pricing shown too early",
              body: <>At this stage, the customer is still learning what sperm freezing is. Price is not the main concern. Previous pricing experiments showed high price elasticity: <strong>customers are willing to pay if they believe the solution is right for them.</strong></>,
            },
            {
              num: "3",
              title: "Wrong imagery",
              body: <>Showing the physical kit as the hero doesn&rsquo;t communicate what Legacy is actually selling: <strong>preserving your ability to have children.</strong></>,
            },
          ]}
        />
        <ProjectImageStrip
          variant="landscape"
          images={[
            {
              src: "/images/cvaAHjrKY6j4QYjq0ViEvuy29s.png",
              caption: "The previous freezing page — product-forward, ecommerce playbook.",
            },
          ]}
        />
        <ProjectH3>The education gap</ProjectH3>
        <ProjectBody>
          The page rarely educated. Most answers to user questions appeared late
          in the experience, well past the point where visitors were dropping
          off.
        </ProjectBody>
        <ProjectList
          items={[
            <><strong>More than half</strong> of men don&rsquo;t know what affects their fertility</>,
            <><strong>70%</strong> of people overestimate the age at which male fertility decline begins</>,
            <><strong>72%</strong> of people believe that taking testosterone improves a person&rsquo;s fertility (it actually brings it down to 0)</>,
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The hypothesis</ProjectH2>
        <ProjectBody>
          By focusing on education and human stories, AOV &amp; conversion will
          go up. Sell the dream of having children, not a green box.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The conversion funnel</ProjectH2>
        <ProjectBody>
          The previous page only served customers who already knew what sperm
          freezing was and were ready to buy. Most visitors arriving from social
          campaigns were nowhere near that stage.
        </ProjectBody>
        <ProjectBody>
          The redesign needed to address all five stages in a single page.
        </ProjectBody>
        <ProjectList
          items={[
            "Unaware — the customer doesn't know about the problem",
            "Problem aware — the customer knows the problem but not the solution",
            "Solution aware — the customer understands there is a solution but not how to access it",
            "Product aware — the customer knows the product but hasn't chosen one",
            "Most aware — the customer is ready to purchase",
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The solution</ProjectH2>
        <ProjectFeature
          title="Telling a story"
          body="The old page showed almost no people. Having a family is deeply personal. A human-centered visual approach helps customers connect with what Legacy is actually offering."
        />
        <ProjectFeature
          title={<>Use cases &amp; familiar language</>}
          body={`Legacy had a history of using complicated or overly clever language. We switched to direct phrasing like "you should freeze your sperm if..." so users could recognize themselves in the scenarios.`}
        />
        <ProjectFeature
          title="The product grid"
          body="We broke down bundles by function instead of contents. 88% of users already referred to bundles by their timeline. 62% preferred first-degree language. 25% were actively turned off by flowery copy. Legacy was selling a high-consideration healthcare product. Standard ecommerce product cards did not apply."
        />
        <ProjectFeature
          title="How it works"
          body="We distilled the process into 5 steps to show it's quick and straightforward. Asking someone to trust you with their genetic material is a serious ask, so logistics and security questions needed clear, upfront answers."
        />
        <ProjectImageStrip
          variant="landscape"
          images={[
            {
              src: "/images/gJ8kktTtsa6xxNqV6GcVRsN1Zo.png",
              caption: "Before — the old page.",
            },
            {
              src: "/images/UfSF1ejAgsHYP8DepxN8ifSD2CY.png",
              caption: "After — education-first redesign.",
            },
            {
              src: "/images/cKuwSBaNfOnHEtlutGZq8v9LqXA.png",
              caption: '"You should freeze your sperm if…" — plain-language use cases addressing the unaware stage.',
            },
            {
              src: "/images/aUP3a1Zu9Z7x2RQkWV9inIJxmI.png",
              caption: "How to freeze your sperm with Legacy — 5 steps.",
            },
            {
              src: "/images/Z3X9dYxUml41Uc6Mj9E2nveT6s.png",
              caption: "The science of sperm freezing.",
            },
            {
              src: "/images/BmBUjzFk6VNdnFEg4Mbn1klMfY.png",
              caption: "Comparison to clinics.",
            },
            {
              src: "/images/Wd8ed8tORKYtRJoLuJ4vEjZOZtc.png",
              caption: "Persona journeys.",
            },
            {
              src: "/images/LMQAvtSpzGbe1aMpCG96xxlkris.png",
              caption: "Two pathways for different mental models — self-directed and guided.",
            },
            {
              src: "/images/kVBCfFKABeM9XxInoPS0FPsfoU.png",
              caption: "Bundle comparison grid — by timeline and family size.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Test results</ProjectH2>
        <ProjectBody>
          We ran moderated tests with 6 prospective customers.
        </ProjectBody>
        <ProjectH3>The wins</ProjectH3>
        <ProjectList
          items={[
            "3/6 users mentioned the brand inspires trust",
            "6/6 said the majority of the information was new to them",
            `6/6 found nothing confusing: "it's written in a very cohesive language, it's very easy to understand"`,
            "5/6 had no remaining questions about sperm freezing",
            "6/6 were drawn to the bundles comparison table",
          ]}
        />
        <ProjectH3>Further improvements</ProjectH3>
        <ProjectList
          items={[
            "Proactive freezers remain unconvinced — users with no immediate medical reason did not see themselves in the page",
            "The role of fertility decline statistics in messaging is unresolved",
            "Testing as an entry point needs consideration — whether to mention it here depends on whether we prioritize freezing or allow users to self-select",
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Results &amp; learnings</ProjectH2>
        <ProjectTable
          headers={["Metric", "Outcome"]}
          rows={[
            ["Average Order Value", <strong key="v">↑ 54%</strong>],
            ["Revenue", <strong key="v">↑ 126%</strong>],
            [
              "Conversion rate (vs. Shop All page)",
              <strong key="v">140%</strong>,
            ],
          ]}
        />
        <ProjectH3>Key learnings</ProjectH3>
        <ProjectList
          items={[
            <><strong>Healthcare purchases have longer cycles</strong> that fundamentally change how you market a product.</>,
            <><strong>Simple, first-degree language is essential</strong> when customers are still at the awareness stage.</>,
            <><strong>Best practices aren&rsquo;t always applicable.</strong> Sometimes you need design solutions tailored to your specific problem.</>,
          ]}
        />
      </ScrollReveal>
    </>
  );
}
