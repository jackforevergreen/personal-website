const travelData = [
  {
    trip: "London Trip",
    route: "MAD → LGW",
    points: "9,735 pts",
    paid: "$0.00",
    value: "$146.03",
  },
  {
    trip: "Amsterdam Trip",
    route: "LGW → AMS",
    points: "5,536 pts",
    paid: "$0.00",
    value: "$83.04",
  },
  {
    trip: "Rome Trip",
    route: "AMS → FCO",
    points: "13,618 pts",
    paid: "$0.00",
    value: "$204.27",
  },
  {
    trip: "Reykjavik Trip",
    route: "FCO → KEF",
    points: "15,573 pts",
    paid: "$28.34",
    value: "$261.93",
  },
  {
    trip: "Newark Trip",
    route: "KEF → EWR",
    points: "26,123 pts",
    paid: "$0.00",
    value: "$391.85",
  },
  {
    trip: "Iceland Car Rental",
    route: "KEF Pickup/Drop",
    points: "4,136 pts",
    paid: "$641.46",
    value: "$703.51",
  },
];

const TravelTable = () => {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
    >
      <thead>
        <tr>
          <th style={cellStyle}>Trip</th>
          <th style={cellStyle}>Route</th>
          <th style={cellStyle}>Points Used</th>
          <th style={cellStyle}>$ Paid</th>
          <th style={cellStyle}>Total Value</th>
        </tr>
      </thead>
      <tbody>
        {travelData.map((row, i) => (
          <tr key={i}>
            <td style={cellStyle}>{row.trip}</td>
            <td style={cellStyle}>{row.route}</td>
            <td style={cellStyle}>{row.points}</td>
            <td style={cellStyle}>{row.paid}</td>
            <td style={cellStyle}>{row.value}</td>
          </tr>
        ))}
        <tr style={{ backgroundColor: "#f0f8ff", fontWeight: "bold" }}>
          <td style={cellStyle}>Sum</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>74,721 pts</td>
          <td style={cellStyle}>$669.80</td>
          <td style={cellStyle}>$1,790.63</td>
        </tr>
      </tbody>
    </table>
  );
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left" as const,
};

export default TravelTable;
