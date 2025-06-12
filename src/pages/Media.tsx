import React from "react";
import { Layout, styles } from "../layout";

interface MediaItemProps {
  title: string;
  description: string;
  link: string;
  source: string;
}

// Individual media feature
const MediaItem: React.FC<MediaItemProps> = ({
  title,
  description,
  link,
  source,
}) => (
  <div style={{ marginBottom: "30px" }}>
    <h3 style={styles.sectionTitle}>{title}</h3>
    <p style={styles.paragraph}>
      <strong>Source:</strong> {source}
    </p>
    <p style={styles.paragraph}>{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.link}
    >
      View Media
    </a>
  </div>
);

// Media page component
const Media: React.FC = () => (
  <Layout title="In the Media">
    <p style={styles.paragraph}>
      Here are a few times Forevergreen or I have been featured in the media.
    </p>

    <MediaItem
      title="Forevergreen Featured by the University of Pittsburgh"
      description="An article from Pitt's Office of Philanthropy on Forevergreen's mission and impact."
      link="https://www.giveto.pitt.edu/s/1729/18/interior-giving.aspx?sid=1729&gid=2&pgid=7383&cid=21180&ecid=21180&crid=0&calpgid=2135&calcid=3585"
      source="Pitt Philanthropy"
    />

    <MediaItem
      title="From Seed to Sprout: Forevergreen's Startup Gains Momentum"
      description="Blog post that covers Forevergreen's Big Idea Center journey and product development."
      link="https://blog.innovation.pitt.edu/bigideacenter/from-seed-to-sprout-forevergreens-sustainable-startup-idea-gains-momentum-from-big-idea-center"
      source="Pitt Big Idea Center Blog"
    />

    <MediaItem
      title="Forevergreen at Penn Charter School of Entrepreneurship"
      description="Co-founders Jack and Joe Pearson present Forevergreen at the Big Idea Showcase."
      link="https://www.facebook.com/pittbigidea/photos/on-march-28-jack-and-joe-pearson-brothers-and-co-founders-of-forevergreen-shared/1263133699145668/?_rdr"
      source="Pitt Big Idea (Facebook)"
    />

    <MediaItem
      title="This is a Real Pitt Story: Forevergreen and the Big Idea Center"
      description="Video profile on Forevergreen by the Pitt Alumni Association, highlighting our journey and impact."
      link="https://www.youtube.com/watch?v=cQR-15y3xHc"
      source="YouTube"
    />
    <MediaItem
      title="The Tribune-Democrat Article on Forevergreen"
      description="Article titled: Local college student, friends win innovation prize; aim to start sustainable business"
      link="https://drive.google.com/file/d/1iwA0SXzSbcVUNYwwwzembK62GbsmYRxe/view?usp=drive_link"
      source="YouTube"
    />
  </Layout>
);

export default Media;
