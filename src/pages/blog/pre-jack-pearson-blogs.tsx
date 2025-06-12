import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../layout";
import BlogPost1 from "./components/blog1/blog1";
import BlogPost2 from "./components/blog2";
import BlogPost3 from "./components/blog3";
import BlogPost4 from "./components/blog4";

const NewSite: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>Pre jack-pearson.com Blogs</h1>
      <div style={styles.note}>
        <strong>Note:</strong> These blogs were written during my spring
        semester of my Junior year of school. They were published on a few
        different HTML or Javascript sites I made to track my progress as I
        built Forevergreen's first product. I like to have them as it is a
        reminder of how far I grew in my technical journey.
      </div>
      <BlogPost4 />
      <BlogPost3 />
      <BlogPost2 />
      <BlogPost1 />

      <Link to="/blogs" style={styles.backLink}>
        Back to Blogs
      </Link>
    </div>
  );
};

export default NewSite;
