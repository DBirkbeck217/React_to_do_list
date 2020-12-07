import React from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem.js";
import Sidebar from "./Components/Sidebar.js";
import avatar from "./Images/avatar.png";

class App extends React.Component {
  state = {
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
    newToDoTitle: "",
  };

  handleOnChange = (event) => {
    this.setState({ newToDoTitle: event.target.value });
  };

  handleAddToDo = () => {
    let newToDo = {
      id: 0,
      title: this.state.newToDoTitle,
      description: "your description",
      completed: false,
    };
    this.setState(
      (state) => {
        return {
          todoList: [...state.todoList, newToDo],
        };
      },
      this.setState({
        newToDoTitle: "",
      })
    );
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleAddToDo();
    }
  };
  render() {
    return (
      <div>
        <div id="avatar">
          <Sidebar user={this.state.user}></Sidebar>
        </div>
        <h1> To-Do List</h1>
        {this.state.todoList.map((todo) => (
          <TodoItem todo={todo}></TodoItem>
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
