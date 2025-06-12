const lodgingData = [
  { dates: "Jul 24–26", location: "London", price: 68.95, nights: 2 },
  { dates: "Jul 26–31", location: "Amsterdam", price: 271.62, nights: 5 },
  { dates: "Jul 31–Aug 1", location: "Amsterdam", price: 37.45, nights: 1 },
  { dates: "Aug 8–9", location: "Reykjavik", price: 43.2, nights: 1 },
  { dates: "Aug 9–10", location: "Reykjavik", price: 58.63, nights: 1 },
];

const LodgingTable = () => {
  const totalPrice = lodgingData.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
    >
      <thead>
        <tr>
          <th style={cellStyle}>Dates</th>
          <th style={cellStyle}>Location</th>
          <th style={cellStyle}>Total Price (USD)</th>
          <th style={cellStyle}>Price per Night (USD)</th>
        </tr>
      </thead>
      <tbody>
        {lodgingData.map((row, i) => (
          <tr key={i}>
            <td style={cellStyle}>{row.dates}</td>
            <td style={cellStyle}>{row.location}</td>
            <td style={cellStyle}>${row.price.toFixed(2)}</td>
            <td style={cellStyle}>${(row.price / row.nights).toFixed(2)}</td>
          </tr>
        ))}
        <tr style={{ backgroundColor: "#f0f8ff", fontWeight: "bold" }}>
          <td style={cellStyle}>Sum</td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>${totalPrice.toFixed(2)}</td>
          <td style={cellStyle}></td>
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

export default LodgingTable;
