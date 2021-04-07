import React from "react";
import "./TodoItem.css";
import styled from "styled-components";

function TodoItem(props) {
  let title = props.todo.title;
  let completed = props.todo.completed;
  let details = props.todo.description;

  const handleDelete = () => props.onDeleteToDo(props.todo.id);

  const handleCheck = () => props.onCheckToDo(props.todo.id);

  // const complete_style = {
  //   textDecoration: "line-through",
  //   opacity: "0.5",
  // };

  // const styles = {
  //   textDecoration: "none",
  //   opacity: "1",
  // };

  return (
    <ToDoContainer>
      <input
        type="checkbox"
        onChange={handleCheck}
        defaultChecked={completed}
      ></input>
      <div>
        <Complete completed={completed}> {title}</Complete>
        <details> {details} </details>
      </div>
      <Button onClick={handleDelete}> Delete </Button>
    </ToDoContainer>
  );
}

const ToDoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;

const Complete = styled.h2`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
`;

const Button = styled.button`
  color: purple;
  :hover {
    color: blue;
    cursor: pointer;
  }
  @media only screen and (min-width: 600px) {
    color: red;
  }
`;

export default TodoItem;
