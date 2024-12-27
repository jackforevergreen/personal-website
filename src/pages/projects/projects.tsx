import React from "react";
import { Layout, styles } from "../../layout";

const Projects: React.FC = () => {
  const projectLinks = [
    {
      section: "Projects",
      links: [
        { title: "IRA Stocks", path: "/stocks/ira" },
        { title: "Carbon Calc", path: "/carboncalc" },
        { title: "75 hard", path: "/75hard" },
        { title: "Wakeup Log", path: "/daylogger" },
      ],
    },
  ];

  const linkStyle = {
    color: "#0066cc",
    textDecoration: "none",
    display: "block",
    marginBottom: "4px",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  return (
    <Layout title="Projects">
      <p style={styles.paragraph}>
        Here is the list of projects I have built on this site. I am working to
        develop my skills and make useful enhancements to my life.
      </p>

      <h2 style={styles.subHeader}>Project Links</h2>
      <div style={{ display: "flex", gap: "80px" }}>
        {projectLinks.map((section, index) => (
          <div key={index} style={{ minWidth: "200px" }}>
            <h3 style={headerStyle}>{section.section}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.path}
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    {link.title}
                  </a>
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
