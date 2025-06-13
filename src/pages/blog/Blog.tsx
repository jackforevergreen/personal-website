import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HowNotToRunMarathon from "./how-not-to-run-marathon";
import HowToBeAMillionare from "./how-to-be-a-millionare";
import HowToCreateAResume from "./how-to-create-a-resume";
import TravelWithCreditCards from "./how-travel-with-credit-card-points";
import PreJackPearsonBlogs from "./pre-jack-pearson-blogs";

export interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

// Define the BlogPostItem component
export const BlogPostItem: React.FC<BlogPostProps> = ({
  title,
  date,
  excerpt,
  slug,
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    <p style={{ marginBottom: "10px", fontStyle: "italic" }}>{date}</p>
    <p>{excerpt}</p>
    <Link to={`/blog/${slug}`} style={linkStyle}>
      Read more
    </Link>
  </div>
);

// Define the BlogList component
const BlogList: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>My Blog</h2>
    <BlogPostItem
      title="How to create a resume to land your dream job"
      date="June 13, 2025"
      excerpt="How I built the resume that landed me a six figure job on Wall Street."
      slug="how-to-create-a-resume"
    />
    <BlogPostItem
      title="How I used credit cards to backpack to 5 countries"
      date="June 12, 2025"
      excerpt="I got to 5 countries and only spent $28 on flights."
      slug="how-travel-with-credit-card-points"
    />
    <BlogPostItem
      title="How not to train for and run a marathon"
      date="June 11, 2025"
      excerpt="I ran my first ever marathon and it hurt. Heres what I wish I knew. "
      slug="how-not-to-run-marathon"
    />
    <BlogPostItem
      title="New Personal Website!"
      date="September 20, 2024"
      excerpt="I made a new website! This is my 5th blog post. I hope you enjoy it."
      slug="new-site"
    />
    <BlogPostItem
      title="My Coding Orgins"
      date="December 5, 2023 - January 14, 2024"
      excerpt="These are all the blogs I wrote before I made this website.)"
      slug="pre-jack-pearson-blogs"
    />
  </div>
);

// Define the main Blog component with routes
const Blog: React.FC = () => (
  <Routes>
    <Route path="/" element={<BlogList />} />
    <Route path="/pre-jack-pearson-blogs" element={<PreJackPearsonBlogs />} />
    <Route path="/how-not-to-run-marathon" element={<HowNotToRunMarathon />} />
    <Route path="/how-to-be-a-millionare" element={<HowToBeAMillionare />} />
    <Route
      path="/how-travel-with-credit-card-points"
      element={<TravelWithCreditCards />}
    />
    <Route path="/how-to-create-a-resume" element={<HowToCreateAResume />} />
  </Routes>
);

const linkStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "blue",
  textDecoration: "underline",
};

export default Blog;
