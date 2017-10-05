import React, { Component } from "react";
import "./App.css";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          name: "Job Name",
          location: "Location",
          priority: "Priority",
          instructions: "Instructions",
          worker: "Assign Worker"
        }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
