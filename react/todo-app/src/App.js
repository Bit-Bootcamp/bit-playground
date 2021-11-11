import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import SomeComponent from "./components/SomeComponent";
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const [item, setItem] = useState("item1");

  const alerts = (text) => {
    alert(text);
  };

  /* Add new todo item*/
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  /* Mark a todo item as complete */
  const completeTodo = (index) => {
    const newTodos = [...todos];

    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  /* Delete todo item */
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>

      {/* passing function and state as props */}
      <SomeComponent alertf={alerts} items={item}>
        slaw <button>slaw button</button>
        <p> paragraphy </p>
      </SomeComponent>
    </div>
  );
}

export default App;
