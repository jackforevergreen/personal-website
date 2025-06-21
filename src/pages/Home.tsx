import React from "react";
import { Layout, styles } from "../layout";
import CustomLink from "../pages/components/hoverlink";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
  return (
    <Layout title="Welcome to My Website!">
      <p style={styles.paragraph}>
        Hi, my name is Jack Pearson. I am a{" "}
        <CustomLink
          href="https://www.linkedin.com/posts/jackbpearson_this-past-week-i-graduated-from-the-university-activity-7276631539164098560-AfY7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkLgd8B1hlEeAsBfxcepKZFhjqTDld44eo"
          target="_blank"
          rel="noreferrer"
        >
          recent grad
        </CustomLink>{" "}
        of the University of Pittsburgh and I work in Finance in NYC. I am
        interested in technology and software development so I built{" "}
        <CustomLink href="/blogs/new-site">this site</CustomLink> as a home base
        for some of my projects.
      </p>

      <p>
        Most recently I co-founded{" "}
        <CustomLink
          href="https://www.forevergreen.earth"
          target="_blank"
          rel="noreferrer"
        >
          Forevergreen
        </CustomLink>
        , a startup focused on building climate-conscious software and reducing
        consumer emissions.
      </p>

      <p>
        I also like to write and wrote a{" "}
        <CustomLink href="/writing/thesis">thesis</CustomLink> about sustainable
        consumer behavior and am constantly writing{" "}
        <CustomLink href="/blogs">blogs</CustomLink> about all sorts of things.
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

      <div style={{ marginLeft: "20px", marginTop: "20px" }}>
        <p style={styles.paragraph}>
          • Built a <CustomLink href="/tracker">workout tracker</CustomLink>{" "}
          with Google login to store my workouts and track my lifts/runs.
        </p>

        <p style={styles.paragraph}>
          • Updated <CustomLink href="/blogs">blog section</CustomLink> with new
          posts on product design and sustainability.
        </p>
        <p style={styles.paragraph}>
          • Added a <CustomLink href="/media">media section</CustomLink> for
          media appearances.
        </p>
      </div>

      <CustomSocialBar />
    </Layout>
  );
};

export default HomePage;
