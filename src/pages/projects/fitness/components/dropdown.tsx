// src/pages/projects/fitness/components/dropdown.tsx
import React from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder?: string;
}

const StyledDropdown: React.FC<Props> = ({
  value,
  onChange,
  options,
  placeholder = "-- Select an Option --",
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "14px",
        marginBottom: "10px",
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default StyledDropdown;
