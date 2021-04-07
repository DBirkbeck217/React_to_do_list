import React from "react";

class Dashboard extends React.Component {
  state = {
    now: new Date(),
  };

  tick = () => {
    this.setState({ now: new Date() });
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
  render() {
    const styles = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      fontSize: "36px",
      alignItems: "center",
    };

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return (
      <div style={styles}>
        <h1>Today is {days[this.state.now.getDay()]}</h1>
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Dashboard;
