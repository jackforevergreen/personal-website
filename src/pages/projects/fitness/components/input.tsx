// src/pages/projects/fitness/components/StyledInput.tsx
import React from "react";

interface StyledInputProps {
  placeholder?: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const StyledInput: React.FC<StyledInputProps> = ({
  placeholder = "",
  type = "text",
  value,
  onChange,
  style = {},
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px 12px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "16px",
        lineHeight: "1",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
};
export default StyledInput;
