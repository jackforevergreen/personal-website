import React from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Resume from "./pages/Resume";
import Video from "./pages/Video";
import Writing from "./pages/Writing";
import Blogs from "./pages/blog/Blog";
import Hard from "./pages/projects/75hard";
import BookClub from "./pages/projects/bookclub";
import CarbonCalc from "./pages/projects/carboncalc";
import WakeupLogger from "./pages/projects/dayLogger";
import LoginPage from "./pages/projects/fitness/login";
import TrackerPage from "./pages/projects/fitness/tracker";
import Projects from "./pages/projects/projects";
import Ira from "./pages/projects/stocks/ira";

const App: React.FC = () => (
  <Router>
    <AppWithNav />
  </Router>
);

const AppWithNav: React.FC = () => {
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
  ];

  const projectItems = [
    { path: "/blogs", label: "Blogs" },
    { path: "/video", label: "Video" },
    { path: "/writing", label: "Writing" },
    { path: "/media", label: "Media" },
  ];

  const styles: Record<string, React.CSSProperties> = {
    header: {
      backgroundColor: "white",
      padding: "20px 10px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap" as const,
      gap: "15px",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontSize: "16px",
      padding: "5px",
    },
    dropdownContainer: {
      position: "relative" as const,
      display: "inline-block",
    },
    dropdownButton: {
      background: "none",
      border: "none",
      color: "black",
      fontSize: "16px",
      cursor: "pointer",
      padding: "5px",
      fontFamily: '"Times New Roman", Times, serif',
    },
    dropdownContent: {
      display: isProjectsOpen ? "block" : "none",
      position: "absolute" as const,
      backgroundColor: "white",
      minWidth: "140px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      zIndex: 1,
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: "4px",
    },
    dropdownLink: {
      color: "black",
      textDecoration: "none",
      padding: "8px 12px",
      display: "block",
      textAlign: "center" as const,
    },
    mainContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      fontFamily: '"Times New Roman", Times, serif',
    },
    main: {
      flex: 1,
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "white",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Jack Pearson</h1>
        <nav style={styles.nav}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.link,
                fontWeight: location.pathname === item.path ? "bold" : "normal",
              }}
            >
              {item.label}
            </Link>
          ))}

          <div
            style={styles.dropdownContainer}
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button style={styles.dropdownButton}>More ▾</button>
            <div style={styles.dropdownContent}>
              {projectItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    ...styles.dropdownLink,
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/video" element={<Video />} />
          <Route path="/writing/*" element={<Writing />} />
          <Route path="/blog/*" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stocks/ira" element={<Ira />} />
          <Route path="/75hard" element={<Hard />} />
          <Route path="/carboncalc" element={<CarbonCalc />} />
          <Route path="/daylogger" element={<WakeupLogger />} />
          <Route path="/bookclub" element={<BookClub />} />
          <Route path="/media" element={<Media />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
