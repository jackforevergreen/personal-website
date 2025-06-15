import React from "react";
import { Layout, styles } from "../../layout";
import CustomLink from "../components/hoverlink";

const Projects: React.FC = () => {
  const projectLinks = [
    {
      section: "Projects",
      links: [
        {
          title: "IRA Stocks",
          path: "/stocks/ira",
          description:
            "Part of my Independent Study in my final semester of Pitt. I ranked public equities and explored retirement and compounding.",
        },
        {
          title: "Book Club",
          path: "/bookclub",
          description:
            "A living library of books I'm reading with reflections and key takeaways.",
        },
        {
          title: "Carbon Calc",
          path: "/carboncalc",
          description:
            "Built a web-based carbon calculator that stores results to a Google Sheet.",
        },
        {
          title: "75 Hard",
          path: "/75hard",
          description:
            "Tracked daily goals, sent automated emails, and displayed progress on site.",
        },
        {
          title: "Wakeup Log",
          path: "/daylogger",
          description:
            "Logged wake-up times to a spreadsheet using a single-click form.",
        },
      ],
    },
  ];

  return (
    <Layout title="Projects">
      <p style={styles.paragraph}>
        Here is the list of projects I have built on this site. I am working to
        develop my skills and make useful enhancements to my life.
      </p>

      <h2 style={styles.subHeader}>Project Links</h2>
      <div style={{ display: "flex", gap: "80px", flexWrap: "wrap" }}>
        {projectLinks.map((section, index) => (
          <div key={index} style={{ minWidth: "200px" }}>
            <h3 style={styles.sectionTitle}>{section.section}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} style={{ marginBottom: "20px" }}>
                  <CustomLink href={link.path}>{link.title}</CustomLink>

                  <p>{link.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
