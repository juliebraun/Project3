import React, { Component } from "react";
import { Col, Card } from "react-materialize";

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <Col s={12} m={12} l={12}>
        <Card
          className="blue-grey darken-1"
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
          <p>
            <a href="#">
              onClick={this.deleteProject.bind(this, this.props.project.id)}
              > X
            </a>
          </p>
        </Card>
      </Col>
    );
  }
}

export default ProjectItem;
