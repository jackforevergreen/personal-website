import React from "react";

const PrefacePage: React.FC = () => {
  return (
    <div style={styles.page} id="preface">
      <h2 style={styles.heading}>Preface</h2>
      <p style={styles.paragraph}>
        This thesis was written to highlight the inefficiencies in our current
        systems of consumption, production, and business. It is evident that
        significant changes to these systems are necessary to avoid
        environmental catastrophe. During my undergraduate study of finance, I
        was trained in methods for making financially sound business decisions
        but observed that the downstream and environmental impacts of corporate
        and industrial projects were often overlooked. This realization led me
        to explore sustainable business practices as a way to build truly
        successful businesses—those that create long-term value for society.
        Successful entrepreneurs understand the importance of building
        customer-focused businesses. Providing maximum value to customers not
        only generates higher returns but also fosters a stronger competitive
        advantage. Through this research, I have gained valuable insights into
        what consumers value most and how those decisions impact broader
        systems. This thesis represents the beginning of my efforts to develop
        stronger, more persuasive arguments that sustainability provides a
        powerful framework for addressing complex problems. Moving forward, I
        hope to extend these principles to explore applications in business and
        economic systems. The ultimate goal is to create efficient, sustainable
        systems that benefit humanity and allow us to live in harmony with our
        planet.
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
  },
};

export default PrefacePage;
