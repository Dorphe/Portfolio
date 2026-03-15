import {
  ScrollReveal,
  ProjectH2,
  ProjectBody,
  ProjectList,
  ProjectLabel,
  ProjectNumberedRows,
  ProjectTable,
  ProjectFeedbackCards,
  ProjectDesignChoices,
} from "@/components";

export const metadata = {
  title: "AI Recommended Actions",
  kicker: "MaintainX",
  description:
    "Building an AI-enabled recommendation engine within work orders to reduce guesswork, leverage historical tribal knowledge, and decrease machine downtime.",
  intro: (
    <>
      Maintenance technicians often work from incomplete data. I designed an AI
      recommendation engine inside work orders to{" "}
      <strong>reduce guesswork</strong> and{" "}
      <strong>surface historical knowledge</strong> when it matters most.
    </>
  ),
  navLabel: "Back",
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectH2>The problem</ProjectH2>
        <ProjectBody>
          Work orders arrive with minimal documentation. Technicians frequently
          encounter key pain points leading to high MTTR (mean time to repair)
          and rising operational costs.
        </ProjectBody>
        <ProjectList
          items={[
            "Searching through physical manuals or old reports.",
            "Running standard procedures when a known fault is the likely cause.",
            "Chasing down supervisors for missing context.",
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The solution</ProjectH2>
        <ProjectBody>
          Recommended actions appear when a technician opens a repair work order.
        </ProjectBody>
        <div>
          <ProjectLabel>Key Features</ProjectLabel>
          <ProjectNumberedRows
            rows={[
              {
                num: "1",
                title: "Historical pattern recognition",
                body: "Flags whether this machine or similar models have failed this way before.",
              },
              {
                num: "2",
                title: "Trustworthy sources",
                body: "Extracts the relevant information from the manual. No more searching a 200-page PDF.",
              },
              {
                num: "3",
                title: "Peer insights",
                body: "Surfaces comments from previous interventions on similar issues.",
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The hypothesis</ProjectH2>
        <ProjectBody>
          Synthesize work order history, comments, and manuals into
          AI-recommended actions delivered directly within the work order.
          Identify recurring faults across similar machines and surface the fix
          before the technician starts troubleshooting.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Tying design to ROI</ProjectH2>
        <ProjectBody>
          I built a feedback loop to track the effectiveness of each
          recommendation against three KPIs:
        </ProjectBody>
        <ProjectTable
          headers={["Metric", "Definition", "AI Impact Goal"]}
          rows={[
            [
              <strong key="m">MTTR</strong>,
              "Mean Time To Repair",
              "Decrease by cutting diagnostic guesswork.",
            ],
            [
              <strong key="m">MTBF</strong>,
              "Mean Time Between Failures",
              "Increase by suggesting the right long-term fix over a quick patch.",
            ],
            [
              <strong key="m">Asset Downtime</strong>,
              "Total time a machine is non-functional",
              "Minimize by getting machines back to Ready faster.",
            ],
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>
          This feedback loop compounds value in three ways
        </ProjectH2>
        <ProjectFeedbackCards
          cards={[
            {
              num: "1",
              body: "Retrains the model based on recommendation outcomes.",
            },
            {
              num: "2",
              body: "Exposes successes to technicians and managers, building trust.",
            },
            {
              num: "3",
              body: "Creates direct ROI evidence for business cases.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Key design decisions</ProjectH2>
        <ProjectDesignChoices
          choices={[
            {
              title: (
                <>From &ldquo;black box&rdquo; to &ldquo;open book&rdquo;</>
              ),
              body: (
                <>
                  Technicians are field experts. If an AI says &ldquo;Replace
                  Part X&rdquo; with no reasoning, they&rsquo;ll ignore it.
                  <br />
                  <br />I designed evidence markers into every recommendation.
                  The card shows what it suggests and why: &ldquo;Based on 3
                  similar faults in the last 6 months and Page 42 of the Service
                  Manual.&rdquo;
                </>
              ),
            },
            {
              title: "Human-in-the-loop feedback",
              body: (
                <>
                  I added a single-tap Accept/Dismiss action to each
                  recommendation. Dismissals prompt a quick-select reason list.
                  <br />
                  <br />
                  Technicians stay in control, and the data science team gets the
                  ground truth labels needed to retrain the model.
                </>
              ),
            },
            {
              title: "Communicating confidence",
              body: (
                <>
                  Showing &ldquo;82% confidence&rdquo; felt arbitrary to someone
                  under a machine. I replaced percentage scores with qualitative
                  tiers: &ldquo;Primary Suggestion&rdquo; and &ldquo;Alternative
                  Considerations.&rdquo;
                  <br />
                  <br />
                  Technicians naturally think in terms of Plan A and Plan B. The
                  UI was designed to match that.
                </>
              ),
            },
            {
              title: "Source linking",
              body: "Technicians don\u2019t trust AI summaries of technical text. In maintenance, hallucinations can be dangerous. Every recommendation links directly to the source PDF, opened to the exact page.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Reflections</ProjectH2>
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "Trust comes first",
              body: "Technicians are skeptical of AI. Every recommendation had to show why it was made.",
            },
            {
              num: "2",
              title: "Data quality drives everything",
              body: "The model is only as good as its context. This led to adjacent work: making it effortless for technicians to document their interventions.",
            },
          ]}
        />
      </ScrollReveal>
    </>
  );
}
