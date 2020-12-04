import React, { Component } from "react";
import "./App.css";
import TodoItem from "./TodoItem.js";
import Sidebar from "./Sidebar.js";
import avatar from "./Images/avatar.png";

const data = {
  todoList: [
    {
      id: 1,
      title: "Learn to code in React",
      description: "your description",
      completed: false,
    },
    {
      id: 2,
      title: "Take over the world",
      description: "your description",
      completed: false,
    },
    {
      id: 3,
      title: "Take out the trash",
      description: "your description",
      completed: false,
    },
  ],
  user: {
    name: "Dan Birkbeck",
    avatar: avatar,
  },
};

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="avatar">
          <Sidebar user={data.user}></Sidebar>
        </div>
        <h1> To-Do List</h1>
        {data.todoList.map((todo) => (
          <TodoItem todo={todo}></TodoItem>
        ))}
      </div>
    );
  }
}

export default App;
