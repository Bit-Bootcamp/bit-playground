import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./quotes.module.css";
export default function Quote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    /* get request */
    axios.get(`https://api.quotable.io/random`).then((res) => {
      setQuote(res.data);
    });
  }, []);

  return (
    <div className={styles.card}>
      <h2>Random Quote Generator Page</h2>

      <p>{quote.content}</p>
    </div>
  );
}
