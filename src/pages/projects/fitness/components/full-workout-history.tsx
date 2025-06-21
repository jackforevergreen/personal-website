import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../firebase";
import { useAuth } from "../../../components/authContext";
import Dropdown from "../../../components/dropdown";

interface WorkoutLog {
  createdAt: { seconds: number };
  exercises: {
    name: string;
    sets: { reps: number; weight: number; rpe: number }[];
  }[];
}

const FullWorkoutHistory: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [groupedLogs, setGroupedLogs] = useState<Record<string, WorkoutLog[]>>(
    {}
  );
  const [bests, setBests] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!user) return;

    const fetchLogs = async () => {
      const q = query(
        collection(db, "workouts"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((doc) => doc.data() as WorkoutLog);
      setLogs(items);

      const grouped: Record<string, WorkoutLog[]> = {};
      const personalBests: Record<string, { weight: number; reps: number }> =
        {};

      items.forEach((log) => {
        const dateStr = new Date(log.createdAt.seconds * 1000).toDateString();
        if (!grouped[dateStr]) grouped[dateStr] = [];
        grouped[dateStr].push(log);

        log.exercises.forEach((ex) => {
          ex.sets.forEach((set) => {
            const current = personalBests[ex.name];
            if (
              !current ||
              set.weight * set.reps > current.weight * current.reps
            ) {
              personalBests[ex.name] = { weight: set.weight, reps: set.reps };
            }
          });
        });
      });

      const bestFormatted: Record<string, string> = {};
      Object.entries(personalBests).forEach(([name, pr]) => {
        bestFormatted[name] = `${pr.weight}x${pr.reps}`;
      });

      setGroupedLogs(grouped);
      setBests(bestFormatted);
    };

    fetchLogs();
  }, [user]);

  const today = new Date();
  const past30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    const formatted = date.toDateString();
    return {
      date: formatted,
      completed: logs.some(
        (log) =>
          new Date(log.createdAt.seconds * 1000).toDateString() === formatted
      ),
    };
  });

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

      <h3>Personal Bests</h3>
      <ul>
        {Object.entries(bests).map(([name, best]) => (
          <li key={name}>
            {name}: {best}
          </li>
        ))}
      </ul>

      <h3>Last 30 Days</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {past30Days.map((day, i) => (
          <div
            key={i}
            title={day.date}
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: day.completed ? "green" : "red",
            }}
          />
        ))}
      </div>

      <h3>Workouts by Date</h3>
      {Object.entries(groupedLogs).map(([date, logs], i) => (
        <Dropdown key={i} title={date}>
          {logs.map((log, j) => (
            <div key={j} style={{ marginBottom: "1rem" }}>
              {log.exercises.map((ex, k) => (
                <div key={k}>
                  <strong>{ex.name}</strong>
                  <ul>
                    {ex.sets.map((set, m) => (
                      <li key={m}>
                        Reps: {set.reps}, Weight: {set.weight} lbs, RPE:{" "}
                        {set.rpe}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </Dropdown>
      ))}

      <button onClick={() => navigate("/tracker")} style={{ marginTop: 30 }}>
        ← Back to Tracker
      </button>
    </div>
  );
};

export default FullWorkoutHistory;
