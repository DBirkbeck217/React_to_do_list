import React from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem.js";
import Sidebar from "./Components/Sidebar.js";
import avatar from "./Images/avatar.png";
import shortid from "shortid";

class App extends React.Component {
  state = {
    todoList: [
      {
        id: shortid.generate(),
        title: "Learn to code in React",
        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Take over the world",
        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Take out the trash",
        completed: false,
      },
    ],
    user: {
      name: "Dan Birkbeck",
      avatar: avatar,
    },
    newToDoTitle: "",
  };

  handleOnChange = (event) => {
    this.setState({ newToDoTitle: event.target.value });
  };

  handleAddToDo = () => {
    let newToDo = {
      id: shortid.generate(),
      title: this.state.newToDoTitle,
      completed: false,
    };
    this.setState((state) => {
      return {
        todoList: [...state.todoList, newToDo],
        newToDoTitle: "",
      };
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleAddToDo();
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div id="avatar">
          <Sidebar user={this.state.user}></Sidebar>
        </div>
        <h1> To-Do List </h1>
        {this.state.todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))}
        <br />
        <div className="input">
          <input
            value={this.state.newToDoTitle}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
          ></input>
          <button onClick={this.handleAddToDo}> Add </button>
        </div>
      </div>
    );
  }
}

export default App;
