import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  // let id = props.todo.id;
  let title = props.todo.title;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default TodoItem;
