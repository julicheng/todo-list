import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import todosData from "./todosData";

function App() {
  let todosList = todosData.map(todo => {
    return <Todo data={todo} key={todo.id} />;
  });
  return <div className="todoList">{todosList}</div>;
}

export default App;
