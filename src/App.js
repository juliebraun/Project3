import React, { Component } from "react";
import "./App.css";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import uuid from "uuid";

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
          id: uuid.v4(),
          name: "Job Name",
          location: "Location",
          priority: "Priority",
          instructions: "Instructions",
          worker: "Assign Worker"
        }
      ]
    });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    );
  }
}

export default App;
