import React from "react";
import StyledButton from "./button";
import StyledInput from "./input";

interface Props {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  placeholder?: string;
  buttonText?: string;
  disabled?: boolean;
}

const InputWithButtonRow: React.FC<Props> = ({
  inputValue,
  onInputChange,
  onButtonClick,
  placeholder = "Enter value",
  buttonText = "+ Add",
  disabled = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center", // ✅ Align input + button vertically
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <StyledInput
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
        style={{
          flex: 1,
          padding: "10px 12px",
          fontSize: "16px",
          borderRadius: "6px",
          lineHeight: "1.4", // Match button
        }}
      />
      <StyledButton
        onClick={onButtonClick}
        disabled={disabled}
        style={{
          padding: "10px 16px",
          fontSize: "16px",
          borderRadius: "6px",
          lineHeight: "1.4", // Match input
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {buttonText}
      </StyledButton>
    </div>
  );
};

export default InputWithButtonRow;
