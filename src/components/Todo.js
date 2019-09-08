import React from "react";

function Todo(props) {
  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "gray"
  };
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={props.data.completed}
        onChange={() => props.handleChange(props.data.id)}
      />
      <p style={props.data.completed ? completedStyle : null}>
        {props.data.text}
      </p>
    </div>
  );
}

export default Todo;
