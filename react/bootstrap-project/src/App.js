import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import TheNavbar from "./components/TheNavbar";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <TheNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
