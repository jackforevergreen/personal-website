import React, { CSSProperties } from "react";
import thealchemy from "../images/bookclub/thealchemy.jpg";
import whatthedog from "../images/bookclub/whatthedog.jpg"; // Example image import

import alchemist from "../images/bookclub/alchemist.jpg";
import aprender from "../images/bookclub/aprender.jpg";
import aristotle from "../images/bookclub/aristotlre.jpg";
import benfranklin from "../images/bookclub/benfranklin.jpg";
import davidcant from "../images/bookclub/davidcant.jpg";
import howtowinfriends from "../images/bookclub/howtowinfriends.jpg";
import johnd from "../images/bookclub/johnd.jpeg";
import letmypeople from "../images/bookclub/letmypeaople.jpeg";
import loscuatro from "../images/bookclub/loscuatro.jpg";
import markets from "../images/bookclub/markets.jpg";
import naturalcapital from "../images/bookclub/naturalcapital.jpg";
import neverfinished from "../images/bookclub/neverfinished.jpg";
import platorepublic from "../images/bookclub/platorepublic.jpg";
import poorcharlie from "../images/bookclub/poorcharlie.jpg";
import psycology from "../images/bookclub/psycology.jpg";
import richest from "../images/bookclub/richest.jpg";
import samwalton from "../images/bookclub/samwalton.jpg";
import suswhateverone from "../images/bookclub/suswhateveryone.jpg";
import systems from "../images/bookclub/systems.jpg";

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#333",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // This will ensure the layout is flexible
    gap: "20px",
    width: "100%", // Ensuring the grid container takes full width
    margin: "0 auto", // Center the grid
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "15px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align text to the left
    maxWidth: "100%", // Let the card fill available space
    margin: "0 auto",
    textAlign: "left", // Ensuring text is aligned to the left
  },
  cardHeader: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardItem: {
    marginBottom: "5px",
    textAlign: "left", // Ensuring card items are left-aligned
  },
  bookCover: {
    width: "80px", // New smaller width
    height: "120px", // New smaller height
    objectFit: "cover",
    marginBottom: "10px",
  },
  date: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  icon: {
    fontSize: "16px",
    marginRight: "5px",
  },
};

