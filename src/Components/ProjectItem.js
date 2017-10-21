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
          title={this.props.project.jobName}
          reveal={
            <li className="Project">
              {this.props.project.location}
              {/* {this.props.project.priority} */}
              {this.props.project.instructions}
              {this.props.project.worker}
            </li>
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
