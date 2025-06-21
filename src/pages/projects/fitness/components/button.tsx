// src/pages/projects/fitness/components/StyledButton.tsx
import React from "react";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  style = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#ccc" : "#217e38",
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        lineHeight: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default StyledButton;
