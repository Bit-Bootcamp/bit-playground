import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import TheNavbar from "./components/TheNavbar";

export default function App() {
  return (
    <div>
      <TheNavbar />

      <Button>slaw</Button>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<p>Error 404, Page not found</p>} />
      </Routes>
    </div>
  );
}
