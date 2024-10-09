import React, { useState } from "react";
import './Recommendations.css'; // Make sure to import the CSS file

function Recommendations() {
  const [theme, setTheme] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecommendations = async () => {
    if (!theme) {
      alert("Please enter a theme");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          theme,
          investment_amount: parseFloat(investmentAmount) || 0,
        }),
      });
      const data = await response.json();
      console.log("Received recommendation data:", data);
      setStocks(data.recommendation); // Assuming the API response has a "recommendation" field
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendations-container">
      <h1>Stock Recommendations</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter investment theme (e.g., Green Energy)"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div className="input-box">
        <input
          type="number"
          placeholder="Enter investment amount (e.g., 500000)"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
        />
      </div>

      <button onClick={getRecommendations} disabled={loading}>
        {loading ? "Loading..." : "Get Recommendations"}
      </button>

      {stocks.length > 0 && (
        <div className="stocks-list">
          {stocks.map((item, index) => (
            <div key={index} className="stock-card">
              <h2>{item.stock}</h2>
              <p>Sentiment: {item.sentiment}</p>
              <p>Weight: {item.weight}</p>
              <p>Allocation: {item.allocation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Recommendations;