// Static book data stored directly in the site
const bookData = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: "4.5/5",
    comments: "I like the story it was fun to listen to and imagine that world",
    date: "2025-08",
    cover: alchemist, // Add corresponding book cover image
    status: "Finished audiobook",
    type: "audiobook", // New field for type
  },
  {
    title: "The Richest Man in Babylon",
    author: "George Samuel Clason",
    rating: "4.9/5",
    comments: "Such a great way to think about saving money and a great story",
    date: "2023-08",
    cover: richest, // Add corresponding book cover image
    status: "Finished audiobook",
    type: "audiobook", // New field for type
  },
  {
    title: "Aprender a Aprender",
    author: "Benedict Carey",
    rating: "4.3/5",
    comments:
      "My first full spanish book it was useful to read while trying to learn spanish ",
    date: "2023-05",
    cover: aprender, // Add corresponding book cover image
    status: "Finished book",
    type: "book", // New field for type
  },
  {
    title: "Aristotle's Selection",
    author: "Aristotle",
    rating: "4.6/5",
    comments: "Reach in my first philosophy class was pretty dense stuff",
    date: "2023-04",
    cover: aristotle, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Benjamin Franklin: An American Life",
    author: "Walter Isaacson",
    rating: "4.8/5",
    comments:
      "Great biography of Ben Franklin super detailed. Love the early life stuff and his first few jobs",
    date: "2025-03",
    cover: benfranklin, // Add corresponding book cover image
    status: "Still listening audiobook",
    type: "audiobook",
  },
  {
    title: "David Cant",
    author: "David Cant",
    rating: "4.0/5",
    comments: "An inspiring book on leadership and entrepreneurship.",
    date: "2025-04-05",
    cover: davidcant, // Add corresponding book cover image
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    rating: "4.6/5",
    comments: "Great for trying to figure out how you want to carry yourself",
    date: "2025-04-01",
    cover: howtowinfriends, // Add corresponding book cover image
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "John D. Rockefeller",
    author: "John D. Rockefeller",
    rating: "4.4/5",
    comments:
      "Super long bio of John D. Still working through into his adult life now",
    date: "2025-03",
    cover: johnd, // Add corresponding book cover image
    status: "Still reading book",
    type: "book", // New field for type
  },
  {
    title: "Let My People Go Surfing",
    author: "Yvon Chouinard",
    rating: "4.8/5",
    comments:
      "Love to see a responsible businessesman. He has an interesting view of products and business and I love that he was loved nature and was an athlete.",
    date: "2025-03",
    cover: letmypeople, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Los Cuatro Acuerdos",
    author: "Don Miguel Ruiz",
    rating: "4.7/5",
    comments: "Also read in spanish and had a great impact on mindset",
    date: "2023-01",
    cover: loscuatro, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Markets and the Environment",
    author: "Nat Keohane and Sheila M. Olmstead",
    rating: "4.7/5",
    comments:
      "Read for CMU class and then used in thesis. Great enviromental economics and sustianabilty info, foundational to my views.",
    date: "2023-03",
    cover: markets, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Natural Capitalism",
    author: "Paul Hawken, Amory Lovins, L. Hunter Lovins",
    rating: "4.6/5",
    comments:
      "Dense book I used for my thesis. Very foundational for the turn of the century and had a lot of great points on resources and energy.",
    date: "2025-03-10",
    cover: naturalcapital, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  // still working
  {
    title: "Never Finished",
    author: "David Goggins",
    rating: "4.9/5",
    comments:
      "An inspiring story about mental toughness and pushing through adversity.",
    date: "2025-03-05",
    cover: neverfinished, // Add corresponding book cover image
    status: "Finished audiobook",
    type: "audiobook",
  },
  {
    title: "Plato's Republic",
    author: "Plato",
    rating: "4.6/5",
    comments:
      "A foundational work in philosophy, discussing justice, the state, and the individual.",
    date: "2025-03-01",
    cover: platorepublic, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Charles T. Munger",
    rating: "4.8/5",
    comments:
      "A collection of wisdom and insights from Warren Buffett's partner.",
    date: "2025-02-25",
    cover: poorcharlie, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Psychology of Investing",
    author: "John Nofsinger",
    rating: "4.3/5",
    comments:
      "An insightful look into the emotional and psychological aspects of investing.",
    date: "2025-02-20",
    cover: psycology, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "Sam Walton: Made in America",
    author: "Sam Walton",
    rating: "4.6/5",
    comments:
      "A great read on the story of Walmart's founder and his approach to business.",
    date: "2025-02-15",
    cover: samwalton, // Add corresponding book cover image
    status: "Still reading book",
    type: "book",
  },
  {
    title: "Sustainable Development",
    author: "World Commission on Environment and Development",
    rating: "4.2/5",
    comments: "A key work in the environmental and sustainability movement.",
    date: "2025-02-10",
    cover: suswhateverone, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "The Systems Bible",
    author: "John Gall",
    rating: "4.4/5",
    comments:
      "A fascinating and humorous guide to understanding complex systems.",
    date: "2025-02-05",
    cover: systems, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "The Alchemy of Finance",
    author: "George Soros",
    rating: "4.7/5",
    comments:
      "A deep dive into financial markets and the philosophy of investing.",
    date: "2025-02-01",
    cover: thealchemy, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
  {
    title: "What the Dog Saw",
    author: "Malcolm Gladwell",
    rating: "4.6/5",
    comments:
      "A collection of thought-provoking essays from the renowned author.",
    date: "2025-01-28",
    cover: whatthedog, // Add corresponding book cover image
    status: "Finished book",
    type: "book",
  },
];

// Sorting books by rating (from highest to lowest) for each category
const sortByRating = (a: any, b: any) => {
  const ratingA = parseFloat(a.rating.split("/")[0]);
  const ratingB = parseFloat(b.rating.split("/")[0]);
  return ratingB - ratingA; // Sorting in descending order (higher rating first)
};

const currentlyReading = bookData
  .filter(
    (book) =>
      book.status === "Still reading book" ||
      book.status === "Still listening audiobook"
  )
  .sort(sortByRating);

const finishedBooks = bookData
  .filter((book) => book.status === "Finished book")
  .sort(sortByRating);

const finishedAudiobooks = bookData
  .filter((book) => book.status === "Finished audiobook")
  .sort(sortByRating);

const BookClub: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Book Club</h2>
      <p>Welcome to the book club! Here are the books we are reading.</p>

      {/* Currently Reading Section */}
      <h3 style={styles.sectionTitle}>Currently Reading</h3>
      <div style={styles.gridContainer}>
        {currentlyReading.map((book, index) => (
          <div key={index} style={styles.card}>
            <img src={book.cover} alt={book.title} style={styles.bookCover} />
            <div style={styles.cardHeader}>
              {book.title}{" "}
              <span style={styles.icon}>
                {book.type === "audiobook" ? "🎧" : "📕"}{" "}
                {/* Icon based on type */}
              </span>
            </div>
            <p style={styles.cardItem}>
              <strong>Author:</strong> {book.author}
            </p>
            <p style={styles.cardItem}>
              <strong>Rating:</strong> {book.rating}
            </p>
            <p style={styles.cardItem}>
              <strong>Comments:</strong> {book.comments}
            </p>
            <p style={styles.cardItem}>
              <strong>Date:</strong>{" "}
              <span style={styles.date}>{book.date}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Finished Books Section */}
      <h3 style={styles.sectionTitle}>Books I like</h3>
      <div style={styles.gridContainer}>
        {finishedBooks.map((book, index) => (
          <div key={index} style={styles.card}>
            <img src={book.cover} alt={book.title} style={styles.bookCover} />
            <div style={styles.cardHeader}>
              {book.title}{" "}
              <span style={styles.icon}>
                {book.type === "audiobook" ? "🎧" : "📕"}{" "}
                {/* Icon based on type */}
              </span>
            </div>
            <p style={styles.cardItem}>
              <strong>Author:</strong> {book.author}
            </p>
            <p style={styles.cardItem}>
              <strong>Rating:</strong> {book.rating}
            </p>
            <p style={styles.cardItem}>
              <strong>Comments:</strong> {book.comments}
            </p>
            <p style={styles.cardItem}>
              <strong>Date:</strong>{" "}
              <span style={styles.date}>{book.date}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Finished Audiobooks Section */}
      <h3 style={styles.sectionTitle}>Finished Audiobooks</h3>
      <div style={styles.gridContainer}>
        {finishedAudiobooks.map((book, index) => (
          <div key={index} style={styles.card}>
            <img src={book.cover} alt={book.title} style={styles.bookCover} />
            <div style={styles.cardHeader}>
              {book.title}{" "}
              <span style={styles.icon}>
                {book.type === "audiobook" ? "🎧" : "📕"}{" "}
                {/* Icon based on type */}
              </span>
            </div>
            <p style={styles.cardItem}>
              <strong>Author:</strong> {book.author}
            </p>
            <p style={styles.cardItem}>
              <strong>Rating:</strong> {book.rating}
            </p>
            <p style={styles.cardItem}>
              <strong>Comments:</strong> {book.comments}
            </p>
            <p style={styles.cardItem}>
              <strong>Date:</strong>{" "}
              <span style={styles.date}>{book.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookClub;
