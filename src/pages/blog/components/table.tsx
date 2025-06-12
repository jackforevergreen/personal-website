const runs = [
  { date: "4/30/2024", distance: 4.13, time: "0:35:51", pace: "8:41" },
  { date: "4/28/2024", distance: 5.16, time: "0:48:53", pace: "9:28" },
  { date: "4/18/2024", distance: 3.49, time: "0:28:02", pace: "8:02" },
  { date: "4/14/2024", distance: 20.01, time: "3:19:52", pace: "9:59" },
  { date: "4/10/2024", distance: 4.74, time: "0:43:11", pace: "9:07" },
  { date: "4/7/2024", distance: 14.23, time: "2:08:53", pace: "9:04" },
  { date: "4/4/2024", distance: 5.95, time: "0:49:06", pace: "8:15" },
  { date: "3/27/2024", distance: 4.83, time: "0:37:39", pace: "7:47" },
  { date: "3/24/2024", distance: 13.11, time: "1:56:14", pace: "8:52" },
  { date: "3/20/2024", distance: 5.82, time: "0:48:20", pace: "8:18" },
  { date: "3/19/2024", distance: 2.98, time: "0:28:37", pace: "9:36" },
  { date: "3/13/2024", distance: 6.08, time: "0:48:48", pace: "8:01" },
  { date: "3/12/2024", distance: 4.26, time: "0:43:57", pace: "10:19" },
  { date: "3/10/2024", distance: 7.35, time: "1:06:20", pace: "9:01" },
  { date: "3/8/2024", distance: 3.13, time: "0:30:04", pace: "9:36" },
  { date: "3/6/2024", distance: 5.06, time: "0:42:12", pace: "8:20" },
  { date: "3/5/2024", distance: 2.94, time: "0:24:13", pace: "8:14" },
];

const tableStyles = {
  table: {
    width: "65%",
    borderCollapse: "collapse" as const,
    fontFamily: "Arial, sans-serif",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  th: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left" as const,
  },
  td: {
    padding: "8px",
    border: "1px solid #ddd",
  },
  longRun: {
    backgroundColor: "#d4edda", // green
  },
  mediumRun: {
    backgroundColor: "#cce5ff", // blue
  },
  shortRun: {
    backgroundColor: "#fff3cd", // yellow
  },
  legendBox: {
    display: "flex",
    gap: "20px",
    fontSize: "14px",
    alignItems: "center",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  colorBox: (color: string) => ({
    width: "16px",
    height: "16px",
    backgroundColor: color,
    border: "1px solid #aaa",
  }),
};

const RunTable = () => {
  return (
    <div>
      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th style={tableStyles.th}>Date</th>
            <th style={tableStyles.th}>Distance</th>
            <th style={tableStyles.th}>Time</th>
            <th style={tableStyles.th}>Pace</th>
          </tr>
        </thead>
        <tbody>
          {runs.map((run, i) => {
            let rowStyle = {};
            if (run.distance >= 10) rowStyle = tableStyles.longRun;
            else if (run.distance >= 5) rowStyle = tableStyles.mediumRun;
            else rowStyle = tableStyles.shortRun;

            return (
              <tr key={i} style={rowStyle}>
                <td style={tableStyles.td}>{run.date}</td>
                <td style={tableStyles.td}>{run.distance}</td>
                <td style={tableStyles.td}>{run.time}</td>
                <td style={tableStyles.td}>{run.pace}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={tableStyles.legendBox}>
        <div style={tableStyles.legendItem}>
          <div style={tableStyles.colorBox("#d4edda")} /> Long Run (≥ 10 mi)
        </div>
        <div style={tableStyles.legendItem}>
          <div style={tableStyles.colorBox("#cce5ff")} /> Medium Run (5–9.99 mi)
        </div>
        <div style={tableStyles.legendItem}>
          <div style={tableStyles.colorBox("#fff3cd")} /> Short Run (&lt; 5 mi)
        </div>
      </div>
    </div>
  );
};

export default RunTable;
