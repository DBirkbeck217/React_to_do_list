import React from "react";

function Sidebar(props) {
  let name = props.user.name;
  let avatar = props.user.avatar;
  return (
    <div>
      <img width="80px" src={avatar} alt="User Avatar"></img>
      <h3>{name}</h3>
    </div>
  );
}


export default Sidebar;
