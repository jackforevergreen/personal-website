// src/pages/projects/fitness/WorkoutHistory.tsx
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import Dropdown from "../../../components/dropdown";

interface Props {
  uid: string;
}

interface WorkoutLog {
  createdAt: { seconds: number };
  exercises: {
    name: string;
    sets: { reps: number; weight: number; rpe: number }[];
  }[];
}

const WorkoutHistory: React.FC<Props> = ({ uid }) => {
  const [groupedLogs, setGroupedLogs] = useState<Record<string, WorkoutLog[]>>(
    {}
  );

  useEffect(() => {
    const fetchLogs = async () => {
      const q = query(
        collection(db, `users/${uid}/workouts`),
        where("uid", "==", uid),
        orderBy("createdAt", "desc"),
        limit(5) // only show latest 5
      );
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((doc) => doc.data() as WorkoutLog);

      const grouped: Record<string, WorkoutLog[]> = {};
      items.forEach((log) => {
        const dateStr = new Date(log.createdAt.seconds * 1000).toDateString();
        if (!grouped[dateStr]) grouped[dateStr] = [];
        grouped[dateStr].push(log);
      });

      setGroupedLogs(grouped);
    };

    fetchLogs();
  }, [uid]);

  return (
    <div>
      <h2>
        <a
          href="/full-history"
          style={{ textDecoration: "underline", color: "black" }}
        >
          Workout History
        </a>
      </h2>
      <p>
        Click above to view full history or scroll down for latest 5 workouts.
      </p>
      {Object.keys(groupedLogs).length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        Object.entries(groupedLogs).map(([date, logs], i) => (
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
        ))
      )}
    </div>
  );
};

export default WorkoutHistory;
