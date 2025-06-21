import React from "react";

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

interface Props {
  exercise: WorkoutExercise;
}

const formatTime = (minutes: number): string => {
  const hrs = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);
  const secs = Math.round((minutes - hrs * 60 - mins) * 60);
  return `${hrs}h ${mins}m ${secs}s`;
};

const formatPace = (pace: number): string => {
  const mins = Math.floor(pace);
  const secs = Math.round((pace - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, "0")} min/mi`;
};

const WorkoutExerciseDisplay: React.FC<Props> = ({ exercise }) => (
  <div>
    <strong>{exercise.name}</strong>
    <ul>
      {exercise.sets.map((set, i) => {
        if (exercise.mode === "lift") {
          const s = set as LiftSet;
          return (
            <li key={i}>
              Reps: {s.reps}, Weight: {s.weight} lbs, RPE: {s.rpe}
            </li>
          );
        } else {
          const s = set as RunSet;
          return (
            <li key={i}>
              Distance: {s.distance} miles, Pace: {formatPace(s.pace)}, Time:{" "}
              {formatTime(s.time)}
            </li>
          );
        }
      })}
    </ul>
  </div>
);

export default WorkoutExerciseDisplay;
