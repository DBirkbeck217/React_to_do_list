import React from "react";

class ToDoInput extends React.Component {
  state = {};
  render() {
    return (
      <form className="input">
        <label>
          <input
            value={this.state.newToDoTitle}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
          ></input>
        </label>
        <button onClick={this.handleAddToDo}> Add </button>
      </form>
    );
  }
}

export default ToDoInput;
