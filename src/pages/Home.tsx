import React from "react";
import { Link } from "react-router-dom";
import { Layout, styles } from "../layout";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
  return (
    <Layout title="Welcome to My Website!">
      <p style={styles.paragraph}>
        Hi, my name is Jack Pearson. I am a{" "}
        <a
          href="https://www.linkedin.com/posts/jackbpearson_this-past-week-i-graduated-from-the-university-activity-7276631539164098560-AfY7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkLgd8B1hlEeAsBfxcepKZFhjqTDld44eo"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          recent grad
        </a>{" "}
        of the University of Pittsburgh and I work in Finance in NYC. I am
        interested in technology and software development so I built{" "}
        <Link to="/blogs/new-site" style={styles.link}>
          this site
        </Link>{" "}
        as a home base for some of my projects.{" "}
      </p>
      <p>
        Most recently I co-founded{" "}
        <a
          href="https://www.forevergreen.earth"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          Forevergreen
        </a>
        , a startup focused on building climate-conscious software and reducing
        consumer emisisons.
      </p>
      <p>
        I also like to write and wrote a{" "}
        <Link to="/writing/thesis" style={styles.link}>
          thesis
        </Link>{" "}
        about sustainble consumer behavior and am constanlty writing{" "}
        <Link to="/blogs" style={styles.link}>
          blogs
        </Link>{" "}
        about all sorts of things.
      </p>
      <p>
        This site is a work in progress and I am constantly adding new features
        to help me develop my web development skills.
      </p>
      <p>
        Stay tuned as I add more! Thanks for taking the time to check out my
        site.
      </p>
      <h2 style={styles.subHeader}>What’s New 🚀</h2>

      <p style={styles.note}>
        Highlights from recent updates across the site — new tools, features,
        and content drops.
      </p>

      <p style={styles.paragraph}></p>

      <ul style={styles.list}>
        <li style={styles.listItem}>
          <span style={styles.bulletIcon}>•</span>
          Launched a{" "}
          <Link to="/carboncalc" style={styles.link}>
            Carbon Calculator
          </Link>{" "}
          that stores results to Google Sheets
        </li>
        <li style={styles.listItem}>
          <span style={styles.bulletIcon}>•</span>
          Built a{" "}
          <Link to="/daylogger" style={styles.link}>
            Wakeup Tracker
          </Link>{" "}
          using form logging
        </li>
        <li style={styles.listItem}>
          <span style={styles.bulletIcon}>•</span>
          Updated{" "}
          <Link to="/blogs" style={styles.link}>
            blog section
          </Link>{" "}
          with new posts on product design and sustainability
        </li>
      </ul>

      <CustomSocialBar />
    </Layout>
  );
};

export default HomePage;
