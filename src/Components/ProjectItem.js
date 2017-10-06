import React, { Component } from "react";

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        {this.props.project.name} {this.props.project.location}
        {this.props.project.priority}
        {this.props.project.instructions}
        {this.props.project.worker}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          X
        </a>
      </li>
    );
  }
}

export default ProjectItem;
