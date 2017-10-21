import React, { Component } from "react";
import uuid from "uuid";
import { Col, Row } from "react-bootstrap";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      worker: "Bubba Boy",
      jobName: "",
      location: "",
      instructions: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
      console.log("what is our new job  ", this.state);
      fetch("/api/job", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(data => data.json())
        .then(response => {
          console.log("we got a success post", response);
        })
        .catch(err => {
          console.log("errrrrr", err);
        });
    }
    e.preventDefault();
  }

  handleInputChange(e) {
    console.log("input change ", e.target.value, e.target.name);
    const prop = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [prop]: value });
  }

  render() {
    console.log("I'm a state", this.state);
    return (
      <div>
        <Row bsClass="row">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2 className="newjobHeader">Create New Job</h2>
            <form
              className="newjobForm"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <div className="newjobLabels">
                <label>Job Name</label>
                <br />
                <input
                  name="jobName"
                  type="text"
                  ref="name"
                  value={this.state.jobName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Location</label>
                <br />
                <input
                  name="location"
                  type="text"
                  ref="location"
                  value={this.state.location}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Instructions</label>
                <br />
                <input
                  name="instructions"
                  type="text"
                  ref="instructions"
                  value={this.state.instructions}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Assign Worker</label>
                <br />
                <select
                  name="worker"
                  style={{ display: "block" }}
                  ref="worker"
                  value={this.state.worker}
                  onChange={this.handleInputChange}
                >
                  {this.props.categories.map(worker => {
                    return (
                      <option key={worker} value={worker}>
                        {worker}
                      </option>
                    );
                  })}
                </select>
              </div>
              <br />
              <br />
              <input className="assignButton" type="submit" value="Assign" />
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AddProject;
