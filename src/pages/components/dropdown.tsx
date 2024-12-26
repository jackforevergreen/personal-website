import React, { useState } from "react";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyles = {
    container: {
      marginBottom: "20px",
      width: "100%",
    },
    button: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "#f8f9fa",
      border: "1px solid #e9ecef",
      borderRadius: isOpen ? "8px 8px 0 0" : "8px",
      padding: "12px 16px",
      cursor: "pointer",
      color: "#000",
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Times New Roman",
      width: "100%",
      textAlign: "left" as const,
      transition: "all 0.2s ease",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    iconWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "24px",
      height: "24px",
      flexShrink: 0,
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flex: 1,
    },
    arrow: {
      marginLeft: "auto",
      transition: "transform 0.3s ease",
      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
      color: "#495057",
      fontSize: "16px",
    },
    content: {
      backgroundColor: "#fff",
      border: "1px solid #e9ecef",
      borderTop: "none",
      borderRadius: "0 0 8px 8px",
      overflow: "hidden",
      maxHeight: isOpen ? "5000px" : "0",
      opacity: isOpen ? 1 : 0,
      transition: "all 0.3s ease-in-out",
      padding: isOpen ? "16px" : "0",
    },
  };

  const renderIcon = () => {
    if (!icon) return null;

    if (React.isValidElement(icon) && icon.type === "img") {
      return (
        <span style={dropdownStyles.iconWrapper}>
          {React.cloneElement(icon as React.ReactElement, {
            style: { maxWidth: "100%", height: "auto" },
          })}
        </span>
      );
    }

    return <span style={dropdownStyles.iconWrapper}>{icon}</span>;
  };

  return (
    <div style={dropdownStyles.container}>
      <button
        style={{
          ...dropdownStyles.button,
          background: isOpen ? "#f1f3f5" : "#f8f9fa",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={dropdownStyles.titleContainer}>
          {renderIcon()}
          {title}
        </div>
        <span style={dropdownStyles.arrow}>▶</span>
      </button>
      <div style={dropdownStyles.content}>{children}</div>
    </div>
  );
};

export default Dropdown;
