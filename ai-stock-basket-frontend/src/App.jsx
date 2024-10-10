import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SentimentChecker from "./Pages/Sentiment";
import Recommendations from "./Pages/Recommendations";
import HomePage from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"; // Import the About Us page component
import './App.css'; // Make sure to import your CSS file

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sentiment">Stock Sentiment Checker</Link>
            </li>
            <li>
              <Link to="/recommendations">Stock Recommendations</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link> {/* Add the About Us link */}
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sentiment" element={<SentimentChecker />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/about" element={<AboutUs />} /> {/* Define the About Us route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
