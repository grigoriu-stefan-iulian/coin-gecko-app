import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CoinGeckoTablePage, LoginPage, SignUpPage } from "../pages";

export function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/table" element={<CoinGeckoTablePage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}
