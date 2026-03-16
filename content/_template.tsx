/**
 * Case Study Content Template
 *
 * Copy this file, rename it to the project slug (e.g. `my-project.tsx`),
 * fill in every placeholder marked [LIKE THIS], then register the export
 * in content/index.ts.
 *
 * SECTION ORDER — follows the reader's emotional arc:
 *   1. Context        — who, where, what was broken
 *   2. Problem        — sharpened friction + business consequence
 *   3. Hypothesis     — the design bet
 *   4. Objectives     — success criteria
 *   5. Solution       — what shipped
 *   6. Key Decisions  — craft proof
 *   7. Outcome        — results
 *   8. Reflections    — growth signal (optional but high signal)
 *
 * SECTION FORMAT — every section uses:
 *   Caption: a short label that tells the reader what kind of content follows
 *   Title:   a hook — active verb, specific, human
 *   Content: the substance — prose + structured components
 *
 * METADATA — maps to the page hero (ProjectHero component):
 *   kicker  → company name displayed above the title
 *   title   → the case study headline; make this the hook title
 *   intro   → 1–2 sentence hook; bold the key phrase with <strong>
 */

import {
  ScrollReveal,
  ProjectH2,
  ProjectH3,
  ProjectBody,
  ProjectLabel,
  ProjectList,
  ProjectFeature,
  ProjectChallenge,
  ProjectNumberedRows,
  ProjectTable,
  ProjectFeedbackCards,
  ProjectDesignChoices,
  ProjectImage,
  ProjectQuote,
} from "@/components";

// ---------------------------------------------------------------------------
// METADATA
// Displayed in the page hero. The title and intro are the first things a
// reader sees — make them earn attention.
// ---------------------------------------------------------------------------

export const metadata = {
  // Company or team name — shown as a small kicker above the title
  kicker: "[Company Name]",

  // Hook title — one line, active verb, describes the outcome not the task
  // Good:  "Surface the right fix before troubleshooting begins"
  // Avoid: "Redesign of the work order detail page"
  title: "[Hook title that describes the outcome]",

  // Used in <meta> description and OpenGraph; plain text, 1–2 sentences
  description:
    "[Plain-text description of the project for search and social sharing. No JSX here.]",

  // Displayed as a lead paragraph in the hero. Bold the key insight or outcome.
  intro: (
    <>
      [One or two sentences that establish the user, their job, and what was at
      stake.] I designed [the intervention] to{" "}
      <strong>[key outcome for the user]</strong> and{" "}
      <strong>[key outcome for the business]</strong>.
    </>
  ),

  // Optional — overrides the back-link label in ProjectNav (defaults to the title)
  // navLabel: "Back",
};

// ---------------------------------------------------------------------------
// CONTENT
// Each <ScrollReveal> wraps one section. Sections follow the order above.
// Delete any optional sections you don't need, but keep 1–7.
// ---------------------------------------------------------------------------

