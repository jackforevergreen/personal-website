import React from "react";
import { Layout, styles } from "../../../layout";
import Section1 from "./sections/1-1";
import IntroSection from "./sections/intro";
import PrefacePage from "./sections/preface";
import TitlePage from "./sections/title";
import TableOfContents from "./sections/toc";

const Thesis: React.FC = () => (
  <Layout title="BPhil Thesis">
    <TitlePage />

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

    <TableOfContents />
    <PrefacePage />
    <IntroSection />
    <Section1 />
  </Layout>
);

export default Thesis;
