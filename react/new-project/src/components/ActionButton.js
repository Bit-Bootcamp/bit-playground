import React, { useState } from "react";

export default function ActionButton() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const isOddEven = () => {
    if (count % 2 === 0) {
      return <p>Our number is Even</p>;
    } else {
      return <p>Our number is Odd</p>;
    }
  };

  return (
    <div style={{ backgroundColor: "cyan", heigh: "500px", width: "500px" }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {isOddEven()}
    </div>
  );
}
