import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        {this.props.project.name} {this.props.project.location}
        {this.props.project.priority}
        {this.props.project.instructions}
        {this.props.project.worker}
      </li>
    );
  }
}

export default ProjectItem;
