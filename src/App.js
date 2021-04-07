import React from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList.js";
import Sidebar from "./Components/Sidebar.js";
import Login from "./Components/Login.js";
import avatar from "./Images/avatar.png";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "styled-components";

class App extends React.Component {
  state = {
    user: {
      name: "Dan Birkbeck",
      avatar: avatar,
    },
  };

  render() {
    const styles = {
      pageContainer: {
        display: "flex",
      },
    };
    return (
      <div style={styles.pageContainer}>
        <div id="avatar">
          <Sidebar user={this.state.user}></Sidebar>
        </div>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/todos">
            <ToDoList></ToDoList>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
