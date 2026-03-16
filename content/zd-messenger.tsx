import {
  ScrollReveal,
  ProjectH2,
  ProjectH3,
  ProjectBody,
  ProjectList,
  ProjectLabel,
  ProjectNumberedRows,
  ProjectFeature,
  ProjectImage,
  ProjectImageStrip,
} from "@/components";

export const metadata = {
  title: "Web Messenger 5",
  kicker: "Smooch / Zendesk",
  description:
    "Design of a fully customizable web messaging client enabling rich conversational interactions for businesses to engage and convert customers through conversations.",
  heroImage: "/images/zd-messenger.png",
  intro: (
    <>
      Smooch&rsquo;s Web Messenger had accumulated tech and design debt. As the
      company expanded into the enterprise market, it needed a ground-up redesign
      to support <strong>rich conversational interactions</strong> for businesses
      of any size.
    </>
  ),
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectLabel>The context</ProjectLabel>
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
        <ProjectLabel>The objectives</ProjectLabel>
        <ProjectH2>Three goals for the redesign</ProjectH2>
        <ProjectNumberedRows
          rows={[
            {
              num: "1",
              title: "Flexibility for any team size",
              body: "Create a modular, customizable messaging client that works for small businesses and enterprise organizations alike.",
            },
            {
              num: "2",
              title: "Rich conversational interactions",
              body: "Enable interactions that weren't possible through chat before: placing orders, shopping, canceling plane tickets.",
            },
            {
              num: "3",
              title: "Shared design components",
              body: "Share messaging components between the consumer client and the agent dashboard, reducing translation layers for support agents.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>Chapter 1</ProjectLabel>
        <ProjectH2>Flexibility for any team size</ProjectH2>
        <ProjectBody>
          Part of the strategy involved selling to ISVs, so the client had to be
          fully white-label with extensive theming capabilities.
        </ProjectBody>
        <ProjectBody>
          I designed a customization framework with variables exposed through the
          API. Developers could reference these tokens to implement branded
          designs for any organisation size.
        </ProjectBody>
        <ProjectLabel>A framework for every team</ProjectLabel>
        <ProjectBody>
            Small businesses could customize colors at a high level using simple
            options. Larger companies with development resources could engage at a
            much more granular level using variables. Expedia was one of the first
            to adopt the granular framework.
          </ProjectBody>
        <ProjectImageStrip
          variant="landscape"
          images={[
            {
              src: "/images/kjcygvQhj77pdCQmandjTn1its.png",
              caption: "The customization framework adapted to Expedia.",
            },
            {
              src: "/images/gGZZETCAw2y61bNWOROv78KFcmg.png",
              caption: "Simple color customization for small businesses.",
            },
            {
              src: "/images/KlnpkAy38iWuOIpIwIekzppsPFg.png",
              caption: "Granular variable-level customization for larger organisations.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>Chapter 2</ProjectLabel>
        <ProjectH2>Conversation extensions</ProjectH2>
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
          The goal was to make Web Messenger a platform. Businesses could build
          their own integrations or plug in third-party services like Calendly or
          Shopify directly into the conversation.
        </ProjectBody>
        <ProjectImageStrip
          images={[
            {
              src: "/images/NyTjzjPa9lpAkTznYNhWbqous.gif",
              caption: "Buying designer shoes through conversation.",
            },
            {
              src: "/images/fbUE9ykGkmFk3GgCZzSIGsByuR4.gif",
              caption: "Canceling a flight.",
            },
            {
              src: "/images/pNjxqGKx60zJNsNccoW7HWiXxBM.png",
              caption: "Ordering food.",
            },
            {
              src: "/images/aQdVRKv4hnLMN4OWyFxJ5MmJY.png",
              caption: "Receiving order updates.",
            },
            {
              src: "/images/pnsE4wV6cXAXJp4P4FCJnZRJuE0.jpg",
              caption: "An in-conversation validation form.",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>Chapter 3</ProjectLabel>
        <ProjectH2>Conversational design components</ProjectH2>
        <ProjectBody>
          Mid-project, Zendesk acquired Smooch. Zendesk was already one of
          Smooch&rsquo;s biggest partners, and the two design teams had an
          existing relationship. The acquisition expanded the scope: Web
          Messenger would integrate into Zendesk&rsquo;s design system.
        </ProjectBody>
        <ProjectBody>
          The teams aligned through remote collaboration and a workshop week at
          Zendesk&rsquo;s Dublin office.
        </ProjectBody>
        <ProjectH3>Shared components</ProjectH3>
        <ProjectBody>
            The most ambitious goal was sharing the composer and conversation
            components between the messaging client and the agent dashboard.
            Since Smooch was an omnichannel API at its core, this reduced
            translation layers: agents would see exactly what customers saw.
          </ProjectBody>
        <ProjectImage
          src="/images/6CCaWMnE1NK534FSY8a140ZaS7E.gif"
          caption="Shared composer and conversation components across client and agent dashboard."
        />
        <ProjectImageStrip
          images={[
            {
              src: "/images/LW2Lg0bg9ZOQ5c2stiEJI7EEu8.jpg",
            },
            {
              src: "/images/PJrPmDSKsuEs25mzq3klAJN0QY.jpg",
            },
            {
              src: "/images/TKhU4TEND6Zhh1UO6HwtGCkVI.jpg",
            },
            {
              src: "/images/qFcYOrn8RyrNDBAhyVFppRvMPE.jpg",
            },
            {
              src: "/images/YAjHsB1oC99D7z6HqE5rvOho.jpg",
            },
            {
              src: "/images/pw3xbQSMYGkFbb1xFBrOft4yU.jpg",
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The outcome</ProjectLabel>
        <ProjectH2>Foundation for Zendesk&rsquo;s chat widget</ProjectH2>
        <ProjectBody>
          Web Messenger 5 became the foundation for Zendesk&rsquo;s current
          chat widget, used by thousands of businesses for customer
          engagement.
        </ProjectBody>
      </ScrollReveal>
    </>
  );
}
