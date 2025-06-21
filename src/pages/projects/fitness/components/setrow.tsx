// src/components/SetRow.tsx
import React from "react";

interface SetData {
  reps: number;
  weight: number;
  rpe: number;
}

interface Props {
  index: number;
  data: SetData;
  onChange: (updated: SetData) => void;
}

const SetRow: React.FC<Props> = ({ index, data, onChange }) => {
  const handleChange = (field: keyof SetData, value: number) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div style={styles.row}>
      <span style={styles.label}>Set {index + 1}:</span>
      <input
        type="number"
        value={data.reps}
        onChange={(e) => handleChange("reps", parseInt(e.target.value) || 0)}
        placeholder="Reps"
        style={styles.input}
      />
      <input
        type="number"
        value={data.weight}
        onChange={(e) =>
          handleChange("weight", parseFloat(e.target.value) || 0)
        }
        placeholder="Weight (lbs)"
        style={styles.input}
      />
      <input
        type="number"
        value={data.rpe}
        onChange={(e) => handleChange("rpe", parseFloat(e.target.value) || 0)}
        placeholder="RPE"
        step={0.5}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
  label: {
    fontWeight: 500,
  },
  input: {
    padding: "0.4rem",
    width: "80px",
    fontSize: "0.9rem",
  },
};

export default SetRow;
