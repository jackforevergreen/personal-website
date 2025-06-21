// src/pages/projects/fitness/login.tsx
import { signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../../firebase";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("🔍 Login button clicked");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Logged in as:", user.displayName);
      navigate("/tracker"); // redirect after login
    } catch (error) {
      console.error("❌ Login error:", error);
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate("/tracker");
    }
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Workout Tracker</h1>
      <p style={styles.subtitle}>Please log in to continue</p>
      <button style={styles.button} onClick={handleLogin}>
        🚀 Login with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    padding: "2rem",
  },
  title: {
    fontSize: "2.25rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    textAlign: "center" as const,
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "2rem",
    textAlign: "center" as const,
  },
  button: {
    fontSize: "1rem",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4285F4",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  },
};

export default LoginPage;
