import React from "react";
import { withRouter } from "react-router-dom";

const AUTHENTICATED_USER_INFO = {
  username: "user123",
  password: "password1",
};
function isValidUserInfo(username, password) {
  return (
    username.toLowerCase() === AUTHENTICATED_USER_INFO.username.toLowerCase() &&
    password === AUTHENTICATED_USER_INFO.password
  );
}

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (isValidUserInfo(this.state.username, this.state.password)) {
      console.log("its valid");
      this.props.history.push("/");
    } else {
      console.log("its invalid");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Username"
          name="username"
        ></input>
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
          name="password"
        ></input>
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

export default withRouter(Login);
