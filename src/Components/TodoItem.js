import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  let title = props.todo.title;
  let completed = props.todo.completed;

  const handleDelete = () => props.onDeleteToDo(props.todo.id);

  const handleCheck = () => props.onCheckToDo(props.todo.id);

  const complete_style = {
    textDecoration: "line-through",
    opacity: "0.5",
  };

  const styles = {
    textDecoration: "none",
    opacity: "1",
  };

  return (
    <div className="container">
      <input
        type="checkbox"
        onChange={handleCheck}
        defaultChecked={completed}
      ></input>
      <h2 style={completed ? complete_style : styles}> {title}</h2>
      <button onClick={handleDelete}> Delete </button>
    </div>
  );
}

export default TodoItem;
