import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Pigpen from "./Pigpen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Pigpen />
      </div>
    );
  }
}

export default App;
