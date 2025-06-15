import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomLink from "./components/hoverlink"; // ✅ Adjust path as needed
import ElieWieselEssay from "./writing/elie-wiesel-essay";
import HonorsSustainabilityEssay from "./writing/honors-sustainability-essay";
import Thesis from "./writing/thesis/thesis";

export interface WritingItemProps {
  title: string;
  type: string;
  description: string;
  slug: string;
}

// Define the WritingItem component
export const WritingItem: React.FC<WritingItemProps> = ({
  title,
  type,
  description,
  slug,
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    <p style={{ marginBottom: "10px", fontStyle: "italic" }}>{type}</p>
    <p>{description}</p>
    <CustomLink href={`/writing/${slug}`}>Read more</CustomLink>
  </div>
);

// Define the WritingList component
const WritingList: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>My Writing</h2>
    <WritingItem
      title="Sustainability Consumers as a Catalyst for Global Progress: A Study of Value in Consumers, Businesses, and the World."
      type="BPhil Thesis"
      description="An in-depth analysis of how sustainable business practices can drive long-term growth and profitability in modern corporations."
      slug="thesis"
    />
    <WritingItem
      title="How Sustainable Business Can Build a Better Future"
      type="Essay Contest"
      description="Exploring the role of sustainable business practices in shaping a more environmentally conscious and socially responsible future."
      slug="elie-wiesel-essay"
    />
    <WritingItem
      title="Quantifying the Climatic Impact of Anthropogenic Actions and the Imperative for Carbon Pricing Mechanisms"
      type="Academic Essay"
      description="A comprehensive examination of current sustainability challenges and potential solutions across various industries and sectors."
      slug="honors-sustainability-essay"
    />
  </div>
);

// Define the main Writing component with routes
const Writing: React.FC = () => (
  <Routes>
    <Route path="/" element={<WritingList />} />
    <Route path="/thesis" element={<Thesis />} />
    <Route path="/elie-wiesel-essay" element={<ElieWieselEssay />} />
    <Route
      path="/honors-sustainability-essay"
      element={<HonorsSustainabilityEssay />}
    />
  </Routes>
);

export default Writing;
