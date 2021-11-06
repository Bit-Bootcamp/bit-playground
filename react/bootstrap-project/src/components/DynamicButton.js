import React from "react";

export default function DynamicButton(props) {
  let condition = props.color;

  if (condition === "red") {
    return <button className="red"> Red button</button>;
  } else if (condition === "pink") {
    return <button className="pink"> Pink button</button>;
  } else {
    return <button className="blue"> Blue button</button>;
  }
}
