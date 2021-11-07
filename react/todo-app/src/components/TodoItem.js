import React from "react";

export default function TodoItem({ todo, index, handler }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => handler(index)}>Complete</button>
      </div>
    </div>
  );
}
