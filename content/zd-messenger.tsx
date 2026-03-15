import {
  ScrollReveal,
  ProjectH2,
  ProjectH3,
  ProjectBody,
  ProjectList,
  ProjectFeature,
  ProjectChallenge,
  ProjectImage,
} from "@/components";

export const metadata = {
  title: "Web Messenger 5",
  kicker: "Smooch / Zendesk",
  description:
    "Design of a fully customizable web messaging client enabling rich conversational interactions for businesses to engage and convert customers through conversations.",
  intro: (
    <>
      Smooch&rsquo;s Web Messenger had accumulated tech and design debt. As the
      company expanded into the enterprise market, it needed a ground-up redesign
      to support <strong>rich conversational interactions</strong> at any scale.
    </>
  ),
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectH2>About Smooch &amp; Zendesk</ProjectH2>
        <ProjectBody>
          Smooch built omnichannel messaging solutions for SMBs and ISVs. Zendesk
          acquired them in 2019, and the product became a core part of
          Zendesk&rsquo;s offering as Sunshine Conversations.
        </ProjectBody>
        <ProjectH3>Responsibilities</ProjectH3>
        <ProjectList
          items={[
            "Product design lead",
            "Point resource for external collaborators",
            "Design system manager",
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>The objectives</ProjectH2>
        <ProjectFeature
          title="1 — Flexibility at any scale"
          body="Create a modular, customizable messaging client that works for small businesses and enterprise organizations alike."
        />
        <ProjectFeature
          title="2 — Rich conversational interactions"
          body="Enable interactions that weren't possible through chat before: placing orders, shopping, canceling plane tickets."
        />
        <ProjectFeature
          title="3 — Shared design components"
          body="Share messaging components between the consumer client and the agent dashboard, reducing translation layers for support agents."
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Chapter 1 — Flexibility at any scale</ProjectH2>
        <ProjectBody>
          Part of the strategy involved selling to ISVs, so the client had to be
          fully white-label with extensive theming capabilities.
        </ProjectBody>
        <ProjectBody>
          I designed a customization framework with variables exposed through the
          API. Developers could reference these tokens to implement branded
          designs at scale.
        </ProjectBody>
        <ProjectChallenge title="A framework for every team">
          <ProjectBody>
            Small businesses could customize colors at a high level using simple
            options. Larger companies with development resources could engage at a
            much more granular level using variables. Expedia was one of the first
            to adopt the granular framework.
          </ProjectBody>
        </ProjectChallenge>
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Chapter 2 — Conversation extensions</ProjectH2>
        <ProjectBody>
          By 2018, consumers expected to handle business through text. Web
          Messenger 5 was designed to enable interactions that weren&rsquo;t
          previously possible through chat: placing orders, shopping, canceling
          plane tickets.
        </ProjectBody>
        <ProjectH3>Use cases shipped</ProjectH3>
        <ProjectList
          items={[
            "Buying designer shoes through conversation",
            "Canceling a flight",
            "Ordering food",
            "Receiving order updates",
            "In-conversation validation forms",
          ]}
        />
        <ProjectBody>
          The north star was to make Web Messenger a platform. Businesses could
          build their own integrations or plug in third-party services like
          Calendly or Shopify directly into the conversation.
        </ProjectBody>
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Chapter 3 — Conversational design components</ProjectH2>
        <ProjectBody>
          Mid-project, Zendesk acquired Smooch. Zendesk was already one of
          Smooch&rsquo;s biggest partners, and the two design teams had an
          existing relationship. The acquisition expanded the scope: Web
          Messenger would integrate into Zendesk&rsquo;s design system.
        </ProjectBody>
        <ProjectBody>
          The teams aligned through remote collaboration and an intensive
          workshop week at Zendesk&rsquo;s Dublin office.
        </ProjectBody>
        <ProjectChallenge title="Shared components">
          <ProjectBody>
            The most ambitious goal was sharing the composer and conversation
            components between the messaging client and the agent dashboard.
            Since Smooch was an omnichannel API at its core, this reduced
            translation layers: agents would see exactly what customers saw.
          </ProjectBody>
        </ProjectChallenge>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Conclusion</ProjectH2>
        <ProjectBody>
          Web Messenger 5 became the foundation for Zendesk&rsquo;s current
          AI-powered chat widget, used by thousands of businesses for customer
          engagement.
        </ProjectBody>
      </ScrollReveal>
    </>
  );
}
