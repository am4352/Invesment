import React, { useState } from "react";
import "./SentimentChecker.css"; // Assuming you're using external CSS

function SentimentChecker() {
  const [stock, setStock] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [error, setError] = useState("");

  const checkSentiment = async () => {
    try {
      const response = await fetch("http://localhost:5000/sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stock }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.sentiment) {
        setSentiment(data.sentiment);
        setError("");
      } else {
        setError(data.error || "An unknown error occurred");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to fetch sentiment. Please try again.");
    }
  };

  return (
    <div className="sentiment-container">
      <h1>Check Stock Sentiment</h1>
      <div className="input-group">
        <input
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Enter stock symbol"
          className="input-field"
        />
        <button onClick={checkSentiment} className="check-button">
          Check Sentiment
        </button>
      </div>
      {sentiment && <p className="sentiment-result">Sentiment: {sentiment}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default SentimentChecker;
