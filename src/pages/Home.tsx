import React from "react";
import { Layout, styles } from "../layout";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
  const projectLinks = [
    {
      section: "Projects",
      links: [
        {
          title: "IRA Stocks",
          path: "/stocks/ira",
          description:
            "Part of my Independent Study in my final semester of Pitt. I did some ranking of public equities and wrote a little about retirement and compounding.",
        },
        {
          title: "Carbon Calc",
          path: "/carboncalc",
          description:
            "Build a web version of the carbon calc that stores data on a google sheet.",
        },
        {
          title: "75 Hard",
          path: "/75hard",
          description:
            "Wanted to learn how to send automated emails, track data in a google form and display it on the site.",
        },
        {
          title: "Wakeup Log",
          path: "/daylogger",
          description:
            "Button that records the time in a sheet and displays it.",
        },
        {
          title: "Book Club",
          path: "/bookclub",
          description:
            "A collection of books I am currently reading or have read.",
        },
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
    <Layout title="Welcome to My Website!">
      <p style={styles.paragraph}>
        Hi, I'm Jack Pearson, a finance major and aspiring developer. This
        website hosts some of my projects and helps me develop my web
        development skills. Stay tuned as I add more!
      </p>

      <h2 style={styles.subHeader}>Site Development 🛠️</h2>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
          borderRadius: "4px",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <strong>Note:</strong> This site is still in development and constantly
        being updated!
      </div>
      <p style={styles.paragraph}>
        This site is still pre-launch, and I haven't linked it to any public
        profiles yet. I'm still building!
      </p>

      <CustomSocialBar />
      <Layout title="Projects">
        <p style={styles.paragraph}>
          Here is the list of projects I have built on this site. I am working
          to develop my skills and make useful enhancements to my life.
        </p>
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
                    {/* Render the description below each project */}
                    <p
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        marginTop: "5px",
                      }}
                    >
                      {link.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Layout>
    </Layout>
  );
};

export default HomePage;
