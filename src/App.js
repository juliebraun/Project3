import React, { Component } from "react";
import "./App.css";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import uuid from "uuid";
import NavBar from "./Components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
