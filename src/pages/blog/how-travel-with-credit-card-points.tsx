import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../layout";
import Carousel from "../components/carousel";
import Figure from "../components/figure";
import image1 from "./components/credit/chase-card.png";
import image2 from "./components/credit/flights/1.png";
import image3 from "./components/credit/flights/2.png";
import image4 from "./components/credit/flights/3.png";
import image5 from "./components/credit/flights/4.png";
import image6 from "./components/credit/flights/5.png";
import image7 from "./components/credit/flights/6.png";

import image8 from "./components/credit/food/1.png";
import image17 from "./components/credit/food/10.png";
import image18 from "./components/credit/food/11.png";
import image19 from "./components/credit/food/12.png";
import image9 from "./components/credit/food/2.png";
import image10 from "./components/credit/food/3.png";
import image11 from "./components/credit/food/4.png";
import image12 from "./components/credit/food/5.png";
import image13 from "./components/credit/food/6.png";
import image14 from "./components/credit/food/7.png";
import image15 from "./components/credit/food/8.png";
import image16 from "./components/credit/food/9.png";

import FlightTable from "./components/credit/flighttable";
import LodgingTable from "./components/credit/lodgingtable";
import CardComparisonTable from "./components/credit/table";

const NewSite: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>
        How I used credit cards to backpack to 5 countries
      </h1>
      <div style={styles.note}>Click here to watch this as a video</div>
      <p>
        In August 2023 after an internship in Spain I traveled to London,
        Amsterdam, Rome, and Iceland before returning to the US. These flights
        cost me $28 dollars total including my return flight to the US. I want
        to share the exact method I used to do this and how you could do it too
        if you are planning an adventure and want to have it covered by a credit
        card company.{" "}
      </p>
      <h2 style={styles.subHeader}>The Credit Card I Used</h2>
      <p>
        I signed up for a Chase Sapphire Reserve Card. The actual promo I took
        advantage of is below. I was planning a study abroad trip for an
        internship program in Spain. I put the entire program on the credit card
        and was able to collect all 60,000 bonus points from this promo. I made
        the mistake of opening the Reserve card instead of the Preferred. You
        would think the preferred would be the higher-end card but its not. (I
        think they do this on purpose) This mistake ended up paying for itself
        in the long run with the lounge access and travel credits. (As we will
        see later){" "}
      </p>
      <Figure
        imageSrc={image1}
        altText="chase sapphire reserve card"
        caption="This was the offer I took advantage of to get my points."
        size="mini"
        title="The Chase Sapphire Reserve Card Offer I Got"
      />
      <h2 style={styles.subHeader}>
        Other Benefits to offset the $550 Annual Fee
      </h2>

      <p>
        $550 is a lot of money, especially for an annual fee of a credit card. I
        paid it once upon card opening and maximized all benefits with the card
        to ensure I got my moneys worth.{" "}
      </p>

      <p>
        Below is a table summary of the benefits comparing the $95 dollar annual
        fee and the $550 annual fee with my experience with each of the
        benefits.{" "}
      </p>

      <CardComparisonTable />

      <h2 style={styles.subHeader}>
        Breakdown of the Flights and Points I Used
      </h2>
      <FlightTable />

      <p>
        As you can see here I was able to take 5 flights and get a little money
        off the car rental and ended up spending $669 total. This alone covered
        my $550 annual fee as I saved a total of $1,120.83 saved via points or
        $570.83 in net savings after the card. If you add back my $300 travel
        credit which covered all my train travel it is $870.83. Not a bad deal.{" "}
      </p>

      <Carousel
        imageSrc={[image2, image3, image4, image5, image6, image7]}
        altText="jack pearson flights and points"
        caption="All the flights I booked on chase with my points"
        size="small"
      />

      <p>
        As you can see here I was able to take 5 flights and get a little money
        off the car rental and ended up spending $669 total. This alone covered
        my $550 annual fee as I saved a total of $1,120.83 saved via points or
        $570.83 in net savings after the card. If you add back my $300 travel
        credit which covered all my train travel it is $870.83. Not a bad deal.{" "}
      </p>
      <h2 style={styles.subHeader}>
        How much did I spend on the rest of the trip?
      </h2>
      <p>
        Unfortunately as I am writing this I am unable to access any of my old
        credit card statements. I would like to know as it would be really
        interesting to see the exact amount I spent. Below I will still attempt
        to breakdown my other costs.{" "}
      </p>
      <h3 style={styles.subHeader}>Lodging</h3>
      <p>
        I kept spending to an absolute minimum and stayed in the cheapest
        hostels I could find. In Iceland since my car rental was so high, I even
        opted to stay in the car for over 4 nights. (I do NOT recommend staying
        the night in a supermini or subcompact car, it was freezing and quite
        uncomfortable){" "}
      </p>

      <p>Below is a table of the lodging costs. </p>
      <LodgingTable />
      <p>
        As you can see for over 2 weeks of travel I only spent $479 on lodging.
        Although I was in arguably the least luxurious lodging I met some
        interesting and cool people in the hostels and was able to save quite a
        bit on lodging.{" "}
      </p>
      <div style={styles.note}>
        <strong>Note:</strong> Not included are the costs for campsites in
        Iceland when I slept in the car. I spent from $10-13 to stay the night
        in a campsite and take a shower/have running water.
      </div>

      <h2 style={styles.subHeader}>Food</h2>
      <p>
        I cut back on spending for food even more aggressively than lodging.
        Here is a quick breakdown from memory of what I ate in each city.{" "}
      </p>
      <h3 style={styles.subHeader}>Travel Days</h3>
      <p>
        At each airport I would go to the lounges and eat enough food for 2 days
        since it was all free.{" "}
      </p>
      <Carousel
        imageSrc={[image12, image13, image14, image15]}
        altText="jack pearson airport food"
        caption="All the free food I got to eat in the lounges. I would do like 3-4 trips and go to the airport like 3 hours early to maximize my time."
        size="small"
      />
      <h3 style={styles.subHeader}>London</h3>
      <p>
        In London I bought a jar of peanut butter, rice cakes, and some orange
        juice to keep me sustained for over 2 days.{" "}
      </p>
      <Carousel
        imageSrc={[image8, image9, image10]}
        altText="jack pearson london food"
        caption="The food I used to survice london. I got fruit drinks to be healthy lol."
        size="small"
      />
      <h3 style={styles.subHeader}>Amsterdam</h3>
      <p>
        In Amsterdam I bought a loaf of bread and peanut butter for most meals,
        but would get cheap pastries for lunch as they were many times less than
        a dollar.{" "}
      </p>
      <Carousel
        imageSrc={[image16, image17]}
        altText="jack pearson amsterdam food"
        caption="The food I ate in Amsterdam."
        size="small"
      />
      <h3 style={styles.subHeader}>Rome</h3>
      <p>
        In Rome I had a nice lunch as I met up with a friend and we cooked at
        home.{" "}
      </p>
      <Figure
        imageSrc={image18}
        altText="jack pearson rome food"
        caption="Had a nice meal in Rome with my buddy Nicola."
        size="small"
      />
      <h3 style={styles.subHeader}>Iceland</h3>
      <p>
        In Iceland I stocked up on cans of tuna, granola, bananas, and rice
        cakes. I lost 7 pounds and have never enjoyed eating tuna so much.{" "}
      </p>
      <Carousel
        imageSrc={[image11, image19]}
        altText="jack pearson iceland food"
        caption="This was the food I ate in Iceland. I lost 7 pounds. I should have gotten more tuna."
        size="small"
      />

      <div style={styles.note}>
        <strong>Note:</strong> If I could go back, I would let myself spend $200
        more on food at the minimum. Saving money is important but being happy
        and healthy is more important. I have since shifted my mindset after
        this experience.
      </div>

      <h3 style={styles.subHeader}>Entertainment</h3>
      <p>
        I also kept spending low on entertainment but made sure not to miss
        anything that was reasonably priced. For example some museums would cost
        $20 to enter and if I felt it was worth it I had no problem paying to
        get inside. I also had to spend money on public transport, like renting
        a bicycle in Amsterdam for about $25 for the week.{" "}
      </p>
      <p>
        Iceland was also quite expensive for gas, which I had to fill up quite
        frequently as I drove the entire perimeter of the island. Although the
        gas was expensive most of the attractions were free as they we national
        parks or protected areas. Other than the expenses above I kept spending
        to a minimum and just enjoyed walking around the cities.
      </p>

      <h2 style={styles.subHeader}>
        Things I Wish I Knew Before I Went on the Trip
      </h2>

      <div>
        <h3 style={styles.sectionTitle}>1. Get a Larger Backpack</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>I brought a normal backpack
            instead of a high-tech backpacking bag that could double as a
            carry-on. Some flights only allowed a personal item, so I had no
            choice — but next time I’ll plan better.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>2. Spend More on Food</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Starving yourself to save money is counterproductive. Eating well
            boosts your energy and overall enjoyment.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>
          3. Keep Track of Spending in Real Time
        </h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>
            Mental math isn’t enough. A simple spreadsheet or spending log helps
            you stay aware and make better decisions without over- or
            under-spending.
          </li>
        </ul>

        <h3 style={styles.sectionTitle}>4. Have Fun and Enjoy This Time</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.bulletIcon}>•</span>I had an amazing time — some
            of the best memories I’ve made. Don’t let financial stress
            overshadow the experience. You can always make more money.
          </li>
        </ul>

        <p>
          Overall this trip was not a huge financial burden, and I feel
          incredibly grateful to have visited so many places at just 20 years
          old. I plan to do a similar trip again — and I’m already excited to
          see what credit card schemes I can pull off next time.
        </p>
      </div>

      <p>
        Thanks for reading and I hope I was able to inspire you to travel and
        use some points!
      </p>
      <p>-Jack</p>
      <p style={styles.date}>Published on June 12, 2025</p>

      <Link to="/blogs" style={styles.backLink}>
        Back to Blogs
      </Link>
    </div>
  );
};

export default NewSite;
