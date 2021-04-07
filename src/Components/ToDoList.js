import React from "react";
import "../App.css";
import TodoItem from "./TodoItem.js";
import shortid from "shortid";
const TODO_LIST_KEY = "todoapp_list";

class ToDoList extends React.Component {
  state = {
    todoList: [
      {
        id: shortid.generate(),
        title: "Learn to code in React",
        completed: true,
        description: "Do this or don't!",
      },
      {
        id: shortid.generate(),
        title: "Take over the world",
        completed: false,
        description: "self explanatory",
      },
      {
        id: shortid.generate(),
        title: "Take out the trash",
        completed: false,
        description: "test test",
      },
    ],
    newToDoTitle: "",
  };

  componentDidMount() {
    let todoListString = localStorage.getItem(TODO_LIST_KEY);
    if (todoListString) {
      this.setState({
        todoList: JSON.parse(todoListString),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.todoList !== prevState.todoList) {
      let todoListStr = JSON.stringify(this.state.todoList);
      localStorage.setItem(TODO_LIST_KEY, todoListStr);
    }
  }

  handleOnChange = (event) => {
    this.setState({ newToDoTitle: event.target.value });
  };

  handleAddToDo = () => {
    let newToDo = {
      id: shortid.generate(),
      title: this.state.newToDoTitle,
      completed: false,
      description: "",
    };
    this.setState((state) => {
      return {
        todoList: [...state.todoList, newToDo],
        newToDoTitle: "",
      };
    });
  };

  handleDeleteToDo = (id) => {
    this.setState((state) => {
      const filteredToDos = state.todoList.filter((todo) => {
        if (todo.id === id) {
          return false;
        } else {
          return true;
        }
      });
      return {
        todoList: filteredToDos,
      };
    });
  };

  handleCheckToDo = (id) => {
    this.setState((state) => {
      const newToDos = state.todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return {
        todoList: newToDos,
      };
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleAddToDo();
    }
  };

  render() {
    const styles = {
      todoContainer: {
        width: "75%",
      },
    };
    return (
      <div style={styles.todoContainer}>
        <h1>"To Do List"</h1>
        {this.state.todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteToDo={this.handleDeleteToDo}
            onCheckToDo={this.handleCheckToDo}
          ></TodoItem>
        ))}
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

export default ToDoList;
