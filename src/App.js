import React from "react";
import Todo from "./components/Todo";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosList: todosData
    };
  }
  render() {
    let todos = this.state.todosList.map(todo => {
      return <Todo data={todo} key={todo.id} />;
    });
    return <div className="todoList">{todos}</div>;
  }
}

export default App;
