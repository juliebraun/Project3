import React, { Component } from "react";
import uuid from "uuid";
import { Col, Row } from "react-bootstrap";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }
  static defaultProps = {
    categories: [
      "Bubba Boy",
      "Jamie Fox",
      "Santa",
      "John Helms",
      "Sallie Jones",
      "Clint Eastwood"
    ]
  };

  handleSubmit(e) {
    if (this.refs.name.value === "") {
      alert("Please enter a name for this job");
    } else if (this.refs.location.value === "") {
      alert("Please specify a location for this job");
    } else if (this.refs.instructions.value === "") {
      // else if (this.refs.priority.value === "") {
      //   alert("Please Select a priority");
      // }
      alert("Please specify instructions for this job");
    } else if (this.refs.worker.value === "") {
      alert("You must assign a worker");
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            name: this.refs.name.value,
            location: this.refs.location.value,
            // priority: this.refs.priority.value,
            instructions: this.refs.instructions.value,
            worker: this.refs.worker.value
          }
        },
        function() {
          this.props.addProject(this.state.newProject);
        }
      );
    }
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(worker => {
      return (
        <option key={worker} value={worker}>
          {worker}
        </option>
      );
    });

    // let priorityOptions = this.props.priorities.map(priority => {
    //   return (
    //     <option key={priority} value="priority">
    //       {priority}
    //     </option>
    //   );
    // });
    return (
      <div>
        <Row bsClass="row">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2>Create New Job</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <label>Job Name</label>
                <br />
                <input type="text" ref="name" />
              </div>
              <div>
                <label>Location</label>
                <br />
                <input type="text" ref="location" />
              </div>
              {/* <div>
            <label>Priority</label>
            <br />
            <select ref="priority">{priorityOptions}</select>
            <input type="text" ref="priority" />
          </div> */}
              <div>
                <label>Instructions</label>
                <br />
                <input type="text" ref="instructions" />
              </div>
              <div>
                <label>Assign Worker</label>
                <br />
                <select ref="worker">{categoryOptions}</select>
              </div>
              <br />
              <br />
              <input type="submit" value="Assign" />
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AddProject;
