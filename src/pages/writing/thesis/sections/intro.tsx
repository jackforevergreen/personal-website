import React from "react";

const IntroSectionStyled: React.FC = () => {
  return (
    <div style={styles.page}>
      <section id="intro">
        <h2 style={styles.centeredHeading}>
          1.0 Introduction:{" "}
          <span style={{ fontStyle: "italic" }}>
            Climate Change and Sustainability
          </span>
        </h2>

        <p style={styles.paragraph}>
          The climate is changing and humans are to blame. Natural ecosystems
          continue to be disregarded as an integral input of our economic
          systems. Our economy’s primary energy sources are fossil fuels which
          are being extracted from Earth's core at a rate faster than they can
          form. These extraction and refinery practices not only remove
          valuable, finite, and nonrenewable resources, but are also highly
          inefficient as most of the material is wasted before it reaches the
          end use-case. A remarkable percentage (over 30%) of the resources
          extracted are directly discarded or mismanaged.{" "}
          <a
            href="https://doi.org/10.1016/j.scitotenv.2021.151785"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            [1]
          </a>{" "}
          In <i>Natural Capitalism</i>, author Paul Hawken attempts to quantify
          the wastefulness of our systems based on industrial flows. Of the
          materials mined or harvested, 93% is lost in extraction and
          manufacturing, with only 7% transformed into finished products. 6% of
          those are discarded after one use by consumers, and only 1% remains in
          durable goods.{" "}
          <a
            href="https://www.un.org/en/exhibits/exhibit/in-images-plastic-forever"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            [2]
          </a>{" "}
          Waste surrounds us, and our production and consumption practices have
          exceeded nature’s ability to process outputs. Plastic waste, for
          instance, can take between 20 to 500 years to decompose, and much of
          it ends up in oceans polluting marine ecosystems.{" "}
          <a
            href="https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            [3]
          </a>{" "}
          Carbon emissions, too, persist in the atmosphere for up to 30 years
          before being reabsorbed into the carbon cycle. The global average CO₂
          concentration now exceeds 419.3 ppm (2023), a 50% increase from
          pre-industrial levels.{" "}
          <a
            href="https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            [4]
          </a>{" "}
          Our modern economy is built on mass production and
          industrialization—optimized for speed, volume, and unit economics, not
          waste minimization or efficiency. Some firms employ strategies like{" "}
          <i>planned obsolescence</i>, where products are intentionally designed
          for early replacement, further escalating waste. These production
          systems, deeply rooted in American culture since the advent of the
          assembly line, influence how goods are manufactured and consumed. To
          fix inefficiencies, both consumption and production cycles must be
          addressed. As these human-centric systems become increasingly complex,
          so does the need to manage their shortcomings. This research explores
          consumer choices and sustainable decision-making—filling a gap in
          existing research. Consumers drive demand, shaping business behavior
          more than supply constraints.
        </p>
      </section>
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
  centeredHeading: {
    textAlign: "center" as const,
    fontSize: "18px",
    fontWeight: "bold" as const,
    marginBottom: "40px",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  link: {
    color: "#1a0dab",
    textDecoration: "underline",
  },
};

export default IntroSectionStyled;
