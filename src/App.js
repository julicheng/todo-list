import React from "react";
import Todo from "./components/Todo";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosList: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodosList = prevState.todosList.map(todo => {
        if (todo.id === id) {
          // if it matches the id then switch
          todo.completed = !todo.completed;
        }
        // return each todo every time
        return todo;
      });
      return {
        // return the updated todoList to state
        todosList: updatedTodosList
      };
    });
  }

  render() {
    let todos = this.state.todosList.map(todo => {
      return (
        <Todo data={todo} key={todo.id} handleChange={this.handleChange} />
      );
    });
    return (
      <div className="todoList">
        <h1 className="title">My Todo List</h1>
        {todos}
      </div>
    );
  }
}

export default App;
