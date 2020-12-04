import React from "react";

function TodoItem(props) {
  // let id = props.todo.id;
  let title = props.todo.title;
  let description = props.todo.description;
  return (
    <div>
      <h2>{title}</h2>
      <p> {description}</p>
    </div>
  );
}

export default TodoItem;
