import { styles } from "../../../../layout";
import Figure from "../../../components/figure"; // or the correct path to the image
import { Images } from "../../../images/images";
import bloom1 from "../../../images/stocks/bloomberg/bloom1.png";
import bloom2 from "../../../images/stocks/bloomberg/bloom2.png";
import bloom3 from "../../../images/stocks/bloomberg/bloom3.png";
import bloom4 from "../../../images/stocks/bloomberg/bloom4.png";
import bloom5 from "../../../images/stocks/bloomberg/bloom5.png";
import bloom6 from "../../../images/stocks/bloomberg/bloom6.png";

const Bloomberg = () => (
  <div>
    <h2 style={styles.subHeader}>Bloomberg Terminal</h2>
    <img
      src={Images.bloombergIcon}
      alt="Bloomberg Terminal"
      style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
    />

    <p style={styles.paragraph}>
      I am very fortunate that I was exposed to the Bloomberg terminal in my
      junior year at the University of Pittsburgh. I quickly realized this was
      one of the highest value skills I could learn early on. Below I have done
      my best to capture the exact methodology I used to screen these stocks.
    </p>

    <h2 style={styles.subHeader}>EQS Screen Methodology</h2>
    <p style={styles.paragraph}>
      The initial screen was designed to identify the highest quality stocks
      using the following criteria:
    </p>

    <Figure imageSrc={bloom1} altText="EQS Search" caption="EQS Bloomberg" />
    <Figure imageSrc={bloom2} altText="Blank EQS" caption="Blank EQS" />

    <ul style={styles.list}>
      <li style={styles.listItem}>
        US Traded Securities - Focusing on domestic market exposure
      </li>
      <li style={styles.listItem}>
        Top 25% of Operating Margin - Identifying companies with superior
        operational efficiency
      </li>
      <li style={styles.listItem}>
        EPS Growth - Ensuring consistent earnings performance
      </li>
      <li style={styles.listItem}>
        Cash Growth - Demonstrating strong cash generation capabilities
      </li>
      <li style={styles.listItem}>
        Debt/Equity Ratio below 0.8 - Maintaining conservative leverage levels
      </li>
    </ul>

    <Figure imageSrc={bloom3} altText="My EQS" caption="My EQS" />
    <Figure imageSrc={bloom4} altText="My EQS" caption="My EQS" />

    <h2 style={styles.subHeader}>Fundamental Scoring Analysis</h2>
    <p style={styles.paragraph}>
      After applying the initial screening criteria, I used Bloomberg's
      fundamental scoring analysis Excel template to further evaluate the
      remaining securities. This systematic approach helped identify the stocks
      with the highest potential based on multiple fundamental factors.
    </p>

    <Figure
      imageSrc={bloom5}
      altText="Bloomberg Scoring"
      caption="Bloomberg Scoring"
    />

    <p style={styles.paragraph}>
      The 156 securities that passed the initial screening were then analyzed
      using this scoring system to identify the top-ranked stocks with the
      highest overall scores.
    </p>

    <Figure
      imageSrc={bloom6}
      altText="Final List of 7 Stocks"
      caption="My EQS"
    />

    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    >
      <h2 style={styles.subHeader}>
        Key Benefits of Bloomberg Terminal Analysis
      </h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Access to comprehensive financial data and analysis tools
        </li>
        <li style={styles.listItem}>
          Ability to screen stocks using multiple sophisticated criteria
        </li>
        <li style={styles.listItem}>
          Integration with Excel for detailed fundamental analysis
        </li>
        <li style={styles.listItem}>
          Real-time market data and company information
        </li>
      </ul>
    </div>
  </div>
);

export default Bloomberg;
