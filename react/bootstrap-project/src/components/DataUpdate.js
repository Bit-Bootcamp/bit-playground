import React from "react";
import { useState } from "react";

export default function DataUpdate() {
  const [text, setText] = useState("Our paragraph");
  const [color, setColor] = useState("red");

  let handleClick = () => {
    setText("our new text");
    setColor("blue");
  };

  return (
    <div>
      <button onClick={handleClick} className={color}>
        = Click
      </button>
      <p>{text}</p>
    </div>
  );
}
