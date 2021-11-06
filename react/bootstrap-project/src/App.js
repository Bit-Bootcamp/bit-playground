import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {/* To change URL */}

      <nav>
        <ul>
          <a href="/about"> About</a>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<p>Error 404, Page not found</p>} />
      </Routes>
    </div>
  );
}
