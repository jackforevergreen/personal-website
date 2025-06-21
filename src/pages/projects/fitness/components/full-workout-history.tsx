import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../firebase";
import { useAuth } from "../../../components/authContext";
import Dropdown from "../../../components/dropdown";
import StyledButton from "../components/button";
import CalendarHeatmap from "./calendar";
import WorkoutExerciseDisplay from "./workout-exercise-display";

interface LiftSet {
  reps: number;
  weight: number;
  rpe: number;
}

interface RunSet {
  distance: number;
  pace: number;
  time: number;
}

type WorkoutSet = LiftSet | RunSet;

interface WorkoutExercise {
  name: string;
  mode: "lift" | "run";
  sets: WorkoutSet[];
}

interface WorkoutLog {
  createdAt: { seconds: number };
  exercises: WorkoutExercise[];
}

const FullWorkoutHistory: React.FC = () => {
  const formatPace = (pace: number): string => {
    const mins = Math.floor(pace);
    const secs = Math.round((pace - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, "0")} min/mile`;
  };

  const formatTime = (minutes: number): string => {
    const hrs = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    const secs = Math.round((minutes - hrs * 60 - mins) * 60);
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const { user } = useAuth();
  const navigate = useNavigate();

  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [groupedLogs, setGroupedLogs] = useState<Record<string, WorkoutLog[]>>(
    {}
  );
  const [liftBests, setLiftBests] = useState<
    Record<string, { weight: number; reps: number }>
  >({});
  const [topRun, setTopRun] = useState<{
    distance: number;
    pace: number;
    time: number;
  }>({
    distance: 0,
    pace: 0,
    time: 0,
  });

  useEffect(() => {
    if (!user) return;

    const fetchLogs = async () => {
      const q = query(
        collection(db, `users/${user.uid}/workouts`),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((doc) => doc.data() as WorkoutLog);
      setLogs(items);

      const grouped: Record<string, WorkoutLog[]> = {};
      const liftPB: Record<string, { weight: number; reps: number }> = {};
      let runPB = { distance: 0, pace: 0, time: 0 };

      items.forEach((log) => {
        const dateStr = new Date(log.createdAt.seconds * 1000).toDateString();
        if (!grouped[dateStr]) grouped[dateStr] = [];
        grouped[dateStr].push(log);

        log.exercises.forEach((ex) => {
          if (ex.mode === "lift") {
            ex.sets.forEach((set) => {
              const lift = set as LiftSet;
              const current = liftPB[ex.name];
              if (
                !current ||
                lift.weight * lift.reps > current.weight * current.reps
              ) {
                liftPB[ex.name] = { weight: lift.weight, reps: lift.reps };
              }
            });
          } else if (ex.mode === "run") {
            ex.sets.forEach((set) => {
              const run = set as RunSet;
              if (run.distance > runPB.distance) runPB.distance = run.distance;
              if (run.pace > runPB.pace) runPB.pace = run.pace;
              if (run.time > runPB.time) runPB.time = run.time;
            });
          }
        });
      });

      setGroupedLogs(grouped);
      setLiftBests(liftPB);
      setTopRun(runPB);
    };

    fetchLogs();
  }, [user]);

  const workoutDates = logs.map(
    (log) => new Date(log.createdAt.seconds * 1000)
  );

  if (!user) {
    return (
      <p style={{ padding: "20px" }}>Please log in to view workout history.</p>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Full Workout History</h2>
      <p>Welcome, {user.displayName}</p>

      <h3>Total Workouts: {logs.length}</h3>

      <h3>Personal Bests – Lifts</h3>
      <ul>
        {Object.entries(liftBests).map(([name, best]) => (
          <li key={name}>
            <strong>{name}</strong>: Reps: {best.reps}, Weight: {best.weight}{" "}
            lbs
          </li>
        ))}
      </ul>

      <h3>Personal Bests – Runs</h3>
      <ul>
        <li>Top Distance: {topRun.distance.toFixed(1)} miles</li>
        <li>Top Pace: {formatPace(topRun.pace)}</li>
        <li>Top Time: {formatTime(topRun.time)}</li>
      </ul>

      <CalendarHeatmap workoutTimestamps={workoutDates} />

      <h3>Workouts by Date</h3>
      {Object.entries(groupedLogs).map(([date, logs], i) => (
        <Dropdown key={i} title={date}>
          {logs.map((log, j) => (
            <div key={j} style={{ marginBottom: "1rem" }}>
              {log.exercises.map((ex, k) => (
                <WorkoutExerciseDisplay key={k} exercise={ex} />
              ))}
            </div>
          ))}
        </Dropdown>
      ))}

      <StyledButton
        onClick={() => navigate("/tracker")}
        style={{ marginTop: 30 }}
      >
        ← Back to Tracker
      </StyledButton>
    </div>
  );
};

export default FullWorkoutHistory;
