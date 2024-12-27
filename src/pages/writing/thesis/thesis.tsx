import React from "react";
import { Layout, styles } from "../../../layout";
import Test from "./test";

const Thesis: React.FC = () => (
  <Layout title="BPhil Thesis">
    <p style={styles.paragraph}>
      <a
        href="https://d-scholarship.pitt.edu/47217/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        D-Scholarship @ Pitt Link
      </a>
    </p>

    <p style={styles.paragraph}>
      This thesisfocuses on consumer decisions and how sustainable decisions can
      create additional value for consumers. "Value" will be defined in monetary
      and non-monetary terms, encompassing all costs and benefits across five
      distinct components. By examining the different components of value and
      their weights in a consumer's decision, we aim to understand how and why
      consumers make decisions. A study was run on 350 Americans to measure a
      self-reported value score after participants made high-impact decisions
      choosing between sustainable and non-sustainable options. Consumers are
      key stakeholders in businesses and this research will explore how
      sustainable practices that align with consumer values can create durable
      competitive advantage for companies. Furthermore, the thesis will argue
      that transitioning from the traditional industrial capitalist economy to a
      sustainable economic model is essential for long-term societal progress.
      The core hypothesis posits that sustainable decision-making leads to
      superior value creation for individuals/consumers and fosters a more
      resilient and forward-looking global economy.
    </p>
    <Test />
  </Layout>
);

export default Thesis;
