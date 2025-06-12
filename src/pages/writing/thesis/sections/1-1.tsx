import React from "react";

const Section1: React.FC = () => {
  return (
    <div style={styles.page} id="solution">
      <h2 style={styles.heading}>
        1.1 Proposed Solution: Sustainability & Systems Thinking
      </h2>

      <p style={styles.paragraph}>
        Sustainability provides a guiding framework for responding to the
        climate crisis. It was first defined by the United Nations Brundtland
        Commission in 1987 as “meeting the needs of the present without
        compromising the ability of future generations to meet their own needs.”
        While that definition is comprehensive and widely accepted, it is also
        vague and overly broad. More recent definitions have refined the concept
        to be more actionable. In{" "}
        <em>Sustainability: What Everyone Needs to Know</em>, Thompson and
        Norris offer a sharper take: “a measure of whether (or to what extent) a
        process or practice can continue.”{" "}
        <a
          href="https://global.oup.com/academic/product/sustainability-9780190062316"
          style={styles.link}
        >
          [5]
        </a>
      </p>

      <p style={styles.paragraph}>
        This modern definition shifts the emphasis toward long-term feasibility
        and repeatability—what can continue and for how long. It reinforces the
        need to factor future viability into current decision-making. From a
        business or individual standpoint, this definition helps connect
        sustainable practice with strategic planning, as decisions must be
        compatible with continuity.
      </p>

      <p style={styles.paragraph}>
        This thesis adopts a simple working definition: a sustainable decision
        is one that does not jeopardize your ability to make the same decision
        again in the future. In theory, the most sustainable decisions are those
        that can be repeated infinitely. While such perfect cases are rare,
        sustainability lies in the effort to maximize net benefit and minimize
        net cost in a way that maintains future opportunity.
      </p>

      <p style={styles.paragraph}>
        Systems thinking is a critical complement to this framework. It
        emphasizes interconnection and feedback loops. Donella Meadows, in{" "}
        <em>Thinking in Systems</em>, argues that “the behavior of a system
        cannot be known just by knowing the elements of which the system is
        made.”{" "}
        <a href="https://wtf.tw/ref/meadows.pdf" style={styles.link}>
          [6]
        </a>{" "}
        In other words, the structure and feedback of the system matter just as
        much as its components. Most human activity—including economic
        activity—is a subsystem of the biosphere. Nearly 30% of global economic
        output is macro-critically dependent on natural systems like water
        cycles, nutrient flows, and ecological stability.{" "}
        <a
          href="https://www.nature.com/articles/s41586-021-03595-2"
          style={styles.link}
        >
          [7]
        </a>
      </p>

      <p style={styles.paragraph}>
        From a systems view, sustainable processes are those that produce equal
        or greater output with fewer inputs over time. These systems last
        longer, use fewer resources, and typically deliver stronger long-term
        value. They minimize extraction while maximizing regeneration. That is
        the vision of sustainability embedded in this research.
      </p>
    </div>
  );
};

const styles = {
  page: {
    padding: "100px 60px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Times New Roman, serif",
    textAlign: "justify" as const,
    lineHeight: "1.8",
  },
  heading: {
    textAlign: "center" as const,
    fontSize: "18px",
    fontWeight: "bold" as const,
    marginBottom: "40px",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "24px",
  },
  link: {
    color: "#3366cc",
    textDecoration: "underline",
    marginLeft: "4px",
  },
};

export default Section1;
