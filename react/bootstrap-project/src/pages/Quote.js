import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./quotes.module.css";
export default function Quote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    /* get request */
    getQuote();
  }, []);

  function getQuote() {
    // using axios to make a GET request
    axios.get(`https://api.quotable.io/random`).then((res) => {
      console.log(res.data);
      setQuote(res.data);
    });
  }

  return (
    <div className={styles.card}>
      <h2>Random Quote Generator Page</h2>

      <p>{quote.content}</p>
      <b>{quote.author}</b>
      <br />
      <p> {quote.length}</p>
      <button onClick={getQuote}>Generate New Quote</button>
    </div>
  );
}
