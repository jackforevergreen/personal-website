import React from "react";
import { Layout, styles } from "../layout";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
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
        profiles yet. I'm constantly adding updates and new features!
      </p>

      <CustomSocialBar />
    </Layout>
  );
};

export default HomePage;
