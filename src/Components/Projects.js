import React, { Component } from "react";
// import nodemailer from "nodemailer";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }
  componentDidMount() {
    fetch("/api/job")
      .then(data => data.json())
      .then(jobs => {
        console.log("we got jobssss", jobs);
        this.setState({ jobs });
      })
      .catch(err => {
        console.log("errrrr", err);
      });
  }
  //id times 3 where jobname should be
  deleteProject(jobName) {
    // this.props.onDelete(jobName);
    console.log(jobName);

    var newJobs = [];
    this.state.jobs.forEach(function(item) {
      if (item.jobName != jobName) {
        newJobs.push(item);
      }
    });
    console.log(this.state.jobs);
    console.log(newJobs);
    this.setState({ jobs: newJobs });
  }

  render() {
    let projectItems;
    if (this.state.jobs.length > 0) {
      projectItems = this.state.jobs.map(project => {
        // console.log(project);
        return (
          <div>
            <ProjectItem
              onDelete={this.deleteProject.bind(this)}
              key={project.name}
              project={project}
            />
            <input
              className="dispatchButton"
              type="submit"
              value="Dispatch!"
              /* onSubmit={this.handleDispatch} */
            />
          </div>
        );
      });
    }

    return <div className="Projects">{projectItems}</div>;
  }
}

export default Projects;
