import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  startOfMonth,
} from "date-fns";
import React from "react";

interface Props {
  workoutTimestamps: Date[];
}

const CalendarHeatmap: React.FC<Props> = ({ workoutTimestamps }) => {
  const now = new Date();
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(now),
    end: endOfMonth(now),
  });

  return (
    <div style={styles.outerContainer}>
      <div style={styles.box}>
        <h3 style={styles.title}>
          This months workouts – {format(now, "MMMM yyyy")}
        </h3>
        <div style={styles.grid}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} style={styles.dayLabel}>
              {day}
            </div>
          ))}

          {/* Empty slots to align the first day */}
          {Array(getDay(startOfMonth(now)))
            .fill(null)
            .map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

          {daysInMonth.map((day, i) => {
            const logged = workoutTimestamps.some((d) => isSameDay(d, day));
            return (
              <div
                key={i}
                title={format(day, "MMM d")}
                style={{
                  ...styles.dayBox,
                  backgroundColor: logged ? "#62AC68" : "#FF474D",
                }}
              >
                {format(day, "d")}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  box: {
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "250px",
    width: "100%",
    backgroundColor: "#fafafa",
  },
  title: {
    textAlign: "center" as const,
    marginBottom: "12px",
    fontSize: "16px",
    fontWeight: "bold" as const,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "6px",
    textAlign: "center" as const,
  },
  dayLabel: {
    fontWeight: "bold" as const,
    fontSize: "0.75rem",
  },
  dayBox: {
    width: "100%",
    aspectRatio: "1",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default CalendarHeatmap;
