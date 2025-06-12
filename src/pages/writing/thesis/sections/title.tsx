import React from "react";

const CombinedTitlePage: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Title Page */}
      <div style={styles.page}>
        <h1 style={styles.title}>
          Sustainable Consumer Decisions and Value Creation: <br />
          How Consumer Choices Drive Business Success and Global Progress
        </h1>

        <p style={styles.byline}>by</p>

        <p style={styles.name}>Jack Pearson</p>

        <p style={styles.affiliation}>
          Bachelor of Philosophy, University of Pittsburgh, 2024
          <br />
          Bachelor of Science in Business Administration & Finance, University
          of Pittsburgh, 2024
        </p>

        <p style={styles.submission}>
          Submitted to the Faculty of the <br />
          David C. Frederick Honors College in partial fulfillment <br />
          of the requirements for the degree of <br />
          Bachelor of Philosophy
        </p>

        <p style={styles.university}>University of Pittsburgh</p>
        <p style={styles.year}>2024</p>
      </div>

      {/* Committee Page */}
      <div style={styles.page}>
        <p style={styles.heading}>UNIVERSITY OF PITTSBURGH</p>
        <p style={styles.heading}>COLLEGE OF BUSINESS ADMINISTRATION</p>

        <p style={styles.spacing}>This thesis was presented</p>
        <p>by</p>
        <p style={styles.name}>Jack Pearson</p>

        <p style={styles.spacing}>It was defended on</p>
        <p>November 15, 2024</p>

        <p style={styles.spacing}>and approved by</p>

        <p style={styles.committeeMember}>
          Rebecca Badawy, Associate Dean for MBA and Specialty Masters; Clinical
          Associate Professor of Business Administration, Joseph M. Katz
          Graduate School of Business
        </p>
        <p style={styles.committeeMember}>
          Joaquin Rodriguez, Associate Professor at the Chemical and Petroleum
          Engineering Department, Swanson School of Engineering
        </p>
        <p style={styles.committeeMember}>
          Nicholas Muller, Lester and Judith Lave Professor of Economics,
          Engineering, and Public Policy, Tepper School of Business
        </p>
        <p style={styles.committeeMember}>
          David Lebel, Associate Professor of Business Administration Ben L.
          Fryrear Faculty Fellow, Joseph M. Katz Graduate School of Business
        </p>

        <p style={styles.pageNumber}>ii</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Times New Roman, serif",
    padding: "40px 20px",
    lineHeight: "2",
  },
  page: {
    textAlign: "center" as const,
    marginBottom: "120px",
    pageBreakAfter: "always" as const,
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold" as const,
    marginBottom: "60px",
  },
  byline: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    marginBottom: "20px",
  },
  affiliation: {
    fontSize: "16px",
    marginBottom: "40px",
  },
  submission: {
    fontSize: "16px",
    marginBottom: "60px",
  },
  university: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  year: {
    fontSize: "16px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    marginBottom: "20px",
  },
  spacing: {
    fontSize: "16px",
    marginTop: "30px",
  },
  committeeMember: {
    fontSize: "16px",
    marginTop: "15px",
    padding: "0 40px",
  },
  pageNumber: {
    fontSize: "14px",
    marginTop: "60px",
  },
};

export default CombinedTitlePage;
