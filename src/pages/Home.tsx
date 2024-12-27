import React from "react";
import { Link } from "react-router-dom";
import { Layout, styles } from "../layout";
import CustomSocialBar from "./components/socialbar";

const Sitemap: React.FC = () => {
  const siteLinks = [
    {
      section: "Navigation",
      links: [
        { title: "Resume", path: "/resume" },
        { title: "About", path: "/about" },
        { title: "Video", path: "/video" },
        { title: "Blogs", path: "/blogs" },
        { title: "Writing", path: "/writing" },
      ],
    },
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
    marginBottom: "12px",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  return (
    <div>
      <h2 style={styles.subHeader}>Site Map</h2>
      <div style={{ display: "flex", gap: "80px" }}>
        {siteLinks.map((section, index) => (
          <div key={index} style={{ minWidth: "200px" }}>
            <h3 style={headerStyle}>{section.section}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <Layout title="Jack Pearson">
      <h1 style={styles.header}>Welcome to My Website</h1>
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
        profiles yet. I'm constantly adding updates and new features!
      </p>

      <CustomSocialBar />
      <Sitemap />
    </Layout>
  );
};

export default HomePage;