export function Content() {
  return (
    <>
      {/* ===================================================================
          SECTION 1 — CONTEXT
          Caption: "The context"
          Purpose: Sets the stage. Who is the user, what product, what was
                   broken at a high level. A non-designer should understand
                   in 10 seconds. No jargon.
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>The context</ProjectLabel>

        {/* Title: [Company] built [product] for [user] who struggled with [problem class] */}
        <ProjectH2>[Company] built [product] for [user type] who struggled with [problem class]</ProjectH2>

        {/* 2–3 sentences. Introduce the product, the user, and the situation. */}
        <ProjectBody>
          [Describe the product and the user in one sentence.] [Describe the
          situation that created the problem — what were users trying to do, and
          what kept going wrong?] [State the business consequence in plain
          terms.]
        </ProjectBody>
      </ScrollReveal>

      {/* ===================================================================
          SECTION 2 — PROBLEM
          Caption: "The problem"
          Purpose: Sharpens the context into a specific, design-ownable
                   friction point. End with the measurable business cost.
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>The problem</ProjectLabel>

        {/* Title: active verb + specific friction point */}
        <ProjectH2>[Verb] the [specific friction point]</ProjectH2>

        {/* One sentence: the core friction. Then enumerate the pain points. */}
        <ProjectBody>
          [State the core design problem in one sentence — what was the user
          unable to do, or forced to do inefficiently?]
        </ProjectBody>

        {/* 2–4 concrete pain points. Keep each to one line. */}
        <ProjectList
          items={[
            "[Pain point 1 — a specific, observable behavior]",
            "[Pain point 2]",
            "[Pain point 3]",
            // "[Pain point 4 — delete if not needed]",
          ]}
        />

        {/* Business consequence — why did this matter beyond user frustration? */}
        <ProjectBody>
          [One sentence on the downstream business impact: cost, churn, safety
          risk, support load, etc.]
        </ProjectBody>
      </ScrollReveal>

      {/* ===================================================================
          SECTION 3 — HYPOTHESIS
          Caption: "The hypothesis"
          Purpose: Shows strategic thinking. You had a belief about what would
                   work before you started designing. Keep it falsifiable.
          Format:  "If we [design move], then [user behavior change],
                    which will [business outcome]."
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>The hypothesis</ProjectLabel>

        {/* Title: the design bet in a short verb phrase */}
        <ProjectH2>[Short verb phrase describing the design bet]</ProjectH2>

        {/* One paragraph. Structured as: If we X, then Y, which leads to Z. */}
        <ProjectBody>
          If we [design move — e.g. "surface relevant historical data at the
          moment of decision"], then [expected user behavior change — e.g.
          "technicians will spend less time searching and more time acting"],
          which will [business outcome — e.g. "reduce mean time to repair and
          lower operational costs"].
        </ProjectBody>
      </ScrollReveal>

      {/* ===================================================================
          SECTION 4 — OBJECTIVES
          Caption: "The objectives"
          Purpose: Explicit success criteria anchored to the hypothesis.
                   These set up the Outcome section — you prove you hit them.
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>The objectives</ProjectLabel>

        {/* Title: make it specific, not generic */}
        <ProjectH2>[Number] goals to validate the hypothesis</ProjectH2>

        {/* 2–4 numbered, measurable or testable objectives */}
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "[Objective 1 — what does success look like for the user?]",
              body: "[One sentence explaining how you'd measure or test this.]",
            },
            {
              num: "2",
              title: "[Objective 2 — what does success look like for the business?]",
              body: "[One sentence explaining how you'd measure or test this.]",
            },
            {
              num: "3",
              title: "[Objective 3 — what does success look like for the product?]",
              body: "[One sentence explaining how you'd measure or test this.]",
            },
          ]}
        />
      </ScrollReveal>

      {/* ===================================================================
          SECTION 5 — SOLUTION
          Caption: "The solution"
          Purpose: Describe what actually shipped — high level first, then
                   key capabilities. Assume the reader hasn't seen the product.
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>The solution</ProjectLabel>

        {/* Title: one line describing what ships */}
        <ProjectH2>[One-line description of what was built]</ProjectH2>

        {/* Overview paragraph — full scope of the feature/product */}
        <ProjectBody>
          [Describe the shipped solution in 2–3 sentences. What does a user
          experience when they encounter it? What triggers it, what does it
          show, what can they do with it?]
        </ProjectBody>

        {/* Key capabilities — label + numbered rows */}
        <div>
          <ProjectLabel>Key capabilities</ProjectLabel>
          <ProjectNumberedRows
            rows={[
              {
                num: "1",
                title: "[Capability 1 name]",
                body: "[One sentence describing what it does and why it matters.]",
              },
              {
                num: "2",
                title: "[Capability 2 name]",
                body: "[One sentence describing what it does and why it matters.]",
              },
              {
                num: "3",
                title: "[Capability 3 name]",
                body: "[One sentence describing what it does and why it matters.]",
              },
            ]}
          />
        </div>
      </ScrollReveal>

      {/* ===================================================================
          SECTION 6 — KEY DESIGN DECISIONS
          Caption: "The craft"
          Purpose: The most important section for hiring managers and senior
                   designers. Shows WHY you made specific tradeoffs — not just
                   what the UI looks like.
          Format:  3–5 named decisions. Each has a title (the tradeoff) and
                   2–4 sentences of reasoning (the "why").
          Tip:     Titles should sound like a choice was made:
                   Good:  "From percentage scores to qualitative tiers"
                   Avoid: "Confidence display"
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>The craft</ProjectLabel>

        {/* Title */}
        <ProjectH2>[Number] decisions that defined the experience</ProjectH2>

        {/* ProjectDesignChoices pairs an image placeholder with a title + body.
            Set image to null if no image is ready yet. */}
        <ProjectDesignChoices
          choices={[
            {
              title: "[Decision 1 — frame it as a tradeoff or shift]",
              body: (
                <>
                  [Describe the problem with the obvious approach.] [Explain
                  what you chose instead and why.] [State the principle or
                  insight that drove the decision.]
                </>
              ),
            },
            {
              title: "[Decision 2]",
              body: "[Two to four sentences explaining the reasoning. Be specific — name the constraint, the alternative you rejected, and why you chose this path.]",
            },
            {
              title: "[Decision 3]",
              body: "[Two to four sentences. If a user quote or test finding drove the decision, include it here.]",
            },
            {
              title: "[Decision 4 — delete if fewer than 4]",
              body: "[Two to four sentences.]",
            },
          ]}
        />
      </ScrollReveal>

      {/* ===================================================================
          SECTION 7 — OUTCOME
          Caption: "The outcome"
          Purpose: The payoff. Lead with numbers if you have them.
                   If you only have qualitative results, that's fine —
                   be specific about who said what, or what changed.
          Options: Use ProjectTable for metric/baseline/result format.
                   Use ProjectFeedbackCards for qualitative wins.
                   Use ProjectBody + ProjectList for a mixed result set.
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>The outcome</ProjectLabel>

        {/* Title: lead with the most impressive single result */}
        <ProjectH2>[Quantified or qualified result — e.g. "Shipped to 40,000 users in Q3"]</ProjectH2>

        <ProjectBody>
          [One framing sentence: when did this ship, to whom, and at what
          scale?]
        </ProjectBody>

        {/* Option A: Metric table — use when you have before/after numbers */}
        <ProjectTable
          headers={["Metric", "Baseline", "Result"]}
          rows={[
            [
              <strong key="m1">[Metric 1]</strong>,
              "[Baseline value or 'Not measured']",
              "[Result or direction of change]",
            ],
            [
              <strong key="m2">[Metric 2]</strong>,
              "[Baseline value]",
              "[Result]",
            ],
            [
              <strong key="m3">[Metric 3]</strong>,
              "[Baseline value]",
              "[Result]",
            ],
          ]}
        />

        {/* Option B: Qualitative wins — use instead of the table if no metrics */}
        {/* <ProjectFeedbackCards
          cards={[
            {
              num: "1",
              body: "[A specific qualitative win — a user quote, a behavior change observed in testing, or a business milestone.]",
            },
            {
              num: "2",
              body: "[Another specific qualitative win.]",
            },
            {
              num: "3",
              body: "[A third win — if possible, tie this back to one of the objectives from Section 4.]",
            },
          ]}
        /> */}
      </ScrollReveal>

      {/* ===================================================================
          SECTION 8 — REFLECTIONS  (optional)
          Caption: "Looking back"
          Purpose: Shows intellectual honesty and growth mindset.
                   High signal for senior roles. Be specific and candid.
                   Avoid generic statements like "I'd do more user testing."
          ================================================================= */}
      <ScrollReveal>
        {/* Caption */}
        <ProjectLabel>Looking back</ProjectLabel>

        {/* Title */}
        <ProjectH2>What I&rsquo;d change with more time</ProjectH2>

        {/* 2–3 specific, candid reflections */}
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "[Specific thing you'd do differently]",
              body: "[Why — what constraint prevented it, what you learned, and what you'd do now.]",
            },
            {
              num: "2",
              title: "[Another specific reflection]",
              body: "[One to two sentences. Concrete, not generic.]",
            },
          ]}
        />
      </ScrollReveal>
    </>
  );
}
