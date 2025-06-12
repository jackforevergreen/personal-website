import React from "react";

const styles = {
  pageContainer: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Times New Roman",
    boxSizing: "border-box" as const,
  },
  header: {
    fontSize: "28px",
    marginBottom: "25px",
    fontWeight: "bold" as const,
    color: "#000",
  },
  subHeader: {
    fontSize: "22px",
    marginTop: "25px",
    marginBottom: "15px",
    fontWeight: "bold" as const,
    color: "#000",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  list: {
    marginLeft: "20px",
    marginBottom: "20px",
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "12px",
    fontSize: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    lineHeight: "1.5",
  },

  bulletIcon: {
    fontSize: "18px",
    lineHeight: "1.2",
    color: "#444",
    marginTop: "2px",
  },
  link: {
    color: "#0066cc",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold" as const,
    marginTop: "20px",
    marginBottom: "10px",
  },
  subSectionTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    marginTop: "15px",
    marginBottom: "10px",
  },
  abstractTitle: {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  abstract: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
    fontStyle: "italic",
  },
  referencesContainer: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  referencesList: {
    paddingLeft: "20px",
  },
  referencesListItem: {
    fontSize: "14px",
    marginBottom: "10px",
    lineHeight: "1.4",
  },
  referencesLink: {
    color: "#0066cc",
    textDecoration: "none",
  },
  date: {
    fontSize: "16px",
    marginTop: "20px",
    marginBottom: "10px",
    fontStyle: "italic",
  },
  image: {
    maxWidth: "75%",
    height: "auto",
    marginBottom: "20px",
    justifyContent: "center",
  },
  horizontalLine: {
    border: 0,
    height: "1px",
    backgroundColor: "#ccc",
    margin: "20px 0",
  },
  twitterEmbed: {
    marginBottom: "20px",
    maxWidth: "550px",
    margin: "0 auto",
  },
  backLink: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#000",
  },
  quote: {
    borderLeft: "4px solid #ccc",
    padding: "10px 20px",
    margin: "20px 0",
    fontStyle: "italic",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
};

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<PageLayoutProps> = ({ title, children }) => (
  <div style={styles.pageContainer}>
    <h1 style={styles.header}>{title}</h1>
    {children}
  </div>
);

export { Layout, styles };
