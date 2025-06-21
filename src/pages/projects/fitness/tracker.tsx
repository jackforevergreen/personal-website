// src/pages/projects/fitness/TrackerPage.tsx
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db, provider } from "../../../firebase";
import StyledButton from "./components/button";
import ExerciseDropdown from "./components/exerciseblock";
import StyledInput from "./components/input";
import WorkoutHistory from "./components/workouthistory";

const TrackerPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState([{ reps: "", weight: "", rpe: "" }]);
  const [refreshKey, setRefreshKey] = useState(0);

  // ✅ Persist user session on reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (existingUser) => {
      if (existingUser) {
        setUser(existingUser);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const handleAddSet = () => {
    setSets([...sets, { reps: "", weight: "", rpe: "" }]);
  };

  const handleSetChange = (
    index: number,
    field: "reps" | "weight" | "rpe",
    value: string
  ) => {
    const newSets = [...sets];
    newSets[index][field] = value;
    setSets(newSets);
  };

  const handleSaveWorkout = async () => {
    if (!user || !exercise) return;

    await addDoc(collection(db, `users/${user.uid}/workouts`), {
      uid: user.uid,
      createdAt: Timestamp.now(),
      exercises: [
        {
          name: exercise,
          sets: sets.map((s) => ({
            reps: parseInt(s.reps),
            weight: parseFloat(s.weight),
            rpe: parseFloat(s.rpe),
          })),
        },
      ],
    });

    setExercise("");
    setSets([{ reps: "", weight: "", rpe: "" }]);
    setRefreshKey((prev) => prev + 1); // 🔁 force WorkoutHistory refresh
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Workout Tracker</h1>
      {!user ? (
        <StyledButton onClick={handleLogin}>Login with Google</StyledButton>
      ) : (
        <>
          <p>Welcome, {user.displayName}</p>
          <ExerciseDropdown
            value={exercise}
            onChange={setExercise}
            uid={user.uid}
          />

          {sets.map((set, i) => (
            <div key={i}>
              <p>Set {i + 1}</p>
              <StyledInput
                placeholder="Reps"
                type="number"
                value={set.reps}
                onChange={(e) => handleSetChange(i, "reps", e.target.value)}
                style={{ marginBottom: "7px" }}
              />
              <StyledInput
                placeholder="Weight"
                type="number"
                value={set.weight}
                onChange={(e) => handleSetChange(i, "weight", e.target.value)}
                style={{ marginBottom: "7px" }}
              />
              <StyledInput
                placeholder="RPE"
                type="number"
                value={set.rpe}
                onChange={(e) => handleSetChange(i, "rpe", e.target.value)}
              />
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            <StyledButton
              onClick={handleAddSet}
              style={{ flex: 1, minWidth: "160px", maxWidth: "220px" }}
            >
              + Add another set
            </StyledButton>
            <StyledButton
              onClick={handleSaveWorkout}
              style={{ flex: 1, minWidth: "160px", maxWidth: "220px" }}
            >
              Log Exercise
            </StyledButton>
          </div>
          <hr />
          <WorkoutHistory uid={user.uid} key={refreshKey} />
        </>
      )}
    </div>
  );
};

export default TrackerPage;
