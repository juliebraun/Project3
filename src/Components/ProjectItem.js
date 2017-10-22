import React, { Component } from "react";
import { Col, Card } from "react-materialize";

// id where jobname is
class ProjectItem extends Component {
  deleteProject(jobName) {
    this.props.onDelete(jobName);
    console.log(jobName);
  }
  render() {
    return (
      <Col s={12} m={12} l={12}>
        <Card
          className="projectItem"
          textClassName="white-text"
          title={
            <div>
              <ul className="titleProjects">
                {this.props.project.jobName}
                {this.props.project.worker}
              </ul>
            </div>
          }
          reveal={
            <ul className="Project">
              {this.props.project.location}
              <br />
              {this.props.project.instructions} <br />
              {/* {this.props.project.worker} */}
              {/* <br /> */}
            </ul>
          }
        >
          {/* id where job name is */}
          <p>
            <button
              onClick={this.deleteProject.bind(
                this,
                this.props.project.jobName
              )}
            >
              X
            </button>
          </p>
        </Card>
      </Col>
    );
  }
}

export default ProjectItem;
