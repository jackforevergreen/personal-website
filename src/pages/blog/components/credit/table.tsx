const cardBenefits = [
  {
    benefit: "Annual Travel Credit",
    preferred: "$50 Chase Travel Hotel Credit",
    reserve: "$300 Travel Credit (any travel)",
    experience: "This was awesome, lots of train tickets for free",
  },
  {
    benefit: "Point Redemption Value",
    preferred: "25% more through Chase Travel",
    reserve: "50% more through Chase Travel",
    experience: "Allowed my points to go further",
  },
  {
    benefit: "Hotel & Car Rental Points",
    preferred: "5x points",
    reserve: "10x points (after $300 travel)",
    experience: "Got more points from Car Rental",
  },
  {
    benefit: "Other Travel Points",
    preferred: "2x points",
    reserve: "3x points (after $300 travel)",
    experience: "Got more points throughout the year",
  },
  {
    benefit: "Dining",
    preferred: "3x points",
    reserve: "3x points",
    experience: "Pretty standard",
  },
  {
    benefit: "Airport Lounge Access",
    preferred: "N/A",
    reserve: "Access to 1,300+ lounges worldwide",
    experience:
      "This was the best part. Free food and drinks before every flight.",
  },
  {
    benefit: "DashPass (DoorDash)",
    preferred: "Free DashPass + $10 off/mo non-restaurant",
    reserve: "DashPass + $25/mo in promos",
    experience: "I had Instacart+ for 1 year",
  },
  {
    benefit: "Foreign Transaction Fees",
    preferred: "None",
    reserve: "None",
    experience: "This is why I needed the card",
  },
];

const CardComparisonTable = () => {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Benefit</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Sapphire Preferred
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            Sapphire Reserve - My Card
          </th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>
            My Experience
          </th>
        </tr>
      </thead>
      <tbody>
        {cardBenefits.map((row, i) => (
          <tr key={i}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.benefit}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.preferred}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.reserve}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.experience}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CardComparisonTable;
