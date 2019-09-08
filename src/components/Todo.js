import React from "react";

function Todo(props) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={props.data.completed}
        onChange={() => props.handleChange(props.data.id)}
      />
      <p className={props.data.completed ? "completedStyle" : null}>
        {props.data.text}
      </p>
    </div>
  );
}

export default Todo;
