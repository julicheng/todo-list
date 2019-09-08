import React from "react";

function Todo(props) {
  return (
    <div className="todo">
      <input type="checkbox" />
      <p>{props.data.text}</p>
    </div>
  );
}

export default Todo;
