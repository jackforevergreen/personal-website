import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hard from "./pages/75hard";
import About from "./pages/About";
import Blogs from "./pages/Blog";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Video from "./pages/Video";
import Writing from "./pages/Writing";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          fontFamily: '"Times New Roman", Times, serif',
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column" as const,
        }}
      >
        <header
          style={{
            backgroundColor: "white",
            padding: "20px 0",
            textAlign: "center" as const,
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Jack Pearson
          </h1>
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/blogs" style={linkStyle}>
              Blogs
            </Link>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
            <Link to="/resume" style={linkStyle}>
              Resume
            </Link>
            <Link to="/writing" style={linkStyle}>
              Writing
            </Link>
            <Link to="/video" style={linkStyle}>
              Video
            </Link>
          </nav>
        </header>
        <main
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "white",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/video" element={<Video />} />
            <Route path="/writing/*" element={<Writing />} />
            <Route path="/blog/*" element={<Blogs />} />
            <Route path="/75hard" element={<Hard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const linkStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#000",
  textDecoration: "none",
};

export default App;
