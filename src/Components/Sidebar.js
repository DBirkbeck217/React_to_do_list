import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  let name = props.user.name;
  let avatar = props.user.avatar;
  let styles = {
    backgroundColor: "lightblue",
    height: "100%",
    padding: "25%",
    width: "60%",
  };
  return (
    <div style={styles}>
      <img width="80px" src={avatar} alt="User Avatar"></img>
      <h3>{name}</h3>
      <Link to="/"> Home </Link>
      <br />
      <Link to="/todos"> To Do List</Link>
    </div>
  );
}

export default Sidebar;
