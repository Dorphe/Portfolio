import {
  ScrollReveal,
  ProjectH2,
  ProjectBody,
  ProjectList,
  ProjectLabel,
  ProjectNumberedRows,
  ProjectFeedbackCards,
  ProjectDesignChoices,
} from "@/components";

export const metadata = {
  title: "Reduce guesswork at the moment of repair",
  kicker: "MaintainX",
  description:
    "Designing an AI recommendation engine inside work orders to surface historical knowledge, reduce diagnostic guesswork, and decrease machine downtime for industrial maintenance technicians.",
  intro: (
    <>
      Maintenance technicians are sent into the field with a work order and
      little else. I designed an AI recommendation engine inside work orders to{" "}
      <strong>surface the right fix before troubleshooting begins</strong>,
      giving technicians the context they need to act fast.
    </>
  ),
  navLabel: "Back",
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectLabel>The context</ProjectLabel>
        <ProjectH2>
          MaintainX built a CMMS for industrial technicians who keep equipment
          running
        </ProjectH2>
        <ProjectBody>
          MaintainX is a computerised maintenance management system used by
          manufacturing and industrial facilities to schedule and track equipment
          repairs. Maintenance technicians use it to receive, execute, and close
          work orders in the field.
        </ProjectBody>
        <ProjectBody>
          When a work order arrives, a technician has an asset name and a fault
          description. Machine history, relevant manual pages, and notes from
          previous repairs exist in the system but are buried or undocumented.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The problem</ProjectLabel>
        <ProjectH2>
          Work orders arrive stripped of the context technicians need most
        </ProjectH2>
        <ProjectBody>
          Technicians default to generic troubleshooting procedures because
          relevant machine history and manual sections are not surfaced at the
          point of work.
        </ProjectBody>
        <ProjectList
          items={[
            "Manually searching through physical manuals or old reports.",
            "Running standard procedures when a recurring fault is the likely cause.",
            "Chasing down supervisors for context that should already be in the system.",
          ]}
        />
        <ProjectBody>
          The result is high MTTR and rising operational costs.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The hypothesis</ProjectLabel>
        <ProjectH2>Surface the right fix before troubleshooting begins</ProjectH2>
        <ProjectBody>
          If we synthesise work order history, peer comments, and service manual
          content into ranked recommended actions delivered when a technician
          opens a repair work order, then technicians will spend less time
          searching and more time acting, reducing mean time to repair and
          lowering machine downtime.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The objectives</ProjectLabel>
        <ProjectH2>Three goals to validate the hypothesis</ProjectH2>
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "Reduce time-to-first-action",
              body: "Measure the gap between work order open and first technician action. Recommendations should shorten the diagnostic phase.",
            },
            {
              num: "2",
              title: "Earn technician trust",
              body: "Recommendations must explain why they were made, not just what to do. Trust is measured by acceptance rate and the absence of early dismissal.",
            },
            {
              num: "3",
              title: "Generate compounding ROI evidence",
              body: "Tie accepted recommendations to KPI outcomes so the business can measure impact and the model can improve over time.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The solution</ProjectLabel>
        <ProjectH2>
          AI-powered recommendations delivered inside the work order
        </ProjectH2>
        <ProjectBody>
          When a technician opens a repair work order, a ranked list of
          recommended actions appears automatically. Each recommendation shows
          the suggested action, its source, and a confidence tier. Technicians
          can accept it, dismiss it with a reason, or view the source document.
        </ProjectBody>
        <div>
          <ProjectLabel>Key capabilities</ProjectLabel>
          <ProjectNumberedRows
            rows={[
              {
                num: "1",
                title: "Historical pattern recognition",
                body: "Flags whether this machine or similar models in the organisation have failed this way before, and surfaces what was done.",
              },
              {
                num: "2",
                title: "Trustworthy sources",
                body: "Extracts the relevant steps from the service manual. No more searching a 200-page PDF for a single procedure.",
              },
              {
                num: "3",
                title: "Peer insights",
                body: "Surfaces comments from previous interventions on similar issues, making shared knowledge accessible to the whole team.",
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The craft</ProjectLabel>
        <ProjectH2>Four decisions that defined the experience</ProjectH2>
        <ProjectDesignChoices
          choices={[
            {
              title: (
                <>From &ldquo;black box&rdquo; to &ldquo;open book&rdquo;</>
              ),
              body: (
                <>
                  Technicians are domain experts with strong field intuition. An
                  AI that says &ldquo;Replace Part X&rdquo; with no reasoning
                  gets ignored.
                  <br />
                  <br />I designed evidence markers into every recommendation.
                  Each card shows the action and the reasoning behind it:
                  &ldquo;Based on 3 similar faults in the last 6 months and Page
                  42 of the Service Manual.&rdquo; Transparency mattered more
                  than accuracy for initial adoption.
                </>
              ),
            },
            {
              title: "A feedback loop technicians will actually use",
              body: (
                <>
                  AI models need feedback to improve, but technicians are busy
                  and won&rsquo;t fill out surveys.
                  <br />
                  <br />I designed a single-tap Accept/Dismiss action into the
                  work order flow. Dismissals prompt a quick-select reason
                  list — &ldquo;Not relevant,&rdquo; &ldquo;Already
                  tried&rdquo; — taking under three seconds. Technicians stay
                  in control, and the data science team gets the labels needed
                  to improve the model.
                </>
              ),
            },
            {
              title: (
                <>
                  From percentage scores to qualitative tiers
                </>
              ),
              body: (
                <>
                  We debated showing confidence scores. In testing,
                  &ldquo;82% confidence&rdquo; felt arbitrary to a user under a
                  machine and created doubt rather than clarity.
                  <br />
                  <br />I replaced percentage scores with qualitative tiers:
                  &ldquo;Primary Suggestion&rdquo; and &ldquo;Alternative
                  Considerations.&rdquo; Technicians troubleshoot this way
                  naturally. They have a Plan A and keep a Plan B in mind. The
                  UI matches that mental model.
                </>
              ),
            },
            {
              title: "Deep linking to the source",
              body: (
                <>
                  Technicians don&rsquo;t trust AI summaries of technical text.
                  In maintenance, a wrong instruction is dangerous.
                  <br />
                  <br />
                  Every recommendation that draws from a service manual links
                  directly to the source PDF, opened to the exact page.
                  Technicians get the original documentation alongside the AI
                  insight, reducing search time without requiring them to take
                  the AI at its word.
                </>
              ),
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The outcome</ProjectLabel>
        <ProjectH2>
          Instrumented for ROI and shipped to the field
        </ProjectH2>
        <ProjectBody>
          The feature launched to MaintainX&rsquo;s technician base. Because
          the feedback loop was built in from the start, every accepted and
          dismissed recommendation generates data traceable to operational
          outcomes.
        </ProjectBody>
        <ProjectFeedbackCards
          cards={[
            {
              num: "1",
              body: "Each recommendation outcome retrains the model. Acceptance signals a good suggestion; dismissal with a reason flags a gap.",
            },
            {
              num: "2",
              body: "Successes are visible to technicians and managers, creating a record of AI-assisted repairs that builds trust over time.",
            },
            {
              num: "3",
              body: "The feedback loop generates direct ROI evidence by correlating recommendation usage with MTTR, MTBF, and asset downtime.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>Looking back</ProjectLabel>
        <ProjectH2>What I&rsquo;d change with more time</ProjectH2>
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "Validate trust earlier with a longitudinal study",
              body: "We tested acceptance intent in moderated sessions, but trust in an AI tool builds or erodes over repeated use. A 30-day diary study with a small group of technicians would have surfaced adoption gaps earlier, and let us iterate on the evidence markers before rollout.",
            },
            {
              num: "2",
              title: "Invest in documentation quality upstream",
              body: "The model is only as good as the context it\u2019s given. Poor work order notes and sparse manual coverage limited recommendation accuracy. I began adjacent work to make it easier for technicians to document their interventions, but that data quality work should have started first.",
            },
          ]}
        />
      </ScrollReveal>
    </>
  );
}
