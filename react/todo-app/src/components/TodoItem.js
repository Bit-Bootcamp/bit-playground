import React from "react";

export default function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button className="btn-complete" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="btn-delete" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </div>
  );
}
