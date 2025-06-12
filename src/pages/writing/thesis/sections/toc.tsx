import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const TableOfContents: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Table of Contents</h2>

      <div style={styles.section}>
        <Link to="#preface" style={styles.link}>
          Preface
        </Link>

        <Link to="#intro" style={styles.link}>
          1.0 Introduction: Climate Change and Sustainability
        </Link>
        <Link to="#solution" style={styles.subLink}>
          1.1 Proposed Solution: Sustainability & Systems Thinking
        </Link>
        <Link to="#consumers" style={styles.subLink}>
          1.2 Consumers: the power of the masses
        </Link>
        <Link to="#valueCreation" style={styles.subLink}>
          1.3 Sustainable Decisions and Greater Value Creation
        </Link>
        <Link to="#structure" style={styles.subLink}>
          1.4 Thesis Structure and Purpose
        </Link>

        <Link to="#consumerSection" style={styles.link}>
          2.0 Consumers and Sustainable Consumption
        </Link>
        <Link to="#who" style={styles.subLink}>
          2.1 Who are consumers?
        </Link>
        <Link to="#drivers" style={styles.subLink}>
          2.2 Consumers as drivers of change
        </Link>
        <Link to="#framework" style={styles.subLink}>
          2.3 The Value Framework
        </Link>

        <Link to="#method" style={styles.link}>
          3.0 Experiment Methodology
        </Link>
        <Link to="#goals" style={styles.subLink}>
          3.1 Goals of the experiment
        </Link>
        <Link to="#methodology" style={styles.subLink}>
          3.2 Methodology and Structure
        </Link>
        <Link to="#choice1" style={styles.subLink}>
          3.3 Consumer Choice 1
        </Link>
        <Link to="#choice2" style={styles.subLink}>
          3.4 Consumer Choice 2
        </Link>
        <Link to="#results" style={styles.subLink}>
          3.5 Results and Measuring Impact
        </Link>
        <Link to="#ttest1" style={styles.subLink}>
          3.6 T-Test 1 – S versus NS Confidence
        </Link>
        <Link to="#ttest2" style={styles.subLink}>
          3.7 T-Test 2 – Choice 1 versus Choice 2 Confidence
        </Link>
        <Link to="#weights" style={styles.subLink}>
          3.8 Value Framework Component Weights
        </Link>
        <Link to="#summary" style={styles.subLink}>
          3.9 Summary of Findings
        </Link>
        <Link to="#future" style={styles.subLink}>
          3.10 Insights for Future Research
        </Link>

        <Link to="#discussion" style={styles.link}>
          4.0 Discussion
        </Link>
        <Link to="#consumerImpact" style={styles.subLink}>
          4.1 Consumer Impacts
        </Link>
        <Link to="#businessImpact" style={styles.subLink}>
          4.2 Business Impacts
        </Link>
        <Link to="#economicImpact" style={styles.subLink}>
          4.3 Economic Impacts
        </Link>
        <Link to="#pathForward" style={styles.subLink}>
          4.4 The path forward
        </Link>

        <Link to="#appendix" style={styles.link}>
          Appendix A Appendices and Supplemental Content
        </Link>
        <Link to="#tables" style={styles.subLink}>
          Appendix A.1 Tables and Figures
        </Link>

        <Link to="#bibliography" style={styles.link}>
          Bibliography
        </Link>
      </div>

      <h2 style={styles.heading}>List of Figures & Tables</h2>
      <div style={styles.section}>
        <Link to="#fig1" style={styles.link}>
          Figure 1 – The structure of the experiment
        </Link>
        <Link to="#fig2" style={styles.link}>
          Figure 2A and 2B – Vehicle Purchase Model
        </Link>
        <Link to="#fig3" style={styles.link}>
          Figure 3 – The Value Assessment
        </Link>
        <Link to="#fig4" style={styles.link}>
          Figure 4A and 4B – Home Purchase Model
        </Link>
        <Link to="#fig5" style={styles.link}>
          Figure 5 – Value Equation Component Weights
        </Link>
        <Link to="#fig6" style={styles.link}>
          Appendix Figure 6 – Vehicle Model Inputs
        </Link>
        <Link to="#fig7" style={styles.link}>
          Appendix Figure 7 – House Model Inputs
        </Link>
        <Link to="#fig8" style={styles.link}>
          Appendix Figure 8 – Vehicle Financial Model
        </Link>
        <Link to="#fig9" style={styles.link}>
          Appendix Figure 9 – House Financial Model
        </Link>
        <Link to="#fig10" style={styles.link}>
          Appendix Figure 10 – Vehicle Environmental Model
        </Link>
        <Link to="#fig11" style={styles.link}>
          Appendix Figure 11 – House Environmental Model
        </Link>
        <Link to="#fig12" style={styles.link}>
          Appendix Figure 12 – First Choice S vs NS
        </Link>
        <Link to="#fig13" style={styles.link}>
          Appendix Figure 13 – Second Choice S vs NS
        </Link>
        <Link to="#fig14" style={styles.link}>
          Appendix Figure 14 – Test 3a Financial
        </Link>
        <Link to="#fig15" style={styles.link}>
          Appendix Figure 15 – Test 3b Environmental
        </Link>
        <Link to="#fig16" style={styles.link}>
          Appendix Figure 16 – Test 3c Social
        </Link>
        <Link to="#fig17" style={styles.link}>
          Appendix Figure 17 – Test 3d Personal
        </Link>
        <Link to="#fig18" style={styles.link}>
          Appendix Figure 18 – Test 3e Psychological
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 40px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Times New Roman, serif",
    textAlign: "left" as const,
  },
  heading: {
    textAlign: "center" as const,
    fontSize: "18px",
    fontWeight: "bold" as const,
    marginBottom: "20px",
    marginTop: "40px",
  },
  section: {
    paddingLeft: "20px",
    marginBottom: "40px",
  },
  link: {
    display: "block",
    fontSize: "16px",
    marginBottom: "8px",
    color: "blue",
    textDecoration: "underline" as const,
  },
  subLink: {
    display: "block",
    fontSize: "16px",
    marginLeft: "20px",
    marginBottom: "8px",
    color: "blue",
    textDecoration: "underline" as const,
  },
};

export default TableOfContents;
