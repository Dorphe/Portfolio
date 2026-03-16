import {
  ScrollReveal,
  ProjectH2,
  ProjectH3,
  ProjectBody,
  ProjectList,
  ProjectLabel,
  ProjectFeature,
  ProjectImage,
} from "@/components";

export const metadata = {
  title: "Oasis",
  kicker: "Ubisoft",
  description:
    "New non-linear scriptwriting tool at Ubisoft, propelling games forward with player choices and branching narratives. Oasis helped propel the Assassin's Creed franchise to 200M total sales.",
  heroImage: "/images/ubi-oasis.png",
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
        <ProjectLabel>The context</ProjectLabel>
        <ProjectH2>A new tool for non-linear storytelling</ProjectH2>
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
        <ProjectLabel>Chapter 1</ProjectLabel>
        <ProjectH2>What is non-linear storytelling?</ProjectH2>
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
        <ProjectH3>The structural shift</ProjectH3>
        <ProjectBody>
          A non-linear script looks more like a flowchart than a screenplay.
          Writers isolate dialogue line by line so lines can flow into one
          another based on game state. Lines connect to form scenes. Scenes
          contain all permutations of a dialogue tree. Scenes embed into other
          scenes to form the larger narrative.
        </ProjectBody>
        <ProjectImage />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>Chapter 2</ProjectLabel>
        <ProjectH2>A paradigm shift for writers</ProjectH2>
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
        <ProjectLabel>Chapter 3</ProjectLabel>
        <ProjectH2>Establishing design in an engineering-led team</ProjectH2>
        <ProjectBody>
          Ubisoft&rsquo;s internal tools department is engineering-led. When I
          joined, there were 3 UX researchers and no designers. The team was
          roughly 150 .NET developers, none of whom had worked with a designer
          before.
        </ProjectBody>
        <ProjectBody>
          I was hired specifically for the biggest shift in Ubisoft&rsquo;s
          tooling strategy. Establishing a working relationship with the
          engineering team mattered as much as the product decisions.
        </ProjectBody>
        <ProjectH3>Embedding into the team</ProjectH3>
        <ProjectBody>
          The initial dynamic was consultative. I pushed to be embedded into
          the development team to build a real working relationship. Given the
          culture, there was a risk of being seen as a pixel pusher. The team
          had no prior experience with cross-functional design collaboration
          and was open to it.
        </ProjectBody>
        <ProjectH3>Proving value through results</ProjectH3>
        <ProjectBody>
          Before our involvement, the tool embedded lines into a traditional
          script structure. There had been vague feedback but no structured
          validation. We put a test plan together and gathered actionable data.
          The results shifted the team&rsquo;s perspective, and we continued
          validating hypotheses until we arrived at the node-based editor the
          tool is today.
        </ProjectBody>
        <ProjectH3>Scaling the design team</ProjectH3>
        <ProjectBody>
          More development teams started requesting design support. When I
          joined, the design team was 4 people. By the end of my 3-year
          tenure, it had grown to 20, and we were building a shared design
          system for both desktop and web tools.
        </ProjectBody>
      </ScrollReveal>

      <ScrollReveal>
        <ProjectLabel>The outcome</ProjectLabel>
        <ProjectH2>200M Assassin&rsquo;s Creed sales</ProjectH2>
        <ProjectBody>
          Oasis delivered on both fronts: the tool shipped, and Ubisoft&rsquo;s
          shift to non-linear storytelling helped{" "}
          <strong>
            propel the Assassin&rsquo;s Creed franchise to 200M total sales.
          </strong>
        </ProjectBody>
      </ScrollReveal>
    </>
  );
}
