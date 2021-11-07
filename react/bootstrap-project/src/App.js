import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import TheNavbar from "./components/TheNavbar";
import ContactForm from "./components/ContactForm";
import Quote from "./pages/Quote";

function App() {
  return (
    <div>
      <TheNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
