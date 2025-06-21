// src/pages/projects/fitness/TrackerPage.tsx
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase";
import { useAuth } from "../../components/authContext";
import CustomLink from "../../components/hoverlink";
import StyledButton from "./components/button";
import ExerciseDropdown from "./components/exerciseblock";
import StyledInput from "./components/input";
import WorkoutHistory from "./components/workouthistory";

const TrackerPage: React.FC = () => {
  const { user, login, logout } = useAuth();
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState([{ reps: "", weight: "", rpe: "" }]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [mode, setMode] = useState<"lift" | "run">("lift");
  const [runDetails, setRunDetails] = useState({
    distance: "",
    pace: "",
    time: "",
  });

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
      mode,
      exercises:
        mode === "lift"
          ? [
              {
                name: exercise,
                sets: sets.map((s) => ({
                  reps: parseInt(s.reps),
                  weight: parseFloat(s.weight),
                  rpe: parseFloat(s.rpe),
                })),
              },
            ]
          : [
              {
                name: exercise,
                sets: [
                  {
                    distance: parseFloat(runDetails.distance),
                    pace: parseFloat(runDetails.pace),
                    time: parseFloat(runDetails.time),
                  },
                ],
              },
            ],
    });

    setExercise("");
    setSets([{ reps: "", weight: "", rpe: "" }]);
    setRunDetails({ distance: "", pace: "", time: "" });
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Workout Tracker</h1>
      {!user ? (
        <StyledButton onClick={login}>Login with Google</StyledButton>
      ) : (
        <>
          <p>Welcome, {user.displayName}</p>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              <input
                type="radio"
                name="mode"
                value="lift"
                checked={mode === "lift"}
                onChange={() => setMode("lift")}
              />
              Lift
            </label>
            <label style={{ marginLeft: "1rem" }}>
              <input
                type="radio"
                name="mode"
                value="run"
                checked={mode === "run"}
                onChange={() => setMode("run")}
              />
              Run
            </label>
          </div>
          <ExerciseDropdown
            value={exercise}
            onChange={setExercise}
            uid={user.uid}
            mode={mode}
          />
          {mode === "lift" ? (
            sets.map((set, i) => (
              <div key={i}>
                <p>Set {i + 1}</p>
                <StyledInput
                  placeholder="Reps"
                  value={set.reps}
                  onChange={(e) => handleSetChange(i, "reps", e.target.value)}
                  style={{ marginBottom: "7px" }} // 🟢 spacing under dropdown
                />
                <StyledInput
                  placeholder="Weight"
                  value={set.weight}
                  onChange={(e) => handleSetChange(i, "weight", e.target.value)}
                  style={{ marginBottom: "7px" }} // 🟢 spacing under dropdown
                />
                <StyledInput
                  placeholder="RPE"
                  value={set.rpe}
                  onChange={(e) => handleSetChange(i, "rpe", e.target.value)}
                />
              </div>
            ))
          ) : (
            <>
              <StyledInput
                placeholder="Distance (miles)"
                value={runDetails.distance}
                onChange={(e) =>
                  setRunDetails({ ...runDetails, distance: e.target.value })
                }
                style={{ marginBottom: "7px" }} // 🟢 spacing under dropdown
              />
              <StyledInput
                placeholder="Pace (min/mile)"
                value={runDetails.pace}
                onChange={(e) =>
                  setRunDetails({ ...runDetails, pace: e.target.value })
                }
                style={{ marginBottom: "7px" }} // 🟢 spacing under dropdown
              />
              <StyledInput
                placeholder="Time (minutes)"
                value={runDetails.time}
                onChange={(e) =>
                  setRunDetails({ ...runDetails, time: e.target.value })
                }
              />
            </>
          )}
          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <StyledButton onClick={handleAddSet}>
              + Add another set
            </StyledButton>
            <StyledButton onClick={handleSaveWorkout}>
              Log Exercise
            </StyledButton>
          </div>
          <hr />
          <WorkoutHistory uid={user.uid} key={refreshKey} />
          <div style={{ marginTop: "20px" }}>
            <CustomLink onClick={logout} href={""}>
              Logout
            </CustomLink>
          </div>
        </>
      )}
    </div>
  );
};

export default TrackerPage;
