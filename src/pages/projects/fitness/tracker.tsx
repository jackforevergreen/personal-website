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
    paceMinutes: "",
    paceSeconds: "",
    timeHours: "",
    timeMinutes: "",
    timeSeconds: "",
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

    const workoutData: any = {
      uid: user.uid,
      createdAt: Timestamp.now(),
      exercises: [],
    };

    if (mode === "lift") {
      workoutData.exercises.push({
        name: exercise,
        mode: "lift",
        sets: sets.map((s) => ({
          reps: parseInt(s.reps),
          weight: parseFloat(s.weight),
          rpe: parseFloat(s.rpe),
        })),
      });
    } else if (mode === "run") {
      workoutData.exercises.push({
        name: exercise,
        mode: "run",
        sets: [
          {
            distance: parseFloat(runDetails.distance),
            pace:
              parseInt(runDetails.paceMinutes || "0") +
              parseInt(runDetails.paceSeconds || "0") / 60,
            time:
              parseInt(runDetails.timeHours || "0") * 60 +
              parseInt(runDetails.timeMinutes || "0") +
              parseInt(runDetails.timeSeconds || "0") / 60,
          },
        ],
      });
    }

    await addDoc(collection(db, `users/${user.uid}/workouts`), workoutData);

    // Reset inputs
    setExercise("");
    setSets([{ reps: "", weight: "", rpe: "" }]);
    setRunDetails({
      distance: "",
      paceMinutes: "",
      paceSeconds: "",
      timeHours: "",
      timeMinutes: "",
      timeSeconds: "",
    });
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
          <div>
            <label>
              <input
                type="radio"
                value="lift"
                checked={mode === "lift"}
                onChange={() => setMode("lift")}
              />
              Lift
            </label>
            <label style={{ marginLeft: "12px" }}>
              <input
                type="radio"
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
            <>
              {sets.map((set, i) => (
                <div key={i}>
                  <p>Set {i + 1}</p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <StyledInput
                      placeholder="Reps"
                      value={set.reps}
                      onChange={(e) =>
                        handleSetChange(i, "reps", e.target.value)
                      }
                    />
                    <StyledInput
                      placeholder="Weight"
                      value={set.weight}
                      onChange={(e) =>
                        handleSetChange(i, "weight", e.target.value)
                      }
                    />
                    <StyledInput
                      placeholder="RPE"
                      value={set.rpe}
                      onChange={(e) =>
                        handleSetChange(i, "rpe", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <StyledButton onClick={handleAddSet}>
                  + Add another set
                </StyledButton>
                <StyledButton onClick={handleSaveWorkout}>
                  Log Exercise
                </StyledButton>
              </div>
            </>
          ) : (
            <>
              <div>
                <StyledInput
                  placeholder="Distance (mi or km)"
                  value={runDetails.distance}
                  onChange={(e) =>
                    setRunDetails({ ...runDetails, distance: e.target.value })
                  }
                  style={{ display: "flex", gap: "8px", marginBottom: "7px" }}
                />
                <div
                  style={{ display: "flex", gap: "8px", marginBottom: "7px" }}
                >
                  <StyledInput
                    placeholder="Pace Min"
                    value={runDetails.paceMinutes}
                    onChange={(e) =>
                      setRunDetails({
                        ...runDetails,
                        paceMinutes: e.target.value,
                      })
                    }
                  />
                  <StyledInput
                    placeholder="Pace Sec"
                    value={runDetails.paceSeconds}
                    onChange={(e) =>
                      setRunDetails({
                        ...runDetails,
                        paceSeconds: e.target.value,
                      })
                    }
                  />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <StyledInput
                    placeholder="Time Hr"
                    value={runDetails.timeHours}
                    onChange={(e) =>
                      setRunDetails({
                        ...runDetails,
                        timeHours: e.target.value,
                      })
                    }
                  />
                  <StyledInput
                    placeholder="Time Min"
                    value={runDetails.timeMinutes}
                    onChange={(e) =>
                      setRunDetails({
                        ...runDetails,
                        timeMinutes: e.target.value,
                      })
                    }
                  />
                  <StyledInput
                    placeholder="Time Sec"
                    value={runDetails.timeSeconds}
                    onChange={(e) =>
                      setRunDetails({
                        ...runDetails,
                        timeSeconds: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  style={{ display: "flex", gap: "12px", marginTop: "24px" }}
                >
                  <StyledButton onClick={handleSaveWorkout}>
                    Log Run
                  </StyledButton>
                </div>
              </div>
            </>
          )}
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
