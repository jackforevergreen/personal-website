// src/pages/projects/fitness/components/exerciseblock.tsx
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import InputWithButtonRow from "./inputbuttonrow";

interface Props {
  value: string;
  onChange: (val: string) => void;
  uid: string;
  mode: "lift" | "run";
}

const ExerciseDropdown: React.FC<Props> = ({ value, onChange, uid, mode }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [newExercise, setNewExercise] = useState("");

  useEffect(() => {
    const loadExercises = async () => {
      const q = query(
        collection(db, `users/${uid}/exercises`),
        where("mode", "==", mode), // ← filter by mode
        orderBy("name")
      );
      const snapshot = await getDocs(q);
      const names = snapshot.docs.map((doc) => doc.data().name);
      setOptions(names);
    };
    if (uid) loadExercises();
  }, [mode, uid]);

  const handleAdd = async () => {
    if (!newExercise.trim()) return;
    await addDoc(collection(db, `users/${uid}/exercises`), {
      name: newExercise,
      mode: mode, // ← Pass mode as a prop
    });
    setOptions((prev) => [...prev, newExercise]);
    onChange(newExercise);
    setNewExercise("");
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      <label
        style={{
          fontWeight: "bold",
          marginBottom: "8px",
          display: "block",
          fontSize: "16px",
        }}
      >
        Exercise:
      </label>

      {/* Dropdown */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "7px", // 🟢 spacing under dropdown
          fontSize: "16px",
        }}
      >
        <option value="">-- Select an Exercise --</option>
        {options.map((name, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </select>

      {/* Input + Button Row with spacing */}
      <div style={{ marginBottom: "5px" }}>
        <InputWithButtonRow
          inputValue={newExercise}
          onInputChange={(e) => setNewExercise(e.target.value)}
          onButtonClick={handleAdd}
          placeholder="Add new exercise"
        />
      </div>
    </div>
  );
};

export default ExerciseDropdown;
