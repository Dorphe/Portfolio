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
  title: "Oasis",
  kicker: "Ubisoft",
  description:
    "New non-linear scriptwriting tool at Ubisoft, propelling games forward with player choices and branching narratives. Oasis helped propel the Assassin's Creed franchise to 200M total sales.",
  intro: (
    <>
      Video game stories were traditionally written linearly, like a screenplay.
      As RPGs with player choice grew dominant, Ubisoft needed a new
      scriptwriting tool. Due to Oasis&rsquo;s proprietary status,{" "}
      <strong>this case study contains no product visuals.</strong>
    </>
  ),
};

export function Content() {
  return (
    <>
      <ScrollReveal>
        <ProjectH2>The objective</ProjectH2>
        <ProjectBody>
          Empower writers and narrative designers to create modular, non-linear
          stories.
        </ProjectBody>
        <ProjectH3>Responsibilities</ProjectH3>
        <ProjectList
          items={[
            "Product design lead",
            "Design system manager",
            <>Assisted with UX research &amp; testing</>,
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Chapter 1 — What is non-linear storytelling?</ProjectH2>
        <ProjectBody>
          Before Oasis, writers worked the same way they would for film or TV: a
          scene, actors, lines, top to bottom.
        </ProjectBody>
        <ProjectBody>
          A non-linear narrative reacts to player input. A player might
          antagonize a character, triggering a confrontation instead of an
          alliance. That choice ripples through the story: different companions,
          different rewards, different endings.
        </ProjectBody>
        <ProjectBody>
          The concept is about giving players agency over how the story unfolds.
        </ProjectBody>
        <ProjectChallenge title="The structural shift">
          <ProjectBody>
            A non-linear script looks more like a flowchart than a screenplay.
            Writers isolate dialogue line by line so lines can flow into one
            another based on game state. Lines connect to form scenes. Scenes
            contain all permutations of a dialogue tree. Scenes embed into other
            scenes to form the larger narrative.
          </ProjectBody>
        </ProjectChallenge>
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Chapter 2 — A paradigm shift for writers</ProjectH2>
        <ProjectBody>
          Writers and narrative designers aren&rsquo;t necessarily technical.
          They&rsquo;d been working the same way for decades, and non-linear
          storytelling required a fundamental shift in process.
        </ProjectBody>
        <ProjectFeature
          title="Writer"
          body="They write the dialogue, descriptions, and in-game text."
        />
        <ProjectFeature
          title="Narrative designer"
          body="They outline story beats, structure mission flow, and define where player choices branch the narrative. They build the containers the writer's words go into."
        />
        <ProjectBody>
          Easing both roles into this new way of working required design help
          from the internal tools department.
        </ProjectBody>
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Chapter 3 — The state of design at the time</ProjectH2>
        <ProjectBody>
          Ubisoft&rsquo;s internal tools department is engineering-led. When I
          joined, there were 3 UX researchers and no designers. The team was
          roughly 150 .NET developers, none of whom had worked with a designer
          before.
        </ProjectBody>
        <ProjectBody>
          I was hired specifically for the biggest shift in Ubisoft&rsquo;s
          tooling strategy, and getting the team dynamics right was going to
          matter as much as the product itself.
        </ProjectBody>
        <ProjectChallenge title="Embedding into the team">
          <ProjectBody>
            The initial dynamic was consultative. I pushed to be embedded into
            the development team to establish a real working relationship. Given
            the culture, there was a risk of being seen as a pixel pusher.
            Despite having no experience with cross-functional design
            collaboration, the team was open to it.
          </ProjectBody>
        </ProjectChallenge>
        <ProjectChallenge title="Proving value through results">
          <ProjectBody>
            Before our involvement, the tool embedded lines into a traditional
            script structure. There had been vague feedback but no structured
            validation. We put a test plan together and gathered actionable data.
            The results shifted the team&rsquo;s perspective, and we continued
            validating hypotheses until we arrived at the node-based editor the
            tool is today.
          </ProjectBody>
        </ProjectChallenge>
        <ProjectChallenge title="Scaling the design team">
          <ProjectBody>
            Word spread. More development teams started requesting design
            support. When I joined, the design team was 4 people. By the end of
            my 3-year tenure, it had grown to 20, and we were building a shared
            design system for both desktop and web tools.
          </ProjectBody>
        </ProjectChallenge>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectH2>Conclusion</ProjectH2>
        <ProjectBody>
          Oasis was a success on both fronts: organizational and commercial.
          Ubisoft&rsquo;s shift to non-linear storytelling helped{" "}
          <strong>
            propel the Assassin&rsquo;s Creed franchise to 200M total sales.
          </strong>
        </ProjectBody>
      </ScrollReveal>
    </>
  );
}
