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
import CustomLink from "../../../components/hoverlink";
import WorkoutExerciseDisplay from "./workout-exercise-display";

interface Props {
  uid: string;
}

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
        <CustomLink
          href="/full-history"
          style={{ textDecoration: "underline", color: "black" }}
        >
          Workout History
        </CustomLink>
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
                  <WorkoutExerciseDisplay key={k} exercise={ex} />
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
