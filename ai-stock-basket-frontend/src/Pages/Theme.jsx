import { useState } from "react";
import "./ThemeRecommendations.css"; // Create or link to your CSS file

function ThemeRecommendations({ theme }) {
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecommendations = async () => {
    if (!theme) {
      setError("Theme is required");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5173/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendations-container">
      <h2>{theme} Stock Recommendations</h2>
      <button onClick={fetchRecommendations} className="recommendations-button">
        {loading ? "Loading..." : "Get Recommendations"}
      </button>

      {error && <p className="error-message">{error}</p>}

      {recommendation ? (
        <div className="recommendation-result">
          <p>{recommendation}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ThemeRecommendations;
