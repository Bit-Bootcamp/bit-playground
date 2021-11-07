import React, { useState } from "react";

export default function Home() {
  const [car, setCar] = useState("BMW");

  const cars = ["Ford", "BMW", "Audi", "Ford", "BMW", "Audi"];

  return (
    <div>
      <h2>we are now on the home page</h2>
      {car}
      <p>Home</p>

      <button onClick={() => setCar("Mercedez")}> Change Car</button>

      {cars.map((sayara) => (
        <li> {sayara}</li>
      ))}
    </div>
  );
}
